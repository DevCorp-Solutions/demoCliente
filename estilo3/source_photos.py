"""Download attributable real food photographs from Wikimedia Commons.
Only modifies style 3; no generated images or restaurant-specific claims.
"""
import concurrent.futures
import html
import json
import re
import time
import unicodedata
import argparse
from pathlib import Path
import requests

ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'images' / 'real'
OUT.mkdir(exist_ok=True)
CACHE = OUT / 'sources.json'
existing = json.loads(CACHE.read_text(encoding='utf-8')) if CACHE.exists() else {}
DIRECT = {
 'water': 'File:Glass of water ouside.jpg',
 'juice': 'File:Orange juice in a glass (4430731914).jpg',
 'tea': 'File:Cup of tea isolated on white background - Petr Kratochvil.jpg',
 'beer-1906': 'File:1906 Reserva Especial (Hijos de Rivera).jpg',
 'beer-zero': 'File:My Estrella (87219665).jpeg',
 'wings': 'File:Grilled chicken wings, Turkish style.jpg',
 'nuggets': 'File:Chicken nuggets on a plate.jpg',
 'brie': 'File:A Brie Cheese at The Verandah.jpg',
 'chicken-fries': 'File:Cooked, Shredded Chicken in Bowl.jpg',
 'tomato-toast': 'File:Tomato Bruschetta.jpg',
 'ham-toast': 'File:Ham&Cheese Toast.jpg',
 'gulas': 'File:Tosta de Gulas.jpg',
 'tonic': 'File:Schweppes Indian Tonic Water (front laying down).jpg',
 'red-wine': 'File:Glass of red wine.jpg',
 'red-bottle': 'File:Bottle and glass of red wine.jpg',
 'white-bottle': 'File:Glass of White Wine shot with a bottle of white wine - Evan Swigart.jpg',
 'beef-rice': 'File:Paella-de-carne-con-verduras.jpg',
 'mushroom-rice': 'File:Mushroom risotto (3990739885).jpg',
 'gyozas': 'File:Deep fried gyoza.jpg',
 'pig-ear': 'File:Oreja a la plancha-Oreja de Oro.jpg',
 'lacon': 'File:Lacón con patatas y grelos.jpg',
 'calamari': 'File:Calamares a la Romana-2009.jpg',
 'goat-toast': 'File:Salade mesclun et chèvre chaud sur toasts.jpg',
 'vegetable-paella': 'File:Paella de verduras o arroz viudo.jpg',
 'tomato-tuna': 'File:Tomato salad with onions and tuna.jpg',
 'goat-salad': "File:Goat's Cheese Salad - The Oven 2025-07-24.jpg",
 'burrata': 'File:Burrata with Red Tomato from Habitu Table Tsuen Wan.jpg',
}
# Search terms describe the dish type; references do not claim exact plating.
GROUPS = [
 ('duck-rice', '"arroz de pato"', [1]),
 ('beef-rice', '"arroz" "ternera"', [2]),
 ('pork-prawn-rice', '"paella mixta"', [3,6,13,17]),
 ('snail-rice', '"paella" "caracoles"', [4]),
 ('black-rice', '"arroz negro"', [5]),
 ('banda-rice', '"arroz a banda"', [7]),
 ('chicken-rice', '"arroz con pollo"', [8]),
 ('senyoret-rice', '"arroz" "senyoret"', [9]),
 ('prawn-rice', '"arroz" "carabineros"', [10,16]),
 ('lobster-rice', '"arroz" "bogavante"', [11,12]),
 ('seafood-paella', '"paella de marisco"', [14]),
 ('vegetable-paella', 'intitle:"paella" intitle:"vegetables"', [15]),
 ('octopus-rice', '"arroz de polvo"', [18]),
 ('mushroom-rice', '"mushroom risotto"', [19]),
 ('fideua', '"fideua"', [20,21,22]),
 ('croquettes', '"croquetas" "jamon"', [23]),
 ('samosas', '"samosas"', [24]),
 ('gyozas', '"gyoza" "fried"', [25]),
 ('torrezno', '"torreznos"', [26]),
 ('pig-ear', '"oreja a la plancha"', [27]),
 ('wings', '"chicken wings" "roasted"', [28]),
 ('lacon', '"lacón"', [29]),
 ('nuggets', '"chicken nuggets" "fries"', [30]),
 ('tequenos', '"tequeños"', [31]),
 ('spring-rolls', '"fried spring rolls"', [32]),
 ('aubergine', '"berenjenas" "miel"', [33]),
 ('breaded-mushrooms', '"breaded mushrooms"', [34]),
 ('brie', '"brie" "baked"', [35]),
 ('chicken-fries', '"chicken" "chips"', [36]),
 ('quesadilla-veg', '"quesadilla" "vegetable"', [37]),
 ('quesadilla', '"quesadilla"', [38]),
 ('tempura', '"vegetable tempura"', [39]),
 ('huevos-rotos', '"huevos rotos"', [40]),
 ('revuelto', '"revuelto" "setas"', [41]),
 ('bravas', '"patatas bravas"', [42]),
 ('mojo', '"papas" "mojo"', [43]),
 ('cachopo', '"cachopo" "KANTXA"', [44]),
 ('beef-cheeks', '"carrillera"', [45]),
 ('entrecote', '"entrecote" "frites"', [46]),
 ('lamb', '"lechazo asado"', [47]),
 ('suckling-pig', '"cochinillo asado"', [48]),
 ('cazon', '"cazon" "adobo"', [49]),
 ('calamari', '"calamares" "romana"', [50]),
 ('baby-squid', '"puntillitas"', [51]),
 ('octopus', '"pulpo" "patatas"', [52]),
 ('goat-salad', '"salad" "goat cheese"', [53]),
 ('tomato-tuna', '"tomato" "tuna" "salad"', [54]),
 ('guacamole', '"guacamole" "chips"', [55]),
 ('burrata', '"burrata" "tomato"', [56]),
 ('ham-toast', '"toast" "ham" "cheese"', [57]),
 ('sobrasada', '"sobrasada" "bread"', [58]),
 ('tomato-toast', '"tomato" "toast"', [59]),
 ('goat-toast', '"goat cheese" "toast"', [60]),
 ('steak-toast', '"steak" "sandwich"', [61]),
 ('salmon-toast', '"salmon" "avocado" "toast"', [62]),
 ('gulas', '"gulas"', [63]),
 ('carrot-cake', '"carrot cake" "slice"', [64]),
 ('apple-cake', '"apple cake" "slice"', [65]),
 ('fig-cake', '"fig" "cake"', [66]),
 ('lava-cake', '"molten chocolate cake"', [67]),
 ('sundae', '"ice cream sundae"', [68]),
 ('waffle', '"waffle" "chocolate" "cream"', [69]),
 ('cheesecake', '"basque cheesecake"', [70]),
 ('espresso', '"espresso" "cup"', [71,72]),
 ('cortado', '"cortado" "coffee"', [73]),
 ('latte', '"cafe con leche"', [74]),
 ('tea', '"herbal tea" "cup"', [75]),
 ('cola', '"cola" "glass" "ice"', [76]),
 ('energy', '"Red Bull" "can"', [77]),
 ('juice', '"orange juice" "glass"', [78]),
 ('tonic', '"tonic water" "glass"', [79]),
 ('vermouth', '"vermouth" "glass"', [80]),
 ('cream-liqueur', '"irish cream" "glass"', [81]),
 ('tinto', '"tinto de verano"', [82,83]),
 ('water', '"mineral water" "bottle"', [84]),
 ('gin-tonic', '"gin and tonic"', [85]),
 ('beer', '"Estrella Galicia" "glass"', [86,87]),
 ('beer-bottle', '"Estrella Galicia" "bottle"', [88]),
 ('beer-1906', '"1906" "beer"', [89,90]),
 ('beer-gf', '"gluten free beer"', [91]),
 ('beer-zero', '"Estrella Galicia" "0,0"', [92,93]),
 ('red-wine', '"red wine" "glass"', [94,95,96]),
 ('white-wine', '"white wine" "glass"', [97,98,99]),
 ('red-bottle', '"Rioja" "wine bottle"', [100,101]),
 ('white-bottle', '"white wine" "bottle"', [102]),
 ('cider', '"cider" "bottle" "glass"', [103]),
]

