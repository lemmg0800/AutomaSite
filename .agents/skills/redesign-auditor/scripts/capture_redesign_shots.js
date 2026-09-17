import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const slug = process.argv[2] || 'pedro-de-queiroz-advocacia';
const rootDir = path.resolve(__dirname, '../../../../');
const outDir = path.join(rootDir, 'leads', slug, 'redesign/screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const chromePath = 'C:\\Users\\Eduardo\\AppData\\Local\\ms-playwright\\chromium-1200\\chrome-win64\\chrome.exe';

if (!fs.existsSync(chromePath)) {
  console.error(`[ERRO] Chromium não encontrado em: ${chromePath}`);
  process.exit(1);
}

async function resolveTargetUrl() {
  const ports = [45678, 4321, 3000];
  for (const port of ports) {
    const testUrl = `http://localhost:${port}/preview/${slug}?bypass=1`;
    const ok = await new Promise((resolve) => {
      const req = http.get(testUrl, { timeout: 1500 }, (res) => {
        resolve(res.statusCode === 200);
      });
      req.on('error', () => resolve(false));
      req.on('timeout', () => { req.destroy(); resolve(false); });
    });
    if (ok) {
      console.log(`[TARGET] Conectado ao servidor Astro da Plataforma: ${testUrl}`);
      return testUrl;
    }
  }

  const vercelStatic = path.join(rootDir, '.vercel/output/static', slug, 'index.html');
  if (fs.existsSync(vercelStatic)) {
    console.log(`[TARGET] Usando build estático Vercel: ${vercelStatic}`);
    return 'file:///' + vercelStatic.replace(/\\/g, '/');
  }

  return `http://localhost:45678/preview/${slug}?bypass=1`;
}

async function run() {
  const targetUrl = await resolveTargetUrl();
  console.log(`=== CAPTURANDO SCREENSHOTS DO REDESIGN: ${slug} ===`);
  console.log(`URL: ${targetUrl}`);

  // Aguardar carregamento do Vite
  await new Promise(r => setTimeout(r, 2000));

  function shot(w, h, name) {
    const dest = path.join(outDir, name);
    console.log(`Capturando ${name} (${w}x${h})...`);
    spawnSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--virtual-time-budget=5000',
      `--window-size=${w},${h}`,
      `--screenshot=${dest}`,
      targetUrl
    ], { timeout: 25000 });

    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      console.log(`  [OK] ${name} gerado com sucesso (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
    } else {
      console.error(`  [FALHA] Não foi possível gerar ${name}`);
    }
  }

  shot(1280, 800, 'home-desktop.png');
  shot(390, 844, 'home-mobile.png');

  console.log('=== CAPTURAS DO REDESIGN CONCLUÍDAS ===');
}

run();
