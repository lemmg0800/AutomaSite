---
name: site-downloader
description: Baixa automaticamente o site atual de um lead através da URL oficial, descompacta e organiza o acervo bruto de referências (HTML, CSS, JS, imagens, logos, mídias e fontes) na pasta do cliente.
---

# Skill: Site Downloader Automático

Esta skill automatiza o download do site atual do lead para servir como material de estudo, auditoria visual e preservação de assets originais.

## 1. Fluxo de Execução

1. **Obter a URL Oficial:** Extrair a URL a partir de `leads/[slug]/lead.json` ou `auditoria.md`.
2. **Executar o Script de Download:**
   ```bash
   node .agents/skills/site-downloader/scripts/download_site.js --url "https://cliente.com.br" --slug "nome-do-cliente"
   ```
3. **Automação & Fallback Técnico:**
   - **Automação de Navegador / Service Downloader:** Tenta o download completo da estrutura do site.
   - **Fallback HTTP Scraper:** Se o downloader falhar ou for bloqueado por WAF/Cloudflare, executa o scraper resguardando HTML, imagens, CSS e scripts locais.
   - **Validação:** Confirma que a pasta de download não está vazia e possui ao menos o `index.html` e os assets principais.
4. **Organização da Pasta:**
   O acervo baixado é armazenado em:
   ```text
   leads/[slug]/referencias/site-baixado/
   ├── index.html
   ├── css/
   ├── js/
   ├── imagens/
   └── assets/
   ```
   E mantido espelhado conceitualmente em `index/[slug]/referencias/site-baixado/`.

## 2. Validação da Cópia Baixada

Antes de prosseguir para a extração de estrutura, o agente deve verificar:
- [ ] HTML principal presente e legível;
- [ ] Logotipo original e favicon identificados;
- [ ] Imagens da equipe, serviços e Hero resgatadas;
- [ ] Estilos CSS e fontes locais identificados;
- [ ] Relatório de integridade salvo em `download-report.json`.

> **REGRA ABSOLUTA:** Nunca finja que o download foi concluído sem verificar o conteúdo. Se o site estiver totalmente bloqueado, registre a falha em `download-report.json` e notifique o relatório de handoff.
