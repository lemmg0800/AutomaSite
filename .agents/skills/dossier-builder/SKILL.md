---
name: dossier-builder
description: Cálculo ponderado de oportunidade comercial, ranqueamento de leads, geração de dossiês persistentes em leads/[slug]/ e preparação para handoff ao Agente 2 (Builder).
---

# Skill: Dossier Builder & Ranking

Esta skill orienta o Prospector na etapa final de consolidação, calculando com rigor as notas, gerando a tabela de ranking executivo e estruturando a pasta de cada lead qualificado para consumo futuro pelo **Agente 2 (Builder)** e **Agente 3 (Comercial)**.

## 1. Cálculo de Scores e Oportunidade
Execute o script utilitário para validar os cálculos:
```bash
node .agents/skills/dossier-builder/scripts/score_opportunity.js '{"business":8.5,"design":4,"mobile":3.5,"ux":4,"conversion":3,"confidence":6,"performance":3.5,"seo":5}'
```

### Regras do Cálculo:
- **Nota do Negócio (0 a 10):** Avalia solidez da empresa, autoridade, avaliações no Google e presença em redes sociais.
- **Nota do Site (0 a 10):** Média ponderada dando maior peso a Mobile (25%), Conversão (20%), Design (20%) e UX (15%).
- **Nota de Oportunidade (0 a 100):** Mede a amplitude do GAP ($\text{Negócio Forte} \times \text{Site Defasado}$).
  - $\ge 70$: **Alta Oportunidade** (Lead prioritário).
  - $45 - 69$: **Média Oportunidade**.
  - $< 45$: **Baixa Oportunidade** (Descartar do Top 5).

## 2. Estrutura Persistente do Dossiê do Lead
Para cada lead qualificado no Top 5, crie a pasta correspondente:
```text
leads/<slug-da-empresa>/
├── lead.json                  # Dados estruturados consumíveis pelo Agente 2 e Agente 3
├── auditoria.md               # Relatório executivo completo legível por humanos
├── pagespeed.json             # Saída pura do PageSpeed Insights
└── screenshots/
    ├── site-desktop.png       # Screenshot real desktop (1280x800)
    ├── site-mobile.png        # Screenshot real mobile (390x844)
    ├── pagespeed-mobile.png   # (Quando disponível)
    └── pagespeed-desktop.png  # (Quando disponível)
```

## 3. Tabela de Ranking Executivo
Ao concluir a análise, apresente a tabela executiva ao usuário no seguinte padrão:

| Ranking | Empresa | Cidade | Site | Segmento | Nota Negócio | Nota Site | PS Mobile | PS Desktop | Oportunidade | Principal Problema | Gancho Comercial |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- | :--- |
| **#1** | Nome A | Cidade | url | Nicho | 8.5 | 3.6 | 32 | 68 | **91** | Mobile quebrado | Perda de leads mobile |
| **#2** | Nome B | Cidade | url | Nicho | 9.0 | 4.2 | 41 | 74 | **86** | Sem CTA de agendamento | Gap Instagram vs Site |

## 4. Status Padronizados de Handoff
- `pesquisado`: Identificado na fase inicial.
- `descartado`: Não passou na triagem (sem site, fechado, agregador).
- `qualificado`: Passou na triagem com bom potencial.
- `alta_oportunidade`: No Top 5 com dossiê completo gerado.
- `aguardando_aprovacao`: Apresentado ao usuário, aguardando validação.
- `aprovado_para_redesign`: Validado pelo usuário para entrega ao **Agente 2 (Builder)**.