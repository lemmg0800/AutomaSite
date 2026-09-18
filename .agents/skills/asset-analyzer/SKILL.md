---
name: asset-analyzer
description: Inspeciona a pasta referencias/site-baixado/, classifica e cataloga os assets visuais em 14 categorias essenciais (logos, favicons, fotos de hero, equipe, serviços, backgrounds, fontes) e gera recomendações de reutilização em referencias/assets-catalog.json para manter o redesign fiel e reconhecível.
---

# Skill: Asset Analyzer

Esta skill inspeciona todos os arquivos de mídia extraídos em `referencias/site-baixado/` e gera o mapeamento detalhado `referencias/assets-catalog.json`.

## 1. As 14 Categorias de Classificação

O catalogador analisa extensões e nomenclatura dos arquivos agrupando-os em:
1. **Logo Principal:** Arquivo SVG ou PNG transparente em alta definição para o Header.
2. **Logos Alternativos:** Variantes em fundo escuro/claro, monogramas ou versões de rodapé.
3. **Favicon:** Ícone de aba do navegador (`favicon.ico`, apple-touch-icon).
4. **Imagens do Hero:** Imagens principais de destaque da primeira dobra original.
5. **Fotos da Empresa:** Fachada, recepção, auditório e ambiente corporativo físico.
6. **Equipe & Sócios:** Retratos profissionais de fundadores, médicos, advogados ou técnicos.
7. **Projetos & Portfólio:** Fotos de obras concluídas, estudos de caso e antes/depois.
8. **Produtos:** Catálogo de itens físicos ou mockups de produtos.
9. **Serviços:** Fotos contextuais dos serviços em execução.
10. **Backgrounds:** Imagens e gradientes de plano de fundo.
11. **Texturas:** Ruídos sutis, malhas de grade e padrões repetíveis.
12. **Ícones:** Ícones vetoriais de serviços e diferenciais.
13. **Fontes Locais:** Arquivos `.woff`, `.woff2` e tipografias específicas do cliente.
14. **Elementos Gráficos:** Selos, brasões e ilustrações auxiliares.

## 2. Execução Automática

```bash
node .agents/skills/asset-analyzer/scripts/analyze_assets.js --slug "nome-do-cliente"
```

## 3. Diretriz de Reutilização no Redesign

> **REGRA ABSOLUTA:** Evite substituir fotos autênticas e logotipos legítimos por placeholders genéricos. O redesign deve manter a identidade reconhecível da marca. Antes de finalizar, responda: **“O proprietário reconheceria imediatamente sua empresa nesse redesign?”**
