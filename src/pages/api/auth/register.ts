export const prerender = false;

import type { APIRoute } from 'astro';
import { getSupabaseServerClient } from '../../../lib/supabase';
import { checkRateLimitAsync, createRateLimitResponse, getClientIp } from '../../../lib/rate-limiter';

export const POST: APIRoute = async ({ request, cookies }) => {
  const ip = getClientIp(request);

  // 1. Rate Limiting Estrito: Máximo de 3 tentativas de cadastro por hora por IP (Proteção contra bots e spam de contas)
  const rateLimit = await checkRateLimitAsync('register', ip, {
    windowMs: 60 * 60 * 1000, // 1 hora
    maxRequests: 3
  });

  if (!rateLimit.allowed) {
    return createRateLimitResponse(
      rateLimit,
      `Muitas contas criadas recentemente a partir deste endereço. Tente novamente em ${Math.ceil(rateLimit.retryAfterSeconds / 60)} minutos.`
    );
  }

  try {
    const body = await request.json().catch(() => ({}));
    const email = (body.email || '').toString().trim().toLowerCase();
    const password = (body.password || '').toString();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Informe um e-mail válido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!password || password.length < 8) {
      return new Response(JSON.stringify({ error: 'A senha deve conter no mínimo 8 caracteres.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const supabase = getSupabaseServerClient(cookies, request);
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Cadastro iniciado com sucesso. Verifique seu e-mail para confirmação.',
      userId: data.user?.id
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[REGISTER ERROR]', err);
    return new Response(JSON.stringify({ error: 'Serviço de cadastro temporariamente indisponível.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
