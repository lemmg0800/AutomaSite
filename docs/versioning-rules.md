# Regras de Versionamento e Proteção contra Regressão

1. **Imutabilidade de Variantes em Produção:**
   - Se um componente (ex: `Hero01`) estiver em uso por qualquer cliente com status `published`, nenhuma alteração que quebre layout ou propriedades pode ser aplicada.
2. **Correções Compatíveis:**
   - Melhorias de acessibilidade (WCAG), correções de bugs técnicos ou segurança são permitidas, desde que não quebrem o design dos clientes já publicados.
3. **Novas Demandas Visuais:**
   - Sempre que um novo cliente exigir uma estrutura diferente, crie uma nova variante (ex: `Hero04.astro`) e registre-a em `src/components/registry.ts`.
4. **Auditoria Obrigatória:**
   - Execute `npm run client:audit` antes de commitar qualquer alteração em componentes.