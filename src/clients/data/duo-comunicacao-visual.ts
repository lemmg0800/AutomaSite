import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duo-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.668Z",
  updatedAt: "2026-09-18T19:03:02.668Z",

  business: {
    name: "Duo Comunicação Visual",
    legalName: "Duo Comunicação Visual",
    niche: "Neon LED, Fachadas Comerciais, Totens & Adesivagem de Frotas",
    city: "Içara",
    state: "SC",
    address: "Rodovia Jorge Zanatta, 6563 - Presidente Vargas, Içara / Criciúma - SC",
    phone: "(48) 3413-6382",
    whatsapp: "(48) 99622-6383",
    googleRating: 4.9,
    instagram: "@duoonline"
  },

  theme: {
    primaryColor: "#090d16",
    secondaryColor: "#172033",
    accentColor: "#06b6d4",
    backgroundColor: "#040711",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "md",
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "prism",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Duo Comunicação Visual | Fachadas e Comunicação Visual em Criciúma e Região",
        description: "Especialistas em fachadas em ACM, letreiros luminosos, neon LED, totens e impressão digital de alta definição em Criciúma, Içara e Sul de SC."
      },
      sections: [
        {
          id: "header-duo-comunicacao-visual",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Fachadas ACM", href: "#servicos" },
              { label: "Luminosos & Letreiros", href: "#servicos" },
              { label: "Totens & Frotas", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Solicitar Orçamento"
          }
        },
        {
          id: "hero-duo-comunicacao-visual",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Comunicação Visual de Alto Padrão em Criciúma e Região",
            headline: "Transforme a Fachada da sua Empresa em um Imã de Novos Clientes",
            subheadline: "Projetos arquitetônicos em ACM, letreiros luminosos em LED, corte a laser e sinalização comercial de alta durabilidade com instalação técnica especializada.",
            primaryCtaLabel: "Pedir Orçamento no WhatsApp",
            primaryCtaHref: "https://wa.me/5548996226383",
            secondaryCtaLabel: "Ver Portfólio de Obras",
            secondaryCtaHref: "#servicos",
            stats: [
              { value: "+1000", label: "Fachadas Instaladas" },
              { value: "ACM 4mm", label: "Padrão Premium" },
              { value: "100%", label: "Garantia Estrutural" }
            ]
          }
        },
        {
          id: "benefits-duo-comunicacao-visual",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a nossa empresa para sua fachada",
            subtitle: "Qualidade de acabamento, maquinário industrial de precisão e pontualidade na entrega.",
            benefits: [
              {
                title: "Maquinário de Corte a Laser CNC",
                description: "Encaixes milimétricos e acabamento impecável em acrílico, MDF, inox e ACM.",
                icon: "award"
              },
              {
                title: "Instalação Própria com ART",
                description: "Equipe técnica qualificada com equipamentos de segurança e responsabilidade estrutural.",
                icon: "shield"
              },
              {
                title: "Visita Técnica e Orçamento Rápido",
                description: "Atendimento presencial em Criciúma, Içara e região com medição sem compromisso.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-duo-comunicacao-visual",
          type: "services",
          variant: "Services03",
          content: {
            title: "Soluções Completas em Comunicação Visual",
            subtitle: "Do projeto 3D à fabricação e montagem no local.",
            services: [
              {
                title: "Fachadas Comerciais em ACM",
                description: "Revestimentos modernos em placas de alumínio composto com alta resistência a intempéries e visual sofisticado."
              },
              {
                title: "Letras Caixa & Letreiros Luminosos",
                description: "Letras em bloco de acrílico, inox, galvanizado e iluminação indireta ou frontal em módulos de LED IP67."
              },
              {
                title: "Totens Publicitários e Pórticos",
                description: "Estruturas verticais de grande visibilidade para postos, indústrias, shopping centers e concessionárias."
              },
              {
                title: "Envelopamento de Frotas e Vitrines",
                description: "Adesivagem automotiva de alta durabilidade e personalização de frotas comerciais com película protetora UV."
              }
            ]
          }
        },
        {
          id: "about-duo-comunicacao-visual",
          type: "about",
          variant: "About01",
          content: {
            badge: "Estrutura & Tradição",
            title: "Fabricação Própria e Excelência em Cada Detalhe",
            description: "Com parque fabril moderno e equipe de designers e instaladores experientes, entregamos projetos de comunicação visual que valorizam marcas e aumentam o faturamento dos nossos clientes no Sul de Santa Catarina.",
            stats: [
              { number: "Criciúma / SC", label: "Atendimento Regional" },
              { number: "Ágil", label: "Medição e Prévia 3D" }
            ]
          }
        },
        {
          id: "faq-duo-comunicacao-visual",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Perguntas Frequentes sobre Fachadas",
            items: [
              {
                question: "Qual a durabilidade de uma fachada em ACM?",
                answer: "As placas de ACM possuem pintura Kynar/PVDF de alta durabilidade, resistindo por mais de 10 anos ao sol e chuva sem desbotar."
              },
              {
                question: "Vocês fazem visita técnica para medição?",
                answer: "Sim! Enviamos nossos técnicos até o seu endereço em Criciúma, Içara e cidades vizinhas para aferição das medidas e estudo de viabilidade."
              }
            ]
          }
        },
        {
          id: "contact-duo-comunicacao-visual",
          type: "contact",
          variant: "Contact01",
          content: {
            title: "Solicite seu Orçamento de Fachada",
            subtitle: "Envie sua mensagem ou fale diretamente no WhatsApp da nossa equipe comercial para agendar sua medição.",
            formCta: "Enviar Pedido de Orçamento"
          }
        },
        {
          id: "footer-duo-comunicacao-visual",
          type: "footer",
          variant: "Footer01",
          content: {}
        }
      ]
    }
  ]
};

export default client;
