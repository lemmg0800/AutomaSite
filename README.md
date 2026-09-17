# Sistema de Prospecção Comercial — Agente 1: Prospector

Este repositório contém a configuração e as ferramentas do **Agente 1 — Prospector**, o primeiro componente do pipeline de prospecção comercial autônoma com Antigravity:

$$\text{PROSPECTOR} \longrightarrow \text{BUILDER (Agente 2)} \longrightarrow \text{COMERCIAL (Agente 3)}$$

---

## 🎯 Princípio Operacional

$$\text{BOM NEGÓCIO} + \text{SITE ABAIXO DO POTENCIAL} = \text{OPORTUNIDADE COMERCIAL}$$

O Prospector identifica empresas ativas, com excelente reputação e alta autoridade, cujos websites e experiência mobile estão defasados, gerando um contraste ideal para abordagem comercial e oferta de redesign.

---

## 📁 Estrutura de Arquivos

```text
prospector/
├── .agents/
│   ├── agents/
│   │   └── prospector/
│   │       └── agent.md                  # Definição principal do Prospector e pipeline de 27 etapas
│   └── skills/
│       ├── lead-discovery/
│       │   └── SKILL.md                  # Pesquisa, coleta de contatos e triagem comercial
│       ├── website-auditor/
│       │   ├── SKILL.md                  # Auditoria visual, UX, mobile, conversão e SEO
│       │   └── scripts/
│       │       └── capture_screenshots.js# Captura real de screenshots via Chromium local
│       ├── pagespeed-analyzer/
│       │   ├── SKILL.md                  # Auditoria Google PageSpeed Insights & Core Web Vitals
│       │   └── scripts/
│       │       └── audit_pagespeed.js    # Coleta de métricas laboratoriais Mobile e Desktop
│       └── dossier-builder/
│           ├── SKILL.md                  # Cálculo de scores, ranking e estruturação de dossiês
│           ├── scripts/
│           │   └── score_opportunity.js  # Algoritmo de cálculo de oportunidade (0 a 100)
│           └── resources/
│               ├── lead.template.json    # Schema JSON do lead para consumo pelo Agente 2
│               └── auditoria.template.md # Template legível por humanos do relatório
├── leads/                                # Pasta persistente contendo os dossiês gerados
└── README.md
```

---

## 🚀 Como Utilizar o Prospector

Basta informar o nicho e a região desejados no chat:
- `"Clínicas de estética em Florianópolis"`
- `"Dentistas e ortodontia em Curitiba"`
- `"Escritórios de arquitetura em Campinas"`

O Prospector executará o funil de prospecção:
1. **Descoberta:** Mapeamento de até 30 empresas reais.
2. **Triagem:** Seleção das 10 a 15 mais promissoras com presença ativa e site próprio.
3. **Auditoria Profunda:** Avaliação técnica, visual e mobile das 5 melhores candidatas.
4. **Dossiês & Ranking:** Geração de `lead.json`, `auditoria.md`, métricas de PageSpeed e screenshots em `leads/[slug]/`.
5. **Aprovação Humana:** Apresentação do ranking para que você decida quais leads serão aprovados para envio ao **Agente 2 (Builder)**.