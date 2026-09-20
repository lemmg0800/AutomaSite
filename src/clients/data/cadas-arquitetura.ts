import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: 'cadas-arquitetura',
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: 'Cadas Arquitetura',
    legalName: 'CADAS ARQUITETURA E INTERIORES LTDA',
    niche: 'Arquitetura Residencial de Alto Padrão e Interiores',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Rua Garcia D\'Ávila, 173 - Ipanema, Rio de Janeiro - RJ',
    phone: '(21) 2512-8877',
    whatsapp: '(21) 99877-2201',
    email: 'contato@cadas.com.br',
    instagram: '@cadas_arquitetura'
  },
  theme: {
    primaryColor: '#1A1816',
    secondaryColor: '#2C2825',
    accentColor: '#C4A482',
    backgroundColor: '#0F0E0D',
    textColor: '#F5F2EB',
    headingFont: 'Playfair Display',
    bodyFont: 'Plus Jakarta Sans',
    borderRadius: 'md',
    mode: 'dark',
    enableCursor: false,
    backgroundEffect: 'none',
    enableParallax: true
  },
  pages: [
    {
      path: '',
      seo: {
        title: 'Cadas Arquitetura | Arquitetura de Alto Padrão em Ipanema - RJ',
        description: "Residências e coberturas exclusivas com integração absoluta com a paisagem carioca.",
        ogImage: '/assets/clients/cadas-arquitetura/obra_1.jpg'
      },
      sections: [
        {
          id: 'header-cadas',
          type: 'header',
          variant: 'Header02',
          content: {
            announcement: 'Atendimento exclusivo em Ipanema, Leblon e Joá',
            navLinks: [
              { label: 'Projetos', href: '#projetos' },
              { label: 'Filosofia', href: '#escritorio' },
              { label: 'Especialidades', href: '#especialidades' },
              { label: 'Diferenciais', href: '#diferenciais' },
              { label: 'FAQ', href: '#faq' }
            ],
            ctaLabel: 'Iniciar Diálogo'
          }
        },
        {
          id: 'hero-cadas',
          type: 'hero',
          variant: 'Hero01',
          content: {
            badge: 'Arquitetura de Autor & Alto Padrão no RJ',
            headline: "Cadas Arquitetura — Arquitetura de Autor no Rio de Janeiro",
            subheadline: "Residências e coberturas exclusivas com integração absoluta com a paisagem carioca.",
            primaryCtaLabel: 'Conversar com Cadas Abranches',
            secondaryCtaLabel: 'Conhecer Projetos',
            secondaryCtaHref: '#projetos',
            imageUrl: '/assets/clients/cadas-arquitetura/obra_1.jpg',
            trustPoints: [
              'Mais de 35 anos de trajetória em Ipanema',
              'Projetos premiados na CasaCor Rio',
              'Acompanhamento milimétrico de ponta a ponta'
            ]
          }
        },
        {
          id: 'about-cadas',
          type: 'about',
          variant: 'About01',
          content: {
            badge: 'Filosofia & Assinatura',
            title: 'Espaços que dialogam com a paisagem e elevam o viver.',
            text1: 'Fundado por Cadas Abranches, o escritório alia o modernismo carioca à marcenaria artesanal, pedras nobres e integração total com o horizonte.',
            text2: 'Cada projeto é concebido como uma obra de arte viva, desenhada sob medida para famílias que exigem privacidade, excelência e sofisticação sem excessos.',
            highlights: [
              { value: '35+', label: 'Anos de Tradição' },
              { value: '280+', label: 'Projetos Entregues' },
              { value: '100%', label: 'Execução Autoral' }
            ],
            whyChoose: [
              'Gestão completa de cronograma e compatibilização estrutural',
              'Curadoria exclusiva de materiais, mobiliário e iluminação cênica',
              'Rigor milimétrico e valorização patrimonial extraordinária'
            ]
          }
        },
        {
          id: 'projects-cadas',
          type: 'projects',
          variant: 'Projects01',
          content: {
            title: 'Obras & Residências de Assinatura',
            subtitle: 'Uma seleção de residências costeiras, coberturas e refúgios na serra com nossa curadoria.',
            projects: [
              {
                title: 'Villa Joá Cliff',
                category: 'Residência Unifamiliar - Joá',
                description: 'Casa suspensa sobre a rocha com vista panorâmica do oceano, brises de cumaru e concreto pigmentado.'
              },
              {
                title: 'Penthouse Vieira Souto',
                category: 'Cobertura Duplex - Ipanema',
                description: 'Integração de 600m² com piscina de borda infinita em mármore travertino navona e painéis vazados.'
              },
              {
                title: 'Refúgio Araras',
                category: 'Casa de Campo - Petrópolis',
                description: 'Vidro estrutural, lareiras suspensas e rochas naturais integradas ao ecossistema da serra fluminense.'
              }
            ]
          }
        },
        {
          id: 'services-cadas',
          type: 'services',
          variant: 'Services01',
          content: {
            badge: 'Serviços & Atuação',
            title: 'Soluções integradas de arquitetura, interiores e gestão de obra.',
            subtitle: 'Do primeiro croqui à entrega das chaves com o mobiliário posicionado.',
            services: [
              {
                icon: '📐',
                title: 'Arquitetura Residencial Exclusiva',
                description: 'Projetos completos para novas construções, retrofit e coberturas com modelagem BIM avançada.',
                cta: 'Consultar Projeto'
              },
              {
                icon: '✨',
                title: 'Design de Interiores & Curadoria',
                description: 'Desenho de marcenaria sob medida, seleção de arte contemporânea e iluminação de atmosfera.',
                cta: 'Saber Mais'
              },
              {
                icon: '🏛️',
                title: 'Compatibilização & Fiscalização de Obra',
                description: 'Coordenação minuciosa de engenharias, cálculo estrutural e acabamentos para precisão milimétrica.',
                cta: 'Falar com Arquiteto'
              }
            ]
          }
        },
        {
          id: 'benefits-cadas',
          type: 'benefits',
          variant: 'Benefits01',
          content: {
            title: 'Por Que Escolher Cadas Arquitetura',
            subtitle: 'Tranquilidade executiva para quem valoriza seu tempo e patrimônio.',
            items: [
              {
                icon: '💎',
                title: 'Atendimento Proprietário',
                description: 'Interação direta com os sócios titulares em todas as reuniões decisórias de projeto.'
              },
              {
                icon: '🌿',
                title: 'Bioclimática Carioca',
                description: 'Aproveitamento supremo da ventilação cruzada e proteção solar para conforto térmico natural.'
              },
              {
                icon: '🛡️',
                title: 'Zero Desvio de Orçamento',
                description: 'Orçamentação analítica e memorial descritivo blindado contra aditivos imprevisíveis.'
              }
            ]
          }
        },
        {
          id: 'testimonials-cadas',
          type: 'testimonials',
          variant: 'Testimonials01',
          content: {
            title: 'A Confiança de Quem Vive em Nossos Projetos',
            items: [
              {
                quote: 'O Cadas conseguiu transformar nosso terreno complexo no Joá em uma das casas mais impressionantes que já vi. A luz entra perfeita a qualquer hora do dia.',
                author: 'Roberto e Cecília M.',
                role: 'Proprietários Villa Joá'
              },
              {
                quote: 'A seriedade com que conduziram a reforma da nossa cobertura em Ipanema foi impecável. Entrega no prazo acordado e acabamento sem defeitos.',
                author: 'Dr. Leonardo Sampaio',
                role: 'Proprietário Penthouse Vieira Souto'
              }
            ]
          }
        },
        {
          id: 'faq-cadas',
          type: 'faq',
          variant: 'FAQ01',
          content: {
            title: 'Dúvidas Frequentes sobre Nossos Serviços',
            subtitle: 'Tudo o que você precisa saber antes de iniciar seu projeto.',
            items: [
              {
                question: 'Como funciona o processo de contratação e início do projeto?',
                answer: 'Iniciamos com uma reunião de alinhamento conceitual e visita técnica ao terreno ou imóvel. Após aprovação da proposta, desenvolvemos o estudo preliminar com maquetes 3D e amostras de materiais.'
              },
              {
                question: 'O escritório também executa ou fiscaliza a obra?',
                answer: 'Realizamos a coordenação de projetos complementares e o acompanhamento técnico da obra, garantindo que cada detalhe desenhado seja executado com exatidão artesanal.'
              },
              {
                question: 'Vocês atendem apenas a cidade do Rio de Janeiro?',
                answer: 'Atuamos fortemente na Zona Sul, Barra e Joá, além de projetos residenciais em Búzios, Angra dos Reis, Petrópolis e São Paulo.'
              }
            ]
          }
        },
        {
          id: 'cta-cadas',
          type: 'cta',
          variant: 'CTA01',
          content: {
            headline: 'Dê vida ao seu próximo refúgio com Cadas Arquitetura.',
            subheadline: 'Agende uma conversa reservada com nossa diretoria criativa para discutir o seu projeto.',
            buttonLabel: 'Agendar Consulta por WhatsApp'
          }
        },
        {
          id: 'footer-cadas',
          type: 'footer',
          variant: 'Footer01',
          content: {}
        }
      ]
    }
  ]
};

export default client;
