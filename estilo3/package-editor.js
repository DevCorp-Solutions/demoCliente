/* Browser-local demo editor. It does not provide server authentication or publishing. */
(() => {
 const data=window.MALA_PATA,form=document.querySelector('#dish-form'),select=document.querySelector('#dish-select'),cfgForm=document.querySelector('#settings-form');
 let cfg={};try{cfg=JSON.parse(localStorage.getItem('malapata_package_content')||'{}')}catch{}
 const status=text=>document.querySelector('#editor-status').textContent=text;
 function options(){select.replaceChildren(...data.menu.map(d=>new Option(d.name,d.id)));form.elements.category.replaceChildren(...data.categories.map(c=>new Option(c,c)))}
 function fill(){const d=data.menu.find(d=>d.id===select.value);if(!d)return;for(const key of ['name','priceLabel','description','allergens','category'])form.elements[key].value=d[key]||''}
 function save(){try{localStorage.setItem('devcorp_data_estilo3',JSON.stringify(data));status('Guardado en este navegador. Recarga la web para ver los cambios.');return true}catch{status('No se pudo guardar: comprueba el almacenamiento del navegador.');return false}}
 select.addEventListener('change',fill);form.addEventListener('submit',e=>{e.preventDefault();const d=data.menu.find(d=>d.id===select.value);if(!d)return;for(const key of ['name','priceLabel','description','allergens','category'])d[key]=form.elements[key].value.trim();if(save()){const id=d.id;options();select.value=id;fill()}});
 document.querySelector('#new-dish').addEventListener('click',()=>{const d={id:'mp-local-'+Date.now(),name:'Nuevo plato',priceLabel:'Consultar',category:data.categories[0],description:'',allergens:'',group:'',variants:[]};data.menu.push(d);options();select.value=d.id;fill();status('Completa la ficha y pulsa Guardar plato. No se ha guardado todavía.')});
 document.querySelector('#delete-dish').addEventListener('click',()=>{const i=data.menu.findIndex(d=>d.id===select.value);if(i<0)return;if(!confirm('¿Eliminar este plato de la carta de demostración?'))return;data.menu.splice(i,1);save();options();fill()});
 for(const key of ['hours','bookingUrl','email','whatsapp','events'])cfgForm.elements[key].value=cfg[key]||'';
 cfgForm.elements.daily.value=(cfg.daily||[]).map(d=>[d.name,d.price,d.allergens,d.description].join(' | ')).join('\n');
 cfgForm.addEventListener('submit',e=>{e.preventDefault();for(const key of ['hours','bookingUrl','email','whatsapp','events'])cfg[key]=cfgForm.elements[key].value.trim();cfg.daily=cfgForm.elements.daily.value.split('\n').filter(s=>s.trim()).map(s=>{const [name,price,allergens,description]=s.split('|').map(s=>s.trim());return {name,price,allergens,description}});try{localStorage.setItem('malapata_package_content',JSON.stringify(cfg));status('Información guardada en este navegador. Recarga la web para verla.')}catch{status('No se pudo guardar la información.')}});
 document.querySelector('#export-data').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({menu:data,settings:cfg},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='mala-pata-contenidos.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)});options();fill();
})();
