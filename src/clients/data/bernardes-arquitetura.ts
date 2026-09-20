import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "bernardes-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Bernardes Arquitetura",
    legalName: "BERNARDES ARQUITETURA LTDA",
    niche: "Arquitetura Contemporânea Brasileira e Urbanismo",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. Ataulfo de Paiva, 135 - Leblon, Rio de Janeiro - RJ",
    phone: "(21) 2540-5200",
    whatsapp: "(21) 98114-5200",
    email: "contato@bernardesarq.com.br",
    instagram: "@bernardesarq"
  },
  theme: {
  "primaryColor": "#121516",
  "secondaryColor": "#1E2325",
  "accentColor": "#D4AF37",
  "backgroundColor": "#0A0C0D",
  "textColor": "#EDECE8",
  "headingFont": "Cinzel",
  "bodyFont": "Plus Jakarta Sans",
  "borderRadius": "none",
  "mode": "dark",
  "enableCursor": false,
  "backgroundEffect": "none",
  "enableParallax": true
},
  pages: [
    {
      path: '',
      seo: {
        title: "Bernardes Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos autorais residenciais e comerciais de excelência no Rio de Janeiro. Arquitetura atemporal, interiores e valorização patrimonial.",
        ogImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85"
      },
      sections: [
      {
            "id": "header-bernardes",
            "type": "header",
            "variant": "Header01",
            "content": {
                  "navLinks": [
                        {
                              "label": "Projetos",
                              "href": "#projetos"
                        },
                        {
                              "label": "Manifesto",
                              "href": "#escritorio"
                        },
                        {
                              "label": "Atuação",
                              "href": "#especialidades"
                        },
                        {
                              "label": "Método",
                              "href": "#metodo"
                        }
                  ],
                  "ctaLabel": "Contato Leblon"
            }
      },
      {
            "id": "hero-bernardes",
            "type": "hero",
            "variant": "Hero02",
            "content": {
                  "badge": "Referência Mundial em Arquitetura Tropical",
                  "headline": "O rigor da forma e a organicidade do modernismo brasileiro.",
                  "subheadline": "Escritório sediado no Leblon, Nova York e Lisboa, criando espaços icônicos onde concreto aparente, madeira nobre e vegetação nativa convergem.",
                  "primaryCtaLabel": "Falar com Nossa Equipe",
                  "imageUrl": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
                  "trustPoints": [
                        "Projetos premiados internacionalmente no WAF e ArchDaily",
                        "Presença global: Rio de Janeiro, São Paulo, NY e Lisboa",
                        "Tradição arquitetônica de três gerações de mestres"
                  ]
            }
      },
      {
            "id": "stats-bernardes",
            "type": "stats",
            "variant": "Stats01",
            "content": {
                  "stats": [
                        {
                              "number": "1.200+",
                              "label": "Obras Realizadas no Mundo"
                        },
                        {
                              "number": "4",
                              "label": "Bases Internacionais"
                        },
                        {
                              "number": "45+",
                              "label": "Prêmios de Design & Urbanismo"
                        },
                        {
                              "number": "30+",
                              "label": "Anos de Vanguarda"
                        }
                  ]
            }
      },
      {
            "id": "projects-bernardes",
            "type": "projects",
            "variant": "Projects01",
            "content": {
                  "title": "Obras de Relevância Internacional",
                  "subtitle": "Projetos autorais residenciais, hospitalidade e edifícios culturais.",
                  "projects": [
                        {
                              "title": "Residência Asa",
                              "category": "Residência Privada - São Conrado",
                              "description": "Cobertura em balanço arrojado de concreto protendido e vidro, emoldurando a Pedra da Gávea."
                        },
                        {
                              "title": "Hotel Fasano Angra",
                              "category": "Hospitalidade de Luxo - Angra dos Reis",
                              "description": "Implantação litorânea integrada com docas privativas e estruturas de madeira laminada colada."
                        },
                        {
                              "title": "Casa Delta",
                              "category": "Litoral Fluminense",
                              "description": "Painéis ripados móveis de cumaru que regulam iluminação, privacidade e ventilação marinha."
                        }
                  ]
            }
      },
      {
            "id": "about-bernardes",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Manifesto Arquitetônico",
                  "title": "Arquitetura que nasce do sítio e reverencia a geografia carioca.",
                  "text1": "Fundado por Thiago Bernardes, o escritório carrega o legado inovador de Sergio Bernardes, atualizado com as mais avançadas técnicas sustentáveis e construtivas do século XXI.",
                  "text2": "Criamos residências que desafiam convenções estruturais enquanto oferecem acolhimento térmico, espacial e sensorial inigualável.",
                  "highlights": [
                        {
                              "value": "BIM 5D",
                              "label": "Tecnologia Construtiva"
                        },
                        {
                              "value": "Global",
                              "label": "Projetos em 4 Continentes"
                        },
                        {
                              "value": "Autoral",
                              "label": "Identidade Singular"
                        }
                  ],
                  "whyChoose": [
                        "Compatibilização tridimensional milimétrica",
                        "Sustentabilidade passiva com conforto térmico natural",
                        "Valor patrimonial e prestígio de reconhecimento mundial"
                  ]
            }
      },
      {
            "id": "services-bernardes",
            "type": "services",
            "variant": "Services02",
            "content": {
                  "badge": "Nossos Pilares",
                  "title": "Excelência em todas as escalas da arquitetura.",
                  "subtitle": "Da escala do detalhe ao plano diretor urbano.",
                  "services": [
                        {
                              "title": "Projetos Residenciais de Grande Porte",
                              "description": "Casas de praia, montanha e coberturas urbanas executadas com padrão internacional de engenharia."
                        },
                        {
                              "title": "Hotelaria e Empreendimentos de Alto Luxo",
                              "description": "Resorts, spas e boutique hotels concebidos para experiências imersivas com alta rentabilidade operacional."
                        },
                        {
                              "title": "Arquitetura de Interiores & Marcenaria Especial",
                              "description": "Detalhamento de mobiliário fixo e seleção de arte brasileira para ambientes sofisticados."
                        }
                  ]
            }
      },
      {
            "id": "process-bernardes",
            "type": "process",
            "variant": "Process01",
            "content": {
                  "title": "O Caminho da Concepção à Matéria",
                  "steps": [
                        {
                              "step": "1",
                              "title": "Análise do Sítio & Conceito",
                              "description": "Topografia, insolação, ventos e vocação poética do terreno no Rio de Janeiro."
                        },
                        {
                              "step": "2",
                              "title": "Modelagem Digital & Protótipos",
                              "description": "Simulações paramétricas em 3D e validações físicas de textura e luminosidade."
                        },
                        {
                              "step": "3",
                              "title": "Engenharia de Detalhe & Execução",
                              "description": "Desenhos técnicos rigorosos para obra civil impecável sem improvisos."
                        }
                  ]
            }
      },
      {
            "id": "cta-bernardes",
            "type": "cta",
            "variant": "CTA01",
            "content": {
                  "headline": "Inicie o planejamento da sua residência icônica.",
                  "subheadline": "Entre em contato com nossa sede no Leblon para uma consulta institucional.",
                  "buttonLabel": "Solicitar Atendimento Leblon"
            }
      },
      {
            "id": "footer-bernardes",
            "type": "footer",
            "variant": "Footer02",
            "content": {}
      }
]
    }
  ]
};

export default client;
