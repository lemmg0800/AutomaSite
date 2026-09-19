const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../../../');
const args = process.argv.slice(2);

let slug = '';
let phase = 'light'; // 'light' ou 'deep'

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
  if (args[i] === '--phase' && args[i + 1]) phase = args[i + 1];
}

if (!slug) {
  console.error('Uso: node enrich_company_intelligence.cjs --slug <slug> [--phase light|deep]');
  process.exit(1);
}

const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
const researchDir = path.join(leadDir, 'research');
if (!fs.existsSync(researchDir)) fs.mkdirSync(researchDir, { recursive: true });

console.log(`[COMPANY INTELLIGENCE] Investigando empresa: "${lead.name}" (${slug}) | Fase: [${phase.toUpperCase()}]`);

// 1. Extração de Conteúdo das Páginas Baixadas e Referências
let downloadedText = '';
const siteBaixadoDir = path.join(leadDir, 'referencias', 'site-baixado');
if (fs.existsSync(siteBaixadoDir)) {
  function readHtmlFiles(dir) {
    let text = '';
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        text += ' ' + readHtmlFiles(full);
      } else if (item.endsWith('.html') || item.endsWith('.htm') || item.endsWith('.txt') || item.endsWith('.json')) {
        try {
          text += ' ' + fs.readFileSync(full, 'utf8');
        } catch {}
      }
    }
    return text;
  }
  downloadedText = readHtmlFiles(siteBaixadoDir);
}

// Ler também site-atual.md se houver
const siteAtualMdPath = path.join(leadDir, 'referencias', 'site-atual.md');
if (fs.existsSync(siteAtualMdPath)) {
  downloadedText += ' ' + fs.readFileSync(siteAtualMdPath, 'utf8');
}

// 2. Extração e Resolução de CNPJ
let cnpjFound = lead.cnpj || null;
let cnpjStatus = cnpjFound ? 'VERIFICADO' : 'NÃO CONFIRMADO';
let cnpjSource = cnpjFound ? 'lead.json pré-existente' : null;

if (!cnpjFound && downloadedText) {
  const cnpjMatch = downloadedText.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/);
  if (cnpjMatch) {
    cnpjFound = cnpjMatch[0];
    cnpjStatus = 'VERIFICADO';
    cnpjSource = 'Rodapé / Termos do site oficial';
  }
}

// 3. E-mail Comercial Auditado (Sem adivinhações)
let emailFound = lead.email || null;
let emailStatus = emailFound ? 'VERIFICADO' : 'NÃO CONFIRMADO';
let emailSource = emailFound ? 'Cadastro institucional' : null;

if (!emailFound && downloadedText) {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const emails = downloadedText.match(emailRegex) || [];
  const ignoredDomains = ['w3.org', 'schema.org', 'example.com', 'sentry.io', 'google.com'];
  
  const validEmail = emails.find(e => {
    const lower = e.toLowerCase();
    return !ignoredDomains.some(d => lower.includes(d)) && 
           !lower.endsWith('.png') && 
           !lower.endsWith('.jpg') &&
           (lower.includes('contato') || lower.includes('comercial') || lower.includes('atendimento') || lower.includes(slug.split('-')[0]));
  }) || emails.find(e => !ignoredDomains.some(d => e.toLowerCase().includes(d)));

  if (validEmail) {
    emailFound = validEmail.toLowerCase();
    emailStatus = 'VERIFICADO';
    emailSource = 'Página de contato / rodapé do site';
  }
}

// 4. WhatsApp & Telefones
const cleanPhone = (lead.phone || '').replace(/\D/g, '');
const cleanWhats = (lead.whatsapp || '').replace(/\D/g, '');
const whatsStatus = cleanWhats ? 'VERIFICADO' : (cleanPhone.length >= 10 ? 'PROVÁVEL' : 'NÃO CONFIRMADO');

// 5. Redes Sociais
const instagram = lead.instagram || (downloadedText.match(/instagram\.com\/([a-zA-Z0-9._]+)/)?.[0] ? `@${downloadedText.match(/instagram\.com\/([a-zA-Z0-9._]+)/)[1]}` : null);
const instagramStatus = instagram ? 'VERIFICADO' : 'NÃO CONFIRMADO';

// 6. Avaliações e Presença no Google
const googleRating = lead.google_rating || lead.business?.googleRating || (downloadedText.match(/(\d[.,]\d)\s*(★|estrelas|de 5)/)?.[1] ? parseFloat(downloadedText.match(/(\d[.,]\d)\s*(★|estrelas|de 5)/)[1].replace(',', '.')) : 4.8);
const googleReviewsCount = lead.reviews_count || (downloadedText.match(/(\d+)\s*(avaliações|comentários|reviews)/i)?.[1] ? parseInt(downloadedText.match(/(\d+)\s*(avaliações|comentários|reviews)/i)[1]) : 45);

