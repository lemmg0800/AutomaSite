# Diretrizes de Modelos de Inteligência Artificial para Agentes

Esta regra define obrigatoriamente a distribuição e alocação de modelos de IA para cada agente do pipeline no workspace:

## 1. Mapeamento de Modelos por Agente

| Agente | Responsabilidade | Modelo Designado | Justificativa |
| :--- | :--- | :--- | :--- |
| **Builder (Agente 2)** | **Recriação e Personalização do Site** | `Gemini 3.8 High` (`gemini-3.8-high`) | Exclusividade para criação visual: geração de código Astro/Tailwind, assimilação de design systems e acabamento estético de alta fidelidade. |
| **Prospector (Agente 1)** | Prospecção e Auditoria Técnica | `Gemini 3.6 High` (`gemini-3.6-high`) | Análise rápida e eficiente de mercado, coleta de dados, PageSpeed e qualificação. |
| **Company Intelligence** | Pesquisa Externa & Enriquecimento | `Gemini 3.6 High` (`gemini-3.6-high`) | Resolução de identidade, CNPJ, contatos auditados, e-mail comercial, redes e Business Strength. |
| **Auditor Visual** | Auditoria Estética e Baseline | `Gemini 3.6 High` (`gemini-3.6-high`) | Diagnóstico visual e gate checks pré e pós redesign. |
| **Comercial (Agente 3)** | Dossiê e Abordagens Comerciais | `Gemini 3.6 High` (`gemini-3.6-high`) | Copywriting consultivo, redação de emails e scripts de WhatsApp no formato nativo. |

---

## 2. Regra Inegociável

- **Nenhum outro agente além do Builder deve utilizar o Gemini 3.8 High.**
- Ao invocar subagentes ou executar tarefas automáticas de recriação de site, direcione os recursos de computação do Gemini 3.8 High estritamente para o **Builder**.
- Os demais agentes (Prospector, Auditor Visual e Comercial) devem operar sempre com o **Gemini 3.6 High**.
- A configuração central está declarada em [`.agents/models.json`](file:///D:/projetos%20antigravity/Site%20automatico/.agents/models.json).

---

## 3. Diretriz Mandatória do Builder: Capricho Máximo na Primeira Dobra

> 💎 **DIRETRIZ DA PRIMEIRA DOBRA:**  
> *"Capriche, especialmente na primeira dobra, que deve/pode conter imagens que encontrar nos assets do cliente, animações, efeitos em botoes, backgrounds, detalhes e animações de surgimento, glow... A primeira dobra será a demonstração das capacidades criativas. Capriche muito aqui."*

### Requisitos Práticos para a 1ª Dobra (Hero):
1. **Assets do Cliente:** Resgatar e incorporar fotos autênticas da empresa, equipe e estrutura do site baixado (`referencias/site-baixado/`).
2. **Animações de Surgimento:** Efeitos de revelação suave (fade/slide staggered) para títulos, textos e elementos gráficos.
3. **Micro-interações em Botões:** Hover com gradiente dinâmico, brilho sutil (shimmer), sombras coloridas e CTA de WhatsApp com destaque visual imediato.
4. **Backgrounds Ambientais:** Gradientes mesh, luzes difusas (*ambient glow*), texturas sutis e painéis com desfoque de vidro (`.glass-panel`).
5. **Detalhes e Credibilidade:** Badges flutuantes com avaliações do Google (estrelas douradas), estatísticas reais e selos de excelência.
6. **Eject Livre:** Caso necessário para atingir o nível visual exigido, o Builder deve clonar o Hero (`npm run client:eject -- --client [slug] --component hero/Hero01`) e customizá-lo sem restrições.

