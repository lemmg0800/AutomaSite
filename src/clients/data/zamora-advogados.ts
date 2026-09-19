import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "zamora-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.616Z",
  updatedAt: new Date().toISOString(),

  business: {
    name: "Zamora Advogados Associados",
    legalName: "Zamora Advogados Associados",
    niche: "Direito Tributário, Recuperação Fiscal & Defesa Empresarial",
    city: "Rio Branco",
    state: "AC",
    address: "R. Isaura Parente, 825 - Bosque, Rio Branco - AC",
    phone: "(68) 3224-4050",
    whatsapp: "(68) 99988-4050",
    googleRating: 4.9,
    instagram: "@zamoraadvogados"
  },

  theme: {
    primaryColor: "#052e16",
    secondaryColor: "#064e3b",
    accentColor: "#10b981", // Esmeralda / Finanças e Tributário
    backgroundColor: "#022c22",
    textColor: "#f0fdf4",
    headingFont: "Syne",
    bodyFont: "Inter",
    borderRadius: "md",
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "mesh",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Zamora Advogados Associados | Direito Tributário e Empresarial no Acre",
        description: "Planejamento tributário estratégico, recuperação de créditos fiscais e defesas no contencioso administrativo e judicial em Rio Branco - AC."
      },
      sections: [
        {
          id: "header-zamora-advogados",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Tributário", href: "#servicos" },
              { label: "Resultados", href: "#metricas" },
              { label: "Perguntas Frequentes", href: "#faq" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Diagnóstico Fiscal"
          }
        },
        {
          id: "hero-zamora-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "DIREITO TRIBUTÁRIO & DEFESA FISCAL ESTRATÉGICA",
            headline: "Otimização Tributária e Defesa Fiscal com Rigor Matemático e Jurídico",
            subheadline: "Recuperação de créditos fiscais e auditoria preventiva para empresas que buscam reduzir custos e blindar suas operações no Norte do país.",
            ctaPrimaryText: "Solicitar Diagnóstico Tributário no WhatsApp",
            ctaSecondaryText: "Ver Casos de Sucesso",
            imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Análise contábil e tributária estratégica corporativa",
            stats: [
              { label: "Economia Tributária", value: "Comprovada" },
              { label: "Contencioso Fiscal", value: "TJAC & TRF1" },
              { label: "Avaliação", value: "4.9 ★" }
            ]
          }
        },
        {
          id: "stats-zamora-advogados",
          type: "stats",
          variant: "Stats01",
          content: {
            stats: [
              { number: "+R$ 40M", label: "Créditos Identificados" },
              { number: "4.9 ★", label: "Avaliação no Google" },
              { number: "100%", label: "Conformidade Legal" },
              { number: "+12 Anos", label: "Especialização Fiscal" }
            ]
          }
        },
        {
          id: "services-zamora-advogados",
          type: "services",
          variant: "Services02",
          content: {
            tagline: "Especialidades Fiscais",
            headline: "Atuação Abrangente no Direito Tributário Moderno",
            subheadline: "Estratégias defensivas e preventivas desenhadas para o cenário econômico da Região Norte.",
            services: [
              {
                id: "recuperacao",
                title: "Recuperação de Créditos Tributários",
                description: "Auditoria digital nas obrigações fiscais dos últimos 5 anos para restituição de pagamentos a maior.",
                icon: "Coins"
              },
              {
                id: "defesa_fiscal",
                title: "Defesas em Execuções Fiscais",
                description: "Suspensão de exigibilidade, desbloqueio de contas e defesas contra autos de infração estaduais e federais.",
                icon: "ShieldAlert"
              },
              {
                id: "planejamento",
                title: "Planejamento Tributário Anual",
                description: "Adequação do regime tributário mais econômico e seguro para indústrias, comércios e prestadores de serviço.",
                icon: "Calculator"
              }
            ]
          }
        },
        {
          id: "faq-zamora-advogados",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Perguntas Frequentes sobre Recuperação Fiscal",
            subtitle: "Entenda como a revisão tributária beneficia sua empresa sem riscos",
            questions: [
              { question: "A análise de créditos tributários gera custos iniciais?", answer: "Na maior parte dos diagnósticos preliminares, operamos com êxito sobre os valores efetivamente recuperados e homologados pela Receita." },
              { question: "Quanto tempo demora o diagnóstico fiscal?", answer: "Com o envio dos arquivos SPED dos últimos 60 meses, nossa auditoria emite o relatório de viabilidade em até 10 dias úteis." },
              { question: "A compensação de créditos é segura contra autuações?", answer: "Sim. Apenas aplicamos teses tributárias com repercussão geral pacificada nos tribunais superiores (STJ e STF)." }
            ]
          }
        },
        {
          id: "contact-zamora-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Contato Fiscal",
            headline: "Agende uma Análise Tributária Sigilosa",
            subheadline: "Descubra potenciais créditos tributários e reduza seu passivo fiscal.",
            address: "R. Isaura Parente, 825 - Bosque, Rio Branco - AC",
            phone: "(68) 3224-4050",
            whatsapp: "(68) 99988-4050",
            ctaWhatsappText: "Falar com Advogado Tributarista"
          }
        },
        {
          id: "footer-zamora-advogados",
          type: "footer",
          variant: "Footer01",
          content: {}
        }
      ]
    }
  ]
};

export default client;
