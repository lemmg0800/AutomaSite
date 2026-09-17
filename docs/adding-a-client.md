# Manual do Agente 2: Adicionando um Novo Cliente

Passo a passo para o Agente 2 (Builder) gerar e publicar um novo site:

1. **Scaffolding Inicial:**
   ```bash
   npm run client:new -- --slug [slug-do-cliente] --name "[Nome da Empresa]"
   ```
2. **Preenchimento da Configuração (`src/clients/data/[slug].ts`):**
   - Definir cores e fontes no bloco `theme`.
   - Escolher as variantes de componentes (`Header02`, `Hero01`, `Services01`, etc.).
   - Inserir textos e informações reais extraídas do dossiê do Prospector.
3. **Validação do Schema Zod:**
   ```bash
   npm run client:validate
   ```
4. **Auditoria de Componentes em Uso:**
   ```bash
   npm run client:audit
   ```
5. **Pré-visualização Local:**
   - Iniciar servidor de desenvolvimento: `npm run dev`
   - Acessar `http://localhost:4321/preview/[slug]`
6. **Publicação Definitiva:**
   - Alterar `status: 'published'` no arquivo `src/clients/data/[slug].ts`.
   - Executar `git add`, `git commit` e `git push`.
   - A Vercel executará o build estático e o site estará no ar em `meudominio.com/[slug]`.