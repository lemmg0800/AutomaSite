import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "oralmed-odontologia",
  status: "ativo",
  createdAt: "2026-09-18T22:50:00.000Z",
  updatedAt: "2026-09-18T22:50:00.000Z",

  business: {
    name: "Oralmed Centro Odontológico",
    legalName: "Oralmed Centro Odontológico Londrina Ltda",
    niche: "Centro Odontológico Multidisciplinar & Implantes",
    city: "Londrina",
    state: "PR",
    address: "R. Pará, 1122 - Centro, Londrina - PR",
    phone: "(43) 3324-4000",
    whatsapp: "(43) 99144-5000",
    googleRating: 4.9,
    instagram: "@oralmedlondrina"
  },

  theme: {
    primaryColor: "#0369a1",
    secondaryColor: "#0c4a6e",
    accentColor: "#38bdf8",
    backgroundColor: "#030712",
    textColor: "#f8fafc",
    headingFont: "Montserrat",
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
        title: "Oralmed Centro Odontológico | Dentista e Implantes em Londrina - PR",
        description: "Mais de 30 anos de tradição e excelência em odontologia integrada, implantes sem dor, ortodontia e estética dental no centro de Londrina."
      },
      sections: [
        {
          id: "header-oralmed",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [
              { label: "Especialidades", href: "#servicos" },
              { label: "Tradição", href: "#diferenciais" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Agendar Consulta"
          }
        },
        {
          id: "hero-oralmed",
          type: "hero",
          variant: "Hero04",
          content: {
            tagline: "30 Anos de Excelência em Londrina",
            headline: "Cuidado Completo e Tradição para o Sorriso de Toda a Sua Família",
            subheadline: "Reunimos todas as especialidades odontológicas em um centro moderno e acolhedor no coração de Londrina. Implantes seguros, alinhadores invisíveis e estética dental com tecnologia de ponta.",
            primaryCta: {
              text: "Agendar Avaliação no WhatsApp",
              href: "https://wa.me/5543991445000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Oralmed%20Londrina."
            },
            secondaryCta: {
              text: "Conhecer Nossos Tratamentos",
              href: "#servicos"
            },
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            stats: [
              { value: "30+", label: "Anos em Londrina" },
              { value: "+25k", label: "Pacientes Atendidos" },
              { value: "4.9 ★", label: "Google Avaliações" }
            ]
          }
        },
        {
          id: "services-oralmed",
          type: "services",
          variant: "Services01",
          content: {
            tagline: "Áreas de Atuação",
            headline: "Especialidades Odontológicas Integradas",
            subheadline: "Do tratamento preventivo às cirurgias mais complexas de reabilitação oral, nossa equipe multidisciplinar cuida de cada detalhe.",
            services: [
              {
                title: "Implantes Dentários de Alta Precisão",
                description: "Recupere o poder mastigatório e a segurança de sorrir com implantes de titânio biocompatíveis e coroas em cerâmica pura."
              },
              {
                title: "Alinhadores Invisíveis & Ortodontia",
                description: "Correção rápida e discreta da mordida com placas transparentes removíveis que se adaptam à sua rotina diária."
              },
              {
                title: "Lentes de Contato & Clareamento a Laser",
                description: "Harmonização da cor, alinhamento e proporção dos dentes com clareamento profissional e facetas laminadas."
              },
              {
                title: "Odontopediatria e Prevenção Familiar",
                description: "Ambiente lúdico e atendimento especializado para cuidar da saúde bucal de crianças e adolescentes sem traumas."
              }
            ]
          }
        },
        {
          id: "benefits-oralmed",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que escolher a Oralmed Centro Odontológico?",
            subtitle: "Infraestrutura completa com diagnóstico por imagem próprio no centro de Londrina.",
            benefits: [
              {
                title: "Corpo Clínico Integrado",
                description: "Especialistas em implantodontia, prótese, endodontia e ortodontia trabalhando juntos no mesmo caso clínico.",
                icon: "shield"
              },
              {
                title: "Diagnóstico por Imagem no Local",
                description: "Raio-X panorâmico digital para diagnóstico imediato sem necessidade de deslocamento a laboratórios externos.",
                icon: "award"
              },
              {
                title: "Localização Central com Estacionamento",
                description: "Fácil acesso na Rua Pará, com salas climatizadas e ambiente preparado para seu conforto absoluto.",
                icon: "clock"
              }
            ]
          }
        },
        {
          id: "testimonials-oralmed",
          type: "testimonials",
          variant: "Testimonials01",
          content: {
            title: "O que dizem os pacientes que confiam em nosso trabalho",
            items: [
              {
                quote: "Fiz meus implantes na Oralmed após anos de receio. O atendimento foi impecável, sem dor nenhuma e hoje voltei a sorrir com total confiança. Recomendo de olhos fechados!",
                author: "Carlos Eduardo Silva",
                role: "Empresário em Londrina"
              },
              {
                quote: "Minha família inteira trata na Oralmed há mais de 10 anos. A atenção dos dentistas e a pontualidade são os grandes diferenciais. Clínica padrão ouro.",
                author: "Dra. Renata Mendes",
                role: "Médica e Paciente"
              }
            ]
          }
        },
        {
          id: "contact-oralmed",
          type: "contact",
          variant: "Contact01",
          content: {
            tagline: "Agende sua Consulta",
            headline: "Dê o Primeiro Passo para Transformar seu Sorriso",
            subheadline: "Nossa equipe está disponível para responder dúvidas e agendar o melhor horário para sua avaliação em Londrina.",
            address: "R. Pará, 1122 - Centro, Londrina - PR",
            phone: "(43) 3324-4000",
            whatsapp: "(43) 99144-5000",
            ctaWhatsappText: "Falar no WhatsApp com Atendente"
          }
        },
        {
          id: "footer-oralmed",
          type: "footer",
          variant: "Footer01",
          content: {
            disclaimer: "Oralmed Centro Odontológico Londrina Ltda | CRO-PR Clínica 4582 | Responsável Técnico: Dr. Carlos H. Prado - CRO-PR 12844"
          }
        }
      ]
    }
  ]
};

export default client;
