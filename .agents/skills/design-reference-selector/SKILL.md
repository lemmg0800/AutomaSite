---
name: design-reference-selector
description: Consulta o repositório de 61 Design Systems em Design System/ utilizando o buscador semântico search.py e seleciona a melhor direção visual (paleta, tipografia, efeitos, componentes) sem criar um designsystem.html novo desnecessário para cada cliente.
---

# Skill: Design Reference Selector

Esta skill busca no acervo central de **61 Design Systems** (`D:\projetos antigravity\Site automatico\Design System`) as referências estéticas mais apropriadas ao nicho do lead.

## 1. Princípio Fundamental: Sem Criação Desnecessária de Design Systems

O Builder **NÃO cria um `designsystem.html` novo do zero** para cada cliente.
Ele utiliza o acervo existente como fonte de **direção visual**:
- Cores primárias, secundárias e acentos;
- Combinações de tipografia (Google Fonts);
- Classes de efeitos (`.glass-panel`, `.glow`, sombras);
- Layout de componentes (cards, botões, modais).

## 2. Execução Automática

```bash
python .agents/skills/design-reference-selector/scripts/select_design_reference.py --nicho "odontologia" --slug "cliente-slug"
```

Ou diretamente via CLI:
```bash
python "Design System/search.py" --query "odontologia e estética" --json
```

## 3. Arquivo de Saída
Gera `referencias/design-system-selected.json` contendo:
- Referência primária escolhida e pontuação de relevância;
- Alternativas secundárias para combinação de ideias;
- Tokens sugeridos (fontes, cores, efeitos);
- Justificativa visual.
