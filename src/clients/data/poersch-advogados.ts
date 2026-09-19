import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "poersch-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.616Z",
  updatedAt: "2026-09-19T14:22:34.616Z",

  business: {
    name: "Poersch & Poersch Advogados Associados",
    legalName: "Poersch & Poersch Advogados Associados S/S",
    niche: "Advocacia Especializada & Consultoria Jurídica",
    city: "Rio Branco",
    state: "AC",
    address: "R. Benjamin Constant, 977 - Centro, Rio Branco - AC",
    phone: "(68) 3224-1411",
    whatsapp: "(68) 99984-1411",
    googleRating: 4.9,
    instagram: "@poerschadvogados"
  },

  theme: {
    "primaryColor": "#0f172a",
    "secondaryColor": "#1e293b",
    "accentColor": "#c29d59",
    "backgroundColor": "#020617",
    "textColor": "#f8fafc",
    "headingFont": "Playfair Display",
    "bodyFont": "Plus Jakarta Sans",
    "borderRadius": "md",
    "mode": "dark",
    "enableCursor": false,
    "backgroundEffect": "mesh",
    "enableParallax": true
},

  pages: [
    {
      path: "",
      seo: {
        title: "Poersch & Poersch Advogados Associados | Advogados em Rio Branco - AC",
        description: "Defesa contenciosa rigorosa e assessoria jurídica consultiva para empresas, famílias e instituições com o mais alto padrão ético do estado."
      },
      sections: [
        {
          id: "header-poersch-advogados",
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
          id: "hero-poersch-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Sociedade de Advogados Fundada em 1987 em Rio Branco",
            headline: "37 Anos de Tradição e Excelência Jurídica Estratégica no Acre",
            subheadline: "Defesa contenciosa rigorosa e assessoria jurídica consultiva para empresas, famílias e instituições com o mais alto padrão ético do estado.",
            ctaPrimaryText: "Falar com um Advogado no WhatsApp",
            ctaSecondaryText: "Conhecer Áreas de Atuação",
            imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Banca de Advocacia Corporativa e Estratégica em Rio Branco - AC",
            stats: [
              { label: "Avaliação Google", value: "4.9 ★" },
              { label: "Tradição", value: "37 Anos" },
              { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
            ]
          }
        },
        {
          id: "services-poersch-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Jurídicas",
            headline: "Atuação Consultiva e Contenciosa Estratégica",
            subheadline: "Soluções jurídicas preventivas e defensivas estruturadas para salvaguardar os direitos e o patrimônio dos nossos clientes.",
            services: [
          {
                    "id": "empresarial",
                    "title": "Direito Empresarial & Societário",
                    "description": "Estruturação de contratos, governança corporativa e fusões para segurança patrimonial.",
                    "icon": "Building2"
          },
          {
                    "id": "administrativo",
                    "title": "Direito Administrativo & Regulatório",
                    "description": "Defesa perante tribunais de contas, licitações e contencioso com o poder público.",
                    "icon": "Scale"
          },
          {
                    "id": "tributario",
                    "title": "Consultoria Tributária & Fiscal",
                    "description": "Defesas fiscais administrativas e judiciais para otimização da carga tributária.",
                    "icon": "ShieldCheck"
          },
          {
                    "id": "civel",
                    "title": "Contencioso Cível Estratégico",
                    "description": "Resolução de disputas complexas, responsabilidade civil e litígios contratuais.",
                    "icon": "Award"
          }
]
          }
        },
        {
          id: "benefits-poersch-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da Poersch & Poersch Advogados Associados",
            subtitle: "Segurança Jurídica, Ética e Eficiência em Rio Branco - AC",
            benefits: [
          {
                    "title": "Pioneirismo desde 1987",
                    "description": "Quase quatro décadas de presença ininterrupta liderando casos emblemáticos no TJAC e tribunais superiores."
          },
          {
                    "title": "Corpo Jurídico Multidisciplinar",
                    "description": "Equipe sênior especializada em direito público e privado para atender demandas de alta complexidade."
          },
          {
                    "title": "Atendimento Personalizado",
                    "description": "Acompanhamento minucioso e direto pelos sócios titulares para cada processo e cliente."
          }
]
          }
        },
        {
          id: "contact-poersch-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agendamento e Contato",
            headline: "Fale com um Advogado Especialista em Rio Branco",
            subheadline: "Nosso corpo jurídico está à disposição para analisar sua demanda com total confidencialidade e rigor técnico.",
            address: "R. Benjamin Constant, 977 - Centro, Rio Branco - AC",
            phone: "(68) 3224-1411",
            whatsapp: "(68) 99984-1411",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        }
      ]
    }
  ]
};

export default client;
