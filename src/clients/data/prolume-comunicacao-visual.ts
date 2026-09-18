import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "prolume-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:03.010Z",
  updatedAt: "2026-09-18T20:00:00.000Z",

  business: {
    name: "Prolume Comunicação Visual",
    legalName: "Prolume Comunicação Visual & Iluminação Ltda",
    niche: "Engenharia de Luminosos, Totens em LED & Fachadas de Alto Impacto Noturno",
    city: "Criciúma",
    state: "SC",
    address: "Rodovia Jorge Lacerda, Criciúma - SC",
    phone: "(48) 3462-1188",
    whatsapp: "(48) 99180-4550",
    googleRating: 4.8,
    instagram: "@prolumecomunicacao"
  },

  theme: {
    primaryColor: "#080e1a",
    secondaryColor: "#111c30",
    accentColor: "#06b6d4",
    backgroundColor: "#030712",
    textColor: "#f8fafc",
    headingFont: "Outfit",
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
        title: "Prolume Comunicação Visual | Luminosos, Totens LED e Fachadas em Criciúma",
        description: "Engenharia de letreiros luminosos, fachadas com tecnologia LED IP67, totens comerciais e sinalização noturna de alto impacto em Criciúma e Sul de SC."
      },
      sections: [
        {
          id: "header-prolume",
          type: "header",
          variant: "Header02",
          content: {
            announcement: "Luminosos com Módulos LED Samsung IP67 e Garantia de 2 Anos",
            navLinks: [
              { label: "Luminosos & Letreiros", href: "#servicos" },
              { label: "Totens LED", href: "#servicos" },
              { label: "Obras Noturnas", href: "#projetos" },
              { label: "Tecnologia LED", href: "#diferenciais" },
              { label: "Orçamento", href: "#contato" }
            ],
            ctaLabel: "Solicitar Luminoso"
          }
        },
        {
          id: "hero-prolume",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Especialistas em Fachadas e Sinalização Noturna",
            headline: "Faça sua Marca Brilhar com Máxima Visibilidade 24 Horas por Dia",
            subheadline: "Projetamos letreiros luminosos de alto impacto, totens verticais e fachadas com engenharia elétrica segura, luz uniforme e módulos LED de alta durabilidade para o comércio de Criciúma e região.",
            primaryCtaLabel: "Pedir Consultoria no WhatsApp",
            primaryCtaHref: "https://wa.me/5548991804550",
            secondaryCtaLabel: "Ver Obras Iluminadas",
            secondaryCtaHref: "#projetos",
            stats: [
              { value: "50.000h", label: "Vida Útil dos LEDs" },
              { value: "-70%", label: "Consumo de Energia" },
              { value: "IP67", label: "Proteção à Prova d'Água" }
            ]
          }
        },
        {
          id: "benefits-prolume",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da Engenharia Luminosa da Prolume",
            subtitle: "Por que investir em letreiros com componentes industriais de primeira linha faz toda a diferença.",
            benefits: [
              {
                title: "Módulos LED de Alta Intensidade com Lente 160°",
                description: "Distribuição homogênea da luz sem pontos escuros (sombras) na face do letreiro ou na lona.",
                icon: "award"
              },
              {
                title: "Fontes Seladas com Proteção contra Picos de Tensão",
                description: "Fontes blindadas Mean Well e similares que protegem os circuitos contra quedas e raios comuns no verão catarinense.",
                icon: "shield"
              },
              {
                title: "Economia e Baixa Manutenção",
                description: "Eficiência energética que reduz a conta de luz comercial em até 70% comparado a sistemas fluorescentes antigos.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-prolume",
          type: "services",
          variant: "Services03",
          content: {
            tagline: "Iluminação & Sinalização",
            title: "Sistemas Completos em Letreiros e Fachadas Luminosas",
            description: "Do projeto de iluminação à fabricação de estruturas metálicas e montagem elétrica no local.",
            items: [
              {
                title: "Letras Caixa com Iluminação Indireta 'Halo Effect'",
                description: "Efeito de auréola traseira contra a parede que proporciona elegância incomparável para fachadas comerciais.",
                icon: "💫",
                featured: true
              },
              {
                title: "Totens Verticais com Iluminação Interna LED",
                description: "Totens monumentais para postos de combustíveis, concessionárias e centros comerciais com visibilidade a centenas de metros.",
                icon: "🗼"
              },
              {
                title: "Fachadas Luminosas em ACM Vazado e Backlight",
                description: "Chapas de alumínio composto com usinagem a laser, acrílico leitoso e iluminação interna de alta potência.",
                icon: "🏢"
              },
              {
                title: "Retrofit e Conversão de Luminosos Antigos para LED",
                description: "Modernização completa da estrutura elétrica de fachadas existentes, trocando lâmpadas queimadas por LED de longa vida útil.",
                icon: "⚡"
              }
            ]
          }
        },
        {
          id: "projects-prolume",
          type: "projects",
          variant: "Projects01",
          content: {
            title: "Projetos Noturnos em Operação na Região",
            subtitle: "Veja a nitidez e o impacto visual dos nossos luminosos após o entardecer.",
            projects: [
              {
                title: "Fachada Noturna Completa de Auto Posto Rodoviário",
                category: "Postos & Rodovias",
                description: "Cobertura de pista com iluminação em fitas LED industriais e totem de preços de alta visibilidade."
              },
              {
                title: "Totem Dupla Face Centro Comercial Av. Centenário",
                category: "Totem Comercial",
                description: "Altura de 8 metros com acrílico termoformado e módulos de LED branco frio de 6500K."
              },
              {
                title: "Letreiro Halo Effect Concessionária Automotiva",
                category: "Concessionária",
                description: "Letras em aço galvanizado pintadas a pó eletrostático com projeção de luz traseira contínua."
              }
            ]
          }
        },
        {
          id: "about-prolume",
          type: "about",
          variant: "About01",
          content: {
            badge: "Engenharia & Eletricidade",
            title: "Especialistas em Comunicação Visual Noturna",
            description: "A Prolume nasceu com a missão de elevar a visibilidade das empresas do Sul de Santa Catarina através da tecnologia de iluminação. Desenvolvemos desde o projeto de cargas elétricas até a confecção estrutural das peças, garantindo segurança contra incêndios e conformidade técnica.",
            stats: [
              { number: "Criciúma / SC", label: "Sede Fabril Própria" },
              { number: "2 Anos", label: "Garantia Integral" }
            ]
          }
        },
        {
          id: "faq-prolume",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes sobre Letreiros Luminosos",
            items: [
              {
                question: "O letreiro pode ligar e desligar automaticamente?",
                answer: "Sim! Instalamos temporizadores digitais ou relés fotoelétricos que acendem o letreiro automaticamente no pôr do sol e desligam no horário programado por você."
              },
              {
                question: "O que acontece se chover forte na fachada luminosa?",
                answer: "Todos os nossos módulos LED e conexões elétricas possuem grau de proteção IP67 e IP68 com drenos de respiro na estrutura metálica, garantindo funcionamento ininterrupto mesmo sob temporais intensos."
              }
            ]
          }
        },
        {
          id: "contact-prolume",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Projetos Luminosos",
            title: "Destaque a Fachada da sua Empresa à Noite",
            formTitle: "Solicite um Projeto Luminoso Sob Medida",
            formSubtitle: "Envie uma foto do local da sua empresa para calcularmos a luminosidade e os componentes ideais."
          }
        },
        {
          id: "footer-prolume",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Prolume Comunicação Visual - Especialistas em letreiros luminosos, engenharia LED e totens comerciais de alto alcance.",
            oabInfo: "Instalações elétricas em conformidade com a NBR 5410"
          }
        }
      ]
    }
  ]
};

export default client;
