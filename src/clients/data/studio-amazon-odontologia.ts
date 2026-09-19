import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "studio-amazon-odontologia",
  status: "ativo",
  createdAt: "2026-09-19T16:52:30.066Z",
  updatedAt: "2026-09-19T16:52:30.066Z",

  business: {
    name: "Studio Amazon Odontologia Digital",
    legalName: "Studio Amazon Odontologia Digital e Protese Ltda",
    niche: "Odontologia Especializada & Reabilitação",
    city: "Manaus",
    state: "AM",
    address: "Av. Jornalista Umberto Calderaro Filho, 455 - Adrianópolis, Manaus - AM",
    phone: "(92) 3642-1010",
    whatsapp: "(92) 98122-3344",
    googleRating: 5,
    instagram: "@studioamazonodonto"
  },

  theme: {
    primaryColor: "#4f46e5",
    secondaryColor: "#3730a3",
    accentColor: "#818cf8",
    backgroundColor: "#0f172a",
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
        title: "Studio Amazon Odontologia Digital | Dentista Especialista em Manaus - AM",
        description: "Elimine as moldagens com massa desconfortáveis. No Studio Amazon, seu sorriso é escaneado em segundos com tecnologia 3D e dentes em porcelana fresados no laboratório próprio da clínica com encaixe milimétrico."
      },
      sections: [
  {
    "id": "header-studio-amazon-odontologia",
    "type": "header",
    "variant": "Header03",
    "content": {
      "navLinks": [
        {
          "label": "Fluxo Digital",
          "href": "#digital"
        },
        {
          "label": "Laboratório CAD/CAM",
          "href": "#lab"
        },
        {
          "label": "Lentes 3D",
          "href": "#servicos"
        },
        {
          "label": "Adrianópolis",
          "href": "#contato"
        }
      ],
      "ctaLabel": "Agendar Escaneamento 3D"
    }
  },
  {
    "id": "hero-studio-amazon-odontologia",
    "type": "hero",
    "variant": "Hero03",
    "content": {
      "tagline": "Odontologia 100% Digital em Adrianópolis",
      "headline": "Precisão CAD/CAM, Escaneamento 3D e Laboratório Próprio em Manaus",
      "subheadline": "Elimine as moldagens com massa desconfortáveis. No Studio Amazon, seu sorriso é escaneado em segundos com tecnologia 3D e dentes em porcelana fresados no laboratório próprio da clínica com encaixe milimétrico.",
      "imageUrl": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
      "primaryCta": {
        "text": "Agendar Escaneamento Digital 3D",
        "href": "https://wa.me/5592981223344?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Studio%20Amazon%20Odontologia%20Digital."
      },
      "secondaryCta": {
        "text": "Conhecer o Laboratório Próprio",
        "href": "#servicos"
      },
      "stats": [
        {
          "value": "100%",
          "label": "Fluxo Digital Sem Massa"
        },
        {
          "value": "24h",
          "label": "Próteses no Lab Próprio"
        },
        {
          "value": "5.0 ★",
          "label": "Avaliação Máxima"
        }
      ]
    }
  },
  {
    "id": "stats-studio-amazon-odontologia",
    "type": "stats",
    "variant": "Stats01",
    "content": {
      "stats": [
        {
          "number": "100%",
          "label": "Fluxo Digital sem Massas"
        },
        {
          "number": "24h",
          "label": "Fresagem no Lab Próprio"
        },
        {
          "number": "0 mm",
          "label": "Erro de Encaixe com CAD/CAM"
        },
        {
          "number": "5.0 ★",
          "label": "Avaliação Máxima"
        }
      ]
    }
  },
  {
    "id": "services-studio-amazon-odontologia",
    "type": "services",
    "variant": "Services04",
    "content": {
      "tagline": "Odontologia de Alta Precisão",
      "headline": "Tecnologia Digital a Favor da Estética do Seu Sorriso",
      "services": [
        {
          "id": "escaneamento-3d",
          "title": "Escaneamento Intraoral 3D",
          "description": "Mapeamento óptico digital colorido da arcada em alta definição sem náuseas ou massas.",
          "icon": "Sparkles"
        },
        {
          "id": "lab-cadcam",
          "title": "Laboratório Próprio CAD/CAM",
          "description": "Fresagem computadorizada de coroas e facetas de zircônia e dissilicato de lítio em prazos recordes.",
          "icon": "Award"
        },
        {
          "id": "lentes-contato",
          "title": "Lentes e Facetas Ultrafinas",
          "description": "Lentes cerâmicas desenhadas no computador para mimetizar com exatidão a natureza dos dentes.",
          "icon": "Star"
        },
        {
          "id": "invisalign",
          "title": "Ortodontia Digital Invisível",
          "description": "Simulação 3D de cada etapa do alinhamento antes do início do tratamento.",
          "icon": "Smile"
        }
      ]
    }
  },
  {
    "id": "benefits-studio-amazon-odontologia",
    "type": "benefits",
    "variant": "Differentials03",
    "content": {
      "tagline": "A Vanguarda Odontológica",
      "headline": "O Que Torna o Studio Amazon Único no Norte",
      "items": [
        {
          "title": "Laboratório Integrado à Clínica",
          "description": "Ajustes finos imediatos e redução drástica do tempo de espera entre a consulta e a entrega dos dentes."
        },
        {
          "title": "Conforto Máximo Sem Moldagem",
          "description": "Scanner 3D que substitui pastas convencionais por tecnologia óptica digital limpa e instantânea."
        },
        {
          "title": "Bairro Nobre Adrianópolis",
          "description": "Instalações de alto luxo com lounges privativos e estacionamento com manobrista."
        }
      ]
    }
  },
  {
    "id": "testimonials-studio-amazon-odontologia",
    "type": "testimonials",
    "variant": "Testimonials01",
    "content": {
      "tagline": "Experiências Exclusivas",
      "headline": "A Visão dos Nossos Pacientes em Adrianópolis",
      "testimonials": [
        {
          "quote": "O escaneamento 3D é incrível, sem aquela massa desconfortável. Em 24 horas minhas facetas de porcelana estavam prontas e perfeitas!",
          "author": "Larissa M. Albuquerque",
          "role": "Paciente de Lentes de Contato 3D",
          "rating": 5
        }
      ]
    }
  },
  {
    "id": "cta-studio-amazon-odontologia",
    "type": "cta",
    "variant": "CTA03",
    "content": {
      "headline": "Viva a Experiência da Odontologia 100% Digital",
      "subheadline": "Agende sua sessão de escaneamento intraoral 3D sem custo inicial no Adrianópolis.",
      "ctaText": "Agendar Escaneamento no WhatsApp",
      "ctaLink": "https://wa.me/5592981223344?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Studio%20Amazon%20Odontologia%20Digital."
    }
  },
  {
    "id": "footer-studio-amazon-odontologia",
    "type": "footer",
    "variant": "Footer01",
    "content": {
      "copyright": "© 2026 Studio Amazon Odontologia Digital. Adrianópolis, Manaus.",
      "socialLinks": [
        {
          "platform": "WhatsApp",
          "url": "https://wa.me/5592981223344?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20equipe%20da%20Studio%20Amazon%20Odontologia%20Digital."
        }
      ]
    }
  }
]
    }
  ]
};

export default client;
