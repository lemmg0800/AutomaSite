import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "jacobsen-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Jacobsen Arquitetura",
    legalName: "JACOBSEN ARQUITETURA LTDA",
    niche: "Arquitetura Litorânea, Biofílica e Residencial Tropical",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Rua Pacheco Leão, 758 - Jardim Botânico, Rio de Janeiro - RJ",
    phone: "(21) 2512-5884",
    whatsapp: "(21) 98888-5884",
    email: "contato@jacobsenarquitetura.com",
    instagram: "@jacobsenarquitetura"
  },
  theme: {
  "primaryColor": "#1B2421",
  "secondaryColor": "#283530",
  "accentColor": "#4A7C59",
  "backgroundColor": "#0D1311",
  "textColor": "#E8EFEA",
  "headingFont": "Plus Jakarta Sans",
  "bodyFont": "Inter",
  "borderRadius": "lg",
  "mode": "dark",
  "enableCursor": false,
  "backgroundEffect": "none",
  "enableParallax": true
},
  pages: [
    {
      path: '',
      seo: {
        title: "Jacobsen Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos autorais residenciais e comerciais de excelência no Rio de Janeiro. Arquitetura atemporal, interiores e valorização patrimonial.",
        ogImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85"
      },
      sections: [
      {
            "id": "header-jacobsen",
            "type": "header",
            "variant": "Header01",
            "content": {
                  "navLinks": [
                        {
                              "label": "Projetos",
                              "href": "#projetos"
                        },
                        {
                              "label": "Biofilia",
                              "href": "#escritorio"
                        },
                        {
                              "label": "Serviços",
                              "href": "#especialidades"
                        },
                        {
                              "label": "Diferenciais",
                              "href": "#diferenciais"
                        }
                  ],
                  "ctaLabel": "Contato Jardim Botânico"
            }
      },
      {
            "id": "hero-jacobsen",
            "type": "hero",
            "variant": "Hero01",
            "content": {
                  "badge": "Líder em Arquitetura Biofílica e Sustentabilidade Tropical",
                  "headline": "Fluidez entre o interior e a natureza exuberante do Rio.",
                  "subheadline": "Transparência, ventilação cruzada e brises de madeira engenheirada que se dissolvem na paisagem da Mata Atlântica e do oceano atlântico.",
                  "primaryCtaLabel": "Falar com Arquiteto Titular",
                  "secondaryCtaLabel": "Conhecer Projetos",
                  "secondaryCtaHref": "#projetos",
                  "imageUrl": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=85",
                  "trustPoints": [
                        "Escritórios no Jardim Botânico, São Paulo e Lisboa",
                        "Pioneirismo em MLC (Madeira Laminada Colada)",
                        "Certificações ambientais internacionais LEED e AQUA"
                  ]
            }
      },
      {
            "id": "stats-jacobsen",
            "type": "stats",
            "variant": "Stats01",
            "content": {
                  "stats": [
                        {
                              "number": "400+",
                              "label": "Projetos no Brasil e Exterior"
                        },
                        {
                              "number": "15+",
                              "label": "Prêmios Internacionais"
                        },
                        {
                              "number": "100%",
                              "label": "Madeira Certificada FSC"
                        },
                        {
                              "number": "3",
                              "label": "Bases Globais"
                        }
                  ]
            }
      },
      {
            "id": "about-jacobsen",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Manifesto da Transparência",
                  "title": "Casas que respiram com a floresta e o vento do mar.",
                  "text1": "Liderado por Paulo Jacobsen e Bernardo Jacobsen, o escritório desenvolveu uma linguagem autêntica onde coberturas leves, beirais generosos e lâminas d'água protegem e acolhem.",
                  "text2": "Através de soluções passivas bioclimáticas, dispensamos o uso excessivo de climatização artificial e colocamos o bem-estar humano no centro do habitar.",
                  "highlights": [
                        {
                              "value": "MLC",
                              "label": "Estruturas Leves e Renováveis"
                        },
                        {
                              "value": "Zero Carbon",
                              "label": "Estratégias de Eficiência"
                        },
                        {
                              "value": "Natureza",
                              "label": "Integração Biofílica 360°"
                        }
                  ],
                  "whyChoose": [
                        "Projetos com baixa pegada ecológica e alta durabilidade climática",
                        "Sistemas de captação de água da chuva e energia fotovoltaica integrados",
                        "Equipe multidisciplinar de arquitetura, paisagismo e engenharia"
                  ]
            }
      },
      {
            "id": "projects-jacobsen",
            "type": "projects",
            "variant": "Projects01",
            "content": {
                  "title": "Residências Costeiras e Refúgios Naturais",
                  "subtitle": "Obras icônicas em Angra dos Reis, Búzios, Paraty e no Rio.",
                  "projects": [
                        {
                              "title": "Casa Bento",
                              "category": "Residência Litorânea - Angra dos Reis",
                              "description": "Pavilhões interligados por passarelas cobertas em madeira cumaru sobre espelho d'água."
                        },
                        {
                              "title": "Residência Jardim Botânico",
                              "category": "Casa Urbana Integrada - Rio de Janeiro",
                              "description": "Muros verdes e grandes vãos envidraçados voltados para a copa das árvores centenárias."
                        },
                        {
                              "title": "Casa Mangaritiba",
                              "category": "Praia Privativa - Costa Verde",
                              "description": "Cobertura suspensa em balanço que emoldura a enseada cristalina e as ilhas oceânicas."
                        }
                  ]
            }
      },
      {
            "id": "services-jacobsen",
            "type": "services",
            "variant": "Services02",
            "content": {
                  "badge": "Competências do Escritório",
                  "title": "Abordagem completa do plano geral ao detalhe artesanal.",
                  "subtitle": "Precisão que une sustentabilidade real e conforto supremo.",
                  "services": [
                        {
                              "title": "Arquitetura Residencial Tropical",
                              "description": "Projetos autorais desenhados especificamente para a climatologia e topografia do sítio."
                        },
                        {
                              "title": "Paisagismo Biofílico Integrado",
                              "description": "Seleção botânica nativa em parceria com grandes paisagistas para restauração da flora local."
                        },
                        {
                              "title": "Consultoria de Certificação Ambiental",
                              "description": "Eficiência energética e hídrica com metodologias internacionais de sustentabilidade."
                        }
                  ]
            }
      },
      {
            "id": "benefits-jacobsen",
            "type": "benefits",
            "variant": "Benefits01",
            "content": {
                  "title": "Vantagens Exclusivas Jacobsen",
                  "subtitle": "Uma postura pioneira de respeito à terra e à beleza.",
                  "items": [
                        {
                              "icon": "🌲",
                              "title": "Engenharia da Madeira",
                              "description": "Cálculo de estruturas em MLC que trazem aconchego térmico imediato."
                        },
                        {
                              "icon": "☀️",
                              "title": "Conforto Bioclimático",
                              "description": "Estudo solar minucioso que elimina pontos cegos de calor e umidade."
                        },
                        {
                              "icon": "🌊",
                              "title": "Resistência à Maresia",
                              "description": "Especificação técnica de ligas metálicas e acabamentos testados para orla litorânea."
                        }
                  ]
            }
      },
      {
            "id": "cta-jacobsen",
            "type": "cta",
            "variant": "CTA01",
            "content": {
                  "headline": "Construa sua casa integrada à natureza do Rio.",
                  "subheadline": "Entre em contato com nossa sede no Jardim Botânico para conhecer nosso portfólio completo.",
                  "buttonLabel": "Solicitar Apresentação no Jardim Botânico"
            }
      },
      {
            "id": "footer-jacobsen",
            "type": "footer",
            "variant": "Footer02",
            "content": {}
      }
]
    }
  ]
};

export default client;
