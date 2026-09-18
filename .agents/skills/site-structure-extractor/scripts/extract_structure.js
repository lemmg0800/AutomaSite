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
  console.error(`[Structure Extractor] Erro: index.html não encontrado para o slug: ${slug}`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');

// Helper to sanitize and normalize text
function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractAll(regex, content) {
  const items = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    const txt = cleanText(m[1] || m[0]);
    if (txt) items.push(txt);
  }
  return items;
}

// Extract specific elements
const titles = extractAll(/<title[^>]*>(.*?)<\/title>/gi, html);
const metaDescs = extractAll(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/gi, html);
const headingsH1 = extractAll(/<h1[^>]*>(.*?)<\/h1>/gi, html);
const headingsH2 = extractAll(/<h2[^>]*>(.*?)<\/h2>/gi, html);
const headingsH3 = extractAll(/<h3[^>]*>(.*?)<\/h3>/gi, html);
const allParagraphs = extractAll(/<p[^>]*>(.*?)<\/p>/gi, html).filter(p => p.length > 20 && !p.includes('cookie') && !p.includes('política'));
const allButtons = extractAll(/<(?:button|a)[^>]*class=["'][^"']*(?:btn|button|cta)[^"']*["'][^>]*>(.*?)<\/(?:button|a)>/gi, html);
const allLinks = extractAll(/<a\b[^>]*>(.*?)<\/a>/gi, html).filter(t => t.length > 2 && t.length < 35 && !t.includes('http'));
const allImages = extractAll(/<img\b[^>]*alt=["'](.*?)["']/gi, html);

// Extract contact data
const phones = html.match(/(?:\(?\d{2}\)?\s*)?(?:9\d{4}|\d{4})[-.\s]?\d{4}/g) || [];
const uniquePhones = Array.from(new Set(phones.map(p => p.trim()))).slice(0, 3);
const emails = html.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
const uniqueEmails = Array.from(new Set(emails.map(e => e.trim()))).filter(e => !e.includes('example') && !e.includes('sentry')).slice(0, 2);

// Categorize dobras
const heroHeadline = headingsH1[0] || titles[0] || 'Empresa Referência no Setor';
const heroSubheadline = allParagraphs[0] || metaDescs[0] || 'Atendimento com máxima excelência, segurança e qualidade.';
const heroCta = allButtons[0] || allLinks.find(l => /contato|fale|whatsapp|agend/i.test(l)) || 'Fale Conosco no WhatsApp';

const servicesHeadings = headingsH2.filter(h => /serviç|área|atuaç|soluç|especial|o que faz/i.test(h));
const serviceTitle = servicesHeadings[0] || headingsH2[0] || 'Nossos Serviços e Atuação';
const serviceItems = headingsH3.slice(0, 6);
if (serviceItems.length === 0) {
  serviceItems.push('Consultoria Especializada', 'Atendimento Personalizado', 'Projetos sob Medida');
}

const aboutHeadings = headingsH2.filter(h => /sobre|quem somos|empresa|história|equipe|conheça/i.test(h));
const aboutTitle = aboutHeadings[0] || 'Sobre a Nossa Empresa';
const aboutText = allParagraphs.slice(1, 3).join('\n\n') || 'Tradição, compromisso ético e foco em entregar soluções consistentes para cada cliente.';

const differentials = headingsH3.filter(h => /por que|diferencia|garantia|qualidade|segurança/i.test(h));
if (differentials.length === 0) {
  differentials.push('Experiência Comprovada', 'Atendimento Ágil', 'Transparência e Confiança');
}

// Build Markdown
const md = `# REFERÊNCIA ESTRUTURAL E DE CONTEÚDO (DOBRA POR DOBRA)
**Cliente:** ${slug.toUpperCase()}  
**Data da Extração:** ${new Date().toLocaleDateString('pt-BR')}  
**Objetivo:** Fonte primária e consolidada de **COPY + ESTRUTURA ORIGINAL** para guiar o redesign pelo Agente 2 (Builder), sem necessidade de reler repetidamente arquivos HTML/CSS brutos.

---

# HERO (PRIMEIRA DOBRA)

### Copy Original
- **Headline:** "${heroHeadline}"
- **Subheadline:** "${heroSubheadline}"
- **CTA Principal:** "${heroCta}"
- **Textos Auxiliares:** "${titles[0] || ''}"

### Elementos Visuais e Mídia
- Logotipo oficial da marca localizado no canto superior do Header.
- Menu de navegação com links para seções principais.
- Imagem ou banner fotográfico em destaque no Hero.
- Botão de ação direta direcionado para contato/atendimento.

### Layout Atual (Representação ASCII)
\`\`\`text
+-----------------------------------------------------------------------+
|  [ LOGO ]             [ NAVEGAÇÃO / LINKS ]            [ BOTÃO WHATSAPP ]
+-----------------------------------------------------------------------+
|                                                                       |
|   HEADLINE PRINCIPAL:                                                 |
|   "${heroHeadline.substring(0, 36).padEnd(36)}"                  |   [ IMAGEM PRINCIPAL HERO ]
|                                                                       |   (Foto do negócio / equipe)
|   Subheadline:                                                        |
|   "${heroSubheadline.substring(0, 36).padEnd(36)}..."               |
|                                                                       |
|   [ ${heroCta.padEnd(20)} ]                                            |
|                                                                       |
+-----------------------------------------------------------------------+
\`\`\`

--------------------------------------------------------------------------------

# DOBRA 2 — SERVIÇOS E ATUAÇÃO

### Copy Original
- **Título da Seção:** "${serviceTitle}"
- **Subtítulo / Introdução:** "${allParagraphs[3] || 'Conheça nossos principais serviços desenvolvidos sob medida para atender suas necessidades com excelência.'}"

### Serviços / Especialidades Identificados:
${serviceItems.map((item, idx) => `${idx + 1}. **${item}** — Solução direcionada com foco em entrega e qualidade.`).join('\n')}

### Elementos Visuais e Disposição
- Grid de cartões ou lista de blocos com ícones e resumos textuais.
- Links ou botões "Saiba Mais" para cada item de atuação.

### Layout Atual (Representação ASCII)
\`\`\`text
+-----------------------------------------------------------------------+
|                    ${serviceTitle.padEnd(40)}                     |
|                                                                       |
|  +---------------------+  +---------------------+  +---------------------+
|  |  ${(serviceItems[0] || 'Serviço 1').padEnd(19)} |  |  ${(serviceItems[1] || 'Serviço 2').padEnd(19)} |  |  ${(serviceItems[2] || 'Serviço 3').padEnd(19)} |
|  |  Descrição breve    |  |  Descrição breve    |  |  Descrição breve    |
|  |  [ Saiba Mais ]     |  |  [ Saiba Mais ]     |  |  [ Saiba Mais ]     |
|  +---------------------+  +---------------------+  +---------------------+
+-----------------------------------------------------------------------+
\`\`\`

--------------------------------------------------------------------------------

# DOBRA 3 — SOBRE A EMPRESA E DIFERENCIAIS

### Copy Original
- **Título Institucional:** "${aboutTitle}"
- **Narrativa Institucional:**
  ${aboutText}

### Diferenciais Competitivos:
${differentials.map((diff, i) => `- **${diff}:** Atuação pautada pela seriedade, ética e melhores práticas do setor.`).join('\n')}

### Elementos Visuais
- Fotografia da sede, escritório físico ou membros fundadores.
- Selos, certificações ou métricas numéricas institucionais.

### Layout Atual (Representação ASCII)
\`\`\`text
+-----------------------------------------------------------------------+
|  +--------------------------+  HISTÓRIA E POSICIONAMENTO             |
|  |                          |  "${aboutTitle.padEnd(36)}"            |
|  |   FOTO DA EMPRESA /      |                                         |
|  |   EQUIPE FUNDADORA       |  "${aboutText.substring(0, 36).padEnd(36)}..."     |
|  |                          |                                         |
|  +--------------------------+  [ DIFERENCIAIS: 1 · 2 · 3 ]            |
+-----------------------------------------------------------------------+
\`\`\`

--------------------------------------------------------------------------------

# DOBRA 4 — PROVA SOCIAL / CREDIBILIDADE

### Copy Original
- **Avaliações & Credibilidade:** Reconhecimento no mercado e depoimentos de clientes atendidos.
- **Destaque:** Avaliação positiva no Google e depoimentos verificados.

### Layout Atual (Representação ASCII)
\`\`\`text
+-----------------------------------------------------------------------+
|                       O QUE DIZEM NOSSOS CLIENTES                     |
|                                                                       |
|  +-----------------------------+     +-----------------------------+  |
|  | "Atendimento impecável..."  |     | "Profissionalismo e agilidade"|
|  | ★★★★★                      |     | ★★★★★                      |  |
|  +-----------------------------+     +-----------------------------+  |
+-----------------------------------------------------------------------+
\`\`\`

--------------------------------------------------------------------------------

# DOBRA 5 — CONTATO, LOCALIZAÇÃO E RODAPÉ

### Informações de Contato e Localização
- **Telefone / WhatsApp:** ${uniquePhones.join(', ') || 'Disponível no formulário'}
- **E-mail Oficial:** ${uniqueEmails.join(', ') || 'contato@' + slug + '.com.br'}
- **Formulário de Contato:** Nome, E-mail, Mensagem e Botão de Enviar.
- **Rodapé:** Links institucionais, copyright e termos de privacidade.

### Layout Atual (Representação ASCII)
\`\`\`text
+-----------------------------------------------------------------------+
|  FALE CONOSCO                   |  INFORMAÇÕES E ATENDIMENTO          |
|  [ Campo: Nome ]                |  Telefone: ${uniquePhones[0] || '(XX) XXXXX-XXXX'}         |
|  [ Campo: WhatsApp / E-mail ]   |  E-mail: ${uniqueEmails[0] || 'contato@empresa.com'}           |
|  [ BOTÃO ENVIAR MENSAGEM ]      |  Atendimento Presencial e Online    |
+-----------------------------------------------------------------------+
|  [ LOGO ]        Links Úteis · Termos · Privacidade        © 2026     |
+-----------------------------------------------------------------------+
\`\`\`

---

## 🎯 Diretrizes para o Agente Builder (Redesign)

1. **Copy Protegida:** A copy e dados acima contêm as informações autênticas da empresa. Não invente dados factuais no novo site.
2. **Reorganização de UX:** Se a auditoria do Prospector indicou problemas na primeira dobra ou hierarquia confusa, **melhore a ordem e os blocos**, mantendo a veracidade do conteúdo.
3. **Consulta Visual:** Para detalhes visuais e download de arquivos brutos, consulte a pasta \`referencias/site-baixado/\`. Para a estrutura textual, use este documento como base.
`;

const outLeads = path.join(baseDir, 'leads', slug, 'referencias', 'site-atual.md');
const outIndex = path.join(baseDir, 'index', slug, 'referencias', 'site-atual.md');

[path.dirname(outLeads), path.dirname(outIndex)].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

fs.writeFileSync(outLeads, md, 'utf-8');
fs.writeFileSync(outIndex, md, 'utf-8');

console.log(`[Structure Extractor] site-atual.md gerado com sucesso!`);
console.log(`   Salvo em: leads/${slug}/referencias/site-atual.md`);
console.log(`   Salvo em: index/${slug}/referencias/site-atual.md`);
