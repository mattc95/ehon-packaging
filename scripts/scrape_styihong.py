#!/usr/bin/env python3
"""Crawl styihong.com product catalog (GBK ASP site) into data/styihong/."""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from threading import Lock
from urllib.parse import urlencode, urljoin

import requests

BASE = "http://www.styihong.com/"
ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "data" / "styihong"
IMG_DIR = OUT_DIR / "images"
JSONL_PATH = OUT_DIR / "products.jsonl"
JSON_PATH = OUT_DIR / "products.json"
CSV_PATH = OUT_DIR / "products.csv"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) EHONCatalogBot/1.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
}

CATEGORIES = [
    {"big": "套装系列", "small": ""},
    {"big": "口红系列", "small": ""},
    {"big": "眼线/睫毛瓶系列", "small": ""},
    {"big": "唇彩系列", "small": ""},
    {"big": "眼影盒系列", "small": ""},
    {"big": "粉盒系列", "small": ""},
    {"big": "散粉盒系列", "small": ""},
    {"big": "膏霜瓶/乳液瓶", "small": ""},
    {"big": "配件", "small": ""},
    {"big": "配件", "small": "泵头"},
    {"big": "配件", "small": "粉扑"},
    {"big": "配件", "small": "刷子-1"},
    {"big": "配件", "small": "刷头"},
]

PROLI_RE = re.compile(
    r"<dl class='proli'><dt><a href='ProductShow\.asp\?ArticleID=(\d+)' "
    r"title='([^']*)'[^>]*>\s*<img src='([^']+)'",
    re.I,
)
TOTAL_RE = re.compile(r"共(\d+)个产品")
FIELD_RE = re.compile(r"<li>([^：:<]+)[:：](.*?)</li>", re.S)
TITLE_RE = re.compile(r"<div id=\"proInfo\">\s*<h2>(.*?)</h2>", re.S)
MAIN_IMG_RE = re.compile(
    r'<div id="proPic_box">.*?<img src="([^"]+)"',
    re.S | re.I,
)
DESC_RE = re.compile(
    r'<div class="Product_ExTitle">产品说明</div>\s*<div>(.*?)</div>',
    re.S,
)
IMG_SRC_RE = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.I)

session = requests.Session()
session.headers.update(HEADERS)
print_lock = Lock()
io_lock = Lock()


def log(msg: str) -> None:
    with print_lock:
        print(msg, flush=True)


def gbk_url(path: str, params: dict) -> str:
    qs = urlencode({k: v for k, v in params.items() if v is not None}, encoding="gbk")
    return urljoin(BASE, path) + ("?" + qs if qs else "")


def fetch_html(url: str, retries: int = 4) -> str:
    last_err = None
    for attempt in range(retries):
        try:
            resp = session.get(url, timeout=40)
            resp.raise_for_status()
            resp.encoding = "gbk"
            return resp.text
        except Exception as exc:  # noqa: BLE001
            last_err = exc
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"Failed to fetch {url}: {last_err}")


def clean_text(value: str) -> str:
    return html.unescape(value or "").replace("\xa0", " ").strip()


def abs_url(src: str) -> str:
    src = src.strip()
    if src.startswith("http://") or src.startswith("https://"):
        return src
    return urljoin(BASE, src.lstrip("/"))


def listing_url(big: str, small: str, page: int) -> str:
    params = {"BigClassName": big, "page": page}
    if small:
        params["Smallclassname"] = small
    else:
        params["SmallClassName"] = ""
    return gbk_url("Product.asp", params)


