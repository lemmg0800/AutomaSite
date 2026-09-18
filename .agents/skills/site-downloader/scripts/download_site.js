import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';
import { spawnSync } from 'child_process';

// Parse command line arguments
const args = process.argv.slice(2);
let targetUrl = '';
let slug = '';
let timeoutMs = 120000; // 2 minutes timeout for large sites

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--url' && args[i + 1]) targetUrl = args[i + 1];
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
  if (args[i] === '--timeout' && args[i + 1]) timeoutMs = parseInt(args[i + 1], 10);
}

if (!targetUrl || !slug) {
  console.error('Uso: node download_site.js --url "https://site.com" --slug "cliente-slug"');
  process.exit(1);
}

// Normalize URL
if (!/^https?:\/\//i.test(targetUrl)) {
  targetUrl = 'https://' + targetUrl;
}

const baseDir = path.resolve(process.cwd());
const targetDirLeads = path.join(baseDir, 'leads', slug, 'referencias', 'site-baixado');
const targetDirIndex = path.join(baseDir, 'index', slug, 'referencias', 'site-baixado');
const refDirLeads = path.join(baseDir, 'leads', slug, 'referencias');
const refDirIndex = path.join(baseDir, 'index', slug, 'referencias');

[targetDirLeads, targetDirIndex, refDirLeads, refDirIndex].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

const report = {
  url: targetUrl,
  slug: slug,
  started_at: new Date().toISOString(),
  engine_used: 'asimov_site_downloader_2.0',
  success: false,
  zip_downloaded: false,
  extraction_success: false,
  verified_assets: {
    html: false,
    css_count: 0,
    js_count: 0,
    images_count: 0,
    fonts_count: 0,
    has_logo: false,
    has_favicon: false
  },
  files_downloaded: [],
  logs: [],
  errors: []
};

const sslAgent = new https.Agent({ rejectUnauthorized: false });

function logMsg(msg, isErr = false) {
  const ts = new Date().toLocaleTimeString('pt-BR');
  const formatted = `[${ts}] ${msg}`;
  console.log(formatted);
  report.logs.push(formatted);
  if (isErr) report.errors.push(msg);
}

// 1. ASIMOV SITE DOWNLOADER API WORKFLOW
function startAsimovDownload(url) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ url });
    const req = https.request('https://sd.asimov.academy/start-download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AsimovAgent/2.0'
      },
      agent: sslAgent,
      timeout: 15000
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.session_id) {
            resolve(json.session_id);
          } else {
            reject(new Error(json.error || `Resposta sem session_id: ${body}`));
          }
        } catch (e) {
          reject(new Error(`Falha ao parsear resposta JSON de /start-download: ${body}`));
        }
      });
    });

    req.on('error', err => reject(err));
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout ao conectar com https://sd.asimov.academy/start-download'));
    });
    req.write(postData);
    req.end();
  });
}

function listenAsimovStream(sessionId) {
  return new Promise((resolve, reject) => {
    logMsg(`[Asimov Downloader] Conectando ao stream SSE para session: ${sessionId}...`);
    let isComplete = false;
    let timeoutTimer = null;

    const req = https.request(`https://sd.asimov.academy/stream/${sessionId}`, {
      method: 'GET',
      agent: sslAgent
    }, res => {
      let buffer = '';

      res.on('data', chunk => {
        buffer += chunk.toString();
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;

          if (trimmed.startsWith('data:')) {
            const dataVal = trimmed.replace(/^data:\s*/, '');
            if (dataVal) logMsg(`  [Asimov Live] ${dataVal}`);
            if (dataVal === 'complete') {
              isComplete = true;
            }
          } else if (trimmed.startsWith('event: done')) {
            isComplete = true;
          }
        }
      });

      res.on('end', () => {
        if (timeoutTimer) clearTimeout(timeoutTimer);
        resolve(true);
      });
    });

    req.on('error', err => {
      if (timeoutTimer) clearTimeout(timeoutTimer);
      reject(err);
    });

    timeoutTimer = setTimeout(() => {
      req.destroy();
      logMsg('[Asimov Downloader] Tempo limite do stream SSE excedido.', true);
      resolve(false);
    }, timeoutMs);

    req.end();
  });
}

