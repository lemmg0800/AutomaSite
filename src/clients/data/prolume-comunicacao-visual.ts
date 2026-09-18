import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "prolume-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.670Z",
  updatedAt: "2026-09-18T20:45:00.000Z",

  business: {
    name: "Prolume Comunicação Visual",
    legalName: "Prolume Comunicação Visual Ltda",
    niche: "Totens Luminosos, Back-lights, Placas em ACM e PVC & Corte a Laser",
    city: "Criciúma",
    state: "SC",
    address: "Rua Júlio de Castilho, 48 - São Luiz, Criciúma - SC",
    phone: "(48) 3433-3577",
    whatsapp: "(48) 98403-7906",
    googleRating: 4.9,
    instagram: "@prolume"
  },

  theme: {
    primaryColor: "#071120",
    secondaryColor: "#0f1d36",
    accentColor: "#0ea5e9",
    backgroundColor: "#040810",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
    bodyFont: "Inter",
    borderRadius: "lg",
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "dots",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Prolume Comunicação Visual | Totens, Back-lights e Corte a Laser em Criciúma",
        description: "Fabricação própria de totens luminosos, caixas back-light com LED, placas em ACM e corte a laser CNC no bairro São Luiz, Criciúma - SC."
      },
      sections: [
        {
          id: "header-prolume",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Totens & Back-lights", href: "#produtos" },
              { label: "Placas ACM & PVC", href: "#produtos" },
              { label: "Corte a Laser", href: "#produtos" },
              { label: "Sobre a Prolume", href: "#sobre" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Orçamento no WhatsApp"
          }
        },
        {
          id: "hero-prolume",
          type: "hero",
          variant: "Hero02",
          content: {
            badge: "Estruturas Luminosas & Corte a Laser em Criciúma",
            headline: "Totens Luminosos, Back-lights e Placas de Alta Durabilidade",
            subheadline: "Fabricação própria de totens de grande porte, painéis luminosos backlight com LED de alta potência e placas em ACM com corte computadorizado a laser na Rua Júlio de Castilho, São Luiz.",
            primaryCtaLabel: "Solicitar Orçamento no WhatsApp",
            primaryCtaHref: "https://wa.me/5548984037906",
            secondaryCtaLabel: "Ver Produtos Fabricados",
            secondaryCtaHref: "#produtos"
          }
        },
        {
          id: "products-prolume",
          type: "products",
          variant: "Products01",
          content: {
            badge: "Linha de Fabricação Própria",
            title: "Catálogo de Produtos em Comunicação Visual",
            subtitle: "Desenvolvemos projetos sob medida para indústrias, comércio e serviços em Criciúma e Sul de SC."
          }
        },
        {
          id: "about-prolume",
          type: "about",
          variant: "About01",
          content: {
            badge: "Parque Fabril Próprio",
            title: "Tradição e Tecnologia no Bairro São Luiz em Criciúma",
            description: "A Prolume Comunicação Visual conta com sede própria equipada com centros de usinagem e corte a laser CNC, cabine de pintura automotiva e setor especializado em montagem de estruturas metálicas na Rua Júlio de Castilho. Atendemos indústrias, comércios e arquitetos com rigor técnico e pontualidade na entrega."
          }
        },
        {
          id: "benefits-prolume",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que empresas e indústrias confiam na Prolume",
            subtitle: "Estrutura fabril completa sem terceirização para garantia de prazos e acabamento superior.",
            benefits: [
              {
                title: "Engenharia e Serralheria Pesada",
                description: "Projetos com cálculo estrutural de resistência a vento e intempéries para totens e pórticos.",
                icon: "shield"
              },
              {
                title: "Iluminação LED de Alta Eficiência",
                description: "Módulos LED de padrão industrial com difusão uniforme sem sombras nem manchas escuras.",
                icon: "award"
              },
              {
                title: "Atendimento Consultivo e Rápido",
                description: "Visita técnica no local para medições exatas e elaboração de orçamento transparente sem surpresas.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "contact-prolume",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Atendimento Ágil",
            title: "Pronto para Desenvolver a Comunicação Visual da sua Empresa?",
            formTitle: "Solicite uma Cotação Técnica",
            formSubtitle: "Preencha o formulário ou envie uma mensagem direta no WhatsApp da Prolume para atendimento prioritário."
          }
        },
        {
          id: "footer-prolume",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Prolume Comunicação Visual - Rua Júlio de Castilho, 48, Bairro São Luiz, Criciúma - SC. Fone: (48) 3433-3577 / WhatsApp: (48) 98403-7906."
          }
        }
      ]
    }
  ]
};

export default client;
