import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "gisele-taranto-arquitetura",
  status: 'published',
  createdAt: '2026-09-19T21:00:00.000Z',
  updatedAt: '2026-09-19T21:00:00.000Z',
  business: {
    name: "Gisele Taranto Arquitetura",
    legalName: "GISELE TARANTO ARQUITETURA LTDA",
    niche: "Arquitetura Residencial Contemporânea e Interiores de Luxo",
    city: "Rio de Janeiro",
    state: "RJ",
    address: "Av. Visconde de Albuquerque, 460 - Leblon, Rio de Janeiro - RJ",
    phone: "(21) 2294-8114",
    whatsapp: "(21) 99641-8114",
    email: "contato@giseletaranto.com",
    instagram: "@giseletarantoarquitetura"
  },
  theme: {
  "primaryColor": "#212121",
  "secondaryColor": "#303030",
  "accentColor": "#B08D57",
  "backgroundColor": "#121212",
  "textColor": "#F5F5F3",
  "headingFont": "Cormorant Garamond",
  "bodyFont": "Inter",
  "borderRadius": "sm",
  "mode": "dark",
  "enableCursor": false,
  "backgroundEffect": "none",
  "enableParallax": true
},
  pages: [
    {
      path: '',
      seo: {
        title: "Gisele Taranto Arquitetura | Arquitetura de Alto Padrão no Rio de Janeiro",
        description: "Projetos autorais residenciais e comerciais de excelência no Rio de Janeiro. Arquitetura atemporal, interiores e valorização patrimonial.",
        ogImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=85"
      },
      sections: [
      {
            "id": "header-taranto",
            "type": "header",
            "variant": "Header02",
            "content": {
                  "announcement": "Estúdio de Criação Leblon - Atendimento com hora marcada",
                  "navLinks": [
                        {
                              "label": "Especialidades",
                              "href": "#especialidades"
                        },
                        {
                              "label": "Espaços",
                              "href": "#galeria"
                        },
                        {
                              "label": "O Escritório",
                              "href": "#escritorio"
                        },
                        {
                              "label": "Diferenciais",
                              "href": "#diferenciais"
                        },
                        {
                              "label": "Dúvidas",
                              "href": "#faq"
                        }
                  ],
                  "ctaLabel": "Agendar Consulta"
            }
      },
      {
            "id": "hero-taranto",
            "type": "hero",
            "variant": "Hero04",
            "content": {
                  "tagline": "Minimalismo Afetivo & Exclusividade no Leblon",
                  "headline": "A sutileza das proporções perfeitas e a pureza dos materiais nobres.",
                  "subheadline": "Assinatura premiada internacionalmente por projetos que harmonizam arte contemporânea, luz natural filtrada e conforto tátil supremo.",
                  "imageUrl": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=85",
                  "primaryCta": {
                        "text": "Conectar com Gisele Taranto",
                        "href": "#contato"
                  },
                  "secondaryCta": {
                        "text": "Conhecer Projetos",
                        "href": "#galeria"
                  },
                  "stats": [
                        {
                              "value": "25+",
                              "label": "Anos de Premiações"
                        },
                        {
                              "value": "CasaCor",
                              "label": "Destaque Múltiplo"
                        },
                        {
                              "value": "Bienal",
                              "label": "Veneza & Milão"
                        }
                  ]
            }
      },
      {
            "id": "services-taranto",
            "type": "services",
            "variant": "Services03",
            "content": {
                  "badge": "Áreas de Atuação",
                  "title": "Composições espaciais de alto rigor e sensibilidade.",
                  "subtitle": "Projetos pensados individualmente como refúgios de serenidade urbana.",
                  "services": [
                        {
                              "title": "Residências e Vilas Urbanas",
                              "description": "Arquitetura limpa, ventilação natural abundante e diálogo permanente com jardins tropicais."
                        },
                        {
                              "title": "Apartamentos & Penthouses Leblon/Ipanema",
                              "description": "Plantas reconfiguradas para valorizar iluminação, vistas icônicas e privacidade sonora."
                        },
                        {
                              "title": "Projetos de Interiores com Arte Integrada",
                              "description": "Seleção curada de galerias, design autoral brasileiro e marcenarias esculturais."
                        }
                  ]
            }
      },
      {
            "id": "gallery-taranto",
            "type": "gallery",
            "variant": "Gallery01",
            "content": {
                  "title": "Espaços e Texturas Autorais",
                  "items": [
                        {
                              "label": "Living Aberto com Brises Móveis"
                        },
                        {
                              "label": "Pátio Interno com Vegetação Nativa"
                        },
                        {
                              "label": "Suíte Master em Travertino Navona"
                        },
                        {
                              "label": "Cozinha Gourmet Integrada em Nogueira"
                        },
                        {
                              "label": "Lareira Externa com Vista Cristo Redentor"
                        },
                        {
                              "label": "Galeria Íntima de Colecionador"
                        }
                  ]
            }
      },
      {
            "id": "about-taranto",
            "type": "about",
            "variant": "About01",
            "content": {
                  "badge": "Identidade & Assinatura",
                  "title": "Menos ruído, mais essência e poesia espacial.",
                  "text1": "Liderado pela arquiteta Gisele Taranto, o escritório se destaca no cenário nacional pelo rigor com a pureza construtiva e a integração de sustentabilidade e arte.",
                  "text2": "Participante recorrente dos principais salões globais de Milão a Veneza, o estúdio traduz o lifestyle cosmopolita do Rio com discrição inegociável.",
                  "highlights": [
                        {
                              "value": "18",
                              "label": "Edições CasaCor RJ"
                        },
                        {
                              "value": "100%",
                              "label": "Projetos Exclusivos"
                        },
                        {
                              "value": "A+",
                              "label": "Conforto Térmico e Acústico"
                        }
                  ],
                  "whyChoose": [
                        "Projetos luminotécnicos que valorizam a saúde circadiana",
                        "Especificação de madeiras certificadas e pedras regionais sustentáveis",
                        "Relacionamento transparente e consultivo com clientes exigentes"
                  ]
            }
      },
      {
            "id": "benefits-taranto",
            "type": "benefits",
            "variant": "Benefits01",
            "content": {
                  "title": "Diferenciais do Estúdio",
                  "subtitle": "Por que famílias de alta renda confiam em nossa assinatura.",
                  "items": [
                        {
                              "icon": "🌿",
                              "title": "Sustentabilidade Sensorial",
                              "description": "Materiais com pegada de carbono reduzida e ventilação passiva eficiente."
                        },
                        {
                              "icon": "🎨",
                              "title": "Conexão com as Artes",
                              "description": "Projetos desenvolvidos em sintonia com consultorias de arte contemporânea."
                        },
                        {
                              "icon": "📐",
                              "title": "Detalhamento Executivo Impecável",
                              "description": "Zero imprevistos na contratação de marcenaria, serralheria e marmoraria."
                        }
                  ]
            }
      },
      {
            "id": "testimonials-taranto",
            "type": "testimonials",
            "variant": "Testimonials01",
            "content": {
                  "title": "Depoimentos de Nossos Clientes",
                  "items": [
                        {
                              "quote": "A Gisele tem uma sensibilidade única para criar ambientes calmos, silenciosos e ao mesmo tempo incrivelmente sofisticados. Foi uma experiência perfeita.",
                              "author": "Beatriz e Carlos G.",
                              "role": "Proprietários de Apartamento no Leblon"
                        },
                        {
                              "quote": "O cuidado com os acabamentos e a marcenaria superou todas as nossas expectativas. Cada cantinho tem propósito e beleza.",
                              "author": "Dr. Fernando Albuquerque",
                              "role": "Residência em São Conrado"
                        }
                  ]
            }
      },
      {
            "id": "faq-taranto",
            "type": "faq",
            "variant": "FAQ01",
            "content": {
                  "title": "Esclarecimentos sobre Nossa Prática",
                  "items": [
                        {
                              "question": "Com quanta antecedência devo procurar o escritório?",
                              "answer": "Recomendamos o contato assim que o imóvel ou lote for adquirido, permitindo análise de viabilidade e elaboração das primeiras diretrizes conceituais."
                        },
                        {
                              "question": "Como é feita a escolha do mobiliário e obras de arte?",
                              "answer": "Realizamos visitas conjuntas com o cliente a feiras, antiquários, galerias e estúdios de designers renomados para compor uma coleção autêntica e pessoal."
                        }
                  ]
            }
      },
      {
            "id": "footer-taranto",
            "type": "footer",
            "variant": "Footer01",
            "content": {}
      }
]
    }
  ]
};

export default client;
