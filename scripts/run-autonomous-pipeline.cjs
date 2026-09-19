/**
 * PIPELINE AUTÔNOMO UNIFICADO DE PONTA A PONTA
 * Agente 1 (Prospector) -> Auditor Visual (Top 5) -> Agente 2 (Builder) -> Agente 3 (Comercial) -> Validador Handoff
 * 
 * Uso:
 *   node scripts/run-autonomous-pipeline.cjs --nicho "Advocacia" --estado "AC"
 *   node scripts/run-autonomous-pipeline.cjs --leads "caminho/para/leads.json"
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn, spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const leadsDir = path.join(rootDir, 'leads');
const clientDataDir = path.join(rootDir, 'src/clients/data');

// Parse CLI Args
const args = process.argv.slice(2);
let customLeadsFile = null;
let targetNicho = 'Advocacia';
let targetEstado = 'AC';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--leads' && args[i + 1]) customLeadsFile = args[i + 1];
  if (args[i] === '--nicho' && args[i + 1]) targetNicho = args[i + 1];
  if (args[i] === '--estado' && args[i + 1]) targetEstado = args[i + 1];
}

console.log('='.repeat(80));
console.log('       PIPELINE AUTÔNOMO UNIFICADO DE PRODUÇÃO & REDESIGN (TOP 5 LEADS)      ');
console.log('='.repeat(80));
console.log(`Nicho: ${targetNicho} | Estado: ${targetEstado}`);
if (customLeadsFile) console.log(`Arquivo de leads customizado: ${customLeadsFile}`);
console.log('');

// 1. Obter lista de 15 candidatos
let candidates = [];
if (customLeadsFile && fs.existsSync(customLeadsFile)) {
  candidates = JSON.parse(fs.readFileSync(customLeadsFile, 'utf8'));
} else {
  // Procura se já existem leads do nicho/estado ou usa o catálogo do estado
  const stateLeadsDir = leadsDir;
  const leadFolders = fs.readdirSync(stateLeadsDir).filter(f => {
    const jsonP = path.join(stateLeadsDir, f, 'lead.json');
    return fs.existsSync(jsonP);
  });

  const matching = [];
  for (const f of leadFolders) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(stateLeadsDir, f, 'lead.json'), 'utf8'));
      const matchesState = !targetEstado || 
        data.state?.toLowerCase() === targetEstado.toLowerCase() || 
        data.city?.toLowerCase().includes(targetEstado.toLowerCase());

      const nicheLower = targetNicho.toLowerCase();
      const matchesNiche = !targetNicho ||
        data.category?.toLowerCase().includes(nicheLower) ||
        data.segment?.toLowerCase().includes(nicheLower) ||
        data.niche?.toLowerCase().includes(nicheLower) ||
        data.slug?.toLowerCase().includes(nicheLower) ||
        data.name?.toLowerCase().includes(nicheLower);

      if (matchesState && matchesNiche) {
        matching.push({
          slug: data.slug,
          name: data.name,
          legalName: data.legalName || data.name,
          city: data.city,
          address: data.address || '',
          website: data.website || '',
          instagram: data.instagram || '',
          phone: data.phone || '',
          whatsapp: data.whatsapp || '',
          segment: data.segment || data.niche || targetNicho,
          business_score: data.scores?.business || 8.5,
          pagespeed_mobile: data.pagespeed?.mobile_performance || 35,
          pagespeed_desktop: data.pagespeed?.desktop_performance || 70,
          original_design: 4.0,
          original_mobile: 3.5,
          google_rating: data.business?.googleRating || 4.9,
          years_active: 10
        });
      }
    } catch {}
  }

  if (matching.length >= 5) {
    candidates = matching;
  }
}

if (candidates.length === 0) {
  console.log(`[INFO] Nenhum lead em disco encontrado para ${targetNicho} no ${targetEstado}.`);
  console.log(`Utilize --leads <arquivo.json> para injetar 15 leads prospectados.`);
  process.exit(0);
}

console.log(`Total de empresas catalogadas: ${candidates.length}`);

// 2. Auditoria Visual e Cálculo de Notas
console.log(`\n[ETAPA 1 & 2] Auditando e ranqueando empresas para consolidar o Top 5...`);
const auditScript = path.join(rootDir, '.agents/skills/visual-auditor/scripts/audit_visual.cjs');
const scoredCandidates = [];

for (const cand of candidates) {
  const jsonPath = path.join(leadsDir, cand.slug, 'lead.json');
  let leadData = cand;
  if (fs.existsSync(jsonPath)) {
    try { leadData = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch {}
  }

  if (fs.existsSync(auditScript)) {
    spawnSync('node', [auditScript, cand.slug], { stdio: 'ignore' });
  }

  const handoffPath = path.join(leadsDir, cand.slug, 'visual', 'visual-handoff.json');
  let visualOpp = 65;
  if (fs.existsSync(handoffPath)) {
    try {
      const h = JSON.parse(fs.readFileSync(handoffPath, 'utf8'));
      if (h.redesignOpportunityScore) visualOpp = h.redesignOpportunityScore;
    } catch {}
  }

  const prospectorOpp = leadData.scores?.opportunity || 70;
  const businessScore = leadData.scores?.business || cand.business_score || 8.5;
  const conversionChance = Math.round((prospectorOpp * 0.4) + (visualOpp * 0.4) + (businessScore * 2.0));

  if (!leadData.scores) leadData.scores = {};
  leadData.scores.conversion_chance = conversionChance;
  if (fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, JSON.stringify(leadData, null, 2), 'utf8');
  }

  scoredCandidates.push({
    ...cand,
    conversionChance,
    leadData
  });
}

scoredCandidates.sort((a, b) => {
  if (a.leadData?.ranking && b.leadData?.ranking) {
    return a.leadData.ranking - b.leadData.ranking;
  }
  return b.conversionChance - a.conversionChance;
});
const top5 = scoredCandidates.slice(0, 5);

console.log(`\n================================================================================`);
console.log(`                      TOP 5 QUALIFICADOS PARA REDESIGN                          `);
console.log('================================================================================');
top5.forEach((l, i) => {
  console.log(`  ★ #${i + 1} Lugar: [Chance: ${l.conversionChance}/100] ${l.name} (${l.slug})`);
});
console.log('================================================================================\n');

// 3. Execução dos 5 leads (Geração de Dossiês e Validação)
console.log(`[ETAPA 3] Processando Dossiês e Validando Requisitos de Handoff...\n`);
const topSlugs = top5.map(t => t.slug);

// Executar validador de Handoff
const validateScript = path.join(rootDir, 'scripts/validate-handoff.ts');
const argsValidate = [
  '--import',
  'tsx/esm',
  validateScript
];
topSlugs.forEach(s => {
  argsValidate.push('--slug');
  argsValidate.push(s);
});

console.log('[VALIDADOR PRÉ-HANDOFF] Executando auditoria técnica...');
const valProc = spawnSync(process.execPath, argsValidate, { stdio: 'inherit' });

if (valProc.status !== 0) {
  console.log('\n⚠️ Alguns requisitos de handoff necessitam de atenção nos leads selecionados.');
} else {
  console.log('\n🎉 Pipeline executado com sucesso e todos os critérios cumpridos!');
}
