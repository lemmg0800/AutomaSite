import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "duka-paineis-e-imagens",
  status: "ativo",
  createdAt: "2026-09-18T19:03:02.675Z",
  updatedAt: "2026-09-18T20:00:00.000Z",

  business: {
    name: "Duka Painéis e Imagens",
    legalName: "Duka Painéis e Imagens Ltda",
    niche: "Painéis Industriais, Estruturas de Grande Porte & Sinalização Fabril",
    city: "Içara",
    state: "SC",
    address: "Rua Luiza Barp, 230 - Distrito Industrial 1ª Linha, Içara / Criciúma - SC",
    phone: "(48) 3432-3740",
    whatsapp: "(48) 98482-2827",
    googleRating: 4.9,
    instagram: "@dukapaineis"
  },

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#10b981",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Syne",
    bodyFont: "Inter",
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
        title: "Duka Painéis e Imagens | Painéis Industriais e Estruturas Metálicas em Içara e Criciúma",
        description: "Fabricação e montagem de painéis industriais, pórticos de entrada, totens rodoviários e sinalização de grande porte para indústrias e galpões comerciais no Sul de SC."
      },
      sections: [
        {
          id: "header-duka",
          type: "header",
          variant: "Header02",
          content: {
            announcement: "Fábrica Própria no Distrito Industrial de Içara / Criciúma",
            navLinks: [
              { label: "Painéis Industriais", href: "#servicos" },
              { label: "Pórticos & Totens", href: "#servicos" },
              { label: "Obras Industriais", href: "#obras" },
              { label: "Normas Técnicas", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Orçamento Técnico"
          }
        },
        {
          id: "hero-duka",
          type: "hero",
          variant: "Hero04",
          content: {
            badge: "Engenharia e Comunicação Visual para Grandes Indústrias",
            headline: "Painéis e Estruturas de Grande Porte com Rigor Estrutural e Alta Durabilidade",
            subheadline: "Desenvolvemos pórticos, painéis fabris, totens rodoviários e letras caixa em acrílico e inox projetados para resistir às intempéries do Sul de Santa Catarina com emissão de ART.",
            primaryCtaLabel: "Falar com Engenheiro Técnico",
            primaryCtaHref: "https://wa.me/5548984822827",
            secondaryCtaLabel: "Conhecer Nossas Obras",
            secondaryCtaHref: "#obras",
            stats: [
              { value: "15+ Anos", label: "Experiência Fabril" },
              { value: "100%", label: "Projetos com ART" },
              { value: "NR-35", label: "Equipe Certificada" }
            ]
          }
        },
        {
          id: "benefits-duka",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que as maiores indústrias da região confiam na Duka Painéis",
            subtitle: "Segurança de trabalho em altura, dimensionamento estrutural e materiais anticorrosivos de padrão pesado.",
            benefits: [
              {
                title: "Aço Galvanizado a Fogo & Alumínio",
                description: "Tratamento anticorrosivo de alta resistência contra a maresia e umidade do litoral catarinense.",
                icon: "shield"
              },
              {
                title: "Cálculo de Carga de Vento com ART",
                description: "Projetos de grande porte dimensionados por engenheiro habilitado para suportar ventos severos.",
                icon: "award"
              },
              {
                title: "Equipe Técnica com NR-35 e NR-10",
                description: "Instalação segura em galpões, rodovias e coberturas industriais com equipamento próprio.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "services-duka",
          type: "services",
          variant: "Services01",
          content: {
            badge: "Soluções Pesadas",
            title: "Engenharia de Painéis e Identificação Industrial",
            subtitle: "Atendimento corporativo e industrial para fábricas, centros logísticos e redes comerciais.",
            services: [
              {
                title: "Painéis e Fachadas Industriais em Galpões",
                description: "Revestimentos de grande porte para frontais e laterais de armazéns e indústrias com letras caixa gigantes.",
                cta: "Solicitar Medição Técnica"
              },
              {
                title: "Pórticos de Entrada e Totens Rodoviários",
                description: "Estruturas autoportantes de impacto visual imediato para acessos fabris nas rodovias SC-445 e BR-101.",
                cta: "Consultar Engenharia"
              },
              {
                title: "Letras Caixa em Acrílico Maciço e Aço Inox",
                description: "Letreiros usinados a laser com iluminação embutida de alta performance e acabamento nobre.",
                cta: "Ver Opções de Acabamento"
              },
              {
                title: "Sinalização Interna de Segurança e Rota de Fuga",
                description: "Adequação completa às normas NR-26 e exigências do Corpo de Bombeiros com placas fotoluminescentes.",
                cta: "Adequar Minha Empresa"
              }
            ]
          }
        },
        {
          id: "projects-duka",
          type: "projects",
          variant: "Projects01",
          content: {
            title: "Obras Industriais Entregues no Sul Catarinense",
            subtitle: "Exemplos de sinalização pesada, pórticos e painéis em operação.",
            projects: [
              {
                title: "Pórtico Metálico de Entrada em Parque Cerâmico",
                category: "Pórtico Industrial",
                description: "Vão livre de 14 metros em estrutura treliçada galvanizada a fogo com iluminação em projetores LED."
              },
              {
                title: "Painel Frontal de Galpão Logístico 32x6m",
                category: "Painel Galpão",
                description: "Revestimento em chapas compostas com letras caixa em alto relevo de 1.80m de altura."
              },
              {
                title: "Totem Iluminado Rodoviário na Rodovia Paulino Búrigo",
                category: "Totem OOH",
                description: "Estrutura vertical de 9 metros com painel em acrílico termoformado e LEDs de alta eficiência."
              }
            ]
          }
        },
        {
          id: "about-duka",
          type: "about",
          variant: "About01",
          content: {
            badge: "Parque Fabril Próprio",
            title: "Solidez Técnica e Compromisso com a Indústria",
            description: "Localizada estrategicamente no Distrito Industrial 1ª Linha, entre Içara e Criciúma, a Duka Painéis conta com serralheria pesada própria, corte térmico e equipe de içamento para atender demandas industriais complexas.",
            stats: [
              { number: "Distrito Ind.", label: "Içara / Criciúma" },
              { number: "100%", label: "Conformidade NR" }
            ]
          }
        },
        {
          id: "faq-duka",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes sobre Painéis Industriais",
            items: [
              {
                question: "Vocês emitem Laudo Técnico e ART para as estruturas?",
                answer: "Sim! Todas as nossas obras de médio e grande porte contam com projeto executivo assinado por engenheiro mecânico/civil com emissão da respectiva ART junto ao CREA-SC."
              },
              {
                question: "Qual o prazo médio de fabricação de um pórtico ou painel industrial?",
                answer: "Dependendo da escala estrutural e dos ensaios de fundação, o prazo varia entre 15 e 30 dias úteis desde a aprovação do projeto executivo."
              }
            ]
          }
        },
        {
          id: "contact-duka",
          type: "contact",
          variant: "Contact01",
          content: {
            badge: "Departamento de Engenharia e Orçamentos",
            title: "Solicite um Orçamento Técnico para sua Indústria",
            formTitle: "Agende uma Visita Técnica na sua Planta",
            formSubtitle: "Nossos consultores técnicos atendem em toda a região carbonífera e Sul de Santa Catarina."
          }
        },
        {
          id: "footer-duka",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Projetos em conformidade com normas técnicas da ABNT e NBR de cargas e ações em estruturas.",
            oabInfo: "CREA-SC Registro Técnico Habilitado"
          }
        }
      ]
    }
  ]
};

export default client;
