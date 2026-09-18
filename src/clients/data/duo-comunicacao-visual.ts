import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duo-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.780Z",
  updatedAt: "2026-09-18T20:00:00.000Z",

  business: {
    name: "Duo Comunicação Visual",
    legalName: "Duo Comunicação Visual & Design",
    niche: "Sinalização Corporativa, Acrílico Cristal & Ambientação de Espaços",
    city: "Criciúma",
    state: "SC",
    address: "Rua Coronel Pedro Benedet, Centro, Criciúma - SC",
    phone: "(48) 99124-7710",
    whatsapp: "(48) 99124-7710",
    googleRating: 4.8,
    instagram: "@duocomunicacaovisual"
  },

  theme: {
    primaryColor: "#090d16",
    secondaryColor: "#151b2d",
    accentColor: "#6366f1",
    backgroundColor: "#060813",
    textColor: "#f8fafc",
    headingFont: "Outfit",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "lg",
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "prism",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Duo Comunicação Visual | Sinalização Corporativa e Acrílico em Criciúma",
        description: "Especialistas em comunicação visual interna, letreiros em acrílico cristal, neon LED, sinalização de clínicas e escritórios e ambientação de marca em Criciúma."
      },
      sections: [
        {
          id: "header-duo",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Acrílico & Letreiros", href: "#servicos" },
              { label: "Neon LED", href: "#servicos" },
              { label: "Projetos de Interiores", href: "#projetos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Falar Conosco", href: "#contato" }
            ],
            ctaLabel: "Criar Projeto 3D"
          }
        },
        {
          id: "hero-duo",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Design & Sinalização Corporativa em Criciúma",
            headline: "Transforme a Recepção da sua Empresa na Melhor Primeira Impressão",
            subheadline: "Desenvolvemos letreiros nobres em acrílico espelhado, neon LED sob medida e sinalização de interiores para escritórios, clínicas e lojas que prezam pelo alto padrão.",
            primaryCtaLabel: "Solicitar Simulação no WhatsApp",
            primaryCtaHref: "https://wa.me/5548991247710",
            secondaryCtaLabel: "Ver Ambientes Transformados",
            secondaryCtaHref: "#projetos",
            stats: [
              { value: "Design 3D", label: "Prévia do Ambiente" },
              { value: "Corte Laser", label: "Precisão Óptica" },
              { value: "Instalação Clean", label: "Sem Sujeira no Local" }
            ]
          }
        },
        {
          id: "benefits-duo",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "O que torna os projetos da Duo a escolha de clínicas e escritórios",
            subtitle: "União entre arquitetura de interiores, materiais nobres e acabamento milimétrico.",
            benefits: [
              {
                title: "Acrílico Cast 100% Puro",
                description: "Placas ópticas que não amarelam, não ressecam e transmitem sofisticação com bordas polidas ao diamante.",
                icon: "award"
              },
              {
                title: "Instalação Rápida e Silenciosa",
                description: "Montagem técnica com fixação invisível por prolongadores ou fita estrutural sem danificar sua decoração.",
                icon: "shield"
              },
              {
                title: "Prévia Digital 3D no seu Espaço",
                description: "Você visualiza exatamente como seu letreiro ou sinalização ficará na parede antes de produzir.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-duo",
          type: "services",
          variant: "Services03",
          content: {
            tagline: "Ambientação & Marca",
            title: "Soluções de Comunicação Visual Interna e Externa",
            description: "Peças exclusivas desenhadas para valorizar consultórios médicos, escritórios e boutiques.",
            items: [
              {
                title: "Letreiros em Acrílico Espelhado e Cristal",
                description: "Letras em alto relevo com acabamento em ouro rosé, dourado, prata e acrílico leitoso de brilho espelhado.",
                icon: "✨",
                featured: true
              },
              {
                title: "Neon LED Flex Decorativo Sob Medida",
                description: "Frases, logomarcas e símbolos em neon LED de 12V com controle de intensidade (dimmer) para pontos 'instagramáveis'.",
                icon: "💡"
              },
              {
                title: "Sinalização para Consultórios e Clínicas",
                description: "Placas de portas, diretórios de andares, sinalização de salas e totens internos seguindo a identidade do seu espaço.",
                icon: "🏢"
              },
              {
                title: "Adesivagem de Vidros e Películas Jateadas",
                description: "Divisórias corporativas com privacidade acústica e visual, cortes personalizados e elegância minimalista.",
                icon: "📐"
              }
            ]
          }
        },
        {
          id: "projects-duo",
          type: "projects",
          variant: "Projects01",
          content: {
            title: "Ambientes Corporativos Recentes em Criciúma",
            subtitle: "Conheça alguns dos escritórios e clínicas ambientados pela equipe Duo.",
            projects: [
              {
                title: "Recepção Escritório de Advocacia na Praça Nereu Ramos",
                category: "Escritório Corporativo",
                description: "Painel ripado com logotipo em acrílico dourado espelhado e iluminação indireta quente."
              },
              {
                title: "Letreiro e Sinalização em Clínica Dermatológica",
                category: "Clínica Médica",
                description: "Acrílico cristal de 10mm com prolongadores em inox e sinalização minimalista de consultórios."
              },
              {
                title: "Espaço Instagramável em Loja de Moda Centro",
                category: "Varejo & PDV",
                description: "Neon LED Flex personalizado em tom rosa suave montado sobre painel floral decorativo."
              }
            ]
          }
        },
        {
          id: "about-duo",
          type: "about",
          variant: "About01",
          content: {
            badge: "Identidade & Detalhe",
            title: "Design de Interiores que Fala a Linguagem da sua Marca",
            description: "Na Duo, acreditamos que cada detalhe da sua empresa comunica valor aos seus clientes. Por isso, combinamos tecnologia de corte a laser milimétrico com consultoria visual para transformar paredes comuns em experiências marcantes em Criciúma e região.",
            stats: [
              { number: "Criciúma / SC", label: "Atendimento Especializado" },
              { number: "100%", label: "Projetos Sob Medida" }
            ]
          }
        },
        {
          id: "faq-duo",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Perguntas Frequentes sobre Sinalização Corporativa",
            items: [
              {
                question: "Posso instalar letreiros em paredes de drywall ou papel de parede?",
                answer: "Com certeza! Utilizamos gabaritos milimétricos e fixadores estruturais de alta ancoragem ou fitas VHB especiais que não danificam o revestimento existente."
              },
              {
                question: "Como funciona a elaboração da prévia 3D?",
                answer: "Você nos envia uma foto frontal da parede com as medidas aproximadas e seu logotipo em vetor; nossa equipe gera a simulação gráfica realista da aplicação."
              }
            ]
          }
        },
        {
          id: "contact-duo",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Projetos Exclusivos",
            title: "Vamos Criar a Sinalização do seu Espaço?",
            formTitle: "Solicite sua Simulação de Letreiro",
            formSubtitle: "Fale diretamente com nossa equipe criativa e receba uma consultoria inicial sem compromisso."
          }
        },
        {
          id: "footer-duo",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Duo Comunicação Visual - Especialistas em acrílico, neon LED e identidade visual arquitetônica."
          }
        }
      ]
    }
  ]
};

export default client;
