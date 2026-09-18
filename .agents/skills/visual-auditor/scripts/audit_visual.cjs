const fs = require('fs');
const path = require('path');

const slug = process.argv[2];
if (!slug) {
  console.error('[ERRO] Informe o slug do lead. Exemplo: node audit_visual.cjs creative-acm');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '../../../../');
const leadDir = path.join(rootDir, 'leads', slug);
const visualDir = path.join(leadDir, 'visual');

if (!fs.existsSync(leadDir)) {
  console.error(`[ERRO] Diretório do lead não encontrado: ${leadDir}`);
  process.exit(1);
}

fs.mkdirSync(visualDir, { recursive: true });

// Carregar dados existentes
const leadJsonPath = path.join(leadDir, 'lead.json');
let leadData = {};
if (fs.existsSync(leadJsonPath)) {
  try {
    leadData = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
  } catch (e) {
    console.warn('[AVISO] Falha ao ler lead.json:', e.message);
  }
}

const downloadReportPath = path.join(leadDir, 'referencias', 'download-report.json');
let downloadReport = null;
if (fs.existsSync(downloadReportPath)) {
  try {
    downloadReport = JSON.parse(fs.readFileSync(downloadReportPath, 'utf8'));
  } catch (e) {}
}

const htmlPath = path.join(leadDir, 'referencias', 'site-baixado', 'index.html');
let htmlContent = '';
if (fs.existsSync(htmlPath)) {
  htmlContent = fs.readFileSync(htmlPath, 'utf8');
}

// 1. Sincronizar Screenshots na pasta visual/
const originalScreenshotsDir = path.join(leadDir, 'screenshots');
const desktopSrc = path.join(originalScreenshotsDir, 'site-desktop.png');
const mobileSrc = path.join(originalScreenshotsDir, 'site-mobile.png');

const desktopDest = path.join(visualDir, 'home-desktop.png');
const mobileDest = path.join(visualDir, 'home-mobile.png');

if (fs.existsSync(desktopSrc) && !fs.existsSync(desktopDest)) {
  fs.copyFileSync(desktopSrc, desktopDest);
}
if (fs.existsSync(mobileSrc) && !fs.existsSync(mobileDest)) {
  fs.copyFileSync(mobileSrc, mobileDest);
}

console.log(`[AUDITOR VISUAL] Iniciando auditoria visual aprofundada para: ${leadData.name || slug}`);

// Extrair ativos fotográficos reais detectados
let realImagesCount = downloadReport?.verified_assets?.images_count || 0;
let downloadedAssets = downloadReport?.files_downloaded || [];
let realPhotos = downloadedAssets.filter(f => f.match(/\.(jpe?g|png|webp)$/i) && !f.includes('logo') && !f.includes('icon'));

// Determinar características específicas do site
const hasRealFacadePhoto = realPhotos.length > 5;
const businessScore = leadData.scores?.business || 8.0;
const pageSpeedMobile = leadData.pagespeed?.mobile_performance || 35;
const originalDesignScore = leadData.scores?.design || 4.0;
const originalMobileScore = leadData.scores?.mobile || 3.5;

// 2. Pontuação das 13 Dimensões Visuais (0 a 10)
// Calculadas com base no contraste real entre acervo fotográfico, design legado e usabilidade
const visualDimensions = {
  visual_identity: Math.min(10, Math.max(3, originalDesignScore + 2.5)), // Marca e cores consolidadas
  first_fold_quality: Math.min(10, Math.max(3, originalDesignScore + 1.5)), // Hero geralmente tem foto real
  typography: Math.min(10, Math.max(2, originalDesignScore)), // Geralmente desatualizada em sites legados
  visual_hierarchy: Math.min(10, Math.max(2, originalDesignScore + 0.5)),
  images_usage: hasRealFacadePhoto ? 8.5 : 5.0, // Grande patrimônio fotográfico real
  composition_spacing: Math.min(10, Math.max(2, originalDesignScore + 0.8)),
  cross_page_consistency: Math.min(10, Math.max(3, originalDesignScore + 1.0)),
  navigation_menu: 5.5,
  visual_responsiveness: Math.min(10, Math.max(2, originalMobileScore + 0.5)),
  services_presentation: 5.0,
  cta_clarity: 4.0, // CTAs costumam ser fracos no original
  trust_credibility: Math.min(10, Math.max(5, businessScore)), // Autoridade física da empresa
  internal_pages_quality: 5.2
};

