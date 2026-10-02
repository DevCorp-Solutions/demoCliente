// admin/admin.js - Controlador del Backoffice de DevCorp GastroSuite
//
// Cada estilo tiene su propio formato de datos (ver STYLE_CONFIG). El admin
// carga los datos originales de cada estilo/data.js, aplica encima lo guardado
// en localStorage ('devcorp_data_<estilo>') y, al guardar, solo almacena los
// campos de primer nivel que difieren de los originales. Así, si alguien
// actualiza un data.js, lo que no se ha tocado en el admin se sigue actualizando.
(function () {
  'use strict';

  const STYLE_IDS = ['estilo1', 'estilo2', 'estilo3', 'estilo4'];
  const STORAGE_PREFIX = 'devcorp_data_';
  const UNIFIED_KEY = 'devcorp_unified_name';
  const PLACEHOLDER_ICON = 'restaurant';

  // Claves de alérgenos que usa estilo1/app.js (VUKATA_ALLERGENS)
  const EU_ALLERGENS = [
    ['gluten', 'Gluten'], ['crustaceos', 'Crustáceos'], ['huevos', 'Huevos'], ['pescado', 'Pescado'],
    ['cacahuete', 'Cacahuetes'], ['soja', 'Soja'], ['lacteos', 'Lácteos'], ['frutos_cascara', 'Frutos de cáscara'],
    ['apio', 'Apio'], ['mostaza', 'Mostaza'], ['sesamo', 'Sésamo'], ['sulfitos', 'Sulfitos'],
    ['altramuces', 'Altramuces'], ['moluscos', 'Moluscos']
  ];
  // Códigos de alérgenos de la carta del Estilo 2 (estilo2/carta.html)
  const PE_ALLERGENS = [
    ['GL', 'Gluten'], ['CR', 'Crustáceos'], ['HU', 'Huevo'], ['PE', 'Pescado'], ['CA', 'Cacahuetes'], ['SO', 'Soja'], ['LA', 'Lácteos'],
    ['FC', 'Frutos de cáscara'], ['AP', 'Apio'], ['MO', 'Mostaza'], ['SE', 'Sésamo'], ['SU', 'Sulfitos'], ['AT', 'Altramuces'], ['ML', 'Moluscos']
  ];
  const ALLERGEN_ALIAS = { lactosa: 'lacteos', huevo: 'huevos', cacahuetes: 'cacahuete', marisco: 'crustaceos', frutos_secos: 'frutos_cascara' };

  // ---------------------------------------------------------------------------
  // Utilidades
  // ---------------------------------------------------------------------------
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const clone = (obj) => JSON.parse(JSON.stringify(obj));
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const countText = (n) => n ? `${n} alérgeno${n === 1 ? '' : 's'}` : 'Sin alérgenos indicados';
  const fmtEur = (n) => Number(n).toFixed(2).replace('.', ',') + ' €';
  const normalize = (text) => String(text || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  function getPath(obj, path) {
    return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
  }
  function setPath(obj, path, value) {
    const keys = path.split('.');
    let o = obj;
    keys.slice(0, -1).forEach(k => { if (o[k] == null || typeof o[k] !== 'object') o[k] = {}; o = o[k]; });
    o[keys[keys.length - 1]] = value;
  }
  // Las rutas relativas de imagen son relativas a la carpeta de cada estilo
  function resolveAsset(styleId, src) {
    if (!src) return '';
    if (/^(https?:|data:|\.\.\/|\/)/.test(src)) return src;
    return '../' + styleId + '/' + src.replace(/^\.\//, '');
  }
  // Categorías del Estilo 2 en el orden de su carta, a partir de los datos originales
  function categoriesById() {
    const seen = new Map();
    ((defaults.estilo2 && defaults.estilo2.menu) || []).forEach(m => {
      if (!seen.has(m.categoryId)) seen.set(m.categoryId, { id: m.categoryId, name: m.category, note: m.note || '' });
    });
    return [...seen.values()];
  }
  function parseNumber(value) {
    const n = parseFloat(String(value).replace(',', '.'));
    return Number.isFinite(n) ? n : null;
  }

  // ---------------------------------------------------------------------------
  // Configuración por estilo: qué campos usa realmente cada página
  // ---------------------------------------------------------------------------
  const STYLE_CONFIG = {
    estilo1: {
      editable: true,
      appliesUnified: true,
      note: 'Los cambios se aplican a la web de este estilo en este navegador al recargarla.',
      info: [
        { key: 'name', label: 'Nombre del restaurante' },
        { key: 'tagline', label: 'Eslogan / subtítulo' },
        { key: 'neighborhood', label: 'Barrio / ciudad' },
        { key: 'phone', label: 'Teléfono de reservas' },
        { key: 'whatsapp', label: 'WhatsApp pedidos', help: 'Solo números con prefijo, sin +. Ej: 34600000000' },
        { key: 'email', label: 'Email de gerencia' },
        { key: 'managerName', label: 'Responsable' },
        { key: 'address', label: 'Dirección completa', wide: true },
        { key: 'googleMapsUrl', label: 'Enlace de Google Maps', wide: true },
        { key: 'rating', label: 'Nota en Google', type: 'number', step: '0.1' },
        { key: 'totalReviews', label: 'Nº de reseñas', type: 'number', step: '1' }
      ],
      dishFields: [
        { key: 'name', label: 'Nombre del plato', required: true },
        { key: 'price', label: 'Precio (€)', type: 'number', step: '0.05', required: true },
        { key: 'category', label: 'Categoría', type: 'select', options: (data) => data.categories.map(c => [c, c]) },
        { key: 'badge', label: 'Distintivo (opcional)', placeholder: 'Ej: Especialidad' },
        { key: 'description', label: 'Descripción', type: 'textarea', wide: true },
        { key: 'image', label: 'URL de la imagen', wide: true, placeholder: 'https://… o ../assets/images/…' },
        { key: 'allergens', label: 'Alérgenos', type: 'allergens', wide: true }
      ],
      newDish: (data) => ({ id: 'e1_custom_' + Date.now(), name: '', category: data.categories[0], price: 0, badge: '', description: '', details: '', ingredients: '', prepTime: '', popular: false, image: '', allergens: [] }),
      price: (d) => fmtEur(d.price || 0),
      image: (d, id) => resolveAsset(id, d.image),
      allergenText: (d) => countText((d.allergens || []).length)
    },

    // La web del Estilo 2 tiene el contenido escrito en su HTML; admin/overrides.js
    // aplica allí el nombre, los teléfonos y la carta guardados desde aquí.
    estilo2: {
      editable: true,
      appliesUnified: true,
      note: 'La carta, el nombre y los teléfonos se aplican a la portada y a la carta del Estilo 2 en este navegador al recargarlas. El eslogan, la dirección y el horario forman parte del diseño de la página y se cambian en estilo2/index.html.',
      info: [
        { key: 'name', label: 'Nombre del bar', help: 'Sustituye «Punto de Encuentro» en toda la web.' },
        { key: 'phone', label: 'Teléfono (como se muestra)' },
        { key: 'phoneRaw', label: 'Teléfono para llamar', help: 'Con prefijo. Ej: +34912948407' },
        { key: 'whatsapp', label: 'WhatsApp', help: 'Solo números con prefijo, sin +. Ej: 34912948407' },
        { key: 'tagline', label: 'Eslogan', readonly: true },
        { key: 'serviceStatus', label: 'Horario', readonly: true },
        { key: 'address', label: 'Dirección', wide: true, readonly: true }
      ],
      dishFields: [
        { key: 'name', label: 'Nombre del plato', required: true },
        { key: 'nameEn', label: 'Nombre en inglés' },
        { key: 'priceFormatted', label: 'Precio (texto)', required: true, placeholder: 'Ej: 3,20 € · +1,30 €', help: 'Un * en el precio lo resalta en otro color en la carta.' },
        { key: 'categoryId', label: 'Categoría', type: 'select', options: (data) => categoriesById(data).map(c => [c.id, c.name]) },
        { key: 'description', label: 'Descripción', type: 'textarea', wide: true },
        { key: 'allergenCodes', label: 'Alérgenos', type: 'allergenCodes', wide: true }
      ],
      newDish: (data) => { const c = categoriesById(data)[0]; return { id: 'pe-custom-' + Date.now(), name: '', nameEn: '', price: null, priceFormatted: '', category: c.name, categoryId: c.id, description: '', allergens: [], allergenCodes: [], note: c.note }; },
      beforeSave: (dish, data) => {
        const price = String(dish.priceFormatted || '').replace(/\s*€\s*$/, '').trim();
        dish.priceFormatted = price ? price + ' €' : '';
        dish.price = parseNumber(price.replace(/[+*]/g, '').split('/')[0]);
        const c = categoriesById(data).find(x => x.id === dish.categoryId);
        if (c) { dish.category = c.name; dish.note = c.note; }
        dish.allergens = (dish.allergenCodes || []).map(code => (PE_ALLERGENS.find(a => a[0] === code) || [code, code])[1]);
      },
      price: (d) => d.priceFormatted || (d.price != null ? fmtEur(d.price) : 'Consultar'),
      image: () => '',
      allergenText: (d) => countText((d.allergens || []).length)
    },

    estilo3: {
      editable: true,
      appliesUnified: true,
      note: 'La carta y los datos del local se aplican a la web del Estilo 3 en este navegador al recargarla. Las fotos de los platos vienen de estilo3/photos.js.',
      info: [
        { key: 'name', label: 'Nombre', help: 'Sustituye «Mala Pata» en los textos de la web (los logotipos son imágenes y no cambian).' },
        { key: 'phone', label: 'Teléfono', help: 'Ej: 91 942 36 96' },
        { key: 'address', label: 'Dirección', wide: true, help: 'Formato «Calle, número · CP Ciudad». La calle sustituye a la de la web y los mapas apuntan a la nueva dirección.' },
        { key: 'checkedAt', label: 'Carta revisada el', readonly: true }
      ],
      dishFields: [
        { key: 'name', label: 'Nombre del plato', required: true },
        { key: 'priceLabel', label: 'Precio (texto)', required: true, placeholder: 'Ej: 12,50 €' },
        { key: 'category', label: 'Categoría', type: 'select', options: (data) => data.categories.map(c => [c, c]) },
        { key: 'group', label: 'Subgrupo (opcional)', placeholder: 'Ej: Novedades' },
        { key: 'description', label: 'Descripción', type: 'textarea', wide: true },
        { key: 'allergens', label: 'Alérgenos (texto como en la carta)', wide: true, placeholder: 'Ej: Gluten, Huevo, Leche', help: 'La web detecta los iconos a partir de este texto. Vacío = información no publicada.' }
      ],
      newDish: (data) => ({ id: 'mp-custom-' + Date.now(), name: '', category: data.categories[0], group: '', description: '', priceLabel: '', allergens: '', variants: [], source: '' }),
      price: (d) => d.priceLabel || '—',
      image: (d) => { const p = window.MALA_PATA_PHOTOS && window.MALA_PATA_PHOTOS[d.id]; return p ? resolveAsset('estilo3', p.src) : ''; },
      allergenText: (d) => [d.allergens, ...(d.variants || []).map(v => v.allergens)].some(Boolean) ? 'Alérgenos indicados' : 'Alérgenos no publicados',
      dishNote: (d) => (d.variants && d.variants.length) ? `Este plato tiene ${d.variants.length} variedades con sus propios alérgenos; las variedades se editan en estilo3/data.js.` : ''
    },

    estilo4: {
      editable: true,
      appliesUnified: true,
      note: 'Los cambios se aplican a la web de este estilo en este navegador al recargarla.',
      info: [
        { key: 'name', label: 'Nombre del local' },
        { key: 'tagline', label: 'Eslogan' },
        { key: 'phone', label: 'Teléfono (como se muestra)' },
        { key: 'phoneIntl', label: 'Teléfono para llamar', help: 'Con prefijo. Ej: +34600000000' },
        { key: 'whatsapp', label: 'WhatsApp', help: 'Solo números con prefijo, sin +. Ej: 34600000000' },
        { key: 'email', label: 'Email' },
        { key: 'address', label: 'Dirección completa', wide: true },
        { key: 'addressShort', label: 'Dirección corta' },
        { key: 'hours', label: 'Horario', type: 'hours', wide: true },
        { key: 'aboutUs.story', label: 'Sobre nosotros', type: 'textarea', wide: true },
        { key: 'aboutUs.storyExtra', label: 'Sobre nosotros (segundo párrafo)', type: 'textarea', wide: true },
        { key: 'aboutUs.who', label: 'Quiénes somos', type: 'textarea', wide: true }
      ],
      dishFields: [
        { key: 'name', label: 'Nombre', required: true },
        { key: 'category', label: 'Categoría', type: 'select', options: (data) => (data.menuGroups || []).flatMap(g => g.categories.map(c => [c, g.label + ' · ' + c])) },
        { key: 'price', label: 'Precio desde (€)', type: 'number', step: '0.05', help: '0 o vacío = «Consultar en barra»' },
        { key: 'priceMax', label: 'Precio hasta (€, opcional)', type: 'number', step: '0.05' },
        { key: 'abv', label: 'Graduación (% vol, solo cervezas)', type: 'number', step: '0.1' },
        { key: 'image', label: 'Imagen (opcional)', placeholder: 'img/… o https://…' },
        { key: 'description', label: 'Descripción', type: 'textarea', wide: true }
      ],
      newDish: (data) => ({ id: 'm_custom_' + Date.now(), group: data.menuGroups[0].id, category: data.menuGroups[0].categories[0], name: '', description: '', abv: null, price: 0, priceMax: null, tags: [], image: '', allergens: [] }),
      // El grupo (Cervezas / Raciones) se deduce de la categoría elegida
      beforeSave: (dish, data) => {
        const g = (data.menuGroups || []).find(gr => gr.categories.includes(dish.category));
        if (g) dish.group = g.id;
        if (!dish.price) dish.price = 0;
      },
      price: (d) => !d.price ? 'Consultar en barra' : d.priceMax ? `${fmtEur(d.price).replace(' €', '')} – ${fmtEur(d.priceMax)}` : fmtEur(d.price),
      image: (d, id) => resolveAsset(id, d.image),
      allergenText: () => ''
    }
  };

  // ---------------------------------------------------------------------------
  // Estado
  // ---------------------------------------------------------------------------
  let activeTab = 'estilo1';
  const defaults = {};   // datos originales de cada data.js
  const working = {};    // originales + personalizaciones guardadas
  const ignoredOldData = {};
  const filters = {};    // búsqueda y categoría por estilo

  function loadAllStyles() {
    STYLE_IDS.forEach(id => {
      const raw = window[id.toUpperCase() + '_DATA'];
      defaults[id] = raw ? clone(raw) : null;
      working[id] = raw ? clone(raw) : null;
      ignoredOldData[id] = false;
      if (!raw) return;
      try {
        const custom = localStorage.getItem(STORAGE_PREFIX + id);
        if (custom) {
          const parsed = JSON.parse(custom);
          // Igual que estilo4/data.js: se ignoran datos guardados de una versión anterior
          if (defaults[id].dataVersion != null && parsed.dataVersion !== defaults[id].dataVersion) {
            ignoredOldData[id] = true;
          } else {
            Object.assign(working[id], parsed);
          }
        }
      } catch (e) {
        console.warn('Error cargando personalizaciones de ' + id, e);
      }
    });
  }

  function changedKeys(id) {
    const d = defaults[id], w = working[id];
    return Object.keys(w).filter(k => k !== 'dataVersion' && !same(w[k], d[k]));
  }

  function persist(id) {
    const keys = changedKeys(id);
    if (!keys.length) {
      localStorage.removeItem(STORAGE_PREFIX + id);
      return;
    }
    const diff = {};
    keys.forEach(k => { diff[k] = working[id][k]; });
    if (defaults[id].dataVersion != null) diff.dataVersion = defaults[id].dataVersion;
    localStorage.setItem(STORAGE_PREFIX + id, JSON.stringify(diff));
    ignoredOldData[id] = false;
  }

  // ---------------------------------------------------------------------------
  // UI general
  // ---------------------------------------------------------------------------
  function updateTabButtonsUI() {
    document.querySelectorAll('.admin-tab').forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      const base = 'admin-tab px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ';
      if (tab === activeTab) {
        btn.className = base + 'font-bold text-white ' + (tab === 'unified' ? 'bg-purple-600 shadow-lg shadow-purple-600/30' : 'bg-blue-600 shadow-lg shadow-blue-600/30');
      } else {
        btn.className = base + 'font-semibold ' + (tab === 'unified' ? 'bg-purple-950/60 hover:bg-purple-900/60 text-purple-300 border border-purple-500/30' : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60');
      }
      btn.setAttribute('aria-selected', tab === activeTab ? 'true' : 'false');
      const dot = btn.querySelector('[data-modified-dot]');
      if (dot) dot.classList.toggle('hidden', !(working[tab] && changedKeys(tab).length));
    });
  }

  let toastTimer = null;
  function showToast(msg, isError) {
    const toast = document.getElementById('admin-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.toggle('bg-emerald-600', !isError);
    toast.classList.toggle('bg-red-600', !!isError);
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none'), 3500);
  }

  const inputClass = 'w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 disabled:opacity-60 disabled:cursor-not-allowed';

  function renderField(field, value, prefix, disabled) {
    const id = prefix + field.key.replace(/\./g, '-');
    const dis = disabled ? 'disabled' : '';
    const req = field.required ? 'required' : '';
    const ph = field.placeholder ? `placeholder="${esc(field.placeholder)}"` : '';
    let control;
    if (field.type === 'textarea') {
      control = `<textarea id="${id}" data-field="${esc(field.key)}" rows="3" ${dis} ${req} ${ph} class="${inputClass}">${esc(value)}</textarea>`;
    } else if (field.type === 'hours') {
      const rows = Array.isArray(value) ? value : [];
      control = `<div class="space-y-2" data-field="${esc(field.key)}" data-type="hours">
          ${rows.map(h => hoursRow(h, disabled)).join('')}
          ${disabled ? '' : `<button type="button" data-add-hours class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-[16px]">add</span> Añadir franja</button>`}
        </div>`;
    } else {
      const type = field.type === 'number' ? 'number' : 'text';
      const step = field.step ? `step="${field.step}"` : '';
      control = `<input type="${type}" ${step} id="${id}" data-field="${esc(field.key)}" value="${esc(value)}" ${dis} ${req} ${ph} class="${inputClass}" />`;
    }
    return `<div class="${field.wide ? 'md:col-span-2 lg:col-span-3' : ''}">
        <label for="${id}" class="block text-xs font-bold text-slate-300 mb-1.5">${esc(field.label)}</label>
        ${control}
        ${field.help ? `<p class="text-[11px] text-slate-500 mt-1">${esc(field.help)}</p>` : ''}
      </div>`;
  }

  function hoursRow(h, disabled) {
    const dis = disabled ? 'disabled' : '';
    return `<div class="flex gap-2 items-center" data-hours-row>
        <input type="text" data-hours-days value="${esc(h.days)}" placeholder="Días" ${dis} class="${inputClass}" />
        <input type="text" data-hours-time value="${esc(h.time)}" placeholder="Horario" ${dis} class="${inputClass}" />
        ${disabled ? '' : `<button type="button" data-remove-hours class="p-2 text-slate-400 hover:text-red-400 cursor-pointer" title="Quitar franja" aria-label="Quitar franja"><span class="material-symbols-outlined text-[18px]">close</span></button>`}
      </div>`;
  }

  // ---------------------------------------------------------------------------
  // Pestaña de un estilo
  // ---------------------------------------------------------------------------
  function renderAdminMain() {
    const main = document.getElementById('admin-main');
    if (!main) return;

    if (activeTab === 'unified') {
      renderUnifiedSettings(main);
      return;
    }

    const id = activeTab;
    const cfg = STYLE_CONFIG[id];
    const data = working[id];
    if (!data) {
      main.innerHTML = `<p class="text-red-400">Error: no se han podido cargar los datos de ${esc(id)}/data.js</p>`;
      return;
    }

    const infoEditable = cfg.editable && cfg.editableInfo !== false;
    const modified = changedKeys(id);
    const unifiedName = (localStorage.getItem(UNIFIED_KEY) || '').trim();

    main.innerHTML = `
      <div class="space-y-8">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div class="space-y-1.5 min-w-0">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full ${cfg.editable ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}"></span>
              <span class="text-xs uppercase font-mono tracking-widest text-slate-400">${cfg.editable ? 'Modo edición' : 'Solo lectura'}</span>
              ${modified.length ? `<span class="text-[10px] uppercase font-bold tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">${modified.length} ${modified.length === 1 ? 'apartado modificado' : 'apartados modificados'}</span>` : ''}
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">${esc(data.name)}</h2>
            <p class="text-sm text-slate-400">${esc([data.tagline, data.neighborhood].filter(Boolean).join(' · '))}</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            ${cfg.editable ? `
              <button id="reset-style-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-300 border border-slate-700 cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed" ${modified.length ? '' : 'disabled'}>
                Restablecer originales
              </button>
              <button id="export-style-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed" ${modified.length ? '' : 'disabled'} title="Descarga los cambios en JSON para pasárselos al equipo">
                <span class="material-symbols-outlined text-[16px]">download</span> Exportar cambios
              </button>` : ''}
            <a href="../${id}/index.html" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">visibility</span> Ver en vivo ↗
            </a>
          </div>
        </div>

        <div class="flex gap-3 p-4 rounded-xl border text-xs leading-relaxed ${cfg.editable ? 'bg-blue-950/30 border-blue-900/50 text-blue-200' : 'bg-amber-950/30 border-amber-900/50 text-amber-200'}">
          <span class="material-symbols-outlined text-[18px] flex-shrink-0">${cfg.editable ? 'info' : 'lock'}</span>
          <div class="space-y-1">
            <p>${esc(cfg.note)}</p>
            ${cfg.editable ? '<p class="text-blue-300/70">Los cambios se guardan solo en este navegador. Usa «Exportar cambios» para compartirlos con el equipo.</p>' : ''}
            ${ignoredOldData[id] ? '<p class="text-amber-300">Había cambios guardados de una versión anterior de este estilo; se han ignorado.</p>' : ''}
            ${unifiedName && cfg.appliesUnified ? `<p class="text-purple-300">El nombre unificado «${esc(unifiedName)}» está activo y sustituye al nombre en la web.</p>` : ''}
          </div>
        </div>

        <section class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="material-symbols-outlined text-blue-400">business</span> Datos del establecimiento
            </h3>
            ${infoEditable ? `
              <div class="flex items-center gap-3">
                <span id="info-dirty" class="hidden text-xs text-amber-300">Cambios sin guardar</span>
                <button id="save-info-btn" form="style-info-form" type="submit" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all">
                  <span class="material-symbols-outlined text-[18px]">save</span> Guardar datos
                </button>
              </div>` : ''}
          </div>
          <form id="style-info-form" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" novalidate>
            ${cfg.info.map(f => renderField(f, getPath(data, f.key), 'info-', !infoEditable || f.readonly)).join('')}
          </form>
        </section>

        <section class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-400">restaurant_menu</span> Carta (${(data.menu || []).length})
              </h3>
              <p class="text-xs text-slate-400 mt-1">${cfg.editable ? 'Los cambios en la carta se guardan al momento' : 'Vista de la carta actual'}</p>
            </div>
            ${cfg.editable ? `
              <button id="add-dish-btn" class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/20">
                <span class="material-symbols-outlined text-[16px]">add</span> Añadir plato
              </button>` : ''}
          </div>
          <div class="flex flex-col sm:flex-row gap-3">
            <label class="relative flex-1">
              <span class="sr-only">Buscar plato</span>
              <span class="material-symbols-outlined text-[18px] text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">search</span>
              <input type="search" id="dish-search" placeholder="Buscar por nombre o descripción" class="${inputClass} pl-10" />
            </label>
            <label class="sm:w-64">
              <span class="sr-only">Filtrar por categoría</span>
              <select id="dish-category-filter" class="${inputClass}"></select>
            </label>
          </div>
          <div id="dishes-container"></div>
        </section>
      </div>
    `;

    renderCategoryFilter();
    renderDishes();
    setupMainEvents();
  }

  function renderCategoryFilter() {
    const data = working[activeTab];
    const f = filters[activeTab] || (filters[activeTab] = { q: '', cat: 'all' });
    const cats = [...new Set([...(data.categories || []), ...(data.menu || []).map(d => d.category)])];
    if (f.cat !== 'all' && !cats.includes(f.cat)) f.cat = 'all';
    const select = document.getElementById('dish-category-filter');
    select.innerHTML = `<option value="all">Todas las categorías</option>` + cats.map(c => `<option value="${esc(c)}" ${f.cat === c ? 'selected' : ''}>${esc(c)} (${data.menu.filter(d => d.category === c).length})</option>`).join('');
    document.getElementById('dish-search').value = f.q;
  }

  function renderDishes() {
    const id = activeTab;
    const cfg = STYLE_CONFIG[id];
    const data = working[id];
    const f = filters[id];
    const container = document.getElementById('dishes-container');
    if (!container) return;

    const q = normalize(f.q);
    const dishes = (data.menu || []).filter(d =>
      (f.cat === 'all' || d.category === f.cat) &&
      (!q || normalize(d.name + ' ' + (d.description || '')).includes(q))
    );

    if (!dishes.length) {
      container.innerHTML = `<p class="text-sm text-slate-400 py-8 text-center">No hay platos que coincidan con el filtro.</p>`;
      return;
    }

    const groups = [...new Set(dishes.map(d => d.category))];
    container.innerHTML = groups.map(cat => {
      const items = dishes.filter(d => d.category === cat);
      return `
        <div class="space-y-3 mb-6 last:mb-0">
          <h4 class="text-xs uppercase font-bold tracking-wider text-slate-400">${esc(cat)} <span class="text-slate-600">· ${items.length}</span></h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${items.map(d => dishCard(d, cfg, id)).join('')}
          </div>
        </div>`;
    }).join('');
  }

  function dishCard(d, cfg, id) {
    const img = cfg.image(d, id);
    const allergenText = cfg.allergenText(d);
    const original = (defaults[id].menu || []).find(o => o.id === d.id);
    const tag = !original ? 'Nuevo' : !same(original, d) ? 'Editado' : '';
    return `
      <div class="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex gap-3 transition-all">
        <div class="w-16 h-16 rounded-lg flex-shrink-0 bg-slate-800 overflow-hidden flex items-center justify-center text-slate-600">
          ${img ? `<img src="${esc(img)}" alt="" loading="lazy" class="w-full h-full object-cover" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'material-symbols-outlined',textContent:'${PLACEHOLDER_ICON}'}))" />` : `<span class="material-symbols-outlined">${PLACEHOLDER_ICON}</span>`}
        </div>
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h5 class="text-sm font-semibold text-slate-100 leading-snug line-clamp-2">${esc(d.name)}</h5>
              <span class="font-bold text-xs text-white font-mono whitespace-nowrap">${esc(cfg.price(d))}</span>
            </div>
            <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">${esc(d.description || '')}</p>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-2 gap-2">
            <span class="text-[10px] text-slate-500 flex items-center gap-1.5">
              ${tag ? `<span class="uppercase font-bold tracking-wider ${tag === 'Nuevo' ? 'text-emerald-400' : 'text-amber-300'}">${tag}</span>` : ''}
              ${esc(allergenText)}
            </span>
            ${cfg.editable ? `
              <div class="flex items-center gap-1">
                <button data-edit-dish="${esc(d.id)}" class="p-1 hover:text-blue-400 text-slate-400 cursor-pointer" title="Editar plato" aria-label="Editar ${esc(d.name)}">
                  <span class="material-symbols-outlined text-[16px]">edit</span>
                </button>
                <button data-delete-dish="${esc(d.id)}" class="p-1 hover:text-red-400 text-slate-400 cursor-pointer" title="Eliminar plato" aria-label="Eliminar ${esc(d.name)}">
                  <span class="material-symbols-outlined text-[16px]">delete</span>
                </button>
              </div>` : ''}
          </div>
        </div>
      </div>`;
  }

  function readInfoForm(form, data, fields) {
    fields.forEach(field => {
      if (field.readonly) return;
      if (field.type === 'hours') {
        const rows = [...form.querySelectorAll('[data-hours-row]')]
          .map(r => ({ days: r.querySelector('[data-hours-days]').value.trim(), time: r.querySelector('[data-hours-time]').value.trim() }))
          .filter(h => h.days || h.time);
        setPath(data, field.key, rows);
        return;
      }
      const el = form.querySelector(`[data-field="${field.key}"]`);
      if (!el) return;
      const value = field.type === 'number' ? parseNumber(el.value) : el.value.trim();
      // No convertir "sin valor" original (undefined) en cadena vacía
      if ((value === '' || value === null) && getPath(data, field.key) == null) return;
      setPath(data, field.key, value);
    });
  }

  function setupMainEvents() {
    const id = activeTab;
    const cfg = STYLE_CONFIG[id];

    const form = document.getElementById('style-info-form');
    const dirty = document.getElementById('info-dirty');
    if (form && dirty) {
      form.addEventListener('input', () => dirty.classList.remove('hidden'));
      form.addEventListener('click', (e) => {
        if (e.target.closest('[data-add-hours]')) {
          e.target.closest('[data-add-hours]').insertAdjacentHTML('beforebegin', hoursRow({ days: '', time: '' }, false));
          dirty.classList.remove('hidden');
        }
        const rm = e.target.closest('[data-remove-hours]');
        if (rm) { rm.closest('[data-hours-row]').remove(); dirty.classList.remove('hidden'); }
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const next = clone(working[id]);
        readInfoForm(form, next, cfg.info);
        if (!String(next.name || '').trim()) { showToast('El nombre no puede quedar vacío', true); return; }
        working[id] = next;
        persist(id);
        renderAdminMain();
        updateTabButtonsUI();
        showToast('✓ Datos guardados para ' + next.name);
      });
    }

    const resetBtn = document.getElementById('reset-style-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      if (!confirm('¿Restablecer todos los datos de este estilo a los originales? Se perderán los cambios guardados en este navegador.')) return;
      localStorage.removeItem(STORAGE_PREFIX + id);
      working[id] = clone(defaults[id]);
      ignoredOldData[id] = false;
      renderAdminMain();
      updateTabButtonsUI();
      showToast('✓ Datos originales restablecidos');
    });

    const exportBtn = document.getElementById('export-style-btn');
    if (exportBtn) exportBtn.addEventListener('click', () => {
      const raw = localStorage.getItem(STORAGE_PREFIX + id);
      if (!raw) return;
      const blob = new Blob([JSON.stringify(JSON.parse(raw), null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `cambios-${id}-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });

    const search = document.getElementById('dish-search');
    if (search) search.addEventListener('input', () => { filters[id].q = search.value; renderDishes(); });
    const catFilter = document.getElementById('dish-category-filter');
    if (catFilter) catFilter.addEventListener('change', () => { filters[id].cat = catFilter.value; renderDishes(); });

    const addDishBtn = document.getElementById('add-dish-btn');
    if (addDishBtn) addDishBtn.addEventListener('click', () => openDishEditorModal(null));

    const dishes = document.getElementById('dishes-container');
    if (dishes) dishes.addEventListener('click', (e) => {
      const edit = e.target.closest('[data-edit-dish]');
      if (edit) {
        const dish = working[id].menu.find(d => d.id === edit.getAttribute('data-edit-dish'));
        if (dish) openDishEditorModal(dish);
        return;
      }
      const del = e.target.closest('[data-delete-dish]');
      if (del) {
        const dish = working[id].menu.find(d => d.id === del.getAttribute('data-delete-dish'));
        if (!dish || !confirm(`¿Eliminar «${dish.name}» de la carta?`)) return;
        working[id].menu = working[id].menu.filter(d => d !== dish);
        persist(id);
        refreshAfterMenuChange();
        showToast('✓ Plato eliminado');
      }
    });
  }

  // Tras cambiar la carta, se actualiza sin perder lo escrito en el formulario de datos
  function refreshAfterMenuChange() {
    const id = activeTab;
    const form = document.getElementById('style-info-form');
    const dirty = document.getElementById('info-dirty');
    const pending = form && dirty && !dirty.classList.contains('hidden') ? (() => { const tmp = clone(working[id]); readInfoForm(form, tmp, STYLE_CONFIG[id].info); return tmp; })() : null;
    const scroll = window.scrollY;
    renderAdminMain();
    if (pending) {
      const newForm = document.getElementById('style-info-form');
      STYLE_CONFIG[id].info.forEach(fld => {
        if (fld.type === 'hours') return;
        const el = newForm.querySelector(`[data-field="${fld.key}"]`);
        if (el) el.value = getPath(pending, fld.key) ?? '';
      });
      document.getElementById('info-dirty').classList.remove('hidden');
    }
    updateTabButtonsUI();
    window.scrollTo(0, scroll);
  }

  // ---------------------------------------------------------------------------
  // Modal de plato (campos según el estilo)
  // ---------------------------------------------------------------------------
  function renderDishField(field, dish, data) {
    const value = dish[field.key];
    const id = 'dish-' + field.key;
    if (field.type === 'select') {
      const options = field.options(data);
      const hasValue = options.some(o => o[0] === value);
      return `<div class="${field.wide ? 'sm:col-span-2' : ''}">
          <label for="${id}" class="block text-xs font-bold text-slate-300 mb-1">${esc(field.label)}</label>
          <select id="${id}" data-dish-field="${field.key}" class="${inputClass}">
            ${!hasValue && value ? `<option value="${esc(value)}" selected>${esc(value)}</option>` : ''}
            ${options.map(([v, l]) => `<option value="${esc(v)}" ${v === value ? 'selected' : ''}>${esc(l)}</option>`).join('')}
          </select>
        </div>`;
    }
    if (field.type === 'allergenCodes') {
      const current = value || [];
      return `<fieldset class="sm:col-span-2">
          <legend class="block text-xs font-bold text-slate-300 mb-2">${esc(field.label)}</legend>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            ${PE_ALLERGENS.map(([k, l]) => `
              <label class="flex items-center gap-2 text-xs text-slate-300 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 cursor-pointer hover:border-slate-600">
                <input type="checkbox" data-allergen-code="${k}" ${current.includes(k) ? 'checked' : ''} class="accent-blue-500" /> ${esc(l)}
              </label>`).join('')}
          </div>
        </fieldset>`;
    }
    if (field.type === 'allergens') {
      const current = (value || []).map(a => ALLERGEN_ALIAS[a] || a);
      return `<fieldset class="sm:col-span-2">
          <legend class="block text-xs font-bold text-slate-300 mb-2">${esc(field.label)}</legend>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            ${EU_ALLERGENS.map(([k, l]) => `
              <label class="flex items-center gap-2 text-xs text-slate-300 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-2 cursor-pointer hover:border-slate-600">
                <input type="checkbox" data-allergen="${k}" ${current.includes(k) ? 'checked' : ''} class="accent-blue-500" /> ${esc(l)}
              </label>`).join('')}
          </div>
        </fieldset>`;
    }
    return renderField(field, value, 'dish-', false).replace('md:col-span-2 lg:col-span-3', 'sm:col-span-2').replace('data-field=', 'data-dish-field=');
  }

  function openDishEditorModal(dish) {
    const id = activeTab;
    const cfg = STYLE_CONFIG[id];
    const data = working[id];
    const modal = document.getElementById('dish-editor-modal');
    const form = document.getElementById('dish-editor-form');
    const fieldsBox = document.getElementById('dish-editor-fields');
    const title = document.getElementById('editor-modal-title');
    if (!modal || !form || !fieldsBox) return;

    const draft = dish ? clone(dish) : cfg.newDish(data);
    title.textContent = dish ? 'Editar plato: ' + dish.name : 'Añadir plato a la carta';
    const note = cfg.dishNote ? cfg.dishNote(draft) : '';
    fieldsBox.innerHTML = `
      ${note ? `<p class="text-xs text-amber-200 bg-amber-950/30 border border-amber-900/50 rounded-lg p-3 mb-4">${esc(note)}</p>` : ''}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${cfg.dishFields.map(f => renderDishField(f, draft, data)).join('')}
      </div>`;

    const lastFocus = document.activeElement;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const first = fieldsBox.querySelector('input, select, textarea');
    if (first) first.focus();

    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.removeEventListener('keydown', onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    document.getElementById('close-editor-modal').onclick = closeModal;
    document.getElementById('cancel-dish-edit').onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };

    form.onsubmit = (e) => {
      e.preventDefault();
      cfg.dishFields.forEach(field => {
        if (field.type === 'allergenCodes') {
          draft.allergenCodes = [...fieldsBox.querySelectorAll('[data-allergen-code]:checked')].map(c => c.getAttribute('data-allergen-code'));
          return;
        }
        if (field.type === 'allergens') {
          draft.allergens = [...fieldsBox.querySelectorAll('[data-allergen]:checked')].map(c => c.getAttribute('data-allergen'));
          return;
        }
        const el = fieldsBox.querySelector(`[data-dish-field="${field.key}"]`);
        if (!el) return;
        draft[field.key] = field.type === 'number' ? parseNumber(el.value) : el.value.trim();
      });
      if (cfg.beforeSave) cfg.beforeSave(draft, data);
      if (!draft.name) { showToast('El plato necesita un nombre', true); return; }

      const menu = data.menu || (data.menu = []);
      const index = dish ? menu.indexOf(dish) : -1;
      if (index >= 0) menu[index] = draft; else menu.push(draft);
      persist(id);
      closeModal();
      refreshAfterMenuChange();
      showToast('✓ «' + draft.name + '» guardado');
    };
  }

  // ---------------------------------------------------------------------------
  // Pestaña de nombre unificado
  // ---------------------------------------------------------------------------
  function renderUnifiedSettings(main) {
    const savedName = localStorage.getItem(UNIFIED_KEY) || '';
    const applies = STYLE_IDS.filter(id => STYLE_CONFIG[id].appliesUnified);
    const notApplies = STYLE_IDS.filter(id => !STYLE_CONFIG[id].appliesUnified);
    const label = (id) => `${defaults[id] ? defaults[id].name : id} (${id.replace('estilo', 'Estilo ')})`;

    main.innerHTML = `
      <div class="max-w-2xl mx-auto space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex items-center gap-3 text-purple-400 mb-2">
            <span class="material-symbols-outlined text-[32px]">store</span>
            <h2 class="text-2xl font-bold text-white">Nombre unificado</h2>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            Cambia a la vez el nombre del local en los estilos que lo admiten. Sirve para una demo personalizada a un cliente (por ejemplo, «Taberna Don Ramón»).
          </p>
          <form id="unified-form" class="pt-4 space-y-4">
            <div>
              <label for="unified-name-input" class="block text-xs font-bold text-slate-300 mb-1.5">Nombre del cliente / local</label>
              <input type="text" id="unified-name-input" value="${esc(savedName)}" placeholder="Ej: Taberna Don Ramón" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-purple-500 font-semibold" />
            </div>
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <button type="submit" class="px-6 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 cursor-pointer">
                Aplicar nombre
              </button>
              <button type="button" id="clear-unified-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed" ${savedName ? '' : 'disabled'}>
                Desactivar
              </button>
            </div>
          </form>
        </div>

        <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
          <p><strong class="text-slate-300">Se aplica a:</strong> ${applies.map(label).map(esc).join(', ')}.</p>
          ${notApplies.length ? `<p><strong class="text-slate-300">No se aplica a:</strong> ${notApplies.map(label).map(esc).join(', ')}.</p>` : ''}
          <p>En el Estilo 1 la portada usa el logotipo fijo de Vukata; el nombre aparece en reservas, cocina, métricas y ventanas. En el Estilo 3 los logotipos son imágenes y no cambian.</p>
          <p>Al desactivarlo, cada estilo vuelve a mostrar su nombre propio.</p>
        </div>
      </div>
    `;

    document.getElementById('unified-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.getElementById('unified-name-input').value.trim();
      if (!val) { showToast('Escribe un nombre o pulsa «Desactivar»', true); return; }
      localStorage.setItem(UNIFIED_KEY, val);
      renderUnifiedSettings(main);
      showToast('✓ Nombre «' + val + '» aplicado');
    });
    document.getElementById('clear-unified-btn').addEventListener('click', () => {
      localStorage.removeItem(UNIFIED_KEY);
      renderUnifiedSettings(main);
      showToast('✓ Nombre unificado desactivado');
    });
  }

  // ---------------------------------------------------------------------------
  function initAdmin() {
    loadAllStyles();
    document.querySelectorAll('.admin-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab');
        updateTabButtonsUI();
        renderAdminMain();
      });
    });
    updateTabButtonsUI();
    renderAdminMain();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdmin);
  } else {
    initAdmin();
  }
})();
