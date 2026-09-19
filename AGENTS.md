# Diretrizes de Modelos de Inteligência Artificial para Agentes

Esta regra define obrigatoriamente a distribuição e alocação de modelos de IA para cada agente do pipeline no workspace:

## 1. Mapeamento de Modelos por Agente

| Agente | Responsabilidade | Modelo Designado | Justificativa |
| :--- | :--- | :--- | :--- |
| **Builder (Agente 2)** | **Recriação e Personalização do Site** | `Gemini 3.8 High` (`gemini-3.8-high`) | Exclusividade para o modelo de raciocínio mais avançado: geração de código Astro/Tailwind, assimilação de design systems e acabamento estético de alta fidelidade. |
| **Prospector (Agente 1)** | Prospecção e Auditoria Técnica | `Gemini 3.6 High` (`gemini-3.6-high`) | Análise rápida e eficiente de mercado, coleta de dados, PageSpeed e qualificação. |
| **Auditor Visual** | Auditoria Estética e Baseline | `Gemini 3.6 High` (`gemini-3.6-high`) | Diagnóstico visual e gate checks pré e pós redesign. |
| **Comercial (Agente 3)** | Dossiê e Abordagens Comerciais | `Gemini 3.6 High` (`gemini-3.6-high`) | Copywriting consultivo, redação de emails e scripts de WhatsApp no formato nativo. |

---

## 2. Regra Inegociável

- **Nenhum outro agente além do Builder deve utilizar o Gemini 3.8 High.**
- Ao invocar subagentes ou executar tarefas automáticas de recriação de site, direcione os recursos de computação do Gemini 3.8 High estritamente para o **Builder**.
- Os demais agentes (Prospector, Auditor Visual e Comercial) devem operar sempre com o **Gemini 3.6 High**.
- A configuração central está declarada em [`.agents/models.json`](file:///D:/projetos%20antigravity/Site%20automatico/.agents/models.json).