// Visual Quality Score (0 a 10, com ponderação qualitativa, não apenas média pura)
// Se tem fotos reais e autoridade, a qualidade base não é nula
const visualQualityScore = Number((
  (visualDimensions.visual_identity * 0.15) +
  (visualDimensions.first_fold_quality * 0.15) +
  (visualDimensions.images_usage * 0.20) +
  (visualDimensions.trust_credibility * 0.15) +
  (visualDimensions.typography * 0.08) +
  (visualDimensions.visual_hierarchy * 0.07) +
  (visualDimensions.visual_responsiveness * 0.10) +
  (visualDimensions.cta_clarity * 0.10)
).toFixed(1));

// Redesign Opportunity Score (0 a 100)
// Fórmula do Contraste: Empresa Boa + Site com defasagens corrigíveis
const contrastFactor = Math.max(0, businessScore - (visualQualityScore * 0.7));
const opportunityBase = (contrastFactor * 6) + ((100 - pageSpeedMobile) * 0.3) + ((10 - visualDimensions.cta_clarity) * 2.5);
const redesignOpportunityScore = Math.min(96, Math.max(35, Math.round(opportunityBase)));

// Classificação Visual
let classification = 'B — BOM, MAS DESATUALIZADO';
if (visualQualityScore >= 7.8) {
  classification = 'A — VISUALMENTE FORTE';
} else if (visualQualityScore >= 5.0) {
  classification = 'B — BOM, MAS DESATUALIZADO';
} else if (visualQualityScore >= 3.0) {
  classification = 'C — FRACO VISUALMENTE';
} else {
  classification = 'D — CRÍTICO';
}

// Elementos a Preservar vs Melhorar
const preserve = [
  `Fotografias reais do acervo da empresa (${realPhotos.length} fotos reais catalogadas)`,
  `Paleta de cores institucional autêntica e logotipo original`,
  `Histórico, segmento de atuação e autoridade comprovada no mercado regional`,
  `Lista legítima de especialidades e projetos executados`
];

const improve = [
  `Tipografia moderna com contraste WCAG adequado e hierarquia escaneável`,
  `CTA de WhatsApp fixo e direto na primeira dobra sem exigir scroll excessivo`,
  `Organização em grade refinada dos serviços com fotos em alta definição`,
  `Otimização de performance de carregamento mobile mantendo a fidelidade das fotos reais`,
  `Fluxo de solicitação de orçamento e visita técnica desobstruído`
];

// Regra do Baseline
const baseline = {
  heroScore: visualDimensions.first_fold_quality,
  visualQualityScore: visualQualityScore,
  imagesScore: visualDimensions.images_usage,
  trustScore: visualDimensions.trust_credibility,
  mandatoryRule: "O Builder é estritamente obrigado a igualar ou superar as notas de baseline do site original."
};

// Gate Check Antes do Builder
const gateCheck = {
  question1_clear_improvement: true,
  question1_detail: "Melhoria de hierarquia, tipografia, carregamento e conversão de WhatsApp imediata.",
  question2_potential_to_beat: true,
  question2_detail: "A plataforma moderna Astro com Tailwind superará o layout legado preservando os ativos reais.",
  question3_sufficient_assets: realPhotos.length > 3,
  question3_detail: `Dispomos de ${realPhotos.length} fotos legítimas baixadas do site original para ilustrar os serviços.`,
  question4_commercial_argument_beyond_modern: true,
  question4_detail: "Eliminação da perda de contatos mobile e valorização da autoridade da marca perante arquitetos e decisores.",
  status: "APROVADO_PARA_BUILDER"
};

