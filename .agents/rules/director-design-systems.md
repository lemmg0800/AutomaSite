---
trigger: always_on
description: Regra de consulta e extração de tokens dos 61 Design Systems para Diretor de Arte (2A) e Builder (2B)
---

# Regra de Seleção de Design System (Diretor de Arte & Builder)

O Diretor de Arte (Agente 2A) e o Platform Builder (Agente 2B) devem consultar os **61 Design Systems de Produção** para extrair identidade visual autêntica, paleta de cores e tipografia de alto padrão para cada cliente.

---

## 1. Ponto de Entrada Programático (TypeScript / Node)

Em vez de criar paletas arbitrárias, importe e consulte diretamente o catálogo enriquecido:

```typescript
import { 
  queryDesignSystems, 
  getDesignSystemTokens, 
  recommendDesignSystemAndComponents 
} from '@/lib/design-systems.ts';

// 1. Recomendação unificada (Design System + Tokens Zod + Componentes Astro)
const recommendation = recommendDesignSystemAndComponents({
  niche: client.business.niche,
  vibe: 'luxury-minimal',
  themePreference: 'dark' // ou 'light'
});

// 2. Injetar diretamente no client config:
// client.theme = recommendation.tokens;
```

---

## 2. Arquivos de Referência

1. **Biblioteca em TypeScript:** [`src/lib/design-systems.ts`](file:///D:/projetos%20antigravity/Site%20automatico/src/lib/design-systems.ts)
2. **Motor de Seleção Semântica:** [`Design System/design-system-selector.ts`](file:///D:/projetos%20antigravity/Site%20automatico/Design%20System/design-system-selector.ts)
3. **Catálogo Completo Enriquecido:** [`Design System/catalog.json`](file:///D:/projetos%20antigravity/Site%20automatico/Design%20System/catalog.json) e [`Design System/design-systems-meta.ts`](file:///D:/projetos%20antigravity/Site%20automatico/Design%20System/design-systems-meta.ts)

---

## 3. Diretriz Anti-Clone

- Nunca utilize o mesmo Design System repetidamente para clientes do mesmo nicho.
- O seletor possui 61 referências completas: varie entre os arquétipos editoriais, bento-tech, luxo escuro e clean médico.
- Os tokens retornados já são 100% validados contra o `ThemeTokensSchema` do Zod.
