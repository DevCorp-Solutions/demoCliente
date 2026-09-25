"""Render temporary contact sheets for photographic QA, without changing assets."""
import json
import tempfile
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
root=Path(__file__).resolve().parent/'images'/'real'
items=list(json.loads((root/'sources.json').read_text(encoding='utf-8')).items())
for start in range(0,len(items),24):
    sheet=Image.new('RGB',(1200,1000),'white')
    draw=ImageDraw.Draw(sheet)
    for index,(key,info) in enumerate(items[start:start+24]):
        col,row=index%6,index//6
        with Image.open(root/info['filename']) as im:
            thumb=ImageOps.contain(im.convert('RGB'),(194,207))
            sheet.paste(thumb,(col*200+(194-thumb.width)//2,row*250))
        draw.text((col*200+4,row*250+212),key,fill='black')
        draw.text((col*200+4,row*250+228),info['title'][5:32],fill='black')
    output=Path(tempfile.gettempdir())/f'malapata-photos-{start//24+1}.jpg'
    sheet.save(output)
    print(output)