def collect_listings() -> dict[str, dict]:
    products: dict[str, dict] = {}
    for cat in CATEGORIES:
        big, small = cat["big"], cat["small"]
        page = 1
        expected = None
        while True:
            url = listing_url(big, small, page)
            html = fetch_html(url)
            if expected is None:
                m = TOTAL_RE.search(html)
                expected = int(m.group(1)) if m else 0
                log(f"[list] {big}{' / ' + small if small else ''} 共 {expected} 个，开始翻页")
            items = PROLI_RE.findall(html)
            if not items:
                break
            for article_id, title, img in items:
                prev = products.get(article_id)
                record = {
                    "id": article_id,
                    "title": clean_text(title),
                    "category": big,
                    "subcategory": small,
                    "list_image_url": abs_url(img),
                    "list_url": url,
                    "detail_url": abs_url(f"ProductShow.asp?ArticleID={article_id}"),
                }
                # Prefer the more specific subcategory when the same SKU appears twice.
                if prev is None or (small and not prev.get("subcategory")):
                    products[article_id] = record
            if page * 12 >= expected or len(items) < 12:
                break
            page += 1
            time.sleep(0.15)
    log(f"[list] unique products: {len(products)}")
    return products


def parse_detail(html: str, stub: dict) -> dict:
    title_m = TITLE_RE.search(html)
    title = clean_text(re.sub(r"<[^>]+>", "", title_m.group(1))) if title_m else stub["title"]
    fields = {}
    for key, value in FIELD_RE.findall(html):
        fields[clean_text(key)] = clean_text(re.sub(r"<[^>]+>", "", value))
    main_m = MAIN_IMG_RE.search(html)
    main_image = abs_url(main_m.group(1)) if main_m else ""
    desc_html = ""
    desc_m = DESC_RE.search(html)
    if desc_m:
        desc_html = desc_m.group(1).strip()
    desc_images = [abs_url(src) for src in IMG_SRC_RE.findall(desc_html)]
    desc_text = clean_text(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", desc_html)))
    return {
        **stub,
        "title": title or stub["title"],
        "code": fields.get("编号", ""),
        "size": fields.get("尺寸", ""),
        "craft": fields.get("产品工艺", ""),
        "accessories": fields.get("辅助配件", ""),
        "updated_at": fields.get("更新时间", ""),
        "detail_category": fields.get("类别", stub["category"]),
        "main_image_url": main_image,
        "description_html": desc_html,
        "description_text": desc_text,
        "description_image_urls": desc_images,
        "fields": fields,
    }


def ext_from(url: str, content_type: str) -> str:
    path = url.split("?")[0]
    suffix = Path(path).suffix.lower()
    if suffix in {".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"}:
        return ".jpg" if suffix == ".jpeg" else suffix
    mapping = {
        "image/jpeg": ".jpg",
        "image/jpg": ".jpg",
        "image/png": ".png",
        "image/gif": ".gif",
        "image/webp": ".webp",
        "image/bmp": ".bmp",
    }
    return mapping.get((content_type or "").split(";")[0].strip().lower(), ".jpg")


def download_image(url: str, dest_no_ext: Path) -> str | None:
    if not url:
        return None
    existing = list(dest_no_ext.parent.glob(dest_no_ext.name + ".*"))
    if existing:
        return str(existing[0].relative_to(OUT_DIR))
    last_err = None
    for attempt in range(4):
        try:
            resp = session.get(url, timeout=50, stream=True)
            resp.raise_for_status()
            ext = ext_from(url, resp.headers.get("Content-Type", ""))
            dest = dest_no_ext.with_suffix(ext)
            dest.parent.mkdir(parents=True, exist_ok=True)
            tmp = dest.with_suffix(dest.suffix + ".part")
            with open(tmp, "wb") as fh:
                for chunk in resp.iter_content(8192):
                    if chunk:
                        fh.write(chunk)
            tmp.replace(dest)
            return str(dest.relative_to(OUT_DIR))
        except Exception as exc:  # noqa: BLE001
            last_err = exc
            time.sleep(1.2 * (attempt + 1))
    log(f"[img] fail {url}: {last_err}")
    return None


def save_images(product: dict) -> dict:
    article_id = product["id"]
    folder = IMG_DIR / article_id
    local = {}
    list_path = download_image(product.get("list_image_url", ""), folder / "list")
    if list_path:
        local["list"] = list_path
    main_path = download_image(product.get("main_image_url", ""), folder / "main")
    if main_path:
        local["main"] = main_path
    desc_paths = []
    seen = set()
    for i, url in enumerate(product.get("description_image_urls") or [], start=1):
        key = url.lower()
        if key in seen:
            continue
        seen.add(key)
        path = download_image(url, folder / f"desc_{i:02d}")
        if path:
            desc_paths.append(path)
    local["description"] = desc_paths
    product["local_images"] = local
    return product


def load_done_ids() -> set[str]:
    done = set()
    if not JSONL_PATH.exists():
        return done
    with JSONL_PATH.open(encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            try:
                done.add(json.loads(line)["id"])
            except Exception:  # noqa: BLE001
                continue
    return done


def append_jsonl(product: dict) -> None:
    with io_lock:
        with JSONL_PATH.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(product, ensure_ascii=False) + "\n")


def scrape_one(stub: dict) -> dict:
    html = fetch_html(stub["detail_url"])
    product = parse_detail(html, stub)
    return save_images(product)


def write_exports() -> list[dict]:
    items = []
    if JSONL_PATH.exists():
        with JSONL_PATH.open(encoding="utf-8") as fh:
            for line in fh:
                line = line.strip()
                if line:
                    items.append(json.loads(line))
    items.sort(key=lambda x: int(x.get("id") or 0), reverse=True)
    JSON_PATH.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
    headers = [
        "id",
        "title",
        "code",
        "category",
        "subcategory",
        "detail_category",
        "size",
        "craft",
        "accessories",
        "updated_at",
        "detail_url",
        "list_image_url",
        "main_image_url",
        "local_list",
        "local_main",
        "local_desc",
    ]
    rows = [",".join(headers)]
    for item in items:
        local = item.get("local_images") or {}
        values = [
            item.get("id", ""),
            item.get("title", ""),
            item.get("code", ""),
            item.get("category", ""),
            item.get("subcategory", ""),
            item.get("detail_category", ""),
            item.get("size", ""),
            item.get("craft", ""),
            item.get("accessories", ""),
            item.get("updated_at", ""),
            item.get("detail_url", ""),
            item.get("list_image_url", ""),
            item.get("main_image_url", ""),
            local.get("list", ""),
            local.get("main", ""),
            "|".join(local.get("description") or []),
        ]
        escaped = []
        for value in values:
            text = str(value).replace('"', '""')
            if any(ch in text for ch in [",", '"', "\n"]):
                text = f'"{text}"'
            escaped.append(text)
        rows.append(",".join(escaped))
    CSV_PATH.write_text("\n".join(rows) + "\n", encoding="utf-8-sig")
    return items


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=5)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    IMG_DIR.mkdir(parents=True, exist_ok=True)

    stubs = collect_listings()
    if args.limit:
        stubs = dict(list(stubs.items())[: args.limit])
        log(f"[limit] using first {len(stubs)} products")

    done = load_done_ids()
    pending = [stub for pid, stub in stubs.items() if pid not in done]
    log(f"[detail] already done={len(done)} pending={len(pending)}")

    finished = 0
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(scrape_one, stub): stub["id"] for stub in pending}
        for fut in as_completed(futures):
            article_id = futures[fut]
            try:
                product = fut.result()
                append_jsonl(product)
                finished += 1
                if finished % 20 == 0 or finished == len(pending):
                    log(f"[detail] {finished}/{len(pending)} latest={article_id} {product.get('title')}")
            except Exception as exc:  # noqa: BLE001
                log(f"[detail] fail {article_id}: {exc}")

    items = write_exports()
    image_count = sum(
        1 + 1 + len((p.get("local_images") or {}).get("description") or [])
        for p in items
        if p.get("local_images")
    )
    log(f"[done] products={len(items)} images≈{image_count}")
    log(f"[done] json={JSON_PATH}")
    log(f"[done] csv={CSV_PATH}")
    log(f"[done] images={IMG_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
