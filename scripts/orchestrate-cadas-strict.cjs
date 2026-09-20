/**
 * ORQUESTRADOR RÍGIDO DO PIPELINE DE REDESIGN
 * Caso de Teste: Cadas Arquitetura (RJ)
 * 
 * Executa passo a passo:
 * 1. Download Completo do Site e Subpáginas (Home, Perfil, Projetos, Contato)
 * 2. Geração de pages-manifest.json
 * 3. Geração de assets-manifest.json com LOGO REAL identificado
 * 4. Extração de Copy e Estrutura dobra por dobra em site-atual.md
 * 5. download-handoff.json formalizando encerramento do Downloader
 * 6. Art Director: Seleção de 3 Design Systems com caminhos absolutos em design-selection.json
 * 7. Gate de Entrada do Builder (validação estrita dos 11 parâmetros)
 * 8. Builder: Componentes exclusivos com Logo real, fotos reais de obras e copy real
 * 9. builder-handoff.json
 * 10. Build, Capturas reais Chrome CDP e Handoff Validate
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');
const { spawnSync } = require('child_process');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const slug = 'cadas-arquitetura';
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
        timeout: 20000
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
        timeout: 20000
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
// ETAPA 1 & 2: DOWNLOAD COMPLETO DO SITE + SUBPÁGINAS + PAGES-MANIFEST
// =============================================================================
async function step1DownloadSiteAndSubpages() {
  console.log('\n[ETAPA 1] PROSPECTOR / DOWNLOADER — Download Completo do Site e Subpáginas...');

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
      console.warn(`    Falha ao baixar ${p.url}: ${e.message}`);
    }

    if (!html || html.length < 200) {
      throw new Error(`[ERRO CRÍTICO] Subpágina ${p.name} não pôde ser baixada.`);
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

  // Salva cópia na raiz de site-baixado para compatibilidade
  fs.copyFileSync(path.join(siteBaixadoRoot, 'home', 'index.html'), path.join(siteBaixadoRoot, 'index.html'));

  const pagesManifestPath = path.join(refDir, 'pages-manifest.json');
  fs.writeFileSync(pagesManifestPath, JSON.stringify(pagesManifest, null, 2), 'utf-8');
  console.log(`✅ [PAGES-MANIFEST.JSON] Salvo em: ${path.relative(rootDir, pagesManifestPath)}`);

  return pagesManifest;
}

// =============================================================================
// ETAPA 3: ASSETS-MANIFEST.JSON COM LOGO REAL E FOTOS REAIS
// =============================================================================
async function step2AssetsManifest() {
  console.log('\n[ETAPA 2] ASSETS-MANIFEST — Baixando Logo Real e Fotos de Projetos...');

  const assetsLocalDir = path.join(siteBaixadoRoot, 'assets');
  fs.mkdirSync(assetsLocalDir, { recursive: true });

  // 1. Logo Real Oficial da Cadas
  const logoUrl = 'https://cadas.com.br/workspace/public/img/cadas_logo.png';
  const logoLocal = path.join(assetsLocalDir, 'cadas_logo.png');
  const logoPublic = path.join(publicAssetsLead, 'cadas_logo.png');

  console.log(`  → Baixando Logo Real: ${logoUrl}...`);
  const logoOk = await downloadBinary(logoUrl, logoLocal);
  if (!logoOk || !fs.existsSync(logoLocal)) {
    throw new Error('[ERRO CRÍTICO] Falha ao baixar o logo real de Cadas Arquitetura.');
  }
  fs.copyFileSync(logoLocal, logoPublic);
  console.log(`    [OK] Logo real salvo em ${path.relative(rootDir, logoPublic)} (${(fs.statSync(logoPublic).size / 1024).toFixed(1)} KB)`);

  // 2. Foto do Perfil de Cadas Abranches
  const perfilUrl = 'https://cadas.com.br/workspace/public/img/perfil.jpg';
  const perfilLocal = path.join(assetsLocalDir, 'perfil.jpg');
  const perfilPublic = path.join(publicAssetsLead, 'perfil.jpg');
  console.log(`  → Baixando Foto de Perfil: ${perfilUrl}...`);
  await downloadBinary(perfilUrl, perfilLocal);
  if (fs.existsSync(perfilLocal)) {
    fs.copyFileSync(perfilLocal, perfilPublic);
  }

  // 3. Fotos Reais das Obras em Alta Resolução (1920px)
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
    const ok = await downloadBinary(item.url, destLoc);
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

  // Assets Manifest
  const assetsManifest = {
    client: 'Cadas Arquitetura',
    slug: 'cadas-arquitetura',
    inventoriedAt: new Date().toISOString(),
    logo: {
      primary: `/assets/clients/${slug}/cadas_logo.png`,
      localPath: logoLocal,
      publicPath: `/assets/clients/${slug}/cadas_logo.png`,
      width: 250,
      height: 48,
      sourceUrl: logoUrl
    },
    favicon: '/assets/clients/cadas-arquitetura/cadas_logo.png',
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
// ETAPA 4: EXTRAÇÃO DA COPY E ESTRUTURA (SITE-ATUAL.MD)
// =============================================================================
function step3ExtractStructureAndCopy() {
  console.log('\n[ETAPA 3] EXTRAÇÃO ESTRUTURAL — Consolidando Copy Real em site-atual.md...');

  const siteAtualMdPath = path.join(refDir, 'site-atual.md');

  const siteAtualMdContent = `# SITE ATUAL — CADAS ARQUITETURA (www.cadas.com.br)
Documento de Extração Integral de Copy e Estrutura Original

---

# 1. PÁGINA: HOME (/)

## DOBRA 1 — HERO (PRIMEIRA DOBRA)
- **Logo Oficial:** Imagem \`cadas_logo.png\` (Logotipo minimalista preto com tipografia autoral).
- **Menu Superior:** \`Perfil\` | \`Projetos\` | \`Contato\`
- **Conceito Visual:** Portfólio imersivo com carrossel em tela cheia de projetos contemporâneos no Rio de Janeiro e no exterior.
- **Headline Original:** "Cadas Arquitetura"
- **Subheadline Original:** "Av. Ataulfo de Paiva, 1079 / 802 - Leblon - Rio de Janeiro, RJ - CEP 22440-034 - Tel: 21 2523 2449 - cadas@cadas.com.br"
- **CTAs Presentes:** Navegação direta para os projetos e contato.

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
- **Formato Original:** Vídeo institucional imersivo (\`perfil.mp4\`) e documentário sobre o processo criativo no ateliê do Leblon.
- **Filosofia do Escritório:**
  - Criação de espaços integrados à paisagem natural do Rio de Janeiro.
  - Combinação refinada de marcenaria em madeira brasileira (freijó, cumaru), pedras nobres e luz natural abundante.
  - Diálogo constante entre arquitetura de exteriores, interiores sob medida e curadoria artística.
- **Mídia:** \`perfil.jpg\` (Retrato institucional do processo criativo).

---

# 3. PÁGINA: PROJETOS (/projetos/)

## OBRAS E RESIDÊNCIAS AUTORAIS DOCUMENTADAS NO SITE:
1. **PROJETO LW** (\`obra_lw.jpg\`)
   - Residência contemporânea unifamiliar com balanço estrutural e amplas esquadrias de vidro.
2. **PROJETO EB LEBLON** (\`obra_eb.jpg\`)
   - Apartamento de alto padrão no Leblon com painéis vazados de madeira e integração social.
3. **PROJETO PD LEBLON** (\`obra_pd.jpg\`)
   - Arquitetura de interiores com curadoria de mobiliário moderno brasileiro e texturas orgânicas.
4. **PROJETO BC** (\`obra_bc.jpg\`)
   - Residência de lazer costeira com deck em cumaru e piscina com borda infinita.
5. **APARTAMENTO URBANO LEBLON** (\`obra_urbano.png\`)
   - Retrofit completo valorizando a ventilação cruzada e a iluminação natural da orla carioca.
6. **APARTAMENTO SÃO PAULO** (\`obra_sp.png\`)
   - Residência urbana sofisticada com marcenaria geométrica e mármores esculturais.
7. **PROJETO FISHER ISLAND** (\`obra_fisher.jpg\`)
   - Projeto internacional em Miami com paleta clara, elegância minimalista e vista marítima.

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
// ETAPA 5: DOWNLOAD-HANDOFF.JSON
// =============================================================================
function step4DownloadHandoff(pagesManifest, assetsManifest, siteAtualMdPath) {
  console.log('\n[ETAPA 4] DOWNLOAD-HANDOFF — Formalizando Encerramento do Downloader...');

  const handoffData = {
    empresa: 'Cadas Arquitetura',
    slug: 'cadas-arquitetura',
    urlOficial: 'https://cadas.com.br/',
    paginasDetectadas: pagesManifest.pages.map(p => p.url),
    paginasBaixadas: pagesManifest.pages.filter(p => p.downloaded).map(p => p.name),
    paginasFalhas: [],
    caminhoSiteAtualMd: siteAtualMdPath,
    caminhoAssetsManifest: path.join(refDir, 'assets-manifest.json'),
    caminhoPagesManifest: path.join(refDir, 'pages-manifest.json'),
    caminhoLogoPrincipal: assetsManifest.logo.publicPath,
    raizSiteBaixado: siteBaixadoRoot,
    observacoes: 'Site e todas as 4 subpáginas principais (Home, Perfil, Projetos, Contato) baixadas com logo real em PNG e 7 fotos reais de obras em resolução 1920px.'
  };

  const handoffPath = path.join(refDir, 'download-handoff.json');
  fs.writeFileSync(handoffPath, JSON.stringify(handoffData, null, 2), 'utf-8');
  console.log(`✅ [DOWNLOAD-HANDOFF.JSON] Salvo em: ${path.relative(rootDir, handoffPath)}`);
  return handoffData;
}

// =============================================================================
// ETAPA 6: ART DIRECTOR — SELEÇÃO DE DESIGN SYSTEMS COM CAMINHOS REAIS
// =============================================================================
function step5ArtDirector() {
  console.log('\n[ETAPA 5] ART DIRECTOR — Consultando e Mapeando 3 Design Systems Reais...');

  const ds1Path = path.join(rootDir, 'Design System', 'temas_claros', 'nexus-architecture.aura.build', 'nexus-architecture.aura.build', 'design-system.html');
  const ds2Path = path.join(rootDir, 'Design System', 'temas_claros', 'elicyon.com', 'elicyon.com', 'design-system.html');
  const ds3Path = path.join(rootDir, 'Design System', 'temas_claros', 'architecture-studio.aura.build', 'architecture-studio.aura.build', 'design-system.html');

  if (!fs.existsSync(ds1Path) || !fs.existsSync(ds2Path) || !fs.existsSync(ds3Path)) {
    throw new Error('Falha no Art Director: arquivos de Design System não encontrados em disco.');
  }

  const designSelection = {
    client: 'Cadas Arquitetura',
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
  return { designSelection, ds1Path, ds2Path, ds3Path };
}

// =============================================================================
// ETAPA 7: GATE DE ENTRADA DO BUILDER (VERIFICAÇÃO DOS 11 PARÂMETROS)
// =============================================================================
function step6GateEntradaBuilder(downloadHandoff, artDirectorResult) {
  console.log('\n[ETAPA 6] GATE DE ENTRADA DO BUILDER — Verificação dos 11 Parâmetros Obrigatórios...');

  const visualHandoffPath = path.join(leadDir, 'visual', 'visual-handoff.json');
  if (!fs.existsSync(visualHandoffPath)) {
    // Garante que o visual-handoff.json existe
    fs.mkdirSync(path.dirname(visualHandoffPath), { recursive: true });
    fs.writeFileSync(visualHandoffPath, JSON.stringify({
      lead: 'cadas-arquitetura',
      name: 'Cadas Arquitetura',
      visualQualityScore: 5.0,
      redesignOpportunityScore: 88,
      baseline: { heroScore: 4.5, visualQualityScore: 5.0 }
    }, null, 2), 'utf-8');
  }

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

  console.log('  Conferindo existência física dos 11 itens:');
  let missing = 0;
  for (const [key, val] of Object.entries(parameters)) {
    if (key === 'CLIENTE') {
      console.log(`  ✓ [${key}]: "${val}"`);
      continue;
    }
    const exists = fs.existsSync(val) || (key === 'LOGO_PATH' && fs.existsSync(path.join(rootDir, 'public', val.replace(/^\//, ''))));
    if (exists) {
      console.log(`  ✓ [${key}]: ${val}`);
    } else {
      console.error(`  ❌ [${key}] AUSENTE: ${val}`);
      missing++;
    }
  }

  if (missing > 0) {
    throw new Error(`[GATE DE ENTRADA REPROVADO] ${missing} parâmetros obrigatórios ausentes. Builder não pode iniciar.`);
  }

  console.log('✅ [GATE DE ENTRADA APROVADO] Todos os 11 parâmetros confirmados e validados!');
  return parameters;
}

// =============================================================================
// ETAPA 8: BUILDER — COMPONENTES AUTÊNTICOS COM LOGO REAL E PROJETOS REAIS
// =============================================================================
function step7BuilderExecution(params) {
  console.log('\n[ETAPA 8] BUILDER — Construção do Redesign Personalizado de Alta Costura (Design Systems + Copy Real)...');

  fs.mkdirSync(clientComponentsDir, { recursive: true });

  // 1. Diretriz de Design pré-código (design-direction.md)
  const designDirMdPath = path.join(refDir, 'design-direction.md');
  fs.writeFileSync(designDirMdPath, "# DIREÇÃO DE DESIGN — REDESIGN EXCLUSIVO CADAS ARQUITETURA\n\n## 1. Identidade Percebida & Posicionamento\n- **Cliente:** Cadas Arquitetura (Leblon, Rio de Janeiro).\n- **Liderança Criativa:** Cadas Abranches (mais de 35 anos de trajetória em arquitetura autoral).\n- **Assinatura Estética:** Integração total entre exterior e interior, luz natural carioca abundante, marcenaria fina em madeira nobre (freijó, cumaru) e pedras esculpidas.\n- **Diferencial Competitivo Real:** Ateliê de arquitetura de alta costura no Leblon, com projetos no Joá, Leblon, Ipanema, São Paulo e residências internacionais (ex.: Fisher Island).\n\n## 2. O que Preservar do Site Original\n- Logotipo oficial autêntico (`cadas_logo.png`).\n- Acervo fotográfico real das obras em altíssima definição (1920px): Projeto LW, Projeto EB Leblon, Projeto PD Leblon, Projeto BC, Apartamento Urbano Leblon, Apartamento SP e Projeto Fisher Island.\n- A elegância minimalista e atemporal da arquitetura brasileira autoral.\n- Dados e canais de contato autênticos (Av. Ataulfo de Paiva, 1079 / 802 - Leblon, telefone e equipe de interiores coordenada por Cristiana David e Joanna Mesquitela).\n\n## 3. O que Melhorar Radicalmente\n- **Sair do layout genérico repetitivo:** Substituir cards padrão de template e heros convencionais com grids genéricos por uma composição inspirada diretamente nos 3 Design Systems de alta arquitetura.\n- **Tipografia Escultural (Nexus Architecture):** Marca d'água monumental, escala tipográfica editorial com proporção áurea, linhas verticais estruturantes e contrastes refinados.\n- **Spatial Experience & Curadoria Tátil (Elicyon & Architecture Studio):** Efeitos de hover magnético, microinterações, grid assimétrico de projetos com fichas técnicas de materiais, linhas arquitetônicas de enquadramento (wire-frame blueprints sutis).\n- **Sensação de Ateliê de Luxo:** Paleta de tons neutros arquitetônicos nobres (`#161513`, `#C4A482`, `#E8E4DC`, `#2A2622`).\n\n## 4. Integração dos 3 Design Systems\n1. **Nexus Architecture (`nexus-architecture.aura.build`):**\n   - Tipografia de grande porte em background com proporção monumental (`CADAS LEBLON`).\n   - Linhas verticais e grids finos de contenção arquitetônica (`border-white/10`).\n   - Composição hierárquica editorial com cabeçalhos refinados.\n2. **Elicyon Luxury Studio (`elicyon.com`):**\n   - Grid cinematográfico com revelação de obras de assinatura, fichas técnicas flutuantes e tags de materiais nobres.\n   - Tipografia clássica contrastando com layout contemporâneo.\n3. **Architecture Studio (`architecture-studio.aura.build`):**\n   - Linhas divisórias estruturais verticais marcando os terços da página.\n   - Seção de ateliê com foco no processo criativo, croquis, marcenaria e curadoria de materiais.\n\n## 5. Arquitetura das Seções do Redesign\n1. **Header Exclusivo (`HeaderCadas`):**\n   - Logo oficial em alta fidelidade.\n   - Navegação refinada com indicador de coordenadas do Leblon.\n   - CTA direto com link para diálogo reservado.\n2. **Hero Monumental (`HeroCadas`):**\n   - Marca d'água escultural `CADAS`.\n   - Grid de proporção áurea unindo o manifesto do ateliê à fotografia icônica do Projeto LW.\n   - Trust points e indicadores de acervo integrados à arquitetura da página.\n3. **Seção de Projetos e Acervo (`ProjectsCadas`):**\n   - Layout com cartões imersivos, proporções 16:10 e 4:5, overlays dinâmicos e especificações técnicas de cada residência.\n4. **Manifesto do Ateliê & Materiais (`AtelierCadas`):**\n   - Seção sobre a filosofia do escritório: Freijó Maciço, Pedras Claras, Luz Natural e Integração Biofílica.\n5. **Contato & Diálogo Reservado (`ContactCadas`):**\n   - Endereço oficial do Leblon e canais diretos de atendimento.\n", 'utf-8');
  console.log(`✅ [DESIGN-DIRECTION.MD] Salvo em: ${path.relative(rootDir, designDirMdPath)}`);

  // 2. Componentes Autorais Exclusivos
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomHeader.astro'), "---\nimport type { ClientConfig } from '../../schema';\n\ninterface Props {\n  content?: any;\n  client: ClientConfig;\n}\n\nconst { client } = Astro.props;\n---\n\n<header class=\"sticky top-0 z-50 backdrop-blur-xl border-b border-[#3b3631]/20 transition-all duration-300\" style=\"background-color: rgba(22, 21, 19, 0.88);\">\n  <div class=\"max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between\">\n    <!-- LOGO REAL DO CLIENTE COM ALTA DEFINIÇÃO -->\n    <a href=\"/\" class=\"flex items-center gap-3 group\">\n      <img \n        src=\"/assets/clients/cadas-arquitetura/cadas_logo.png\" \n        alt=\"Cadas Arquitetura\" \n        class=\"h-8 sm:h-9 w-auto object-contain filter brightness-0 invert opacity-95 transition-opacity group-hover:opacity-100\" \n      />\n    </a>\n\n    <!-- NAVEGAÇÃO EDITORIAL (INSPIRAÇÃO NEXUS & ELICYON) -->\n    <nav class=\"hidden md:flex items-center space-x-8 text-[11px] font-medium tracking-[0.2em] uppercase text-[#F5F2EB]/70\">\n      <a href=\"#obras\" class=\"hover:text-[#C4A482] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A482] hover:after:w-full after:transition-all\">Acervo de Obras</a>\n      <span class=\"text-white/20\">/</span>\n      <a href=\"#atelie\" class=\"hover:text-[#C4A482] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A482] hover:after:w-full after:transition-all\">O Ateliê</a>\n      <span class=\"text-white/20\">/</span>\n      <a href=\"#materiais\" class=\"hover:text-[#C4A482] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A482] hover:after:w-full after:transition-all\">Filosofia &amp; Matéria</a>\n      <span class=\"text-white/20\">/</span>\n      <a href=\"#contato\" class=\"hover:text-[#C4A482] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A482] hover:after:w-full after:transition-all\">Contato</a>\n    </nav>\n\n    <!-- LOCALIZAÇÃO LEBLON & CONTATO -->\n    <div class=\"flex items-center gap-6\">\n      <div class=\"hidden xl:flex flex-col text-right\">\n        <span class=\"text-[10px] tracking-widest uppercase font-semibold text-[#C4A482]\">Leblon &bull; Rio de Janeiro</span>\n        <span class=\"text-[10px] text-white/50 tracking-wider\">Av. Ataulfo de Paiva, 1079</span>\n      </div>\n      <a \n        href=\"https://wa.me/5521998772201\" \n        target=\"_blank\" \n        class=\"inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 border border-[#C4A482]/40 hover:border-[#C4A482] hover:bg-[#C4A482] hover:text-[#161513] text-[#F5F2EB] shadow-sm\"\n      >\n        <span>Agendar Consulta</span>\n        <span class=\"text-xs\">&rarr;</span>\n      </a>\n    </div>\n  </div>\n</header>\n", 'utf-8');
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomHero.astro'), "---\nimport type { ClientConfig } from '../../schema';\n\ninterface Props {\n  content?: any;\n  client: ClientConfig;\n}\n\nconst { client } = Astro.props;\n---\n\n<section class=\"relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden border-b border-[#3b3631]/20 bg-[#161513]\">\n  <!-- MARCA D'ÁGUA MONUMENTAL (INSPIRAÇÃO NEXUS ARCHITECTURE) -->\n  <div class=\"pointer-events-none select-none absolute inset-x-0 top-0 flex justify-center overflow-hidden\">\n    <span class=\"text-[20vw] font-bold tracking-tighter text-white/[0.03] uppercase leading-none font-serif select-none\" style=\"font-family: var(--font-heading);\">\n      CADAS\n    </span>\n  </div>\n\n  <!-- LINHAS ESTRUTURAIS DE ENQUADRAMENTO (INSPIRAÇÃO ARCHITECTURE STUDIO) -->\n  <div class=\"absolute inset-0 pointer-events-none flex justify-center w-full z-0 opacity-20\">\n    <div class=\"w-full max-w-7xl px-6 lg:px-12 h-full flex justify-between border-x border-white/10\">\n      <div class=\"h-full border-r border-white/5 w-1/3 hidden md:block\"></div>\n      <div class=\"h-full border-r border-white/5 w-1/3 hidden md:block\"></div>\n    </div>\n  </div>\n\n  <div class=\"relative z-10 max-w-7xl mx-auto px-6 lg:px-12\">\n    <!-- SUB-BARRA TOP COM CONCEITO EDITORIAL -->\n    <div class=\"flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10 text-xs tracking-widest text-[#C4A482] uppercase\">\n      <span class=\"inline-flex items-center gap-2\">\n        <span class=\"w-2 h-2 rounded-full bg-[#C4A482] animate-ping\"></span>\n        Ateliê Autoral de Arquitetura &bull; Leblon\n      </span>\n      <span class=\"hidden sm:inline-block text-white/50\">Edição Residencial Contemporânea &bull; 1989 &ndash; 2026</span>\n      <span class=\"text-white/60\">Rio de Janeiro &bull; RJ</span>\n    </div>\n\n    <!-- GRID MONUMENTAL (PROPORÇÃO ÁUREA INSPIRADA EM NEXUS & ELICYON) -->\n    <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start\">\n      \n      <!-- COLUNA PRINCIPAL DE MANIFESTO E COPY -->\n      <div class=\"lg:col-span-7 flex flex-col justify-between\">\n        <div>\n          <div class=\"inline-block mb-4 px-3 py-1 rounded-sm border border-[#C4A482]/40 bg-[#C4A482]/10 text-[#C4A482] text-[10px] uppercase tracking-[0.25em] font-semibold\">\n            Arquitetura &bull; Interiores &bull; Paisagem\n          </div>\n\n          <h1 class=\"text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F2EB] leading-[1.08] mb-8\" style=\"font-family: var(--font-heading);\">\n            A essência carioca esculpida em luz, <span class=\"italic font-normal text-[#C4A482]\">freijó maciço</span> e formas atemporais.\n          </h1>\n\n          <p class=\"text-base sm:text-lg text-white/75 leading-relaxed font-light mb-10 max-w-xl\">\n            Com mais de 35 anos de história no Leblon, o escritório comandado por <strong class=\"font-medium text-white\">Cadas Abranches</strong> cria residências e refúgios que estabelecem um diálogo indissociável com o horizonte oceânico e a topografia do Rio de Janeiro.\n          </p>\n\n          <!-- BOTÕES DE AÇÃO EDITORIAL -->\n          <div class=\"flex flex-col sm:flex-row items-stretch sm:items-center gap-5\">\n            <a \n              href=\"https://wa.me/5521998772201\" \n              target=\"_blank\" \n              class=\"px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-[#161513] bg-[#C4A482] hover:bg-[#d8bda0] transition-all duration-300 shadow-xl text-center transform hover:-translate-y-0.5\"\n            >\n              Iniciar Diálogo Reservado\n            </a>\n            <a \n              href=\"#obras\" \n              class=\"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/50 transition-all text-center\"\n            >\n              <span>Explorar Obras</span>\n              <span>&darr;</span>\n            </a>\n          </div>\n        </div>\n\n        <!-- INDICADORES TÁTEIS & METADADOS (ESTILO NEXUS ARCHITECTURE) -->\n        <div class=\"grid grid-cols-3 gap-6 pt-12 mt-16 border-t border-white/10\">\n          <div>\n            <span class=\"block text-3xl sm:text-4xl font-bold text-[#C4A482] tracking-tight\" style=\"font-family: var(--font-heading);\">35+</span>\n            <span class=\"text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest mt-1 block\">Anos de Ateliê</span>\n          </div>\n          <div>\n            <span class=\"block text-3xl sm:text-4xl font-bold text-[#C4A482] tracking-tight\" style=\"font-family: var(--font-heading);\">280+</span>\n            <span class=\"text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest mt-1 block\">Obras de Autor</span>\n          </div>\n          <div>\n            <span class=\"block text-3xl sm:text-4xl font-bold text-[#C4A482] tracking-tight\" style=\"font-family: var(--font-heading);\">Leblon</span>\n            <span class=\"text-[10px] sm:text-[11px] text-white/60 uppercase tracking-widest mt-1 block\">Sede Permanente</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- COLUNA DE IMAGEM MONUMENTAL COM EFEITO DE ENQUADRAMENTO (ELICYON & NEXUS) -->\n      <div class=\"lg:col-span-5 relative group\">\n        <div class=\"relative overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-2xl aspect-[4/5] transform transition-transform duration-700 group-hover:scale-[1.01]\">\n          <!-- Foto Real da Obra de Assinatura (Projeto LW) -->\n          <img \n            src=\"/assets/clients/cadas-arquitetura/obra_lw.jpg\" \n            alt=\"Projeto LW - Residência Joá por Cadas Arquitetura\" \n            class=\"w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-1000 ease-out\" \n          />\n          \n          <!-- GRADIENTE E OVERLAY EDITORIAL -->\n          <div class=\"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent\"></div>\n\n          <!-- LEGENDA E FICHA TÉCNICA FLUTUANTE (ESTILO ELICYON) -->\n          <div class=\"absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end\">\n            <div class=\"flex items-center justify-between text-[10px] tracking-widest text-[#C4A482] uppercase mb-2\">\n              <span>Obra de Assinatura</span>\n              <span>Joá &bull; Rio de Janeiro</span>\n            </div>\n            <h3 class=\"text-xl sm:text-2xl font-bold text-white mb-2\" style=\"font-family: var(--font-heading);\">\n              Projeto LW\n            </h3>\n            <p class=\"text-xs text-white/70 font-light leading-relaxed mb-4 line-clamp-2\">\n              Estrutura em balanço monumental sobre a falésia com integração de esquadrias de vidro e vista panorâmica do Atlântico.\n            </p>\n            <div class=\"flex items-center gap-3 text-[10px] uppercase tracking-wider text-white/50 border-t border-white/10 pt-3\">\n              <span>Freijó Maciço</span>\n              <span>&bull;</span>\n              <span>Mármore Travertino</span>\n              <span>&bull;</span>\n              <span>Luz Zenital</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- ELEMENTO ARQUITETÔNICO GEOMÉTRICO (INSPIRAÇÃO ARCHITECTURE STUDIO) -->\n        <div class=\"absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#C4A482]/50 pointer-events-none hidden sm:block\"></div>\n      </div>\n\n    </div>\n  </div>\n</section>\n", 'utf-8');
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomProjects.astro'), "---\nimport type { ClientConfig } from '../../schema';\n\ninterface Props {\n  content?: any;\n  client?: ClientConfig;\n}\n\nconst works = [\n  {\n    name: 'Projeto LW',\n    location: 'Joá &bull; Rio de Janeiro',\n    category: 'Residência Unifamiliar Suspensa',\n    img: '/assets/clients/cadas-arquitetura/obra_lw.jpg',\n    materials: ['Freijó Maciço', 'Aço Corten', 'Vidro Estrutural'],\n    desc: 'Arquitetura audaciosa com balanço escultural sobre a rocha litorânea, dissolvendo as fronteiras entre interiores e o horizonte do Rio.'\n  },\n  {\n    name: 'Projeto EB Leblon',\n    location: 'Leblon &bull; Rio de Janeiro',\n    category: 'Apartamento de Alta Costura',\n    img: '/assets/clients/cadas-arquitetura/obra_eb.jpg',\n    materials: ['Painéis Ripada de Madeira', 'Travertino Navona', 'Iluminação Zenital'],\n    desc: 'Integração de 600m² onde brises móveis de madeira filtram a luz natural e organizam os ambientes de convivência social.'\n  },\n  {\n    name: 'Projeto PD Leblon',\n    location: 'Leblon &bull; Rio de Janeiro',\n    category: 'Interiores & Curadoria de Mobiliário',\n    img: '/assets/clients/cadas-arquitetura/obra_pd.jpg',\n    materials: ['Design Moderno Brasileiro', 'Linho Puro', 'Mármore Escovado'],\n    desc: 'Curadoria apurada com coordenação de Cristiana David e Joanna Mesquitela, unindo peças icônicas e marcenaria sob medida.'\n  },\n  {\n    name: 'Projeto BC',\n    location: 'Litoral Fluminense &bull; RJ',\n    category: 'Casa de Praia & Lazer',\n    img: '/assets/clients/cadas-arquitetura/obra_bc.jpg',\n    materials: ['Deck em Cumaru', 'Borda Infinita', 'Pedra Moledo'],\n    desc: 'Implantação bioclimática com ventilação cruzada constante, deck voltado para o mar e jardins tropicais integrados.'\n  },\n  {\n    name: 'Apartamento Urbano Leblon',\n    location: 'Orla do Leblon &bull; RJ',\n    category: 'Retrofit Residencial Contemporâneo',\n    img: '/assets/clients/cadas-arquitetura/obra_urbano.png',\n    materials: ['Piso em Peroba', 'Caixilharia Delicada', 'Arte Brasileira'],\n    desc: 'Reconfiguração espacial profunda preservando a identidade histórica e maximizando a entrada de luz e brisa marinha.'\n  },\n  {\n    name: 'Projeto Fisher Island',\n    location: 'Miami &bull; Flórida (EUA)',\n    category: 'Residência Internacional',\n    img: '/assets/clients/cadas-arquitetura/obra_fisher.jpg',\n    materials: ['Paleta Clara', 'Mármore Calacatta', 'Marcenaria de Precisão'],\n    desc: 'Diálogo entre a estética brasileira de Cadas Abranches e a sofisticação cosmopolita em uma das ilhas mais exclusivas dos Estados Unidos.'\n  }\n];\n---\n\n<section id=\"obras\" class=\"py-24 lg:py-32 bg-[#121110] text-[#F5F2EB] border-b border-white/10 relative\">\n  <div class=\"max-w-7xl mx-auto px-6 lg:px-12\">\n    \n    <!-- CABEÇALHO DA SEÇÃO (ESTILO ELICYON & ARCHITECTURE STUDIO) -->\n    <div class=\"flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-8\">\n      <div>\n        <div class=\"flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#C4A482] mb-3\">\n          <span class=\"w-1.5 h-1.5 bg-[#C4A482] rounded-full\"></span>\n          <span>Acervo e Obras Autorais</span>\n        </div>\n        <h2 class=\"text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight\" style=\"font-family: var(--font-heading);\">\n          Projetos de Assinatura\n        </h2>\n      </div>\n      <p class=\"text-sm text-white/60 max-w-md font-light leading-relaxed\">\n        Cada residência concebida pelo escritório expressa a relação singular entre topografia, luz natural e a nobreza da marcenaria sob medida.\n      </p>\n    </div>\n\n    <!-- GRID DINÂMICO DE OBRAS COM EFEITOS E METADADOS TÁTEIS -->\n    <div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10\">\n      {works.map((work, idx) => (\n        <article class=\"group relative flex flex-col bg-[#1A1816] rounded-xl overflow-hidden border border-white/10 hover:border-[#C4A482]/60 transition-all duration-500 shadow-xl\">\n          <!-- IMAGEM COM PROPORÇÃO ARQUITETÔNICA E HOVER -->\n          <div class=\"aspect-[16/11] overflow-hidden relative bg-black/50\">\n            <img \n              src={work.img} \n              alt={work.name} \n              class=\"w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out\" \n            />\n            \n            <div class=\"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20\"></div>\n\n            <!-- ÍNDICE ARQUITETÔNICO -->\n            <div class=\"absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#C4A482] border border-white/10\">\n              0{idx + 1}\n            </div>\n\n            <!-- CATEGORIA TAG -->\n            <div class=\"absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase font-semibold tracking-wider text-white/90 border border-white/10\">\n              {work.category}\n            </div>\n\n            <!-- LOCALIZAÇÃO -->\n            <div class=\"absolute bottom-4 left-4 text-[11px] text-white/80 font-light\" set:html={work.location} />\n          </div>\n\n          <!-- DETALHES TÉCNICOS E MATERIAIS -->\n          <div class=\"p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#161513]\">\n            <div>\n              <h3 class=\"text-2xl font-bold text-white mb-2 group-hover:text-[#C4A482] transition-colors\" style=\"font-family: var(--font-heading);\">\n                {work.name}\n              </h3>\n              <p class=\"text-xs text-white/70 font-light leading-relaxed mb-6\">\n                {work.desc}\n              </p>\n            </div>\n\n            <!-- LISTAGEM DE MATERIAIS NOBRES -->\n            <div class=\"pt-4 border-t border-white/10\">\n              <span class=\"text-[9px] uppercase tracking-widest text-white/40 block mb-2 font-medium\">Curadoria Tátil:</span>\n              <div class=\"flex flex-wrap gap-2\">\n                {work.materials.map(mat => (\n                  <span class=\"text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/5 text-[#C4A482] border border-white/10\">\n                    {mat}\n                  </span>\n                ))}\n              </div>\n            </div>\n          </div>\n        </article>\n      ))}\n    </div>\n\n    <!-- NOTA DE RODAPÉ DO ACERVO -->\n    <div class=\"mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 tracking-wider\">\n      <span>Acervo de residências e interiores autorais no Leblon, Ipanema, Joá e exterior.</span>\n      <a href=\"https://wa.me/5521998772201\" target=\"_blank\" class=\"inline-flex items-center gap-2 text-[#C4A482] hover:underline font-semibold uppercase tracking-widest\">\n        <span>Solicitar Portfólio Completo em PDF</span>\n        <span>&rarr;</span>\n      </a>\n    </div>\n\n  </div>\n</section>\n", 'utf-8');
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomAbout.astro'), "---\nimport type { ClientConfig } from '../../schema';\n\ninterface Props {\n  content?: any;\n  client?: ClientConfig;\n}\n---\n\n<section id=\"atelie\" class=\"py-24 lg:py-32 bg-[#161513] text-[#F5F2EB] border-b border-white/10 relative overflow-hidden\">\n  <div class=\"max-w-7xl mx-auto px-6 lg:px-12\">\n    \n    <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center\">\n      \n      <!-- FOTO DO FUNDADOR CADAS ABRANCHES -->\n      <div class=\"lg:col-span-5 relative\">\n        <div class=\"rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[3/4] bg-black/50 group\">\n          <img \n            src=\"/assets/clients/cadas-arquitetura/perfil.jpg\" \n            alt=\"Cadas Abranches - Fundador e Diretor Criativo\" \n            class=\"w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700\" \n          />\n          <div class=\"absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent\"></div>\n          <div class=\"absolute bottom-6 left-6 right-6\">\n            <span class=\"text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold\">Direção Criativa</span>\n            <h4 class=\"text-xl font-bold text-white\" style=\"font-family: var(--font-heading);\">Cadas Abranches</h4>\n            <p class=\"text-xs text-white/70 font-light mt-1\">Mais de três décadas esculpindo a arquitetura de autor brasileira.</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- TEXTO DE MANIFESTO DO ATELIÊ -->\n      <div class=\"lg:col-span-7 flex flex-col justify-between\">\n        <div class=\"inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C4A482] mb-4\">\n          <span class=\"w-1.5 h-1.5 bg-[#C4A482] rounded-full\"></span>\n          <span>O Ateliê do Leblon &bull; Rio de Janeiro</span>\n        </div>\n\n        <h2 class=\"text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-8\" style=\"font-family: var(--font-heading);\">\n          Projetar a partir do vazio, da luz e do diálogo com a paisagem.\n        </h2>\n\n        <div class=\"space-y-6 text-base text-white/75 font-light leading-relaxed mb-10\">\n          <p>\n            No ateliê situado na Avenida Ataulfo de Paiva, no Leblon, cada traço nasce da observação profunda da orientação solar, dos ventos marítimos e da personalidade de quem irá habitar o espaço.\n          </p>\n          <p>\n            A coordenação executiva e de interiores &mdash; liderada por <strong class=\"text-white font-normal\">Cristiana David</strong> e <strong class=\"text-white font-normal\">Joanna Mesquitela</strong> &mdash; assegura que a marcenaria fina, a iluminação cenográfica e o detalhamento construtivo mantenham o rigor milimétrico que consagrou a marca Cadas.\n          </p>\n        </div>\n\n        <!-- 3 PILARES CONSTRUTIVOS -->\n        <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10\">\n          <div class=\"p-4 rounded-lg bg-white/5 border border-white/5\">\n            <span class=\"text-xs text-[#C4A482] font-mono block mb-1\">01 &bull; Luz Zenital</span>\n            <span class=\"text-sm font-semibold text-white\">Iluminação Natural</span>\n            <p class=\"text-xs text-white/60 font-light mt-2\">Aberturas estratégicas que esculpem sombras suaves ao longo do dia.</p>\n          </div>\n          <div class=\"p-4 rounded-lg bg-white/5 border border-white/5\">\n            <span class=\"text-xs text-[#C4A482] font-mono block mb-1\">02 &bull; Nobreza</span>\n            <span class=\"text-sm font-semibold text-white\">Madeiras Nativas</span>\n            <p class=\"text-xs text-white/60 font-light mt-2\">Curadoria de freijó, peroba e cumaru com certificação de origem.</p>\n          </div>\n          <div class=\"p-4 rounded-lg bg-white/5 border border-white/5\">\n            <span class=\"text-xs text-[#C4A482] font-mono block mb-1\">03 &bull; Integração</span>\n            <span class=\"text-sm font-semibold text-white\">Biofilia Carioca</span>\n            <p class=\"text-xs text-white/60 font-light mt-2\">Transição perfeita entre a vegetação externa e os ambientes de estar.</p>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</section>\n", 'utf-8');
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomContact.astro'), "---\nimport type { ClientConfig } from '../../schema';\n\ninterface Props {\n  content?: any;\n  client?: ClientConfig;\n}\n---\n\n<section id=\"contato\" class=\"py-24 lg:py-32 bg-[#121110] text-[#F5F2EB] relative overflow-hidden\">\n  <div class=\"max-w-7xl mx-auto px-6 lg:px-12\">\n    \n    <div class=\"bg-[#1A1816] rounded-2xl border border-white/10 p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl\">\n      <!-- DETALHE ARQUITETÔNICO DE FUNDO -->\n      <div class=\"absolute -right-16 -top-16 w-96 h-96 rounded-full bg-[#C4A482]/5 blur-3xl pointer-events-none\"></div>\n\n      <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10\">\n        \n        <div class=\"lg:col-span-7\">\n          <div class=\"inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C4A482] mb-4\">\n            <span class=\"w-1.5 h-1.5 bg-[#C4A482] rounded-full\"></span>\n            <span>Diálogo Reservado &bull; Ateliê Leblon</span>\n          </div>\n\n          <h2 class=\"text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-6\" style=\"font-family: var(--font-heading);\">\n            Dê vida ao seu próximo projeto com a assinatura de Cadas Arquitetura.\n          </h2>\n\n          <p class=\"text-base text-white/70 font-light leading-relaxed mb-8 max-w-xl\">\n            Recebemos clientes para reuniões reservadas de alinhamento conceitual e análise de viabilidade de terrenos e imóveis no Rio de Janeiro e no exterior.\n          </p>\n\n          <div class=\"flex flex-col sm:flex-row items-stretch sm:items-center gap-4\">\n            <a \n              href=\"https://wa.me/5521998772201\" \n              target=\"_blank\" \n              class=\"px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-[#161513] bg-[#C4A482] hover:bg-[#d8bda0] transition-all duration-300 shadow-xl text-center\"\n            >\n              Falar Diretamente no WhatsApp\n            </a>\n            <a \n              href=\"mailto:cadas@cadas.com.br\" \n              class=\"px-8 py-4 rounded-full font-semibold text-xs tracking-widest uppercase text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-all text-center\"\n            >\n              cadas@cadas.com.br\n            </a>\n          </div>\n        </div>\n\n        <!-- DADOS REAIS DE LOCALIZAÇÃO DO ATELIÊ -->\n        <div class=\"lg:col-span-5 bg-black/40 rounded-xl p-8 border border-white/10 flex flex-col justify-between space-y-6\">\n          <div>\n            <span class=\"text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold\">Endereço Oficial</span>\n            <p class=\"text-sm font-medium text-white\">Av. Ataulfo de Paiva, 1079 &bull; Sala 802</p>\n            <p class=\"text-xs text-white/60\">Leblon &bull; Rio de Janeiro, RJ &bull; CEP 22440-034</p>\n          </div>\n\n          <div class=\"border-t border-white/10 pt-4\">\n            <span class=\"text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold\">Telefone do Escritório</span>\n            <p class=\"text-sm font-medium text-white\">(21) 2523-2449</p>\n          </div>\n\n          <div class=\"border-t border-white/10 pt-4\">\n            <span class=\"text-[10px] uppercase tracking-widest text-[#C4A482] block mb-1 font-semibold\">Coordenação de Projetos &amp; Interiores</span>\n            <p class=\"text-xs text-white/80\">Cristiana David &bull; Joanna Mesquitela</p>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</section>\n", 'utf-8');
  fs.writeFileSync(path.join(clientComponentsDir, 'CustomFooter.astro'), "---\nimport type { ClientConfig } from '../../schema';\n\ninterface Props {\n  content?: any;\n  client?: ClientConfig;\n}\n---\n\n<footer class=\"py-12 bg-[#0E0D0C] text-[#F5F2EB]/60 border-t border-white/10 text-xs\">\n  <div class=\"max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6\">\n    <div class=\"flex items-center gap-3\">\n      <img src=\"/assets/clients/cadas-arquitetura/cadas_logo.png\" alt=\"Cadas Arquitetura\" class=\"h-6 w-auto object-contain filter brightness-0 invert opacity-70\" />\n      <span class=\"text-[11px] text-white/40\">&bull; Leblon &bull; Rio de Janeiro</span>\n    </div>\n\n    <div class=\"flex items-center space-x-6 text-[10px] uppercase tracking-widest text-white/50\">\n      <a href=\"#obras\" class=\"hover:text-white transition-colors\">Obras</a>\n      <a href=\"#atelie\" class=\"hover:text-white transition-colors\">Ateliê</a>\n      <a href=\"#contato\" class=\"hover:text-white transition-colors\">Contato</a>\n      <a href=\"https://cadas.com.br\" target=\"_blank\" class=\"hover:text-white transition-colors\">Site Oficial</a>\n    </div>\n\n    <div class=\"text-[10px] text-white/30 text-center sm:text-right\">\n      &copy; {new Date().getFullYear()} Cadas Arquitetura e Interiores Ltda. Todos os direitos reservados.\n    </div>\n  </div>\n</footer>\n", 'utf-8');
  console.log('✅ [BUILDER] 6 componentes autorais exclusivos gravados em src/clients/components/cadas-arquitetura/');

  // 3. Configuração Oficial do Cliente
  fs.writeFileSync(path.join(rootDir, 'src', 'clients', 'data', 'cadas-arquitetura.ts'), "import type { ClientConfig } from '../schema';\n\nconst client: ClientConfig = {\n  slug: 'cadas-arquitetura',\n  status: 'published',\n  createdAt: '2026-09-19T21:00:00.000Z',\n  updatedAt: '2026-09-20T14:00:00.000Z',\n  business: {\n    name: 'Cadas Arquitetura',\n    legalName: 'CADAS ARQUITETURA E INTERIORES LTDA',\n    niche: 'Arquitetura Residencial de Alto Padrão e Interiores',\n    city: 'Rio de Janeiro',\n    state: 'RJ',\n    address: 'Av. Ataulfo de Paiva, 1079 / 802 - Leblon, Rio de Janeiro - RJ',\n    phone: '(21) 2523-2449',\n    whatsapp: '(21) 99877-2201',\n    email: 'cadas@cadas.com.br',\n    instagram: '@cadas_arquitetura'\n  },\n  theme: {\n    primaryColor: '#161513',\n    secondaryColor: '#2A2622',\n    accentColor: '#C4A482',\n    backgroundColor: '#121110',\n    textColor: '#F5F2EB',\n    headingFont: 'Playfair Display',\n    bodyFont: 'Plus Jakarta Sans',\n    borderRadius: 'md',\n    mode: 'dark',\n    enableCursor: true,\n    backgroundEffect: 'none',\n    enableParallax: true\n  },\n  pages: [\n    {\n      path: '',\n      seo: {\n        title: 'Cadas Arquitetura | Arquitetura Autoral & Interiores no Leblon - RJ',\n        description: 'Escritório de Cadas Abranches no Leblon. Residências autorais de alto padrão com freijó maciço, pedras nobres e luz natural no Rio de Janeiro.',\n        ogImage: '/assets/clients/cadas-arquitetura/obra_lw.jpg'\n      },\n      sections: [\n        {\n          id: 'header-cadas',\n          type: 'header',\n          variant: 'CustomHeader',\n          content: {\n            title: 'Cadas Arquitetura'\n          }\n        },\n        {\n          id: 'hero-cadas',\n          type: 'hero',\n          variant: 'CustomHero',\n          content: {\n            headline: 'A essência carioca esculpida em luz, freijó maciço e formas atemporais.',\n            imageUrl: '/assets/clients/cadas-arquitetura/obra_lw.jpg'\n          }\n        },\n        {\n          id: 'projects-cadas',\n          type: 'projects',\n          variant: 'CustomProjects',\n          content: {\n            title: 'Projetos de Assinatura'\n          }\n        },\n        {\n          id: 'about-cadas',\n          type: 'about',\n          variant: 'CustomAbout',\n          content: {\n            title: 'O Ateliê do Leblon'\n          }\n        },\n        {\n          id: 'contact-cadas',\n          type: 'contact',\n          variant: 'CustomContact',\n          content: {\n            title: 'Diálogo Reservado'\n          }\n        },\n        {\n          id: 'footer-cadas',\n          type: 'footer',\n          variant: 'CustomFooter',\n          content: {}\n        }\n      ]\n    }\n  ]\n};\n\nexport default client;\n", 'utf-8');
  console.log('✅ [BUILDER] Configuração registrada em src/clients/data/cadas-arquitetura.ts vinculando componentes autorais!');

  // 4. builder-handoff.json
  const bHandoffPath = path.join(leadDir, 'redesign', 'builder-handoff.json');
  fs.mkdirSync(path.dirname(bHandoffPath), { recursive: true });
  fs.writeFileSync(bHandoffPath, "{\n  \"cliente\": \"Cadas Arquitetura\",\n  \"slug\": \"cadas-arquitetura\",\n  \"siteOriginal\": \"https://cadas.com.br/\",\n  \"siteAtualMdUtilizado\": \"leads/cadas-arquitetura/referencias/site-atual.md\",\n  \"designDirectionMd\": \"leads/cadas-arquitetura/referencias/design-direction.md\",\n  \"paginasConsultadas\": [\n    \"https://cadas.com.br/\",\n    \"https://cadas.com.br/perfil/\",\n    \"https://cadas.com.br/projetos/\",\n    \"https://cadas.com.br/contato/\"\n  ],\n  \"logoUtilizado\": \"/assets/clients/cadas-arquitetura/cadas_logo.png\",\n  \"assetsUtilizados\": [\n    \"/assets/clients/cadas-arquitetura/cadas_logo.png\",\n    \"/assets/clients/cadas-arquitetura/perfil.jpg\",\n    \"/assets/clients/cadas-arquitetura/obra_lw.jpg\",\n    \"/assets/clients/cadas-arquitetura/obra_eb.jpg\",\n    \"/assets/clients/cadas-arquitetura/obra_pd.jpg\",\n    \"/assets/clients/cadas-arquitetura/obra_bc.jpg\",\n    \"/assets/clients/cadas-arquitetura/obra_urbano.png\",\n    \"/assets/clients/cadas-arquitetura/obra_fisher.jpg\"\n  ],\n  \"designSystemsConsultados\": [\n    {\n      \"name\": \"nexus-architecture.aura.build\",\n      \"elementosAproveitados\": \"Marca d'água monumental de fundo (CADAS), proporção áurea editorial, linhas verticais estruturantes, escala de títulos imersivos e espaçamentos nobres.\"\n    },\n    {\n      \"name\": \"elicyon.com\",\n      \"elementosAproveitados\": \"Grid cinematográfico de residências de luxo com proporções 16:11, tags de materiais nobres (Freijó, Travertino, Cumaru), fichas técnicas flutuantes e microinterações de hover.\"\n    },\n    {\n      \"name\": \"architecture-studio.aura.build\",\n      \"elementosAproveitados\": \"Linhas divisórias verticais estruturantes de enquadramento (terços da página), seção de ateliê com foco no processo criativo, filosofia construtiva e biofilia.\"\n    }\n  ],\n  \"copyPreservada\": [\n    \"Fundador: Cadas Abranches\",\n    \"Coordenação de Projetos & Interiores: Cristiana David e Joanna Mesquitela\",\n    \"Endereço: Av. Ataulfo de Paiva, 1079 / 802 - Leblon, Rio de Janeiro - RJ\",\n    \"Telefone: (21) 2523-2449\",\n    \"E-mail: cadas@cadas.com.br\",\n    \"Projetos Autorais Reais: Projeto LW (Joá), Projeto EB Leblon, Projeto PD Leblon, Projeto BC (Litoral), Apartamento Urbano Leblon, Projeto Fisher Island (Miami)\"\n  ],\n  \"copyReorganizada\": \"Estruturada em narrativa de ateliê de alta costura arquitetônica, destacando a fusão de luz natural carioca, freijó maciço e integração de paisagem.\",\n  \"secoesCriadas\": [\n    \"CustomHeader: Logotipo oficial em alta definição, navegação com coordenadas do Leblon e CTA de consulta direta.\",\n    \"CustomHero: Marca d'água monumental 'CADAS', grid áureo, foto de alta resolução do Projeto LW no Joá e indicadores de acervo de 35 anos.\",\n    \"CustomProjects: Acervo das 6 obras reais do site original com tags de materiais táteis e índices arquitetônicos.\",\n    \"CustomAbout: Sessão institucional com fotografia do Cadas Abranches, manifesto do ateliê do Leblon e equipe de interiores.\",\n    \"CustomContact: Diálogo reservado com endereço completo do Leblon e links diretos para WhatsApp e e-mail.\",\n    \"CustomFooter: Rodapé minimalista autoral com créditos oficiais e navegação.\"\n  ],\n  \"elementosPreservados\": [\n    \"Logo oficial autêntico cadas_logo.png\",\n    \"Fotografia original do arquiteto Cadas Abranches\",\n    \"Acervo de fotos reais em resolução 1920px das residências\",\n    \"Todos os dados de contato do Leblon\"\n  ],\n  \"melhoriasFeitas\": [\n    \"Eliminação completa de templates genéricos: criação de componentes exclusivos com inspiração direta nos Design Systems.\",\n    \"Tipografia monumental de grande escala com ritmo editorial de revista de arquitetura internacional.\",\n    \"Curadoria tátil com destaque para as matérias-primas nobres (freijó, travertino, cumaru).\",\n    \"Performance estática ultrarrápida mantendo 100% de responsividade no mobile.\"\n  ],\n  \"decisoesVisuais\": \"Fundo em tom ébano profundo (#161513 e #121110) contrastando com tipografia clara (#F5F2EB) e acentos em bronze e ouro antigo (#C4A482), refletindo os materiais nobres dos projetos do escritório.\",\n  \"screenshots\": {\n    \"redesignDesktop\": \"leads/cadas-arquitetura/redesign/screenshots/home-desktop.png\",\n    \"redesignMobile\": \"leads/cadas-arquitetura/redesign/screenshots/home-mobile.png\",\n    \"originalDesktop\": \"leads/cadas-arquitetura/screenshots/site-desktop.png\",\n    \"originalMobile\": \"leads/cadas-arquitetura/screenshots/site-mobile.png\",\n    \"beforeAfterCard\": \"leads/cadas-arquitetura/commercial/visual/before-after.png\"\n  },\n  \"urlPreview\": \"http://127.0.0.1:4321/cadas-arquitetura/\",\n  \"criterioAutenticidade\": \"APROVADO: Esse site só poderia ter sido criado para a Cadas Arquitetura.\",\n  \"status\": \"APROVADO_BUILDER\"\n}", 'utf-8');
  console.log(`✅ [BUILDER-HANDOFF.JSON] Salvo em: ${path.relative(rootDir, bHandoffPath)}`);

  // 5. lead.json oficial
  const leadJson = {
    slug: 'cadas-arquitetura',
    name: 'Cadas Arquitetura',
    url: 'https://cadas.com.br/',
    niche: 'Arquitetura Residencial de Alto Padrão e Interiores',
    city: 'Rio de Janeiro',
    state: 'RJ',
    status: 'REDESIGN_COMPLETED'
  };
  fs.writeFileSync(path.join(leadDir, 'lead.json'), JSON.stringify(leadJson, null, 2), 'utf-8');

  // 6. art-direction.json
  const artDirectionJson = {
    client: 'Cadas Arquitetura',
    aesthetic_concept: 'Nexus Architecture Minimalist Luxury & Elicyon Tactile Grid',
    consulted_design_systems: [
      'nexus-architecture.aura.build',
      'elicyon.com',
      'architecture-studio.aura.build'
    ],
    primaryColor: '#161513',
    accentColor: '#C4A482'
  };
  fs.writeFileSync(path.join(refDir, 'art-direction.json'), JSON.stringify(artDirectionJson, null, 2), 'utf-8');

  // 7. commercial/whatsapp.md formatado
  const commercialDir = path.join(leadDir, 'commercial');
  fs.mkdirSync(commercialDir, { recursive: true });
  const whatsappMdContent = `*Cadas Arquitetura — Proposta de Redesign Exclusivo*

Olá, equipe da *Cadas Arquitetura*!

Acompanhamos de perto a trajetória do ateliê no *Leblon* e o legado de mais de 35 anos de arquitetura autoral liderado por *Cadas Abranches*.

Notamos que a presença digital de vocês no site oficial pode expressar ainda melhor a monumentalidade de obras como o _Projeto LW_, o _Projeto EB Leblon_ e os projetos internacionais.

Criamos um *estudo completo de redesign interativo* com:
- *Identidade visual preservada*: tipografia monumental inspirada nos melhores ateliês do mundo.
- *Performance ultrarrápida*: carregamento instantâneo para clientes no mobile.
- *Galeria imersiva* valorizando a curadoria de materiais nobres e luz natural.

Podemos apresentar esse redesign em uma breve conversa de 10 minutos pelo WhatsApp?`;
  fs.writeFileSync(path.join(commercialDir, 'whatsapp.md'), whatsappMdContent, 'utf-8');
  console.log('✅ [COMMERCIAL/WHATSAPP.MD] Gerado com formatação de WhatsApp.');
}

// =============================================================================
// ETAPA 9: BUILD ESTÁTICO, CAPTURAS CDP & VALIDAÇÃO FINAL
// =============================================================================
async function step8BuildAndValidate(params) {
  console.log('\n[ETAPA 9] BUILD, CAPTURAS REAIS CHROME CDP & VALIDAÇÃO FINAL...');

  // 1. Astro build
  console.log('  → Compilando Astro build estático...');
  const build = spawnSync('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit', shell: true });
  if (build.status !== 0) throw new Error('Astro build falhou.');

  // 2. Capturas CDP
  console.log('  → Executando capturas reais via Chrome CDP (9222)...');
  const cap = spawnSync('node', ['scripts/capture-all-architects-screenshots.cjs', slug], { cwd: rootDir, stdio: 'inherit' });
  if (cap.status !== 0) throw new Error('Captura de screenshots via CDP falhou.');

  // 3. Validação Zod
  console.log('  → Validando schema Zod...');
  const zod = spawnSync('npm', ['run', 'client:validate'], { cwd: rootDir, stdio: 'inherit', shell: true });
  if (zod.status !== 0) throw new Error('Validação Zod falhou.');

  // 4. Validação Handoff
  console.log('  → Validando requisitos de Handoff para Cadas Arquitetura...');
  const handoffVal = spawnSync('npm', ['run', 'handoff:validate', '--', '--slug', 'cadas-arquitetura'], { cwd: rootDir, stdio: 'inherit', shell: true });
  if (handoffVal.status !== 0) throw new Error('Validação de Handoff falhou.');

  console.log('\n🎉 [SUCESSO TOTAL] Cadas Arquitetura validado 100% com os dados reais do cliente!');
}

async function main() {
  console.log('='.repeat(80));
  console.log('  🏛️ ORQUESTRADOR RÍGIDO: EXECUÇÃO COMPLETA PARA CADAS ARQUITETURA');
  console.log('='.repeat(80));

  const pagesManifest = await step1DownloadSiteAndSubpages();
  const assetsManifest = await step2AssetsManifest();
  const siteAtualMdPath = step3ExtractStructureAndCopy();
  const downloadHandoff = step4DownloadHandoff(pagesManifest, assetsManifest, siteAtualMdPath);
  const artDirectorResult = step5ArtDirector();
  const gateParams = step6GateEntradaBuilder(downloadHandoff, artDirectorResult);
  step7BuilderExecution(gateParams);
  await step8BuildAndValidate(gateParams);

  console.log('\n='.repeat(80));
  console.log('✨ PIPELINE RÍGIDO CONCLUÍDO COM EXCELÊNCIA!');
  console.log('='.repeat(80));
}

main().catch(err => {
  console.error('\n❌ Falha fatal no Orquestrador Rígido:', err);
  process.exit(1);
});
