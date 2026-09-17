process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2];
const outputDir = process.argv[3] || './screenshots';

if (!targetUrl) {
  console.error('Uso: node capture_screenshots.js <URL> [OUTPUT_DIR]');
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const chromePath = 'C:\\Users\\Eduardo\\AppData\\Local\\ms-playwright\\chromium-1200\\chrome-win64\\chrome.exe';

if (!fs.existsSync(chromePath)) {
  console.log('[AVISO] Executável do Chromium não localizado em:', chromePath);
  console.log('Captura de screenshot indisponível neste ambiente local.');
  process.exit(0);
}

const port = 9222;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(data); }
      });
    }).on('error', reject);
  });
}

function sendWsCommand(wsUrl, method, params = {}) {
  return new Promise((resolve, reject) => {
    const WebSocket = require('ws');
    const ws = new WebSocket(wsUrl);
    const id = Math.floor(Math.random() * 100000);

    ws.on('open', () => {
      ws.send(JSON.stringify({ id, method, params }));
    });

    ws.on('message', data => {
      const msg = JSON.parse(data.toString());
      if (msg.id === id) {
        ws.close();
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    });

    ws.on('error', reject);
  });
}

async function captureViaCli(url, outPath, width, height) {
  return new Promise((resolve) => {
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--ignore-certificate-errors',
      `--window-size=${width},${height}`,
      `--screenshot=${path.resolve(outPath)}`,
      url
    ];

    const proc = spawn(chromePath, args);
    proc.on('close', (code) => {
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
        console.log(`[OK] Screenshot salvo em: ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

async function main() {
  console.log(`--- INICIANDO CAPTURA DE SCREENSHOTS: ${targetUrl} ---`);
  const desktopOut = path.join(outputDir, 'site-desktop.png');
  const mobileOut = path.join(outputDir, 'site-mobile.png');

  console.log('Capturando Desktop (1280x800)...');
  const okDesktop = await captureViaCli(targetUrl, desktopOut, 1280, 800);

  console.log('Capturando Mobile (390x844)...');
  const okMobile = await captureViaCli(targetUrl, mobileOut, 390, 844);

  if (!okDesktop && !okMobile) {
    console.log('[INFO] Screenshots indisponíveis para esta URL neste ambiente.');
  } else {
    console.log('--- CAPTURAS CONCLUÍDAS COM SUCESSO ---');
  }
}

main().catch(err => {
  console.error('Erro na captura:', err.message);
});