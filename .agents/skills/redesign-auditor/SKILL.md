---
name: redesign-auditor
description: Validação técnica visual e captura automatizada de screenshots em alta resolução (Desktop 1280x800 e Mobile 390x844) do site demonstrativo gerado.
---

# Skill: Redesign Auditor

Esta skill realiza a validação do site construído pelo Builder, assegurando ausência de quebras de layout, boa renderização em diferentes resoluções e registrando as evidências visuais em imagem PNG para compor a apresentação comercial.

## 1. Capturas Obrigatórias:
- `leads/[slug]/redesign/screenshots/home-desktop.png` (1280x800)
- `leads/[slug]/redesign/screenshots/home-mobile.png` (390x844)

## 2. Execução Automatizada:
```bash
node .agents/skills/redesign-auditor/scripts/capture_redesign_shots.js [slug-da-empresa]
```