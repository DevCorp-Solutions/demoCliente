// admin/overrides.js - Aplica en las páginas los datos editados desde /admin
//
// Para estilos cuyo contenido está escrito en el HTML (Estilo 2 y Estilo 3).
// Uso: <script src="../admin/overrides.js" data-style="estilo2"></script>
// (sin defer y antes de support.js en el Estilo 2, para que la carta lo vea).
//
// Si no hay nada guardado en localStorage para el estilo, este script no toca
// la página. Si lo hay, sustituye los textos y enlaces originales exactos por
// los nuevos, y vuelve a hacerlo cuando la página se repinta (React / app.js).
(function () {
  'use strict';

  const script = document.currentScript;
  const STYLE = script && script.dataset.style;
  if (!STYLE) return;

  let custom = null, unified = '';
  try {
    const raw = localStorage.getItem('devcorp_data_' + STYLE);
    custom = raw ? JSON.parse(raw) : null;
    unified = (localStorage.getItem('devcorp_unified_name') || '').trim();
  } catch (e) {
    console.warn('overrides.js: no se pudieron leer los datos del admin', e);
    return;
  }
  if (!custom && !unified) return;
  custom = custom || {};

  const digits = (v) => String(v || '').replace(/\D/g, '');
  // Teléfono para enlaces tel:, con +34 si es un número español de 9 cifras
  const telOf = (v) => { const d = digits(v); return d.length === 9 ? '+34' + d : (String(v).trim().startsWith('+') ? '+' + d : d); };
  const nameValue = unified || custom.name;

  // Textos y enlaces tal como están escritos en cada página
  const PAGES = {
    estilo2: {
      text: [
        { find: ['Bar Punto de Encuentro', 'Punto de Encuentro'], value: nameValue },
        { find: ['912 94 84 07'], value: custom.phone }
      ],
      attr: [
        { find: 'tel:+34912948407', value: custom.phoneRaw && 'tel:' + telOf(custom.phoneRaw) },
        { find: 'wa.me/34912948407', value: custom.whatsapp && 'wa.me/' + digits(custom.whatsapp) }
      ]
    },
    estilo3: {
      text: [
        { find: ['Mala Pata'], value: nameValue },
        { find: ['91 942 36 96'], value: custom.phone },
        { find: ['Calle Quero, 61'], value: custom.address && custom.address.split(' · ')[0] }
      ],
      attr: [
        { find: 'tel:+34919423696', value: custom.phone && 'tel:' + telOf(custom.phone) }
      ],
      // Si cambia la dirección, los mapas apuntan a la nueva
      maps: custom.address && custom.address !== 'Calle Quero, 61 · 28024 Madrid' ? custom.address.replace(/ · /g, ', ') : ''
    }
  };

  const page = PAGES[STYLE];
  if (!page) return;

  // Pares [original, nuevo] solo cuando hay cambio real; los más largos primero
  const textPairs = [];
  page.text.forEach(rule => {
    const value = rule.value && String(rule.value).trim();
    if (!value) return;
    rule.find.forEach(original => { if (original !== value) textPairs.push([original, value]); });
  });
  textPairs.sort((a, b) => b[0].length - a[0].length);
  const attrPairs = page.attr.filter(r => r.value && r.value !== r.find).map(r => [r.find, r.value]);

  // ---------------------------------------------------------------------------
  // Carta del Estilo 2: reconstruye el array C del componente desde el admin
  // ---------------------------------------------------------------------------
  if (STYLE === 'estilo2') {
    window.PE_CARTA_ADMIN = function (C) {
      try {
        if (!Array.isArray(custom.menu)) return C;
        const byCat = new Map();
        custom.menu.forEach(m => {
          if (!m || !m.categoryId) return;
          if (!byCat.has(m.categoryId)) byCat.set(m.categoryId, []);
          const price = String(m.priceFormatted || (m.price != null ? String(m.price).replace('.', ',') : '')).replace(/\s*€\s*$/, '');
          byCat.get(m.categoryId).push([m.name || '', m.nameEn || '', price, (m.allergenCodes || []).join(' '), m.description || '']);
        });
        const result = C.map(([id, es, en, note]) => [id, es, en, note, byCat.get(id) || []]).filter(c => c[4].length);
        return result.length ? result : C;
      } catch (e) {
        console.warn('overrides.js: carta del admin no válida, se usa la original', e);
        return C;
      }
    };
  }

  if (!textPairs.length && !attrPairs.length && !page.maps) return;

  // ---------------------------------------------------------------------------
  // Sustitución en el DOM
  // ---------------------------------------------------------------------------
  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION', 'NOSCRIPT']);
  const ATTRS = ['alt', 'title', 'aria-label', 'content'];

  // Primero marca cada original y luego pone los valores nuevos, para que un
  // valor nuevo que contenga un original no vuelva a sustituirse
  function replaceText(str) {
    let out = str;
    textPairs.forEach(([from], i) => {
      if (out.indexOf(from) !== -1) out = out.split(from).join('\u0000' + i + '\u0000');
    });
    return out.replace(/\u0000(\d+)\u0000/g, (_, i) => textPairs[+i][1]);
  }

  function mapsUrl(url, query) {
    const q = encodeURIComponent(query);
    if (/output=embed/.test(url)) return 'https://maps.google.com/maps?q=' + q + '&z=17&output=embed&hl=es';
    return 'https://www.google.com/maps/search/?api=1&query=' + q;
  }

  const done = new WeakMap(); // nodo -> último valor escrito por este script

  function processText(node) {
    const parent = node.parentNode;
    if (!parent || SKIP.has(parent.nodeName) || (parent.closest && parent.closest('select'))) return;
    const value = node.nodeValue;
    if (!value || done.get(node) === value) return;
    const next = replaceText(value);
    done.set(node, next);
    if (next !== value) node.nodeValue = next;
  }

  function processElement(el) {
    if (SKIP.has(el.nodeName)) return;
    if (textPairs.length) {
      ATTRS.forEach(a => {
        const v = el.getAttribute(a);
        if (v) { const n = replaceText(v); if (n !== v) el.setAttribute(a, n); }
      });
    }
    ['href', 'src'].forEach(a => {
      const v = el.getAttribute(a);
      if (!v) return;
      let n = v;
      attrPairs.forEach(([from, to]) => { if (n.indexOf(from) !== -1) n = n.split(from).join(to); });
      if (page.maps && /google\.[a-z.]+\/maps|maps\.google\./.test(n) && n.indexOf(encodeURIComponent(page.maps)) === -1) n = mapsUrl(n, page.maps);
      if (n !== v) el.setAttribute(a, n);
    });
  }

  function processTree(root) {
    if (root.nodeType === 3) { processText(root); return; }
    if (root.nodeType !== 1 || SKIP.has(root.nodeName)) return;
    processElement(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walker.nextNode())) {
      if (n.nodeType === 3) processText(n); else processElement(n);
    }
  }

  function start() {
    if (textPairs.length) document.title = replaceText(document.title);
    processTree(document.body);
    new MutationObserver(muts => {
      muts.forEach(m => {
        if (m.type === 'characterData') processText(m.target);
        else if (m.type === 'attributes') processElement(m.target);
        else m.addedNodes.forEach(processTree);
      });
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['href', 'src'].concat(ATTRS) });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
