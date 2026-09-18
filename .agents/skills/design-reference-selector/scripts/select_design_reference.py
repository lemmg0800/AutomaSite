import sys
import os
import json
import argparse
from pathlib import Path

parser = argparse.ArgumentParser(description="Selecionar referências de Design System existentes")
parser.add_argument("--nicho", required=True, help="Nicho ou segmento do lead")
parser.add_argument("--slug", required=True, help="Slug do cliente")
parser.add_argument("--tema", choices=["claro", "escuro"], default=None, help="Preferência de tema claro ou escuro")
parser.add_argument("--estilo", default=None, help="Estilo visual desejado")
args = parser.parse_args()

base_dir = Path(os.getcwd())
ds_dir = base_dir / "Design System"
catalog_path = ds_dir / "catalog.json"
search_script = ds_dir / "search.py"

selected_ds = []

# Tenta usar o buscador inteligente se search.py existir
if search_script.exists():
    try:
        sys.path.insert(0, str(ds_dir))
        import search
        selected_ds = search.search_templates(
            query=args.nicho,
            tema=args.tema,
            nicho=args.nicho,
            estilo=args.estilo,
            top=3
        )
    except Exception as e:
        print(f"[Aviso] Falha ao importar search.py ({e}). Lendo catalog.json diretamente...")

# Fallback: Leitura direta de catalog.json
if not selected_ds and catalog_path.exists():
    with open(catalog_path, "r", encoding="utf-8") as f:
        catalog = json.load(f)
        q = args.nicho.lower()
        for item in catalog:
            nichos = " ".join(item.get("nichos", [])).lower()
            titulo = item.get("titulo", "").lower()
            if q in nichos or q in titulo:
                selected_ds.append(item)
        if not selected_ds and catalog:
            selected_ds = catalog[:3]

primary = selected_ds[0] if selected_ds else {}

result = {
  "slug": args.slug,
  "nicho": args.nicho,
  "selected_at": str(Path(__file__).stat().st_mtime),
  "primary_reference": {
    "id": primary.get("id"),
    "tema": primary.get("tema"),
    "titulo": primary.get("titulo"),
    "pasta": primary.get("caminho"),
    "pagina_principal": primary.get("pagina_principal"),
    "design_system_page": primary.get("design_system_page"),
    "paleta_predominante": primary.get("paleta_predominante", []),
    "fontes": primary.get("fontes", []),
    "estilo_visual": primary.get("estilo_visual", []),
    "componentes_chave": primary.get("componentes_chave", []),
    "melhor_para": primary.get("melhor_para", "")
  },
  "alternative_references": [
    {
      "id": item.get("id"),
      "tema": item.get("tema"),
      "titulo": item.get("titulo"),
      "paleta": item.get("paleta_predominante", [])
    } for item in selected_ds[1:3]
  ],
  "visual_direction_recommendations": {
    "recommended_theme": primary.get("tema", "claro"),
    "recommended_fonts": {
      "heading": primary.get("fontes", ["Plus Jakarta Sans"])[0] if primary.get("fontes") else "Plus Jakarta Sans",
      "body": primary.get("fontes", ["Inter"])[-1] if primary.get("fontes") else "Inter"
    },
    "recommended_colors": {
      "primary": primary.get("paleta_predominante", ["#0f172a"])[0] if primary.get("paleta_predominante") else "#0f172a",
      "secondary": primary.get("paleta_predominante", ["#1e293b"])[1] if len(primary.get("paleta_predominante", [])) > 1 else "#1e293b",
      "accent": primary.get("paleta_predominante", ["#2563eb"])[2] if len(primary.get("paleta_predominante", [])) > 2 else "#2563eb"
    },
    "recommended_effects": primary.get("efeitos_visuais", ["fade-in", "bordas suaves"]),
    "guidelines": "NÃO crie um designsystem.html novo do zero. Use os tokens e estilos acima adaptados aos componentes Astro da plataforma."
  }
}

out_leads = base_dir / "leads" / args.slug / "referencias" / "design-system-selected.json"
out_index = base_dir / "index" / args.slug / "referencias" / "design-system-selected.json"

for p in [out_leads.parent, out_index.parent]:
    p.mkdir(parents=True, exist_ok=True)

with open(out_leads, "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

with open(out_index, "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"[Design Reference Selector] Sucesso! Referência primária: {primary.get('id')} ({primary.get('titulo')})")
print(f"   Salvo em: leads/{args.slug}/referencias/design-system-selected.json")
print(f"   Salvo em: index/{args.slug}/referencias/design-system-selected.json")
