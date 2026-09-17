import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import { ClientConfigSchema } from '../src/clients/schema';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const leadsDir = path.join(rootDir, 'leads');
const clientDataDir = path.join(rootDir, 'src/clients/data');

interface LeadEntry {
  slug: string;
  leadPath: string;
  data: any;
  score: number;
  ranking: number;
}

async function runTop5Pipeline() {
  console.log('================================================================================');
  console.log('       PIPELINE INTEGRADO TOP 5: PROSPECTOR -> BUILDER -> COMERCIAL             ');
  console.log('================================================================================\n');

  if (!fs.existsSync(leadsDir)) {
    console.error(`[ERRO] Diretório de leads não encontrado: ${leadsDir}`);
    process.exit(1);
  }

  // 1. CARREGAR E RANQUEAR LEADS
  const leadFolders = fs.readdirSync(leadsDir).filter(f => {
    return fs.statSync(path.join(leadsDir, f)).isDirectory();
  });

  const leads: LeadEntry[] = [];

  for (const folder of leadFolders) {
    const jsonPath = path.join(leadsDir, folder, 'lead.json');
    if (fs.existsSync(jsonPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        const score = data.scores?.opportunity || 0;
        const ranking = data.ranking || 999;
        leads.push({ slug: folder, leadPath: jsonPath, data, score, ranking });
      } catch (err: any) {
        console.warn(`[AVISO] Erro ao ler ${jsonPath}:`, err.message);
      }
    }
  }

  // Ordenar por ranking (ou score decrescente)
  leads.sort((a, b) => {
    if (a.ranking !== b.ranking) return a.ranking - b.ranking;
    return b.score - a.score;
  });

  const top5 = leads.slice(0, 5);

  console.log(`[PROSPECTOR] Total de leads qualificados: ${leads.length}`);
  console.log('Top 5 Selecionados para Personalização Imediata:\n');
  top5.forEach((l, i) => {
    console.log(`  ${i + 1}º Lugar -> [Score: ${l.score}/100] ${l.data.name} (${l.slug})`);
  });
  console.log('\n--------------------------------------------------------------------------------\n');

  // 2. EXECUTAR BUILDER (AGENTE 2) E COMERCIAL (AGENTE 3) EM SEQUÊNCIA
  let builderCount = 0;
  let commercialCount = 0;

  for (let i = 0; i < top5.length; i++) {
    const lead = top5[i];
    const pos = i + 1;
    console.log(`>>> PROCESSANDO LEAD #${pos}: ${lead.data.name} (${lead.slug})`);

    // --- ETAPA AGENTE 2 (BUILDER) ---
    console.log(`  [BUILDER] Verificando personalização do site...`);
    const clientConfigFile = path.join(clientDataDir, `${lead.slug}.ts`);

    if (!fs.existsSync(clientConfigFile)) {
      console.log(`  [BUILDER] Gerando configuração inicial do cliente em src/clients/data/${lead.slug}.ts...`);
      const scaffoldScript = path.join(rootDir, '.agents/skills/astro-platform-builder/scripts/scaffold_client_config.js');
      spawnSync('node', [scaffoldScript, lead.slug], { stdio: 'inherit' });
    } else {
      console.log(`  [BUILDER] Configuração já existente em src/clients/data/${lead.slug}.ts.`);
    }

    // Validar Schema Zod
    try {
      const fileUrl = 'file:///' + clientConfigFile.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const parsed = ClientConfigSchema.safeParse(mod.default);
      if (parsed.success) {
        console.log(`  [BUILDER] Schema Zod validado com sucesso para ${lead.slug}!`);
      } else {
        console.error(`  [BUILDER] Erro de validação Zod em ${lead.slug}:`, parsed.error.issues);
      }
    } catch (err: any) {
      console.warn(`  [BUILDER] Aviso ao validar módulo: ${err.message}`);
    }

    // Gerar handoff do redesign
    const handoffScript = path.join(rootDir, '.agents/skills/builder-handoff/scripts/generate_handoff.js');
    if (fs.existsSync(handoffScript)) {
      spawnSync('node', [handoffScript, lead.slug], { stdio: 'inherit' });
    }
    builderCount++;

    // --- ETAPA AGENTE 3 (COMERCIAL) ---
    console.log(`  [COMERCIAL] Gerando dossiê comercial (resumo, email, whatsapp, objeções)...`);
    const commercialScript = path.join(rootDir, '.agents/skills/commercial-strategist/scripts/generate_commercial_dossier.js');
    if (fs.existsSync(commercialScript)) {
      spawnSync('node', [commercialScript, lead.slug], { stdio: 'inherit' });
      commercialCount++;
    }

    // Tentar gerar card Antes x Depois
    const visualScript = path.join(rootDir, '.agents/skills/visual-comparer/scripts/generate_before_after.js');
    if (fs.existsSync(visualScript)) {
      spawnSync('node', [visualScript, lead.slug], { stdio: 'inherit' });
    }

    console.log(`  [OK] Lead #${pos} finalizado com sucesso.\n`);
  }

  console.log('================================================================================');
  console.log('                       RESUMO DA EXECUÇÃO DO PIPELINE                           ');
  console.log('================================================================================');
  console.log(`Total de Leads no Top 5 Processados : ${top5.length}`);
  console.log(`Sites Personalizados pelo Builder   : ${builderCount}`);
  console.log(`Kits Comerciais Gerados             : ${commercialCount}`);
  console.log('\nTodos os 5 primeiros colocados do ranking estão prontos e aguardam aprovação humana.');
  console.log('================================================================================\n');
}

runTop5Pipeline().catch(err => {
  console.error('[ERRO FATAL NO PIPELINE]:', err);
  process.exit(1);
});
