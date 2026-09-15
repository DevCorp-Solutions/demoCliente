/**
 * DevCorp GastroSuite - Controlador Principal de la Aplicación
 * Con Arquitecturas de Diseño 100% Únicas por Local,
 * Sistema de Platos Más Pedidos en Tiempo Real y Event Delegation Robusto.
 * Desarrollado para DevCorp Solutions
 */

import { store } from './state.js';
import { RESTAURANT_PRESETS } from './presets.js';
import { calculateDeliverySavings, formatCurrency } from './calculator.js';

const ICONS = {
  cart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
  table: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
  chef: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>`,
  calculator: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
  chart: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  star: `<svg class="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  google: `<svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
  whatsapp: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.227-.552-1.828-.755-3.003-2.616-3.094-2.738-.09-.12-1.025-1.365-1.025-2.603 0-1.238.647-1.85.875-2.102.228-.252.5-.316.666-.316.167 0 .334.002.48.01.156.008.365-.059.57.433.218.522.744 1.815.808 1.948.065.133.109.289.022.463-.087.174-.13.282-.26.434-.13.151-.272.338-.388.455-.13.13-.266.27-.114.53.152.26.677 1.116 1.454 1.808 1.002.891 1.848 1.168 2.108 1.298.26.13.413.109.565-.065.152-.174.652-.76.826-1.02.174-.26.348-.217.587-.13.239.087 1.522.718 1.783.848.261.13.435.196.499.305.065.109.065.631-.079 1.036z"/></svg>`,
  check: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
  arrow: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  flame: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.316.492-.474.99-.474 1.472 0 .611.26 1.15.592 1.632.096.14.198.277.308.411.144.175.29.355.434.54.267.346.494.733.656 1.152.16.414.24.843.24 1.274a4.05 4.05 0 01-.836 2.454c-.502.637-1.22 1.074-2.025 1.233a1 1 0 00-.788.756 4.496 4.496 0 01-1.43 2.19 1 1 0 00-.332.882c.07.45.39.81.823.931a7.97 7.97 0 003.864.083c.983-.2 1.902-.622 2.684-1.233.784-.613 1.39-1.41 1.765-2.327.375-.916.516-1.916.41-2.91a8.037 8.037 0 00-1.127-3.238 12.06 12.06 0 00-1.92-2.482 1 1 0 00-.064-.066zM7.747 8.358a1 1 0 00-1.146-.43 6.98 6.98 0 00-2.316 1.58A7.03 7.03 0 002.5 14.5c0 1.83.693 3.58 1.947 4.908a1 1 0 001.378.077c.365-.33.454-.863.21-1.29-.427-.745-.635-1.587-.635-2.445 0-1.208.435-2.37 1.228-3.284.4-.46.88-.847 1.417-1.15a1 1 0 00.419-1.148 5.06 5.06 0 01-.517-1.81z" clip-rule="evenodd"/></svg>`
};

