const { spawn, spawnSync } = require('child_process');
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
  const res = spawnSync(chromePath, args, { timeout: 25000 });
  try { fs.rmSync(tmpProfile, { recursive: true, force: true }); } catch (e) {}
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
    console.log(`    [OK] Salvo: ${path.basename(outPath)} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
    return true;
  } else {
    console.warn(`    [AVISO] Falha ao capturar ${outPath}`);
    return false;
  }
}

async function main() {
  console.log('--- CAPTURANDO TELAS ORIGINAIS (INTERNET) ---');
  for (const item of top5) {
    console.log(`Banca: ${item.slug}`);
    const origDesk = path.resolve(rootDir, `leads/${item.slug}/screenshots/site-desktop.png`);
    const origMob = path.resolve(rootDir, `leads/${item.slug}/screenshots/site-mobile.png`);
    const visDesk = path.resolve(rootDir, `leads/${item.slug}/visual/home-desktop.png`);
    const visMob = path.resolve(rootDir, `leads/${item.slug}/visual/home-mobile.png`);

    capture(item.origUrl, origDesk, 1280, 800);
    capture(item.origUrl, origMob, 390, 844);

    if (fs.existsSync(origDesk)) fs.copyFileSync(origDesk, visDesk);
    if (fs.existsSync(origMob)) fs.copyFileSync(origMob, visMob);
  }

  console.log('\n--- INICIANDO ASTRO DEV PARA CAPTURAR REDESIGNS ---');
  const devProc = spawn('cmd.exe', ['/c', 'npx', 'astro', 'dev', '--host', '127.0.0.1', '--port', '4321'], {
    cwd: rootDir,
    stdio: 'ignore'
  });

  // Aguardar servidor
  let online = false;
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 1000));
    try {
      const res = await new Promise(resolve => {
        const req = http.get('http://127.0.0.1:4321/', r => resolve(r.statusCode));
        req.on('error', () => resolve(null));
        req.setTimeout(1000, () => { req.destroy(); resolve(null); });
      });
      if (res) {
        online = true;
        break;
      }
    } catch (e) {}
    process.stdout.write('.');
  }

  if (!online) {
    console.error('\n[ERRO] Não foi possível conectar ao Astro Dev');
    try { devProc.kill(); } catch (e) {}
    return;
  }

  console.log('\n[OK] Astro Dev pronto na porta 4321!');

  for (const item of top5) {
    console.log(`\nRedesign: ${item.slug}`);
    const redDesk = path.resolve(rootDir, `leads/${item.slug}/redesign/screenshots/home-desktop.png`);
    const redMob = path.resolve(rootDir, `leads/${item.slug}/redesign/screenshots/home-mobile.png`);
    const targetUrl = `http://127.0.0.1:4321/site/${item.slug}`;

    capture(targetUrl, redDesk, 1280, 800);
    capture(targetUrl, redMob, 390, 844);

    // Gerar Before After
    const genCardScript = path.resolve(rootDir, '.agents/skills/visual-comparer/scripts/generate_before_after.js');
    if (fs.existsSync(genCardScript)) {
      spawnSync('node', [genCardScript, item.slug], { stdio: 'inherit' });
    }
  }

  try {
    spawnSync('cmd.exe', ['/c', 'taskkill', '/F', '/T', '/PID', devProc.pid]);
  } catch (e) {}

  console.log('\n✅ [SUCESSO] Todos os visuais gerados com sucesso!');
}

main();
