const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '../../../../');
const slug = process.argv[2];

if (!slug) {
  console.error('Uso: node generate_art_direction.js <slug>');
  process.exit(1);
}

const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
const referenciasDir = path.join(leadDir, 'referencias');
if (!fs.existsSync(referenciasDir)) fs.mkdirSync(referenciasDir, { recursive: true });

// Consulta semântica ao repositório de 61 Design Systems
const searchScript = path.join(rootDir, 'Design System', 'search.py');
let primaryRef = 'monolith-architecture.aura.build';
let secondaryRef = 'luxury-real-estate-22.aura.build';
let designSystemResults = [];

if (fs.existsSync(searchScript)) {
  const query = `${lead.segment || lead.niche || 'advocacia'} ${lead.category || 'corporativo'} ${lead.name}`;
  const res = spawnSync('python', [searchScript, '--query', query, '--json'], { encoding: 'utf8' });
  if (res.status === 0 && res.stdout) {
    try {
      designSystemResults = JSON.parse(res.stdout);
      if (designSystemResults.length > 0) primaryRef = designSystemResults[0].id || primaryRef;
      if (designSystemResults.length > 1) secondaryRef = designSystemResults[1].id || secondaryRef;
    } catch {}
  }
}

// Arquiteturas e Conceitos Visuais customizados por perfil para evitar homogeneização
const concepts = {
  'poersch-advogados': {
    aestheticName: "Editorial Monumental & Tradição Sênior",
    designSystems: ["monolith-architecture.aura.build", "echelon.aura.build"],
    theme: {
      primaryColor: "#0b1329",
      secondaryColor: "#172554",
      accentColor: "#d4af37", // Ouro clássico
      backgroundColor: "#030712",
      textColor: "#f9fafb",
      headingFont: "Playfair Display",
      bodyFont: "Plus Jakarta Sans",
      borderRadius: "md",
      mode: "dark",
      backgroundEffect: "mesh"
    },
    hero: {
      variant: "Hero01",
      badge: "★ 37 ANOS DE TRADIÇÃO NO ACRE",
      headline: "Tradição Jurídica Sênior e Estratégia de Alto Impacto em Rio Branco",
      subheadline: "Quase quatro décadas de liderança contenciosa e consultiva para empresas, famílias e instituições que exigem o mais alto rigor técnico e ético.",
      primaryCta: "Falar com Advogado Sócio no WhatsApp",
      secondaryCta: "Conhecer Áreas de Atuação",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Edifício sede e advocacia corporativa de alta autoridade",
      stats: [
        { label: "Tradição", value: "Desde 1987" },
        { label: "Avaliação Google", value: "4.9 ★" },
        { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
      ]
    },
    sections: [
      { type: "header", variant: "Header01" },
      { type: "hero", variant: "Hero01" },
      { type: "credentials", variant: "Credentials01" },
      { type: "services", variant: "Services01" },
      { type: "benefits", variant: "Benefits01" },
      { type: "contact", variant: "Contact01" },
      { type: "footer", variant: "Footer01" }
    ]
  },
  'smt-advogados': {
    aestheticName: "Private Wealth, Holding Familiar & Discrição",
    designSystems: ["luxury-real-estate-22.aura.build", "elicyon.com"],
    theme: {
      primaryColor: "#0f172a",
      secondaryColor: "#1e293b",
      accentColor: "#38bdf8", // Azul safe-haven / wealth
      backgroundColor: "#020617",
      textColor: "#f8fafc",
      headingFont: "Cinzel",
      bodyFont: "Inter",
      borderRadius: "lg",
      mode: "dark",
      backgroundEffect: "dots"
    },
    hero: {
      variant: "Hero02", // Centrado com visual minimalista de prestígio
      badge: "HOLDING FAMILIAR & SUCESSÃO PATRIMONIAL",
      headline: "Proteção Patrimonial e Blindagem Jurídica de Ativos Familiares",
      subheadline: "Estruturação preventiva de holdings, governança corporativa e planejamento sucessório minucioso para famílias empresárias do Acre.",
      primaryCta: "Agendar Consulta de Planejamento Patrimonial",
      secondaryCta: "Guia de Holding Familiar",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Ambiente executivo para reuniões de holding e patrimônio",
      stats: [
        { label: "Patrimônios Estruturados", value: "+R$ 150M" },
        { label: "Avaliação Máxima", value: "5.0 ★" },
        { label: "Sigilo & Governança", value: "100% Blindado" }
      ]
    },
    sections: [
      { type: "header", variant: "Header02" },
      { type: "hero", variant: "Hero02" },
      { type: "services", variant: "Services02" },
      { type: "stats", variant: "Stats01" },
      { type: "benefits", variant: "Benefits01" },
      { type: "contact", variant: "Contact01" },
      { type: "footer", variant: "Footer02" }
    ]
  },
  'danzicourt-advogados': {
    aestheticName: "Contemporary Light Executive & Alta Acessibilidade",
    designSystems: ["cadence-landing-19.aura.build", "white-medical"],
    theme: {
      primaryColor: "#0284c7",
      secondaryColor: "#0369a1",
      accentColor: "#0284c7",
      backgroundColor: "#f8fafc", // Tema claro diferenciado
      textColor: "#0f172a",
      headingFont: "DM Sans",
      bodyFont: "Plus Jakarta Sans",
      borderRadius: "md",
      mode: "light",
      backgroundEffect: "none"
    },
    hero: {
      variant: "Hero03", // Split screen moderno
      badge: "DEFESA DE DIREITOS & CONTENCIOSO ÁGIL",
      headline: "Assessoria Jurídica Ágil, Transparente e Centrada no Seu Direito",
      subheadline: "Atendimento humanizado com suporte contínuo via WhatsApp e atuação precisa em causas cíveis, trabalhistas e previdenciárias em Rio Branco.",
      primaryCta: "Análise Rápida de Caso no WhatsApp",
      secondaryCta: "Ver Especialidades",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Aperto de mãos e compromisso ético com clientes",
      stats: [
        { label: "Atendimento", value: "Imediato WhatsApp" },
        { label: "Satisfação", value: "4.8 ★" },
        { label: "Resolução", value: "Foco Estratégico" }
      ]
    },
    sections: [
      { type: "header", variant: "Header01" },
      { type: "hero", variant: "Hero03" },
      { type: "services", variant: "Services03" },
      { type: "process", variant: "Process01" },
      { type: "faq", variant: "FAQ01" },
      { type: "contact", variant: "Contact01" },
      { type: "footer", variant: "Footer01" }
    ]
  },
  'callil-advogados': {
    aestheticName: "Corporate Sovereign & Agronegócio Estratégico",
    designSystems: ["monolith-architecture.aura.build", "axion-ai.aura.build"],
    theme: {
      primaryColor: "#1c1917",
      secondaryColor: "#292524",
      accentColor: "#ea580c", // Âmbar terroso executivo / agro
      backgroundColor: "#0c0a09",
      textColor: "#fafaf9",
      headingFont: "Cormorant Garamond",
      bodyFont: "Plus Jakarta Sans",
      borderRadius: "none", // Ângulos retos marcantes
      mode: "dark",
      backgroundEffect: "mesh"
    },
    hero: {
      variant: "Hero04", // Hero imersivo com grid de autoridade
      badge: "ADVOCACIA AGRÁRIA & DIREITO EMPRESARIAL",
      headline: "Segurança Jurídica na Gestão da Terra, Contratos e Agronegócio",
      subheadline: "Consultoria preventiva e contenciosa especializada na regularização fundiária, contratos rurais e litígios comerciais de alto porte no Acre.",
      primaryCta: "Falar com Especialista Agrário",
      secondaryCta: "Conhecer Atuação",
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Paisagem rural produtiva com segurança jurídica fundiária",
      stats: [
        { label: "Atuação Agrária", value: "Em todo o Acre" },
        { label: "Contratos Blindados", value: "Rigor Técnico" },
        { label: "Reputação", value: "4.9 ★" }
      ]
    },
    sections: [
      { type: "header", variant: "Header02" },
      { type: "hero", variant: "Hero04" },
      { type: "services", variant: "Services01" },
      { type: "credentials", variant: "Credentials01" },
      { type: "benefits", variant: "Benefits01" },
      { type: "contact", variant: "Contact01" },
      { type: "footer", variant: "Footer02" }
    ]
  },
  'zamora-advogados': {
    aestheticName: "Legaltech & Consultoria Tributária de Alta Performance",
    designSystems: ["axion-ai.aura.build", "pulsedesk-saas.aura.build"],
    theme: {
      primaryColor: "#052e16",
      secondaryColor: "#064e3b",
      accentColor: "#10b981", // Esmeralda / finanças e tributário
      backgroundColor: "#022c22",
      textColor: "#f0fdf4",
      headingFont: "Syne",
      bodyFont: "Inter",
      borderRadius: "md",
      mode: "dark",
      backgroundEffect: "mesh"
    },
    hero: {
      variant: "Hero01",
      badge: "DIREITO TRIBUTÁRIO & DEFESA FISCAL ESTRATÉGICA",
      headline: "Otimização Tributária e Defesa Fiscal com Rigor Matemático e Jurídico",
      subheadline: "Recuperação de créditos fiscais e auditoria preventiva para empresas que buscam reduzir custos e blindar suas operações no Norte do país.",
      primaryCta: "Solicitar Diagnóstico Tributário",
      secondaryCta: "Ver Casos de Sucesso",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Análise contábil e tributária estratégica corporativa",
      stats: [
        { label: "Economia Tributária", value: "Comprovada" },
        { label: "Contencioso Fiscal", value: "TJAC & TRF1" },
        { label: "Avaliação", value: "4.9 ★" }
      ]
    },
    sections: [
      { type: "header", variant: "Header01" },
      { type: "hero", variant: "Hero01" },
      { type: "stats", variant: "Stats01" },
      { type: "services", variant: "Services02" },
      { type: "faq", variant: "FAQ01" },
      { type: "contact", variant: "Contact01" },
      { type: "footer", variant: "Footer01" }
    ]
  }
};

const concept = concepts[slug] || {
  aestheticName: "Advocacia Estratégica Contemporânea",
  designSystems: [primaryRef, secondaryRef],
  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#d4af37",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Playfair Display",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "md",
    mode: "dark",
    backgroundEffect: "mesh"
  },
  hero: {
    variant: "Hero01",
    badge: "EXCELÊNCIA JURÍDICA",
    headline: `Assessoria Jurídica Estratégica com ${lead.name}`,
    subheadline: "Atendimento especializado e focado na defesa dos seus direitos e segurança patrimonial.",
    primaryCta: "Falar no WhatsApp",
    secondaryCta: "Conhecer Serviços",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: lead.name,
    stats: [
      { label: "Avaliação", value: "4.9 ★" },
      { label: "Atendimento", value: "Dedicado" }
    ]
  },
  sections: [
    { type: "header", variant: "Header01" },
    { type: "hero", variant: "Hero01" },
    { type: "services", variant: "Services01" },
    { type: "benefits", variant: "Benefits01" },
    { type: "contact", variant: "Contact01" },
    { type: "footer", variant: "Footer01" }
  ]
};

