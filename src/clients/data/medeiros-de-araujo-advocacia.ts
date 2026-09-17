import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "medeiros-de-araujo-advocacia",
  status: "ativo",
  createdAt: "2026-09-17T20:00:00.000Z",
  updatedAt: "2026-09-17T20:00:00.000Z",

  business: {
    name: "Medeiros de Araújo Advocacia",
    legalName: "Medeiros de Araújo Sociedade de Advogados",
    niche: "Direito Empresarial, Societário & Tributário",
    city: "Florianópolis",
    state: "SC",
    address: "Rod. José Carlos Daux (SC-401), 5500 - Saco Grande, Florianópolis - SC",
    phone: "(48) 3233-4050",
    whatsapp: "(48) 99988-1122",
    googleRating: 4.8,
    instagram: "@medeirosdearaujoadv"
  },

  theme: {
    primaryColor: "#0b1329",
    secondaryColor: "#152238",
    accentColor: "#38bdf8",
    backgroundColor: "#060b17",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "md",
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "dots",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Medeiros de Araújo Advocacia | Direito Empresarial & Societário na SC-401",
        description: "Assessoria jurídica estratégica para empresas, startups e fundadores no polo tecnológico de Florianópolis. M&A, governança societária e planejamento tributário."
      },
      sections: [
        {
          id: "header-medeiros",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Societário & M&A", href: "#servicos" },
              { label: "Startups & Tech", href: "#servicos" },
              { label: "Tributário", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Diagnóstico Jurídico"
          }
        },
        {
          id: "hero-medeiros",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Polo de Tecnologia SC-401 | Corporate Park",
            headline: "Segurança Jurídica Estratégica para Escalar sua Empresa e Atrair Investimentos",
            subheadline: "Advocacia de negócios de alta performance em Florianópolis. Estruturação societária, governança, proteção patrimonial e planejamento tributário para empresas e startups em expansão.",
            primaryCtaLabel: "Agendar Diagnóstico pelo WhatsApp",
            primaryCtaHref: "https://wa.me/5548999881122",
            secondaryCtaLabel: "Nossas Especialidades",
            secondaryCtaHref: "#servicos",
            stats: [
              { value: "SC-401", label: "Polo Tech de Floripa" },
              { value: "M&A", label: "Fusões & Aquisições" },
              { value: "100%", label: "Segurança Contratual" }
            ]
          }
        },
        {
          id: "benefits-medeiros",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que empresas líderes confiam no nosso escritório",
            subtitle: "Aliamos rigor técnico societário à agilidade do ecossistema de tecnologia de Santa Catarina.",
            benefits: [
              {
                title: "DNA de Negócios e Inovação",
                description: "Compreendemos a velocidade de scale-ups e rodadas de investimento com contratos ágeis e blindados.",
                icon: "shield"
              },
              {
                title: "Planejamento Tributário Eficiente",
                description: "Redução legítima de carga tributária e recuperação de créditos com máxima conformidade legal.",
                icon: "award"
              },
              {
                title: "Atendimento C-Level Direto",
                description: "Comunicação executiva sem juridiquês, diretamente com advogados seniores e sócios.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-medeiros",
          type: "services",
          variant: "Services03",
          content: {
            title: "Áreas de Atuação Especializada",
            subtitle: "Soluções jurídicas integradas para cada ciclo de vida do seu negócio.",
            services: [
              {
                title: "Direito Societário, M&A e Governança",
                description: "Acordos de sócios, memorandos de entendimento (MoU), vesting, due diligence e assessoria em fusões e aquisições."
              },
              {
                title: "Contratos de Tecnologia & Startups",
                description: "Termos de uso, SaaS agreements, compliance com LGPD, proteção de propriedade intelectual e stock options."
              },
              {
                title: "Planejamento Tributário & Defesa Fiscal",
                description: "Estruturação fiscal estratégica para otimização de tributos federais e estaduais e contencioso administrativo."
              },
              {
                title: "Blindagem e Reestruturação Patrimonial",
                description: "Holdings patrimoniais para sócios fundadores, isolamento de riscos operacionais e proteção de ativos."
              }
            ]
          }
        },
        {
          id: "about-medeiros",
          type: "about",
          variant: "About01",
          content: {
            badge: "Localização Privilegiada",
            title: "Sede no Coração da Inovação em Florianópolis",
            description: "Instalado no polo empresarial da SC-401, o Medeiros de Araújo Advocacia combina solidez técnica tradicional com metodologia moderna orientada ao crescimento seguro dos nossos parceiros de negócios.",
            stats: [
              { number: "Corporate Park", label: "SC-401 Florianópolis" },
              { number: "Ágil", label: "Atendimento Presencial e Digital" }
            ]
          }
        },
        {
          id: "faq-medeiros",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes de Empresários",
            items: [
              {
                question: "Como é realizado o diagnóstico jurídico empresarial?",
                answer: "Iniciamos com uma reunião de alinhamento com os sócios para mapear riscos contratuais, passivos ocultos e oportunidades tributárias imediatas."
              },
              {
                question: "O escritório atende rodadas de investimento e captação?",
                answer: "Sim, estruturamos mútuos conversíveis, SAFE, acordos de investimento e suporte completo na negociação com fundos e investidores anjo."
              }
            ]
          }
        },
        {
          id: "contact-medeiros",
          type: "contact",
          variant: "Contact01",
          content: {
            title: "Agende uma Reunião com Nossos Sócios",
            subtitle: "Converse diretamente com nossa equipe jurídica especializada no Corporate Park ou por videoconferência.",
            formCta: "Solicitar Reunião"
          }
        },
        {
          id: "footer-medeiros",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Atendimento em conformidade com as diretrizes do Código de Ética da OAB/SC.",
            oabInfo: "OAB/SC"
          }
        }
      ]
    }
  ]
};

export default client;
