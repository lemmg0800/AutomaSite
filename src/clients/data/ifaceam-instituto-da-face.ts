import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "ifaceam-instituto-da-face",
  status: "ativo",
  createdAt: "2026-09-19T16:52:30.053Z",
  updatedAt: "2026-09-19T16:52:30.053Z",

  business: {
    name: "Instituto da Face do Amazonas (IFACEAM)",
    legalName: "Instituto da Face do Amazonas Servicos Cirurgicos Ltda",
    niche: "Odontologia Especializada & Reabilitação",
    city: "Manaus",
    state: "AM",
    address: "Av. Darcy Vargas, 654 - Parque 10 de Novembro, Manaus - AM",
    phone: "(92) 3648-9900",
    whatsapp: "(92) 99155-8899",
    googleRating: 4.9,
    instagram: "@ifaceam"
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
        title: "Instituto da Face do Amazonas (IFACEAM) | Dentista Especialista em Manaus - AM",
        description: "Corpo clínico de mestres e doutores liderado pelos cirurgiões Dr. André Barreiros, Dr. Joel Motta Junior e Dr. André Mourão. Diagnóstico tomográfico 3D integrado, planejamento virtual avançado e segurança hospitalar completa no Parque 10."
      },
      sections: [
  {
    "id": "header-ifaceam-instituto-da-face",
    "type": "header",
    "variant": "Header01",
    "content": {
      "navLinks": [
        {
          "label": "Corpo Clínico",
          "href": "#sobre"
        },
        {
          "label": "Especialidades",
          "href": "#servicos"
        },
        {
          "label": "Diferenciais",
          "href": "#diferenciais"
        },
        {
          "label": "Contato",
          "href": "#contato"
        }
      ],
      "ctaLabel": "Falar com Cirurgião"
    }
  },
  {
    "id": "hero-ifaceam-instituto-da-face",
    "type": "hero",
    "variant": "Hero04",
    "content": {
      "tagline": "Centro Cirúrgico de Referência na Amazônia",
      "headline": "Cirurgia Bucomaxilofacial de Alta Complexidade, DTM e Implantes Guiados em Manaus",
      "subheadline": "Corpo clínico de mestres e doutores liderado pelos cirurgiões Dr. André Barreiros, Dr. Joel Motta Junior e Dr. André Mourão. Diagnóstico tomográfico 3D integrado, planejamento virtual avançado e segurança hospitalar completa no Parque 10.",
      "imageUrl": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      "primaryCta": {
        "text": "Solicitar Avaliação com a Diretoria Cirúrgica",
        "href": "https://wa.me/5592991558899?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Instituto%20da%20Face%20do%20Amazonas%20(IFACEAM)."
      },
      "secondaryCta": {
        "text": "Conhecer a Equipe de Cirurgiões",
        "href": "#servicos"
      },
      "stats": [
        {
          "value": "+12.000",
          "label": "Cirurgias Realizadas"
        },
        {
          "value": "3 Doutores",
          "label": "Corpo Clínico Titular"
        },
        {
          "value": "4.9 ★",
          "label": "Avaliação Google"
        }
      ]
    }
  },
  {
    "id": "stats-ifaceam-instituto-da-face",
    "type": "stats",
    "variant": "Stats01",
    "content": {
      "stats": [
        {
          "number": "+12.000",
          "label": "Cirurgias Realizadas"
        },
        {
          "number": "3 Doutores",
          "label": "Corpo Clínico Titular"
        },
        {
          "number": "100%",
          "label": "Segurança Hospitalar"
        },
        {
          "number": "4.9 ★",
          "label": "Avaliação no Google"
        }
      ]
    }
  },
  {
    "id": "services-ifaceam-instituto-da-face",
    "type": "services",
    "variant": "Services03",
    "content": {
      "tagline": "Áreas de Atuação Cirúrgica",
      "headline": "Tratamentos de Alta Complexidade Facial em Manaus",
      "services": [
        {
          "id": "bucomaxilo",
          "title": "Cirurgia Ortognática & Bucomaxilofacial",
          "description": "Correção de assimetrias faciais e deformidades esqueléticas com planejamento 3D virtual milimétrico.",
          "icon": "ShieldCheck"
        },
        {
          "id": "implantes-complexos",
          "title": "Implantes Zigomáticos & Carga Rápida",
          "description": "Reabilitação de pacientes com perda óssea severa dispensando enxertos invasivos.",
          "icon": "Sparkles"
        },
        {
          "id": "dtm-dor",
          "title": "Tratamento Avançado de ATM e DTM",
          "description": "Alívio definitivo de dores orofaciais, estalos articulares e bruxismo severo.",
          "icon": "HeartHandshake"
        },
        {
          "id": "trauma-reconstrucao",
          "title": "Reconstrução Facial e Óssea",
          "description": "Técnicas cirúrgicas de última geração para restabelecimento funcional e estético da face.",
          "icon": "Award"
        }
      ]
    }
  },
  {
    "id": "differentials-ifaceam-instituto-da-face",
    "type": "benefits",
    "variant": "Benefits01",
    "content": {
      "tagline": "Excelência e Rigor Científico",
      "headline": "Por Que o IFACEAM é Referência Médica na Amazônia",
      "items": [
        {
          "title": "Corpo Clínico Titulado",
          "description": "Cirurgiões bucomaxilofaciais membros titulares do Colégio Brasileiro de Cirurgia Buco-Maxilo-Facial."
        },
        {
          "title": "Tecnologia Cirúrgica 3D",
          "description": "Planejamento virtual computadorizado que reduz o tempo cirúrgico e garante previsibilidade máxima."
        },
        {
          "title": "Estrutura Cirúrgica Completa",
          "description": "Salas cirúrgicas modernas e parcerias com os principais hospitais de alta complexidade de Manaus."
        }
      ]
    }
  },
  {
    "id": "testimonials-ifaceam-instituto-da-face",
    "type": "testimonials",
    "variant": "Testimonials01",
    "content": {
      "tagline": "Depoimentos de Pacientes",
      "headline": "Histórias Reais de Vidas Transformadas",
      "testimonials": [
        {
          "quote": "A cirurgia ortognática mudou completamente minha qualidade de vida e respiração. O acolhimento dos doutores do IFACEAM foi nota mil!",
          "author": "Carlos E. Mendonça",
          "role": "Paciente de Cirurgia Bucomaxilofacial",
          "rating": 5
        }
      ]
    }
  },
  {
    "id": "faq-ifaceam-instituto-da-face",
    "type": "faq",
    "variant": "FAQ01",
    "content": {
      "tagline": "Dúvidas Frequentes",
      "headline": "Esclarecimentos sobre Procedimentos Cirúrgicos",
      "items": [
        {
          "question": "Como funciona a avaliação cirúrgica pré-operatória?",
          "answer": "Realizamos o mapeamento tomográfico 3D de alta resolução e o planejamento virtual computadorizado da face para máxima previsibilidade."
        }
      ]
    }
  },
  {
    "id": "cta-ifaceam-instituto-da-face",
    "type": "cta",
    "variant": "CTA01",
    "content": {
      "headline": "Agende Sua Consulta com a Diretoria Cirúrgica",
      "subheadline": "Atendimento especializado em ambiente privativo no Parque 10 de Novembro.",
      "ctaText": "Agendar pelo WhatsApp",
      "ctaLink": "https://wa.me/5592991558899?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Instituto%20da%20Face%20do%20Amazonas%20(IFACEAM)."
    }
  },
  {
    "id": "footer-ifaceam-instituto-da-face",
    "type": "footer",
    "variant": "Footer01",
    "content": {
      "copyright": "© 2026 Instituto da Face do Amazonas (IFACEAM). Todos os direitos reservados.",
      "socialLinks": [
        {
          "platform": "WhatsApp",
          "url": "https://wa.me/5592991558899?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Instituto%20da%20Face%20do%20Amazonas%20(IFACEAM)."
        }
      ]
    }
  }
]
    }
  ]
};

export default client;
