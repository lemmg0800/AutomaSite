import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "buzzi-odontologia",
  status: "ativo",
  createdAt: "2026-09-19T00:06:00.000Z",
  updatedAt: "2026-09-19T00:06:00.000Z",

  business: {
    name: "Buzzi Odontologia",
    legalName: "Buzzi Odontologia Curitiba Ltda",
    niche: "Implantes, Estética Dental & Ortodontia",
    city: "Curitiba",
    state: "PR",
    address: "Rua Maestro Francisco Antonello, 697 - Fanny, Curitiba - PR",
    phone: "(41) 99524-4522",
    whatsapp: "(41) 99524-4522",
    email: "contato@buzziodontologia.com.br",
    googleRating: 5.0,
    instagram: "@buzziodonto",
    socialLinks: {
      instagram: "https://instagram.com/buzziodonto",
      facebook: "https://facebook.com/odontobuzzirocha",
      linkedin: "https://linkedin.com/company/buzzi-odontologia"
    }
  },

  theme: {
    primaryColor: "#0f766e",
    secondaryColor: "#0d9488",
    accentColor: "#14b8a6",
    backgroundColor: "#f8fafc",
    textColor: "#0f172a",
    headingFont: "Playfair Display",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "lg",
    mode: "light",
    enableCursor: false,
    backgroundEffect: "none",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Buzzi Odontologia | Implantes, Ortodontia e Estética em Curitiba",
        description: "Clínica odontológica no bairro Fanny em Curitiba especializada em implantes dentários, alinhadores transparentes e odontologia estética com atendimento humanizado.",
        ogImage: "/clients/buzzi-odontologia/clinica.jpg"
      },
      sections: [
        {
          id: "header-buzzi",
          type: "header",
          variant: "Header01",
          content: {
            logoText: "Buzzi Odontologia",
            logoImage: "/clients/buzzi-odontologia/logo.png",
            navItems: [
              { label: "Início", href: "#inicio" },
              { label: "A Clínica", href: "#sobre" },
              { label: "Tratamentos", href: "#tratamentos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" }
            ],
            ctaText: "Agendar Avaliação",
            ctaLink: "https://wa.me/5541995244522?text=Olá!%20Vim%20pelo%20site%20da%20Buzzi%20Odontologia%20e%20gostaria%20de%20agendar%20uma%20avaliação."
          }
        },
        {
          id: "hero-buzzi",
          type: "hero",
          variant: "Hero04",
          content: {
            badgeText: "⭐ NOTA 5.0 NO GOOGLE • 111 AVALIAÇÕES • CURITIBA",
            headline: "Implantes, Ortodontia & Estética com Cuidado Humanizado",
            subheadline: "Recupere a segurança de sorrir e mastigar com tratamentos individualizados, tecnologia digital e o acolhimento que você e sua família merecem no bairro Fanny, Curitiba.",
            image: "/clients/buzzi-odontologia/clinica.jpg",
            primaryCta: {
              text: "Agendar Avaliação no WhatsApp",
              href: "https://wa.me/5541995244522?text=Olá!%20Vim%20pelo%20site%20da%20Buzzi%20Odontologia%20e%20gostaria%20de%20agendar%20uma%20avaliação."
            },
            secondaryCta: {
              text: "Conhecer Nossos Tratamentos",
              href: "#tratamentos"
            }
          }
        },
        {
          id: "sobre-buzzi",
          type: "about",
          variant: "About01",
          content: {
            badge: "Corpo Clínico & Propósito",
            title: "Tratamento de Excelência com Quem Realmente Ouve Você",
            image: "/clients/buzzi-odontologia/dra-fernanda.jpg",
            text1: "A Buzzi Odontologia nasceu no bairro Fanny com uma missão clara: desmistificar o medo de ir ao dentista, oferecendo um atendimento verdadeiramente humanizado, ético e focado no bem-estar integral do paciente.",
            text2: "Sob a responsabilidade técnica da Dra. Fernanda Buzzi (CRO/PR 17042), formada pela Universidade Tuiuti do Paraná, unimos especialização em Ortodontia, atuação avançada em Implantes e Próteses, além de equipamentos digitais modernos."
          }
        },
        {
          id: "tratamentos-buzzi",
          type: "services",
          variant: "Services03",
          content: {
            tagline: "Especialidades Clínicas",
            headline: "Tratamentos Odontológicos Completos",
            subheadline: "Planejamento preciso, tecnologia avançada e protocolos comprovados para devolver saúde, harmonia e segurança ao seu sorriso.",
            services: [
              {
                id: "implantes",
                title: "Implantes Dentários & Carga Rápida",
                description: "Reposição segura e duradoura de dentes perdidos com parafusos de titânio biocompatíveis e planejamento digital 3D para mastigação perfeita.",
                badge: "Alta Estabilidade",
                icon: "🦷"
              },
              {
                id: "ortodontia",
                title: "Ortodontia & Alinhadores Invisíveis",
                description: "Correção precisa do alinhamento dentário e da mordida com aparelhos modernos autoligados e alinhadores transparentes de alto conforto.",
                badge: "Discreto & Eficaz",
                icon: "✨"
              },
              {
                id: "estetica",
                title: "Odontologia Estética & Clareamento",
                description: "Harmonização do formato, cor e proporção dos dentes com lâminas em resina composta, facetas cerâmicas e clareamento a laser seguro.",
                badge: "Sorriso Radiante",
                icon: "💎"
              },
              {
                id: "protese",
                title: "Próteses Dentárias & Reabilitação",
                description: "Recuperação funcional completa com próteses fixas, sobre implantes ou removíveis, devolvendo estabilidade oclusal e bem-estar.",
                badge: "Conforto Mastigatório",
                icon: "🛡️"
              },
              {
                id: "cirurgia",
                title: "Cirurgia Oral & Extração de Sisos",
                description: "Procedimentos cirúrgicos realizados com anestesia eficaz, técnicas minimamente invasivas e acompanhamento pós-operatório acolhedor.",
                badge: "Protocolo Sem Dor",
                icon: "⚕️"
              },
              {
                id: "preventiva",
                title: "Odontopediatria & Prevenção",
                description: "Acompanhamento preventivo para toda a família, profilaxia, aplicação de flúor e atendimento gentil para criar uma relação positiva desde a infância.",
                badge: "Para Toda a Família",
                icon: "🧸"
              }
            ]
          }
        },
        {
          id: "diferenciais-buzzi",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por Que Escolher a Buzzi Odontologia?",
            subtitle: "Diferenciais pensados para você se sentir seguro e acolhido do primeiro contato ao pós-tratamento.",
            items: [
              {
                title: "Atendimento 100% Humanizado",
                description: "Aqui você não é apenas um número. Respeitamos seu tempo, medos e histórico com empatia genuína.",
                icon: "🤝"
              },
              {
                title: "Tecnologia & Planejamento Digital",
                description: "Diagnósticos precisos e tratamentos minimamente invasivos através de equipamentos modernos.",
                icon: "🔬"
              },
              {
                title: "Resultados com Estética Natural",
                description: "Devolvemos a harmonia facial e a força mastigatória sem exageros e com naturalidade absoluta.",
                icon: "🌟"
              }
            ]
          }
        },
        {
          id: "depoimentos-buzzi",
          type: "testimonials",
          variant: "Testimonials01",
          content: {
            title: "O Que Nossos Pacientes Dizem no Google",
            items: [
              {
                quote: "Dra. Fernanda muito profissional e extremamente qualificada. O atendimento foi impecável e super atencioso.",
                author: "Mariana S.",
                role: "Avaliação 5 Estrelas no Google"
              },
              {
                quote: "Ótimo atendimento, além de proporcionar um trabalho excelente. Recomendo para quem busca dentista de confiança em Curitiba.",
                author: "Carlos E.",
                role: "Avaliação 5 Estrelas no Google"
              },
              {
                quote: "Dentistas muito profissionais e atenciosos. A clínica é limpa, acolhedora e o procedimento foi totalmente sem dor.",
                author: "Patrícia R.",
                role: "Avaliação 5 Estrelas no Google"
              }
            ]
          }
        },
        {
          id: "contato-buzzi",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Localização & Agendamento",
            title: "Venha Cuidar do Seu Sorriso na Buzzi Odontologia",
            formTitle: "Agende Sua Avaliação com a Dra. Fernanda",
            formSubtitle: "Fale diretamente com nossa recepção pelo WhatsApp para escolher o melhor horário para sua consulta."
          }
        },
        {
          id: "footer-buzzi",
          type: "footer",
          variant: "Footer01",
          content: {
            logoText: "Buzzi Odontologia",
            description: "Clínica odontológica completa no bairro Fanny, Curitiba.",
            copyrightText: "© 2026 Buzzi Odontologia. Todos os direitos reservados."
          }
        }
      ]
    }
  ]
};

export default client;
