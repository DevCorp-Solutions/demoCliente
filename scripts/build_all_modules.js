const fs = require('fs');
const path = require('path');

const appJs = fs.readFileSync('assets/js/app.js', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = appJs.split('\n');

// 1. EXTRACT PRESETS
const presetsCode = lines.slice(10, 1336).join('\n');
eval(presetsCode.replace('const RESTAURANT_PRESETS', 'global.RESTAURANT_PRESETS'));

function fixRelativePaths(obj) {
  const json = JSON.stringify(obj, null, 2);
  const fixed = json.replace(/"assets\/images\//g, '"../assets/images/');
  return JSON.parse(fixed);
}

// 2. EXTRACT VUKATA ALLERGENS, ALIASES & HELPERS
const allergensMatch = appJs.match(/const VUKATA_ALLERGENS = \{[\s\S]*?\n\};/)[0];
const aliasMatch = appJs.match(/const ALLERGEN_ALIAS = \{[\s\S]*?\n\};/)[0];
const iconsMatch = appJs.match(/const ICONS = \{[\s\S]*?\n\};/)[0];

const helpersCode = `
${iconsMatch}

function formatCurrency(val) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);
}

${allergensMatch}

${aliasMatch}

function getAllergenDef(code) {
  if (!code) return null;
  const normalized = ALLERGEN_ALIAS[code] || code;
  return VUKATA_ALLERGENS[normalized] || {
    id: normalized,
    name: normalized.charAt(0).toUpperCase() + normalized.slice(1),
    color: '#64748b',
    svg: \`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9"/></svg>\`
  };
}

function renderAllergenBadge(code, size = 'sm', showLabel = false) {
  const def = getAllergenDef(code);
  if (!def) return '';

  const sizeClasses = {
    xs: { pill: 'w-4 h-4', icon: 'w-2.5 h-2.5', text: 'text-[9px]' },
    sm: { pill: 'w-5 h-5', icon: 'w-3 h-3', text: 'text-[11px]' },
    md: { pill: 'w-7 h-7', icon: 'w-4 h-4', text: 'text-xs' },
    lg: { pill: 'w-9 h-9', icon: 'w-5 h-5', text: 'text-sm' }
  }[size] || { pill: 'w-5 h-5', icon: 'w-3 h-3', text: 'text-xs' };

  if (showLabel) {
    return \`
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white shadow-sm" style="background-color: \${def.color};" title="\${def.name}">
        <span class="\${sizeClasses.icon} flex items-center justify-center flex-shrink-0">\${def.svg}</span>
        <span class="\${sizeClasses.text} font-bold uppercase tracking-wider">\${def.name}</span>
      </span>
    \`;
  }

  return \`
    <span class="vukata-allergen-pill \${sizeClasses.pill}" style="background-color: \${def.color};" title="Contiene \${def.name}">
      <span class="\${sizeClasses.icon} flex items-center justify-center flex-shrink-0">\${def.svg}</span>
    </span>
  \`;
}

function renderAllergenBadges(allergenList, size = 'sm') {
  if (!allergenList || !Array.isArray(allergenList) || allergenList.length === 0) return '';
  return \`
    <div class="inline-flex items-center gap-1 flex-wrap align-middle" title="Alérgenos presentes">
      \${allergenList.map(code => renderAllergenBadge(code, size)).join('')}
    </div>
  \`;
}

function renderVukataAllergenLegend(activeAllergens = []) {
  const allergens = Object.values(VUKATA_ALLERGENS);
  return \`
    <div class="w-full">
      <div class="text-center max-w-3xl mx-auto mb-10">
        <div class="inline-flex items-center gap-2 text-primary mb-2">
          <span class="w-6 h-[2px] bg-primary"></span>
          <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] uppercase font-bold text-primary">DIRECTIVA OFICIAL EUROPEA</span>
          <span class="w-6 h-[2px] bg-primary"></span>
        </div>
        <h3 class="font-headline-md text-2xl sm:text-3xl text-on-surface font-semibold">Información de Alérgenos de Nuestra Carta</h3>
        <p class="font-body-md text-on-surface-variant text-sm mt-2">
          Reglamento (UE) Nº 1169/2011 sobre alérgenos e información alimentaria facilitada al consumidor. Pulsa sobre cualquier alérgeno para filtrar u ocultar platos automáticamente en la carta.
        </p>
      </div>

      <!-- Cuadrícula de 14 alérgenos con tarjetas nítidas sobre fondo blanco alargado -->
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 justify-items-center">
        \${allergens.map(a => {
          const isSelected = activeAllergens && activeAllergens.includes(a.id);
          return \`
            <button data-allergen="\${a.id}" class="flex flex-col items-center text-center group cursor-pointer p-3 sm:p-4 rounded-2xl transition-all w-full border \${
              isSelected
                ? 'bg-primary/5 border-primary shadow-md ring-2 ring-primary/30'
                : 'bg-surface-container-low hover:bg-surface-container-highest border-outline-variant/30 hover:border-outline-variant/60 shadow-xs'
            }" title="\${isSelected ? 'Quitar filtro de ' + a.name : 'Filtrar platos con ' + a.name}">
              <span class="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 flex-shrink-0" style="background-color: \${a.color};">
                <span class="w-5 h-5 flex items-center justify-center">\${a.svg}</span>
              </span>
              <span class="font-kicker-eyebrow text-[11px] font-bold text-on-surface uppercase tracking-tight mt-2.5 leading-tight group-hover:text-primary transition-colors">
                \${a.name}
              </span>
              \${isSelected ? '<span class="text-[10px] text-primary font-bold mt-1">✕ Activo</span>' : ''}
            </button>
          \`;
        }).join('')}
      </div>

      <div class="mt-10 pt-8 border-t border-outline-variant/20 text-center space-y-1.5 text-xs text-on-surface-variant">
        <p class="font-bold text-on-surface text-sm">Todos los precios de nuestra carta incluyen el IVA. Los platos se mantendrán hasta fin de existencias.</p>
        <p class="text-primary font-medium">Consulte siempre a nuestro personal de sala sobre alérgenos específicos, protocolos de cocina y opciones para intolerancias.</p>
      </div>
    </div>
  \`;
}

function getAllergenLabel(code) {
  const def = getAllergenDef(code);
  return def ? def.name : code;
}
`;

// 3. GENERATE data.js FOR ALL 4 STYLES
['estilo1', 'estilo2', 'estilo3', 'estilo4'].forEach(id => {
  const fixedData = fixRelativePaths(global.RESTAURANT_PRESETS[id]);
  const dataJsContent = `// ${id}/data.js - Datos oficiales y configurables para ${fixedData.name}
const DEFAULT_DATA = ${JSON.stringify(fixedData, null, 2)};

function loadData() {
  let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  if (typeof localStorage !== 'undefined') {
    try {
      const custom = localStorage.getItem('devcorp_data_${id}');
      if (custom) {
        const parsed = JSON.parse(custom);
        data = { ...data, ...parsed };
      }
      const unifiedName = localStorage.getItem('devcorp_unified_name');
      if (unifiedName && unifiedName.trim() !== '') {
        data.name = unifiedName.trim();
      }
    } catch (e) {
      console.warn("Error cargando datos personalizados de ${id}:", e);
    }
  }
  return data;
}

window.CURRENT_PRESET = loadData();
window.${id.toUpperCase()}_DATA = window.CURRENT_PRESET;
`;

  fs.writeFileSync(`${id}/data.js`, dataJsContent, 'utf8');
  console.log(`Generated ${id}/data.js`);
});

// 4. GENERATE style.css FOR ALL 4 STYLES
const cssLines = css.split('\n');
const baseCss = cssLines.slice(0, 30).join('\n');
const estilo1Theme = cssLines.slice(30, 265).join('\n');
const estilo2Theme = cssLines.slice(265, 301).join('\n');
const estilo3Theme = cssLines.slice(301, 346).join('\n');
const estilo4Theme = cssLines.slice(346, 372).join('\n');
const commonUi = cssLines.slice(372, 457).join('\n');
const estilo1Header = cssLines.slice(457).join('\n');

fs.writeFileSync('estilo1/style.css', [baseCss, estilo1Theme, commonUi, estilo1Header].join('\n\n'), 'utf8');
fs.writeFileSync('estilo2/style.css', [baseCss, estilo2Theme, commonUi].join('\n\n'), 'utf8');
fs.writeFileSync('estilo3/style.css', [baseCss, estilo3Theme, commonUi].join('\n\n'), 'utf8');
fs.writeFileSync('estilo4/style.css', [baseCss, estilo4Theme, commonUi].join('\n\n'), 'utf8');
console.log('Generated style.css for all 4 styles.');

// 5. EXTRACT METHODS FROM GastroApp WITH EXACT LINE BOUNDARIES
const methodRanges = {
  showToast: [2306, 2321],
  updateCartBadge: [2322, 2351],
  updateHeaderScroll: [2352, 2370],
  renderLightbox: [2501, 2529],
  renderHeaderForStyle: [2530, 2768],
  renderEstilo1Layout: [2813, 3561],
  renderEstilo2Layout: [3562, 3710],
  renderEstilo3Layout: [3711, 3843],
  renderEstilo4Layout: [3844, 3976],
  renderDishDetailModal: [3977, 4193],
  renderCartDrawer: [4194, 4300],
  renderCheckoutModal: [4301, 4433],
  renderKdsView: [4434, 4607],
  renderKdsOrderCards: [4608, 4698],
  renderMetricsView: [4699, 4835],
  renderReservationsView: [4836, 4990],
  renderRoiView: [4991, 5185],
  renderGoogleReviewsSection: [5186, 5405],
  renderSmartReviewModal: [5406, 5696],
  renderFooterForStyle: [5697, 5836]
};

const appJsLines = appJs.split(/\r?\n/);
function getMethodCode(methodName) {
  const range = methodRanges[methodName];
  if (!range) throw new Error("Unknown method: " + methodName);
  return appJsLines.slice(range[0] - 1, range[1]).join('\n');
}

const sharedMethodsList = [
  'renderReservationsView',
  'renderKdsView',
  'renderKdsOrderCards',
  'renderMetricsView',
  'renderRoiView',
  'renderDishDetailModal',
  'renderCartDrawer',
  'renderCheckoutModal',
  'renderLightbox',
  'renderSmartReviewModal',
  'renderGoogleReviewsSection',
  'showToast',
  'updateCartBadge',
  'updateHeaderScroll'
];

let sharedMethodsCode = sharedMethodsList.map(m => getMethodCode(m)).join('\n\n');
sharedMethodsCode = sharedMethodsCode.replace(/assets\/images\//g, '../assets/images/');

const layout1Code = getMethodCode('renderEstilo1Layout').replace(/assets\/images\//g, '../assets/images/');
const layout2Code = getMethodCode('renderEstilo2Layout').replace(/assets\/images\//g, '../assets/images/');
const layout3Code = getMethodCode('renderEstilo3Layout').replace(/assets\/images\//g, '../assets/images/');
const layout4Code = getMethodCode('renderEstilo4Layout').replace(/assets\/images\//g, '../assets/images/');

let headerMethodCode = getMethodCode('renderHeaderForStyle').replace(/assets\/images\//g, '../assets/images/');
let footerMethodCode = getMethodCode('renderFooterForStyle').replace(/assets\/images\//g, '../assets/images/');

// Update header selector in headerMethodCode to include friendly restaurant titles
headerMethodCode = headerMethodCode.replace(
  '<option value="estilo1" ${preset.id === \'estilo1\' ? \'selected\' : \'\'}>Estilo 1</option>',
  '<option value="estilo1" ${preset.id === \'estilo1\' ? \'selected\' : \'\'}>Estilo 1: Parrilla Vukata</option>'
);
headerMethodCode = headerMethodCode.replace(
  '<option value="estilo2" ${preset.id === \'estilo2\' ? \'selected\' : \'\'}>Estilo 2</option>',
  '<option value="estilo2" ${preset.id === \'estilo2\' ? \'selected\' : \'\'}>Estilo 2: Cervecería 27</option>'
);
headerMethodCode = headerMethodCode.replace(
  '<option value="estilo3" ${preset.id === \'estilo3\' ? \'selected\' : \'\'}>Estilo 3</option>',
  '<option value="estilo3" ${preset.id === \'estilo3\' ? \'selected\' : \'\'}>Estilo 3: Pizzería Carlos</option>'
);
headerMethodCode = headerMethodCode.replace(
  '<option value="estilo4" ${preset.id === \'estilo4\' ? \'selected\' : \'\'}>Estilo 4</option>',
  '<option value="estilo4" ${preset.id === \'estilo4\' ? \'selected\' : \'\'}>Estilo 4: Cafetería Campamento</option>'
);

// 6. BUILD app.js FOR EACH STYLE
const stylesConfig = [
  { id: 'estilo1', layout: layout1Code, callLayout: 'this.renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergens, topData);' },
  { id: 'estilo2', layout: layout2Code, callLayout: 'this.renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) + this.renderGoogleReviewsSection(preset);' },
  { id: 'estilo3', layout: layout3Code, callLayout: 'this.renderEstilo3Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) + this.renderGoogleReviewsSection(preset);' },
  { id: 'estilo4', layout: layout4Code, callLayout: 'this.renderEstilo4Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) + this.renderGoogleReviewsSection(preset);' }
];

stylesConfig.forEach(({ id, layout, callLayout }) => {
  const appJsContent = `/**
 * DevCorp GastroSuite - Módulo Autónomo para ${id.toUpperCase()}
 * Este archivo funciona de forma 100% independiente en su propia carpeta.
 */

${helpersCode}

const STORAGE_KEY = 'devcorp_gastrosuite_state_${id}_v1';

const INITIAL_DISH_SALES = {
  "e1_asado": 54, "e1_emp": 48, "e1_pro": 39, "e1_hue": 42, "e1_parr2": 37, "e1_tarta": 45,
  "e2_1": 78, "e2_2": 52, "e2_3": 41, "e2_4": 64, "e2_5": 39, "e2_6": 47,
  "e3_1": 65, "e3_2": 44, "e3_3": 58, "e3_4": 49, "e3_5": 32, "e3_6": 41,
  "e4_1": 82, "e4_2": 114, "e4_3": 56, "e4_4": 69, "e4_5": 48, "e4_6": 39
};

const INITIAL_DEMO_ORDERS = [
  {
    id: "ORD-101",
    timestamp: "14:15",
    type: "mesa",
    tableNumber: "Mesa 4 (Comedor)",
    customerName: "Carlos M.",
    items: [
      { id: "item_1", name: "Plato Especial", qty: 1, price: 17.50, notes: "Al punto" }
    ],
    total: 17.50,
    status: "kitchen",
    elapsedMinutes: 14
  }
];

class AppStore {
  constructor() {
    this.subscribers = [];
    this.state = this.loadState();
  }

  loadState() {
    if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            presetId: '${id}',
            currentView: parsed.currentView || 'menu',
            cart: parsed.cart || [],
            orders: (parsed.orders && parsed.orders.length > 0) ? parsed.orders : INITIAL_DEMO_ORDERS,
            reservations: parsed.reservations || [],
            dishSales: parsed.dishSales || INITIAL_DISH_SALES,
            activeCategory: 'all',
            activeAllergenFilter: null,
            activeAllergenFilters: []
          };
        }
      } catch (e) {
        console.warn("Could not read local state, fallback to initial", e);
      }
    }

    return {
      presetId: '${id}',
      currentView: 'menu',
      cart: [],
      orders: INITIAL_DEMO_ORDERS,
      reservations: [],
      dishSales: { ...INITIAL_DISH_SALES },
      activeCategory: 'all',
      activeAllergenFilter: null,
      activeAllergenFilters: []
    };
  }

  save() {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          presetId: '${id}',
          currentView: this.state.currentView,
          cart: this.state.cart,
          orders: this.state.orders,
          reservations: this.state.reservations,
          dishSales: this.state.dishSales
        }));
      } catch (e) {
        console.warn("Could not save state", e);
      }
    }
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.state));
  }

  getPreset() {
    return window.CURRENT_PRESET;
  }

  setPreset(presetId) {
    if (presetId !== '${id}') {
      window.location.href = '../' + presetId + '/index.html';
    }
  }

  setView(viewName) {
    this.state.currentView = viewName;
    this.save();
  }

  setCategory(cat) {
    this.state.activeCategory = cat;
    this.notify();
  }

  toggleAllergenFilter(allergen) {
    if (!this.state.activeAllergenFilters) {
      this.state.activeAllergenFilters = [];
    }
    const idx = this.state.activeAllergenFilters.indexOf(allergen);
    if (idx > -1) {
      this.state.activeAllergenFilters.splice(idx, 1);
    } else {
      this.state.activeAllergenFilters.push(allergen);
    }
    this.state.activeAllergenFilter = this.state.activeAllergenFilters[0] || null;
    this.notify();
  }

  clearAllergenFilters() {
    this.state.activeAllergenFilters = [];
    this.state.activeAllergenFilter = null;
    this.notify();
  }

  setAllergenFilter(allergen) {
    this.toggleAllergenFilter(allergen);
  }

  getDishSalesCount(dishId) {
    return this.state.dishSales[dishId] || 15;
  }

  getMostOrderedDish() {
    const preset = this.getPreset();
    let topDish = (preset && preset.menu && preset.menu[0]) ? preset.menu[0] : null;
    let maxCount = -1;

    if (preset && preset.menu) {
      preset.menu.forEach(dish => {
        const count = this.getDishSalesCount(dish.id);
        if (count > maxCount) {
          maxCount = count;
          topDish = dish;
        }
      });
    }

    return {
      dish: topDish,
      count: maxCount > 0 ? maxCount : 15
    };
  }

  incrementDishSale(dishId, qty = 1) {
    if (!this.state.dishSales[dishId]) {
      this.state.dishSales[dishId] = 15;
    }
    this.state.dishSales[dishId] += qty;
    this.save();
  }

  addToCart(item, notes = "", qty = 1) {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += qty;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: qty
      });
    }
    this.save();
  }

  addToCartSilent(item, notes = "", qty = 1) {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += qty;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: qty
      });
    }
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          presetId: '${id}',
          currentView: this.state.currentView,
          cart: this.state.cart,
          orders: this.state.orders,
          reservations: this.state.reservations,
          dishSales: this.state.dishSales
        }));
      } catch (e) {
        console.warn("Could not save state silently", e);
      }
    }
  }

  removeFromCart(index) {
    if (this.state.cart[index]) {
      this.state.cart.splice(index, 1);
      this.save();
    }
  }

  updateCartQty(index, delta) {
    if (this.state.cart[index]) {
      this.state.cart[index].qty += delta;
      if (this.state.cart[index].qty <= 0) {
        this.removeFromCart(index);
      } else {
        this.save();
      }
    }
  }

  clearCart() {
    this.state.cart = [];
    this.save();
  }

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getCartItemCount() {
    return this.state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  createOrder(orderData) {
    const newOrder = {
      id: "ORD-" + Math.floor(100 + Math.random() * 900),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: orderData.type || "mesa",
      tableNumber: orderData.tableNumber || (orderData.type === "mesa" ? "Mesa 1 (Sala)" : "Para Llevar"),
      customerName: orderData.customerName || "Cliente",
      phone: orderData.phone || "",
      address: orderData.address || "",
      notes: orderData.notes || "",
      items: [...this.state.cart],
      total: this.getCartTotal(),
      status: "pending",
      elapsedMinutes: 0
    };

    this.state.orders.unshift(newOrder);

    this.state.cart.forEach(item => {
      this.incrementDishSale(item.id, item.qty);
    });

    this.clearCart();
    this.save();
    return newOrder;
  }

  updateOrderStatus(orderId, nextStatus) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = nextStatus;
      this.save();
    }
  }

  addReservation(reservationData) {
    const newRes = {
      id: "RES-" + Math.floor(1000 + Math.random() * 9000),
      timestamp: new Date().toLocaleString(),
      ...reservationData,
      status: "confirmed"
    };
    this.state.reservations.unshift(newRes);
    this.save();
    return newRes;
  }

  resetDemo() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    this.state = this.loadState();
    this.notify();
  }
}

const store = new AppStore();
window.store = store;

class GastroApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.modalQty = 1;
    this.currentModalDish = null;
    this.menuMode = 'cards';
    this.isAllergenBoxOpen = false;
    this.currentPresetId = '${id}';
    this.init();
  }

  init() {
    store.subscribe(() => {
      this.render();
    });
    this.setupGlobalEvents();
    this.render();
  }

  setupGlobalEvents() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('scroll', () => {
        this.updateHeaderScroll();
      }, { passive: true });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('lightbox-container');
        if (lb && lb.innerHTML !== '') {
          this.renderLightbox(null);
          return;
        }
        const dishModal = document.getElementById('dish-modal-container');
        if (dishModal && dishModal.innerHTML !== '') {
          dishModal.innerHTML = '';
          this.currentModalDish = null;
          this.modalQty = 1;
          return;
        }
        const reviewModal = document.getElementById('review-modal-container');
        if (reviewModal && reviewModal.innerHTML !== '') {
          reviewModal.innerHTML = '';
          return;
        }
        const checkoutModal = document.getElementById('checkout-modal-container');
        if (checkoutModal && checkoutModal.innerHTML !== '') {
          checkoutModal.innerHTML = '';
          return;
        }
        const cartDrawer = document.getElementById('cart-drawer-container');
        if (cartDrawer && cartDrawer.innerHTML !== '') {
          this.renderCartDrawer(false);
          return;
        }
      }
    });

    document.addEventListener('click', (e) => {
      const viewBtn = e.target.closest('[data-view]');
      if (viewBtn) {
        e.preventDefault();
        store.setView(viewBtn.getAttribute('data-view'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const modalMinus = e.target.closest('[data-modal-qty-minus]');
      if (modalMinus) {
        e.preventDefault();
        e.stopPropagation();
        if (this.modalQty > 1) {
          this.modalQty -= 1;
          const qtyElem = document.getElementById('modal-dish-qty-val');
          if (qtyElem) qtyElem.innerText = this.modalQty;
        }
        return;
      }
      const modalPlus = e.target.closest('[data-modal-qty-plus]');
      if (modalPlus) {
        e.preventDefault();
        e.stopPropagation();
        this.modalQty += 1;
        const qtyElem = document.getElementById('modal-dish-qty-val');
        if (qtyElem) qtyElem.innerText = this.modalQty;
        return;
      }

      const modalAddBtn = e.target.closest('[data-modal-add-cart]');
      if (modalAddBtn && this.currentModalDish) {
        e.preventDefault();
        e.stopPropagation();
        const dish = this.currentModalDish;
        store.addToCartSilent(dish, "", this.modalQty);
        this.updateCartBadge();
        this.showToast(\`✓ \${dish.name} (x\${this.modalQty}) añadido a la comanda\`);
        const modalContainer = document.getElementById('dish-modal-container');
        if (modalContainer) modalContainer.innerHTML = '';
        this.currentModalDish = null;
        this.modalQty = 1;
        return;
      }

      const modeBtn = e.target.closest('[data-menu-mode]');
      if (modeBtn) {
        e.preventDefault();
        e.stopPropagation();
        const newMode = modeBtn.getAttribute('data-menu-mode');
        if (this.menuMode !== newMode) {
          this.menuMode = newMode;
          const savedScrollY = (typeof window !== 'undefined') ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
          const content = document.getElementById('view-content');
          if (content) {
            const prevH = content.offsetHeight;
            if (prevH > 0) content.style.minHeight = \`\${prevH}px\`;
            this.renderMenuView(content, store.getPreset());
            if (savedScrollY > 0 && typeof window !== 'undefined') {
              window.scrollTo({ top: savedScrollY, behavior: 'instant' });
              requestAnimationFrame(() => {
                window.scrollTo({ top: savedScrollY, behavior: 'instant' });
                setTimeout(() => { if (content) content.style.minHeight = ''; }, 50);
              });
            } else {
              content.style.minHeight = '';
            }
          }
        }
        return;
      }

      const lbBtn = e.target.closest('[data-open-lightbox]');
      if (lbBtn) {
        e.preventDefault();
        e.stopPropagation();
        const imgUrl = lbBtn.getAttribute('data-open-lightbox');
        const imgTitle = lbBtn.getAttribute('data-lightbox-title') || 'Plato';
        if (imgUrl) {
          this.renderLightbox(imgUrl, imgTitle);
        }
        return;
      }
      if (e.target.closest('#close-lightbox') || e.target.id === 'lightbox-backdrop') {
        e.preventDefault();
        e.stopPropagation();
        this.renderLightbox(null);
        return;
      }

      const catPill = e.target.closest('.cat-filter');
      if (catPill) {
        e.preventDefault();
        const cat = catPill.getAttribute('data-cat') || 'all';
        const catName = catPill.getAttribute('data-category-name');
        
        document.querySelectorAll('.cat-filter').forEach(btn => {
          btn.classList.remove('active', 'bg-inverse-surface', 'text-inverse-on-surface');
          btn.classList.add('bg-surface-container', 'text-on-surface-variant');
        });
        catPill.classList.add('active', 'bg-inverse-surface', 'text-inverse-on-surface');
        catPill.classList.remove('bg-surface-container', 'text-on-surface-variant');

        const groups = document.querySelectorAll('.menu-group');
        groups.forEach(g => {
          const gId = g.getAttribute('data-group');
          const gCat = g.getAttribute('data-category');
          if (cat === 'all' || gId === cat || gCat === cat || (catName && gCat === catName)) {
            g.style.display = 'block';
          } else {
            g.style.display = 'none';
          }
        });

        store.state.activeCategory = cat;
        return;
      }

      const catBtn = e.target.closest('button[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }

      const allergenBtn = e.target.closest('[data-allergen]');
      if (allergenBtn) {
        e.preventDefault();
        store.toggleAllergenFilter(allergenBtn.getAttribute('data-allergen'));
        return;
      }

      const clearAllergensBtn = e.target.closest('[data-clear-allergens]');
      if (clearAllergensBtn) {
        e.preventDefault();
        store.clearAllergenFilters();
        return;
      }

      const openDishBtn = e.target.closest('[data-open-dish-modal]');
      if (openDishBtn) {
        e.preventDefault();
        const dishId = openDishBtn.getAttribute('data-open-dish-modal');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          this.renderDishDetailModal(dish, preset);
        }
        return;
      }

      const addCartBtn = e.target.closest('[data-add-cart]');
      if (addCartBtn) {
        e.preventDefault();
        e.stopPropagation();
        const dishId = addCartBtn.getAttribute('data-add-cart');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          store.addToCartSilent(dish);
          this.updateCartBadge();
          this.showToast(\`✓ \${dish.name} añadido a la comanda\`);
        }
        return;
      }

      const simBtn = e.target.closest('[data-quick-simulate-dish]');
      if (simBtn) {
        e.preventDefault();
        const dishId = simBtn.getAttribute('data-quick-simulate-dish');
        store.incrementDishSale(dishId, 1);
        this.showToast(\`+1 Venta simulada para estadísticas en vivo\`);
        return;
      }

      if (e.target.closest('#open-cart-btn') || e.target.closest('#mobile-cart-btn')) {
        this.renderCartDrawer(true);
        return;
      }
      if (e.target.closest('#close-cart-btn') || e.target.closest('#cart-backdrop')) {
        this.renderCartDrawer(false);
        return;
      }

      const plusBtn = e.target.closest('[data-cart-plus]');
      if (plusBtn) {
        store.updateCartQty(parseInt(plusBtn.getAttribute('data-cart-plus')), 1);
        this.renderCartDrawer(true);
        return;
      }
      const minusBtn = e.target.closest('[data-cart-minus]');
      if (minusBtn) {
        store.updateCartQty(parseInt(minusBtn.getAttribute('data-cart-minus')), -1);
        this.renderCartDrawer(true);
        return;
      }
      const removeBtn = e.target.closest('[data-cart-remove]');
      if (removeBtn) {
        store.removeFromCart(parseInt(removeBtn.getAttribute('data-cart-remove')));
        this.renderCartDrawer(true);
        return;
      }

      if (e.target.closest('#open-checkout-modal-btn')) {
        this.renderCartDrawer(false);
        this.renderCheckoutModal();
        return;
      }
      if (e.target.closest('#close-checkout-modal') || e.target.id === 'checkout-modal-backdrop') {
        const container = document.getElementById('checkout-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      if (e.target.closest('#open-smart-review-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }
      if (e.target.closest('#close-review-modal') || e.target.id === 'review-modal-backdrop') {
        e.preventDefault();
        e.stopPropagation();
        const container = document.getElementById('review-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      if (e.target.closest('#toggle-allergens')) {
        e.preventDefault();
        e.stopPropagation();
        const box = document.getElementById('allergen-box');
        if (box) {
          box.classList.toggle('hidden');
          this.isAllergenBoxOpen = !box.classList.contains('hidden');
        }
        return;
      }
    });

    document.addEventListener('submit', (e) => {
      if (e.target.id === 'reservas-direct-form') {
        e.preventDefault();
        const nameInput = document.getElementById('direct-res-name');
        const phoneInput = document.getElementById('direct-res-phone');
        const guestsInput = document.getElementById('direct-res-guests');
        const dateInput = document.getElementById('direct-res-date');
        const shiftInput = document.getElementById('direct-res-shift');
        
        const name = nameInput ? nameInput.value : 'Comensal';
        const phone = phoneInput ? phoneInput.value : '';
        const guests = guestsInput ? guestsInput.value : '2';
        const date = dateInput ? dateInput.value : new Date().toISOString().split('T')[0];
        const time = shiftInput ? shiftInput.value : '21:00';

        store.addReservation({
          name, phone, guests: parseInt(guests), date, time, zone: 'Mesa Brasas Directa'
        });

        const successBanner = document.getElementById('res-direct-success');
        if (successBanner) {
          successBanner.classList.remove('hidden');
          e.target.reset();
          setTimeout(() => {
            successBanner.classList.add('hidden');
          }, 6000);
        } else {
          this.showToast(\`✓ Mesa reservada para \${name} (\${guests} personas)\`);
          e.target.reset();
        }
      }

      if (e.target.id === 'checkout-form') {
        e.preventDefault();
        const customerName = document.getElementById('checkout-name').value;
        const phone = document.getElementById('checkout-phone').value;
        const orderType = document.querySelector('input[name="orderType"]:checked').value;
        const tableNumber = (orderType === 'mesa') ? (document.getElementById('checkout-table').value || "Mesa 1") : "Take Away";
        const address = (orderType === 'delivery') ? (document.getElementById('checkout-address').value || "") : "";
        const notes = document.getElementById('checkout-notes') ? document.getElementById('checkout-notes').value : "";

        const order = store.createOrder({
          customerName, phone, type: orderType, tableNumber, address, notes
        });

        const modalBody = document.getElementById('checkout-modal-body');
        if (modalBody) {
          modalBody.innerHTML = \`
            <div class="p-8 text-center space-y-4">
              <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
              <h3 class="text-xl font-bold text-slate-900">¡Comanda Recibida en Cocina!</h3>
              <p class="text-sm text-slate-600">Número de Pedido: <strong>\${order.id}</strong></p>
              <p class="text-xs text-slate-500">Goran Vukata y el equipo de brasas han recibido tu comanda al instante en la pantalla KDS.</p>
              <div class="pt-4">
                <button id="close-checkout-modal" class="btn-primary w-full py-3 rounded-xl font-bold">Cerrar y seguir navegando</button>
              </div>
            </div>
          \`;
        }
      }
    });
  }

  render(preserveScroll = true) {
    const preset = store.getPreset();
    const currentView = store.state.currentView;
    const cartCount = store.getCartItemCount();

    const savedScrollY = (preserveScroll && typeof window !== 'undefined')
      ? (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0)
      : 0;

    document.documentElement.className = \`min-h-screen \${preset.themeClass}\`;
    document.body.className = \`min-h-screen flex flex-col font-sans antialiased \${preset.themeClass}\`;

    const isShellMounted = (
      this.currentRenderedView === currentView &&
      document.getElementById('view-content')
    );

    if (isShellMounted) {
      const content = document.getElementById('view-content');
      const prevHeight = content ? content.offsetHeight : 0;
      if (content && prevHeight > 0) {
        content.style.minHeight = \`\${prevHeight}px\`;
      }
      if (currentView === 'menu') {
        this.renderMenuView(content, preset);
      } else if (currentView === 'reservations') {
        this.renderReservationsView(content, preset);
      } else if (currentView === 'kds') {
        this.renderKdsView(content, preset);
      } else if (currentView === 'metrics') {
        this.renderMetricsView(content, preset);
      } else if (currentView === 'roi') {
        this.renderRoiView(content, preset);
      }
      this.updateCartBadge();
      this.updateHeaderScroll();

      if (savedScrollY > 0 && typeof window !== 'undefined') {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedScrollY, behavior: 'instant' });
          if (content) content.style.minHeight = '';
        });
      } else if (content) {
        content.style.minHeight = '';
      }
      return;
    }

    this.currentRenderedView = currentView;

    const headerHtml = this.renderHeaderForStyle(preset, currentView, cartCount);
    const footerHtml = this.renderFooterForStyle(preset);

    this.appContainer.innerHTML = \`
      \${headerHtml}

      <!-- CONTENEDOR PRINCIPAL -->
      \${preset.id === 'estilo1' ? \`
        <main class="w-full pt-20 bg-surface flex-1">
          <div id="view-content" class="flex flex-col w-full \${currentView !== 'menu' ? 'max-w-[1360px] mx-auto px-6 lg:px-10 py-10' : ''}"></div>
        </main>
      \` : \`
        <main class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full pt-20">
          <div id="view-content"></div>
        </main>
      \`}

      <!-- CONTENEDORES DE MODALES TEMÁTICOS Y LIGHTBOX -->
      <div id="lightbox-container"></div>
      <div id="dish-modal-container"></div>
      <div id="cart-drawer-container"></div>
      <div id="checkout-modal-container"></div>
      <div id="review-modal-container"></div>

      \${footerHtml}
    \`;

    const styleSelect = document.getElementById('style-select');
    if (styleSelect) {
      styleSelect.addEventListener('change', (e) => {
        const target = e.target.value;
        if (target !== '${id}') {
          window.location.href = '../' + target + '/index.html';
        }
      });
    }

    this.updateHeaderScroll();

    const content = document.getElementById('view-content');
    if (currentView === 'menu') {
      this.renderMenuView(content, preset);
    } else if (currentView === 'reservations') {
      this.renderReservationsView(content, preset);
    } else if (currentView === 'kds') {
      this.renderKdsView(content, preset);
    } else if (currentView === 'metrics') {
      this.renderMetricsView(content, preset);
    } else if (currentView === 'roi') {
      this.renderRoiView(content, preset);
    }

    if (savedScrollY > 0 && typeof window !== 'undefined') {
      window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      });
    }
  }

  renderMenuView(container, preset) {
    const activeCategory = store.state.activeCategory;
    const activeAllergens = (store.state.activeAllergenFilters && Array.isArray(store.state.activeAllergenFilters))
      ? store.state.activeAllergenFilters
      : (store.state.activeAllergenFilter ? [store.state.activeAllergenFilter] : []);
    const topData = store.getMostOrderedDish();

    let filteredMenu = preset.menu;
    if (activeCategory !== 'all') {
      filteredMenu = filteredMenu.filter(d => d.category === activeCategory);
    }
    if (activeAllergens.length > 0) {
      filteredMenu = filteredMenu.filter(d => {
        if (!d.allergens || !Array.isArray(d.allergens)) return true;
        return !d.allergens.some(a => {
          const norm = ALLERGEN_ALIAS[a] || a;
          return activeAllergens.includes(norm) || activeAllergens.includes(a);
        });
      });
    }

    const layoutHtml = ${callLayout};
    container.innerHTML = layoutHtml;
  }

  ${layout}

  ${headerMethodCode}

  ${footerMethodCode}

  ${sharedMethodsCode}
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.gastroApp = new GastroApp();
  });
}
`;

  fs.writeFileSync(`${id}/app.js`, appJsContent, 'utf8');
  console.log(`Generated ${id}/app.js`);
});

// 7. GENERATE HTML SHELL FOR EACH STYLE
const htmlConfigs = {
  estilo1: {
    title: "Restaurante Parrilla Vukata | Asador de Brasas en Aluche (Estilo 1)",
    fonts: `<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Barlow:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&family=Montserrat:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />`,
    tailwindColors: `{
      "outline-variant": "#ddc0bb",
      "on-secondary-fixed": "#1f1b18",
      "inverse-on-surface": "#f4f0eb",
      "secondary-fixed": "#eae0dd",
      "primary": "#7c2118",
      "inverse-surface": "#31302d",
      "primary-fixed-dim": "#ffb4a9",
      "surface-container-high": "#ebe8e3",
      "primary-fixed": "#ffdad5",
      "surface-bright": "#fdf9f4",
      "on-tertiary-fixed": "#2a1700",
      "secondary": "#645d5a",
      "primary-container": "#9c382c",
      "surface-dim": "#ddd9d5",
      "tertiary-fixed-dim": "#f8bb70",
      "on-primary-fixed-variant": "#83261c",
      "on-tertiary": "#ffffff",
      "error": "#ba1a1a",
      "tertiary-container": "#7d500c",
      "on-error-container": "#93000a",
      "on-surface-variant": "#57423f",
      "on-error": "#ffffff",
      "on-primary-fixed": "#410000",
      "on-secondary-fixed-variant": "#4b4643",
      "surface-tint": "#a23d30",
      "inverse-primary": "#ffb4a9",
      "on-secondary-container": "#68615e",
      "tertiary-fixed": "#ffddb8",
      "on-primary": "#ffffff",
      "outline": "#8a716e",
      "error-container": "#ffdad6",
      "on-tertiary-container": "#ffc784",
      "on-primary-container": "#ffc3b9",
      "secondary-container": "#e8deda",
      "on-background": "#1c1c19",
      "surface-container-highest": "#e6e2dd",
      "on-tertiary-fixed-variant": "#653e00",
      "secondary-fixed-dim": "#cec5c1",
      "on-surface": "#1c1c19",
      "surface-container-lowest": "#ffffff",
      "surface-container": "#f1ede8",
      "surface": "#fdf9f4",
      "background": "#fdf9f4",
      "tertiary": "#5f3a00",
      "surface-container-low": "#f7f3ee",
      "surface-variant": "#e6e2dd",
      "on-secondary": "#ffffff",
      vukata: {
        crimson: '#8B1E1E',
        fire: '#E52D27',
        charcoal: '#14100E',
        steel: '#fdf9f4',
        gold: '#D49B53'
      }
    }`,
    fontFamilies: `{
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
      condensed: ['"Barlow Condensed"', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      serif: ['"Playfair Display"', 'Georgia', 'serif'],
      "display-hero": [ "Playfair Display" ],
      "body-lg": [ "Plus Jakarta Sans" ],
      "label-action": [ "Plus Jakarta Sans" ],
      "headline-lg-mobile": [ "Playfair Display" ],
      "body-md": [ "Plus Jakarta Sans" ],
      "label-price": [ "Playfair Display" ],
      "headline-sm": [ "Playfair Display" ],
      "title-italic": [ "Playfair Display" ],
      "display-hero-mobile": [ "Playfair Display" ],
      "kicker-eyebrow": [ "Plus Jakarta Sans" ],
      "headline-md": [ "Playfair Display" ],
      "stat-number": [ "Playfair Display" ],
      "headline-lg": [ "Playfair Display" ],
      "body-sm": [ "Plus Jakarta Sans" ]
    }`
  },
  estilo2: {
    title: "Cervecería 27 & Bar Mala Pata | App Interactiva & Bento Grid (Estilo 2)",
    fonts: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />`,
    tailwindColors: `{
      primary: '#0ea5e9',
      'primary-dark': '#0284c7',
      secondary: '#64748b'
    }`,
    fontFamilies: `{
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }`
  },
  estilo3: {
    title: "Pizzería Carlos Carabanchel | Bistró Clásico & Horno de Leña (Estilo 3)",
    fonts: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />`,
    tailwindColors: `{
      primary: '#3d3228',
      secondary: '#8c7b6c'
    }`,
    fontFamilies: `{
      sans: ['Inter', 'sans-serif'],
      serif: ['"Playfair Display"', 'Georgia', 'serif']
    }`
  },
  estilo4: {
    title: "Cafetería Campamento & Desayunos Yebes | Showcase Visual Nórdico (Estilo 4)",
    fonts: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />`,
    tailwindColors: `{
      primary: '#18181b',
      secondary: '#71717a'
    }`,
    fontFamilies: `{
      sans: ['Inter', 'sans-serif'],
      nordic: ['"Plus Jakarta Sans"', 'sans-serif']
    }`
  }
};

['estilo1', 'estilo2', 'estilo3', 'estilo4'].forEach(id => {
  const conf = htmlConfigs[id];
  const htmlContent = `<!DOCTYPE html>
<html lang="es" class="min-h-screen">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <title>${conf.title}</title>
  
  <meta name="description" content="Demostración interactiva de software a medida para hostelería por DevCorp Solutions. Carta digital, comandero KDS y reservas directas." />
  <meta name="author" content="DevCorp Solutions" />
  <meta name="theme-color" content="#0e1b33" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../assets/images/logo.png" />
  <link rel="apple-touch-icon" href="../assets/images/logo.png" />

  <!-- Google Fonts & Material Symbols -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ${conf.fonts}
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: ${conf.tailwindColors},
          fontFamily: ${conf.fontFamilies}
        }
      }
    };
  </script>

  <!-- Estilos Específicos de ${id.toUpperCase()} -->
  <link rel="stylesheet" href="./style.css" />
</head>
<body class="min-h-screen flex flex-col font-sans text-slate-900 antialiased">
  
  <!-- Contenedor Principal de la SPA -->
  <div id="app" class="flex-1 flex flex-col min-h-screen">
    <div class="flex-1 flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <div class="relative flex items-center justify-center mb-6">
        <div class="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
        <img src="../assets/images/logo.png" alt="DevCorp Logo" class="absolute w-10 h-10 object-contain" onerror="this.style.display='none'"/>
      </div>
      <h2 class="text-lg font-bold text-slate-900">DevCorp GastroSuite</h2>
      <p class="text-xs text-slate-500 mt-1">Cargando ${id.toUpperCase()}...</p>
    </div>
  </div>

  <!-- Scripts Específicos e Independientes del Estilo -->
  <script src="./data.js"></script>
  <script src="./app.js"></script>
</body>
</html>
`;

  fs.writeFileSync(`${id}/index.html`, htmlContent, 'utf8');
  console.log(`Generated ${id}/index.html`);
});

// 8. GENERATE ADMIN PANEL (/admin)
const adminHtmlContent = `<!DOCTYPE html>
<html lang="es" class="min-h-screen bg-slate-900 text-slate-100">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevCorp GastroSuite | Panel de Administración Privado (/admin)</title>
  <link rel="icon" type="image/png" href="../assets/images/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="./admin.css" />
</head>
<body class="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
  
  <!-- Header de Administración DevCorp -->
  <header class="bg-slate-900/90 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center gap-3">
          <img src="../assets/images/logo.png" alt="DevCorp Logo" class="h-10 w-auto object-contain" />
          <div>
            <h1 class="font-bold text-base tracking-tight text-white flex items-center gap-2">
              DevCorp GastroSuite <span class="bg-blue-600/30 text-blue-400 border border-blue-500/30 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full">Backoffice</span>
            </h1>
            <p class="text-xs text-slate-400">Gestor Centralizado de Estilos & Catálogo Digital</p>
          </div>
        </a>
      </div>

      <!-- Enlaces Rápidos a los 4 Estilos -->
      <div class="hidden lg:flex items-center gap-2">
        <a href="../estilo1/index.html" target="_blank" class="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-700">
          <span class="w-2 h-2 rounded-full bg-red-500"></span> Estilo 1 (Vukata) ↗
        </a>
        <a href="../estilo2/index.html" target="_blank" class="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-700">
          <span class="w-2 h-2 rounded-full bg-sky-500"></span> Estilo 2 (Bento) ↗
        </a>
        <a href="../estilo3/index.html" target="_blank" class="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-700">
          <span class="w-2 h-2 rounded-full bg-amber-500"></span> Estilo 3 (Bistró) ↗
        </a>
        <a href="../estilo4/index.html" target="_blank" class="px-3 py-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors border border-slate-700">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Estilo 4 (Nórdico) ↗
        </a>
      </div>
    </div>
  </header>

  <!-- Pestañas de Selección de Estilo en el Admin -->
  <div class="bg-slate-900 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-3" id="admin-tabs">
      <button data-tab="estilo1" class="admin-tab active px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 bg-blue-600 text-white shadow-sm">
        <span class="material-symbols-outlined text-[16px]">local_fire_department</span> Estilo 1: Parrilla Vukata
      </button>
      <button data-tab="estilo2" class="admin-tab px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300">
        <span class="material-symbols-outlined text-[16px]">grid_view</span> Estilo 2: Cervecería 27
      </button>
      <button data-tab="estilo3" class="admin-tab px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300">
        <span class="material-symbols-outlined text-[16px]">restaurant</span> Estilo 3: Pizzería Carlos
      </button>
      <button data-tab="estilo4" class="admin-tab px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300">
        <span class="material-symbols-outlined text-[16px]">coffee</span> Estilo 4: Cafetería Campamento
      </button>
      <button data-tab="unified" class="admin-tab px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 bg-purple-900/40 hover:bg-purple-900/60 text-purple-300 border border-purple-500/30">
        <span class="material-symbols-outlined text-[16px]">store</span> Ajustes Globales (Marca Unificada)
      </button>
    </div>
  </div>

  <!-- Contenido Dinámico del Panel Admin -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full" id="admin-main">
    <!-- Se inyecta por admin.js -->
  </main>

  <footer class="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
    DevCorp GastroSuite · Backoffice de Gestión Técnica · Confidencial e Interno
  </footer>

  <!-- Modal para Editar / Añadir Plato -->
  <div id="dish-editor-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] hidden items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 class="text-base font-bold text-white" id="editor-modal-title">Editar Plato de la Carta</h3>
        <button id="close-editor-modal" class="text-slate-400 hover:text-white text-lg">✕</button>
      </div>
      <form id="dish-editor-form" class="space-y-4">
        <input type="hidden" id="dish-edit-id" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Nombre del Plato</label>
            <input type="text" id="dish-edit-name" required class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Precio (€)</label>
            <input type="number" step="0.05" id="dish-edit-price" required class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Categoría</label>
            <input type="text" id="dish-edit-category" required class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-1">Distintivo / Badge (opcional)</label>
            <input type="text" id="dish-edit-badge" placeholder="Ej: ESPECIALIDAD" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">Descripción Gourmet</label>
          <textarea id="dish-edit-description" rows="3" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">URL de la Imagen</label>
          <input type="text" id="dish-edit-image" required class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-300 mb-1">Alérgenos (separados por coma: gluten, lacteos, huevos...)</label>
          <input type="text" id="dish-edit-allergens" placeholder="gluten, lacteos" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500" />
        </div>
        <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button type="button" id="cancel-dish-edit" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300">Cancelar</button>
          <button type="submit" class="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30">Guardar Plato</button>
        </div>
      </form>
    </div>
  </div>

  <div id="admin-toast" class="fixed bottom-6 right-6 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 transition-all transform translate-y-20 opacity-0 pointer-events-none z-[200]">
    <span class="material-symbols-outlined text-[18px]">check_circle</span>
    <span id="toast-text">Cambios guardados</span>
  </div>

  <!-- Carga de datos base de los 4 estilos para el Admin -->
  <script src="../estilo1/data.js"></script>
  <script src="../estilo2/data.js"></script>
  <script src="../estilo3/data.js"></script>
  <script src="../estilo4/data.js"></script>
  <script src="./admin.js"></script>
</body>
</html>
`;

fs.writeFileSync('admin/index.html', adminHtmlContent, 'utf8');
console.log('Generated admin/index.html');

// 9. GENERATE admin/admin.css
const adminCssContent = `/* Estilos para el panel privado de administración DevCorp */
.admin-tab.active {
  background-color: #2563eb !important;
  color: #ffffff !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
}
`;
fs.writeFileSync('admin/admin.css', adminCssContent, 'utf8');
console.log('Generated admin/admin.css');

// 10. GENERATE admin/admin.js
const adminJsContent = `// admin/admin.js - Controlador del Backoffice de DevCorp GastroSuite
(function() {
  let activeTab = 'estilo1';
  let stylesData = {
    estilo1: null,
    estilo2: null,
    estilo3: null,
    estilo4: null
  };

  function loadAllStyles() {
    stylesData.estilo1 = (typeof window.ESTILO1_DATA !== 'undefined') ? JSON.parse(JSON.stringify(window.ESTILO1_DATA)) : null;
    stylesData.estilo2 = (typeof window.ESTILO2_DATA !== 'undefined') ? JSON.parse(JSON.stringify(window.ESTILO2_DATA)) : null;
    stylesData.estilo3 = (typeof window.ESTILO3_DATA !== 'undefined') ? JSON.parse(JSON.stringify(window.ESTILO3_DATA)) : null;
    stylesData.estilo4 = (typeof window.ESTILO4_DATA !== 'undefined') ? JSON.parse(JSON.stringify(window.ESTILO4_DATA)) : null;

    ['estilo1', 'estilo2', 'estilo3', 'estilo4'].forEach(id => {
      try {
        const custom = localStorage.getItem('devcorp_data_' + id);
        if (custom) {
          stylesData[id] = { ...stylesData[id], ...JSON.parse(custom) };
        }
      } catch (e) {
        console.warn('Error cargando storage de ' + id, e);
      }
    });
  }

  function showToast(msg) {
    const toast = document.getElementById('admin-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;
    toastText.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 4000);
  }

  function renderAdminMain() {
    const main = document.getElementById('admin-main');
    if (!main) return;

    if (activeTab === 'unified') {
      renderUnifiedSettings(main);
      return;
    }

    const currentStyle = stylesData[activeTab];
    if (!currentStyle) {
      main.innerHTML = '<p class="text-red-400">Error: No se han podido cargar los datos del estilo ' + activeTab + '</p>';
      return;
    }

    main.innerHTML = \`
      <div class="space-y-8">
        
        <!-- Tarjeta de Cabecera del Estilo -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs uppercase font-mono tracking-widest text-slate-400">Modo Edición Activo</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">\${currentStyle.name}</h2>
            <p class="text-sm text-slate-400">\${currentStyle.tagline || ''} · \${currentStyle.neighborhood || ''}</p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <button id="save-style-btn" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer transition-all">
              <span class="material-symbols-outlined text-[18px]">save</span> Guardar Cambios
            </button>
            <button id="reset-style-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-red-900/40 text-slate-300 hover:text-red-300 border border-slate-700 cursor-pointer transition-all">
              Restablecer Valores
            </button>
            <a href="../\${activeTab}/index.html" target="_blank" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-all">
              <span class="material-symbols-outlined text-[16px]">visibility</span> Ver en Vivo ↗
            </a>
          </div>
        </div>

        <!-- Formulario de Información General del Negocio -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <span class="material-symbols-outlined text-blue-400">business</span> Datos Principales del Establecimiento
            </h3>
            <span class="text-xs text-slate-400">Se reflejan de inmediato en cabecera, pie y reservas</span>
          </div>

          <form id="style-info-form" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Nombre del Restaurante</label>
              <input type="text" id="info-name" value="\${currentStyle.name || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Eslogan / Subtítulo</label>
              <input type="text" id="info-tagline" value="\${currentStyle.tagline || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Barrio / Ciudad</label>
              <input type="text" id="info-neighborhood" value="\${currentStyle.neighborhood || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Teléfono de Reservas</label>
              <input type="text" id="info-phone" value="\${currentStyle.phone || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">WhatsApp Pedidos</label>
              <input type="text" id="info-whatsapp" value="\${currentStyle.whatsapp || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Email de Gerencia</label>
              <input type="text" id="info-email" value="\${currentStyle.email || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div class="md:col-span-2">
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Dirección Completa</label>
              <input type="text" id="info-address" value="\${currentStyle.address || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Horarios de Servicio</label>
              <input type="text" id="info-hours" value="\${currentStyle.serviceHours || ''}" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" />
            </div>
          </form>
        </div>

        <!-- Catálogo de Platos de la Carta -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-400">restaurant_menu</span> Platos en Carta (\${currentStyle.menu ? currentStyle.menu.length : 0})
              </h3>
              <p class="text-xs text-slate-400 mt-1">Gestiona precios, descripciones fotográficas y alérgenos de cada especialidad</p>
            </div>
            <button id="add-dish-btn" class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-600/20">
              <span class="material-symbols-outlined text-[16px]">add</span> Añadir Nuevo Plato
            </button>
          </div>

          <!-- Grid de Platos -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="dishes-grid">
            \${(currentStyle.menu || []).map((d, index) => \`
              <div class="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl p-4 flex gap-3 group transition-all">
                <img src="\${d.image}" alt="\${d.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0 bg-slate-800" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?w=100'" />
                <div class="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-2">
                      <span class="text-[10px] uppercase font-bold text-blue-400 tracking-wider">\${d.category}</span>
                      <span class="font-bold text-sm text-white font-mono">\${d.price.toFixed(2)} €</span>
                    </div>
                    <h4 class="text-sm font-semibold text-slate-100 truncate mt-0.5">\${d.name}</h4>
                    <p class="text-[11px] text-slate-400 line-clamp-1 mt-0.5">\${d.description || ''}</p>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-2">
                    <span class="text-[10px] text-slate-500">\${(d.allergens && d.allergens.length) ? d.allergens.length + ' alérgenos' : 'Sin alérgenos'}</span>
                    <div class="flex items-center gap-1">
                      <button data-edit-dish="\${d.id}" class="p-1 hover:text-blue-400 text-slate-400 cursor-pointer" title="Editar plato">
                        <span class="material-symbols-outlined text-[16px]">edit</span>
                      </button>
                      <button data-delete-dish="\${d.id}" class="p-1 hover:text-red-400 text-slate-400 cursor-pointer" title="Eliminar plato">
                        <span class="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            \`).join('')}
          </div>
        </div>

      </div>
    \`;

    setupMainEvents(currentStyle);
  }

  function renderUnifiedSettings(main) {
    const savedName = localStorage.getItem('devcorp_unified_name') || '';

    main.innerHTML = \`
      <div class="max-w-2xl mx-auto space-y-6">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
          <div class="flex items-center gap-3 text-purple-400 mb-2">
            <span class="material-symbols-outlined text-[32px]">store</span>
            <h2 class="text-2xl font-bold text-white">Marca y Nombre Unificado</h2>
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            Esta opción permite cambiar el nombre del local de los <strong>cuatro estilos a la vez</strong> de forma simultánea. Es ideal cuando se realiza una demostración comercial personalizada a un nuevo cliente (por ejemplo: "Restaurante Don Ramón") y se quiere que las cuatro páginas muestren la misma marca automáticamente.
          </p>

          <div class="pt-4 space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-300 mb-1.5">Nombre Unificado del Cliente / Local</label>
              <input type="text" id="unified-name-input" value="\${savedName}" placeholder="Ej: Taberna Don Ramón" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:border-purple-500 font-semibold" />
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-2">
              <button id="apply-unified-btn" class="px-6 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30 cursor-pointer">
                Aplicar a los 4 Estilos
              </button>
              <button id="clear-unified-btn" class="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer">
                Desactivar Nombre Unificado
              </button>
            </div>
          </div>
        </div>

        <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-1">
          <p><strong>Nota:</strong> Los nombres originales de cada preset (Vukata, Cervecería 27, Carlos, Campamento) se restablecen automáticamente si dejas este campo vacío o pulsas "Desactivar".</p>
        </div>
      </div>
    \`;

    const applyBtn = document.getElementById('apply-unified-btn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        const val = document.getElementById('unified-name-input').value.trim();
        if (val) {
          localStorage.setItem('devcorp_unified_name', val);
          showToast('✓ Nombre unificado "' + val + '" aplicado a todos los estilos');
        }
      });
    }

    const clearBtn = document.getElementById('clear-unified-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        localStorage.removeItem('devcorp_unified_name');
        document.getElementById('unified-name-input').value = '';
        showToast('✓ Nombre unificado desactivado');
      });
    }
  }

  function setupMainEvents(currentStyle) {
    const saveBtn = document.getElementById('save-style-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        currentStyle.name = document.getElementById('info-name').value;
        currentStyle.tagline = document.getElementById('info-tagline').value;
        currentStyle.neighborhood = document.getElementById('info-neighborhood').value;
        currentStyle.phone = document.getElementById('info-phone').value;
        currentStyle.whatsapp = document.getElementById('info-whatsapp').value;
        currentStyle.email = document.getElementById('info-email').value;
        currentStyle.address = document.getElementById('info-address').value;
        currentStyle.serviceHours = document.getElementById('info-hours').value;

        localStorage.setItem('devcorp_data_' + activeTab, JSON.stringify(currentStyle));
        showToast('✓ Cambios guardados para ' + currentStyle.name);
      });
    }

    const resetBtn = document.getElementById('reset-style-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('¿Deseas restablecer los datos de este estilo a sus valores de fábrica?')) {
          localStorage.removeItem('devcorp_data_' + activeTab);
          loadAllStyles();
          renderAdminMain();
          showToast('✓ Valores originales restablecidos');
        }
      });
    }

    const addDishBtn = document.getElementById('add-dish-btn');
    if (addDishBtn) {
      addDishBtn.addEventListener('click', () => {
        openDishEditorModal(null, currentStyle);
      });
    }

    document.querySelectorAll('[data-edit-dish]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishId = btn.getAttribute('data-edit-dish');
        const dish = currentStyle.menu.find(d => d.id === dishId);
        if (dish) openDishEditorModal(dish, currentStyle);
      });
    });

    document.querySelectorAll('[data-delete-dish]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishId = btn.getAttribute('data-delete-dish');
        if (confirm('¿Eliminar este plato de la carta?')) {
          currentStyle.menu = currentStyle.menu.filter(d => d.id !== dishId);
          localStorage.setItem('devcorp_data_' + activeTab, JSON.stringify(currentStyle));
          renderAdminMain();
          showToast('✓ Plato eliminado');
        }
      });
    });
  }

  function openDishEditorModal(dish, currentStyle) {
    const modal = document.getElementById('dish-editor-modal');
    const form = document.getElementById('dish-editor-form');
    const title = document.getElementById('editor-modal-title');
    if (!modal || !form) return;

    if (dish) {
      title.textContent = 'Editar Plato: ' + dish.name;
      document.getElementById('dish-edit-id').value = dish.id;
      document.getElementById('dish-edit-name').value = dish.name;
      document.getElementById('dish-edit-price').value = dish.price;
      document.getElementById('dish-edit-category').value = dish.category;
      document.getElementById('dish-edit-badge').value = dish.badge || '';
      document.getElementById('dish-edit-description').value = dish.description || '';
      document.getElementById('dish-edit-image').value = dish.image || '';
      document.getElementById('dish-edit-allergens').value = (dish.allergens || []).join(', ');
    } else {
      title.textContent = 'Añadir Nuevo Plato a la Carta';
      form.reset();
      document.getElementById('dish-edit-id').value = '';
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const closeBtn = document.getElementById('close-editor-modal');
    const cancelBtn = document.getElementById('cancel-dish-edit');
    const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    };
    if (closeBtn) closeBtn.onclick = closeModal;
    if (cancelBtn) cancelBtn.onclick = closeModal;

    form.onsubmit = (e) => {
      e.preventDefault();
      const idVal = document.getElementById('dish-edit-id').value;
      const name = document.getElementById('dish-edit-name').value;
      const price = parseFloat(document.getElementById('dish-edit-price').value) || 0;
      const category = document.getElementById('dish-edit-category').value;
      const badge = document.getElementById('dish-edit-badge').value;
      const description = document.getElementById('dish-edit-description').value;
      const image = document.getElementById('dish-edit-image').value;
      const allergens = document.getElementById('dish-edit-allergens').value
        .split(',')
        .map(a => a.trim().toLowerCase())
        .filter(a => a.length > 0);

      if (idVal) {
        const existing = currentStyle.menu.find(d => d.id === idVal);
        if (existing) {
          existing.name = name;
          existing.price = price;
          existing.category = category;
          existing.badge = badge;
          existing.description = description;
          existing.image = image;
          existing.allergens = allergens;
        }
      } else {
        const newDish = {
          id: 'dish_' + Date.now(),
          name, price, category, badge, description, image, allergens
        };
        currentStyle.menu.push(newDish);
      }

      localStorage.setItem('devcorp_data_' + activeTab, JSON.stringify(currentStyle));
      closeModal();
      renderAdminMain();
      showToast('✓ Plato guardado en ' + currentStyle.name);
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadAllStyles();

    const tabButtons = document.querySelectorAll('.admin-tab');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTab = btn.getAttribute('data-tab');
        renderAdminMain();
      });
    });

    renderAdminMain();
  });
})();
`;

fs.writeFileSync('admin/admin.js', adminJsContent, 'utf8');
console.log('Generated admin/admin.js');

// 11. UPDATE ROOT index.html (INSTANT REDIRECT TO estilo1/)
const rootHtmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=./estilo1/index.html" />
  <title>DevCorp GastroSuite | Ecosistema de Hostelería</title>
  <link rel="icon" type="image/png" href="./assets/images/logo.png" />
  <script>
    window.location.replace("./estilo1/index.html");
  </script>
</head>
<body style="background:#0e1b33; color:#ffffff; font-family:sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; margin:0;">
  <div style="text-align:center;">
    <img src="./assets/images/logo.png" alt="DevCorp Solutions" style="height:60px; margin-bottom:20px;" />
    <h2>Cargando DevCorp GastroSuite...</h2>
    <p style="font-size:12px; color:#94a3b8;">Redirigiendo a Estilo 1...</p>
    <p style="font-size:12px; margin-top:20px;">
      <a href="./estilo1/index.html" style="color:#38bdf8;">Haz clic aquí si no redirige automáticamente</a>
    </p>
  </div>
</body>
</html>
`;
fs.writeFileSync('index.html', rootHtmlContent, 'utf8');
console.log('Updated root index.html with instant redirection.');

console.log('\\n>>> COMPLETE MODULAR RESTRUCTURING FINISHED SUCCESSFULLY! <<<');
