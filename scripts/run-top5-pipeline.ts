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

  // 1. CARREGAR ATÉ 15 EMPRESAS CANDIDATAS DO PROSPECTOR
  const leadFolders = fs.readdirSync(leadsDir).filter(f => {
    return fs.statSync(path.join(leadsDir, f)).isDirectory();
  });

  console.log(`[FASE 2] Prospector selecionou ${leadFolders.length} empresas candidatas para auditoria completa.`);
  console.log(`[FASE 3] Executando Auditor Visual nas 15 empresas candidatas...`);

  const visualAuditorScript = path.join(rootDir, '.agents/skills/visual-auditor/scripts/audit_visual.cjs');

  // Executar auditoria visual em todas as empresas candidatas (até 15)
  for (const folder of leadFolders) {
    if (fs.existsSync(visualAuditorScript)) {
      spawnSync('node', [visualAuditorScript, folder], { stdio: 'ignore' });
    }
  }

  // 2. CONSOLIDAÇÃO DE SCORES & CÁLCULO DA CHANCE DE CONVERSÃO
  const candidates: LeadEntry[] = [];

  for (const folder of leadFolders) {
    const jsonPath = path.join(leadsDir, folder, 'lead.json');
    const handoffPath = path.join(leadsDir, folder, 'visual', 'visual-handoff.json');
    if (fs.existsSync(jsonPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        let handoff: any = null;
        if (fs.existsSync(handoffPath)) {
          handoff = JSON.parse(fs.readFileSync(handoffPath, 'utf8'));
        }

        const prospectorScore = data.scores?.opportunity || 0;
        const visualOppScore = data.scores?.redesign_opportunity || prospectorScore;
        const businessScore = data.scores?.business || 8.0;
        const gateApproved = handoff?.gateCheck?.status === 'APROVADO_PARA_BUILDER';

        // Fórmula de Chance de Conversão: 40% Prospector + 40% Oportunidade Visual + 20% Negócio
        let conversionChance = Math.round((prospectorScore * 0.4) + (visualOppScore * 0.4) + (businessScore * 2.0));
        if (!gateApproved) conversionChance -= 25; // Penaliza se não passou no gate

        data.scores.conversion_chance = conversionChance;
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');

        candidates.push({
          slug: folder,
          leadPath: jsonPath,
          data,
          score: conversionChance,
          ranking: data.ranking || 999
        });
      } catch (err: any) {
        console.warn(`[AVISO] Erro ao ler ${jsonPath}:`, err.message);
      }
    }
  }

  // Ordenar por Chance de Conversão decrescente
  candidates.sort((a, b) => b.score - a.score);

  // Selecionar os 5 LEADS com maior chance de conversão
  const top5 = candidates.slice(0, 5);

  console.log(`\n[FASE 4] Ranking Consolidado das 15 Empresas (Prospector + Auditor Visual):`);
  candidates.forEach((c, idx) => {
    const isTop5 = idx < 5 ? '★ [TOP 5]' : '  [LISTA GERAL]';
    console.log(`  ${isTop5} #${idx + 1}: ${c.data.name} -> Chance de Conversão: ${c.score}/100 | Visual: ${c.data.scores?.visual_quality || 'N/A'}/10`);
  });

  console.log('\n================================================================================');
  console.log(' OS 5 LEADS COM MAIOR CHANCE DE CONVERSÃO ENVIADOS AO BUILDER (1 DE CADA VEZ)   ');
  console.log('================================================================================\n');
  top5.forEach((l, i) => {
    console.log(`  ${i + 1}º Lugar -> [Chance: ${l.score}/100] ${l.data.name} (${l.slug})`);
  });
  console.log('\n--------------------------------------------------------------------------------\n');

  // 2. EXECUTAR BUILDER (AGENTE 2) E COMERCIAL (AGENTE 3) EM SEQUÊNCIA
  let builderCount = 0;
  let commercialCount = 0;

  for (let i = 0; i < top5.length; i++) {
    const lead = top5[i];
    const pos = i + 1;
    console.log(`>>> PROCESSANDO LEAD #${pos}: ${lead.data.name} (${lead.slug})`);

    // --- ETAPA 1.5: PROSPECTOR / AUDITOR VISUAL ---
    console.log(`  [AUDITOR VISUAL] Analisando site original, copy, fotos reais e baseline...`);
    const visualAuditorScript = path.join(rootDir, '.agents/skills/visual-auditor/scripts/audit_visual.cjs');
    if (fs.existsSync(visualAuditorScript)) {
      spawnSync('node', [visualAuditorScript, lead.slug], { stdio: 'inherit' });
    }

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

    // --- ETAPA 2.5: PROSPECTOR / AUDITOR VISUAL (VALIDAÇÃO PÓS-REDESIGN) ---
    console.log(`  [AUDITOR VISUAL] Validando Original x Redesign (Não-Regressão e Baseline)...`);
    const compareScript = path.join(rootDir, '.agents/skills/visual-auditor/scripts/compare_redesign.cjs');
    if (fs.existsSync(compareScript)) {
      spawnSync('node', [compareScript, lead.slug], { stdio: 'inherit' });
    }

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
