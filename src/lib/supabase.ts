import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

export function getSupabaseServerClient(cookies: AstroCookies, request?: Request) {
  const supabaseUrl = import.meta.env.SUPABASE_URL || (typeof process !== 'undefined' ? process.env.SUPABASE_URL : '');
  const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || (typeof process !== 'undefined' ? process.env.SUPABASE_ANON_KEY : '');

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Configuração do Supabase incompleta no ambiente do servidor. Verifique as variáveis de ambiente.');
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
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