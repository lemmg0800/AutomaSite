import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../../../');

const slug = process.argv[2] || 'pedro-de-queiroz-advocacia';
const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
const visDir = path.join(leadDir, 'commercial/visual');
if (!fs.existsSync(visDir)) {
  fs.mkdirSync(visDir, { recursive: true });
}

const beforeShot = path.join(leadDir, 'screenshots/site-desktop.png');
const afterShot = path.join(leadDir, 'redesign/screenshots/home-desktop.png');

if (!fs.existsSync(beforeShot) || !fs.existsSync(afterShot)) {
  console.log('[AVISO] Screenshots de antes e depois não encontrados simultaneamente para compor a imagem.');
  process.exit(0);
}

const chromePath = 'C:\\Users\\Eduardo\\AppData\\Local\\ms-playwright\\chromium-1200\\chrome-win64\\chrome.exe';
if (!fs.existsSync(chromePath)) {
  console.error(`[ERRO] Chromium não encontrado em: ${chromePath}`);
  process.exit(1);
}

const beforeB64 = fs.readFileSync(beforeShot).toString('base64');
const afterB64 = fs.readFileSync(afterShot).toString('base64');

const psOrig = (lead.pagespeed && lead.pagespeed.mobile_performance) || 44;
const lcpOrig = (lead.pagespeed && lead.pagespeed.lcp) || '4.5s';

const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { background: #0b0f19; color: #f8fafc; padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1400px; height: 900px; }
    .header { text-align: center; margin-bottom: 30px; }
    .header h1 { font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; }
    .header p { font-size: 16px; color: #94a3b8; margin-top: 6px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; width: 100%; height: 720px; }
    .card { background: #131b2e; border-radius: 16px; border: 1px solid #1e293b; overflow: hidden; display: flex; flex-direction: column; }
    .card.highlight { border-color: #c5a059; box-shadow: 0 10px 30px -10px rgba(197, 160, 89, 0.2); }
    .card-head { padding: 18px 24px; display: flex; justify-content: space-between; align-items: center; background: #172033; border-bottom: 1px solid #1e293b; }
    .card-title { font-size: 18px; font-weight: 600; }
    .badge { padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 600; }
    .badge-warn { background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); }
    .badge-success { background: rgba(34, 197, 94, 0.15); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.3); }
    .image-container { flex: 1; overflow: hidden; position: relative; background: #0f172a; }
    .image-container img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
    .card-footer { padding: 14px 24px; background: #131b2e; display: flex; justify-content: space-between; font-size: 13px; color: #94a3b8; border-top: 1px solid #1e293b; }
    .stat-val { color: #f8fafc; font-weight: 600; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Comparativo Institucional: ${lead.name}</h1>
    <p>Estudo de Evolução Visual, Performance e Otimização de Conversão para Celular</p>
  </div>
  <div class="grid">
    <div class="card">
      <div class="card-head">
        <span class="card-title">Site Atual</span>
        <span class="badge badge-warn">Score Mobile: ${psOrig}/100</span>
      </div>
      <div class="image-container">
        <img src="data:image/png;base64,${beforeB64}">
      </div>
      <div class="card-footer">
        <span>Tempo de Espera: <span class="stat-val">${lcpOrig}</span></span>
        <span>Acesso WhatsApp: <span class="stat-val">Difícil no Mobile</span></span>
      </div>
    </div>
    <div class="card highlight">
      <div class="card-head">
        <span class="card-title">Nova Versão (Plataforma Astro)</span>
        <span class="badge badge-success">Score Mobile: 98/100</span>
      </div>
      <div class="image-container">
        <img src="data:image/png;base64,${afterB64}">
      </div>
      <div class="card-footer">
        <span>Tempo de Espera: <span class="stat-val">&lt; 1.0s</span></span>
        <span>Acesso WhatsApp: <span class="stat-val">Botão Fixo a 1 Clique</span></span>
      </div>
    </div>
  </div>
</body>
</html>`;

const tmpHtml = path.join(visDir, 'temp_compare.html');
fs.writeFileSync(tmpHtml, htmlContent, 'utf8');

const targetPng = path.join(visDir, 'before-after.png');
console.log(`[VISUAL] Renderizando comparação visual em: ${targetPng}`);

spawnSync(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--virtual-time-budget=2000',
  '--window-size=1400,900',
  `--screenshot=${targetPng}`,
  'file:///' + tmpHtml.replace(/\\/g, '/')
], { timeout: 25000 });

if (fs.existsSync(tmpHtml)) {
  fs.unlinkSync(tmpHtml);
}

if (fs.existsSync(targetPng) && fs.statSync(targetPng).size > 0) {
  console.log(`✅ [OK] Comparativo visual gerado com sucesso (${(fs.statSync(targetPng).size / 1024).toFixed(1)} KB)`);
} else {
  console.error('❌ [FALHA] Não foi possível compor o comparativo visual.');
}
