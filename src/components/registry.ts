// Headers
import Header01 from './header/Header01.astro';
import Header02 from './header/Header02.astro';
import Header03 from './header/Header03.astro';
import Header04 from './header/Header04.astro';
import Header05 from './header/Header05.astro';
import Header06 from './header/Header06.astro';
import Header07 from './header/Header07.astro';
import Header08 from './header/Header08.astro';
import Header09 from './header/Header09.astro';
import Header10 from './header/Header10.astro';
import Header11 from './header/Header11.astro';
import Header12 from './header/Header12.astro';
import Header13 from './header/Header13.astro';
import Header14 from './header/Header14.astro';

// Heroes
import Hero01 from './hero/Hero01.astro';
import Hero02 from './hero/Hero02.astro';
import Hero03 from './hero/Hero03.astro';
import Hero04 from './hero/Hero04.astro';
import Hero05 from './hero/Hero05.astro';
import Hero06 from './hero/Hero06.astro';
import Hero07 from './hero/Hero07.astro';
import Hero08 from './hero/Hero08.astro';
import Hero09 from './hero/Hero09.astro';
import Hero10 from './hero/Hero10.astro';
import Hero11 from './hero/Hero11.astro';

// Features & Benefits
import Benefits01 from './benefits/Benefits01.astro';
import Features01 from './benefits/Features01.astro';
import Features02 from './benefits/Features02.astro';
import Features03 from './benefits/Features03.astro';
import Features04 from './benefits/Features04.astro';
import Features05 from './benefits/Features05.astro';
import Features06 from './benefits/Features06.astro';
import Features07 from './benefits/Features07.astro';
import Features08 from './benefits/Features08.astro';

// Bento Modules
import Bento01 from './bento/Bento01.astro';
import Bento02 from './bento/Bento02.astro';
import Bento03 from './bento/Bento03.astro';
import Bento04 from './bento/Bento04.astro';
import Bento05 from './bento/Bento05.astro';
import Bento06 from './bento/Bento06.astro';
import Bento07 from './bento/Bento07.astro';
import Bento08 from './bento/Bento08.astro';
import Bento09 from './bento/Bento09.astro';
import Bento10 from './bento/Bento10.astro';
import Bento11 from './bento/Bento11.astro';
import Bento12 from './bento/Bento12.astro';

// Services, Products, Projects, Gallery
import Services01 from './services/Services01.astro';
import Services02 from './services/Services02.astro';
import Services03 from './services/Services03.astro';
import Products01 from './products/Products01.astro';
import Projects01 from './projects/Projects01.astro';
import Gallery01 from './gallery/Gallery01.astro';

// About, Team, Benefits, Process, Stats
import About01 from './about/About01.astro';
import Team01 from './team/Team01.astro';
import Process01 from './process/Process01.astro';
import Stats01 from './stats/Stats01.astro';

// Social Proof & Testimonials
import Credentials01 from './credentials/Credentials01.astro';
import Testimonials01 from './testimonials/Testimonials01.astro';
import SocialProof01 from './testimonials/SocialProof01.astro';
import SocialProof02 from './testimonials/SocialProof02.astro';
import SocialProof03 from './testimonials/SocialProof03.astro';
import SocialProof04 from './testimonials/SocialProof04.astro';
import SocialProof05 from './testimonials/SocialProof05.astro';
import FAQ01 from './faq/FAQ01.astro';

// Contact
import Contact01 from './contact/Contact01.astro';
import Contact02 from './contact/Contact02.astro';
import Contact03 from './contact/Contact03.astro';
import Contact04 from './contact/Contact04.astro';
import Map01 from './map/Map01.astro';

// CTA
import CTA01 from './cta/CTA01.astro';
import CTA02 from './cta/CTA02.astro';
import CTA03 from './cta/CTA03.astro';
import CTA04 from './cta/CTA04.astro';
import CTA05 from './cta/CTA05.astro';
import CTA06 from './cta/CTA06.astro';
import CTA07 from './cta/CTA07.astro';

