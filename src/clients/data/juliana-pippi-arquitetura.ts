import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: 'juliana-pippi-arquitetura',
  status: 'published',
  createdAt: '2026-09-20T21:44:00.000Z',
  updatedAt: new Date().toISOString(),
  business: {
    name: 'Juliana Pippi Arquitetura',
    legalName: 'JULIANA PIPPI ARQUITETURA & DESIGN LTDA',
    niche: 'Arquitetura Autoral de Alto Padrão e Interiores',
    city: 'Florianópolis',
    state: 'SC',
    logo: '/assets/clients/juliana-pippi-arquitetura/logo-white.png',
    address: 'Rua Orlando Phillippi, 100, Sala 303 - Corporate Park, Saco Grande, Florianópolis - SC',
    phone: '(48) 3222-1200',
    whatsapp: '(48) 99182-3400',
    email: 'adm@julianapippi.com.br',
    instagram: '@julianapippi'
  },
  theme: {
    primaryColor: '#0E1719',
    secondaryColor: '#162325',
    accentColor: '#91B8BB',
    backgroundColor: '#0A1012',
    textColor: '#E8F1F2',
    headingFont: 'Plus Jakarta Sans',
    bodyFont: 'Inter',
    borderRadius: 'md',
    mode: 'dark',
    enableCursor: true,
    backgroundEffect: 'mesh',
    enableParallax: true
  },
  pages: [
    {
      path: '',
      seo: {
        title: 'Juliana Pippi Arquitetura | Autoria, Coleções e Interiores em Florianópolis',
        description: 'Estúdio autoral de arquitetura comandado por Juliana Pippi em Florianópolis. Residências exclusivas em Jurerê Internacional, Lagoa da Conceição, Miami e design assinado.',
        ogImage: '/assets/clients/juliana-pippi-arquitetura/obra_jurere.jpg'
      },
      sections: [
        {
          id: 'header-main',
          type: 'header',
          variant: 'Header01',
          content: {
            logo: '/assets/clients/juliana-pippi-arquitetura/logo-white.png',
            navLinks: [
              { label: 'O Estúdio', href: '#sobre' },
              { label: 'Acervo Visual', href: '#galeria' },
              { label: 'Obras de Autor', href: '#obras' },
              { label: 'Filosofia', href: '#filosofia' },
              { label: 'Contato', href: '#contato' }
            ],
            ctaLabel: 'Diálogo Reservado'
          }
        },
        {
          id: 'hero-main',
          type: 'hero',
          variant: 'Hero07',
          content: {
            badge: 'Arquitetura Autoral & Design • Florianópolis',
            headline: 'A poesia do morar contemporâneo desenhada pela luz de Florianópolis.',
            subheadline: 'Juliana Pippi traduz paisagens litorâneas, memórias afetivas e rigor técnico em residências de arquitetura escultural em Santa Catarina e nos Estados Unidos.',
            primaryCtaLabel: 'Iniciar Diálogo Reservado',
            primaryCtaHref: 'https://wa.me/5548991823400',
            secondaryCtaLabel: 'Ver Acervo de Obras',
            secondaryCtaHref: '#obras',
            featuredImage: '/assets/clients/juliana-pippi-arquitetura/obra_jurere.jpg',
            trustMetric: { number: '20+ Anos', text: 'de Estúdio, Premiações e Coleções de Design' }
          }
        },
        {
          id: 'galeria',
          type: 'projects',
          variant: 'Showcase05',
          content: {
            badge: 'Sequência Visual',
            title: 'Imersão no Acervo de Obras',
            images: [
              { url: '/assets/clients/juliana-pippi-arquitetura/obra_jurere.jpg', caption: 'Residência Jurerê | DI — Florianópolis' },
              { url: '/assets/clients/juliana-pippi-arquitetura/obra_miami.jpg', caption: 'Apartamento Miami — Flórida (EUA)' },
              { url: '/assets/clients/juliana-pippi-arquitetura/obra_campo.jpg', caption: 'Casa de Campo | IS — Serra Catarinense' },
              { url: '/assets/clients/juliana-pippi-arquitetura/obra_lagoa.jpg', caption: 'Refúgio Lagoa | JF — Lagoa da Conceição' },
              { url: '/assets/clients/juliana-pippi-arquitetura/obra_vitra.jpg', caption: 'Edifício Vitra — Beira-Mar Norte' },
              { url: '/assets/clients/juliana-pippi-arquitetura/obra_casacor.jpg', caption: 'Instalação Autoral — Mostra CasaCor' }
            ]
          }
        },
        {
          id: 'obras',
          type: 'projects',
          variant: 'Showcase03',
          content: {
            badge: 'Catálogo de Realizações',
            title: 'Obras de Assinatura & Cronologia',
            works: [
              { title: 'Residência Jurerê | DI', year: '2025', location: 'Jurerê Internacional, Florianópolis', category: 'Residencial Alto Luxo' },
              { title: 'Apartamento Miami', year: '2024', location: 'Miami, Flórida (EUA)', category: 'Residência Internacional' },
              { title: 'Casa de Campo | IS', year: '2024', location: 'Serra Catarinense, SC', category: 'Refúgio de Montanha' },
              { title: 'Refúgio Lagoa | JF', year: '2023', location: 'Lagoa da Conceição, Florianópolis', category: 'Residência Náutica' },
              { title: 'Edifício Vitra', year: '2023', location: 'Beira-Mar Norte, Florianópolis', category: 'Edificação Contemporânea' },
              { title: 'Espaço Autoral PIPPI', year: '2022', location: 'Mostra Nacional SC / SP', category: 'Design de Autor & Coleção' }
            ]
          }
        },
        {
          id: 'sobre',
          type: 'about',
          variant: 'About01',
          content: {
            badge: 'A Arquiteta & Criadora',
            title: 'Design que ultrapassa o efêmero e estabelece conexão sensorial com quem vive o espaço.',
            description: 'Com sede em Florianópolis no complexo Corporate Park no Saco Grande, o estúdio comandado pela arquiteta e designer Juliana Pippi desenvolve projetos residenciais de grande porte, interiores requintados e criação de peças exclusivas através da sua marca autoral PIPPI. Presente em mostras de prestígio e com obras executadas no Brasil e exterior, sua assinatura alia pureza estética e bem-estar.',
            image: '/assets/clients/juliana-pippi-arquitetura/juliana_pippi.jpg',
            stats: [
              { number: '20+', label: 'Anos de Trajetória' },
              { number: '180+', label: 'Projetos Realizados' }
            ]
          }
        },
        {
          id: 'filosofia',
          type: 'benefits',
          variant: 'Features02',
          content: {
            badge: 'Filosofia Construtiva',
            title: 'Pilares do Nosso Estúdio',
            subtitle: 'O equilíbrio entre sensibilidade plástica, rigor técnico e curadoria de materiais.',
            items: [
              {
                tag: 'BIOFILIA LITORÂNEA',
                title: 'Luz Natural e Ventilação Marítima',
                description: 'Implantação consciente desenhada para capturar os ventos da Ilha e banhar os ambientes com iluminação natural suave.'
              },
              {
                tag: 'DESIGN ASSINADO',
                title: 'Coleção Autoral PIPPI & Curadoria',
                description: 'Mobiliário autoral desenvolvido sob medida para a marca PIPPI, integrado a peças consagradas do design moderno brasileiro.'
              },
              {
                tag: 'CONFORTO SENSORIAL',
                title: 'Texturas Nobres e Pedras Naturais',
                description: 'Uso de linho puro, mármores selecionados, concreto aparente e madeiras nativas com certificação de origem sustentável.'
              },
              {
                tag: 'PRECISÃO EXECUTIVA',
                title: 'Acompanhamento Minucioso de Obra',
                description: 'Detalhamento executivo rigoroso para garantir que a obra finalizada seja a tradução exata e impecável do projeto conceitual.'
              }
            ]
          }
        },
        {
          id: 'contato',
          type: 'contact',
          variant: 'Contact01',
          content: {
            badge: 'Diálogo Reservado',
            title: 'Agende uma reunião com Juliana Pippi Arquitetura',
            formTitle: 'Iniciar Alinhamento Conceitual',
            formSubtitle: 'Preencha os campos abaixo para conversar diretamente com a diretoria técnica do nosso estúdio.'
          }
        },
        {
          id: 'cta-final',
          type: 'cta',
          variant: 'CTA04',
          content: {
            badge: 'Atendimento Exclusivo',
            headline: 'Pronta para materializar um refúgio de arquitetura autoral?',
            subheadline: 'Recebemos clientes no Corporate Park em Florianópolis ou por videoconferência reservada para projetos no Brasil e no exterior.',
            primaryCtaLabel: 'Falar com o Estúdio no WhatsApp',
            primaryCtaHref: 'https://wa.me/5548991823400',
            statsHighlight: { value: 'Florianópolis & Miami', label: 'Projetos Autorais de Alta Exclusividade' }
          }
        },
        {
          id: 'footer-main',
          type: 'footer',
          variant: 'Footer08',
          content: {
            logo: '/assets/clients/juliana-pippi-arquitetura/logo-white.png',
            disclaimer: 'Juliana Pippi Arquitetura & Design Ltda. Todos os direitos reservados. Projetos residenciais, interiores e direção criativa.'
          }
        }
      ]
    }
  ]
};

export default client;
