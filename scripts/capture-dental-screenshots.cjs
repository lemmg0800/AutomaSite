const http = require('http');
const fs = require('fs');
const path = require('path');

const leads = [
  { slug: 'oralmed-odontologia', originalUrl: 'https://oralmed.com.br/', previewUrl: 'http://localhost:4321/preview/oralmed-odontologia' },
  { slug: 'murano-odontologia', originalUrl: 'https://muranoodontologia.com.br/', previewUrl: 'http://localhost:4321/preview/murano-odontologia' },
  { slug: 'instituto-kopp-odontologia', originalUrl: 'https://institutokopp.com.br/', previewUrl: 'http://localhost:4321/preview/instituto-kopp-odontologia' },
  { slug: 'prodental-clinica-odontologica', originalUrl: 'https://prodentalclinicaodonto.com.br/', previewUrl: 'http://localhost:4321/preview/prodental-clinica-odontologica' },
  { slug: 'sapata-estudio-oral', originalUrl: 'https://sapataestudio.com.br/', previewUrl: 'http://localhost:4321/preview/sapata-estudio-oral' }
];

async function httpJson(urlPath) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:9222${urlPath}`, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(data); }
      });
    }).on('error', reject);
  });
}

function sendCdpCommand(wsUrl, method, params = {}) {
  return new Promise((resolve, reject) => {
    const WebSocket = require('ws');
    const ws = new WebSocket(wsUrl);
    const id = Math.floor(Math.random() * 1000000);

    ws.on('open', () => {
      ws.send(JSON.stringify({ id, method, params }));
    });

    ws.on('message', data => {
      try {
        const msg = JSON.parse(data.toString());
        if (msg.id === id) {
          ws.close();
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        }
      } catch (e) {
        reject(e);
      }
    });

    ws.on('error', reject);
  });
}

async function captureUrl(url, outPath, width = 1280, height = 800) {
  try {
    const tab = await httpJson('/json/new');
    const wsUrl = tab.webSocketDebuggerUrl;

    await sendCdpCommand(wsUrl, 'Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600
    });

    await sendCdpCommand(wsUrl, 'Page.navigate', { url });
    await new Promise(r => setTimeout(r, 3500));

    const snap = await sendCdpCommand(wsUrl, 'Page.captureScreenshot', { format: 'png' });
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, Buffer.from(snap.data, 'base64'));

    await httpJson(`/json/close/${tab.id}`);
    return true;
  } catch (err) {
    console.warn(`[AVISO] Falha ao capturar ${url}: ${err.message}`);
    return false;
  }
}

(async () => {
  console.log('[CDP] Iniciando captura de screenshots das 5 clínicas odontológicas...');
  for (const item of leads) {
    console.log(`\nProcessando ${item.slug}...`);
    const origDesk = path.resolve(`leads/${item.slug}/screenshots/site-desktop.png`);
    const origMob = path.resolve(`leads/${item.slug}/screenshots/site-mobile.png`);
    const visDesk = path.resolve(`leads/${item.slug}/visual/home-desktop.png`);
    const visMob = path.resolve(`leads/${item.slug}/visual/home-mobile.png`);
    const redDesk = path.resolve(`leads/${item.slug}/redesign/screenshots/home-desktop.png`);
    const redMob = path.resolve(`leads/${item.slug}/redesign/screenshots/home-mobile.png`);

    // Captura Original
    await captureUrl(item.originalUrl, origDesk, 1280, 800);
    await captureUrl(item.originalUrl, origMob, 390, 844);

    if (fs.existsSync(origDesk)) fs.copyFileSync(origDesk, visDesk);
    if (fs.existsSync(origMob)) fs.copyFileSync(origMob, visMob);

    // Captura Redesign Preview
    await captureUrl(item.previewUrl, redDesk, 1280, 800);
    await captureUrl(item.previewUrl, redMob, 390, 844);

    console.log(`[OK] Screenshots capturados para ${item.slug}`);
  }
  console.log('\n[CONCLUÍDO] Todas as capturas de telas finalizadas.');
})();
