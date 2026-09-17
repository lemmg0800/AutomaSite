export const prerender = false;

import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';
  const redirectTo = formData.get('redirect')?.toString() || '/';

  if (!email || !password) {
    return redirect('/login?error=Preencha todos os campos');
  }

  const supabase = getSupabaseServerClient(cookies, request);
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  return redirect(redirectTo);
};