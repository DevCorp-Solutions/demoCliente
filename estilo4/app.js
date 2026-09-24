/**
 * DevCorp GastroSuite · ESTILO 4 (Showcase Visual) — Cafetería Veinti7 Cervecería
 * Módulo autónomo: lee los datos reales de ./data.js (window.CURRENT_PRESET) y
 * pinta carta, reseñas, horarios y microinteracciones sobre el HTML semántico.
 * Sin dependencias externas.
 */
(function () {
  'use strict';

  const P = window.CURRENT_PRESET || {};
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
      else if (key === 'whatsapp') href = whatsappUrl(`Hola, os escribo desde la web de ${P.name}.`);
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
        <div class="menu-feature">
          <img src="${esc(g.image)}" alt="" loading="lazy" decoding="async" width="540" height="400" />
          <p class="menu-feature__kicker">${P.menu.filter(m => groupOf(m) === g.id).length} referencias</p>
          <h3>${esc(g.title)}</h3>
          <p>${g.id === 'raciones' ? 'Ideales para acompañar con cada una de nuestras cervezas.' : 'Servimos una selección especial de cervezas artesanales, siempre a la temperatura perfecta.'}</p>
        </div>
        <div class="menu-body" data-body="${g.id}"></div>
      </div>`).join('');

    groups.forEach(g => renderGroup(g));

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

  function renderGroup(group, filter = 'all') {
    const body = $(`[data-body="${group.id}"]`);
    if (!body) return;
    const items = P.menu.filter(m => groupOf(m) === group.id);
    const cats = (group.categories || []).filter(c => items.some(m => m.category === c));

    if (group.id === 'raciones' || cats.length <= 1) {
      body.innerHTML = `
        <ul class="dish-grid">
          ${items.map((d, i) => `
            <li class="dish" style="--i:${i}">
              <span class="dish__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4 class="dish__name">${esc(d.name)}</h4>
                ${d.description ? `<span class="beer__desc">${esc(d.description)}</span>` : ''}
              </div>
              ${d.price ? `<span class="dish__price">${fmtNum(d.price)}${d.priceMax ? ' – ' + fmtNum(d.priceMax) : ''} €</span>` : '<span class="price price--ask">Consultar en barra</span>'}
            </li>`).join('')}
        </ul>
        <p class="menu-note">Precios en euros según nuestra carta.</p>`;
      return;
    }

    const chips = [['all', 'Todas', items.length]].concat(cats.map(c => [c, c, items.filter(m => m.category === c).length]));
    const shown = filter === 'all' ? cats : [filter];
    let n = 0;
    body.innerHTML = `
      <div class="menu-filters" role="group" aria-label="Filtrar cervezas por marca">
        ${chips.map(([val, label, count]) => `<button type="button" class="chip" data-filter="${esc(val)}" aria-pressed="${val === filter}">${esc(label)} <span class="chip__count">${count}</span></button>`).join('')}
      </div>
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
      <li class="beer" style="--i:${i}">
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
      const text = `Hola, estuve en ${P.name} y quería comentaros mi experiencia (valoración ${selected}/5).${extra}`;
      wa.href = whatsappUrl(text);
      mail.href = `mailto:${P.email}?subject=${encodeURIComponent(`Mi experiencia en ${P.name} (${selected}/5)`)}&body=${encodeURIComponent(text)}`;
    };

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
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
