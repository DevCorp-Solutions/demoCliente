/**
 * DevCorp Solutions · Paquetes comerciales (Esencial · DevCorp · Profesional)
 *
 * Se carga en el <head>, antes de pintar la página: marca <html data-paquete="...">
 * para que paquete.css oculte lo que no incluye el paquete elegido, sin parpadeos.
 *
 *  - Selector: cualquier <select data-paquete-select> (si está vacío se rellena solo).
 *    También vale ?paquete=esencial|devcorp|profesional en la URL.
 *  - La elección se guarda en localStorage y se mantiene al cambiar de estilo.
 *  - Marcado en el HTML:
 *      data-paquete-min="devcorp"      → no aparece en el Paquete Esencial
 *      data-paquete-min="profesional"  → solo en el Paquete Profesional
 *      data-paquete-max="esencial"     → solo en el Paquete Esencial
 *      data-paquete-max="devcorp"      → en Esencial y DevCorp, no en Profesional
 *  - Desde JS: window.DevcorpPaquete.has('devcorp') / .is('esencial') / .current
 *
 * Por defecto se muestra el Paquete Profesional (la web completa tal como está).
 */
(function () {
  'use strict';

  var KEY = 'devcorp_paquete';
  var LIST = [
    { id: 'esencial', label: 'Paquete Esencial' },
    { id: 'devcorp', label: 'Paquete DevCorp' },
    { id: 'profesional', label: 'Paquete Profesional' }
  ];
  var RANK = { esencial: 0, devcorp: 1, profesional: 2 };
  var DEFAULT = 'profesional';

  var valid = function (v) { return Object.prototype.hasOwnProperty.call(RANK, v); };
  var save = function (v) { try { localStorage.setItem(KEY, v); } catch (e) { /* sin almacenamiento */ } };

  var fromUrl = null;
  try { fromUrl = new URLSearchParams(location.search).get('paquete'); } catch (e) { /* URL sin parámetros */ }
  var current = fromUrl;
  if (valid(current)) save(current);
  else { try { current = localStorage.getItem(KEY); } catch (e) { current = null; } }
  if (!valid(current)) current = DEFAULT;

  document.documentElement.setAttribute('data-paquete', current);

  var api = {
    current: current,
    list: LIST,
    // ¿El paquete activo incluye lo que está disponible a partir de «min»?
    has: function (min) { return RANK[current] >= RANK[min]; },
    is: function (id) { return current === id; },
    optionsHtml: function () {
      return LIST.map(function (p) {
        return '<option value="' + p.id + '"' + (p.id === current ? ' selected' : '') + '>' + p.label + '</option>';
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
    }
  };
  window.DevcorpPaquete = api;

  // Rellena y sincroniza los selectores (también los que pintan React o las plantillas JS)
  function sync() {
    var selects = document.querySelectorAll('select[data-paquete-select]');
    for (var i = 0; i < selects.length; i++) {
      var s = selects[i];
      if (!s.options.length) s.innerHTML = api.optionsHtml();
      if (s.value !== current) s.value = current;
    }
  }

  document.addEventListener('change', function (e) {
    var s = e.target;
    if (s && s.matches && s.matches('select[data-paquete-select]')) api.set(s.value);
  });

  // Paquete Esencial: teléfono y WhatsApp solo como información (sin botón de llamada)
  document.addEventListener('click', function (e) {
    if (current !== 'esencial') return;
    var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href*="wa.me/"]') : null;
    if (a) e.preventDefault();
  }, true);

  function start() {
    sync();
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; sync(); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
