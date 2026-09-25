"""Build the site's real photo mapping and attribution page from checked downloads."""
import ast
import html
import json
import shutil
from pathlib import Path
ROOT=Path(__file__).resolve().parent
tree=ast.parse((ROOT/'source_photos.py').read_text(encoding='utf-8'))
groups=next(ast.literal_eval(node.value) for node in tree.body if isinstance(node,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='GROUPS' for t in node.targets))
sources=json.loads((ROOT/'images/real/sources.json').read_text(encoding='utf-8'))
photos={}
for key,query,ids in groups:
    if key not in sources: continue
    info=sources[key]
    for ident in ids:
        photos['mp-'+str(ident)]={**info,'src':'./images/real/'+info['filename'],'reference':True}
(ROOT/'photos.js').write_text('/* Real photographs, attributed in photo-credits.html. No AI images. */\nwindow.MALA_PATA_PHOTOS = '+json.dumps(photos,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
if 'entrecote' in sources:
    shutil.copyfile(ROOT/'images/real'/sources['entrecote']['filename'],ROOT/'images/meat-real.jpg')
e=html.escape
rows=''.join('<article><img loading="lazy" src="./images/real/'+e(info['filename'])+'" alt="'+e(key)+'"><div><h2>'+e(info['title'].removeprefix('File:'))+'</h2><p>'+e(info['artist'])+'</p><a href="'+e(info['source'])+'">Original en Wikimedia Commons</a> · <a href="'+e(info['licenseUrl'] or info['source'])+'">'+e(info['license'])+'</a></div></article>' for key,info in sources.items())
(ROOT/'photo-credits.html').write_text('<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Créditos fotográficos · Mala Pata</title><style>body{background:#f7f5ec;color:#283d30;font:15px/1.7 system-ui;max-width:1000px;margin:40px auto;padding:20px}a{color:inherit}article{display:flex;gap:25px;border-bottom:1px solid #dcded1;padding:25px 0}img{width:140px;height:110px;object-fit:cover}h2{font-size:17px}p{margin:5px 0}</style><a href="./index.html">Volver a la carta</a><h1>Créditos de las fotografías</h1><p>Fotografías reales de referencia. No representan necesariamente la preparación, cantidad o emplatado de Mala Pata. Se muestran recortadas mediante CSS; los archivos descargados no se han retocado.</p><p>Las fotografías de portada y arroces proceden de <a href="https://cartaonlineqr.com/mala-pata-aluche-arroces/">la carta publicada por el local</a>.</p>'+rows+'</html>',encoding='utf-8')
print('Mapped',len(photos),'of 103 items')
