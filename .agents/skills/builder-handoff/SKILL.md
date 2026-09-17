---
name: builder-handoff
description: Empacota a demonstração visual, métricas comparativas Antes & Depois, screenshots e justificativas comerciais em formato estruturado para o Agente 3 (Comercial).
---

# Skill: Builder Handoff

Esta skill finaliza a etapa do Builder compilando um pacote completo de entrega comercial em formato JSON estruturado (`builder-handoff.json`) e markdown executivo (`relatorio.md`).

## 1. Arquivos de Saída:
- `leads/[slug]/redesign/relatorio.md`: Comparativo detalhado Antes & Depois com links para capturas.
- `leads/[slug]/redesign/builder-handoff.json`: Metadados estruturados para consumo autônomo pelo Agente 3.

## 2. Execução:
```bash
node .agents/skills/builder-handoff/scripts/generate_handoff.js [slug-da-empresa]
```