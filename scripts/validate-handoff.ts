import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ClientConfigSchema } from '../src/clients/schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const leadsDir = path.join(rootDir, 'leads');
const dataDir = path.join(rootDir, 'src', 'clients', 'data');

interface CheckResult {
  passed: boolean;
  message: string;
}

interface LeadValidation {
  slug: string;
  name: string;
  checks: {
    zodSchema: CheckResult;
    artDirection: CheckResult;
    siteDesktop: CheckResult;
    siteMobile: CheckResult;
    redesignDesktop: CheckResult;
    redesignMobile: CheckResult;
    beforeAfterCard: CheckResult;
    handoffJson: CheckResult;
    whatsappCopy: CheckResult;
  };
  allPassed: boolean;
}

const MIN_IMAGE_SIZE_BYTES = 10 * 1024; // 10 KB

function checkFileExistsAndSize(filePath: string, label: string): CheckResult {
  if (!fs.existsSync(filePath)) {
    return { passed: false, message: `Ausente: ${path.basename(filePath)}` };
  }
  const stat = fs.statSync(filePath);
  if (stat.size < MIN_IMAGE_SIZE_BYTES) {
    return { passed: false, message: `Corrompido/Vazio (${stat.size} bytes < 10KB)` };
  }
  return { passed: true, message: `OK (${(stat.size / 1024).toFixed(1)} KB)` };
}

function checkWhatsAppFormat(filePath: string): CheckResult {
  if (!fs.existsSync(filePath)) {
    return { passed: false, message: 'Arquivo de WhatsApp ausente' };
  }
  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (content.length < 100) {
    return { passed: false, message: 'Script muito curto (< 100 caracteres)' };
  }
  // Não pode conter cabeçalhos Markdown crus (# , ## , ### )
  if (/^#{1,6}\s+/m.test(content)) {
    return { passed: false, message: 'Contém sintaxe Markdown inválida (# cabeçalho em vez de WhatsApp)' };
  }
  // Deve conter formatações típicas do WhatsApp (*negrito*, _itálico_ ou citação >)
  const hasFormatting = /\*[^*]+\*/.test(content) || /_[^_]+_/.test(content) || /^>/m.test(content);
  if (!hasFormatting) {
    return { passed: false, message: 'Sem formatação visual do WhatsApp (*negrito* ou _itálico_)' };
  }
  return { passed: true, message: 'OK (formato WhatsApp válido)' };
}

