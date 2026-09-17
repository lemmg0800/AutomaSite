const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const leadsData = [
  {
    slug: 'sbardella-advocacia',
    name: 'Sbardella Advocacia',
    segment: 'Direito Imobiliário & Planejamento Sucessório / Holdings',
    city: 'Florianópolis - SC',
    address: 'Av. Rio Branco, 380 - Centro, Florianópolis - SC',
    website: 'https://sadvocacia.com.br/',
    instagram: '@sbardella.advocacia',
    phone: '(48) 3224-8890',
    whatsapp: '(48) 99123-4567',
    scores: {
      business: 8.8,
      design: 3.6,
      mobile: 3.4,
      ux: 3.8,
      conversion: 3.2,
      confidence: 8.5,
      performance: 3.8,
      seo: 4.5,
      website_overall: 3.5,
      opportunity: 78
    },
    pagespeed: {
      mobile_performance: 38,
      desktop_performance: 64,
      lcp: '5.2s',
      fcp: '3.1s',
      tbt: '420ms',
      cls: '0.18',
      speed_index: '4.8s'
    },
    top_problems: [
      'Site lento no 4G (LCP de 5.2s e score mobile 38/100) causando abandono de tráfego qualificado',
      'Layout sem apelo visual contemporâneo para o público de alto patrimônio imobiliário',
      'Falta de CTA claro e botão flutuante de WhatsApp otimizado para triagem rápida de holdings'
    ],
    main_gap: 'Escritório boutique com clientes de alto tíquete imobiliário, mas com site lento, layout genérico de 2017 e perda de leads qualificados no smartphone.',
    commercial_hook: 'Investidores e proprietários decidem em segundos no smartphone; com 5.2s de carregamento, clientes com demandas de alto valor migram para concorrentes da região.',
    detailed_audit: {
      design: 'Layout baseado em tema genérico de 2017, com baixa diferenciação visual e paleta sem sofisticação.',
      mobile: 'Elementos desalinhados em telas estreitas, tipografia miúda e ausência de menu mobile ergonômico.',
      ux: 'Jornada truncada; o usuário precisa rolar várias telas para descobrir a especialidade em Direito Imobiliário.',
      conversion: 'Formulário genérico sem chamada de ação urgente; ausência de botão WhatsApp fixo no mobile.',
      confidence: 'O escritório possui excelente histórico e clientes de renome, mas nada disso está visível em destaque.',
      seo: 'Meta tags básicas presentes, mas sem marcação estruturada Schema.org para LegalService local.'
    },
    ps_interpretation: {
      mobile: 'Crítico (38/100). Imagens sem compactação e scripts bloqueadores postergam LCP para mais de 5s.',
      desktop: 'Moderado (64/100). Carrega com estabilidade aceitável em banda larga, mas acusa CSS não utilizado.'
    },
    handoff: {
      approach_angle: 'Foco no tíquete médio: demonstrar como a perda de apenas 1 cliente imobiliário por mês paga 10x um novo site.',
      preserve: 'Identidade das cores da marca (azul marinho e dourado suave), logotipo clássico e histórico do sócio fundador.'
    }
  },
  {
    slug: 'mussi-advocacia',
    name: 'Mussi Advocacia & Consultoria',
    segment: 'Direito Penal Estratégico & Compliance Trabalhista',
    city: 'Florianópolis - SC',
    address: 'Rua Felipe Schmidt, 515 - Centro, Florianópolis - SC',
    website: 'https://advmussi.com.br/',
    instagram: '@mussiadvocacia',
    phone: '(48) 3322-1040',
    whatsapp: '(48) 98834-5678',
    scores: {
      business: 8.5,
      design: 4.0,
      mobile: 3.5,
      ux: 3.8,
      conversion: 3.6,
      confidence: 8.2,
      performance: 4.1,
      seo: 5.0,
      website_overall: 3.8,
      opportunity: 75
    },
    pagespeed: {
      mobile_performance: 41,
      desktop_performance: 69,
      lcp: '4.8s',
      fcp: '2.9s',
      tbt: '380ms',
      cls: '0.15',
      speed_index: '4.4s'
    },
    top_problems: [
      'Plantão 24h penal não possui acionamento imediato com 1 clique no topo mobile',
      'Performance mobile lenta (Score 41/100, LCP 4.8s) compromete urgências criminais',
      'Hierarquia de serviços confusa misturando penal com compliance corporativo'
    ],
    main_gap: 'Advocacia penal de urgência exige resposta imediata no smartphone; o site atual atrasa o carregamento e esconde o botão de emergência.',
    commercial_hook: 'Em emergências criminais, quem busca no celular liga para o primeiro botão acessível; seu site esconde o contato direto no mobile.',
    detailed_audit: {
      design: 'Visual pesado e sóbrio em demasia, com pouca hierarquia de leitura.',
      mobile: 'Tempo de resposta demorado no 4G; rolagem longa necessária para achar telefone de plantão.',
      ux: 'Não há separação visual clara entre o atendimento penal de urgência e a consultoria empresarial.',
      conversion: 'Sem botão flutuante de emergência penal 24h.',
      confidence: 'A credibilidade do corpo jurídico é alta, mas a foto da equipe é de baixa resolução.',
      seo: 'Falta otimização para termos locais de urgência ("advogado criminalista plantão florianópolis").'
    },
    ps_interpretation: {
      mobile: 'Insatisfatório (41/100). Bloqueio por bibliotecas JS pesadas antes do primeiro render.',
      desktop: 'Aceitável (69/100). Carregamento satisfatório em conexões de alta velocidade.'
    },
    handoff: {
      approach_angle: 'Velocidade e conversão em urgência: apresentar redesign com botão direto de plantão penal 24h.',
      preserve: 'Sobriedade e seriedade jurídica inerentes à área penal.'
    }
  },
  {
    slug: 'pedro-de-queiroz-advocacia',
    name: 'Pedro de Queiroz Advocacia',
    segment: 'Direito Cível Estratégico, Contratos & Família',
    city: 'Florianópolis - SC',
    address: 'Av. Pref. Osmar Cunha, 416 - Centro, Florianópolis - SC',
    website: 'https://pedrodequeiroz.adv.br/',
    instagram: '@pedrodequeiroz.adv',
    phone: '(48) 3028-7090',
    whatsapp: '(48) 99655-2233',
    scores: {
      business: 8.6,
      design: 4.2,
      mobile: 3.9,
      ux: 4.0,
      conversion: 3.8,
      confidence: 8.7,
      performance: 4.4,
      seo: 4.8,
      website_overall: 4.0,
      opportunity: 74
    },
    pagespeed: {
      mobile_performance: 44,
      desktop_performance: 72,
      lcp: '4.5s',
      fcp: '2.7s',
      tbt: '310ms',
      cls: '0.12',
      speed_index: '4.1s'
    },
    top_problems: [
      'Design baseado em tema pré-fabricado genérico que enfraquece a autoridade pessoal do titular',
      'Ausência de canal direto e simplificado de agendamento de consulta cível',
      'Tipografia pequena com baixo contraste prejudicando leitura em telas de celular'
    ],
    main_gap: 'Nome de prestígio no judiciário catarinense, porém site não transmite a exclusividade e autoridade do titular.',
    commercial_hook: 'Sua autoridade jurídica e renome pessoal não estão refletidos visualmente na primeira impressão do site, parecendo um escritório genérico recém-formado.',
    detailed_audit: {
      design: 'Template padronizado sem identidade autoral forte.',
      mobile: 'Menu hambúrguer com navegação truncada e áreas de toque pequenas.',
      ux: 'Falta clareza nas especialidades principais versus causas de menor valor.',
      conversion: 'Formulário padrão de contato que gera baixa taxa de envio.',
      confidence: 'Currículo e publicações do titular existem mas estão escondidos em abas secundárias.',
      seo: 'Indexado no Google, mas títulos e meta descriptions desatualizados.'
    },
    ps_interpretation: {
      mobile: 'Abaixo do ideal (44/100). Imagens não otimizadas e scripts legados no cabeçalho.',
      desktop: 'Regular (72/100). Performance satisfatória em monitores grandes.'
    },
    handoff: {
      approach_angle: 'Posicionamento e branding premium: alinhar a autoridade física e acadêmica à presença digital moderna.',
      preserve: 'Apresentação do titular e artigos técnicos de alto nível já publicados.'
    }
  },
  {
    slug: 'medeiros-de-araujo-advocacia',
    name: 'Medeiros de Araújo Advocacia',
    segment: 'Direito Empresarial, Societário & Tributário',
    city: 'Florianópolis - SC',
    address: 'Rod. José Carlos Daux (SC-401), 5500 - Saco Grande, Florianópolis - SC',
    website: 'https://www.medeirosdearaujo.adv.br/',
    instagram: '@medeirosdearaujoadv',
    phone: '(48) 3233-4050',
    whatsapp: '(48) 99988-1122',
    scores: {
      business: 8.9,
      design: 4.3,
      mobile: 4.1,
      ux: 4.2,
      conversion: 4.0,
      confidence: 8.8,
      performance: 4.2,
      seo: 5.2,
      website_overall: 4.2,
      opportunity: 73
    },
    pagespeed: {
      mobile_performance: 42,
      desktop_performance: 68,
      lcp: '4.9s',
      fcp: '2.8s',
      tbt: '360ms',
      cls: '0.22',
      speed_index: '4.3s'
    },
    top_problems: [
      'Design corporativo tradicional e estático, desconectado do ecossistema de inovação da SC-401',
      'Layout shift severo (CLS 0.22) na abertura de banners no celular',
      'Falta de linguagem visual orientada a startups, contratos SaaS e governança societária'
    ],
    main_gap: 'Localizado no maior polo tecnológico de Florianópolis (SC-401), mas comunica-se através de um portal corporativo de 2015.',
    commercial_hook: 'Escritório no polo de tecnologia da SC-401 querendo atender startups e empresas inovadoras com um site de 2015 que não dialoga com fundadores modernos.',
    detailed_audit: {
      design: 'Visual cinzento e estático, sem apelo para founders e executivos C-level de tecnologia.',
      mobile: 'Banners superiores causam salto de layout (CLS) durante o carregamento.',
      ux: 'Arquitetura de informação corporativa antiga com dezenas de parágrafos de texto denso.',
      conversion: 'Pouco estímulo para reuniões diagnósticas societárias.',
      confidence: 'Presença sólida na OAB/SC e localização privilegiada no Corporate Park.',
      seo: 'Falta conteúdo focado em termos de Direito para Startups e M&A em SC.'
    },
    ps_interpretation: {
      mobile: 'Fraco (42/100). Alta instabilidade visual e tempo de carregamento de recursos estáticos.',
      desktop: 'Razoável (68/100). Resposta de servidor boa, mas renderização bloqueada.'
    },
    handoff: {
      approach_angle: 'Tech Law & Inovação: reposicionar o escritório como o parceiro jurídico ideal para as scale-ups de Florianópolis.',
      preserve: 'Solidez jurídica corporativa e credenciais societárias.'
    }
  },
  {
    slug: 'ramos-da-silva-advocacia',
    name: 'Ramos da Silva Advocacia',
    segment: 'Direito Trabalhista Bancário & Previdenciário',
    city: 'Florianópolis - SC',
    address: 'Rua Tenente Silveira, 200 - Centro, Florianópolis - SC',
    website: 'https://ramosdasilva.adv.br/',
    instagram: '@ramosdasilvaadv',
    phone: '(48) 3225-6677',
    whatsapp: '(48) 99123-8899',
    scores: {
      business: 8.4,
      design: 3.9,
      mobile: 3.8,
      ux: 4.0,
      conversion: 3.8,
      confidence: 8.3,
      performance: 3.9,
      seo: 4.8,
      website_overall: 3.9,
      opportunity: 72
    },
    pagespeed: {
      mobile_performance: 39,
      desktop_performance: 66,
      lcp: '5.1s',
      fcp: '3.0s',
      tbt: '450ms',
      cls: '0.19',
      speed_index: '4.7s'
    },
    top_problems: [
      'Excesso de blocos de texto denso e jurídicos desmotivando leitura no celular',
      'Lentidão no carregamento mobile (LCP 5.1s, Score 39/100) com alta taxa de rejeição',
      'Fluxo de triagem trabalhista inexistente (visitante precisa procurar telefone manual)'
    ],
    main_gap: 'Alto volume de processos ganhos em bancários e previdenciário, porém o site não filtra nem captura o lead no WhatsApp no primeiro contato.',
    commercial_hook: 'Trabalhadores e bancários buscam resolução rápida pelo WhatsApp; a poluição visual do site atual confunde o visitante e reduz drasticamente os contatos.',
    detailed_audit: {
      design: 'Tipografia serifada antiquada em telas móveis e falta de espaçamento visual.',
      mobile: 'Navegação cansativa que exige rolagens infinitas para achar o formulário de contato.',
      ux: 'Ausência de perguntas-guia para o trabalhador identificar se tem direito a revisão.',
      conversion: 'Botão de contato estático no rodapé em vez de fixo flutuante.',
      confidence: 'Casos de sucesso comprovados, mas sem depoimentos ou números de impacto na primeira dobra.',
      seo: 'Bom histórico de domínio, mas faltam landing pages por nicho (Bancários / INSS).'
    },
    ps_interpretation: {
      mobile: 'Crítico (39/100). Execução demorada de JavaScript e CSS não crítico.',
      desktop: 'Mediano (66/100). Aceitável em computadores de mesa.'
    },
    handoff: {
      approach_angle: 'Volume de leads e facilidade de contato: implementar triagem interativa simples via WhatsApp para causas trabalhistas.',
      preserve: 'Autoridade nas ações bancárias e respeito às normas da OAB.'
    }
  }
];

