import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "dr-marcos-carvalho",
  status: "ativo",
  createdAt: "2026-09-19T16:52:30.072Z",
  updatedAt: "2026-09-19T16:52:30.072Z",

  business: {
    name: "Dr. Marcos Carvalho Implantodontia",
    legalName: "Marcos Carvalho Odontologia Especializada Eireli",
    niche: "Odontologia Especializada & Reabilitação",
    city: "Manaus",
    state: "AM",
    address: "R. Salvador, 440 - Adrianópolis, Manaus - AM",
    phone: "(92) 3584-1212",
    whatsapp: "(92) 98411-9988",
    googleRating: 4.9,
    instagram: "@drmarcoscarvalhomanus"
  },

  theme: {
    primaryColor: "#0d9488",
    secondaryColor: "#115e59",
    accentColor: "#2dd4bf",
    backgroundColor: "#042f2e",
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
        title: "Dr. Marcos Carvalho Implantodontia | Dentista Especialista em Manaus - AM",
        description: "Diga adeus ao medo da cadeira do dentista. Com a cirurgia guiada por computador, os implantes são instalados através de guias cirúrgicos micrométricos, sem cortes com bisturi e com pós-operatório muito mais tranquilo em Adrianópolis."
      },
      sections: [
  {
    "id": "header-dr-marcos-carvalho",
    "type": "header",
    "variant": "Header02",
    "content": {
      "navLinks": [
        {
          "label": "Cirurgia Guiada",
          "href": "#guiada"
        },
        {
          "label": "Carga Imediata",
          "href": "#servicos"
        },
        {
          "label": "Adrianópolis",
          "href": "#contato"
        }
      ],
      "ctaLabel": "Agendar Avaliação"
    }
  },
  {
    "id": "hero-dr-marcos-carvalho",
    "type": "hero",
    "variant": "Hero02",
    "content": {
      "tagline": "Especialista em Implantodontia e Cirurgia Guiada",
      "headline": "A Cirurgia de Implantes Mais Confortável, Segura e Sem Cortes em Manaus",
      "subheadline": "Diga adeus ao medo da cadeira do dentista. Com a cirurgia guiada por computador, os implantes são instalados através de guias cirúrgicos micrométricos, sem cortes com bisturi e com pós-operatório muito mais tranquilo em Adrianópolis.",
      "imageUrl": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
      "primaryCta": {
        "text": "Solicitar Avaliação com Dr. Marcos",
        "href": "https://wa.me/5592984119988?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Dr.%20Marcos%20Carvalho%20Implantodontia."
      },
      "secondaryCta": {
        "text": "Entenda a Cirurgia Guiada",
        "href": "#servicos"
      },
      "stats": [
        {
          "value": "0 Cortes",
          "label": "Cirurgia Guiada 3D"
        },
        {
          "value": "99.2%",
          "label": "Taxa de Sucesso"
        },
        {
          "value": "4.9 ★",
          "label": "Reputação no Google"
        }
      ]
    }
  },
  {
    "id": "services-dr-marcos-carvalho",
    "type": "services",
    "variant": "Services01",
    "content": {
      "tagline": "Especialidades Cirúrgicas",
      "headline": "Implantes Dentários de Alta Tecnologia e Carga Imediata",
      "services": [
        {
          "id": "cirurgia-guiada",
          "title": "Implantes com Cirurgia Guiada",
          "description": "Instalação de implantes guiada por tomografia 3D sem cortes extensos nem suturas dolorosas.",
          "icon": "ShieldCheck"
        },
        {
          "id": "carga-imediata",
          "title": "Carga Imediata Fixa",
          "description": "Restauração rápida da mastigação e do sorriso estético em curto prazo com total estabilidade.",
          "icon": "Sparkles"
        },
        {
          "id": "enxertos",
          "title": "Enxertos Ósseos e Regeneração",
          "description": "Reconstrução de espessura e altura óssea com biomateriais modernos para sustentação de implantes.",
          "icon": "Award"
        },
        {
          "id": "checkup-implante",
          "title": "Manutenção Preventiva de Implantes",
          "description": "Acompanhamento periódico para preservar a saúde peri-implantar e durabilidade a longo prazo.",
          "icon": "CheckCircle2"
        }
      ]
    }
  },
  {
    "id": "process-dr-marcos-carvalho",
    "type": "process",
    "variant": "Process01",
    "content": {
      "tagline": "A Metodologia Sem Cortes",
      "headline": "Como a Cirurgia Guiada Transforma Sua Experiência",
      "steps": [
        {
          "step": "1",
          "title": "Tomografia 3D Virtual",
          "description": "Mapeamento milimétrico da estrutura óssea do paciente no computador."
        },
        {
          "step": "2",
          "title": "Impressão do Guia Cirúrgico",
          "description": "Fabricação do guia cirúrgico personalizado que direciona o implante com exatidão."
        },
        {
          "step": "3",
          "title": "Instalação Sem Bisturi",
          "description": "Procedimento rápido, sem cortes abertos e com recuperação ultra rápida."
        }
      ]
    }
  },
  {
    "id": "benefits-dr-marcos-carvalho",
    "type": "benefits",
    "variant": "Benefits01",
    "content": {
      "tagline": "Segurança e Tranquilidade",
      "headline": "Por Que Optar Pela Cirurgia Guiada com Dr. Marcos",
      "items": [
        {
          "title": "Pós-Operatório Sem Dor",
          "description": "A ausência de cortes convencionais reduz o inchaço e permite retornar às atividades muito mais rápido."
        },
        {
          "title": "Planejamento 100% Personalizado",
          "description": "Cada milímetro do implante é simulado previamente no software tomográfico antes da cirurgia."
        },
        {
          "title": "Ambiente Acolhedor em Adrianópolis",
          "description": "Consultório moderno planejado para proporcionar tranquilidade e bem-estar do início ao fim."
        }
      ]
    }
  },
  {
    "id": "stats-dr-marcos-carvalho",
    "type": "stats",
    "variant": "Stats01",
    "content": {
      "stats": [
        {
          "number": "0 Cortes",
          "label": "Técnica Guiada por Guia 3D"
        },
        {
          "number": "99.2%",
          "label": "Índice de Sucesso Clínico"
        },
        {
          "number": "100%",
          "label": "Planejamento Personalizado"
        },
        {
          "number": "4.9 ★",
          "label": "Avaliações no Google"
        }
      ]
    }
  },
  {
    "id": "cta-dr-marcos-carvalho",
    "type": "cta",
    "variant": "CTA01",
    "content": {
      "headline": "Recupere Seus Dentes Fixos Sem Sofrimento",
      "subheadline": "Solicite um bate-papo sem compromisso com o Dr. Marcos Carvalho em Adrianópolis.",
      "ctaText": "Falar no WhatsApp",
      "ctaLink": "https://wa.me/5592984119988?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Dr.%20Marcos%20Carvalho%20Implantodontia."
    }
  },
  {
    "id": "footer-dr-marcos-carvalho",
    "type": "footer",
    "variant": "Footer02",
    "content": {
      "copyright": "© 2026 Dr. Marcos Carvalho Implantodontia. Todos os direitos reservados.",
      "socialLinks": [
        {
          "platform": "WhatsApp",
          "url": "https://wa.me/5592984119988?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Dr.%20Marcos%20Carvalho%20Implantodontia."
        }
      ]
    }
  }
]
    }
  ]
};

export default client;
