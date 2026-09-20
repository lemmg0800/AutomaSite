import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../../../');

const slug = process.argv[2];
if (!slug) {
  console.error('[ERRO] Informe o slug do lead. Exemplo: node scaffold_client_config.js pedro-de-queiroz-advocacia');
  process.exit(1);
}

const leadDir = path.join(rootDir, 'leads', slug);
const leadJsonPath = path.join(leadDir, 'lead.json');

if (!fs.existsSync(leadJsonPath)) {
  console.error(`[ERRO] lead.json não encontrado em: ${leadJsonPath}`);
  process.exit(1);
}

const lead = JSON.parse(fs.readFileSync(leadJsonPath, 'utf8'));

// Verifica se brand.json existe
let brand = null;
const brandPath = path.join(leadDir, 'brand/brand.json');
if (fs.existsSync(brandPath)) {
  try {
    brand = JSON.parse(fs.readFileSync(brandPath, 'utf8'));
  } catch (e) {}
}

const targetPath = path.join(rootDir, 'src/clients/data', `${slug}.ts`);
if (fs.existsSync(targetPath)) {
  console.log(`[AVISO] Arquivo de configuração já existe em: ${targetPath}. Pulando criação para evitar sobrescrita.`);
  process.exit(0);
}

// Extrair cores reais ou presets inteligentes
const primaryColor = brand?.colors?.primary || '#0f172a';
const secondaryColor = brand?.colors?.secondary || '#1e293b';
const accentColor = brand?.colors?.accent || '#c5a059';
const backgroundColor = brand?.colors?.background || '#090d16';
const textColor = brand?.colors?.text || '#f8fafc';
const headingFont = brand?.typography?.heading || 'Playfair Display';
const bodyFont = brand?.typography?.body || 'Plus Jakarta Sans';

// Contatos reais apenas se existirem
const businessObj = {
  name: lead.name || 'Empresa',
  niche: lead.niche || lead.segment || 'Serviços Profissionais',
  city: lead.city || 'Florianópolis'
};

if (lead.state) businessObj.state = lead.state;
if (lead.address) businessObj.address = lead.address;
if (lead.phone) businessObj.phone = lead.phone;
if (lead.whatsapp) businessObj.whatsapp = lead.whatsapp;
if (lead.email) businessObj.email = lead.email;
if (lead.google_rating) businessObj.googleRating = lead.google_rating;
if (lead.instagram) businessObj.instagram = lead.instagram;

// 4. Seleção Semântica e Anti-Clone de Variantes com base no Nicho
const n = (businessObj.niche || '').toLowerCase();
const isArchitectureOrLuxury = n.includes('arquit') || n.includes('decor') || n.includes('interiores') || n.includes('engenharia') || n.includes('luxo');
const isHealthOrDental = n.includes('med') || n.includes('saude') || n.includes('odonto') || n.includes('dent') || n.includes('clinic') || n.includes('estetica');
const isLawOrFinance = n.includes('advoc') || n.includes('jurid') || n.includes('direito') || n.includes('contab') || n.includes('finan') || n.includes('consult');

let headerVariant = 'Header01';
let heroVariant = 'Hero01';
let servicesVariant = 'Services01';
let benefitsVariant = 'Benefits01';
let testimonialsVariant = 'Testimonials01';
let contactVariant = 'Contact01';
let ctaVariant = 'CTA01';
let footerVariant = 'Footer01';
let backgroundEffect = 'mesh';

if (isArchitectureOrLuxury) {
  headerVariant = 'Header05';
  heroVariant = 'Hero04'; // Showcase 3D com foto real, stats mono e ambient glow
  servicesVariant = 'Services03';
  benefitsVariant = 'Features04';
  testimonialsVariant = 'SocialProof04';
  contactVariant = 'Contact02';
  ctaVariant = 'CTA03';
  footerVariant = 'Footer04';
  backgroundEffect = 'mesh';
} else if (isHealthOrDental) {
  headerVariant = 'Header01';
  heroVariant = 'Hero07';
  servicesVariant = 'Services01';
  benefitsVariant = 'Features01';
  testimonialsVariant = 'SocialProof01';
  contactVariant = 'Contact01';
  ctaVariant = 'CTA05';
  footerVariant = 'Footer06';
  backgroundEffect = 'mesh';
} else if (isLawOrFinance) {
  headerVariant = 'Header03';
  heroVariant = 'Hero01';
  servicesVariant = 'Services02';
  benefitsVariant = 'Features02';
  testimonialsVariant = 'SocialProof04';
  contactVariant = 'Contact04';
  ctaVariant = 'CTA04';
  footerVariant = 'Footer02';
  backgroundEffect = 'dots';
} else {
  headerVariant = 'Header02';
  heroVariant = 'Hero03';
  servicesVariant = 'Services01';
  benefitsVariant = 'Features03';
  testimonialsVariant = 'SocialProof02';
  contactVariant = 'Contact03';
  ctaVariant = 'CTA02';
  footerVariant = 'Footer01';
  backgroundEffect = 'none';
}

