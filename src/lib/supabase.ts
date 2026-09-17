import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

export function getSupabaseServerClient(cookies: AstroCookies, request?: Request) {
  const supabaseUrl = import.meta.env.SUPABASE_URL || '';
  const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || '';

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