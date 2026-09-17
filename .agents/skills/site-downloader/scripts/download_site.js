import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

// Parse command args
const args = process.argv.slice(2);
let targetUrl = '';
let slug = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--url' && args[i + 1]) targetUrl = args[i + 1];
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
}

if (!targetUrl || !slug) {
  console.error('Uso: node download_site.js --url "https://site.com" --slug "cliente-slug"');
  process.exit(1);
}

const baseDir = path.resolve(process.cwd());
const targetDirLeads = path.join(baseDir, 'leads', slug, 'referencias', 'site-baixado');
const targetDirIndex = path.join(baseDir, 'index', slug, 'referencias', 'site-baixado');

[targetDirLeads, targetDirIndex].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log(`[Site Downloader] Baixando ${targetUrl} para slug: ${slug}...`);

function fetchUrl(urlStr) {
  return new Promise((resolve, reject) => {
    try {
      const parsed = new URL(urlStr);
      const client = parsed.protocol === 'https:' ? https : http;
      const req = client.get(urlStr, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      }, (res) => {
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
        }
      }, (res) => {
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
    } catch {
      resolve(false);
    }
  });
}

async function run() {
  const report = {
    url: targetUrl,
    slug: slug,
    timestamp: new Date().toISOString(),
    success: false,
    filesDownloaded: [],
    errors: []
  };

  try {
    const htmlContent = await fetchUrl(targetUrl);
    const htmlPathLeads = path.join(targetDirLeads, 'index.html');
    const htmlPathIndex = path.join(targetDirIndex, 'index.html');

    fs.writeFileSync(htmlPathLeads, htmlContent, 'utf-8');
    fs.writeFileSync(htmlPathIndex, htmlContent, 'utf-8');

    report.filesDownloaded.push('index.html');

    // Simple asset extraction regex (imgs, stylesheets, scripts)
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    const imgs = [];
    let match;
    while ((match = imgRegex.exec(htmlContent)) !== null) {
      imgs.push(match[1]);
    }

    const imgDirLeads = path.join(targetDirLeads, 'imagens');
    const imgDirIndex = path.join(targetDirIndex, 'imagens');
    [imgDirLeads, imgDirIndex].forEach(d => {
      if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    });

    let downloadedImgsCount = 0;
    for (let i = 0; i < Math.min(imgs.length, 25); i++) {
      const src = imgs[i];
      try {
        const fullImgUrl = new URL(src, targetUrl).toString();
        const imgName = path.basename(new URL(fullImgUrl).pathname) || `img_${i}.jpg`;
        const destL = path.join(imgDirLeads, imgName);
        const destI = path.join(imgDirIndex, imgName);

        const ok = await downloadBinary(fullImgUrl, destL);
        if (ok) {
          fs.copyFileSync(destL, destI);
          downloadedImgsCount++;
          report.filesDownloaded.push(`imagens/${imgName}`);
        }
      } catch (e) {
        report.errors.push(`Falha ao baixar imagem: ${src}`);
      }
    }

    report.success = true;
    report.summary = `HTML principal baixado com sucesso. ${downloadedImgsCount} imagens resgatadas.`;
    console.log(`[Site Downloader] Sucesso! ${report.summary}`);
  } catch (err) {
    report.success = false;
    report.errors.push(err.message);
    console.error(`[Site Downloader] Erro ao baixar site: ${err.message}`);
  }

  const reportPathLeads = path.join(targetDirLeads, '..', 'download-report.json');
  fs.writeFileSync(reportPathLeads, JSON.stringify(report, null, 2), 'utf-8');
}

run();
