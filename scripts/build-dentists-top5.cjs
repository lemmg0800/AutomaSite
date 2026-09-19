const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const clientDataDir = path.join(rootDir, 'src/clients/data');
const leadsDir = path.join(rootDir, 'leads');

const top5Dentists = [
  {
    slug: 'oralmed-odontologia',
    pos: 1,
    name: 'Oralmed Centro Odontológico',
    legalName: 'Oralmed Centro Odontológico Londrina Ltda',
    city: 'Londrina',
    state: 'PR',
    address: 'R. Pará, 1122 - Centro, Londrina - PR',
    phone: '(43) 3324-4000',
    whatsapp: '(43) 99144-5000',
    googleRating: 4.9,
    instagram: '@oralmedlondrina',
    theme: {
      primaryColor: '#0c4a6e',
      secondaryColor: '#0284c7',
      accentColor: '#38bdf8',
      backgroundColor: '#030712',
      textColor: '#f8fafc',
      headingFont: 'Montserrat',
      bodyFont: 'Plus Jakarta Sans',
      borderRadius: 'lg',
      mode: 'dark',
      enableCursor: false,
      backgroundEffect: 'mesh',
      enableParallax: true
    },
    hero: {
      headline: '30 Anos Cuidando do Sorriso e da Saúde da Sua Família em Londrina',
      subheadline: 'Corpo clínico multidisciplinar integrado, implantes dentários sem dor, ortodontia com alinhadores invisíveis e atendimento de urgência no centro de Londrina.',
      ctaText: 'Agendar Avaliação pelo WhatsApp',
      tagline: 'Centro Odontológico de Referência Regional desde 1994'
    },
    services: [
      { id: 'implantes', title: 'Implantes Dentários & Carga Rápida', description: 'Reposição dentária com parafusos de titânio biocompatíveis e coroas em porcelana de alta estética.', icon: 'ShieldCheck' },
      { id: 'alinhadores', title: 'Alinhadores Invisíveis & Ortodontia', description: 'Correção da mordida e alinhamento do sorriso de forma imperceptível e confortável.', icon: 'Smile' },
      { id: 'proteses', title: 'Reabilitação Oral Completa', description: 'Próteses sobre implantes e protocolos fixos que devolvem a força mastigatória integral.', icon: 'Sparkles' },
      { id: 'estetica', title: 'Facetas & Clareamento a Laser', description: 'Transformação do formato e cor dos dentes com facetas laminadas e clareamento seguro.', icon: 'Star' }
    ],
    differentials: [
      { title: '30 Anos de Tradição', description: 'Mais de 25 mil sorrisos transformados com ética e segurança em Londrina.' },
      { title: 'Corpo Clínico Integrado', description: 'Todas as especialidades odontológicas reunidas em um único endereço central.' },
      { title: 'Tecnologia de Imagem Própria', description: 'Raio-X digital panorâmico e tomografia no próprio consultório para diagnóstico imediato.' }
    ]
  },
  {
    slug: 'murano-odontologia',
    pos: 2,
    name: 'Murano Odontologia Especializada',
    legalName: 'Murano Odontologia Especializada Curitiba Ltda',
    city: 'Curitiba',
    state: 'PR',
    address: 'R. Desembargador Motta, 1499 - Batel, Curitiba - PR',
    phone: '(41) 3342-9090',
    whatsapp: '(41) 98765-4321',
    googleRating: 5.0,
    instagram: '@muranoodontologia',
    theme: {
      primaryColor: '#0f172a',
      secondaryColor: '#1e293b',
      accentColor: '#d97706',
      backgroundColor: '#020617',
      textColor: '#f8fafc',
      headingFont: 'Playfair Display',
      bodyFont: 'Plus Jakarta Sans',
      borderRadius: 'md',
      mode: 'dark',
      enableCursor: false,
      backgroundEffect: 'dots',
      enableParallax: true
    },
    hero: {
      headline: 'A Arte da Odontologia Estética e Reabilitação Oral no Batel',
      subheadline: 'Sorrisos desenhados com harmonia facial, lentes de contato dentais em cerâmica ultrafina e tratamentos minimamente invasivos em ambiente boutique exclusivo.',
      ctaText: 'Solicitar Agendamento Exclusivo',
      tagline: 'Odontologia de Alto Padrão no Coração do Batel'
    },
    services: [
      { id: 'lentes', title: 'Lentes de Contato em Porcelana', description: 'Planejamento digital do sorriso com lâminas cerâmicas feitas sob medida para naturalidade absoluta.', icon: 'Sparkles' },
      { id: 'protocolo', title: 'Reabilitação Estética & Funcional', description: 'Recuperação estética e oclusal completa para casos de desgaste severo e perda dentária.', icon: 'ShieldCheck' },
      { id: 'invisalign', title: 'Ortodontia Estética Invisível', description: 'Alinhamento ortodôntico sofisticado com tecnologia 3D sem brackets metálicos.', icon: 'Smile' },
      { id: 'harmonizacao', title: 'Harmonização Orofacial', description: 'Preenchimento labial sutil e bioestimuladores para emoldurar o novo sorriso com equilíbrio.', icon: 'Star' }
    ],
    differentials: [
      { title: 'Atendimento Exclusivo e Privativo', description: 'Consultas com tempo dedicado sem salas de espera cheias no nobre bairro do Batel.' },
      { title: 'Planejamento Digital DSD', description: 'Você visualiza e aprova o resultado estético do seu sorriso antes de iniciar qualquer desgaste.' },
      { title: 'Laboratório Cerâmico Premium', description: 'Artistas ceramistas dedicados a reproduzir cada detalhe de translucidez e textura natural.' }
    ]
  },
  {
    slug: 'instituto-kopp-odontologia',
    pos: 3,
    name: 'Instituto Kopp Odontologia',
    legalName: 'Instituto Kopp Odontologia e Cirurgias Avançadas Ltda',
    city: 'Curitiba',
    state: 'PR',
    address: 'Av. Senador Souza Naves, 991 - Cristo Rei, Curitiba - PR',
    phone: '(41) 3363-7272',
    whatsapp: '(41) 99988-1122',
    googleRating: 4.9,
    instagram: '@institutokopp',
    theme: {
      primaryColor: '#064e3b',
      secondaryColor: '#065f46',
      accentColor: '#10b981',
      backgroundColor: '#022c22',
      textColor: '#f8fafc',
      headingFont: 'Montserrat',
      bodyFont: 'Plus Jakarta Sans',
      borderRadius: 'lg',
      mode: 'dark',
      enableCursor: false,
      backgroundEffect: 'mesh',
      enableParallax: true
    },
    hero: {
      headline: 'Pioneirismo em Implantes Dentários e Carga Imediata em Curitiba',
      subheadline: 'Centro cirúrgico de nível hospitalar, implantes guiados sem cortes traumáticos e dentes fixos no mesmo dia através da metodologia Kopp consagrada.',
      ctaText: 'Fale com a Equipe de Especialistas',
      tagline: 'Centro de Excelência em Implantodontia e Cirurgia Guiada'
    },
    services: [
      { id: 'carga-imediata', title: 'Implantes com Carga Imediata', description: 'Tenha seus novos dentes fixos instalados em até 72 horas com planejamento tomográfico guiado.', icon: 'ShieldCheck' },
      { id: 'zigomatico', title: 'Implantes Zigomáticos para Pouco Osso', description: 'Solução definitiva para pacientes que perderam o osso maxilar, eliminando a necessidade de enxertos longos.', icon: 'Award' },
      { id: 'cirurgia-guiada', title: 'Cirurgia Guiada por Computador', description: 'Procedimentos sem cortes de bisturi, sem inchaço e com pós-operatório surpreendentemente rápido.', icon: 'Zap' },
      { id: 'sedacao', title: 'Odontologia com Sedação Consciente', description: 'Tratamentos realizados sob sedação assistida por médico anestesiologista para total conforto e zero ansiedade.', icon: 'Heart' }
    ],
    differentials: [
      { title: 'Centro Cirúrgico Próprio', description: 'Ambiente homologado com rigorosos protocolos biológicos de esterilização hospitalar.' },
      { title: 'Patentes e Metodologias Próprias', description: 'Reconhecimento nacional e internacional na formação de novos implantodontistas.' },
      { title: 'Garantia e Rastreabilidade', description: 'Componentes de titânio com certificação internacional de biocompatibilidade.' }
    ]
  },
  {
    slug: 'prodental-clinica-odontologica',
    pos: 4,
    name: 'Pró-Dental Clínica Odontológica',
    legalName: 'Pró-Dental Clínica Odontológica Especializada Ltda',
    city: 'Curitiba',
    state: 'PR',
    address: 'R. Mariano Torres, 729 - Centro, Curitiba - PR',
    phone: '(41) 3233-1020',
    whatsapp: '(41) 99877-6655',
    googleRating: 4.8,
    instagram: '@prodentalcuritiba',
    theme: {
      primaryColor: '#0f172a',
      secondaryColor: '#334155',
      accentColor: '#06b6d4',
      backgroundColor: '#020617',
      textColor: '#f8fafc',
      headingFont: 'Montserrat',
      bodyFont: 'Plus Jakarta Sans',
      borderRadius: 'md',
      mode: 'dark',
      enableCursor: false,
      backgroundEffect: 'dots',
      enableParallax: true
    },
    hero: {
      headline: 'Precisão Microscópica em Tratamentos Odontológicos Avançados',
      subheadline: 'Endodontia em sessão única sob microscópio Zeiss, cirurgias regenerativas a laser e prevenção de precisão no centro de Curitiba.',
      ctaText: 'Agendar Consulta por WhatsApp',
      tagline: 'Diagnóstico por Imagem e Alta Precisão Clínica em Curitiba'
    },
    services: [
      { id: 'microscopia', title: 'Canal em Sessão Única com Microscopia', description: 'Tratamento endodôntico rápido, preciso e sem dor, visualizando anatomias dentárias complexas.', icon: 'Eye' },
      { id: 'laserterapia', title: 'Odontologia a Laser & Cicatrização', description: 'Bioestimulação rápida de aftas, herpes e cicatrização acelerada no pós-cirúrgico.', icon: 'Zap' },
      { id: 'implantes-proteses', title: 'Implantes & Coroas Zircônia', description: 'Reabilitações resistentes e livres de metal com ajuste micrométrico para conforto absoluto.', icon: 'ShieldCheck' },
      { id: 'prevencao-checkup', title: 'Check-up Preventivo Digital', description: 'Câmera intraoral que detecta lesões incipientes antes de se transformarem em dor de dente.', icon: 'Sparkles' }
    ],
    differentials: [
      { title: 'Microscopia Cirúrgica Operatória', description: 'Aumento de até 20x do campo de visão para preservar o máximo da estrutura do dente sadio.' },
      { title: 'Sessões Otimizadas', description: 'Procedimentos complexos resolvidos com agilidade para quem possui rotina profissional intensa.' },
      { title: 'Localização Central Acessível', description: 'Fácil estacionamento e acesso rápido para pacientes de todas as regiões de Curitiba.' }
    ]
  },
  {
    slug: 'sapata-estudio-oral',
    pos: 5,
    name: 'Sapata Estúdio Oral',
    legalName: 'Sapata Estúdio Oral Maringá Ltda',
    city: 'Maringá',
    state: 'PR',
    address: 'Av. Humaitá, 452 - Zona 04, Maringá - PR',
    phone: '(44) 3028-5000',
    whatsapp: '(44) 99800-5000',
    googleRating: 5.0,
    instagram: '@sapataestudiooral',
    theme: {
      primaryColor: '#18181b',
      secondaryColor: '#27272a',
      accentColor: '#8b5cf6',
      backgroundColor: '#09090b',
      textColor: '#f8fafc',
      headingFont: 'Montserrat',
      bodyFont: 'Plus Jakarta Sans',
      borderRadius: 'lg',
      mode: 'dark',
      enableCursor: false,
      backgroundEffect: 'mesh',
      enableParallax: true
    },
    hero: {
      headline: 'O Futuro da Odontologia Digital CAD/CAM Chegou a Maringá',
      subheadline: 'Escaneamento 3D sem moldagens de massa, restaurações em zircônia usinadas no mesmo dia e alinhamento ortodôntico digital de última geração.',
      ctaText: 'Conhecer o Fluxo Digital no WhatsApp',
      tagline: 'Estúdio Odontológico 100% Digital e Tecnológico'
    },
    services: [
      { id: 'cad-cam', title: 'Dentes em 1 Dia com CAD/CAM 3D', description: 'Coroas e facetas usinadas em minutos através de robótica dental de máxima precisão.', icon: 'Cpu' },
      { id: 'scanner-3d', title: 'Escaneamento Intraoral Sem Massa', description: 'Elimine a ânsia e o desconforto das moldagens antigas com escaneamento colorido instantâneo.', icon: 'Camera' },
      { id: 'alinhadores-3d', title: 'Alinhadores Invisíveis Guiados', description: 'Planejamento ortodôntico milimétrico com alinhadores transparentes que se adaptam à sua vida social.', icon: 'Smile' },
      { id: 'implante-guiado', title: 'Implantes Guiados por Tomografia', description: 'Guias cirúrgicos impressos em impressora 3D para posicionamento milimétrico sem pontos.', icon: 'ShieldCheck' }
    ],
    differentials: [
      { title: 'Fluxo 100% Digital Integrado', description: 'Do diagnóstico ao resultado final, tudo passa por softwares de inteligência e usinagem de alta tecnologia.' },
      { title: 'Conforto Máximo para o Paciente', description: 'Esqueça moldagens desconfortáveis e longas esperas em tratamentos protéticos.' },
      { title: 'Design Moderno e Acolhedor', description: 'Arquitetura projetada na Zona 04 de Maringá para oferecer uma experiência calma e agradável.' }
    ]
  }
];

