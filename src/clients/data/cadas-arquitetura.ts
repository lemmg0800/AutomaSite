import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: 'cadas-arquitetura',
  status: 'published',
  createdAt: '2026-09-21T00:20:43.370Z',
  updatedAt: '2026-09-21T00:20:43.370Z',
  business: {
    name: 'Cadas Arquitetura',
    legalName: 'CADAS ARQUITETURA E INTERIORES LTDA',
    niche: 'Arquitetura Residencial de Alto Padrão e Interiores',
    city: 'Rio de Janeiro',
    state: 'RJ',
    address: 'Av. Ataulfo de Paiva, 1079 / 802 - Leblon, Rio de Janeiro - RJ',
    phone: '(21) 2523-2449',
    whatsapp: '(21) 99877-2201',
    email: 'cadas@cadas.com.br',
    instagram: '@cadas_arquitetura'
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
        title: 'Cadas Arquitetura | Arquitetura Autoral & Interiores no Leblon - RJ',
        description: 'Escritório de Cadas Abranches no Leblon. Residências autorais de alto padrão com freijó maciço, pedras nobres e luz natural no Rio de Janeiro.',
        ogImage: '/assets/clients/cadas-arquitetura/obra_lw.jpg'
      },
      sections: [
        {
          id: 'header-main',
          type: 'header',
          variant: 'Header05',
          content: {
            navLinks: [
              { label: 'O Ateliê', href: '#sobre' },
              { label: 'Acervo de Obras', href: '#projetos' },
              { label: 'Diferenciais', href: '#diferenciais' },
              { label: 'Diálogo Reservado', href: '#contato' }
            ],
            ctaLabel: 'Agendar Consulta',
            ctaHref: 'https://wa.me/5521998772201'
          }
        },
        {
          id: 'hero-main',
          type: 'hero',
          variant: 'Hero04',
          content: {
            badge: 'Ateliê Autoral de Arquitetura • Leblon',
            headline: 'A essência carioca esculpida em luz, freijó maciço e formas atemporais.',
            subheadline: 'Com mais de 35 anos de história no Leblon, o escritório comandado por Cadas Abranches cria residências e refúgios que estabelecem um diálogo indissociável com a paisagem do Rio de Janeiro.',
            primaryCtaLabel: 'Iniciar Diálogo Reservado',
            primaryCtaHref: 'https://wa.me/5521998772201',
            secondaryCtaLabel: 'Explorar Obras',
            secondaryCtaHref: '#projetos',
            image: '/assets/clients/cadas-arquitetura/obra_lw.jpg',
            imageAlt: 'Projeto LW - Residência Joá por Cadas Arquitetura',
            imageCaption: 'Obra de Assinatura • Joá, Rio de Janeiro',
            stats: [
              { value: '35+', label: 'Anos de Ateliê' },
              { value: '280+', label: 'Obras de Autor' },
              { value: 'Leblon', label: 'Sede Permanente' }
            ]
          }
        },
        {
          id: 'showcase-main',
          type: 'projects',
          variant: 'Showcase01',
          content: {
            badge: 'Acervo e Obras Autorais',
            title: 'Projetos de Assinatura',
            description: 'Cada residência concebida pelo escritório expressa a relação singular entre topografia, luz natural e a nobreza da marcenaria sob medida.',
            ctaText: 'Solicitar Portfólio Completo em PDF',
            ctaHref: 'https://wa.me/5521998772201',
            items: [
              {
                title: 'Projeto LW',
                category: 'Residência Unifamiliar Suspensa',
                location: 'Joá • Rio de Janeiro',
                description: 'Arquitetura audaciosa com balanço escultural sobre a rocha litorânea, dissolvendo as fronteiras entre interiores e o horizonte do Rio.',
                image: '/assets/clients/cadas-arquitetura/obra_lw.jpg',
                tags: ['Freijó Maciço', 'Aço Corten', 'Vidro Estrutural']
              },
              {
                title: 'Projeto EB Leblon',
                category: 'Apartamento de Alta Costura',
                location: 'Leblon • Rio de Janeiro',
                description: 'Integração de 600m² onde brises móveis de madeira filtram a luz natural e organizam os ambientes de convivência social.',
                image: '/assets/clients/cadas-arquitetura/obra_eb.jpg',
                tags: ['Painéis de Madeira', 'Travertino Navona', 'Luz Zenital']
              },
              {
                title: 'Projeto PD Leblon',
                category: 'Interiores & Curadoria de Mobiliário',
                location: 'Leblon • Rio de Janeiro',
                description: 'Curadoria apurada com coordenação de Cristiana David e Joanna Mesquitela, unindo peças icônicas e marcenaria sob medida.',
                image: '/assets/clients/cadas-arquitetura/obra_pd.jpg',
                tags: ['Design Moderno Brasileiro', 'Linho Puro', 'Mármore']
              },
              {
                title: 'Projeto BC',
                category: 'Casa de Praia & Lazer',
                location: 'Litoral Fluminense • RJ',
                description: 'Implantação bioclimática com ventilação cruzada constante, deck voltado para o mar e jardins tropicais integrados.',
                image: '/assets/clients/cadas-arquitetura/obra_bc.jpg',
                tags: ['Deck em Cumaru', 'Borda Infinita', 'Pedra Moledo']
              },
              {
                title: 'Apartamento Urbano Leblon',
                category: 'Retrofit Residencial Contemporâneo',
                location: 'Orla do Leblon • RJ',
                description: 'Reconfiguração espacial profunda preservando a identidade histórica e maximizando a entrada de luz e brisa marinha.',
                image: '/assets/clients/cadas-arquitetura/obra_urbano.png',
                tags: ['Piso em Peroba', 'Caixilharia Delicada', 'Arte Brasileira']
              },
              {
                title: 'Projeto Fisher Island',
                category: 'Residência Internacional',
                location: 'Miami • Flórida (EUA)',
                description: 'Diálogo entre a estética brasileira de Cadas Abranches e a sofisticação cosmopolita em uma das ilhas mais exclusivas dos Estados Unidos.',
                image: '/assets/clients/cadas-arquitetura/obra_fisher.jpg',
                tags: ['Paleta Clara', 'Mármore Calacatta', 'Marcenaria Fina']
              }
            ]
          }
        },
        {
          id: 'about-main',
          type: 'about',
          variant: 'About01',
          content: {
            badge: 'O Ateliê do Leblon',
            title: 'Projetar a partir do vazio, da luz e do diálogo com a paisagem carioca.',
            description: 'No ateliê situado na Avenida Ataulfo de Paiva, no Leblon, cada traço nasce da observação profunda da orientação solar, dos ventos marítimos e da personalidade de quem irá habitar o espaço. A coordenação executiva e de interiores — liderada por Cristiana David e Joanna Mesquitela — assegura o rigor milimétrico que consagrou a marca Cadas.',
            image: '/assets/clients/cadas-arquitetura/perfil.jpg',
            stats: [
              { number: '35+', label: 'Anos de Tradição' },
              { number: '280+', label: 'Obras Construídas' }
            ]
          }
        },
        {
          id: 'benefits-main',
          type: 'benefits',
          variant: 'Features04',
          content: {
            badge: 'Filosofia Construtiva',
            title: 'Pilares do Nosso Ateliê',
            subtitle: 'Três fundamentos que orientam a materialização de cada projeto de arquitetura.',
            features: [
              {
                title: 'Luz Zenital & Orientação Solar',
                description: 'Aberturas estratégicas que esculpem sombras suaves e iluminação natural dinâmica ao longo de todo o dia.',
                icon: 'sun'
              },
              {
                title: 'Nobreza das Madeiras Nativas',
                description: 'Curadoria apurada de freijó, peroba e cumaru com certificação de procedência e marcenaria sob medida.',
                icon: 'tree'
              },
              {
                title: 'Integração Biofílica Carioca',
                description: 'Transição fluida e contínua entre os jardins tropicais externos e os ambientes de estar e convivência.',
                icon: 'leaf'
              }
            ]
          }
        },
        {
          id: 'testimonials-main',
          type: 'testimonials',
          variant: 'SocialProof04',
          content: {
            title: 'Reconhecimento & Autoridade',
            subtitle: 'Três décadas de excelência em projetos residenciais de alto padrão.',
            metrics: [
              { value: '35+', label: 'Anos de Excelência', description: 'Atuação ininterrupta no mercado de alta arquitetura' },
              { value: '280+', label: 'Projetos Realizados', description: 'Residências e coberturas unifamiliares exclusivas' },
              { value: '100%', label: 'Autoral', description: 'Desenhos e detalhes executivos exclusivos para cada cliente' }
            ]
          }
        },
        {
          id: 'contact-main',
          type: 'contact',
          variant: 'Contact02',
          content: {
            badge: 'Diálogo Reservado',
            title: 'Inicie seu projeto com a assinatura de Cadas Arquitetura',
            subtitle: 'Recebemos clientes para reuniões reservadas de alinhamento conceitual e análise de viabilidade de terrenos e imóveis no Rio de Janeiro e no exterior.',
            directChannels: [
              { label: 'WhatsApp Direto', value: '(21) 99877-2201', href: 'https://wa.me/5521998772201' },
              { label: 'Telefone da Sede', value: '(21) 2523-2449', href: 'tel:+552125232449' },
              { label: 'E-mail Comercial', value: 'cadas@cadas.com.br', href: 'mailto:cadas@cadas.com.br' },
              { label: 'Sede no Leblon', value: 'Av. Ataulfo de Paiva, 1079 / 802 - Leblon, RJ' }
            ]
          }
        },
        {
          id: 'cta-main',
          type: 'cta',
          variant: 'CTA03',
          content: {
            badge: 'Atendimento Exclusivo',
            title: 'Pronto para dar vida a um refúgio de arquitetura atemporal?',
            subtitle: 'Entre em contato diretamente com nossa equipe técnica para agendar uma consulta reservada no ateliê do Leblon.',
            buttonText: 'Falar com Cadas Arquitetura',
            buttonHref: 'https://wa.me/5521998772201'
          }
        },
        {
          id: 'footer-main',
          type: 'footer',
          variant: 'Footer04',
          content: {
            brandName: 'Cadas Arquitetura',
            brandDescription: 'Ateliê autoral de arquitetura e interiores com mais de 35 anos de história no Leblon, Rio de Janeiro.',
            copyright: '© 2026 Cadas Arquitetura e Interiores Ltda. Todos os direitos reservados.'
          }
        }
      ]
    }
  ]
};

export default client;
