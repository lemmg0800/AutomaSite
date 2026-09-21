import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: 'juliana-pippi-arquitetura',
  status: 'published',
  createdAt: '2026-09-21T00:44:31.059Z',
  updatedAt: '2026-09-21T00:44:31.059Z',
  business: {
    name: 'Juliana Pippi Arquitetura',
    legalName: 'JULIANA PIPPI ARQUITETURA & DESIGN LTDA',
    niche: 'Arquitetura Autoral de Alto Padrão e Interiores',
    city: 'Florianópolis',
    state: 'SC',
    address: 'Rua Orlando Phillippi, 100, Sala 303 - Saco Grande, Florianópolis - SC',
    phone: '(48) 3222-1200',
    whatsapp: '(48) 99182-3400',
    email: 'adm@julianapippi.com.br',
    instagram: '@julianapippi'
  },
  theme: {
    primaryColor: '#161513',
    secondaryColor: '#2A2622',
    accentColor: '#C4A482',
    backgroundColor: '#121110',
    textColor: '#F5F2EB',
    headingFont: 'Playfair Display',
    bodyFont: 'Plus Jakarta Sans',
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
        title: 'Juliana Pippi Arquitetura | Arquitetura Autoral & Design de Interiores em Florianópolis',
        description: 'Estúdio de arquitetura comandado por Juliana Pippi em Florianópolis. Residências exclusivas em Jurerê Internacional, Lagoa da Conceição, Miami e design assinado.',
        ogImage: '/assets/clients/juliana-pippi-arquitetura/obra_jurere.jpg'
      },
      sections: [
        {
          id: 'header-main',
          type: 'header',
          variant: 'Header05',
          content: {
            navLinks: [
              { label: 'O Estúdio', href: '#sobre' },
              { label: 'Obras de Assinatura', href: '#projetos' },
              { label: 'Filosofia', href: '#filosofia' },
              { label: 'Diálogo Reservado', href: '#contato' }
            ],
            ctaLabel: 'Agendar Reunião',
            ctaHref: 'https://wa.me/5548991823400'
          }
        },
        {
          id: 'hero-main',
          type: 'hero',
          variant: 'Hero04',
          content: {
            badge: 'Arquitetura Autoral & Design • Florianópolis',
            headline: 'A alma do morar contemporâneo esculpida pela luz de Florianópolis.',
            subheadline: 'À frente de um dos escritórios mais premiados de Santa Catarina, a arquiteta e designer Juliana Pippi transforma memórias, texturas e paisagens em residências de assinatura inconfundível.',
            primaryCtaLabel: 'Iniciar Diálogo Reservado',
            primaryCtaHref: 'https://wa.me/5548991823400',
            secondaryCtaLabel: 'Ver Acervo de Obras',
            secondaryCtaHref: '#projetos',
            image: '/assets/clients/juliana-pippi-arquitetura/obra_jurere.jpg',
            imageAlt: 'Residência Jurerê Internacional por Juliana Pippi Arquitetura',
            imageCaption: 'Obra de Assinatura • Jurerê Internacional, Florianópolis',
            stats: [
              { value: '20+', label: 'Anos de Estúdio' },
              { value: '180+', label: 'Projetos Autorais' },
              { value: 'SC & EUA', label: 'Projetos Globais' }
            ]
          }
        },
        {
          id: 'showcase-main',
          type: 'projects',
          variant: 'Showcase01',
          content: {
            badge: 'Projetos Selecionados',
            title: 'Obras de Assinatura & Coleções',
            description: 'Cada espaço nasce do encontro entre a natureza litorânea, materiais nobres e uma curadoria minuciosa de arte e design autoral.',
            ctaText: 'Solicitar Apresentação Completa',
            ctaHref: 'https://wa.me/5548991823400',
            items: [
              {
                title: 'Residência Jurerê | DI',
                category: 'Arquitetura Residencial de Alto Luxo',
                location: 'Jurerê Internacional • Florianópolis',
                description: 'Integração plena entre os espaços sociais e o litoral catarinense, com iluminação natural zenital e caixilhos esculturais.',
                image: '/assets/clients/juliana-pippi-arquitetura/obra_jurere.jpg',
                tags: ['Jurerê Internacional', 'Madeiras Nobres', 'Luz Natural']
              },
              {
                title: 'Apartamento Miami',
                category: 'Residência Internacional',
                location: 'Miami • Flórida (EUA)',
                description: 'Elegância contemporânea com o frescor tropical brasileiro adaptado aos horizontes da baía de Miami.',
                image: '/assets/clients/juliana-pippi-arquitetura/obra_miami.jpg',
                tags: ['Miami', 'Design Cosmopolita', 'Mármores Selecionados']
              },
              {
                title: 'Casa de Campo | IS',
                category: 'Refúgio de Montanha & Descanso',
                location: 'Serra Catarinense • SC',
                description: 'Paleta acolhedora com pedras naturais e lareira suspensa, criando aconchego em harmonia com o clima serrano.',
                image: '/assets/clients/juliana-pippi-arquitetura/obra_campo.jpg',
                tags: ['Serra Catarinense', 'Pedra Natural', 'Conforto Térmico']
              },
              {
                title: 'Refúgio Lagoa | JF',
                category: 'Residência Integrada à Lagoa',
                location: 'Lagoa da Conceição • Florianópolis',
                description: 'Uma casa pensada para desacelerar, com varandas contínuas e vista panorâmica para o espelho d’água da Lagoa.',
                image: '/assets/clients/juliana-pippi-arquitetura/obra_lagoa.jpg',
                tags: ['Lagoa da Conceição', 'Biofilia', 'Decks em Cumaru']
              },
              {
                title: 'Edifício Vitra',
                category: 'Edificação Corporativa & Residencial',
                location: 'Beira-Mar Norte • Florianópolis',
                description: 'Fachada dinâmica e espaços de circulação elegantes na avenida mais prestigiada da capital catarinense.',
                image: '/assets/clients/juliana-pippi-arquitetura/obra_vitra.jpg',
                tags: ['Beira-Mar Norte', 'Vidro Duplo', 'Design Contemporâneo']
              },
              {
                title: 'Mostra Autoral & Interiores',
                category: 'Instalação Conceito & Premiação',
                location: 'Florianópolis • SC',
                description: 'Ambiente premiado combinando marcenaria sob medida, iluminação indireta difusa e peças da coleção autoral PIPPI.',
                image: '/assets/clients/juliana-pippi-arquitetura/obra_casacor.jpg',
                tags: ['CasaCor', 'Coleção PIPPI', 'Design Premiado']
              }
            ]
          }
        },
        {
          id: 'about-main',
          type: 'about',
          variant: 'About01',
          content: {
            badge: 'A Arquiteta & Criadora',
            title: 'Design que transcende tendências e traduz a identidade de quem vive o espaço.',
            description: 'Com sede em Florianópolis no moderno complexo Corporate Park no Saco Grande, o estúdio comandado por Juliana Pippi atua com projetos arquitetônicos residenciais de grande porte, interiores sofisticados e desenvolvimento de mobiliário autoral através da sua marca PIPPI. Com obras executadas em Santa Catarina, São Paulo e nos Estados Unidos, cada projeto é uma celebração ao bem-estar e à autenticidade.',
            image: '/assets/clients/juliana-pippi-arquitetura/juliana_pippi.jpg',
            stats: [
              { number: '20+', label: 'Anos de Trajetória' },
              { number: '180+', label: 'Projetos Realizados' }
            ]
          }
        },
        {
          id: 'benefits-main',
          type: 'benefits',
          variant: 'Features04',
          content: {
            badge: 'Identidade Construtiva',
            title: 'Pilares do Nosso Estúdio',
            subtitle: 'O equilíbrio perfeito entre rigor técnico, sensibilidade artística e precisão executiva.',
            features: [
              {
                title: 'Biofilia & Iluminação Natural',
                description: 'Projetos pensados para abraçar o clima de Florianópolis, valorizando ventilação cruzada e luz natural em abundância.',
                icon: 'sun'
              },
              {
                title: 'Curadoria & Design Autoral',
                description: 'Mobiliário e peças desenhadas exclusivamente pela linha PIPPI, além da seleção minuciosa dos maiores nomes do design nacional.',
                icon: 'cube'
              },
              {
                title: 'Gestão Rigorosa de Obra',
                description: 'Acompanhamento detalhado em todas as fases executivas para assegurar fidelidade milimétrica do projeto 3D à entrega das chaves.',
                icon: 'check'
              }
            ]
          }
        },
        {
          id: 'testimonials-main',
          type: 'testimonials',
          variant: 'SocialProof04',
          content: {
            title: 'Reconhecimento & Solidez',
            subtitle: 'Duas décadas de protagonismo na arquitetura de alto padrão do Sul do Brasil.',
            metrics: [
              { value: '20+', label: 'Anos de Atuação', description: 'Consolidação e liderança no mercado catarinense' },
              { value: '180+', label: 'Obras de Assinatura', description: 'Residências e empreendimentos autorais' },
              { value: '100%', label: 'Personalizado', description: 'Soluções exclusivas para cada modo de vida' }
            ]
          }
        },
        {
          id: 'contact-main',
          type: 'contact',
          variant: 'Contact02',
          content: {
            badge: 'Diálogo Reservado',
            title: 'Inicie seu projeto com Juliana Pippi Arquitetura',
            subtitle: 'Atendemos clientes no estúdio em Florianópolis ou por videoconferência reservada para projetos no Brasil e exterior.',
            directChannels: [
              { label: 'WhatsApp do Estúdio', value: '(48) 99182-3400', href: 'https://wa.me/5548991823400' },
              { label: 'Telefone', value: '(48) 3222-1200', href: 'tel:+554832221200' },
              { label: 'E-mail Comercial', value: 'adm@julianapippi.com.br', href: 'mailto:adm@julianapippi.com.br' },
              { label: 'Sede Florianópolis', value: 'Rua Orlando Phillippi, 100 - sala 303, Saco Grande, Florianópolis - SC' }
            ]
          }
        },
        {
          id: 'cta-main',
          type: 'cta',
          variant: 'CTA03',
          content: {
            badge: 'Atendimento Exclusivo',
            title: 'Pronto para materializar um refúgio com identidade única?',
            subtitle: 'Converse diretamente com nosso estúdio e agende uma conversa reservada sobre o seu terreno ou residência.',
            buttonText: 'Falar com Juliana Pippi Arquitetura',
            buttonHref: 'https://wa.me/5548991823400'
          }
        },
        {
          id: 'footer-main',
          type: 'footer',
          variant: 'Footer04',
          content: {
            brandName: 'Juliana Pippi Arquitetura',
            brandDescription: 'Estúdio de arquitetura autoral, interiores e design assinado em Florianópolis, Santa Catarina.',
            copyright: '© 2026 Juliana Pippi Arquitetura & Design. Todos os direitos reservados.'
          }
        }
      ]
    }
  ]
};

export default client;
