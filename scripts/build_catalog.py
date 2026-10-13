#!/usr/bin/env python3
"""Turn scraped styihong products into the website catalog JSON."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "styihong" / "products.json"
OUT = ROOT / "src" / "data" / "catalog.json"

CATEGORY_MAP = {
    "套装系列": "complete-sets",
    "口红系列": "lipstick-packaging",
    "眼线/睫毛瓶系列": "mascara-packaging",
    "唇彩系列": "lip-gloss-packaging",
    "眼影盒系列": "eyeshadow-packaging",
    "粉盒系列": "powder-compacts",
    "散粉盒系列": "loose-powder-packaging",
    "膏霜瓶/乳液瓶": "cream-jars-lotion-bottles",
    "配件": "accessories",
}

SLUG_RE = re.compile(r"[^a-z0-9]+")


def slugify(value: str) -> str:
    text = SLUG_RE.sub("-", (value or "").lower()).strip("-")
    return text[:80] or ""


def image_public(rel: str | None) -> str:
    if not rel:
        return ""
    return "/catalog/" + rel.replace("images/", "", 1)


def main() -> None:
    items = json.loads(SOURCE.read_text(encoding="utf-8"))
    used: set[str] = set()
    catalog = []
    for raw in items:
        category = CATEGORY_MAP.get(raw.get("category") or "")
        if not category:
            continue
        local = raw.get("local_images") or {}
        base = slugify(raw.get("code") or "") or slugify(raw.get("title") or "") or f"p-{raw['id']}"
        slug = base
        if slug in used:
            slug = f"{base}-{raw['id']}"
        used.add(slug)
        title = (raw.get("title") or raw.get("code") or slug).strip()
        catalog.append(
            {
                "id": raw["id"],
                "slug": slug,
                "code": (raw.get("code") or "").strip(),
                "title": title,
                "category": category,
                "subcategory": (raw.get("subcategory") or "").strip(),
                "size": (raw.get("size") or "").strip(),
                "craft": (raw.get("craft") or "").strip(),
                "accessories": (raw.get("accessories") or "").strip(),
                "updatedAt": (raw.get("updated_at") or "").strip(),
                "description": (raw.get("description_text") or "").strip(),
                "images": {
                    "list": image_public(local.get("list")),
                    "main": image_public(local.get("main")) or image_public(local.get("list")),
                    "extra": [image_public(p) for p in (local.get("description") or []) if p],
                },
            }
        )
    catalog.sort(key=lambda item: int(item["id"]), reverse=True)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(catalog)} items -> {OUT}")


if __name__ == "__main__":
    main()
