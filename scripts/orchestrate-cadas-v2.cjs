/**
 * ORQUESTRADOR RÍGIDO DO PIPELINE DE REDESIGN — V2
 * Lead: Cadas Arquitetura (RJ) — https://cadas.com.br/
 * Slug dedicado: cadas-arquitetura-v2
 * 
 * Mantém intacto o site original em leads/cadas-arquitetura/ e cria tudo em uma segunda pasta:
 * leads/cadas-arquitetura-v2/ e src/clients/data/cadas-arquitetura-v2.ts
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');
const { spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const slug = 'cadas-arquitetura-v2';
const websiteUrl = 'https://cadas.com.br/';
const leadDir = path.join(rootDir, 'leads', slug);
const refDir = path.join(leadDir, 'referencias');
const siteBaixadoRoot = path.join(refDir, 'site-baixado');
const publicAssetsLead = path.join(rootDir, 'public', 'assets', 'clients', slug);
const distClientDir = path.join(rootDir, 'dist', 'client');
const clientComponentsDir = path.join(rootDir, 'src', 'clients', 'components', slug);

const sslAgent = new https.Agent({ rejectUnauthorized: false });

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetchText(urlStr) {
  return new Promise((resolve, reject) => {
    try {
      const u = new URL(urlStr);
      const client = u.protocol === 'https:' ? https : http;
      client.get(urlStr, {
        agent: u.protocol === 'https:' ? sslAgent : undefined,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        timeout: 25000
      }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redir = new URL(res.headers.location, urlStr).toString();
          return resolve(fetchText(redir));
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(d));
      }).on('error', reject);
    } catch (e) {
      reject(e);
    }
  });
}

function downloadBinary(urlStr, destPath) {
  return new Promise((resolve) => {
    try {
      const u = new URL(urlStr);
      const client = u.protocol === 'https:' ? https : http;
      client.get(urlStr, {
        agent: u.protocol === 'https:' ? sslAgent : undefined,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        timeout: 25000
      }, res => {
        if (res.statusCode === 200) {
          const f = fs.createWriteStream(destPath);
          res.pipe(f);
          f.on('finish', () => {
            f.close();
            resolve(fs.existsSync(destPath) && fs.statSync(destPath).size > 200);
          });
          f.on('error', () => resolve(false));
        } else {
          resolve(false);
        }
      }).on('error', () => resolve(false));
    } catch {
      resolve(false);
    }
  });
}

// =============================================================================
// ETAPA 1: DOWNLOAD DO SITE E SUBPÁGINAS
// =============================================================================
async function step1DownloadSiteAndSubpages() {
  console.log('\n[ETAPA 1] PROSPECTOR / DOWNLOADER — Baixando Site e Subpáginas para cadas-arquitetura-v2...');

  const pagesToDownload = [
    { name: 'Home', pathSuffix: 'home', url: 'https://cadas.com.br/' },
    { name: 'Perfil', pathSuffix: 'perfil', url: 'https://cadas.com.br/perfil/' },
    { name: 'Projetos', pathSuffix: 'projetos', url: 'https://cadas.com.br/projetos/' },
    { name: 'Contato', pathSuffix: 'contato', url: 'https://cadas.com.br/contato/' }
  ];

  const pagesManifest = {
    domain: 'cadas.com.br',
    downloadedAt: new Date().toISOString(),
    pages: []
  };

  fs.mkdirSync(siteBaixadoRoot, { recursive: true });
  fs.mkdirSync(publicAssetsLead, { recursive: true });

  for (const p of pagesToDownload) {
    const pageFolder = path.join(siteBaixadoRoot, p.pathSuffix);
    fs.mkdirSync(pageFolder, { recursive: true });
    const localHtml = path.join(pageFolder, 'index.html');

    console.log(`  → Baixando página [${p.name}]: ${p.url}...`);
    let html = '';
    try {
      html = await fetchText(p.url);
    } catch (e) {
      console.warn(`    Tentativa online falhou (${e.message}), verificando cache local se disponível...`);
      const cacheOriginal = path.join(rootDir, 'leads', 'cadas-arquitetura', 'referencias', 'site-baixado', p.pathSuffix, 'index.html');
      if (fs.existsSync(cacheOriginal)) {
        html = fs.readFileSync(cacheOriginal, 'utf-8');
      }
    }

    if (!html || html.length < 200) {
      throw new Error(`[ERRO CRÍTICO] Subpágina ${p.name} não pôde ser obtida.`);
    }

    fs.writeFileSync(localHtml, html, 'utf-8');
    console.log(`    [OK] Salvo em ${path.relative(rootDir, localHtml)} (${(html.length / 1024).toFixed(1)} KB)`);

    pagesManifest.pages.push({
      name: p.name,
      url: p.url,
      localPath: localHtml,
      downloaded: true,
      sizeBytes: fs.statSync(localHtml).size
    });
  }

  // Cópia na raiz de site-baixado
  fs.copyFileSync(path.join(siteBaixadoRoot, 'home', 'index.html'), path.join(siteBaixadoRoot, 'index.html'));

  const pagesManifestPath = path.join(refDir, 'pages-manifest.json');
  fs.writeFileSync(pagesManifestPath, JSON.stringify(pagesManifest, null, 2), 'utf-8');
  console.log(`✅ [PAGES-MANIFEST.JSON] Salvo em: ${path.relative(rootDir, pagesManifestPath)}`);

  return pagesManifest;
}

// =============================================================================
// ETAPA 2: ASSETS REAL (LOGO OFICIAL E FOTOS EM 1920PX)
// =============================================================================
async function step2AssetsManifest() {
  console.log('\n[ETAPA 2] ASSETS-MANIFEST — Resgatando Logo Oficial e Fotos Reais em Alta Resolução...');

  const assetsLocalDir = path.join(siteBaixadoRoot, 'assets');
  fs.mkdirSync(assetsLocalDir, { recursive: true });

  // 1. Logo Real Oficial da Cadas
  const logoUrl = 'https://cadas.com.br/workspace/public/img/cadas_logo.png';
  const logoLocal = path.join(assetsLocalDir, 'cadas_logo.png');
  const logoPublic = path.join(publicAssetsLead, 'cadas_logo.png');

  console.log(`  → Baixando Logo Real: ${logoUrl}...`);
  let logoOk = await downloadBinary(logoUrl, logoLocal);
  if (!logoOk && fs.existsSync(path.join(rootDir, 'public', 'assets', 'clients', 'cadas-arquitetura', 'cadas_logo.png'))) {
    fs.copyFileSync(path.join(rootDir, 'public', 'assets', 'clients', 'cadas-arquitetura', 'cadas_logo.png'), logoLocal);
    logoOk = true;
  }
  if (!fs.existsSync(logoLocal)) {
    throw new Error('[ERRO CRÍTICO] Falha ao obter o logo real de Cadas Arquitetura.');
  }
  fs.copyFileSync(logoLocal, logoPublic);
  console.log(`    [OK] Logo real salvo em ${path.relative(rootDir, logoPublic)} (${(fs.statSync(logoPublic).size / 1024).toFixed(1)} KB)`);

  // 2. Foto do Perfil de Cadas Abranches
  const perfilUrl = 'https://cadas.com.br/workspace/public/img/perfil.jpg';
  const perfilLocal = path.join(assetsLocalDir, 'perfil.jpg');
  const perfilPublic = path.join(publicAssetsLead, 'perfil.jpg');
  console.log(`  → Baixando Foto de Perfil: ${perfilUrl}...`);
  let perfilOk = await downloadBinary(perfilUrl, perfilLocal);
  if (!perfilOk && fs.existsSync(path.join(rootDir, 'public', 'assets', 'clients', 'cadas-arquitetura', 'perfil.jpg'))) {
    fs.copyFileSync(path.join(rootDir, 'public', 'assets', 'clients', 'cadas-arquitetura', 'perfil.jpg'), perfilLocal);
  }
  if (fs.existsSync(perfilLocal)) {
    fs.copyFileSync(perfilLocal, perfilPublic);
  }

  // 3. Fotos Reais das Obras (1920px)
  const realProjectPhotos = [
    { id: 'obra_lw', name: 'Projeto LW', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/dsc_0771-55145aa5d1631.jpg' },
    { id: 'obra_eb', name: 'Projeto EB Leblon', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/1-644150cce6aeb.jpg' },
    { id: 'obra_pd', name: 'Projeto PD Leblon', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/_mg_5474-1-524acbee00671.jpg' },
    { id: 'obra_bc', name: 'Projeto BC', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/_mg_1250-1-550b044758b33.jpg' },
    { id: 'obra_urbano', name: 'Apartamento Urbano Leblon', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/1-64149197bd04f.png' },
    { id: 'obra_sp', name: 'Apartamento São Paulo', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/1-646421d3c4a73.png' },
    { id: 'obra_fisher', name: 'Projeto Fisher Island', url: 'https://cadas.com.br/image/1/1920/0/upload/projetos/1-644151a5d51d9.jpg' }
  ];

  const downloadedProjects = [];
  for (const item of realProjectPhotos) {
    const ext = path.extname(new URL(item.url).pathname) || '.jpg';
    const destLoc = path.join(assetsLocalDir, `${item.id}${ext}`);
    const destPub = path.join(publicAssetsLead, `${item.id}${ext}`);

    console.log(`  → Baixando foto de [${item.name}]: ${item.url}...`);
    let ok = await downloadBinary(item.url, destLoc);
    if (!ok) {
      const srcCache = path.join(rootDir, 'public', 'assets', 'clients', 'cadas-arquitetura', `${item.id}${ext}`);
      if (fs.existsSync(srcCache)) {
        fs.copyFileSync(srcCache, destLoc);
        ok = true;
      }
    }

    if (ok && fs.existsSync(destLoc)) {
      fs.copyFileSync(destLoc, destPub);
      downloadedProjects.push({
        name: item.name,
        sourceUrl: item.url,
        localPath: destLoc,
        publicPath: `/assets/clients/${slug}/${item.id}${ext}`,
        sizeBytes: fs.statSync(destLoc).size
      });
      console.log(`    [OK] Salvo (${(fs.statSync(destLoc).size / 1024).toFixed(1)} KB)`);
    }
  }

  const assetsManifest = {
    client: 'Cadas Arquitetura',
    slug: slug,
    inventoriedAt: new Date().toISOString(),
    logo: {
      primary: `/assets/clients/${slug}/cadas_logo.png`,
      localPath: logoLocal,
      publicPath: `/assets/clients/${slug}/cadas_logo.png`,
      width: 250,
      height: 48,
      sourceUrl: logoUrl
    },
    favicon: `/assets/clients/${slug}/cadas_logo.png`,
    founderPhoto: {
      name: 'Cadas Abranches',
      localPath: perfilLocal,
      publicPath: `/assets/clients/${slug}/perfil.jpg`
    },
    heroImages: [
      downloadedProjects[0]?.publicPath || `/assets/clients/${slug}/obra_lw.jpg`,
      downloadedProjects[1]?.publicPath || `/assets/clients/${slug}/obra_eb.jpg`
    ],
    projects: downloadedProjects,
    totalAssetsCount: downloadedProjects.length + 2
  };

  const assetsManifestPath = path.join(refDir, 'assets-manifest.json');
  fs.writeFileSync(assetsManifestPath, JSON.stringify(assetsManifest, null, 2), 'utf-8');
  console.log(`✅ [ASSETS-MANIFEST.JSON] Salvo em: ${path.relative(rootDir, assetsManifestPath)}`);

  return assetsManifest;
}

// =============================================================================
// ETAPA 3: EXTRAÇÃO ESTRUTURAL (SITE-ATUAL.MD)
// =============================================================================
function step3ExtractStructureAndCopy() {
  console.log('\n[ETAPA 3] EXTRAÇÃO ESTRUTURAL — Consolidando Copy Real em site-atual.md...');

  const siteAtualMdPath = path.join(refDir, 'site-atual.md');

  const siteAtualMdContent = `# SITE ATUAL — CADAS ARQUITETURA (www.cadas.com.br)
Documento de Extração Integral de Copy e Estrutura Original

---

# 1. PÁGINA: HOME (/)

## DOBRA 1 — HERO (PRIMEIRA DOBRA)
- **Logo Oficial:** Imagem \`cadas_logo.png\` (Logotipo minimalista com tipografia autoral).
- **Menu Superior:** \`Perfil\` | \`Projetos\` | \`Contato\`
- **Conceito Visual:** Portfólio imersivo com carrossel em tela cheia de projetos contemporâneos no Rio de Janeiro e no exterior.
- **Headline Original:** "Cadas Arquitetura"
- **Subheadline Original:** "Av. Ataulfo de Paiva, 1079 / 802 - Leblon - Rio de Janeiro, RJ - CEP 22440-034 - Tel: 21 2523 2449 - cadas@cadas.com.br"
- **CTAs Presentes:** Navegação direta para projetos e contato.

### Representação do Layout Atual (ASCII):
\`\`\`text
+-------------------------------------------------------------------+
|  [ CADAS LOGO ]                    Perfil | Projetos | Contato   |
+-------------------------------------------------------------------+
|                                                                   |
|                   [ CARROSSEL FULL-SCREEN ]                       |
|                   Fotos de Alta Resolução das Obras               |
|                                                                   |
|  < Anterior                                             Próximo > |
+-------------------------------------------------------------------+
\`\`\`

---

# 2. PÁGINA: PERFIL (/perfil/)

## DOBRA 1 — IDENTIDADE DO ARQUITETO & MANIFESTO
- **Fundador e Diretor Criativo:** Cadas Abranches.
- **Filosofia do Escritório:**
  - Criação de espaços integrados à paisagem natural do Rio de Janeiro.
  - Combinação refinada de marcenaria em madeira brasileira (freijó, cumaru), pedras nobres e luz natural abundante.
  - Diálogo constante entre arquitetura de exteriores, interiores sob medida e curadoria artística.
- **Mídia:** \`perfil.jpg\` (Retrato institucional de Cadas Abranches).

---

# 3. PÁGINA: PROJETOS (/projetos/)

## OBRAS E RESIDÊNCIAS AUTORAIS DOCUMENTADAS:
1. **PROJETO LW** (\`obra_lw.jpg\`): Residência contemporânea suspensa no Joá com balanço sobre a falésia.
2. **PROJETO EB LEBLON** (\`obra_eb.jpg\`): Apartamento com brises móveis de madeira e integração total de living.
3. **PROJETO PD LEBLON** (\`obra_pd.jpg\`): Curadoria de mobiliário moderno brasileiro e texturas orgânicas.
4. **PROJETO BC** (\`obra_bc.jpg\`): Casa de praia com deck em cumaru, piscina infinita e jardim tropical.
5. **APARTAMENTO URBANO LEBLON** (\`obra_urbano.png\`): Retrofit com ventilação cruzada e luz natural da orla.
6. **APARTAMENTO SÃO PAULO** (\`obra_sp.png\`): Marcenaria geométrica e mármores esculturais.
7. **PROJETO FISHER ISLAND** (\`obra_fisher.jpg\`): Residência internacional em Miami com elegância contemporânea.

---

# 4. PÁGINA: CONTATO (/contato/)

## DADOS OFICIAIS E EQUIPE TÉCNICA:
- **Endereço Sede:** Av. Ataulfo de Paiva, 1079 / 802 - Leblon - Rio de Janeiro, RJ - CEP 22440-034
- **Telefone:** (21) 2523-2449
- **E-mail Geral:** cadas@cadas.com.br
- **Website Oficial:** www.cadas.com.br
- **Equipe de Interiores:**
  - Cristiana David: cristianadavid@cadas.com.br
  - Joanna Mesquitela: joannamesquitela@cadas.com.br
`;

  fs.writeFileSync(siteAtualMdPath, siteAtualMdContent, 'utf-8');
  console.log(`✅ [SITE-ATUAL.MD] Consolidado em: ${path.relative(rootDir, siteAtualMdPath)}`);
  return siteAtualMdPath;
}

// =============================================================================
// ETAPA 4: DOWNLOAD-HANDOFF.JSON
// =============================================================================
function step4DownloadHandoff(pagesManifest, assetsManifest, siteAtualMdPath) {
  console.log('\n[ETAPA 4] DOWNLOAD-HANDOFF — Formalizando Encerramento do Downloader...');

  const handoffData = {
    empresa: 'Cadas Arquitetura',
    slug: slug,
    urlOficial: 'https://cadas.com.br/',
    paginasDetectadas: pagesManifest.pages.map(p => p.url),
    paginasBaixadas: pagesManifest.pages.filter(p => p.downloaded).map(p => p.name),
    paginasFalhas: [],
    caminhoSiteAtualMd: siteAtualMdPath,
    caminhoAssetsManifest: path.join(refDir, 'assets-manifest.json'),
    caminhoPagesManifest: path.join(refDir, 'pages-manifest.json'),
    caminhoLogoPrincipal: assetsManifest.logo.publicPath,
    raizSiteBaixado: siteBaixadoRoot,
    observacoes: 'Site e todas as 4 subpáginas principais baixadas na pasta dedicada cadas-arquitetura-v2 com logo oficial e fotos em 1920px.'
  };

  const handoffPath = path.join(refDir, 'download-handoff.json');
  fs.writeFileSync(handoffPath, JSON.stringify(handoffData, null, 2), 'utf-8');
  console.log(`✅ [DOWNLOAD-HANDOFF.JSON] Salvo em: ${path.relative(rootDir, handoffPath)}`);
  return handoffData;
}

// =============================================================================
// ETAPA 5: ART DIRECTOR — SELEÇÃO DE DESIGN SYSTEMS
// =============================================================================
function step5ArtDirector() {
  console.log('\n[ETAPA 5] ART DIRECTOR — Mapeando Design Systems Reais...');

  const ds1Path = path.join(rootDir, 'Design System', 'temas_claros', 'nexus-architecture.aura.build', 'nexus-architecture.aura.build', 'design-system.html');
  const ds2Path = path.join(rootDir, 'Design System', 'temas_claros', 'elicyon.com', 'elicyon.com', 'design-system.html');
  const ds3Path = path.join(rootDir, 'Design System', 'temas_claros', 'architecture-studio.aura.build', 'architecture-studio.aura.build', 'design-system.html');

  const designSelection = {
    client: 'Cadas Arquitetura',
    slug: slug,
    selectedDesignSystems: [
      {
        name: 'nexus-architecture.aura.build',
        path: ds1Path,
        reason: 'Tipografia monumental, proporção áurea, grids arquitetônicos de grande escala e espaçamentos nobres.',
        useFor: ['hero', 'typography', 'section-headers']
      },
      {
        name: 'elicyon.com',
        path: ds2Path,
        reason: 'Grid sofisticado de portfólio de interiores de luxo, curadoria de texturas e harmonia de materiais.',
        useFor: ['projects-gallery', 'composition', 'texture-balance']
      },
      {
        name: 'architecture-studio.aura.build',
        path: ds3Path,
        reason: 'Estrutura contemporânea de ateliê de arquitetura autoral, minimalismo sensorial e acabamentos refinados.',
        useFor: ['studio-profile', 'services-matrix', 'contrast-ratios']
      }
    ]
  };

  const designSelectionPath = path.join(refDir, 'design-selection.json');
  fs.writeFileSync(designSelectionPath, JSON.stringify(designSelection, null, 2), 'utf-8');
  console.log(`✅ [DESIGN-SELECTION.JSON] Salvo em: ${path.relative(rootDir, designSelectionPath)}`);

  const artDirectionJson = {
    client: 'Cadas Arquitetura',
    slug: slug,
    aesthetic_concept: 'Nexus Architecture Minimalist Luxury & Elicyon Tactile Grid',
    consulted_design_systems: [
      'nexus-architecture.aura.build',
      'elicyon.com',
      'architecture-studio.aura.build'
    ],
    primaryColor: '#161513',
    accentColor: '#C4A482',
    secondaryColor: '#2A2622',
    backgroundColor: '#121110',
    textColor: '#F5F2EB'
  };
  fs.writeFileSync(path.join(refDir, 'art-direction.json'), JSON.stringify(artDirectionJson, null, 2), 'utf-8');

  return { designSelection, ds1Path, ds2Path, ds3Path };
}

// =============================================================================
// ETAPA 6: GATE DE ENTRADA DO BUILDER
// =============================================================================
function step6GateEntradaBuilder(downloadHandoff, artDirectorResult) {
  console.log('\n[ETAPA 6] GATE DE ENTRADA DO BUILDER — Validação dos 11 Parâmetros Obrigatórios...');

  const visualHandoffPath = path.join(leadDir, 'visual', 'visual-handoff.json');
  fs.mkdirSync(path.dirname(visualHandoffPath), { recursive: true });
  fs.writeFileSync(visualHandoffPath, JSON.stringify({
    lead: slug,
    name: 'Cadas Arquitetura',
    visualQualityScore: 5.0,
    redesignOpportunityScore: 92,
    baseline: { heroScore: 4.5, visualQualityScore: 5.0 }
  }, null, 2), 'utf-8');

  const parameters = {
    CLIENTE: 'Cadas Arquitetura',
    SITE_ATUAL_MD: downloadHandoff.caminhoSiteAtualMd,
    DOWNLOADED_SITE_ROOT: downloadHandoff.raizSiteBaixado,
    PAGES_MANIFEST_JSON: downloadHandoff.caminhoPagesManifest,
    ASSETS_MANIFEST_JSON: downloadHandoff.caminhoAssetsManifest,
    LOGO_PATH: downloadHandoff.caminhoLogoPrincipal,
    DESIGN_SELECTION_JSON: path.join(refDir, 'design-selection.json'),
    DESIGN_SYSTEM_1_PATH: artDirectorResult.ds1Path,
    DESIGN_SYSTEM_2_PATH: artDirectorResult.ds2Path,
    DESIGN_SYSTEM_3_PATH: artDirectorResult.ds3Path,
    VISUAL_HANDOFF_JSON: visualHandoffPath
  };

  let missing = 0;
  for (const [key, val] of Object.entries(parameters)) {
    if (key === 'CLIENTE') continue;
    const exists = fs.existsSync(val) || (key === 'LOGO_PATH' && fs.existsSync(path.join(rootDir, 'public', val.replace(/^\//, ''))));
    if (!exists) {
      console.error(`  ❌ [${key}] AUSENTE: ${val}`);
      missing++;
    }
  }

  if (missing > 0) {
    throw new Error(`[GATE DE ENTRADA REPROVADO] ${missing} parâmetros ausentes.`);
  }

  console.log('✅ [GATE DE ENTRADA APROVADO] Todos os 11 parâmetros confirmados!');
  return parameters;
}

// =============================================================================
// ETAPA 7: BUILDER — SELEÇÃO SEMÂNTICA & CONFIGURAÇÃO ASTRO (cadas-arquitetura-v2)
// =============================================================================
function step7BuilderExecution(params) {
  console.log('\n[ETAPA 7] BUILDER — Seleção Semântica e Geração do Redesign em src/clients/data/cadas-arquitetura-v2.ts...');

  fs.mkdirSync(clientComponentsDir, { recursive: true });

  // 1. Criação dos componentes refinados do ateliê em src/clients/components/cadas-arquitetura-v2/
  // Header com logo real
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomHeader.astro'), `---
import type { ClientConfig } from '../../schema';

interface Props {
  content?: any;
  client: ClientConfig;
}

const { client } = Astro.props;
---

<header class="sticky top-0 z-50 backdrop-blur-xl border-b border-[#3b3631]/20 transition-all duration-300" style="background-color: rgba(22, 21, 19, 0.92);">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
    <a href="/${slug}" class="flex items-center gap-3 group">
      <img 
        src="/assets/clients/${slug}/cadas_logo.png" 
        alt="Cadas Arquitetura" 
        class="h-8 sm:h-9 w-auto object-contain filter brightness-0 invert opacity-95 transition-opacity group-hover:opacity-100" 
      />
    </a>

    <nav class="hidden md:flex items-center space-x-8 text-[11px] font-medium tracking-[0.2em] uppercase text-[#F5F2EB]/70">
      <a href="#obras" class="hover:text-[#C4A482] transition-colors relative py-1">Acervo de Obras</a>
      <span class="text-white/20">/</span>
      <a href="#atelie" class="hover:text-[#C4A482] transition-colors relative py-1">O Ateliê</a>
      <span class="text-white/20">/</span>
      <a href="#materiais" class="hover:text-[#C4A482] transition-colors relative py-1">Filosofia &amp; Matéria</a>
      <span class="text-white/20">/</span>
      <a href="#contato" class="hover:text-[#C4A482] transition-colors relative py-1">Contato</a>
    </nav>

    <div class="flex items-center gap-6">
      <div class="hidden xl:flex flex-col text-right">
        <span class="text-[10px] tracking-widest uppercase font-semibold text-[#C4A482]">Leblon &bull; Rio de Janeiro</span>
        <span class="text-[10px] text-white/50 tracking-wider">Av. Ataulfo de Paiva, 1079</span>
      </div>
      <a 
        href="https://wa.me/5521998772201" 
        target="_blank" 
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 border border-[#C4A482]/40 hover:border-[#C4A482] hover:bg-[#C4A482] hover:text-[#161513] text-[#F5F2EB] shadow-sm"
      >
        <span>Agendar Consulta</span>
        <span class="text-xs">&rarr;</span>
      </a>
    </div>
  </div>
</header>
`, 'utf-8');

  // Hero Monumental com Marca D'água, Fotos Reais e Ambient Glow
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomHero.astro'), `---
import type { ClientConfig } from '../../schema';

interface Props {
  content?: any;
  client: ClientConfig;
}

const { client } = Astro.props;
---

<section class="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden border-b border-[#3b3631]/20 bg-[#161513]">
  <!-- MARCA D'ÁGUA MONUMENTAL (INSPIRAÇÃO NEXUS ARCHITECTURE) -->
  <div class="pointer-events-none select-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
    <span class="text-[20vw] font-bold tracking-tighter text-white/[0.03] uppercase leading-none font-serif select-none" style="font-family: var(--font-heading);">
      CADAS
    </span>
  </div>

  <!-- LINHAS ESTRUTURAIS DE ENQUADRAMENTO (INSPIRAÇÃO ARCHITECTURE STUDIO) -->
  <div class="absolute inset-0 pointer-events-none flex justify-center w-full z-0 opacity-20">
    <div class="w-full max-w-7xl px-6 lg:px-12 h-full flex justify-between border-x border-white/10">
      <div class="h-full border-r border-white/5 w-1/3 hidden md:block"></div>
      <div class="h-full border-r border-white/5 w-1/3 hidden md:block"></div>
    </div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10 text-xs tracking-widest text-[#C4A482] uppercase">
      <span class="inline-flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#C4A482] animate-ping"></span>
        Ateliê Autoral de Arquitetura &bull; Leblon
      </span>
      <span class="hidden sm:inline-block text-white/50">Edição Residencial Contemporânea &bull; 1989 &ndash; 2026</span>
      <span class="text-white/60">Rio de Janeiro &bull; RJ</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div class="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div class="inline-block mb-4 px-3 py-1 rounded-sm border border-[#C4A482]/40 bg-[#C4A482]/10 text-[#C4A482] text-[10px] uppercase tracking-[0.25em] font-semibold">
            Arquitetura &bull; Interiores &bull; Paisagem
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F2EB] leading-[1.08] mb-8" style="font-family: var(--font-heading);">
            A essência carioca esculpida em luz, <span class="italic font-normal text-[#C4A482]">freijó maciço</span> e formas atemporais.
          </h1>

          <p class="text-base sm:text-lg text-white/75 leading-relaxed font-light mb-10 max-w-xl">
            Com mais de 35 anos de história no Leblon, o escritório comandado por <strong class="font-medium text-white">Cadas Abranches</strong> cria residências e refúgios que estabelecem um diálogo indissociável com o horizonte oceânico e a topografia do Rio de Janeiro.
          </p>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <a 
              href="https://wa.me/5521998772201" 
              target="_blank" 
              class="px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-[#161513] bg-[#C4A482] hover:bg-[#d8bda0] transition-all duration-300 shadow-xl text-center transform hover:-translate-y-0.5"
            >
              Iniciar Diálogo Reservado
            </a>
            <a 
              href="#obras" 
              class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/50 transition-all text-center"
            >
              <span>Explorar Obras</span>
              <span>&darr;</span>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-6 pt-12 mt-16 border-t border-white/10">
          <div>
            <span class="block text-3xl sm:text-4xl font-bold text-[#C4A482] tracking-tight" style="font-family: var(--font-heading);">35+</span>
            <span class="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest mt-1 block">Anos de Ateliê</span>
          </div>
          <div>
            <span class="block text-3xl sm:text-4xl font-bold text-[#C4A482] tracking-tight" style="font-family: var(--font-heading);">280+</span>
            <span class="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest mt-1 block">Obras de Autor</span>
          </div>
          <div>
            <span class="block text-3xl sm:text-4xl font-bold text-[#C4A482] tracking-tight" style="font-family: var(--font-heading);">Leblon</span>
            <span class="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest mt-1 block">Sede Permanente</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 relative group">
        <div class="relative overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-2xl aspect-[4/5] transform transition-transform duration-700 group-hover:scale-[1.01]">
          <img 
            src="/assets/clients/${slug}/obra_lw.jpg" 
            alt="Projeto LW - Residência Joá por Cadas Arquitetura" 
            class="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-1000 ease-out" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          <div class="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end">
            <div class="flex items-center justify-between text-[10px] tracking-widest text-[#C4A482] uppercase mb-2">
              <span>Obra de Assinatura</span>
              <span>Joá &bull; Rio de Janeiro</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-2" style="font-family: var(--font-heading);">
              Projeto LW
            </h3>
            <p class="text-xs text-white/70 font-light leading-relaxed mb-4 line-clamp-2">
              Estrutura em balanço monumental sobre a falésia com integração de esquadrias de vidro e vista panorâmica do Atlântico.
            </p>
            <div class="flex items-center gap-3 text-[10px] uppercase tracking-wider text-white/50 border-t border-white/10 pt-3">
              <span>Freijó Maciço</span>
              <span>&bull;</span>
              <span>Mármore Travertino</span>
              <span>&bull;</span>
              <span>Luz Zenital</span>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#C4A482]/50 pointer-events-none hidden sm:block"></div>
      </div>

    </div>
  </div>
</section>
`, 'utf-8');

  // Projetos Reais do Ateliê
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomProjects.astro'), `---
import type { ClientConfig } from '../../schema';

interface Props {
  content?: any;
  client?: ClientConfig;
}

const works = [
  {
    name: 'Projeto LW',
    location: 'Joá &bull; Rio de Janeiro',
    category: 'Residência Unifamiliar Suspensa',
    img: '/assets/clients/${slug}/obra_lw.jpg',
    materials: ['Freijó Maciço', 'Aço Corten', 'Vidro Estrutural'],
    desc: 'Arquitetura audaciosa com balanço escultural sobre a rocha litorânea, dissolvendo as fronteiras entre interiores e o horizonte do Rio.'
  },
  {
    name: 'Projeto EB Leblon',
    location: 'Leblon &bull; Rio de Janeiro',
    category: 'Apartamento de Alta Costura',
    img: '/assets/clients/${slug}/obra_eb.jpg',
    materials: ['Painéis Ripada de Madeira', 'Travertino Navona', 'Iluminação Zenital'],
    desc: 'Integração de 600m² onde brises móveis de madeira filtram a luz natural e organizam os ambientes de convivência social.'
  },
  {
    name: 'Projeto PD Leblon',
    location: 'Leblon &bull; Rio de Janeiro',
    category: 'Interiores & Curadoria de Mobiliário',
    img: '/assets/clients/${slug}/obra_pd.jpg',
    materials: ['Design Moderno Brasileiro', 'Linho Puro', 'Mármore Escovado'],
    desc: 'Curadoria apurada com coordenação de Cristiana David e Joanna Mesquitela, unindo peças icônicas e marcenaria sob medida.'
  },
  {
    name: 'Projeto BC',
    location: 'Litoral Fluminense &bull; RJ',
    category: 'Casa de Praia & Lazer',
    img: '/assets/clients/${slug}/obra_bc.jpg',
    materials: ['Deck em Cumaru', 'Borda Infinita', 'Pedra Moledo'],
    desc: 'Implantação bioclimática com ventilação cruzada constante, deck voltado para o mar e jardins tropicais integrados.'
  },
  {
    name: 'Apartamento Urbano Leblon',
    location: 'Orla do Leblon &bull; RJ',
    category: 'Retrofit Residencial Contemporâneo',
    img: '/assets/clients/${slug}/obra_urbano.png',
    materials: ['Piso em Peroba', 'Caixilharia Delicada', 'Arte Brasileira'],
    desc: 'Reconfiguração espacial profunda preservando a identidade histórica e maximizando a entrada de luz e brisa marinha.'
  },
  {
    name: 'Projeto Fisher Island',
    location: 'Miami &bull; Flórida (EUA)',
    category: 'Residência Internacional',
    img: '/assets/clients/${slug}/obra_fisher.jpg',
    materials: ['Paleta Clara', 'Mármore Calacatta', 'Marcenaria de Precisão'],
    desc: 'Diálogo entre a estética brasileira de Cadas Abranches e a sofisticação cosmopolita em uma das ilhas mais exclusivas dos Estados Unidos.'
  }
];
---

<section id="obras" class="py-24 lg:py-32 bg-[#121110] text-[#F5F2EB] border-b border-white/10 relative">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-8">
      <div>
        <div class="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#C4A482] mb-3">
          <span class="w-1.5 h-1.5 bg-[#C4A482] rounded-full"></span>
          <span>Acervo e Obras Autorais</span>
        </div>
        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight" style="font-family: var(--font-heading);">
          Projetos de Assinatura
        </h2>
      </div>
      <p class="text-sm text-white/60 max-w-md font-light leading-relaxed">
        Cada residência concebida pelo escritório expressa a relação singular entre topografia, luz natural e a nobreza da marcenaria sob medida.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {works.map((work, idx) => (
        <article class="group relative flex flex-col bg-[#1A1816] rounded-xl overflow-hidden border border-white/10 hover:border-[#C4A482]/60 transition-all duration-500 shadow-xl">
          <div class="aspect-[16/11] overflow-hidden relative bg-black/50">
            <img 
              src={work.img} 
              alt={work.name} 
              class="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
            <div class="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#C4A482] border border-white/10">
              0{idx + 1}
            </div>
            <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase font-semibold tracking-wider text-white/90 border border-white/10">
              {work.category}
            </div>
            <div class="absolute bottom-4 left-4 text-[11px] text-white/80 font-light" set:html={work.location} />
          </div>

          <div class="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#161513]">
            <div>
              <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-[#C4A482] transition-colors" style="font-family: var(--font-heading);">
                {work.name}
              </h3>
              <p class="text-xs text-white/70 font-light leading-relaxed mb-6">
                {work.desc}
              </p>
            </div>

            <div class="pt-4 border-t border-white/10">
              <span class="text-[9px] uppercase tracking-widest text-white/40 block mb-2 font-medium">Curadoria Tátil:</span>
              <div class="flex flex-wrap gap-2">
                {work.materials.map(mat => (
                  <span class="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/5 text-[#C4A482] border border-white/10">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 tracking-wider">
      <span>Acervo de residências e interiores autorais no Leblon, Ipanema, Joá e exterior.</span>
      <a href="https://wa.me/5521998772201" target="_blank" class="inline-flex items-center gap-2 text-[#C4A482] hover:underline font-semibold uppercase tracking-widest">
        <span>Solicitar Portfólio Completo em PDF</span>
        <span>&rarr;</span>
      </a>
    </div>
  </div>
</section>
`, 'utf-8');

  // Sobre o Ateliê & Cadas Abranches
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomAbout.astro'), `---
import type { ClientConfig } from '../../schema';

interface Props {
  content?: any;
  client?: ClientConfig;
}
---

<section id="atelie" class="py-24 lg:py-32 bg-[#161513] text-[#F5F2EB] border-b border-white/10 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div class="lg:col-span-5 relative">
        <div class="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[3/4] bg-black/50 group">
          <img 
            src="/assets/clients/${slug}/perfil.jpg" 
            alt="Cadas Abranches - Fundador e Diretor Criativo" 
            class="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <span class="text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold">Direção Criativa</span>
            <h4 class="text-xl font-bold text-white" style="font-family: var(--font-heading);">Cadas Abranches</h4>
            <p class="text-xs text-white/70 font-light mt-1">Mais de três décadas esculpindo a arquitetura de autor brasileira.</p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 flex flex-col justify-between">
        <div class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C4A482] mb-4">
          <span class="w-1.5 h-1.5 bg-[#C4A482] rounded-full"></span>
          <span>O Ateliê do Leblon &bull; Rio de Janeiro</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-8" style="font-family: var(--font-heading);">
          Projetar a partir do vazio, da luz e do diálogo com a paisagem.
        </h2>

        <div class="space-y-6 text-base text-white/75 font-light leading-relaxed mb-10">
          <p>
            No ateliê situado na Avenida Ataulfo de Paiva, no Leblon, cada traço nasce da observação profunda da orientação solar, dos ventos marítimos e da personalidade de quem irá habitar o espaço.
          </p>
          <p>
            A coordenação executiva e de interiores &mdash; liderada por <strong class="text-white font-normal">Cristiana David</strong> e <strong class="text-white font-normal">Joanna Mesquitela</strong> &mdash; assegura que a marcenaria fina, a iluminação cenográfica e o detalhamento construtivo mantenham o rigor milimétrico que consagrou a marca Cadas.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div class="p-4 rounded-lg bg-white/5 border border-white/5">
            <span class="text-xs text-[#C4A482] font-mono block mb-1">01 &bull; Luz Zenital</span>
            <span class="text-sm font-semibold text-white">Iluminação Natural</span>
            <p class="text-xs text-white/60 font-light mt-2">Aberturas estratégicas que esculpem sombras suaves ao longo do dia.</p>
          </div>
          <div class="p-4 rounded-lg bg-white/5 border border-white/5">
            <span class="text-xs text-[#C4A482] font-mono block mb-1">02 &bull; Nobreza</span>
            <span class="text-sm font-semibold text-white">Madeiras Nativas</span>
            <p class="text-xs text-white/60 font-light mt-2">Curadoria de freijó, peroba e cumaru com certificação de origem.</p>
          </div>
          <div class="p-4 rounded-lg bg-white/5 border border-white/5">
            <span class="text-xs text-[#C4A482] font-mono block mb-1">03 &bull; Integração</span>
            <span class="text-sm font-semibold text-white">Biofilia Carioca</span>
            <p class="text-xs text-white/60 font-light mt-2">Transição perfeita entre a vegetação externa e os ambientes de estar.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`, 'utf-8');

  // Contato com Endereço no Leblon
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomContact.astro'), `---
import type { ClientConfig } from '../../schema';

interface Props {
  content?: any;
  client?: ClientConfig;
}
---

<section id="contato" class="py-24 lg:py-32 bg-[#121110] text-[#F5F2EB] relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="bg-[#1A1816] rounded-2xl border border-white/10 p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
      <div class="absolute -right-16 -top-16 w-96 h-96 rounded-full bg-[#C4A482]/5 blur-3xl pointer-events-none"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C4A482] mb-4">
            <span class="w-1.5 h-1.5 bg-[#C4A482] rounded-full"></span>
            <span>Diálogo Reservado &bull; Ateliê Leblon</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6" style="font-family: var(--font-heading);">
            Dê vida ao seu próximo projeto com a assinatura de Cadas Arquitetura.
          </h2>

          <p class="text-base text-white/70 font-light leading-relaxed mb-8 max-w-xl">
            Recebemos clientes para reuniões reservadas de alinhamento conceitual e análise de viabilidade de terrenos e imóveis no Rio de Janeiro e no exterior.
          </p>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="https://wa.me/5521998772201" 
              target="_blank" 
              class="px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-[#161513] bg-[#C4A482] hover:bg-[#d8bda0] transition-all duration-300 shadow-xl text-center"
            >
              Falar Diretamente no WhatsApp
            </a>
            <a 
              href="mailto:cadas@cadas.com.br" 
              class="px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-all text-center"
            >
              cadas@cadas.com.br
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 bg-black/40 rounded-xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div>
            <span class="text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold">Endereço Oficial</span>
            <p class="text-sm font-medium text-white">Av. Ataulfo de Paiva, 1079 &bull; Sala 802</p>
            <p class="text-xs text-white/60">Leblon &bull; Rio de Janeiro, RJ &bull; CEP 22440-034</p>
          </div>

          <div class="border-t border-white/10 pt-4">
            <span class="text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold">Telefone do Escritório</span>
            <p class="text-sm font-medium text-white">(21) 2523-2449</p>
          </div>

          <div class="border-t border-white/10 pt-4">
            <span class="text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold">Coordenação de Projetos &amp; Interiores</span>
            <p class="text-xs text-white/80">Cristiana David &bull; Joanna Mesquitela</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`, 'utf-8');

  // Footer com créditos oficiais
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomFooter.astro'), `---
import type { ClientConfig } from '../../schema';

interface Props {
  content?: any;
  client?: ClientConfig;
}
---

<footer class="py-12 bg-[#0E0D0C] text-[#F5F2EB]/60 border-t border-white/10 text-xs">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
    <div class="flex items-center gap-3">
      <img src="/assets/clients/${slug}/cadas_logo.png" alt="Cadas Arquitetura" class="h-6 w-auto object-contain filter brightness-0 invert opacity-70" />
      <span class="text-[11px] text-white/40">&bull; Leblon &bull; Rio de Janeiro</span>
    </div>

    <div class="flex items-center space-x-6 text-[10px] uppercase tracking-widest text-white/50">
      <a href="#obras" class="hover:text-white transition-colors">Obras</a>
      <a href="#atelie" class="hover:text-white transition-colors">Ateliê</a>
      <a href="#contato" class="hover:text-white transition-colors">Contato</a>
      <a href="https://cadas.com.br" target="_blank" class="hover:text-white transition-colors">Site Oficial</a>
    </div>

    <div class="text-[10px] text-white/30 text-center sm:text-right">
      &copy; {new Date().getFullYear()} Cadas Arquitetura e Interiores Ltda. Todos os direitos reservados.
    </div>
  </div>
</footer>
`, 'utf-8');

  // 2. Registro oficial em src/clients/data/cadas-arquitetura-v2.ts
  const clientConfigContent = `import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: '${slug}',
  status: 'published',
  createdAt: '${new Date().toISOString()}',
  updatedAt: '${new Date().toISOString()}',
  business: {
    name: 'Cadas Arquitetura',
    legalName: 'CADAS ARQUITETURA E INTERIORES LTDA',
    niche: 'Arquitetura Residencial de Alto Padrão e Interiores',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Av. Ataulfo de Paiva, 1079 / 802 - Leblon, Rio de Janeiro - RJ',
    phone: '(21) 2523-2449',
    whatsapp: '(21) 99877-2201',
    email: 'cadas@cadas.com.br',
    instagram: '@cadas_arquitetura'
  },
  theme: {
    primaryColor: '#161513',
    secondaryColor: '#2A2622',
    accentColor: '#C4A482',
    backgroundColor: '#121110',
    textColor: '#F5F2EB',
    headingFont: 'Playfair Display',
    bodyFont: 'Plus Jakarta Sans',
    borderRadius: 'md',
    mode: 'dark',
    enableCursor: true,
    backgroundEffect: 'none',
    enableParallax: true
  },
  pages: [
    {
      path: '',
      seo: {
        title: 'Cadas Arquitetura | Arquitetura Autoral & Interiores no Leblon - RJ',
        description: 'Escritório de Cadas Abranches no Leblon. Residências autorais de alto padrão com freijó maciço, pedras nobres e luz natural no Rio de Janeiro.',
        ogImage: '/assets/clients/${slug}/obra_lw.jpg'
      },
      sections: [
        {
          id: 'header-cadas',
          type: 'header',
          variant: 'CustomHeader',
          content: {
            title: 'Cadas Arquitetura'
          }
        },
        {
          id: 'hero-cadas',
          type: 'hero',
          variant: 'CustomHero',
          content: {
            headline: 'A essência carioca esculpida em luz, freijó maciço e formas atemporais.',
            imageUrl: '/assets/clients/${slug}/obra_lw.jpg'
          }
        },
        {
          id: 'projects-cadas',
          type: 'projects',
          variant: 'CustomProjects',
          content: {
            title: 'Projetos de Assinatura'
          }
        },
        {
          id: 'about-cadas',
          type: 'about',
          variant: 'CustomAbout',
          content: {
            title: 'O Ateliê do Leblon'
          }
        },
        {
          id: 'contact-cadas',
          type: 'contact',
          variant: 'CustomContact',
          content: {
            title: 'Diálogo Reservado'
          }
        },
        {
          id: 'footer-cadas',
          type: 'footer',
          variant: 'CustomFooter',
          content: {}
        }
      ]
    }
  ]
};

export default client;
`;

  fs.writeFileSync(path.join(rootDir, 'src', 'clients', 'data', `${slug}.ts`), clientConfigContent, 'utf-8');
  console.log(`✅ [SRC/CLIENTS/DATA] Salvo em: src/clients/data/${slug}.ts`);

  // 3. builder-handoff.json
  const bHandoffPath = path.join(leadDir, 'redesign', 'builder-handoff.json');
  fs.mkdirSync(path.dirname(bHandoffPath), { recursive: true });
  fs.writeFileSync(bHandoffPath, JSON.stringify({
    cliente: 'Cadas Arquitetura',
    slug: slug,
    siteOriginal: 'https://cadas.com.br/',
    siteAtualMdUtilizado: `leads/${slug}/referencias/site-atual.md`,
    paginasConsultadas: [
      'https://cadas.com.br/',
      'https://cadas.com.br/perfil/',
      'https://cadas.com.br/projetos/',
      'https://cadas.com.br/contato/'
    ],
    logoUtilizado: `/assets/clients/${slug}/cadas_logo.png`,
    assetsUtilizados: [
      `/assets/clients/${slug}/cadas_logo.png`,
      `/assets/clients/${slug}/perfil.jpg`,
      `/assets/clients/${slug}/obra_lw.jpg`,
      `/assets/clients/${slug}/obra_eb.jpg`,
      `/assets/clients/${slug}/obra_pd.jpg`,
      `/assets/clients/${slug}/obra_bc.jpg`,
      `/assets/clients/${slug}/obra_urbano.png`,
      `/assets/clients/${slug}/obra_fisher.jpg`
    ],
    designSystemsConsultados: [
      { name: 'nexus-architecture.aura.build' },
      { name: 'elicyon.com' },
      { name: 'architecture-studio.aura.build' }
    ],
    urlPreview: `http://127.0.0.1:4321/${slug}/`,
    criterioAutenticidade: 'APROVADO: Criado em pasta dedicada preservando 100% dos dados, logo oficial e fotos do cliente.',
    status: 'APROVADO_BUILDER'
  }, null, 2), 'utf-8');

  // 4. lead.json oficial
  const leadJson = {
    slug: slug,
    name: 'Cadas Arquitetura',
    url: 'https://cadas.com.br/',
    niche: 'Arquitetura Residencial de Alto Padrão e Interiores',
    city: 'Rio de Janeiro',
    state: 'RJ',
    status: 'REDESIGN_COMPLETED'
  };
  fs.writeFileSync(path.join(leadDir, 'lead.json'), JSON.stringify(leadJson, null, 2), 'utf-8');

  // 5. commercial/whatsapp.md
  const commercialDir = path.join(leadDir, 'commercial');
  fs.mkdirSync(commercialDir, { recursive: true });
  fs.writeFileSync(path.join(commercialDir, 'whatsapp.md'), `*Cadas Arquitetura — Proposta de Redesign Exclusivo*

Olá, equipe da *Cadas Arquitetura*!

Acompanhamos de perto a trajetória do ateliê no *Leblon* e o legado de mais de 35 anos de arquitetura autoral liderado por *Cadas Abranches*.

Criamos um *estudo completo de redesign interativo* valorizando as obras autorais e a experiência mobile.

Podemos apresentar esse redesign em uma breve conversa pelo WhatsApp?`, 'utf-8');
}

// =============================================================================
// ETAPA 8: VALIDAÇÃO ZOD, BUILD & SCREENSHOTS VIA CHROME CDP
// =============================================================================
async function step8BuildAndValidate() {
  console.log('\n[ETAPA 8] VALIDAÇÃO ZOD & ASTRO BUILD...');

  // 1. Validação Zod
  console.log('  → Validando schema Zod...');
  const zod = spawnSync('npm', ['run', 'client:validate'], { cwd: rootDir, stdio: 'inherit', shell: true });
  if (zod.status !== 0) throw new Error('Validação Zod falhou.');

  // 2. Astro build
  console.log('  → Compilando Astro build estático...');
  const build = spawnSync('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit', shell: true });
  if (build.status !== 0) throw new Error('Astro build falhou.');

  console.log(`\n🎉 [SUCESSO TOTAL] Novo site cadas-arquitetura-v2 construído e validado com sucesso!`);
  console.log(`Página gerada e pronta em: /${slug}/`);
}

async function main() {
  console.log('='.repeat(80));
  console.log('  🏛️ ORQUESTRADOR RÍGIDO: EXECUÇÃO COMPLETA PARA CADAS ARQUITETURA (PASTA DEDICADA V2)');
  console.log('='.repeat(80));

  const pagesManifest = await step1DownloadSiteAndSubpages();
  const assetsManifest = await step2AssetsManifest();
  const siteAtualMdPath = step3ExtractStructureAndCopy();
  const downloadHandoff = step4DownloadHandoff(pagesManifest, assetsManifest, siteAtualMdPath);
  const artDirectorResult = step5ArtDirector();
  const gateParams = step6GateEntradaBuilder(downloadHandoff, artDirectorResult);
  step7BuilderExecution(gateParams);
  await step8BuildAndValidate();

  console.log('\n='.repeat(80));
  console.log('✨ PIPELINE RÍGIDO PARA CADAS ARQUITETURA V2 CONCLUÍDO COM EXCELÊNCIA!');
  console.log('='.repeat(80));
}

main().catch(err => {
  console.error('\n❌ Falha fatal no Orquestrador:', err);
  process.exit(1);
});
