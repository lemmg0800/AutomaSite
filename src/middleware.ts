import { defineMiddleware } from 'astro:middleware';
import { getSupabaseServerClient } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Ignorar ativos estáticos, favicon e endpoints internos
  if (
    pathname.startsWith('/_astro') || 
    pathname.startsWith('/assets') || 
    pathname.includes('.') ||
    pathname.startsWith('/api/auth')
  ) {
    return next();
  }

  const isProtectedPath = pathname === '/' || pathname.startsWith('/preview');
  const isLoginPage = pathname === '/login';

  // Se for página pública de cliente (/[slug]) ou conter ?bypass=1 (para ferramentas de captura), pula auth
  const hasBypass = context.url.searchParams.get('bypass') === '1' || process.env.NODE_ENV === 'development' && context.url.searchParams.get('preview') === 'true';
  if ((!isProtectedPath || hasBypass) && !isLoginPage) {
    return next();
  }

  try {
    const supabase = getSupabaseServerClient(context.cookies, context.request);
    const { data: { user } } = await supabase.auth.getUser();

    if (isProtectedPath && !user) {
      const redirectUrl = pathname === '/' ? '/login' : `/login?redirect=${encodeURIComponent(pathname)}`;
      return context.redirect(redirectUrl);
    }

    if (isLoginPage && user) {
      return context.redirect('/');
    }
  } catch (err) {
    console.error('Erro na checagem de sessão:', err);
    if (isProtectedPath) {
      return context.redirect('/login');
    }
  }

  return next();
});