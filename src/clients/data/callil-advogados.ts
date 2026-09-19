import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "callil-advogados",
  status: "ativo",
  createdAt: "2026-09-19T14:22:34.616Z",
  updatedAt: new Date().toISOString(),

  business: {
    name: "Callil Advogados",
    legalName: "Callil & Advogados Associados",
    niche: "Direito Agrário, Empresarial & Regularização Fundiária",
    city: "Rio Branco",
    state: "AC",
    address: "R. Rui Barbosa, 285 - Centro, Rio Branco - AC",
    phone: "(68) 3223-3050",
    whatsapp: "(68) 99981-3050",
    googleRating: 4.9,
    instagram: "@calliladvogados"
  },

  theme: {
    primaryColor: "#1c1917",
    secondaryColor: "#292524",
    accentColor: "#ea580c", // Âmbar terroso executivo / agro
    backgroundColor: "#0c0a09",
    textColor: "#fafaf9",
    headingFont: "Cormorant Garamond",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "none", // Ângulos retos marcantes de autoridade
    mode: "dark",
    enableCursor: false,
    backgroundEffect: "mesh",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "Callil Advogados | Direito Agrário, Fundiário e Empresarial no Acre",
        description: "Assessoria jurídica especializada no agronegócio, contratos agrários e regularização fundiária estratégica em Rio Branco e todo o Acre."
      },
      sections: [
        {
          id: "header-callil-advogados",
          type: "header",
          variant: "Header02",
          content: {
            navLinks: [
              { label: "Agronegócio", href: "#servicos" },
              { label: "Credenciais", href: "#credenciais" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Consulta Agrária"
          }
        },
        {
          id: "hero-callil-advogados",
          type: "hero",
          variant: "Hero04",
          content: {
            tagline: "ADVOCACIA AGRÁRIA & DIREITO EMPRESARIAL",
            headline: "Segurança Jurídica na Gestão da Terra, Contratos e Agronegócio",
            subheadline: "Consultoria preventiva e contenciosa especializada na regularização fundiária, contratos rurais e litígios comerciais de alto porte no Acre.",
            ctaPrimaryText: "Falar com Especialista Agrário",
            ctaSecondaryText: "Conhecer Atuação",
            imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
            imageAlt: "Paisagem rural produtiva com segurança jurídica fundiária",
            stats: [
              { label: "Atuação Agrária", value: "Em todo o Acre" },
              { label: "Contratos Blindados", value: "Rigor Técnico" },
              { label: "Reputação", value: "4.9 ★" }
            ]
          }
        },
        {
          id: "credentials-callil-advogados",
          type: "credentials",
          variant: "Credentials01",
          content: {
            title: "Experiência Comprovada no Setor Produtivo",
            badges: [
              { label: "Regularização Fundiária", detail: "ITERACRE e INCRA" },
              { label: "Defesa Ambiental", detail: "IMAC e IBAMA" },
              { label: "Contratos do Agro", detail: "CPR e Arrendamentos" }
            ]
          }
        },
        {
          id: "services-callil-advogados",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Áreas de Atuação",
            headline: "Soluções Jurídicas para o Produtor e o Empresário",
            subheadline: "Blindagem de ativos fundiários e segurança para investimentos rurais e urbanos.",
            services: [
              {
                id: "agrario",
                title: "Direito Agrário & Fundiário",
                description: "Usucapião rural, demarcação de terras, reintegração de posse e desapropriações.",
                icon: "Landmark"
              },
              {
                id: "ambiental",
                title: "Direito Ambiental & Licenciamento",
                description: "Defesas contra autos de infração, desembargo de áreas produtivas e compensação de reserva legal.",
                icon: "Trees"
              },
              {
                id: "empresarial_rural",
                title: "Contratos do Agronegócio",
                description: "Cédulas de Produto Rural (CPR), financiamentos bancários e renegociação de dívidas agrícolas.",
                icon: "FileSignature"
              },
              {
                id: "contencioso",
                title: "Contencioso Comercial Regional",
                description: "Resolução de disputas entre sócios, títulos de crédito e execuções rurais de alta complexidade.",
                icon: "Gavel"
              }
            ]
          }
        },
        {
          id: "benefits-callil-advogados",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por Que Confiar na Callil Advogados?",
            subtitle: "Conhecimento de campo aliado ao rigor doutrinário",
            benefits: [
              {
                title: "Presença nos Polos Produtivos",
                description: "Equipe com mobilidade para vistorias técnicas e atendimento in loco nas propriedades do Acre."
              },
              {
                title: "Histórico de Resultados",
                description: "Centenas de hectares regularizados com matrícula perfeita e segurança jurídica imutável."
              },
              {
                title: "Relações Institucionais Sólidas",
                description: "Diálogo técnico e respeitado perante os órgãos fundiários e o judiciário estadual."
              }
            ]
          }
        },
        {
          id: "contact-callil-advogados",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Fale Conosco",
            headline: "Proteja Seu Patrimônio Rural com Especialistas",
            subheadline: "Agende uma reunião preliminar com nosso corpo jurídico.",
            address: "R. Rui Barbosa, 285 - Centro, Rio Branco - AC",
            phone: "(68) 3223-3050",
            whatsapp: "(68) 99981-3050",
            ctaWhatsappText: "Iniciar Conversa no WhatsApp"
          }
        },
        {
          id: "footer-callil-advogados",
          type: "footer",
          variant: "Footer02",
          content: {}
        }
      ]
    }
  ]
};

export default client;
