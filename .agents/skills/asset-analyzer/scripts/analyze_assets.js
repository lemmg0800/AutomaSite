import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
let slug = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
}

if (!slug) {
  console.error('Uso: node analyze_assets.js --slug "cliente-slug"');
  process.exit(1);
}

const baseDir = process.cwd();
const siteBaixadoLeads = path.join(baseDir, 'leads', slug, 'referencias', 'site-baixado');
const siteBaixadoIndex = path.join(baseDir, 'index', slug, 'referencias', 'site-baixado');

let siteBaixadoDir = '';
if (fs.existsSync(siteBaixadoLeads)) siteBaixadoDir = siteBaixadoLeads;
else if (fs.existsSync(siteBaixadoIndex)) siteBaixadoDir = siteBaixadoIndex;

const catalog = {
  slug,
  timestamp: new Date().toISOString(),
  logos: [],
  favicons: [],
  heroImages: [],
  teamImages: [],
  serviceImages: [],
  otherAssets: []
};

if (siteBaixadoDir && fs.existsSync(siteBaixadoDir)) {
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        scanDir(full);
      } else {
        const lower = f.toLowerCase();
        const rel = path.relative(siteBaixadoDir, full).replace(/\\/g, '/');
        if (lower.includes('logo') || lower.includes('brand')) {
          catalog.logos.push(rel);
        } else if (lower.includes('favicon') || lower.includes('icon')) {
          catalog.favicons.push(rel);
        } else if (lower.includes('hero') || lower.includes('banner')) {
          catalog.heroImages.push(rel);
        } else if (lower.includes('team') || lower.includes('equipe') || lower.includes('sobre')) {
          catalog.teamImages.push(rel);
        } else if (/\.(png|jpg|jpeg|webp|svg|gif)$/i.test(lower)) {
          catalog.serviceImages.push(rel);
        } else {
          catalog.otherAssets.push(rel);
        }
      }
    }
  }

  scanDir(siteBaixadoDir);
}

const outLeads = path.join(baseDir, 'leads', slug, 'referencias', 'assets-catalog.json');
const outIndex = path.join(baseDir, 'index', slug, 'referencias', 'assets-catalog.json');

[path.dirname(outLeads), path.dirname(outIndex)].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

fs.writeFileSync(outLeads, JSON.stringify(catalog, null, 2), 'utf-8');
fs.writeFileSync(outIndex, JSON.stringify(catalog, null, 2), 'utf-8');

console.log(`[Asset Analyzer] Assets catalogados em assets-catalog.json (Logos: ${catalog.logos.length}, Imagens: ${catalog.serviceImages.length})`);
