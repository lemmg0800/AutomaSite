import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "murano-odontologia",
  status: "ativo",
  createdAt: "2026-09-19T00:53:12.670Z",
  updatedAt: "2026-09-19T00:53:12.670Z",

  business: {
    name: "Murano Odontologia Especializada",
    legalName: "Murano Odontologia Especializada Curitiba Ltda",
    niche: "Clínica Odontológica Especializada & Implantes",
    city: "Curitiba",
    state: "PR",
    address: "R. Desembargador Motta, 1499 - Batel, Curitiba - PR",
    phone: "(41) 3342-9090",
    whatsapp: "(41) 98765-4321",
    googleRating: 5,
    instagram: "@muranoodontologia"
  },

  theme: {
    "primaryColor": "#0f172a",
    "secondaryColor": "#1e293b",
    "accentColor": "#d97706",
    "backgroundColor": "#020617",
    "textColor": "#f8fafc",
    "headingFont": "Playfair Display",
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
        title: "Murano Odontologia Especializada | Dentista e Implantes em Curitiba - PR",
        description: "Sorrisos desenhados com harmonia facial, lentes de contato dentais em cerâmica ultrafina e tratamentos minimamente invasivos em ambiente boutique exclusivo."
      },
      sections: [
        {
          id: "header-murano-odontologia",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Tratamentos", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Tecnologia", href: "#diferenciais" },
              { label: "Avaliações", href: "#depoimentos" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar Consulta"
          }
        },
        {
          id: "hero-murano-odontologia",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Odontologia de Alto Padrão no Coração do Batel",
            headline: "A Arte da Odontologia Estética e Reabilitação Oral no Batel",
            subheadline: "Sorrisos desenhados com harmonia facial, lentes de contato dentais em cerâmica ultrafina e tratamentos minimamente invasivos em ambiente boutique exclusivo.",
            ctaPrimaryText: "Solicitar Agendamento Exclusivo",
            ctaSecondaryText: "Conhecer Tratamentos",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Consultório de Odontologia de Alta Tecnologia e Acolhimento em Curitiba",
            stats: [
              { label: "Google Avaliações", value: "5 ★" },
              { label: "Atendimento", value: "Personalizado" },
              { label: "Localização", value: "Curitiba - PR" }
            ]
          }
        },
        {
          id: "services-murano-odontologia",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Odontológicas",
            headline: "Cuidado Completo e Tecnologia em Cada Procedimento",
            subheadline: "Tratamentos planejados sob medida com tecnologia de ponta para restaurar a beleza e a função mastigatória.",
            services: [
          {
                    "id": "lentes",
                    "title": "Lentes de Contato em Porcelana",
                    "description": "Planejamento digital do sorriso com lâminas cerâmicas feitas sob medida para naturalidade absoluta.",
                    "icon": "Sparkles"
          },
          {
                    "id": "protocolo",
                    "title": "Reabilitação Estética & Funcional",
                    "description": "Recuperação estética e oclusal completa para casos de desgaste severo e perda dentária.",
                    "icon": "ShieldCheck"
          },
          {
                    "id": "invisalign",
                    "title": "Ortodontia Estética Invisível",
                    "description": "Alinhamento ortodôntico sofisticado com tecnologia 3D sem brackets metálicos.",
                    "icon": "Smile"
          },
          {
                    "id": "harmonizacao",
                    "title": "Harmonização Orofacial",
                    "description": "Preenchimento labial sutil e bioestimuladores para emoldurar o novo sorriso com equilíbrio.",
                    "icon": "Star"
          }
]
          }
        },
        {
          id: "benefits-murano-odontologia",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Murano Odontologia Especializada?",
            subtitle: "Segurança Biológica, Conforto e Tecnologia em Curitiba",
            benefits: [
          {
                    "title": "Atendimento Exclusivo e Privativo",
                    "description": "Consultas com tempo dedicado sem salas de espera cheias no nobre bairro do Batel."
          },
          {
                    "title": "Planejamento Digital DSD",
                    "description": "Você visualiza e aprova o resultado estético do seu sorriso antes de iniciar qualquer desgaste."
          },
          {
                    "title": "Laboratório Cerâmico Premium",
                    "description": "Artistas ceramistas dedicados a reproduzir cada detalhe de translucidez e textura natural."
          }
]
          }
        },
        {
          id: "contact-murano-odontologia",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento e Agendamentos",
            headline: "Agende sua Avaliação com Nossa Equipe em Curitiba",
            subheadline: "Estamos prontos para acolher você e planejar o tratamento ideal para a sua saúde bucal.",
            address: "R. Desembargador Motta, 1499 - Batel, Curitiba - PR",
            phone: "(41) 3342-9090",
            whatsapp: "(41) 98765-4321",
            ctaWhatsappText: "Falar no WhatsApp Agora"
          }
        }
      ]
    }
  ]
};

export default client;
