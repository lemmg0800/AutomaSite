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
  analyzed_at: new Date().toISOString(),
  total_assets_found: 0,
  classified_assets: {
    logo_principal: [],
    logos_alternativos: [],
    favicon: [],
    imagens_hero: [],
    fotos_empresa: [],
    equipe: [],
    projetos: [],
    produtos: [],
    servicos: [],
    backgrounds: [],
    texturas: [],
    icones: [],
    elementos_graficos: [],
    fontes_locais: []
  },
  reusable_recommendations: {
    hero_image: null,
    brand_logo: null,
    team_photos: [],
    service_photos: []
  }
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
        catalog.total_assets_found++;

        // 1. Logos
        if (lower.includes('logo') || lower.includes('brand') || lower.includes('marca')) {
          if (lower.includes('white') || lower.includes('dark') || lower.includes('footer') || lower.includes('alt') || lower.includes('sm')) {
            catalog.classified_assets.logos_alternativos.push(rel);
          } else {
            catalog.classified_assets.logo_principal.push(rel);
          }
        }
        // 2. Favicon
        else if (lower.includes('favicon') || lower.includes('apple-touch-icon') || lower.includes('cropped-fav')) {
          catalog.classified_assets.favicon.push(rel);
        }
        // 3. Hero
        else if (lower.includes('hero') || lower.includes('banner') || lower.includes('slide') || lower.includes('destaque')) {
          catalog.classified_assets.imagens_hero.push(rel);
        }
        // 4. Fotos da Empresa / Fachada
        else if (lower.includes('empresa') || lower.includes('sede') || lower.includes('fachada') || lower.includes('escritorio') || lower.includes('clinica')) {
          catalog.classified_assets.fotos_empresa.push(rel);
        }
        // 5. Equipe / Sócios
        else if (lower.includes('team') || lower.includes('equipe') || lower.includes('socio') || lower.includes('advogado') || lower.includes('doutor') || lower.includes('medico') || lower.includes('perfil') || lower.includes('autor')) {
          catalog.classified_assets.equipe.push(rel);
        }
        // 6. Projetos
        else if (lower.includes('projeto') || lower.includes('case') || lower.includes('obra') || lower.includes('portfolio')) {
          catalog.classified_assets.projetos.push(rel);
        }
        // 7. Produtos
        else if (lower.includes('produto') || lower.includes('item') || lower.includes('catalogo')) {
          catalog.classified_assets.produtos.push(rel);
        }
        // 8. Backgrounds & Texturas
        else if (lower.includes('bg') || lower.includes('background') || lower.includes('fundo') || lower.includes('pattern')) {
          catalog.classified_assets.backgrounds.push(rel);
        }
        else if (lower.includes('texture') || lower.includes('noise') || lower.includes('grid')) {
          catalog.classified_assets.texturas.push(rel);
        }
        // 9. Ícones
        else if (lower.includes('icon') || lower.includes('ico') || (lower.endsWith('.svg') && !lower.includes('logo'))) {
          catalog.classified_assets.icones.push(rel);
        }
        // 10. Fontes Locais
        else if (/\.(woff2?|ttf|otf|eot)$/i.test(lower)) {
          catalog.classified_assets.fontes_locais.push(rel);
        }
        // 11. Serviços & Imagens Gerais
        else if (/\.(png|jpe?g|webp|avif)$/i.test(lower)) {
          catalog.classified_assets.servicos.push(rel);
        }
        // 12. Elementos Gráficos
        else {
          catalog.classified_assets.elementos_graficos.push(rel);
        }
      }
    }
  }

  scanDir(siteBaixadoDir);

  // Set reusable recommendations
  const ca = catalog.classified_assets;
  if (ca.logo_principal.length > 0) catalog.reusable_recommendations.brand_logo = ca.logo_principal[0];
  else if (ca.logos_alternativos.length > 0) catalog.reusable_recommendations.brand_logo = ca.logos_alternativos[0];

  if (ca.imagens_hero.length > 0) catalog.reusable_recommendations.hero_image = ca.imagens_hero[0];
  else if (ca.fotos_empresa.length > 0) catalog.reusable_recommendations.hero_image = ca.fotos_empresa[0];
  else if (ca.servicos.length > 0) catalog.reusable_recommendations.hero_image = ca.servicos[0];

  catalog.reusable_recommendations.team_photos = ca.equipe.slice(0, 4);
  catalog.reusable_recommendations.service_photos = ca.servicos.slice(0, 6);
}

const outLeads = path.join(baseDir, 'leads', slug, 'referencias', 'assets-catalog.json');
const outIndex = path.join(baseDir, 'index', slug, 'referencias', 'assets-catalog.json');

[path.dirname(outLeads), path.dirname(outIndex)].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

fs.writeFileSync(outLeads, JSON.stringify(catalog, null, 2), 'utf-8');
fs.writeFileSync(outIndex, JSON.stringify(catalog, null, 2), 'utf-8');

console.log(`[Asset Analyzer] Classificação de assets concluída com sucesso!`);
console.log(`   Total de assets identificados: ${catalog.total_assets_found}`);
console.log(`   Logo principal: ${catalog.reusable_recommendations.brand_logo || 'Não detectado (usar SVG limpo)'}`);
console.log(`   Hero image    : ${catalog.reusable_recommendations.hero_image || 'Placeholder de alto padrão'}`);
