/**
 * DevCorp Solutions · Paquetes comerciales (Esencial · Profesional · Premium)
 * Sistema integral adaptado a la tabla de especificaciones comerciales para hostelería.
 */
(function () {
  'use strict';

  var KEY = 'devcorp_paquete_v2';
  var LANG_KEY = 'devcorp_lang_v2';

  var LIST = [
    { 
      id: 'esencial', 
      label: 'Paquete Esencial', 
      price: '590 €',
      badgeClass: 'badge-esencial',
      summary: 'Landing 1 pág. · Carta hasta 60 platos · 1 QR estándar (PNG/PDF) · Teléfono info · Sin fotos de plato · 1 Idioma'
    },
    { 
      id: 'profesional', 
      label: 'Paquete Profesional', 
      price: '1.190 €',
      badgeClass: 'badge-profesional',
      summary: 'Web completa · Carta ilimitada + Filtros alérgenos · Fotos por plato · QR Dinámico + Imprenta · Panel edición · 2 Idiomas'
    },
    { 
      id: 'premium', 
      label: 'Paquete Premium', 
      price: 'desde 2.490 €',
      badgeClass: 'badge-premium',
      summary: 'Web a medida · Reserva Integrada · QR por Zonas (Terraza/Salón/Barra) · Eventos y Grupos · Blog · Widget Reseñas · SEO Local & GEO IA · 3 Idiomas'
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
      save(id);
      if (fromUrl) {
        var url = new URL(location.href);
        url.searchParams.delete('paquete');
        location.replace(url.toString());
      } else {
        location.reload();
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
    openQrModal: function(zone) {
      var modal = document.getElementById('devcorp-qr-modal');
      if (modal) {
        renderQrModalContent(zone || 'terraza');
        modal.classList.add('is-open');
      }
    },
    closeQrModal: function() {
      var modal = document.getElementById('devcorp-qr-modal');
      if (modal) modal.classList.remove('is-open');
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
    },
    openTablaModal: function() {
      var modal = document.getElementById('devcorp-tabla-modal');
      if (modal) modal.classList.add('is-open');
    },
    closeTablaModal: function() {
      var modal = document.getElementById('devcorp-tabla-modal');
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
    updateDemoBar();
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
      qrBtn: '📱 Código QR',
      reservaBtn: '🛎️ Reservar Mesa',
      eventos: 'Eventos & Grupos',
      novedades: 'Novedades',
      faq: 'Preguntas Frecuentes'
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
      qrBtn: '📱 QR Code',
      reservaBtn: '🛎️ Book a Table',
      eventos: 'Events & Groups',
      novedades: 'News',
      faq: 'FAQs'
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
      qrBtn: '📱 Code QR',
      reservaBtn: '🛎️ Réserver une table',
      eventos: 'Événements & Groupes',
      novedades: 'Actualités',
      faq: 'Foire Aux Questions'
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

  // Demo Bar superior
  function updateDemoBar() {
    var bar = document.getElementById('devcorp-paquete-bar');
    if (!bar) return;
    var pkg = api.getDetails(current);
    bar.innerHTML = [
      '<div class="bar-inner">',
      '  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">',
      '    <span class="badge-pkg ' + pkg.badgeClass + '">',
      '      ' + (current === 'premium' ? '⭐ ' : current === 'profesional' ? '🔵 ' : '🟢 ') + pkg.label + ' · ' + pkg.price,
      '    </span>',
      '    <span class="features-text">' + pkg.summary + '</span>',
      '  </div>',
      '  <div style="display:flex;align-items:center;gap:8px">',
      '    <button type="button" class="btn-tabla" onclick="window.DevcorpPaquete.openTablaModal()">📋 Comparativa de Paquetes</button>',
      '    <button type="button" class="btn-tabla" onclick="document.getElementById(\'devcorp-paquete-bar\').style.display=\'none\'" title="Ocultar barra">✕</button>',
      '  </div>',
      '</div>'
    ].join('');
  }

  // Generador de QR SVG vectorial limpio y autónomo
  function generateQrSvg(text, title, subtitle) {
    // Patrón representativo de código QR estructurado de alta fidelidad con esquinas oficiales
    return [
      '<div style="display:inline-block;padding:16px;background:#ffffff;border:3px solid #213A3C;border-radius:12px;box-shadow:0 6px 20px rgba(0,0,0,0.12)">',
      '  <div style="margin-bottom:8px;font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:16px;color:#213A3C">' + (title || 'PUNTO DE ENCUENTRO') + '</div>',
      '  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="180" height="180" style="display:block;margin:0 auto">',
      '    <rect width="160" height="160" fill="#ffffff"/>',
      '    <!-- Esquina superior izquierda -->',
      '    <rect x="10" y="10" width="40" height="40" fill="#213A3C" rx="4"/>',
      '    <rect x="16" y="16" width="28" height="28" fill="#ffffff" rx="2"/>',
      '    <rect x="22" y="22" width="16" height="16" fill="#213A3C" rx="1"/>',
      '    <!-- Esquina superior derecha -->',
      '    <rect x="110" y="10" width="40" height="40" fill="#213A3C" rx="4"/>',
      '    <rect x="116" y="16" width="28" height="28" fill="#ffffff" rx="2"/>',
      '    <rect x="122" y="22" width="16" height="16" fill="#213A3C" rx="1"/>',
      '    <!-- Esquina inferior izquierda -->',
      '    <rect x="10" y="110" width="40" height="40" fill="#213A3C" rx="4"/>',
      '    <rect x="16" y="116" width="28" height="28" fill="#ffffff" rx="2"/>',
      '    <rect x="22" y="122" width="16" height="16" fill="#213A3C" rx="1"/>',
      '    <!-- Malla de datos QR simulada de alta resolución -->',
      '    <rect x="60" y="15" width="8" height="8" fill="#213A3C"/><rect x="75" y="15" width="8" height="8" fill="#213A3C"/><rect x="90" y="15" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="60" y="30" width="8" height="8" fill="#213A3C"/><rect x="80" y="30" width="8" height="8" fill="#213A3C"/><rect x="95" y="30" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="65" y="45" width="8" height="8" fill="#213A3C"/><rect x="75" y="45" width="8" height="8" fill="#213A3C"/><rect x="85" y="45" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="15" y="65" width="8" height="8" fill="#213A3C"/><rect x="30" y="65" width="8" height="8" fill="#213A3C"/><rect x="45" y="65" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="60" y="60" width="40" height="40" fill="#3F6E72" rx="4"/>',
      '    <text x="80" y="84" font-family="sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">QR</text>',
      '    <rect x="110" y="65" width="8" height="8" fill="#213A3C"/><rect x="125" y="65" width="8" height="8" fill="#213A3C"/><rect x="140" y="65" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="15" y="80" width="8" height="8" fill="#213A3C"/><rect x="35" y="80" width="8" height="8" fill="#213A3C"/><rect x="115" y="80" width="8" height="8" fill="#213A3C"/><rect x="135" y="80" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="60" y="110" width="8" height="8" fill="#213A3C"/><rect x="75" y="110" width="8" height="8" fill="#213A3C"/><rect x="90" y="110" width="8" height="8" fill="#213A3C"/><rect x="110" y="110" width="8" height="8" fill="#213A3C"/><rect x="125" y="110" width="8" height="8" fill="#213A3C"/><rect x="140" y="110" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="60" y="125" width="8" height="8" fill="#213A3C"/><rect x="80" y="125" width="8" height="8" fill="#213A3C"/><rect x="100" y="125" width="8" height="8" fill="#213A3C"/><rect x="120" y="125" width="8" height="8" fill="#213A3C"/><rect x="135" y="125" width="8" height="8" fill="#213A3C"/>',
      '    <rect x="65" y="140" width="8" height="8" fill="#213A3C"/><rect x="85" y="140" width="8" height="8" fill="#213A3C"/><rect x="110" y="140" width="8" height="8" fill="#213A3C"/><rect x="130" y="140" width="8" height="8" fill="#213A3C"/><rect x="145" y="140" width="8" height="8" fill="#213A3C"/>',
      '  </svg>',
      '  <div style="margin-top:8px;font-family:\'Alegreya Sans SC\',sans-serif;font-weight:800;font-size:12px;letter-spacing:.08em;color:#3F6E72">' + (subtitle || 'ESCANEÁ CON TU MÓVIL') + '</div>',
      '</div>'
    ].join('');
  }

  function renderQrModalContent(zone) {
    var container = document.getElementById('devcorp-qr-body');
    if (!container) return;

    if (current === 'esencial') {
      // 1 QR digital estándar listo para imprimir
      container.innerHTML = [
        '<div style="text-align:center">',
        '  <div class="badge-pkg badge-esencial" style="margin-bottom:14px">1 QR DIGITAL ESTÁNDAR (PNG / PDF)</div>',
        '  <p style="font-size:15px;margin:0 0 16px;color:#213A3C">Código QR estándar directo a la carta web básica del Bar Punto de Encuentro.</p>',
        generateQrSvg('https://devcorpsolutions.com/estilo2/carta.html', 'PUNTO DE ENCUENTRO', 'CARTA DIGITAL ESENCIAL'),
        '  <div style="margin-top:20px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap">',
        '    <button type="button" class="btn-tabla" onclick="alert(\'Descargando archivo QR en alta resolución (PNG)...\')" style="padding:10px 18px;font-size:14px">⬇ Descargar QR (PNG)</button>',
        '    <button type="button" class="btn-tabla" onclick="window.print()" style="padding:10px 18px;font-size:14px">🖨️ Imprimir Hoja QR (PDF)</button>',
        '  </div>',
        '  <p style="font-size:12px;color:#3F6E72;margin-top:16px;font-style:italic">Incluido en el Paquete Esencial: 1 código QR listo para colocar en barra o mesas.</p>',
        '</div>'
      ].join('');
    } else if (current === 'profesional') {
      // Pack QR Dinámico + diseño para imprenta
      container.innerHTML = [
        '<div style="text-align:center">',
        '  <div class="badge-pkg badge-profesional" style="margin-bottom:14px">PACK QR DINÁMICO + DISEÑO PARA IMPRENTA</div>',
        '  <p style="font-size:15px;margin:0 0 16px;color:#213A3C">QR Dinámico autogestionado: si cambia precios o platos en su panel, <strong>el QR no cambia</strong> y nunca tendrá que reimprimir.</p>',
        '  <div class="qr-print-mockup">',
        generateQrSvg('https://devcorpsolutions.com/estilo2/carta.html?qr=dinamico', 'PUNTO DE ENCUENTRO', 'CARTA DIGITAL DINÁMICA'),
        '    <div style="margin-top:10px;font-weight:700;font-size:13px;color:#183234">Formato Pegatina / Tarjeta de Mesa · Acabado Vinilo Mate 300 DPI</div>',
        '  </div>',
        '  <div style="margin-top:16px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap">',
        '    <button type="button" class="btn-tabla" onclick="alert(\'Descargando PDF vectorial listo para imprenta (300 DPI)...\')" style="padding:10px 18px;font-size:14px">⬇ Descargar Diseño para Imprenta</button>',
        '    <button type="button" class="btn-tabla" onclick="alert(\'Enlace QR Dinámico copiado al portapapeles\')" style="padding:10px 18px;font-size:14px">🔗 Copiar Enlace QR Dinámico</button>',
        '  </div>',
        '</div>'
      ].join('');
    } else {
      // Paquete Premium: Pack QR Dinámico por Zonas (Terraza / Salón / Barra)
      var activeZone = zone || 'terraza';
      var zoneNames = {
        terraza: { title: 'ZONA TERRAZA', sub: 'MESA EXTERIOR · TERRAZA', desc: 'QR dinámico para las mesas de terraza exterior.' },
        salon: { title: 'ZONA SALÓN', sub: 'MESA COMEDOR · SALÓN', desc: 'QR dinámico asignado a las mesas de comedor interior.' },
        barra: { title: 'ZONA BARRA', sub: 'CONSUMICIÓN EN BARRA', desc: 'QR de acceso ultra-rápido para tapas y minis en barra.' }
      };
      var z = zoneNames[activeZone] || zoneNames.terraza;

      container.innerHTML = [
        '<div style="text-align:center">',
        '  <div class="badge-pkg badge-premium" style="margin-bottom:14px">PACK QR DINÁMICO POR ZONAS (PREMIUM)</div>',
        '  <p style="font-size:15px;margin:0 0 16px;color:#213A3C">Adapte la experiencia según el espacio: un QR exclusivo y medible para cada zona de su local.</p>',
        '  <div class="qr-zone-tabs">',
        '    <button type="button" class="qr-zone-tab ' + (activeZone === 'terraza' ? 'active' : '') + '" onclick="window.DevcorpPaquete.openQrModal(\'terraza\')">🌿 Terraza</button>',
        '    <button type="button" class="qr-zone-tab ' + (activeZone === 'salon' ? 'active' : '') + '" onclick="window.DevcorpPaquete.openQrModal(\'salon\')">🍽️ Salón Comedor</button>',
        '    <button type="button" class="qr-zone-tab ' + (activeZone === 'barra' ? 'active' : '') + '" onclick="window.DevcorpPaquete.openQrModal(\'barra\')">🍺 Barra</button>',
        '  </div>',
        '  <div class="qr-print-mockup">',
        generateQrSvg('https://devcorpsolutions.com/estilo2/carta.html?zona=' + activeZone, 'PUNTO DE ENCUENTRO', z.sub),
        '    <div style="margin-top:10px;font-weight:800;font-size:14px;color:#213A3C">' + z.desc + '</div>',
        '    <div style="font-size:12px;color:#3F6E72;margin-top:4px">Plantilla lista para placas de metacrilato o vinilo de alta durabilidad</div>',
        '  </div>',
        '  <div style="margin-top:16px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap">',
        '    <button type="button" class="btn-tabla" onclick="alert(\'Descargando Pack Multizona Completo (Terraza, Salón, Barra) en ZIP...\')" style="padding:10px 18px;font-size:14px">⬇ Descargar Pack Multizona (ZIP)</button>',
        '    <button type="button" class="btn-tabla" onclick="alert(\'Descargando arte final de ' + z.title + ' para imprenta...\')" style="padding:10px 18px;font-size:14px">⬇ Imprimir ' + z.title + '</button>',
        '  </div>',
        '</div>'
      ].join('');
    }
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

  // Inyección de elementos del DOM (Barra, Modales)
  function injectDOMElements() {
    // 1. Inyectar Demo Bar si no existe
    if (!document.getElementById('devcorp-paquete-bar')) {
      var bar = document.createElement('div');
      bar.id = 'devcorp-paquete-bar';
      document.body.insertBefore(bar, document.body.firstChild);
      updateDemoBar();
    }

    // 2. Inyectar Modal de QR si no existe
    if (!document.getElementById('devcorp-qr-modal')) {
      var qrModal = document.createElement('div');
      qrModal.id = 'devcorp-qr-modal';
      qrModal.className = 'devcorp-modal-backdrop';
      qrModal.innerHTML = [
        '<div class="devcorp-modal-card">',
        '  <div class="devcorp-modal-header">',
        '    <h3 style="margin:0;font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:22px;letter-spacing:-0.01em">Código QR de la Carta · Punto de Encuentro</h3>',
        '    <button type="button" class="devcorp-modal-close" onclick="window.DevcorpPaquete.closeQrModal()">✕</button>',
        '  </div>',
        '  <div class="devcorp-modal-body" id="devcorp-qr-body"></div>',
        '</div>'
      ].join('');
      document.body.appendChild(qrModal);
    }

    // 3. Inyectar Modal de Reserva Integrada si no existe
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

    // 4. Inyectar Modal de Tabla Comparativa si no existe
    if (!document.getElementById('devcorp-tabla-modal')) {
      var tblModal = document.createElement('div');
      tblModal.id = 'devcorp-tabla-modal';
      tblModal.className = 'devcorp-modal-backdrop';
      tblModal.innerHTML = [
        '<div class="devcorp-modal-card" style="max-width:920px">',
        '  <div class="devcorp-modal-header">',
        '    <div>',
        '      <h3 style="margin:0;font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:24px">Paquetes de Hostelería y Presupuestos</h3>',
        '      <span style="font-family:\'Alegreya Sans SC\',sans-serif;font-size:12px;color:#9FD3C7;letter-spacing:.08em">DEVCORP SOLUTIONS · ESPECIFICACIONES OFICIALES</span>',
        '    </div>',
        '    <button type="button" class="devcorp-modal-close" onclick="window.DevcorpPaquete.closeTablaModal()">✕</button>',
        '  </div>',
        '  <div class="devcorp-modal-body" style="padding:16px 20px;overflow-x:auto">',
        '    <table style="width:100%;border-collapse:collapse;font-size:13px;line-height:1.35;min-width:680px">',
        '      <thead>',
        '        <tr style="background:#213A3C;color:#EBF4F3">',
        '          <th style="padding:10px 12px;text-align:left;font-family:\'Alegreya Sans SC\',sans-serif;border:1px solid #3F6E72">Característica</th>',
        '          <th style="padding:10px 12px;text-align:center;border:1px solid #3F6E72;background:#2d4e51">Paquete Esencial<br><strong style="color:#9FD3C7">590 €</strong></th>',
        '          <th style="padding:10px 12px;text-align:center;border:1px solid #3F6E72;background:#1a418a">Paquete Profesional<br><strong style="color:#9FD3C7">1.190 €</strong></th>',
        '          <th style="padding:10px 12px;text-align:center;border:1px solid #3F6E72;background:#785810">Paquete Premium<br><strong style="color:#9FD3C7">desde 2.490 €</strong></th>',
        '        </tr>',
        '      </thead>',
        '      <tbody>',
        '        <tr><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Carta digital con código QR</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">1 QR digital estándar (PNG/PDF)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Pack QR Dinámico + diseño para imprenta</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Pack QR Dinámico por zonas (Terraza/Salón/Barra)</td></tr>',
        '        <tr style="background:#f4f9f8"><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Platos y categorías</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Hasta 60 platos</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Ilimitados</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Ilimitados</td></tr>',
        '        <tr><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Alérgenos (14 obligatorios)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí (informativo)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí (con filtros)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí (con filtros)</td></tr>',
        '        <tr style="background:#f4f9f8"><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Diseño</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Landing 1 página (Inicio, Carta, Horarios, Mapa)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Web completa personalizada</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Web completa + Secciones a medida (Eventos, Grupos, Blog)</td></tr>',
        '        <tr><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Idiomas</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">1 (Español)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Hasta 2 (Español, Inglés)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Hasta 3 (Español, Inglés, Francés)</td></tr>',
        '        <tr style="background:#f4f9f8"><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Fotos por plato</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center;color:#b22222;font-weight:700">No</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center;color:#2e7d32;font-weight:700">Sí</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center;color:#2e7d32;font-weight:700">Sí</td></tr>',
        '        <tr><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Panel para editar precios y platos</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">No (por bolsa de horas)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí (móvil en vivo)</td></tr>',
        '        <tr style="background:#f4f9f8"><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Menú del día y fuera de carta</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">No</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí (dinámico)</td></tr>',
        '        <tr><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Botones de llamada y WhatsApp</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">No (solo información)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí (botones directos)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí + Formulario interactivo de reserva</td></tr>',
        '        <tr style="background:#f4f9f8"><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Reservas online</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">No</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Enlace externo</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center;color:#2e7d32;font-weight:700">Integrada</td></tr>',
        '        <tr><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">Google Business Profile</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Sí, informativo</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Enlace a ficha y mapa</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">Optimización + Widget interactivo</td></tr>',
        '        <tr style="background:#f4f9f8"><td style="padding:8px 12px;border:1px solid #CADDDB;font-weight:700">SEO local y GEO (ChatGPT, Gemini, IA)</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">No</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center">SEO básico</td><td style="padding:8px 12px;border:1px solid #CADDDB;text-align:center;color:#2e7d32;font-weight:700">Completo (Schema + FAQ GEO)</td></tr>',
        '      </tbody>',
        '    </table>',
        '    <div style="margin-top:16px;text-align:center">',
        '      <button type="button" class="btn-tabla" onclick="window.DevcorpPaquete.closeTablaModal()" style="padding:10px 24px;font-size:14px">Cerrar comparativa</button>',
        '    </div>',
        '  </div>',
        '</div>'
      ].join('');
      document.body.appendChild(tblModal);
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
    // 1. Selector de paquetes o botones de cambio
    var langBtn = e.target && e.target.closest ? e.target.closest('.lang-btn') : null;
    if (langBtn) {
      e.preventDefault();
      var lang = langBtn.getAttribute('data-lang');
      api.setLang(lang);
      return;
    }

    // 2. Abrir QR Modal
    var qrTrigger = e.target && e.target.closest ? e.target.closest('[data-open-qr-modal]') : null;
    if (qrTrigger) {
      e.preventDefault();
      var zone = qrTrigger.getAttribute('data-qr-zone') || 'terraza';
      api.openQrModal(zone);
      return;
    }

    // 3. Abrir Reserva Modal
    var resTrigger = e.target && e.target.closest ? e.target.closest('[data-open-reserva-modal]') : null;
    if (resTrigger) {
      e.preventDefault();
      var rZone = resTrigger.getAttribute('data-reserva-zone');
      api.openReservaModal(rZone);
      return;
    }

    // 4. Acordeón FAQ (GEO IA)
    var faqQ = e.target && e.target.closest ? e.target.closest('.faq-question') : null;
    if (faqQ) {
      e.preventDefault();
      var ans = faqQ.nextElementSibling;
      var icon = faqQ.querySelector('.faq-icon');
      if (ans) {
        var isOpen = ans.style.display !== 'none';
        ans.style.display = isOpen ? 'none' : 'block';
        if (icon) icon.textContent = isOpen ? '+' : '−';
      }
      return;
    }

    // 5. En Esencial: teléfono y WhatsApp solo como texto informativo
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
