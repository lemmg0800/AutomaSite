---
name: site-downloader
description: Baixa automaticamente o site atual de um lead utilizando o Asimov Site Downloader 2.0 (https://sd.asimov.academy/), descompacta o pacote gerado, organiza as referências brutas (HTML, CSS, JS, imagens, logos e fontes) e valida a integridade do material capturado com fallback técnico.
---

# Skill: Site Downloader Automático (Asimov Site Downloader 2.0)

Esta skill automatiza a captura completa e offline do site atual de cada lead fornecido pelo Prospector, servindo como base probatória, repositório de assets reais e material para extração estrutural.

## 1. Ferramenta Principal: Asimov Site Downloader 2.0

- **URL do Serviço:** `https://sd.asimov.academy/`
- **Capacidades:** Renderização headless com Playwright/Chromium, captura de SPAs, hidratação de conteúdo lazy-loaded, download de imagens, estilos, fontes e empacotamento em ZIP offline funcional.

## 2. Métodos de Execução

### Método A: Execução Automática via CLI (Recomendado)
O script executa o ciclo completo via API + SSE stream:
```bash
node .agents/skills/site-downloader/scripts/download_site.js --url "https://cliente.com.br" --slug "cliente-slug"
```

1. Dispara `POST https://sd.asimov.academy/start-download` com `{ url }`;
2. Acompanha o progresso em tempo real via SSE `/stream/<session_id>`;
3. Ao finalizar, baixa o ZIP via `/download-file/<session_id>`;
4. Descompacta nativamente (`tar` ou `Expand-Archive`);
5. Organiza os arquivos na pasta do cliente e espelha em `index/[slug]/referencias/site-baixado/`;
6. Executa a validação de integridade e salva `download-report.json`.

### Método B: Automação pelo Navegador (Browser / CDP)
Quando solicitado ou necessário via interface:
1. Verifica se o Chrome CDP está ativo em `http://127.0.0.1:9222/json/version` (seguindo rigorosamente a regra do usuário);
2. Acessa `https://sd.asimov.academy/`;
3. Insere a URL alvo no campo `#url`;
4. Clica no botão `#grab` ("Baixar Site");
5. Aguarda o log ao vivo e a exibição do botão `#dl-link` ("Baixar ZIP");
6. Baixa o arquivo `.zip` para a pasta de downloads;
7. Extrai o pacote e move os conteúdos para `leads/[slug]/referencias/site-baixado/` e `index/[slug]/referencias/site-baixado/`.

## 3. Fallback Técnico (Scraper HTTP Resiliente)
Se o Asimov Site Downloader estiver inacessível, bloqueado por Cloudflare/WAF ou retornar erro:
- O script ativa automaticamente o fallback HTTP scraper;
- Resgata o HTML principal, stylesheets, scripts e até 30 imagens reais;
- Registra a ocorrência em `download-report.json`.
- **REGRA ABSOLUTA:** Nunca finja que o download foi concluído sem verificar o conteúdo em disco.

## 4. Estrutura de Pastas Gerada
```text
index/[slug]/ (e leads/[slug]/)
└── referencias/
    ├── site-baixado/
    │   ├── index.html
    │   ├── assets/ (ou imagens/, css/, js/)
    │   └── ...
    └── download-report.json
```

## 5. Checklist de Validação
Antes de prosseguir para as próximas etapas do Builder, certifique-se de que:
- [ ] `index.html` existe e possui tamanho superior a 500 bytes;
- [ ] Imagens e/ou arquivos de estilo foram capturados;
- [ ] `download-report.json` registrou status positivo.
