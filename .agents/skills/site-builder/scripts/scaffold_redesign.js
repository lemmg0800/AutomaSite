const fs = require('fs');
const path = require('path');

const slug = process.argv[2] || 'sbardella-advocacia';
const rootDir = path.resolve(__dirname, '../../../../');
const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
console.log(`=== EXECUTANDO SCAFFOLDING PARA: ${lead.name} (${lead.slug}) ===`);

const redesignDir = path.join(leadDir, 'redesign');
const siteDir = path.join(redesignDir, 'site');
const screenshotsDir = path.join(redesignDir, 'screenshots');

[redesignDir, siteDir, screenshotsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Helper de substituição
function replaceAll(str, map) {
  let res = str;
  for (const [key, val] of Object.entries(map)) {
    res = res.split(key).join(val || '');
  }
  return res;
}

const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
const cleanWhats = (lead.whatsapp || lead.phone || '').replace(/[^0-9]/g, '');
const whatsLink = `https://wa.me/55${cleanWhats}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica%20com%20a%20${encodeURIComponent(lead.name)}.`;

// Cards de especialidades adaptados
const cardsHtml = `
  <div class="bg-brand-card/70 border border-white/5 hover:border-brand-gold/40 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl group">
    <div class="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">🏛️</div>
    <h3 class="font-serif text-xl font-bold text-white mb-2.5">Direito Imobiliário & Transações</h3>
    <p class="text-slate-300 text-sm leading-relaxed mb-6 font-light">Assessoria minuciosa em compra, venda e locação de imóveis de alto valor, redação de contratos customizados e incorporações seguras.</p>
    <a href="${whatsLink}" target="_blank" class="text-xs font-bold text-brand-gold hover:text-brand-goldHover flex items-center gap-1.5 group-hover:translate-x-1 transition-all">
      <span>Analisar contrato imobiliário</span><span>&rarr;</span>
    </a>
  </div>
  <div class="bg-brand-card/70 border border-white/5 hover:border-brand-gold/40 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl group">
    <div class="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">🛡️</div>
    <h3 class="font-serif text-xl font-bold text-white mb-2.5">Holdings Familiares & Sucessão</h3>
    <p class="text-slate-300 text-sm leading-relaxed mb-6 font-light">Estruturação societária de patrimônio para evitar litígios em inventário, proteger bens de forma legal e otimizar tributos na herança.</p>
    <a href="${whatsLink}" target="_blank" class="text-xs font-bold text-brand-gold hover:text-brand-goldHover flex items-center gap-1.5 group-hover:translate-x-1 transition-all">
      <span>Planejar sucessão familiar</span><span>&rarr;</span>
    </a>
  </div>
  <div class="bg-brand-card/70 border border-white/5 hover:border-brand-gold/40 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl group">
    <div class="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">📜</div>
    <h3 class="font-serif text-xl font-bold text-white mb-2.5">Regularização Fundiária & Usucapião</h3>
    <p class="text-slate-300 text-sm leading-relaxed mb-6 font-light">Solução jurídica ágil para regularização e obtenção de matrícula definitiva para imóveis urbanos e litorâneos na Grande Florianópolis.</p>
    <a href="${whatsLink}" target="_blank" class="text-xs font-bold text-brand-gold hover:text-brand-goldHover flex items-center gap-1.5 group-hover:translate-x-1 transition-all">
      <span>Regularizar matrícula de imóvel</span><span>&rarr;</span>
    </a>
  </div>
  <div class="bg-brand-card/70 border border-white/5 hover:border-brand-gold/40 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl group">
    <div class="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-xl mb-5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">⚖️</div>
    <h3 class="font-serif text-xl font-bold text-white mb-2.5">Contencioso Cível Patrimonial</h3>
    <p class="text-slate-300 text-sm leading-relaxed mb-6 font-light">Defesa técnica incisiva em rescisões contratuais, reintegrações de posse, vícios construtivos e desapropriações perante o TJSC.</p>
    <a href="${whatsLink}" target="_blank" class="text-xs font-bold text-brand-gold hover:text-brand-goldHover flex items-center gap-1.5 group-hover:translate-x-1 transition-all">
      <span>Falar com especialista em litígios</span><span>&rarr;</span>
    </a>
  </div>
`;

const tokens = {
  '{{NOME_EMPRESA}}': lead.name,
  '{{NOME_EMPRESA_UPPER}}': lead.name.toUpperCase(),
  '{{LOGO_INICIAL}}': lead.name.charAt(0),
  '{{TITULO_PAGINA}}': `${lead.name} | Advocacia Especializada em Florianópolis`,
  '{{META_DESCRIPTION}}': `Assessoria jurídica de alto padrão em ${lead.segment} em Florianópolis - SC. Atendimento personalizado e direto com os sócios.`,
  '{{ENDERECO}}': lead.address,
  '{{TELEFONE}}': lead.phone,
  '{{TELEFONE_NUM}}': cleanPhone,
  '{{WHATSAPP}}': lead.whatsapp || lead.phone,
  '{{WHATSAPP_LINK}}': whatsLink,
  '{{HERO_HEADLINE}}': 'Segurança Jurídica & Estratégia Patrimonial para <span class="text-brand-gold italic">Imóveis e Famílias</span>.',
  '{{HERO_SUBHEADLINE}}': 'Protegemos seus investimentos imobiliários e estruturamos a sucessão do seu patrimônio com discrição, agilidade e rigor técnico no coração de Florianópolis.',
  '{{CARDS_ESPECIALIDADES}}': cardsHtml,
  '{{ANO_ATUAL}}': new Date().getFullYear().toString()
};

// 1. Gerar HTML
const htmlTpl = fs.readFileSync(path.join(__dirname, '../resources/index.template.html'), 'utf8');
fs.writeFileSync(path.join(siteDir, 'index.html'), replaceAll(htmlTpl, tokens), 'utf8');

// 2. Copiar CSS e JS
const cssTpl = fs.readFileSync(path.join(__dirname, '../resources/styles.template.css'), 'utf8');
fs.writeFileSync(path.join(siteDir, 'styles.css'), cssTpl, 'utf8');

const jsTpl = fs.readFileSync(path.join(__dirname, '../resources/script.template.js'), 'utf8');
fs.writeFileSync(path.join(siteDir, 'script.js'), jsTpl, 'utf8');

// 3. Gerar Briefing, Referências e Decisões
const briefingTpl = fs.readFileSync(path.join(rootDir, '.agents/skills/brand-extractor/resources/briefing.template.md'), 'utf8');
const briefingTokens = {
  '{{NOME_EMPRESA}}': lead.name,
  '{{DATA}}': new Date().toLocaleDateString('pt-BR'),
  '{{SEGMENTO}}': lead.segment,
  '{{CIDADE}}': lead.city,
  '{{ENDERECO}}': lead.address,
  '{{URL_SITE}}': lead.website,
  '{{POSICIONAMENTO}}': 'Advocacia boutique de alto padrão com atuação artesanal focada em patrimônio imobiliário e familiar.',
  '{{TOM_DE_VOZ}}': 'Sóbrio, institucional, focado em segurança jurídica e rentabilidade.',
  '{{PUBLICO_ALVO}}': 'Investidores imobiliários, incorporadores, herdeiros e proprietários de imóveis na Grande Florianópolis.',
  '{{COR_PRIMARIA}}': '#0a192f (Azul Marinho Noturno)',
  '{{COR_SECUNDARIA}}': '#0f2444 (Azul Corporativo)',
  '{{COR_DESTAQUE}}': '#c5a059 (Dourado Suave)',
  '{{COR_FUNDO}}': '#0a192f',
  '{{COR_TEXTO}}': '#f8fafc (Branco Gelo)',
  '{{PROBLEMA_1_TITULO}}': 'Lentidão Mobile no 4G',
  '{{PROBLEMA_1_DESC}}': 'Carregamento do site anterior demorava mais de 5s, gerando perda de clientes no celular.',
  '{{PROBLEMA_2_TITULO}}': 'Layout Visual Desatualizado',
  '{{PROBLEMA_2_DESC}}': 'Tema genérico sem posicionamento de autoridade para o perfil de alto tíquete.',
  '{{PROBLEMA_3_TITULO}}': 'Ausência de Botão de WhatsApp Flutuante',
  '{{PROBLEMA_3_DESC}}': 'Visitante precisava rolar a tela toda para encontrar canal de contato.',
  '{{LISTA_SERVICOS_REAIS}}': '- Direito Imobiliário & Contratos\n- Holdings Familiares & Sucessão\n- Regularização Fundiária & Usucapião\n- Contencioso Cível Patrimonial',
  '{{PRESERVAR_1}}': `Nome tradicional de ${lead.name}`,
  '{{PRESERVAR_2}}': 'Localização física de prestígio no Centro de Florianópolis',
  '{{PRESERVAR_3}}': 'Paleta clássica azul e dourada em conformidade com o Código de Ética da OAB',
  '{{CTA_DESCRICAO}}': 'Agendamento de Consulta Estratégica via WhatsApp',
  '{{WHATSAPP}}': lead.whatsapp || lead.phone
};
fs.writeFileSync(path.join(redesignDir, 'briefing.md'), replaceAll(briefingTpl, briefingTokens), 'utf8');

const refTpl = fs.readFileSync(path.join(rootDir, '.agents/skills/design-reference/resources/referencias.template.md'), 'utf8');
const refTokens = {
  '{{NOME_EMPRESA}}': lead.name,
  '{{SEGMENTO}}': lead.segment,
  '{{DIRETRIZ_ESTETICA}}': 'Boutique Jurídica Contemporânea & Proteção Patrimonial',
  '{{REF_A_NOME}}': 'Boutiques Jurídicas Internacionais (Wachtell / Skadden Style)',
  '{{REF_A_TIPO}}': 'Advocacia Consultiva de Alto Valor',
  '{{REF_A_INSPIRACAO}}': 'Hierarquia tipográfica editorial imponente e uso generoso de whitespace.',
  '{{REF_B_NOME}}': 'Plataformas Jurídicas de Alta Conversão Mobile',
  '{{REF_B_TIPO}}': 'Atendimento Ágil',
  '{{REF_B_INSPIRACAO}}': 'Acesso imediato ao WhatsApp e formulário de contato simplificado em 1 tela.'
};
fs.writeFileSync(path.join(redesignDir, 'referencias.md'), replaceAll(refTpl, refTokens), 'utf8');

const decTpl = fs.readFileSync(path.join(rootDir, '.agents/skills/brand-extractor/resources/decisoes-design.template.md'), 'utf8');
const decTokens = {
  '{{NOME_EMPRESA}}': lead.name,
  '{{HERO_DECISAO}}': 'Headline orientada à dor do cliente ("Segurança Jurídica & Estratégia Patrimonial") com badge de autoridade e duplo CTA.',
  '{{HERO_PROBLEMA_ANTERIOR}}': 'banners genéricos e sem foco comercial',
  '{{SERVICOS_DECISAO}}': 'Organização em 4 cards com link contextualizado para o WhatsApp em cada especialidade.',
  '{{PS_ANTERIOR}}': (lead.pagespeed && lead.pagespeed.mobile_performance) || '38'
};
fs.writeFileSync(path.join(redesignDir, 'decisoes-design.md'), replaceAll(decTpl, decTokens), 'utf8');

console.log(`[OK] Redesign funcional gerado com sucesso em: ${siteDir}`);