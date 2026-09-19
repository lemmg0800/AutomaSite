import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "prodental-clinica-odontologica",
  status: "ativo",
  createdAt: "2026-09-19T00:53:12.951Z",
  updatedAt: "2026-09-19T00:53:12.951Z",

  business: {
    name: "Pró-Dental Clínica Odontológica",
    legalName: "Pró-Dental Clínica Odontológica Especializada Ltda",
    niche: "Clínica Odontológica Especializada & Implantes",
    city: "Curitiba",
    state: "PR",
    address: "R. Mariano Torres, 729 - Centro, Curitiba - PR",
    phone: "(41) 3233-1020",
    whatsapp: "(41) 99877-6655",
    googleRating: 4.8,
    instagram: "@prodentalcuritiba"
  },

  theme: {
    "primaryColor": "#0f172a",
    "secondaryColor": "#334155",
    "accentColor": "#06b6d4",
    "backgroundColor": "#020617",
    "textColor": "#f8fafc",
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
        title: "Pró-Dental Clínica Odontológica | Dentista e Implantes em Curitiba - PR",
        description: "Endodontia em sessão única sob microscópio Zeiss, cirurgias regenerativas a laser e prevenção de precisão no centro de Curitiba."
      },
      sections: [
        {
          id: "header-prodental-clinica-odontologica",
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
          id: "hero-prodental-clinica-odontologica",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Diagnóstico por Imagem e Alta Precisão Clínica em Curitiba",
            headline: "Precisão Microscópica em Tratamentos Odontológicos Avançados",
            subheadline: "Endodontia em sessão única sob microscópio Zeiss, cirurgias regenerativas a laser e prevenção de precisão no centro de Curitiba.",
            ctaPrimaryText: "Agendar Consulta por WhatsApp",
            ctaSecondaryText: "Conhecer Tratamentos",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Consultório de Odontologia de Alta Tecnologia e Acolhimento em Curitiba",
            stats: [
              { label: "Google Avaliações", value: "4.8 ★" },
              { label: "Atendimento", value: "Personalizado" },
              { label: "Localização", value: "Curitiba - PR" }
            ]
          }
        },
        {
          id: "services-prodental-clinica-odontologica",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Odontológicas",
            headline: "Cuidado Completo e Tecnologia em Cada Procedimento",
            subheadline: "Tratamentos planejados sob medida com tecnologia de ponta para restaurar a beleza e a função mastigatória.",
            services: [
          {
                    "id": "microscopia",
                    "title": "Canal em Sessão Única com Microscopia",
                    "description": "Tratamento endodôntico rápido, preciso e sem dor, visualizando anatomias dentárias complexas.",
                    "icon": "Eye"
          },
          {
                    "id": "laserterapia",
                    "title": "Odontologia a Laser & Cicatrização",
                    "description": "Bioestimulação rápida de aftas, herpes e cicatrização acelerada no pós-cirúrgico.",
                    "icon": "Zap"
          },
          {
                    "id": "implantes-proteses",
                    "title": "Implantes & Coroas Zircônia",
                    "description": "Reabilitações resistentes e livres de metal com ajuste micrométrico para conforto absoluto.",
                    "icon": "ShieldCheck"
          },
          {
                    "id": "prevencao-checkup",
                    "title": "Check-up Preventivo Digital",
                    "description": "Câmera intraoral que detecta lesões incipientes antes de se transformarem em dor de dente.",
                    "icon": "Sparkles"
          }
]
          }
        },
        {
          id: "benefits-prodental-clinica-odontologica",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Pró-Dental Clínica Odontológica?",
            subtitle: "Segurança Biológica, Conforto e Tecnologia em Curitiba",
            benefits: [
          {
                    "title": "Microscopia Cirúrgica Operatória",
                    "description": "Aumento de até 20x do campo de visão para preservar o máximo da estrutura do dente sadio."
          },
          {
                    "title": "Sessões Otimizadas",
                    "description": "Procedimentos complexos resolvidos com agilidade para quem possui rotina profissional intensa."
          },
          {
                    "title": "Localização Central Acessível",
                    "description": "Fácil estacionamento e acesso rápido para pacientes de todas as regiões de Curitiba."
          }
]
          }
        },
        {
          id: "contact-prodental-clinica-odontologica",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento e Agendamentos",
            headline: "Agende sua Avaliação com Nossa Equipe em Curitiba",
            subheadline: "Estamos prontos para acolher você e planejar o tratamento ideal para a sua saúde bucal.",
            address: "R. Mariano Torres, 729 - Centro, Curitiba - PR",
            phone: "(41) 3233-1020",
            whatsapp: "(41) 99877-6655",
            ctaWhatsappText: "Falar no WhatsApp Agora"
          }
        }
      ]
    }
  ]
};

export default client;
