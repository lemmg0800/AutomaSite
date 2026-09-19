import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "oralmed-odontologia",
  status: "ativo",
  createdAt: "2026-09-19T00:53:12.516Z",
  updatedAt: "2026-09-19T00:53:12.519Z",

  business: {
    name: "Oralmed Centro Odontológico",
    legalName: "Oralmed Centro Odontológico Londrina Ltda",
    niche: "Clínica Odontológica Especializada & Implantes",
    city: "Londrina",
    state: "PR",
    address: "R. Pará, 1122 - Centro, Londrina - PR",
    phone: "(43) 3324-4000",
    whatsapp: "(43) 99144-5000",
    googleRating: 4.9,
    instagram: "@oralmedlondrina"
  },

  theme: {
    "primaryColor": "#0c4a6e",
    "secondaryColor": "#0284c7",
    "accentColor": "#38bdf8",
    "backgroundColor": "#030712",
    "textColor": "#f8fafc",
    "headingFont": "Montserrat",
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
        title: "Oralmed Centro Odontológico | Dentista e Implantes em Londrina - PR",
        description: "Corpo clínico multidisciplinar integrado, implantes dentários sem dor, ortodontia com alinhadores invisíveis e atendimento de urgência no centro de Londrina."
      },
      sections: [
        {
          id: "header-oralmed-odontologia",
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
          id: "hero-oralmed-odontologia",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Centro Odontológico de Referência Regional desde 1994",
            headline: "30 Anos Cuidando do Sorriso e da Saúde da Sua Família em Londrina",
            subheadline: "Corpo clínico multidisciplinar integrado, implantes dentários sem dor, ortodontia com alinhadores invisíveis e atendimento de urgência no centro de Londrina.",
            ctaPrimaryText: "Agendar Avaliação pelo WhatsApp",
            ctaSecondaryText: "Conhecer Tratamentos",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Consultório de Odontologia de Alta Tecnologia e Acolhimento em Londrina",
            stats: [
              { label: "Google Avaliações", value: "4.9 ★" },
              { label: "Atendimento", value: "Personalizado" },
              { label: "Localização", value: "Londrina - PR" }
            ]
          }
        },
        {
          id: "services-oralmed-odontologia",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Odontológicas",
            headline: "Cuidado Completo e Tecnologia em Cada Procedimento",
            subheadline: "Tratamentos planejados sob medida com tecnologia de ponta para restaurar a beleza e a função mastigatória.",
            services: [
          {
                    "id": "implantes",
                    "title": "Implantes Dentários & Carga Rápida",
                    "description": "Reposição dentária com parafusos de titânio biocompatíveis e coroas em porcelana de alta estética.",
                    "icon": "ShieldCheck"
          },
          {
                    "id": "alinhadores",
                    "title": "Alinhadores Invisíveis & Ortodontia",
                    "description": "Correção da mordida e alinhamento do sorriso de forma imperceptível e confortável.",
                    "icon": "Smile"
          },
          {
                    "id": "proteses",
                    "title": "Reabilitação Oral Completa",
                    "description": "Próteses sobre implantes e protocolos fixos que devolvem a força mastigatória integral.",
                    "icon": "Sparkles"
          },
          {
                    "id": "estetica",
                    "title": "Facetas & Clareamento a Laser",
                    "description": "Transformação do formato e cor dos dentes com facetas laminadas e clareamento seguro.",
                    "icon": "Star"
          }
]
          }
        },
        {
          id: "benefits-oralmed-odontologia",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Oralmed Centro Odontológico?",
            subtitle: "Segurança Biológica, Conforto e Tecnologia em Londrina",
            benefits: [
          {
                    "title": "30 Anos de Tradição",
                    "description": "Mais de 25 mil sorrisos transformados com ética e segurança em Londrina."
          },
          {
                    "title": "Corpo Clínico Integrado",
                    "description": "Todas as especialidades odontológicas reunidas em um único endereço central."
          },
          {
                    "title": "Tecnologia de Imagem Própria",
                    "description": "Raio-X digital panorâmico e tomografia no próprio consultório para diagnóstico imediato."
          }
]
          }
        },
        {
          id: "contact-oralmed-odontologia",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento e Agendamentos",
            headline: "Agende sua Avaliação com Nossa Equipe em Londrina",
            subheadline: "Estamos prontos para acolher você e planejar o tratamento ideal para a sua saúde bucal.",
            address: "R. Pará, 1122 - Centro, Londrina - PR",
            phone: "(43) 3324-4000",
            whatsapp: "(43) 99144-5000",
            ctaWhatsappText: "Falar no WhatsApp Agora"
          }
        }
      ]
    }
  ]
};

export default client;
