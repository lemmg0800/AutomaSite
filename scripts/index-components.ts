/**
 * Script de Varredura, Auditoria e Indexação Automática do Component Registry
 * Execução: npx tsx scripts/index-components.ts [--query "niche=arquitetura&vibe=luxury"]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPONENTS_CATALOG, type ComponentMetadata } from '../src/components/components-meta';
import { queryComponents, recommendFullPageLayout } from '../src/components/selector';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const componentsDir = path.join(rootDir, 'src', 'components');
const registryTsPath = path.join(componentsDir, 'registry.ts');
const outputJsonPath = path.join(componentsDir, 'component-registry.json');

interface AuditReport {
  timestamp: string;
  totalComponentsFound: number;
  totalCataloged: number;
  unregisteredFiles: string[];
  missingFromRegistryTs: string[];
  categoriesCount: Record<string, number>;
  motionLevelsCount: Record<string, number>;
  styleTagsCount: Record<string, number>;
}

function scanAstroFiles(dir: string, baseDir: string = dir): string[] {
  let results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(scanAstroFiles(fullPath, baseDir));
    } else if (
      entry.isFile() &&
      entry.name.endsWith('.astro') &&
      !entry.name.endsWith('BaseLayout.astro') &&
      !entry.name.endsWith('SectionRenderer.astro')
    ) {
      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      results.push(relPath);
    }
  }

  return results;
}

function parseRegistryTs(content: string): Set<string> {
  const registered = new Set<string>();
  const regex = /import\s+(\w+)\s+from\s+['"]\.\/([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const cleanPath = match[2].replace(/\.astro$/, '');
    registered.add(cleanPath);
  }
  return registered;
}

async function main() {
  console.log('===========================================================');
  console.log('🔍 INICIANDO AUDITORIA E INDEXAÇÃO SEMÂNTICA DE COMPONENTES');
  console.log('===========================================================\n');

  // 1. Escaneamento do Filesystem
  const astroFiles = scanAstroFiles(componentsDir);
  console.log(`📁 Arquivos .astro encontrados na pasta src/components: ${astroFiles.length}`);

  // 2. Leitura do registry.ts
  const registryTsContent = fs.readFileSync(registryTsPath, 'utf8');
  const inRegistryTs = parseRegistryTs(registryTsContent);

  // 3. Cruzamento com o COMPONENTS_CATALOG
  const catalogMap = new Map<string, ComponentMetadata>();
  COMPONENTS_CATALOG.forEach((c) => catalogMap.set(c.id, c));

  const unregisteredFiles: string[] = [];
  const missingFromRegistryTs: string[] = [];
  const categoriesCount: Record<string, number> = {};
  const motionLevelsCount: Record<string, number> = {};
  const styleTagsCount: Record<string, number> = {};

  for (const file of astroFiles) {
    const componentId = file.replace(/\.astro$/, '');
    if (!catalogMap.has(componentId)) {
      unregisteredFiles.push(file);
    }

    // Se o componente for uma seção normal (não backgrounds/effects/ui), deve estar no registry.ts
    const isSpecial = file.startsWith('backgrounds/') || file.startsWith('effects/') || file.startsWith('ui/');
    if (!isSpecial && !inRegistryTs.has(componentId)) {
      missingFromRegistryTs.push(componentId);
    }
  }

  // 4. Métricas do Catálogo
  for (const comp of COMPONENTS_CATALOG) {
    categoriesCount[comp.category] = (categoriesCount[comp.category] || 0) + 1;
    motionLevelsCount[comp.motion_level] = (motionLevelsCount[comp.motion_level] || 0) + 1;
    for (const tag of comp.style_tags) {
      styleTagsCount[tag] = (styleTagsCount[tag] || 0) + 1;
    }
  }

  // 5. Escrita do component-registry.json
  const registryPayload = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    totalComponents: COMPONENTS_CATALOG.length,
    components: COMPONENTS_CATALOG
  };

  fs.writeFileSync(outputJsonPath, JSON.stringify(registryPayload, null, 2), 'utf8');
  console.log(`✅ Manifesto JSON gerado com sucesso em:\n   ${outputJsonPath}\n`);

  // 6. Relatório de Auditoria
  const report: AuditReport = {
    timestamp: new Date().toISOString(),
    totalComponentsFound: astroFiles.length,
    totalCataloged: COMPONENTS_CATALOG.length,
    unregisteredFiles,
    missingFromRegistryTs,
    categoriesCount,
    motionLevelsCount,
    styleTagsCount
  };

  console.log('--- RESUMO DA AUDITORIA ---');
  console.log(`Total de Componentes no Catálogo: ${report.totalCataloged}`);
  console.log(`Categorias Cobertas (${Object.keys(categoriesCount).length}):`, Object.keys(categoriesCount).join(', '));
  console.log('Níveis de Motion:', motionLevelsCount);

  if (unregisteredFiles.length > 0) {
    console.warn(`⚠️ Arquivos não catalogados em components-meta.ts (${unregisteredFiles.length}):`, unregisteredFiles);
  } else {
    console.log('✨ 100% dos componentes no disco estão devidamente catalogados com metadados semânticos!');
  }

  if (missingFromRegistryTs.length > 0) {
    console.warn(`⚠️ Componentes ausentes no registry.ts (${missingFromRegistryTs.length}):`, missingFromRegistryTs);
  }

  // 7. Demonstração de Query (se argumentos forem passados ou teste padrão)
  const args = process.argv.slice(2);
  const testNicheArg = args.find((a) => a.startsWith('--niche='))?.split('=')[1] || 'arquitetura';
  const testVibeArg = args.find((a) => a.startsWith('--vibe='))?.split('=')[1] || 'luxury-minimal';

  console.log(`\n--- TESTE DO SELETOR INTELIGENTE: Nicho="${testNicheArg}", Vibe="${testVibeArg}" ---`);
  const topHeroes = queryComponents({
    section: 'hero',
    niche: testNicheArg,
    vibe: testVibeArg,
    limit: 2
  });

  for (const match of topHeroes) {
    console.log(`\n🏆 ${match.component.id} (${match.component.name})`);
    console.log(`   Score: ${match.score} pts`);
    console.log(`   Motivos: ${match.matchReasons.join(' | ')}`);
    console.log(`   Personalidade Visual: ${match.component.visual_personality}`);
    if (match.ejectGuidance) {
      console.log(`   Dica de Eject: ${match.ejectGuidance}`);
    }
  }

  console.log('\n--- ARQUÉTIPO COMPLETO RECOMENDADO PARA A PÁGINA ---');
  const fullPage = recommendFullPageLayout({
    niche: testNicheArg,
    vibe: testVibeArg,
    hasPhysicalAddress: true,
    hasPortfolioProjects: true
  });

  console.log(`Background: ${fullPage.recommendedBackgroundEffect}`);
  console.log(`Efeitos Globais: ${fullPage.recommendedInteractiveEffects.join(', ')}`);
  console.log('Sequência de Seções sugerida:');
  fullPage.sections.forEach((s, idx) => {
    console.log(`  ${idx + 1}. [${s.sectionType.toUpperCase()}] -> ${s.recommendedComponent} (Score: ${s.matchScore})`);
  });

  console.log('\n🎉 Auditoria e Indexação Semântica concluídas com sucesso!');
}

main().catch((err) => {
  console.error('Erro na auditoria:', err);
  process.exit(1);
});
