import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "jacobsen-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Jacobsen Arquitetura",
    legalName: "JACOBSEN ARQUITETURA LTDA",
    niche: 'Arquitetura de Alto Padrão e Interiores',
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Rua Pacheco Leão, 758 - Jardim Botânico, Rio de Janeiro - RJ",
    phone: "(21) 2512-5884",
    whatsapp: "(21) 98888-5884",
    email: "contato@jacobsenarquitetura.com",
    instagram: "@jacobsen_arquitetura"
  },
  theme: {
    primaryColor: "#1B2421",
    secondaryColor: "#283530",
    accentColor: "#4A7C59",
    backgroundColor: "#0D1311",
    textColor: "#E8EFEA",
    headingFont: "Plus Jakarta Sans",
    bodyFont: "Inter",
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
        title: "Jacobsen Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
        ogImage: "/assets/clients/jacobsen-arquitetura/obra_1.jpg"
      },
      sections: [
      {
            "id": "header-jacobsen-arquitetura",
            "type": "header",
            "variant": "Header01",
            "content": {
                  "announcement": "Atendimento exclusivo no Rio de Janeiro (Jardim Botânico, Rio de Janeiro)",
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
            "id": "hero-jacobsen-arquitetura",
            "type": "hero",
            "variant": "Hero01",
            "content": {
                  "badge": "Arquitetura de Alto Padrão no RJ",
                  "headline": "Jacobsen Arquitetura — Arquitetura de Autor",
                  "subheadline": "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
                  "primaryCtaLabel": "Conversar no WhatsApp",
                  "secondaryCtaLabel": "Conhecer Projetos",
                  "secondaryCtaHref": "#projetos",
                  "imageUrl": "/assets/clients/jacobsen-arquitetura/obra_1.jpg",
                  "trustPoints": [
                        "Projetos autorais com acompanhamento milimétrico",
                        "Rigor técnico, biocompatibilidade e conforto térmico",
                        "Sede exclusiva no Rio de Janeiro"
                  ]
            }
      },
      {
            "id": "about-jacobsen-arquitetura",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Filosofia & Assinatura",
                  "title": "A essência da arquitetura carioca por Jacobsen Arquitetura",
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
            "id": "projects-jacobsen-arquitetura",
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
            "id": "services-jacobsen-arquitetura",
            "type": "services",
            "variant": "Services02",
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
            "id": "cta-jacobsen-arquitetura",
            "type": "cta",
            "variant": "CTA01",
            "content": {
                  "headline": "Conecte-se com Jacobsen Arquitetura para planejar sua residência.",
                  "subheadline": "Agende uma conversa reservada com a nossa diretoria para discutir as diretrizes do seu projeto.",
                  "buttonLabel": "Solicitar Atendimento por WhatsApp"
            }
      },
      {
            "id": "footer-jacobsen-arquitetura",
            "type": "footer",
            "variant": "Footer02",
            "content": {}
      }
]
    }
  ]
};

export default client;
