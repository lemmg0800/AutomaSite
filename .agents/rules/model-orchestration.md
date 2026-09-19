---
trigger: always_on
description: Alocação estrita de modelos Gemini para cada agente do pipeline
---

# Alocação de Modelos dos Agentes

- **Agente 2 (Builder - Recriação de Sites):** Usa EXCLUSIVAMENTE o modelo `Gemini 3.8 High` (`gemini-3.8-high`).
- **Agente 1 (Prospector):** Configurado para o modelo `Gemini 3.6 High` (`gemini-3.6-high`).
- **Auditor Visual:** Configurado para o modelo `Gemini 3.6 High` (`gemini-3.6-high`).
- **Agente 3 (Comercial):** Configurado para o modelo `Gemini 3.6 High` (`gemini-3.6-high`).

Consulte [`.agents/models.json`](file:///D:/projetos%20antigravity/Site%20automatico/.agents/models.json) para a tabela de configuração completa.
