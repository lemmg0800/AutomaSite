import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "poersch-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.616Z",
  updatedAt: new Date().toISOString(),

  business: {
    name: "Poersch & Poersch Advogados Associados",
    legalName: "Poersch & Poersch Advogados Associados S/S",
    niche: "Consultoria Empresarial, Direito Administrativo & Contencioso Cível",
    city: "Rio Branco",
    state: "AC",
    address: "R. Benjamin Constant, 977 - Centro, Rio Branco - AC",
    phone: "(68) 3224-1411",
    whatsapp: "(68) 99984-1411",
    googleRating: 4.9,
    instagram: "@poerschadvogados"
  },

  theme: {
    primaryColor: "#0b1329",
    secondaryColor: "#172554",
    accentColor: "#d4af37", // Ouro clássico nobre
    backgroundColor: "#030712",
    textColor: "#f9fafb",
    headingFont: "Playfair Display",
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
        title: "Poersch & Poersch Advogados Associados | Tradição Jurídica em Rio Branco - AC",
        description: "Sociedade de advogados fundada em 1987 no Acre. Atuação contenciosa e consultiva de alto padrão técnico em direito empresarial e administrativo."
      },
      sections: [
        {
          id: "header-poersch-advogados",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Áreas de Atuação", href: "#servicos" },
              { label: "Tradição", href: "#credenciais" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Consulta Jurídica"
          }
        },
        {
          id: "hero-poersch-advogados",
          type: "hero",
          variant: "Hero01",
          content: {
            tagline: "★ 37 ANOS DE TRADIÇÃO NO ACRE",
            headline: "Tradição Jurídica Sênior e Estratégia de Alto Impacto em Rio Branco",
            subheadline: "Quase quatro décadas de liderança contenciosa e assessoria consultiva para empresas, famílias e instituições com rigor ético incontestável.",
            ctaPrimaryText: "Falar com Advogado Sócio no WhatsApp",
            ctaSecondaryText: "Conhecer Áreas de Atuação",
            imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Edifício sede e advocacia corporativa de alta autoridade",
            stats: [
              { label: "Tradição", value: "Desde 1987" },
              { label: "Avaliação Google", value: "4.9 ★" },
              { label: "Jurisdição", value: "Acre & Tribunais Superiores" }
            ]
          }
        },
        {
          id: "credentials-poersch-advogados",
          type: "credentials",
          variant: "Credentials01",
          content: {
            title: "Autoridade Institucional Comprovada",
            badges: [
              { label: "Registro OAB/AC", detail: "Desde 1987" },
              { label: "Tribunais Superiores", detail: "Atuação no STJ e STF" },
              { label: "Sócios Titulares", detail: "Acompanhamento direto" }
            ]
          }
        },
        {
          id: "services-poersch-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades da Banca",
            headline: "Atuação Consultiva e Contenciosa Estratégica",
            subheadline: "Soluções jurídicas estruturadas para blindar operações empresariais e salvaguardar direitos civis complexos.",
            services: [
              {
                id: "empresarial",
                title: "Direito Empresarial & Societário",
                description: "Estruturação de contratos, governança corporativa e fusões para segurança patrimonial.",
                icon: "Building2"
              },
              {
                id: "administrativo",
                title: "Direito Administrativo & Regulatório",
                description: "Defesa perante tribunais de contas, licitações e contencioso com o poder público.",
                icon: "Scale"
              },
              {
                id: "tributario",
                title: "Consultoria Tributária & Fiscal",
                description: "Defesas fiscais administrativas e judiciais para otimização da carga tributária.",
                icon: "ShieldCheck"
              },
              {
                id: "civel",
                title: "Contencioso Cível Estratégico",
                description: "Resolução de disputas complexas, responsabilidade civil e litígios contratuais.",
                icon: "Award"
              }
            ]
          }
        },
        {
          id: "benefits-poersch-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais da Poersch & Poersch",
            subtitle: "Segurança Jurídica, Ética e Eficiência em Rio Branco - AC",
            benefits: [
              {
                title: "Pioneirismo desde 1987",
                description: "Quase quatro décadas de presença ininterrupta liderando casos emblemáticos no TJAC e tribunais superiores."
              },
              {
                title: "Corpo Jurídico Multidisciplinar",
                description: "Equipe sênior especializada em direito público e privado para atender demandas de alta complexidade."
              },
              {
                title: "Atendimento Personalizado",
                description: "Acompanhamento minucioso e direto pelos sócios titulares para cada processo e cliente."
              }
            ]
          }
        },
        {
          id: "contact-poersch-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agendamento e Contato",
            headline: "Fale com um Advogado Especialista em Rio Branco",
            subheadline: "Nosso corpo jurídico está à disposição para analisar sua demanda com total confidencialidade e rigor técnico.",
            address: "R. Benjamin Constant, 977 - Centro, Rio Branco - AC",
            phone: "(68) 3224-1411",
            whatsapp: "(68) 99984-1411",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        },
        {
          id: "footer-poersch-advogados",
          type: "footer",
          variant: "Footer01",
          content: {}
        }
      ]
    }
  ]
};

export default client;
