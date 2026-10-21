/**
 * DevCorp GastroSuite · ESTILO 4 (Showcase Visual) — Cafetería Veinti7 Cervecería
 * Módulo autónomo: lee los datos reales de ./data.js (window.CURRENT_PRESET) y
 * pinta carta, reseñas, horarios y microinteracciones sobre el HTML semántico.
 * Sin dependencias externas.
 */
(function () {
  'use strict';

  const P = window.CURRENT_PRESET || {};
  // Paquete contratado (paquete.js). Esencial: carta básica sin fotos por plato,
  // sin filtros ni jarra interactiva y en un solo idioma.
  const PKG = window.DevcorpPaquete;
  const hasPkg = (min) => !PKG || PKG.has(min);
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const icon = (id, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

  // ---------- Formato de precios y graduación (formato de la carta oficial) ----------
  const fmtNum = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ','));
  function priceHTML(item) {
    if (!item.price) return `<span class="price price--ask">Consultar en barra</span>`;
    const txt = item.priceMax ? `${fmtNum(item.price)} – ${fmtNum(item.priceMax)} €` : `${fmtNum(item.price)} €`;
    return `<span class="price">${txt}</span>`;
  }
  const abvText = (abv) => `${abv.toFixed(1).replace('.', ',')} % vol`;

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
      stepsEl.innerHTML = (P.bookingSteps || []).map(s => `
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

  function renderHeroCards() {
    const beers = (P.menu || []).filter(m => m.abv && m.price);
    const star = beers.sort((a, b) => b.abv - a.abv)[0];
    const dishEl = $('[data-render="hero-dish"]');
    if (dishEl && star) {
      dishEl.innerHTML = `
        <p class="float-card__kicker">Desde la carta</p>
        <div class="float-card__row">
          <div>
            <p class="float-card__name">${esc(star.name)}</p>
            <p class="float-card__meta">${esc(star.category)} · ${abvText(star.abv)}</p>
          </div>
          <span class="float-card__price">${fmtNum(star.price)}${star.priceMax ? '–' + fmtNum(star.priceMax) : ''} €</span>
        </div>`;
    } else if (dishEl) dishEl.remove();

    const review = (P.googleReviews || [])[0];
    const revEl = $('[data-render="hero-review"]');
    if (revEl && review) {
      const short = review.comment.length > 110 ? review.comment.slice(0, 107).trim() + '…' : review.comment;
      revEl.innerHTML = `
        <div class="float-card__stars">${starsHTML(review.rating)}</div>
        <p class="float-card__quote">“${esc(short)}”</p>
        <p class="float-card__author">${icon('google')} ${esc(review.author)}</p>`;
    } else if (revEl) revEl.remove();
  }

  function renderTicker() {
    const el = $('[data-render="ticker"]');
    if (!el) return;
    const names = (P.menu || []).map(m => m.name);
    if (!names.length) { el.parentElement.remove(); return; }
    const row = names.map(n => `<span class="ticker__item">${esc(n)}${icon('beer')}</span>`).join('');
    el.innerHTML = row + row; // duplicado para bucle continuo
  }

  // =========================================================================
  // 3. CARTA INTERACTIVA (tabs + filtros, sin recargar)
  // =========================================================================
  const menuState = { group: 0, filter: 'all' };

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
        ${icon(g.id === 'raciones' ? 'plate' : 'beer')}<span>${esc(g.label)}</span><span class="menu-tab__count">${count}</span>
      </button>`;
    }).join('') + '<span class="menu-tabs__pill" aria-hidden="true"></span>';
    tabsEl.dataset.active = '0';

    panelsEl.innerHTML = groups.map((g, i) => `
      <div class="menu-panel" role="tabpanel" id="panel-${g.id}" aria-labelledby="tab-${g.id}" tabindex="0" ${i === 0 ? '' : 'hidden'} data-group="${g.id}">
        <div class="menu-aside">
          <div class="menu-feature" data-feature="${g.id}">
            <img class="menu-feature__img" src="${esc(g.image)}" alt="" loading="lazy" decoding="async" width="540" height="400" />
            <div class="menu-feature__copy" aria-live="polite">
              <p class="menu-feature__kicker">${P.menu.filter(m => groupOf(m) === g.id).length} referencias</p>
              <h3 class="menu-feature__title">${esc(g.title)}</h3>
              <p class="menu-feature__text">${g.id === 'raciones' ? `Ideales para acompañar con cada una de nuestras cervezas.${hasPkg('profesional') ? ' Toca un plato para verlo.' : ''}` : 'Servimos una selección especial de cervezas artesanales, siempre a la temperatura perfecta.'}</p>
            </div>
          </div>
          ${g.id === 'raciones' || !hasPkg('profesional') ? '' : pourPanelHTML()}
        </div>
        <div class="menu-body" data-body="${g.id}"></div>
      </div>`).join('');

    groups.forEach(g => renderGroup(g));
    initPour();

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
      updateDock();
      // Si el usuario estaba abajo en la lista, vuelve al inicio de la carta
      const app = $('#menu-app');
      const top = app.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top - 70, behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  }

  function renderGroup(group, filter = 'all') {
    const body = $(`[data-body="${group.id}"]`);
    if (!body) return;
    const items = P.menu.filter(m => groupOf(m) === group.id);
    const cats = (group.categories || []).filter(c => items.some(m => m.category === c));

    if (group.id === 'raciones' || cats.length <= 1) {
      body.innerHTML = `
        <ul class="dish-grid">
          ${items.map((d, i) => `
            <li class="dish${dishState.id === d.id ? ' is-selected' : ''}" style="--i:${i}">
              ${d.image && hasPkg('profesional') ? `<button type="button" class="dish__pick" data-dish="${esc(d.id)}" aria-label="Ver foto de ${esc(d.name)}" aria-pressed="${dishState.id === d.id}"></button>` : ''}
              <span class="dish__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
              <div>
                <div class="dish__title">
                  <h4 class="dish__name">${esc(d.name)}</h4>
                  ${allergensHTML(d)}
                </div>
                ${d.description ? `<span class="beer__desc">${esc(d.description)}</span>` : ''}
              </div>
              ${d.price ? `<span class="dish__price">${fmtNum(d.price)}${d.priceMax ? ' – ' + fmtNum(d.priceMax) : ''} €</span>` : '<span class="price price--ask">Consultar en barra</span>'}
            </li>`).join('')}
        </ul>
        <p class="menu-note">Precios en euros según nuestra carta.</p>
        ${items.some(d => (d.allergens || []).length) ?'<p class="menu-note">Alérgenos según la receta de cada plato. Si tienes alguna alergia o intolerancia, avísanos en barra antes de pedir.</p>' : ''}`;
      return;
    }

    const chips = [['all', 'Todas', items.length]].concat(cats.map(c => [c, c, items.filter(m => m.category === c).length]));
    const shown = filter === 'all' ? cats : [filter];
    let n = 0;
    body.innerHTML = `
      ${hasPkg('profesional') ? `<div class="menu-filters" role="group" aria-label="Filtrar cervezas por marca">
        ${chips.map(([val, label, count]) => `<button type="button" class="chip" data-filter="${esc(val)}" aria-pressed="${val === filter}">${esc(label)} <span class="chip__count">${count}</span></button>`).join('')}
      </div>` : ''}
      <div class="beer-groups" aria-live="polite">
        ${shown.map(cat => `
          <section class="beer-group" aria-label="${esc(cat)}">
            <h4 class="beer-group__title">${esc(cat)}</h4>
            <ul class="beer-list">
              ${items.filter(m => m.category === cat).map(b => beerRow(b, n++)).join('')}
            </ul>
          </section>`).join('')}
      </div>
      <p class="menu-note">Precios en euros según nuestra carta.</p>`;

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

  function beerRow(b, i) {
    const tags = (b.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('') + (b.badge ? `<span class="tag tag--dark">${esc(b.badge)}</span>` : '');
    const hasAbv = typeof b.abv === 'number';
    const pct = hasAbv ? Math.min(100, (b.abv / 8) * 100) : 0;
    return `
      <li class="beer${pourState.id === b.id ? ' is-poured' : ''}" style="--i:${i}">
        ${hasPkg('profesional') ? `<button type="button" class="beer__pour" data-pour="${esc(b.id)}" aria-label="Servir ${esc(b.name)}" aria-pressed="${pourState.id === b.id}"></button>` : ''}
        <div>
          <span class="beer__name">${esc(b.name)}${tags}</span>
          ${b.description ? `<span class="beer__desc">${esc(b.description)}</span>` : ''}
        </div>
        ${hasAbv ? `
          <div class="abv">
            <span class="abv__bar" aria-hidden="true"><span class="abv__fill" style="--w:${pct}%; --i:${i}"></span></span>
            <span class="abv__label">${abvText(b.abv)}</span>
          </div>` : '<div class="abv" aria-hidden="true"></div>'}
        ${priceHTML(b)}
      </li>`;
  }

  // =========================================================================
  // 3b. "TE LA SERVIMOS": jarra animada con la marca de la cerveza elegida
  //     La marca se muestra como emblema tipográfico. Si un producto tiene
  //     "logo" en data.js (ruta a la imagen oficial), se usa esa imagen.
  // =========================================================================
  const pourState = { id: null, inCarta: false, dismissed: false };

  const brandOf = (b) => b.brand || (b.category === 'Importaciones' ? b.name : b.category);
  function beerColor(b) {
    if (b.color) return b.color;
    const txt = `${b.name} ${b.description || ''}`.toLowerCase();
    if (/dunkel|negra|stout/.test(txt)) return '#4a2311';
    if (/roja/.test(txt)) return '#8e3514';
    if (/tostada/.test(txt)) return '#a24e17';
    return '#f0a938';
  }

  function mugSVG() {
    const foam = [52, 66, 80, 94, 108, 122, 136, 148].map((x, i) => `<circle cx="${x}" cy="${44 + (i % 2) * 6}" r="${12 + (i % 3) * 2}"/>`).join('');
    const bubbles = [62, 78, 96, 112, 130, 142].map((x, i) => `<circle class="pour__bubble" cx="${x}" cy="220" r="${1.6 + (i % 3) * .8}" style="--b:${i}"/>`).join('');
    return `
      <svg viewBox="0 0 220 250" class="pour__svg" focusable="false">
        <defs>
          <clipPath id="pour-clip"><rect x="46" y="42" width="108" height="184" rx="11"/></clipPath>
          <clipPath id="pour-logo-clip"><circle cx="100" cy="146" r="31"/></clipPath>
          <linearGradient id="pour-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color: var(--beer-light)"/>
            <stop offset="1" style="stop-color: var(--beer)"/>
          </linearGradient>
        </defs>
        <rect class="pour__stream" x="96" y="-20" width="8" height="120" rx="4" fill="url(#pour-grad)"/>
        <path class="pour__handle" d="M158 84h14a28 28 0 0 1 28 28v52a28 28 0 0 1-28 28h-14" fill="none" stroke-width="12" stroke-linecap="round"/>
        <g clip-path="url(#pour-clip)">
          <g class="pour__liquid">
            <rect x="40" y="62" width="130" height="180" fill="url(#pour-grad)"/>
            ${bubbles}
          </g>
        </g>
        <g class="pour__foam" fill="#fffaf0">
          <rect x="46" y="44" width="108" height="26" rx="8"/>
          ${foam}
        </g>
        <rect class="pour__glass" x="40" y="36" width="120" height="196" rx="16" fill="none" stroke-width="6"/>
        <g class="pour__dimples" stroke-width="3" stroke-linecap="round">
          <path d="M66 86v124M134 86v124"/>
        </g>
        <rect x="52" y="54" width="7" height="150" rx="3.5" fill="#fff" opacity=".22"/>
        <g class="pour__emblem">
          <circle cx="100" cy="146" r="36" fill="#fff"/>
          <circle cx="100" cy="146" r="36" fill="none" stroke="var(--red)" stroke-width="3"/>
          <circle cx="100" cy="146" r="30" fill="none" stroke="var(--red)" stroke-width="1" stroke-dasharray="2 3"/>
          <image class="pour__logo" x="69" y="115" width="62" height="62" clip-path="url(#pour-logo-clip)" preserveAspectRatio="xMidYMid meet" href=""/>
          <g class="pour__brand-text">
            <text class="pour__brand" x="100" y="148" text-anchor="middle"></text>
            <text class="pour__abv" x="100" y="163" text-anchor="middle"></text>
          </g>
        </g>
      </svg>`;
  }

  function pourPanelHTML() {
    return `
      <div class="pour" data-state="empty">
        <button type="button" class="pour__close" aria-label="Cerrar"><span aria-hidden="true">×</span></button>
        <div class="pour__stage" aria-hidden="true">${mugSVG()}</div>
        <div class="pour__info" aria-live="polite">
          <p class="pour__kicker">¿Cuál te pongo?</p>
          <p class="pour__name">Toca una cerveza de la carta y te la servimos</p>
          <p class="pour__meta"></p>
          <a class="pour__cta link-arrow" href="#reservar">Reservar mesa${icon('arrow')}</a>
        </div>
      </div>`;
  }

  function pour(beer) {
    const panel = $('.pour');
    if (!panel || !beer) return;
    pourState.id = beer.id;

    const color = beerColor(beer);
    panel.style.setProperty('--beer', color);
    panel.style.setProperty('--beer-light', `color-mix(in srgb, ${color} 70%, #fff6d8)`);

    const brand = brandOf(beer);
    const brandEl = $('.pour__brand', panel);
    brandEl.textContent = brand;
    brandEl.style.fontSize = brand.length <= 6 ? '16px' : brand.length <= 9 ? '13px' : '10.5px';
    if (brand.length > 11) brandEl.setAttribute('textLength', '58'); else brandEl.removeAttribute('textLength');
    $('.pour__abv', panel).textContent = typeof beer.abv === 'number' ? `${beer.abv.toFixed(1).replace('.', ',')} %` : '';
    const logo = $('.pour__logo', panel);
    logo.setAttribute('href', beer.logo || '');
    panel.classList.toggle('has-logo', !!beer.logo);

    $('.pour__kicker', panel).textContent = `Marchando · ${beer.category}`;
    $('.pour__name', panel).textContent = beer.name;
    const price = !beer.price ? 'Consultar en barra' : beer.priceMax ? `${fmtNum(beer.price)} – ${fmtNum(beer.priceMax)} €` : `${fmtNum(beer.price)} €`;
    $('.pour__meta', panel).textContent = [typeof beer.abv === 'number' ? abvText(beer.abv) : beer.description, price].filter(Boolean).join(' · ');

    panel.dataset.state = 'poured';
    panel.classList.remove('is-pouring');
    void panel.offsetWidth; // reinicia la animación en cada clic
    panel.classList.add('is-pouring');

    $$('[data-pour]').forEach(btn => {
      const on = btn.dataset.pour === beer.id;
      btn.setAttribute('aria-pressed', String(on));
      btn.closest('.beer').classList.toggle('is-poured', on);
    });

    // En móvil la jarra queda acoplada a la barra inferior mientras se está en la carta
    pourState.dismissed = false;
    updateDock();
  }

  // Móvil: tarjeta de la jarra fijada sobre la barra de acciones, solo dentro de #carta
  const mqMobile = window.matchMedia('(max-width: 767px)');
  function updateDock() {
    const panel = $('.pour');
    if (!panel) return;
    const tabVisible = !panel.closest('.menu-panel').hidden;
    const on = !!(mqMobile.matches && pourState.inCarta && pourState.id && tabVisible && !pourState.dismissed);
    panel.classList.toggle('is-open', on);
    document.body.classList.toggle('pour-docked', on);
  }

  // =========================================================================
  // 3c. RACIONES: al tocar un plato, su foto entra en la tarjeta lateral
  //     (fundido + zoom de entrada; mismo tratamiento que el resto de imágenes)
  // =========================================================================
  const dishState = { id: null, token: 0 };

  function showDish(dish) {
    const card = $('[data-feature="raciones"]');
    if (!card || !dish || !dish.image) return;
    dishState.id = dish.id;
    const token = ++dishState.token;
    const idx = P.menu.filter(m => groupOf(m) === 'raciones').findIndex(m => m.id === dish.id);

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
      $('.menu-feature__kicker', copy).textContent = `Ración ${String(idx + 1).padStart(2, '0')}`;
      $('.menu-feature__title', copy).textContent = dish.name;
      $('.menu-feature__text', copy).textContent = dish.price ? `${fmtNum(dish.price)} € · Imagen orientativa` : 'Imagen orientativa';

    };
    if (next.complete) swap(); else { next.onload = swap; next.onerror = swap; }
  }

  function initPour() {
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
      const btn = e.target.closest('[data-pour]');
      if (btn) pour(P.menu.find(m => m.id === btn.dataset.pour));
      if (e.target.closest('.pour__close')) { pourState.dismissed = true; updateDock(); }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $('.pour.is-open')) { pourState.dismissed = true; updateDock(); }
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

    const carta = $('#carta');
    if (carta && 'IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        pourState.inCarta = entry.isIntersecting;
        updateDock();
      }, { rootMargin: '-30% 0px -30% 0px' }).observe(carta);
    }
    mqMobile.addEventListener('change', updateDock);
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
      mail.href = `mailto:${P.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
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
  // 8. VARIOS: selector de estilos (demo), alias de URLs antiguas
  // =========================================================================
  function initMisc() {
    $$('[data-style-select]').forEach(sel => sel.addEventListener('change', () => {
      if (sel.value !== 'estilo4') window.location.href = `../${sel.value}/index.html`;
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
  const DICTS = window.VEINTI7_I18N || {};
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
      review: (n, r, x) => `Hola, estuve en ${n} y quería comentaros mi experiencia (valoración ${r}/5).${x}`,
      subject: (n, r) => `Mi experiencia en ${n} (${r}/5)`
    },
    en: {
      hello: (n) => `Hi, I'm writing from the ${n} website.`,
      review: (n, r, x) => `Hi, I visited ${n} and wanted to share my experience (rating ${r}/5).${x}`,
      subject: (n, r) => `My experience at ${n} (${r}/5)`
    },
    ro: {
      hello: (n) => `Bună ziua, vă scriu de pe site-ul ${n}.`,
      review: (n, r, x) => `Bună ziua, am fost la ${n} și aș vrea să vă povestesc experiența mea (nota ${r}/5).${x}`,
      subject: (n, r) => `Experiența mea la ${n} (${r}/5)`
    }
  };
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
    if (save) { try { localStorage.setItem('veinti7_lang', lang); } catch (e) { /* sin almacenamiento */ } }
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
    if (!initial) { try { initial = localStorage.getItem('veinti7_lang'); } catch (e) { /* sin almacenamiento */ } }
    if (initial && initial !== 'es' && LANGS.includes(initial)) setLang(initial, { save: false });
  }

  function init() {
    bindData();
    renderStatic();
    initMenu();
    initHeader();
    initParallax();
    initMobileMenu();
    initReveal();
    initRating();
    lazyMap();
    initMisc();
    initI18n();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
