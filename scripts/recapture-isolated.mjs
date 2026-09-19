import { dev } from 'astro';
import { spawn, spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const top5 = [
  'poersch-advogados',
  'smt-advogados',
  'danzicourt-advogados',
  'callil-advogados',
  'zamora-advogados'
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
    }, 12000);

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

async function run() {
  console.log('='.repeat(70));
  console.log('  RECAPTURANDO TELAS E ATUALIZANDO CARDS ANTES/DEPOIS');
  console.log('='.repeat(70));

  const server = await dev({
    root: '.',
    server: {
      host: '127.0.0.1',
      port: 4321
    }
  });

  console.log('Servidor Astro dev iniciado em http://127.0.0.1:4321\n');

  for (let i = 0; i < top5.length; i++) {
    const slug = top5[i];
    console.log(`[${i + 1}/5] Capturando redesign e gerando card: ${slug}`);

    const leadDir = path.resolve(rootDir, `leads/${slug}`);
    const redDesk = path.resolve(leadDir, `redesign/screenshots/home-desktop.png`);
    const redMob = path.resolve(leadDir, `redesign/screenshots/home-mobile.png`);
    const targetUrl = `http://127.0.0.1:4321/site/${slug}`;

    // Capturar Redesign
    await capture(targetUrl, redDesk, 1440, 950);
    await capture(targetUrl, redMob, 390, 844);

    // Gerar Card Antes/Depois
    const genCardScript = path.resolve(rootDir, '.agents/skills/visual-comparer/scripts/generate_before_after.js');
    if (fs.existsSync(genCardScript)) {
      spawnSync('node', [genCardScript, slug], { stdio: 'ignore' });
      const cardPath = path.resolve(leadDir, `commercial/visual/before-after.png`);
      if (fs.existsSync(cardPath)) {
        console.log(`    [OK] Card Antes/Depois: ${(fs.statSync(cardPath).size / 1024).toFixed(1)} KB`);
      }
    }
    console.log('');
  }

  await server.stop();
  console.log('✅ Recaptura e cards finalizados com sucesso!');
}

run().catch(err => {
  console.error('Erro na execução:', err);
  process.exit(1);
});
