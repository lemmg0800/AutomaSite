/**
 * Design Systems Catalog & Semantic Registry
 * Mapeamento dos 61 Design Systems de Produção com tokens e componentes integrados.
 * Gerado automaticamente por scripts/index-design-systems.ts
 */

import type { ThemeTokens } from '../src/clients/schema.ts';

export interface EnrichedDesignSystem {
  id: string;
  tema: 'claro' | 'escuro';
  caminho: string;
  pagina_principal: string;
  design_system_page: string;
  titulo: string;
  subtitulo: string;
  nichos: string[];
  estilo_visual: string[];
  clima_sensacao: string[];
  paleta_predominante: string[];
  efeitos_visuais: string[];
  componentes_chave: string[];
  fontes: string[];
  melhor_para: string;
  tokens: ThemeTokens;
  recommended_components: {
    hero: string;
    services: string;
    projects?: string;
    cta: string;
    footer: string;
    background: string;
  };
}

export const DESIGN_SYSTEMS_CATALOG: EnrichedDesignSystem[] = [
  {
    "id": "aex.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/aex.aura.build",
    "pagina_principal": "temas_claros/aex.aura.build/aex.aura.build/design-system.html",
    "design_system_page": "temas_claros/aex.aura.build/aex.aura.build/design-system.html",
    "titulo": "AEX | Sistemas Alpinos de Engenharia",
    "subtitulo": "Conquiste o desconhecido com engenharia extrema",
    "nichos": [
      "engenharia pesada",
      "geotecnia",
      "mineração",
      "construção civil pesada",
      "equipamentos de montanha",
      "esportes radicais",
      "outdoor",
      "segurança do trabalho",
      "maquinário",
      "topografia",
      "infraestrutura extrema"
    ],
    "estilo_visual": [
      "técnico",
      "alpino",
      "robusto",
      "industrial-leve",
      "grid estruturado"
    ],
    "clima_sensacao": [
      "resistência",
      "confiança extrema",
      "precisão técnica",
      "segurança"
    ],
    "paleta_predominante": [
      "#f8fafc",
      "#0f172a",
      "#f97316",
      "#3b82f6"
    ],
    "efeitos_visuais": [
      "linhas cartográficas",
      "marcadores de elevação",
      "cards modulares técnicos",
      "bordas nítidas"
    ],
    "componentes_chave": [
      "hero com dados de altitude",
      "matriz de resistência",
      "cards de especificações técnicas",
      "certificações"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Empresas de engenharia geotécnica, maquinário pesado, equipamentos de segurança/resgate e vestuário técnico outdoor.",
    "tokens": {
      "primaryColor": "#f97316",
      "secondaryColor": "#0f172a",
      "accentColor": "#3b82f6",
      "backgroundColor": "#f8fafc",
      "textColor": "#0f172a",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "agent.humanacademy",
    "tema": "claro",
    "caminho": "temas_claros/agent.humanacademy",
    "pagina_principal": "temas_claros/agent.humanacademy/agent.humanacademy/design-system.html",
    "design_system_page": "temas_claros/agent.humanacademy/agent.humanacademy/design-system.html",
    "titulo": "Agent Lab — Workshop de Agentes Criativos | Human Academy",
    "subtitulo": "Monte seu sistema de agentes criativos do zero em 2 dias",
    "nichos": [
      "educação tech",
      "workshops",
      "cursos online",
      "inteligência artificial para criativos",
      "bootcamps",
      "comunidades educacionais",
      "escolas de design",
      "mentoria",
      "infoprodutos premium"
    ],
    "estilo_visual": [
      "editorial contemporâneo",
      "clean acadêmico",
      "minimalista refinado",
      "didático"
    ],
    "clima_sensacao": [
      "intelectual",
      "acessível",
      "inovador",
      "inspirador"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f5f5f4",
      "#18181b",
      "#8b5cf6"
    ],
    "efeitos_visuais": [
      "badges pill",
      "blocos de cronograma",
      "cartões de instrutores",
      "tabelas de módulos"
    ],
    "componentes_chave": [
      "cronograma de 2 dias",
      "grade curricular em sanfona",
      "seção de pré-requisitos",
      "garantia de satisfação"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Lançamentos de cursos ao vivo, bootcamps de programação ou IA, workshops corporativos e academias digitais.",
    "tokens": {
      "primaryColor": "#18181b",
      "secondaryColor": "#f5f5f4",
      "accentColor": "#8b5cf6",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "ai-automation-17.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/ai-automation-17.aura.build",
    "pagina_principal": "temas_claros/ai-automation-17.aura.build/index.html",
    "design_system_page": "temas_claros/ai-automation-17.aura.build/design-system.html",
    "titulo": "Eric Martins - Portfólio de Automação IA",
    "subtitulo": "Soluções autônomas para acelerar negócios",
    "nichos": [
      "portfólio pessoal",
      "desenvolvedor freelance",
      "consultoria de automação",
      "especialista em IA",
      "engenheiro de software",
      "cientista de dados",
      "agência boutique"
    ],
    "estilo_visual": [
      "bento-grid",
      "clean tech",
      "minimalista profissional",
      "foco em conversão"
    ],
    "clima_sensacao": [
      "competência",
      "modernidade",
      "foco em ROI",
      "agilidade"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f1f5f9",
      "#0f172a",
      "#2563eb"
    ],
    "efeitos_visuais": [
      "bento cards com cantos arredondados",
      "contadores de horas salvas",
      "logos de integrações flutuantes"
    ],
    "componentes_chave": [
      "bento grid de cases",
      "calculadora de economia de tempo",
      "formulário de contato direto",
      "depoimentos"
    ],
    "fontes": [
      "Inter",
      "Space Grotesk"
    ],
    "melhor_para": "Profissionais autônomos, consultores de processos, engenheiros de automação e desenvolvedores seniores.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f1f5f9",
      "accentColor": "#2563eb",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Space Grotesk",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services02",
      "cta": "cta/CTA01",
      "footer": "footer/Footer02",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "ai-saas-landing-27.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/ai-saas-landing-27.aura.build",
    "pagina_principal": "temas_claros/ai-saas-landing-27.aura.build/ai-saas-landing-27.aura.build/design-system.html",
    "design_system_page": "temas_claros/ai-saas-landing-27.aura.build/ai-saas-landing-27.aura.build/design-system.html",
    "titulo": "Sondero - Sistema Operacional de IA",
    "subtitulo": "Sistemas de IA que tornam suas melhores pessoas bem-sucedidas",
    "nichos": [
      "SaaS B2B",
      "software corporativo",
      "plataformas enterprise",
      "RH tech",
      "gestão empresarial",
      "inteligência artificial aplicada",
      "automação de workflows"
    ],
    "estilo_visual": [
      "SaaS corporativo premium",
      "clean corporativo",
      "grid espaçoso",
      "alta legibilidade"
    ],
    "clima_sensacao": [
      "solidez empresarial",
      "confiabilidade corporativa",
      "escalabilidade"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8fafc",
      "#1e293b",
      "#3b82f6"
    ],
    "efeitos_visuais": [
      "mockup de dashboard flutuante",
      "sombras suaves multicamadas",
      "tabela de comparação de planos"
    ],
    "componentes_chave": [
      "hero com demonstração interativa de produto",
      "logos de clientes enterprise",
      "tabela de precificação anual/mensal"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Startups que vendem para grandes empresas (Enterprise B2B), plataformas de recrutamento e softwares de produtividade.",
    "tokens": {
      "primaryColor": "#1e293b",
      "secondaryColor": "#f8fafc",
      "accentColor": "#3b82f6",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "antigravity.google",
    "tema": "claro",
    "caminho": "temas_claros/antigravity.google",
    "pagina_principal": "temas_claros/antigravity.google/antigravity.google/design-system.html",
    "design_system_page": "temas_claros/antigravity.google/antigravity.google/design-system.html",
    "titulo": "Google Antigravity - Plataforma de Agentes",
    "subtitulo": "Decole rumo à plataforma de agentes de próxima geração",
    "nichos": [
      "ferramentas para desenvolvedores",
      "plataformas cloud",
      "ecossistemas de IA",
      "big tech",
      "APIs de modelos de linguagem",
      "software engineering",
      "infraestrutura digital"
    ],
    "estilo_visual": [
      "Material You moderno",
      "minimalista refinado",
      "iluminação suave",
      "espaçoso"
    ],
    "clima_sensacao": [
      "inovação aberta",
      "simplicidade sofisticada",
      "leveza",
      "futurismo amigável"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8f9fa",
      "#202124",
      "#1a73e8",
      "#34a853"
    ],
    "efeitos_visuais": [
      "cartões translúcidos brancos",
      "sombras atmosféricas",
      "ícones vetoriais fluidos"
    ],
    "componentes_chave": [
      "hero com CTA duplo",
      "grid de recursos técnicos",
      "cards de documentação",
      "barra de pesquisa rápida"
    ],
    "fontes": [
      "Google Sans",
      "Inter"
    ],
    "melhor_para": "Portais de desenvolvedores, produtos de nuvem, plataformas de agentes autônomos e serviços de tecnologia aberta.",
    "tokens": {
      "primaryColor": "#202124",
      "secondaryColor": "#f8f9fa",
      "accentColor": "#1a73e8",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Google Sans",
      "bodyFont": "Inter",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "architecture-studio.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/architecture-studio.aura.build",
    "pagina_principal": "temas_claros/architecture-studio.aura.build/architecture-studio.aura.build/design-system.html",
    "design_system_page": "temas_claros/architecture-studio.aura.build/architecture-studio.aura.build/design-system.html",
    "titulo": "Inovações Arquitetônicas & Habitats",
    "subtitulo": "Espaços que conectam pessoas e sustentabilidade",
    "nichos": [
      "arquitetura residencial",
      "estúdio de arquitetura",
      "urbanismo",
      "design de interiores",
      "engenharia sustentável",
      "construção sustentável",
      "habitações ecológicas"
    ],
    "estilo_visual": [
      "minimalismo arquitetônico",
      "espaçamento generoso",
      "linhas puras",
      "editorial"
    ],
    "clima_sensacao": [
      "harmonia espacial",
      "elegância natural",
      "serenidade",
      "atemporalidade"
    ],
    "paleta_predominante": [
      "#fafaf9",
      "#e7e5e4",
      "#292524",
      "#57534e"
    ],
    "efeitos_visuais": [
      "máscaras de imagem com proporções arquitetônicas",
      "linhas de cota finas",
      "transições de corte suave"
    ],
    "componentes_chave": [
      "galeria de projetos com filtros por tipologia",
      "ficha técnica da obra",
      "depoimentos de moradores"
    ],
    "fontes": [
      "Manrope",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Escritórios de arquitetura contemporânea, incorporadoras sustentáveis e estúdios de design ambiental.",
    "tokens": {
      "primaryColor": "#292524",
      "secondaryColor": "#e7e5e4",
      "accentColor": "#57534e",
      "backgroundColor": "#fafaf9",
      "textColor": "#0f172a",
      "headingFont": "Manrope",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "aris-photograph.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/aris-photograph.aura.build",
    "pagina_principal": "temas_claros/aris-photograph.aura.build/aris-photograph.aura.build/design-system.html",
    "design_system_page": "temas_claros/aris-photograph.aura.build/aris-photograph.aura.build/design-system.html",
    "titulo": "Aris - Narrativa Visual & Fotografia",
    "subtitulo": "Capturando a luz e a essência de momentos inesquecíveis",
    "nichos": [
      "fotografia profissional",
      "casamentos de luxo",
      "ensaios de moda",
      "fotografia editorial",
      "direção de arte",
      "artes visuais",
      "portfólio criativo de fotógrafo"
    ],
    "estilo_visual": [
      "editorial clássico",
      "tipografia serifada nobre",
      "espaçamento amplo",
      "imagem em primeiro plano"
    ],
    "clima_sensacao": [
      "sensibilidade",
      "poesia visual",
      "luxo discreto",
      "emocionante"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#fdfbf7",
      "#1c1917",
      "#a8a29e"
    ],
    "efeitos_visuais": [
      "masonry grid fluida",
      "fade-in suave ao rolar",
      "molduras minimalistas"
    ],
    "componentes_chave": [
      "galeria estilo revista",
      "biografia do artista",
      "tabela de pacotes de ensaio",
      "formulário de agendamento"
    ],
    "fontes": [
      "Playfair Display",
      "Manrope",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Fotógrafos de casamento, ensaios de alta costura, artistas plásticos e estúdios de fotografia autoral.",
    "tokens": {
      "primaryColor": "#1c1917",
      "secondaryColor": "#fdfbf7",
      "accentColor": "#a8a29e",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Playfair Display",
      "bodyFont": "Manrope",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "bloomava-creative-93.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/bloomava-creative-93.aura.build",
    "pagina_principal": "temas_claros/bloomava-creative-93.aura.build/bloomava-creative-93.aura.build/design-system.html",
    "design_system_page": "temas_claros/bloomava-creative-93.aura.build/bloomava-creative-93.aura.build/design-system.html",
    "titulo": "Bloomava - Design Inteligente & Branding",
    "subtitulo": "Criando identidades marcantes para o mundo digital",
    "nichos": [
      "agência criativa",
      "estúdio de branding",
      "design gráfico",
      "identidade visual",
      "marketing de influência",
      "comunicação visual",
      "consultoria de marca"
    ],
    "estilo_visual": [
      "criativo contemporâneo",
      "tipografia expressiva",
      "cores pastéis com acentos vibrantes"
    ],
    "clima_sensacao": [
      "vitalidade",
      "criatividade",
      "otimismo",
      "frescor visual"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#fef2f2",
      "#0f172a",
      "#f43f5e",
      "#fb7185"
    ],
    "efeitos_visuais": [
      "stickers flutuantes",
      "cards coloridos com sombras em camadas",
      "tags em cápsula dinâmicas"
    ],
    "componentes_chave": [
      "showcase de cases com tags",
      "seção de serviços em cards expansíveis",
      "formulário de briefing rápido"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Agências de branding, estúdios de design, produtoras de conteúdo e consultorias de posicionamento de marca.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#fef2f2",
      "accentColor": "#f43f5e",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services02",
      "cta": "cta/CTA01",
      "footer": "footer/Footer02",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "condor-landingpage.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/condor-landingpage.aura.build",
    "pagina_principal": "temas_claros/condor-landingpage.aura.build/condor-landingpage.aura.build/design-system.html",
    "design_system_page": "temas_claros/condor-landingpage.aura.build/condor-landingpage.aura.build/design-system.html",
    "titulo": "CONDOR - A Revolução da CNH & Autoescola",
    "subtitulo": "A liberdade para ensinar e aprender a dirigir com confiança",
    "nichos": [
      "autoescola",
      "formação de condutores",
      "habilitação e CNH",
      "serviços de trânsito",
      "despachante",
      "escola profissionalizante",
      "serviços locais essenciais"
    ],
    "estilo_visual": [
      "acessível e direto",
      "alta conversão",
      "cores de contraste alto",
      "amigável"
    ],
    "clima_sensacao": [
      "facilidade",
      "confiança",
      "agilidade",
      "praticidade"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8fafc",
      "#0f172a",
      "#2563eb",
      "#eab308"
    ],
    "efeitos_visuais": [
      "passo a passo visual (1-2-3)",
      "selos de aprovação",
      "botões de ação com alto contraste"
    ],
    "componentes_chave": [
      "simulador de categoria de CNH",
      "depoimentos de alunos aprovados",
      "FAQ sanfonado",
      "CTA direto de WhatsApp"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Autoescolas, CFCs, despachantes, cursos de formação técnica e negócios locais de alta demanda.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f8fafc",
      "accentColor": "#2563eb",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "digital-architect.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/digital-architect.aura.build",
    "pagina_principal": "temas_claros/digital-architect.aura.build/index.html",
    "design_system_page": "temas_claros/digital-architect.aura.build/design-system.html",
    "titulo": "Digital Architect - Portfólio de Product Designer",
    "subtitulo": "Transformando complexidade em produtos intuitivos",
    "nichos": [
      "portfólio UX/UI",
      "product designer",
      "lead designer",
      "design system specialist",
      "consultoria de usabilidade",
      "design de produtos digitais",
      "pesquisa de usuário"
    ],
    "estilo_visual": [
      "minimalismo estruturado",
      "layout de alta precisão",
      "suíço moderno"
    ],
    "clima_sensacao": [
      "metodologia",
      "profundidade técnica",
      "clareza",
      "sofisticação funcional"
    ],
    "paleta_predominante": [
      "#f8fafc",
      "#ffffff",
      "#020617",
      "#0284c7"
    ],
    "efeitos_visuais": [
      "estudo de caso com timeline de processo",
      "zoom em protótipos",
      "estatísticas de impacto em destaque"
    ],
    "componentes_chave": [
      "cards de case studies com métricas de impacto",
      "stack de ferramentas utilizadas",
      "artigos publicados"
    ],
    "fontes": [
      "Inter",
      "Geist"
    ],
    "melhor_para": "Product Designers seniores, líderes de design, consultores de experiência do usuário e arquitetos de informação.",
    "tokens": {
      "primaryColor": "#020617",
      "secondaryColor": "#ffffff",
      "accentColor": "#0284c7",
      "backgroundColor": "#f8fafc",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Geist",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services02",
      "cta": "cta/CTA01",
      "footer": "footer/Footer02",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "echelon.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/echelon.aura.build",
    "pagina_principal": "temas_claros/echelon.aura.build/design-system.html",
    "design_system_page": "temas_claros/echelon.aura.build/design-system.html",
    "titulo": "Echelon Atelier — Planejamento de Eventos de Alto Padrão (Claro)",
    "subtitulo": "Eventos curados para marcas, líderes e círculos privados",
    "nichos": [
      "eventos de luxo",
      "casamentos sofisticados",
      "assessoria de eventos VIP",
      "concierge corporativo",
      "jantares de gala",
      "festas exclusivas",
      "espaços para festas nobres"
    ],
    "estilo_visual": [
      "alta costura",
      "editorial nobre",
      "elegância clássica europeia",
      "serifado"
    ],
    "clima_sensacao": [
      "exclusividade máxima",
      "prestígio",
      "glamour discreto",
      "hospitalidade impecável"
    ],
    "paleta_predominante": [
      "#fdfbf7",
      "#ffffff",
      "#1f1d1d",
      "#c5a880"
    ],
    "efeitos_visuais": [
      "títulos monumentais com espaçamento refinado",
      "fotos de eventos em alta resolução",
      "bordas em ouro suave"
    ],
    "componentes_chave": [
      "galeria de celebrações históricas",
      "serviços de atelier sob medida",
      "formulário de consulta privada"
    ],
    "fontes": [
      "Playfair Display",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Cerimonialistas de elite, organizadores de conferências VIP, buffets de alta gastronomia e locais de casamento luxuosos.",
    "tokens": {
      "primaryColor": "#1f1d1d",
      "secondaryColor": "#ffffff",
      "accentColor": "#c5a880",
      "backgroundColor": "#fdfbf7",
      "textColor": "#0f172a",
      "headingFont": "Playfair Display",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "elicyon.com",
    "tema": "claro",
    "caminho": "temas_claros/elicyon.com",
    "pagina_principal": "temas_claros/elicyon.com/elicyon.com/design-system.html",
    "design_system_page": "temas_claros/elicyon.com/elicyon.com/design-system.html",
    "titulo": "Elicyon - Global Luxury Interior Design Studio",
    "subtitulo": "Espaços atemporais desenhados sob medida nos melhores endereços do mundo",
    "nichos": [
      "design de interiores de alto luxo",
      "arquitetura residencial nobre",
      "penthouses",
      "mansões",
      "decoração requintada",
      "reformas de luxo",
      "imóveis históricos"
    ],
    "estilo_visual": [
      "luxo britânico",
      "atemporal",
      "materiais nobres",
      "minimalismo sofisticado"
    ],
    "clima_sensacao": [
      "opulência discreta",
      "herança e artesanato",
      "conforto absoluto"
    ],
    "paleta_predominante": [
      "#fbf9f5",
      "#ede8e1",
      "#1a1a1a",
      "#9a8c78"
    ],
    "efeitos_visuais": [
      "fotos de mármore e tecidos finos",
      "transições fluidas de ambiente",
      "detalhes de mobiliário sob medida"
    ],
    "componentes_chave": [
      "portfólio de residências privadas",
      "seção de materiais e artesãos parceiros",
      "contato com o atelier"
    ],
    "fontes": [
      "Cormorant Garamond",
      "Montserrat"
    ],
    "melhor_para": "Estúdios de design de interiores de prestígio internacional, decoradores de alto escalão e arquitetura de coberturas.",
    "tokens": {
      "primaryColor": "#1a1a1a",
      "secondaryColor": "#ede8e1",
      "accentColor": "#9a8c78",
      "backgroundColor": "#fbf9f5",
      "textColor": "#0f172a",
      "headingFont": "Cormorant Garamond",
      "bodyFont": "Montserrat",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "financial-infrastruc-68.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/financial-infrastruc-68.aura.build",
    "pagina_principal": "temas_claros/financial-infrastruc-68.aura.build/financial-infrastruc-68.aura.build/design-system.html",
    "design_system_page": "temas_claros/financial-infrastruc-68.aura.build/financial-infrastruc-68.aura.build/design-system.html",
    "titulo": "Swipeeely - Plataforma de Infraestrutura Financeira",
    "subtitulo": "A API unificada para a infraestrutura financeira moderna",
    "nichos": [
      "fintech B2B",
      "gateways de pagamento",
      "APIs bancárias",
      "open banking",
      "serviços financeiros",
      "conciliação bancária",
      "emissão de cartões",
      "infraestrutura tech"
    ],
    "estilo_visual": [
      "Stripe-like",
      "clean moderno",
      "precisão matemática",
      "confiabilidade financeira"
    ],
    "clima_sensacao": [
      "estabilidade bancária",
      "velocidade de liquidação",
      "segurança institucional"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8fafc",
      "#0f172a",
      "#4f46e5",
      "#06b6d4"
    ],
    "efeitos_visuais": [
      "interativo de requisições de código API",
      "fluxos de dinheiro ilustrados",
      "badges de conformidade PCI-DSS"
    ],
    "componentes_chave": [
      "terminal de código dinâmico",
      "calculadora de taxas por transação",
      "status uptime 99.999%"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Plataformas de pagamento, bancos digitais corporativos, soluções de faturamento e infraestruturas financeiras.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f8fafc",
      "accentColor": "#4f46e5",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "futureui.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/futureui.aura.build",
    "pagina_principal": "temas_claros/futureui.aura.build/index.html",
    "design_system_page": "temas_claros/futureui.aura.build/design-system.html",
    "titulo": "Future UI - Industrial Design System",
    "subtitulo": "Construa interfaces rápidas e escaláveis para sistemas industriais",
    "nichos": [
      "design systems",
      "software industrial",
      "automação de fábrica",
      "painéis de controle SCADA",
      "frameworks de componentes",
      "ferramentas internas de engenharia",
      "SaaS para manufatura"
    ],
    "estilo_visual": [
      "industrial moderno",
      "grid rigoroso",
      "botões táteis definidos",
      "alta densidade de informação"
    ],
    "clima_sensacao": [
      "eficiência operacional",
      "durabilidade",
      "precisão de engenharia"
    ],
    "paleta_predominante": [
      "#f8f9fa",
      "#e9ecef",
      "#212529",
      "#0d6efd",
      "#fd7e14"
    ],
    "efeitos_visuais": [
      "indicadores de status com luzes piloto",
      "tabelas densas com filtros",
      "cards com bordas de medição"
    ],
    "componentes_chave": [
      "biblioteca de botões industriais",
      "mostradores de métricas de máquinas",
      "seletor de tokens CSS"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "JetBrains Mono"
    ],
    "melhor_para": "Softwares de engenharia mecânica, gestão de linhas de produção, painéis industriais e bibliotecas corporativas de UI.",
    "tokens": {
      "primaryColor": "#212529",
      "secondaryColor": "#e9ecef",
      "accentColor": "#0d6efd",
      "backgroundColor": "#f8f9fa",
      "textColor": "#0f172a",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "JetBrains Mono",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "genlabs.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/genlabs.aura.build",
    "pagina_principal": "temas_claros/genlabs.aura.build/index.html",
    "design_system_page": "temas_claros/genlabs.aura.build/design-system.html",
    "titulo": "GenLabs - Web3 Finance Learning Lab",
    "subtitulo": "Laboratório de aprendizado prático em finanças descentralizadas",
    "nichos": [
      "educação Web3",
      "cursos de DeFi",
      "laboratórios cripto",
      "finanças do futuro",
      "comunidades de investidores",
      "escolas de blockchain",
      "mentoria financeira"
    ],
    "estilo_visual": [
      "clean tech educacional",
      "pastéis luminosos",
      "diagramas amigáveis",
      "futurista acessível"
    ],
    "clima_sensacao": [
      "aprendizado descomplicado",
      "vanguarda tecnológica",
      "segurança no investimento"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f5f3ff",
      "#1e1b4b",
      "#7c3aed",
      "#38bdf8"
    ],
    "efeitos_visuais": [
      "cards de lições com progresso em anel",
      "simulador de rendimentos",
      "selos de conclusão de módulo"
    ],
    "componentes_chave": [
      "trilhas de certificação",
      "simulador de carteira cripto",
      "depoimentos em vídeo"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Cursos de finanças digitais, plataformas de onboarding cripto, bootcamps de smart contracts e finanças pessoais.",
    "tokens": {
      "primaryColor": "#1e1b4b",
      "secondaryColor": "#f5f3ff",
      "accentColor": "#7c3aed",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "green-museum",
    "tema": "claro",
    "caminho": "temas_claros/green-museum",
    "pagina_principal": "temas_claros/green-museum/index.html",
    "design_system_page": "temas_claros/green-museum/design-system.html",
    "titulo": "Green Museum - Exhibition Hero & Cultural Heritage",
    "subtitulo": "Preservando a história natural e a arte sustentável",
    "nichos": [
      "museus",
      "exposições culturais",
      "jardins botânicos",
      "fundações ambientais",
      "galerias históricas",
      "sustentabilidade",
      "instituições ecológicas",
      "centros de visitantes"
    ],
    "estilo_visual": [
      "biofílico cultural",
      "sereno",
      "tons de terra e floresta",
      "elegância orgânica"
    ],
    "clima_sensacao": [
      "conexão com a natureza",
      "respeito ao tempo",
      "calma",
      "cultura e contemplação"
    ],
    "paleta_predominante": [
      "#fafaf7",
      "#f0f4f1",
      "#1b3322",
      "#2e7d32",
      "#8d6e63"
    ],
    "efeitos_visuais": [
      "molduras orgânicas para fotografias",
      "linhas de tempo históricas",
      "ícones de flora e fauna"
    ],
    "componentes_chave": [
      "agenda de exposições da temporada",
      "venda de ingressos com escolha de dia",
      "mapa interativo das galerias"
    ],
    "fontes": [
      "Playfair Display",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Museus, centros ambientais, fundações de preservação ecológica, zoológicos modernos e projetos botânicos.",
    "tokens": {
      "primaryColor": "#1b3322",
      "secondaryColor": "#f0f4f1",
      "accentColor": "#2e7d32",
      "backgroundColor": "#fafaf7",
      "textColor": "#0f172a",
      "headingFont": "Playfair Display",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "green-site",
    "tema": "claro",
    "caminho": "temas_claros/green-site",
    "pagina_principal": "temas_claros/green-site/green-site/design-system.html",
    "design_system_page": "temas_claros/green-site/green-site/design-system.html",
    "titulo": "Nova – Plataforma de Crescimento de Produto & CRO",
    "subtitulo": "Acelere seu crescimento. Desbrave novos horizontes de conversão",
    "nichos": [
      "growth marketing",
      "otimização de conversão CRO",
      "analytics",
      "consultoria de vendas",
      "agência de tráfego pago",
      "métricas B2B",
      "startups de performance"
    ],
    "estilo_visual": [
      "moderno enérgico",
      "foco em dados",
      "verde vibrante sobre fundo limpo",
      "alta conversão"
    ],
    "clima_sensacao": [
      "crescimento acelerado",
      "lucratividade",
      "clareza analítica",
      "energia positiva"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f0fdf4",
      "#0f172a",
      "#16a34a",
      "#22c55e"
    ],
    "efeitos_visuais": [
      "gráficos de linha ascendentes",
      "cards de métricas (ARR, Churn, LTV)",
      "efeito glow verde sutil"
    ],
    "componentes_chave": [
      "calculadora de impacto de conversão",
      "comparativo antes/depois",
      "formulário de auditoria gratuita"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Agências de performance, plataformas de testes A/B, softwares de CRO e consultorias de expansão de receitas.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f0fdf4",
      "accentColor": "#16a34a",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services02",
      "cta": "cta/CTA01",
      "footer": "footer/Footer02",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "hu169yr",
    "tema": "claro",
    "caminho": "temas_claros/hu169yr",
    "pagina_principal": "temas_claros/hu169yr/index.html",
    "design_system_page": "temas_claros/hu169yr/design-system.html",
    "titulo": "CryptoLearn Academy - Master Digital Finance",
    "subtitulo": "Aprenda a investir no mercado cripto com estratégias validadas",
    "nichos": [
      "cursos de trading",
      "investimentos para iniciantes",
      "mentoria financeira",
      "educação financeira",
      "criptoativos",
      "gestão de carteira pessoal"
    ],
    "estilo_visual": [
      "fintech clean",
      "didático",
      "azul confiança",
      "alta credibilidade"
    ],
    "clima_sensacao": [
      "segurança nos passos",
      "clareza didática",
      "sucesso financeiro"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8fafc",
      "#0f172a",
      "#2563eb",
      "#10b981"
    ],
    "efeitos_visuais": [
      "quadro de cotações simulado",
      "grades de módulos passo a passo",
      "selo de garantia incondicional"
    ],
    "componentes_chave": [
      "grade curricular completa",
      "perfil dos instrutores traders",
      "tabela de preços parcelada"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Educadores financeiros, analistas CNPI, cursos de bolsa de valores e trading descomplicado.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f8fafc",
      "accentColor": "#2563eb",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "imagenation.art",
    "tema": "claro",
    "caminho": "temas_claros/imagenation.art",
    "pagina_principal": "temas_claros/imagenation.art/imagenation.art/design-system.html",
    "design_system_page": "temas_claros/imagenation.art/imagenation.art/design-system.html",
    "titulo": "Imagenation | Formações Criativas para Dominar o Mundo",
    "subtitulo": "Comunidade exclusiva para artistas digitais e criadores com IA",
    "nichos": [
      "comunidade artística",
      "escola de artes digitais",
      "cursos de ilustração",
      "criadores de conteúdo",
      "clube de membros exclusivo",
      "concept art",
      "designers gráficos"
    ],
    "estilo_visual": [
      "artístico arrojado",
      "tipografia forte",
      "estética editorial de vanguarda"
    ],
    "clima_sensacao": [
      "exclusividade",
      "pertencimento",
      "alta criatividade",
      "ousadia"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#faf5ff",
      "#18181b",
      "#9333ea",
      "#ec4899"
    ],
    "efeitos_visuais": [
      "contador regressivo de vagas de membros fundadores",
      "mosaico de trabalhos de artistas",
      "badges de status VIP"
    ],
    "componentes_chave": [
      "painel de vagas limitadas",
      "galeria de criações de membros",
      "faq sobre comunidade"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Comunidades criativas de alto tíquete, clubes de membros, cursos de ilustração digital e mentoria de artistas.",
    "tokens": {
      "primaryColor": "#18181b",
      "secondaryColor": "#faf5ff",
      "accentColor": "#9333ea",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "jonathanfernandes.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/jonathanfernandes.aura.build",
    "pagina_principal": "temas_claros/jonathanfernandes.aura.build/jonathanfernandes.aura.build/design-system.html",
    "design_system_page": "temas_claros/jonathanfernandes.aura.build/jonathanfernandes.aura.build/design-system.html",
    "titulo": "faux.moni — Portfólio de Product Designer & Design Systems",
    "subtitulo": "Criando sistemas visuais duradouros para produtos de escala global",
    "nichos": [
      "portfólio sênior",
      "design lead",
      "consultor de design system",
      "designer de interface",
      "diretor de design",
      "design ops"
    ],
    "estilo_visual": [
      "minimalista suíço",
      "espaçamento generoso",
      "ultra-refinado",
      "sóbrio"
    ],
    "clima_sensacao": [
      "autoridade silenciosa",
      "maestria em design",
      "precisão milimétrica"
    ],
    "paleta_predominante": [
      "#fcfcfc",
      "#f4f4f5",
      "#18181b",
      "#71717a"
    ],
    "efeitos_visuais": [
      "interações minimalistas",
      "tabelas de tokens de design",
      "detalhamento minucioso de componentes"
    ],
    "componentes_chave": [
      "estudos de caso corporativos",
      "guia de princípios de design",
      "formulário discreto de contratação"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Designers líderes de big techs, consultores de Design Ops e especialistas em sistemas de design escaláveis.",
    "tokens": {
      "primaryColor": "#18181b",
      "secondaryColor": "#f4f4f5",
      "accentColor": "#71717a",
      "backgroundColor": "#fcfcfc",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "luxury-desert-retreat-1.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/luxury-desert-retreat-1.aura.build",
    "pagina_principal": "temas_claros/luxury-desert-retreat-1.aura.build/luxury-desert-retreat-1.aura.build/design-system.html",
    "design_system_page": "temas_claros/luxury-desert-retreat-1.aura.build/luxury-desert-retreat-1.aura.build/design-system.html",
    "titulo": "Sirocco — Refúgio de Luxo no Deserto | Merzouga",
    "subtitulo": "Onde o silêncio do deserto encontra o conforto supremo de um oásis privativo",
    "nichos": [
      "hotelaria de luxo",
      "resorts ecológicos",
      "glamping de alto padrão",
      "retiros de bem-estar",
      "turismo exclusivo",
      "pousadas boutique",
      "spas naturais",
      "experiências no deserto"
    ],
    "estilo_visual": [
      "oásis acolhedor",
      "tons de areia e terracota",
      "fotografia imersiva",
      "luxo relaxante"
    ],
    "clima_sensacao": [
      "paz profunda",
      "desconexão e descanso",
      "hospitalidade calorosa",
      "sensorial"
    ],
    "paleta_predominante": [
      "#fdfbf7",
      "#fef3c7",
      "#292524",
      "#d97706",
      "#b45309"
    ],
    "efeitos_visuais": [
      "galeria panorâmica de dunas",
      "cards de tendas de luxo com amenidades",
      "transições calmas"
    ],
    "componentes_chave": [
      "motor de reserva com seleção de noites",
      "catálogo de experiências (passeios a camelo, jantares sob estrelas)",
      "avaliações de hóspedes"
    ],
    "fontes": [
      "Playfair Display",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Resorts no deserto ou praia, pousadas de charme em refúgios naturais, glampings e spas de desintoxicação.",
    "tokens": {
      "primaryColor": "#292524",
      "secondaryColor": "#fef3c7",
      "accentColor": "#d97706",
      "backgroundColor": "#fdfbf7",
      "textColor": "#0f172a",
      "headingFont": "Playfair Display",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "luxury-real-estate-22.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/luxury-real-estate-22.aura.build",
    "pagina_principal": "temas_claros/luxury-real-estate-22.aura.build/luxury-real-estate-22.aura.build/design-system.html",
    "design_system_page": "temas_claros/luxury-real-estate-22.aura.build/luxury-real-estate-22.aura.build/design-system.html",
    "titulo": "Fleet Management & Co | Imóveis de Alto Padrão",
    "subtitulo": "Expertise completa e portfólio incomparável de propriedades exclusivas",
    "nichos": [
      "imobiliária de luxo",
      "corretor de imóveis VIP",
      "mansões e coberturas",
      "investimentos imobiliários",
      "incorporadora imobiliária",
      "propriedades na praia/campo"
    ],
    "estilo_visual": [
      "corporativo imobiliário refinado",
      "azul marinho nobre",
      "limpo e confiável"
    ],
    "clima_sensacao": [
      "solidez financeira",
      "prestígio patrimonial",
      "segurança jurídica"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8fafc",
      "#0f172a",
      "#1e3a8a",
      "#d97706"
    ],
    "efeitos_visuais": [
      "filtro avançado de imóveis (quartos, m², localização)",
      "cards com fotos em alta definição",
      "selos de exclusividade"
    ],
    "componentes_chave": [
      "busca rápida de imóveis",
      "tour virtual 360",
      "agendamento direto de visita privativa com o corretor"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Imobiliárias especializadas em bairros nobres, corretores autônomos de mansões e incorporadoras de luxo.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f8fafc",
      "accentColor": "#1e3a8a",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "nexus-architecture.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/nexus-architecture.aura.build",
    "pagina_principal": "temas_claros/nexus-architecture.aura.build/nexus-architecture.aura.build/design-system.html",
    "design_system_page": "temas_claros/nexus-architecture.aura.build/nexus-architecture.aura.build/design-system.html",
    "titulo": "Nexus Architecture — O Futuro dos Espaços Urbanos",
    "subtitulo": "Redefinindo o skyline global através de arquitetura icônica",
    "nichos": [
      "arquitetura corporativa",
      "grandes construtoras",
      "engenharia civil de grande porte",
      "urbanismo moderno",
      "edifícios comerciais",
      "projetos governamentais e marcos icônicos"
    ],
    "estilo_visual": [
      "monumental clean",
      "brutalismo refinado",
      "linhas geométricas arrojadas",
      "caixa alta imponente"
    ],
    "clima_sensacao": [
      "visão de futuro",
      "grandiosidade",
      "solidez construtiva",
      "impacto urbano"
    ],
    "paleta_predominante": [
      "#f8f9fa",
      "#e9ecef",
      "#111827",
      "#3b82f6"
    ],
    "efeitos_visuais": [
      "tipografia monumental em caixa alta",
      "fotografia arquitetônica de grande escala",
      "separadores em linhas vetoriais"
    ],
    "componentes_chave": [
      "linha do tempo de grandes obras",
      "especificações estruturais dos edifícios",
      "equipe de sócios-arquitetos"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Empresas de engenharia e construção civil de grande porte, consórcios de infraestrutura e estúdios de arquitetura urbana.",
    "tokens": {
      "primaryColor": "#111827",
      "secondaryColor": "#e9ecef",
      "accentColor": "#3b82f6",
      "backgroundColor": "#f8f9fa",
      "textColor": "#0f172a",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "none",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "open-design.ai",
    "tema": "claro",
    "caminho": "temas_claros/open-design.ai",
    "pagina_principal": "temas_claros/open-design.ai/open-design.ai/design-system.html",
    "design_system_page": "temas_claros/open-design.ai/open-design.ai/design-system.html",
    "titulo": "Open Design — Alternativa Open-Source de Design com IA",
    "subtitulo": "Crie interfaces com agentes inteligentes rodando localmente",
    "nichos": [
      "open source",
      "ferramentas para desenvolvedores",
      "design com IA",
      "extensões de código",
      "softwares livres",
      "frameworks frontend",
      "SDKs"
    ],
    "estilo_visual": [
      "dev minimalista",
      "estilo GitHub/Vercel claro",
      "foco em código",
      "sem distrações"
    ],
    "clima_sensacao": [
      "liberdade de código",
      "transparência técnica",
      "agilidade comunitária"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f4f4f5",
      "#09090b",
      "#2563eb"
    ],
    "efeitos_visuais": [
      "botão com contador de estrelas no GitHub",
      "bloco de instalação `npm i` ou `git clone` copiável",
      "badges de licença MIT"
    ],
    "componentes_chave": [
      "guia de início rápido em 3 passos",
      "tabela comparativa vs soluções fechadas",
      "painel de colaboradores"
    ],
    "fontes": [
      "Inter",
      "Geist"
    ],
    "melhor_para": "Projetos de código aberto, ferramentas de terminal, bibliotecas npm/pypi e utilitários técnicos para desenvolvedores.",
    "tokens": {
      "primaryColor": "#09090b",
      "secondaryColor": "#f4f4f5",
      "accentColor": "#2563eb",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Geist",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "parallax-clean",
    "tema": "claro",
    "caminho": "temas_claros/parallax-clean",
    "pagina_principal": "temas_claros/parallax-clean/index.html",
    "design_system_page": "temas_claros/parallax-clean/design-system.html",
    "titulo": "AETHEREAL | Future Living - Design System",
    "subtitulo": "Harmonia entre materiais puros, concreto arquitetônico e natureza",
    "nichos": [
      "vida urbana sustentável",
      "mobiliário minimalista",
      "marcas de lifestyle premium",
      "empreendimentos residenciais conceituais",
      "produtos de design escandinavo"
    ],
    "estilo_visual": [
      "minimalismo escandinavo",
      "concreto claro",
      "espaçamento generoso",
      "parallax suave"
    ],
    "clima_sensacao": [
      "respiração visual",
      "pureza de materiais",
      "serenidade moderna"
    ],
    "paleta_predominante": [
      "#f5f5f4",
      "#e7e5e4",
      "#1c1917",
      "#78716c"
    ],
    "efeitos_visuais": [
      "rolagem com camadas em parallax suave",
      "revelação de imagens por fade sutil",
      "tipografia espaçada"
    ],
    "componentes_chave": [
      "mostruário de materiais (concreto, vidro, madeira)",
      "galeria de ambientes",
      "depoimentos de moradores"
    ],
    "fontes": [
      "Manrope",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Marcas de mobiliário assinado, empreendimentos bioclimáticos e produtos de bem-estar minimalistas.",
    "tokens": {
      "primaryColor": "#1c1917",
      "secondaryColor": "#e7e5e4",
      "accentColor": "#78716c",
      "backgroundColor": "#f5f5f4",
      "textColor": "#0f172a",
      "headingFont": "Manrope",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "parallax-clean (1)",
    "tema": "claro",
    "caminho": "temas_claros/parallax-clean (1)",
    "pagina_principal": "temas_claros/parallax-clean (1)/parallax-clean/design-system.html",
    "design_system_page": "temas_claros/parallax-clean (1)/parallax-clean/design-system.html",
    "titulo": "AETHEREAL | Vida Futura (Variante Editorial)",
    "subtitulo": "Explorando a união do concreto sustentável com o design vivo",
    "nichos": [
      "arquitetura residencial limpa",
      "lifestyle sustentável",
      "publicações de design",
      "design de produto conceitual",
      "mobiliário de autor"
    ],
    "estilo_visual": [
      "editorial arquitetônico",
      "tipografia Syncopate",
      "linhas puras",
      "monocromático claro"
    ],
    "clima_sensacao": [
      "vanguarda arquitetônica",
      "tranquilidade espacial",
      "harmonia minimalista"
    ],
    "paleta_predominante": [
      "#fcfcfc",
      "#e4e4e7",
      "#18181b",
      "#52525b"
    ],
    "efeitos_visuais": [
      "efeito de rolagem parallax multicamada",
      "títulos em caixa alta ampla",
      "máscaras de recorte moderno"
    ],
    "componentes_chave": [
      "editorial de sustentabilidade",
      "especificações ecológicas do projeto",
      "galeria de detalhes construtivos"
    ],
    "fontes": [
      "Syncopate",
      "Manrope"
    ],
    "melhor_para": "Estúdios conceituais de design sustentável, mostras de decoração (CasaCor) e livros de arquitetura contemporânea.",
    "tokens": {
      "primaryColor": "#18181b",
      "secondaryColor": "#e4e4e7",
      "accentColor": "#52525b",
      "backgroundColor": "#fcfcfc",
      "textColor": "#0f172a",
      "headingFont": "Syncopate",
      "bodyFont": "Manrope",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "parallax-geometry",
    "tema": "claro",
    "caminho": "temas_claros/parallax-geometry",
    "pagina_principal": "temas_claros/parallax-geometry/index.html",
    "design_system_page": "temas_claros/parallax-geometry/design-system.html",
    "titulo": "Parallax Light Field Interface - Design System",
    "subtitulo": "Interações geométricas baseadas em campos de luz e sombras dinâmicas",
    "nichos": [
      "laboratório de design experimental",
      "instalações interativas",
      "marcas de moda vanguardista",
      "estúdios de tecnologia criativa",
      "exibições de arte digital",
      "produtos conceituais"
    ],
    "estilo_visual": [
      "geométrico experimental",
      "sombras volumétricas",
      "grid vetorial dinâmico",
      "moderno"
    ],
    "clima_sensacao": [
      "curiosidade intelectual",
      "vanguarda visual",
      "sofisticação técnica"
    ],
    "paleta_predominante": [
      "#f8f9fa",
      "#e9ecef",
      "#0f172a",
      "#6366f1"
    ],
    "efeitos_visuais": [
      "interação de luz que segue o cursor",
      "geometrias que se reconfiguram ao rolar",
      "cards com sombras facetadas"
    ],
    "componentes_chave": [
      "painel interativo de luz e sombra",
      "galeria de experimentos de código",
      "especificações matemáticas"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Projetos de tecnologia criativa, estúdios de arte generativa e marcas de alta moda com viés futurista.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#e9ecef",
      "accentColor": "#6366f1",
      "backgroundColor": "#f8f9fa",
      "textColor": "#0f172a",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "light",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "playverse.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/playverse.aura.build",
    "pagina_principal": "temas_claros/playverse.aura.build/playverse.aura.build/design-system.html",
    "design_system_page": "temas_claros/playverse.aura.build/playverse.aura.build/design-system.html",
    "titulo": "Playverse - Descubra Jogos Mobile Épicos",
    "subtitulo": "Mundos imersivos, aventuras instantâneas e batalhas com amigos",
    "nichos": [
      "jogos mobile",
      "estúdios de desenvolvimento de games",
      "portais de jogos",
      "aplicativos infantis",
      "gamificação",
      "comunidades casuais de jogos",
      "entretenimento digital"
    ],
    "estilo_visual": [
      "gamificado vibrante",
      "arredondado amigável",
      "cores alegres sobre fundo limpo"
    ],
    "clima_sensacao": [
      "diversão imediata",
      "energia lúdica",
      "alta empolgação",
      "acessibilidade"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#faf5ff",
      "#0f172a",
      "#8b5cf6",
      "#f59e0b"
    ],
    "efeitos_visuais": [
      "botões estilo App Store e Google Play",
      "cards de personagens em 3D estilizado",
      "estrelas de pontuação brilhantes"
    ],
    "componentes_chave": [
      "carrossel de trailers de gameplay",
      "ranking de melhores jogadores do mês",
      "badges de conquistas desbloqueáveis"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Publicadoras de jogos para celular, estúdios indie, portais de minigames e plataformas de jogos educativos.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#faf5ff",
      "accentColor": "#8b5cf6",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "preview.naapothemes.net_sanok_demo9",
    "tema": "claro",
    "caminho": "temas_claros/preview.naapothemes.net_sanok_demo9",
    "pagina_principal": "temas_claros/preview.naapothemes.net_sanok_demo9/preview.naapothemes.net_sanok_demo9/design-system.html",
    "design_system_page": "temas_claros/preview.naapothemes.net_sanok_demo9/preview.naapothemes.net_sanok_demo9/design-system.html",
    "titulo": "Sanok — Minimalist One-Page & Multi-Page Template",
    "subtitulo": "Nós criamos soluções simples para marcas de alto impacto",
    "nichos": [
      "agência de marketing digital",
      "consultoria de negócios",
      "serviços profissionais",
      "pequenas e médias empresas",
      "escritórios de advocacia modernos",
      "contabilidade consultiva"
    ],
    "estilo_visual": [
      "clean corporativo clássico",
      "one-page versátil",
      "alta legibilidade",
      "equilibrado"
    ],
    "clima_sensacao": [
      "profissionalismo sólido",
      "clareza de propostas",
      "confiança acessível"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f8fafc",
      "#1e293b",
      "#2563eb"
    ],
    "efeitos_visuais": [
      "rolagem contínua suave entre seções",
      "cards de serviços em 3 colunas",
      "tabela simples de contato"
    ],
    "componentes_chave": [
      "menu de navegação âncora",
      "grid de clientes atendidos",
      "formulário de contato rápido e direto"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Sites institucionais para prestadores de serviços, consultorias de gestão e empresas locais.",
    "tokens": {
      "primaryColor": "#1e293b",
      "secondaryColor": "#f8fafc",
      "accentColor": "#2563eb",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services02",
      "cta": "cta/CTA01",
      "footer": "footer/Footer02",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "savory-plate.aura.build",
    "tema": "claro",
    "caminho": "temas_claros/savory-plate.aura.build",
    "pagina_principal": "temas_claros/savory-plate.aura.build/savory-plate.aura.build/design-system.html",
    "design_system_page": "temas_claros/savory-plate.aura.build/savory-plate.aura.build/design-system.html",
    "titulo": "The Savory Plate - Receitas & Culinária Contemporânea",
    "subtitulo": "Domine a arte da cozinha em casa com receitas guiadas por chefs",
    "nichos": [
      "gastronomia",
      "restaurantes gourmet",
      "bistrôs",
      "escolas de culinária",
      "blog de receitas",
      "chefs particulares",
      "confeitaria artesanal",
      "delivery premium",
      "alimentos saudáveis"
    ],
    "estilo_visual": [
      "editorial gastronômico",
      "cores quentes e apetitosas",
      "fotografia de comida exuberante",
      "elegância acolhedora"
    ],
    "clima_sensacao": [
      "sabor",
      "afeto gastronômico",
      "sofisticação culinária",
      "prazer à mesa"
    ],
    "paleta_predominante": [
      "#fffcf7",
      "#fed7aa",
      "#292524",
      "#ea580c",
      "#84cc16"
    ],
    "efeitos_visuais": [
      "ficha de receita com tempo de preparo e porções",
      "lista de ingredientes com checkbox",
      "fotos de pratos com zoom sutil"
    ],
    "componentes_chave": [
      "cardápio sazonal interativo",
      "sistema de busca de receitas por ingrediente",
      "reserva de mesa online"
    ],
    "fontes": [
      "Playfair Display",
      "Plus Jakarta Sans",
      "Geist Mono"
    ],
    "melhor_para": "Restaurantes sofisticados, confeitarias finas, chefs executivos, lojas de cafés especiais e blogs de culinária.",
    "tokens": {
      "primaryColor": "#292524",
      "secondaryColor": "#fed7aa",
      "accentColor": "#ea580c",
      "backgroundColor": "#fffcf7",
      "textColor": "#0f172a",
      "headingFont": "Playfair Display",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "light",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "white-medical",
    "tema": "claro",
    "caminho": "temas_claros/white-medical",
    "pagina_principal": "temas_claros/white-medical/index.html",
    "design_system_page": "temas_claros/white-medical/design-system.html",
    "titulo": "VITALIS - Advanced Medical Care & Clinic Design System",
    "subtitulo": "Precisão médica, tecnologia de ponta e cuidado humanizado",
    "nichos": [
      "clínicas médicas",
      "odontologia e dentistas",
      "hospitais",
      "cirurgia plástica",
      "dermatologia",
      "laboratórios de análises",
      "fisioterapia",
      "oftalmologia",
      "psicologia",
      "estética avançada"
    ],
    "estilo_visual": [
      "clínico impecável",
      "branco puro asséptico",
      "azul serenidade",
      "linhas de precisão médica"
    ],
    "clima_sensacao": [
      "higiene absoluta",
      "confiança profissional",
      "segurança à saúde",
      "acolhimento sereno"
    ],
    "paleta_predominante": [
      "#ffffff",
      "#f0f9ff",
      "#0f172a",
      "#0284c7",
      "#0ea5e9"
    ],
    "efeitos_visuais": [
      "linhas sutis de grid cirúrgico",
      "efeito reveal suave de credenciais",
      "cards de especialidades com ícones médicos"
    ],
    "componentes_chave": [
      "quadro de corpo clínico com CRM/CRO",
      "agendador de consultas online",
      "tabela de convênios aceitos",
      "depoimentos de pacientes"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Consultórios odontológicos, clínicas médicas gerais e especializadas, centros de cirurgia plástica e laboratórios diagnósticos.",
    "tokens": {
      "primaryColor": "#0f172a",
      "secondaryColor": "#f0f9ff",
      "accentColor": "#0284c7",
      "backgroundColor": "#ffffff",
      "textColor": "#0f172a",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "lg",
      "mode": "light",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "projects": "projects/Projects01",
      "cta": "cta/CTA02",
      "footer": "footer/Footer02",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "aetheris-web3-72.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/aetheris-web3-72.aura.build",
    "pagina_principal": "temas_escuros/aetheris-web3-72.aura.build/design-system.html",
    "design_system_page": "temas_escuros/aetheris-web3-72.aura.build/design-system.html",
    "titulo": "AETHERIS | Blockchain Layer 1 Escalável e Protocolo DAG",
    "subtitulo": "Velocidade infinita, finalidade em microssegundos e consenso descentralizado",
    "nichos": [
      "blockchain Layer 1",
      "redes descentralizadas",
      "protocolos Web3",
      "DeFi de alto rendimento",
      "criptomoedas",
      "mineração digital",
      "smart contracts",
      "ecossistemas de tokens"
    ],
    "estilo_visual": [
      "cyber-futurista",
      "espaço sideral escuro",
      "neon azul e púrpura",
      "linhas de constelação"
    ],
    "clima_sensacao": [
      "escala planetária",
      "tecnologia revolucionária",
      "segurança criptográfica"
    ],
    "paleta_predominante": [
      "#030712",
      "#0b132b",
      "#38bdf8",
      "#818cf8",
      "#c084fc"
    ],
    "efeitos_visuais": [
      "nós de DAG interconectados em animação",
      "contadores dinâmicos de TPS (transações/segundo)",
      "glow luminescente"
    ],
    "componentes_chave": [
      "painel de estatísticas de nós globais",
      "botão de download do Whitepaper",
      "roteiro de marcos da rede (Roadmap)"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Fundadores de criptomoedas, protocolos de infraestrutura Web3, redes DeFi e projetos de tokenização.",
    "tokens": {
      "primaryColor": "#38bdf8",
      "secondaryColor": "#0b132b",
      "accentColor": "#818cf8",
      "backgroundColor": "#030712",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "ai-intelligence-saas.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/ai-intelligence-saas.aura.build",
    "pagina_principal": "temas_escuros/ai-intelligence-saas.aura.build/design-system.html",
    "design_system_page": "temas_escuros/ai-intelligence-saas.aura.build/design-system.html",
    "titulo": "Omi — Plataforma de Inteligência Executiva de IA",
    "subtitulo": "Arquitete o invisível: decisões estratégicas alimentadas por inteligência autônoma",
    "nichos": [
      "plataformas de IA executiva",
      "inteligência de negócios (BI)",
      "software para C-level",
      "governança corporativa",
      "análise preditiva",
      "startups de IA enterprise",
      "gestão estratégica"
    ],
    "estilo_visual": [
      "luxo executivo escuro",
      "minimalismo misterioso",
      "luzes âmbar e azul profundo",
      "sóbrio"
    ],
    "clima_sensacao": [
      "poder executivo",
      "inteligência profunda",
      "visão de longo prazo",
      "alta autoridade"
    ],
    "paleta_predominante": [
      "#08080a",
      "#12131a",
      "#f59e0b",
      "#38bdf8",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "feixes de luz em cone sobre fundo preto",
      "tipografia monumental com alto espaçamento",
      "gráficos preditivos translúcidos"
    ],
    "componentes_chave": [
      "painel de síntese decisória para diretoria",
      "demonstração de insights de mercado",
      "solicitação de demo corporativa VIP"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Plataformas corporativas para diretores e CEOs, softwares de previsão financeira e consultorias de inteligência de mercado.",
    "tokens": {
      "primaryColor": "#f59e0b",
      "secondaryColor": "#12131a",
      "accentColor": "#38bdf8",
      "backgroundColor": "#08080a",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "dark",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "ai-social-automation.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/ai-social-automation.aura.build",
    "pagina_principal": "temas_escuros/ai-social-automation.aura.build/index.html",
    "design_system_page": "temas_escuros/ai-social-automation.aura.build/design-system.html",
    "titulo": "Luminous - AI Social Automation Platform",
    "subtitulo": "Alcance exponencial e automação de engajamento em todas as redes",
    "nichos": [
      "marketing de redes sociais",
      "geradores de conteúdo para criadores",
      "agendamento de posts",
      "automação de marketing",
      "ferramentas de TikTok e Instagram",
      "agências de social media"
    ],
    "estilo_visual": [
      "vibrante moderno dark",
      "gradientes rosa e violeta elétrico",
      "alta energia",
      "visual dinâmico"
    ],
    "clima_sensacao": [
      "viralidade",
      "crescimento de seguidores",
      "velocidade criativa",
      "empolgação"
    ],
    "paleta_predominante": [
      "#0b0c10",
      "#1f2833",
      "#ec4899",
      "#8b5cf6",
      "#06b6d4"
    ],
    "efeitos_visuais": [
      "cards flutuantes de notificações de engajamento",
      "simulador de calendário de postagens",
      "borda com gradiente animado"
    ],
    "componentes_chave": [
      "preview de posts em múltiplos formatos",
      "tabela de crescimento de métricas de engajamento",
      "planos para criadores vs agências"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Plataformas de automação para Instagram/TikTok, ferramentas para influenciadores digitais e agências de social media.",
    "tokens": {
      "primaryColor": "#ec4899",
      "secondaryColor": "#1f2833",
      "accentColor": "#8b5cf6",
      "backgroundColor": "#0b0c10",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "autonomous-drone-62.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/autonomous-drone-62.aura.build",
    "pagina_principal": "temas_escuros/autonomous-drone-62.aura.build/design-system.html",
    "design_system_page": "temas_escuros/autonomous-drone-62.aura.build/design-system.html",
    "titulo": "AERO_SYSTEMS // Infraestrutura Aérea Autônoma & Drones",
    "subtitulo": "Autonomia aérea militar e industrial para operações de missão crítica",
    "nichos": [
      "drones autônomos",
      "robótica aérea",
      "tecnologia de defesa e segurança",
      "vigilância perimetral",
      "inspeção industrial",
      "aeroespacial",
      "monitoramento agrícola de precisão"
    ],
    "estilo_visual": [
      "militar tático",
      "interface HUD estilo caça",
      "verde radar e amarelo aviso",
      "técnico industrial"
    ],
    "clima_sensacao": [
      "precisão letal",
      "vigilância constante",
      "robustez militar",
      "tecnologia de defesa"
    ],
    "paleta_predominante": [
      "#080a0f",
      "#0f172a",
      "#22c55e",
      "#eab308",
      "#64748b"
    ],
    "efeitos_visuais": [
      "mira telescópica e grade de coordenadas HUD",
      "telemetria de voo em tempo real",
      "cards de especificações de hardware"
    ],
    "componentes_chave": [
      "mapa tático com rotas de voo autônomas",
      "dados de alcance de bateria e payload",
      "formulário de licitação governamental/enterprise"
    ],
    "fontes": [
      "Space Grotesk",
      "Inter"
    ],
    "melhor_para": "Fabricantes de drones de segurança, empresas de inspeção aérea de pontes/linhas de transmissão e tecnologia militar.",
    "tokens": {
      "primaryColor": "#22c55e",
      "secondaryColor": "#0f172a",
      "accentColor": "#eab308",
      "backgroundColor": "#080a0f",
      "textColor": "#f8fafc",
      "headingFont": "Space Grotesk",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "axion-ai.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/axion-ai.aura.build",
    "pagina_principal": "temas_escuros/axion-ai.aura.build/design-system.html",
    "design_system_page": "temas_escuros/axion-ai.aura.build/design-system.html",
    "titulo": "Axion AI - Plataforma SaaS Enterprise de Grau Industrial",
    "subtitulo": "Escale suas operações complexas com automação autônoma de missão crítica",
    "nichos": [
      "SaaS enterprise industrial",
      "logística e supply chain",
      "automação de frotas",
      "manufatura avançada",
      "gestão de operações",
      "software de alta escala",
      "infraestrutura B2B"
    ],
    "estilo_visual": [
      "industrial escuro corporativo",
      "azul cobalto sobre preto grafite",
      "solidez robusta"
    ],
    "clima_sensacao": [
      "confiança inabalável",
      "zero tempo de inatividade",
      "potência operacional"
    ],
    "paleta_predominante": [
      "#0b0f19",
      "#111827",
      "#2563eb",
      "#60a5fa",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "indicador de 99.999% SLA",
      "diagrama de nós de distribuição logística",
      "tabelas densas de monitoramento"
    ],
    "componentes_chave": [
      "painel de governança corporativa",
      "simulação de redução de custos operacionais",
      "agendamento de reunião técnica"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Empresas de logística internacional, softwares de gestão de armazéns, indústria pesada e operadoras de telecom.",
    "tokens": {
      "primaryColor": "#2563eb",
      "secondaryColor": "#111827",
      "accentColor": "#60a5fa",
      "backgroundColor": "#0b0f19",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "barbershop-landing-51.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/barbershop-landing-51.aura.build",
    "pagina_principal": "temas_escuros/barbershop-landing-51.aura.build/design-system.html",
    "design_system_page": "temas_escuros/barbershop-landing-51.aura.build/design-system.html",
    "titulo": "BLADE & CO. | Barbearia Premium & Cuidados Masculinos",
    "subtitulo": "Onde o ofício encontra a tradição: cortes impecáveis e navalha afiada",
    "nichos": [
      "barbearia de luxo",
      "estética masculina",
      "salão gourmet masculino",
      "produtos para barba",
      "estúdio de tatuagem",
      "tabacaria e charutaria",
      "lifestyle clássico masculino",
      "whisky bar"
    ],
    "estilo_visual": [
      "vintage dark refinado",
      "madeira queimada e couro",
      "dourado clássico",
      "tipografia imponente"
    ],
    "clima_sensacao": [
      "masculinidade clássica",
      "tradição artesanal",
      "elegância rústica",
      "acolhimento VIP"
    ],
    "paleta_predominante": [
      "#0d0d0d",
      "#171717",
      "#d4af37",
      "#92400e",
      "#e5e5e5"
    ],
    "efeitos_visuais": [
      "cardápio de serviços estilo couro e ouro",
      "fotos macro de navalha e toalha quente",
      "bordas com filete dourado"
    ],
    "componentes_chave": [
      "agendamento online com escolha de profissional e hora",
      "catálogo de pomadas e óleos de barba",
      "galeria de cortes"
    ],
    "fontes": [
      "Playfair Display",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Barbearias conceituais, estúdios de tatuagem de alto padrão, marcas de cosméticos masculinos e clubes masculinos privados.",
    "tokens": {
      "primaryColor": "#d4af37",
      "secondaryColor": "#171717",
      "accentColor": "#92400e",
      "backgroundColor": "#0d0d0d",
      "textColor": "#f8fafc",
      "headingFont": "Playfair Display",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "cadence-landing-19.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/cadence-landing-19.aura.build",
    "pagina_principal": "temas_escuros/cadence-landing-19.aura.build/design-system.html",
    "design_system_page": "temas_escuros/cadence-landing-19.aura.build/design-system.html",
    "titulo": "Cadence — Plataforma de Receita & Inteligência Operacional",
    "subtitulo": "Inteligência de receita unificada: previsibilidade total do seu pipeline de vendas",
    "nichos": [
      "inteligência de receita",
      "CRM corporativo",
      "software de vendas B2B",
      "previsão de faturamento",
      "gestão de SDR e Closers",
      "SaaS para times comerciais"
    ],
    "estilo_visual": [
      "SaaS financeiro dark moderno",
      "ciano elétrico e azul marinho",
      "gráficos de alta resolução"
    ],
    "clima_sensacao": [
      "metas batidas",
      "clareza no funil",
      "controle total de faturamento",
      "velocidade"
    ],
    "paleta_predominante": [
      "#080c14",
      "#0f172a",
      "#06b6d4",
      "#3b82f6",
      "#f8fafc"
    ],
    "efeitos_visuais": [
      "gráficos de funil de vendas interativos",
      "cartões de previsão de fechamento",
      "integrações instantâneas (Slack/HubSpot)"
    ],
    "componentes_chave": [
      "calculadora de aceleração de receita",
      "visão unificada de pipeline",
      "comparativo de planos por tamanho de equipe"
    ],
    "fontes": [
      "Outfit",
      "Inter"
    ],
    "melhor_para": "Softwares de aceleração de vendas, ferramentas de CRM moderno, consultorias de expansão de receitas e analytics de vendas.",
    "tokens": {
      "primaryColor": "#06b6d4",
      "secondaryColor": "#0f172a",
      "accentColor": "#3b82f6",
      "backgroundColor": "#080c14",
      "textColor": "#f8fafc",
      "headingFont": "Outfit",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "canvas-visual.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/canvas-visual.aura.build",
    "pagina_principal": "temas_escuros/canvas-visual.aura.build/index.html",
    "design_system_page": "temas_escuros/canvas-visual.aura.build/design-system.html",
    "titulo": "Canvas - Visual Synthesis & AI Generative Art",
    "subtitulo": "Crie universos visuais extraordinários com modelos de síntese neural",
    "nichos": [
      "síntese visual de IA",
      "geradores de imagem e arte",
      "estúdios de computação gráfica",
      "concept art de cinema e games",
      "ferramentas criativas para diretores",
      "NFT e arte digital"
    ],
    "estilo_visual": [
      "futurismo cinematográfico",
      "halo de cores difusas sobre preto puro",
      "foco total em visuais épicos"
    ],
    "clima_sensacao": [
      "imaginação ilimitada",
      "surrealismo tecnológico",
      "inspiração arrebatadora"
    ],
    "paleta_predominante": [
      "#050505",
      "#121214",
      "#a855f7",
      "#ec4899",
      "#3b82f6"
    ],
    "efeitos_visuais": [
      "barra de prompt interativa que altera a arte na tela",
      "galeria em mosaico infinito",
      "efeito de iluminação de borda reativa"
    ],
    "componentes_chave": [
      "mostruário de estilos artísticos (cyberpunk, renascentista, anime)",
      "comparativo de resoluções de render",
      "test drive do prompt"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Startups de IA generativa para imagens e vídeos, plataformas de assets de arte para jogos e estúdios visuais.",
    "tokens": {
      "primaryColor": "#a855f7",
      "secondaryColor": "#121214",
      "accentColor": "#ec4899",
      "backgroundColor": "#050505",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "cogni.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/cogni.aura.build",
    "pagina_principal": "temas_escuros/cogni.aura.build/design-system.html",
    "design_system_page": "temas_escuros/cogni.aura.build/design-system.html",
    "titulo": "Cognix | Plataforma de Treino Cerebral & Biohacking",
    "subtitulo": "Expanda seus limites cognitivos com neurofeedback e monitoramento neural",
    "nichos": [
      "biohacking",
      "neurociência aplicada",
      "saúde cognitiva e foco mental",
      "wearables neurais",
      "nootrópicos",
      "aplicativos de meditação científica",
      "alta performance mental"
    ],
    "estilo_visual": [
      "biotecnologia dark",
      "ondas neurais bioluminescentes",
      "turquesa elétrico e púrpura"
    ],
    "clima_sensacao": [
      "hiperfoco",
      "evolução mental",
      "ciência de fronteira",
      "calma concentrada"
    ],
    "paleta_predominante": [
      "#07090e",
      "#0f172a",
      "#14b8a6",
      "#8b5cf6",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "ondas cerebrais em pulso senoidal",
      "medidor circular de índice de foco",
      "mapa cerebral interativo"
    ],
    "componentes_chave": [
      "protocolos de treino mental de 30 dias",
      "depoimentos de biohackers e atletas",
      "loja de dispositivos e suplementos"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Marcas de suplementos para foco, aparelhos de eletroencefalograma para uso pessoal, apps de alta produtividade e bem-estar mental.",
    "tokens": {
      "primaryColor": "#14b8a6",
      "secondaryColor": "#0f172a",
      "accentColor": "#8b5cf6",
      "backgroundColor": "#07090e",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "creative-agency-template.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/creative-agency-template.aura.build",
    "pagina_principal": "temas_escuros/creative-agency-template.aura.build/index.html",
    "design_system_page": "temas_escuros/creative-agency-template.aura.build/design-system.html",
    "titulo": "Creative - Digital Designer & Developer Showcase",
    "subtitulo": "Design radical, código impecável e experiências que quebram a internet",
    "nichos": [
      "agências digitais ousadas",
      "estúdios de design experimental",
      "portfólios criativos",
      "direção de arte para marcas de vanguarda",
      "produtoras audiovisuais",
      "desenvolvimento criativo"
    ],
    "estilo_visual": [
      "brutalismo dark ousado",
      "tipografia colossal",
      "amarelo neon e preto absoluto",
      "alta atitude"
    ],
    "clima_sensacao": [
      "impacto instantâneo",
      "rebeldia criativa",
      "inconformismo estético"
    ],
    "paleta_predominante": [
      "#000000",
      "#111111",
      "#facc15",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "cursor customizado magnético",
      "revelação de vídeos ao passar o mouse sobre o texto",
      "grid assimétrico arrojado"
    ],
    "componentes_chave": [
      "showcase de projetos premiados (Awwwards)",
      "manifesto da agência em letras gigantes",
      "contato direto sem burocracia"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Agências de design de vanguarda, desenvolvedores WebGL/Three.js, produtoras de videoclipes e marcas urbanas ousadas.",
    "tokens": {
      "primaryColor": "#facc15",
      "secondaryColor": "#111111",
      "accentColor": "#ffffff",
      "backgroundColor": "#000000",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "none",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "cybersecurity-saas-landing-page-template.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/cybersecurity-saas-landing-page-template.aura.build",
    "pagina_principal": "temas_escuros/cybersecurity-saas-landing-page-template.aura.build/design-system.html",
    "design_system_page": "temas_escuros/cybersecurity-saas-landing-page-template.aura.build/design-system.html",
    "titulo": "AEGIS Secure - Inteligência de Defesa Espacial Quântica",
    "subtitulo": "Proteção criptográfica pós-quântica para infraestruturas de dados globais",
    "nichos": [
      "cibersegurança",
      "criptografia quântica",
      "defesa contra ransomware",
      "SOC e SIEM",
      "segurança em nuvem",
      "auditoria de vulnerabilidades",
      "proteção de dados corporativos (LGPD/GDPR)"
    ],
    "estilo_visual": [
      "cybersecurity tático",
      "ciano luminoso e azul profundo",
      "linhas de escudo e grade de vetores"
    ],
    "clima_sensacao": [
      "impenetrabilidade",
      "vigilância em milissegundos",
      "proteção militar de dados"
    ],
    "paleta_predominante": [
      "#020617",
      "#0f172a",
      "#38bdf8",
      "#22c55e",
      "#ef4444"
    ],
    "efeitos_visuais": [
      "feed de ataques bloqueados em tempo real",
      "radar de detecção de ameaças",
      "selos de conformidade de segurança"
    ],
    "componentes_chave": [
      "simulador de teste de intrusão",
      "matriz de resposta a incidentes",
      "agendamento de escaneamento de vulnerabilidade"
    ],
    "fontes": [
      "Inter",
      "Space Grotesk"
    ],
    "melhor_para": "Empresas de segurança da informação, serviços gerenciados de SOC, firewalls em nuvem e auditorias de ciberdefesa.",
    "tokens": {
      "primaryColor": "#38bdf8",
      "secondaryColor": "#0f172a",
      "accentColor": "#22c55e",
      "backgroundColor": "#020617",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Space Grotesk",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "echelon.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/echelon.aura.build",
    "pagina_principal": "temas_escuros/echelon.aura.build/design-system.html",
    "design_system_page": "temas_escuros/echelon.aura.build/design-system.html",
    "titulo": "Echelon Atelier — Planejamento de Eventos de Alto Padrão (Escuro)",
    "subtitulo": "Noites inesquecíveis, galas secretas e encontros da alta sociedade",
    "nichos": [
      "eventos noturnos VIP",
      "clubes privados para membros",
      "festas de gala exclusivas",
      "lançamento de supermarcas",
      "bailes de caridade de luxo",
      "concierge noturno"
    ],
    "estilo_visual": [
      "luxo noturno misterioso",
      "ouro champanhe sobre preto sedoso",
      "alta nobreza"
    ],
    "clima_sensacao": [
      "sedução",
      "exclusividade inacessível",
      "mistério refinado",
      "prestígio supremo"
    ],
    "paleta_predominante": [
      "#050505",
      "#141414",
      "#d4af37",
      "#fef3c7",
      "#a3a3a3"
    ],
    "efeitos_visuais": [
      "tipografia serifada com alto espaçamento",
      "imagens de taças de champanhe e smokings em baixa luz",
      "borda dourada sutil"
    ],
    "componentes_chave": [
      "pedido de acesso com validação prévia de convidados",
      "galeria privada protegida por senha",
      "histórico de noites memoráveis"
    ],
    "fontes": [
      "Playfair Display",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Clubes exclusivos de membros, produtoras de eventos de alta sociedade, lançamentos de marcas de luxo e joalherias.",
    "tokens": {
      "primaryColor": "#d4af37",
      "secondaryColor": "#141414",
      "accentColor": "#fef3c7",
      "backgroundColor": "#050505",
      "textColor": "#f8fafc",
      "headingFont": "Playfair Display",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "dark",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "esports-tournament-96.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/esports-tournament-96.aura.build",
    "pagina_principal": "temas_escuros/esports-tournament-96.aura.build/design-system.html",
    "design_system_page": "temas_escuros/esports-tournament-96.aura.build/design-system.html",
    "titulo": "Bnb - O App Definitivo para Torneios de Jogos de Luta",
    "subtitulo": "Chaves ao vivo, ranking de campeões e premiações instantâneas",
    "nichos": [
      "torneios de eSports",
      "jogos de luta (FGC)",
      "plataformas competitivas de games",
      "arenas de jogos",
      "clãs e times profissionais de games",
      "transmissões de campeonatos"
    ],
    "estilo_visual": [
      "arcade moderno dark",
      "vermelho e amarelo fogo",
      "ângulos agressivos e chanfrados"
    ],
    "clima_sensacao": [
      "adrenalina pura",
      "competitividade acirrada",
      "glória de campeão",
      "energia explosiva"
    ],
    "paleta_predominante": [
      "#0a0a0c",
      "#18181b",
      "#ef4444",
      "#eab308",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "árvore de chaves eliminatórias interativa",
      "contador de tempo para a próxima luta",
      "efeito de faísca e neon vermelho"
    ],
    "componentes_chave": [
      "inscrição rápida no torneio",
      "tabela de premiação em dinheiro",
      "streaming integrado da Twitch/YouTube"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Ligas de eSports, organizadores de torneios de luta ou FPS, centros de entretenimento gamer e apps de apostas esportivas.",
    "tokens": {
      "primaryColor": "#ef4444",
      "secondaryColor": "#18181b",
      "accentColor": "#eab308",
      "backgroundColor": "#0a0a0c",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "prism",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "finex-finance-saas.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/finex-finance-saas.aura.build",
    "pagina_principal": "temas_escuros/finex-finance-saas.aura.build/index.html",
    "design_system_page": "temas_escuros/finex-finance-saas.aura.build/design-system.html",
    "titulo": "Finex — Modern Finance & Wealth Management Design System",
    "subtitulo": "Domine suas finanças pessoais e corporativas com inteligência e controle absoluto",
    "nichos": [
      "fintech dark",
      "gestão de patrimônio (wealth management)",
      "cartões corporativos pretos (Black Card)",
      "investimentos globais",
      "bancos digitais premium",
      "Family Offices"
    ],
    "estilo_visual": [
      "fintech nobre dark",
      "verde esmeralda metálico e platina",
      "cartões 3D com texturas sofisticadas"
    ],
    "clima_sensacao": [
      "prosperidade",
      "controle financeiro refinado",
      "privacidade bancária de alto nível"
    ],
    "paleta_predominante": [
      "#070a11",
      "#0f172a",
      "#10b981",
      "#34d399",
      "#f8fafc"
    ],
    "efeitos_visuais": [
      "cartão de crédito metálico que gira em 3D",
      "gráficos de rentabilidade acumulada",
      "saldo dinâmico com blur de segurança"
    ],
    "componentes_chave": [
      "extrato com categorização automática inteligente",
      "solicitação de cartão exclusivo",
      "comparativo de rendimento vs poupança/CDI"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Contas digitais VIP, fintechs de gestão de fortuna, cartões black empresariais e plataformas de trading de ações.",
    "tokens": {
      "primaryColor": "#10b981",
      "secondaryColor": "#0f172a",
      "accentColor": "#34d399",
      "backgroundColor": "#070a11",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "finex-internet.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/finex-internet.aura.build",
    "pagina_principal": "temas_escuros/finex-internet.aura.build/design-system.html",
    "design_system_page": "temas_escuros/finex-internet.aura.build/design-system.html",
    "titulo": "Finex - Otimizador de Performance de Internet & Rede",
    "subtitulo": "Libere a velocidade máxima da sua conexão com roteamento inteligente de fibra",
    "nichos": [
      "provedores de internet (ISP)",
      "fibra óptica",
      "serviços de VPN ultra-rápidos",
      "otimizadores de ping para gamers",
      "redes de servidores dedicados",
      "infraestrutura de telecom"
    ],
    "estilo_visual": [
      "fibra ótica pulsante",
      "azul cobalto e ciano de velocidade",
      "linhas de transmissão luminosas"
    ],
    "clima_sensacao": [
      "velocidade sem latência",
      "estabilidade ininterrupta",
      "alta tecnologia de rede"
    ],
    "paleta_predominante": [
      "#050811",
      "#0d1b2a",
      "#0284c7",
      "#00f2fe",
      "#10b981"
    ],
    "efeitos_visuais": [
      "velocímetro animado de teste de download/upload",
      "ping em milissegundos para os principais servidores",
      "mapa de nós de conexão"
    ],
    "componentes_chave": [
      "teste de velocidade em tempo real",
      "planos de 500 Mega a 2 Giga",
      "cobertura por CEP rápida"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Provedores regionais de fibra óptica, serviços de VPN segura, softwares de aceleração de rotas gamer e operadoras de dados.",
    "tokens": {
      "primaryColor": "#0284c7",
      "secondaryColor": "#0d1b2a",
      "accentColor": "#00f2fe",
      "backgroundColor": "#050811",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "flux-motion.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/flux-motion.aura.build",
    "pagina_principal": "temas_escuros/flux-motion.aura.build/index.html",
    "design_system_page": "temas_escuros/flux-motion.aura.build/design-system.html",
    "titulo": "FLUX - 3D Motion Design Course & Creative Studio",
    "subtitulo": "Crie cinemáticas e animações 3D que desafiam as leis da física",
    "nichos": [
      "cursos de motion design 3D",
      "estúdios de animação e VFX",
      "artistas de Cinema 4D e Blender",
      "computação gráfica para publicidade",
      "diretores de arte 3D",
      "comunidades de animadores"
    ],
    "estilo_visual": [
      "estúdio 3D cinematográfico",
      "luzes de render violeta e azul elétrico",
      "preto imersivo"
    ],
    "clima_sensacao": [
      "movimento fluido",
      "maestria em iluminação 3D",
      "hipnotizante",
      "alta técnica"
    ],
    "paleta_predominante": [
      "#08080a",
      "#121216",
      "#c084fc",
      "#38bdf8",
      "#f8fafc"
    ],
    "efeitos_visuais": [
      "vídeos de wireframe vs render final ao rolar",
      "loops de animação em cartões flutuantes",
      "timeline de frames de render"
    ],
    "componentes_chave": [
      "grade do curso com breakdowns de projetos",
      "galeria de render de ex-alunos",
      "download de cena gratuita de teste"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Escolas de animação 3D, estúdios de pós-produção cinematográfica e portfólios de motion designers seniores.",
    "tokens": {
      "primaryColor": "#c084fc",
      "secondaryColor": "#121216",
      "accentColor": "#38bdf8",
      "backgroundColor": "#08080a",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "fluxora.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/fluxora.aura.build",
    "pagina_principal": "temas_escuros/fluxora.aura.build/index.html",
    "design_system_page": "temas_escuros/fluxora.aura.build/design-system.html",
    "titulo": "Fluxora - Workflows Autônomos & Automação de Processos",
    "subtitulo": "Conecte seus aplicativos e automatize fluxos de trabalho sem digitar uma linha de código",
    "nichos": [
      "automação no-code",
      "orquestração de processos",
      "plataformas estilo Zapier/Make",
      "produtividade empresarial",
      "integração de APIs corporativas",
      "ferramentas SaaS B2B"
    ],
    "estilo_visual": [
      "SaaS moderno escuro",
      "nós de fluxo com gradiente azul/violeta",
      "cartões limpos com cantos arredondados"
    ],
    "clima_sensacao": [
      "fluidez nas tarefas",
      "eliminação de trabalho manual",
      "organização perfeita"
    ],
    "paleta_predominante": [
      "#090d16",
      "#131b2e",
      "#3b82f6",
      "#8b5cf6",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "nós interconectados simulando dados trafegando",
      "biblioteca de ícones de apps conectados",
      "cards expansíveis de gatilho e ação"
    ],
    "componentes_chave": [
      "construtor visual de automação",
      "catálogo de 500+ integrações",
      "calculadora de horas salvas por mês"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Softwares de automação de processos, plataformas de integração corporativa e consultorias de transformação digital.",
    "tokens": {
      "primaryColor": "#3b82f6",
      "secondaryColor": "#131b2e",
      "accentColor": "#8b5cf6",
      "backgroundColor": "#090d16",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "sm",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "futuristic-webgl.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/futuristic-webgl.aura.build",
    "pagina_principal": "temas_escuros/futuristic-webgl.aura.build/design-system.html",
    "design_system_page": "temas_escuros/futuristic-webgl.aura.build/design-system.html",
    "titulo": "LAB.01 | Playground Experimental WebGL & Interfaces Tempo Real",
    "subtitulo": "Interfaces em tempo real para a era da inteligência artificial",
    "nichos": [
      "laboratórios experimentais de tecnologia",
      "Three.js e WebGL",
      "showcase de carros conceito",
      "hardwares futuristas",
      "sites interativos premiados",
      "feiras digitais e metaverso"
    ],
    "estilo_visual": [
      "cyberpunk laboratorial",
      "fundo breu com lasers verdes e ciano",
      "shaders matemáticos"
    ],
    "clima_sensacao": [
      "ficção científica tangível",
      "vanguarda de computação gráfica",
      "imersão sensorial"
    ],
    "paleta_predominante": [
      "#000000",
      "#0a0a0f",
      "#22c55e",
      "#00f2fe",
      "#e2e8f0"
    ],
    "efeitos_visuais": [
      "partículas interativas que reagem à física do mouse",
      "malha de arame (wireframe) 3D giratória",
      "linhas de terminal verdes"
    ],
    "componentes_chave": [
      "controle orbital com rotação e zoom",
      "seletor de parâmetros de shader em tempo real",
      "área de código aberto no GitHub"
    ],
    "fontes": [
      "JetBrains Mono",
      "Space Grotesk"
    ],
    "melhor_para": "Lançamentos de carros esportivos ou elétricos conceito, hardwares de computação quântica e agências focadas em Awwwards.",
    "tokens": {
      "primaryColor": "#22c55e",
      "secondaryColor": "#0a0a0f",
      "accentColor": "#00f2fe",
      "backgroundColor": "#000000",
      "textColor": "#f8fafc",
      "headingFont": "JetBrains Mono",
      "bodyFont": "Space Grotesk",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "glass-effect2",
    "tema": "escuro",
    "caminho": "temas_escuros/glass-effect2",
    "pagina_principal": "temas_escuros/glass-effect2/index.html",
    "design_system_page": "temas_escuros/glass-effect2/design-system.html",
    "titulo": "Design System | Liquid Glass & Glassmorphism Puro",
    "subtitulo": "Superfícies translúcidas refratadas e vidro líquido para produtos do futuro",
    "nichos": [
      "produtos digitais premium",
      "aplicativos mobile inovadores",
      "interfaces translúcidas de luxo",
      "fintechs de nova geração",
      "marcas de design de ponta",
      "plataformas Web3 sofisticadas"
    ],
    "estilo_visual": [
      "glassmorphism puro",
      "liquid glass",
      "desfoque de fundo (backdrop-filter)",
      "bordas com brilho especular"
    ],
    "clima_sensacao": [
      "leveza física",
      "sensação tátil moderna",
      "elegância futurista translúcida"
    ],
    "paleta_predominante": [
      "#060810",
      "#0c101d",
      "#38bdf8",
      "#818cf8",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "painéis de vidro com blur de 30px e saturação alta",
      "carousel empilhado (stack section) em 3D",
      "blobs ambientais coloridos em movimento"
    ],
    "componentes_chave": [
      "cartões de vidro em múltiplas camadas de profundidade",
      "abas de navegação flutuantes em vidro fosco",
      "cursor fluido"
    ],
    "fontes": [
      "Montserrat",
      "Open Sans",
      "Prompt"
    ],
    "melhor_para": "Aplicativos iOS e web que buscam visual estilo Apple Vision Pro / Liquid Glass, fintechs modernas e produtos de design refinado.",
    "tokens": {
      "primaryColor": "#38bdf8",
      "secondaryColor": "#0c101d",
      "accentColor": "#818cf8",
      "backgroundColor": "#060810",
      "textColor": "#f8fafc",
      "headingFont": "Montserrat",
      "bodyFont": "Open Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "glass-green-effect",
    "tema": "escuro",
    "caminho": "temas_escuros/glass-green-effect",
    "pagina_principal": "temas_escuros/glass-green-effect/index.html",
    "design_system_page": "temas_escuros/glass-green-effect/design-system.html",
    "titulo": "Glass Green Effect - Design System",
    "subtitulo": "Fusão entre sustentabilidade orgânica e vidro esmeralda high-tech",
    "nichos": [
      "eco-tecnologia",
      "créditos de carbono digitais",
      "energia renovável e solar",
      "biotecnologia avançada",
      "investimentos ESG",
      "produtos naturais de alta tecnologia"
    ],
    "estilo_visual": [
      "vidro verde esmeralda",
      "glow orgânico",
      "painéis foscos translúcidos",
      "tecnologia verde"
    ],
    "clima_sensacao": [
      "vitalidade sustentável",
      "futuro ecológico próspero",
      "renovação e tecnologia limpa"
    ],
    "paleta_predominante": [
      "#030e08",
      "#081f14",
      "#10b981",
      "#34d399",
      "#d1fae5"
    ],
    "efeitos_visuais": [
      "esferas verdes brilhantes de energia",
      "painéis com gradiente de esmeralda translúcido",
      "brilho neon sutil"
    ],
    "componentes_chave": [
      "contador de toneladas de CO2 neutralizadas",
      "calculadora de economia solar",
      "cards de projetos de reflorestamento rastreáveis"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Empresas de energia solar fotovoltaica, fundos de investimento ESG, biotecnologias e produtos sustentáveis inovadores.",
    "tokens": {
      "primaryColor": "#10b981",
      "secondaryColor": "#081f14",
      "accentColor": "#34d399",
      "backgroundColor": "#030e08",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "mesh",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "langfuse",
    "tema": "escuro",
    "caminho": "temas_escuros/langfuse",
    "pagina_principal": "temas_escuros/langfuse/design-system.html",
    "design_system_page": "temas_escuros/langfuse/design-system.html",
    "titulo": "Langfuse - Plataforma Open Source de Engenharia de LLM",
    "subtitulo": "Rastreamento, avaliação e observabilidade para aplicações com modelos de linguagem",
    "nichos": [
      "engenharia de IA e LLMs",
      "observabilidade de software",
      "dev tools",
      "monitoramento de custos de API",
      "avaliação de prompts",
      "ferramentas open source para programadores"
    ],
    "estilo_visual": [
      "técnico focado em dados",
      "estilo dashboard de desenvolvedor",
      "laranja acento sobre cinza escuro"
    ],
    "clima_sensacao": [
      "precisão técnica",
      "controle absoluto de custos",
      "clareza de depuração"
    ],
    "paleta_predominante": [
      "#0f1013",
      "#18191d",
      "#f97316",
      "#fb923c",
      "#e4e4e7"
    ],
    "efeitos_visuais": [
      "árvore de chamadas aninhadas (traces)",
      "gráficos de latência e consumo de tokens por usuário",
      "snippets de código copiáveis"
    ],
    "componentes_chave": [
      "demonstração do painel de monitoramento",
      "documentação de integração com Python/TypeScript",
      "botão com métricas de estrelas do GitHub"
    ],
    "fontes": [
      "Inter",
      "JetBrains Mono"
    ],
    "melhor_para": "Softwares voltados para programadores, plataformas de IA, ferramentas de DevOps e serviços de monitoramento de infraestrutura.",
    "tokens": {
      "primaryColor": "#f97316",
      "secondaryColor": "#18191d",
      "accentColor": "#fb923c",
      "backgroundColor": "#0f1013",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "JetBrains Mono",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "lumimotion-ai-ui-prompt.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/lumimotion-ai-ui-prompt.aura.build",
    "pagina_principal": "temas_escuros/lumimotion-ai-ui-prompt.aura.build/design-system.html",
    "design_system_page": "temas_escuros/lumimotion-ai-ui-prompt.aura.build/design-system.html",
    "titulo": "Lumimotion | Biblioteca Premium de Prompts & UI de Produto",
    "subtitulo": "Templates premium de prompt para UI de produtos reais e sistemas de design",
    "nichos": [
      "marketplace de prompts",
      "biblioteca de componentes UI",
      "design systems prontos",
      "ferramentas para product designers",
      "geradores de interface por IA",
      "loja de templates digitais"
    ],
    "estilo_visual": [
      "marketplace dark premium",
      "cards com visual de aplicativo real",
      "azul elétrico e violeta"
    ],
    "clima_sensacao": [
      "produtividade acelerada",
      "design de alta classe pronto para uso",
      "qualidade garantida"
    ],
    "paleta_predominante": [
      "#0a0b10",
      "#12141f",
      "#6366f1",
      "#8b5cf6",
      "#f1f5f9"
    ],
    "efeitos_visuais": [
      "botão de copiar prompt com 1 clique",
      "filtros dinâmicos por categoria de tela (Checkout, Login, Dashboard)",
      "pré-visualização ao vivo"
    ],
    "componentes_chave": [
      "galeria de templates com busca por tags",
      "pacote de assinatura com acesso ilimitado",
      "depoimentos de designers de big techs"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Marketplaces de assets digitais, lojas de templates Figma/Tailwind, cursos de engenharia de prompt e bibliotecas de design.",
    "tokens": {
      "primaryColor": "#6366f1",
      "secondaryColor": "#12141f",
      "accentColor": "#8b5cf6",
      "backgroundColor": "#0a0b10",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "lumina-video",
    "tema": "escuro",
    "caminho": "temas_escuros/lumina-video",
    "pagina_principal": "temas_escuros/lumina-video/index.html",
    "design_system_page": "temas_escuros/lumina-video/design-system.html",
    "titulo": "Lumina - Plataforma de Geração e Edição de Vídeo por IA",
    "subtitulo": "Construa sistemas visuais dinâmicos e renderize vídeos cinematográficos na nuvem",
    "nichos": [
      "criação de vídeo com IA",
      "editores de vídeo online",
      "estúdios de pós-produção",
      "geração de reels e shorts",
      "computação gráfica em nuvem",
      "ferramentas para criadores audiovisuais"
    ],
    "estilo_visual": [
      "software de edição audiovisual dark",
      "painéis modulares",
      "azul cobalto e gradiente roxo"
    ],
    "clima_sensacao": [
      "poder cinematográfico",
      "agilidade na edição",
      "qualidade de estúdio profissional"
    ],
    "paleta_predominante": [
      "#07090e",
      "#10141e",
      "#2563eb",
      "#9333ea",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "linha do tempo (timeline) com trilhas de vídeo e áudio",
      "player de vídeo integrado com controle de velocidade",
      "cards de estilos visuais"
    ],
    "componentes_chave": [
      "seletor de voz de IA e trilha sonora",
      "exportador multi-formato (16:9, 9:16, 1:1)",
      "tabela de minutos de render incluídos"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Startups de vídeo generativo, ferramentas de legendagem e cortes automáticos, produtoras digitais e plataformas de streaming.",
    "tokens": {
      "primaryColor": "#2563eb",
      "secondaryColor": "#10141e",
      "accentColor": "#9333ea",
      "backgroundColor": "#07090e",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "monolith-architecture.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/monolith-architecture.aura.build",
    "pagina_principal": "temas_escuros/monolith-architecture.aura.build/design-system.html",
    "design_system_page": "temas_escuros/monolith-architecture.aura.build/design-system.html",
    "titulo": "MONOLITH — Estúdio de Arquitetura Brutalista & Escultural",
    "subtitulo": "Definindo a forma digital e arquitetônica através da pureza da pedra e do aço",
    "nichos": [
      "arquitetura brutalista",
      "estúdio de design escultural",
      "marcas de luxo minimalistas",
      "edifícios conceituais de concreto",
      "galerias de escultura moderna",
      "design de móveis monolíticos"
    ],
    "estilo_visual": [
      "brutalismo escultural escuro",
      "texturas minerais pesadas",
      "proporções monumentais",
      "monocromático dramático"
    ],
    "clima_sensacao": [
      "perenidade",
      "gravidade arquitetônica",
      "força monumental",
      "silêncio austero"
    ],
    "paleta_predominante": [
      "#0a0a0a",
      "#141414",
      "#262626",
      "#e5e5e5"
    ],
    "efeitos_visuais": [
      "fotografias de edifícios em preto e branco de altíssimo contraste",
      "tipografia monolítica pesada",
      "espaçamento em blocos maciços"
    ],
    "componentes_chave": [
      "catálogo de obras monolíticas numeradas",
      "manifesto filosófico do estúdio",
      "contato reservado para comissões"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Escritórios de arquitetura autoral de vanguarda, estúdios de arte escultural, marcas de moda minimalistas e hotéis de concreto aparente.",
    "tokens": {
      "primaryColor": "#262626",
      "secondaryColor": "#141414",
      "accentColor": "#e5e5e5",
      "backgroundColor": "#0a0a0a",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "none",
      "mode": "dark",
      "backgroundEffect": "prism",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "novachain-crypto-trading-protocol-1.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/novachain-crypto-trading-protocol-1.aura.build",
    "pagina_principal": "temas_escuros/novachain-crypto-trading-protocol-1.aura.build/design-system.html",
    "design_system_page": "temas_escuros/novachain-crypto-trading-protocol-1.aura.build/design-system.html",
    "titulo": "NovaChain | Protocolo Descentralizado de Trading Cripto",
    "subtitulo": "Liquidez profunda, alavancagem sem custódia e execução institucional",
    "nichos": [
      "exchanges descentralizadas (DEX)",
      "trading perpétuo de cripto",
      "swaps de tokens",
      "provedores de liquidez (LP)",
      "finanças quantitativas",
      "arbitragem algorítmica"
    ],
    "estilo_visual": [
      "terminal de trading profissional",
      "ciano elétrico e verde neon sobre preto absoluto",
      "alta densidade de dados"
    ],
    "clima_sensacao": [
      "liquidez instantânea",
      "alta precisão matemática",
      "liberdade financeira sem intermediários"
    ],
    "paleta_predominante": [
      "#030508",
      "#0b0f19",
      "#00d2ff",
      "#10b981",
      "#ef4444"
    ],
    "efeitos_visuais": [
      "painel de swap com seletor de tokens e cálculo de slippage",
      "livro de ofertas em cascata",
      "gráfico de velas japonesas (candlestick)"
    ],
    "componentes_chave": [
      "estatísticas de volume diário negociado",
      "botão de conexão de carteira Web3 (MetaMask/WalletConnect)",
      "tabela de pares com APY de staking"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Exchanges de cripto, protocolos de empréstimo DeFi, plataformas de contratos perpétuos e bots de investimento.",
    "tokens": {
      "primaryColor": "#00d2ff",
      "secondaryColor": "#0b0f19",
      "accentColor": "#10b981",
      "backgroundColor": "#030508",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "prism",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero01",
      "services": "services/Services01",
      "cta": "cta/CTA01",
      "footer": "footer/Footer01",
      "background": "backgrounds/MeshGradientBackground"
    }
  },
  {
    "id": "open-source-llm-10.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/open-source-llm-10.aura.build",
    "pagina_principal": "temas_escuros/open-source-llm-10.aura.build/index.html",
    "design_system_page": "temas_escuros/open-source-llm-10.aura.build/design-system.html",
    "titulo": "Open Source LLM Pattern Library & Model Hub",
    "subtitulo": "Modelos de linguagem abertos, eficientes e prontos para produção local",
    "nichos": [
      "modelos de linguagem abertos",
      "infraestrutura de inferência local",
      "repositórios HuggingFace",
      "ferramentas de machine learning",
      "frameworks de agentes",
      "deploy de modelos em servidores próprios"
    ],
    "estilo_visual": [
      "técnico minimalista escuro",
      "verde terminal sobre grafite",
      "foco em documentação e performance"
    ],
    "clima_sensacao": [
      "soberania de dados",
      "independência tecnológica",
      "alta performance computacional"
    ],
    "paleta_predominante": [
      "#0b0c0e",
      "#14161a",
      "#22c55e",
      "#38bdf8",
      "#f4f4f5"
    ],
    "efeitos_visuais": [
      "tabela de benchmarks comparativos (MMLU, GSM8K, Code)",
      "comando de download via CLI e Docker",
      "indicador de parâmetros (7B, 13B, 70B)"
    ],
    "componentes_chave": [
      "seletor de quantização (4-bit, 8-bit, 16-bit)",
      "playground para teste de inferência",
      "documentação de API REST"
    ],
    "fontes": [
      "Inter",
      "JetBrains Mono"
    ],
    "melhor_para": "Startups de IA com modelos locais, plataformas de computação em nuvem com GPUs e ferramentas abertas de dados.",
    "tokens": {
      "primaryColor": "#22c55e",
      "secondaryColor": "#14161a",
      "accentColor": "#38bdf8",
      "backgroundColor": "#0b0c0e",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "JetBrains Mono",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "pulsedesk-saas.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/pulsedesk-saas.aura.build",
    "pagina_principal": "temas_escuros/pulsedesk-saas.aura.build/design-system.html",
    "design_system_page": "temas_escuros/pulsedesk-saas.aura.build/design-system.html",
    "titulo": "Pulsedesk — Gestão de Tarefas Sem Sobrecarga Mental",
    "subtitulo": "A plataforma ágil que elimina o ruído e foca a sua equipe no que realmente move o ponteiro",
    "nichos": [
      "gestão de projetos",
      "produtividade de equipes remotas",
      "Kanban ágil",
      "atendimento ao cliente e helpdesk",
      "SaaS para squads de produto",
      "colaboração em tempo real"
    ],
    "estilo_visual": [
      "SaaS funcional dark",
      "azul vibrante com toques âmbar de prioridade",
      "organização impecável"
    ],
    "clima_sensacao": [
      "alívio da sobrecarga",
      "foco renovado",
      "produtividade sem estresse",
      "alinhamento de equipe"
    ],
    "paleta_predominante": [
      "#090d16",
      "#111827",
      "#3b82f6",
      "#f59e0b",
      "#10b981"
    ],
    "efeitos_visuais": [
      "quadro Kanban interativo com colunas A Fazer / Em Andamento / Concluído",
      "badges de prioridade coloridas",
      "avatares de equipe"
    ],
    "componentes_chave": [
      "demonstrador de fluxo de trabalho ágil",
      "timeline de entregas da sprint",
      "tabela comparativa vs Jira/Trello/Asana"
    ],
    "fontes": [
      "Inter",
      "Plus Jakarta Sans"
    ],
    "melhor_para": "Ferramentas de produtividade, gerenciadores de tarefas de equipes, helpdesks e sistemas de atendimento ao cliente.",
    "tokens": {
      "primaryColor": "#3b82f6",
      "secondaryColor": "#111827",
      "accentColor": "#f59e0b",
      "backgroundColor": "#090d16",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "Plus Jakarta Sans",
      "borderRadius": "lg",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "saas-developer.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/saas-developer.aura.build",
    "pagina_principal": "temas_escuros/saas-developer.aura.build/design-system.html",
    "design_system_page": "temas_escuros/saas-developer.aura.build/design-system.html",
    "titulo": "SoraStudio — O Futuro do Desenvolvimento de Software com IA",
    "subtitulo": "Arquitete, teste e publique aplicações completas direto do seu navegador",
    "nichos": [
      "IDEs na nuvem",
      "plataformas para desenvolvedores",
      "ferramentas de deploy serverless",
      "editores de código com copiloto de IA",
      "computação em nuvem",
      "CI/CD automatizado"
    ],
    "estilo_visual": [
      "estética VS Code / Cursor dark",
      "linhas de código com realce de sintaxe",
      "azul elétrico e violeta"
    ],
    "clima_sensacao": [
      "superpoder de codificação",
      "velocidade de publicação",
      "tecnologia de última geração"
    ],
    "paleta_predominante": [
      "#07090e",
      "#0f172a",
      "#38bdf8",
      "#c084fc",
      "#f1f5f9"
    ],
    "efeitos_visuais": [
      "janela de terminal com digitação automática de comandos",
      "abas de arquivos do projeto (.ts, .py, .css)",
      "pipeline de build animado"
    ],
    "componentes_chave": [
      "demonstração interativa da IDE",
      "integração direta com repositórios GitHub",
      "plano individual gratuito com upgrade Pro"
    ],
    "fontes": [
      "Inter",
      "JetBrains Mono"
    ],
    "melhor_para": "Ambientes de desenvolvimento em nuvem, ferramentas de teste de código, provedores de hospedagem moderna e copilotos de programação.",
    "tokens": {
      "primaryColor": "#38bdf8",
      "secondaryColor": "#0f172a",
      "accentColor": "#c084fc",
      "backgroundColor": "#07090e",
      "textColor": "#f8fafc",
      "headingFont": "Inter",
      "bodyFont": "JetBrains Mono",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "sonic-link.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/sonic-link.aura.build",
    "pagina_principal": "temas_escuros/sonic-link.aura.build/design-system.html",
    "design_system_page": "temas_escuros/sonic-link.aura.build/design-system.html",
    "titulo": "Sonic // Sincronia de Áudio Espacial & Engenharia Sonora",
    "subtitulo": "Ressonância pura: imersão sonora tridimensional e reprodução sem perdas",
    "nichos": [
      "equipamentos de áudio Hi-Fi",
      "fones de ouvido audiófilos",
      "sintetizadores e instrumentos musicais",
      "softwares de produção musical",
      "estúdios de gravação",
      "podcasts de alta fidelidade",
      "áudio espacial para games"
    ],
    "estilo_visual": [
      "acústico moderno dark",
      "amarelo sonoro vibrante sobre preto câmara anecóica",
      "frequências visuais"
    ],
    "clima_sensacao": [
      "pureza acústica",
      "graves profundos e agudos cristalinos",
      "imersão sensorial auditiva"
    ],
    "paleta_predominante": [
      "#060608",
      "#111115",
      "#fbbf24",
      "#f59e0b",
      "#e2e8f0"
    ],
    "efeitos_visuais": [
      "equalizador gráfico com barras em movimento",
      "curva de resposta de frequência acústica",
      "mostradores de ganho e decibéis"
    ],
    "componentes_chave": [
      "seletor de perfis sonoros (Graves, Vocal, Cinema)",
      "especificações de drivers e codecs (FLAC, Dolby Atmos)",
      "loja de equipamentos de áudio"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Marcas de fones de ouvido e caixas de som de alta definição, instrumentos musicais eletrônicos, gravadoras e produtos de som espacial.",
    "tokens": {
      "primaryColor": "#fbbf24",
      "secondaryColor": "#111115",
      "accentColor": "#f59e0b",
      "backgroundColor": "#060608",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "md",
      "mode": "dark",
      "backgroundEffect": "none",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero05",
      "services": "services/Services03",
      "projects": "projects/Showcase02",
      "cta": "cta/CTA06",
      "footer": "footer/Footer06",
      "background": "backgrounds/DotMatrixBackground"
    }
  },
  {
    "id": "volta-ev.aura.build",
    "tema": "escuro",
    "caminho": "temas_escuros/volta-ev.aura.build",
    "pagina_principal": "temas_escuros/volta-ev.aura.build/index.html",
    "design_system_page": "temas_escuros/volta-ev.aura.build/design-system.html",
    "titulo": "Volta - Veículos Elétricos de Alta Performance",
    "subtitulo": "Mobilidade elétrica sem concessões: aceleração instantânea, autonomia estendida e design escultural",
    "nichos": [
      "veículos elétricos (EV)",
      "supercarros e hipercarros modernos",
      "redes de recarga ultra-rápida",
      "mobilidade urbana limpa",
      "frotas corporativas elétricas",
      "inovação automotiva"
    ],
    "estilo_visual": [
      "automotivo de luxo dark (estilo Porsche/Tesla)",
      "azul ciano neon de baterias",
      "linhas aerodinâmicas esculturais"
    ],
    "clima_sensacao": [
      "aceleração brutal",
      "tecnologia sustentável do futuro",
      "prestígio automobilístico"
    ],
    "paleta_predominante": [
      "#050608",
      "#0d1117",
      "#00f2fe",
      "#38bdf8",
      "#ffffff"
    ],
    "efeitos_visuais": [
      "contadores animados de 0 a 100 km/h (ex: 2.1s)",
      "medidor circular de autonomia restante (km)",
      "seletor interativo de cores da carroceria"
    ],
    "componentes_chave": [
      "configurador de veículo 3D/interativo",
      "mapa de estações de carregamento supercharger",
      "formulário de agendamento de test-drive"
    ],
    "fontes": [
      "Plus Jakarta Sans",
      "Inter"
    ],
    "melhor_para": "Montadoras de veículos e motos elétricas, empresas de infraestrutura de carregadores rápidos e locadoras de frotas executivas sustentáveis.",
    "tokens": {
      "primaryColor": "#00f2fe",
      "secondaryColor": "#0d1117",
      "accentColor": "#38bdf8",
      "backgroundColor": "#050608",
      "textColor": "#f8fafc",
      "headingFont": "Plus Jakarta Sans",
      "bodyFont": "Inter",
      "borderRadius": "sm",
      "mode": "dark",
      "backgroundEffect": "dots",
      "enableParallax": true
    },
    "recommended_components": {
      "hero": "hero/Hero04",
      "services": "services/Services03",
      "projects": "projects/Showcase01",
      "cta": "cta/CTA04",
      "footer": "footer/Footer08",
      "background": "backgrounds/MeshGradientBackground"
    }
  }
];

export const DESIGN_SYSTEMS_MAP: Record<string, EnrichedDesignSystem> = Object.fromEntries(
  DESIGN_SYSTEMS_CATALOG.map((ds) => [ds.id, ds])
);
