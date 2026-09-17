import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { slug, status } = body;

    const validStatuses = ['ativo', 'aprovado', 'nao_aprovado', 'arquivado', 'draft', 'review', 'published'];

    if (!slug || !status || !validStatuses.includes(status)) {
      return new Response(JSON.stringify({ error: 'Slug e status válidos são obrigatórios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const rootDir = process.cwd();
    
    // 1. Atualizar lead.json se existir
    const leadJsonPath = path.join(rootDir, 'leads', slug, 'lead.json');
    if (fs.existsSync(leadJsonPath)) {
      try {
        const content = fs.readFileSync(leadJsonPath, 'utf8').replace(/^\uFEFF/, '');
        const data = JSON.parse(content);
        data.status = status;
        fs.writeFileSync(leadJsonPath, JSON.stringify(data, null, 2), 'utf8');
      } catch (e) {
        console.error('Erro ao atualizar lead.json:', e);
      }
    }

    // 2. Atualizar src/clients/data/[slug].ts se existir
    const clientDataPath = path.join(rootDir, 'src', 'clients', 'data', `${slug}.ts`);
    if (fs.existsSync(clientDataPath)) {
      try {
        let code = fs.readFileSync(clientDataPath, 'utf8');
        code = code.replace(/status:\s*["'][^"']+["']/, `status: "${status}"`);
        fs.writeFileSync(clientDataPath, code, 'utf8');
      } catch (e) {
        console.error('Erro ao atualizar client config.ts:', e);
      }
    }

    return new Response(JSON.stringify({ success: true, slug, status }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