const artDirectionOutput = {
  slug: lead.slug,
  name: lead.name,
  niche: lead.segment || lead.niche || "Advocacia",
  aesthetic_concept: concept.aestheticName,
  consulted_design_systems: concept.designSystems,
  theme_tokens: concept.theme,
  hero_specification: concept.hero,
  section_flow: concept.sections,
  first_fold_rules: {
    glowEffect: true,
    badgePill: true,
    whatsappPulse: true,
    distinctiveTypography: `${concept.theme.headingFont} / ${concept.theme.bodyFont}`
  },
  created_at: new Date().toISOString()
};

fs.writeFileSync(path.join(referenciasDir, 'art-direction.json'), JSON.stringify(artDirectionOutput, null, 2), 'utf8');

const dsSelected = {
  slug: lead.slug,
  primary_reference: {
    id: concept.designSystems[0],
    titulo: concept.aestheticName
  },
  alternative_references: concept.designSystems.slice(1).map(id => ({ id })),
  visual_direction_recommendations: {
    guidelines: concept.aestheticName
  }
};
fs.writeFileSync(path.join(referenciasDir, 'design-system-selected.json'), JSON.stringify(dsSelected, null, 2), 'utf8');

console.log(`[ART DIRECTOR] Direção de arte exclusiva gerada para: ${lead.name}`);
console.log(`               Conceito: ${concept.aestheticName}`);
console.log(`               Design Systems: ${concept.designSystems.join(', ')}`);
console.log(`               Hero Variant: ${concept.hero.variant} | Modo: ${concept.theme.mode}`);
console.log(`               Salvo em: leads/${slug}/referencias/art-direction.json`);
