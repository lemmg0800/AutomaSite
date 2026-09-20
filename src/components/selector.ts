/**
 * Component Selector & Intelligent Matching Engine
 * Mecanismo de seleção semântica de componentes para o Agente Builder.
 */

import {
  COMPONENTS_CATALOG,
  COMPONENTS_MAP,
  type ComponentCategory,
  type ComponentMetadata,
  type MotionLevel,
  type StyleTag
} from './components-meta';

export interface QueryComponentsOptions {
  section?: string | ComponentCategory;
  niche?: string;
  vibe?: string | StyleTag | string[];
  motion?: MotionLevel;
  limit?: number;
  avoidVariants?: string[];
}

export interface ComponentMatchResult {
  component: ComponentMetadata;
  score: number;
  matchReasons: string[];
  recommendedPropsSnippet: Record<string, any>;
  ejectGuidance?: string;
}

/**
 * Normaliza strings para comparação fonética/semântica básica
 */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .trim();
}

/**
 * Mapeia sinônimos e palavras-chave de nicho para correlação semântica
 */
const NICHE_TAXONOMY: Record<string, string[]> = {
  arquitetura: ['design-de-interiores', 'engenharia', 'decoracao', 'paisagismo', 'construcao', 'obras', 'luxo'],
  medicina: ['saude', 'clinicas', 'especialidades-medicas', 'cirurgia', 'consultorios', 'hospital'],
  odontologia: ['saude', 'implantes', 'estetica-dental', 'clinicas', 'consultorios'],
  advocacia: ['direito', 'escritorios-juridicos', 'consultoria', 'compliance', 'bancas'],
  consultoria: ['b2b', 'financas', 'gestao', 'auditoria', 'servicos-profissionais', 'estrategica'],
  tecnologia: ['software', 'saas', 'startups', 'high-tech', 'inovacao', 'seguranca'],
  estetica: ['beleza', 'luxo', 'cuidados-pessoais', 'harmonizacao', 'spa']
};

/**
 * Mapeia palavras de vibração para tags de estilo do design system
 */
const VIBE_STYLE_MAP: Record<string, StyleTag[]> = {
  luxo: ['luxury-minimal', 'ambient-glow', 'depth-tilt'],
  luxury: ['luxury-minimal', 'ambient-glow', 'depth-tilt'],
  minimalista: ['luxury-minimal', 'editorial-clean'],
  minimal: ['luxury-minimal', 'editorial-clean'],
  editorial: ['editorial-clean', 'typography-driven', 'portfolio-curated'],
  elegante: ['editorial-clean', 'luxury-minimal'],
  tecnologico: ['high-tech', 'bento-modern', 'depth-tilt'],
  tech: ['high-tech', 'bento-modern'],
  moderno: ['bento-modern', 'high-tech', 'clean-corporate'],
  corporativo: ['clean-corporate', 'editorial-clean'],
  direto: ['direct-response', 'bold-brutalist'],
  brutalista: ['bold-brutalist', 'direct-response'],
  organico: ['organic-soft', 'ambient-glow'],
  acolhedor: ['organic-soft', 'human-centered', 'ambient-glow'],
  imponente: ['bold-brutalist', 'ambient-glow', 'typography-driven'],
  premium: ['luxury-minimal', 'ambient-glow', 'depth-tilt', 'portfolio-curated']
};

/**
 * Gera um boilerplate inicial de props com base no schema do componente
 */
function buildPropsBoilerplate(component: ComponentMetadata): Record<string, any> {
  const result: Record<string, any> = {};

  for (const [key, prop] of Object.entries(component.props_schema)) {
    // Resolve chaves aninhadas (ex: 'content.headline' -> result.headline)
    const fieldKey = key.startsWith('content.') ? key.replace('content.', '') : key;
    if (prop.example !== undefined) {
      result[fieldKey] = prop.example;
    } else if (prop.default !== undefined) {
      result[fieldKey] = prop.default;
    } else if (prop.required) {
      result[fieldKey] = `[${prop.description}]`;
    }
  }

  return result;
}

