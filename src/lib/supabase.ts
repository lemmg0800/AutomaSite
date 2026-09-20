import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

import https from 'https';

/**
 * Fetch customizado resiliente para chamadas internas do Node ao Supabase,
 * contornando restrições de certificados intermediários locais do Windows sem comprometer a produção.
 */
const supabaseCustomFetch: typeof fetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  if (typeof window !== 'undefined') {
    return fetch(input, init);
  }

  return new Promise((resolve, reject) => {
    try {
      const targetUrl = typeof input === 'string' ? input : input instanceof URL ? input.toString() : (input as Request).url;
      const u = new URL(targetUrl);
      
      const reqHeaders: Record<string, string> = {};
      if (init?.headers) {
        if (init.headers instanceof Headers) {
          init.headers.forEach((v, k) => { reqHeaders[k] = v; });
        } else if (Array.isArray(init.headers)) {
          init.headers.forEach(([k, v]) => { reqHeaders[k] = v; });
        } else {
          Object.assign(reqHeaders, init.headers);
        }
      }

      const req = https.request({
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || (u.protocol === 'https:' ? 443 : 80),
        path: u.pathname + u.search,
        method: init?.method || 'GET',
        headers: reqHeaders,
        rejectUnauthorized: process.env.NODE_ENV === 'production'
      }, (res) => {
        const chunks: Buffer[] = [];
        res.on('data', chunk => chunks.push(chunk));
        res.on('end', () => {
          const body = Buffer.concat(chunks);
          const responseHeaders = new Headers();
          for (const [key, value] of Object.entries(res.headers)) {
            if (value) {
              if (Array.isArray(value)) {
                value.forEach(v => responseHeaders.append(key, v));
              } else {
                responseHeaders.set(key, value);
              }
            }
          }

          resolve(new Response(body, {
            status: res.statusCode || 200,
            statusText: res.statusMessage || '',
            headers: responseHeaders
          }));
        });
      });

      req.on('error', reject);

      if (init?.body) {
        if (typeof init.body === 'string') {
          req.write(init.body);
        } else if (Buffer.isBuffer(init.body)) {
          req.write(init.body);
        } else if (init.body instanceof Uint8Array) {
          req.write(Buffer.from(init.body));
        } else {
          req.write(String(init.body));
        }
      }

      req.end();
    } catch (e) {
      reject(e);
    }
  });
};

export function getSupabaseServerClient(cookies: AstroCookies, request?: Request) {
  const supabaseUrl = import.meta.env.SUPABASE_URL || (typeof process !== 'undefined' ? process.env.SUPABASE_URL : '');
  const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || (typeof process !== 'undefined' ? process.env.SUPABASE_ANON_KEY : '');

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Configuração do Supabase incompleta no ambiente do servidor. Verifique as variáveis de ambiente.');
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: supabaseCustomFetch
    },
    cookies: {
      getAll() {
        const cookieList: { name: string; value: string }[] = [];
        const seen = new Set<string>();

        // 1. Prioriza leitura do header raw da requisição se disponível
        const raw = request?.headers?.get('cookie') || '';
        if (raw) {
          raw.split(';').forEach(c => {
            const [name, ...rest] = c.trim().split('=');
            if (name) {
              const cleanName = name.trim();
              seen.add(cleanName);
              cookieList.push({ name: cleanName, value: rest.join('=') });
            }
          });
        }

        // 2. Complementa com cookies do AstroCookies caso ainda não listados
        try {
          // AstroCookies permite verificar cookies conhecidos do Supabase caso não estejam no header
          const commonSupabaseKeys = ['sb-access-token', 'sb-refresh-token'];
          for (const key of commonSupabaseKeys) {
            if (!seen.has(key) && cookies?.has?.(key)) {
              const val = cookies.get(key)?.value;
              if (val) {
                cookieList.push({ name: key, value: val });
                seen.add(key);
              }
            }
          }
        } catch {
          // Fallback seguro
        }

        return cookieList;
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          try {
            cookies.set(name, value, {
              path: '/',
              sameSite: 'lax',
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              ...options
            });
          } catch (e) {
            // Ignora se for contexto estático ou cabeçalhos já enviados
          }
        });
      }
    }
  });
}