function downloadAsimovZip(sessionId, destZipPath) {
  return new Promise((resolve, reject) => {
    logMsg(`[Asimov Downloader] Baixando arquivo ZIP final de /download-file/${sessionId}...`);
    const req = https.get(`https://sd.asimov.academy/download-file/${sessionId}`, {
      agent: sslAgent,
      timeout: 30000
    }, res => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Download do ZIP retornou HTTP ${res.statusCode}`));
      }

      const fileStream = fs.createWriteStream(destZipPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        const size = fs.statSync(destZipPath).size;
        if (size < 100) {
          return reject(new Error(`Arquivo ZIP baixado está vazio ou inválido (${size} bytes)`));
        }
        logMsg(`[Asimov Downloader] ZIP baixado com sucesso! Tamanho: ${(size / 1024).toFixed(1)} KB`);
        resolve(true);
      });

      fileStream.on('error', err => reject(err));
    });

    req.on('error', err => reject(err));
  });
}

function extractZip(zipPath, targetDir) {
  logMsg(`[Descompactador] Extraindo ${path.basename(zipPath)} para ${targetDir}...`);
  try {
    const resTar = spawnSync('tar', ['-xf', zipPath, '-C', targetDir], { stdio: 'pipe' });
    if (resTar.status === 0) {
      logMsg('[Descompactador] Extração concluída com sucesso via tar.');
      return true;
    }
  } catch (e) {}

  try {
    const psCmd = `Expand-Archive -Path "${zipPath}" -DestinationPath "${targetDir}" -Force`;
    const resPs = spawnSync('powershell', ['-NoProfile', '-Command', psCmd], { stdio: 'pipe' });
    if (resPs.status === 0) {
      logMsg('[Descompactador] Extração concluída com sucesso via PowerShell Expand-Archive.');
      return true;
    }
  } catch (e) {}

  return false;
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 2. FALLBACK HTTP SCRAPER
function fetchUrl(urlStr) {
  return new Promise((resolve, reject) => {
    try {
      const parsed = new URL(urlStr);
      const client = parsed.protocol === 'https:' ? https : http;
      const req = client.get(urlStr, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        agent: parsed.protocol === 'https:' ? sslAgent : undefined,
        timeout: 20000
      }, res => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, urlStr).toString();
          return resolve(fetchUrl(redirectUrl));
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      });
      req.on('error', err => reject(err));
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Timeout na requisição HTTP'));
      });
      req.end();
    } catch (e) {
      reject(e);
    }
  });
}

function downloadBinary(urlStr, destPath) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(urlStr);
      const client = parsed.protocol === 'https:' ? https : http;
      const req = client.get(urlStr, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        agent: parsed.protocol === 'https:' ? sslAgent : undefined,
        timeout: 15000
      }, res => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(destPath);
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(true);
          });
        } else {
          resolve(false);
        }
      });
      req.on('error', () => resolve(false));
      req.on('timeout', () => {
        req.destroy();
        resolve(false);
      });
    } catch {
      resolve(false);
    }
  });
}

async function runFallbackScraper() {
  logMsg('[Fallback Scraper] Iniciando captura HTTP direta como fallback...');
  try {
    const htmlContent = await fetchUrl(targetUrl);
    const htmlPathLeads = path.join(targetDirLeads, 'index.html');
    fs.writeFileSync(htmlPathLeads, htmlContent, 'utf-8');

    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    const imgs = [];
    let match;
    while ((match = imgRegex.exec(htmlContent)) !== null) {
      imgs.push(match[1]);
    }

    const imgDir = path.join(targetDirLeads, 'imagens');
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

    let downloadedCount = 0;
    for (let i = 0; i < Math.min(imgs.length, 30); i++) {
      const src = imgs[i];
      try {
        const fullImgUrl = new URL(src, targetUrl).toString();
        const imgName = path.basename(new URL(fullImgUrl).pathname) || `img_${i}.jpg`;
        const dest = path.join(imgDir, imgName);
        const ok = await downloadBinary(fullImgUrl, dest);
        if (ok) downloadedCount++;
      } catch (e) {}
    }

    copyRecursive(targetDirLeads, targetDirIndex);
    report.engine_used = 'http_scraper_fallback';
    logMsg(`[Fallback Scraper] Concluído! index.html salvo e ${downloadedCount} imagens baixadas.`);
    return true;
  } catch (err) {
    logMsg(`[Fallback Scraper] Erro crítico no fallback: ${err.message}`, true);
    return false;
  }
}

// 3. VERIFICAÇÃO DE INTEGRIDADE DOS ARQUIVOS BAIXADOS
function validateDownloadedSite() {
  logMsg('[Validação] Verificando integridade dos arquivos baixados...');
  const checkDir = (dir) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        checkDir(full);
      } else {
        const lower = f.toLowerCase();
        const rel = path.relative(targetDirLeads, full).replace(/\\/g, '/');
        report.files_downloaded.push(rel);

        if (lower === 'index.html') report.verified_assets.html = true;
        if (lower.endsWith('.css')) report.verified_assets.css_count++;
        if (lower.endsWith('.js')) report.verified_assets.js_count++;
        if (/\.(png|jpe?g|webp|gif|svg|avif)$/.test(lower)) report.verified_assets.images_count++;
        if (/\.(woff2?|ttf|otf|eot)$/.test(lower)) report.verified_assets.fonts_count++;
        if (lower.includes('logo') || lower.includes('brand')) report.verified_assets.has_logo = true;
        if (lower.includes('favicon')) report.verified_assets.has_favicon = true;
      }
    }
  };

  checkDir(targetDirLeads);

  const v = report.verified_assets;
  logMsg(`[Validação] Resultado: HTML=${v.html}, CSS=${v.css_count}, JS=${v.js_count}, Imagens=${v.images_count}, Fontes=${v.fonts_count}, Logo=${v.has_logo}`);

  return v.html && (v.images_count > 0 || v.css_count > 0 || report.files_downloaded.length > 1);
}

async function main() {
  logMsg(`=== INICIANDO CAPTURA DO SITE ATUAL ===`);
  logMsg(`Cliente (slug): ${slug}`);
  logMsg(`URL oficial   : ${targetUrl}`);

  let success = false;
  const tempZipPath = path.join(refDirLeads, `${slug}-asimov.zip`);

  try {
    logMsg('[Passo 1] Solicitando captura ao Asimov Site Downloader (https://sd.asimov.academy/)...');
    const sessionId = await startAsimovDownload(targetUrl);
    logMsg(`[Passo 1] Sessão iniciada no Asimov: ${sessionId}`);

    logMsg('[Passo 2] Acompanhando processamento via stream SSE...');
    await listenAsimovStream(sessionId);

    logMsg('[Passo 3] Baixando arquivo ZIP consolidado...');
    await downloadAsimovZip(sessionId, tempZipPath);
    report.zip_downloaded = true;

    logMsg('[Passo 4] Descompactando pacote de referências...');
    const extracted = extractZip(tempZipPath, targetDirLeads);
    report.extraction_success = extracted;

    logMsg(`[Passo 5] Espelhando para index/${slug}/referencias/site-baixado/...`);
    copyRecursive(targetDirLeads, targetDirIndex);

    if (fs.existsSync(tempZipPath)) {
      try { fs.unlinkSync(tempZipPath); } catch (e) {}
    }

    success = validateDownloadedSite();
  } catch (asimovErr) {
    logMsg(`[Aviso] Asimov Downloader encontrou impedimento: ${asimovErr.message}`, true);
    logMsg('[Passo 6] Ativando fallback técnico automático...');
    success = await runFallbackScraper();
    if (success) {
      validateDownloadedSite();
    }
  }

  report.success = success;
  report.completed_at = new Date().toISOString();

  const reportLeads = path.join(refDirLeads, 'download-report.json');
  const reportIndex = path.join(refDirIndex, 'download-report.json');
  fs.writeFileSync(reportLeads, JSON.stringify(report, null, 2), 'utf-8');
  fs.writeFileSync(reportIndex, JSON.stringify(report, null, 2), 'utf-8');

  if (success) {
    console.log(`\n✅ DOWNLOAD DO SITE ATUAL CONCLUÍDO COM SUCESSO!`);
    console.log(`   Armazenado em: leads/${slug}/referencias/site-baixado/`);
    console.log(`   Espelhado em : index/${slug}/referencias/site-baixado/`);
    console.log(`   Total de arquivos capturados: ${report.files_downloaded.length}`);
  } else {
    console.error(`\n❌ FALHA NO DOWNLOAD DO SITE ATUAL.`);
    console.error(`   Consulte o relatório em: leads/${slug}/referencias/download-report.json`);
    process.exit(1);
  }
}

main();
