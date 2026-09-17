---
name: asset-analyzer
description: Classifica e cataloga os assets visuais extraídos do site baixado (logos, favicons, fotos de equipe, serviços, backgrounds e fontes locais), recomendando sua reutilização no redesign.
---

# Skill: Asset Analyzer

Esta skill inspeciona a pasta `referencias/site-baixado/`, cataloga todos os elementos gráficos e mídias e gera o mapeamento `referencias/assets-catalog.json`.

## 1. Classificação dos Assets

O inventário deve agrupar e rotular os arquivos encontrados em:
- **Logo Principal & Alternativos:** Arquivos SVG, PNG transparentes com nome `logo`, `brand` ou no header.
- **Favicon & Ícones de Marca:** Ícones `favicon.ico`, `apple-touch-icon`, etc.
- **Imagens do Hero & Destaque:** Banners e fotos de fundo da primeira dobra.
- **Imagens Reais da Empresa & Equipe:** Fotos da fachada, escritório, sócios e equipe.
- **Imagens dos Serviços & Projetos:** Fotos de trabalhos executados e serviços.
- **Fontes Locais & Arquivos Mídia:** Arquivos `.woff`, `.woff2`, vídeos ou PDFs.

## 2. Execução Automática

```bash
node .agents/skills/asset-analyzer/scripts/analyze_assets.js --slug "nome-do-cliente"
```

## 3. Diretriz de Reutilização no Redesign

> **REGRA ABSOLUTA:** Evite substituir fotos autênticas e logotipos legítimos por placeholders genéricos. O redesign deve manter a identidade reconhecível da marca.
