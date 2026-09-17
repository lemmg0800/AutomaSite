import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "ramos-da-silva-advocacia",
  status: "ativo",
  createdAt: "2026-09-17T20:00:00.000Z",
  updatedAt: "2026-09-17T20:00:00.000Z",

  business: {
    name: "Ramos da Silva Advocacia",
    legalName: "Ramos da Silva Advocacia Trabalhista & Previdenciária",
    niche: "Direito Trabalhista Bancário & Previdenciário",
    city: "Florianópolis",
    state: "SC",
    address: "Rua Tenente Silveira, 200 - Centro, Florianópolis - SC",
    phone: "(48) 3225-6677",
    whatsapp: "(48) 99123-8899",
    googleRating: 4.9,
    instagram: "@ramosdasilvaadv"
  },

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#f59e0b",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
    bodyFont: "Plus Jakarta Sans",
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
        title: "Ramos da Silva Advocacia | Trabalhista Bancário & Previdenciário em Florianópolis",
        description: "Defesa combativa dos direitos de bancários, financiários e segurados do INSS no Centro de Florianópolis. Triagem rápida e sigilosa via WhatsApp."
      },
      sections: [
        {
          id: "header-ramos",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Bancários & Financiários", href: "#servicos" },
              { label: "Previdenciário & INSS", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Dúvidas", href: "#faq" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Triagem WhatsApp"
          }
        },
        {
          id: "hero-ramos",
          type: "hero",
          variant: "Hero02",
          content: {
            badge: "Especialista em Bancários & Previdência",
            headline: "Defesa Intransigente dos Seus Direitos Trabalhistas e Benefícios do INSS",
            subheadline: "Atuação jurídica especializada e transparente no Centro de Florianópolis. Análise minuciosa de horas extras bancárias, equiparação salarial, acidentes de trabalho e revisões previdenciárias.",
            primaryCtaLabel: "Fazer Triagem Rápida no WhatsApp",
            primaryCtaHref: "https://wa.me/5548991238899",
            secondaryCtaLabel: "Conhecer Especialidades",
            secondaryCtaHref: "#servicos",
            trustPoints: [
              "Triagem confidencial e imediata no WhatsApp",
              "Ampla experiência em convenções coletivas bancárias",
              "Atendimento no Centro de Florianópolis e 100% online"
            ]
          }
        },
        {
          id: "benefits-ramos",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Compromisso e Transparência em Cada Etapa",
            subtitle: "Entenda por que trabalhadores e aposentados confiam na nossa equipe jurídica.",
            benefits: [
              {
                title: "Atendimento Rápido e Humano",
                description: "Sem intermediários ou burocracia excessiva; fale diretamente com a equipe jurídica especializada.",
                icon: "shield"
              },
              {
                title: "Cálculos Precisos e Confiáveis",
                description: "Auditoria matemática detalhada de demonstrativos de pagamento, cartões de ponto e benefícios do INSS.",
                icon: "award"
              },
              {
                title: "Sigilo Absoluto",
                description: "Protegemos a privacidade da sua trajetória profissional e do seu vínculo de trabalho.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-ramos",
          type: "services",
          variant: "Services01",
          content: {
            title: "Principais Áreas de Atuação",
            subtitle: "Defesa técnica e estratégica para garantir seus direitos legítimos.",
            services: [
              {
                title: "Ações Trabalhistas para Bancários",
                description: "7ª e 8ª horas diárias, descaracterização de cargo de confiança, gratificação de função, assédio moral e metas abusivas."
              },
              {
                title: "Direito Previdenciário & Aposentadorias",
                description: "Planejamento previdenciário, aposentadoria especial, auxílio-doença, BPC/LOAS e recursos administrativos contra o INSS."
              },
              {
                title: "Acidentes de Trabalho & Doenças Ocupacionais",
                description: "Indenizações por burnout, LER/DORT, depressão associada à sobrecarga laboral e estabilidade no emprego."
              }
            ]
          }
        },
        {
          id: "about-ramos",
          type: "about",
          variant: "About01",
          content: {
            badge: "Histórico de Atuação",
            title: "Tradição e Firmeza no Centro de Florianópolis",
            description: "Com sede estratégica na Rua Tenente Silveira, o escritório Ramos da Silva Advocacia dedica-se com rigor técnico e combatividade à proteção de trabalhadores e segurados do INSS em todo o estado de Santa Catarina.",
            stats: [
              { number: "Centro", label: "Florianópolis - SC" },
              { number: "Direto", label: "Canal Rápido no WhatsApp" }
            ]
          }
        },
        {
          id: "faq-ramos",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Perguntas Frequentes",
            items: [
              {
                question: "Como saber se tenho direito a horas extras bancárias?",
                answer: "Bancários que cumprem jornada superior a 6 horas diárias sem exercer real cargo de direção ou gestão têm direito às horas excedentes como extraordinárias."
              },
              {
                question: "Como funciona o atendimento inicial?",
                answer: "Você pode nos enviar os detalhes e dúvidas diretamente pelo WhatsApp. Nossa equipe faz uma pré-análise documental sem compromisso."
              }
            ]
          }
        },
        {
          id: "contact-ramos",
          type: "contact",
          variant: "Contact01",
          content: {
            title: "Fale Conosco Agora Mesmo",
            subtitle: "Nossa equipe jurídica está pronta para ouvir o seu caso e orientá-lo sobre o melhor caminho legal.",
            formCta: "Iniciar Triagem"
          }
        },
        {
          id: "footer-ramos",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Atendimento estritamente pautado no Código de Ética e Disciplina da OAB/SC.",
            oabInfo: "OAB/SC"
          }
        }
      ]
    }
  ]
};

export default client;