/**
 * Realiza a consulta inteligente e ranking de componentes
 */
export function queryComponents(options: QueryComponentsOptions = {}): ComponentMatchResult[] {
  const {
    section,
    niche = '',
    vibe = '',
    motion,
    limit = 5,
    avoidVariants = []
  } = options;

  const normalizedSection = section ? normalize(String(section)) : null;
  const normalizedNiche = normalize(niche);
  const vibeWords = (Array.isArray(vibe) ? vibe : [vibe])
    .flatMap((v) => normalize(v).split(/\s+/))
    .filter(Boolean);

  // Expansão de sinônimos de nicho
  const relatedNicheKeywords = new Set<string>();
  if (normalizedNiche) {
    relatedNicheKeywords.add(normalizedNiche);
    for (const [baseKey, synonyms] of Object.entries(NICHE_TAXONOMY)) {
      if (normalizedNiche.includes(baseKey) || baseKey.includes(normalizedNiche)) {
        synonyms.forEach((s) => relatedNicheKeywords.add(s));
      }
    }
  }

  // Tags de estilo desejadas com base nas palavras de vibe
  const targetStyleTags = new Set<StyleTag>();
  for (const w of vibeWords) {
    if (VIBE_STYLE_MAP[w]) {
      VIBE_STYLE_MAP[w].forEach((tag) => targetStyleTags.add(tag));
    }
  }

  const scoredList: ComponentMatchResult[] = [];

  for (const comp of COMPONENTS_CATALOG) {
    // 1. Filtro estrito de seção/categoria se especificado
    if (normalizedSection) {
      const compCategory = comp.category.toLowerCase();
      // Casos especiais de alias (differentials -> benefits)
      const isMatch =
        compCategory === normalizedSection ||
        (normalizedSection === 'differentials' && compCategory === 'benefits') ||
        (normalizedSection === 'social-proof' && ['testimonials', 'credentials', 'stats'].includes(compCategory)) ||
        (normalizedSection === 'portfolio' && ['projects', 'gallery'].includes(compCategory));

      if (!isMatch) continue;
    }

    let score = 50; // Pontuação base
    const matchReasons: string[] = [];

    // 2. Penalidade anti-clone se o componente está na lista de variações a evitar
    if (avoidVariants.includes(comp.id) || avoidVariants.includes(comp.id.split('/')[1])) {
      score -= 40;
      matchReasons.push('Penalidade anti-clone: variante recentemente utilizada em outros layouts');
    }

    // 3. Avaliação de Nicho
    if (normalizedNiche) {
      const compNiches = comp.best_suited_niches.map(normalize);
      const exactMatch = compNiches.some((cn) => cn.includes(normalizedNiche) || normalizedNiche.includes(cn));

      if (exactMatch) {
        score += 35;
        matchReasons.push(`Aderência direta ao nicho: "${niche}"`);
      } else {
        const relatedMatch = compNiches.some((cn) =>
          Array.from(relatedNicheKeywords).some((rn) => cn.includes(rn) || rn.includes(cn))
        );
        if (relatedMatch) {
          score += 20;
          matchReasons.push(`Aderência correlata ao universo semântico de "${niche}"`);
        } else if (comp.best_suited_niches.includes('todos-os-nichos-comerciais') || comp.best_suited_niches.includes('todos-os-nichos-com-pretensao-premium')) {
          score += 10;
          matchReasons.push('Componente versátil aplicável a múltiplos nichos');
        }
      }
    }

    // 4. Avaliação de Vibe e Style Tags
    if (targetStyleTags.size > 0) {
      let matchedStylesCount = 0;
      for (const tag of comp.style_tags) {
        if (targetStyleTags.has(tag)) {
          matchedStylesCount++;
        }
      }
      if (matchedStylesCount > 0) {
        const bonus = matchedStylesCount * 15;
        score += bonus;
        matchReasons.push(`Harmonia de vibração visual (${matchedStylesCount} tags em comum: ${comp.style_tags.join(', ')})`);
      }
    }

    // 5. Avaliação de Motion
    if (motion) {
      if (comp.motion_level === motion) {
        score += 15;
        matchReasons.push(`Nível de movimento exato: ${motion}`);
      } else if (motion === 'complex-scroll' && comp.motion_level === 'interactive-hover') {
        score += 5;
      }
    }

    // 6. Bônus de impacto na 1ª dobra (se for Hero)
    if (comp.category === 'hero' && comp.first_fold_impact === 'high') {
      score += 20;
      matchReasons.push('💎 Flagship de 1ª dobra: alto apelo visual conforme AGENTS.md');
    }

    scoredList.push({
      component: comp,
      score,
      matchReasons,
      recommendedPropsSnippet: buildPropsBoilerplate(comp),
      ejectGuidance: comp.eject_recommended_when
    });
  }

  // Ordena por maior pontuação decrescente
  scoredList.sort((a, b) => b.score - a.score);

  return scoredList.slice(0, limit);
}

