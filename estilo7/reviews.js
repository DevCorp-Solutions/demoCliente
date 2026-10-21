(() => {
  'use strict';
  const sources = {
    aluche: 'https://es.restaurantguru.com/Gancho-y-Directo-Madrid',
    pozuelo: 'https://es.restaurantguru.com/Gancho-y-Directo-Pozuelo-de-Alarcon'
  };
  const venues = {
    aluche: {name: 'Aluche', score: '4,5', count: '612', query: 'Gancho y Directo Calle de Seseña 69 Madrid'},
    pozuelo: {name: 'Pozuelo', score: '4,3', count: '772', query: 'Gancho y Directo Centro Comercial Zoco Pozuelo'}
  };
  const ticker = document.querySelector('.ticker');
  if (ticker) {
    const words = '<span>BUENA CARNE</span><b aria-hidden="true">✳</b><span>MUCHO GANCHO</span><b aria-hidden="true">✳</b><span>CERO RODEOS</span><b aria-hidden="true">✳</b><span>DESDE 2010</span><b aria-hidden="true">✳</b>';
    ticker.innerHTML = `<div class="ticker-window"><div class="ticker-track"><div class="ticker-group">${words}</div><div class="ticker-group" aria-hidden="true">${words}</div></div></div><button class="ticker-pause" type="button" aria-label="Pausar franja en movimiento" aria-pressed="false">Ⅱ</button>`;
    const pause = ticker.querySelector('button');
    pause.addEventListener('click', () => {
      const paused = ticker.classList.toggle('is-paused');
      pause.setAttribute('aria-pressed', String(paused));
      pause.setAttribute('aria-label', paused ? 'Reanudar franja en movimiento' : 'Pausar franja en movimiento');
      pause.textContent = paused ? '▶' : 'Ⅱ';
    });
  }
  const section = document.querySelector('#valoranos');
  section.innerHTML = `<div class="wrap section scorecard-wrap"><div class="section-heading"><div><p class="eyebrow">VALÓRANOS / EL ÚLTIMO ROUND ES TUYO</p><h2>Tu veredicto.<br><span>Directo.</span></h2></div><p>¿Ya has probado nuestras burgers?<br>Cuéntalo en Google y ayuda a quien viene después.</p></div><div class="rating-layout"><div class="scorecard-top"><span>GANCHO &amp; DIRECTO</span><span>TARJETA DE PUNTUACIÓN / GOOGLE</span></div><div class="rating-summary"><label for="review-venue">Elige tu local</label><select id="review-venue"><option value="aluche">Aluche · Seseña, 69</option><option value="pozuelo">Pozuelo · C.C. Zoco</option></select><div id="rating-total" aria-live="polite"></div></div><div class="rating-action"><h3>¿Qué tal el bocado?</h3><p id="stars-label">Elige tu valoración</p><div class="review-stars" role="group" aria-labelledby="stars-label">${[1,2,3,4,5].map(n=>`<button type="button" data-stars="${n}" aria-label="${n} ${n===1?'estrella':'estrellas'}" aria-pressed="false"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.13 6.55L12 17.52l-5.89 3.09 1.13-6.55L2.48 9.42l6.58-.96Z"/></svg></button>`).join('')}</div><p id="review-feedback" role="status">Todas las opiniones son bienvenidas.</p><a id="google-review" class="button lime" target="_blank" rel="noopener">Dejar una reseña en Google ↗</a><p class="review-help">En la ficha del local, pulsa «Escribir una reseña». La selección de estrellas de esta página no se envía a Google.</p></div></div></div>`;
  const select = section.querySelector('#review-venue');
  const starButtons = [...section.querySelectorAll('[data-stars]')];
  const resetStars = () => {
    starButtons.forEach(b => {b.classList.remove('is-filled');b.setAttribute('aria-pressed','false')});
    section.querySelector('#review-feedback').textContent = 'Todas las opiniones son bienvenidas.';
  };
  function updateVenue() {
    const id = select.value, v = venues[id];
    section.querySelector('#rating-total').innerHTML = `<p class="rating-location">Gancho y Directo · ${v.name}</p><p class="rating-number">${v.score}<small>/ 5</small></p><p class="rating-count">Valoración global de Google · ${v.count} reseñas</p><p class="rating-source">Referencia recogida por <a href="${sources[id]}" target="_blank" rel="noopener">Restaurant Guru</a>.<br>Consultada el 21/10/2026 · No se actualiza en directo.</p>`;
    section.querySelector('#google-review').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(v.query);
    resetStars();
  }
  select.addEventListener('change', updateVenue);
  starButtons.forEach(button => button.addEventListener('click', () => {
    const n = Number(button.dataset.stars);
    starButtons.forEach(b => {b.classList.toggle('is-filled', Number(b.dataset.stars)<=n);b.setAttribute('aria-pressed',String(b===button))});
    section.querySelector('#review-feedback').textContent = `${n} ${n===1?'estrella seleccionada':'estrellas seleccionadas'}. Continúa en Google para publicar tu opinión.`;
  }));
  document.querySelectorAll('[data-venue]').forEach(button => button.addEventListener('click', () => {select.value = button.dataset.venue;updateVenue()}));
  updateVenue();
  const reviews = [
    {name: 'Christian Casaucao Andújar', venue: 'aluche', text: 'Hamburguesas de muy buena calidad.'},
    {name: 'Cristina Pérez', venue: 'pozuelo', text: 'Las hamburguesas están buenísimas'},
    {name: 'Lucia AP', venue: 'pozuelo', text: 'Gancho es la mejor opción.'}
  ];
  document.querySelector('#resenas').innerHTML = `<div class="section-heading"><div><p class="eyebrow">PALABRA DE QUIEN YA HA VENIDO</p><h2>Se llevan<br><span>un buen recuerdo.</span></h2></div><p>Tres opiniones positivas de Google.<br>Fragmentos de reseñas recogidas por Restaurant Guru.</p></div><div class="review-grid">${reviews.map((r,i)=>`<figure class="review-card"><span class="review-quote" aria-hidden="true">“</span><blockquote>${r.text}</blockquote><figcaption><span class="review-avatar" aria-hidden="true">${r.name[0]}</span><div><strong>${r.name}</strong><span>Google · ${venues[r.venue].name}</span></div></figcaption><a href="${sources[r.venue]}" target="_blank" rel="noopener">Leer reseña en la fuente ↗</a><span class="review-index" aria-hidden="true">0${i+1}</span></figure>`).join('')}</div>`;
})();