class AppController {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.init();
  }

  init() {
    // Configurar Event Delegation global para que ningún botón pierda su listener
    this.setupGlobalEventDelegation();

    // Suscribirse a cambios del store reactivo
    store.subscribe(() => {
      this.render();
    });

    // Render inicial
    this.render();
  }

  setupGlobalEventDelegation() {
    document.addEventListener('click', (e) => {
      // 1. Cambio de Vista (Tabs)
      const tabBtn = e.target.closest('[data-view]');
      if (tabBtn) {
        e.preventDefault();
        const view = tabBtn.getAttribute('data-view');
        store.setView(view);
        return;
      }

      // 2. Añadir al Carrito
      const addCartBtn = e.target.closest('[data-add-cart]');
      if (addCartBtn) {
        e.preventDefault();
        const dishId = addCartBtn.getAttribute('data-add-cart');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          store.addToCart(dish);
          this.showToast(`Añadido: ${dish.name}`);
        }
        return;
      }

      // 3. Simular +1 Pedido en Vivo (Tiempo Real)
      const simOrderBtn = e.target.closest('[data-quick-simulate-dish]');
      if (simOrderBtn) {
        e.preventDefault();
        const dishId = simOrderBtn.getAttribute('data-quick-simulate-dish');
        store.incrementDishSale(dishId, 1);
        this.showToast(`¡+1 Pedido registrado en vivo para este plato!`);
        return;
      }

      // 4. Cambiar Categoría
      const catBtn = e.target.closest('[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }

      // 5. Filtrar Alérgeno
      const algBtn = e.target.closest('[data-allergen]');
      if (algBtn) {
        e.preventDefault();
        store.setAllergenFilter(algBtn.getAttribute('data-allergen'));
        return;
      }

      // 6. KDS: Avanzar estado de comanda
      const nextStatusBtn = e.target.closest('[data-next-status]');
      if (nextStatusBtn) {
        e.preventDefault();
        const orderId = nextStatusBtn.getAttribute('data-order-id');
        const next = nextStatusBtn.getAttribute('data-next-status');
        store.updateOrderStatus(orderId, next);
        return;
      }

      // 7. Abrir / Cerrar Carrito
      if (e.target.closest('#open-cart-btn')) {
        this.renderCartDrawer(true);
        return;
      }
      if (e.target.closest('#close-cart-btn') || e.target.closest('#cart-backdrop')) {
        this.renderCartDrawer(false);
        return;
      }

      // 8. Modificar Carrito
      const plusBtn = e.target.closest('[data-cart-plus]');
      if (plusBtn) {
        store.updateCartQty(parseInt(plusBtn.getAttribute('data-cart-plus'), 10), 1);
        this.renderCartDrawer(true);
        return;
      }
      const minusBtn = e.target.closest('[data-cart-minus]');
      if (minusBtn) {
        store.updateCartQty(parseInt(minusBtn.getAttribute('data-cart-minus'), 10), -1);
        this.renderCartDrawer(true);
        return;
      }
      const removeBtn = e.target.closest('[data-cart-remove]');
      if (removeBtn) {
        store.removeFromCart(parseInt(removeBtn.getAttribute('data-cart-remove'), 10));
        this.renderCartDrawer(true);
        return;
      }

      // 9. Abrir / Cerrar Checkout
      if (e.target.closest('#open-checkout-modal-btn')) {
        this.renderCartDrawer(false);
        this.renderCheckoutModal();
        return;
      }
      if (e.target.closest('#close-checkout-modal')) {
        const container = document.getElementById('checkout-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      // 10. Abrir / Cerrar Modal de Reputación
      if (e.target.closest('#open-smart-review-btn') || e.target.closest('#demo-filter-trigger-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }
      if (e.target.closest('#close-review-modal')) {
        const container = document.getElementById('review-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      // 11. Reiniciar datos de demo
      if (e.target.closest('#reset-demo-btn')) {
        if (confirm('¿Deseas reiniciar los pedidos de ejemplo a su estado inicial?')) {
          store.resetDemo();
        }
        return;
      }
    });
  }

  render() {
    const preset = store.getPreset();
    const currentView = store.state.currentView;
    const cartCount = store.getCartItemCount();

    // Aplicar la clase de tema única del local a HTML y BODY para evitar cualquier fondo blanco en scroll
    document.documentElement.className = `min-h-screen ${preset.themeClass}`;
    document.body.className = `min-h-screen flex flex-col font-sans antialiased ${preset.themeClass}`;

    // Actualizar el meta theme-color del navegador móvil para que la barra de estado coincida con el fondo
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      const bgMap = {
        parrilla: '#0c0a09',
        cerveceria: '#090d16',
        pizzeria: '#fafaf9',
        cafeteria: '#fcfbf9'
      };
      metaTheme.setAttribute('content', bgMap[preset.id] || '#0e1b33');
    }

    // Estilo activo dinámico para las pestañas de navegación según el local
    const getActiveTabStyle = (viewName) => {
      if (currentView !== viewName) {
        return 'text-slate-300 hover:bg-slate-800/80';
      }
      if (preset.id === 'parrilla') {
        return 'bg-red-800 text-amber-200 border border-amber-600/50 shadow-md font-bold';
      } else if (preset.id === 'cerveceria') {
        return 'bg-amber-500 text-slate-950 font-black shadow-md';
      } else if (preset.id === 'pizzeria') {
        return 'bg-emerald-600 text-white font-bold shadow-md';
      } else {
        return 'bg-sky-600 text-white font-bold shadow-md';
      }
    };

    this.appContainer.innerHTML = `
      <!-- CABECERA UNIFICADA DEVCORP (COMPACTA, RESPONSIVE Y SIN TEXTOS REPETITIVOS) -->
      <header class="sticky top-0 z-40 bg-[#0e1b33] text-white border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-14 sm:h-16 gap-2">
            
            <!-- LOGO DEVCORP ADAPTADO EN PEQUEÑO -->
            <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center group flex-shrink-0" title="DevCorp Solutions">
              <img src="assets/images/logo.png" alt="DevCorp Solutions" class="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105" onerror="this.src='https://devcorpsolutions.com/logo.png'"/>
            </a>

            <!-- NAVEGACIÓN PRINCIPAL (DESKTOP: INTEGRADA DIRECTAMENTE EN CABECERA) -->
            <nav class="hidden lg:flex items-center space-x-1.5 font-medium text-xs">
              <button data-view="menu" class="px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${getActiveTabStyle('menu')}">
                ${ICONS.cart}
                <span>Carta & Local</span>
              </button>

              <button data-view="reservations" class="px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${getActiveTabStyle('reservations')}">
                ${ICONS.table}
                <span>Reservas Online</span>
              </button>

              <button data-view="kds" class="px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${getActiveTabStyle('kds')}">
                ${ICONS.chef}
                <span>Cocina / KDS</span>
                <span class="ml-1 px-1.5 py-0.2 bg-black/40 text-[10px] font-bold rounded-full">${store.state.orders.filter(o => o.status !== 'served').length}</span>
              </button>

              <button data-view="metrics" class="px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${getActiveTabStyle('metrics')}">
                ${ICONS.chart}
                <span>Métricas</span>
              </button>

              <button data-view="roi" class="px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${getActiveTabStyle('roi')}">
                ${ICONS.calculator}
                <span>Ahorro vs Glovo</span>
              </button>
            </nav>

            <!-- ACCIONES: SELECTOR DE LOCAL + CARRITO + WHATSAPP -->
            <div class="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
              <select id="preset-select" class="bg-slate-800 text-[11px] sm:text-xs text-slate-100 font-semibold rounded-lg border border-slate-700 py-1.5 px-2 sm:px-2.5 max-w-[145px] sm:max-w-[210px] truncate focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm">
                <option value="parrilla" ${store.state.presetId === 'parrilla' ? 'selected' : ''}>🔥 Parrilla Vukata</option>
                <option value="cerveceria" ${store.state.presetId === 'cerveceria' ? 'selected' : ''}>🍺 Cervecería 27</option>
                <option value="pizzeria" ${store.state.presetId === 'pizzeria' ? 'selected' : ''}>🍕 Pizzería Carlos</option>
                <option value="cafeteria" ${store.state.presetId === 'cafeteria' ? 'selected' : ''}>☕ Cafetería Campamento</option>
              </select>

              <button id="open-cart-btn" class="relative inline-flex items-center px-2.5 sm:px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg shadow transition-all flex-shrink-0">
                ${ICONS.cart}
                <span class="ml-1 sm:ml-1.5 font-mono text-[11px] sm:text-xs">${formatCurrency(store.getCartTotal())}</span>
                ${cartCount > 0 ? `<span class="ml-1.5 px-1.5 py-0.2 text-[10px] font-bold bg-white text-blue-700 rounded-full">${cartCount}</span>` : ''}
              </button>

              <a href="https://wa.me/34695590754?text=Hola%2C%20he%20visto%20la%20demo%20DevCorp%20GastroSuite%20y%20quiero%20una%20propuesta%20para%20mi%20restaurante." 
                 target="_blank" 
                 class="hidden sm:inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors shadow-sm flex-shrink-0"
                 title="Auditoría 48h">
                ${ICONS.whatsapp}
                <span class="hidden md:inline">Auditoría 48h</span>
              </a>
            </div>

          </div>
        </div>

        <!-- NAVEGACIÓN MÓVIL Y TABLET (SCROLL TÁCTIL SUAVE HORIZONTAL) -->
        <nav class="lg:hidden bg-slate-900/98 border-t border-slate-800/80 px-2 sm:px-4 py-1.5 overflow-x-auto no-scrollbar">
          <div class="flex items-center space-x-1 sm:space-x-1.5 text-xs font-medium min-w-max">
            <button data-view="menu" class="px-2.5 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${getActiveTabStyle('menu')}">
              ${ICONS.cart}
              <span>Carta & Local</span>
            </button>

            <button data-view="reservations" class="px-2.5 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${getActiveTabStyle('reservations')}">
              ${ICONS.table}
              <span>Reservas</span>
            </button>

            <button data-view="kds" class="px-2.5 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${getActiveTabStyle('kds')}">
              ${ICONS.chef}
              <span>Cocina</span>
              <span class="ml-1 px-1.5 py-0.2 bg-black/40 text-[10px] font-bold rounded-full">${store.state.orders.filter(o => o.status !== 'served').length}</span>
            </button>

            <button data-view="metrics" class="px-2.5 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${getActiveTabStyle('metrics')}">
              ${ICONS.chart}
              <span>Métricas</span>
            </button>

            <button data-view="roi" class="px-2.5 py-1.5 rounded-xl transition-all flex items-center space-x-1 ${getActiveTabStyle('roi')}">
              ${ICONS.calculator}
              <span>Ahorro vs Glovo</span>
            </button>
          </div>
        </nav>
      </header>

      <!-- CONTENEDOR DE LA VISTA PRINCIPAL -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        <div id="view-content"></div>
      </main>

      <!-- MODALES Y DRAWERS -->
      <div id="cart-drawer-container"></div>
      <div id="checkout-modal-container"></div>
      <div id="review-modal-container"></div>

      <!-- FOOTER PROFESIONAL DEVCORP -->
      <footer class="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 py-10 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div class="flex items-center space-x-2">
              <span class="font-bold text-white text-sm">DevCorp Solutions</span>
              <span class="text-slate-600">|</span>
              <span class="text-slate-300">Desarrollo de Software a Medida para Hostelería</span>
            </div>
            <p class="mt-1 text-slate-400">Sin comisiones por pedido. Sin intermediarios. Tu negocio, tu software y tus clientes.</p>
          </div>
          <div class="flex items-center space-x-4">
            <button id="reset-demo-btn" class="text-slate-400 hover:text-white underline text-[11px]">Reiniciar datos de demo</button>
            <a href="https://devcorpsolutions.com" target="_blank" class="text-cyan-400 hover:underline">devcorpsolutions.com</a>
            <a href="https://wa.me/34695590754" target="_blank" class="bg-blue-600/30 hover:bg-blue-600 text-blue-200 px-3 py-1 rounded text-xs transition-colors">Contactar Técnico</a>
          </div>
        </div>
      </footer>
    `;

    // Selector de preset
    const presetSelect = document.getElementById('preset-select');
    if (presetSelect) {
      presetSelect.addEventListener('change', (e) => {
        store.setPreset(e.target.value);
      });
    }

    // Renderizar la vista activa específica
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
  }

  // =========================================================================
  // VISTA 1: CARTA DIGITAL & SOBRE NOSOTROS (DELEGADOR DE DISEÑOS ÚNICOS)
  // =========================================================================
  renderMenuView(container, preset) {
    const activeCategory = store.state.activeCategory;
    const activeAllergen = store.state.activeAllergenFilter;

    let filteredMenu = preset.menu;
    if (activeCategory !== 'all') {
      filteredMenu = filteredMenu.filter(item => item.category === activeCategory);
    }
    if (activeAllergen) {
      filteredMenu = filteredMenu.filter(item => !item.allergens.includes(activeAllergen));
    }

    // Obtener en tiempo real el plato más pedido
    const topData = store.getMostOrderedDish();

    let layoutHtml = '';
    if (preset.layoutType === 'steakhouse') {
      layoutHtml = this.renderSteakhouseLayout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    } else if (preset.layoutType === 'tavern') {
      layoutHtml = this.renderTavernLayout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    } else if (preset.layoutType === 'trattoria') {
      layoutHtml = this.renderTrattoriaLayout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    } else {
      layoutHtml = this.renderScandiCoffeeLayout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    }

    // Reseñas de Google Maps al pie de página tras la carta
    const reviewsHtml = this.renderGoogleReviewsSection(preset);

    container.innerHTML = `
      ${layoutHtml}
      ${reviewsHtml}
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 1: ASADOR & PARRILLA VUKATA (STEAKHOUSE BUTCHER & FUEGO)
  // -------------------------------------------------------------------------
  renderSteakhouseLayout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- BANNER DE PLATO MÁS PEDIDO EN TIEMPO REAL -->
      <div class="mb-6 p-4 bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 border border-red-700/70 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-stone-100 shadow-xl live-trending-pulse">
        <div class="flex items-center space-x-3">
          <span class="w-3 h-3 rounded-full bg-red-500 animate-ping flex-shrink-0"></span>
          <div>
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span class="text-xs font-black text-amber-400 uppercase tracking-wider">🔥 TOP #1 MÁS PEDIDO EN VIVO:</span>
              <span class="text-xs font-black text-white bg-red-900/90 px-2 py-0.5 rounded font-mono">${topData.count} comandas hoy</span>
            </div>
            <p class="text-sm font-bold text-stone-100 mt-0.5">${topData.dish.name} <span class="text-xs font-normal text-stone-300">(${formatCurrency(topData.dish.price)})</span></p>
          </div>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
          <button data-quick-simulate-dish="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-red-800 hover:bg-red-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow flex items-center space-x-1">
            <span>⚡ +1 Pedido Demo</span>
          </button>
          <button data-add-cart="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-2 rounded-xl transition-all shadow">
            Añadir a Comanda
          </button>
        </div>
      </div>

      <!-- HERO STEAKHOUSE CINEMATOGRÁFICO -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800 mb-10 bg-stone-950 text-stone-100">
        <img src="${preset.bannerImg}" alt="${preset.name}" class="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105"/>
        <div class="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-red-950/40"></div>

        <div class="relative p-6 sm:p-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8">
            <div class="inline-flex items-center space-x-2 asador-gold-seal px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <span>🔥 ${preset.type}</span>
              <span>·</span>
              <span>Desde ${preset.foundationYear}</span>
            </div>
            <h1 class="asador-hero-title text-3xl sm:text-5xl font-black text-stone-50 leading-tight">
              ${preset.name}
            </h1>
            <p class="mt-3 text-stone-300 text-sm sm:text-lg max-w-2xl font-serif italic">
              "${preset.tagline}"
            </p>
            <div class="mt-6 flex flex-wrap gap-4 text-xs text-stone-400">
              <span class="flex items-center text-amber-400 font-bold">⭐ ${preset.rating} en Google Maps (${preset.totalReviews} opiniones)</span>
              <span>📍 ${preset.address}</span>
              <span>📞 ${preset.phone}</span>
            </div>
          </div>

          <div class="lg:col-span-4 bg-stone-900/90 border border-stone-700/80 p-6 rounded-2xl shadow-xl backdrop-blur">
            <span class="text-[10px] font-mono uppercase tracking-wider text-red-400 block font-bold">Corte Recomendado de la Semana</span>
            <h3 class="text-lg font-bold font-serif text-stone-100 mt-1">Chuletón de Vaca Vieja 45 Días</h3>
            <p class="text-xs text-stone-400 mt-1">Asado al carbón de encina con patatas panaderas artesanas.</p>
            <div class="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
              <span class="text-xl font-bold font-mono text-amber-400">38,50 €</span>
              <button data-add-cart="p1" class="bg-red-800 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md">
                Pedir al Asador
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- SECCIÓN SOBRE NOSOTROS Y MAESTRÍA EN BRASAS -->
      <section class="mb-12 bg-stone-900/60 rounded-3xl border border-stone-800 p-6 sm:p-10 text-stone-200">
        <div class="max-w-3xl mb-8">
          <span class="text-xs font-bold text-amber-500 uppercase tracking-widest font-mono">Historia & Filosofía</span>
          <h2 class="text-2xl sm:text-3xl font-black text-stone-50 font-serif mt-1">${preset.aboutUs.headline}</h2>
          <p class="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          ${preset.aboutUs.pillars.map(pillar => `
            <div class="bg-stone-950/80 border border-stone-800/90 p-5 rounded-2xl">
              <span class="text-3xl mb-2 block">${pillar.icon}</span>
              <h4 class="text-sm font-bold text-amber-300 font-serif">${pillar.title}</h4>
              <p class="text-xs text-stone-400 mt-1.5 leading-relaxed">${pillar.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="bg-gradient-to-r from-red-950/80 to-stone-900 border border-red-900/60 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="asador-gold-seal text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">${preset.aboutUs.specialtyHighlight.badge}</span>
            <h3 class="text-base font-bold text-stone-100 font-serif mt-1">${preset.aboutUs.specialtyHighlight.title}</h3>
            <p class="text-xs text-stone-300 mt-1 max-w-2xl">${preset.aboutUs.specialtyHighlight.text}</p>
          </div>
          <button data-view="reservations" class="whitespace-nowrap bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md">
            Reservar Mesa para Probarlo
          </button>
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS -->
      <div class="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <button data-category="all" class="text-xs font-bold px-4 py-2 rounded-xl transition-all ${activeCategory === 'all' ? 'bg-red-800 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'}">
            Todos los Cortes (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="whitespace-nowrap text-xs font-bold px-4 py-2 rounded-xl transition-all ${activeCategory === cat ? 'bg-red-800 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="flex items-center space-x-2 text-xs">
          <span class="text-stone-400">Filtrar:</span>
          <button data-allergen="gluten" class="px-2.5 py-1 rounded-lg border text-[11px] ${activeAllergen === 'gluten' ? 'bg-red-950 border-red-500 text-red-200' : 'bg-stone-800 border-stone-700 text-stone-300'}">
            🌾 Sin Gluten
          </button>
          <button data-allergen="lactosa" class="px-2.5 py-1 rounded-lg border text-[11px] ${activeAllergen === 'lactosa' ? 'bg-red-950 border-red-500 text-red-200' : 'bg-stone-800 border-stone-700 text-stone-300'}">
            🥛 Sin Lactosa
          </button>
        </div>
      </div>

      <!-- GRID DE PLATOS FORMATO TABLA DE CARNICERO -->
      <div class="space-y-4 mb-16">
        ${filteredMenu.map(dish => {
          const salesCount = store.getDishSalesCount(dish.id);
          const isTop = (dish.id === topData.dish.id);

          return `
            <div class="asador-butcher-card p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6 relative ${isTop ? 'border-amber-500/80 shadow-red-900/30' : ''}">
              ${isTop ? `
                <div class="absolute -top-3 left-6 bg-red-600 text-amber-200 text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center space-x-1 uppercase tracking-wider animate-pulse">
                  <span>🔥 TOP #1 MÁS PEDIDO EN VIVO</span>
                  <span class="bg-black/30 px-1.5 py-0.2 rounded font-mono">${salesCount} pedidos</span>
                </div>
              ` : ''}

              <div class="relative w-full md:w-56 h-44 rounded-xl overflow-hidden flex-shrink-0 bg-stone-900 border border-stone-700">
                <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
                ${dish.badge ? `<span class="absolute top-2 left-2 bg-red-900/90 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded shadow">${dish.badge}</span>` : ''}
              </div>

              <div class="flex-1 w-full flex flex-col justify-between">
                <div>
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-bold">${dish.category}</span>
                    <div class="flex items-center space-x-2 text-xs text-stone-400 font-mono">
                      <span class="text-amber-400 font-bold bg-stone-900 px-2 py-0.5 rounded border border-stone-800">📊 ${salesCount} pedidos hoy</span>
                      ${dish.weight ? `<span class="bg-stone-800 px-2 py-0.5 rounded">⚖️ ${dish.weight}</span>` : ''}
                    </div>
                  </div>

                  <h3 class="text-xl font-bold font-serif text-stone-100 mt-1">${dish.name}</h3>
                  <p class="text-xs text-stone-300 mt-2 leading-relaxed">${dish.description}</p>
                  
                  ${dish.pairing ? `
                    <p class="text-[11px] text-amber-400/90 mt-2 flex items-center space-x-1">
                      <span>🍷</span>
                      <span class="font-medium">Sugerencia de maridaje: ${dish.pairing}</span>
                    </p>
                  ` : ''}
                </div>

                <div class="mt-4 pt-3 border-t border-stone-800 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                  <span class="text-2xl font-black font-mono text-stone-50">${formatCurrency(dish.price)}</span>
                  
                  <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto justify-end">
                    <button data-quick-simulate-dish="${dish.id}" class="flex-1 sm:flex-none text-center bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-[11px] font-bold px-2.5 py-2 rounded-xl transition-all">
                      +1 Demo
                    </button>
                    <button data-add-cart="${dish.id}" class="flex-1 sm:flex-none text-center bg-red-800 hover:bg-red-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md flex items-center justify-center space-x-1.5">
                      ${ICONS.cart}
                      <span>Añadir</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 2: CERVECERÍA 27 & MALA PATA (TABERNA CASTIZA DE BARRA)
  // -------------------------------------------------------------------------
  renderTavernLayout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- BANNER DE PLATO MÁS PEDIDO EN TIEMPO REAL -->
      <div class="mb-6 p-4 bg-slate-950 border-2 border-amber-400 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white shadow-xl">
        <div class="flex items-center space-x-3">
          <span class="w-3 h-3 rounded-full bg-amber-400 animate-ping flex-shrink-0"></span>
          <div>
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span class="text-xs font-black text-amber-400 uppercase tracking-wider font-mono">🍻 LA RACIÓN QUE ARRASA EN BARRA:</span>
              <span class="text-xs font-black text-slate-950 bg-amber-400 px-2 py-0.5 rounded font-mono">${topData.count} comandas</span>
            </div>
            <p class="text-sm font-black text-white mt-0.5 uppercase">${topData.dish.name} - ${formatCurrency(topData.dish.price)}</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
          <button data-quick-simulate-dish="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs px-3.5 py-2 rounded-xl border border-slate-700">
            ⚡ +1 Ronda Directa
          </button>
          <button data-add-cart="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl">
            Pedir para la Mesa
          </button>
        </div>
      </div>

      <!-- HERO ESTILO PLAZA Y TABERNA DE MADRID -->
      <div class="mb-10 rounded-3xl p-6 sm:p-10 border-4 border-amber-400/80 bg-slate-900 text-white shadow-2xl relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div class="inline-flex items-center space-x-2 tavern-street-sign px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider text-white mb-3">
              <span>🏛️ Plaza de Lucero & Aluche</span>
              <span>·</span>
              <span>Desde ${preset.foundationYear}</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-black uppercase tracking-tight text-amber-400">
              ${preset.name}
            </h1>
            <p class="text-sm sm:text-base text-slate-200 mt-2 max-w-xl font-medium">
              ${preset.tagline}
            </p>
            <div class="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>📍 ${preset.address}</span>
              <span>📞 ${preset.phone}</span>
            </div>
          </div>

          <div class="bg-slate-950 border-2 border-amber-500/80 p-4 rounded-2xl text-center md:max-w-xs shadow-lg">
            <span class="beer-temperature-pill text-[11px] font-bold px-3 py-1 rounded-full uppercase block mb-2">
              ❄️ Tanque de Bodega a -2ºC
            </span>
            <p class="text-xs text-amber-200 font-bold">¡Barril recién pinchado hoy!</p>
            <p class="text-[11px] text-slate-400 mt-0.5">Tirada con dos dedos de crema espesa.</p>
            <button data-add-cart="c6" class="w-full mt-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-2 rounded-xl transition-all shadow">
              Pedir Doble de Cerveza (2,80 €)
            </button>
          </div>
        </div>
      </div>

      <!-- SECCIÓN SOBRE NOSOTROS -->
      <section class="mb-12 bg-slate-900/80 rounded-3xl border-2 border-slate-800 p-6 sm:p-10 text-slate-100">
        <div class="max-w-3xl mb-8">
          <span class="text-xs font-black text-amber-400 uppercase tracking-widest font-mono">Tradición & Barrio</span>
          <h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">${preset.aboutUs.headline}</h2>
          <p class="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          ${preset.aboutUs.pillars.map(pillar => `
            <div class="bg-slate-950 p-5 rounded-2xl border border-amber-500/30">
              <span class="text-3xl mb-2 block">${pillar.icon}</span>
              <h4 class="text-sm font-black text-amber-400 uppercase">${pillar.title}</h4>
              <p class="text-xs text-slate-300 mt-1.5 leading-relaxed">${pillar.desc}</p>
            </div>
          `).join('')}
        </div>

        <div class="bg-amber-500/10 border-2 border-amber-400/50 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase font-mono">${preset.aboutUs.specialtyHighlight.badge}</span>
            <h3 class="text-base font-black text-amber-300 uppercase mt-1">${preset.aboutUs.specialtyHighlight.title}</h3>
            <p class="text-xs text-slate-200 mt-1 max-w-2xl">${preset.aboutUs.specialtyHighlight.text}</p>
          </div>
          <button data-add-cart="c1" class="whitespace-nowrap bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-5 py-3 rounded-xl transition-all shadow">
            Pedir Oreja a la Plancha (9,80 €)
          </button>
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS -->
      <div class="bg-slate-950 border-2 border-slate-800 rounded-2xl p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          <button data-category="all" class="text-xs font-black uppercase px-4 py-2 rounded-xl transition-all ${activeCategory === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
            Toda la Pizarra (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="whitespace-nowrap text-xs font-black uppercase px-4 py-2 rounded-xl transition-all ${activeCategory === cat ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- GRID FORMATO PIZARRA COMPACTA (2 COLUMNAS) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        ${filteredMenu.map(dish => {
          const salesCount = store.getDishSalesCount(dish.id);
          const isTop = (dish.id === topData.dish.id);

          return `
            <div class="tavern-chalkboard-card p-4 sm:p-5 flex items-start justify-between gap-4 relative ${isTop ? 'border-amber-400' : ''}">
              ${isTop ? `
                <div class="absolute -top-3 left-4 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase font-mono shadow">
                  🔥 TOP #1 RACIÓN MÁS PEDIDA (${salesCount})
                </div>
              ` : ''}

              <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800 border border-slate-700">
                <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover"/>
              </div>

              <div class="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono text-amber-400 uppercase font-black">${dish.category}</span>
                    <span class="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">📊 ${salesCount} rondas</span>
                  </div>
                  <h3 class="text-base font-black text-white mt-1 leading-snug">${dish.name}</h3>
                  <p class="text-xs text-slate-300 mt-1 line-clamp-2">${dish.description}</p>
                </div>

                <div class="mt-3 pt-2 border-t border-slate-800 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                  <span class="text-lg font-black font-mono text-amber-400">${formatCurrency(dish.price)}</span>
                  <div class="flex items-center space-x-1.5">
                    <button data-quick-simulate-dish="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-xs px-2 py-1 rounded text-slate-300">
                      +1 Demo
                    </button>
                    <button data-add-cart="${dish.id}" class="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-1.5 rounded-lg transition-all shadow flex items-center space-x-1">
                      <span>+ Marchando</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 3: PIZZERÍA CARLOS & NAPOLI (TRATTORIA NAPOLITANA MAGAZINE)
  // -------------------------------------------------------------------------
  renderTrattoriaLayout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- BANNER DE PLATO MÁS PEDIDO EN TIEMPO REAL -->
      <div class="mb-6 p-4 bg-emerald-950 border border-emerald-500/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white shadow-lg">
        <div class="flex items-center space-x-3">
          <span class="w-3 h-3 rounded-full bg-emerald-400 animate-ping flex-shrink-0"></span>
          <div>
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span class="text-xs font-black text-emerald-300 uppercase tracking-wider">🍕 PIZZA MÁS PEDIDA AL HORNO:</span>
              <span class="text-xs font-black text-emerald-950 bg-emerald-300 px-2 py-0.5 rounded font-mono">${topData.count} pedidos</span>
            </div>
            <p class="text-sm font-bold text-white mt-0.5">${topData.dish.name} (${formatCurrency(topData.dish.price)})</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
          <button data-quick-simulate-dish="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-emerald-900 hover:bg-emerald-800 text-emerald-200 font-bold text-xs px-3.5 py-2 rounded-xl border border-emerald-600">
            ⚡ Simular +1 Pedido
          </button>
          <button data-add-cart="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl">
            Añadir a Comanda
          </button>
        </div>
      </div>

      <!-- HERO TRATTORIA MAGAZINE -->
      <div class="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 mb-10 bg-white">
        <div class="italian-tricolor-accent"></div>
        <div class="p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7">
            <div class="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span>🇮🇹 ${preset.type}</span>
              <span>·</span>
              <span>Forno a Legna 480ºC</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              ${preset.name}
            </h1>
            <p class="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              ${preset.description}
            </p>
            <div class="mt-5 flex flex-wrap gap-4 text-xs text-stone-500">
              <span class="text-emerald-700 font-bold">⭐ ${preset.rating} en Google Maps (${preset.totalReviews} opiniones)</span>
              <span>📍 ${preset.address}</span>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div class="relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="${preset.bannerImg}" alt="Pizza Napolitana" class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

      <!-- SECCIÓN SOBRE NOSOTROS -->
      <section class="mb-12 bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm">
        <div class="max-w-3xl mb-8">
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Tradizione & Qualità</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">${preset.aboutUs.headline}</h2>
          <p class="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          ${preset.aboutUs.pillars.map(pillar => `
            <div class="bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <span class="text-3xl mb-2 block">${pillar.icon}</span>
              <h4 class="text-sm font-bold text-stone-900">${pillar.title}</h4>
              <p class="text-xs text-stone-600 mt-1.5 leading-relaxed">${pillar.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS -->
      <div class="bg-white rounded-2xl border border-stone-200 p-4 mb-8 shadow-sm flex items-center space-x-2 overflow-x-auto no-scrollbar">
        <button data-category="all" class="text-xs font-bold px-4 py-2 rounded-2xl transition-all ${activeCategory === 'all' ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">
          Tutta la Carta (${preset.menu.length})
        </button>
        ${preset.categories.map(cat => `
          <button data-category="${cat}" class="whitespace-nowrap text-xs font-bold px-4 py-2 rounded-2xl transition-all ${activeCategory === cat ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- GRID MAGAZINE (3 COLUMNAS) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        ${filteredMenu.map(dish => {
          const salesCount = store.getDishSalesCount(dish.id);
          const isTop = (dish.id === topData.dish.id);

          return `
            <div class="trattoria-magazine-card overflow-hidden flex flex-col justify-between relative ${isTop ? 'border-2 border-emerald-500 shadow-xl' : ''}">
              ${isTop ? `
                <div class="absolute top-3 left-3 z-10 bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                  🔥 TOP #1 MÁS PEDIDA (${salesCount})
                </div>
              ` : ''}

              <div class="relative h-56 w-full bg-stone-100 overflow-hidden">
                <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                <span class="absolute bottom-3 right-3 bg-stone-900/90 text-white font-mono font-bold text-sm px-3 py-1 rounded-xl">
                  ${formatCurrency(dish.price)}
                </span>
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-stone-500 font-mono mb-1">
                    <span>${dish.originTag || 'Napoli DOP'}</span>
                    <span class="text-emerald-700 font-bold">📊 ${salesCount} comandas</span>
                  </div>
                  <h3 class="font-extrabold text-stone-900 text-lg leading-snug">${dish.name}</h3>
                  <p class="mt-2 text-xs text-stone-600 leading-relaxed">${dish.description}</p>
                </div>

                <div class="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button data-quick-simulate-dish="${dish.id}" class="text-[11px] text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1.5 rounded-xl font-bold">
                    +1 Demo
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-2xl transition-all shadow-md flex items-center space-x-1.5">
                    ${ICONS.cart}
                    <span>Añadir</span>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 4: CAFETERÍA CAMPAMENTO & YEBES (NORDIC SPECIALTY COFFEE)
  // -------------------------------------------------------------------------
  renderScandiCoffeeLayout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- BANNER DE PLATO MÁS PEDIDO EN TIEMPO REAL -->
      <div class="mb-6 p-4 bg-sky-950 border border-sky-600/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white shadow-sm">
        <div class="flex items-center space-x-3">
          <span class="w-3 h-3 rounded-full bg-sky-400 animate-ping flex-shrink-0"></span>
          <div>
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span class="text-xs font-bold text-sky-300 uppercase tracking-wider font-mono">☕ PRODUCTO ESTRELLA EN VIVO:</span>
              <span class="text-xs font-bold text-sky-950 bg-sky-300 px-2 py-0.5 rounded font-mono">${topData.count} pedidos hoy</span>
            </div>
            <p class="text-sm font-bold text-white mt-0.5">${topData.dish.name} (${formatCurrency(topData.dish.price)})</p>
          </div>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
          <button data-quick-simulate-dish="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-sky-900 hover:bg-sky-800 text-sky-200 font-bold text-xs px-3.5 py-2 rounded-xl border border-sky-700">
            ⚡ +1 Pedido Demo
          </button>
          <button data-add-cart="${topData.dish.id}" class="flex-1 sm:flex-none text-center justify-center bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl">
            Añadir a Bandeja
          </button>
        </div>
      </div>

      <!-- HERO NORDIC SPECIALTY COFFEE -->
      <div class="mb-10 rounded-3xl p-6 sm:p-12 bg-white border border-stone-200/80 shadow-sm">
        <div class="max-w-3xl">
          <div class="inline-flex items-center space-x-2 sca-score-chip px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <span>☕ ${preset.type}</span>
            <span>·</span>
            <span>Grano SCA >86</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            ${preset.name}
          </h1>
          <p class="mt-3 text-stone-600 text-sm sm:text-lg leading-relaxed max-w-2xl">
            ${preset.description}
          </p>
        </div>
      </div>

      <!-- SECCIÓN SOBRE NOSOTROS -->
      <section class="mb-12 bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-10 shadow-sm">
        <div class="max-w-3xl mb-8">
          <span class="text-xs font-bold text-sky-700 uppercase tracking-widest font-mono">Filosofía Barista</span>
          <h2 class="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">${preset.aboutUs.headline}</h2>
          <p class="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          ${preset.aboutUs.pillars.map(pillar => `
            <div class="bg-stone-50/80 p-5 rounded-2xl border border-stone-200/60">
              <span class="text-3xl mb-2 block">${pillar.icon}</span>
              <h4 class="text-sm font-bold text-stone-900">${pillar.title}</h4>
              <p class="text-xs text-stone-600 mt-1.5 leading-relaxed">${pillar.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- GRID NORDIC MINIMAL -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        ${filteredMenu.map(dish => {
          const salesCount = store.getDishSalesCount(dish.id);
          const isTop = (dish.id === topData.dish.id);

          return `
            <div class="nordic-coffee-card p-5 flex flex-col justify-between relative ${isTop ? 'border-2 border-sky-500 shadow-md' : ''}">
              ${isTop ? `
                <div class="absolute top-3 left-3 z-10 bg-sky-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
                  🔥 TOP #1 MÁS PEDIDO (${salesCount})
                </div>
              ` : ''}

              <div>
                <div class="relative h-44 w-full rounded-xl overflow-hidden bg-stone-100 mb-4">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                </div>

                <div class="flex items-center justify-between text-[11px] text-stone-500 font-mono mb-1">
                  <span>${dish.category}</span>
                  <span class="text-sky-700 font-bold">📊 ${salesCount} pedidos</span>
                </div>

                <h3 class="font-bold text-stone-900 text-base leading-snug">${dish.name}</h3>
                <p class="mt-2 text-xs text-stone-600 leading-relaxed">${dish.description}</p>
              </div>

              <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span class="text-xl font-bold font-mono text-stone-900">${formatCurrency(dish.price)}</span>
                <div class="flex items-center space-x-1.5">
                  <button data-quick-simulate-dish="${dish.id}" class="text-[11px] text-sky-800 bg-sky-50 px-2 py-1 rounded-lg">
                    +1 Demo
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center space-x-1">
                    ${ICONS.cart}
                    <span>Pedir</span>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // MÓDULO DE OPINIONES DE GOOGLE MAPS AL PIE DE PÁGINA
  // -------------------------------------------------------------------------
  renderGoogleReviewsSection(preset) {
    const starsHtml = Array(5).fill(ICONS.star).join('');

    return `
      <section class="google-reviews-section bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm mt-12 mb-16 text-slate-900">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div class="flex items-center space-x-2.5 mb-1">
              ${ICONS.google}
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">Google Maps Reviews</span>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">Verificado</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Opiniones de Clientes en ${preset.name}</h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">Comensales reales del barrio de ${preset.neighborhood}</p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center space-x-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl">
              <span class="text-3xl font-black text-slate-900 font-mono">${preset.rating}</span>
              <div>
                <div class="flex">${starsHtml}</div>
                <span class="text-[11px] text-slate-500 font-medium">${preset.totalReviews} reseñas</span>
              </div>
            </div>

            <a href="${preset.googleMapsUrl}" target="_blank" class="btn-google-maps text-xs font-bold px-4 py-3 rounded-2xl flex items-center space-x-2 shadow-sm">
              <span>Escribir Reseña en Google</span>
              <span>↗</span>
            </a>

            <button id="open-smart-review-btn" class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-3 rounded-2xl transition-all shadow-md flex items-center space-x-1.5">
              <span>⭐ Valorar Local</span>
            </button>
          </div>
        </div>

        <!-- Tarjetas de Reseñas Reales -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          ${preset.googleReviews.map(rev => `
            <div class="google-review-card bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div class="flex items-center space-x-3 mb-3">
                  <img src="${rev.avatar}" alt="${rev.author}" class="w-11 h-11 rounded-full object-cover border border-slate-200"/>
                  <div>
                    <h4 class="font-bold text-slate-900 text-xs">${rev.author}</h4>
                    <p class="text-[10px] text-slate-500">${rev.badge}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-1.5 mb-2.5">
                  <div class="flex text-amber-400">${Array(rev.rating).fill(ICONS.star).join('')}</div>
                  <span class="text-[11px] text-slate-400 font-mono">${rev.timeAgo}</span>
                </div>

                <p class="text-xs text-slate-700 leading-relaxed italic">"${rev.comment}"</p>
              </div>

              ${rev.ownerResponse ? `
                <div class="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 bg-white p-3 rounded-xl border border-slate-100">
                  <span class="font-bold text-blue-700 block">Respuesta del propietario:</span>
                  <p class="mt-0.5 text-slate-600 leading-relaxed">${rev.ownerResponse}</p>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <div class="mt-8 p-4 bg-blue-50/80 border border-blue-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-blue-950">
          <div class="flex items-center space-x-2.5">
            <span class="text-2xl">🛡️</span>
            <div>
              <span class="font-bold">Filtro de Reputación Inteligente DevCorp:</span>
              <p class="text-blue-800 mt-0.5">Canaliza las 5 estrellas a Google Maps y redirige quejas internas en privado al gerente antes de que se publiquen.</p>
            </div>
          </div>
          <button id="demo-filter-trigger-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all shadow whitespace-nowrap">
            Probar Simulador de Filtro
          </button>
        </div>
      </section>
    `;
  }

  // =========================================================================
  // VISTAS ADICIONALES: COCINA KDS, MÉTRICAS, RESERVAS Y ROI CON THEMING COMPLETO
  // =========================================================================
  renderKdsView(container, preset) {
    if (!container) container = document.getElementById('view-content');
    if (!container) return;

    const orders = store.state.orders;
    const pendingOrders = orders.filter(o => o.status === 'pending');
    const kitchenOrders = orders.filter(o => o.status === 'kitchen');
    const readyOrders = orders.filter(o => o.status === 'ready');

    const isDarkTheme = (preset.id === 'parrilla' || preset.id === 'cerveceria');

    container.innerHTML = `
      <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${isDarkTheme ? 'text-stone-100' : 'text-slate-900'}">
        <div>
          <div class="flex items-center space-x-2">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <h2 class="text-xl sm:text-2xl font-black uppercase tracking-tight">KDS Cocina & Comandero · ${preset.name}</h2>
          </div>
          <p class="text-xs ${isDarkTheme ? 'text-stone-400' : 'text-slate-500'} mt-1">Pantalla táctil para cocineros y camareros. Sincronizada en tiempo real con las comandas de comensales.</p>
        </div>

        <button id="add-kds-test-btn" class="bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow flex items-center space-x-1.5">
          <span>+ Simular Comanda Entrante</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Columna 1: Nuevos -->
        <div class="${isDarkTheme ? 'bg-stone-900/80 border-amber-500/40 text-stone-100' : 'bg-amber-50/50 border-amber-200 text-slate-900'} border-2 border-dashed rounded-2xl p-4 flex flex-col min-h-[160px] md:min-h-[480px]">
          <div class="flex items-center justify-between pb-3 border-b ${isDarkTheme ? 'border-stone-800' : 'border-amber-200'} mb-4">
            <span class="font-bold text-sm uppercase">Nuevos Pedidos</span>
            <span class="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">${pendingOrders.length}</span>
          </div>
          <div class="space-y-4 flex-1 overflow-y-auto">
            ${pendingOrders.length === 0 ? `<p class="text-xs ${isDarkTheme ? 'text-stone-500' : 'text-slate-400'} text-center py-6 md:py-10">Sin comandas nuevas.</p>` : pendingOrders.map(order => this.renderKdsOrderCard(order, isDarkTheme)).join('')}
          </div>
        </div>

        <!-- Columna 2: En Fogones -->
        <div class="${isDarkTheme ? 'bg-stone-900/80 border-blue-500/40 text-stone-100' : 'bg-blue-50/50 border-blue-200 text-slate-900'} border-2 border-dashed rounded-2xl p-4 flex flex-col min-h-[160px] md:min-h-[480px]">
          <div class="flex items-center justify-between pb-3 border-b ${isDarkTheme ? 'border-stone-800' : 'border-blue-200'} mb-4">
            <span class="font-bold text-sm uppercase">En Marcha / Fogones</span>
            <span class="bg-blue-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full">${kitchenOrders.length}</span>
          </div>
          <div class="space-y-4 flex-1 overflow-y-auto">
            ${kitchenOrders.length === 0 ? `<p class="text-xs ${isDarkTheme ? 'text-stone-500' : 'text-slate-400'} text-center py-6 md:py-10">Fogones libres.</p>` : kitchenOrders.map(order => this.renderKdsOrderCard(order, isDarkTheme)).join('')}
          </div>
        </div>

        <!-- Columna 3: Listos -->
        <div class="${isDarkTheme ? 'bg-stone-900/80 border-emerald-500/40 text-stone-100' : 'bg-emerald-50/50 border-emerald-200 text-slate-900'} border-2 border-dashed rounded-2xl p-4 flex flex-col min-h-[160px] md:min-h-[480px]">
          <div class="flex items-center justify-between pb-3 border-b ${isDarkTheme ? 'border-stone-800' : 'border-emerald-200'} mb-4">
            <span class="font-bold text-sm uppercase">Listos para Servir</span>
            <span class="bg-emerald-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full">${readyOrders.length}</span>
          </div>
          <div class="space-y-4 flex-1 overflow-y-auto">
            ${readyOrders.length === 0 ? `<p class="text-xs ${isDarkTheme ? 'text-stone-500' : 'text-slate-400'} text-center py-6 md:py-10">Sin platos pendientes de entrega.</p>` : readyOrders.map(order => this.renderKdsOrderCard(order, isDarkTheme)).join('')}
          </div>
        </div>
      </div>
    `;

    const addBtn = document.getElementById('add-kds-test-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const dish = preset.menu[0];
        store.state.cart = [{
          id: dish.id,
          name: dish.name,
          price: dish.price,
          qty: 1
        }];
        store.createOrder({
          type: "mesa",
          tableNumber: `Mesa ${Math.floor(1 + Math.random() * 8)} (Terraza)`,
          customerName: "Cliente Demo Aluche"
        });
        this.showToast("Comanda de prueba añadida a cocina");
      });
    }
  }

  renderKdsOrderCard(order, isDarkTheme) {
    let statusBadge = '';
    let actionButton = '';

    if (order.status === 'pending') {
      statusBadge = `<span class="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-black rounded uppercase">Nuevo</span>`;
      actionButton = `
        <button data-order-id="${order.id}" data-next-status="kitchen" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
          <span>Pasar a Cocina</span>
          ${ICONS.arrow}
        </button>
      `;
    } else if (order.status === 'kitchen') {
      statusBadge = `<span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-black rounded uppercase">En Fogones</span>`;
      actionButton = `
        <button data-order-id="${order.id}" data-next-status="ready" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
          <span>Marcar Listo</span>
          ${ICONS.arrow}
        </button>
      `;
    } else if (order.status === 'ready') {
      statusBadge = `<span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded uppercase">Listo</span>`;
      actionButton = `
        <button data-order-id="${order.id}" data-next-status="served" class="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
          <span>Finalizar Comanda</span>
          ${ICONS.check}
        </button>
      `;
    }

    return `
      <div class="${isDarkTheme ? 'bg-stone-950 border-stone-800 text-stone-100' : 'bg-white border-slate-200 text-slate-900'} rounded-xl border p-4 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between pb-2 border-b ${isDarkTheme ? 'border-stone-800' : 'border-slate-100'}">
            <div>
              <span class="text-xs font-black text-amber-400 font-mono">${order.id}</span>
              <p class="font-bold text-sm mt-0.5">${order.tableNumber}</p>
            </div>
            <div class="text-right">
              ${statusBadge}
              <p class="text-[11px] text-slate-400 font-mono mt-1">${order.timestamp}</p>
            </div>
          </div>

          <div class="py-3 space-y-2">
            ${order.items.map(item => `
              <div class="text-xs flex items-start justify-between">
                <span class="font-semibold">${item.qty}x ${item.name}</span>
                <span class="font-mono text-slate-400">${formatCurrency(item.price * item.qty)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-3 border-t ${isDarkTheme ? 'border-stone-800' : 'border-slate-100'} mt-2">
          <div class="flex justify-between items-center text-xs font-bold mb-3">
            <span>Total:</span>
            <span class="font-mono text-sm text-amber-400">${formatCurrency(order.total)}</span>
          </div>
          ${actionButton}
        </div>
      </div>
    `;
  }

  renderMetricsView(container, preset) {
    const orders = store.state.orders;
    const totalSales = orders.reduce((sum, o) => sum + o.total, 0);
    const avgTicket = orders.length > 0 ? (totalSales / orders.length) : 0;
    const isDarkTheme = (preset.id === 'parrilla' || preset.id === 'cerveceria');

    container.innerHTML = `
      <div class="space-y-8 ${isDarkTheme ? 'text-stone-100' : 'text-slate-900'}">
        <div>
          <span class="text-xs font-bold text-blue-500 uppercase tracking-wider font-mono">DevCorp Business Intelligence</span>
          <h2 class="text-2xl sm:text-3xl font-black mt-1">Métricas en Tiempo Real · ${preset.name}</h2>
          <p class="text-xs ${isDarkTheme ? 'text-stone-400' : 'text-slate-500'} mt-1">Datos actualizados en vivo con cada comanda de salón, terraza y pedidos directos.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="${isDarkTheme ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-slate-400">Facturación Hoy</span>
            <p class="text-2xl sm:text-3xl font-black mt-2 font-mono text-amber-400">${formatCurrency(totalSales)}</p>
          </div>

          <div class="${isDarkTheme ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-slate-400">Comandas Totales</span>
            <p class="text-2xl sm:text-3xl font-black mt-2 font-mono">${orders.length}</p>
          </div>

          <div class="${isDarkTheme ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-slate-400">Ticket Medio</span>
            <p class="text-2xl sm:text-3xl font-black mt-2 font-mono">${formatCurrency(avgTicket)}</p>
          </div>

          <div class="${isDarkTheme ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-emerald-500">Ahorrado vs Glovo</span>
            <p class="text-2xl sm:text-3xl font-black text-emerald-500 mt-2 font-mono">${formatCurrency(totalSales * 0.30)}</p>
          </div>
        </div>

        <!-- Ranking en Tiempo Real de Platos -->
        <div class="${isDarkTheme ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-3xl border shadow-sm">
          <h3 class="font-bold text-base mb-4">Platos más vendidos hoy (Actualización en tiempo real)</h3>
          <div class="space-y-3">
            ${preset.menu.map(dish => {
              const count = store.getDishSalesCount(dish.id);
              return `
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 ${isDarkTheme ? 'bg-stone-950/80 border-stone-800' : 'bg-slate-50 border-slate-200'} border rounded-xl text-xs">
                  <div class="flex items-center space-x-2.5 min-w-0">
                    <span class="font-black text-amber-400 w-7 font-mono flex-shrink-0">${count}x</span>
                    <span class="font-bold truncate max-w-[150px] sm:max-w-none">${dish.name}</span>
                    <span class="text-slate-400 hidden sm:inline">(${dish.category})</span>
                  </div>
                  <div class="flex items-center space-x-2 flex-shrink-0">
                    <span class="font-mono font-bold">${formatCurrency(dish.price * count)}</span>
                    <button data-quick-simulate-dish="${dish.id}" class="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold">
                      +1 Venta
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderReservationsView(container, preset) {
    const today = new Date().toISOString().split('T')[0];
    const isDarkTheme = (preset.id === 'parrilla' || preset.id === 'cerveceria');

    container.innerHTML = `
      <div class="max-w-3xl mx-auto ${isDarkTheme ? 'bg-stone-900 border-stone-800 text-stone-100' : 'bg-white border-slate-200 text-slate-900'} rounded-3xl border shadow-sm p-6 sm:p-10">
        <div class="border-b ${isDarkTheme ? 'border-stone-800' : 'border-slate-100'} pb-6 mb-8">
          <span class="text-xs font-bold text-blue-500 uppercase tracking-wider font-mono">DevCorp Booking Engine</span>
          <h2 class="text-2xl sm:text-3xl font-bold mt-1">Reserva de Mesa en ${preset.name}</h2>
          <p class="text-sm text-slate-400 mt-2">Confirmación inmediata y recordatorios automáticos por WhatsApp.</p>
        </div>

        <form id="reservation-form" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Fecha de Reserva</label>
              <input type="date" id="res-date" value="${today}" min="${today}" required class="w-full ${isDarkTheme ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none"/>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Turno</label>
              <select id="res-turn" class="w-full ${isDarkTheme ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none">
                <option value="Comida (13:30h - 14:30h)">🍽️ Comida (13:30h - 14:30h)</option>
                <option value="Comida (14:30h - 16:00h)">🍽️ Comida (14:30h - 16:00h)</option>
                <option value="Cena (20:30h - 21:30h)">🌙 Cena (20:30h - 21:30h)</option>
                <option value="Cena (21:30h - 23:00h)">🌙 Cena (21:30h - 23:00h)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Comensales</label>
              <select id="res-guests" class="w-full ${isDarkTheme ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none">
                <option value="2 personas">2 personas</option>
                <option value="4 personas" selected>4 personas</option>
                <option value="6 personas">6 personas</option>
                <option value="8 personas">8 personas</option>
                <option value="12+ personas">12+ personas</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Zona</label>
              <select id="res-zone" class="w-full ${isDarkTheme ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none">
                <option value="Salón Principal">Salón Principal</option>
                <option value="Terraza Exterior">Terraza Exterior</option>
                <option value="Zona Barra">Zona Barra</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t ${isDarkTheme ? 'border-stone-800' : 'border-slate-100'}">
            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Nombre y Apellidos</label>
              <input type="text" id="res-name" placeholder="Ej. Juan Pérez" required class="w-full ${isDarkTheme ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Teléfono móvil</label>
              <input type="tel" id="res-phone" placeholder="Ej. 612 34 56 78" required class="w-full ${isDarkTheme ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>
          </div>

          <button type="submit" class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center space-x-2">
            ${ICONS.table}
            <span>Confirmar Reserva</span>
          </button>
        </form>
      </div>
    `;

    const form = document.getElementById('reservation-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const res = store.addReservation({
          name: document.getElementById('res-name').value,
          phone: document.getElementById('res-phone').value,
          date: document.getElementById('res-date').value,
          turn: document.getElementById('res-turn').value,
          guests: document.getElementById('res-guests').value,
          zone: document.getElementById('res-zone').value
        });
        alert(`¡Reserva confirmada!\n\nCódigo: ${res.id}\nComensal: ${res.name}\nZona: ${res.zone}`);
        this.render();
      });
    }
  }

  renderRoiView(container, preset) {
    let ordersSlider = 400;
    let ticketSlider = 26;
    const isDarkTheme = (preset.id === 'parrilla' || preset.id === 'cerveceria');

    const renderCalculation = () => {
      const data = calculateDeliverySavings(ordersSlider, ticketSlider, 0.30);
      const resContainer = document.getElementById('roi-results-container');
      if (!resContainer) return;

      resContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div class="bg-red-950/40 border-2 border-red-500/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-stone-100">
            <div>
              <span class="inline-flex items-center space-x-1.5 bg-red-900/80 text-red-200 text-xs font-black px-2.5 py-1 rounded-md uppercase">
                Glovo / UberEats (30% Comisión)
              </span>
              <h3 class="text-xl font-bold text-red-200 mt-4">Comisiones que sangran tu margen</h3>
              <div class="mt-8 space-y-4 text-xs text-stone-300">
                <div class="flex justify-between pb-2 border-b border-red-900">
                  <span>Facturación delivery al mes:</span>
                  <span class="font-mono font-bold">${formatCurrency(data.monthlyRevenue)}</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-red-900 font-bold">
                  <span>Comisión retenida al mes:</span>
                  <span class="font-mono text-red-400 text-sm">-${formatCurrency(data.platformMonthlyCommission)}</span>
                </div>
                <div class="bg-red-900/60 p-4 rounded-xl text-center border border-red-700">
                  <span class="text-xs font-semibold text-red-200 uppercase block">Pérdida Neta al Año:</span>
                  <span class="text-3xl sm:text-4xl font-black text-red-100 font-mono mt-1 block">-${formatCurrency(data.platformAnnualCommission)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-emerald-950/40 border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md text-stone-100">
            <div>
              <span class="inline-flex items-center space-x-1.5 bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md uppercase">
                DevCorp Solutions (0% Comisión)
              </span>
              <h3 class="text-xl font-bold text-emerald-300 mt-4">El 100% de la venta es para tu caja</h3>
              <div class="mt-8 space-y-4 text-xs text-stone-300">
                <div class="flex justify-between pb-2 border-b border-emerald-900">
                  <span>Comisión por pedido:</span>
                  <span class="font-mono font-black text-emerald-400">0,00 € (0%)</span>
                </div>
                <div class="bg-emerald-600 text-white p-4 rounded-xl text-center shadow-md">
                  <span class="text-xs font-semibold uppercase text-emerald-100 block">Ahorro Neto Anual:</span>
                  <span class="text-3xl sm:text-4xl font-black font-mono mt-1 block">+${formatCurrency(data.annualSavings)}</span>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <a href="https://wa.me/34695590754?text=Hola%2C%20he%20calculado%20un%20ahorro%20de%20${encodeURIComponent(formatCurrency(data.annualSavings))}%20con%20vuestra%20demo%20y%20quiero%20propuesta." 
                 target="_blank"
                 class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center space-x-2">
                ${ICONS.whatsapp}
                <span>Pedir Auditoría Gratuita en 48 Horas</span>
              </a>
            </div>
          </div>
        </div>
      `;
    };

    container.innerHTML = `
      <div class="max-w-5xl mx-auto space-y-8 ${isDarkTheme ? 'text-stone-100' : 'text-slate-900'}">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold text-blue-500 uppercase tracking-wider font-mono">Calculadora de Rentabilidad Real</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold mt-1">¿Cuánto dinero estás perdiendo en comisiones?</h2>
        </div>

        <div class="${isDarkTheme ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 sm:p-8 rounded-3xl border shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs font-bold uppercase">Pedidos mensuales delivery/take away:</label>
              <span id="orders-val" class="font-mono font-black text-blue-500 text-base">400 pedidos</span>
            </div>
            <input type="range" id="orders-slider" min="50" max="1500" step="25" value="400" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs font-bold uppercase">Ticket medio por comanda:</label>
              <span id="ticket-val" class="font-mono font-black text-blue-500 text-base">26,00 €</span>
            </div>
            <input type="range" id="ticket-slider" min="12" max="60" step="1" value="26" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
          </div>
        </div>

        <div id="roi-results-container"></div>
      </div>
    `;

    document.getElementById('orders-slider').addEventListener('input', (e) => {
      ordersSlider = parseInt(e.target.value, 10);
      document.getElementById('orders-val').textContent = `${ordersSlider} pedidos`;
      renderCalculation();
    });

    document.getElementById('ticket-slider').addEventListener('input', (e) => {
      ticketSlider = parseInt(e.target.value, 10);
      document.getElementById('ticket-val').textContent = `${ticketSlider},00 €`;
      renderCalculation();
    });

    renderCalculation();
  }

  // =========================================================================
  // CARRITO Y CHECKOUT
  // =========================================================================
  renderCartDrawer(isOpen = true) {
    const container = document.getElementById('cart-drawer-container');
    const cart = store.state.cart;
    const total = store.getCartTotal();

    if (!isOpen) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = `
      <div id="cart-backdrop" class="fixed inset-0 bg-slate-950/60 z-50 transition-opacity"></div>
      <div class="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl z-50 flex flex-col justify-between text-slate-900">
        <div class="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div class="flex items-center space-x-2">
            ${ICONS.cart}
            <h3 class="font-bold text-slate-900 text-base">Comanda de Prueba</h3>
          </div>
          <button id="close-cart-btn" class="p-1 text-slate-400 hover:text-slate-700">✕</button>
        </div>

        <div class="p-5 flex-1 overflow-y-auto space-y-4">
          ${cart.length === 0 ? `
            <div class="h-64 flex flex-col items-center justify-center text-slate-400 text-xs text-center">
              <span class="text-3xl mb-2">🛒</span>
              <p class="font-bold text-slate-600 text-sm">Tu carrito está vacío</p>
            </div>
          ` : cart.map((item, idx) => `
            <div class="flex items-start justify-between pb-3 border-b border-slate-100 text-xs">
              <div>
                <span class="font-bold text-slate-900">${item.name}</span>
                <p class="font-mono text-slate-500 mt-0.5">${formatCurrency(item.price)} ud.</p>
              </div>
              <div class="flex items-center space-x-2">
                <button data-cart-minus="${idx}" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center">-</button>
                <span class="font-black text-slate-900 w-4 text-center font-mono">${item.qty}</span>
                <button data-cart-plus="${idx}" class="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center">+</button>
                <button data-cart-remove="${idx}" class="text-red-500 hover:text-red-700 ml-2">🗑️</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
          <div class="flex justify-between items-center font-bold text-slate-900 text-base">
            <span>Total:</span>
            <span class="font-mono text-xl">${formatCurrency(total)}</span>
          </div>
          <button id="open-checkout-modal-btn" ${cart.length === 0 ? 'disabled' : ''} class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center space-x-2 disabled:opacity-50">
            <span>Tramitar Pedido</span>
            ${ICONS.arrow}
          </button>
        </div>
      </div>
    `;
  }

  renderCheckoutModal() {
    const container = document.getElementById('checkout-modal-container');
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    container.innerHTML = `
      <div class="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 text-slate-900">
          <div class="p-5 sm:p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 flex-shrink-0">
            <h3 class="text-base font-bold">Tramitar Comanda en ${preset.name}</h3>
            <button id="close-checkout-modal" class="text-slate-400 hover:text-slate-700">✕</button>
          </div>

          <form id="checkout-form" class="p-5 sm:p-6 space-y-4 sm:space-y-5 text-xs overflow-y-auto flex-1">
            <div>
              <label class="block font-semibold text-slate-700 uppercase mb-2">Modalidad</label>
              <div class="grid grid-cols-3 gap-2">
                <label class="flex flex-col items-center p-3 border rounded-2xl cursor-pointer hover:bg-slate-50 text-center border-blue-500 bg-blue-50">
                  <input type="radio" name="order-type" value="mesa" checked class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🪑</span>
                  <span class="font-bold">En Mesa</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-2xl cursor-pointer hover:bg-slate-50 text-center border-slate-200">
                  <input type="radio" name="order-type" value="takeaway" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🥡</span>
                  <span class="font-bold">Recoger</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-2xl cursor-pointer hover:bg-slate-50 text-center border-slate-200">
                  <input type="radio" name="order-type" value="delivery" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛵</span>
                  <span class="font-bold">Domicilio</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block font-semibold text-slate-700 uppercase mb-1">Mesa o Dirección</label>
              <input type="text" id="order-table" value="Mesa 4 (Terraza)" class="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-900 font-medium"/>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block font-semibold text-slate-700 uppercase mb-1">Nombre</label>
                <input type="text" id="order-name" value="Demo Cliente" required class="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-900 font-medium"/>
              </div>
              <div>
                <label class="block font-semibold text-slate-700 uppercase mb-1">Teléfono</label>
                <input type="tel" id="order-phone" value="695590754" required class="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-900 font-medium"/>
              </div>
            </div>

            <div class="space-y-2 pt-2">
              <button type="submit" class="w-full btn-devcorp-primary py-3 rounded-xl font-bold text-xs tracking-wide shadow-md flex items-center justify-center space-x-2">
                ${ICONS.chef}
                <span>Enviar a Cocina (KDS)</span>
              </button>

              <button type="button" id="send-whatsapp-order-btn" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold text-xs tracking-wide shadow transition-colors flex items-center justify-center space-x-2">
                ${ICONS.whatsapp}
                <span>Enviar por WhatsApp Real</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = form.querySelector('input[name="order-type"]:checked').value;
      const order = store.createOrder({
        type: type,
        tableNumber: document.getElementById('order-table').value,
        customerName: document.getElementById('order-name').value,
        customerPhone: document.getElementById('order-phone').value
      });

      container.innerHTML = '';
      alert(`¡Comanda enviada a cocina!\n\nCódigo: ${order.id}\nTotal: ${formatCurrency(order.total)}`);
      store.setView('kds');
    });

    document.getElementById('send-whatsapp-order-btn').addEventListener('click', () => {
      const type = form.querySelector('input[name="order-type"]:checked').value;
      const location = document.getElementById('order-table').value;
      const customer = document.getElementById('order-name').value;
      const itemsText = cart.map(i => `• ${i.qty}x ${i.name} (${formatCurrency(i.price * i.qty)})`).join('\n');
      
      const message = `👋 *NUEVA COMANDA - ${preset.name}*\n\n📍 *Ubicación:* ${location}\n👤 *Cliente:* ${customer}\n🛵 *Modalidad:* ${type.toUpperCase()}\n\n📋 *PEDIDO:*\n${itemsText}\n\n💰 *TOTAL:* ${formatCurrency(total)}\n\n_Generado automáticamente mediante DevCorp Solutions_`;

      window.open(`https://wa.me/${preset.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
      store.createOrder({
        type: type,
        tableNumber: location + " (WhatsApp)",
        customerName: customer
      });
      container.innerHTML = '';
      store.setView('kds');
    });
  }

  renderSmartReviewModal(preset) {
    const container = document.getElementById('review-modal-container');
    container.innerHTML = `
      <div class="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="bg-white rounded-3xl max-w-md w-full max-h-[90vh] flex flex-col overflow-y-auto shadow-2xl border border-slate-200 text-slate-900">
          <div class="p-5 sm:p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 flex-shrink-0">
            <div class="flex items-center space-x-2">
              ${ICONS.google}
              <h3 class="text-base font-bold">${preset.name}</h3>
            </div>
            <button id="close-review-modal" class="text-slate-400 hover:text-slate-700">✕</button>
          </div>

          <div class="p-5 sm:p-6 text-center" id="review-step-1">
            <div class="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">⭐</div>
            <h4 class="text-lg font-bold">¿Cómo ha sido tu experiencia hoy?</h4>
            <div class="flex justify-center items-center space-x-3 my-6">
              ${[1, 2, 3, 4, 5].map(stars => `
                <button data-rate-stars="${stars}" class="rate-star-btn w-11 h-11 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50 flex flex-col items-center justify-center transition-all hover:scale-110">
                  <span class="text-amber-400 text-lg">★</span>
                  <span class="text-[10px] font-bold text-slate-700">${stars}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="p-6 text-center hidden" id="review-step-positive">
            <div class="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">🎉</div>
            <h4 class="text-lg font-bold">¡Nos alegra mucho que te haya gustado!</h4>
            <p class="text-xs text-slate-600 mt-2">¿Nos dedicas 10 segundos para publicar tu 5 estrellas en Google Maps?</p>
            <a href="${preset.googleMapsUrl}" target="_blank" class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2">
              ${ICONS.google}
              <span>Publicar en Google Maps</span>
            </a>
          </div>

          <div class="p-6 text-center hidden" id="review-step-negative">
            <div class="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-3xl">🤝</div>
            <h4 class="text-lg font-bold">Queremos corregirlo de inmediato</h4>
            <p class="text-xs text-slate-600 mt-2">Escribe directamente al gerente de ${preset.name} por WhatsApp para solucionarlo en el acto:</p>
            <a href="https://wa.me/${preset.whatsapp}?text=Hola%2C%20quer%C3%ADa%20comentar%20un%20detalle%20de%20mi%20servicio%3A" target="_blank" class="mt-5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2">
              ${ICONS.whatsapp}
              <span>Hablar con el Gerente en Privado</span>
            </a>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.rate-star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const stars = parseInt(btn.getAttribute('data-rate-stars'), 10);
        document.getElementById('review-step-1').classList.add('hidden');
        if (stars >= 4) {
          document.getElementById('review-step-positive').classList.remove('hidden');
        } else {
          document.getElementById('review-step-negative').classList.remove('hidden');
        }
      });
    });
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl z-50 flex items-center space-x-2 border border-slate-700 animate-bounce';
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2400);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AppController();
});
