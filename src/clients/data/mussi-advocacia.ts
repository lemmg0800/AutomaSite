import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "mussi-advocacia",
  status: "ativo",
  createdAt: "2026-09-16T21:00:00.000Z",
  updatedAt: "2026-09-16T21:00:00.000Z",
  
  business: {
    name: "Mussi Advocacia & Consultoria",
    legalName: "Mussi Advocacia e Consultoria Jurídica",
    niche: "Direito Penal Estratégico & Compliance Trabalhista",
    city: "Florianópolis",
    state: "SC",
    address: "Rua Felipe Schmidt, 515 - Centro, Florianópolis - SC",
    phone: "(48) 3322-1040",
    whatsapp: "(48) 98834-5678",
    email: "contato@advmussi.com.br",
    googleRating: 4.8,
    instagram: "@mussiadvocacia"
  },

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#b91c1c",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
    bodyFont: "Inter",
    borderRadius: "md",
    mode: "dark"
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Mussi Advocacia | Penal de Urgência em Florianópolis",
        description: "Defesa criminal estratégica, flagrantes 24h e assessoria em compliance penal e trabalhista em Florianópolis - SC."
      },
      sections: [
        {
          id: "header-mussi",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Atuação Penal", href: "#penal" },
              { label: "Plantão 24h", href: "#plantao" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Plantão 24h"
          }
        },
        {
          id: "hero-mussi",
          type: "hero",
          variant: "Hero02",
          content: {
            badge: "Plantão Criminal 24 Horas",
            headline: "Defesa Técnica Rigorosa & Resposta Imediata em Matéria Penal",
            subheadline: "Atuação consultiva e contenciosa especializada em flagrantes, inquéritos e operações policiais com máxima agilidade e discrição.",
            primaryCtaLabel: "Acionar Plantão Criminal via WhatsApp",
            secondaryCtaLabel: "Conhecer Atuação",
            secondaryCtaHref: "#penal",
            trustPoints: [
              "Atendimento Urgente 24h",
              "Atuação no TJSC, TRF4 e Tribunais Superiores",
              "Sigilo e Ética Absoluta"
            ]
          }
        },
        {
          id: "footer-mussi",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Atendimento estritamente pautado no Provimento 205/2021 do CFOAB.",
            oabInfo: "OAB/SC"
          }
        }
      ]
    }
  ]
};

export default client;