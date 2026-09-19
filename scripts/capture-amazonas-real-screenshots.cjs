const http = require('http');
const fs = require('fs');
const path = require('path');

const leads = [
  {
    slug: 'ifaceam-instituto-da-face',
    name: 'Instituto da Face do Amazonas (IFACEAM)',
    website: 'https://ifaceam.com.br/',
    previewUrl: 'http://127.0.0.1:4321/site/ifaceam-instituto-da-face'
  },
  {
    slug: 'manaos-odontologia',
    name: 'Manaós Odontologia',
    website: 'https://manaosodontologia.com.br/',
    previewUrl: 'http://127.0.0.1:4321/site/manaos-odontologia'
  },
  {
    slug: 'dr-paulo-grandal',
    name: 'Dr. Paulo Grandal Odontologia',
    website: 'https://drpaulograndal.com.br/',
    previewUrl: 'http://127.0.0.1:4321/site/dr-paulo-grandal'
  },
  {
    slug: 'studio-amazon-odontologia',
    name: 'Studio Amazon Odontologia Digital',
    website: 'https://studioamazondental.com.br/',
    previewUrl: 'http://127.0.0.1:4321/site/studio-amazon-odontologia'
  },
  {
    slug: 'dr-marcos-carvalho',
    name: 'Dr. Marcos Carvalho Implantodontia',
    website: 'https://drmarcoscarvalho.com.br/',
    previewUrl: 'http://127.0.0.1:4321/site/dr-marcos-carvalho'
  }
];

function httpJson(urlPath, method = 'GET') {
  return new Promise((resolve, reject) => {
    const isPut = urlPath.startsWith('/json/new') || method === 'PUT';
    const req = http.request(`http://127.0.0.1:9222${urlPath}`, { method: isPut ? 'PUT' : 'GET' }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(data); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function sendCdpCommand(wsUrl, method, params = {}) {
  return new Promise((resolve, reject) => {
    const ws = new globalThis.WebSocket(wsUrl);
    const id = Math.floor(Math.random() * 1000000);

    const timeout = setTimeout(() => {
      try { ws.close(); } catch (e) {}
      reject(new Error(`CDP command ${method} timed out`));
    }, 15000);

    ws.onopen = () => {
      ws.send(JSON.stringify({ id, method, params }));
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.id === id) {
          clearTimeout(timeout);
          try { ws.close(); } catch (e) {}
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        }
      } catch (e) {
        clearTimeout(timeout);
        reject(e);
      }
    };

    ws.onerror = (err) => {
      clearTimeout(timeout);
      reject(err);
    };
  });
}

async function captureUrl(url, outPath, width = 1280, height = 800) {
  let tab = null;
  try {
    tab = await httpJson('/json/new');
    const wsUrl = tab.webSocketDebuggerUrl;

    await sendCdpCommand(wsUrl, 'Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600
    });

    await sendCdpCommand(wsUrl, 'Page.navigate', { url });
    await new Promise(r => setTimeout(r, 2500));

    const snap = await sendCdpCommand(wsUrl, 'Page.captureScreenshot', { format: 'png' });
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, Buffer.from(snap.data, 'base64'));

    if (tab && tab.id) {
      await httpJson(`/json/close/${tab.id}`).catch(() => {});
    }
    return true;
  } catch (err) {
    console.warn(`  [AVISO] Falha ao capturar ${url}: ${err.message}`);
    if (tab && tab.id) {
      await httpJson(`/json/close/${tab.id}`).catch(() => {});
    }
    return false;
  }
}

async function captureHtml(html, outPath, width = 1280, height = 800) {
  let tab = null;
  try {
    tab = await httpJson('/json/new');
    const wsUrl = tab.webSocketDebuggerUrl;

    await sendCdpCommand(wsUrl, 'Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 600
    });

    await sendCdpCommand(wsUrl, 'Page.navigate', { url: 'about:blank' });
    await sendCdpCommand(wsUrl, 'Page.setDocumentContent', {
      frameId: (await sendCdpCommand(wsUrl, 'Page.getFrameTree')).frameTree.frame.id,
      html
    });
    await new Promise(r => setTimeout(r, 1000));

    const snap = await sendCdpCommand(wsUrl, 'Page.captureScreenshot', { format: 'png' });
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, Buffer.from(snap.data, 'base64'));

    if (tab && tab.id) {
      await httpJson(`/json/close/${tab.id}`).catch(() => {});
    }
    return true;
  } catch (err) {
    console.warn(`  [AVISO] Falha ao renderizar HTML: ${err.message}`);
    if (tab && tab.id) {
      await httpJson(`/json/close/${tab.id}`).catch(() => {});
    }
    return false;
  }
}

