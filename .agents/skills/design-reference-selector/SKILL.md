---
name: design-reference-selector
description: Consulta o repositório de 61 Design Systems em Design System/ e seleciona as referências estéticas, paletas, tipografias, UI compounds e efeitos visuais mais adequados ao nicho do lead.
---

# Skill: Design Reference Selector

Esta skill busca e seleciona diretrizes visuais no acervo em `Design System/` (`D:\projetos antigravity\Site automatico\Design System`), evitando a criação desnecessária de um novo `designsystem.html` para cada cliente.

## 1. Pesquisa no Catálogo de Design Systems

O agente deve executar a pesquisa via CLI ou script Python:

```bash
python "Design System/search.py" --query "[nicho do cliente]" --top 3
```

Ou via script Node/Python dedicado:
```bash
python .agents/skills/design-reference-selector/scripts/select_design_reference.py --nicho "advocacia" --slug "cliente-slug"
```

## 2. Elementos a Inspecionar nas Referências Selecionadas

- **Tipografia:** Hierarquia (Google Fonts), pesos e legibilidade para o nicho;
- **Paleta de Cores:** Primária, secundária, superfície e acentos;
- **UI Compounds & Efeitos:** Cards, bordas arredondadas, sombras e `.glass-panel`;
- **Animações & Transições:** Microinterações de hover e visibilidade.

## 3. Saída do Mapeamento

Gera o arquivo `referencias/design-system-selected.json` documentando a referência escolhida, os tokens assimilados e a justificativa estética.
