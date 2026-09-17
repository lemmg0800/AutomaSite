# Guia de Seleção de Design System para Agentes de IA

Este diretório contém **61 Design Systems prontos para produção** com assets locais, Tailwind CSS, ícones Lucide/Iconify e layouts responsivos completos.

Como agente encarregado de criar ou prototipar sites, **você deve consultar este catálogo antes de começar a codificar**.

---

## 🛠️ Como o Agente Deve Operar (Passo a Passo)

### 1. Encontrar o Design System Ideal

Você tem duas formas rápidas de encontrar a referência perfeita:

#### Opção A (Recomendada): Busca via Linha de Comando
Execute o script `search.py` informando os termos do projeto ou cliente:
```bash
python "search.py" --query "clinica de fisioterapia acolhedora e moderna" --json
python "search.py" --query "saas b2b logistica dashboard escuro" --top 3
python "search.py" --nicho "gastronomia" --tema claro
```
O script analisa nicho, clima, estilo visual, componentes e retorna os templates ranqueados com score de relevância.

#### Opção B: Consulta Direta a `catalog.json` ou `CATALOG.md`
Se não quiser rodar comandos, leia o arquivo `catalog.json` (apenas ~25KB) ou consulte a tabela resumida em `CATALOG.md`.

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

## 🎨 Como Reutilizar o Código dos Templates

1. **Tokens e Estilos:** Abra o arquivo `design-system.html` do template escolhido para ver:
   - Paleta de cores CSS (`:root` ou Tailwind config)
   - Fontes carregadas e tamanhos
   - Classes de efeito (ex: `.glass-panel`, `.glow`, sombras, bordas)
2. **Componentes e Seções:** Abra o arquivo `index.html` (ou `design-system.html`) e copie a marcação estrutural:
   - Header / Navbar responsiva
   - Hero Section com CTAs
   - Features / Grade de Benefícios
   - Prova Social / Depoimentos
   - Tabela de Preços / Planos
   - Footer e formulários
3. **Assets:** Verifique a pasta `assets/` de cada template para ícones e fontes já cacheados localmente.
