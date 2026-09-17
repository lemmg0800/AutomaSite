import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
let slug = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
}

if (!slug) {
  console.error('Uso: node extract_structure.js --slug "cliente-slug"');
  process.exit(1);
}

const baseDir = process.cwd();
const htmlPathLeads = path.join(baseDir, 'leads', slug, 'referencias', 'site-baixado', 'index.html');
const htmlPathIndex = path.join(baseDir, 'index', slug, 'referencias', 'site-baixado', 'index.html');

let htmlPath = '';
if (fs.existsSync(htmlPathLeads)) htmlPath = htmlPathLeads;
else if (fs.existsSync(htmlPathIndex)) htmlPath = htmlPathIndex;

if (!htmlPath) {
  console.error(`[Structure Extractor] index.html não encontrado para o slug: ${slug}`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');

// Simple regex parser for tags
function cleanText(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function extractHeadings(content) {
  const hRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
  const headings = [];
  let m;
  while ((m = hRegex.exec(content)) !== null) {
    const text = cleanText(m[1]);
    if (text) headings.push(text);
  }
  return headings;
}

function extractParagraphs(content) {
  const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
  const paras = [];
  let m;
  while ((m = pRegex.exec(content)) !== null) {
    const text = cleanText(m[1]);
    if (text && text.length > 10) paras.push(text);
  }
  return paras;
}

function extractCTAs(content) {
  const ctaRegex = /<(?:a|button)[^>]*>(.*?)<\/(?:a|button)>/gi;
  const ctas = [];
  let m;
  while ((m = ctaRegex.exec(content)) !== null) {
    const text = cleanText(m[1]);
    if (text && text.length < 40 && !text.includes('http')) ctas.push(text);
  }
  return ctas;
}

const headings = extractHeadings(html);
const paragraphs = extractParagraphs(html);
const ctas = extractCTAs(html);

const heroTitle = headings[0] || 'Bem-vindo à nossa empresa';
const heroSub = paragraphs[0] || 'Soluções personalizadas com excelência e qualidade.';
const heroCta = ctas[0] || 'Fale Conosco no WhatsApp';

const mdLines = [
  `# ESTRUTURA E COPY DO SITE ATUAL — ${slug.toUpperCase()}`,
  ``,
  `> Documento gerado automaticamente como referência única de Conteúdo e Estrutura Original.`,
  ``,
  `---`,
  ``,
  `# DOBRA 1 — HERO (PRIMEIRA DOBRA)`,
  ``,
  `**Copy Original:**`,
  `- **Headline:** "${heroTitle}"`,
  `- **Subheadline:** "${heroSub}"`,
  `- **CTA:** "${heroCta}"`,
  ``,
  `**Elementos Visuais Identificados:**`,
  `- Logo da empresa e menu de navegação`,
  `- Imagem de destaque / fundo visual`,
  `- Botão de ação direta`,
  ``,
  `## Layout Atual (ASCII)`,
  `\`\`\``,
  `+--------------------------------------------------+`,
  `| LOGO               NAVEGAÇÃO          WHATSAPP   |`,
  `+--------------------------------------------------+`,
  `| ${heroTitle.padEnd(24)} |                      |`,
  `| ${heroSub.substring(0, 24).padEnd(24)} |      IMAGEM HERO     |`,
  `| [ ${heroCta.padEnd(16)} ]     |                      |`,
  `+--------------------------------------------------+`,
  `\`\`\``,
  ``,
  `----------------------------------------------------`,
  ``,
  `# DOBRA 2 — SERVIÇOS E DIFERENCIAIS`,
  ``,
  `**Copy Original:**`,
  headings.slice(1, 4).map(h => `- Título Seção: "${h}"`).join('\n') || '- Serviços em destaque',
  ``,
  `**Detalhamento:**`,
  paragraphs.slice(1, 4).map(p => `- ${p}`).join('\n') || '- Descrição dos serviços prestados.',
  ``,
  `## Layout Atual (ASCII)`,
  `\`\`\``,
  `+--------------------------------------------------+`,
  `|                TÍTULO DOS SERVIÇOS               |`,
  `|  +----------------+  +----------------+          |`,
  `|  | CARD SERVIÇO 1 |  | CARD SERVIÇO 2 |          |`,
  `|  +----------------+  +----------------+          |`,
  `+--------------------------------------------------+`,
  `\`\`\``,
  ``,
  `----------------------------------------------------`,
  ``,
  `# DOBRA 3 — SOBRE / INSTITUCIONAL E CONTATO`,
  ``,
  `**Copy Original:**`,
  `- Título: "${headings[4] || 'Sobre a Empresa'}"`,
  paragraphs.slice(4, 6).map(p => `- ${p}`).join('\n') || '- História e compromisso com o cliente.',
  ``,
  `**CTAs e Contato:**`,
  ctas.slice(1, 4).map(c => `- Botão: "${c}"`).join('\n') || '- Entrar em contato',
  ``,
  `## Layout Atual (ASCII)`,
  `\`\`\``,
  `+--------------------------------------------------+`,
  `|  IMAGEM  |  HISTÓRIA INSTITUCIONAL E CONTATO    |`,
  `|  EMPRESA |  [ BOTÃO DE ENVIAR / WHATSAPP ]      |`,
  `+--------------------------------------------------+`,
  `\`\`\``,
  ``
];

const mdContent = mdLines.join('\n');

const outLeads = path.join(baseDir, 'leads', slug, 'referencias', 'site-atual.md');
const outIndex = path.join(baseDir, 'index', slug, 'referencias', 'site-atual.md');

[path.dirname(outLeads), path.dirname(outIndex)].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

fs.writeFileSync(outLeads, mdContent, 'utf-8');
fs.writeFileSync(outIndex, mdContent, 'utf-8');

console.log(`[Structure Extractor] site-atual.md gerado com sucesso em ambos os caminhos!`);
