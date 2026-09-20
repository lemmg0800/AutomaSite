export const prerender = false;

import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../../lib/supabase';

const handleLogout: APIRoute = async ({ cookies, redirect, request }) => {
  try {
    const supabase = getSupabaseServerClient(cookies, request);
    await supabase.auth.signOut();
  } catch (err) {
    console.error('[LOGOUT ERROR]', err);
  }

  // Limpeza explícita de cookies de autenticação
  try {
    cookies.delete('sb-access-token', { path: '/' });
    cookies.delete('sb-refresh-token', { path: '/' });
  } catch (e) {
    // Ignora se cabeçalhos já estiverem fechados
  }

  return redirect('/login');
};

export const POST: APIRoute = handleLogout;
export const GET: APIRoute = handleLogout;