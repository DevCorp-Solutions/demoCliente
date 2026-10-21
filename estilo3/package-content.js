/* Extra sections for the folder-based Professional and Premium demos. */
(() => {
  const pkg=window.DevcorpPaquete, data=window.MALA_PATA;
  if(!pkg.has('profesional'))return;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let config={};try{config=JSON.parse(localStorage.getItem('malapata_package_content')||'{}')}catch{}
  const safeUrl=value=>{try{const u=new URL(value);return u.protocol==='https:'?u.href:''}catch{return ''}};
  const section=(id,html)=>{const el=document.createElement('section');el.id=id;el.className='package-section wrap';el.innerHTML=html;return el};
  const history=section('historia',`<p class="eyebrow">MALA PATA, EN ALUCHE</p><h2>Una mesa en <span class="serif">el barrio.</span></h2><p>En Calle Quero, 61, la carta reúne arroces por encargo, carnes y propuestas para compartir. Un recorrido por los platos que dan forma a Mala Pata.</p>`);
  document.querySelector('#arroces').before(history);
  const gallery=section('galeria',`<p class="eyebrow">UN VISTAZO A LA CARTA</p><h2>Para abrir <span class="serif">el apetito.</span></h2><div class="package-gallery">${data.menu.filter(d=>window.MALA_PATA_PHOTOS?.[d.id]).filter((_,i)=>[0,23,40].includes(i)).map(d=>`<figure><img src="${esc(new URL(window.MALA_PATA_PHOTOS[d.id].src,pkg.base).href)}" alt="${esc(d.name)}, foto de referencia" loading="lazy"><figcaption>${esc(d.name)} · Foto de referencia</figcaption></figure>`).join('')}</div>`);
  document.querySelector('#carta').before(gallery);
  const daily=section('menu-del-dia','<p class="eyebrow">HOY EN MALA PATA</p><h2>Menú del día y <span class="serif">sugerencias.</span></h2>');
  const entries=Array.isArray(config.daily)?config.daily:[];
  daily.insertAdjacentHTML('beforeend',entries.length?`<div class="daily-list">${entries.map(d=>`<article><h3>${esc(d.name)}</h3><p>${esc(d.description)}</p><strong>${esc(d.price)}</strong><p>Alérgenos: ${esc(d.allergens||'Consulta al personal.')}</p></article>`).join('')}</div>`:'<p>No hay un menú del día ni platos fuera de carta publicados. Consulta las propuestas disponibles con el local.</p>');
  document.querySelector('#visitanos').before(daily);
  const events=section('eventos',`<p class="eyebrow">PLANES PARA COMPARTIR</p><h2>${pkg.is('premium')?'Grupos y eventos privados.':'Eventos y encuentros.'}</h2><p>${esc(config.events||'Consulta con el local las posibilidades para tu encuentro, los menús de grupo y la disponibilidad. No hay eventos anunciados actualmente.')}</p><a class="button" href="tel:+34919423696">Consultar por teléfono</a>`);
  daily.after(events);
  if(config.hours)document.querySelector('.opening-info p').textContent=config.hours;
  const nav=document.querySelector('header nav');
  for(const [id,label] of [['historia','El local'],['galeria','Galería'],['eventos','Eventos']])nav.insertAdjacentHTML('beforeend',`<a href="#${id}">${label}</a>`);
  if(pkg.is('profesional')){
    const booking=safeUrl(config.bookingUrl);
    events.insertAdjacentHTML('beforeend',booking?` <a class="button" href="${esc(booking)}" target="_blank" rel="noopener">Reservar en la plataforma del local</a>`:'<p class="package-note">Reservas online: enlace de la plataforma pendiente de confirmar.</p>');
  } else {
    const reservation=section('reservas',`<p class="eyebrow">PREPARA TU VISITA</p><h2>Tu próxima <span class="serif">mesa.</span></h2><form id="reservation-form" class="reservation-form"><label>Nombre<input name="name" required maxlength="80" autocomplete="given-name"></label><label>Fecha<input name="date" type="date" required></label><label>Hora<input name="time" type="time" required></label><label>Comensales<input name="guests" type="number" min="1" max="30" required value="2"></label><label class="full">Comentario opcional<textarea name="note" maxlength="500" rows="3"></textarea></label><button class="button" type="submit">Preparar solicitud</button><p class="full package-note">La solicitud no confirma una reserva. El local debe confirmar la disponibilidad.</p><p class="full" role="status" id="reservation-status"></p><a class="button full" id="send-reservation" hidden target="_blank" rel="noopener">Enviar solicitud</a></form>`);
    events.after(reservation);nav.insertAdjacentHTML('beforeend','<a href="#reservas">Reservar</a>');
    const form=reservation.querySelector('form');const now=new Date();form.elements.date.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
    form.addEventListener('input',()=>{document.querySelector('#send-reservation').hidden=true;document.querySelector('#reservation-status').textContent=''});
    form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form);const text=`Solicitud de reserva en Mala Pata\nNombre: ${f.get('name')}\nFecha: ${f.get('date')}\nHora: ${f.get('time')}\nComensales: ${f.get('guests')}\n${f.get('note')||''}`;const link=document.querySelector('#send-reservation');
      const whatsapp=/^\d{9,15}$/.test(config.whatsapp||'')?config.whatsapp:'';const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email||'')?config.email:'';
      link.hidden=!(whatsapp||email);if(!link.hidden)link.href=whatsapp?`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`:`mailto:${email}?subject=${encodeURIComponent('Solicitud de reserva')}&body=${encodeURIComponent(text)}`;
      document.querySelector('#reservation-status').textContent=link.hidden?'Solicitud preparada, sin enviar. Falta confirmar el WhatsApp o email de reservas del local. Puedes consultar en el 91 942 36 96.':'Solicitud preparada. Pulsa Enviar solicitud y confirma el envío en tu aplicación. El local debe confirmar tu reserva.';
    });
    const faq=section('preguntas',`<p class="eyebrow">ANTES DE VENIR</p><h2>Preguntas frecuentes.</h2><details><summary>¿Dónde está Mala Pata?</summary><p>En Calle Quero, 61, 28024 Madrid, en Aluche.</p></details><details><summary>¿Los arroces se preparan por encargo?</summary><p>Sí. Consulta la disponibilidad con el local. Los precios de la carta de arroces son por persona.</p></details><details><summary>¿Puedo consultar los alérgenos?</summary><p>Cada ficha muestra la información publicada. Las fichas sin datos no garantizan ausencia de alérgenos. Confirma ingredientes y trazas con el personal.</p></details>`);
    document.querySelector('main').append(faq);
    const schema=document.createElement('script');schema.type='application/ld+json';schema.textContent=JSON.stringify({'@context':'https://schema.org','@type':'Restaurant',name:data.name,telephone:data.phone,address:{'@type':'PostalAddress',streetAddress:'Calle Quero, 61',postalCode:'28024',addressLocality:'Madrid',addressCountry:'ES'},hasMenu:new URL('premium/index.html#carta',pkg.base).href});document.head.append(schema);
  }
})();
