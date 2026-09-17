import { createServerClient } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

export function getSupabaseServerClient(cookies: AstroCookies, request?: Request) {
  const supabaseUrl = import.meta.env.SUPABASE_URL || (typeof process !== 'undefined' ? process.env.SUPABASE_URL : '') || 'https://rerpdrklkqfsfvinujyt.supabase.co';
  const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || (typeof process !== 'undefined' ? process.env.SUPABASE_ANON_KEY : '') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcnBkcmtsa3Fmc2Z2aW51anl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2MDY3NjQsImV4cCI6MjEwNTE4Mjc2NH0.aCP8T3B8qbOIY-mxkBR41yzoRpb3D1fVd6BW5BeLK98';

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