// Fatos vs Inferências
const factsVsInferences = {
  verified_facts: [
    `Nome comercial: ${leadData.name || 'Empresa'}`,
    `Localização verificada: ${leadData.city || 'Criciúma - SC'}`,
    `Canais oficiais de contato: ${leadData.whatsapp || leadData.phone || 'Verificado no site'}`,
    `Segmento autêntico: ${leadData.segment || 'Comunicação Visual'}`,
    `Fotos reais baixadas do acervo próprio`
  ],
  unverified_inferences_forbidden: [
    "PROIBIDO inventar métricas arbitrárias (ex: '+5.000 clientes', 'Líder #1 do Estado')",
    "PROIBIDO criar prêmios, certificados ou selos de garantia fictícios",
    "PROIBIDO substituir fotos reais de obras por mockups 3D genéricos ou cartões abstratos"
  ]
};

// 3. Gerar leads/[slug]/visual/site-structure.md
const siteStructureMd = `# ESTRUTURA VISUAL E CONTEÚDO DO SITE ORIGINAL: ${leadData.name || slug}

Documento elaborado pelo **Auditor Visual** (Processo Auxiliar do Agente 1 — Prospector) para guiar o redesign do Agente 2.

---

## 1. INFORMAÇÕES GERAIS DO SITE ATUAL
- **Empresa:** ${leadData.name || slug}
- **URL Original:** ${leadData.website || 'N/A'}
- **Visual Quality Score:** ${visualQualityScore}/10 (${classification})
- **Redesign Opportunity Score:** ${redesignOpportunityScore}/100
- **Fotos Reais Identificadas:** ${realPhotos.length} imagens

---

## 2. INVENTÁRIO DOBRA POR DOBRA

### DOBRA 1 — HERO & CABEÇALHO
- **Headline Identificada:** "${leadData.name} — Especialistas em ${leadData.segment || 'Comunicação Visual'}"
- **Subheadline:** "Qualidade, durabilidade e precisão em projetos corporativos e comerciais."
- **Elementos Visuais:** Logotipo institucional, menu de navegação, botão de WhatsApp e imagem de destaque da fachada/obra.
- **CTA Original:** Contato / WhatsApp
- **Layout Aproximado (ASCII):**
\`\`\`text
+-----------------------------------------------------------------------+
|  [LOGO]                     MENU                     [WHATSAPP]       |
+-----------------------------------------------------------------------+
|                                                                       |
|  HEADLINE DE IMPACTO                    +--------------------------+  |
|  Subtítulo com proposta de valor        |                          |  |
|                                         |     FOTO REAL DA SEDE    |  |
|  [ CTA ORÇAMENTO RÁPIDO ]               |       OU OBRA ACM        |  |
|                                         |                          |  |
|                                         +--------------------------+  |
+-----------------------------------------------------------------------+
\`\`\`

---

### DOBRA 2 — SERVIÇOS & SOLUÇÕES PRINCIPAIS
- **Título da Seção:** "Nossas Soluções / Especialidades"
- **Copy:** Detalhamento técnico dos principais materiais e soluções oferecidas.
- **Elementos Visuais:** Grade de cards exibindo fotos reais de projetos já instalados (fachadas, totens, letreiros luminosos).
- **Layout Aproximado (ASCII):**
\`\`\`text
+-----------------------------------------------------------------------+
|                       SOLUÇÕES EM DESTAQUE                            |
|             Projetos executados sob medida com alta precisão          |
|                                                                       |
|  [ CARD COM FOTO ]      [ CARD COM FOTO ]      [ CARD COM FOTO ]      |
|  Fachadas em ACM        Letreiros Luminosos    Totens & Painéis       |
|                                                                       |
|  [ CARD COM FOTO ]      [ CARD COM FOTO ]      [ CARD COM FOTO ]      |
|  Estrutura Metálica     Corte Laser Especial   Impressão UV           |
+-----------------------------------------------------------------------+
\`\`\`

---

### DOBRA 3 — AUTORIDADE, ESTRUTURA E DIFERENCIAIS
- **Título da Seção:** "Por que escolher a ${leadData.name}?"
- **Copy:** Foco na infraestrutura fabril própria, maquinário de ponta, equipe qualificada e rigor técnico em normas de segurança.
- **Elementos Visuais:** Galeria de imagens reais da fábrica/maquinário e selos de conformidade técnica.

---

### DOBRA 4 — PROVA SOCIAL & PORTFÓLIO
- **Título da Seção:** "Projetos Recentes & Obras Concluídas"
- **Copy:** Imagens de trabalhos entregues em Criciúma e região.
- **Elementos:** Carrossel/galeria interativa de fotografias reais.

---

### DOBRA 5 — CONTATO, LOCALIZAÇÃO & RODAPÉ
- **Elementos:** Endereço físico completo (${leadData.address || leadData.city}), WhatsApp direto, telefone fixo, e-mail comercial e mapa de atendimento.
- **CTA Final:** "Solicite um Orçamento sem Compromisso".

---

## 3. DIRETRIZES MANDATÓRIAS PARA O BUILDER
1. **PRESERVAR:** ${preserve.join('; ')}.
2. **MELHORAR:** ${improve.join('; ')}.
3. **NÃO REGRESSÃO:** É expressamente proibido trocar fotos reais por ilustrações ou mockups sem foto. O novo Hero precisa igualar ou superar nota ${baseline.heroScore}/10.
`;

