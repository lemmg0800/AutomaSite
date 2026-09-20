#!/usr/bin/env tsx
/**
 * CLI de Seleção Semântica e Recomendação de Layout para o Agente Builder
 * 
 * Uso:
 *   npx tsx scripts/select-layout.ts --niche "arquitetura" --vibe "luxury-minimal"
 *   npx tsx scripts/select-layout.ts --query --section hero --niche "medicina" --limit 3
 */

import { queryComponents, recommendFullPageLayout } from '../src/components/selector';

function parseArgs() {
  const args = process.argv.slice(2);
  const options: Record<string, any> = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.replace(/^--/, '');
      const nextArg = args[i + 1];
      if (nextArg && !nextArg.startsWith('--')) {
        options[key] = nextArg;
        i++;
      } else {
        options[key] = true;
      }
    }
  }
  return options;
}

const opts = parseArgs();

if (opts.query || opts.section) {
  const section = opts.section;
  const niche = opts.niche || 'geral';
  const vibe = opts.vibe || 'modern';
  const limit = Number(opts.limit) || 3;

  console.log(`\n🔍 Buscando componentes para [seção: ${section || 'todas'}] | [nicho: ${niche}] | [vibe: ${vibe}] (limite: ${limit}):\n`);
  const matches = queryComponents({
    section,
    niche,
    vibe,
    limit
  });

  if (matches.length === 0) {
    console.log('Nenhum componente encontrado com os critérios fornecidos.');
  } else {
    matches.forEach((m, idx) => {
      console.log(`${idx + 1}. [${m.component.id}] - ${m.component.name} (Score: ${m.score} pts)`);
      console.log(`   Motivos: ${m.matchReasons.join(' | ')}`);
      console.log(`   Motion: ${m.component.motion_level} | Estilo: ${m.component.style_tags.join(', ')}`);
      if (m.ejectGuidance) {
        console.log(`   Dica de Eject: ${m.ejectGuidance}`);
      }
      console.log('');
    });
  }
} else {
  const niche = opts.niche || 'arquitetura';
  const vibe = opts.vibe || 'luxury-minimal';
  const hasPortfolio = opts.portfolio === 'true' || opts.hasPortfolio === 'true';
  const hasPhysical = opts.physical !== 'false';

  console.log(`\n🏛️ Gerando Arquétipo Completo de Página para [nicho: ${niche}] | [vibe: ${vibe}]:\n`);
  const result = recommendFullPageLayout({
    niche,
    vibe,
    hasPortfolioProjects: hasPortfolio,
    hasPhysicalAddress: hasPhysical
  });

  console.log(`Efeito de Fundo Sugerido: ${result.recommendedBackgroundEffect}`);
  console.log(`Efeitos Globais: ${result.recommendedInteractiveEffects.join(', ')}\n`);
  console.log('Sequência de Seções Recomendada:');
  
  result.sections.forEach((s, idx) => {
    console.log(`  ${idx + 1}. [${s.sectionType.toUpperCase()}] -> ${s.recommendedComponent} (Variante: ${s.recommendedVariant}) | Score: ${s.matchScore}`);
    console.log(`     Motivo: ${s.whySelected}`);
    if (s.alternativeVariant) {
      console.log(`     Alternativa: ${s.alternativeVariant}`);
    }
  });
  console.log('');
}
