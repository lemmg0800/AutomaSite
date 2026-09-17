// Headers
import Header01 from './header/Header01.astro';
import Header02 from './header/Header02.astro';

// Heroes
import Hero01 from './hero/Hero01.astro';
import Hero02 from './hero/Hero02.astro';
import Hero03 from './hero/Hero03.astro';

// Services, Products, Projects, Gallery
import Services01 from './services/Services01.astro';
import Services02 from './services/Services02.astro';
import Products01 from './products/Products01.astro';
import Projects01 from './projects/Projects01.astro';
import Gallery01 from './gallery/Gallery01.astro';

// About, Team, Benefits, Process, Stats
import About01 from './about/About01.astro';
import Team01 from './team/Team01.astro';
import Benefits01 from './benefits/Benefits01.astro';
import Process01 from './process/Process01.astro';
import Stats01 from './stats/Stats01.astro';

// Social Proof & Conversion
import Credentials01 from './credentials/Credentials01.astro';
import Testimonials01 from './testimonials/Testimonials01.astro';
import FAQ01 from './faq/FAQ01.astro';
import Contact01 from './contact/Contact01.astro';
import Map01 from './map/Map01.astro';
import CTA01 from './cta/CTA01.astro';

// Footers
import Footer01 from './footer/Footer01.astro';
import Footer02 from './footer/Footer02.astro';

export const COMPONENT_REGISTRY = {
  header: {
    Header01,
    Header02
  },
  hero: {
    Hero01,
    Hero02,
    Hero03
  },
  services: {
    Services01,
    Services02
  },
  products: {
    Products01
  },
  projects: {
    Projects01
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
    Benefits01
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
    Testimonials01
  },
  faq: {
    FAQ01
  },
  contact: {
    Contact01
  },
  map: {
    Map01
  },
  cta: {
    CTA01
  },
  footer: {
    Footer01,
    Footer02
  }
} as const;

export function getComponent(type: string, variant: string): any {
  const category = COMPONENT_REGISTRY[type as keyof typeof COMPONENT_REGISTRY];
  if (!category) {
    throw new Error(`[ComponentRegistry] Categoria desconhecida: "${type}"`);
  }
  const component = (category as any)[variant];
  if (!component) {
    throw new Error(`[ComponentRegistry] Variante "${variant}" não encontrada na categoria "${type}"`);
  }
  return component;
}