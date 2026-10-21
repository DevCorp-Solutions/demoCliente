/**
 * DevCorp Solutions · Paquetes comerciales (Esencial · Profesional · Premium)
 * Sistema adaptado a las especificaciones comerciales para hostelería.
 */
(function () {
  'use strict';

  var KEY = 'devcorp_paquete_v2';
  var LANG_KEY = 'devcorp_lang_v2';

  // Desactivar restauración automática de scroll del navegador para evitar saltos indeseados
  if ('scrollRestoration' in history) {
    try { history.scrollRestoration = 'manual'; } catch (e) {}
  }

  function resetAllScroll() {
    var targets = [document.documentElement, document.body, document.getElementById('dc-root')];
    var hosts = document.querySelectorAll('.sc-host');
    for (var j = 0; j < hosts.length; j++) targets.push(hosts[j]);

    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (!el) continue;
      var prev = el.style.scrollBehavior;
      el.style.scrollBehavior = 'auto';
      el.scrollTop = 0;
      el.style.scrollBehavior = prev;
    }
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); }
  }

  // Si se solicitó volver arriba tras cambiar paquete
  if (sessionStorage.getItem('devcorp_scroll_top') === '1') {
    sessionStorage.removeItem('devcorp_scroll_top');
    resetAllScroll();
    setTimeout(resetAllScroll, 60);
    setTimeout(resetAllScroll, 200);
  }

  var LIST = [
    { 
      id: 'esencial', 
      label: 'Paquete Esencial', 
      price: '590 €',
      badgeClass: 'badge-esencial',
      summary: 'Landing 1 pág. · Carta hasta 60 platos · Teléfono info · Sin fotos de plato · 1 Idioma'
    },
    { 
      id: 'profesional', 
      label: 'Paquete Profesional', 
      price: '1.190 €',
      badgeClass: 'badge-profesional',
      summary: 'Web completa · Carta ilimitada + Filtros alérgenos · Fotos por plato · Panel edición · 2 Idiomas'
    },
    { 
      id: 'premium', 
      label: 'Paquete Premium', 
      price: 'desde 2.490 €',
      badgeClass: 'badge-premium',
      summary: 'Web a medida · Reserva Integrada · Eventos y Grupos · Blog · Widget Reseñas · 3 Idiomas'
    }
  ];

  var RANK = { esencial: 0, profesional: 1, premium: 2 };
  var DEFAULT = 'premium';

  var valid = function (v) { return Object.prototype.hasOwnProperty.call(RANK, v); };
  var save = function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} };

  var fromUrl = null;
  try { fromUrl = new URLSearchParams(location.search).get('paquete'); } catch (e) {}
  var current = fromUrl;
  if (valid(current)) save(current);
  else { try { current = localStorage.getItem(KEY); } catch (e) { current = null; } }
  if (!valid(current)) current = DEFAULT;

  document.documentElement.setAttribute('data-paquete', current);

  // Idioma activo
  var currentLang = 'es';
  try { currentLang = localStorage.getItem(LANG_KEY) || 'es'; } catch(e) {}
  if (current === 'esencial') currentLang = 'es';
  else if (current === 'profesional' && currentLang === 'fr') currentLang = 'es';
  document.documentElement.setAttribute('data-lang', currentLang);

  var api = {
    current: current,
    currentLang: currentLang,
    list: LIST,
    has: function (min) { return RANK[current] >= RANK[min]; },
    is: function (id) { return current === id; },
    getDetails: function(id) {
      id = id || current;
      for (var i = 0; i < LIST.length; i++) {
        if (LIST[i].id === id) return LIST[i];
      }
      return LIST[2];
    },
    optionsHtml: function () {
      return LIST.map(function (p) {
        return '<option value="' + p.id + '"' + (p.id === current ? ' selected' : '') + '>' + p.label + ' (' + p.price + ')</option>';
      }).join('');
    },
    set: function (id) {
      if (!valid(id) || id === current) return;
      current = id;
      api.current = id;
      save(id);
      document.documentElement.setAttribute('data-paquete', id);
      if (id === 'esencial') api.setLang('es');
      sync();

      // Limpiar cualquier hash de ancla de la URL para que no desplace a secciones inferiores
      if (window.location.hash) {
        try {
          history.replaceState(null, document.title, window.location.pathname + window.location.search.replace(/[?&]paquete=[^&]*/g, ''));
        } catch (e) {}
      }

      // Desplazar siempre arriba del todo de forma inmediata en todos los contenedores posibles
      resetAllScroll();

      // En carta.html recargar para re-evaluar la selección de platos básica (60 platos vs ilimitados)
      var isCarta = window.location.pathname.indexOf('carta') !== -1;
      if (isCarta) {
        sessionStorage.setItem('devcorp_scroll_top', '1');
        location.reload();
      } else {
        // En index.html actualizar fluidamente sin recarga y sincronizar animación de scroll
        window.dispatchEvent(new Event('scroll'));
        setTimeout(function () {
          resetAllScroll();
          window.dispatchEvent(new Event('scroll'));
        }, 40);
        setTimeout(function () {
          resetAllScroll();
          window.dispatchEvent(new Event('scroll'));
        }, 120);
      }
    },
    setLang: function(lang) {
      if (!lang) return;
      if (current === 'esencial' && lang !== 'es') return;
      if (current === 'profesional' && lang === 'fr') return;
      currentLang = lang;
      try { localStorage.setItem(LANG_KEY, lang); } catch(e) {}
      document.documentElement.setAttribute('data-lang', lang);
      updateLanguageUI();
    },
    openReservaModal: function(zone) {
      if (current === 'esencial') {
        alert('En el Paquete Esencial las reservas online no están disponibles. Información de teléfono: 912 94 84 07.');
        return;
      }
      if (current === 'profesional') {
        // Enlace externo / WhatsApp
        window.open('https://wa.me/34912948407?text=' + encodeURIComponent('Hola, me gustaría reservar una mesa en Bar Punto de Encuentro.'), '_blank');
        return;
      }
      // Premium: Reserva integrada
      var modal = document.getElementById('devcorp-reserva-modal');
      if (modal) {
        var zoneSelect = modal.querySelector('#reserva-zona');
        if (zoneSelect && zone) zoneSelect.value = zone;
        modal.classList.add('is-open');
      }
    },
    closeReservaModal: function() {
      var modal = document.getElementById('devcorp-reserva-modal');
      if (modal) modal.classList.remove('is-open');
    }
  };
  window.DevcorpPaquete = api;

  // Sincronizar selectores
  function sync() {
    var selects = document.querySelectorAll('select[data-paquete-select]');
    for (var i = 0; i < selects.length; i++) {
      var s = selects[i];
      if (!s.options.length) s.innerHTML = api.optionsHtml();
      if (s.value !== current) s.value = current;
    }
    updateLanguageUI();
  }

  // Traducción y selector de idiomas
  var I18N = {
    es: {
      desayunos: '06:00 Desayunos',
      comer: '13:00 A comer',
      minis: '18:00 Minis',
      cervezas: 'Cervezas',
      finde: '23:00 Finde',
      opiniones: 'Opiniones',
      carta: 'La carta',
      llegar: 'Cómo llegar',
      llamar: 'Llámanos',
      reservaBtn: '🛎️ Reservar Mesa',
      eventos: 'Eventos & Grupos',
      novedades: 'Novedades'
    },
    en: {
      desayunos: '06:00 Breakfast',
      comer: '13:00 Lunch',
      minis: '18:00 Minis & Tapas',
      cervezas: 'Beers',
      finde: '23:00 Weekend',
      opiniones: 'Reviews',
      carta: 'The Menu',
      llegar: 'How to get here',
      llamar: 'Call us',
      reservaBtn: '🛎️ Book a Table',
      eventos: 'Events & Groups',
      novedades: 'News'
    },
    fr: {
      desayunos: '06:00 Petit-déjeuner',
      comer: '13:00 Déjeuner',
      minis: '18:00 Minis & Tapas',
      cervezas: 'Bières',
      finde: '23:00 Week-end',
      opiniones: 'Avis',
      carta: 'Le Menu',
      llegar: 'Comment venir',
      llamar: 'Appelez-nous',
      reservaBtn: '🛎️ Réserver une table',
      eventos: 'Événements & Groupes',
      novedades: 'Actualités'
    }
  };

  function updateLanguageUI() {
    var dict = I18N[currentLang] || I18N.es;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      var lang = btn.getAttribute('data-lang');
      if (lang === currentLang) {
        btn.style.background = '#9FD3C7';
        btn.style.color = '#213A3C';
        btn.style.fontWeight = '900';
      } else {
        btn.style.background = 'transparent';
        btn.style.color = '#9FD3C7';
        btn.style.fontWeight = '700';
      }
    });
  }

  // Enviar formulario de reserva interactivo (Premium)
  function handleReservaSubmit(e) {
    if (e) e.preventDefault();
    var form = document.getElementById('reserva-form');
    if (!form) return;

    var fecha = form.querySelector('#reserva-fecha').value;
    var hora = form.querySelector('#reserva-hora').value;
    var personas = form.querySelector('#reserva-personas').value;
    var zona = form.querySelector('#reserva-zona').value;
    var nombre = form.querySelector('#reserva-nombre').value;
    var telefono = form.querySelector('#reserva-telefono').value;
    var notas = form.querySelector('#reserva-notas').value || 'Ninguna';

    if (!fecha || !hora || !nombre || !telefono) {
      alert('Por favor, completa los campos requeridos (Fecha, Hora, Nombre y Teléfono).');
      return;
    }

    var msg = '¡Hola! Solicito una reserva en Bar Punto de Encuentro:\n' +
              '📅 Fecha: ' + fecha + '\n' +
              '⏰ Hora: ' + hora + '\n' +
              '👥 Personas: ' + personas + '\n' +
              '📍 Zona: ' + zona + '\n' +
              '👤 Nombre: ' + nombre + '\n' +
              '📞 Teléfono: ' + telefono + '\n' +
              '📝 Peticiones / Alérgenos: ' + notas;

    var container = document.getElementById('devcorp-reserva-body');
    if (container) {
      container.innerHTML = [
        '<div style="text-align:center;padding:20px 0">',
        '  <div style="font-size:52px;line-height:1;margin-bottom:14px">✅</div>',
        '  <h3 style="font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:28px;color:#213A3C;margin:0 0 10px">¡Solicitud de Reserva Registrada!</h3>',
        '  <p style="font-size:16px;line-height:1.4;color:#3A5557;max-width:440px;margin:0 auto 20px">',
        '    Hemos procesado tu mesa para <strong>' + personas + ' personas</strong> el día <strong>' + fecha + '</strong> a las <strong>' + hora + '</strong> en <strong>' + zona + '</strong>.',
        '  </p>',
        '  <div style="background:#FFFFFF;border:2px solid #213A3C;border-radius:6px;padding:14px;text-align:left;max-width:440px;margin:0 auto 20px;font-size:13px;line-height:1.5">',
        '    <strong>Resumen enviado a cocina:</strong><br>',
        '    • Cliente: ' + nombre + ' (' + telefono + ')<br>',
        '    • Notas: ' + notas,
        '  </div>',
        '  <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">',
        '    <a href="https://wa.me/34912948407?text=' + encodeURIComponent(msg) + '" target="_blank" class="reserva-submit-btn" style="text-decoration:none;display:inline-flex;width:auto">💬 Confirmar por WhatsApp</a>',
        '    <button type="button" class="btn-tabla" onclick="window.DevcorpPaquete.closeReservaModal()" style="padding:10px 20px;font-size:14px">Cerrar</button>',
        '  </div>',
        '</div>'
      ].join('');
    }
  }

  // Inyección de elementos del DOM (Modal de Reserva Integrada)
  function injectDOMElements() {
    if (!document.getElementById('devcorp-reserva-modal')) {
      var today = new Date().toISOString().split('T')[0];
      var resModal = document.createElement('div');
      resModal.id = 'devcorp-reserva-modal';
      resModal.className = 'devcorp-modal-backdrop';
      resModal.innerHTML = [
        '<div class="devcorp-modal-card">',
        '  <div class="devcorp-modal-header">',
        '    <div>',
        '      <h3 style="margin:0;font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:22px">Reserva de Mesa · Punto de Encuentro</h3>',
        '      <span style="font-family:\'Alegreya Sans SC\',sans-serif;font-size:12px;color:#9FD3C7;letter-spacing:.08em">SISTEMA DE RESERVAS INTEGRADO (PAQUETE PREMIUM)</span>',
        '    </div>',
        '    <button type="button" class="devcorp-modal-close" onclick="window.DevcorpPaquete.closeReservaModal()">✕</button>',
        '  </div>',
        '  <div class="devcorp-modal-body" id="devcorp-reserva-body">',
        '    <form id="reserva-form" onsubmit="event.preventDefault(); window.DevcorpPaquete._submitReserva();">',
        '      <div class="reserva-form-grid">',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-fecha">Fecha *</label>',
        '          <input type="date" id="reserva-fecha" class="reserva-input" value="' + today + '" min="' + today + '" required />',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-hora">Turno / Hora *</label>',
        '          <select id="reserva-hora" class="reserva-select" required>',
        '            <option value="13:30">13:30 (Comida)</option>',
        '            <option value="14:00" selected>14:00 (Comida)</option>',
        '            <option value="14:30">14:30 (Comida)</option>',
        '            <option value="15:00">15:00 (Comida)</option>',
        '            <option value="20:30">20:30 (Cena)</option>',
        '            <option value="21:00">21:00 (Cena)</option>',
        '            <option value="21:30">21:30 (Cena)</option>',
        '            <option value="22:00">22:00 (Cena)</option>',
        '          </select>',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-personas">Comensales *</label>',
        '          <select id="reserva-personas" class="reserva-select" required>',
        '            <option value="1">1 persona</option>',
        '            <option value="2" selected>2 personas</option>',
        '            <option value="3">3 personas</option>',
        '            <option value="4">4 personas</option>',
        '            <option value="5">5 personas</option>',
        '            <option value="6">6 personas</option>',
        '            <option value="7-10">Grupo (7 a 10 personas)</option>',
        '            <option value="+10">Grupo grande (+10 personas)</option>',
        '          </select>',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-zona">Zona Preferida *</label>',
        '          <select id="reserva-zona" class="reserva-select" required>',
        '            <option value="Terraza Exterior">🌿 Terraza Exterior</option>',
        '            <option value="Salón Interior" selected>🍽️ Salón Interior</option>',
        '            <option value="Zona Barra">🍺 Barra</option>',
        '          </select>',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-nombre">Nombre y Apellidos *</label>',
        '          <input type="text" id="reserva-nombre" class="reserva-input" placeholder="Tu nombre" required />',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-telefono">Teléfono móvil *</label>',
        '          <input type="tel" id="reserva-telefono" class="reserva-input" placeholder="600 000 000" required />',
        '        </div>',
        '      </div>',
        '      <div class="reserva-field" style="margin-top:14px">',
        '        <label class="reserva-label" for="reserva-notas">Alérgenos o peticiones especiales (opcional)</label>',
        '        <textarea id="reserva-notas" class="reserva-textarea" rows="2" placeholder="Ej: celiaquía / sin gluten, trona para bebé, etc."></textarea>',
        '      </div>',
        '      <div style="margin-top:20px">',
        '        <button type="submit" class="reserva-submit-btn">🛎️ Confirmar Reserva Inmediata</button>',
        '      </div>',
        '      <p style="margin:10px 0 0;font-size:12px;color:#3F6E72;text-align:center">Sin intermediarios: la confirmación se procesa en tiempo real con el Bar Punto de Encuentro.</p>',
        '    </form>',
        '  </div>',
        '</div>'
      ].join('');
      document.body.appendChild(resModal);
      api._submitReserva = handleReservaSubmit;
    }
  }

  // Delegación de eventos para selectores y botones interactivos
  document.addEventListener('change', function (e) {
    var s = e.target;
    if (s && s.matches && s.matches('select[data-paquete-select]')) {
      api.set(s.value);
    }
  });

  document.addEventListener('click', function (e) {
    // 1. Selector de idiomas
    var langBtn = e.target && e.target.closest ? e.target.closest('.lang-btn') : null;
    if (langBtn) {
      e.preventDefault();
      var lang = langBtn.getAttribute('data-lang');
      api.setLang(lang);
      return;
    }

    // 2. Abrir Reserva Modal
    var resTrigger = e.target && e.target.closest ? e.target.closest('[data-open-reserva-modal]') : null;
    if (resTrigger) {
      e.preventDefault();
      var rZone = resTrigger.getAttribute('data-reserva-zone');
      api.openReservaModal(rZone);
      return;
    }

    // 3. En Esencial: teléfono y WhatsApp solo como texto informativo
    if (current === 'esencial') {
      var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href*="wa.me/"]') : null;
      if (a) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, true);

  function start() {
    injectDOMElements();
    sync();
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { 
        queued = false; 
        sync(); 
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
