---
trigger: always_on
description: Regra de seleção semântica de componentes para o Agente Builder e Diretor de Arte
---

# Regra de Seleção Semântica de Componentes (Component Registry)

O Agente Builder (2B) e o Diretor de Arte (2A) **NUNCA devem adivinhar** ou recorrer repetidamente a layouts genéricos (ex: `Hero01` para todos os clientes).

Antes de gerar ou refatorar o arquivo `src/clients/data/[slug].ts`, o agente deve consultar o **Component Registry** para selecionar variantes que correspondam ao nicho, nível de sofisticação visual e energia da marca auditada.

---

## 1. Fonte da Verdade dos Componentes

1. **Manifesto JSON:** [`src/components/component-registry.json`](file:///D:/projetos%20antigravity/Site%20automatico/src/components/component-registry.json)
2. **Metadados Tipados:** [`src/components/components-meta.ts`](file:///D:/projetos%20antigravity/Site%20automatico/src/components/components-meta.ts)
3. **Mecanismo Seletor:** [`src/components/selector.ts`](file:///D:/projetos%20antigravity/Site%20automatico/src/components/selector.ts)

---

## 2. Matriz de Decisão Rápida por Nicho e Vibe

| Nicho Auditado | Vibe Estética | Hero Recomendado | Seção de Destaque / Bento | Background / Efeito |
| :--- | :--- | :--- | :--- | :--- |
| **Arquitetura & Interiores** | `luxury-minimal`, `ambient-glow` | `hero/Hero04`, `hero/Hero05` ou `hero/Hero11` | `bento/Bento01`, `bento/Bento06` ou `bento/Bento11` | `MeshGradientBackground` + `ParallaxScroll` |
| **Medicina & Cirurgia** | `editorial-clean`, `authority` | `hero/Hero01` ou `hero/Hero07` | `benefits/Features01`, `benefits/Features07` | `MeshGradientBackground` |
| **Advocacia & Tributário** | `editorial-clean`, `corporate` | `hero/Hero01` ou `hero/Hero09` | `benefits/Features02`, `bento/Bento08`, `bento/Bento12` | `DotMatrixBackground` + `Footer02` (OAB) |
| **Startups & High-Tech** | `high-tech`, `bold` | `hero/Hero06` ou `hero/Hero10` | `bento/Bento07`, `bento/Bento10`, `benefits/Features06` | `DotMatrixBackground` ou `PrismBackground` |
| **Serviço Local & Urgência** | `local-utilitarian`, `direct` | `hero/Hero03` ou `hero/Hero08` | `benefits/Features03`, `benefits/Features05`, `bento/Bento04` | `none` |
| **Engenharia & Obras** | `clean-corporate`, `precision` | `hero/Hero06` ou `hero/Hero07` | `bento/Bento03`, `bento/Bento09`, `benefits/Features08` | `DotMatrixBackground` |

---

## 3. Diretriz Mandatória de 1ª Dobra (Hero)

- Ao selecionar `hero/Hero04`, **SEMPRE** vincule fotos autênticas do cliente em `content.image` (recuperadas de `referencias/site-baixado/`).
- Preencha `content.stats` com métricas reais obtidas na auditoria da empresa (tempo de mercado, número de clientes/obras).
- Se o componente padrão não suportar a sofisticação necessária, **execute o eject** imediatamente:
  `npm run client:eject -- --client [slug] --component hero/Hero04`
