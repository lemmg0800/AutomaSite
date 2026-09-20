const https = require('https');
const http = require('http');
const { URL } = require('url');

const targetUrl = 'https://cadas.com.br/';
const sslAgent = new https.Agent({ rejectUnauthorized: false });

function getPage(urlStr) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const client = u.protocol === 'https:' ? https : http;
    client.get(urlStr, {
      agent: u.protocol === 'https:' ? sslAgent : undefined,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 15000
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(getPage(new URL(res.headers.location, urlStr).toString()));
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function main() {
  console.log('--- Rastreando:', targetUrl, '---');
  const res = await getPage(targetUrl);
  console.log('Status:', res.statusCode);
  console.log('HTML Length:', res.body.length);

  // Extrai títulos e metas
  const title = res.body.match(/<title[^>]*>(.*?)<\/title>/i)?.[1] || '';
  console.log('Title:', title);

  // Extrai links internos
  const linkRegex = /href=["']([^"']+)["']/gi;
  const links = new Set();
  let m;
  while ((m = linkRegex.exec(res.body)) !== null) {
    const href = m[1].trim();
    if (!href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('javascript:')) {
      try {
        const parsed = new URL(href, targetUrl);
        if (parsed.hostname.includes('cadas.com.br')) {
          links.add(parsed.pathname);
        } else if (!href.startsWith('http')) {
          links.add(href);
        }
      } catch {}
    }
  }

  console.log('\n--- Páginas Internas Encontradas ---');
  for (const l of links) {
    console.log(' ', l);
  }

  const subpages = ['https://cadas.com.br/perfil', 'https://cadas.com.br/projetos', 'https://cadas.com.br/contato'];
  for (const sp of subpages) {
    console.log('\n========================================');
    console.log('Baixando subpágina:', sp);
    try {
      const spRes = await getPage(sp);
      console.log('Status:', spRes.statusCode, '| Tamanho:', spRes.body.length);
      const spImgs = [];
      let sm;
      const spImgRegex = /<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi;
      while ((sm = spImgRegex.exec(spRes.body)) !== null) {
        spImgs.push(sm[1]);
      }
      console.log('Imagens na subpágina:', spImgs.length);
      console.log('Amostra de imagens:', spImgs.slice(0, 5));

      // Extrai texto limpo
      const textOnly = spRes.body
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      console.log('Texto extraído (primeiros 300 caracteres):');
      console.log(textOnly.substring(0, 300));
    } catch (e) {
      console.error('Erro na subpágina:', e.message);
    }
  }
}

main().catch(err => console.error('Erro:', err.message));
