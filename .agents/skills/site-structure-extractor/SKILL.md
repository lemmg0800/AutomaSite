---
name: site-structure-extractor
description: Analisa o HTML e CSS do site baixado e gera o documento intermediário referencias/site-atual.md com a estrutura dobra por dobra, inventário de copy original e representações visuais em ASCII.
---

# Skill: Site Structure Extractor

Esta skill analisa o acervo bruto em `referencias/site-baixado/` e consolida a arquitetura e textos originais no arquivo estruturado `referencias/site-atual.md`.

## 1. Objetivo do Markdown Intermediário (`site-atual.md`)

O `site-atual.md` é a **única fonte de verdade para COPY + ESTRUTURA ORIGINAL**, eliminando a necessidade do Builder reler iterativamente o código HTML/CSS bruto do site antigo e economizando tokens de processamento.

## 2. Execução Automática

```bash
node .agents/skills/site-structure-extractor/scripts/extract_structure.js --slug "nome-do-cliente"
```

## 3. Formato Padrão do `site-atual.md`

O arquivo gerado em `leads/[slug]/referencias/site-atual.md` e espelhado em `index/[slug]/referencias/site-atual.md` deve seguir rigorosamente a estrutura:

```markdown
# 1. HERO (PRIMEIRA DOBRA)

Copy original:
- Headline: "..."
- Subheadline: "..."
- CTA: "..."

Elementos Visuais:
- Logo original no topo esquerdo
- Imagem de fundo / ilustrativa
- Botão de WhatsApp em destaque

## Layout Atual (ASCII)

+--------------------------------------------------+
| LOGO               NAVEGAÇÃO          WHATSAPP   |
+--------------------------------------------------+
| HEADLINE PRINCIPAL       |                       |
| Subheadline descritiva   |     IMAGEM HERO       |
| [ BOTÃO CTA ]            |                       |
+--------------------------------------------------+

----------------------------------------------------

# 2. DOBRA 2 — SERVIÇOS / ATUAÇÃO

Copy original:
...

## Layout Atual (ASCII)

...
```

## 4. Regras de Utilização pelo Builder

1. **Copy Protegida:** Preserve dados institucionais reais, diferenciais e serviços autênticos.
2. **UX Reorganizada:** Não copie péssimas decisões de UX do site antigo. Se o Prospector apontar má usabilidade, reorganize a sequência das dobras mantendo o conteúdo legítimo.
