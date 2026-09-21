# Sistema de Catalogação e Seleção Semântica de Componentes (Component Registry)

Este documento descreve o sistema de indexação semântica, taxonomia visual e motor de recomendação inteligente de componentes Astro para o **Platform Builder (Agente 2B)** e o **Diretor de Arte (Agente 2A)**.

---

## 1. Arquitetura do Sistema

```
src/components/
├── component-registry.json     <- Manifesto completo compilado e pronto para consumo por LLMs
├── components-meta.ts          <- Metadados tipados (estilo, nichos, motion, props_schema)
├── selector.ts                 <- Engine de busca e scoring inteligente (queryComponents)
├── registry.ts                 <- Registro estático de importação do Astro
└── [categorias]/*.astro        <- 100 componentes especializados
```

### Arquivos Chave:
- **`src/components/components-meta.ts`**: Fonte única da verdade tipada em TypeScript. Define a personalidade visual, tags estéticas (`luxury-minimal`, `editorial-clean`, `high-tech`, etc.), nível de movimento (`none`, `subtle`, `interactive-hover`, `complex-scroll`), nichos recomendados e schema de props.
- **`src/components/component-registry.json`**: Manifesto exportado em formato JSON leve para que scripts, LLMs ou prompts injetáveis tenham acesso instantâneo ao catálogo.
- **`src/components/selector.ts`**: Utilitário de busca com cálculo de afinidade semântica (scoring), penalidade anti-clone e gerador de arquétipo de página completa.
- **`scripts/index-components.ts`**: Script CLI (`npm run components:index`) que audita arquivos `.astro`, valida contra `registry.ts` e regenera o manifesto JSON.

---

## 2. Como Usar o Seletor Inteligente (`selector.ts`)

### Consulta Rápida por Nicho e Vibe
```typescript
import { queryComponents } from './src/components/selector';

// Filtrar o melhor Hero para um escritório de arquitetura de alto padrão
const topHeroes = queryComponents({
  section: 'hero',
  niche: 'arquitetura',
  vibe: 'luxury-minimal',
  limit: 2
});

console.log(topHeroes[0].component.id); // 'hero/Hero04'
console.log(topHeroes[0].matchReasons); // ['Aderência direta ao nicho: "arquitetura"', ...]
console.log(topHeroes[0].recommendedPropsSnippet); // Objeto boilerplate pronto para preencher
```

### Recomendação de Layout Completo de Página
```typescript
import { recommendFullPageLayout } from './src/components/selector';

const fullLayout = recommendFullPageLayout({
  niche: 'medicina',
  vibe: 'editorial-clean',
  hasPhysicalAddress: true,
  hasPortfolioProjects: false
});

// Retorna uma sequência harmônica de Header, Hero, Services, About, Stats, Testimonials, FAQ, Contact, Footer, etc.
```

---

## 3. Template de Prompt Injetável para o Agente Builder

Injete este bloco no system prompt ou na instrução de geração do Agente Builder:

