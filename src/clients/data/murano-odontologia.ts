import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "murano-odontologia",
  status: "ativo",
  createdAt: "2026-09-18T22:50:00.000Z",
  updatedAt: "2026-09-18T22:50:00.000Z",

  business: {
    name: "Murano Odontologia Especializada",
    legalName: "Murano Odontologia Especializada Curitiba Ltda",
    niche: "Odontologia Estética & Reabilitação Oral de Alto Padrão",
    city: "Curitiba",
    state: "PR",
    address: "R. Desembargador Motta, 1499 - Batel, Curitiba - PR",
    phone: "(41) 3342-9090",
    whatsapp: "(41) 98765-4321",
    googleRating: 5.0,
    instagram: "@muranoodontologia"
  },

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#d97706",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Playfair Display",
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
        title: "Murano Odontologia Especializada | Lentes de Contato e Estética Dental no Batel - Curitiba",
        description: "Clínica odontológica boutique no Batel especializada em lentes de contato em porcelana, reabilitação oral e estética dental exclusiva em Curitiba."
      },
      sections: [
        {
          id: "header-murano",
          type: "header",
          variant: "Header02",
          content: {
            announcement: "Consultas Exclusivas com Hora Marcada no Batel",
            navLinks: [
              { label: "Lentes & Facetas", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Dúvidas Frequentes", href: "#faq" },
              { label: "Contato Privativo", href: "#contato" }
            ],
            ctaLabel: "Agendamento Privativo"
          }
        },
        {
          id: "hero-murano",
          type: "hero",
          variant: "Hero01",
          content: {
            badge: "Odontologia Boutique no Batel",
            headline: "A Arte e a Precisão da Odontologia Estética Personalizada",
            subheadline: "Criamos sorrisos únicos com lentes de contato cerâmicas ultrafinas, respeitando a harmonia facial e a biologia natural dos seus dentes em um ambiente reservado e acolhedor.",
            primaryCtaLabel: "Solicitar Agendamento Exclusivo",
            secondaryCtaLabel: "Conhecer Metodologia",
            secondaryCtaHref: "#servicos"
          }
        },
        {
          id: "services-murano",
          type: "services",
          variant: "Services02",
          content: {
            title: "Tratamentos Especializados de Alta Complexidade",
            services: [
              {
                title: "Lentes de Contato em Porcelana Pura",
                description: "Lâminas cerâmicas com espessura milimétrica confeccionadas artesanalmente para corrigir cor, formato, fechamento de diastemas e manchas."
              },
              {
                title: "Digital Smile Design (DSD)",
                description: "Planejamento fotográfico e vídeo digital que permite você testar e aprovar o novo sorriso na boca (mockup) antes de qualquer intervenção."
              },
              {
                title: "Reabilitação Oral & Oclusão",
                description: "Restauração biomecânica completa para dentes desgastados pelo bruxismo, devolvendo a altura correta da face e o conforto mastigatório."
              },
              {
                title: "Alinhadores Transparentes Invisalign",
                description: "Tratamento ortodôntico invisível e altamente estético que reposiciona os dentes com previsibilidade digital e conforto diário."
              }
            ]
          }
        },
        {
          id: "benefits-murano",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "A Experiência Murano no Batel",
            subtitle: "Conforto privativo, pontualidade rigorosa e dedicação absoluta ao seu bem-estar.",
            benefits: [
              {
                title: "Atendimento 100% Individualizado",
                description: "Tempo clínico amplo e reservado para cada paciente, sem salas de espera cheias ou atendimentos apressados.",
                icon: "award"
              },
              {
                title: "Laboratório de Cerâmica de Elite",
                description: "Parceria direta com mestres ceramistas que reproduzem com perfeição a translucidez e textura do esmalte dental natural.",
                icon: "shield"
              },
              {
                title: "Tecnologia e Escaneamento 3D",
                description: "Adeus às moldagens com massas desconfortáveis: imagens digitais tridimensionais com máxima fidelidade micrométrica.",
                icon: "sparkles"
              }
            ]
          }
        },
        {
          id: "faq-murano",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Perguntas Frequentes sobre Lentes e Estética Dental",
            subtitle: "Tire suas dúvidas sobre o planejamento do seu novo sorriso",
            items: [
              {
                question: "As lentes de contato dentais mancham com café ou vinho?",
                answer: "Não. A porcelana odontológica de alta densidade possui superfície vitrificada impermeável que não absorve pigmentos alimentares nem perde o brilho ao longo dos anos."
              },
              {
                question: "É necessário desgastar muito os dentes naturais?",
                answer: "Nossa filosofia é estritamente minimamente invasiva. Com o avanço das cerâmicas ultrafinas de 0.2 a 0.4mm, o preparo é mínimo e, em muitos casos, realizado apenas na camada superficial do esmalte."
              },
              {
                question: "Consigo ver como vai ficar antes de iniciar?",
                answer: "Sim! Através da tecnologia de Mockup (test-drive do sorriso), colocamos uma réplica provisória em resina na sua boca para você se olhar no espelho, sorrir e aprovar o formato antes de confeccionar as peças definitivas."
              }
            ]
          }
        },
        {
          id: "contact-murano",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Atendimento Exclusivo no Batel",
            headline: "Agende sua Consulta de Avaliação Estética",
            subheadline: "Será um prazer receber você em nosso consultório privativo na Rua Desembargador Motta.",
            address: "R. Desembargador Motta, 1499 - Batel, Curitiba - PR",
            phone: "(41) 3342-9090",
            whatsapp: "(41) 98765-4321",
            ctaWhatsappText: "Agendar Consulta Privativa"
          }
        },
        {
          id: "footer-murano",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Murano Odontologia Especializada Curitiba | CRO-PR Clínica 6190 | Responsável Técnico: Dr. Marcelo Murano - CRO-PR 17450"
          }
        }
      ]
    }
  ]
};

export default client;
