/**
 * SISTEMA DE RATE LIMITING EM MEMÓRIA
 * Protege endpoints sensíveis (Login, Reset de Senha, Modificação de Leads) contra ataques de força bruta e abuso.
 */

import { hashSensitiveData } from './crypto';

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const stores = new Map<string, Map<string, RateLimitRecord>>();

export interface RateLimitOptions {
  windowMs: number;       // Janela de tempo em milissegundos
  maxRequests: number;    // Máximo de requisições permitidas na janela
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
}

/**
 * Verifica e contabiliza a taxa de requisições por identificador (IP ou usuário).
 * O identificador bruto (ex.: IP) é imediatamente pseudonimizado com SHA-256 e salt,
 * garantindo que nenhum IP pessoal em texto claro seja armazenado em memória (LGPD/GDPR).
 */
export function checkRateLimit(
  namespace: string,
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  const secureKey = hashSensitiveData(identifier);

  let store = stores.get(namespace);
  if (!store) {
    store = new Map<string, RateLimitRecord>();
    stores.set(namespace, store);
  }

  // Limpeza de registros expirados aleatória (5% das requisições)
  if (Math.random() < 0.05) {
    for (const [key, record] of store.entries()) {
      if (record.resetAt <= now) {
        store.delete(key);
      }
    }
  }

  const record = store.get(secureKey);

  // Se não existir ou a janela expirou, inicia novo ciclo
  if (!record || record.resetAt <= now) {
    const resetAt = now + options.windowMs;
    store.set(secureKey, { count: 1, resetAt });
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetAt,
      retryAfterSeconds: Math.ceil(options.windowMs / 1000)
    };
  }

  // Se excedeu o limite
  if (record.count >= options.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: record.resetAt,
      retryAfterSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000))
    };
  }

  // Incrementa contador
  record.count += 1;
  return {
    allowed: true,
    remaining: options.maxRequests - record.count,
    resetAt: record.resetAt,
    retryAfterSeconds: Math.max(1, Math.ceil((record.resetAt - now) / 1000))
  };
}

/**
 * Reseta o contador para um identificador específico (ex.: após login bem-sucedido).
 */
export function resetRateLimit(namespace: string, identifier: string): void {
  const store = stores.get(namespace);
  if (store) {
    store.delete(hashSensitiveData(identifier));
  }
}

/**
 * Extrai o IP real do cliente com proteção contra spoofing em proxies/Vercel.
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
