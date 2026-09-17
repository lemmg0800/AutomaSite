# Arquitetura da Plataforma de Sites Compartilhada

Esta plataforma foi desenvolvida para hospedar dezenas ou centenas de sites institucionais sob um único repositório GitHub, um único domínio e um único deploy na Vercel utilizando Astro.

---

## 1. Princípios Arquiteturais

1. **Configuration-Driven Multi-Tenant:** Não existem projetos ou branches separadas por cliente. Cada cliente é definido por um arquivo de configuração em `src/clients/data/[slug].ts` validado estritamente por Zod.
2. **Separação Rígida entre Produção e Preview:**
   - `/[slug]`: Atende exclusivamente clientes com `status: 'published'`, pré-renderizados estaticamente (SSG) no build.
   - `/preview/[slug]`: Rota privada executada sob demanda (SSR com `prerender = false`), protegida por autenticação e marcada com `noindex, nofollow`.
3. **Área Administrativa Privada (`/`):**
   - Rota raiz protegida por Middleware e Supabase Auth.
   - Na v1, atua como Cockpit de Leitura e Monitoramento (sem escrita em disco no Vercel).
4. **Governança de Componentes:**
   - Variantes em uso por clientes publicados são congeladas contra alterações destrutivas.