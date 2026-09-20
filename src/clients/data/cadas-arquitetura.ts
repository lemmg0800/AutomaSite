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
    address: 'Av. Ataulfo de Paiva, 1079 / 802 - Leblon, Rio de Janeiro - RJ',
    phone: '(21) 2523-2449',
    whatsapp: '(21) 99877-2201',
    email: 'cadas@cadas.com.br',
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
        title: 'Cadas Arquitetura | Arquitetura de Autor e Interiores no Leblon - RJ',
        description: 'Escritório de Cadas Abranches no Leblon. Projetos residenciais de alto padrão com freijó, pedras nobres e luz natural no Rio de Janeiro.',
        ogImage: '/assets/clients/cadas-arquitetura/obra_lw.jpg'
      },
      sections: [
        {
          id: 'header-cadas',
          type: 'header',
          variant: 'Header02',
          content: {
            announcement: 'Atendimento exclusivo no Leblon, Ipanema e Joá',
            navLinks: [
              { label: 'Projetos', href: '#projetos' },
              { label: 'Perfil', href: '#perfil' },
              { label: 'Filosofia', href: '#filosofia' },
              { label: 'Contato', href: '#contato' }
            ],
            ctaLabel: 'Iniciar Diálogo'
          }
        },
        {
          id: 'hero-cadas',
          type: 'hero',
          variant: 'Hero01',
          content: {
            badge: 'Leblon • Rio de Janeiro',
            headline: 'A alma carioca esculpida em arquitetura autoral e atemporal.',
            subheadline: 'Com mais de 35 anos de história no Leblon, o escritório liderado por Cadas Abranches une luz natural, freijó maciço e pedras nobres em residências que dialogam com a paisagem do Rio.',
            primaryCtaLabel: 'Iniciar Diálogo no WhatsApp',
            secondaryCtaLabel: 'Conhecer Obras',
            secondaryCtaHref: '#projetos',
            imageUrl: '/assets/clients/cadas-arquitetura/obra_lw.jpg',
            trustPoints: [
              'Mais de 35 anos de ateliê no Leblon',
              'Mais de 280 residências executadas',
              'Acompanhamento autoral de ponta a ponta'
            ]
          }
        },
        {
          id: 'about-cadas',
          type: 'about',
          variant: 'About01',
          content: {
            badge: 'Perfil & Ateliê',
            title: 'Espaços que dialogam com o horizonte e acolhem a vida.',
            text1: 'Comandado por Cadas Abranches, o escritório desenvolve projetos residenciais e comerciais no Rio de Janeiro e no mundo com profunda sensibilidade estética, luz natural e materiais nobres.',
            text2: 'A equipe técnica inclui especialistas como Cristiana David e Joanna Mesquitela na coordenação de interiores, garantindo marcenaria milimétrica e harmonia de materiais.',
            highlights: [
              { value: '35+', label: 'Anos de Ateliê' },
              { value: '280+', label: 'Obras Entregues' },
              { value: 'Leblon', label: 'Sede no RJ' }
            ],
            whyChoose: [
              'Interação direta com os sócios titulares em todas as decisões',
              'Curadoria exclusiva de freijó, cumaru, mármore travertino e arte',
              'Compatibilização executiva completa sem surpresas de cronograma'
            ]
          }
        },
        {
          id: 'projects-cadas',
          type: 'projects',
          variant: 'Projects01',
          content: {
            title: 'Obras & Residências de Assinatura',
            subtitle: 'Projetos reais executados com a curadoria de Cadas Abranches.',
            projects: [
              {
                title: 'Projeto LW',
                category: 'Residencial Joá',
                description: 'Residência suspensa sobre a rocha em balanço com vista panorâmica do oceano Atlântico.'
              },
              {
                title: 'Projeto EB Leblon',
                category: 'Apartamento Leblon',
                description: 'Integração de 600m² com piscina em mármore travertino navona e painéis vazados de madeira.'
              },
              {
                title: 'Projeto Fisher Island',
                category: 'Internacional Miami',
                description: 'Linhas minimalistas, ventilação cruzada e diálogo permanente com a paisagem costeira.'
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
                title: 'Design de Interiores & Marcenaria',
                description: 'Coordenação de Cristiana David e equipe para marcenaria sob medida e iluminação cênica.',
                cta: 'Saber Mais'
              },
              {
                icon: '🏛️',
                title: 'Coordenação Executiva de Obra',
                description: 'Coordenação minuciosa de engenharias, cálculo estrutural e acabamentos para precisão milimétrica.',
                cta: 'Falar com Arquiteto'
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
            subheadline: 'Agende uma conversa reservada com nossa diretoria no Leblon para discutir o seu projeto.',
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
