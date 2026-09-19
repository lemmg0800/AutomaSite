---
name: art-director
description: Agente 2A responsável por pesquisar no catálogo de 61 Design Systems e conceber uma direção de arte única para cada cliente antes da codificação, eliminando sites repetitivos.
---

# Skill: Art Director (Diretor de Arte Visual)

Esta skill guia o **Agente 2A (Visual Designer / Diretor de Arte)** na concepção de identidades visuais exclusivas para cada empresa, impedindo a homogeneização estética no pipeline.

## 1. Princípios Inegociáveis
1. **Consulta Obrigatória ao Acervo:** Todo projeto deve consultar semanticamente o catálogo de 61 Design Systems via `Design System/search.py`.
2. **Anti-Clone:** Dois clientes do mesmo lote **NUNCA** podem ter a mesma paleta, o mesmo layout de Hero ou a mesma imagem principal.
3. **Capricho na 1ª Dobra:** Definir iluminação, efeitos (.glow, .glass-panel, mesh), badges flutuantes de autoridade e tipografia de alto impacto.

## 2. Execução
```bash
node .agents/skills/art-director/scripts/generate_art_direction.js <slug>
```

## 3. Saída Gerada
Gera `leads/<slug>/referencias/art-direction.json` contendo:
- Referências selecionadas do acervo de 61 templates;
- Conceito visual e atmosfera estética;
- Tokens sugeridos (paleta refinada, tipografia, bordas e modo dark/light);
- Mapeamento variado de seções e variantes (Header, Hero01-04, Services, Team, Credentials, Stats, FAQ, Footer);
- Especificação detalhada da 1ª dobra (Hero).
