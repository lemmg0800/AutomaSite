# Guia de Deploy na Vercel

1. **Conexão com Repositório:**
   - Conectar o repositório GitHub ao projeto na Vercel.
   - Framework Preset: **Astro**.
   - Build Command: `npm run build`
   - Output Directory: `.vercel/output`
2. **Variáveis de Ambiente na Vercel:**
   - `SUPABASE_URL`: URL da instância Supabase.
   - `SUPABASE_ANON_KEY`: Chave anônima pública do Supabase.
3. **Deploy Automático:**
   - Cada push na branch `main` dispara o build automático da Vercel.
   - Páginas com status `published` são geradas estaticamente para entrega instantânea via CDN.
   - Rotas administrativas e previews são servidas via Edge/Serverless Functions.