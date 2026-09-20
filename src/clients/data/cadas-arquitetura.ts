import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: 'cadas-arquitetura',
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-20T14:00:00.000Z',
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
    backgroundEffect: 'none',
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
          id: 'header-cadas',
          type: 'header',
          variant: 'CustomHeader',
          content: {
            title: 'Cadas Arquitetura'
          }
        },
        {
          id: 'hero-cadas',
          type: 'hero',
          variant: 'CustomHero',
          content: {
            headline: 'A essência carioca esculpida em luz, freijó maciço e formas atemporais.',
            imageUrl: '/assets/clients/cadas-arquitetura/obra_lw.jpg'
          }
        },
        {
          id: 'projects-cadas',
          type: 'projects',
          variant: 'CustomProjects',
          content: {
            title: 'Projetos de Assinatura'
          }
        },
        {
          id: 'about-cadas',
          type: 'about',
          variant: 'CustomAbout',
          content: {
            title: 'O Ateliê do Leblon'
          }
        },
        {
          id: 'contact-cadas',
          type: 'contact',
          variant: 'CustomContact',
          content: {
            title: 'Diálogo Reservado'
          }
        },
        {
          id: 'footer-cadas',
          type: 'footer',
          variant: 'CustomFooter',
          content: {}
        }
      ]
    }
  ]
};

export default client;
