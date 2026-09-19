import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "instituto-kopp-odontologia",
  status: "ativo",
  createdAt: "2026-09-18T22:50:00.000Z",
  updatedAt: "2026-09-18T22:50:00.000Z",

  business: {
    name: "Instituto Kopp Odontologia",
    legalName: "Instituto Kopp Odontologia e Cirurgias Avançadas Ltda",
    niche: "Implantodontia Avançada & Carga Imediata",
    city: "Curitiba",
    state: "PR",
    address: "Av. Senador Souza Naves, 991 - Cristo Rei, Curitiba - PR",
    phone: "(41) 3363-7272",
    whatsapp: "(41) 99988-1122",
    googleRating: 4.9,
    instagram: "@institutokopp"
  },

  theme: {
    primaryColor: "#059669",
    secondaryColor: "#064e3b",
    accentColor: "#10b981",
    backgroundColor: "#022c22",
    textColor: "#f8fafc",
    headingFont: "Syne",
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
        title: "Instituto Kopp Odontologia | Implantes Dentários e Carga Imediata em Curitiba",
        description: "Centro de excelência e pioneirismo em implantodontia, cirurgia guiada por computador sem cortes e dentes fixos com a metodologia Kopp em Curitiba."
      },
      sections: [
        {
          id: "header-kopp",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Implantes & Carga", href: "#servicos" },
              { label: "Como Funciona", href: "#processo" },
              { label: "Centro Cirúrgico", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar com Cirurgião"
          }
        },
        {
          id: "hero-kopp",
          type: "hero",
          variant: "Hero04",
          content: {
            tagline: "Pioneirismo em Implantodontia Avançada",
            headline: "Seus Dentes Fixos Novamente com Conforto, Rapidez e Segurança Cirúrgica",
            subheadline: "Centro cirúrgico próprio com padrões hospitalares em Curitiba. Instalação de implantes com cirurgia guiada sem cortes traumáticos e carga rápida para restabelecer sua mastigação em poucos dias.",
            primaryCta: {
              text: "Falar com Nossa Equipe Cirúrgica",
              href: "https://wa.me/5541999881122?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20implantes%20no%20Instituto%20Kopp."
            },
            secondaryCta: {
              text: "Conhecer a Metodologia",
              href: "#processo"
            },
            image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
            stats: [
              { value: "+35k", label: "Implantes Instalados" },
              { value: "72h", label: "Protocolo Carga Rápida" },
              { value: "4.9 ★", label: "Avaliação Google" }
            ]
          }
        },
        {
          id: "stats-kopp",
          type: "stats",
          variant: "Stats01",
          content: {
            stats: [
              { number: "+35.000", label: "Implantes Realizados com Sucesso" },
              { number: "100%", label: "Planejamento Tomográfico 3D" },
              { number: "30+", label: "Anos Formando Especialistas" },
              { number: "0", label: "Cortes Desnecessários com Guia Digital" }
            ]
          }
        },
        {
          id: "services-kopp",
          type: "services",
          variant: "Services03",
          content: {
            title: "Soluções Avançadas em Reabilitação por Implantes",
            subtitle: "Tecnologia cirúrgica de última geração para casos simples e de alta complexidade.",
            services: [
              {
                title: "Implantes com Carga Imediata",
                description: "Possibilidade de fixar a prótese provisória estética no mesmo dia ou em até 72 horas após a inserção do pino de titânio."
              },
              {
                title: "Implantes Zigomáticos sem Enxerto Ósseo",
                description: "Técnica revolucionária para quem perdeu o osso da maxila, ancorando os implantes na estrutura zigomática sem anos de espera por enxertos."
              },
              {
                title: "Cirurgia Guiada por Computador",
                description: "O implante é instalado através de uma guia impressa em 3D, sem necessidade de abertura de retalho nem pontos de sutura."
              },
              {
                title: "Tratamento sob Sedação Assistida",
                description: "Médico anestesiologista presente durante toda a cirurgia para garantir que você durma confortavelmente sem sentir nenhuma dor ou tensão."
              }
            ]
          }
        },
        {
          id: "process-kopp",
          type: "process",
          variant: "Process01",
          content: {
            title: "O Passo a Passo do Seu Tratamento no Instituto Kopp",
            steps: [
              {
                step: "1",
                title: "Tomografia 3D e Diagnóstico",
                description: "Mapeamos a densidade óssea e o posicionamento exato dos nervos através de tomografia computadorizada na própria clínica."
              },
              {
                step: "2",
                title: "Cirurgia Guiada e Rápida",
                description: "Instalação dos pinos com extrema precisão, sedação consciente e sem cortes desnecessários, garantindo pós-operatório tranquilo."
              },
              {
                step: "3",
                title: "Instalação dos Dentes Fixos",
                description: "Fixação da prótese estética definitiva com acabamento perfeito em cerâmica para você voltar a mastigar e sorrir livremente."
              }
            ]
          }
        },
        {
          id: "benefits-kopp",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Diferenciais do Centro Cirúrgico Instituto Kopp",
            subtitle: "Estrutura dedicada exclusivamente a procedimentos de implantodontia e cirurgias orais.",
            benefits: [
              {
                title: "Ambiente Cirúrgico Hospitalar",
                description: "Salas de cirurgia com fluxo laminar e esterilização de grau cirúrgico para índice zero de infecções cruzadas.",
                icon: "shield"
              },
              {
                title: "Metodologia Kopp Consagrada",
                description: "Desenvolvimento de técnicas pioneiras reconhecidas em congressos de odontologia no Brasil e no exterior.",
                icon: "award"
              },
              {
                title: "Acompanhamento Pós-Operatório Ativo",
                description: "Suporte 24 horas da equipe de enfermagem e odontologia após o procedimento para sua total tranquilidade.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "contact-kopp",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Unidade Curitiba - Cristo Rei",
            headline: "Agende sua Avaliação com Nossa Equipe de Implantodontistas",
            subheadline: "Descubra qual a melhor técnica para o seu caso e recupere a segurança de mastigar com dentes fixos.",
            address: "Av. Senador Souza Naves, 991 - Cristo Rei, Curitiba - PR",
            phone: "(41) 3363-7272",
            whatsapp: "(41) 99988-1122",
            ctaWhatsappText: "Falar com a Equipe no WhatsApp"
          }
        },
        {
          id: "footer-kopp",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Instituto Kopp Odontologia Ltda | CRO-PR Clínica 3241 | Direção Técnica: Dr. Gino Kopp - CRO-PR 8520"
          }
        }
      ]
    }
  ]
};

export default client;
