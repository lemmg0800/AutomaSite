---
name: brand-extractor
description: Extrai a identidade visual existente (paleta de cores, tipografia, estilo de logo, tom de voz, fotografia) e sintetiza o briefing estratégico e as decisões de design para o redesign.
---

# Skill: Brand Extractor

Esta skill orienta a extração fidedigna da identidade visual e institucional da empresa a partir do dossiê do Prospector e fontes públicas, garantindo que o redesign seja uma evolução natural e não uma ruptura irreconhecível.

## 1. O que Extrair do Dossiê (`lead.json` e `auditoria.md`):
1. **Cores da Marca:** Cor primária predominante, secundária de contraste e tons neutros de fundo/texto.
2. **Estilo Tipográfico:** Famílias de fontes existentes (serifada clássica, sem serifa moderna, condensada institucional).
3. **Tom de Voz:** Sóbrio, combativo, consultivo, acolhedor, sofisticado ou técnico.
4. **Logotipo e Emblemas:** Características visuais, ícones de balança/iniciais/monogramas.
5. **Diferenciais e Especialidades:** Áreas jurídicas ou serviços onde a empresa tem maior reputação.
6. **Contatos Legítimos:** Endereço físico, telefone comercial e WhatsApp público.

## 2. Documentos a Gerar:
- `leads/[slug]/redesign/briefing.md` (utilizando `resources/briefing.template.md`)
- `leads/[slug]/redesign/decisoes-design.md` (utilizando `resources/decisoes-design.template.md`)