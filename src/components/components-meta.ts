/**
 * Component Meta & Semantic Registry
 * Mapeamento semântico, estético e de interatividade para todos os componentes do Design System.
 */

export type ComponentCategory =
  | 'header'
  | 'hero'
  | 'services'
  | 'products'
  | 'projects'
  | 'gallery'
  | 'about'
  | 'team'
  | 'benefits'
  | 'process'
  | 'stats'
  | 'credentials'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'map'
  | 'cta'
  | 'footer'
  | 'bento'
  | 'backgrounds'
  | 'effects'
  | 'ui';

export type MotionLevel = 'none' | 'subtle' | 'interactive-hover' | 'complex-scroll';

export type StyleTag =
  | 'luxury-minimal'
  | 'editorial-clean'
  | 'high-tech'
  | 'organic-soft'
  | 'bold-brutalist'
  | 'clean-corporate'
  | 'bento-modern'
  | 'depth-tilt'
  | 'ambient-glow'
  | 'typography-driven'
  | 'direct-response'
  | 'local-utilitarian'
  | 'trust-ticker'
  | 'glassmorphism'
  | 'portfolio-curated'
  | 'human-centered';

export interface PropSchemaItem {
  type: string;
  required: boolean;
  description: string;
  default?: any;
  example?: any;
}

export interface ComponentMetadata {
  id: string;
  name: string;
  category: ComponentCategory;
  filePath: string;
  style_tags: StyleTag[];
  motion_level: MotionLevel;
  best_suited_niches: string[];
  visual_personality: string;
  props_schema: Record<string, PropSchemaItem>;
  first_fold_impact?: 'high' | 'medium' | 'low';
  eject_recommended_when?: string;
}

