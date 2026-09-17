---
name: commercial-strategist
description: Analisa dados do Prospector e do Builder para compor dossiês comerciais personalizados, e-mails de alta conversão, abordagens humanizadas de WhatsApp e respostas a objeções.
---

# Skill: Commercial Strategist

Esta skill transforma os dados técnicos de auditoria, métricas de PageSpeed e os screenshots do redesign em uma abordagem comercial consultiva, direta e estritamente personalizada para a empresa.

## 1. Princípios Inegociáveis
- **Comunicação Humana:** Nada de jargões de agência ("potencializar sua presença digital", "próximo nível").
- **Efeito Prático vs Design pelo Design:** Em vez de "melhoramos o layout", explicar "o canal de WhatsApp agora fica visível durante toda a navegação no celular sem esforço".
- **Sem Promessas Falsas:** Nunca prometer aumento de faturamento ou 1º lugar no Google.
- **Aprovação Humana:** O Comercial organiza os argumentos e as mensagens, mas **nunca dispara comunicações sem autorização humana explícita**.

## 2. Arquivos Gerados em `leads/[slug]/commercial/`:
- `commercial-summary.md`: Diagnóstico executivo, argumentos centrais e diretrizes do que não falar.
- `email.md`: E-mail consultivo de abertura e sequências de follow-up leves.
- `whatsapp.md`: Scripts de mensagem direta e consultiva para WhatsApp.
- `whatsapp-points.md`: Guia de bolso para o vendedor responder dúvidas rapidamente.
- `objections.md`: Matriz de tratamento de barreiras comuns (preço, agência atual, sem tempo).
- `evidence.json`: Estrutura de dados unificada com métricas e evidências para consulta.

## 3. Execução Automatizada:
```bash
node .agents/skills/commercial-strategist/scripts/generate_commercial_dossier.js [slug-da-empresa]
```