// Footers
import Footer01 from './footer/Footer01.astro';
import Footer02 from './footer/Footer02.astro';
import Footer03 from './footer/Footer03.astro';
import Footer04 from './footer/Footer04.astro';
import Footer05 from './footer/Footer05.astro';
import Footer06 from './footer/Footer06.astro';
import Footer07 from './footer/Footer07.astro';
import Footer08 from './footer/Footer08.astro';

// Showcase & Projects
import Showcase01 from './projects/Showcase01.astro';
import Showcase02 from './projects/Showcase02.astro';
import Showcase03 from './projects/Showcase03.astro';
import Showcase04 from './projects/Showcase04.astro';
import Showcase05 from './projects/Showcase05.astro';
import Showcase06 from './projects/Showcase06.astro';

// Dynamic glob for client-specific components (Prevents breaking existing sites)
const clientOverrides = import.meta.glob<{ default: any }>('../clients/components/*/*.astro', { eager: true });

export const COMPONENT_REGISTRY = {
  header: {
    Header01,
    Header02,
    Header03,
    Header04,
    Header05,
    Header06,
    Header07,
    Header08,
    Header09,
    Header10,
    Header11,
    Header12,
    Header13,
    Header14
  },
  hero: {
    Hero01,
    Hero02,
    Hero03,
    Hero04,
    Hero05,
    Hero06,
    Hero07,
    Hero08,
    Hero09,
    Hero10,
    Hero11
  },
  services: {
    Services01,
    Services02,
    Services03
  },
  products: {
    Products01
  },
  projects: {
    Projects01,
    Showcase01,
    Showcase02,
    Showcase03,
    Showcase04,
    Showcase05,
    Showcase06
  },
  showcase: {
    Showcase01,
    Showcase02,
    Showcase03,
    Showcase04,
    Showcase05,
    Showcase06
  },
  gallery: {
    Gallery01
  },
  about: {
    About01
  },
  team: {
    Team01
  },
  benefits: {
    Benefits01,
    Features01,
    Features02,
    Features03,
    Features04,
    Features05,
    Features06,
    Features07,
    Features08
  },
  bento: {
    Bento01,
    Bento02,
    Bento03,
    Bento04,
    Bento05,
    Bento06,
    Bento07,
    Bento08,
    Bento09,
    Bento10,
    Bento11,
    Bento12
  },
  process: {
    Process01
  },
  stats: {
    Stats01
  },
  credentials: {
    Credentials01
  },
  testimonials: {
    Testimonials01,
    SocialProof01,
    SocialProof02,
    SocialProof03,
    SocialProof04,
    SocialProof05
  },
  faq: {
    FAQ01
  },
  contact: {
    Contact01,
    Contact02,
    Contact03,
    Contact04
  },
  map: {
    Map01
  },
  cta: {
    CTA01,
    CTA02,
    CTA03,
    CTA04,
    CTA05,
    CTA06,
    CTA07
  },
  footer: {
    Footer01,
    Footer02,
    Footer03,
    Footer04,
    Footer05,
    Footer06,
    Footer07,
    Footer08
  }
} as const;

export function getComponent(type: string, variant: string, clientSlug?: string): any {
  // 1. Verifica se existe um componente isolado e customizado para o cliente específico
  if (clientSlug) {
    const overrideKey = `../clients/components/${clientSlug}/${variant}.astro`;
    if (clientOverrides[overrideKey]?.default) {
      return clientOverrides[overrideKey].default;
    }
  }

  // 2. Utiliza a biblioteca compartilhada global
  const resolvedType = type === 'differentials' ? 'benefits' : type;
  const category = COMPONENT_REGISTRY[resolvedType as keyof typeof COMPONENT_REGISTRY];
  if (!category) {
    console.warn(`[ComponentRegistry] Categoria desconhecida: "${type}"`);
    return null;
  }
  let component = (category as any)[variant];
  if (!component) {
    const available = Object.keys(category);
    if (available.length > 0) {
      console.warn(`[ComponentRegistry] Variante "${variant}" não encontrada na categoria "${type}". Usando fallback "${available[0]}".`);
      component = (category as any)[available[0]];
    } else {
      console.warn(`[ComponentRegistry] Nenhuma variante disponível na categoria "${type}".`);
      return null;
    }
  }
  return component;
}