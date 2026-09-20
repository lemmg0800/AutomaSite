import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "bernardes-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Bernardes Arquitetura",
    legalName: "BERNARDES ARQUITETURA LTDA",
    niche: 'Arquitetura de Alto Padrão e Interiores',
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. Ataulfo de Paiva, 135 - Leblon, Rio de Janeiro - RJ",
    phone: "(21) 2540-5200",
    whatsapp: "(21) 98114-5200",
    email: "contato@bernardesarq.com.br",
    instagram: "@bernardes_arquitetura"
  },
  theme: {
    primaryColor: "#121516",
    secondaryColor: "#1E2325",
    accentColor: "#D4AF37",
    backgroundColor: "#0A0C0D",
    textColor: "#EDECE8",
    headingFont: "Cinzel",
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
        title: "Bernardes Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
        ogImage: "/assets/clients/bernardes-arquitetura/obra_1.jpg"
      },
      sections: [
      {
            "id": "header-bernardes-arquitetura",
            "type": "header",
            "variant": "Header01",
            "content": {
                  "announcement": "Atendimento exclusivo no Rio de Janeiro (Leblon, Rio de Janeiro)",
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
            "id": "hero-bernardes-arquitetura",
            "type": "hero",
            "variant": "Hero02",
            "content": {
                  "badge": "Arquitetura de Alto Padrão no RJ",
                  "headline": "Bernardes Arquitetura — Arquitetura de Autor",
                  "subheadline": "Projetos residenciais e contemporâneos de excelência no Rio de Janeiro.",
                  "primaryCtaLabel": "Conversar no WhatsApp",
                  "secondaryCtaLabel": "Conhecer Projetos",
                  "secondaryCtaHref": "#projetos",
                  "imageUrl": "/assets/clients/bernardes-arquitetura/obra_1.jpg",
                  "trustPoints": [
                        "Projetos autorais com acompanhamento milimétrico",
                        "Rigor técnico, biocompatibilidade e conforto térmico",
                        "Sede exclusiva no Rio de Janeiro"
                  ]
            }
      },
      {
            "id": "about-bernardes-arquitetura",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Filosofia & Assinatura",
                  "title": "A essência da arquitetura carioca por Bernardes Arquitetura",
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
            "id": "projects-bernardes-arquitetura",
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
            "id": "services-bernardes-arquitetura",
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
            "id": "cta-bernardes-arquitetura",
            "type": "cta",
            "variant": "CTA01",
            "content": {
                  "headline": "Conecte-se com Bernardes Arquitetura para planejar sua residência.",
                  "subheadline": "Agende uma conversa reservada com a nossa diretoria para discutir as diretrizes do seu projeto.",
                  "buttonLabel": "Solicitar Atendimento por WhatsApp"
            }
      },
      {
            "id": "footer-bernardes-arquitetura",
            "type": "footer",
            "variant": "Footer02",
            "content": {}
      }
]
    }
  ]
};

export default client;
