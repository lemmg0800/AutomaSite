process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const https = require('https');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2];
const outputDir = process.argv[3] || '.';
const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY || '';

if (!targetUrl) {
  console.error('Uso: node audit_pagespeed.js <URL> [OUTPUT_DIR]');
  process.exit(1);
}

function fetchPageSpeed(strategy) {
  return new Promise((resolve) => {
    let endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=${strategy}&category=performance&category=accessibility&category=best-practices&category=seo`;
    if (apiKey) endpoint += `&key=${apiKey}`;

    https.get(endpoint, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (res.statusCode === 200 && json.lighthouseResult) {
            const lh = json.lighthouseResult;
            const cats = lh.categories;
            const audits = lh.audits;
            resolve({
              success: true,
              performance: Math.round((cats.performance?.score || 0) * 100),
              accessibility: Math.round((cats.accessibility?.score || 0) * 100),
              best_practices: Math.round((cats['best-practices']?.score || 0) * 100),
              seo: Math.round((cats.seo?.score || 0) * 100),
              metrics: {
                fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
                lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
                tbt: audits['total-blocking-time']?.displayValue || 'N/A',
                cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
                speed_index: audits['speed-index']?.displayValue || 'N/A'
              },
              crux: json.loadingExperience ? json.loadingExperience.metrics : null
            });
          } else {
            resolve({
              success: false,
              statusCode: res.statusCode,
              error: json.error ? json.error.message : 'Falha na resposta da API'
            });
          }
        } catch (e) {
          resolve({ success: false, error: e.message });
        }
      });
    }).on('error', err => resolve({ success: false, error: err.message }));
  });
}

async function main() {
  console.log(`--- EXECUTANDO AUDITORIA GOOGLE PAGESPEED: ${targetUrl} ---`);

  console.log('1. Analisando Mobile...');
  const mobileResult = await fetchPageSpeed('mobile');

  console.log('2. Analisando Desktop...');
  const desktopResult = await fetchPageSpeed('desktop');

  const finalReport = {
    url: targetUrl,
    audited_at: new Date().toISOString(),
    mobile: mobileResult,
    desktop: desktopResult
  };

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outPath = path.join(outputDir, 'pagespeed.json');
  fs.writeFileSync(outPath, JSON.stringify(finalReport, null, 2));

  console.log('\n--- RESULTADOS PAGESPEED ---');
  if (mobileResult.success) {
    console.log(`[MOBILE] Performance: ${mobileResult.performance}/100 | LCP: ${mobileResult.metrics.lcp} | TBT: ${mobileResult.metrics.tbt} | CLS: ${mobileResult.metrics.cls}`);
  } else {
    console.log(`[MOBILE] Não disponível via API (${mobileResult.error || mobileResult.statusCode})`);
  }

  if (desktopResult.success) {
    console.log(`[DESKTOP] Performance: ${desktopResult.performance}/100 | LCP: ${desktopResult.metrics.lcp} | TBT: ${desktopResult.metrics.tbt} | CLS: ${desktopResult.metrics.cls}`);
  } else {
    console.log(`[DESKTOP] Não disponível via API (${desktopResult.error || desktopResult.statusCode})`);
  }

  console.log(`[OK] Dossiê de métricas gravado em: ${outPath}`);
}

main().catch(err => {
  console.error('Erro fatal no PageSpeed:', err.message);
});