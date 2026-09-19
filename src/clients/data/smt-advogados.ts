import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "smt-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.907Z",
  updatedAt: "2026-09-19T14:22:34.907Z",

  business: {
    name: "SMT Advogados (Sousa, Melo & Tapeocy)",
    legalName: "Sousa, Melo & Tapeocy Sociedade de Advogados",
    niche: "Advocacia Especializada & Consultoria Jurídica",
    city: "Rio Branco",
    state: "AC",
    address: "R. Thaumaturgo de Azevedo, 99 - Ipase, Rio Branco - AC",
    phone: "(68) 2102-8778",
    whatsapp: "(68) 99953-6033",
    googleRating: 5,
    instagram: "@smtadvogados"
  },

  theme: {
    "primaryColor": "#0c1a2c",
    "secondaryColor": "#1d3557",
    "accentColor": "#d4af37",
    "backgroundColor": "#050b14",
    "textColor": "#f8fafc",
    "headingFont": "Playfair Display",
    "bodyFont": "Plus Jakarta Sans",
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
        title: "SMT Advogados (Sousa, Melo & Tapeocy) | Advogados em Rio Branco - AC",
        description: "Estruturação de holdings familiares, blindagem jurídica de ativos e advocacia empresarial preventiva para famílias empresárias no Acre."
      },
      sections: [
        {
          id: "header-smt-advogados",
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
          id: "hero-smt-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Referência em Holding Familiar e Estruturação Societária",
            headline: "Proteção Patrimonial e Planejamento Sucessório de Alta Fidelidade",
            subheadline: "Estruturação de holdings familiares, blindagem jurídica de ativos e advocacia empresarial preventiva para famílias empresárias no Acre.",
            ctaPrimaryText: "Agendar Reunião Consultiva no WhatsApp",
            ctaSecondaryText: "Conhecer Áreas de Atuação",
            imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Banca de Advocacia Corporativa e Estratégica em Rio Branco - AC",
            stats: [
              { label: "Avaliação Google", value: "5 ★" },
              { label: "Tradição", value: "8 Anos" },
              { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
            ]
          }
        },
        {
          id: "services-smt-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Jurídicas",
            headline: "Atuação Consultiva e Contenciosa Estratégica",
            subheadline: "Soluções jurídicas preventivas e defensivas estruturadas para salvaguardar os direitos e o patrimônio dos nossos clientes.",
            services: [
          {
                    "id": "holding",
                    "title": "Holding Familiar & Sucessão",
                    "description": "Evite o inventário tradicional e garanta a transmissão patrimonial sem conflitos.",
                    "icon": "Building"
          },
          {
                    "id": "blindagem",
                    "title": "Governança & Proteção de Ativos",
                    "description": "Separação jurídica inteligente entre os riscos operacionais e o patrimônio pessoal.",
                    "icon": "Shield"
          },
          {
                    "id": "contratos",
                    "title": "Direito Empresarial & Contratos",
                    "description": "Assessoria contínua para empresas que buscam segurança jurídica em expansão.",
                    "icon": "FileText"
          },
          {
                    "id": "tributario-holding",
                    "title": "Planejamento Tributário Sucessório",
                    "description": "Redução lícita de encargos fiscais sobre transmissões de herança e doações.",
                    "icon": "TrendingUp"
          }
]
          }
        },
        {
          id: "benefits-smt-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da SMT Advogados (Sousa, Melo & Tapeocy)",
            subtitle: "Segurança Jurídica, Ética e Eficiência em Rio Branco - AC",
            benefits: [
          {
                    "title": "Especialização em Sucessão",
                    "description": "Foco técnico aprofundado em holdings e proteção de legado para produtores e empresários."
          },
          {
                    "title": "Atendimento Sigiloso e Exclusivo",
                    "description": "Análise individualizada de cada família com máxima confidencialidade e segurança."
          },
          {
                    "title": "Metodologia Ágil e Segura",
                    "description": "Planejamentos validados perante a legislação federal e a jurisprudência consolidada."
          }
]
          }
        },
        {
          id: "contact-smt-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agendamento e Contato",
            headline: "Fale com um Advogado Especialista em Rio Branco",
            subheadline: "Nosso corpo jurídico está à disposição para analisar sua demanda com total confidencialidade e rigor técnico.",
            address: "R. Thaumaturgo de Azevedo, 99 - Ipase, Rio Branco - AC",
            phone: "(68) 2102-8778",
            whatsapp: "(68) 99953-6033",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        }
      ]
    }
  ]
};

export default client;
