/**
 * DevCorp GastroSuite · ESTILO 9 (Pizzería) — La Pecora Nera · Pizzería La Oveja Negra (Aluche)
 * Base técnica del Estilo 4 (paquetes, alérgenos, idiomas, reservas) con la identidad de la pizzería.
 * Módulo autónomo: lee los datos reales de ./data.js (window.CURRENT_PRESET) y
 * pinta carta, reseñas, horarios y microinteracciones sobre el HTML semántico.
 * Sin dependencias externas.
 */
(function () {
  'use strict';

  const P = window.CURRENT_PRESET || {};
  // Paquete contratado (paquete.js). Esencial: carta básica sin fotos por plato,
  // sin filtros y en un solo idioma.
  const PKG = window.DevcorpPaquete;
  const hasPkg = (min) => !PKG || PKG.has(min);
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const icon = (id, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

  // ---------- Formato de números (precios y valoración) ----------
  const fmtNum = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ','));
  const fmtScore = (n) => String(n).replace('.', ','); // valoración: 4,8

  // ---------- Alérgenos (Reglamento UE 1169/2011) ----------
  // Mismas claves que el panel /admin. Iconos de trazo, como el resto de la web.
  // Se muestran en las raciones en todos los paquetes (también en el Esencial).
  const ALLERGENS = {
    gluten: ['Gluten', 'Contiene gluten: trigo, centeno, cebada, avena o sus derivados.', '<path d="M12 22V3m0 5C5 8 5 3 5 3s7 0 7 5Zm0 6C5 14 5 9 5 9s7 0 7 5Zm0 5c7 0 7-5 7-5s-7 0-7 5Zm0-8c7 0 7-5 7-5s-7 0-7 5Z"/>'],
    crustaceos: ['Crustáceos', 'Contiene crustáceos: gambas, langostinos, cigalas, cangrejos…', '<path d="M7 10c-6-1-5-6-4-7l3 3 2-4c3 4 2 7-1 8Zm10 0c6-1 5-6 4-7l-3 3-2-4c-3 4-2 7 1 8Z"/><ellipse cx="12" cy="15" rx="6" ry="5"/><path d="m6 14-4-2m4 5-4 2m16-5 4-2m-4 5 4 2"/>'],
    huevos: ['Huevos', 'Contiene huevo o productos a base de huevo.', '<path d="M19 14c0 5-3 8-7 8s-7-3-7-8S9 2 12 2s7 7 7 12Z"/>'],
    pescado: ['Pescado', 'Contiene pescado o productos a base de pescado.', '<path d="M4 12c5-8 12-8 17 0-5 8-12 8-17 0Zm0 0L1 7v10l3-5Z"/><circle cx="16" cy="11" r="1"/>'],
    cacahuete: ['Cacahuetes', 'Contiene cacahuetes o productos a base de cacahuete.', '<path d="M8 2c-6 0-7 7-3 10-4 4-2 10 3 10 4 0 4-3 8-3 7 0 8-7 3-10 3-6-4-10-7-6-1 0-2-1-4-1Z"/>'],
    soja: ['Soja', 'Contiene soja o productos a base de soja.', '<path d="M3 21C1 9 9 1 21 3c2 12-6 20-18 18Z"/><circle cx="8" cy="16" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="16" cy="8" r="2"/>'],
    lacteos: ['Lácteos', 'Contiene leche y sus derivados, incluida la lactosa.', '<path d="M9 2h6v5l3 4v11H6V11l3-4V2Zm0 4h6M6 13h12"/>'],
    frutos_cascara: ['Frutos de cáscara', 'Contiene frutos de cáscara: almendras, avellanas, nueces, pistachos…', '<path d="M12 2C2 5 2 19 12 22 22 19 22 5 12 2Zm0 0c-3 7 3 13 0 20"/>'],
    apio: ['Apio', 'Contiene apio o productos derivados.', '<path d="M10 22 8 10M14 22l2-12M12 22V9M8 11C1 13 1 5 7 6 4 0 13 0 12 7c0-7 8-7 6-1 6-1 7 7-2 5"/>'],
    mostaza: ['Mostaza', 'Contiene mostaza o productos derivados.', '<path d="M12 21V5m0 5C4 11 3 5 5 3c4 0 7 3 7 7Zm0 6c8 1 9-5 7-7-4 0-7 3-7 7Z"/><circle cx="5" cy="19" r="2"/><circle cx="20" cy="20" r="2"/>'],
    sesamo: ['Sésamo', 'Contiene granos de sésamo o productos derivados.', '<ellipse cx="6" cy="8" rx="2.5" ry="5" transform="rotate(-20 6 8)"/><ellipse cx="17" cy="8" rx="2.5" ry="5" transform="rotate(20 17 8)"/><ellipse cx="12" cy="18" rx="2.5" ry="4"/>'],
    sulfitos: ['Sulfitos', 'Contiene dióxido de azufre y sulfitos.', '<path d="M7 3h10v7c0 7-10 7-10 0V3Zm0 5h10m-5 7v7m-4 0h8"/>'],
    altramuces: ['Altramuces', 'Contiene altramuces o productos derivados.', '<circle cx="8" cy="15" r="5"/><circle cx="17" cy="15" r="4"/><circle cx="12" cy="6" r="4"/>'],
    moluscos: ['Moluscos', 'Contiene moluscos: pulpo, calamar, sepia, mejillones, almejas…', '<path d="M7 20 2 10C0 2 9 1 12 5c3-4 12-3 10 5l-5 10H7Zm5-15v15M5 7l5 13M19 7l-5 13M7 23h10"/>']
  };
  const ALLERGEN_ALIAS = { lactosa: 'lacteos', huevo: 'huevos', cacahuetes: 'cacahuete', marisco: 'crustaceos', frutos_secos: 'frutos_cascara' };

  // Iconos con tooltip: al pasar el ratón (o al tocar / enfocar con teclado) se explica el alérgeno
  function allergensHTML(item) {
    const list = (item.allergens || []).map(a => ALLERGEN_ALIAS[a] || a).filter(a => ALLERGENS[a]);
    if (!list.length) return '';
    return `<ul class="allergens" aria-label="Alérgenos">${list.map(a => {
      const [name, tip, svg] = ALLERGENS[a];
      return `<li><span class="allergen" tabindex="0" role="img" aria-label="${esc(name)}. ${esc(tip)}">
          <svg class="allergen__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${svg}</svg>
          <span class="allergen__tip" aria-hidden="true"><strong>${esc(name)}</strong>${esc(tip)}</span>
        </span></li>`;
    }).join('')}</ul>`;
  }

  function whatsappUrl(text) {
    const base = `https://wa.me/${P.whatsapp}`;
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
  }

  // =========================================================================
  // 1. DATOS → DOM (permite editar desde /admin sin tocar el HTML)
  // =========================================================================
  function bindData() {
    $$('[data-bind]').forEach(el => {
      const val = get(P, el.dataset.bind);
      if (typeof val === 'string' && val) el.textContent = val;
    });
    $$('[data-bind-href]').forEach(el => {
      const key = el.dataset.bindHref;
      let href;
      if (key === 'tel') href = `tel:${P.phoneIntl || ('+34' + String(P.phone || '').replace(/\s/g, ''))}`;
      else if (key === 'mailto') href = `mailto:${P.email}`;
      else if (key === 'whatsapp') href = whatsappUrl(msgs().hello(P.name));
      else if (key === 'bookingWhatsapp') href = whatsappUrl(msgs().bookingAsk(P.name));
      else href = get(P, key);
      if (href) el.setAttribute('href', href);
    });
    const tel = $('.header-phone');
    if (tel && P.phone) tel.setAttribute('aria-label', `Llamar al ${P.phone}`);
    $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  }

  // Mapa: se carga solo cuando se acerca al viewport (rendimiento)
  function lazyMap() {
    const frames = $$('[data-bind-src]');
    if (!frames.length) return;
    const load = (f) => { const src = get(P, f.dataset.bindSrc); if (src) f.src = src; };
    if (!('IntersectionObserver' in window)) { frames.forEach(load); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { load(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '500px 0px' });
    frames.forEach(f => io.observe(f));
  }

  // =========================================================================
  // 2. BLOQUES RENDERIZADOS DESDE DATA.JS
  // =========================================================================
  function renderStatic() {
    const hours = P.hours || [];
    $$('[data-render="hours"]').forEach(el => {
      el.innerHTML = hours.map(h => `<dt>${esc(h.days)}</dt><dd>${esc(h.time)}</dd>`).join('');
    });
    $$('[data-render="hours-mini"]').forEach(el => {
      el.innerHTML = hours.map(h => `<li><span>${esc(h.days)}</span><span>${esc(h.time)}</span></li>`).join('');
    });

    const values = get(P, 'aboutUs.values') || [];
    const valuesEl = $('[data-render="values"]');
    if (valuesEl) {
      valuesEl.innerHTML = values.map((v, i) => `
        <li class="value">
          <span class="value__num">0${i + 1}</span>
          <h3>${esc(v.title)}</h3>
          <p>${esc(v.desc)}</p>
        </li>`).join('');
    }

    const stepsEl = $('[data-render="booking-steps"]');
    if (stepsEl) {
      stepsEl.innerHTML = (hasPkg('premium') ? BOOKING_FORM_STEPS : (P.bookingSteps || [])).map(s => `
        <li class="step reveal"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></li>`).join('');
    }

    renderReviews();
    renderHeroCards();
    renderTicker();
  }

  function initials(name) {
    return String(name).split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  }
  function reviewDate(iso) {
    const d = new Date(iso + 'T12:00:00');
    return isNaN(d) ? '' : new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(d);
  }
  const starsHTML = (n) => Array.from({ length: 5 }, (_, i) => i < n ? icon('star') : '').join('');

  function renderReviews() {
    const el = $('[data-render="reviews"]');
    if (!el) return;
    const reviews = P.googleReviews || [];
    el.innerHTML = reviews.map((r, i) => `
      <article class="review reveal" style="--rd:${i * 90}ms">
        <div class="review__stars" role="img" aria-label="${r.rating} de 5 estrellas">${starsHTML(r.rating)}</div>
        <p class="review__text">${esc(r.comment)}</p>
        <footer class="review__foot">
          <span class="avatar" aria-hidden="true">${esc(initials(r.author))}</span>
          <div>
            <span class="review__author">${esc(r.author)}</span>
            <span class="review__meta">${icon('google')} Google${r.date ? ' · ' + esc(reviewDate(r.date)) : ''}</span>
          </div>
        </footer>
      </article>`).join('');
  }

  // Portada: tarjetas flotantes con la pizza de la casa y la valoración de Google
  function renderHeroCards() {
    const star = (P.menu || []).find(m => m.badge) || (P.menu || [])[0];
    const dishEl = $('[data-render="hero-dish"]');
    if (dishEl && star) {
      dishEl.innerHTML = `
        <p class="float-card__kicker">${esc(star.badge || 'Desde la carta')}</p>
        <div class="float-card__row">
          <div>
            <p class="float-card__name">${esc(star.name)}</p>
            <p class="float-card__meta">${esc(star.description)}</p>
          </div>
        </div>`;
    } else if (dishEl) dishEl.remove();

    const rating = P.googleRating;
    const revEl = $('[data-render="hero-review"]');
    if (revEl && rating) {
      revEl.innerHTML = `
        <div class="float-card__stars">${starsHTML(5)}</div>
        <p class="float-card__quote"><strong class="float-card__score">${fmtScore(rating.value)}</strong> / 5</p>
        <p class="float-card__author">${icon('google')} ${rating.count} reseñas en Google</p>`;
    } else if (revEl) revEl.remove();

    // Resumen de la valoración en la sección de opiniones
    $$('[data-render="rating"]').forEach(el => {
      if (!rating) { el.remove(); return; }
      el.innerHTML = `
        <span class="rating-summary__score">${fmtScore(rating.value)}</span>
        <span class="rating-summary__stars" role="img" aria-label="${fmtScore(rating.value)} de 5 estrellas">${starsHTML(5)}</span>
        <span class="rating-summary__count">${rating.count} reseñas en Google</span>`;
    });
  }

  function renderTicker() {
    const el = $('[data-render="ticker"]');
    if (!el) return;
    const names = (P.menu || []).filter(m => m.group === 'pizzas').map(m => m.name);
    if (!names.length) { el.parentElement.remove(); return; }
    const row = names.map(n => `<span class="ticker__item">${esc(n)}${icon('pizza')}</span>`).join('');
    el.innerHTML = row + row; // duplicado para bucle continuo
  }

  // =========================================================================
  // 3. CARTA INTERACTIVA: pestañas Pizzas / Antipasti
  //    Esencial: lista básica sin filtros ni fotos por plato.
  //    Profesional y Premium: filtros por tipo de pizza y foto al tocar el plato.
  // =========================================================================
  const menuState = { group: 0 };
  const groupById = (id) => (P.menuGroups || []).find(g => g.id === id);

  function groupOf(item) {
    const groups = P.menuGroups || [];
    const byId = groups.find(g => g.id === item.group);
    if (byId) return byId.id;
    const byCat = groups.find(g => (g.categories || []).includes(item.category));
    return byCat ? byCat.id : (groups[0] && groups[0].id);
  }

  function initMenu() {
    const tabsEl = $('#menu-tabs');
    const panelsEl = $('#menu-panels');
    if (!tabsEl || !panelsEl) return;
    const groups = (P.menuGroups || []).filter(g => (P.menu || []).some(m => groupOf(m) === g.id));
    if (!groups.length) return;

    tabsEl.innerHTML = groups.map((g, i) => {
      const count = P.menu.filter(m => groupOf(m) === g.id).length;
      return `<button class="menu-tab" role="tab" id="tab-${g.id}" aria-controls="panel-${g.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" type="button">
        ${icon(g.id === 'pizzas' ? 'pizza' : 'plate')}<span>${esc(g.label)}</span><span class="menu-tab__count">${count}</span>
      </button>`;
    }).join('') + '<span class="menu-tabs__pill" aria-hidden="true"></span>';
    tabsEl.dataset.active = '0';

    panelsEl.innerHTML = groups.map((g, i) => `
      <div class="menu-panel" role="tabpanel" id="panel-${g.id}" aria-labelledby="tab-${g.id}" tabindex="0" ${i === 0 ? '' : 'hidden'} data-group="${g.id}">
        <div class="menu-aside">
          <div class="menu-feature" data-feature="${g.id}">
            <img class="menu-feature__img" src="${esc(g.image)}" alt="" loading="lazy" decoding="async" width="540" height="400" />
            <div class="menu-feature__copy" aria-live="polite">
              <p class="menu-feature__kicker">${P.menu.filter(m => groupOf(m) === g.id).length} en carta</p>
              <h3 class="menu-feature__title">${esc(g.title)}</h3>
              <p class="menu-feature__text">${esc(g.text || '')}${hasPkg('profesional') && P.menu.some(m => groupOf(m) === g.id && m.image) ? ' Toca un plato para verlo.' : ''}</p>
            </div>
          </div>
        </div>
        <div class="menu-body" data-body="${g.id}"></div>
      </div>`).join('');

    groups.forEach(g => renderGroup(g));
    initDishes();

    const tabs = $$('.menu-tab', tabsEl);
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => selectTab(i));
      tab.addEventListener('keydown', (e) => {
        let next = null;
        if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) { e.preventDefault(); selectTab(next); tabs[next].focus(); }
      });
    });

    function selectTab(i) {
      if (i === menuState.group) return;
      menuState.group = i;
      tabsEl.dataset.active = String(i);
      tabs.forEach((t, j) => { t.setAttribute('aria-selected', String(j === i)); t.tabIndex = j === i ? 0 : -1; });
      $$('.menu-panel', panelsEl).forEach((p, j) => {
        p.hidden = j !== i;
        p.classList.remove('is-entering');
        if (j === i) { void p.offsetWidth; p.classList.add('is-entering'); }
      });
      // Si el usuario estaba abajo en la lista, vuelve al inicio de la carta
      const app = $('#menu-app');
      const top = app.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 70, behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  }

  function dishRow(d, n) {
    const tags = (d.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('') + (d.badge ? `<span class="tag tag--dark">${esc(d.badge)}</span>` : '');
    return `
      <li class="dish${dishState.id === d.id ? ' is-selected' : ''}" style="--i:${n}">
        ${d.image && hasPkg('profesional') ? `<button type="button" class="dish__pick" data-dish="${esc(d.id)}" aria-label="Ver foto de ${esc(d.name)}" aria-pressed="${dishState.id === d.id}"></button>` : ''}
        <span class="dish__num" aria-hidden="true">${String(n + 1).padStart(2, '0')}</span>
        <div>
          <div class="dish__title">
            <h4 class="dish__name">${esc(d.name)}</h4>
            ${allergensHTML(d)}
          </div>
          ${d.description ? `<span class="dish__desc">${esc(d.description)}</span>` : ''}
          ${tags ? `<span class="dish__tags">${tags}</span>` : ''}
        </div>
        ${d.price ? `<span class="dish__price">${fmtNum(d.price)} €</span>` : ''}
      </li>`;
  }

  function renderGroup(group, filter = 'all') {
    const body = $(`[data-body="${group.id}"]`);
    if (!body) return;
    const items = P.menu.filter(m => groupOf(m) === group.id);
    const cats = (group.categories || []).filter(c => items.some(m => m.category === c));
    const withFilters = hasPkg('profesional') && cats.length > 1;
    const chips = [['all', 'Todas', items.length]].concat(cats.map(c => [c, c, items.filter(m => m.category === c).length]));
    const shown = filter === 'all' ? items : items.filter(m => m.category === filter);

    body.innerHTML = `
      ${withFilters ? `<div class="menu-filters" role="group" aria-label="Filtrar ${esc(group.label.toLowerCase())}">
        ${chips.map(([val, label, count]) => `<button type="button" class="chip" data-filter="${esc(val)}" aria-pressed="${val === filter}">${esc(label)} <span class="chip__count">${count}</span></button>`).join('')}
      </div>` : ''}
      <ul class="dish-grid" aria-live="polite">
        ${shown.map(d => dishRow(d, items.indexOf(d))).join('')}
      </ul>
      ${group.note ? `<p class="menu-note menu-note--accent">${esc(group.note)}</p>` : ''}
      <p class="menu-note">${items.some(d => d.price) ? 'Precios en euros según nuestra carta.' : 'Consulta los precios en el local o por teléfono.'}</p>
      ${items.some(d => (d.allergens || []).length) ? '<p class="menu-note">Alérgenos según los ingredientes de cada plato. Si tienes alguna alergia o intolerancia, avísanos antes de pedir.</p>' : ''}`;

    $$('.chip', body).forEach(chip => chip.addEventListener('click', () => {
      const scroller = $('.menu-filters', body);
      const scrollLeft = scroller ? scroller.scrollLeft : 0;
      renderGroup(group, chip.dataset.filter);
      const again = $(`.chip[data-filter="${CSS.escape(chip.dataset.filter)}"]`, body);
      const sc = $('.menu-filters', body);
      if (sc) sc.scrollLeft = scrollLeft;
      if (again) again.focus({ preventScroll: true });
    }));
  }

  // =========================================================================
  // 3b. FOTO DEL PLATO (Profesional y Premium): al tocar un plato, su foto entra
  //     en la tarjeta lateral de su pestaña (fundido + zoom de entrada)
  // =========================================================================
  const dishState = { id: null, token: 0 };

  function showDish(dish) {
    if (!dish || !dish.image) return;
    const groupId = groupOf(dish);
    const card = $(`[data-feature="${groupId}"]`);
    if (!card) return;
    const group = groupById(groupId) || {};
    dishState.id = dish.id;
    const token = ++dishState.token;
    const idx = P.menu.filter(m => groupOf(m) === groupId).findIndex(m => m.id === dish.id);

    $$('[data-dish]').forEach(btn => {
      const on = btn.dataset.dish === dish.id;
      btn.setAttribute('aria-pressed', String(on));
      btn.closest('.dish').classList.toggle('is-selected', on);
    });

    const next = new Image();
    next.className = 'menu-feature__img is-entering';
    next.alt = dish.name;
    next.decoding = 'async';
    next.width = 720; next.height = 880;
    next.src = dish.image;
    const swap = () => {
      if (token !== dishState.token) return; // otro clic más reciente manda
      $$('.menu-feature__img', card).forEach(old => {
        old.classList.add('is-leaving');
        setTimeout(() => old.remove(), reducedMotion ? 0 : 700);
      });
      card.prepend(next);
      void next.offsetWidth;
      next.classList.remove('is-entering');

      const copy = $('.menu-feature__copy', card);
      copy.classList.remove('is-swapping');
      void copy.offsetWidth;
      copy.classList.add('is-swapping');
      $('.menu-feature__kicker', copy).textContent = `${group.unit || ''} ${String(idx + 1).padStart(2, '0')}`.trim();
      $('.menu-feature__title', copy).textContent = dish.name;
      $('.menu-feature__text', copy).textContent = 'Imagen orientativa';
    };
    if (next.complete) swap(); else { next.onload = swap; next.onerror = swap; }
  }

  function initDishes() {
    const panels = $('#menu-panels');
    if (!panels) return;
    const preloaded = new Set();
    panels.addEventListener('pointerover', (e) => {
      const b = e.target.closest('[data-dish]');
      const d = b && P.menu.find(m => m.id === b.dataset.dish);
      if (d && d.image && !preloaded.has(d.image)) { preloaded.add(d.image); new Image().src = d.image; }
    });
    panels.addEventListener('click', (e) => {
      const dishBtn = e.target.closest('[data-dish]');
      if (dishBtn) showDish(P.menu.find(m => m.id === dishBtn.dataset.dish));
    });

    // Mensaje de los alérgenos: a la derecha del icono; si no cabe (móvil), debajo y dentro de la pantalla
    const placeTip = (e) => {
      const al = e.target.closest && e.target.closest('.allergen');
      if (!al) return;
      const tip = $('.allergen__tip', al);
      const box = al.getBoundingClientRect();
      const below = box.right + 12 + tip.offsetWidth > document.documentElement.clientWidth - 8;
      al.classList.toggle('is-tip-below', below);
      if (!below) return;
      const x = Math.max(box.width - tip.offsetWidth + 6, 8 - box.left);
      al.style.setProperty('--tip-x', x + 'px');
      al.style.setProperty('--arrow-x', (box.width / 2 - x - 7) + 'px');
    };
    panels.addEventListener('mouseover', placeTip);
    panels.addEventListener('focusin', placeTip);
  }

  // =========================================================================
  // 4. HEADER: estado sobre hero / scroll, scroll-spy e indicador deslizante
  // =========================================================================
  function initHeader() {
    const header = $('#site-header');
    const actionBar = $('#action-bar');
    const hero = $('.hero');
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const atTop = y < 24;
      header.classList.toggle('is-top', atTop);
      header.classList.toggle('is-scrolled', !atTop);
      if (actionBar && hero) actionBar.classList.toggle('is-visible', y > hero.offsetHeight * 0.55);
      parallax();
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();

    // Scroll-spy
    const nav = $('.main-nav');
    const indicator = $('.nav-indicator');
    const links = $$('.nav-link');
    const moveIndicator = (link) => {
      if (!indicator) return;
      if (!link) { indicator.classList.remove('is-visible'); return; }
      const navBox = nav.getBoundingClientRect();
      const box = link.getBoundingClientRect();
      indicator.style.width = box.width + 'px';
      indicator.style.transform = `translateX(${box.left - navBox.left}px)`;
      indicator.classList.add('is-visible');
    };
    let current = null;
    const setActive = (id) => {
      current = links.find(l => l.dataset.spy === id) || null;
      links.forEach(l => {
        const on = l === current;
        l.classList.toggle('is-active', on);
        if (on) l.setAttribute('aria-current', 'location'); else l.removeAttribute('aria-current');
      });
      moveIndicator(current);
    };
    if ('IntersectionObserver' in window) {
      const sections = $$('main section[id]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id === 'reservar' ? null : e.target.id); });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(s => io.observe(s));
    }
    links.forEach(l => {
      l.addEventListener('mouseenter', () => moveIndicator(l));
      l.addEventListener('focus', () => moveIndicator(l));
    });
    if (nav) nav.addEventListener('mouseleave', () => moveIndicator(current));
    window.addEventListener('resize', () => moveIndicator(current));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => moveIndicator(current));
  }

  // Parallax ligero (solo transform, sin reflow)
  const parallaxEls = [];
  function parallax() {
    if (reducedMotion) return;
    const vh = window.innerHeight;
    parallaxEls.forEach(({ el, factor }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const offset = (r.top + r.height / 2 - vh / 2) * -factor;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    });
  }
  function initParallax() {
    if (reducedMotion) return;
    $$('[data-parallax]').forEach(el => parallaxEls.push({ el, factor: parseFloat(el.dataset.parallax) || 0.1 }));
    parallax();
  }

  // =========================================================================
  // 5. MENÚ MÓVIL (diálogo accesible con trampa de foco)
  // =========================================================================
  function initMobileMenu() {
    const toggle = $('.menu-toggle');
    const menu = $('#mobile-menu');
    if (!toggle || !menu) return;
    let closeTimer;

    const focusables = () => $$('a[href], button:not([disabled])', menu).concat([toggle]);
    const open = () => {
      clearTimeout(closeTimer);
      menu.hidden = false;
      void menu.offsetWidth;
      menu.classList.add('is-open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar menú');
      setTimeout(() => { const first = $('a', menu); if (first) first.focus({ preventScroll: true }); }, 150);
    };
    const close = (returnFocus = true) => {
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
      closeTimer = setTimeout(() => { menu.hidden = true; }, reducedMotion ? 0 : 600);
      if (returnFocus) toggle.focus({ preventScroll: true });
    };
    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

    toggle.addEventListener('click', () => (isOpen() ? close() : open()));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(false); });
    document.addEventListener('keydown', (e) => {
      if (!isOpen()) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); return; }
      if (e.key === 'Tab') {
        const f = focusables();
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (mq) => { if (mq.matches && isOpen()) close(false); });
  }

  // =========================================================================
  // 6. APARICIÓN PROGRESIVA
  // =========================================================================
  function initReveal() {
    const els = $$('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
    // Escalonado entre hermanos
    els.forEach(el => {
      if (el.style.getPropertyValue('--rd')) return;
      const sibs = Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'));
      const idx = sibs.indexOf(el);
      if (idx > 0) el.style.setProperty('--rd', Math.min(idx, 5) * 80 + 'ms');
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }

  // =========================================================================
  // 7. VALORA TU EXPERIENCIA (lógica "smart review" del proyecto)
  //    4-5★ → invitación a publicar en Google · 1-3★ → mensaje privado al bar
  // =========================================================================
  function initRating() {
    const fs = $('#rate-stars');
    if (!fs) return;
    const card = $('.rate-card');
    const label = $('#stars-label');
    const words = ['', 'Mejorable', 'Regular', 'Bien', 'Muy bien', '¡Excelente!'];
    fs.insertAdjacentHTML('beforeend', [1, 2, 3, 4, 5].map(n => `
      <input class="star-input" type="radio" name="rating" id="star-${n}" value="${n}" />
      <label class="star-label" for="star-${n}" data-n="${n}"><span class="sr-only">${n} ${n === 1 ? 'estrella' : 'estrellas'} · ${words[n]}</span>${icon('star')}</label>`).join(''));

    const labels = $$('.star-label', fs);
    let selected = 0;
    const paint = (n) => labels.forEach(l => l.classList.toggle('is-lit', +l.dataset.n <= n));
    labels.forEach(l => {
      l.addEventListener('mouseenter', () => { paint(+l.dataset.n); label.textContent = words[+l.dataset.n]; });
    });
    fs.addEventListener('mouseleave', () => { paint(selected); label.textContent = selected ? words[selected] : 'Toca las estrellas para valorar'; });

    const steps = { stars: $('[data-step="stars"]', card), positive: $('[data-step="positive"]', card), negative: $('[data-step="negative"]', card) };
    const show = (name) => Object.entries(steps).forEach(([k, el]) => { el.hidden = k !== name; });
    const msg = $('#feedback-msg');
    const wa = $('#feedback-wa');
    const mail = $('#feedback-mail');

    const updatePrivateLinks = () => {
      const extra = msg && msg.value.trim() ? `\n\n${msg.value.trim()}` : '';
      const text = msgs().review(P.name, selected, extra);
      const subject = msgs().subject(P.name, selected);
      wa.href = whatsappUrl(text);
      if (mail) mail.href = `mailto:${P.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    };
    document.addEventListener('langchange', () => { if (selected) updatePrivateLinks(); });

    fs.addEventListener('change', (e) => {
      selected = +e.target.value;
      paint(selected);
      label.textContent = words[selected];
      const summary = `${'★'.repeat(selected)}${'☆'.repeat(5 - selected)} · ${selected}/5`;
      $$('[data-rate-summary]', card).forEach(s => { s.textContent = summary; });
      setTimeout(() => {
        if (selected >= 4) { show('positive'); $('[data-step="positive"] .btn', card).focus({ preventScroll: true }); }
        else { updatePrivateLinks(); show('negative'); msg.focus({ preventScroll: true }); }
      }, reducedMotion ? 0 : 380);
    });
    if (msg) msg.addEventListener('input', updatePrivateLinks);
    $$('[data-rate-back]', card).forEach(b => b.addEventListener('click', () => {
      show('stars');
      const checked = $(`#star-${selected}`);
      if (checked) checked.focus();
    }));
  }

  // =========================================================================
  // 7b. DESPLEGABLES DEL MENÚ MÓVIL (estilo y paquete) con el aspecto de la web.
  //     La lista del <select> nativo la pinta el sistema (blanca, sin estilo);
  //     se sustituye por un listbox propio y el <select> queda oculto debajo
  //     para que sus eventos "change" (cambio de estilo / paquete) sigan igual.
  // =========================================================================
  function initMobileSelects() {
    $$('.mobile-style').forEach((wrap, n) => {
      const sel = $('select', wrap);
      if (!sel || wrap.classList.contains('hidden')) return; // selector oculto (p. ej. el de estilos)
      if (sel.matches('[data-paquete-select]') && !sel.options.length && PKG) sel.innerHTML = PKG.optionsHtml();
      const labelText = ($('.sr-only', wrap) || {}).textContent || '';
      const id = `cselect-${n}`;

      const box = document.createElement('div');
      box.className = 'mobile-style cselect';
      box.innerHTML = `
        <button type="button" class="cselect__btn" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}">
          <span class="sr-only">${esc(labelText)}</span><span class="cselect__value"></span>
        </button>
        <ul class="cselect__list" id="${id}" role="listbox" aria-label="${esc(labelText)}" hidden></ul>`;
      wrap.after(box);
      wrap.classList.add('is-enhanced');

      const btn = $('.cselect__btn', box);
      const list = $('.cselect__list', box);
      const items = () => $$('[role="option"]', list);
      const render = () => {
        const current = sel.options[sel.selectedIndex];
        $('.cselect__value', btn).textContent = current ? current.text : '';
        list.innerHTML = Array.from(sel.options).map((o, i) =>
          `<li role="option" id="${id}-${i}" tabindex="-1" data-value="${esc(o.value)}" aria-selected="${o.value === sel.value}">${esc(o.text)}</li>`).join('');
      };
      const close = (focusBtn) => {
        if (list.hidden) return;
        list.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        if (focusBtn) btn.focus();
      };
      const open = () => {
        render();
        list.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        (items().find(li => li.getAttribute('aria-selected') === 'true') || items()[0]).focus();
      };
      const choose = (value) => {
        close(true);
        if (value === sel.value) return;
        sel.value = value;
        render();
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      };

      render();
      btn.addEventListener('click', () => (list.hidden ? open() : close(false)));
      list.addEventListener('click', (e) => {
        const li = e.target.closest('[role="option"]');
        if (li) choose(li.dataset.value);
      });
      list.addEventListener('keydown', (e) => {
        const all = items();
        const i = all.indexOf(document.activeElement);
        let next = null;
        if (e.key === 'ArrowDown') next = Math.min(i + 1, all.length - 1);
        if (e.key === 'ArrowUp') next = Math.max(i - 1, 0);
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = all.length - 1;
        if (next !== null) { e.preventDefault(); all[next].focus(); return; }
        if ((e.key === 'Enter' || e.key === ' ') && i > -1) { e.preventDefault(); choose(all[i].dataset.value); }
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(true); }
        if (e.key === 'Tab') close(false);
      });
      document.addEventListener('click', (e) => { if (!box.contains(e.target)) close(false); });
    });
  }

  // =========================================================================
  // 7c. FORMULARIO DE RESERVA (Paquete Premium)
  //     Nombre, teléfono, comensales, fecha, hora y comentarios. Las horas
  //     disponibles salen del horario de data.js (cada 30 min, hasta 1 h antes
  //     del cierre) y la solicitud se envía ya redactada por WhatsApp o email,
  //     en el idioma activo (sin email publicado, solo WhatsApp).
  //     En Profesional el botón abre WhatsApp con la petición de mesa ya escrita.
  // =========================================================================
  const BOOKING_FORM_STEPS = [
    { title: 'Rellena el formulario', desc: 'Nombre, teléfono, día, hora y número de comensales.' },
    { title: 'Envíalo por WhatsApp', desc: 'Se abre con tu solicitud ya escrita: solo tienes que enviarla.' },
    { title: 'Te confirmamos la mesa', desc: 'El equipo de la pizzería te responde para confirmar la reserva.' }
  ];
  const DAY_INDEX = { domingo: 0, lunes: 1, martes: 2, miercoles: 3, jueves: 4, viernes: 5, sabado: 6 };
  const plain = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const toMinutes = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + (m || 0); };
  const fmtTime = (min) => `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
  const isoDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  // Horario de data.js -> { díaSemana: [apertura, cierre] } en minutos ("Lunes a jueves" · "18:00 – 0:30")
  function openingByDay() {
    const out = {};
    // bookingHours de data.js: mismo horario todos los días (mientras no se conozca el horario completo)
    const bh = P.bookingHours;
    if (bh && bh.open && bh.close) {
      let open = toMinutes(bh.open), close = toMinutes(bh.close);
      if (close <= open) close += 24 * 60;
      for (let d = 0; d < 7; d++) out[d] = [open, close];
      return out;
    }
    (P.hours || []).forEach(h => {
      const text = plain(h.days);
      const days = text.match(/lunes|martes|miercoles|jueves|viernes|sabado|domingo/g) || [];
      const times = String(h.time).match(/\d{1,2}:\d{2}/g) || [];
      if (!days.length || times.length < 2) return;
      let [open, close] = times.map(toMinutes);
      if (close <= open) close += 24 * 60; // cierra pasada la medianoche
      let list = days.map(d => DAY_INDEX[d]);
      if (days.length === 2 && /\sa\s/.test(text)) {
        list = [];
        for (let d = DAY_INDEX[days[0]]; ; d = (d + 1) % 7) { list.push(d); if (d === DAY_INDEX[days[1]]) break; }
      }
      list.forEach(d => { out[d] = [open, close]; });
    });
    return out;
  }

  // Horas que se pueden reservar ese día (null = ese día no abre)
  function bookingSlots(dateStr) {
    const range = openingByDay()[new Date(`${dateStr}T12:00:00`).getDay()];
    if (!range) return null;
    const now = new Date();
    const earliest = dateStr === isoDate(now) ? now.getHours() * 60 + now.getMinutes() + 30 : 0;
    const slots = [];
    for (let t = Math.ceil(range[0] / 30) * 30; t <= range[1] - 60; t += 30) if (t >= earliest) slots.push(t);
    return slots;
  }

  function initBooking() {
    const dialog = $('#booking-dialog');
    const form = $('#booking-form');
    const opener = $('[data-booking-open]');
    if (!hasPkg('premium') || !dialog || !form || !opener || typeof dialog.showModal !== 'function') return;
    const field = (name) => form.elements.namedItem(name);
    const status = $('.booking-form__status', form);
    // Sin email publicado: solo se ofrece el envío por WhatsApp
    if (!P.email) $$('[data-channel="email"]', form).forEach(btn => btn.remove());
    const today = isoDate(new Date());
    const limit = new Date();
    limit.setMonth(limit.getMonth() + 3);
    field('fecha').min = today;
    field('fecha').max = isoDate(limit);

    const fillTimes = () => {
      const select = field('hora');
      const day = field('fecha').value;
      const previous = select.value;
      const slots = day ? bookingSlots(day) : undefined;
      const placeholder = !day ? 'Elige primero el día' : slots === null ? 'Ese día no abrimos' : !slots.length ? 'No quedan horas este día' : 'Elige una hora';
      select.innerHTML = `<option value="">${placeholder}</option>` + (slots || []).map(t => `<option value="${fmtTime(t)}">${fmtTime(t)}</option>`).join('');
      select.disabled = !slots || !slots.length;
      if (previous && (slots || []).some(t => fmtTime(t) === previous)) select.value = previous;
    };

    const setError = (name, message) => {
      const input = field(name);
      const box = input.closest('.field');
      box.classList.toggle('is-invalid', !!message);
      input.setAttribute('aria-invalid', message ? 'true' : 'false');
      $('.field__error', box).textContent = message || '';
    };
    const validate = () => {
      const guests = Number(field('comensales').value);
      const day = field('fecha').value;
      const errors = {
        nombre: field('nombre').value.trim().length >= 2 ? '' : 'Escribe tu nombre.',
        telefono: field('telefono').value.replace(/\D/g, '').length >= 9 ? '' : 'Escribe un teléfono válido.',
        comensales: guests >= 1 && guests <= 20 ? '' : 'Indica entre 1 y 20 comensales.',
        fecha: !day || day < today ? 'Elige el día.' : bookingSlots(day) === null ? 'Ese día no abrimos.' : '',
        hora: field('hora').value ? '' : 'Elige la hora.'
      };
      Object.entries(errors).forEach(([name, message]) => setError(name, message));
      const first = Object.keys(errors).find(name => errors[name]);
      if (first) field(first).focus();
      return !first;
    };

    opener.addEventListener('click', (e) => {
      e.preventDefault();
      status.hidden = true;
      if (!field('fecha').value || field('fecha').value < today) field('fecha').value = today;
      fillTimes();
      dialog.showModal();
      document.body.classList.add('dialog-open');
      field('nombre').focus();
    });
    dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); }); // clic en el fondo
    $$('[data-booking-close]', dialog).forEach(btn => btn.addEventListener('click', () => dialog.close()));

    form.addEventListener('click', (e) => {
      const step = e.target.closest('[data-guests-step]');
      if (!step) return;
      const input = field('comensales');
      input.value = Math.min(20, Math.max(1, (Number(input.value) || 0) + Number(step.dataset.guestsStep)));
      setError('comensales', '');
    });
    field('fecha').addEventListener('change', () => { fillTimes(); setError('fecha', ''); });
    ['nombre', 'telefono', 'comensales', 'hora'].forEach(name => field(name).addEventListener('input', () => setError(name, '')));
    // Al cambiar de idioma, el desplegable de horas vuelve a traducirse
    document.addEventListener('langchange', () => { if (dialog.open) fillTimes(); });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) return;
      const date = new Date(`${field('fecha').value}T12:00:00`);
      const booking = {
        name: field('nombre').value.trim(),
        phone: field('telefono').value.trim(),
        day: new Intl.DateTimeFormat(LOCALES[i18n.lang] || 'es-ES', { weekday: 'long', day: 'numeric', month: 'long' }).format(date),
        time: field('hora').value,
        guests: Number(field('comensales').value),
        notes: field('comentarios').value.trim()
      };
      const text = msgs().booking(P.name, booking);
      if (e.submitter && e.submitter.dataset.channel === 'email') {
        window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(msgs().bookingSubject(booking))}&body=${encodeURIComponent(text)}`;
        status.textContent = 'Te hemos abierto tu correo con la solicitud. Envíalo y te confirmamos la mesa.';
      } else {
        window.open(whatsappUrl(text), '_blank', 'noopener');
        status.textContent = 'Te hemos abierto WhatsApp con tu solicitud. Envía el mensaje y te confirmamos la mesa.';
      }
      status.hidden = false;
    });
  }

  // =========================================================================
  // 8. VARIOS: selector de estilos (demo), alias de URLs antiguas
  // =========================================================================
  function initMisc() {
    $$('[data-style-select]').forEach(sel => sel.addEventListener('change', () => {
      if (sel.value !== 'estilo9') window.location.href = `../${sel.value}/index.html`;
    }));

    // Alias de las URLs de la web oficial (/menu/, /sobre-nosotros/, /contacto/)
    const aliases = { '#menu': '#carta', '#sobre-nosotros': '#nosotros', '#reservas': '#reservar' };
    const target = aliases[location.hash];
    if (target) { history.replaceState(null, '', target); const el = $(target); if (el) el.scrollIntoView(); }

    // Menú móvil: numeración correlativa de las secciones que incluye el paquete
    $$('.mobile-links li').filter(li => getComputedStyle(li).display !== 'none').forEach((li, i) => {
      const num = $('.num', li);
      if (num) num.textContent = String(i + 1).padStart(2, '0');
    });
  }

  // =========================================================================
  // 9. IDIOMAS · Esencial: ES · Profesional: ES / EN · Premium: ES / EN / RO
  //    El HTML y data.js están en español. En otro idioma se traducen los textos y
  //    atributos visibles con el diccionario de i18n.js; un MutationObserver
  //    traduce también lo que el JavaScript pinta después (carta, jarra, etc.).
  //    Al cambiar de idioma se restauran primero los textos originales.
  // =========================================================================
  const i18n = { lang: 'es', texts: new Map(), attrs: new Map() };
  const I18N_ATTRS = ['aria-label', 'placeholder', 'alt', 'title'];
  const DICTS = window.PECORA_I18N || {};
  const LANGS = !hasPkg('profesional') ? ['es'] : hasPkg('premium') ? ['es', 'en', 'ro'] : ['es', 'en'];
  const LANG_INFO = {
    es: { code: 'ES', label: 'Ver la web en español', short: 'Ver en español' },
    en: { code: 'EN', label: 'View this website in English', short: 'View in English' },
    ro: { code: 'RO', label: 'Vezi site-ul în limba română', short: 'Vezi în română' }
  };
  // Textos que se generan al vuelo (WhatsApp y email), en el idioma activo
  const MSGS = {
    es: {
      hello: (n) => `Hola, os escribo desde la web de ${n}.`,
      bookingAsk: (n) => `Hola, me gustaría reservar mesa en ${n}. Somos … personas para el día … a las …`,
      review: (n, r, x) => `Hola, estuve en ${n} y quería comentaros mi experiencia (valoración ${r}/5).${x}`,
      subject: (n, r) => `Mi experiencia en ${n} (${r}/5)`,
      booking: (n, b) => `Hola, me gustaría reservar mesa en ${n}:\n\n• Nombre: ${b.name}\n• Teléfono: ${b.phone}\n• Día: ${b.day}\n• Hora: ${b.time}\n• Comensales: ${b.guests}${b.notes ? `\n• Comentarios: ${b.notes}` : ''}\n\n¿Me confirmáis la reserva? ¡Gracias!`,
      bookingSubject: (b) => `Reserva de mesa · ${b.day}, ${b.time} · ${b.guests} ${b.guests === 1 ? 'persona' : 'personas'}`
    },
    en: {
      hello: (n) => `Hi, I'm writing from the ${n} website.`,
      bookingAsk: (n) => `Hi, I'd like to book a table at ${n}. We are … people, on … at …`,
      review: (n, r, x) => `Hi, I visited ${n} and wanted to share my experience (rating ${r}/5).${x}`,
      subject: (n, r) => `My experience at ${n} (${r}/5)`,
      booking: (n, b) => `Hi, I'd like to book a table at ${n}:\n\n• Name: ${b.name}\n• Phone: ${b.phone}\n• Date: ${b.day}\n• Time: ${b.time}\n• Guests: ${b.guests}${b.notes ? `\n• Comments: ${b.notes}` : ''}\n\nCould you confirm the booking? Thank you!`,
      bookingSubject: (b) => `Table booking · ${b.day}, ${b.time} · ${b.guests} ${b.guests === 1 ? 'person' : 'people'}`
    },
    ro: {
      hello: (n) => `Bună ziua, vă scriu de pe site-ul ${n}.`,
      bookingAsk: (n) => `Bună ziua, aș dori să rezerv o masă la ${n}. Suntem … persoane, în ziua … la ora …`,
      review: (n, r, x) => `Bună ziua, am fost la ${n} și aș vrea să vă povestesc experiența mea (nota ${r}/5).${x}`,
      subject: (n, r) => `Experiența mea la ${n} (${r}/5)`,
      booking: (n, b) => `Bună ziua, aș dori să rezerv o masă la ${n}:\n\n• Nume: ${b.name}\n• Telefon: ${b.phone}\n• Data: ${b.day}\n• Ora: ${b.time}\n• Persoane: ${b.guests}${b.notes ? `\n• Observații: ${b.notes}` : ''}\n\nÎmi puteți confirma rezervarea? Mulțumesc!`,
      bookingSubject: (b) => `Rezervare masă · ${b.day}, ${b.time} · ${b.guests} ${b.guests === 1 ? 'persoană' : 'persoane'}`
    }
  };
  const LOCALES = { es: 'es-ES', en: 'en-GB', ro: 'ro-RO' };
  const msgs = () => MSGS[i18n.lang] || MSGS.es;
  const ES_META = { title: document.title, description: ($('meta[name="description"]') || {}).content };

  function tr(s) {
    const D = DICTS[i18n.lang];
    if (!D) return null;
    if (Object.prototype.hasOwnProperty.call(D.dict, s)) return D.dict[s];
    for (const [re, fn] of D.patterns) {
      const m = s.match(re);
      if (m) { const out = fn(m, x => tr(x) || x); if (out) return out; }
    }
    if (s.includes(' · ')) {
      const parts = s.split(' · ');
      const out = parts.map(p => tr(p) || p);
      if (out.some((p, i) => p !== parts[i])) return out.join(' · ');
    }
    return null;
  }

  const skipNode = (el) => !el || el.closest('script, style, noscript, .review__text, [translate="no"]');
  function translateTextNode(node) {
    if (skipNode(node.parentElement)) return;
    const raw = node.nodeValue;
    const rec = i18n.texts.get(node);
    if (rec && raw === rec.out) return;
    const m = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const out = m[2] && tr(m[2]);
    if (!out || out === m[2]) return;
    const value = m[1] + out + m[3];
    i18n.texts.set(node, { es: raw, out: value });
    node.nodeValue = value;
  }
  function translateAttrs(el) {
    if (skipNode(el)) return;
    I18N_ATTRS.forEach(a => {
      const v = el.getAttribute(a);
      if (!v) return;
      const rec = i18n.attrs.get(el) || {};
      if (rec[a] && rec[a].out === v) return;
      const out = tr(v.trim());
      if (!out || out === v) return;
      rec[a] = { es: v, out };
      i18n.attrs.set(el, rec);
      el.setAttribute(a, out);
    });
  }
  function translateTree(root) {
    if (root.nodeType === 3) { translateTextNode(root); return; }
    if (root.nodeType !== 1) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) translateTextNode(n);
    translateAttrs(root);
    root.querySelectorAll(I18N_ATTRS.map(a => `[${a}]`).join(',')).forEach(translateAttrs);
  }
  function restoreSpanish() {
    i18n.texts.forEach((rec, node) => { if (node.nodeValue === rec.out) node.nodeValue = rec.es; });
    i18n.attrs.forEach((rec, el) => Object.keys(rec).forEach(a => { if (el.getAttribute(a) === rec[a].out) el.setAttribute(a, rec[a].es); }));
    i18n.texts.clear();
    i18n.attrs.clear();
  }

  // Con dos idiomas el botón alterna ES / EN; con tres (Premium) abre el menú de idiomas
  const hasLangMenu = () => LANGS.length > 2 && !!$('#lang-menu');

  function setLang(lang, { save = true } = {}) {
    if (!LANGS.includes(lang)) lang = 'es';
    restoreSpanish();
    i18n.lang = lang;
    document.documentElement.lang = lang;
    if (lang !== 'es') translateTree(document.body);
    const meta = (lang !== 'es' && DICTS[lang] && DICTS[lang].meta) || ES_META;
    document.title = meta.title;
    const desc = $('meta[name="description"]');
    if (desc) desc.content = meta.description;
    const next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
    $$('[data-lang-toggle]').forEach(btn => {
      btn.dataset.lang = lang;
      const code = $('[data-lang-code]', btn);
      if (code) code.textContent = LANG_INFO[lang].code;
      if (hasLangMenu()) return;
      btn.setAttribute('aria-label', LANG_INFO[next].label);
      btn.title = LANG_INFO[next].short;
    });
    $$('[data-set-lang]').forEach(item => item.setAttribute('aria-checked', String(item.dataset.setLang === lang)));
    bindData();
    if (save) { try { localStorage.setItem('pecora_lang', lang); } catch (e) { /* sin almacenamiento */ } }
    document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  function initI18n() {
    new MutationObserver((muts) => {
      if (i18n.lang === 'es') return;
      muts.forEach(m => {
        if (m.type === 'childList') m.addedNodes.forEach(translateTree);
        else if (m.type === 'characterData') translateTextNode(m.target);
        else if (m.type === 'attributes') translateAttrs(m.target);
      });
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: I18N_ATTRS });

    const flip = (btn) => {
      btn.classList.remove('is-flipping');
      void btn.offsetWidth;
      btn.classList.add('is-flipping');
    };
    const menu = $('#lang-menu');
    const items = menu ? $$('[data-set-lang]', menu) : [];
    const toggles = $$('[data-lang-toggle]');
    const closeMenu = (focusToggle) => {
      if (!menu || menu.hidden) return;
      menu.hidden = true;
      toggles.forEach(b => b.setAttribute('aria-expanded', 'false'));
      if (focusToggle && toggles[0]) toggles[0].focus();
    };

    if (hasLangMenu()) {
      toggles.forEach(btn => {
        btn.setAttribute('aria-haspopup', 'menu');
        btn.setAttribute('aria-controls', 'lang-menu');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Idioma · Language · Limba');
        btn.title = 'Idioma · Language · Limba';
      });
      menu.addEventListener('click', (e) => {
        const item = e.target.closest('[data-set-lang]');
        if (!item) return;
        closeMenu(true);
        if (item.dataset.setLang !== i18n.lang) { flip(toggles[0]); setLang(item.dataset.setLang); }
      });
      menu.addEventListener('keydown', (e) => {
        const i = items.indexOf(document.activeElement);
        let next = null;
        if (e.key === 'ArrowDown') next = (i + 1) % items.length;
        if (e.key === 'ArrowUp') next = (i - 1 + items.length) % items.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = items.length - 1;
        if (next !== null) { e.preventDefault(); items[next].focus(); }
        if (e.key === 'Tab') closeMenu(false);
      });
      document.addEventListener('click', (e) => { if (!e.target.closest('.lang-switch')) closeMenu(false); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(true); });
    }

    toggles.forEach(btn => btn.addEventListener('click', () => {
      if (hasLangMenu()) {
        const open = menu.hidden;
        if (!open) { closeMenu(false); return; }
        menu.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        const current = items.find(it => it.dataset.setLang === i18n.lang) || items[0];
        if (current) current.focus();
        return;
      }
      flip(btn);
      setLang(i18n.lang === 'es' ? 'en' : 'es');
    }));

    // Paquete Esencial: un solo idioma (español)
    if (LANGS.length < 2) return;
    let initial = new URLSearchParams(location.search).get('lang');
    if (!initial) { try { initial = localStorage.getItem('pecora_lang'); } catch (e) { /* sin almacenamiento */ } }
    if (initial && initial !== 'es' && LANGS.includes(initial)) setLang(initial, { save: false });
  }

  function init() {
    bindData();
    renderStatic();
    initMenu();
    initHeader();
    initParallax();
    initMobileMenu();
    initMobileSelects();
    initReveal();
    initRating();
    initBooking();
    lazyMap();
    initMisc();
    initI18n();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
