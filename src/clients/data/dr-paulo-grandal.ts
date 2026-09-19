import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "dr-paulo-grandal",
  status: "ativo",
  createdAt: "2026-09-19T16:52:30.062Z",
  updatedAt: "2026-09-19T16:52:30.062Z",

  business: {
    name: "Dr. Paulo Grandal Odontologia",
    legalName: "Paulo Grandal Odontologia Especializada Eireli",
    niche: "Odontologia Especializada & Reabilitação",
    city: "Manaus",
    state: "AM",
    address: "R. Ramos Ferreira, 1450 - Praça 14 de Janeiro, Manaus - AM",
    phone: "(92) 3234-9000",
    whatsapp: "(92) 99188-4321",
    googleRating: 4.9,
    instagram: "@drpaulograndal"
  },

  theme: {
    primaryColor: "#0f172a",
    secondaryColor: "#1e293b",
    accentColor: "#38bdf8",
    backgroundColor: "#020617",
    textColor: "#f8fafc",
    headingFont: "Playfair Display",
    bodyFont: "Plus Jakarta Sans",
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
        title: "Dr. Paulo Grandal Odontologia | Dentista Especialista em Manaus - AM",
        description: "Mais de 14 anos de experiência clínica dedicada à implantodontia, próteses sobre implantes e pronto atendimento. Carga imediata com conforto, tecnologia alemã e atendimento humanizado na Praça 14 e Coroado."
      },
      sections: [
  {
    "id": "header-dr-paulo-grandal",
    "type": "header",
    "variant": "Header01",
    "content": {
      "navLinks": [
        {
          "label": "Implantes",
          "href": "#implantes"
        },
        {
          "label": "Urgência",
          "href": "#urgencia"
        },
        {
          "label": "Como Chegar",
          "href": "#contato"
        }
      ],
      "ctaLabel": "Chamar no WhatsApp"
    }
  },
  {
    "id": "hero-dr-paulo-grandal",
    "type": "hero",
    "variant": "Hero02",
    "content": {
      "tagline": "Especialista em Implantodontia e Urgência Odontológica",
      "headline": "Recupere a Firmeza da Sua Mastigação e a Confiança ao Sorrir em Manaus",
      "subheadline": "Mais de 14 anos de experiência clínica dedicada à implantodontia, próteses sobre implantes e pronto atendimento. Carga imediata com conforto, tecnologia alemã e atendimento humanizado na Praça 14 e Coroado.",
      "imageUrl": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
      "primaryCta": {
        "text": "Falar Diretamente no WhatsApp",
        "href": "https://wa.me/5592991884321?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Dr.%20Paulo%20Grandal%20Odontologia."
      },
      "secondaryCta": {
        "text": "Conhecer os Tratamentos",
        "href": "#servicos"
      },
      "stats": [
        {
          "value": "14+ Anos",
          "label": "Dedicação Clínica"
        },
        {
          "value": "2 Unidades",
          "label": "Praça 14 & Coroado"
        },
        {
          "value": "4.9 ★",
          "label": "Excelência Avaliada"
        }
      ]
    }
  },
  {
    "id": "services-dr-paulo-grandal",
    "type": "services",
    "variant": "Services02",
    "content": {
      "tagline": "Especialidades Odontológicas",
      "headline": "Soluções Rápidas Para a Saúde e Firmeza do Seu Sorriso",
      "services": [
        {
          "id": "implantes-unitarios",
          "title": "Implantes com Carga Imediata",
          "description": "Colocação rápida de dente fixo no mesmo dia para devolver seu sorriso com discrição.",
          "icon": "ShieldCheck"
        },
        {
          "id": "protese-protocolo",
          "title": "Prótese Protocolo Cerâmico",
          "description": "Substituição da dentadura móvel por dentes fixos parafusados de alta estabilidade.",
          "icon": "Sparkles"
        },
        {
          "id": "urgencia-24h",
          "title": "Atendimento de Urgência & Dor",
          "description": "Pronto socorro odontológico com triagem rápida para alívio imediato da dor de dente.",
          "icon": "HeartHandshake"
        },
        {
          "id": "clareamento",
          "title": "Clareamento Dental em Consultório",
          "description": "Dentes visivelmente mais brancos com segurança para o esmalte e gengiva.",
          "icon": "Star"
        }
      ]
    }
  },
  {
    "id": "process-dr-paulo-grandal",
    "type": "process",
    "variant": "Process01",
    "content": {
      "tagline": "Passo a Passo Simples",
      "headline": "Como Funciona o Seu Atendimento na Clínica",
      "steps": [
        {
          "step": "01",
          "title": "Avaliação Inicial Rápida",
          "description": "Diagnóstico preciso do seu caso com radiografias no próprio local."
        },
        {
          "step": "02",
          "title": "Procedimento Confortável",
          "description": "Técnica de implantes e próteses com anestesia local de alívio rápido."
        },
        {
          "step": "03",
          "title": "Sorriso Restaurado",
          "description": "Acompanhamento pós-operatório dedicado até sua total satisfação."
        }
      ]
    }
  },
  {
    "id": "benefits-dr-paulo-grandal",
    "type": "benefits",
    "variant": "Benefits01",
    "content": {
      "tagline": "Por Que Nos Escolher",
      "headline": "Tratamento Rápido, Humanizado e Sem Complicações",
      "items": [
        {
          "title": "Atendimento Rápido e Direto",
          "description": "Comunicação ágil pelo WhatsApp para encaixes de urgência e consultas sem burocracia."
        },
        {
          "title": "Implantes de Primeira Linha",
          "description": "Componentes e parafusos de marcas renomadas mundialmente com garantia de biocompatibilidade."
        },
        {
          "title": "Localização Central na Praça 14",
          "description": "Fácil acesso e estrutura privativa pensada no seu conforto."
        }
      ]
    }
  },
  {
    "id": "stats-dr-paulo-grandal",
    "type": "stats",
    "variant": "Stats01",
    "content": {
      "stats": [
        {
          "number": "14+",
          "label": "Anos de Experiência"
        },
        {
          "number": "2",
          "label": "Consultórios (Praça 14 & Coroado)"
        },
        {
          "number": "100%",
          "label": "Foco no Conforto"
        },
        {
          "number": "4.9 ★",
          "label": "Avaliação Google"
        }
      ]
    }
  },
  {
    "id": "cta-dr-paulo-grandal",
    "type": "cta",
    "variant": "CTA01",
    "content": {
      "headline": "Precisa de Atendimento Rápido em Manaus?",
      "subheadline": "Clique agora para falar diretamente no WhatsApp do consultório.",
      "ctaText": "Falar com Dr. Paulo Grandal",
      "ctaLink": "https://wa.me/5592991884321?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Dr.%20Paulo%20Grandal%20Odontologia."
    }
  },
  {
    "id": "footer-dr-paulo-grandal",
    "type": "footer",
    "variant": "Footer01",
    "content": {
      "copyright": "© 2026 Dr. Paulo Grandal Odontologia. Praça 14 de Janeiro, Manaus.",
      "socialLinks": [
        {
          "platform": "WhatsApp",
          "url": "https://wa.me/5592991884321?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Dr.%20Paulo%20Grandal%20Odontologia."
        }
      ]
    }
  }
]
    }
  ]
};

export default client;