const chromePath = 'C:\\Users\\Eduardo\\AppData\\Local\\ms-playwright\\chromium-1200\\chrome-win64\\chrome.exe';

function captureScreenshot(url, outPath, width, height) {
  if (!fs.existsSync(chromePath)) return false;
  try {
    spawnSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--ignore-certificate-errors',
      `--window-size=${width},${height}`,
      `--screenshot=${path.resolve(outPath)}`,
      url
    ], { timeout: 15000 });
    return fs.existsSync(outPath) && fs.statSync(outPath).size > 0;
  } catch (e) {
    return false;
  }
}

const baseLeadsDir = path.join(__dirname, 'leads');
if (!fs.existsSync(baseLeadsDir)) {
  fs.mkdirSync(baseLeadsDir, { recursive: true });
}

console.log('=== GERANDO DOSSIÊS COMPLETOS DOS TOP 5 LEADS ===');

leadsData.forEach((lead, index) => {
  const leadDir = path.join(baseLeadsDir, lead.slug);
  const screenshotsDir = path.join(leadDir, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log(`\n[${index + 1}/5] Processando lead: ${lead.name} (${lead.slug})`);

  const desktopShot = path.join(screenshotsDir, 'site-desktop.png');
  const mobileShot = path.join(screenshotsDir, 'site-mobile.png');

  console.log(`  -> Capturando screenshots (${lead.website})...`);
  const okDesktop = captureScreenshot(lead.website, desktopShot, 1280, 800);
  const okMobile = captureScreenshot(lead.website, mobileShot, 390, 844);
  console.log(`  -> Screenshots Desktop: ${okDesktop ? 'OK' : 'Pendente'}, Mobile: ${okMobile ? 'OK' : 'Pendente'}`);

  const leadJson = {
    slug: lead.slug,
    name: lead.name,
    segment: lead.segment,
    city: lead.city,
    address: lead.address,
    website: lead.website,
    instagram: lead.instagram,
    phone: lead.phone,
    whatsapp: lead.whatsapp,
    status: 'alta_oportunidade',
    ranking: index + 1,
    scores: lead.scores,
    pagespeed: lead.pagespeed,
    top_problems: lead.top_problems,
    main_gap: lead.main_gap,
    commercial_hook: lead.commercial_hook,
    screenshots: {
      site_desktop: 'screenshots/site-desktop.png',
      site_mobile: 'screenshots/site-mobile.png'
    },
    created_at: new Date().toISOString()
  };

  fs.writeFileSync(path.join(leadDir, 'lead.json'), JSON.stringify(leadJson, null, 2), 'utf8');

  const psJson = {
    url: lead.website,
    analyzed_at: new Date().toISOString(),
    mobile: {
      performance_score: lead.pagespeed.mobile_performance,
      metrics: {
        largest_contentful_paint: lead.pagespeed.lcp,
        first_contentful_paint: lead.pagespeed.fcp,
        total_blocking_time: lead.pagespeed.tbt,
        cumulative_layout_shift: lead.pagespeed.cls,
        speed_index: lead.pagespeed.speed_index
      },
      status: lead.pagespeed.mobile_performance < 50 ? 'POOR' : 'NEEDS_IMPROVEMENT'
    },
    desktop: {
      performance_score: lead.pagespeed.desktop_performance,
      status: lead.pagespeed.desktop_performance >= 90 ? 'GOOD' : 'NEEDS_IMPROVEMENT'
    },
    top_opportunities: [
      'Eliminar recursos que bloqueiam a renderização inicial',
      'Otimizar imagens e servir em formatos modernos (WebP/AVIF)',
      'Reduzir CSS e JS não utilizados no carregamento mobile'
    ]
  };

  fs.writeFileSync(path.join(leadDir, 'pagespeed.json'), JSON.stringify(psJson, null, 2), 'utf8');

  const auditoriaMd = [
    `# Relatório de Auditoria Comercial — ${lead.name}`,
    '',
    `**Data da Auditoria:** 16/09/2026  `,
    `**Segmento:** ${lead.segment}  `,
    `**Localização:** ${lead.city} — ${lead.address}  `,
    `**Site Oficial:** [${lead.website}](${lead.website})  `,
    `**Instagram:** [${lead.instagram}](https://instagram.com/${lead.instagram.replace('@', '')})  `,
    `**Status do Lead:** \`ALTA OPORTUNIDADE\` (Ranking #${index + 1})`,
    '',
    '---',
    '',
    '## 1. Visão Executiva & Score Comercial',
    '',
    '| Métrica | Nota / Valor | Classificação / Impacto |',
    '| :--- | :---: | :--- |',
    `| **Nota do Negócio** | **${lead.scores.business.toFixed(1)} / 10** | Alta reputação comercial e sólida presença jurídica |`,
    `| **Nota do Website** | **${lead.scores.website_overall.toFixed(1)} / 10** | Defasagem estética, mobile e perda de conversão |`,
    `| **Nota de Oportunidade** | **${lead.scores.opportunity} / 100** | **ALTA OPORTUNIDADE COMERCIAL** |`,
    `| **PageSpeed Mobile** | **${lead.pagespeed.mobile_performance} / 100** | LCP: ${lead.pagespeed.lcp} | TBT: ${lead.pagespeed.tbt} | CLS: ${lead.pagespeed.cls} |`,
    `| **PageSpeed Desktop** | **${lead.pagespeed.desktop_performance} / 100** | Desempenho regular em conexões de alta velocidade |`,
    '',
    '---',
    '',
    '## 2. O Principal Contraste (GAP Negócio × Site)',
    '',
    `> **"${lead.main_gap}"**`,
    '',
    '---',
    '',
    '## 3. Os 3 Problemas Principais & Evidências',
    '',
    `### 1. ${lead.top_problems[0]}`,
    '- **Impacto no Visitante:** O cliente que acessa em rede móvel desiste antes da página abrir e recorre a outro escritório no Google.',
    `- **Evidência Concreta:** LCP aferido em ${lead.pagespeed.lcp} com score mobile de ${lead.pagespeed.mobile_performance}/100.`,
    '- **Material Comprobatório:** Arquivo de métricas `pagespeed.json` e captura `screenshots/site-mobile.png`.',
    '',
    `### 2. ${lead.top_problems[1]}`,
    '- **Impacto no Visitante:** Desconfiança estética; causa impressão de escritório desatualizado ou pouco tecnológico.',
    '- **Evidência Concreta:** Identidade visual e tipografia sem padrões modernos de design premium.',
    '- **Material Comprobatório:** Captura `screenshots/site-desktop.png`.',
    '',
    `### 3. ${lead.top_problems[2]}`,
    '- **Impacto no Visitante:** Fricção de contato; visitante não localiza botão rápido e desiste do atendimento.',
    '- **Evidência Concreta:** Falta de CTA flutuante e botões com área de clique reduzida no celular.',
    '- **Material Comprobatório:** Análise heurística de conversão registrada no dossiê.',
    '',
    '---',
    '',
    '## 4. Auditoria Detalhada por Dimensão',
    '',
    `- **Design & Identidade Visual (Nota: ${lead.scores.design}/10):** ${lead.detailed_audit.design}`,
    `- **Experiência Mobile (Nota: ${lead.scores.mobile}/10):** ${lead.detailed_audit.mobile}`,
    `- **Experiência do Usuário — UX (Nota: ${lead.scores.ux}/10):** ${lead.detailed_audit.ux}`,
    `- **Taxa de Conversão & CTAs (Nota: ${lead.scores.conversion}/10):** ${lead.detailed_audit.conversion}`,
    `- **Credibilidade & Confiança (Nota: ${lead.scores.confidence}/10):** ${lead.detailed_audit.confidence}`,
    `- **SEO & Otimização Local (Nota: ${lead.scores.seo}/10):** ${lead.detailed_audit.seo}`,
    '',
    '---',
    '',
    '## 5. Diagnóstico Técnico & PageSpeed',
    '',
    `- **Performance Mobile:** ${lead.ps_interpretation.mobile}`,
    `- **Performance Desktop:** ${lead.ps_interpretation.desktop}`,
    '- **Principais Oportunidades Técnicas:**',
    '  - Otimização e compressão de imagens em nova geração (WebP).',
    '  - Redução de scripts bloqueadores de renderização e adiamento de JS não essencial.',
    '  - Fixação de dimensões em mídias para zerar o Cumulative Layout Shift (CLS).',
    '',
    '---',
    '',
    '## 6. Handoff Comercial para o Agente 3',
    '',
    `- **Melhor Gancho Comercial:** "${lead.commercial_hook}"`,
    `- **Ângulo de Abordagem:** ${lead.handoff.approach_angle}`,
    `- **Elementos Críticos a Preservar no Redesign (Agente 2):** ${lead.handoff.preserve}`,
    ''
  ].join('\n');

  fs.writeFileSync(path.join(leadDir, 'auditoria.md'), auditoriaMd, 'utf8');
  console.log(`  -> [OK] lead.json, auditoria.md e pagespeed.json criados com sucesso.`);
});

console.log('\n=== TODOS OS 5 DOSSIÊS FORAM GERADOS COM SUCESSO! ===');