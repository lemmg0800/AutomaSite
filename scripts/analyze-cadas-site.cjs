const https = require('https');
const { URL } = require('url');

const agent = new https.Agent({ rejectUnauthorized: false });

function fetchUrl(u) {
  return new Promise((resolve, reject) => {
    https.get(u, { agent, headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(new URL(res.headers.location, u).toString()));
      }
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve(b));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://cadas.com.br/',
    'https://cadas.com.br/perfil/',
    'https://cadas.com.br/projetos/',
    'https://cadas.com.br/contato/'
  ];

  for (const u of urls) {
    console.log('\n======================================');
    console.log('Analisando:', u);
    const html = await fetchUrl(u);
    console.log('HTML Length:', html.length);

    // Encontra todos os arquivos de imagem referenciados (.jpg, .png, .webp, etc.)
    const matches = html.match(/['"]([^'"]+\.(?:jpg|jpeg|png|webp|svg))['"]/gi) || [];
    const cleanMatches = Array.from(new Set(matches.map(m => m.replace(/['"]/g, ''))));
    console.log('Imagens encontradas:', cleanMatches.length);
    console.log(cleanMatches.slice(0, 15));

    // Encontra links de projetos
    const projLinks = html.match(/href=['"]([^'"]*projeto[^'"]*)['"]/gi) || [];
    if (projLinks.length > 0) {
      console.log('Links de projetos:', Array.from(new Set(projLinks)).slice(0, 10));
    }
  }
}

run().catch(console.error);
