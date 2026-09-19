import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "callil-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:35.740Z",
  updatedAt: "2026-09-19T14:22:35.740Z",

  business: {
    name: "Callil Advogados",
    legalName: "Callil Advocacia e Consultoria Jurídica",
    niche: "Advocacia Especializada & Consultoria Jurídica",
    city: "Rio Branco",
    state: "AC",
    address: "R. Ipanema, 219 - Village Wilde Maciel, Rio Branco - AC",
    phone: "(68) 3227-8720",
    whatsapp: "(68) 99256-3492",
    googleRating: 4.8,
    instagram: "@calliladvogados"
  },

  theme: {
    "primaryColor": "#111827",
    "secondaryColor": "#1f2937",
    "accentColor": "#38bdf8",
    "backgroundColor": "#030712",
    "textColor": "#f9fafb",
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
        title: "Callil Advogados | Advogados em Rio Branco - AC",
        description: "Advocacia corporativa preventiva, assessoria em negócios de grande porte e gestão eficiente do contencioso judicial em Rio Branco."
      },
      sections: [
        {
          id: "header-callil-advogados",
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
          id: "hero-callil-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Advocacia Empresarial e Estratégia Corporativa",
            headline: "Soluções Jurídicas Estratégicas para o Crescimento Seguro de Empresas",
            subheadline: "Advocacia corporativa preventiva, assessoria em negócios de grande porte e gestão eficiente do contencioso judicial em Rio Branco.",
            ctaPrimaryText: "Falar com a Equipe Jurídica no WhatsApp",
            ctaSecondaryText: "Conhecer Áreas de Atuação",
            imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Banca de Advocacia Corporativa e Estratégica em Rio Branco - AC",
            stats: [
              { label: "Avaliação Google", value: "4.8 ★" },
              { label: "Tradição", value: "14 Anos" },
              { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
            ]
          }
        },
        {
          id: "services-callil-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Jurídicas",
            headline: "Atuação Consultiva e Contenciosa Estratégica",
            subheadline: "Soluções jurídicas preventivas e defensivas estruturadas para salvaguardar os direitos e o patrimônio dos nossos clientes.",
            services: [
          {
                    "id": "estrategia",
                    "title": "Consultoria Preventiva Empresarial",
                    "description": "Identificação e mitigação proativa de riscos antes que se tornem processos judiciais.",
                    "icon": "CheckCircle"
          },
          {
                    "id": "trabalhista-patronal",
                    "title": "Defesa Trabalhista Patronal",
                    "description": "Controle de passivo trabalhista e adequação às normas de conformidade laboral.",
                    "icon": "Users"
          },
          {
                    "id": "recuperacao",
                    "title": "Recuperação de Créditos Comerciais",
                    "description": "Cobrança jurídica especializada e renegociação extrajudicial de alto rendimento.",
                    "icon": "DollarSign"
          },
          {
                    "id": "imobiliario",
                    "title": "Direito Imobiliário & Regularização",
                    "description": "Due diligence imobiliária, contratos de compra e venda e regularização de imóveis.",
                    "icon": "Home"
          }
]
          }
        },
        {
          id: "benefits-callil-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da Callil Advogados",
            subtitle: "Segurança Jurídica, Ética e Eficiência em Rio Branco - AC",
            benefits: [
          {
                    "title": "Visão de Negócios 360°",
                    "description": "Compreensão aprofundada da rotina das empresas para oferecer soluções práticas e rentáveis."
          },
          {
                    "title": "Prevenção Ativa de Passivos",
                    "description": "Redução comprovada do número de ações judiciais sofridas pelos clientes contratantes."
          },
          {
                    "title": "Estrutura Moderna em Rio Branco",
                    "description": "Sede própria equipada com tecnologia de ponta para atendimento presencial e virtual."
          }
]
          }
        },
        {
          id: "contact-callil-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agendamento e Contato",
            headline: "Fale com um Advogado Especialista em Rio Branco",
            subheadline: "Nosso corpo jurídico está à disposição para analisar sua demanda com total confidencialidade e rigor técnico.",
            address: "R. Ipanema, 219 - Village Wilde Maciel, Rio Branco - AC",
            phone: "(68) 3227-8720",
            whatsapp: "(68) 99256-3492",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        }
      ]
    }
  ]
};

export default client;
