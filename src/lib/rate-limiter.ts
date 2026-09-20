/**
 * SISTEMA AVANÇADO DE RATE LIMITING E PROTEÇÃO CONTRA ABUSO
 * Suporta:
 * 1. Upstash Redis REST API (quando configurado via UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN).
 * 2. Fallback de Alta Performance em Memória com Janela Deslizante.
 * 3. Limitação Dupla: Por IP (pseudonimizado via SHA-256) e por Usuário Autenticado.
 * 4. Respostas padronizadas HTTP 429 Too Many Requests com cabeçalhos Retry-After e X-RateLimit.
 */

import { hashSensitiveData } from './crypto';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const localStores = new Map<string, Map<string, RateLimitRecord>>();

export interface RateLimitOptions {
  windowMs: number;          // Janela de tempo em milissegundos
  maxRequests: number;       // Máximo de requisições permitidas na janela
  userId?: string | null;    // ID do usuário autenticado para limitação composta
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
}

/**
 * Consulta ou executa o rate limit via Upstash Redis REST API se configurado.
 */
async function checkUpstashRateLimit(
  key: string,
  options: RateLimitOptions
): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null; // Upstash não configurado, segue para o fallback local
  }

  try {
    const windowSeconds = Math.max(1, Math.ceil(options.windowMs / 1000));

    // Pipeline atômica: INCR + EXPIRE (se for primeira chave)
    const pipelineRes = await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        ['INCR', key],
        ['TTL', key]
      ]),
      signal: AbortSignal.timeout(1500) // Timeout agressivo de 1.5s para não onerar o fluxo
    });

    if (!pipelineRes.ok) return null;

    const data = await pipelineRes.json();
    const count = typeof data[0]?.result === 'number' ? data[0].result : 1;
    let ttl = typeof data[1]?.result === 'number' ? data[1].result : -1;

    // Se a chave não tinha TTL definido, define agora
    if (ttl <= 0) {
      ttl = windowSeconds;
      await fetch(`${url}/expire/${encodeURIComponent(key)}/${windowSeconds}`, {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => {});
    }

    const allowed = count <= options.maxRequests;
    const remaining = Math.max(0, options.maxRequests - count);
    const resetAt = Date.now() + (ttl * 1000);

    return {
      allowed,
      limit: options.maxRequests,
      remaining,
      resetAt,
      retryAfterSeconds: Math.max(1, ttl)
    };

  } catch (err) {
    console.warn('[RATE LIMIT] Falha na conexão com Upstash Redis, utilizando engine local:', err);
    return null;
  }
}

/**
 * Rate Limiter Local em Memória (Janela Deslizante com Chaves Hasheadas).
 */
function checkLocalRateLimit(
  namespace: string,
  key: string,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();

  let store = localStores.get(namespace);
  if (!store) {
    store = new Map<string, RateLimitRecord>();
    localStores.set(namespace, store);
  }

  // Limpeza de registros expirados (5% de probabilidade)
  if (Math.random() < 0.05) {
    for (const [k, record] of store.entries()) {
      if (record.resetAt <= now) {
        store.delete(k);
      }
    }
  }

  const record = store.get(key);

  if (!record || record.resetAt <= now) {
    const resetAt = now + options.windowMs;
    store.set(key, { count: 1, resetAt });
    return {
      allowed: true,
      limit: options.maxRequests,
      remaining: options.maxRequests - 1,
      resetAt,
      retryAfterSeconds: Math.ceil(options.windowMs / 1000)
    };
  }

  if (record.count >= options.maxRequests) {
    return {
      allowed: false,
      limit: options.maxRequests,
      remaining: 0,
      resetAt: record.resetAt,
      retryAfterSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000))
    };
  }

  record.count += 1;
  return {
    allowed: true,
    limit: options.maxRequests,
    remaining: options.maxRequests - record.count,
    resetAt: record.resetAt,
    retryAfterSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000))
  };
}

/**
 * Verifica e aplica o Rate Limiting.
 * Suporta verificação composta (por IP pseudonimizado e por ID de Usuário).
 */
export async function checkRateLimitAsync(
  namespace: string,
  identifier: string,
  options: RateLimitOptions
): Promise<RateLimitResult> {
  const secureKey = `rl:${namespace}:${hashSensitiveData(identifier)}`;

  // 1. Tenta Upstash Redis primeiro (se configurado)
  const upstashResult = await checkUpstashRateLimit(secureKey, options);
  if (upstashResult) {
    // Se foi fornecido userId e o IP passou, valida também o limite por usuário
    if (options.userId) {
      const userKey = `rl:${namespace}:user:${hashSensitiveData(options.userId)}`;
      const userResult = await checkUpstashRateLimit(userKey, options);
      if (userResult && !userResult.allowed) {
        return userResult;
      }
    }
    return upstashResult;
  }

  // 2. Engine Local em Memória
  const localResult = checkLocalRateLimit(namespace, secureKey, options);

  // Se o IP passou e temos usuário autenticado, verifica quota do usuário
  if (options.userId && localResult.allowed) {
    const userKey = `user:${hashSensitiveData(options.userId)}`;
    const userLocal = checkLocalRateLimit(`${namespace}:user`, userKey, options);
    if (!userLocal.allowed) {
      return userLocal;
    }
  }

  return localResult;
}

/**
 * Versão síncrona para compatibilidade retroativa com middleware local.
 */
export function checkRateLimit(
  namespace: string,
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  const secureKey = `rl:${namespace}:${hashSensitiveData(identifier)}`;
  return checkLocalRateLimit(namespace, secureKey, options);
}

/**
 * Reseta o contador para um identificador específico.
 */
export function resetRateLimit(namespace: string, identifier: string): void {
  const secureKey = `rl:${namespace}:${hashSensitiveData(identifier)}`;
  const store = localStores.get(namespace);
  if (store) {
    store.delete(secureKey);
  }
}

/**
 * Constrói uma resposta padronizada HTTP 429 Too Many Requests com cabeçalhos completos.
 */
export function createRateLimitResponse(
  result: RateLimitResult,
  customMessage?: string
): Response {
  const body = {
    error: 'Too Many Requests',
    message: customMessage || `Limite de requisições excedido. Tente novamente em ${result.retryAfterSeconds} segundos.`,
    retryAfter: result.retryAfterSeconds,
    limit: result.limit
  };

  return new Response(JSON.stringify(body), {
    status: 429,
    headers: {
      'Content-Type': 'application/json',
      'Retry-After': result.retryAfterSeconds.toString(),
      'X-RateLimit-Limit': result.limit.toString(),
      'X-RateLimit-Remaining': result.remaining.toString(),
      'X-RateLimit-Reset': Math.ceil(result.resetAt / 1000).toString()
    }
  });
}

/**
 * Extrai com segurança o IP real do cliente.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  return '127.0.0.1';
}
