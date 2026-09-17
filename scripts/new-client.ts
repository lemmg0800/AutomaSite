import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '../src/clients/data');

const args = process.argv.slice(2);
let slug = '';
let name = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--slug' && args[i + 1]) slug = args[i + 1];
  if (args[i] === '--name' && args[i + 1]) name = args[i + 1];
}

if (!slug || !name) {
  console.log('Uso: npx tsx scripts/new-client.ts --slug [slug-do-cliente] --name "[Nome da Empresa]"');
  process.exit(1);
}

const targetPath = path.join(dataDir, `${slug}.ts`);
if (fs.existsSync(targetPath)) {
  console.error(`[ERRO] Cliente com slug "${slug}" já existe em: ${targetPath}`);
  process.exit(1);
}

const template = `import type { ClientConfig } from '../schema';

const client: ClientConfig = {
  slug: "${slug}",
  status: "draft",
  createdAt: "${new Date().toISOString()}",
  updatedAt: "${new Date().toISOString()}",

  business: {
    name: "${name}",
    niche: "Nicho a Definir",
    city: "Florianópolis",
    state: "SC",
    address: "Endereço comercial da empresa",
    phone: "(48) 3000-0000",
    whatsapp: "(48) 90000-0000"
  },

  theme: {
    primaryColor: "#0a192f",
    secondaryColor: "#0f2444",
    accentColor: "#c5a059",
    backgroundColor: "#0a192f",
    textColor: "#f8fafc",
    headingFont: "Playfair Display",
    bodyFont: "Plus Jakarta Sans",
    borderRadius: "md",
    mode: "dark"
  },

  pages: [
    {
      path: "",
      seo: {
        title: "${name} | Site Oficial",
        description: "Apresentação institucional de ${name}."
      },
      sections: [
        {
          id: "header-main",
          type: "header",
          variant: "Header01",
          content: {
            navLinks: [{ label: "Início", href: "#" }, { label: "Contato", href: "#contato" }],
            ctaLabel: "Fale Conosco"
          }
        },
        {
          id: "hero-main",
          type: "hero",
          variant: "Hero01",
          content: {
            badge: "Qualidade & Compromisso",
            headline: "Proposta de Valor Exclusiva de ${name}",
            subheadline: "Descreva de forma clara os benefícios centrais do atendimento.",
            primaryCtaLabel: "Falar no WhatsApp"
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
console.log(`✅ [OK] Configuração de rascunho criada em: ${targetPath}`);
console.log(`Visualização local disponível em: /preview/${slug}`);