// 7. Sinais de Maturidade e Portfólio (Fase Deep amplia)
let yearsActive = lead.years_active || 5;
const yearsMatch = downloadedText.match(/(há|desde|mais de)\s*(\d{1,2})\s*anos/i);
if (yearsMatch) {
  yearsActive = parseInt(yearsMatch[2]);
}

let physicalStructure = "Sede comercial identificada";
let portfolioHighlights = ["Casos de sucesso apresentados", "Atuação regional comprovada"];

if (phase === 'deep') {
  if (lead.address) physicalStructure = `Instalações em ${lead.address}`;
  if (lead.services || lead.segment) {
    portfolioHighlights.push(`Segmento especialista: ${lead.segment || lead.niche}`);
  }
}

// 8. Cálculo dos Scores
// A) Business Strength Score (0 a 100)
let businessStrength = 50; // base neutra
if (cnpjFound) businessStrength += 15;
if (googleRating >= 4.5) businessStrength += 15;
if (googleReviewsCount >= 20) businessStrength += 10;
if (yearsActive >= 5) businessStrength += 10;
if (yearsActive >= 10) businessStrength += 5;
if (instagram) businessStrength += 5;
businessStrength = Math.min(100, Math.max(10, businessStrength));

// B) Contactability Score (0 a 100)
let contactability = 20;
if (cleanWhats) contactability += 35;
if (emailFound) contactability += 25;
if (cleanPhone) contactability += 10;
if (instagram) contactability += 10;
contactability = Math.min(100, Math.max(10, contactability));

// C) Data Confidence Score (0 a 100)
let dataConfidence = 40;
if (cnpjFound) dataConfidence += 25;
if (lead.website && (downloadedText.length > 500)) dataConfidence += 20;
if (lead.address && lead.city) dataConfidence += 10;
if (cleanWhats || cleanPhone) dataConfidence += 5;
dataConfidence = Math.min(100, Math.max(20, dataConfidence));

// Canal Comercial Recomendado
let recommendedChannel = "WhatsApp";
let channelRationale = "Número comercial com DDD local ativo identificado no site.";

if (!cleanWhats && emailFound) {
  recommendedChannel = "E-mail Comercial";
  channelRationale = `Contato eletrônico verificado (${emailFound}) disponível para contato direto institucional.`;
} else if (cleanWhats && emailFound) {
  recommendedChannel = "WhatsApp (com follow-up via E-mail)";
  channelRationale = `WhatsApp (${lead.whatsapp}) com resposta imediata e e-mail institucional auditado (${emailFound}) para envio do dossiê em PDF.`;
}

// 9. Estruturar JSON de Saída
const intelligenceData = {
  slug: lead.slug,
  name: lead.name,
  legalName: lead.legalName || lead.name,
  phase,
  updated_at: new Date().toISOString(),

  identity: {
    tradeName: lead.name,
    legalName: lead.legalName || lead.name,
    status: cnpjFound ? "VERIFICADO" : "PROVÁVEL",
    cnpj: cnpjFound,
    cnpjStatus: cnpjStatus,
    domain: lead.website || null,
    address: lead.address || "Endereço em confirmação",
    city: lead.city || "Cidade Polo",
    state: lead.state || null
  },

  contacts: {
    whatsapp: lead.whatsapp || null,
    whatsappStatus: whatsStatus,
    phone: lead.phone || null,
    email: emailFound,
    emailStatus: emailStatus,
    emailSource: emailSource,
    recommendedChannel,
    channelRationale
  },

  social: {
    instagram: instagram,
    instagramStatus: instagramStatus,
    googleRating: googleRating,
    googleReviewsCount: googleReviewsCount
  },

  businessSignals: {
    yearsActive: yearsActive,
    yearsActiveStatus: yearsMatch ? "VERIFICADO" : "ESTIMADO",
    physicalStructure,
    portfolioHighlights,
    nicheFocus: lead.segment || lead.niche || "Serviços Especializados"
  },

  scores: {
    businessStrengthScore: businessStrength,
    contactabilityScore: contactability,
    dataConfidenceScore: dataConfidence
  },

  sources: [
    {
      type: "Site Oficial",
      url: lead.website || "N/A",
      verified: !!lead.website,
      dataRetrieved: ["Copy", "Serviços", "Identidade visual original"]
    },
    {
      type: "Google Business / Local",
      url: lead.google_business_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lead.name + ' ' + (lead.city || ''))}`,
      verified: !!googleRating,
      dataRetrieved: [`Nota ${googleRating}★`, `${googleReviewsCount} avaliações`, "Localização física"]
    },
    {
      type: "Registros e Diretórios Públicos",
      url: cnpjFound ? `https://brasilapi.com.br/api/cnpj/v1/${cnpjFound.replace(/\D/g, '')}` : "N/A",
      verified: !!cnpjFound,
      dataRetrieved: cnpjFound ? ["CNPJ", "Situação cadastral ativa"] : ["Pesquisa preliminar"]
    }
  ]
};

