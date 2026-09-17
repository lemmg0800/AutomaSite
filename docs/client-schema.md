# Dicionário do Schema de Clientes (Zod)

Localização: `src/clients/schema.ts`

## 1. Slugs Reservados
Os seguintes slugs não podem ser utilizados por clientes:
`login`, `logout`, `api`, `preview`, `admin`, `assets`, `_astro`, `favicon.ico`, `robots.txt`, `sitemap.xml`.

## 2. Status Permitidos
- `draft`: Rascunho visível apenas em `/preview/[slug]`.
- `review`: Em revisão interna em `/preview/[slug]`.
- `approved`: Aprovado comercialmente em `/preview/[slug]`.
- `published`: Publicado oficialmente em `/[slug]`.
- `archived`: Desativado.

## 3. Estrutura de Campos
- `slug`: Identificador único na URL.
- `business`: Dados cadastrais reais (nome, nicho, cidade, estado, endereço, telefones).
- `theme`: Cores primária, secundária, acento, fundo e texto, além de fontes (Playfair Display, Plus Jakarta Sans, etc.).
- `pages`: Lista de páginas com metadados SEO e seções configuradas.