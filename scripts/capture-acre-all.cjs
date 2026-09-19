const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const rootDir = path.resolve(__dirname, '..');

const top5 = [
  { slug: 'poersch-advogados', origUrl: 'https://poersch.adv.br/' },
  { slug: 'smt-advogados', origUrl: 'https://smtadvogados.adv.br/' },
  { slug: 'danzicourt-advogados', origUrl: 'https://danzicourt.adv.br/' },
  { slug: 'callil-advogados', origUrl: 'https://callil.adv.br/' },
  { slug: 'zamora-advogados', origUrl: 'https://zamora.adv.br/' }
];

function capture(url, outPath, width, height) {
  return new Promise((resolve) => {
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const tmpProfile = path.join(os.tmpdir(), `cap-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`);
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      `--user-data-dir=${tmpProfile}`,
      `--window-size=${width},${height}`,
      `--screenshot=${outPath}`,
      url
    ];
    const proc = spawn(chromePath, args);
    const timer = setTimeout(() => {
      try { proc.kill('SIGKILL'); } catch (e) {}
      resolve(false);
    }, 18000);

    proc.on('close', () => {
      clearTimeout(timer);
      try { fs.rmSync(tmpProfile, { recursive: true, force: true }); } catch (e) {}
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
        console.log(`    [OK] Salvo: ${path.basename(outPath)} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
        resolve(true);
      } else {
        console.warn(`    [AVISO] Falha ao capturar ${outPath}`);
        resolve(false);
      }
    });
  });
}

function checkServerReady(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/`, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 500);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1500, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function run() {
  console.log('================================================================================');
  console.log('   CAPTURA DE TELAS REAIS & CARDS ANTES/DEPOIS (TOP 5 ADVOCACIA ACRE)           ');
  console.log('================================================================================\n');

  // 1. Iniciar Astro Dev em processo filho
  console.log('[1/4] Iniciando Astro Dev Server na porta 4321...');
  const devProc = spawn('npx', ['astro', 'dev', '--port', '4321'], {
    cwd: rootDir,
    shell: true,
    stdio: 'ignore'
  });

  // Aguardar até o servidor responder
  let attempts = 0;
  let ready = false;
  while (attempts < 30) {
    await new Promise(r => setTimeout(r, 1500));
    ready = await checkServerReady(4321);
    if (ready) break;
    attempts++;
    process.stdout.write('.');
  }

  if (!ready) {
    console.error('\n[ERRO] O servidor Astro Dev não respondeu a tempo.');
    try { devProc.kill(); } catch (e) {}
    process.exit(1);
  }
  console.log('\n[OK] Servidor Astro Dev online!\n');

  // 2. Capturar cada um dos 5 leads
  for (let i = 0; i < top5.length; i++) {
    const item = top5[i];
    console.log(`[${i + 1}/5] Processando capturas para: ${item.slug}`);

    const origDesk = path.resolve(rootDir, `leads/${item.slug}/screenshots/site-desktop.png`);
    const origMob = path.resolve(rootDir, `leads/${item.slug}/screenshots/site-mobile.png`);
    const redDesk = path.resolve(rootDir, `leads/${item.slug}/redesign/screenshots/home-desktop.png`);
    const redMob = path.resolve(rootDir, `leads/${item.slug}/redesign/screenshots/home-mobile.png`);
    const visDesk = path.resolve(rootDir, `leads/${item.slug}/visual/home-desktop.png`);
    const visMob = path.resolve(rootDir, `leads/${item.slug}/visual/home-mobile.png`);

    // 2.1. Capturar Site Original
    console.log(`  - Capturando site original (${item.origUrl})...`);
    await capture(item.origUrl, origDesk, 1280, 800);
    await capture(item.origUrl, origMob, 390, 844);

    if (fs.existsSync(origDesk)) fs.copyFileSync(origDesk, visDesk);
    if (fs.existsSync(origMob)) fs.copyFileSync(origMob, visMob);

    // 2.2. Capturar Redesign
    const targetUrl = `http://localhost:4321/site/${item.slug}`;
    console.log(`  - Capturando redesign local (${targetUrl})...`);
    await capture(targetUrl, redDesk, 1280, 800);
    await capture(targetUrl, redMob, 390, 844);

    // 2.3. Gerar Card Antes x Depois
    console.log(`  - Gerando card comercial Antes x Depois...`);
    const genCardScript = path.resolve(rootDir, '.agents/skills/visual-comparer/scripts/generate_before_after.js');
    if (fs.existsSync(genCardScript)) {
      const { spawnSync } = require('child_process');
      spawnSync('node', [genCardScript, item.slug], { stdio: 'inherit' });
    }
    console.log('');
  }

  // 3. Encerrar processo dev
  console.log('[4/4] Encerrando Astro Dev Server...');
  try { devProc.kill(); } catch (e) {}

  console.log('\n✅ [CONCLUÍDO] Todas as capturas de telas e cards comparativos gerados com sucesso!');
}

run();
