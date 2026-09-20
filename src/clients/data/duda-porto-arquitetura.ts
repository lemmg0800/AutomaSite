import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duda-porto-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Duda Porto Arquitetura",
    legalName: "DUDA PORTO ARQUITETURA E DESIGN LTDA",
    niche: 'Arquitetura de Alto Padrão e Interiores',
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. das Américas, 3500 - Barra da Tijuca, Rio de Janeiro - RJ",
    phone: "(21) 3433-7221",
    whatsapp: "(21) 97103-7221",
    email: "contato@dudaporto.com.br",
    instagram: "@duda_porto_arquitetura"
  },
  theme: {
    primaryColor: "#2B2622",
    secondaryColor: "#3D3631",
    accentColor: "#D97706",
    backgroundColor: "#161412",
    textColor: "#F4F1EA",
    headingFont: "Montserrat",
    bodyFont: "Plus Jakarta Sans",
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
        title: "Duda Porto Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
        ogImage: "/assets/clients/duda-porto-arquitetura/obra_1.jpg"
      },
      sections: [
      {
            "id": "header-duda-porto-arquitetura",
            "type": "header",
            "variant": "Header02",
            "content": {
                  "announcement": "Atendimento exclusivo no Rio de Janeiro (Barra da Tijuca, Rio de Janeiro)",
                  "navLinks": [
                        {
                              "label": "Projetos",
                              "href": "#projetos"
                        },
                        {
                              "label": "Escritório",
                              "href": "#escritorio"
                        },
                        {
                              "label": "Especialidades",
                              "href": "#especialidades"
                        },
                        {
                              "label": "Diferenciais",
                              "href": "#diferenciais"
                        }
                  ],
                  "ctaLabel": "Contato WhatsApp"
            }
      },
      {
            "id": "hero-duda-porto-arquitetura",
            "type": "hero",
            "variant": "Hero02",
            "content": {
                  "badge": "Arquitetura de Alto Padrão no RJ",
                  "headline": "Duda Porto Arquitetura — Arquitetura de Autor",
                  "subheadline": "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
                  "primaryCtaLabel": "Conversar no WhatsApp",
                  "secondaryCtaLabel": "Conhecer Projetos",
                  "secondaryCtaHref": "#projetos",
                  "imageUrl": "/assets/clients/duda-porto-arquitetura/obra_1.jpg",
                  "trustPoints": [
                        "Projetos autorais com acompanhamento milimétrico",
                        "Rigor técnico, biocompatibilidade e conforto térmico",
                        "Sede exclusiva no Rio de Janeiro"
                  ]
            }
      },
      {
            "id": "about-duda-porto-arquitetura",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Filosofia & Assinatura",
                  "title": "A essência da arquitetura carioca por Duda Porto Arquitetura",
                  "text1": "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
                  "text2": "Com sólida atuação no Rio de Janeiro, o escritório alia sofisticação contemporânea a materiais nobres como madeira maciça, pedras naturais e transparência luminosa.",
                  "highlights": [
                        {
                              "value": "100%",
                              "label": "Execução Autoral"
                        },
                        {
                              "value": "BIM",
                              "label": "Precisão Construtiva"
                        },
                        {
                              "value": "Rio",
                              "label": "Identidade Carioca"
                        }
                  ],
                  "whyChoose": [
                        "Interação direta com os arquitetos titulares em todas as decisões",
                        "Orçamento executivo detalhado e blindado contra imprevistos",
                        "Harmonia absoluta com a paisagem e valorização imobiliária máxima"
                  ]
            }
      },
      {
            "id": "projects-duda-porto-arquitetura",
            "type": "projects",
            "variant": "Projects01",
            "content": {
                  "title": "Obras & Residências de Destaque",
                  "subtitle": "Projetos recentes que traduzem a identidade do escritório.",
                  "projects": [
                        {
                              "title": "Residência Cliff & Horizon",
                              "category": "Residencial Alto Padrão - Joá/Leblon",
                              "description": "Grandes vãos envidraçados, brises de madeira e piscina integrada à paisagem."
                        },
                        {
                              "title": "Penthouse Vieira Souto",
                              "category": "Cobertura Duplex - Ipanema",
                              "description": "Mármores nobres, marcenaria de design assinado e automação luminotécnica."
                        },
                        {
                              "title": "Refúgio na Serra",
                              "category": "Casa de Campo - Itaipava",
                              "description": "Sustentabilidade passiva, concreto pigmentado e integração à Mata Atlântica."
                        }
                  ]
            }
      },
      {
            "id": "services-duda-porto-arquitetura",
            "type": "services",
            "variant": "Services01",
            "content": {
                  "badge": "Atuação Completa",
                  "title": "Do Estudo Preliminar à Entrega das Chaves",
                  "subtitle": "Soluções integradas de arquitetura, interiores e gestão de obra.",
                  "services": [
                        {
                              "title": "Projetos de Arquitetura Residencial",
                              "description": "Concepção volumétrica, estudo solar e compatibilização estrutural completa."
                        },
                        {
                              "title": "Arquitetura de Interiores & Curadoria",
                              "description": "Desenho de marcenaria sob medida, seleção de mobiliário e iluminação cênica."
                        },
                        {
                              "title": "Gestão e Acompanhamento de Obras",
                              "description": "Fiscalização minuciosa dos acabamentos e garantia de pontualidade cronológica."
                        }
                  ]
            }
      },
      {
            "id": "cta-duda-porto-arquitetura",
            "type": "cta",
            "variant": "CTA01",
            "content": {
                  "headline": "Conecte-se com Duda Porto Arquitetura para planejar sua residência.",
                  "subheadline": "Agende uma conversa reservada com a nossa diretoria para discutir as diretrizes do seu projeto.",
                  "buttonLabel": "Solicitar Atendimento por WhatsApp"
            }
      },
      {
            "id": "footer-duda-porto-arquitetura",
            "type": "footer",
            "variant": "Footer01",
            "content": {}
      }
]
    }
  ]
};

export default client;
