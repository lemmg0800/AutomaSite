import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '../src/clients/data');

async function main() {
  console.log('=== AUDITORIA DE COMPONENTES EM USO (PROTEÇÃO CONTRA REGRESSÃO) ===\n');

  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));
  const usageMap: Record<string, { published: string[]; draft: string[] }> = {};

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    try {
      const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const client = mod.default;

      const isPublished = client.status === 'published';

      for (const page of client.pages || []) {
        for (const section of page.sections || []) {
          const key = `${section.type} -> ${section.variant}`;
          if (!usageMap[key]) {
            usageMap[key] = { published: [], draft: [] };
          }
          if (isPublished) {
            if (!usageMap[key].published.includes(client.slug)) {
              usageMap[key].published.push(client.slug);
            }
          } else {
            if (!usageMap[key].draft.includes(client.slug)) {
              usageMap[key].draft.push(client.slug);
            }
          }
        }
      }
    } catch (e: any) {
      console.error(`Erro ao ler ${file}:`, e.message);
    }
  }

  console.log('--- RELATÓRIO DE VARIANTES ATIVAS ---');
  for (const [variant, data] of Object.entries(usageMap)) {
    const hasPublished = data.published.length > 0;
    const lockIcon = hasPublished ? '🔒 [CONGELADO]' : '✏️ [EM RASCUNHO]';
    console.log(`\n${lockIcon} ${variant}`);
    if (hasPublished) {
      console.log(`   Em produção por: ${data.published.join(', ')}`);
      console.log(`   ⚠️ AVISO: Não aplicar alterações destrutivas nesta variante!`);
    }
    if (data.draft.length > 0) {
      console.log(`   Em rascunho por: ${data.draft.join(', ')}`);
    }
  }

  console.log('\nAuditoria concluída com sucesso!');
}

main().catch(console.error);