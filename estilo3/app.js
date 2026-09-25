/* Mala Pata · Read-only menu, isolated from the other styles. */
(() => {
  'use strict';
  const data = window.MALA_PATA;
  const $ = selector => document.querySelector(selector);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  let category = 'Arroces y paellas';
  const dialog = $('#dialog');
  const allergens = [
    ['gluten','Gluten',/gluten/,'<path d="M12 22V3m0 5C5 8 5 3 5 3s7 0 7 5Zm0 6C5 14 5 9 5 9s7 0 7 5Zm0 5c7 0 7-5 7-5s-7 0-7 5Zm0-8c7 0 7-5 7-5s-7 0-7 5Z"/>'],
    ['leche','Leche',/lech[ea]|lact/,'<path d="M9 2h6v5l3 4v11H6V11l3-4V2Zm0 4h6M6 13h12"/>'],
    ['huevo','Huevo',/huevo/,'<path d="M19 14c0 5-3 8-7 8s-7-3-7-8S9 2 12 2s7 7 7 12Z"/>'],
    ['pescado','Pescado',/pescado/,'<path d="M4 12c5-8 12-8 17 0-5 8-12 8-17 0Zm0 0L1 7v10l3-5Z"/><circle cx="16" cy="11" r="1"/>'],
    ['crustaceos','Crustáceos',/crustace/,'<path d="M7 10c-6-1-5-6-4-7l3 3 2-4c3 4 2 7-1 8Zm10 0c6-1 5-6 4-7l-3 3-2-4c-3 4-2 7 1 8Z"/><ellipse cx="12" cy="15" rx="6" ry="5"/><path d="m6 14-4-2m4 5-4 2m16-5 4-2m-4 5 4 2"/>'],
    ['moluscos','Moluscos',/molusc/,'<path d="M7 20 2 10C0 2 9 1 12 5c3-4 12-3 10 5l-5 10H7Zm5-15v15M5 7l5 13M19 7l-5 13M7 23h10"/>'],
    ['frutos','Frutos de cáscara',/frutos (?:de )?(?:cascara|secos)/,'<path d="M12 2C2 5 2 19 12 22 22 19 22 5 12 2Zm0 0c-3 7 3 13 0 20"/>'],
    ['soja','Soja',/soja/,'<path d="M3 21C1 9 9 1 21 3c2 12-6 20-18 18Z"/><circle cx="8" cy="16" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="16" cy="8" r="2"/>'],
    ['sesamo','Sésamo',/sesamo/,'<ellipse cx="6" cy="8" rx="2.5" ry="5" transform="rotate(-20 6 8)"/><ellipse cx="17" cy="8" rx="2.5" ry="5" transform="rotate(20 17 8)"/><ellipse cx="12" cy="18" rx="2.5" ry="4"/>'],
    ['apio','Apio',/apio/,'<path d="M10 22 8 10M14 22l2-12M12 22V9M8 11C1 13 1 5 7 6 4 0 13 0 12 7c0-7 8-7 6-1 6-1 7 7-2 5"/>'],
    ['mostaza','Mostaza',/mostaza/,'<path d="M12 21V5m0 5C4 11 3 5 5 3c4 0 7 3 7 7Zm0 6c8 1 9-5 7-7-4 0-7 3-7 7Z"/><circle cx="5" cy="19" r="2"/><circle cx="20" cy="20" r="2"/>'],
    ['sulfitos','Sulfitos',/sulfito/,'<path d="M7 3h10v7c0 7-10 7-10 0V3Zm0 5h10m-5 7v7m-4 0h8"/>'],
    ['altramuces','Altramuces',/altramuc|lupini/,'<circle cx="8" cy="15" r="5"/><circle cx="17" cy="15" r="4"/><circle cx="12" cy="6" r="4"/>'],
    ['cacahuetes','Cacahuetes',/cacahuet/,'<path d="M8 2c-6 0-7 7-3 10-4 4-2 10 3 10 4 0 4-3 8-3 7 0 8-7 3-10 3-6-4-10-7-6-1 0-2-1-4-1Z"/>']
  ];
  const icon = a => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a[3]}</svg>`;
  function badges(raw) {
    const matched = allergens.filter(a => a[2].test(normalize(raw)));
    if (!matched.length) return '<span class="allergen-unknown" title="Información de alérgenos no publicada. Consulta al personal." aria-label="Información de alérgenos no publicada"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M5.6 18.4 18.4 5.6"/></svg></span>';
    return `<span class="allergen-icons">${matched.map(a => `<span class="allergen-icon" role="img" aria-label="${a[1]}" title="${escape(a[1] + ' · ' + raw)}">${icon(a)}</span>`).join('')}</span>`;
  }
  function photo(d, large = false) {
    const image = window.MALA_PATA_PHOTOS?.[d.id];
    if (!image) return `<span class="photo-pending" role="img" aria-label="Fotografía pendiente de ${escape(d.name)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M3 6h4l2-3h6l2 3h4v15H3Z"/><circle cx="12" cy="13" r="4"/></svg><span>Foto del plato pendiente</span></span>`;
    return `<span class="photo-crop"><img class="food-photo" src="${escape(image.src)}" alt="${escape('Fotografía real de referencia: '+d.name)}" loading="${large?'eager':'lazy'}" width="800" height="800"></span><span class="photo-label">Foto de referencia</span>`;
  }
  function renderCategories() {
    $('#categories').innerHTML = ['Toda la carta',...data.categories].map(name => `<button class="category" aria-pressed="${category===name}" data-category="${escape(name)}">${escape(name)}</button>`).join('');
  }
  function renderMenu() {
    const dishes = data.menu.filter(d => category==='Toda la carta'||d.category===category);
    $('#result-count').textContent = `${dishes.length} propuestas · ${category}`;
    if (!dishes.length) {$('#menu-results').innerHTML='<div class="empty"><h3>No hay platos en esta sección.</h3><button class="button" data-reset>Ver toda la carta</button></div>';return;}
    $('#menu-results').innerHTML = [...new Set(dishes.map(d=>d.category))].map(group => {
      const items=dishes.filter(d=>d.category===group);
      return `<section class="menu-group" aria-label="${escape(group)}"><div class="group-heading"><h3>${escape(group)}</h3><span>${items.length} propuestas</span></div>${group==='Arroces y paellas'?'<p class="category-note">Arroces y fideuás por encargo. Precios por persona. Consulta disponibilidad en el 91 942 36 96.</p>':''}<div class="dish-grid">${items.map(d=>`<article class="dish"><button class="dish-info" data-detail="${d.id}" aria-label="Ver detalles de ${escape(d.name)}"><span class="dish-media">${photo(d)}</span><span class="dish-body"><span class="dish-top"><span class="dish-name">${escape(d.name)}</span><span class="dish-price">${escape(d.priceLabel)}</span></span>${d.description?`<span class="dish-description">${escape(d.description)}</span>`:''}<span class="dish-tag">${escape(d.variants.length?`${d.variants.length} variedades`:d.category==='Arroces y paellas'?'Por encargo · por persona':d.group||'Ver detalles')}</span><span class="dish-allergens">${badges([d.allergens,...d.variants.map(v=>v.allergens)].filter(Boolean).join(', '))}${d.variants.length?'<span class="variant-hint">Según variedad</span>':''}</span></span></button></article>`).join('')}</div></section>`;
    }).join('');
  }
  function showDialog(html) {$('#dialog-content').innerHTML=html;if(!dialog.open)dialog.showModal();}
  function photoCredit(id) {
    const image=window.MALA_PATA_PHOTOS?.[id];
    if(!image)return '';
    return `<p class="photo-credit">Fotografía real de referencia; la preparación, guarnición y presentación del local pueden variar. <a href="${escape(image.source)}" target="_blank" rel="noopener">${escape(image.artist||'Fuente')}</a>${image.license?` · <a href="${escape(image.licenseUrl||image.source)}" target="_blank" rel="noopener">${escape(image.license)}</a>`:''}.</p>`;
  }
  function details(id) {
    const d=data.menu.find(item=>item.id===id);
    if(!d)return;
    showDialog(`<figure class="detail-media">${photo(d,true)}</figure><p class="eyebrow">${escape(d.category)} · ${escape(d.group)}</p><h2 class="dialog-title" id="dialog-title">${escape(d.name)}</h2><p class="dialog-price">${escape(d.priceLabel)}${d.category==='Arroces y paellas'?' <small>/ persona · por encargo</small>':''}</p>${d.description?`<p class="dialog-copy">${escape(d.description)}</p>`:''}${d.variants.length?`<h3 class="variants-heading">Variedades disponibles</h3><div class="variants-list">${d.variants.map(v=>`<div class="variant"><span>${escape(v.name)}</span>${badges(v.allergens)}</div>`).join('')}</div>`:`<div class="allergens"><strong>Alérgenos indicados</strong>${badges(d.allergens)}</div>`}<p class="allergen-note">Los iconos reflejan la información publicada. Consulta al personal sobre ingredientes y posibles trazas. El círculo con línea diagonal indica información no publicada.</p><details class="allergen-source"><summary>Consultar indicaciones de la carta original</summary>${d.variants.length?d.variants.map(v=>`<p><strong>${escape(v.name)}:</strong> ${escape(v.allergens||'Sin información publicada.')}</p>`).join(''):`<p>${escape(d.allergens||'Sin información publicada.')}</p>`}</details><div class="mini-legend">${allergens.filter(a=>a[2].test(normalize([d.allergens,...d.variants.map(v=>v.allergens)].join(' ')))).map(a=>`<span>${icon(a)} ${a[1]}</span>`).join('')}</div>`);
  }
  document.addEventListener('click',event=>{
    const categoryLink=event.target.closest('[data-menu-category]');
    if(categoryLink){category=categoryLink.dataset.menuCategory;renderCategories();renderMenu();}
    const target=event.target.closest('button');if(!target)return;
    if(target.dataset.category){category=target.dataset.category;renderCategories();renderMenu();}
    if('reset' in target.dataset){category='Toda la carta';renderCategories();renderMenu();}
    if(target.dataset.detail){details(target.dataset.detail);$('#dialog-content').insertAdjacentHTML('beforeend',photoCredit(target.dataset.detail));}
    if(target.classList.contains('dialog-close'))dialog.close();
  });
  $('#allergen-info').addEventListener('click',()=>showDialog(`<p class="eyebrow">GUÍA DE LA CARTA</p><h2 class="dialog-title" id="dialog-title">Nuestros iconos de alérgenos</h2><div class="allergen-legend">${allergens.map(a=>`<span>${icon(a)}<span>${a[1]}</span></span>`).join('')}</div><p class="dialog-copy">El círculo con línea diagonal significa que no hay información publicada. Los alérgenos de una ficha con variedades pueden cambiar según la opción: consulta su desglose. La ausencia de un icono no garantiza que el plato esté libre de ese alérgeno.</p>`));
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  document.querySelectorAll('input[name="google-rating"]').forEach(input => {
    input.addEventListener('change', () => {
      const rating = Number(input.value);
      document.querySelectorAll('.review-stars label').forEach(label => label.classList.toggle('is-filled', Number(label.querySelector('input').value) <= rating));
      $('#rating-status').textContent = `Has elegido ${rating} ${rating===1?'estrella':'estrellas'}. Confirma tu puntuación en Google.`;
    });
  });
  renderCategories();renderMenu();
})();