export const COMPONENTS_CATALOG: ComponentMetadata[] = [
  // ==========================================
  // HEADERS
  // ==========================================
  {
    id: 'header/Header01',
    name: 'Header Glass Clean',
    category: 'header',
    filePath: 'src/components/header/Header01.astro',
    style_tags: ['clean-corporate', 'glassmorphism', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'consultoria',
      'advocacia',
      'medicina',
      'saude',
      'tecnologia',
      'servicos-profissionais',
      'b2b'
    ],
    visual_personality:
      'Barra superior translúcida com blur sutil e bordas finas. Transmite sofisticação sóbria, deixando o foco na marca e em navegação sem fricção.',
    props_schema: {
      'content.navLinks': {
        type: 'Array<{ label: string; href: string }>',
        required: false,
        description: 'Lista de links de navegação âncora',
        default: [],
        example: [{ label: 'Serviços', href: '#servicos' }, { label: 'Sobre', href: '#sobre' }]
      },
      'content.ctaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do botão de conversão no header',
        default: 'Fale Conosco',
        example: 'Agendar Consulta'
      }
    }
  },
  {
    id: 'header/Header02',
    name: 'Header Utility Banner',
    category: 'header',
    filePath: 'src/components/header/Header02.astro',
    style_tags: ['clean-corporate', 'local-utilitarian', 'editorial-clean'],
    motion_level: 'subtle',
    best_suited_niches: [
      'clinicas',
      'escritorios-juridicos',
      'engenharia',
      'imobiliarias',
      'negocios-locais-premium'
    ],
    visual_personality:
      'Barra superior dupla com faixa de utilidade institucional (cidade/estado e horários) + navegação principal. Gera sensação imediata de empresa sólida com endereço fixo e atendimento estruturado.',
    props_schema: {
      'content.announcement': {
        type: 'string',
        required: false,
        description: 'Mensagem informativa na barra superior',
        default: 'Atendimento presencial e online',
        example: 'Atendimento exclusivo em São Paulo e Curitiba'
      },
      'content.navLinks': {
        type: 'Array<{ label: string; href: string }>',
        required: false,
        description: 'Lista de links de navegação',
        default: []
      },
      'content.ctaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do CTA de contato',
        default: 'WhatsApp'
      }
    }
  },

  // ==========================================
  // HEROES (PRIMEIRA DOBRA)
  // ==========================================
  {
    id: 'hero/Hero01',
    name: 'Hero Editorial Authority',
    category: 'hero',
    filePath: 'src/components/hero/Hero01.astro',
    style_tags: ['editorial-clean', 'typography-driven', 'clean-corporate'],
    motion_level: 'interactive-hover',
    first_fold_impact: 'high',
    best_suited_niches: [
      'medicina',
      'odontologia-estetica',
      'advocacia',
      'consultoria-estrategica',
      'financas',
      'gestao-patrimonial'
    ],
    visual_personality:
      'Layout assimétrico de alta densidade intelectual. Título de grande porte em fonte serifada/display, badge de segurança, botões com micro-elevação e checklist de diferenciais (trust points) ancorados na base.',
    props_schema: {
      'content.badge': {
        type: 'string',
        required: false,
        description: 'Badge de autoridade com emoji ou ícone',
        example: 'Especialista Certificado'
      },
      'content.headline': {
        type: 'string',
        required: true,
        description: 'Título de impacto da primeira dobra',
        example: 'Excelência em Cirurgia Plástica e Harmonização Facial'
      },
      'content.subheadline': {
        type: 'string',
        required: true,
        description: 'Subtítulo explicativo com proposta de valor',
        example: 'Protocolos personalizados com segurança máxima e atendimento humanizado em Curitiba.'
      },
      'content.primaryCtaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do botão principal de WhatsApp',
        default: 'Consultar Especialista'
      },
      'content.secondaryCtaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do botão secundário',
        default: 'Conhecer Tratamentos'
      },
      'content.secondaryCtaHref': {
        type: 'string',
        required: false,
        description: 'Destino do botão secundário',
        default: '#servicos'
      },
      'content.trustPoints': {
        type: 'string[]',
        required: false,
        description: 'Checklist horizontal de autoridade rápida',
        example: ['Mais de 15 anos de atuação', 'Membro titular SBCP', 'Tecnologia de ponta']
      }
    },
    eject_recommended_when:
      'Recomendado ejetar para adicionar imagem de alta qualidade do médico/advogado no fundo ou ao lado em layout de duas colunas.'
  },
  {
    id: 'hero/Hero02',
    name: 'Hero Central Impact',
    category: 'hero',
    filePath: 'src/components/hero/Hero02.astro',
    style_tags: ['direct-response', 'bold-brutalist', 'high-tech'],
    motion_level: 'interactive-hover',
    first_fold_impact: 'medium',
    best_suited_niches: [
      'startups',
      'cursos-e-treinamentos',
      'agencias-digitais',
      'servicos-express',
      'odontologia-geral'
    ],
    visual_personality:
      'Composição centralizada e vibrante com badge pulsante com luz verde de atividade. Conduz o olhar diretamente do centro da tela até os dois botões primários empilhados.',
    props_schema: {
      'content.badge': {
        type: 'string',
        required: false,
        description: 'Badge em caixa alta com dot pulsante',
        example: 'Vagas Abertas para Avaliação'
      },
      'content.headline': {
        type: 'string',
        required: true,
        description: 'Título centralizado de forte apelo visual'
      },
      'content.subheadline': {
        type: 'string',
        required: true,
        description: 'Subtítulo em parágrafo centralizado'
      },
      'content.primaryCtaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do botão de ação',
        default: 'Falar no WhatsApp'
      },
      'content.secondaryCtaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do link secundário'
      }
    }
  },
  {
    id: 'hero/Hero03',
    name: 'Hero Local Direct Panel',
    category: 'hero',
    filePath: 'src/components/hero/Hero03.astro',
    style_tags: ['local-utilitarian', 'clean-corporate'],
    motion_level: 'none',
    first_fold_impact: 'medium',
    best_suited_niches: [
      'clinicas-populares',
      'assistencias-tecnicas',
      'despachantes',
      'servicos-emergenciais',
      'contabilidade-local'
    ],
    visual_personality:
      'Divisão em duas caixas nítidas: coluna textual à esquerda e bloco de contato físico direto (endereço, telefone e WhatsApp) em card destacado à direita. Foco total em utilidade prática.',
    props_schema: {
      'content.headline': {
        type: 'string',
        required: true,
        description: 'Título direto de serviço local'
      },
      'content.subheadline': {
        type: 'string',
        required: true,
        description: 'Proposta clara de solução'
      },
      'content.ctaLabel': {
        type: 'string',
        required: false,
        description: 'Texto do CTA'
      }
    }
  },
  {
    id: 'hero/Hero04',
    name: 'Hero Bento Showcase 3D',
    category: 'hero',
    filePath: 'src/components/hero/Hero04.astro',
    style_tags: ['luxury-minimal', 'high-tech', 'depth-tilt', 'ambient-glow'],
    motion_level: 'complex-scroll',
    first_fold_impact: 'high',
    best_suited_niches: [
      'arquitetura',
      'design-de-interiores',
      'engenharia-de-alto-padrao',
      'tecnologia-avancada',
      'estetica-premium',
      'luxo'
    ],
    visual_personality:
      'Componente flagship para primeira dobra de altíssimo padrão. Apresenta orbe de luz ambiente difusa (ambient glow), badge glassmorphic com indicador ativo, botões com gradientes e sombras ricas, grade de métricas com números mono, e painel direito flutuante com suporte a foto real do cliente, moldura 3D tilt e badge flutuante de excelência.',
    props_schema: {
      'content.tagline': {
        type: 'string',
        required: false,
        description: 'Micro-badge superior com indicador luminoso',
        example: 'Projetos Exclusivos & Arquitetura Contemporânea'
      },
      'content.headline': {
        type: 'string',
        required: true,
        description: 'Headline de grande escala com acabamento tipográfico refinado',
        example: 'Espaços que inspiram e transcendem o tempo'
      },
      'content.subheadline': {
        type: 'string',
        required: false,
        description: 'Texto de apoio poético e técnico'
      },
      'content.primaryCta.text': {
        type: 'string',
        required: false,
        description: 'Texto do botão com gradiente e elevação',
        default: 'Solicitar Orçamento'
      },
      'content.primaryCta.href': {
        type: 'string',
        required: false,
        description: 'Link do CTA primário'
      },
      'content.secondaryCta.text': {
        type: 'string',
        required: false,
        description: 'Texto do botão outline glass'
      },
      'content.secondaryCta.href': {
        type: 'string',
        required: false,
        description: 'Link secundário (ex: #projetos)'
      },
      'content.image': {
        type: 'string',
        required: false,
        description: 'Caminho da foto real do cliente para o card 3D flutuante',
        example: '/clients/cadas/hero-portfolio.webp'
      },
      'content.stats': {
        type: 'Array<{ value: string; label: string }>',
        required: false,
        description: 'Lista de métricas numéricas exibidas na base do hero',
        example: [
          { value: '+120', label: 'Obras Entregues' },
          { value: '25 Anos', label: 'Tradição & Autoria' },
          { value: '100%', label: 'Satisfação Auditada' }
        ]
      }
    },
    eject_recommended_when:
      'Excelente como base para primeira dobra premium; ejetar apenas se precisar de slider interativo ou vídeo em loop de fundo.'
  },

  // ==========================================
  // SERVICES & PRODUCTS
  // ==========================================
  {
    id: 'services/Services01',
    name: 'Services Interactive Bento Cards',
    category: 'services',
    filePath: 'src/components/services/Services01.astro',
    style_tags: ['clean-corporate', 'bento-modern', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'consultorias',
      'especialidades-medicas',
      'estetica',
      'odontologia',
      'advocacia-especializada'
    ],
    visual_personality:
      'Grade de cartões com ícones em destaque circular, borda refinada com glassmorphism sutil e link direto para WhatsApp com mensagem pré-preenchida para o serviço específico clicado.',
    props_schema: {
      'content.badge': {
        type: 'string',
        required: false,
        description: 'Etiqueta superior centralizada'
      },
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da seção de serviços'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo contextual'
      },
      'content.services': {
        type: 'Array<{ icon?: string; title: string; description: string; cta?: string }>',
        required: true,
        description: 'Lista de serviços oferecidos com descrição e CTA',
        example: [
          {
            icon: '✦',
            title: 'Lentes de Contato Dental',
            description: 'Transformação estética minimamente invasiva com porcelana alemã.'
          }
        ]
      }
    }
  },
  {
    id: 'services/Services02',
    name: 'Services Editorial Monochrome',
    category: 'services',
    filePath: 'src/components/services/Services02.astro',
    style_tags: ['editorial-clean', 'typography-driven', 'luxury-minimal'],
    motion_level: 'subtle',
    best_suited_niches: [
      'escritorios-de-advocacia',
      'auditoria-tributaria',
      'arquitetura-editorial',
      'consultoria-executiva'
    ],
    visual_personality:
      'Layout sereno e tipográfico com ênfase na leitura. Cada serviço é delimitado por linhas monocromáticas sutis, sem excessos de ornamentos.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da seção'
      },
      'content.services': {
        type: 'Array<{ title: string; description: string }>',
        required: true,
        description: 'Lista de áreas de atuação ou serviços'
      }
    }
  },
  {
    id: 'services/Services03',
    name: 'Services Bento High-Tech Hierarchy',
    category: 'services',
    filePath: 'src/components/services/Services03.astro',
    style_tags: ['bento-modern', 'high-tech', 'luxury-minimal'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'tecnologia',
      'design-de-interiores',
      'construtoras-de-luxo',
      'clinicas-premium',
      'financeiro'
    ],
    visual_personality:
      'Bento grid assimétrico contemporâneo com destaque para itens com tag `featured: true` (ocupam 2 colunas com glow sutil e badge exclusiva). Quebra o padrão monótono de grades repetitivas.',
    props_schema: {
      'content.tagline': {
        type: 'string',
        required: false,
        description: 'Tagline ou badge acima do título'
      },
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título principal da seção'
      },
      'content.description': {
        type: 'string',
        required: false,
        description: 'Parágrafo descritivo'
      },
      'content.items': {
        type: 'Array<{ title: string; description: string; badge?: string; icon?: string; featured?: boolean }>',
        required: true,
        description: 'Lista de itens onde itens com featured:true ganham destaque visual ampliado',
        example: [
          {
            title: 'Masterplan & Projetos Residenciais',
            description: 'Concepção arquitetônica completa para residências unifamiliares de alto padrão.',
            featured: true,
            badge: 'Flagship'
          }
        ]
      }
    }
  },
  {
    id: 'products/Products01',
    name: 'Products Commercial Cards',
    category: 'products',
    filePath: 'src/components/products/Products01.astro',
    style_tags: ['clean-corporate', 'direct-response'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'distribuidoras',
      'produtos-medicos',
      'cursos-e-workshops',
      'pacotes-esteticos',
      'industria'
    ],
    visual_personality:
      'Vitrine modular de pacotes ou produtos com destaque para nome, descrição e botão individual de cotação ou compra.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da vitrine de produtos'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo'
      },
      'content.products': {
        type: 'Array<{ name: string; description: string; price?: string; cta?: string }>',
        required: true,
        description: 'Lista de produtos/pacotes com preços ou cotações sob medida'
      }
    }
  },

  // ==========================================
  // PROJECTS & GALLERY
  // ==========================================
  {
    id: 'projects/Projects01',
    name: 'Projects Portfolio Grid',
    category: 'projects',
    filePath: 'src/components/projects/Projects01.astro',
    style_tags: ['portfolio-curated', 'luxury-minimal', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'arquitetura',
      'design-de-interiores',
      'engenharia-civil',
      'software-sob-medida',
      'paisagismo'
    ],
    visual_personality:
      'Galeria editorial curada com tags de categoria em fonte mono, títulos em destaque e cartões de projeto que elevam em hover.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título do portfolio'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo poético ou explicativo'
      },
      'content.projects': {
        type: 'Array<{ title: string; category?: string; description?: string }>',
        required: true,
        description: 'Lista de projetos e obras executadas'
      }
    }
  },
  {
    id: 'gallery/Gallery01',
    name: 'Gallery Visual Mosaic',
    category: 'gallery',
    filePath: 'src/components/gallery/Gallery01.astro',
    style_tags: ['portfolio-curated', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'clinicas-odontologicas',
      'decoracao-e-mobiliario',
      'gastronomia',
      'centros-cirurgicos',
      'arquitetura'
    ],
    visual_personality:
      'Mosaico visual de imagens com legendas flutuantes e foco no impacto visual de espaços e detalhes físicos do cliente.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da galeria'
      },
      'content.items': {
        type: 'Array<{ label?: string; placeholderColor?: string }>',
        required: true,
        description: 'Imagens ou itens com legenda'
      }
    }
  },

  // ==========================================
  // ABOUT & TEAM
  // ==========================================
  {
    id: 'about/About01',
    name: 'About Heritage Storytelling',
    category: 'about',
    filePath: 'src/components/about/About01.astro',
    style_tags: ['editorial-clean', 'clean-corporate', 'human-centered'],
    motion_level: 'subtle',
    best_suited_niches: [
      'empresas-familiares',
      'bancas-juridicas',
      'clinicas-tradicionais',
      'consultoria-corporativa',
      'engenharia-historica'
    ],
    visual_personality:
      'Layout em duas colunas combinando narrativa institucional envolvente, citação/destaque em bloco e lista de credenciais ou números de tradição.',
    props_schema: {
      'content.badge': {
        type: 'string',
        required: false,
        description: 'Badge institucional'
      },
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da história do cliente'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo'
      },
      'content.text1': {
        type: 'string',
        required: false,
        description: 'Primeiro parágrafo de trajetória'
      },
      'content.text2': {
        type: 'string',
        required: false,
        description: 'Segundo parágrafo de compromisso e visão'
      },
      'content.highlights': {
        type: 'string[]',
        required: false,
        description: 'Lista de marcos ou diferenciais'
      }
    }
  },
  {
    id: 'team/Team01',
    name: 'Team Prestige Grid',
    category: 'team',
    filePath: 'src/components/team/Team01.astro',
    style_tags: ['human-centered', 'clean-corporate', 'editorial-clean'],
    motion_level: 'subtle',
    best_suited_niches: [
      'hospitais-e-clinicas',
      'bancas-de-advogados',
      'escritorios-de-engenharia',
      'educacao',
      'consultorias'
    ],
    visual_personality:
      'Grade limpa e equilibrada apresentando especialistas, seus registros profissionais, cargos e biografia concisa.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da seção do corpo técnico'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo'
      },
      'content.members': {
        type: 'Array<{ name: string; role: string; bio?: string }>',
        required: true,
        description: 'Membros da equipe com especialidade e mini bio'
      }
    }
  },

  // ==========================================
  // BENEFITS & PROCESS
  // ==========================================
  {
    id: 'benefits/Benefits01',
    name: 'Benefits Value Proposition',
    category: 'benefits',
    filePath: 'src/components/benefits/Benefits01.astro',
    style_tags: ['clean-corporate', 'bento-modern'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'servicos-financeiros',
      'tecnologia',
      'saude-preventiva',
      'consultoria-operacional',
      'educacao'
    ],
    visual_personality:
      'Cards de benefícios com ícones demarcados, excelente escaneabilidade e foco em clareza de vantagens para o tomador de decisão.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da seção de diferenciais'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo'
      },
      'content.items': {
        type: 'Array<{ title: string; description: string; icon?: string }>',
        required: true,
        description: 'Lista de diferenciais'
      }
    }
  },
  {
    id: 'process/Process01',
    name: 'Process Step Journey',
    category: 'process',
    filePath: 'src/components/process/Process01.astro',
    style_tags: ['editorial-clean', 'bento-modern'],
    motion_level: 'subtle',
    best_suited_niches: [
      'projetos-arquitetonicos',
      'tratamentos-complexos',
      'consultorias-em-fases',
      'onboarding-b2b',
      'reformas'
    ],
    visual_personality:
      'Fluxo metodológico numerado passo a passo (Etapa 01 -> Etapa 02 -> Etapa 03). Reduz drasticamente a ansiedade do cliente ao clarificar como a entrega acontece.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da metodologia ou processo'
      },
      'content.steps': {
        type: 'Array<{ step: string; title: string; description: string }>',
        required: true,
        description: 'Etapas numeradas do atendimento',
        example: [
          { step: '01', title: 'Diagnóstico Inicial', description: 'Mapeamento profundo das necessidades.' },
          { step: '02', title: 'Planejamento 3D', description: 'Apresentação do projeto com simulação exata.' },
          { step: '03', title: 'Execução e Entrega', description: 'Acompanhamento rigoroso em todas as fases.' }
        ]
      }
    }
  },

  // ==========================================
  // SOCIAL PROOF & STATS
  // ==========================================
  {
    id: 'stats/Stats01',
    name: 'Stats Numeric Authority Strip',
    category: 'stats',
    filePath: 'src/components/stats/Stats01.astro',
    style_tags: ['trust-ticker', 'bold-brutalist', 'typography-driven'],
    motion_level: 'subtle',
    best_suited_niches: [
      'industria',
      'construtoras',
      'fundos-de-investimento',
      'escritorios-com-alto-volume',
      'franquias'
    ],
    visual_personality:
      'Faixa horizontal compacta com números gigantes de alto contraste e tipografia mono. Imprime peso e solidez instantânea entre seções de texto longo.',
    props_schema: {
      'content.stats': {
        type: 'Array<{ number: string; label: string }>',
        required: true,
        description: 'Métricas de escala e autoridade',
        example: [
          { number: '+15k', label: 'Pacientes Atendidos' },
          { number: '99.4%', label: 'Índice de Recomendação' },
          { number: '20 Anos', label: 'Presença no Mercado' }
        ]
      }
    }
  },
  {
    id: 'credentials/Credentials01',
    name: 'Credentials Trust Ribbon',
    category: 'credentials',
    filePath: 'src/components/credentials/Credentials01.astro',
    style_tags: ['trust-ticker', 'luxury-minimal'],
    motion_level: 'none',
    best_suited_niches: [
      'saude',
      'direito',
      'engenharia',
      'seguranca-da-informacao',
      'contabilidade-e-auditoria'
    ],
    visual_personality:
      'Fita contínua de credenciais, registros em órgãos de classe (CRM, OAB, CREA, ISO) e títulos acadêmicos com acabamento sutil e minimalista.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: false,
        description: 'Título discreto'
      },
      'content.badges': {
        type: 'Array<{ label: string; detail?: string }>',
        required: true,
        description: 'Selos e certificados regulatórios'
      }
    }
  },
  {
    id: 'testimonials/Testimonials01',
    name: 'Testimonials Quote Cards',
    category: 'testimonials',
    filePath: 'src/components/testimonials/Testimonials01.astro',
    style_tags: ['human-centered', 'clean-corporate', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'odontologia',
      'cirurgia-plastica',
      'consultoria-estrategica',
      'b2b-services',
      'arquitetura'
    ],
    visual_personality:
      'Cartões de prova social com aspas estilizadas, depoimento humanizado em itálico e identificação do autor. Transmite empatia e validação por pares.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: false,
        description: 'Título da seção de depoimentos',
        default: 'O que dizem nossos clientes'
      },
      'content.items': {
        type: 'Array<{ quote: string; author: string; role?: string }>',
        required: true,
        description: 'Lista de depoimentos autênticos'
      }
    }
  },
  {
    id: 'faq/FAQ01',
    name: 'FAQ Clean Accordion',
    category: 'faq',
    filePath: 'src/components/faq/FAQ01.astro',
    style_tags: ['editorial-clean', 'clean-corporate'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'servicos-complexos',
      'direito-de-familia-e-previdenciario',
      'ortodontia-e-implantes',
      'imoveis-e-locacao',
      'financeiro'
    ],
    visual_personality:
      'Lista expansível de perguntas frequentes estruturada para neutralizar objeções de compra de forma elegante sem poluir a interface.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da seção',
        default: 'Perguntas Frequentes'
      },
      'content.subtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo'
      },
      'content.questions': {
        type: 'Array<{ q?: string; a?: string; question?: string; answer?: string }>',
        required: true,
        description: 'Pares de perguntas e respostas'
      }
    }
  },

  // ==========================================
  // CONVERSION & LOCATION
  // ==========================================
  {
    id: 'contact/Contact01',
    name: 'Contact Dual Channel Hub',
    category: 'contact',
    filePath: 'src/components/contact/Contact01.astro',
    style_tags: ['clean-corporate', 'direct-response', 'local-utilitarian'],
    motion_level: 'subtle',
    best_suited_niches: [
      'consultorios',
      'escritorios-profissionais',
      'empresas-de-servicos',
      'comercio-local',
      'b2b'
    ],
    visual_personality:
      'Hub completo de contato com canais diretos (WhatsApp instantâneo, telefone fixo, e-mail institucional e localização) lado a lado com bloco de formulário ou agendamento direto.',
    props_schema: {
      'content.badge': {
        type: 'string',
        required: false,
        description: 'Badge de atendimento'
      },
      'content.title': {
        type: 'string',
        required: true,
        description: 'Título da seção de contato'
      },
      'content.formTitle': {
        type: 'string',
        required: false,
        description: 'Título do painel de ação'
      },
      'content.formSubtitle': {
        type: 'string',
        required: false,
        description: 'Subtítulo com horário de atendimento'
      }
    }
  },
  {
    id: 'map/Map01',
    name: 'Map Location Anchor',
    category: 'map',
    filePath: 'src/components/map/Map01.astro',
    style_tags: ['local-utilitarian', 'clean-corporate'],
    motion_level: 'none',
    best_suited_niches: [
      'consultorios',
      'lojas-fisicas',
      'hospitais',
      'restaurantes',
      'clinicas'
    ],
    visual_personality:
      'Container em proporção 21/9 com endereço físico destacado, link direto para rota do Google Maps e visual integrado ao tema escuro/claro.',
    props_schema: {
      'content.title': {
        type: 'string',
        required: false,
        description: 'Título da seção',
        default: 'Nossa Localização'
      },
      'content.instructions': {
        type: 'string',
        required: false,
        description: 'Instruções de acesso ou estacionamento'
      }
    }
  },
  {
    id: 'cta/CTA01',
    name: 'CTA High Contrast Closer',
    category: 'cta',
    filePath: 'src/components/cta/CTA01.astro',
    style_tags: ['direct-response', 'bold-brutalist'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'todos-os-nichos-com-foco-em-conversao',
      'saude',
      'direito',
      'consultoria',
      'servicos'
    ],
    visual_personality:
      'Bloco de fechamento enfático no final da página, com fundo em destaque e botão de alta visibilidade direcionado para início imediato da conversa no WhatsApp.',
    props_schema: {
      'content.headline': {
        type: 'string',
        required: true,
        description: 'Chamada decisiva de ação'
      },
      'content.subheadline': {
        type: 'string',
        required: false,
        description: 'Reforço de garantia ou conveniência'
      },
      'content.buttonLabel': {
        type: 'string',
        required: false,
        description: 'Texto do botão',
        default: 'Iniciar Conversa no WhatsApp'
      }
    }
  },

  // ==========================================
  // FOOTERS
  // ==========================================
  {
    id: 'footer/Footer01',
    name: 'Footer Minimal Legal',
    category: 'footer',
    filePath: 'src/components/footer/Footer01.astro',
    style_tags: ['editorial-clean', 'luxury-minimal'],
    motion_level: 'none',
    best_suited_niches: [
      'startups',
      'landing-pages',
      'consultorias-enxutas',
      'portfolio'
    ],
    visual_personality:
      'Rodapé limpo e discreto centralizado com direitos reservados e disclaimer sutil.',
    props_schema: {
      'content.disclaimer': {
        type: 'string',
        required: false,
        description: 'Texto legal ou termo de privacidade'
      }
    }
  },
  {
    id: 'footer/Footer02',
    name: 'Footer Institutional Legal',
    category: 'footer',
    filePath: 'src/components/footer/Footer02.astro',
    style_tags: ['clean-corporate', 'editorial-clean'],
    motion_level: 'none',
    best_suited_niches: [
      'advocacia',
      'clinicas-medicas',
      'contabilidade',
      'engenharia-e-pericias'
    ],
    visual_personality:
      'Rodapé corporativo em duas colunas com slot dedicado para identificação de classe regulatória (ex: OAB, CRM, CREA, CNPJ).',
    props_schema: {
      'content.disclaimer': {
        type: 'string',
        required: false,
        description: 'Texto de aviso regulatório'
      },
      'content.oabInfo': {
        type: 'string',
        required: false,
        description: 'Número de registro do conselho ou órgão de classe',
        example: 'OAB/PR 12.345 | Registro de Sociedade nº 678'
      }
    }
  },

  // ==========================================
  // BACKGROUNDS & ATMOSPHERE
  // ==========================================
  {
    id: 'backgrounds/DotMatrixBackground',
    name: 'Dot Matrix Precision Background',
    category: 'backgrounds',
    filePath: 'src/components/backgrounds/DotMatrixBackground.astro',
    style_tags: ['high-tech', 'luxury-minimal'],
    motion_level: 'none',
    best_suited_niches: [
      'tecnologia',
      'engenharia',
      'arquitetura-moderna',
      'saas',
      'biotecnologia'
    ],
    visual_personality:
      'Malha de pontos radial de alta precisão com vinheta suave de bordas. Confere sensação de engenharia milimétrica e tecnologia refinada.',
    props_schema: {
      dotSize: {
        type: 'number',
        required: false,
        description: 'Tamanho do ponto em pixels',
        default: 1.5
      },
      gap: {
        type: 'number',
        required: false,
        description: 'Espaçamento entre os pontos',
        default: 28
      },
      opacity: {
        type: 'number',
        required: false,
        description: 'Opacidade da textura',
        default: 0.22
      }
    }
  },
  {
    id: 'backgrounds/MeshGradientBackground',
    name: 'Mesh Gradient Ambient Background',
    category: 'backgrounds',
    filePath: 'src/components/backgrounds/MeshGradientBackground.astro',
    style_tags: ['ambient-glow', 'luxury-minimal', 'organic-soft'],
    motion_level: 'subtle',
    best_suited_niches: [
      'design-de-interiores',
      'arquitetura',
      'estetica-luxo',
      'consultoria-premium',
      'saude-integrativa'
    ],
    visual_personality:
      'Orbes de luz difusa em cantos estratégicos da tela com blur atmosférico profundo (120px). Proporciona calor visual, acolhimento e sensação de produto artesanal de alto valor.',
    props_schema: {
      opacity: {
        type: 'number',
        required: false,
        description: 'Opacidade dos orbes luminosos',
        default: 0.5
      },
      blur: {
        type: 'string',
        required: false,
        description: 'Intensidade do desfoque gaussiano',
        default: '120px'
      }
    }
  },
  {
    id: 'backgrounds/PrismBackground',
    name: 'Prism Canvas Chromatic Background',
    category: 'backgrounds',
    filePath: 'src/components/backgrounds/PrismBackground.astro',
    style_tags: ['high-tech', 'bold-brutalist'],
    motion_level: 'complex-scroll',
    best_suited_niches: [
      'agencias-criativas',
      'estudios-de-design',
      'startups-disruptivas',
      'marcas-de-vanguarda'
    ],
    visual_personality:
      'Refração prismática dinâmica em canvas HTML5 com luz reativa. Ideal para clientes que exigem identidade futurista e ousada.',
    props_schema: {
      intensity: {
        type: 'number',
        required: false,
        description: 'Intensidade da dispersão prismática',
        default: 0.4
      }
    }
  },

  // ==========================================
  // EFFECTS & INTERACTIONS
  // ==========================================
  {
    id: 'effects/CustomCursor',
    name: 'Custom Magnetic Glow Cursor',
    category: 'effects',
    filePath: 'src/components/effects/CustomCursor.astro',
    style_tags: ['luxury-minimal', 'high-tech'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'arquitetura',
      'portfolios-de-luxo',
      'estudios-criativos',
      'moda-e-design'
    ],
    visual_personality:
      'Cursor com anel e ponto magnético de alta suavidade física em desktop. Transforma a navegação comum em uma experiência sensorial diferenciada.',
    props_schema: {
      color: {
        type: 'string',
        required: false,
        description: 'Cor principal do cursor',
        default: 'var(--color-accent, #6366f1)'
      },
      glowColor: {
        type: 'string',
        required: false,
        description: 'Cor do halo de brilho',
        default: 'rgba(99, 102, 241, 0.35)'
      },
      size: {
        type: 'number',
        required: false,
        description: 'Diâmetro do anel externo',
        default: 32
      }
    }
  },
  {
    id: 'effects/ParallaxScroll',
    name: 'Parallax & 3D Tilt Scroll Engine',
    category: 'effects',
    filePath: 'src/components/effects/ParallaxScroll.astro',
    style_tags: ['depth-tilt', 'luxury-minimal'],
    motion_level: 'complex-scroll',
    best_suited_niches: [
      'todos-os-sites-com-diretriz-premium'
    ],
    visual_personality:
      'Motor de animação de scroll que aplica revelação staggered em cascata e interatividade 3D Tilt sob mouse em cartões bento.',
    props_schema: {
      revealSelector: {
        type: 'string',
        required: false,
        description: 'Seletores CSS que recebem o efeito de revelação',
        default: '.reveal, .bento-card, .service-card, .benefit-card'
      },
      enable3DTilt: {
        type: 'boolean',
        required: false,
        description: 'Ativar efeito 3D Tilt ao mover o mouse nos cards',
        default: true
      }
    }
  },

  // ==========================================
  // FLOATING UI WIDGETS
  // ==========================================
  {
    id: 'ui/FloatingWhatsApp',
    name: 'Floating WhatsApp CTA Widget',
    category: 'ui',
    filePath: 'src/components/ui/FloatingWhatsApp.astro',
    style_tags: ['direct-response'],
    motion_level: 'interactive-hover',
    best_suited_niches: [
      'todos-os-nichos-comerciais'
    ],
    visual_personality:
      'Botão flutuante no canto inferior direito com animação de pulso, tooltip explicativo no hover e mensagem personalizada com o nome da empresa.',
    props_schema: {
      phone: {
        type: 'string',
        required: false,
        description: 'Telefone fixo alternativo'
      },
      whatsapp: {
        type: 'string',
        required: false,
        description: 'Número de WhatsApp (DDD + Número)'
      },
      companyName: {
        type: 'string',
        required: true,
        description: 'Nome da empresa para preencher o texto da mensagem padrão'
      }
    }
  },

  // ==========================================
  // NOVOS COMPONENTES: HEROES (@reactbits-pro)
  // ==========================================
  {
    id: 'hero/Hero05',
    name: 'Hero Glow Centered (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero05.astro',
    style_tags: ['ambient-glow', 'luxury-minimal', 'typography-driven'],
    motion_level: 'subtle',
    first_fold_impact: 'high',
    best_suited_niches: ['arquitetura', 'design-de-interiores', 'consultoria', 'startups', 'estetica'],
    visual_personality: 'Hero centralizado com imenso orbe de luz difusa em degradê (ambient glow), badge com dot pulsante e tipografia de alto impacto visual.',
    props_schema: {
      'content.badge': { type: 'string', required: false, description: 'Badge superior' },
      'content.headline': { type: 'string', required: true, description: 'Título principal da primeira dobra' },
      'content.subheadline': { type: 'string', required: false, description: 'Subtítulo explicativo' },
      'content.primaryCtaLabel': { type: 'string', required: false, description: 'Texto do botão principal' },
      'content.primaryCtaHref': { type: 'string', required: false, description: 'Link do CTA principal' },
      'content.secondaryCtaLabel': { type: 'string', required: false, description: 'Texto do botão secundário' },
      'content.trustPoints': { type: 'string[]', required: false, description: 'Checklist horizontal de autoridade' }
    }
  },
  {
    id: 'hero/Hero06',
    name: 'Hero Minimal Tech Grid (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero06.astro',
    style_tags: ['high-tech', 'clean-corporate', 'typography-driven'],
    motion_level: 'interactive-hover',
    first_fold_impact: 'high',
    best_suited_niches: ['tecnologia', 'engenharia', 'consultoria-estrategica', 'financas'],
    visual_personality: 'Grid geométrico sutil ao fundo, alinhamento técnico à esquerda e contadores numéricos de métricas ancorados.',
    props_schema: {
      'content.badge': { type: 'string', required: false, description: 'Badge em fonte monospace' },
      'content.headline': { type: 'string', required: true, description: 'Título técnico e direto' },
      'content.subheadline': { type: 'string', required: false, description: 'Subtítulo com proposta' },
      'content.stats': { type: 'Array<{ value: string; label: string }>', required: false, description: 'Métricas institucionais' }
    }
  },
  {
    id: 'hero/Hero07',
    name: 'Hero Split Visual (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero07.astro',
    style_tags: ['editorial-clean', 'portfolio-curated', 'clean-corporate'],
    motion_level: 'interactive-hover',
    first_fold_impact: 'high',
    best_suited_niches: ['medicina', 'arquitetura', 'advocacia', 'clinicas-premium'],
    visual_personality: 'Divisão balanceada entre copy à esquerda e card visual imersivo à direita, com chip de métrica de confiança.',
    props_schema: {
      'content.badge': { type: 'string', required: false, description: 'Badge de especialidade' },
      'content.headline': { type: 'string', required: true, description: 'Título de autoridade' },
      'content.featuredImage': { type: 'string', required: false, description: 'URL da imagem de destaque' },
      'content.trustMetric': { type: '{ number: string; text: string }', required: false, description: 'Métrica com selo de destaque' }
    }
  },
  {
    id: 'hero/Hero08',
    name: 'Hero Radial Beam Social Proof (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero08.astro',
    style_tags: ['ambient-glow', 'trust-ticker', 'direct-response'],
    motion_level: 'subtle',
    first_fold_impact: 'high',
    best_suited_niches: ['clinicas', 'odontologia', 'servicos-profissionais', 'negocios-locais-premium'],
    visual_personality: 'Feixe radial de iluminação superior no topo da tela com chip central de estrelas e prova social autêntica.',
    props_schema: {
      'content.headline': { type: 'string', required: true, description: 'Título principal' },
      'content.subheadline': { type: 'string', required: false, description: 'Subtítulo com promessa clara' },
      'content.socialProofText': { type: 'string', required: false, description: 'Texto da avaliação de clientes' }
    }
  },
  {
    id: 'hero/Hero09',
    name: 'Hero Editorial Asymmetric (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero09.astro',
    style_tags: ['editorial-clean', 'bold-brutalist', 'typography-driven'],
    motion_level: 'none',
    first_fold_impact: 'high',
    best_suited_niches: ['advocacia', 'consultoria-estrategica', 'arquitetura', 'b2b'],
    visual_personality: 'Layout editorial assimétrico com tipografia expressiva de tamanho gigante e cartões horizontais numerados na base.',
    props_schema: {
      'content.badge': { type: 'string', required: false, description: 'Prefixo técnico monospace' },
      'content.headline': { type: 'string', required: true, description: 'Título em caixa alta com alto impacto' },
      'content.keypoints': { type: 'string[]', required: false, description: 'Lista de diferenciais numerados 01, 02, 03' }
    }
  },
  {
    id: 'hero/Hero10',
    name: 'Hero App Showcase Perspective (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero10.astro',
    style_tags: ['high-tech', 'depth-tilt', 'bento-modern'],
    motion_level: 'interactive-hover',
    first_fold_impact: 'high',
    best_suited_niches: ['startups', 'tecnologia', 'engenharia', 'servicos-digitais'],
    visual_personality: 'Header centralizado de prestígio seguido por painel flutuante em perspectiva com grid de dados e métricas em tempo real.',
    props_schema: {
      'content.headline': { type: 'string', required: true, description: 'Título inovador' },
      'content.showcaseTitle': { type: 'string', required: false, description: 'Título do painel em perspectiva' },
      'content.showcaseItems': { type: 'Array<{ label: string; value: string }>', required: false, description: 'Módulos informativos do card' }
    }
  },
  {
    id: 'hero/Hero11',
    name: 'Hero Video & Media Cinema (ReactBits Pro)',
    category: 'hero',
    filePath: 'src/components/hero/Hero11.astro',
    style_tags: ['luxury-minimal', 'portfolio-curated', 'ambient-glow'],
    motion_level: 'interactive-hover',
    first_fold_impact: 'high',
    best_suited_niches: ['arquitetura', 'gastronomia', 'eventos', 'clinicas-esteticas', 'imobiliarias'],
    visual_personality: 'Composição cinematográfica com moldura para vídeo institucional ou tour em 3D e botão de play estilizado.',
    props_schema: {
      'content.headline': { type: 'string', required: true, description: 'Título refinado' },
      'content.videoThumbnail': { type: 'string', required: false, description: 'Imagem miniatura do vídeo' },
      'content.videoBadge': { type: 'string', required: false, description: 'Legenda do conteúdo multimídia' }
    }
  },

  // ==========================================
  // NOVOS COMPONENTES: FEATURES (@reactbits-pro)
  // ==========================================
  {
    id: 'benefits/Features01',
    name: 'Features Clean 3-Columns (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features01.astro',
    style_tags: ['clean-corporate', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['consultoria', 'medicina', 'advocacia', 'servicos-profissionais'],
    visual_personality: 'Grade clássica balanceada em 3 colunas com ícones destacados em caixas translúcidas.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da seção' },
      'content.items': { type: 'Array<{ title: string; description: string; icon?: string }>', required: true, description: 'Pilares' }
    }
  },
  {
    id: 'benefits/Features02',
    name: 'Features Split Numbered 2-Columns (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features02.astro',
    style_tags: ['editorial-clean', 'high-tech'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['engenharia', 'arquitetura', 'tecnologia', 'financas'],
    visual_personality: 'Cards em 2 colunas com numeração ordinal (01, 02) e tags técnicas em estilo monospace.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da seção' },
      'content.items': { type: 'Array<{ title: string; description: string; tag?: string }>', required: true, description: 'Lista numerada' }
    }
  },
  {
    id: 'benefits/Features03',
    name: 'Features Icon Focus Cards (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features03.astro',
    style_tags: ['bento-modern', 'clean-corporate'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['clinicas', 'saude', 'servicos-locais', 'b2b'],
    visual_personality: 'Cards estruturados com contêineres de ícone em baixo-relevo e micro-interação no link de ação.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da seção' },
      'content.items': { type: 'Array<{ title: string; description: string; icon?: string; actionText?: string }>', required: true, description: 'Cards com ação' }
    }
  },
  {
    id: 'benefits/Features04',
    name: 'Features Asymmetric Spotlight (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features04.astro',
    style_tags: ['luxury-minimal', 'editorial-clean', 'bento-modern'],
    motion_level: 'subtle',
    best_suited_niches: ['arquitetura', 'design-de-interiores', 'consultoria-estrategica', 'advocacia'],
    visual_personality: 'Divisão assimétrica com grande cartão em destaque (flagship) ao lado de lista vertical de competências secundárias.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título principal' },
      'content.flagship': { type: '{ title: string; description: string; tag?: string }', required: true, description: 'Diferencial principal em foco' },
      'content.items': { type: 'Array<{ title: string; description: string }>', required: false, description: 'Diferenciais de suporte' }
    }
  },
  {
    id: 'benefits/Features05',
    name: 'Features Sequential Step Cards (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features05.astro',
    style_tags: ['clean-corporate', 'local-utilitarian'],
    motion_level: 'none',
    best_suited_niches: ['construcao', 'clinicas-odontologicas', 'processos', 'reformas'],
    visual_personality: 'Etapas sequenciais da jornada de atendimento em cards 4x com numeração contrastante.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título do processo' },
      'content.steps': { type: 'Array<{ number?: string; title: string; description: string }>', required: true, description: 'Fases da jornada' }
    }
  },
  {
    id: 'benefits/Features06',
    name: 'Features Metrics Impact Grid (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features06.astro',
    style_tags: ['high-tech', 'trust-ticker'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['startups', 'financas', 'gestao-patrimonial', 'b2b'],
    visual_personality: 'Grade centrada em métricas e provas numéricas de impacto com tipografia mono proeminente.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título dos indicadores' },
      'content.metrics': { type: 'Array<{ value: string; label: string; detail?: string }>', required: true, description: 'Valores e legendas' }
    }
  },
  {
    id: 'benefits/Features07',
    name: 'Features Comparison Split Table (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features07.astro',
    style_tags: ['direct-response', 'clean-corporate'],
    motion_level: 'none',
    best_suited_niches: ['advocacia', 'medicina', 'servicos-premium', 'consultoria'],
    visual_personality: 'Tabela comparativa direta de diferenciais: método tradicional versus padrão de excelência da empresa auditada.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da comparação' },
      'content.comparisons': { type: 'Array<{ category: string; traditional: string; standardWithClient: string }>', required: true, description: 'Tabela de contrastes' }
    }
  },
  {
    id: 'benefits/Features08',
    name: 'Features Vertical Timeline (ReactBits Pro)',
    category: 'benefits',
    filePath: 'src/components/benefits/Features08.astro',
    style_tags: ['editorial-clean', 'typography-driven'],
    motion_level: 'subtle',
    best_suited_niches: ['historia-da-empresa', 'metodologia', 'arquitetura', 'advocacia'],
    visual_personality: 'Linha do tempo vertical elegante com marcadores visuais iluminados e cartões de fases.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da metodologia' },
      'content.timeline': { type: 'Array<{ time: string; title: string; description: string; badge?: string }>', required: true, description: 'Marcos temporais' }
    }
  },

  // ==========================================
  // NOVOS COMPONENTES: BENTO (@reactbits-pro)
  // ==========================================
  {
    id: 'bento/Bento01',
    name: 'Bento Classic Asymmetric 3 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento01.astro',
    style_tags: ['bento-modern', 'luxury-minimal', 'clean-corporate'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['arquitetura', 'engenharia', 'design-de-interiores', 'consultoria'],
    visual_personality: 'Layout bento clássico com cartão mestre 8 colunas e dois cartões verticais 4 colunas empilhados com métricas.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da composição' },
      'content.primaryCard': { type: '{ title: string; description: string; tag?: string }', required: true, description: 'Card principal' },
      'content.secondaryCards': { type: 'Array<{ title: string; description: string; metric?: string }>', required: true, description: 'Cards de apoio' }
    }
  },
  {
    id: 'bento/Bento02',
    name: 'Bento Alternating Wide 7 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento02.astro',
    style_tags: ['bento-modern', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['arquitetura', 'medicina', 'tecnologia', 'design'],
    visual_personality: 'Mosaico bento com cartões de larguras alternadas (2 colunas e 1 coluna) com ícones expressivos e assinatura numerada.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da seção' },
      'content.items': { type: 'Array<{ title: string; description: string; colSpan?: number; icon?: string }>', required: true, description: 'Cards com colSpan dinâmico' }
    }
  },
  {
    id: 'bento/Bento03',
    name: 'Bento Triple Column Card Grid 11 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento03.astro',
    style_tags: ['clean-corporate', 'bento-modern'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['servicos-profissionais', 'consultoria', 'engenharia', 'advocacia'],
    visual_personality: 'Grade simétrica em três grandes blocos executivos com tags em estilo pill e rodapé de localização do cliente.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da tríade' },
      'content.items': { type: 'Array<{ title: string; description: string; tag?: string }>', required: true, description: '3 cartões principais' }
    }
  },
  {
    id: 'bento/Bento04',
    name: 'Bento Quad Pill 19 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento04.astro',
    style_tags: ['clean-corporate', 'local-utilitarian', 'bento-modern'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['clinicas', 'saude', 'seguranca', 'contabilidade'],
    visual_personality: 'Grade de 4 cartões com métricas de validação, ícones institucionais e divisões elegantes.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título dos pilares' },
      'content.cards': { type: 'Array<{ title: string; description: string; icon?: string; metric?: string }>', required: true, description: '4 pilares' }
    }
  },
  {
    id: 'bento/Bento05',
    name: 'Bento Split Stage 20 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento05.astro',
    style_tags: ['luxury-minimal', 'editorial-clean'],
    motion_level: 'subtle',
    best_suited_niches: ['arquitetura', 'design-de-interiores', 'imoveis-de-luxo', 'boutique-juridica'],
    visual_personality: 'Palco dividido em proporção 8/4 com ênfase máxima em exclusividade, estética refinada e sofisticação.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título da seção' },
      'content.heroCard': { type: '{ title: string; description: string }', required: true, description: 'Card de destaque amplo' },
      'content.sideCards': { type: 'Array<{ title: string; description: string; icon?: string }>', required: true, description: 'Cards laterais empilhados' }
    }
  },
  {
    id: 'bento/Bento06',
    name: 'Bento Dual Image Showcase 21 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento06.astro',
    style_tags: ['portfolio-curated', 'editorial-clean'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['arquitetura', 'engenharia', 'gastronomia', 'estetica'],
    visual_personality: 'Dupla de cartões com proporção de imagem cinematográfica (16:10), selo flutuante e legendas arquitetônicas.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título das obras' },
      'content.showcases': { type: 'Array<{ title: string; category: string; description: string; image?: string }>', required: true, description: '2 obras em evidência' }
    }
  },
  {
    id: 'bento/Bento07',
    name: 'Bento Masonry Asymmetric 27 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento07.astro',
    style_tags: ['bento-modern', 'high-tech'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['servicos-integrados', 'startups', 'escritorios-multidisciplinares', 'tecnologia'],
    visual_personality: 'Composição de alvenaria com 5 módulos combinando colunas duplas e triplas com setas hover.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título dos serviços' },
      'content.services': { type: 'Array<{ title: string; description: string; icon?: string }>', required: true, description: '5 serviços interligados' }
    }
  },
  {
    id: 'bento/Bento08',
    name: 'Bento Large Quad 31 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento08.astro',
    style_tags: ['clean-corporate', 'editorial-clean', 'typography-driven'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['advocacia', 'engenharia', 'auditoria', 'consultoria'],
    visual_personality: 'Quatro quadrantes de grande escala com identificadores técnicos de diretriz e badges temáticas.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título das diretrizes' },
      'content.items': { type: 'Array<{ title: string; description: string; badge?: string }>', required: true, description: '4 diretrizes executivas' }
    }
  },
  {
    id: 'bento/Bento09',
    name: 'Bento Metric Highlight 33 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento09.astro',
    style_tags: ['trust-ticker', 'high-tech', 'bento-modern'],
    motion_level: 'subtle',
    best_suited_niches: ['financas', 'gestao-patrimonial', 'construcao', 'b2b'],
    visual_personality: 'Três colunas com foco em números de alto volume, porcentagens de retenção e badges de confiança.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título dos indicadores' },
      'content.items': { type: 'Array<{ title: string; description: string; metric?: string; tag?: string }>', required: true, description: '3 métricas com contexto' }
    }
  },
  {
    id: 'bento/Bento10',
    name: 'Bento Focus Ecosystem 34 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento10.astro',
    style_tags: ['bento-modern', 'clean-corporate'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['tecnologia', 'saas', 'engenharia-integrada', 'consultoria'],
    visual_personality: 'Divisão equilibrada entre bloco de destaque institucional à esquerda e matriz 2x2 de pilares à direita.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título do ecossistema' },
      'content.centralFocus': { type: '{ title: string; description: string; tag?: string }', required: true, description: 'Bloco institucional' },
      'content.pillars': { type: 'Array<{ title: string; description: string; icon?: string }>', required: true, description: '4 pilares circundantes' }
    }
  },
  {
    id: 'bento/Bento11',
    name: 'Bento Mosaic Showcase 36 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento11.astro',
    style_tags: ['portfolio-curated', 'luxury-minimal', 'bento-modern'],
    motion_level: 'interactive-hover',
    best_suited_niches: ['arquitetura', 'design-de-interiores', 'moda', 'galerias'],
    visual_personality: 'Mosaico de 4 projetos com spans assimétricos 8/4 e 4/8 com visual contemporâneo para portfólios autorais.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título do portfólio' },
      'content.showcases': { type: 'Array<{ title: string; description: string; category?: string; span?: string }>', required: true, description: 'Módulos em mosaico' }
    }
  },
  {
    id: 'bento/Bento12',
    name: 'Bento Categorized Features 37 (ReactBits Pro)',
    category: 'bento',
    filePath: 'src/components/bento/Bento12.astro',
    style_tags: ['editorial-clean', 'clean-corporate'],
    motion_level: 'none',
    best_suited_niches: ['engenharia', 'medicina', 'especialidades', 'advocacia'],
    visual_personality: 'Três módulos verticais com listas estruturadas de capacidades técnicas por especialidade.',
    props_schema: {
      'content.title': { type: 'string', required: true, description: 'Título do detalhamento' },
      'content.featureCategories': { type: 'Array<{ title: string; items: string[] }>', required: true, description: 'Listas categorizadas' }
    }
  }
];

export const COMPONENTS_MAP: Record<string, ComponentMetadata> = Object.fromEntries(
  COMPONENTS_CATALOG.map((c) => [c.id, c])
);
