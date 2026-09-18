import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "freitas-comunicacao-visual",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.890Z",
  updatedAt: "2026-09-18T20:00:00.000Z",

  business: {
    name: "Freitas Comunicação Visual",
    legalName: "Freitas Comunicação Visual & Frotas Ltda",
    niche: "Envelopamento de Frotas Comerciais & Impressão Digital de Grande Formato",
    city: "Criciúma",
    state: "SC",
    address: "Rua Álvaro Catão, Criciúma - SC",
    phone: "(48) 99841-3320",
    whatsapp: "(48) 99841-3320",
    googleRating: 4.9,
    instagram: "@freitascomunicacaovisual"
  },

  theme: {
    primaryColor: "#0b0f19",
    secondaryColor: "#172033",
    accentColor: "#ef4444",
    backgroundColor: "#050811",
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
        title: "Freitas Comunicação Visual | Envelopamento de Frotas e Impressão Digital em Criciúma",
        description: "Especialistas em envelopamento automotivo comercial, adesivagem de frotas, caminhões baú, impressão digital de grande formato e lonas em Criciúma e Sul de SC."
      },
      sections: [
        {
          id: "header-freitas",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Envelopamento de Frotas", href: "#servicos" },
              { label: "Caminhões & Baús", href: "#servicos" },
              { label: "Impressão Digital", href: "#servicos" },
              { label: "Frotas Entregues", href: "#projetos" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Orçamento de Frota"
          }
        },
        {
          id: "hero-freitas",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Líder em Envelopamento Comercial no Sul de SC",
            headline: "Transforme seus Veículos em Outdoors Móveis que Vendem Todos os Dias",
            subheadline: "Envelopamento profissional parcial e total de frotas comerciais, vans e caminhões baú com películas automotivas fundidas (Cast) e laminação com bloqueio UV.",
            primaryCtaLabel: "Cotar Envelopamento no WhatsApp",
            primaryCtaHref: "https://wa.me/5548998413320",
            secondaryCtaLabel: "Ver Frotas Realizadas",
            secondaryCtaHref: "#projetos",
            stats: [
              { value: "+3.500", label: "Veículos Adesivados" },
              { value: "Garantia UV", label: "Película Automotiva" },
              { value: "Galpão Próprio", label: "Entrada para Carretas" }
            ]
          }
        },
        {
          id: "benefits-freitas",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que frotistas e transportadoras escolhem a Freitas Comunicação",
            subtitle: "Infraestrutura para receber veículos pesados, materiais certificados e aplicação sem bolhas.",
            benefits: [
              {
                title: "Vinil Cast com Laminação Protetora",
                description: "Películas automotivas que resistem a lavagens com lava-jato, sol escaldante e não desbotam por até 5 anos.",
                icon: "shield"
              },
              {
                title: "Aplicação Rápida sem Travar sua Logística",
                description: "Equipe com capacidade para adesivar múltiplos veículos por dia, reduzindo o tempo de parada da sua frota.",
                icon: "clock"
              },
              {
                title: "Padronização Fiel da Identidade da Marca",
                description: "Calibração de cor pantone e prova digital para que todos os veículos da sua empresa tenham o mesmo padrão visual.",
                icon: "award"
              }
            ]
          }
        },
        {
          id: "services-freitas",
          type: "services",
          variant: "Services01",
          content: {
            badge: "Frotas & Grandes Formatos",
            title: "Soluções em Adesivagem Automotiva e Impressão Digital",
            subtitle: "Da personalização de 1 utilitário a frotas corporativas de 50+ caminhões.",
            services: [
              {
                title: "Envelopamento de Carros, Furgões e Vans",
                description: "Projetos de alta cobertura ou meia adesivagem estratégica para veículos de vendas, técnicos e entregas.",
                cta: "Cotar para meu Veículo"
              },
              {
                title: "Adesivagem de Caminhões Baú e Carretas",
                description: "Aplicação em baús de alumínio corrugado e liso com cortes perfeitos e vedação das emendas.",
                cta: "Cotar para Caminhão"
              },
              {
                title: "Impressão Digital em Lonas e Vinil de 3.20m",
                description: "Impressoras industriais de alta definição para lonas backlight, banners promocionais e painéis de grande porte.",
                cta: "Consultar Metragem"
              },
              {
                title: "Adesivos Recortados e Etiquetas Técnicas",
                description: "Vinil adesivo de corte eletrônico com precisão para frotas, maquinários e identificação patrimonial.",
                cta: "Pedir Catálogo"
              }
            ]
          }
        },
        {
          id: "projects-freitas",
          type: "projects",
          variant: "Projects01",
          content: {
            title: "Frotas Comerciais Entregues em Criciúma e Região",
            subtitle: "Confira alguns dos veículos padronizados pela equipe Freitas.",
            projects: [
              {
                title: "Padronização de Frota com 16 Utilitários",
                category: "Frota Corporativa",
                description: "Envelopamento lateral e traseiro com vinil polimérico e laminação fosca anti-risco."
              },
              {
                title: "Envelopamento Total de Caminhão Baú 14m",
                category: "Veículos Pesados",
                description: "Aplicação em lona lateral e traseira para distribuidora de bebidas com cores vivas e durabilidade estendida."
              },
              {
                title: "Identificação Visual de Frota de Ambulâncias e Resgate",
                category: "Serviços Essenciais",
                description: "Películas refletivas de alta intensidade homologadas pelo Denatran para visibilidade noturna."
              }
            ]
          }
        },
        {
          id: "about-freitas",
          type: "about",
          variant: "About01",
          content: {
            badge: "Galpão e Equipamentos Próprios",
            title: "Estrutura Dedicada para Frotas de Todos os Portes",
            description: "A Freitas Comunicação Visual possui galpão com pé-direito elevado e doca para manobra de caminhões na Rua Álvaro Catão, em Criciúma. Nossa equipe de aplicadores é treinada segundo as melhores práticas internacionais de adesivagem automotiva.",
            stats: [
              { number: "Criciúma / SC", label: "Galpão Climatizado" },
              { number: "3.20m", label: "Largura Máx. Impressão" }
            ]
          }
        },
        {
          id: "faq-freitas",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes sobre Envelopamento de Frotas",
            items: [
              {
                question: "O adesivo danifica a pintura original do veículo quando retirado?",
                answer: "Não! Usamos adesivos automotivos de linha premium com cola reposicionável que, além de não estragar, protege a pintura original contra raios solares, pedriscos de rodovia e pequenos arranhões."
              },
              {
                question: "Quanto tempo o veículo precisa ficar parado para adesivagem?",
                answer: "Para veículos de pequeno/médio porte, a aplicação completa costuma ser concluída em apenas 1 dia útil mediante agendamento prévio."
              }
            ]
          }
        },
        {
          id: "contact-freitas",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Atendimento Rápido",
            title: "Pronto para Padronizar a Frota da sua Empresa?",
            formTitle: "Solicite seu Orçamento de Adesivagem",
            formSubtitle: "Informe os modelos dos veículos e a quantidade para receber uma proposta personalizada."
          }
        },
        {
          id: "footer-freitas",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Freitas Comunicação Visual - Especialistas em frotas comerciais, baús e impressão digital de alta performance."
          }
        }
      ]
    }
  ]
};

export default client;
