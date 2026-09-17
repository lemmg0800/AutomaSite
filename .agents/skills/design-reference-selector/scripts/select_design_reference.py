import sys
import os
import json
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--nicho", required=True)
parser.add_argument("--slug", required=True)
args = parser.parse_args()

base_dir = os.getcwd()
ds_catalog_path = os.path.join(base_dir, "Design System", "catalog.json")

selected_ds = []
if os.path.exists(ds_catalog_path):
    with open(ds_catalog_path, "r", encoding="utf-8") as f:
        catalog = json.load(f)
        query = args.nicho.lower()
        for item in catalog:
            name = item.get("name", "").lower()
            tags = " ".join(item.get("tags", [])).lower()
            desc = item.get("description", "").lower()
            if query in name or query in tags or query in desc:
                selected_ds.append(item)
        
        if not selected_ds and catalog:
            selected_ds = catalog[:3]

result = {
    "slug": args.slug,
    "nicho": args.nicho,
    "selected_design_systems": selected_ds[:3],
    "recommendation": "Utilizar os tokens tipográficos e paleta de cores das referências selecionadas."
}

out_leads = os.path.join(base_dir, "leads", args.slug, "referencias", "design-system-selected.json")
out_index = os.path.join(base_dir, "index", args.slug, "referencias", "design-system-selected.json")

for p in [os.path.dirname(out_leads), os.path.dirname(out_index)]:
    os.makedirs(p, exist_ok=True)

with open(out_leads, "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

with open(out_index, "w", encoding="utf-8") as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"[Design Reference Selector] Referências selecionadas para '{args.nicho}': {[item.get('name') for item in selected_ds[:3]]}")
