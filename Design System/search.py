#!/usr/bin/env python3
"""
search.py - Buscador e Recomendador Semântico de Design Systems para Agentes

Uso via linha de comando:
    python search.py --query "site de dentista clean com efeito de vidro"
    python search.py --nicho "barbearia" --tema escuro
    python search.py --estilo "minimalista" --top 5
    python search.py --json --query "tecnologia IA"
"""

import json
import argparse
import re
import sys
from pathlib import Path

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8')
except Exception:
    pass

BASE_DIR = Path(__file__).resolve().parent
CATALOG_PATH = BASE_DIR / "catalog.json"

STOP_WORDS = {
    "de", "da", "do", "das", "dos", "e", "em", "para", "com", "sem", "por", "a", "o",
    "as", "os", "um", "uma", "uns", "umas", "que", "no", "na", "nos", "nas", "ou",
    "se", "site", "sites", "pagina", "criar", "fazer", "busca", "buscar",
    "the", "an", "and", "or", "for", "with", "to", "in", "of"
}

def normalize_text(text: str) -> str:
    text = text.lower()
    replacements = {
        "á": "a", "à": "a", "ã": "a", "â": "a",
        "é": "e", "ê": "e",
        "í": "i",
        "ó": "o", "õ": "o", "ô": "o",
        "ú": "u", "ü": "u",
        "ç": "c"
    }
    for orig, rep in replacements.items():
        text = text.replace(orig, rep)
    return text

def calculate_score(entry: dict, full_query: str, query_terms: list, req_theme: str = None, req_niche: str = None, req_style: str = None) -> float:
    score = 0.0
    
    # Theme hard filter
    if req_theme:
        if entry["tema"].lower() != req_theme.lower():
            return 0.0
        else:
            score += 15.0

    # Niche filter / boost
    if req_niche:
        norm_niche = normalize_text(req_niche)
        for n in entry.get("nichos", []):
            if norm_niche in normalize_text(n):
                score += 35.0
                break

    # Style filter / boost
    if req_style:
        norm_style = normalize_text(req_style)
        for s in entry.get("estilo_visual", []):
            if norm_style in normalize_text(s):
                score += 30.0
                break

    # Direct phrase matching (high priority)
    norm_query = normalize_text(full_query)
    for n in entry.get("nichos", []):
        if normalize_text(n) in norm_query or norm_query in normalize_text(n):
            score += 30.0
    for s in entry.get("estilo_visual", []) + entry.get("efeitos_visuais", []):
        if normalize_text(s) in norm_query:
            score += 25.0

    # Term matching
    for term in query_terms:
        norm_term = normalize_text(term)
        if len(norm_term) < 2 or norm_term in STOP_WORDS:
            continue
        
        # Word in nichos
        for n in entry.get("nichos", []):
            norm_n = normalize_text(n)
            if norm_term == norm_n:
                score += 25.0
            elif norm_term in norm_n:
                score += 15.0
                
        # Word in visual style / vibe
        for s in entry.get("estilo_visual", []) + entry.get("clima_sensacao", []):
            norm_s = normalize_text(s)
            if norm_term == norm_s:
                score += 18.0
            elif norm_term in norm_s:
                score += 10.0

        # Word in effects / components
        for c in entry.get("efeitos_visuais", []) + entry.get("componentes_chave", []):
            norm_c = normalize_text(c)
            if norm_term in norm_c:
                score += 12.0

        # Word in title, id, or best_for
        if norm_term in normalize_text(entry.get("id", "")):
            score += 15.0
        if norm_term in normalize_text(entry.get("titulo", "")):
            score += 12.0
        if norm_term in normalize_text(entry.get("melhor_para", "")):
            score += 10.0

    return score

def search_templates(query: str = "", tema: str = None, nicho: str = None, estilo: str = None, top: int = 3):
    if not CATALOG_PATH.exists():
        print(f"Erro: Arquivo {CATALOG_PATH} não encontrado.", file=sys.stderr)
        return []

    with open(CATALOG_PATH, encoding="utf-8") as f:
        catalog = json.load(f)

    # Tokenize query filtering out stop words
    raw_terms = [w.strip() for w in re.split(r"[\s,\+\-/]+", query) if len(w.strip()) > 1] if query else []
    terms = [w for w in raw_terms if normalize_text(w) not in STOP_WORDS]
    
    scored = []
    for item in catalog:
        s = calculate_score(item, query, terms, req_theme=tema, req_niche=nicho, req_style=estilo)
        if s > 0 or (not terms and not nicho and not estilo and not tema):
            scored.append((s, item))

    scored.sort(key=lambda x: x[0], reverse=True)
    return [item for _, item in scored[:top]]

def main():
    parser = argparse.ArgumentParser(description="Buscar design systems ideais no catálogo")
    parser.add_argument("--query", "-q", type=str, default="", help="Texto livre de busca (ex: 'dentista com vidro clean')")
    parser.add_argument("--tema", "-t", type=str, choices=["claro", "escuro"], default=None, help="Filtrar por tema claro ou escuro")
    parser.add_argument("--nicho", "-n", type=str, default=None, help="Filtrar por nicho específico")
    parser.add_argument("--estilo", "-e", type=str, default=None, help="Filtrar por estilo visual")
    parser.add_argument("--top", "-k", type=int, default=3, help="Número de resultados para retornar (padrão: 3)")
    parser.add_argument("--json", action="store_true", help="Retornar resultado formatado em JSON para consumo por agentes")

    args = parser.parse_args()
    results = search_templates(args.query, tema=args.tema, nicho=args.nicho, estilo=args.estilo, top=args.top)

    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=2))
        return

    if not results:
        print("Nenhum template encontrado com os critérios fornecidos.")
        return

    print(f"\n🎯 TOP {len(results)} DESIGN SYSTEMS RECOMENDADOS:\n" + "="*50)
    for i, item in enumerate(results, start=1):
        print(f"#{i} [{item['tema'].upper()}] {item['id']}")
        print(f"   Título: {item['titulo']}")
        print(f"   Pasta: {item['caminho']}")
        print(f"   Arquivo Principal: {item['pagina_principal']}")
        print(f"   Nichos: {', '.join(item['nichos'][:5])}")
        print(f"   Estilo: {', '.join(item['estilo_visual'])}")
        print(f"   Cores: {', '.join(item['paleta_predominante'][:4])}")
        print(f"   Melhor para: {item['melhor_para']}")
        print(f"   Componentes: {', '.join(item['componentes_chave'][:3])}")
        print("-" * 50)

if __name__ == "__main__":
    main()
