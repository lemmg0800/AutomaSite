import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duo-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.780Z",
  updatedAt: "2026-09-18T20:30:00.000Z",

  business: {
    name: "Duo Comunicação Visual",
    legalName: "Duo Comunicação Visual Ltda",
    niche: "Projetos Luminosos de Neon LED, Letras Caixa Face Acrílica & Fachadas",
    city: "Içara",
    state: "SC",
    address: "Rodovia Jorge Zanatta, 6563 - Presidente Vargas, Içara / Criciúma - SC",
    phone: "(48) 99622-6383",
    whatsapp: "(48) 99622-6383",
    googleRating: 4.9,
    instagram: "@duoonline"
  },

  theme: {
    primaryColor: "#090714",
    secondaryColor: "#170f2f",
    accentColor: "#ec4899",
    backgroundColor: "#06040d",
    textColor: "#f8fafc",
    headingFont: "Plus Jakarta Sans",
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
        title: "Duo Comunicação Visual | Neon LED e Letreiros Luminosos em Criciúma e Içara",
        description: "Fabricação própria de letreiros em acrílico translúcido, neon LED personalizado, fachadas em ACM e comunicação visual comercial de alto padrão no Sul de SC."
      },
      sections: [
        {
          id: "header-duo",
          type: "header",
          variant: "Header02",
          content: {
            navLinks: [
              { label: "Neon LED", href: "#servicos" },
              { label: "Letras Caixa", href: "#servicos" },
              { label: "Fachadas ACM", href: "#servicos" },
              { label: "Galeria de Obras", href: "#galeria" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Orçamento no WhatsApp"
          }
        },
        {
          id: "hero-duo",
          type: "hero",
          variant: "Hero01",
          content: {
            badge: "Projetos Luminosos & Sinalização Premium",
            headline: "Ilumine sua Marca com Neon LED e Fachadas de Alto Padrão",
            subheadline: "Desenvolvemos fachadas em ACM com iluminação indireta, letreiros em acrílico cristal com face translúcida e projetos personalizados de Neon LED que destacam seu negócio de dia e de noite.",
            primaryCtaLabel: "Criar Projeto Luminoso no WhatsApp",
            primaryCtaHref: "https://wa.me/5548996226383",
            secondaryCtaLabel: "Ver Obras Realizadas",
            secondaryCtaHref: "#galeria"
          }
        },
        {
          id: "benefits-duo",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que as marcas mais exigentes escolhem a Duo",
            subtitle: "União entre engenharia estrutural, tecnologia LED e design de alta visibilidade.",
            benefits: [
              {
                title: "Módulos LED de Alta Eficiência",
                description: "Iluminação uniforme sem pontos escuros, com proteção IP67 contra chuva e garantia estendida.",
                icon: "shield"
              },
              {
                title: "Acrílico Cast 100% Puro",
                description: "Bordas polidas e brilho cristalino que não amarelam nem ressecam com a radiação solar.",
                icon: "award"
              },
              {
                title: "Simulação Prévia 3D",
                description: "Você aprova a maquete digital do letreiro na sua fachada antes do início da fabricação.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-duo",
          type: "services",
          variant: "Services02",
          content: {
            badge: "Soluções Visuais Completas",
            title: "O que a Duo Comunicação Visual Produz para o seu Negócio",
            subtitle: "Da criação conceitual à instalação final na sua empresa em Santa Catarina."
          }
        },
        {
          id: "gallery-duo",
          type: "projects",
          variant: "Gallery01",
          content: {
            title: "Obras e Letreiros Entregues pela Duo",
            subtitle: "Confira projetos instalados em Criciúma, Içara, Tubarão e litoral catarinense."
          }
        },
        {
          id: "contact-duo",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Atendimento Consultivo",
            title: "Pronto para Iluminar a Fachada da sua Empresa?",
            formTitle: "Solicite seu Orçamento de Letreiro ou Neon",
            formSubtitle: "Preencha os dados abaixo ou chame diretamente no WhatsApp para agendamento de visita técnica."
          }
        },
        {
          id: "footer-duo",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Duo Comunicação Visual - Fabricação e instalação de letreiros luminosos, neon LED e fachadas corporativas."
          }
        }
      ]
    }
  ]
};

export default client;
