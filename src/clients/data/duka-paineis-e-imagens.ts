import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duka-paineis-e-imagens",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.673Z",
  updatedAt: "2026-09-18T20:50:00.000Z",

  business: {
    name: "Duka Painéis e Imagens",
    legalName: "Duka Painéis e Imagens Ltda",
    niche: "Painéis Industriais, Totens Rodoviários & Estruturas Monumentais",
    city: "Içara",
    state: "SC",
    address: "Rua Luiza Barp, 230 - Distrito Industrial 1ª Linha, Içara / Criciúma - SC",
    phone: "(48) 3432-3740",
    whatsapp: "(48) 98482-2827",
    googleRating: 4.8,
    instagram: "@dukapaineis"
  },

  theme: {
    primaryColor: "#0b0d11",
    secondaryColor: "#12161f",
    accentColor: "#f59e0b",
    backgroundColor: "#07080b",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
    bodyFont: "Inter",
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
        title: "Duka Painéis e Imagens | Painéis Industriais e Totens em Içara e Criciúma",
        description: "Engenharia de grandes formatos, totens rodoviários, estruturas metálicas e painéis industriais na Rua Luiza Barp, Distrito Industrial de Içara."
      },
      sections: [
        {
          id: "header-duka",
          type: "header",
          variant: "Header02",
          content: {
            navLinks: [
              { label: "Painéis & Fachadas", href: "#servicos" },
              { label: "Totens Rodoviários", href: "#servicos" },
              { label: "Letras Caixa", href: "#servicos" },
              { label: "Obras Industriais", href: "#obras" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Falar com Engenharia"
          }
        },
        {
          id: "hero-duka",
          type: "hero",
          variant: "Hero03",
          content: {
            badge: "Polo Metalmecânico - Distrito Industrial",
            headline: "Estruturas Monumentais, Painéis Industriais e Totens de Rodovia",
            subheadline: "Engenharia de precisão e fabricação pesada para indústrias, redes atacadistas e centros logísticos no Sul de SC com garantia estrutural e ART.",
            primaryCtaLabel: "Cotar Projeto Industrial no WhatsApp",
            primaryCtaHref: "https://wa.me/5548984822827",
            secondaryCtaLabel: "Ver Obras Industriais",
            secondaryCtaHref: "#obras"
          }
        },
        {
          id: "benefits-duka",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais Técnicos da Duka Painéis",
            subtitle: "Capacidade operacional para obras de grande envergadura e normas de segurança rigorosas.",
            benefits: [
              {
                title: "Cálculo Estrutural com Emissão de ART",
                description: "Projetos validados por engenheiros para resistir a vendavais e rajadas de vento do litoral sul.",
                icon: "shield"
              },
              {
                title: "Içamento Próprio com Caminhão Munck",
                description: "Montagem ágil sem depender de locação de terceiros, garantindo pontualidade absoluta na entrega.",
                icon: "clock"
              },
              {
                title: "Tratamento Anticorrosivo Industrial",
                description: "Pintura epóxi e eletrostática a pó que previne oxidação e desgaste por maresia e sol.",
                icon: "award"
              }
            ]
          }
        },
        {
          id: "services-duka",
          type: "services",
          variant: "Services03",
          content: {
            badge: "Soluções de Engenharia Visual",
            title: "Fabricação Própria para Grandes Empreendimentos",
            subtitle: "Capacidade técnica para montagem de estruturas pesadas em todo o estado de Santa Catarina."
          }
        },
        {
          id: "gallery-duka",
          type: "projects",
          variant: "Gallery01",
          content: {
            title: "Obras e Estruturas Entregues",
            subtitle: "Veja projetos fabricados e montados pela equipe Duka no Distrito Industrial e em todo o Sul catarinense."
          }
        },
        {
          id: "about-duka",
          type: "about",
          variant: "About01",
          content: {
            badge: "Parque Fabril Próprio",
            title: "Estrutura Industrial no Distrito Industrial de Içara / Criciúma",
            description: "A Duka Painéis e Imagens está estrategicamente sediada na Rua Luiza Barp, 230, no Distrito Industrial 1ª Linha. Contamos com maquinário pesado para conformação de chapas, solda estrutural, caminhão munck para içamento e aplicadores com certificação de trabalho em altura NR-35."
          }
        },
        {
          id: "contact-duka",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Plantão Técnico",
            title: "Inicie seu Projeto Estrutural com a Duka",
            formTitle: "Solicite uma Visita Técnica na sua Indústria",
            formSubtitle: "Nossos engenheiros e projetistas realizam a vistoria técnica e o levantamento dimensional no local da obra."
          }
        },
        {
          id: "footer-duka",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Duka Painéis e Imagens - Rua Luiza Barp, 230, Distrito Industrial 1ª Linha, Içara / Criciúma - SC. Fone: (48) 3432-3740 / WhatsApp: (48) 98482-2827."
          }
        }
      ]
    }
  ]
};

export default client;
