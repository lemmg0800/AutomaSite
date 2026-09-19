---
name: company-intelligence
description: Pesquisa externa e enriquecimento de dados da empresa para o Prospector. Resolve identidade por CNPJ, localiza e-mails comerciais auditados, redes sociais, avaliações públicas e calcula os scores de Business Strength, Contactability e Data Confidence.
---

# Skill: Company Intelligence

Esta skill opera como subetapa do **Agente 1 — Prospector** para investigar fontes públicas externas sobre a empresa por trás do site prospectado.

## 1. Princípios Fundamentais
- **Não alucinar dados:** E-mails e contatos só são atribuídos com evidência pública comprovada. Sem evidência: `"email": null`.
- **Rastreabilidade obrigatória:** Toda informação comercial deve ter `status` (`VERIFICADO`, `PROVÁVEL` ou `NÃO CONFIRMADO`), `source` e `url`.
- **Diferenciação Clara:** A força da empresa NÃO infla a nota estética do site. Ela eleva a prioridade comercial no ranking.

## 2. Pesquisa em Duas Fases (Economia de Recursos)
- **Fase 1 — Leve (`--phase light`):**
  - Aplicada a todos os 15 leads do nicho/região.
  - Extrai CNPJ/Razão Social, contatos essenciais (WhatsApp, telefone, e-mail comercial auditado), notas no Google Maps e redes sociais.
- **Fase 2 — Profunda (`--phase deep`):**
  - Aplicada exclusivamente aos leads mais promissores antes do ranking final do Top 5.
  - Investiga histórico de mercado comprovado, estrutura física, volume de portfólio e notícias institucionais.

## 3. Execução
```bash
node .agents/skills/company-intelligence/scripts/enrich_company_intelligence.cjs --slug <slug> --phase light
node .agents/skills/company-intelligence/scripts/enrich_company_intelligence.cjs --slug <slug> --phase deep
```

## 4. Arquivos Gerados
Em `leads/<slug>/research/`:
- `company-intelligence.json`
- `company-intelligence.md`
- `sources.json`