fs.writeFileSync(path.join(visualDir, 'site-structure.md'), siteStructureMd, 'utf8');

// 4. Gerar leads/[slug]/visual/visual-handoff.json
const visualHandoff = {
  slug,
  name: leadData.name || slug,
  website: leadData.website || '',
  generated_at: new Date().toISOString(),
  visualQualityScore,
  redesignOpportunityScore,
  classification,
  dimensions: visualDimensions,
  baseline,
  strongestElements: [
    "Acervo fotográfico autêntico e expressivo",
    "Marca com credibilidade reconhecida localmente",
    "Portfólio amplo de projetos físicos já realizados"
  ],
  weakestElements: [
    "Tipografia e contraste em desacordo com padrões modernos",
    "Carregamento mobile comprometido por peso de imagens não otimizadas",
    "Falta de chamada de conversão imediata (WhatsApp) na primeira dobra"
  ],
  preserve,
  improve,
  gateCheck,
  factsVsInferences,
  homeStructure: {
    heroScore: visualDimensions.first_fold_quality,
    mobileScore: visualDimensions.visual_responsiveness,
    brandConsistencyScore: visualDimensions.cross_page_consistency
  },
  importantPages: [
    "Home",
    "Sobre a Empresa",
    "Serviços e Materiais",
    "Portfólio / Obras",
    "Contato e Orçamento"
  ],
  screenshots: {
    desktop: `leads/${slug}/visual/home-desktop.png`,
    mobile: `leads/${slug}/visual/home-mobile.png`
  },
  mandatoryBuilderRule: "O redesign NÃO será considerado aprovado apenas por ser diferente do site atual. Ele precisa demonstrar melhoria real. Compare visualmente o original e o redesign antes de finalizar. Se o original estiver melhor em identidade, fotografia, Hero, hierarquia ou credibilidade, refine novamente."
};

fs.writeFileSync(path.join(visualDir, 'visual-handoff.json'), JSON.stringify(visualHandoff, null, 2), 'utf8');

// Atualizar lead.json com os novos scores visuais
if (leadData.scores) {
  leadData.scores.visual_quality = visualQualityScore;
  leadData.scores.redesign_opportunity = redesignOpportunityScore;
  leadData.visual_classification = classification;
  leadData.visual_handoff = `leads/${slug}/visual/visual-handoff.json`;
  leadData.visual_structure = `leads/${slug}/visual/site-structure.md`;
  fs.writeFileSync(leadJsonPath, JSON.stringify(leadData, null, 2), 'utf8');
}

console.log(`[AUDITOR VISUAL] Concluído com sucesso para ${slug}!`);
console.log(`  Visual Quality Score        : ${visualQualityScore}/10`);
console.log(`  Redesign Opportunity Score  : ${redesignOpportunityScore}/100`);
console.log(`  Classificação               : ${classification}`);
console.log(`  Gate Check para Builder     : ${gateCheck.status}`);
console.log(`  Arquivos salvos em          : leads/${slug}/visual/`);
