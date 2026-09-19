import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "instituto-kopp-odontologia",
  status: "ativo",
  createdAt: "2026-09-19T00:53:12.815Z",
  updatedAt: "2026-09-19T00:53:12.815Z",

  business: {
    name: "Instituto Kopp Odontologia",
    legalName: "Instituto Kopp Odontologia e Cirurgias Avançadas Ltda",
    niche: "Clínica Odontológica Especializada & Implantes",
    city: "Curitiba",
    state: "PR",
    address: "Av. Senador Souza Naves, 991 - Cristo Rei, Curitiba - PR",
    phone: "(41) 3363-7272",
    whatsapp: "(41) 99988-1122",
    googleRating: 4.9,
    instagram: "@institutokopp"
  },

  theme: {
    "primaryColor": "#064e3b",
    "secondaryColor": "#065f46",
    "accentColor": "#10b981",
    "backgroundColor": "#022c22",
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
        title: "Instituto Kopp Odontologia | Dentista e Implantes em Curitiba - PR",
        description: "Centro cirúrgico de nível hospitalar, implantes guiados sem cortes traumáticos e dentes fixos no mesmo dia através da metodologia Kopp consagrada."
      },
      sections: [
        {
          id: "header-instituto-kopp-odontologia",
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
          id: "hero-instituto-kopp-odontologia",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Centro de Excelência em Implantodontia e Cirurgia Guiada",
            headline: "Pioneirismo em Implantes Dentários e Carga Imediata em Curitiba",
            subheadline: "Centro cirúrgico de nível hospitalar, implantes guiados sem cortes traumáticos e dentes fixos no mesmo dia através da metodologia Kopp consagrada.",
            ctaPrimaryText: "Fale com a Equipe de Especialistas",
            ctaSecondaryText: "Conhecer Tratamentos",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Consultório de Odontologia de Alta Tecnologia e Acolhimento em Curitiba",
            stats: [
              { label: "Google Avaliações", value: "4.9 ★" },
              { label: "Atendimento", value: "Personalizado" },
              { label: "Localização", value: "Curitiba - PR" }
            ]
          }
        },
        {
          id: "services-instituto-kopp-odontologia",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Odontológicas",
            headline: "Cuidado Completo e Tecnologia em Cada Procedimento",
            subheadline: "Tratamentos planejados sob medida com tecnologia de ponta para restaurar a beleza e a função mastigatória.",
            services: [
          {
                    "id": "carga-imediata",
                    "title": "Implantes com Carga Imediata",
                    "description": "Tenha seus novos dentes fixos instalados em até 72 horas com planejamento tomográfico guiado.",
                    "icon": "ShieldCheck"
          },
          {
                    "id": "zigomatico",
                    "title": "Implantes Zigomáticos para Pouco Osso",
                    "description": "Solução definitiva para pacientes que perderam o osso maxilar, eliminando a necessidade de enxertos longos.",
                    "icon": "Award"
          },
          {
                    "id": "cirurgia-guiada",
                    "title": "Cirurgia Guiada por Computador",
                    "description": "Procedimentos sem cortes de bisturi, sem inchaço e com pós-operatório surpreendentemente rápido.",
                    "icon": "Zap"
          },
          {
                    "id": "sedacao",
                    "title": "Odontologia com Sedação Consciente",
                    "description": "Tratamentos realizados sob sedação assistida por médico anestesiologista para total conforto e zero ansiedade.",
                    "icon": "Heart"
          }
]
          }
        },
        {
          id: "benefits-instituto-kopp-odontologia",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Instituto Kopp Odontologia?",
            subtitle: "Segurança Biológica, Conforto e Tecnologia em Curitiba",
            benefits: [
          {
                    "title": "Centro Cirúrgico Próprio",
                    "description": "Ambiente homologado com rigorosos protocolos biológicos de esterilização hospitalar."
          },
          {
                    "title": "Patentes e Metodologias Próprias",
                    "description": "Reconhecimento nacional e internacional na formação de novos implantodontistas."
          },
          {
                    "title": "Garantia e Rastreabilidade",
                    "description": "Componentes de titânio com certificação internacional de biocompatibilidade."
          }
]
          }
        },
        {
          id: "contact-instituto-kopp-odontologia",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento e Agendamentos",
            headline: "Agende sua Avaliação com Nossa Equipe em Curitiba",
            subheadline: "Estamos prontos para acolher você e planejar o tratamento ideal para a sua saúde bucal.",
            address: "Av. Senador Souza Naves, 991 - Cristo Rei, Curitiba - PR",
            phone: "(41) 3363-7272",
            whatsapp: "(41) 99988-1122",
            ctaWhatsappText: "Falar no WhatsApp Agora"
          }
        }
      ]
    }
  ]
};

export default client;