const template = `import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "${slug}",
  status: "draft",
  createdAt: "${new Date().toISOString()}",
  updatedAt: "${new Date().toISOString()}",

  business: ${JSON.stringify(businessObj, null, 4)},

  theme: {
    primaryColor: "${primaryColor}",
    secondaryColor: "${secondaryColor}",
    accentColor: "${accentColor}",
    backgroundColor: "${backgroundColor}",
    textColor: "${textColor}",
    headingFont: "${headingFont}",
    bodyFont: "${bodyFont}",
    borderRadius: "md",
    mode: "dark",
    backgroundEffect: "${backgroundEffect}",
    enableParallax: true
  },

  pages: [
    {
      path: "",
      seo: {
        title: "${lead.name} | ${businessObj.niche} em ${businessObj.city}",
        description: "Excelência e inovação em ${businessObj.niche} em ${businessObj.city}."
      },
      sections: [
        {
          id: "header-main",
          type: "header",
          variant: "${headerVariant}",
          content: {
            navLinks: [
              { label: "Início", href: "#" },
              { label: "Especialidades", href: "#servicos" },
              { label: "Sobre", href: "#sobre" },
              { label: "Diferenciais", href: "#diferenciais" },
              { label: "Contato", href: "#contato" }
            ],
            ctaLabel: "Fale Conosco"
          }
        },
        {
          id: "hero-main",
          type: "hero",
          variant: "${heroVariant}",
          content: {
            badge: "${businessObj.niche} de Alta Performance",
            headline: "Excelência Técnica e Resultados Concretos para Você",
            subheadline: "Atuação personalizada e de alto padrão em ${businessObj.city}, com foco em agilidade, segurança e satisfação total.",
            primaryCtaLabel: "Falar no WhatsApp",
            primaryCtaHref: "${lead.whatsapp ? 'https://wa.me/55' + lead.whatsapp.replace(/[^0-9]/g, '') : '#contato'}",
            secondaryCtaLabel: "Conhecer Soluções",
            secondaryCtaHref: "#servicos"
          }
        },
        {
          id: "benefits-main",
          type: "benefits",
          variant: "${benefitsVariant}",
          content: {
            title: "Por que nos escolher",
            subtitle: "Diferenciais que garantem solidez e tranquilidade aos nossos clientes.",
            benefits: [
              { title: "Atendimento Personalizado", description: "Comunicação transparente e ágil sem intermediários.", icon: "shield" },
              { title: "Especialização Comprovada", description: "Metodologia refinada e foco absoluto em excelência.", icon: "award" },
              { title: "Agilidade & Pontualidade", description: "Compromisso com prazos e entregas impecáveis.", icon: "clock" }
            ]
          }
        },
        {
          id: "services-main",
          type: "services",
          variant: "${servicesVariant}",
          content: {
            title: "Soluções & Especialidades",
            subtitle: "Serviços sob medida para atender às suas necessidades com máxima precisão.",
            services: [
              { title: "Consultoria Especializada", description: "Diagnóstico aprofundado e planejamento sob medida para o seu caso." },
              { title: "Execução & Acompanhamento", description: "Processo estruturado com controle rigoroso de qualidade em cada etapa." },
              { title: "Suporte Estratégico", description: "Disponibilidade para tirar dúvidas e orientar decisões com segurança." }
            ]
          }
        },
        {
          id: "about-main",
          type: "about",
          variant: "About01",
          content: {
            badge: "Nossa Trajetória",
            title: "Compromisso com a Excelência em ${businessObj.city}",
            description: "Com atuação sólida e reconhecida, aliamos conhecimento prático e atendimento humanizado para entregar resultados memoráveis.",
            stats: [
              { number: "100%", label: "Foco no Cliente" },
              { number: "Ágil", label: "Comunicação Direta" }
            ]
          }
        },
        {
          id: "testimonials-main",
          type: "testimonials",
          variant: "${testimonialsVariant}",
          content: {
            title: "O Que Nossos Clientes Dizem",
            subtitle: "Depoimentos reais de quem confia em nosso trabalho.",
            testimonials: [
              { author: "Cliente Verificado", role: "Atendimento Exclusivo", quote: "Profissionalismo impecável e atendimento ágil do início ao fim. Recomendo com total certeza." }
            ]
          }
        },
        {
          id: "faq-main",
          type: "faq",
          variant: "FAQ01",
          content: {
            title: "Dúvidas Frequentes",
            items: [
              { question: "Como funciona o primeiro contato?", answer: "Realizamos uma conversa preliminar para entender em detalhes suas necessidades e propor a solução ideal." },
              { question: "Qual é o prazo médio de atendimento?", answer: "Nosso retorno é ágil e priorizamos responder prontamente todas as solicitações." }
            ]
          }
        },
        {
          id: "contact-main",
          type: "contact",
          variant: "${contactVariant}",
          content: {
            title: "Inicie seu Atendimento",
            subtitle: "Entre em contato diretamente com nossa equipe para agendar um horário.",
            formCta: "Enviar Mensagem"
          }
        },
        {
          id: "cta-main",
          type: "cta",
          variant: "${ctaVariant}",
          content: {
            title: "Pronto para dar o próximo passo?",
            subtitle: "Fale conosco agora mesmo e receba um diagnóstico exclusivo.",
            buttonText: "Falar com Especialista",
            buttonHref: "${lead.whatsapp ? 'https://wa.me/55' + lead.whatsapp.replace(/[^0-9]/g, '') : '#contato'}"
          }
        },
        {
          id: "footer-main",
          type: "footer",
          variant: "${footerVariant}",
          content: {}
        }
      ]
    }
  ]
};

export default client;
`;

fs.writeFileSync(targetPath, template, 'utf8');
console.log(`[OK] Configuração gerada com sucesso em: ${targetPath}`);
console.log(`Visualização em preview disponível em: /preview/${slug}`);
