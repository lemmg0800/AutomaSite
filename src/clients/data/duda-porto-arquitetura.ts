import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duda-porto-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Duda Porto Arquitetura",
    legalName: "DUDA PORTO ARQUITETURA E DESIGN LTDA",
    niche: "Arquitetura Modular Sustentável e Casas de Luxo Contemporâneas",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. das Américas, 3500 - Barra da Tijuca, Rio de Janeiro - RJ",
    phone: "(21) 3433-7221",
    whatsapp: "(21) 97103-7221",
    email: "contato@dudaporto.com.br",
    instagram: "@dudaportoarquitetura"
  },
  theme: {
  "primaryColor": "#2B2622",
  "secondaryColor": "#3D3631",
  "accentColor": "#D97706",
  "backgroundColor": "#161412",
  "textColor": "#F4F1EA",
  "headingFont": "Montserrat",
  "bodyFont": "Plus Jakarta Sans",
  "borderRadius": "md",
  "mode": "dark",
  "enableCursor": false,
  "backgroundEffect": "none",
  "enableParallax": true
},
  pages: [
    {
      path: '',
      seo: {
        title: "Duda Porto Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos autorais residenciais e comerciais de excelência no Rio de Janeiro. Arquitetura atemporal, interiores e valorização patrimonial.",
        ogImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85"
      },
      sections: [
      {
            "id": "header-duda",
            "type": "header",
            "variant": "Header02",
            "content": {
                  "announcement": "Estúdio Barra da Tijuca - Projetos em todo o estado do RJ",
                  "navLinks": [
                        {
                              "label": "Filosofia",
                              "href": "#escritorio"
                        },
                        {
                              "label": "Serviços",
                              "href": "#especialidades"
                        },
                        {
                              "label": "Método",
                              "href": "#metodo"
                        },
                        {
                              "label": "Obras",
                              "href": "#projetos"
                        },
                        {
                              "label": "Depoimentos",
                              "href": "#depoimentos"
                        }
                  ],
                  "ctaLabel": "Atendimento WhatsApp"
            }
      },
      {
            "id": "hero-duda",
            "type": "hero",
            "variant": "Hero02",
            "content": {
                  "badge": "Sustentabilidade, Agilidade e Luxo Consciente",
                  "headline": "A evolução da arquitetura: residências elegantes entregues na metade do tempo.",
                  "subheadline": "Pioneiro em soluções construtivas modulares sustentáveis que unem pedras naturais, esquadrias minimalistas e máxima eficiência energética.",
                  "primaryCtaLabel": "Conversar com Duda Porto",
                  "imageUrl": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=85",
                  "trustPoints": [
                        "Projetos de destaque em sucessivas edições da CasaCor",
                        "Sistemas construtivos secos que reduzem desperdício em até 70%",
                        "Garantia de pontualidade e custos estritamente controlados"
                  ]
            }
      },
      {
            "id": "about-duda",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Nosso Propósito",
                  "title": "Menos obra, menos resíduo, mais tempo para viver.",
                  "text1": "Comandado pelo arquiteto Duda Porto, nosso estúdio na Barra da Tijuca revolucionou o mercado imobiliário fluminense ao introduzir conceitos modulares com acabamento ultra luxuoso.",
                  "text2": "Acreditamos que o luxo contemporâneo está no silêncio, na luz natural, no respeito à terra e na pontualidade britânica da entrega da casa pronta.",
                  "highlights": [
                        {
                              "value": "50%",
                              "label": "Mais Rápido que Alvenaria"
                        },
                        {
                              "value": "70%",
                              "label": "Menos Resíduos na Obra"
                        },
                        {
                              "value": "100%",
                              "label": "Fidelidade ao Orçamento"
                        }
                  ],
                  "whyChoose": [
                        "Tecnologia off-site com montagem rápida e silenciosa",
                        "Materiais recicláveis, térmicos e altamente resistentes à maresia",
                        "Projetos pensados para flexibilidade e expansão futura da família"
                  ]
            }
      },
      {
            "id": "services-duda",
            "type": "services",
            "variant": "Services01",
            "content": {
                  "badge": "Soluções Arquitetônicas",
                  "title": "Do terreno vazio à casa completamente habitável.",
                  "subtitle": "Metodologias modernas que garantem tranquilidade e previsibilidade.",
                  "services": [
                        {
                              "icon": "🏡",
                              "title": "Casas Modulares Sustentáveis (GOMU / Casa Lite)",
                              "description": "Módulos de alto padrão produzidos industrialmente e montados no local com zero estresse.",
                              "cta": "Conhecer Linha"
                        },
                        {
                              "icon": "🌊",
                              "title": "Residências Costeiras e Condomínios Fechados",
                              "description": "Casas autorais na Barra, Joá, Recreio, Búzios e Angra com ampla integração externa.",
                              "cta": "Solicitar Projeto"
                        },
                        {
                              "icon": "🌿",
                              "title": "Projetos de Interiores e Paisagismo Orgânico",
                              "description": "Curadoria de tecidos crus, linho, madeira recuperada e jardins integrados.",
                              "cta": "Falar com Designer"
                        }
                  ]
            }
      },
      {
            "id": "process-duda",
            "type": "process",
            "variant": "Process01",
            "content": {
                  "title": "Como Realizamos Seu Projeto",
                  "steps": [
                        {
                              "step": "1",
                              "title": "Diagnóstico & Implantação",
                              "description": "Visita ao lote, topografia e definição do programa de necessidades familiar."
                        },
                        {
                              "step": "2",
                              "title": "Projeto Executivo em BIM",
                              "description": "Planejamento 3D detalhado de todas as instalações elétricas, hidráulicas e térmicas."
                        },
                        {
                              "step": "3",
                              "title": "Montagem Rápida & Entrega das Chaves",
                              "description": "Execução ágil sem desvios orçamentários nem atrasos imprevisíveis."
                        }
                  ]
            }
      },
      {
            "id": "projects-duda",
            "type": "projects",
            "variant": "Projects01",
            "content": {
                  "title": "Residências Construídas",
                  "subtitle": "Exemplos recentes de arquitetura consciente no Rio.",
                  "projects": [
                        {
                              "title": "Casa Lite Itaipava",
                              "category": "Serra Fluminense",
                              "description": "Módulos suspensos com vidros duplos térmicos e estrutura metálica reciclada em meio à mata nativa."
                        },
                        {
                              "title": "Villa Malibú Barra",
                              "category": "Condomínio Fechado - Barra da Tijuca",
                              "description": "Residência contemporânea de 750m² com brises de freijó e piscina aquecida por energia solar."
                        },
                        {
                              "title": "Refúgio Búzios",
                              "category": "Casa de Praia - Geribá",
                              "description": "Integração de pedras moledo, deck ecológico e pérgula bioclimática com iluminação indireta."
                        }
                  ]
            }
      },
      {
            "id": "testimonials-duda",
            "type": "testimonials",
            "variant": "Testimonials01",
            "content": {
                  "title": "O Que Dizem os Proprietários",
                  "items": [
                        {
                              "quote": "Ficamos impressionados com a velocidade da obra e a limpeza do canteiro. Em 8 meses estávamos com a casa de Itaipava totalmente pronta.",
                              "author": "Marcio e Daniela R.",
                              "role": "Proprietários Casa Lite"
                        },
                        {
                              "quote": "O Duda conseguiu unir modernidade, conforto e sustentabilidade como nenhum outro arquiteto que consultamos. A casa é fresca o ano inteiro.",
                              "author": "Thiago F. Vasconcelos",
                              "role": "Villa Malibú Barra"
                        }
                  ]
            }
      },
      {
            "id": "cta-duda",
            "type": "cta",
            "variant": "CTA01",
            "content": {
                  "headline": "Construa sua casa dos sonhos sem estresse de obra.",
                  "subheadline": "Entre em contato com nossa equipe na Barra da Tijuca e descubra nosso método construtivo.",
                  "buttonLabel": "Falar com Duda Porto Arquitetura"
            }
      },
      {
            "id": "footer-duda",
            "type": "footer",
            "variant": "Footer01",
            "content": {}
      }
]
    }
  ]
};

export default client;
