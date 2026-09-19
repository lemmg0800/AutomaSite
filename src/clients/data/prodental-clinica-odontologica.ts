import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "prodental-clinica-odontologica",
  status: "ativo",
  createdAt: "2026-09-18T22:50:00.000Z",
  updatedAt: "2026-09-18T22:50:00.000Z",

  business: {
    name: "Pró-Dental Clínica Odontológica",
    legalName: "Pró-Dental Clínica Odontológica Especializada Ltda",
    niche: "Microscopia Operatória & Cirurgias Odontológicas",
    city: "Curitiba",
    state: "PR",
    address: "R. Mariano Torres, 729 - Centro, Curitiba - PR",
    phone: "(41) 3233-1020",
    whatsapp: "(41) 99877-6655",
    googleRating: 4.8,
    instagram: "@prodentalcuritiba"
  },

  theme: {
    primaryColor: "#0891b2",
    secondaryColor: "#164e63",
    accentColor: "#06b6d4",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
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
        title: "Pró-Dental Clínica Odontológica | Microscopia e Implantes no Centro de Curitiba",
        description: "Clínica odontológica de alta precisão no centro de Curitiba: tratamento de canal em sessão única sob microscópio Zeiss, cirurgias a laser e prevenção avançada."
      },
      sections: [
        {
          id: "header-prodental",
          type: "header",
          variant: "Header02",
          content: {
            announcement: "Endodontia Microscópica em Sessão Única e Sem Dor",
            navLinks: [
              { label: "Sobre Nós", href: "#escritorio" },
              { label: "Tratamentos", href: "#servicos" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Dúvidas", href: "#faq" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar por WhatsApp"
          }
        },
        {
          id: "hero-prodental",
          type: "hero",
          variant: "Hero01",
          content: {
            badge: "Diagnóstico e Precisão Microscópica Zeiss",
            headline: "Tratamentos Odontológicos de Alta Precisão sem Dor e em Menos Sessões",
            subheadline: "Utilizamos microscópios operatórios com magnificação de 20x e tecnologia a laser no centro de Curitiba para salvar dentes condenados e garantir resultados definitivos.",
            primaryCtaLabel: "Falar com Dentista no WhatsApp",
            secondaryCtaLabel: "Conhecer a Clínica",
            secondaryCtaHref: "#escritorio"
          }
        },
        {
          id: "about-prodental",
          type: "about",
          variant: "About01",
          content: {
            badge: "Tecnologia a Favor da Saúde Bucal",
            title: "Preservação Máxima da Estrutura Dental Sadia",
            text1: "A Pró-Dental nasceu com a proposta de unir precisão tecnológica e acolhimento humano no centro de Curitiba. Nosso foco é resolver casos complexos com rapidez e sem sofrimento para o paciente.",
            text2: "Com o auxílio da microscopia cirúrgica, enxergamos detalhes anatômicos invisíveis a olho nu, permitindo tratamentos de canal em sessão única e cirurgias periodontais minimamente invasivas.",
            highlights: [
              { value: "20x", label: "Magnificação Óptica Zeiss" },
              { value: "1 Sessão", label: "Protocolo de Canal Ágil" },
              { value: "100%", label: "Anestesia Computadorizada" }
            ],
            whyChoose: [
              "Resolução de canais complexos e retratamentos em sessão única",
              "Laserterapia pós-cirúrgica para acelerar cicatrização e eliminar dores",
              "Localização privilegiada na Rua Mariano Torres com estacionamento fácil"
            ]
          }
        },
        {
          id: "services-prodental",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Especialidades Clínicas",
            headline: "Procedimentos Realizados sob Microscopia e Laser",
            subheadline: "Tecnologia avançada aplicada diretamente no diagnóstico e na execução cirúrgica de cada tratamento.",
            services: [
              {
                title: "Canal em Sessão Única com Microscópio",
                description: "Eliminação da dor e desinfecção profunda dos canais radiculares em apenas um atendimento, sem necessidade de curativos demorados."
              },
              {
                title: "Cirurgias Periodontais e Regenerativas a Laser",
                description: "Remoção de bactérias periodontais com bioestimulação tecidual rápida, reduzindo sangramentos e inchaço pós-operatório."
              },
              {
                title: "Implantes Unitários e Coroas em Zircônia",
                description: "Substituição precisa de dentes perdidos com materiais livres de metal e adaptação gengival perfeitamente natural."
              },
              {
                title: "Check-up Digital com Câmera Intraoral",
                description: "Inspeção minuciosa com imagens ampliadas na tela para você visualizar a saúde dos seus dentes antes de qualquer tratamento."
              }
            ]
          }
        },
        {
          id: "benefits-prodental",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que os pacientes escolhem a Pró-Dental?",
            subtitle: "Diferenciais tecnológicos que tornam sua consulta calma e resolutiva.",
            benefits: [
              {
                title: "Zero Ansiedade e Zero Dor",
                description: "Sistema de anestesia computadorizada que injeta o anestésico gota a gota na velocidade da absorção do tecido.",
                icon: "shield"
              },
              {
                title: "Microscopia Óptica Cirúrgica",
                description: "Aumento de até 20 vezes do campo de visão para limpeza milimétrica de canais e microfissuras.",
                icon: "award"
              },
              {
                title: "Horários Estendidos e Centrais",
                description: "Atendimento planejado para executivos e profissionais que precisam de flexibilidade na rotina central de Curitiba.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "faq-prodental",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes sobre Canal e Microscopia",
            subtitle: "Entenda como a tecnologia elimina mitos antigos da odontologia",
            items: [
              {
                question: "Tratamento de canal ainda dói?",
                answer: "Não! Com a anestesia computadorizada guiada e o uso de instrumentos rotatórios flexíveis de níquel-titânio, o procedimento é completamente indolor durante e após a sessão."
              },
              {
                question: "Por que fazer canal em sessão única?",
                answer: "A microscopia operatória permite localizar todos os canais extras e desinfectá-los totalmente na mesma consulta, evitando o risco de recontaminação entre sessões com curativos temporários."
              },
              {
                question: "A clínica atende urgências no centro de Curitiba?",
                answer: "Sim! Dispomos de encaixes prioritários para casos de dor de dente aguda, fraturas dentárias ou traumas para alívio imediato no mesmo dia."
              }
            ]
          }
        },
        {
          id: "contact-prodental",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Localização Central em Curitiba",
            headline: "Agende sua Avaliação com Nossa Equipe Especializada",
            subheadline: "Estamos prontos para esclarecer seu diagnóstico e planejar o tratamento mais conservador e eficaz.",
            address: "R. Mariano Torres, 729 - Centro, Curitiba - PR",
            phone: "(41) 3233-1020",
            whatsapp: "(41) 99877-6655",
            ctaWhatsappText: "Falar com Atendimento no WhatsApp"
          }
        },
        {
          id: "footer-prodental",
          type: "footer",
          variant: "Footer02",
          content: {
            disclaimer: "Pró-Dental Clínica Odontológica Especializada Ltda | CRO-PR Clínica 5890 | RT: Dra. Camila S. Ferreira - CRO-PR 19420"
          }
        }
      ]
    }
  ]
};

export default client;
