const dishes = [
  {id:1,name:'Gyozas crujientes',category:'Barra',price:12,photo:'gyozas',description:'Seis bocados de pollo y verduras, dorados y con salsa de soja.',allergens:'Gluten, soja y sésamo'},
  {id:2,name:'Croquetas de la casa',category:'Barra',price:10,photo:'croquettes',description:'Crujientes por fuera, cremosas por dentro. Seis bocados para abrir el apetito.',allergens:'Gluten, leche y huevo'},
  {id:3,name:'Bravas de barra',category:'Barra',price:8,photo:'bravas',description:'Patata dorada, salsa brava y un toque de alioli.',allergens:'Huevo'},
  {id:4,name:'Entrecot al punto',category:'Fuego',price:24,photo:'entrecote',description:'Ternera a la plancha, mantequilla de hierbas y patatas fritas.',allergens:'Leche'},
  {id:5,name:'Pulpo & pimentón',category:'Fuego',price:21,photo:'octopus',description:'Pulpo sobre patata, aceite de oliva y un toque de pimentón.',allergens:'Moluscos'},
  {id:6,name:'Alitas doradas',category:'Fuego',price:13,photo:'wings',description:'Alitas asadas, especias y una salsa de yogur para acompañar.',allergens:'Leche'},
  {id:7,name:'Tarta de queso',category:'Dulce',price:7,photo:'cheesecake',description:'Un final cremoso para una sobremesa que empieza ahora.',allergens:'Leche, huevo y gluten'},
  {id:8,name:'Corazón de chocolate',category:'Dulce',price:7,photo:'lava-cake',description:'Bizcocho de chocolate con el centro fundente. Para los que siempre guardan un hueco.',allergens:'Leche, huevo y gluten'}
];
const photoFiles={'black-rice':'black-rice.png'};
const photo=d=>`images/${photoFiles[d.photo]||d.photo+'.jpg'}`;
const price=d=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(d.price);
const dialog=document.querySelector('#dish-dialog');
function render(category='Todos') {
  const items=dishes.filter(d=>category==='Todos'||d.category===category);
  document.querySelector('#count').textContent=`${items.length} propuestas para disfrutar`;
  document.querySelector('#dishes').innerHTML=items.map(d=>`<button class="dish" data-dish="${d.id}" aria-label="Ver ${d.name}"><span class="dish-photo"><img src="${photo(d)}" alt="${d.name}, fotografía de referencia" width="800" height="800" loading="lazy"></span><span class="dish-copy"><small>${String(d.id).padStart(2,'0')} / ${d.category.toUpperCase()}</small><h3>${d.name}</h3><p>${d.description}</p></span><span class="dish-price">${price(d)}</span><span class="dish-arrow" aria-hidden="true">↗</span></button>`).join('');
}
document.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.category)}));
document.querySelectorAll('[data-pick]').forEach(link=>link.addEventListener('click',()=>{document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===link.dataset.pick)));render(link.dataset.pick)}));
document.querySelector('#dishes').addEventListener('click',event=>{const target=event.target.closest('[data-dish]');if(!target)return;const d=dishes.find(d=>d.id===Number(target.dataset.dish));document.querySelector('#dish-detail').innerHTML=`<img class="detail-image" src="${photo(d)}" alt="${d.name}"><div class="detail-copy"><p class="eyebrow">${d.category}</p><h2 id="dish-title">${d.name}</h2><strong>${price(d)}${d.category==='Arroces'?' / persona':''}</strong><p>${d.description}</p><p><strong>Alérgenos de la receta de muestra:</strong> ${d.allergens}.</p><small>Plato de demostración. Fotografía de referencia; la preparación puede variar. <a href="credits.html">Créditos de la imagen</a>.</small></div>`;dialog.showModal();dialog.scrollTop=0});
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()});
document.querySelector('#style-select').addEventListener('change',event=>{if(/^estilo[1-8]$/.test(event.target.value) && event.target.value !== 'estilo5')location.href=`../${event.target.value}/index.html`});
const dateInput=document.querySelector('[name="date"]');const now=new Date();dateInput.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
document.querySelector('#booking-form').addEventListener('submit',event=>{event.preventDefault();const values=new FormData(event.target);document.querySelector('#booking-status').textContent=`Vista de prueba: mesa para ${values.get('guests')} el ${values.get('date')} a las ${values.get('time')}. No se ha enviado ninguna reserva.`});
render();