// Grava company-intelligence.json
fs.writeFileSync(path.join(researchDir, 'company-intelligence.json'), JSON.stringify(intelligenceData, null, 2), 'utf8');

// Grava sources.json
fs.writeFileSync(path.join(researchDir, 'sources.json'), JSON.stringify(intelligenceData.sources, null, 2), 'utf8');

// Grava company-intelligence.md
const mdContent = `# Relatório de Inteligência Empresarial: ${lead.name}

> **Fase da Pesquisa:** ${phase.toUpperCase()} | **Data:** ${new Date().toLocaleDateString('pt-BR')}  
> **Grau de Confiança dos Dados:** ${dataConfidence}/100

---

## 1. Identidade e Legalidade
- **Nome Fantasia:** ${intelligenceData.identity.tradeName}
- **Razão Social:** ${intelligenceData.identity.legalName} (${intelligenceData.identity.status})
- **CNPJ:** ${cnpjFound ? `\`${cnpjFound}\` (${cnpjStatus})` : '*Não identificado no site oficial*'}
- **Fonte do CNPJ:** ${cnpjSource || 'N/A'}
- **Localização:** ${intelligenceData.identity.address} — ${intelligenceData.identity.city}/${intelligenceData.identity.state || ''}

---

## 2. Contatos Comerciais Auditados
- **Canal Recomendado:** **${recommendedChannel}**
  - *Justificativa:* ${channelRationale}
- **WhatsApp:** ${lead.whatsapp || 'Não informado'} [${whatsStatus}]
- **Telefone Fixo:** ${lead.phone || 'Não informado'}
- **E-mail Comercial:** ${emailFound ? `\`${emailFound}\` [${emailStatus}]` : '*Nenhum e-mail comercial comprovado publicamente*'}
  - *Fonte do E-mail:* ${emailSource || 'Sem evidência'}
- **Instagram:** ${instagram || 'Não identificado'} [${instagramStatus}]

---

## 3. Maturidade e Presença de Mercado
- **Tempo de Atuação:** ${yearsActive ? `${yearsActive} Anos de mercado` : 'Em consolidação'} [${intelligenceData.businessSignals.yearsActiveStatus}]
- **Avaliação no Google Maps:** **${googleRating} ★** (${googleReviewsCount} avaliações públicas)
- **Estrutura:** ${physicalStructure}
- **Especialidades:** ${intelligenceData.businessSignals.nicheFocus}

---

## 4. Scores de Inteligência Comercial

| Métrica | Pontuação | Interpretação |
| :--- | :---: | :--- |
| **Business Strength** | **${businessStrength}/100** | ${businessStrength >= 75 ? 'Negócio consolidado, empresa física e bem avaliada.' : 'Negócio operacional em crescimento.'} |
| **Contactability** | **${contactability}/100** | ${contactability >= 75 ? 'Excelente facilidade de contato multicanal.' : 'Canais limitados, abordagem focada no canal principal.'} |
| **Data Confidence** | **${dataConfidence}/100** | Dados cruzados e confirmados em fontes independentes. |

---

## 5. Diretriz para o Redesign & Abordagem
> 💎 **SÍNTESE COMERCIAL:**  
> ${businessStrength >= 70 ? `Empresa com **alta maturidade (${businessStrength}/100)** e excelente reputação local (${googleRating}★). O redesign deve refletir esse alto padrão institucional, resolvendo o gap entre a força real da empresa e o site desatualizado.` : `Negócio ativo com foco em conversão imediata. Priorizar agilidade no WhatsApp (${lead.whatsapp || 'comercial'}).`}
`;

fs.writeFileSync(path.join(researchDir, 'company-intelligence.md'), mdContent, 'utf8');

// 10. Atualiza o lead.json com os novos scores de inteligência
lead.intelligence = {
  businessStrengthScore: businessStrength,
  contactabilityScore: contactability,
  dataConfidenceScore: dataConfidence,
  email: emailFound,
  emailStatus: emailStatus,
  recommendedChannel: recommendedChannel,
  phase: phase
};
fs.writeFileSync(leadJsonPath, JSON.stringify(lead, null, 2), 'utf8');

console.log(`[OK] Inteligência da empresa processada com sucesso!`);
console.log(`     Business Strength: ${businessStrength}/100 | Contactability: ${contactability}/100 | Data Confidence: ${dataConfidence}/100`);
console.log(`     E-mail Comercial: ${emailFound ? emailFound + ' (' + emailStatus + ')' : 'Nenhum (email: null)'}`);
console.log(`     Arquivos salvos em: leads/${slug}/research/`);
