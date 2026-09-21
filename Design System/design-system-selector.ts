/**
 * Design System Selector & Semantic Matching Engine
 * Permite ao Diretor de Arte (Agente 2A) e ao Builder (Agente 2B) consultar,
 * ranquear e extrair tokens prontos dos 61 Design Systems de produção.
 */

import {
  DESIGN_SYSTEMS_CATALOG,
  DESIGN_SYSTEMS_MAP,
  type EnrichedDesignSystem
} from './design-systems-meta.ts';
import type { ThemeTokens } from '../src/clients/schema.ts';

export interface QueryDesignSystemOptions {
  query?: string;
  niche?: string;
  vibe?: string | string[];
  theme?: 'claro' | 'escuro' | 'dark' | 'light';
  limit?: number;
}

export interface DesignSystemMatchResult {
  designSystem: EnrichedDesignSystem;
  score: number;
  matchReasons: string[];
  tokens: ThemeTokens;
  recommendedComponents: EnrichedDesignSystem['recommended_components'];
}

function normalize(str: string): string {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .trim();
}

const NICHE_EXPANSIONS: Record<string, string[]> = {
  arquitetura: ['imoveis de luxo', 'interiores', 'construcao', 'obras', 'decoracao', 'paisagismo', 'alto padrao'],
  medicina: ['saude', 'clinica', 'cirurgia', 'odontologia', 'hospital', 'doutor', 'consulta'],
  odontologia: ['saude', 'implantes', 'dentes', 'estetica dental', 'clinica odontologica'],
  advocacia: ['direito', 'juridico', 'tributario', 'escritorio advocacia', 'banca', 'compliance'],
  consultoria: ['b2b', 'financas', 'gestao empresarial', 'auditoria', 'estrategia'],
  tecnologia: ['saas', 'software', 'ia', 'inteligencia artificial', 'cloud', 'dev'],
  gastronomia: ['restaurante', 'culinaria', 'cafe', 'bar', 'alimentos'],
  luxo: ['alto padrao', 'exclusivo', 'boutique', 'elegante', 'sofisticado']
};

/**
 * Consulta semântica de Design Systems com scoring e ranking
 */
export function queryDesignSystems(options: QueryDesignSystemOptions = {}): DesignSystemMatchResult[] {
  const {
    query = '',
    niche = '',
    vibe = '',
    theme,
    limit = 5
  } = options;

  const normalizedQuery = normalize(query);
  const normalizedNiche = normalize(niche);
  const vibeTerms = (Array.isArray(vibe) ? vibe : [vibe])
    .flatMap((v) => normalize(v).split(/\s+/))
    .filter(Boolean);

  // Normaliza tema requerido
  let requiredTheme: 'claro' | 'escuro' | null = null;
  if (theme) {
    if (theme === 'dark' || theme === 'escuro') requiredTheme = 'escuro';
    if (theme === 'light' || theme === 'claro') requiredTheme = 'claro';
  }

  // Expansão do nicho
  const relatedNiches = new Set<string>();
  if (normalizedNiche) {
    relatedNiches.add(normalizedNiche);
    for (const [k, synonyms] of Object.entries(NICHE_EXPANSIONS)) {
      if (normalizedNiche.includes(k) || k.includes(normalizedNiche)) {
        synonyms.forEach((s) => relatedNiches.add(normalize(s)));
      }
    }
  }

  const results: DesignSystemMatchResult[] = [];

  for (const ds of DESIGN_SYSTEMS_CATALOG) {
    let score = 50;
    const matchReasons: string[] = [];

    // 1. Filtro estrito ou bônus de tema (claro/escuro)
    if (requiredTheme) {
      if (ds.tema !== requiredTheme) {
        continue;
      }
      score += 20;
      matchReasons.push(`Filtro de contraste: ${ds.tema.toUpperCase()}`);
    }

    // 2. Avaliação de Nicho
    if (normalizedNiche) {
      const dsNiches = ds.nichos.map(normalize);
      const isDirectNiche = dsNiches.some((dn) => dn.includes(normalizedNiche) || normalizedNiche.includes(dn));

      if (isDirectNiche) {
        score += 45;
        matchReasons.push(`Aderência direta ao nicho: "${niche}"`);
      } else {
        const hasRelated = dsNiches.some((dn) =>
          Array.from(relatedNiches).some((rn) => dn.includes(rn) || rn.includes(dn))
        );
        if (hasRelated) {
          score += 25;
          matchReasons.push(`Aderência correlata ao segmento de mercado`);
        }
      }
    }

    // 3. Avaliação de Vibe e Estilo Visual
    if (vibeTerms.length > 0) {
      const dsStyles = [...ds.estilo_visual, ...ds.clima_sensacao, ...ds.efeitos_visuais].map(normalize);
      let matchedTerms = 0;

      for (const term of vibeTerms) {
        if (dsStyles.some((st) => st.includes(term))) {
          matchedTerms++;
        }
      }

      if (matchedTerms > 0) {
        score += matchedTerms * 15;
        matchReasons.push(`Compatibilidade de estilo visual e clima (${matchedTerms} termos afins)`);
      }
    }

    // 4. Correspondência livre de texto (query)
    if (normalizedQuery) {
      const allText = normalize(`${ds.titulo} ${ds.subtitulo} ${ds.melhor_para} ${ds.nichos.join(' ')}`);
      if (allText.includes(normalizedQuery)) {
        score += 35;
        matchReasons.push(`Correspondência direta com a busca textual`);
      }
    }

    results.push({
      designSystem: ds,
      score,
      matchReasons,
      tokens: ds.tokens,
      recommendedComponents: ds.recommended_components
    });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

/**
 * Obtém tokens exatos de um Design System por ID, permitindo overrides opcionais
 */
export function getDesignSystemTokens(id: string, overrides: Partial<ThemeTokens> = {}): ThemeTokens {
  const ds = DESIGN_SYSTEMS_MAP[id];
  if (!ds) {
    throw new Error(`[DesignSystemSelector] Design System com ID "${id}" não encontrado no catálogo de 61 templates.`);
  }
  return {
    ...ds.tokens,
    ...overrides
  };
}

/**
 * Combina o Design System com a árvore recomendada de componentes Astro
 */
export function recommendDesignSystemAndComponents(options: {
  niche: string;
  vibe: string;
  themePreference?: 'claro' | 'escuro' | 'dark' | 'light';
}) {
  const topDS = queryDesignSystems({
    niche: options.niche,
    vibe: options.vibe,
    theme: options.themePreference,
    limit: 1
  });

  const selected = topDS[0];

  return {
    niche: options.niche,
    vibe: options.vibe,
    selectedDesignSystem: {
      id: selected.designSystem.id,
      titulo: selected.designSystem.titulo,
      tema: selected.designSystem.tema,
      melhorPara: selected.designSystem.melhor_para,
      fontes: selected.designSystem.fontes,
      score: selected.score,
      reasons: selected.matchReasons
    },
    tokens: selected.tokens,
    recommendedComponents: selected.recommendedComponents,
    designSystemHtmlPath: selected.designSystem.design_system_page
  };
}
