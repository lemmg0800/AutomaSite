export const prerender = false;

import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  const assetPath = params.path;

  if (!slug || !assetPath) {
    return new Response('Asset não encontrado', { status: 404 });
  }

  const rootDir = process.cwd();
  const fullPath = path.join(rootDir, 'leads', slug, assetPath);

  const normalized = path.normalize(fullPath);
  const expectedDir = path.normalize(path.join(rootDir, 'leads', slug));
  if (!normalized.startsWith(expectedDir)) {
    return new Response('Acesso negado', { status: 403 });
  }

  if (!fs.existsSync(normalized)) {
    return new Response('Imagem não encontrada', { status: 404 });
  }

  const ext = path.extname(normalized).toLowerCase();
  let contentType = 'image/png';
  if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  if (ext === '.svg') contentType = 'image/svg+xml';
  if (ext === '.webp') contentType = 'image/webp';
  if (ext === '.json') contentType = 'application/json';

  const buffer = fs.readFileSync(normalized);
  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
