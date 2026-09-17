---
name: website-auditor
description: Auditoria visual, UX, mobile, conversão, confiança, SEO técnico e captura de screenshots reais de websites para qualificação comercial.
---

# Skill: Website Auditor

Esta skill guia o Prospector na realização de auditorias visuais e técnicas profundas em websites de empresas qualificadas.

## 1. Captura de Screenshots Reais
Para leads de alta oportunidade, execute o script de captura:
```bash
node .agents/skills/website-auditor/scripts/capture_screenshots.js <URL_DO_SITE> leads/<slug>/screenshots
```
- Salva `site-desktop.png` (1280x800) e `site-mobile.png` (390x844).
- Se a captura falhar por restrição técnica, anote: `"Screenshot indisponível neste ambiente"` (nunca use imagens falsas).

## 2. Dimensões de Avaliação (Notas de 0 a 10)

### A. Design Visual (0 a 10)
- **Modernidade:** Parece um site moderno (2025/2026) ou remete a templates antigos de 2012-2016?
- **Hierarquia Visual:** O olho do visitante sabe para onde olhar primeiro?
- **Tipografia e Cores:** As fontes são legíveis? A paleta de cores combina com o segmento?
- **Fotografia:** Usa fotos reais da empresa/serviço ou banco de imagens genérico e artificial?
- **Primeira Dobra:** A proposta de valor está clara nos primeiros 3 segundos sem scroll?

### B. Responsividade & Mobile (0 a 10)
- O menu abre e fecha suavemente no mobile?
- Textos ficam pequenos demais ou grandes demais?
- Há elementos com overflow (scroll horizontal quebrado)?
- Os botões são fáceis de clicar com o polegar?
- O botão de WhatsApp/Agendamento está fixo ou visível no celular?

### C. Experiência do Usuário — UX (0 a 10)
- Facilidade para entender o que a empresa oferece.
- Estrutura clara de serviços com descrições objetivas.
- Facilidade de encontrar endereço físico e horários.
- Carregamento fluido entre seções sem saltos visuais.

### D. Foco em Conversão (0 a 10)
- Presença de CTA (Call to Action) principal evidente (ex: "Agendar Avaliação", "Falar no WhatsApp").
- Botão de contato direto em múltiplos pontos estratégicos da página.
- Formulários curtos e objetivos.
- Prova social: depoimentos com foto/nome, notas do Google, fotos de antes/depois quando aplicável.

### E. Elementos de Confiança (0 a 10)
- Certificado SSL ativo (HTTPS).
- Domínio próprio profissional (sem `.wixsite.com`, `.wordpress.com`).
- Informações institucionais visíveis: Razão Social, CNPJ, endereço completo.
- Fotos reais da equipe e do espaço de atendimento.

### F. SEO Básico On-Page (0 a 10)
- Tag `<title>` otimizada com o serviço + cidade (ex: "Clínica de Estética em Florianópolis | Nome").
- Meta description atrativa com chamada para ação.
- Estrutura hierárquica de headings (`<h1>`, `<h2>`).
- Velocidade de carregamento e indexabilidade.