/**
 * Script de Varredura, Auditoria e Indexação Semântica dos 61 Design Systems
 * Execução: npx tsx scripts/index-design-systems.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ThemeTokensSchema, type ThemeTokens } from '../src/clients/schema';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const designSystemDir = path.join(rootDir, 'Design System');
const catalogJsonPath = path.join(designSystemDir, 'catalog.json');
const metaTsPath = path.join(designSystemDir, 'design-systems-meta.ts');

function isDarkColor(hex: string): boolean {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

export interface RawCatalogEntry {
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
}

export interface EnrichedDesignSystem extends RawCatalogEntry {
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

function deriveThemeTokens(entry: RawCatalogEntry): ThemeTokens {
  const isDark = entry.tema === 'escuro';
  const palette = entry.paleta_predominante || [];

  let bg = palette[0] || (isDark ? '#0b0f17' : '#ffffff');
  let secondary = palette[1] || (isDark ? '#161e2e' : '#f8fafc');
  let primary = palette[2] || (isDark ? '#38bdf8' : '#2563eb');
  let accent = palette[3] || palette[2] || (isDark ? '#f59e0b' : '#3b82f6');

  if (isDark && !isDarkColor(bg)) {
    const darkCandidate = palette.find((c) => isDarkColor(c));
    bg = darkCandidate || '#090d16';
  } else if (!isDark && isDarkColor(bg)) {
    const lightCandidate = palette.find((c) => !isDarkColor(c));
    bg = lightCandidate || '#f8fafc';
  }

  const textColor = isDark ? '#f8fafc' : '#0f172a';
  const headingFont = (entry.fontes && entry.fontes[0]) || 'Playfair Display';
  const bodyFont = (entry.fontes && entry.fontes[1]) || (entry.fontes && entry.fontes[0]) || 'Plus Jakarta Sans';
  const allTags = [...(entry.estilo_visual || []), ...(entry.efeitos_visuais || [])].map((t) => t.toLowerCase());

  let borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full' = 'md';
  if (allTags.some((t) => t.includes('brutalis') || t.includes('nitid') || t.includes('quadrado'))) {
    borderRadius = 'none';
  } else if (allTags.some((t) => t.includes('luxo') || t.includes('editorial') || t.includes('fino'))) {
    borderRadius = 'sm';
  } else if (allTags.some((t) => t.includes('organ') || t.includes('arredond') || t.includes('suave'))) {
    borderRadius = 'lg';
  }

  let backgroundEffect: 'none' | 'mesh' | 'dots' | 'prism' = 'none';
  if (allTags.some((t) => t.includes('mesh') || t.includes('glow') || t.includes('orbe') || t.includes('luz'))) {
    backgroundEffect = 'mesh';
  } else if (allTags.some((t) => t.includes('grid') || t.includes('ponto') || t.includes('dot') || t.includes('linha'))) {
    backgroundEffect = 'dots';
  } else if (allTags.some((t) => t.includes('prism') || t.includes('neon') || t.includes('crom') || t.includes('cyber'))) {
    backgroundEffect = 'prism';
  }

  const candidateTokens = {
    primaryColor: primary,
    secondaryColor: secondary,
    accentColor: accent,
    backgroundColor: bg,
    textColor: textColor,
    headingFont,
    bodyFont,
    borderRadius,
    mode: isDark ? ('dark' as const) : ('light' as const),
    backgroundEffect,
    enableParallax: true
  };

  return ThemeTokensSchema.parse(candidateTokens);
}

function deriveRecommendedComponents(entry: RawCatalogEntry) {
  const nichesStr = (entry.nichos || []).join(' ').toLowerCase();
  const stylesStr = (entry.estilo_visual || []).join(' ').toLowerCase();

  let hero = 'hero/Hero01';
  let services = 'services/Services01';
  let projects: string | undefined = undefined;
  let cta = 'cta/CTA01';
  let footer = 'footer/Footer01';
  let background = 'backgrounds/MeshGradientBackground';

  if (nichesStr.includes('arquitetura') || nichesStr.includes('imove') || nichesStr.includes('interiores') || stylesStr.includes('luxo')) {
    hero = 'hero/Hero04';
    services = 'services/Services03';
    projects = 'projects/Showcase01';
    cta = 'cta/CTA04';
    footer = 'footer/Footer08';
    background = 'backgrounds/MeshGradientBackground';
  } else if (nichesStr.includes('saude') || nichesStr.includes('medicina') || nichesStr.includes('odonto')) {
    hero = 'hero/Hero01';
    services = 'services/Services01';
    projects = 'projects/Projects01';
    cta = 'cta/CTA02';
    footer = 'footer/Footer02';
    background = 'backgrounds/MeshGradientBackground';
  } else if (nichesStr.includes('advocacia') || nichesStr.includes('juridico') || nichesStr.includes('consultoria')) {
    hero = 'hero/Hero01';
    services = 'services/Services02';
    cta = 'cta/CTA01';
    footer = 'footer/Footer02';
    background = 'backgrounds/DotMatrixBackground';
  } else if (nichesStr.includes('tecnologia') || nichesStr.includes('saas') || nichesStr.includes('ia') || stylesStr.includes('cyber')) {
    hero = 'hero/Hero05';
    services = 'services/Services03';
    projects = 'projects/Showcase02';
    cta = 'cta/CTA06';
    footer = 'footer/Footer06';
    background = 'backgrounds/DotMatrixBackground';
  } else if (nichesStr.includes('barbearia') || nichesStr.includes('gastronomia') || stylesStr.includes('brutalis')) {
    hero = 'hero/Hero02';
    services = 'services/Services01';
    cta = 'cta/CTA05';
    footer = 'footer/Footer04';
    background = 'backgrounds/PrismBackground';
  }

  return {
    hero,
    services,
    projects,
    cta,
    footer,
    background
  };
}

async function main() {
  console.log('===========================================================');
  console.log('🎨 AUDITORIA E INDEXAÇÃO SEMÂNTICA DOS 61 DESIGN SYSTEMS');
  console.log('===========================================================\n');

  if (!fs.existsSync(catalogJsonPath)) {
    console.error('Arquivo catalog.json não encontrado em:', catalogJsonPath);
    process.exit(1);
  }

  const rawData: RawCatalogEntry[] = JSON.parse(fs.readFileSync(catalogJsonPath, 'utf8'));
  console.log(`📋 Total de Design Systems no catálogo: ${rawData.length}`);

  let missingDirs = 0;
  const enrichedList: EnrichedDesignSystem[] = [];

  for (const item of rawData) {
    const fullDirPath = path.join(designSystemDir, item.caminho);
    if (!fs.existsSync(fullDirPath)) {
      console.warn(`⚠️ Diretório não encontrado: ${item.caminho}`);
      missingDirs++;
    }

    const tokens = deriveThemeTokens(item);
    const recommended_components = deriveRecommendedComponents(item);

    enrichedList.push({
      ...item,
      tokens,
      recommended_components
    });
  }

  console.log(`✅ Diretórios validados. Ausentes: ${missingDirs}`);
  console.log(`💎 100% dos ${enrichedList.length} temas possuem ThemeTokens válidos pelo Zod!`);

  // Gera o arquivo TypeScript tipado
  const tsContent = `/**
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

export const DESIGN_SYSTEMS_CATALOG: EnrichedDesignSystem[] = ${JSON.stringify(enrichedList, null, 2)};

export const DESIGN_SYSTEMS_MAP: Record<string, EnrichedDesignSystem> = Object.fromEntries(
  DESIGN_SYSTEMS_CATALOG.map((ds) => [ds.id, ds])
);
`;

  fs.writeFileSync(metaTsPath, tsContent, 'utf8');
  console.log(`📝 Arquivo TypeScript gerado em:\n   ${metaTsPath}`);

  // Atualiza catalog.json
  fs.writeFileSync(catalogJsonPath, JSON.stringify(enrichedList, null, 2), 'utf8');
  console.log(`📦 catalog.json sincronizado com tokens enriquecidos.\n`);

  console.log('--- RESUMO DE COBERTURA DOS TEMAS ---');
  const lightCount = enrichedList.filter((d) => d.tema === 'claro').length;
  const darkCount = enrichedList.filter((d) => d.tema === 'escuro').length;
  console.log(`Temas Claros: ${lightCount}`);
  console.log(`Temas Escuros: ${darkCount}`);
  console.log(`Total: ${enrichedList.length}`);
  console.log('\n🎉 Auditoria dos Design Systems finalizada com sucesso!');
}

main().catch((err) => {
  console.error('Erro na auditoria dos design systems:', err);
  process.exit(1);
});
