import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../../../');

const slug = process.argv[2] || 'pedro-de-queiroz-advocacia';
const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));

// Handoff do Builder
let handoff = null;
const handoffPath = path.join(leadDir, 'redesign/builder-handoff.json');
if (fs.existsSync(handoffPath)) {
  try {
    handoff = JSON.parse(fs.readFileSync(handoffPath, 'utf8'));
  } catch (e) {}
}

const commDir = path.join(leadDir, 'commercial');
if (!fs.existsSync(commDir)) {
  fs.mkdirSync(commDir, { recursive: true });
}

function replaceAll(str, map) {
  let res = str;
  for (const [key, val] of Object.entries(map)) {
    res = res.split(key).join(val !== undefined && val !== null ? val.toString() : '');
  }
  return res;
}

const cleanWhats = (lead.whatsapp || lead.phone || '').trim();
const psOrig = (lead.pagespeed && lead.pagespeed.mobile_performance) ? lead.pagespeed.mobile_performance.toString() : '44';
const psRedesign = (handoff && handoff.pagespeed && handoff.pagespeed.redesign_mobile) ? handoff.pagespeed.redesign_mobile : '98';
const lcpOrig = (lead.pagespeed && lead.pagespeed.lcp) ? lead.pagespeed.lcp : '4.5s';
const fcpOrig = (lead.pagespeed && lead.pagespeed.fcp) ? lead.pagespeed.fcp : '2.7s';

const prob1 = (lead.top_problems && lead.top_problems[0]) || 'Design baseado em tema genérico que enfraquece a autoridade';
const prob2 = (lead.top_problems && lead.top_problems[1]) || 'Ausência de canal direto e visível para contato rápido no WhatsApp';
const prob3 = (lead.top_problems && lead.top_problems[2]) || 'Navegação mobile lenta com elementos de baixo contraste';

const previewUrl = `https://meudominio.com/preview/${lead.slug}`;
const prodUrl = `https://meudominio.com/${lead.slug}`;

const tokens = {
  '{{SLUG}}': lead.slug,
  '{{NOME_EMPRESA}}': lead.name,
  '{{NICHO}}': lead.segment || lead.niche || 'Serviços Especializados',
  '{{CIDADE}}': lead.city || 'Florianópolis',
  '{{URL_SITE}}': lead.website || '',
  '{{URL_PREVIEW}}': previewUrl,
  '{{URL_PRODUCAO}}': prodUrl,
  '{{URL_DEMO}}': previewUrl,
  '{{CONTATO_WHATSAPP}}': cleanWhats || 'Não informado',
  '{{DIAGNOSTICO_RESUMO}}': lead.main_gap || 'O site atual apresenta lentidão no smartphone e não reflete adequadamente o prestígio e autoridade da empresa.',
  '{{PROBLEMA_1_TITULO}}': 'Percepção de Autoridade no Primeiro Acesso',
  '{{PROBLEMA_1_DESC}}': prob1,
  '{{PROBLEMA_1_RESUMO}}': 'o visual da primeira tela não reflete o porte e a sofisticação que vocês apresentam no atendimento presencial.',
  '{{PROBLEMA_2_TITULO}}': 'Fricção de Contato Imediato',
  '{{PROBLEMA_2_DESC}}': prob2,
  '{{PROBLEMA_2_RESUMO}}': 'o botão para tirar dúvidas no WhatsApp fica escondido, exigindo rolagem e esforço do visitante.',
  '{{PROBLEMA_3_TITULO}}': 'Performance e Carregamento no 4G',
  '{{PROBLEMA_3_DESC}}': prob3,
  '{{PROBLEMA_3_RESUMO}}': `o carregamento no celular demora mais de ${lcpOrig}, gerando desistência antes mesmo da leitura.`,
  '{{PS_ORIGINAL}}': psOrig,
  '{{PS_REDESIGN}}': psRedesign,
  '{{LCP_ORIGINAL}}': lcpOrig,
  '{{FCP_ORIGINAL}}': fcpOrig,
  '{{ARGUMENTO_PRINCIPAL}}': lead.commercial_hook || `Sua autoridade e relevância em ${lead.city} não estão refletidas visualmente na primeira impressão do site.`,
  '{{TIMESTAMP}}': new Date().toISOString()
};

const resDir = path.join(__dirname, '../resources');

// 1. commercial-summary.md
const sumTpl = fs.readFileSync(path.join(resDir, 'commercial-summary.template.md'), 'utf8');
fs.writeFileSync(path.join(commDir, 'commercial-summary.md'), replaceAll(sumTpl.replace(/^\uFEFF/, ''), tokens), 'utf8');

// 2. email.md
const emailTpl = fs.readFileSync(path.join(resDir, 'email.template.md'), 'utf8');
fs.writeFileSync(path.join(commDir, 'email.md'), replaceAll(emailTpl.replace(/^\uFEFF/, ''), tokens), 'utf8');

// 3. whatsapp.md
const whatsTpl = fs.readFileSync(path.join(resDir, 'whatsapp.template.md'), 'utf8');
fs.writeFileSync(path.join(commDir, 'whatsapp.md'), replaceAll(whatsTpl.replace(/^\uFEFF/, ''), tokens), 'utf8');

// 4. whatsapp-points.md
const ptsTpl = fs.readFileSync(path.join(resDir, 'whatsapp-points.template.md'), 'utf8');
fs.writeFileSync(path.join(commDir, 'whatsapp-points.md'), replaceAll(ptsTpl.replace(/^\uFEFF/, ''), tokens), 'utf8');

// 5. objections.md
const objTpl = fs.readFileSync(path.join(resDir, 'objections.template.md'), 'utf8');
fs.writeFileSync(path.join(commDir, 'objections.md'), replaceAll(objTpl.replace(/^\uFEFF/, ''), tokens), 'utf8');

// 6. evidence.json
const eviTpl = fs.readFileSync(path.join(resDir, 'evidence.template.json'), 'utf8');
fs.writeFileSync(path.join(commDir, 'evidence.json'), replaceAll(eviTpl.replace(/^\uFEFF/, ''), tokens), 'utf8');

// Atualiza status no lead.json
lead.commercial = {
  status: 'pronto_para_aprovacao_humana',
  generated_at: new Date().toISOString(),
  dossier_path: `leads/${lead.slug}/commercial/`,
  summary: `leads/${lead.slug}/commercial/commercial-summary.md`,
  email: `leads/${lead.slug}/commercial/email.md`,
  whatsapp: `leads/${lead.slug}/commercial/whatsapp.md`
};
fs.writeFileSync(leadJsonPath, JSON.stringify(lead, null, 2), 'utf8');

console.log(`✅ [OK] Dossiê comercial completo gerado com sucesso para: ${lead.name}`);
console.log(`Arquivos disponíveis em: leads/${slug}/commercial/`);
