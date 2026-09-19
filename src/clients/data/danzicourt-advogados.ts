import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "danzicourt-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.616Z",
  updatedAt: new Date().toISOString(),

  business: {
    name: "D'Anzicourt Advogados Associados",
    legalName: "D'Anzicourt Advogados Associados",
    niche: "Direito Trabalhista, Cível & Previdenciário Estratégico",
    city: "Rio Branco",
    state: "AC",
    address: "Tv. Campo do Rio Branco, 461 - Capoeira, Rio Branco - AC",
    phone: "(68) 3224-2195",
    whatsapp: "(68) 99201-4455",
    googleRating: 4.8,
    instagram: "@danzicourtadvogados"
  },

  theme: {
    primaryColor: "#0284c7",
    secondaryColor: "#0369a1",
    accentColor: "#0284c7",
    backgroundColor: "#f8fafc", // Tema Claro Moderno e Acessível
    textColor: "#0f172a",
    headingFont: "DM Sans",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "md",
    mode: "light",
    enableCursor: false,
    backgroundEffect: "none",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "D'Anzicourt Advogados Associados | Advocacia Trabalhista e Cível em Rio Branco",
        description: "Atendimento jurídico transparente, humanizado e ágil no Acre. Defesa de direitos civis, trabalhistas e previdenciários."
      },
      sections: [
        {
          id: "header-danzicourt-advogados",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Áreas de Atuação", href: "#servicos" },
              { label: "Como Funciona", href: "#etapas" },
              { label: "Dúvidas", href: "#faq" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Análise de Caso"
          }
        },
        {
          id: "hero-danzicourt-advogados",
          type: "hero",
          variant: "Hero03",
          content: {
            tagline: "DEFESA DE DIREITOS & CONTENCIOSO ÁGIL",
            headline: "Assessoria Jurídica Ágil, Transparente e Centrada no Seu Direito",
            subheadline: "Atendimento humanizado com suporte contínuo via WhatsApp e atuação precisa em causas cíveis, trabalhistas e previdenciárias em Rio Branco.",
            ctaPrimaryText: "Análise Rápida de Caso no WhatsApp",
            ctaSecondaryText: "Ver Especialidades",
            imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Aperto de mãos e compromisso ético com clientes",
            stats: [
              { label: "Atendimento", value: "Imediato WhatsApp" },
              { label: "Satisfação", value: "4.8 ★" },
              { label: "Resolução", value: "Foco Estratégico" }
            ]
          }
        },
        {
          id: "services-danzicourt-advogados",
          type: "services",
          variant: "Services03",
          content: {
            tagline: "Especialidades",
            headline: "Como Podemos Ajudar Você Hoje?",
            subheadline: "Soluções jurídicas direcionadas e linguagem clara, sem burocracia excessiva.",
            services: [
              {
                id: "trabalhista",
                title: "Direito do Trabalho & Rescisões",
                description: "Cálculos rescisórios precisos, horas extras, equiparação salarial e acordos judiciais benéficos.",
                icon: "Briefcase"
              },
              {
                id: "civel",
                title: "Direito Cível & Consumidor",
                description: "Indenizações por danos materiais e morais, cobranças indevidas e litígios contratuais.",
                icon: "Scale"
              },
              {
                id: "previdenciario",
                title: "Planejamento e Aposentadorias (INSS)",
                description: "Revisão de benefícios, auxílios por incapacidade e planejamento previdenciário completo.",
                icon: "FileCheck"
              }
            ]
          }
        },
        {
          id: "process-danzicourt-advogados",
          type: "process",
          variant: "Process01",
          content: {
            title: "Passo a Passo do Seu Atendimento",
            steps: [
              { step: "1", title: "Contato Inicial no WhatsApp", description: "Você relata sua situação de forma simples e envia os primeiros documentos." },
              { step: "2", title: "Análise Técnica & Viabilidade", description: "Nosso corpo jurídico analisa os prazos, leis e chances reais da causa." },
              { step: "3", title: "Ação Estruturada & Acompanhamento", description: "Ingressamos com a medida cabível e atualizamos você em cada andamento." }
            ]
          }
        },
        {
          id: "faq-danzicourt-advogados",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Perguntas Frequentes",
            subtitle: "Tire suas dúvidas antes de falar com nosso time",
            questions: [
              { question: "Como funciona a primeira conversa?", answer: "Você pode nos mandar uma mensagem no WhatsApp. Fazemos uma triagem preliminar do seu caso para entender a urgência e os documentos necessários." },
              { question: "Atendem casos fora de Rio Branco?", answer: "Sim, atendemos demandas em todos os municípios do Acre e realizamos audiências virtuais quando permitido pela comarca." },
              { question: "Como acompanho o andamento do processo?", answer: "Nossa equipe envia informativos claros a cada nova movimentação judicial, sem termos jurídicos indecifráveis." }
            ]
          }
        },
        {
          id: "contact-danzicourt-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Fale Conosco",
            headline: "Pronto para Esclarecer Suas Dúvidas Jurídicas?",
            subheadline: "Atendimento imediato de segunda a sexta pelo WhatsApp oficial.",
            address: "Tv. Campo do Rio Branco, 461 - Capoeira, Rio Branco - AC",
            phone: "(68) 3224-2195",
            whatsapp: "(68) 99201-4455",
            ctaWhatsappText: "Chamar no WhatsApp Agora"
          }
        },
        {
          id: "footer-danzicourt-advogados",
          type: "footer",
          variant: "Footer01",
          content: {}
        }
      ]
    }
  ]
};

export default client;
