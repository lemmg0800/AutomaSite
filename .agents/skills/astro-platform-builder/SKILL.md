---
name: astro-platform-builder
description: Configura e orquestra a geração de sites demonstrativos institucionais na plataforma compartilhada Astro (src/clients/data/[slug].ts) a partir de leads qualificados, integrando o acervo do Design System, o MCP do shadcn e o novo fluxo de download, extrator estrutural em Markdown e análise de assets reais.
---

# Skill: Astro Platform Builder

Esta skill orquestra todo o processo de transformação de um lead qualificado pelo Prospector em um site institucional demonstrativo na plataforma Astro multi-tenant (`src/clients/data/[slug].ts`), seguindo rigorosamente o fluxo de 20 etapas do Builder.

## 1. Novo Fluxo do Builder (Etapas Obrigatórias)

```text
1. Receber Lead do Prospector
   ↓
2. Download Automático do Site Atual (site-downloader) -> referencias/site-baixado/
   ↓
3. Estrutura de Pastas (referencias/ vs site-novo/)
   ↓
4. Validar o Download (integridade HTML, CSS, mídias e logos)
   ↓
5. Gerar Markdown Intermediário (site-structure-extractor) -> referencias/site-atual.md (Dobra por dobra + ASCII)
   ↓
6. Analisar e Catalogar Assets Reais (asset-analyzer) -> referencias/assets-catalog.json
   ↓
7. Consultar Design Systems Existentes (design-reference-selector) -> Design System/ + catalog.json
   ↓
8. Criar Redesign (src/clients/data/[slug].ts + Biblioteca de Componentes Astro)
   ↓
9. Prioridade na 1ª Dobra (Hero com máxima sofisticação, clareza e CTA)
   ↓
10. Validação Técnica (Zod schema, Astro build, testes responsivos)
   ↓
11. Screenshots & Comparativo Antes x Depois (para o Agente 3 — Comercial)
   ↓
12. Handoff Comercial (builder-handoff.json)
```

---

## 2. Automação via Helper Scripts

- **1. Download do Site:**
  ```bash
  node .agents/skills/site-downloader/scripts/download_site.js --url "https://cliente.com.br" --slug "cliente-slug"
  ```
- **2. Extração de Estrutura em Markdown (`site-atual.md`):**
  ```bash
  node .agents/skills/site-structure-extractor/scripts/extract_structure.js --slug "cliente-slug"
  ```
- **3. Análise e Catalogação de Assets Reais:**
  ```bash
  node .agents/skills/asset-analyzer/scripts/analyze_assets.js --slug "cliente-slug"
  ```
- **4. Seleção de Referência do Design System:**
  ```bash
  python .agents/skills/design-reference-selector/scripts/select_design_reference.py --nicho "nicho" --slug "cliente-slug"
  ```
- **5. Scaffold da Configuração Astro:**
  ```bash
  node .agents/skills/astro-platform-builder/scripts/scaffold_client_config.js [cliente-slug]
  ```

---

## 3. Fontes de Referência Visual & Ferramentas

### 🎨 Acervo Design System (`Design System/`)
Utilize o acervo local em `Design System/` (`search.py` e `catalog.json`) como fonte de direção visual (paleta de cores, tipografia Google Fonts, cards com `.glass-panel`, bordas e ritmos visuais). Não crie um novo `designsystem.html` desnecessário para cada cliente.

### 🛠️ MCP do shadcn
Consulte o **shadcn MCP** (`search_items_in_registries`, `view_items_in_registries`, `get_item_examples_from_registries`, `get_audit_checklist`) para inspirar refinamentos de componentes UI e interatividade.

---

## 4. Biblioteca de Componentes da Plataforma (18 Categorias)

- **Header:** `Header01` (moderno com blur), `Header02` (minimalista com moldura)
- **Hero:** `Hero01` (split com badge e CTA), `Hero02` (centralizado imersivo), `Hero03` (elegante clássico)
- **Services:** `Services01` (grid de cards com hover), `Services02` (lista detalhada)
- **Products:** `Products01` (vitrine de itens/produtos com tags)
- **Projects:** `Projects01` (grid de cases/projetos com modal)
- **Gallery:** `Gallery01` (galeria visual imersiva)
- **About:** `About01` (split institucional com estatísticas em destaque)
- **Team:** `Team01` (grid de sócios/equipe com bio e credenciais)
- **Benefits:** `Benefits01` (vantagens e diferenciais com ícones)
- **Process:** `Process01` (linha do tempo passo a passo numerada)
- **Stats:** `Stats01` (faixa de números e métricas comprovadas)
- **Credentials:** `Credentials01` (certificações, registros e autoridade)
- **Testimonials:** `Testimonials01` (depoimentos de clientes reais)
- **FAQ:** `FAQ01` (accordion expansível para dúvidas frequentes)
- **Contact:** `Contact01` (split com canais diretos e formulário rápido)
- **Map:** `Map01` (mapa integrado e localização física)
- **CTA:** `CTA01` (banner final persuasivo para conversão)
- **Footer:** `Footer01` (institucional com links), `Footer02` (editorial clássico)

---

## 5. Regra de Estabilidade de Componentes
Componentes em uso por clientes com status `published` (ex: `sbardella-advocacia`) estão **CONGELADOS**. Resolva personalizações via configuração, escolha outra variante ou crie uma variante nova (ex: `Hero04`).

---

## 6. Handoff Completo para o Agente 3 (Comercial)
Ao finalizar o redesign e passar no `npm run build`, salve o dossiê em `leads/[slug]/redesign/builder-handoff.json` contendo caminhos do site baixado, `site-atual.md`, assets preservados, Design Systems consultados, screenshots antes/depois e métricas.
