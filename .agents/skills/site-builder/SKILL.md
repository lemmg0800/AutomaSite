---
name: site-builder
description: Motor de geração e scaffolding de sites institucionais demonstrativos altamente personalizados, ultrarrápidos, responsivos e focados em conversão a partir dos dados do dossiê.
---

# Skill: Site Builder

Esta skill é responsável por transformar o briefing e as decisões de design em código frontend de alta fidelidade e executável.

## 1. Princípios Construtivos:
- **Stack Limpa e Veloz:** HTML5 semântico, Tailwind CSS utilitário para design responsivo fluido, JavaScript puro (ES6) para interações.
- **Zero Dependências Pesadas:** Sem frameworks pesados que exijam build complexo para simples demonstração comercial. O site roda instantaneamente com duplo clique no `index.html`.
- **Foco em Conversão:** Botão flutuante de WhatsApp, links diretos com mensagens personalizadas ("Olá, gostaria de agendar uma consulta sobre..."), formulário de contato simplificado.
- **Responsividade Total:** Testado e otimizado para celulares (390px), tablets e monitores ultrawide.
- **SEO e Acessibilidade:** Meta tags completas, Open Graph, contraste WCAG AA, tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

## 2. Execução Automatizada:
```bash
node .agents/skills/site-builder/scripts/scaffold_redesign.js [slug-da-empresa]
```