/**
 * Recomenda uma composição completa e harmônica de página (Design System Archetype)
 */
export function recommendFullPageLayout(options: {
  niche: string;
  vibe: string;
  businessName?: string;
  hasPhysicalAddress?: boolean;
  hasPortfolioProjects?: boolean;
}) {
  const { niche, vibe, hasPhysicalAddress = true, hasPortfolioProjects = false } = options;

  const sectionsToQuery = [
    { type: 'header', label: 'Cabeçalho' },
    { type: 'hero', label: 'Primeira Dobra (Hero)' },
    { type: 'services', label: 'Serviços & Soluções' },
    hasPortfolioProjects ? { type: 'projects', label: 'Projetos e Portfolio' } : null,
    { type: 'about', label: 'Sobre & Autoridade' },
    { type: 'stats', label: 'Métricas & Solidez' },
    { type: 'benefits', label: 'Diferenciais de Mercado' },
    { type: 'process', label: 'Jornada & Metodologia' },
    { type: 'testimonials', label: 'Depoimentos' },
    { type: 'faq', label: 'Perguntas Frequentes' },
    hasPhysicalAddress ? { type: 'map', label: 'Localização Física' } : null,
    { type: 'contact', label: 'Contato & Conversão' },
    { type: 'cta', label: 'Chamada Decisiva' },
    { type: 'footer', label: 'Rodapé Institucional' }
  ].filter(Boolean) as Array<{ type: string; label: string }>;

  const recommendations = sectionsToQuery.map((sec) => {
    const topMatches = queryComponents({
      section: sec.type,
      niche,
      vibe,
      limit: 2
    });

    const best = topMatches[0];
    const alternative = topMatches[1];

    return {
      sectionType: sec.type,
      label: sec.label,
      recommendedComponent: best?.component.id || `${sec.type}/01`,
      recommendedVariant: best?.component.id.split('/')[1] || '01',
      matchScore: best?.score || 0,
      whySelected: best?.matchReasons.join(' | ') || 'Padrão da categoria',
      alternativeVariant: alternative?.component.id.split('/')[1],
      propsSnippet: best?.recommendedPropsSnippet || {}
    };
  });

  // Recomendações de Efeitos e Backgrounds complementares
  const recommendedBg = vibe.includes('tech') || vibe.includes('modern')
    ? 'backgrounds/DotMatrixBackground'
    : 'backgrounds/MeshGradientBackground';

  return {
    niche,
    vibe,
    recommendedBackgroundEffect: recommendedBg,
    recommendedInteractiveEffects: ['effects/ParallaxScroll', 'ui/FloatingWhatsApp'],
    sections: recommendations
  };
}
