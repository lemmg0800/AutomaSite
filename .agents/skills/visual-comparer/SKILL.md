---
name: visual-comparer
description: Cria cards e banners comparativos Antes & Depois (Site Atual vs Nova Versão) combinando screenshots reais e métricas do Google PageSpeed para apoiar a abordagem comercial.
---

# Skill: Visual Comparer

Esta skill gera peças gráficas comparativas legítimas (`leads/[slug]/commercial/visual/before-after.png`) utilizando os screenshots reais coletados pelo Prospector e gerados pelo Builder.

## 1. Princípios
- **Zero Manipulação Artificial:** O "antes" e o "depois" utilizam capturas fidedignas dos sites.
- **Destaque Limpo:** Mostra o score mobile do Google (ex: 44/100 vs 98/100) e a facilidade de acesso ao WhatsApp.
- **Design Profissional:** Tipografia moderna, visual dark sóbrio e sem exageros estéticos de marketing barato.

## 2. Execução Automatizada:
```bash
node .agents/skills/visual-comparer/scripts/generate_before_after.js [slug-da-empresa]
```
