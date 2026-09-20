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
8. Seleção Semântica de Componentes (selector.ts / component-registry.json)
   ↓
9. Criar Redesign (src/clients/data/[slug].ts + 100 Componentes Astro Catalogados)
   ↓
10. Prioridade Absoluta na 1ª Dobra (Hero com imagens reais do cliente, animações, botões táteis, glow, backgrounds ambientais)
   ↓
11. Validação Técnica (Zod schema, Astro build, testes responsivos)
   ↓
12. Screenshots & Comparativo Antes x Depois (para o Agente 3 — Comercial)
   ↓
13. Handoff Comercial (builder-handoff.json)
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
- **5. Seleção Semântica e Recomendação de Layout (Anti-Clone):**
  ```bash
  npx tsx scripts/select-layout.ts --niche "[NICHO]" --vibe "[VIBE]" --portfolio [true|false]
  ```
- **6. Scaffold da Configuração Astro:**
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

## 4. Biblioteca de Componentes da Plataforma

- **Header:** `Header01` (moderno com blur), `Header02` (minimalista com moldura)
- **Hero:** `Hero01` (split clássico), `Hero02` (centralizado), `Hero03` (editorial), `Hero04` (moderno tech com 3D tilt e cards flutuantes)
- **Services:** `Services01` (grid de cards), `Services02` (lista detalhada), `Services03` (Bento Grid moderno)
- **Products, Projects, Gallery, About, Team, Benefits, Process, Stats, Credentials, Testimonials, FAQ, Contact, Map, CTA, Footers**
- **Efeitos e Backgrounds Dinâmicos:**
  - `CustomCursor.astro`: cursor magnético fluido (`theme.enableCursor: true`).
  - `ParallaxScroll.astro`: scroll-reveal e 3D tilt (`theme.enableParallax: true`).
  - Backgrounds: `MeshGradientBackground.astro`, `DotMatrixBackground.astro`, `PrismBackground.astro`.

---

## 4.1. Regra de Ouro: Capricho Máximo na Primeira Dobra (Hero)

> 💎 **DIRETRIZ DE OURO DA PRIMEIRA DOBRA:**  
> *"Capriche, especialmente na primeira dobra, que deve/pode conter imagens que encontrar nos assets do cliente, animações, efeitos em botoes, backgrounds, detalhes e animações de surgimento, glow... A primeira dobra será a demonstração das capacidades criativas. Capriche muito aqui."*

A primeira dobra é a vitrine criativa principal. Elementos mandatórios:
- **Fotos do Cliente:** Resgatar fotos autênticas de consultório, equipe, fachada ou procedimentos da pasta `referencias/site-baixado/`.
- **Animações de Surgimento:** Efeito stagger reveal para títulos, subheadlines e CTAs.
- **Efeitos em Botões:** Hover dinâmico com transições, glow sutil e CTA de WhatsApp evidente.
- **Backgrounds Sofisticados:** Mesh gradient, orbs de luz ambiente, `.glass-panel` com backdrop blur.
- **Badges de Autoridade:** Avaliações do Google (estrelas douradas) e tempo de mercado em cards flutuantes.
- **Eject sem restrições:** `npm run client:eject -- --client [slug] --component hero/Hero01` para customizar o Hero com total liberdade estética.

---

## 5. Regra Crítica: Isolamento e Não-Descaracterização de Sites
Componentes compartilhados já em uso são **IMUTÁVEIS E CONGELADOS**.
Ao criar ou customizar um site:
1. **Clonar para o cliente:** Se precisar modificar o código ou estilo do componente para um lead específico, clone-o com:
   ```bash
   npm run client:eject -- --client [slug] --component hero/Hero01
   ```
   A plataforma usará `src/clients/components/[slug]/Hero01.astro` com exclusividade para esse cliente, preservando todos os demais.
2. **Criar nova variante:** Crie `Hero05.astro`, `Services04.astro`, etc., na biblioteca compartilhada.

---

## 6. Handoff Completo para o Agente 3 (Comercial)
Ao finalizar o redesign e passar no `npm run build`, salve o dossiê em `leads/[slug]/redesign/builder-handoff.json` contendo caminhos do site baixado, `site-atual.md`, assets preservados, Design Systems consultados, screenshots antes/depois e métricas.
