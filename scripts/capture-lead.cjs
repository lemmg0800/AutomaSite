const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/capture-lead.js <slug>");
  process.exit(1);
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetUrl = `http://localhost:4321/site/${slug}`;
const outDir = path.resolve(`leads/${slug}/redesign/screenshots`);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const desktopOut = path.join(outDir, 'home-desktop.png');
const mobileOut = path.join(outDir, 'home-mobile.png');

function capture(url, outPath, width, height) {
  return new Promise((resolve, reject) => {
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
      proc.kill('SIGKILL');
      resolve(false);
    }, 15000);

    proc.on('close', (code) => {
      clearTimeout(timer);
      try { fs.rmSync(tmpProfile, { recursive: true, force: true }); } catch (e) {}
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) {
        console.log(`[OK] Captured ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
        resolve(true);
      } else {
        console.warn(`[WARN] Failed to capture ${outPath}`);
        resolve(false);
      }
    });
  });
}

async function run() {
  console.log(`Capturing screenshots for ${slug}...`);
  await capture(targetUrl, desktopOut, 1440, 900);
  await capture(targetUrl, mobileOut, 390, 844);
  console.log(`Finished capture for ${slug}`);
}

run();