async function validateLead(slug: string): Promise<LeadValidation> {
  const leadJsonPath = path.join(leadsDir, slug, 'lead.json');
  let leadName = slug;
  if (fs.existsSync(leadJsonPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
      leadName = data.name || slug;
    } catch {}
  }

  // 1. Zod Schema
  const clientConfigPath = path.join(dataDir, `${slug}.ts`);
  let zodResult: CheckResult = { passed: false, message: 'Arquivo ts ausente' };
  if (fs.existsSync(clientConfigPath)) {
    try {
      const fileUrl = 'file:///' + clientConfigPath.replace(/\\/g, '/');
      const mod = await import(fileUrl);
      const parse = ClientConfigSchema.safeParse(mod.default);
      if (parse.success) {
        zodResult = { passed: true, message: 'Schema Zod 100% válido' };
      } else {
        const issues = parse.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).slice(0, 2).join('; ');
        zodResult = { passed: false, message: `Erro Zod: ${issues}` };
      }
    } catch (e: any) {
      zodResult = { passed: false, message: `Exceção import: ${e.message}` };
    }
  }

  // 2. Screenshots
  const siteDesktop = checkFileExistsAndSize(path.join(leadsDir, slug, 'screenshots', 'site-desktop.png'), 'site-desktop');
  const siteMobile = checkFileExistsAndSize(path.join(leadsDir, slug, 'screenshots', 'site-mobile.png'), 'site-mobile');
  const redesignDesktop = checkFileExistsAndSize(path.join(leadsDir, slug, 'redesign', 'screenshots', 'home-desktop.png'), 'home-desktop');
  const redesignMobile = checkFileExistsAndSize(path.join(leadsDir, slug, 'redesign', 'screenshots', 'home-mobile.png'), 'home-mobile');

  // 3. Before-After Card
  const beforeAfterCard = checkFileExistsAndSize(path.join(leadsDir, slug, 'commercial', 'visual', 'before-after.png'), 'before-after');

  // 4. Handoff JSON
  const handoffPath = path.join(leadsDir, slug, 'redesign', 'builder-handoff.json');
  const handoffJson: CheckResult = fs.existsSync(handoffPath)
    ? { passed: true, message: 'Presente' }
    : { passed: false, message: 'Ausente (builder-handoff.json)' };

  // 5. WhatsApp Script
  let whatsPath = path.join(leadsDir, slug, 'commercial', 'whatsapp.md');
  if (!fs.existsSync(whatsPath)) {
    whatsPath = path.join(leadsDir, slug, 'commercial', 'scripts', 'whatsapp.md');
  }
  const whatsappCopy = checkWhatsAppFormat(whatsPath);

  // 6. Art Direction & Design System
  const artDirectionPath = path.join(leadsDir, slug, 'referencias', 'art-direction.json');
  let artDirectionCheck: CheckResult = { passed: false, message: 'Ausente (art-direction.json)' };
  if (fs.existsSync(artDirectionPath)) {
    try {
      const art = JSON.parse(fs.readFileSync(artDirectionPath, 'utf8'));
      if (art.consulted_design_systems && art.consulted_design_systems.length > 0) {
        artDirectionCheck = { passed: true, message: `OK (${art.aesthetic_concept || 'Design System auditado'})` };
      } else {
        artDirectionCheck = { passed: false, message: 'Sem Design Systems consultados' };
      }
    } catch {
      artDirectionCheck = { passed: false, message: 'art-direction.json inválido' };
    }
  }

  const checks = {
    zodSchema: zodResult,
    artDirection: artDirectionCheck,
    siteDesktop,
    siteMobile,
    redesignDesktop,
    redesignMobile,
    beforeAfterCard,
    handoffJson,
    whatsappCopy
  };

  const allPassed = Object.values(checks).every(c => c.passed);

  return {
    slug,
    name: leadName,
    checks,
    allPassed
  };
}

