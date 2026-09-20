export const prerender = false;

import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../../lib/supabase';
import { checkRateLimit, resetRateLimit, getClientIp } from '../../../lib/rate-limiter';

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const ip = getClientIp(request);

  // 1. Rate Limiting no Login (Máximo de 5 tentativas a cada 5 minutos por IP)
  const rateLimit = checkRateLimit('login', ip, {
    windowMs: 5 * 60 * 1000,
    maxRequests: 5
  });

  if (!rateLimit.allowed) {
    const errorMsg = `Muitas tentativas de login incorretas. Aguarde ${rateLimit.retryAfterSeconds} segundos antes de tentar novamente.`;
    return redirect(`/login?error=${encodeURIComponent(errorMsg)}`);
  }

  const formData = await request.formData();
  const email = formData.get('email')?.toString().trim().toLowerCase() || '';
  const password = formData.get('password')?.toString() || '';
  const redirectTo = formData.get('redirect')?.toString() || '/';

  if (!email || !password) {
    return redirect('/login?error=Preencha todos os campos obrigatórios.');
  }

  try {
    const supabase = getSupabaseServerClient(cookies, request);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return redirect(`/login?error=${encodeURIComponent('Credenciais inválidas. Verifique seu e-mail e senha.')}`);
    }

    // Login bem-sucedido: limpa o contador de tentativas para este IP
    resetRateLimit('login', ip);

    // Redireciona com segurança para a rota interna solicitada
    const safeRedirect = redirectTo.startsWith('/') && !redirectTo.startsWith('//') ? redirectTo : '/';
    return redirect(safeRedirect);

  } catch (err: any) {
    console.error('[AUTH LOGIN ERROR]', err);
    return redirect('/login?error=Serviço de autenticação temporariamente indisponível.');
  }
};