```markdown
<!-- INÍCIO DO PROMPT INJETÁVEL: SELEÇÃO SEMÂNTICA DE COMPONENTES -->
### DIRETRIZ DE SELEÇÃO DE COMPONENTES (DESIGN SYSTEM REGISTRY)

Você tem acesso ao catálogo semântico de componentes em `src/components/component-registry.json`.
NUNCA adivinhe componentes nem crie layouts genéricos baseados sempre na mesma variante (ex: `Hero01` para todos os sites).

Antes de gerar a configuração do cliente em `src/clients/data/[slug].ts`:
1. **Analise o Diagnóstico Visual e o Nicho do Cliente:**
   - Identifique a energia da marca: luxo, minimalismo editorial, alta tecnologia, acolhedor/orgânico ou utilitário local.
2. **Selecione os Componentes Correspondentes:**
   - **Primeira Dobra (Hero):**
     - Se o cliente tiver fotos de projetos/obras/sede de alto nível: escolha obrigatoriamente `hero/Hero04` (Showcase 3D com foto, stats mono e ambient glow).
     - Se o cliente for uma autoridade médica/jurídica focada em credibilidade: escolha `hero/Hero01` (Authority com trust points e tipografia display).
     - Se for negócio de urgência ou atendimento físico rápido: escolha `hero/Hero03` (Contato direto e endereço físico em destaque).
   - **Serviços & Soluções:**
     - Para tecnologia, construtoras e clínicas premium: escolha `services/Services03` (Bento com card `featured` e glow).
     - Para negócios com múltiplos tratamentos com conversão direta: escolha `services/Services01` (Cards interativos com botão individual de WhatsApp).
     - Para bancas jurídicas e consultoria executiva: escolha `services/Services02` (Editorial sereno e tipográfico).
   - **Atmosfera & Efeitos:**
     - Configure `theme.backgroundEffect`: use `'mesh'` para luxo/orgânico, `'dots'` para tecnologia/precisão, `'prism'` para agências criativas.
     - Ative `theme.enableParallax: true` para revelações fluidas de cards.
3. **Respeite o Schema de Props:**
   - Nunca use propriedades inventadas. Preencha apenas as props documentadas no manifesto para cada variante escolhida.
<!-- FIM DO PROMPT INJETÁVEL -->
```

---

## 4. Matriz Rápida de Componentes por Categoria

