---
name: site-structure-extractor
description: Analisa a página principal do site baixado e gera o documento intermediário referencias/site-atual.md documentando o site dobra por dobra, com inventário completo de copy original (títulos, subtítulos, CTAs, diferenciais, serviços) e representações de layout em ASCII para guiar o redesign.
---

# Skill: Site Structure Extractor

Esta skill analisa o HTML da página principal contida em `referencias/site-baixado/` e gera o documento consolidado `referencias/site-atual.md`.

## 1. Papel do Markdown Intermediário

O `site-atual.md` é a **fonte primária de COPY + ESTRUTURA ORIGINAL**.
Ele existe para que o Builder não precise reler arquivos HTML/CSS pesados repetidamente a cada iteração, economizando tokens e garantindo total fidelidade às informações reais da empresa.

## 2. Execução Automática

```bash
node .agents/skills/site-structure-extractor/scripts/extract_structure.js --slug "nome-do-cliente"
```

## 3. Estrutura Padrão Gerada em `site-atual.md`

O arquivo é salvo em `leads/[slug]/referencias/site-atual.md` e espelhado em `index/[slug]/referencias/site-atual.md`:

```markdown
# HERO (PRIMEIRA DOBRA)
### Copy Original
- Headline: "..."
- Subheadline: "..."
- CTA: "..."
### Elementos Visuais e Mídia
...
### Layout Atual (Representação ASCII)
+--------------------------------------------------+
| LOGO               NAV                 WHATSAPP  |
+--------------------------------------------------+
| TEXTO PRINCIPAL          |                       |
| Subheadline              |      IMAGEM HERO      |
| [ CTA PRINCIPAL ]        |                       |
+--------------------------------------------------+
----------------------------------------------------
# DOBRA 2 — SERVIÇOS E ATUAÇÃO
...
# DOBRA 3 — SOBRE A EMPRESA E DIFERENCIAIS
...
# DOBRA 4 — PROVA SOCIAL / CREDIBILIDADE
...
# DOBRA 5 — CONTATO E RODAPÉ
...
```

## 4. Diretrizes para o Redesign

1. **Preservação de Conteúdo Real:** Use os textos, especialidades e contatos extraídos. Não invente conteúdo factual.
2. **Reorganização Livre de UX:** O Markdown documenta o site antigo, mas **não obriga** a manter erros de usabilidade ou proporções ruins. Se a auditoria do Prospector apontou falhas, aperfeiçoe a hierarquia, a clareza e a conversão mantendo os dados legítimos.
