"""Refresh Mala Pata's public menu and preview images (requires requests/bs4)."""
import json
from pathlib import Path
import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
BASE = 'https://cartaonlineqr.com/'
SECTIONS = [('arroces', 'Arroces y paellas'), ('picoteo', 'Para compartir'), ('carnes', 'Carnes'), ('pescados-y-mariscos', 'Del mar'), ('la-huerta', 'La huerta'), ('tostas', 'Tostas'), ('postres-y-cafes', 'Postres y cafés'), ('bebidas-y-vinos', 'Bebidas y vinos')]
session = requests.Session()
def fetch(url):
    r = session.get(url, timeout=40)
    r.raise_for_status()
    return r

menu = []
for slug, category in SECTIONS:
    url = BASE + 'mala-pata-aluche-' + slug + '/'
    soup = BeautifulSoup(fetch(url).content, 'html.parser')
    parent = None
    group = category
    for row in soup.select('table tr'):
        cells = [c.get_text(' ', strip=True) for c in row.select('td')]
        if len(cells) < 5:
            continue
        heading, name, variant, price, allergens = cells[:5]
        if heading:
            group = heading
        if name and price:
            parent = {'id': 'mp-' + str(len(menu) + 1), 'name': name, 'category': category, 'group': group, 'description': variant, 'priceLabel': price, 'allergens': allergens, 'variants': [], 'source': url}
            menu.append(parent)
        elif variant and parent:
            parent['variants'].append({'name': variant, 'allergens': allergens})
    print(slug, len(menu))

data = {'id': 'estilo3', 'name': 'Mala Pata', 'address': 'Calle Quero, 61 · 28024 Madrid', 'phone': '91 942 36 96', 'categories': [v for k,v in SECTIONS], 'menu': menu, 'source': BASE + 'mala-pata-aluche-carta/', 'checkedAt': '2026-09-24'}
(ROOT / 'data.js').write_text('/* Public menu checked 24 September 2026. Prices subject to confirmation. */\nwindow.MALA_PATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\nwindow.CURRENT_PRESET = window.ESTILO3_DATA = window.MALA_PATA;\n', encoding='utf-8')
(ROOT / 'images').mkdir(exist_ok=True)
for name, url in [('rice.webp', BASE + 'wp-content/uploads/2025/04/he-segoviano-10_11zon-1024x1024.webp'), ('rice-detail.webp', BASE + 'wp-content/uploads/2025/04/he-segoviano-9_11zon-1024x1024.webp'), ('logo.png', BASE + 'wp-content/uploads/2025/05/Diseno-sin-titulo-83.png')]:
    (ROOT / 'images' / name).write_bytes(fetch(url).content)
print('Imported', len(menu), 'items')
