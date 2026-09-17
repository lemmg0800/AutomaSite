import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Parse args: --client [slug] --component [category]/[Variant]
const args = process.argv.slice(2);
let clientSlug = '';
let componentPath = '';

for (let i = 0; i < args.length; i++) {
  if ((args[i] === '--client' || args[i] === '-c') && args[i + 1]) {
    clientSlug = args[i + 1];
  }
  if ((args[i] === '--component' || args[i] === '-p') && args[i + 1]) {
    componentPath = args[i + 1];
  }
}

if (!clientSlug || !componentPath) {
  console.log(`
Uso:
  npm run client:eject -- --client [slug-do-cliente] --component [categoria]/[Variante]

Exemplo:
  npm run client:eject -- --client pedro-de-queiroz-advocacia --component hero/Hero01
  `);
  process.exit(1);
}

// Clean extension if provided
if (!componentPath.endsWith('.astro')) {
  componentPath += '.astro';
}

const sourceFile = path.join(rootDir, 'src', 'components', componentPath);
if (!fs.existsSync(sourceFile)) {
  console.error(`[ERRO] Componente compartilhado não encontrado em: ${sourceFile}`);
  process.exit(1);
}

const variantFileName = path.basename(componentPath);
const targetDir = path.join(rootDir, 'src', 'clients', 'components', clientSlug);
const targetFile = path.join(targetDir, variantFileName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

if (fs.existsSync(targetFile)) {
  console.warn(`[AVISO] O cliente "${clientSlug}" já possui uma cópia própria de ${variantFileName}. Sobrescrevendo...`);
}

fs.copyFileSync(sourceFile, targetFile);

console.log(`
✅ COMPONENTE CLONADO COM SUCESSO!
Origem: ${sourceFile}
Destino (Isolado do Cliente): ${targetFile}

A plataforma Astro agora utilizará esta cópia exclusiva para "${clientSlug}".
Você pode alterar o código, estilos e estrutura deste arquivo sem qualquer risco de descaracterizar outros sites da plataforma.
`);
