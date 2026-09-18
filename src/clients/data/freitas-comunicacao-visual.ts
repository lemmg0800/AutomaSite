import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "freitas-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.659Z",
  updatedAt: "2026-09-18T19:03:02.659Z",

  business: {
    name: "Freitas Comunicação Visual",
    legalName: "Freitas Comunicação Visual",
    niche: "Fachadas em ACM, Letras Caixa, Painéis & Outdoors",
    city: "Içara",
    state: "SC",
    address: "Rua Linha Três Ribeirões, 600 - Centenário, Içara / Criciúma - SC",
    phone: "(48) 3443-9414",
    whatsapp: "(48) 99190-9268",
    googleRating: 4.9,
    instagram: "@freitascomunicacaovisual"
  },

  theme: {
    primaryColor: "#0b1329",
    secondaryColor: "#1e293b",
    accentColor: "#eab308",
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
        title: "Freitas Comunicação Visual | Fachadas e Comunicação Visual em Criciúma e Região",
        description: "Especialistas em fachadas em ACM, letreiros luminosos, neon LED, totens e impressão digital de alta definição em Criciúma, Içara e Sul de SC."
      },
      sections: [
        {
          id: "header-freitas-comunicacao-visual",
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
          id: "hero-freitas-comunicacao-visual",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Comunicação Visual de Alto Padrão em Criciúma e Região",
            headline: "Transforme a Fachada da sua Empresa em um Imã de Novos Clientes",
            subheadline: "Projetos arquitetônicos em ACM, letreiros luminosos em LED, corte a laser e sinalização comercial de alta durabilidade com instalação técnica especializada.",
            primaryCtaLabel: "Pedir Orçamento no WhatsApp",
            primaryCtaHref: "https://wa.me/5548991909268",
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
          id: "benefits-freitas-comunicacao-visual",
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
          id: "services-freitas-comunicacao-visual",
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
          id: "about-freitas-comunicacao-visual",
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
          id: "faq-freitas-comunicacao-visual",
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
          id: "contact-freitas-comunicacao-visual",
          type: "contact",
          variant: "Contact01",
          content: {
            title: "Solicite seu Orçamento de Fachada",
            subtitle: "Envie sua mensagem ou fale diretamente no WhatsApp da nossa equipe comercial para agendar sua medição.",
            formCta: "Enviar Pedido de Orçamento"
          }
        },
        {
          id: "footer-freitas-comunicacao-visual",
          type: "footer",
          variant: "Footer01",
          content: {}
        }
      ]
    }
  ]
};

export default client;
