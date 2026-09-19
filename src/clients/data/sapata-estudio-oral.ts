import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "sapata-estudio-oral",
  status: "ativo",
  createdAt: "2026-09-18T22:50:00.000Z",
  updatedAt: "2026-09-18T22:50:00.000Z",

  business: {
    name: "Sapata Estúdio Oral",
    legalName: "Sapata Estúdio Oral Maringá Ltda",
    niche: "Odontologia 100% Digital CAD/CAM & Próteses em Zircônia",
    city: "Maringá",
    state: "PR",
    address: "Av. Humaitá, 452 - Zona 04, Maringá - PR",
    phone: "(44) 3028-5000",
    whatsapp: "(44) 99800-5000",
    googleRating: 5.0,
    instagram: "@sapataestudiooral"
  },

  theme: {
    primaryColor: "#7c3aed",
    secondaryColor: "#18181b",
    accentColor: "#8b5cf6",
    backgroundColor: "#09090b",
    textColor: "#f8fafc",
    headingFont: "Outfit",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "lg",
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "mesh",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Sapata Estúdio Oral | Odontologia Digital CAD/CAM em Maringá - PR",
        description: "Estúdio odontológico de vanguarda em Maringá: coroas em 1 dia com tecnologia CAD/CAM 3D, escaneamento intraoral sem moldagens e alinhadores transparentes."
      },
      sections: [
        {
          id: "header-sapata",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Fluxo 3D", href: "#processo" },
              { label: "Tecnologias", href: "#servicos" },
              { label: "O Estúdio", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar Escaneamento"
          }
        },
        {
          id: "hero-sapata",
          type: "hero",
          variant: "Hero04",
          content: {
            tagline: "Estúdio Odontológico 100% Digital",
            headline: "Dentes Prontos no Mesmo Dia com Escaneamento 3D e Robótica CAD/CAM",
            subheadline: "Eliminamos as moldagens antigas desconfortáveis com escaneamento intraoral colorido de alta velocidade na Zona 04 de Maringá. Coroas, facetas e restaurações cerâmicas usinadas em minutos.",
            primaryCta: {
              text: "Conhecer o Fluxo Digital no WhatsApp",
              href: "https://wa.me/5544998005000?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20tratamento%20digital%20da%20Sapata%20Est%C3%BAdio%20Oral."
            },
            secondaryCta: {
              text: "Ver Como Funciona em 3 Etapas",
              href: "#processo"
            },
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
            stats: [
              { value: "1 Dia", label: "Dentes com Robótica 3D" },
              { value: "0", label: "Moldagens de Massa" },
              { value: "5.0 ★", label: "Avaliação Máxima Google" }
            ]
          }
        },
        {
          id: "process-sapata",
          type: "process",
          variant: "Process01",
          content: {
            title: "Como Funciona o Fluxo 100% Digital do Estúdio",
            steps: [
              {
                step: "1",
                title: "Escaneamento Intraoral 3D",
                description: "Uma câmera óptica captura milhares de imagens por segundo da sua arcada em cores reais, gerando o modelo digital na tela em menos de 2 minutos."
              },
              {
                step: "2",
                title: "Design Computadorizado (CAD)",
                description: "O dente é modelado em 3D respeitando com exatidão a anatomia da sua mordida e o formato harmonioso do seu sorriso."
              },
              {
                step: "3",
                title: "Fresagem Robótica (CAM)",
                description: "Um bloco de cerâmica pura ou zircônia é usinado por brocas de diamante milimétricas e finalizado no forno cerâmico no mesmo dia."
              }
            ]
          }
        },
        {
          id: "services-sapata",
          type: "services",
          variant: "Services02",
          content: {
            title: "Tratamentos com Tecnologia Robótica e Digital",
            services: [
              {
                title: "Coroas e Restaurações em 1 Dia",
                description: "Substituição rápida de restaurações antigas escuras por peças cerâmicas resistentes usinadas e cimentadas na mesma consulta."
              },
              {
                title: "Alinhamento Ortodôntico Transparente",
                description: "Placas invisíveis planejadas por software 3D para movimentar os dentes com sutileza, higiene e previsibilidade."
              },
              {
                title: "Implantes com Guia Cirúrgico Impresso em 3D",
                description: "Instalação do pino através de guias impressas em resina biológica, garantindo precisão milimétrica sem cortes abertos."
              },
              {
                title: "Facetas Cerâmicas e Lentes Ultrafinas",
                description: "Lâminas confeccionadas sob medida para harmonização estética do sorriso com brilho vítreo permanente."
              }
            ]
          }
        },
        {
          id: "benefits-sapata",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Sapata Estúdio Oral?",
            subtitle: "Inovação tecnológica projetada para o seu máximo conforto em Maringá.",
            benefits: [
              {
                title: "Conforto Total sem Ânsia de Vômito",
                description: "Diga adeus àquela massa desconfortável na boca: o escaneamento a laser é limpo, rápido e 100% digital.",
                icon: "shield"
              },
              {
                title: "Ajuste e Adaptação Micrométrica",
                description: "As margens da coroa vedam perfeitamente no dente, evitando infiltrações e problemas gengivais futuros.",
                icon: "award"
              },
              {
                title: "Arquitetura e Calma na Zona 04",
                description: "Ambiente silencioso, elegante e com estacionamento exclusivo em uma das regiões mais nobres de Maringá.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "cta-sapata",
          type: "cta",
          variant: "CTA01",
          content: {
            headline: "Experimente a Odontologia do Futuro em Maringá",
            subheadline: "Agende seu escaneamento digital e veja em tempo real as possibilidades para o seu sorriso.",
            buttonLabel: "Agendar Escaneamento no WhatsApp"
          }
        },
        {
          id: "contact-sapata",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Unidade Maringá - Zona 04",
            headline: "Venha Conhecer o Estúdio Oral",
            subheadline: "Estamos à sua disposição na Avenida Humaitá para apresentar a tecnologia e planejar seu tratamento.",
            address: "Av. Humaitá, 452 - Zona 04, Maringá - PR",
            phone: "(44) 3028-5000",
            whatsapp: "(44) 99800-5000",
            ctaWhatsappText: "Falar com o Estúdio no WhatsApp"
          }
        },
        {
          id: "footer-sapata",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Sapata Estúdio Oral Maringá Ltda | CRO-PR Clínica 7410 | Responsável Técnico: Dr. Lucas Sapata - CRO-PR 22810"
          }
        }
      ]
    }
  ]
};

export default client;
