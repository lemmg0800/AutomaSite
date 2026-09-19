import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "danzicourt-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:35.395Z",
  updatedAt: "2026-09-19T14:22:35.395Z",

  business: {
    name: "D'Anzicourt Advogados Associados",
    legalName: "D'Anzicourt Sociedade de Advogados",
    niche: "Advocacia Especializada & Consultoria Jurídica",
    city: "Rio Branco",
    state: "AC",
    address: "Av. Brasil, 303 - Salas 706/708, Centro Empresarial Rio Branco, Rio Branco - AC",
    phone: "(68) 3223-3884",
    whatsapp: "(68) 99988-3884",
    googleRating: 4.9,
    instagram: "@danzicourtadvogados"
  },

  theme: {
    "primaryColor": "#1e1b4b",
    "secondaryColor": "#312e81",
    "accentColor": "#818cf8",
    "backgroundColor": "#090818",
    "textColor": "#f8fafc",
    "headingFont": "Playfair Display",
    "bodyFont": "Inter",
    "borderRadius": "lg",
    "mode": "dark",
    "enableCursor": false,
    "backgroundEffect": "mesh",
    "enableParallax": true
},

  pages: [
    {
      path: "",
      seo: {
        title: "D'Anzicourt Advogados Associados | Advogados em Rio Branco - AC",
        description: "Representação de categorias profissionais, teses tributárias consolidadas e defesas contenciosas perante a Justiça Federal e Estadual."
      },
      sections: [
        {
          id: "header-danzicourt-advogados",
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
          id: "hero-danzicourt-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Ações Coletivas e Direito Tributário Estratégico",
            headline: "Defesa Coletiva e Recuperação de Créditos com Alta Precisão Técnica",
            subheadline: "Representação de categorias profissionais, teses tributárias consolidadas e defesas contenciosas perante a Justiça Federal e Estadual.",
            ctaPrimaryText: "Consultar Viabilidade no WhatsApp",
            ctaSecondaryText: "Conhecer Áreas de Atuação",
            imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Banca de Advocacia Corporativa e Estratégica em Rio Branco - AC",
            stats: [
              { label: "Avaliação Google", value: "4.9 ★" },
              { label: "Tradição", value: "16 Anos" },
              { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
            ]
          }
        },
        {
          id: "services-danzicourt-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Jurídicas",
            headline: "Atuação Consultiva e Contenciosa Estratégica",
            subheadline: "Soluções jurídicas preventivas e defensivas estruturadas para salvaguardar os direitos e o patrimônio dos nossos clientes.",
            services: [
          {
                    "id": "coletivas",
                    "title": "Ações Coletivas & Sindicatos",
                    "description": "Defesa de associações e categorias em ações civis públicas e direitos difusos.",
                    "icon": "Briefcase"
          },
          {
                    "id": "tributos-recuperacao",
                    "title": "Recuperação de Créditos Tributários",
                    "description": "Compensação de tributos recolhidos indevidamente através de teses firmadas no STF/STJ.",
                    "icon": "Coins"
          },
          {
                    "id": "servidor",
                    "title": "Direito do Servidor Público",
                    "description": "Revisão de planos de cargos, progressões salariais e defesas em PADs.",
                    "icon": "Award"
          },
          {
                    "id": "societario",
                    "title": "Contencioso Societário e Comercial",
                    "description": "Dissolução de sociedades e apuração de haveres com rigor pericial.",
                    "icon": "FileSpreadsheet"
          }
]
          }
        },
        {
          id: "benefits-danzicourt-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da D'Anzicourt Advogados Associados",
            subtitle: "Segurança Jurídica, Ética e Eficiência em Rio Branco - AC",
            benefits: [
          {
                    "title": "Teses Tributárias Robustas",
                    "description": "Atuação respaldada por precedentes firmados nos tribunais superiores de Brasília."
          },
          {
                    "title": "Localização Privilegiada",
                    "description": "Salas corporativas no Centro Empresarial de Rio Branco com acesso fácil aos tribunais."
          },
          {
                    "title": "Transparência em Cada Etapa",
                    "description": "Relatórios processuais detalhados para clientes individuais e diretorias sindicais."
          }
]
          }
        },
        {
          id: "contact-danzicourt-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agendamento e Contato",
            headline: "Fale com um Advogado Especialista em Rio Branco",
            subheadline: "Nosso corpo jurídico está à disposição para analisar sua demanda com total confidencialidade e rigor técnico.",
            address: "Av. Brasil, 303 - Salas 706/708, Centro Empresarial Rio Branco, Rio Branco - AC",
            phone: "(68) 3223-3884",
            whatsapp: "(68) 99988-3884",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        }
      ]
    }
  ]
};

export default client;
