export const prerender = false;

import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../../lib/supabase';
import { checkRateLimit, getClientIp } from '../../../lib/rate-limiter';

export const POST: APIRoute = async ({ request, cookies }) => {
  const ip = getClientIp(request);

  // Rate limiting estrito para recuperação de senha (Máximo de 3 solicitações a cada 15 minutos por IP)
  const rateLimit = checkRateLimit('password-recovery', ip, {
    windowMs: 15 * 60 * 1000,
    maxRequests: 3
  });

  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({ 
        error: 'Muitas solicitações de recuperação de senha. Tente novamente mais tarde.',
        retryAfter: rateLimit.retryAfterSeconds 
      }), 
      {
        status: 429,
        headers: { 
          'Content-Type': 'application/json',
          'Retry-After': rateLimit.retryAfterSeconds.toString()
        }
      }
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const email = (body.email || '').toString().trim().toLowerCase();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Informe um e-mail válido.' }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const supabase = getSupabaseServerClient(cookies, request);
    await supabase.auth.resetPasswordForEmail(email);

    // Resposta genérica para mitigar enumeração de contas
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Se o e-mail informado estiver cadastrado, você receberá instruções de recuperação.' 
      }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('[PASSWORD RESET ERROR]', err);
    return new Response(
      JSON.stringify({ error: 'Não foi possível processar a recuperação no momento.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