async function main() {
  const args = process.argv.slice(2);
  let targetSlugs: string[] = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && args[i + 1]) {
      targetSlugs.push(args[i + 1]);
    }
  }

  // Se nenhum slug especificado, auditar todos os leads que possuem redesign/ ou estão no dataDir
  if (targetSlugs.length === 0) {
    if (fs.existsSync(dataDir)) {
      const clientFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts'));
      targetSlugs = clientFiles.map(f => f.replace('.ts', ''));
    }
  }

  console.log('='.repeat(70));
  console.log('  🔍 AUDITORIA E VALIDAÇÃO PRÉ-HANDOFF OBRIGATÓRIA (TOP LEADS)');
  console.log('='.repeat(70));
  console.log(`Leads avaliados: ${targetSlugs.length}\n`);

  let totalFailed = 0;

  for (const slug of targetSlugs) {
    const res = await validateLead(slug);
    const symbol = res.allPassed ? '✅' : '❌';
    console.log(`${symbol} [${res.slug}] - ${res.name}`);
    console.log(`   ├─ Schema Zod:         ${res.checks.zodSchema.passed ? '✓' : '✗'} ${res.checks.zodSchema.message}`);
    console.log(`   ├─ Direção de Arte:     ${res.checks.artDirection.passed ? '✓' : '✗'} ${res.checks.artDirection.message}`);
    console.log(`   ├─ Print Original Desk: ${res.checks.siteDesktop.passed ? '✓' : '✗'} ${res.checks.siteDesktop.message}`);
    console.log(`   ├─ Print Original Mob:  ${res.checks.siteMobile.passed ? '✓' : '✗'} ${res.checks.siteMobile.message}`);
    console.log(`   ├─ Redesign Desk:       ${res.checks.redesignDesktop.passed ? '✓' : '✗'} ${res.checks.redesignDesktop.message}`);
    console.log(`   ├─ Redesign Mob:        ${res.checks.redesignMobile.passed ? '✓' : '✗'} ${res.checks.redesignMobile.message}`);
    console.log(`   ├─ Card Antes/Depois:   ${res.checks.beforeAfterCard.passed ? '✓' : '✗'} ${res.checks.beforeAfterCard.message}`);
    console.log(`   ├─ Builder Handoff:     ${res.checks.handoffJson.passed ? '✓' : '✗'} ${res.checks.handoffJson.message}`);
    console.log(`   └─ Copy WhatsApp:       ${res.checks.whatsappCopy.passed ? '✓' : '✗'} ${res.checks.whatsappCopy.message}`);
    console.log('');

    if (!res.allPassed) totalFailed++;
  }

  // 7. AUDITORIA ANTI-CLONE (Diversidade Visual no Batch)
  console.log('='.repeat(70));
  console.log('  🎨 AUDITORIA ANTI-CLONE & DIVERSIDADE VISUAL DO LOTE');
  console.log('='.repeat(70));
  
  const heroImagesMap = new Map<string, string[]>();
  const variantFingerprints = new Map<string, string[]>();

  for (const slug of targetSlugs) {
    const tsFile = path.join(dataDir, `${slug}.ts`);
    if (fs.existsSync(tsFile)) {
      try {
        const fileUrl = 'file:///' + tsFile.replace(/\\/g, '/');
        const mod = await import(fileUrl);
        const pages = mod.default?.pages || [];
        const sections = pages[0]?.sections || [];
        
        // Coleta imagem de Hero
        const heroSec = sections.find((s: any) => s.type === 'hero');
        const heroImg = heroSec?.content?.imageUrl;
        if (heroImg) {
          if (!heroImagesMap.has(heroImg)) heroImagesMap.set(heroImg, []);
          heroImagesMap.get(heroImg)!.push(slug);
        }

        // Coleta variantes de seções
        const fp = sections.map((s: any) => `${s.type}:${s.variant}`).join(' -> ');
        if (!variantFingerprints.has(fp)) variantFingerprints.set(fp, []);
        variantFingerprints.get(fp)!.push(slug);
      } catch {}
    }
  }

  let cloneViolations = 0;
  for (const [img, slugs] of heroImagesMap.entries()) {
    if (slugs.length > 1) {
      cloneViolations++;
      console.error(`❌ [CLONE DETECTADO] Mesma imagem de Hero repetida em múltiplos leads:`);
      console.error(`   Imagem: ${img}`);
      console.error(`   Leads: ${slugs.join(', ')}`);
    }
  }

  for (const [fp, slugs] of variantFingerprints.entries()) {
    if (slugs.length > 2) {
      cloneViolations++;
      console.error(`❌ [MONOCULTURA DETECTADA] Estrutura de seções 100% idêntica em ${slugs.length} leads:`);
      console.error(`   Estrutura: ${fp}`);
      console.error(`   Leads: ${slugs.join(', ')}`);
    }
  }

  if (cloneViolations === 0) {
    console.log('✅ Diversidade visual confirmada: nenhuma imagem repetida e variantes diversificadas.');
  } else {
    totalFailed += cloneViolations;
  }

  console.log('='.repeat(70));
  if (totalFailed > 0) {
    console.error(`❌ FALHA: ${totalFailed} problema(s) detectados nos critérios de handoff.`);
    process.exit(1);
  } else {
    console.log('🎉 SUCESSO: Todos os leads cumprem 100% dos requisitos de handoff e diversidade!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Erro fatal durante a validação:', err);
  process.exit(1);
});
