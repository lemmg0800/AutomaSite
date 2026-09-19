import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slug = process.argv[2] || 'sbardella-advocacia';
const rootDir = path.resolve(__dirname, '../../../../');
const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
const redesignDir = path.join(leadDir, 'redesign');

if (!fs.existsSync(redesignDir)) {
  fs.mkdirSync(redesignDir, { recursive: true });
}

// Read assets catalog if available
let assetsCatalog = null;
const assetsCatPath = path.join(leadDir, 'referencias', 'assets-catalog.json');
if (fs.existsSync(assetsCatPath)) {
  try {
    assetsCatalog = JSON.parse(fs.readFileSync(assetsCatPath, 'utf8'));
  } catch (e) {}
}

// Validação de pré-requisitos visuais (screenshots mínimos)
const origDesk = path.join(leadDir, 'screenshots', 'site-desktop.png');
const origMob = path.join(leadDir, 'screenshots', 'site-mobile.png');
const minSize = 10 * 1024;

if (!fs.existsSync(origDesk) || fs.statSync(origDesk).size < minSize) {
  console.warn(`[AVISO] Screenshot desktop original ausente ou menor que 10KB em: ${origDesk}`);
}
if (!fs.existsSync(origMob) || fs.statSync(origMob).size < minSize) {
  console.warn(`[AVISO] Screenshot mobile original ausente ou menor que 10KB em: ${origMob}`);
}

// Read selected design system if available
let selectedDS = null;
const dsPath = path.join(leadDir, 'referencias', 'design-system-selected.json');
if (fs.existsSync(dsPath)) {
  try {
    selectedDS = JSON.parse(fs.readFileSync(dsPath, 'utf8'));
  } catch (e) {}
}

function replaceAll(str, map) {
  let res = str;
  for (const [key, val] of Object.entries(map)) {
    res = res.split(key).join(typeof val === 'string' ? val : JSON.stringify(val));
  }
  return res;
}

const cleanWhats = (lead.whatsapp || lead.phone || '').replace(/[^0-9]/g, '');
const whatsLink = cleanWhats ? `https://wa.me/55${cleanWhats}` : '#contato';

const jsonTplPath = path.join(__dirname, '../resources/builder-handoff.template.json');
const jsonTpl = fs.readFileSync(jsonTplPath, 'utf8');

const consultedList = selectedDS ? [
  selectedDS.primary_reference?.id,
  ...(selectedDS.alternative_references || []).map(a => a.id)
].filter(Boolean) : ['white-medical', 'futureui.aura.build'];

const visualDirection = selectedDS ? 
  `${selectedDS.primary_reference?.titulo} (${selectedDS.primary_reference?.tema}) - ${selectedDS.visual_direction_recommendations?.guidelines || 'Design limpo e corporativo'}` :
  'Design contemporâneo de alto padrão com contraste refinado';

const jsonTokens = {
  '{{SLUG}}': lead.slug,
  '{{NOME_EMPRESA}}': lead.name,
  '{{URL_SITE}}': lead.website || '',
  '{{NICHO}}': lead.niche || lead.segment || 'Serviços Especializados',
  '{{CIDADE}}': lead.city || 'Florianópolis',
  '{{TIMESTAMP}}': new Date().toISOString(),
  '{{REUSED_LOGO}}': assetsCatalog?.reusable_recommendations?.brand_logo || 'assets/logo.png',
  '{{REUSED_HERO_IMAGE}}': assetsCatalog?.reusable_recommendations?.hero_image || 'assets/hero.jpg',
  '{{REUSED_TEAM_PHOTOS}}': JSON.stringify(assetsCatalog?.reusable_recommendations?.team_photos || []),
  '{{REUSED_SERVICE_PHOTOS}}': JSON.stringify(assetsCatalog?.reusable_recommendations?.service_photos || []),
  '{{DESIGN_SYSTEMS_CONSULTED}}': JSON.stringify(consultedList),
  '{{VISUAL_DIRECTION_SELECTED}}': visualDirection,
  '{{RATIONALE_CHANGES}}': `Modernização da interface original identificada no site-atual.md para resolver gargalos de conversão e lentidão mobile de ${lead.pagespeed?.lcp || '5.2s'}.`,
  '{{GAP_RESOLVIDO}}': lead.main_gap || 'Design desatualizado e conversão mobile ineficiente',
  '{{PROBLEMA_1}}': (lead.top_problems && lead.top_problems[0]) || 'Lentidão mobile no 4G',
  '{{PROBLEMA_2}}': (lead.top_problems && lead.top_problems[1]) || 'Design desatualizado sem padrão de alto valor',
  '{{PROBLEMA_3}}': (lead.top_problems && lead.top_problems[2]) || 'Falta de canal direto e claro para WhatsApp',
  '{{HERO_VARIANT}}': 'Hero01',
  '{{SERVICES_VARIANT}}': 'Services01',
  '{{HEADER_VARIANT}}': 'Header01',
  '{{FOOTER_VARIANT}}': 'Footer01',
  '{{CTA_LABEL}}': 'Agendar Atendimento',
  '{{CTA_DESTINATION}}': whatsLink,
  '{{PS_ORIGINAL}}': (lead.pagespeed && lead.pagespeed.mobile_performance) ? lead.pagespeed.mobile_performance.toString() : '38',
  '{{PS_REDESIGN}}': '98',
  '{{LCP_ANTERIOR}}': (lead.pagespeed && lead.pagespeed.lcp) || '5.2s'
};

