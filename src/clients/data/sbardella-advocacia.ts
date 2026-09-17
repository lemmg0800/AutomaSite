import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "sbardella-advocacia",
  status: "ativo",
  createdAt: "2026-09-16T21:00:00.000Z",
  updatedAt: "2026-09-16T21:00:00.000Z",
  
  business: {
    name: "Sbardella Advocacia",
    legalName: "Sbardella Sociedade Individual de Advocacia",
    niche: "Direito Imobiliário & Planejamento Sucessório",
    city: "Florianópolis",
    state: "SC",
    address: "Av. Rio Branco, 380 - Centro, Florianópolis - SC",
    phone: "(48) 3224-8890",
    whatsapp: "(48) 99123-4567",
    email: "contato@sadvocacia.com.br",
    googleRating: 4.9,
    instagram: "@sbardella.advocacia"
  },

  theme: {
    primaryColor: "#0a192f",
    secondaryColor: "#0f2444",
    accentColor: "#c5a059",
    backgroundColor: "#0a192f",
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
        title: "Sbardella Advocacia | Direito Imobiliário em Florianópolis",
        description: "Assessoria jurídica especializada em Direito Imobiliário, Regularização Fundiária e Planejamento Sucessório/Holdings Familiares em Florianópolis - SC."
      },
      sections: [
        {
          id: "header-main",
          type: "header",
          variant: "Header02",
          content: {
            announcement: "Plantão Consultivo Florianópolis",
            navLinks: [
              { label: "Especialidades", href: "#especialidades" },
              { label: "O Escritório", href: "#escritorio" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar Consulta"
          }
        },
        {
          id: "hero-main",
          type: "hero",
          variant: "Hero01",
          content: {
            badge: "Assessoria Jurídica de Alto Padrão",
            headline: "Segurança Jurídica & Estratégia Patrimonial para Imóveis e Famílias",
            subheadline: "Protegemos seus investimentos imobiliários e estruturamos a sucessão do seu patrimônio com discrição, agilidade e rigor técnico no coração de Florianópolis.",
            primaryCtaLabel: "Consultar Advogado Especialista",
            secondaryCtaLabel: "Conhecer Especialidades",
            secondaryCtaHref: "#especialidades",
            trustPoints: [
              "Atuação Preventiva & Contenciosa",
              "Centro de Florianópolis",
              "Sigilo Profissional Estrito"
            ]
          }
        },
        {
          id: "services-main",
          type: "services",
          variant: "Services01",
          content: {
            badge: "Áreas de Concentração",
            title: "Soluções Jurídicas Estratégicas",
            subtitle: "Atuação focada em casos de alta complexidade patrimonial e proteção jurídica.",
            services: [
              {
                icon: "🏛️",
                title: "Direito Imobiliário & Transações",
                description: "Assessoria minuciosa em compra, venda e locação de imóveis de alto valor, redação de contratos customizados e incorporações seguras.",
                cta: "Analisar contrato imobiliário"
              },
              {
                icon: "🛡️",
                title: "Holdings Familiares & Sucessão",
                description: "Estruturação societária de patrimônio para evitar litígios em inventário, proteger bens de forma legal e otimizar tributos na herança.",
                cta: "Planejar sucessão familiar"
              },
              {
                icon: "📜",
                title: "Regularização Fundiária & Usucapião",
                description: "Solução jurídica ágil para regularização e obtenção de matrícula definitiva para imóveis urbanos e litorâneos na Grande Florianópolis.",
                cta: "Regularizar matrícula de imóvel"
              },
              {
                icon: "⚖️",
                title: "Contencioso Cível Patrimonial",
                description: "Defesa técnica incisiva em rescisões contratuais, reintegrações de posse, vícios construtivos e desapropriações perante o TJSC.",
                cta: "Falar com especialista em litígios"
              }
            ]
          }
        },
        {
          id: "about-main",
          type: "about",
          variant: "About01",
          content: {
            badge: "Compromisso & Rigor",
            title: "Advocacia Artesanal com Foco no Seu Caso",
            text1: "A Sbardella Advocacia atua com modelo boutique: cada demanda é conduzida de forma direta e personalizada pelos titulares, garantindo atenção minuciosa a cada detalhe contratual e processual.",
            text2: "Localizado estrategicamente no Centro de Florianópolis, o escritório oferece um ambiente discreto para reuniões consultivas, alinhando a tradição jurídica às mais modernas ferramentas de proteção.",
            highlights: [
              { number: "100%", label: "Dedicação dos sócios titulares" },
              { number: "SC", label: "Forte presença na Grande Fpolis" }
            ],
            whyChoose: [
              "Comunicação Clara: Pareceres objetivos sem excesso de jargões técnicos incompreensíveis.",
              "Visão Pragmática: Avaliação séria de riscos, custos e benefícios reais de cada medida.",
              "Respostas Rápidas no WhatsApp: Canal direto de acompanhamento sem intermediários ou burocracia."
            ]
          }
        },
        {
          id: "contact-main",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Onde Estamos",
            title: "Atendimento em Florianópolis",
            formTitle: "Solicitar Contato",
            formSubtitle: "Retornaremos com brevidade durante o horário de atendimento."
          }
        },
        {
          id: "footer-main",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Caráter informativo em consonância com o Provimento 205/2021 do CFOAB.",
            oabInfo: "Inscrita na Ordem dos Advogados do Brasil — Seccional de Santa Catarina (OAB/SC)."
          }
        }
      ]
    }
  ]
};

export default client;