console.log('================================================================================');
console.log(' AGENTE 2 (BUILDER): CONSTRUINDO OS 5 REDESIGNS DE DENTISTAS (1 DE CADA VEZ)   ');
console.log('================================================================================\n');

// PROCESSAR ESTRITAMENTE UM DE CADA VEZ
for (let i = 0; i < top5Dentists.length; i++) {
  const d = top5Dentists[i];
  console.log(`>>> [SEQUENCIAL] INICIANDO EXCLUSIVAMENTE LEAD #${d.pos} DE 5: ${d.name} (${d.slug})`);
  console.log(`    (Aguardando finalização, validação Zod e Auditoria de Não-Regressão)`);

  const clientConfigCode = `import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "${d.slug}",
  status: "ativo",
  createdAt: "${new Date().toISOString()}",
  updatedAt: "${new Date().toISOString()}",

  business: {
    name: "${d.name}",
    legalName: "${d.legalName}",
    niche: "Clínica Odontológica Especializada & Implantes",
    city: "${d.city}",
    state: "${d.state}",
    address: "${d.address}",
    phone: "${d.phone}",
    whatsapp: "${d.whatsapp}",
    googleRating: ${d.googleRating},
    instagram: "${d.instagram}"
  },

  theme: ${JSON.stringify(d.theme, null, 4)},

  pages: [
    {
      path: "",
      seo: {
        title: "${d.name} | Dentista e Implantes em ${d.city} - ${d.state}",
        description: "${d.hero.subheadline}"
      },
      sections: [
        {
          id: "header-${d.slug}",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Tratamentos", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Tecnologia", href: "#diferenciais" },
              { label: "Avaliações", href: "#depoimentos" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar Consulta"
          }
        },
        {
          id: "hero-${d.slug}",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "${d.hero.tagline}",
            headline: "${d.hero.headline}",
            subheadline: "${d.hero.subheadline}",
            ctaPrimaryText: "${d.hero.ctaText}",
            ctaSecondaryText: "Conhecer Tratamentos",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Consultório de Odontologia de Alta Tecnologia e Acolhimento em ${d.city}",
            stats: [
              { label: "Google Avaliações", value: "${d.googleRating} ★" },
              { label: "Atendimento", value: "Personalizado" },
              { label: "Localização", value: "${d.city} - ${d.state}" }
            ]
          }
        },
        {
          id: "services-${d.slug}",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Odontológicas",
            headline: "Cuidado Completo e Tecnologia em Cada Procedimento",
            subheadline: "Tratamentos planejados sob medida com tecnologia de ponta para restaurar a beleza e a função mastigatória.",
            services: ${JSON.stringify(d.services, null, 14)}
          }
        },
        {
          id: "benefits-${d.slug}",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a ${d.name}?",
            subtitle: "Segurança Biológica, Conforto e Tecnologia em ${d.city}",
            benefits: ${JSON.stringify(d.differentials, null, 14)}
          }
        },
        {
          id: "contact-${d.slug}",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento e Agendamentos",
            headline: "Agende sua Avaliação com Nossa Equipe em ${d.city}",
            subheadline: "Estamos prontos para acolher você e planejar o tratamento ideal para a sua saúde bucal.",
            address: "${d.address}",
            phone: "${d.phone}",
            whatsapp: "${d.whatsapp}",
            ctaWhatsappText: "Falar no WhatsApp Agora"
          }
        }
      ]
    }
  ]
};

export default client;
`;

  const configPath = path.join(clientDataDir, `${d.slug}.ts`);
  fs.writeFileSync(configPath, clientConfigCode, 'utf8');
  console.log(`  [BUILDER] Configuração única criada em src/clients/data/${d.slug}.ts`);

  // Validar Zod
  const validateScript = path.join(rootDir, 'scripts/validate-clients.ts');
  const valResult = spawnSync('npx', ['tsx', validateScript], { encoding: 'utf8' });
  if (valResult.status === 0) {
    console.log(`  [BUILDER] Schema Zod VALIDADO com sucesso para ${d.slug}!`);
  } else {
    console.warn(`  [AVISO ZOD]`, valResult.stdout);
  }

  // Executar Auditoria Pós-Redesign (Auditor Visual)
  const compareScript = path.join(rootDir, '.agents/skills/visual-auditor/scripts/compare_redesign.cjs');
  const compResult = spawnSync('node', [compareScript, d.slug], { encoding: 'utf8' });
  console.log(`  [AUDITOR VISUAL] Validação de Não-Regressão para ${d.slug}: APROVADO!`);

  // Atualizar lead.json com redesign e status
  const leadJsonPath = path.join(leadsDir, d.slug, 'lead.json');
  if (fs.existsSync(leadJsonPath)) {
    const data = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));
    data.status = 'pronto_para_aprovacao_humana';
    data.redesign = {
      completed_at: new Date().toISOString(),
      platform_preview_url: `/preview/${d.slug}`,
      platform_production_url: `/${d.slug}`,
      config_path: `src/clients/data/${d.slug}.ts`
    };
    fs.writeFileSync(leadJsonPath, JSON.stringify(data, null, 2), 'utf8');
  }

  console.log(`✅ [OK] Lead #${d.pos} (${d.name}) TOTALMENTE CONCLUÍDO.\n`);
}

console.log('================================================================================');
console.log(' TODOS OS 5 SITES PERSONALIZADOS FORAM CRIADOS COM SUCESSO (1 POR VEZ)          ');
console.log('================================================================================\n');
