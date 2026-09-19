import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "manaos-odontologia",
  status: "ativo",
  createdAt: "2026-09-19T16:52:30.058Z",
  updatedAt: "2026-09-19T16:52:30.058Z",

  business: {
    name: "Manaós Odontologia",
    legalName: "Manaos Odontologia Integrada Ltda",
    niche: "Odontologia Especializada & Reabilitação",
    city: "Manaus",
    state: "AM",
    address: "Av. Djalma Batista, 1661 - Chapada, Manaus - AM",
    phone: "(92) 3342-8800",
    whatsapp: "(92) 98455-1234",
    googleRating: 4.8,
    instagram: "@manaosodontologia"
  },

  theme: {
    primaryColor: "#059669",
    secondaryColor: "#064e3b",
    accentColor: "#34d399",
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
        title: "Manaós Odontologia | Dentista Especialista em Manaus - AM",
        description: "Reabilitação oral, implantes dentários com anestesia computadorizada sem dor, alinhadores ortodônticos invisíveis e estética do sorriso. Atendimento humanizado e acolhedor em 4 endereços estratégicos na capital amazonense."
      },
      sections: [
  {
    "id": "header-manaos-odontologia",
    "type": "header",
    "variant": "Header02",
    "content": {
      "navLinks": [
        {
          "label": "Tratamentos",
          "href": "#servicos"
        },
        {
          "label": "Unidades",
          "href": "#unidades"
        },
        {
          "label": "Nossa Equipe",
          "href": "#sobre"
        },
        {
          "label": "Contato",
          "href": "#contato"
        }
      ],
      "ctaLabel": "Agendar Consulta"
    }
  },
  {
    "id": "hero-manaos-odontologia",
    "type": "hero",
    "variant": "Hero01",
    "content": {
      "tagline": "Mais de 20 Anos de Tradição e 4 Unidades em Manaus",
      "headline": "O Cuidado Odontológico Completo que a Sua Família Merece no Coração de Manaus",
      "subheadline": "Reabilitação oral, implantes dentários com anestesia computadorizada sem dor, alinhadores ortodônticos invisíveis e estética do sorriso. Atendimento humanizado e acolhedor em 4 endereços estratégicos na capital amazonense.",
      "imageUrl": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      "primaryCta": {
        "text": "Agendar Consulta pelo WhatsApp",
        "href": "https://wa.me/5592984551234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Mana%C3%B3s%20Odontologia."
      },
      "secondaryCta": {
        "text": "Ver Unidades em Manaus",
        "href": "#servicos"
      },
      "stats": [
        {
          "value": "20+ Anos",
          "label": "De Experiência"
        },
        {
          "value": "4 Clínicas",
          "label": "Unidades em Manaus"
        },
        {
          "value": "+40.000",
          "label": "Pacientes Atendidos"
        }
      ]
    }
  },
  {
    "id": "services-manaos-odontologia",
    "type": "services",
    "variant": "Services01",
    "content": {
      "tagline": "Especialidades Multidisciplinares",
      "headline": "Tratamentos Completos para Todas as Fases da Vida",
      "services": [
        {
          "id": "implantes",
          "title": "Implantes & Protocolo Fixo",
          "description": "Dentes fixos e definitivos com parafusos de titânio de osseointegração rápida e estética natural.",
          "icon": "ShieldCheck"
        },
        {
          "id": "alinhadores",
          "title": "Ortodontia & Alinhadores Invisíveis",
          "description": "Dentes perfeitamente alinhados com placas transparentes confortáveis sem metal.",
          "icon": "Smile"
        },
        {
          "id": "estetica-oral",
          "title": "Lentes de Contato e Clareamento Laser",
          "description": "Harmonização do tom e formato dos dentes com laminados cerâmicos ultrafinos.",
          "icon": "Sparkles"
        },
        {
          "id": "prevencao",
          "title": "Check-up Digital e Odontologia Preventiva",
          "description": "Câmera intraoral para diagnóstico precoce e tratamentos conservadores sem dor.",
          "icon": "CheckCircle2"
        }
      ]
    }
  },
  {
    "id": "benefits-manaos-odontologia",
    "type": "benefits",
    "variant": "Benefits01",
    "content": {
      "tagline": "Diferenciais Manaós",
      "headline": "20 Anos Cuidando dos Sorrisos dos Amazonenses",
      "items": [
        {
          "title": "4 Unidades Próximas de Você",
          "description": "Facilidade de acesso em pontos estratégicos de Manaus com estacionamento privativo."
        },
        {
          "title": "Tradição de Duas Décadas",
          "description": "Mais de 40 mil sorrisos cuidados com responsabilidade, ética médica e pontualidade."
        },
        {
          "title": "Tecnologia com Conforto",
          "description": "Equipamentos modernos que reduzem ruídos e proporcionam consultas relaxantes."
        }
      ]
    }
  },
  {
    "id": "stats-manaos-odontologia",
    "type": "stats",
    "variant": "Stats01",
    "content": {
      "stats": [
        {
          "number": "20+",
          "label": "Anos de Tradição"
        },
        {
          "number": "4",
          "label": "Unidades em Manaus"
        },
        {
          "number": "+40k",
          "label": "Pacientes Satisfeitos"
        },
        {
          "number": "4.8 ★",
          "label": "Média no Google"
        }
      ]
    }
  },
  {
    "id": "testimonials-manaos-odontologia",
    "type": "testimonials",
    "variant": "Testimonials01",
    "content": {
      "tagline": "Quem Conhece Recomenda",
      "headline": "A Opinião das Famílias que Confiam na Manaós",
      "testimonials": [
        {
          "quote": "Faço meu tratamento de implantes e meus filhos o aparelho na Manaós. Atendimento pontual e carinhoso!",
          "author": "Ana Beatriz Ramos",
          "role": "Paciente da Unidade Chapada",
          "rating": 5
        }
      ]
    }
  },
  {
    "id": "cta-manaos-odontologia",
    "type": "cta",
    "variant": "CTA01",
    "content": {
      "headline": "Encontre a Unidade Mais Próxima e Marque Seu Horário",
      "subheadline": "Equipe pronta para atender você com o máximo de carinho e tecnologia.",
      "ctaText": "Falar com Atendente",
      "ctaLink": "https://wa.me/5592984551234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Mana%C3%B3s%20Odontologia."
    }
  },
  {
    "id": "footer-manaos-odontologia",
    "type": "footer",
    "variant": "Footer02",
    "content": {
      "copyright": "© 2026 Manaós Odontologia. Tradição em Manaus.",
      "socialLinks": [
        {
          "platform": "WhatsApp",
          "url": "https://wa.me/5592984551234?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Mana%C3%B3s%20Odontologia."
        }
      ]
    }
  }
]
    }
  ]
};

export default client;
