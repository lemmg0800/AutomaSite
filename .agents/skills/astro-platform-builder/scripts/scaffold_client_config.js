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
    mode: "dark"
  },

  pages: [
    {
      path: "",
      seo: {
        title: "${lead.name} | ${businessObj.niche} em ${businessObj.city}",
        description: "Assessoria e serviços especializados com alto padrão ético e excelência técnica em ${businessObj.city}."
      },
      sections: [
        {
          id: "header-main",
          type: "header",
          variant: "Header01",
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
          variant: "Hero01",
          content: {
            badge: "${businessObj.niche} de Alta Performance",
            headline: "Defesa Estratégica e Segurança Jurídica para seus Interesses",
            subheadline: "Atuação personalizada e combativa em ${businessObj.city}, com foco em resultados concretos e atendimento ágil.",
            primaryCtaLabel: "Falar no WhatsApp",
            primaryCtaHref: "${lead.whatsapp ? 'https://wa.me/55' + lead.whatsapp.replace(/[^0-9]/g, '') : '#contato'}",
            secondaryCtaLabel: "Conhecer Especialidades",
            secondaryCtaHref: "#servicos"
          }
        },
        {
          id: "benefits-main",
          type: "benefits",
          variant: "Benefits01",
          content: {
            title: "Por que nos escolher",
            subtitle: "Diferenciais que garantem solidez e tranquilidade aos nossos clientes.",
            benefits: [
              { title: "Atendimento Consultivo Direto", description: "Comunicação transparente e ágil sem intermediários.", icon: "shield" },
              { title: "Especialização Técnica Comprovada", description: "Atuação rigorosa nas áreas mais complexas do direito.", icon: "award" },
              { title: "Disponibilidade e Agilidade", description: "Respostas rápidas para situações urgentes e estratégicas.", icon: "clock" }
            ]
          }
        },
        {
          id: "services-main",
          type: "services",
          variant: "Services01",
          content: {
            title: "Áreas de Atuação",
            subtitle: "Soluções jurídicas sob medida para pessoas físicas e empresas.",
            services: [
              { title: "Direito Imobiliário & Contratos", description: "Auditoria, regularização de imóveis, holding familiar e contratos imobiliários de alto padrão." },
              { title: "Planejamento Sucessório & Família", description: "Estruturação patrimonial preventiva, inventários e proteção sucessória com segurança." },
              { title: "Direito Empresarial & Estratégico", description: "Consultoria preventiva para blindagem de negócios e assessoria jurídica corporativa." }
            ]
          }
        },
        {
          id: "about-main",
          type: "about",
          variant: "About01",
          content: {
            badge: "Nossa Trajetória",
            title: "Compromisso Ético e Tradição em ${businessObj.city}",
            description: "Com atuação sólida e reconhecida, o escritório alia experiência técnica a uma visão moderna do direito para oferecer soluções assertivas.",
            stats: [
              { number: "100%", label: "Foco no Cliente" },
              { number: "Ágil", label: "Comunicação Direta" }
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
              { question: "Como funciona a primeira consulta?", answer: "Realizamos uma análise preliminar detalhada da sua situação para apresentar o melhor diagnóstico e plano de ação." },
              { question: "O escritório atende fora de ${businessObj.city}?", answer: "Sim, atuamos de forma híbrida e digital em todo o estado de Santa Catarina e demais regiões." }
            ]
          }
        },
        {
          id: "contact-main",
          type: "contact",
          variant: "Contact01",
          content: {
            title: "Inicie seu Atendimento",
            subtitle: "Entre em contato diretamente com nossa equipe especializada para agendar uma reunião.",
            formCta: "Enviar Mensagem"
          }
        },
        {
          id: "footer-main",
          type: "footer",
          variant: "Footer01",
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
