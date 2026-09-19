import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "smt-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.616Z",
  updatedAt: new Date().toISOString(),

  business: {
    name: "SMT Advogados (Sousa, Melo & Tapeocy)",
    legalName: "Sousa, Melo & Tapeocy Sociedade de Advogados",
    niche: "Holding Familiar, Planejamento Patrimonial & Direito Empresarial",
    city: "Rio Branco",
    state: "AC",
    address: "R. Thaumaturgo de Azevedo, 99 - Ipase, Rio Branco - AC",
    phone: "(68) 2102-8778",
    whatsapp: "(68) 99953-6033",
    googleRating: 5.0,
    instagram: "@smtadvogados"
  },

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#38bdf8", // Azul wealth moderno
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Cinzel",
    bodyFont: "Inter",
    borderRadius: "lg",
    mode: "dark",
    backgroundEffect: "dots",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "SMT Advogados | Holding Familiar e Proteção Patrimonial no Acre",
        description: "Planejamento sucessório, holding familiar e governança corporativa de alta fidelidade para famílias empresárias em Rio Branco - AC."
      },
      sections: [
        {
          id: "header-smt-advogados",
          type: "header",
          variant: "Header02",
          content: {
            navLinks: [
              { label: "Holding Familiar", href: "#servicos" },
              { label: "Indicadores", href: "#metricas" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Consulta de Holding"
          }
        },
        {
          id: "hero-smt-advogados",
          type: "hero",
          variant: "Hero02",
          content: {
            tagline: "HOLDING FAMILIAR & SUCESSÃO PATRIMONIAL",
            headline: "Proteção Patrimonial e Blindagem Jurídica de Ativos Familiares",
            subheadline: "Estruturação preventiva de holdings, governança corporativa e planejamento sucessório minucioso para famílias empresárias do Acre.",
            ctaPrimaryText: "Agendar Consulta de Planejamento Patrimonial",
            ctaSecondaryText: "Conhecer Metodologia",
            imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Ambiente executivo para reuniões de holding e patrimônio",
            stats: [
              { label: "Patrimônios Estruturados", value: "+R$ 150M" },
              { label: "Avaliação Máxima", value: "5.0 ★" },
              { label: "Sigilo & Governança", value: "100% Blindado" }
            ]
          }
        },
        {
          id: "stats-smt-advogados",
          type: "stats",
          variant: "Stats01",
          content: {
            stats: [
              { number: "5.0 ★", label: "Nota Máxima no Google" },
              { number: "R$ 150M+", label: "Patrimônio Administrado" },
              { number: "100%", label: "Sigilo & Governança" },
              { number: "Zero", label: "Litígios em Inventários" }
            ]
          }
        },
        {
          id: "services-smt-advogados",
          type: "services",
          variant: "Services02",
          content: {
            tagline: "Áreas Estratégicas",
            headline: "Soluções Avançadas em Direito Patrimonial",
            subheadline: "Atuação consultiva especializada para salvaguardar negócios e perpetuar o patrimônio de gerações.",
            services: [
              {
                id: "holding",
                title: "Holding Familiar & Proteção de Ativos",
                description: "Estruturação de pessoas jurídicas para gestão, redução legal de impostos e proteção contra riscos operacionais.",
                icon: "Shield"
              },
              {
                id: "sucessorio",
                title: "Planejamento Sucessório em Vida",
                description: "Organização da transição patrimonial sem litígios, evitando os altos custos de inventário judicial.",
                icon: "Scale"
              },
              {
                id: "empresarial",
                title: "Direito Empresarial & Contratos",
                description: "Consultoria contínua para empresas em contratos complexos, fusões, aquisições e estruturação societária.",
                icon: "Building"
              }
            ]
          }
        },
        {
          id: "benefits-smt-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por Que Escolher a SMT Advogados?",
            subtitle: "Segurança jurídica de ponta com foco no longo prazo",
            benefits: [
              {
                title: "Especialização Exclusiva",
                description: "Foco absoluto em blindagem patrimonial e governança, sem dispersão em causas de massa."
              },
              {
                title: "Atendimento Reservado",
                description: "Salas de reunião privadas e protocolos rígidos de confidencialidade para temas familiares sensíveis."
              },
              {
                title: "Economia Fiscal Comprovada",
                description: "Redução drástica do ITCMD e do ganho de capital por meio de estruturas societárias legais."
              }
            ]
          }
        },
        {
          id: "contact-smt-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento Confidencial",
            headline: "Agende sua Consulta de Diagnóstico Patrimonial",
            subheadline: "Reuniões presenciais em Rio Branco ou por videoconferência segura.",
            address: "R. Thaumaturgo de Azevedo, 99 - Ipase, Rio Branco - AC",
            phone: "(68) 2102-8778",
            whatsapp: "(68) 99953-6033",
            ctaWhatsappText: "Falar no WhatsApp com o Time de Holding"
          }
        },
        {
          id: "footer-smt-advogados",
          type: "footer",
          variant: "Footer02",
          content: {}
        }
      ]
    }
  ]
};

export default client;
