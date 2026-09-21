# Guia de Seleção de Design System para Agentes de IA

Este diretório contém **61 Design Systems prontos para produção** com assets locais, Tailwind CSS, ícones Lucide/Iconify e layouts responsivos completos.

Como agente encarregado de criar ou prototipar sites (**Diretor de Arte 2A** e **Platform Builder 2B**), **você deve consultar este catálogo antes de começar a codificar**.

---

## 🛠️ Como o Agente Deve Operar (Opções Disponíveis)

### Opção 1 (Recomendada no Pipeline Astro / Node): Consulta Programática TypeScript

Utilize a biblioteca unificada que já extrai os `ThemeTokens` validados por Zod e sugere os componentes Astro ideais:

```typescript
import { 
  queryDesignSystems, 
  getDesignSystemTokens, 
  recommendDesignSystemAndComponents 
} from '@/lib/design-systems.ts';

// 1. Busca semântica
const matches = queryDesignSystems({
  niche: 'arquitetura',
  vibe: 'luxo contemporâneo',
  theme: 'escuro',
  limit: 3
});

// 2. Recomendação completa unificada
const layout = recommendDesignSystemAndComponents({
  niche: 'odontologia',
  vibe: 'clean acolhedor',
  themePreference: 'claro'
});

// layout.tokens -> ThemeTokens prontos para o client.theme
// layout.recommendedComponents -> Hero, Services, Projects, CTA e Footer correspondentes
```

---

### Opção 2: Busca via CLI (Python ou NPM)

#### Via NPM (Integrado ao projeto Astro):
```bash
npm run design-systems:index
```

#### Via Python:
```bash
python "search.py" --query "clinica de fisioterapia acolhedora e moderna" --json
python "search.py" --query "saas b2b logistica dashboard escuro" --top 3
python "search.py" --nicho "gastronomia" --tema claro
```

---

### Opção 3: Consulta Direta a `catalog.json` ou `CATALOG.md`
Consulte o arquivo [`catalog.json`](file:///D:/projetos%20antigravity/Site%20automatico/Design%20System/catalog.json) enriquecido com o campo `tokens` (compatível com `src/clients/schema.ts`) ou a tabela em [`CATALOG.md`](file:///D:/projetos%20antigravity/Site%20automatico/Design%20System/CATALOG.md).

---

## 🧭 Matriz de Decisão Rápida por Nicho

| Se o usuário pedir... | Tema Recomendado | IDs de Referência Imediata |
| :--- | :--- | :--- |
| **Saúde, Medicina, Odonto, Estética, Farmácia** | Claro | `white-medical`, `cogni.aura.build` |
| **Arquitetura, Imóveis de Luxo, Interiores, Construção** | Claro ou Escuro | `luxury-real-estate-22.aura.build`, `elicyon.com`, `monolith-architecture.aura.build`, `architecture-studio.aura.build` |
| **Gastronomia, Restaurantes, Cafés, Culinária** | Claro | `savory-plate.aura.build` |
| **Barbearia, Estética Masculina, Tatuagem** | Escuro | `barbershop-landing-51.aura.build` |
| **Hotéis de Luxo, Spas, Retiros, Turismo** | Claro | `luxury-desert-retreat-1.aura.build`, `echelon.aura.build` |
| **Eventos Sociais Nobres, Galas, Casamentos** | Claro / Escuro | `echelon.aura.build` (claro para casamentos diurnos, escuro para galas noturnas) |
| **Cripto, Web3, DeFi, Trading, Blockchain** | Escuro | `aetheris-web3-72.aura.build`, `novachain-crypto-trading-protocol-1.aura.build` |
| **Cibersegurança, Redes, VPN, Defesa** | Escuro | `cybersecurity-saas-landing-page-template.aura.build`, `finex-internet.aura.build` |
| **SaaS B2B, ERP, CRM, Gestão Corporativa** | Claro / Escuro | `ai-saas-landing-27.aura.build`, `cadence-landing-19.aura.build`, `pulsedesk-saas.aura.build`, `axion-ai.aura.build` |
| **Inteligência Artificial, LLMs, Ferramentas Dev** | Escuro | `langfuse`, `open-source-llm-10.aura.build`, `ai-intelligence-saas.aura.build`, `saas-developer.aura.build` |
| **Portfólio Criativo, UX/UI Designer, Desenvolvedor** | Claro / Escuro | `digital-architect.aura.build`, `ai-automation-17.aura.build`, `creative-agency-template.aura.build` |
| **Fotografia, Arte Visual, Museus** | Claro | `aris-photograph.aura.build`, `green-museum`, `imagenation.art` |
| **Games, eSports, Jogos Mobile** | Escuro / Claro | `esports-tournament-96.aura.build`, `playverse.aura.build` |
| **Efeitos de Vidro / Glassmorphism Puro** | Escuro / Claro | `glass-effect2`, `glass-green-effect` |
| **Automotivo, Drones, Engenharia Mecânica** | Escuro / Claro | `volta-ev.aura.build`, `autonomous-drone-62.aura.build`, `aex.aura.build` |
| **Educação, Cursos, Autoescola, Treinamentos** | Claro | `condor-landingpage.aura.build`, `agent.humanacademy`, `genlabs.aura.build` |

---

## 🎨 Como Reutilizar os Tokens no Client Config

Os tokens gerados pelo `design-system-selector.ts` já satisfazem diretamente o schema de `theme` em `src/clients/data/[slug].ts`:

```typescript
export default {
  slug: "exemplo-cliente",
  status: "draft",
  business: { ... },
  theme: {
    primaryColor: "#262626",
    secondaryColor: "#141414",
    accentColor: "#e5e5e5",
    backgroundColor: "#0a0a0a",
    textColor: "#f8fafc",
    headingFont: "Plus Jakarta Sans",
    bodyFont: "Inter",
    borderRadius: "none",
    mode: "dark",
    backgroundEffect: "prism",
    enableParallax: true
  },
  pages: [ ... ]
};
```