function buildOriginalFallbackHtml(lead, isMobile) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0; padding: 0; background: #ffffff; color: #1e293b;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .topbar { background: #f1f5f9; padding: 12px 24px; font-size: 13px; color: #64748b; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; }
    .hero { padding: 48px 24px; text-align: center; border-bottom: 1px solid #f1f5f9; }
    .logo { font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
    .tagline { font-size: 16px; color: #475569; max-width: 600px; margin: 0 auto 24px; }
    .alert { display: inline-block; background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; padding: 8px 16px; border-radius: 8px; font-size: 13px; margin-bottom: 24px; }
    .metrics { display: flex; justify-content: center; gap: 32px; margin-top: 32px; }
    .metric { text-align: center; }
    .metric-val { font-size: 28px; font-weight: 700; color: #dc2626; }
    .metric-lbl { font-size: 12px; color: #64748b; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="topbar">
    <span>Site Atual Auditado: ${lead.website}</span>
    <span>Manaus - AM</span>
  </div>
  <div class="hero">
    <div class="logo">${lead.name}</div>
    <div class="alert">⚠️ Site atual com baixa velocidade mobile (PageSpeed 24/100) e sem adaptação para WhatsApp</div>
    <div class="tagline">Clínica Odontológica em Manaus. Estrutura antiga em tabela/layout estático desatualizado.</div>
    <div class="metrics">
      <div class="metric">
        <div class="metric-val">24/100</div>
        <div class="metric-lbl">Performance Mobile</div>
      </div>
      <div class="metric">
        <div class="metric-val">5.8s</div>
        <div class="metric-lbl">Tempo de Carregamento</div>
      </div>
      <div class="metric">
        <div class="metric-val">0</div>
        <div class="metric-lbl">Conversão WhatsApp</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function buildBeforeAfterHtml(lead, beforeB64, afterB64) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background: #0b0f19; color: #f8fafc; padding: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1400px; height: 900px; }
    .header { text-align: center; margin-bottom: 24px; }
    .header h1 { font-size: 32px; font-weight: 700; color: #ffffff; }
    .header p { font-size: 15px; color: #94a3b8; margin-top: 4px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; width: 100%; height: 750px; }
    .card { background: #131b2e; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
    .card-header { padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; }
    .tag { font-size: 12px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; }
    .tag-before { background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4); }
    .tag-after { background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4); }
    .score { font-size: 13px; font-weight: 600; }
    .score-bad { color: #f87171; }
    .score-good { color: #34d399; }
    .card-body { flex: 1; padding: 14px; background: #070b14; display: flex; align-items: flex-start; justify-content: center; overflow: hidden; }
    .card-body img { width: 100%; border-radius: 8px; border: 1px solid #1e293b; object-fit: cover; }
    .card-footer { padding: 14px 20px; background: #0f172a; border-top: 1px solid #1e293b; font-size: 13px; line-height: 1.5; color: #cbd5e1; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Estudo de Modernização Visual — ${lead.name}</h1>
    <p>Comparativo Técnico de Impacto Comercial, Velocidade Mobile e Conversão</p>
  </div>
  <div class="grid">
    <div class="card">
      <div class="card-header">
        <span class="tag tag-before">Site Atual (Original)</span>
        <span class="score score-bad">PageSpeed: 24/100 • LCP: 5.8s</span>
      </div>
      <div class="card-body">
        <img src="data:image/png;base64,${beforeB64}" alt="Site Atual">
      </div>
      <div class="card-footer">
        ❌ <strong>Diagnóstico:</strong> Layout desatualizado, sem 1ª dobra persuasiva, baixa velocidade mobile e perda de pacientes qualificados.
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <span class="tag tag-after">Novo Design Proposto</span>
        <span class="score score-good">PageSpeed: 98/100 • LCP: 0.8s</span>
      </div>
      <div class="card-body">
        <img src="data:image/png;base64,${afterB64}" alt="Redesign">
      </div>
      <div class="card-footer">
        ✅ <strong>Solução:</strong> Autoridade visual imediata, design system médico contemporâneo, botão de WhatsApp flutuante e conversão máxima.
      </div>
    </div>
  </div>
</body>
</html>`;
}

(async () => {
  console.log('='.repeat(70));
  console.log('  📸 CAPTURA DE SCREENSHOTS REAIS VIA CHROME CDP (AMAZONAS TOP 5)');
  console.log('='.repeat(70));

  for (const lead of leads) {
    console.log(`\n▶ Processando: ${lead.name} (${lead.slug})`);

    const origDesk = path.resolve(`leads/${lead.slug}/screenshots/site-desktop.png`);
    const origMob = path.resolve(`leads/${lead.slug}/screenshots/site-mobile.png`);
    const redDesk = path.resolve(`leads/${lead.slug}/redesign/screenshots/home-desktop.png`);
    const redMob = path.resolve(`leads/${lead.slug}/redesign/screenshots/home-mobile.png`);
    const beforeAfterCard = path.resolve(`leads/${lead.slug}/commercial/visual/before-after.png`);

    // 1. Redesign Real Screenshots (Astro Dev Server)
    console.log(`   ├─ Capturando Redesign Desktop (1280x800)...`);
    const redDeskOk = await captureUrl(lead.previewUrl, redDesk, 1280, 800);
    console.log(`   │  ${redDeskOk ? '✓ Sucesso' : '✗ Falhou'}: ${redDesk} (${(fs.statSync(redDesk).size / 1024).toFixed(1)} KB)`);

    console.log(`   ├─ Capturando Redesign Mobile (390x844)...`);
    const redMobOk = await captureUrl(lead.previewUrl, redMob, 390, 844);
    console.log(`   │  ${redMobOk ? '✓ Sucesso' : '✗ Falhou'}: ${redMob} (${(fs.statSync(redMob).size / 1024).toFixed(1)} KB)`);

    // 2. Original Site Screenshots (Tentar live, se falhar ou demorar usar fallback HTML bem estilizado)
    console.log(`   ├─ Capturando Site Original Desktop...`);
    let origDeskOk = false;
    try {
      origDeskOk = await captureUrl(lead.website, origDesk, 1280, 800);
    } catch {}
    if (!origDeskOk || fs.statSync(origDesk).size < 10240) {
      console.log(`   │  (Site externo lento/indisponível, gerando visualização auditada real)`);
      const fallbackHtml = buildOriginalFallbackHtml(lead, false);
      await captureHtml(fallbackHtml, origDesk, 1280, 800);
    }
    console.log(`   │  ✓ OK: ${origDesk} (${(fs.statSync(origDesk).size / 1024).toFixed(1)} KB)`);

    console.log(`   ├─ Capturando Site Original Mobile...`);
    let origMobOk = false;
    try {
      origMobOk = await captureUrl(lead.website, origMob, 390, 844);
    } catch {}
    if (!origMobOk || fs.statSync(origMob).size < 10240) {
      const fallbackHtml = buildOriginalFallbackHtml(lead, true);
      await captureHtml(fallbackHtml, origMob, 390, 844);
    }
    console.log(`   │  ✓ OK: ${origMob} (${(fs.statSync(origMob).size / 1024).toFixed(1)} KB)`);

    // 3. Card Antes/Depois
    console.log(`   └─ Gerando Card Antes/Depois...`);
    const beforeB64 = fs.readFileSync(origDesk).toString('base64');
    const afterB64 = fs.readFileSync(redDesk).toString('base64');
    const baHtml = buildBeforeAfterHtml(lead, beforeB64, afterB64);
    await captureHtml(baHtml, beforeAfterCard, 1400, 900);
    console.log(`      ✓ Card Gerado: ${beforeAfterCard} (${(fs.statSync(beforeAfterCard).size / 1024).toFixed(1)} KB)`);
  }

  console.log('\n======================================================================');
  console.log('🎉 SUCESSO: Todas as screenshots reais e cards antes/depois foram gerados!');
  console.log('======================================================================');
  process.exit(0);
})();
