# Diretrizes de Modelos de Inteligência Artificial para Agentes

Esta regra define obrigatoriamente a distribuição e alocação de modelos de IA para cada agente do pipeline no workspace:

## 1. Mapeamento de Modelos por Agente

| Agente | Responsabilidade | Modelo Designado | Justificativa |
| :--- | :--- | :--- | :--- |
| **Diretor de Arte (Agente 2A)** | **Direção Estética & Design Systems** | `Gemini 3.8 High` (`gemini-3.8-high`) | Consulta semântica aos 61 Design Systems, conceito visual anti-clone e tokens. |
| **Platform Builder (Agente 2B)** | **Engenharia Frontend & 1ª Dobra** | `Gemini 3.8 High` (`gemini-3.8-high`) | Geração de código Astro/Tailwind sob medida e capricho na 1ª dobra (Hero). |
| **Prospector (Agente 1)** | Prospecção e Auditoria Técnica | `Gemini 3.6 High` (`gemini-3.6-high`) | Mapeamento de mercado, auditoria técnica e PageSpeed. |
| **Company Intelligence** | Pesquisa Externa & Enriquecimento | `Gemini 3.6 High` (`gemini-3.6-high`) | Resolução de identidade, CNPJ, contatos auditados, e-mail comercial e Business Strength. |
| **Auditor Visual** | Auditoria Estética e Baseline | `Gemini 3.6 High` (`gemini-3.6-high`) | Diagnóstico visual e gate checks pré e pós redesign. |
| **Comercial (Agente 3)** | Dossiê e Abordagens Comerciais | `Gemini 3.6 High` (`gemini-3.6-high`) | Copywriting consultivo, redação de emails e scripts de WhatsApp nativos. |

---

## 2. Regra Inegociável

- **Apenas os agentes de criação estética e engenharia frontend (Diretor de Arte e Platform Builder) utilizam o Gemini 3.8 High.**
- Os demais agentes (Prospector, Company Intelligence, Auditor Visual e Comercial) operam exclusivamente com o **Gemini 3.6 High**.
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