| Categoria | ID | Estilo | Motion | Melhores Nichos |
| :--- | :--- | :--- | :--- | :--- |
| **Header** | `header/Header01` | Glassmorphism, Clean | `interactive-hover` | Consultoria, Medicina, Tecnologia |
| **Header** | `header/Header02` | Utility Banner, Corporativo | `subtle` | Clínicas, Imobiliárias, Negócios Locais |
| **Hero** | `hero/Hero01` | Editorial, Trust Checklist | `interactive-hover` | Medicina, Advocacia, Finanças |
| **Hero** | `hero/Hero02` | Centralizado, Direct Response | `interactive-hover` | Startups, Cursos, Agências |
| **Hero** | `hero/Hero03` | Painel Físico de Contato | `none` | Serviços Locais, Clínicas de Bairro |
| **Hero** | `hero/Hero04` | Showcase 3D Tilt, Glow, Stats | `complex-scroll` | Arquitetura, Interiores, Luxo, High-Tech |
| **Hero** | `hero/Hero05` | Glow Centered (ReactBits Pro) | `subtle` | Arquitetura, Startups, Luxo |
| **Hero** | `hero/Hero06` | Minimal Tech Grid (ReactBits Pro) | `interactive-hover` | Tecnologia, Engenharia, Finanças |
| **Hero** | `hero/Hero07` | Split Visual (ReactBits Pro) | `interactive-hover` | Medicina, Advocacia, Clínicas |
| **Hero** | `hero/Hero08` | Radial Beam Social Proof (ReactBits Pro)| `subtle` | Negócios Locais, Odontologia |
| **Hero** | `hero/Hero09` | Editorial Asymmetric (ReactBits Pro) | `none` | Consultoria, Advocacia, B2B |
| **Hero** | `hero/Hero10` | App Showcase Perspective (ReactBits Pro)| `interactive-hover` | Startups, SaaS, Tecnologia |
| **Hero** | `hero/Hero11` | Video & Media Cinema (ReactBits Pro) | `interactive-hover` | Arquitetura, Eventos, Gastronomia |
| **Services**| `services/Services01`| Bento Cards + WhatsApp CTA | `interactive-hover` | Odontologia, Estética, B2B |
| **Services**| `services/Services02`| Editorial Minimalista Monocromático| `subtle` | Advocacia, Auditoria, Consultoria |
| **Services**| `services/Services03`| Bento Grid com Flagship em Destaque| `interactive-hover` | Tecnologia, Construtoras, Inovação |
| **Projects**| `projects/Projects01`| Galeria Curada de Obras/Cases | `interactive-hover` | Arquitetura, Engenharia, Paisagismo |
| **Gallery** | `gallery/Gallery01` | Mosaico Fotográfico Imersivo | `interactive-hover` | Clínicas, Gastronomia, Decoração |
| **About**   | `about/About01`   | Storytelling Institucional | `subtle` | Tradição Familiar, Bancas, Clínicas |
| **Team**    | `team/Team01`    | Grid de Especialistas e Títulos | `subtle` | Hospitais, Escritórios, Educação |
| **Benefits**| `benefits/Benefits01`| Proposta de Valor e Diferenciais | `interactive-hover`| Financeiro, Saúde, B2B |
| **Benefits**| `benefits/Features01`| Clean 3-Columns (ReactBits Pro) | `interactive-hover`| Consultoria, Saúde, Serviços |
| **Benefits**| `benefits/Features02`| Split Numbered 2-Columns (ReactBits Pro)| `interactive-hover`| Engenharia, Arquitetura, Tecnologia |
| **Benefits**| `benefits/Features03`| Icon Focus Cards (ReactBits Pro) | `interactive-hover`| Clínicas, Serviços Locais, B2B |
| **Benefits**| `benefits/Features04`| Asymmetric Spotlight (ReactBits Pro) | `subtle` | Arquitetura, Consultoria, Advocacia |
| **Benefits**| `benefits/Features05`| Sequential Step Cards (ReactBits Pro) | `none` | Construção, Processos, Reformas |
| **Benefits**| `benefits/Features06`| Metrics Impact Grid (ReactBits Pro) | `interactive-hover`| Startups, Finanças, B2B |
| **Benefits**| `benefits/Features07`| Comparison Split Table (ReactBits Pro) | `none` | Advocacia, Medicina, Auditoria |
| **Benefits**| `benefits/Features08`| Vertical Timeline (ReactBits Pro) | `subtle` | História, Metodologia, Arquitetura |
| **Bento**   | `bento/Bento01`   | Classic Asymmetric 3 (ReactBits Pro) | `interactive-hover` | Arquitetura, Engenharia, Consultoria |
| **Bento**   | `bento/Bento02`   | Alternating Wide 7 (ReactBits Pro) | `interactive-hover` | Arquitetura, Design, Medicina |
| **Bento**   | `bento/Bento03`   | Triple Column Grid 11 (ReactBits Pro) | `interactive-hover` | Serviços Profissionais, Engenharia |
| **Bento**   | `bento/Bento04`   | Quad Pill 19 (ReactBits Pro) | `interactive-hover` | Clínicas, Saúde, Segurança |
| **Bento**   | `bento/Bento05`   | Split Stage 20 (ReactBits Pro) | `subtle` | Arquitetura, Imóveis de Luxo |
| **Bento**   | `bento/Bento06`   | Dual Image Showcase 21 (ReactBits Pro)| `interactive-hover`| Arquitetura, Gastronomia, Estética |
| **Bento**   | `bento/Bento07`   | Masonry Asymmetric 27 (ReactBits Pro) | `interactive-hover` | Tecnologia, Serviços Integrados |
| **Bento**   | `bento/Bento08`   | Large Quad 31 (ReactBits Pro) | `interactive-hover` | Advocacia, Engenharia, Auditoria |
| **Bento**   | `bento/Bento09`   | Metric Highlight 33 (ReactBits Pro) | `subtle` | Finanças, Gestão Patrimonial |
| **Bento**   | `bento/Bento10`   | Focus Ecosystem 34 (ReactBits Pro) | `interactive-hover` | Tecnologia, SaaS, Consultoria |
| **Bento**   | `bento/Bento11`   | Mosaic Showcase 36 (ReactBits Pro) | `interactive-hover` | Arquitetura, Design de Interiores |
| **Bento**   | `bento/Bento12`   | Categorized Features 37 (ReactBits Pro)| `none` | Engenharia, Medicina, Especialidades |
| **Process** | `process/Process01` | Jornada Passo a Passo (01, 02, 03) | `subtle` | Arquitetura, Tratamentos Complexos |
| **Stats**   | `stats/Stats01`   | Faixa de Métricas Numéricas | `subtle` | Indústria, Construtoras, Franquias |
| **Header** | `header/Header03` | Minimal Centered (ReactBits Pro) | `none` | Escritórios, Agências, Luxo |
| **Header** | `header/Header04` | Floating Blur Island (ReactBits Pro) | `interactive-hover` | Startups, SaaS, Tecnologia |
| **Header** | `header/Header05` | Editorial Double Deck (ReactBits Pro)| `subtle` | Medicina, Advocacia, Luxo |
| **Header** | `header/Header06` | Brand Split Navigation (ReactBits Pro)| `interactive-hover` | Moda, Arquitetura, Design |
| **Header** | `header/Header07` | Tech Segmented (ReactBits Pro) | `interactive-hover` | Engenharia, Tecnologia, Finanças |
| **Header** | `header/Header08` | Transparent Overlay (ReactBits Pro) | `subtle` | Fotografia, Turismo, Hotelaria |
| **Header** | `header/Header09` | Pillar Badge (ReactBits Pro) | `interactive-hover` | Indústria, Logística, B2B |
| **Header** | `header/Header10` | Offcanvas Trigger (ReactBits Pro) | `interactive-hover` | Criativos, Portfólios |
| **Header** | `header/Header11` | Announcement Bar Integrated (ReactBits Pro)| `subtle` | Eventos, Clínicas, Cursos |
| **Header** | `header/Header12` | Modernist Asymmetric (ReactBits Pro)| `none` | Design, Consultoria, Arte |
| **Header** | `header/Header13` | Pill Badge Center (ReactBits Pro) | `interactive-hover` | Startups, Clínicas de Alto Padrão |
| **Header** | `header/Header14` | Ultra Minimal Monospace (ReactBits Pro)| `none` | Tecnologia, Pesquisa, Finanças |
| **Proof**   | `testimonials/Testimonials01` | Cards de Citação com Autor | `interactive-hover`| Saúde, Estética, Consultorias |
| **Proof**   | `testimonials/SocialProof01` | Quote Grid with Avatars (ReactBits Pro)| `interactive-hover`| Clínicas, SaaS, Consultorias |
| **Proof**   | `testimonials/SocialProof02` | Star Badge Minimalist (ReactBits Pro)| `subtle` | Negócios Locais, Serviços Rápidos |
| **Proof**   | `testimonials/SocialProof03` | Metric Statement Cards (ReactBits Pro)| `subtle` | Engenharia, Finanças, B2B |
| **Proof**   | `testimonials/SocialProof04` | Compact Trust Columns (ReactBits Pro)| `none` | Advocacia, Contabilidade, Medicina |
| **Proof**   | `testimonials/SocialProof05` | Press & Brand Endorsement (ReactBits Pro)| `interactive-hover`| Startups, Franquias, Celebridades |
| **Contact** | `contact/Contact01`| Hub Multicanal (WhatsApp/Fone/Email)| `subtle`| Todos os nichos |
| **Contact** | `contact/Contact02`| Split Form & Direct Channel (ReactBits Pro)| `interactive-hover`| Clínicas, Consultorias, B2B |
| **Contact** | `contact/Contact03`| Compact Quick Connect (ReactBits Pro)| `subtle`| Serviços Rápidos, Imobiliárias |
| **Contact** | `contact/Contact04`| Card Grid Offices (ReactBits Pro)| `none`| Redes, Múltiplas Unidades, Advocacia |
| **CTA**     | `cta/CTA01`       | Fechamento de Alto Contraste | `interactive-hover`| Fim de funil em todas as páginas |
| **CTA**     | `cta/CTA02`       | Simple High-Contrast Box (ReactBits Pro)| `subtle`| Conversão Direta, Serviços |
| **CTA**     | `cta/CTA03`       | Gradient Ambient Glow (ReactBits Pro)| `interactive-hover`| Tecnologia, Luxo, Startups |
| **CTA**     | `cta/CTA04`       | Split Action with Stats (ReactBits Pro)| `interactive-hover`| Finanças, Engenharia, Consultoria |
| **CTA**     | `cta/CTA05`       | Direct Booking Checklist (ReactBits Pro)| `subtle`| Clínicas, Escritórios, Cursos |
| **CTA**     | `cta/CTA06`       | Card Container Pill (ReactBits Pro)| `interactive-hover`| Negócios Locais, Aplicativos |
| **CTA**     | `cta/CTA07`       | Floating Banner Bar (ReactBits Pro)| `none`| Fechamento Dinâmico, Urgência |
| **Showcase**| `projects/Showcase01`| Minimalist Project Showcase (ReactBits Pro)| `interactive-hover`| Arquitetura, Engenharia, Design |
| **Showcase**| `projects/Showcase02`| Split Feature Showcase (ReactBits Pro)| `interactive-hover`| Tecnologia, Produtos, Clínicas |
| **Showcase**| `projects/Showcase03`| Asymmetric Project Stage (ReactBits Pro)| `subtle`| Arquitetura, Interiores, Luxo |
| **Showcase**| `projects/Showcase04`| Grid Cards Showcase (ReactBits Pro)| `interactive-hover`| Portfólios, Reformas, Gastronomia |
| **Showcase**| `projects/Showcase05`| Large Spotlight Feature (ReactBits Pro)| `interactive-hover`| Produtos Premium, Lançamentos |
| **Showcase**| `projects/Showcase06`| Dual Metric Showcase (ReactBits Pro)| `subtle`| B2B, Engenharia, Construtoras |
| **Footer**  | `footer/Footer01` | Minimalista Centralizado | `none` | Startups, Landing Pages |
| **Footer**  | `footer/Footer02` | Corporativo com OAB/CRM/CNPJ | `none` | Direito, Medicina, Contabilidade |
| **Footer**  | `footer/Footer03` | Clean Columns & Social (ReactBits Pro)| `none`| Consultoria, Saúde, Serviços |
| **Footer**  | `footer/Footer04` | Brand Statement & Nav (ReactBits Pro)| `none`| Design, Marcas Autorais, Luxo |
| **Footer**  | `footer/Footer05` | Simple Border Centered (ReactBits Pro)| `none`| Landing Pages, Clínicas |
| **Footer**  | `footer/Footer06` | Corporate Badges & Legal (ReactBits Pro)| `none`| Advocacia, Hospitais, Finanças |
| **Footer**  | `footer/Footer07` | Minimal Inline Links (ReactBits Pro)| `none`| Startups, Micro-sites |
| **Footer**  | `footer/Footer08` | Newsletter & Multicolumn (ReactBits Pro)| `interactive-hover`| Portais, Franquias, Conteúdo |
| **Effects** | `effects/DepthCard` | Efeito 3D Depth Card Tilt (ReactBits Starter) | `interactive-hover` | Cards interativos, Produtos, Vitrines |
| **Effects** | `effects/BendingMarquee` | Efeito Marquee Curvo de Logos/Textos (ReactBits Starter) | `subtle` | Prova social, Logos de clientes |
| **Effects** | `effects/FrameBorder` | Moldura Decorativa com Gradiente Dinâmico (ReactBits Starter) | `none` | Moldura para fotos e cards |
| **Effects** | `effects/ParallaxPills` | Tags/Pills Flutuantes em Profundidade (ReactBits Starter) | `interactive-hover` | Tags de diferenciais e skills |
| **Effects** | `effects/ParallaxScroll` | Motor de Revelação e 3D Tilt | `complex-scroll` | Sites com pretensão premium |
| **UI**      | `ui/FloatingWhatsApp` | Widget Flutuante com Mensagem Dinâmica | `interactive-hover` | Conversão direta em todas as páginas |
