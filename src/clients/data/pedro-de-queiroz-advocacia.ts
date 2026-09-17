import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "pedro-de-queiroz-advocacia",
  status: "ativo",
  createdAt: "2026-09-17T02:51:43.504Z",
  updatedAt: "2026-09-17T02:51:43.511Z",

  business: {
    "name": "Pedro de Queiroz Advocacia",
    "niche": "Direito Cível Estratégico, Contratos & Família",
    "city": "Florianópolis - SC",
    "address": "Av. Pref. Osmar Cunha, 416 - Centro, Florianópolis - SC",
    "phone": "(48) 3028-7090",
    "whatsapp": "(48) 99655-2233",
    "instagram": "@pedrodequeiroz.adv"
},

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#c5a059",
    backgroundColor: "#090d16",
    textColor: "#f8fafc",
    headingFont: "Playfair Display",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "md",
    mode: "dark"
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Pedro de Queiroz Advocacia | Direito Cível Estratégico, Contratos & Família em Florianópolis - SC",
        description: "Assessoria e serviços especializados com alto padrão ético e excelência técnica em Florianópolis - SC."
      },
      sections: [
        {
          id: "header-main",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Início", href: "#" },
              { label: "Especialidades", href: "#servicos" },
              { label: "Sobre", href: "#sobre" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Fale Conosco"
          }
        },
        {
          id: "hero-main",
          type: "hero",
          variant: "Hero01",
          content: {
            badge: "Direito Cível Estratégico, Contratos & Família de Alta Performance",
            headline: "Defesa Estratégica e Segurança Jurídica para seus Interesses",
            subheadline: "Atuação personalizada e combativa em Florianópolis - SC, com foco em resultados concretos e atendimento ágil.",
            primaryCtaLabel: "Falar no WhatsApp",
            primaryCtaHref: "https://wa.me/5548996552233",
            secondaryCtaLabel: "Conhecer Especialidades",
            secondaryCtaHref: "#servicos"
          }
        },
        {
          id: "benefits-main",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que nos escolher",
            subtitle: "Diferenciais que garantem solidez e tranquilidade aos nossos clientes.",
            benefits: [
              { title: "Atendimento Consultivo Direto", description: "Comunicação transparente e ágil sem intermediários.", icon: "shield" },
              { title: "Especialização Técnica Comprovada", description: "Atuação rigorosa nas áreas mais complexas do direito.", icon: "award" },
              { title: "Disponibilidade e Agilidade", description: "Respostas rápidas para situações urgentes e estratégicas.", icon: "clock" }
            ]
          }
        },
        {
          id: "services-main",
          type: "services",
          variant: "Services01",
          content: {
            title: "Áreas de Atuação",
            subtitle: "Soluções jurídicas sob medida para pessoas físicas e empresas.",
            services: [
              { title: "Direito Imobiliário & Contratos", description: "Auditoria, regularização de imóveis, holding familiar e contratos imobiliários de alto padrão." },
              { title: "Planejamento Sucessório & Família", description: "Estruturação patrimonial preventiva, inventários e proteção sucessória com segurança." },
              { title: "Direito Empresarial & Estratégico", description: "Consultoria preventiva para blindagem de negócios e assessoria jurídica corporativa." }
            ]
          }
        },
        {
          id: "about-main",
          type: "about",
          variant: "About01",
          content: {
            badge: "Nossa Trajetória",
            title: "Compromisso Ético e Tradição em Florianópolis - SC",
            description: "Com atuação sólida e reconhecida, o escritório alia experiência técnica a uma visão moderna do direito para oferecer soluções assertivas.",
            stats: [
              { number: "100%", label: "Foco no Cliente" },
              { number: "Ágil", label: "Comunicação Direta" }
            ]
          }
        },
        {
          id: "faq-main",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes",
            items: [
              { question: "Como funciona a primeira consulta?", answer: "Realizamos uma análise preliminar detalhada da sua situação para apresentar o melhor diagnóstico e plano de ação." },
              { question: "O escritório atende fora de Florianópolis - SC?", answer: "Sim, atuamos de forma híbrida e digital em todo o estado de Santa Catarina e demais regiões." }
            ]
          }
        },
        {
          id: "contact-main",
          type: "contact",
          variant: "Contact01",
          content: {
            title: "Inicie seu Atendimento",
            subtitle: "Entre em contato diretamente com nossa equipe especializada para agendar uma reunião.",
            formCta: "Enviar Mensagem"
          }
        },
        {
          id: "footer-main",
          type: "footer",
          variant: "Footer01",
          content: {}
        }
      ]
    }
  ]
};

export default client;