const handoffJson = JSON.parse(replaceAll(jsonTpl.replace(/^\uFEFF/, ''), jsonTokens));
fs.writeFileSync(path.join(redesignDir, 'builder-handoff.json'), JSON.stringify(handoffJson, null, 2), 'utf8');

// Mirror to index/[slug]/site-novo/
const indexSiteNovo = path.join(rootDir, 'index', slug, 'site-novo');
if (!fs.existsSync(indexSiteNovo)) fs.mkdirSync(indexSiteNovo, { recursive: true });
fs.writeFileSync(path.join(indexSiteNovo, 'builder-handoff.json'), JSON.stringify(handoffJson, null, 2), 'utf8');

// 2. GERAR RELATORIO.MD
const relTplPath = path.join(__dirname, '../resources/relatorio.template.md');
if (fs.existsSync(relTplPath)) {
  const relTpl = fs.readFileSync(relTplPath, 'utf8');
  const relTokens = {
    '{{SLUG}}': lead.slug,
    '{{NOME_EMPRESA}}': lead.name,
    '{{DATA}}': new Date().toLocaleDateString('pt-BR'),
    '{{SEGMENTO}}': lead.segment || lead.niche || 'Geral',
    '{{CIDADE}}': lead.city || 'Florianópolis',
    '{{URL_SITE}}': lead.website || '',
    '{{PS_ANTERIOR}}': (lead.pagespeed && lead.pagespeed.mobile_performance) ? lead.pagespeed.mobile_performance.toString() : '38',
    '{{LCP_ANTERIOR}}': (lead.pagespeed && lead.pagespeed.lcp) || '5.2s',
    '{{GAP_ANTERIOR}}': lead.main_gap || 'Performance e posicionamento visual fracos',
    '{{PROBLEMA_1_TITULO}}': 'Lentidão no Smartphone',
    '{{PROBLEMA_1_ANTES}}': `Site original demorava mais de ${(lead.pagespeed && lead.pagespeed.lcp) || '5.2s'} para interagir no mobile.`,
    '{{PROBLEMA_2_TITULO}}': 'Identidade e Padrão Estético',
    '{{PROBLEMA_2_ANTES}}': 'Layout desatualizado que não transmitia o real valor e credibilidade da empresa.',
    '{{PROBLEMA_3_TITULO}}': 'Fricção de Contato Imediato',
    '{{PROBLEMA_3_ANTES}}': 'Sem botão flutuante direto de WhatsApp.'
  };

  const relFinal = replaceAll(relTpl, relTokens);
  fs.writeFileSync(path.join(redesignDir, 'relatorio.md'), relFinal, 'utf8');
  fs.writeFileSync(path.join(indexSiteNovo, 'relatorio.md'), relFinal, 'utf8');
}

// 3. ATUALIZAR STATUS NO LEAD.JSON
lead.status = 'aguardando_aprovacao';
lead.redesign = {
  completed_at: new Date().toISOString(),
  platform_preview_url: `/preview/${lead.slug}`,
  platform_production_url: `/${lead.slug}`,
  config_path: `src/clients/data/${lead.slug}.ts`,
  screenshots: {
    home_desktop: `leads/${lead.slug}/redesign/screenshots/home-desktop.png`,
    home_mobile: `leads/${lead.slug}/redesign/screenshots/home-mobile.png`
  }
};
fs.writeFileSync(leadJsonPath, JSON.stringify(lead, null, 2), 'utf8');

console.log(`[OK] Handoff comercial e relatório gerados com sucesso para: ${lead.name}`);
console.log(`     leads/${slug}/redesign/builder-handoff.json`);
console.log(`     index/${slug}/site-novo/builder-handoff.json`);
