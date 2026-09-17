---
name: pagespeed-analyzer
description: Execução automatizada e interpretação contextual de Google PageSpeed Insights, Core Web Vitals (LCP, FID/INP, CLS) e diagnósticos técnicos para Mobile e Desktop.
---

# Skill: PageSpeed Analyzer

Esta skill orienta o Prospector na coleta e interpretação de métricas técnicas do Google PageSpeed Insights para embasar comercialmente o diagnóstico técnico do lead.

## 1. Execução do Script
Para executar a auditoria e salvar os dados no dossiê do lead:
```bash
node .agents/skills/pagespeed-analyzer/scripts/audit_pagespeed.js <URL_DO_SITE> leads/<slug>
```
Gera o arquivo `pagespeed.json` contendo scores e métricas de laboratório.

## 2. Métricas Coletadas
Separe com rigor absoluto **Mobile** e **Desktop**:

- **Performance Score (0 a 100):** Pontuação global de velocidade do Lighthouse.
- **LCP (Largest Contentful Paint):** Tempo para renderizar o maior bloco de conteúdo (ideal: $< 2.5s$).
- **FCP (First Contentful Paint):** Primeiro elemento visualizado na tela.
- **TBT (Total Blocking Time):** Tempo em que a thread principal fica travada por JavaScript (ideal: $< 200ms$).
- **CLS (Cumulative Layout Shift):** Movimentação inesperada de elementos durante o carregamento (ideal: $< 0.1$).
- **Speed Index:** Rapidez com que o conteúdo é visualmente preenchido.

## 3. Diretrizes de Interpretação Responsável (Sem Alarmismo Falso)
Converta números técnicos em argumentos compreensíveis para tomada de decisão:

- **Exemplo 1 (Performance Mobile baixa):**
  - *Dado:* Performance Mobile 35/100, LCP 5.4s.
  - *Interpretação:* "A análise mobile apontou um tempo de carregamento do conteúdo principal de 5.4 segundos em redes móveis. Isso pode afastar potenciais clientes que clicam no link do Instagram ou em anúncios e encontram a página em branco nos primeiros segundos."
  - *O que NÃO dizer:* "Vocês estão perdendo 70% das vendas por causa do site." (Nunca use causalidades sem base comprovada).

- **Exemplo 2 (CLS elevado):**
  - *Dado:* CLS 0.32 no celular.
  - *Interpretação:* "Existem saltos visuais perceptíveis enquanto o site carrega (como banners e fontes que empurram os botões para baixo), o que costuma causar cliques acidentais e prejudica a experiência."

## 4. Diferenciação Crucial
- **Fato:** "O PageSpeed Mobile registrou pontuação 41."
- **Inferência:** "Isso sugere que usuários em conexões 4G podem demorar mais para visualizar o formulário."
- **Opinião Técnica:** "A otimização de formato de imagens para WebP e compressão de scripts trará ganhos expressivos."