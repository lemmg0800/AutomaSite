import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "sapata-estudio-oral",
  status: "ativo",
  createdAt: "2026-09-19T00:53:13.102Z",
  updatedAt: "2026-09-19T00:53:13.102Z",

  business: {
    name: "Sapata Estúdio Oral",
    legalName: "Sapata Estúdio Oral Maringá Ltda",
    niche: "Clínica Odontológica Especializada & Implantes",
    city: "Maringá",
    state: "PR",
    address: "Av. Humaitá, 452 - Zona 04, Maringá - PR",
    phone: "(44) 3028-5000",
    whatsapp: "(44) 99800-5000",
    googleRating: 5,
    instagram: "@sapataestudiooral"
  },

  theme: {
    "primaryColor": "#18181b",
    "secondaryColor": "#27272a",
    "accentColor": "#8b5cf6",
    "backgroundColor": "#09090b",
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
        title: "Sapata Estúdio Oral | Dentista e Implantes em Maringá - PR",
        description: "Escaneamento 3D sem moldagens de massa, restaurações em zircônia usinadas no mesmo dia e alinhamento ortodôntico digital de última geração."
      },
      sections: [
        {
          id: "header-sapata-estudio-oral",
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
          id: "hero-sapata-estudio-oral",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "Estúdio Odontológico 100% Digital e Tecnológico",
            headline: "O Futuro da Odontologia Digital CAD/CAM Chegou a Maringá",
            subheadline: "Escaneamento 3D sem moldagens de massa, restaurações em zircônia usinadas no mesmo dia e alinhamento ortodôntico digital de última geração.",
            ctaPrimaryText: "Conhecer o Fluxo Digital no WhatsApp",
            ctaSecondaryText: "Conhecer Tratamentos",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Consultório de Odontologia de Alta Tecnologia e Acolhimento em Maringá",
            stats: [
              { label: "Google Avaliações", value: "5 ★" },
              { label: "Atendimento", value: "Personalizado" },
              { label: "Localização", value: "Maringá - PR" }
            ]
          }
        },
        {
          id: "services-sapata-estudio-oral",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Odontológicas",
            headline: "Cuidado Completo e Tecnologia em Cada Procedimento",
            subheadline: "Tratamentos planejados sob medida com tecnologia de ponta para restaurar a beleza e a função mastigatória.",
            services: [
          {
                    "id": "cad-cam",
                    "title": "Dentes em 1 Dia com CAD/CAM 3D",
                    "description": "Coroas e facetas usinadas em minutos através de robótica dental de máxima precisão.",
                    "icon": "Cpu"
          },
          {
                    "id": "scanner-3d",
                    "title": "Escaneamento Intraoral Sem Massa",
                    "description": "Elimine a ânsia e o desconforto das moldagens antigas com escaneamento colorido instantâneo.",
                    "icon": "Camera"
          },
          {
                    "id": "alinhadores-3d",
                    "title": "Alinhadores Invisíveis Guiados",
                    "description": "Planejamento ortodôntico milimétrico com alinhadores transparentes que se adaptam à sua vida social.",
                    "icon": "Smile"
          },
          {
                    "id": "implante-guiado",
                    "title": "Implantes Guiados por Tomografia",
                    "description": "Guias cirúrgicos impressos em impressora 3D para posicionamento milimétrico sem pontos.",
                    "icon": "ShieldCheck"
          }
]
          }
        },
        {
          id: "benefits-sapata-estudio-oral",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Sapata Estúdio Oral?",
            subtitle: "Segurança Biológica, Conforto e Tecnologia em Maringá",
            benefits: [
          {
                    "title": "Fluxo 100% Digital Integrado",
                    "description": "Do diagnóstico ao resultado final, tudo passa por softwares de inteligência e usinagem de alta tecnologia."
          },
          {
                    "title": "Conforto Máximo para o Paciente",
                    "description": "Esqueça moldagens desconfortáveis e longas esperas em tratamentos protéticos."
          },
          {
                    "title": "Design Moderno e Acolhedor",
                    "description": "Arquitetura projetada na Zona 04 de Maringá para oferecer uma experiência calma e agradável."
          }
]
          }
        },
        {
          id: "contact-sapata-estudio-oral",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento e Agendamentos",
            headline: "Agende sua Avaliação com Nossa Equipe em Maringá",
            subheadline: "Estamos prontos para acolher você e planejar o tratamento ideal para a sua saúde bucal.",
            address: "Av. Humaitá, 452 - Zona 04, Maringá - PR",
            phone: "(44) 3028-5000",
            whatsapp: "(44) 99800-5000",
            ctaWhatsappText: "Falar no WhatsApp Agora"
          }
        }
      ]
    }
  ]
};

export default client;
