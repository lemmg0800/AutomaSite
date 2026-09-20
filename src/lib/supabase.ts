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
        const raw = request?.headers?.get('cookie') || '';
        if (!raw) return [];
        return raw.split(';').map(c => {
          const [name, ...rest] = c.trim().split('=');
          return { name, value: rest.join('=') };
        });
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          try {
            cookies.set(name, value, options);
          } catch (e) {
            // Ignora se for contexto estático ou cabeçalhos já enviados
          }
        });
      }
    }
  });
}