def plain(value):
    return html.unescape(re.sub('<[^>]+>', '', value or '')).strip()

def normalize(value):
    return ''.join(c for c in unicodedata.normalize('NFD', value.lower()) if not unicodedata.combining(c))

def source(group):
    key, query, ids = group
    if key in existing and (OUT / existing[key]['filename']).exists():
        return key, existing[key]
    session = requests.Session()
    session.headers['User-Agent'] = 'MenuPhotoReference/1.0 (local design preview; Wikimedia attribution retained)'
    try:
        time.sleep(3)
        params = dict(action='query',generator='search',gsrsearch=query,gsrnamespace=6,gsrlimit=6,prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=800,format='json')
        if key in DIRECT:
            params = dict(action='query',titles=DIRECT[key],prop='imageinfo',iiprop='url|extmetadata|size',iiurlwidth=800,format='json')
        response = session.get('https://commons.wikimedia.org/w/api.php',params=params,timeout=45)
        for attempt in range(3):
            if response.status_code != 429: break
            time.sleep(min(60, max(5, int(response.headers.get('Retry-After','30')))))
            response = session.get('https://commons.wikimedia.org/w/api.php',params=params,timeout=45)
        response.raise_for_status()
        terms=[t for t in re.findall(r'\w+',normalize(query)) if len(t)>3 and t!='intitle']
        pages = sorted(response.json().get('query',{}).get('pages',{}).values(),key=lambda p:(-sum(t in normalize(p['title']) for t in terms),p.get('index',99)))
        for page in pages:
            info=page.get('imageinfo',[{}])[0]
            meta=info.get('extmetadata',{})
            license_name=meta.get('LicenseShortName',{}).get('value','')
            if not any(x in license_name.lower() for x in ('cc0','cc by','public domain')): continue
            original_url=info.get('url','').split('?')[0]
            if not re.search(r'\.(jpe?g|png|webp)$',original_url,re.I): continue
            description=plain(meta.get('ImageDescription',{}).get('value',''))
            if re.search(r'AI.generated|stable diffusion|midjourney|dall.e',description+' '+meta.get('Categories',{}).get('value',''),re.I): continue
            image_url=info.get('thumburl',info['url']).split('?')[0]
            image=session.get(image_url,timeout=45)
            if image.status_code!=200 or not image.headers.get('content-type','').startswith('image/'):
                print('DOWNLOAD', key, image.status_code, flush=True)
                continue
            filename=key+Path(original_url).suffix.lower()
            (OUT / filename).write_bytes(image.content)
            result=dict(filename=filename,title=page['title'],description=description,artist=plain(meta.get('Artist',{}).get('value','')),license=license_name,licenseUrl=meta.get('LicenseUrl',{}).get('value',''),source=info['descriptionurl'],url=image_url)
            print('OK',key,flush=True)
            return key,result
        print('MISSING',key,flush=True)
    except Exception as error:
        print('ERROR',key,str(error)[:120],flush=True)
    return key,None

parser=argparse.ArgumentParser()
parser.add_argument('--only',default='')
parser.add_argument('--refresh',default='')
args=parser.parse_args()
for key in args.refresh.split(','):
    existing.pop(key,None)
selected=[g for g in GROUPS if not args.only or g[0] in args.only.split(',')]
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    for key,result in pool.map(source,selected):
        if result:
            existing[key]=result
            CACHE.write_text(json.dumps(existing,ensure_ascii=False,indent=2),encoding='utf-8')
print('Sourced',len(existing),'of',len(GROUPS),flush=True)
