const http = require('http');
const fs = require('fs');
const path = require('path');

const leads = [
  { slug: 'poersch-advogados', originalUrl: 'https://poersch.adv.br/' },
  { slug: 'smt-advogados', originalUrl: 'https://smtadvogados.adv.br/' },
  { slug: 'danzicourt-advogados', originalUrl: 'https://danzicourt.adv.br/' },
  { slug: 'callil-advogados', originalUrl: 'https://callil.adv.br/' },
  { slug: 'zamora-advogados', originalUrl: 'https://zamora.adv.br/' }
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
    const ws = new WebSocket(wsUrl);
    const id = Math.floor(Math.random() * 1000000);

    ws.onopen = () => {
      ws.send(JSON.stringify({ id, method, params }));
    };

    ws.onmessage = event => {
      try {
        const msg = JSON.parse(event.data.toString());
        if (msg.id === id) {
          ws.close();
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        }
      } catch (e) {
        reject(e);
      }
    };

    ws.onerror = reject;
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
    await new Promise(r => setTimeout(r, 4000));

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
  console.log('[CDP] Iniciando captura de screenshots das 5 bancas de advocacia no Acre...');
  for (const item of leads) {
    console.log(`\nProcessando ${item.slug}...`);
    const origDesk = path.resolve(`leads/${item.slug}/screenshots/site-desktop.png`);
    const origMob = path.resolve(`leads/${item.slug}/screenshots/site-mobile.png`);
    const visDesk = path.resolve(`leads/${item.slug}/visual/home-desktop.png`);
    const visMob = path.resolve(`leads/${item.slug}/visual/home-mobile.png`);

    // Captura Original
    await captureUrl(item.originalUrl, origDesk, 1280, 800);
    await captureUrl(item.originalUrl, origMob, 390, 844);

    if (fs.existsSync(origDesk)) fs.copyFileSync(origDesk, visDesk);
    if (fs.existsSync(origMob)) fs.copyFileSync(origMob, visMob);

    console.log(`[OK] Screenshots originais capturados para ${item.slug}`);
  }
  console.log('\n[CONCLUÍDO] Capturas dos sites originais finalizadas.');
})();
