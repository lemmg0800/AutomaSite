import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "zamora-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:36.019Z",
  updatedAt: "2026-09-19T14:22:36.019Z",

  business: {
    name: "Zamora Advogados Associados",
    legalName: "Zamora Sociedade de Advogados",
    niche: "Advocacia Especializada & Consultoria Jurídica",
    city: "Rio Branco",
    state: "AC",
    address: "R. dos Engenheiros, 102 - Conjunto Tangará, Rio Branco - AC",
    phone: "(68) 3223-2211",
    whatsapp: "(68) 99984-2211",
    googleRating: 4.8,
    instagram: "@zamoraadvogados"
  },

  theme: {
    "primaryColor": "#1c1917",
    "secondaryColor": "#292524",
    "accentColor": "#eab308",
    "backgroundColor": "#0c0a09",
    "textColor": "#fafaf9",
    "headingFont": "Montserrat",
    "bodyFont": "Plus Jakarta Sans",
    "borderRadius": "md",
    "mode": "dark",
    "enableCursor": false,
    "backgroundEffect": "dots",
    "enableParallax": true
},

  pages: [
    {
      path: "",
      seo: {
        title: "Zamora Advogados Associados | Advogados em Rio Branco - AC",
        description: "Assessoria jurídica empresarial que alia solidez histórica e modernidade técnica para potencializar os resultados da sua empresa."
      },
      sections: [
        {
          id: "header-zamora-advogados",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Áreas de Atuação", href: "#servicos" },
              { label: "A Banca", href: "#diferenciais" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Consulta Jurídica"
          }
        },
        {
          id: "hero-zamora-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Sociedade de Advogados Consolidada desde 2002 em Rio Branco",
            headline: "Mais de 20 Anos Viabilizando Negócios e Soluções Jurídicas no Acre",
            subheadline: "Assessoria jurídica empresarial que alia solidez histórica e modernidade técnica para potencializar os resultados da sua empresa.",
            ctaPrimaryText: "Conversar com a Equipe no WhatsApp",
            ctaSecondaryText: "Conhecer Áreas de Atuação",
            imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Banca de Advocacia Corporativa e Estratégica em Rio Branco - AC",
            stats: [
              { label: "Avaliação Google", value: "4.8 ★" },
              { label: "Tradição", value: "22 Anos" },
              { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
            ]
          }
        },
        {
          id: "services-zamora-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Jurídicas",
            headline: "Atuação Consultiva e Contenciosa Estratégica",
            subheadline: "Soluções jurídicas preventivas e defensivas estruturadas para salvaguardar os direitos e o patrimônio dos nossos clientes.",
            services: [
          {
                    "id": "corporativo",
                    "title": "Consultoria Corporativa Integral",
                    "description": "Suporte jurídico no dia a dia dos negócios com respostas ágeis a dúvidas operacionais.",
                    "icon": "Building2"
          },
          {
                    "id": "fiscal",
                    "title": "Planejamento e Defesa Fiscal",
                    "description": "Redução de riscos e passivos fiscais com análises minuciosas da legislação estadual e federal.",
                    "icon": "Calculator"
          },
          {
                    "id": "compliance",
                    "title": "Compliance & Boas Práticas",
                    "description": "Elaboração de códigos de conduta interna e prevenção a riscos sancionatórios.",
                    "icon": "CheckSquare"
          },
          {
                    "id": "contratual",
                    "title": "Engenharia Contratual Estratégica",
                    "description": "Redação e revisão de contratos complexos de prestação de serviços e fornecimento.",
                    "icon": "PenTool"
          }
]
          }
        },
        {
          id: "benefits-zamora-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da Zamora Advogados Associados",
            subtitle: "Segurança Jurídica, Ética e Eficiência em Rio Branco - AC",
            benefits: [
          {
                    "title": "22 Anos de Reputação Impecável",
                    "description": "Tradição comprovada por duas décadas de parcerias com as principais marcas do estado."
          },
          {
                    "title": "Rede de Correspondentes Nacional",
                    "description": "Capacidade de acompanhamento de processos em todos os tribunais do país."
          },
          {
                    "title": "Relatórios de Gestão Jurídica",
                    "description": "Métricas claras de resultados e redução de contingências para os diretores."
          }
]
          }
        },
        {
          id: "contact-zamora-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agendamento e Contato",
            headline: "Fale com um Advogado Especialista em Rio Branco",
            subheadline: "Nosso corpo jurídico está à disposição para analisar sua demanda com total confidencialidade e rigor técnico.",
            address: "R. dos Engenheiros, 102 - Conjunto Tangará, Rio Branco - AC",
            phone: "(68) 3223-2211",
            whatsapp: "(68) 99984-2211",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        }
      ]
    }
  ]
};

export default client;
