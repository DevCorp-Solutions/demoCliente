/**
 * DevCorp Solutions - GastroSuite
 * Muestrario de 4 Estilos y Arquitecturas Web para Hostelería
 * 
 * Estilo 1: Editorial & Alta Cocina (Fine Dining / Revista de Autor)
 * Estilo 2: App Interactiva & Bento Grid (Gastrobar Contemporáneo)
 * Estilo 3: Bistró Tradicional & Carta con Líderes Punteados (Mesón Clásico)
 * Estilo 4: Showcase Visual & Minimalismo Nórdico (Brunch & Obrador)
 */

import { store } from './state.js';
import { RESTAURANT_PRESETS } from './presets.js';
import { calculateDeliverySavings, formatCurrency } from './calculator.js';

const ICONS = {
  cart: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
  table: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
  chef: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>`,
  calculator: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
  chart: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  star: `<svg class="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  google: `<svg viewBox="0 0 24 24" class="w-4 h-4"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
  arrow: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  check: `<svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
};

class AppController {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.init();
  }

  init() {
    this.setupGlobalEventDelegation();
    store.subscribe(() => this.render());
    this.render();
  }

  setupGlobalEventDelegation() {
    document.addEventListener('click', (e) => {
      // 1. Cambio de Vista (Tabs)
      const tabBtn = e.target.closest('[data-view]');
      if (tabBtn) {
        e.preventDefault();
        store.setView(tabBtn.getAttribute('data-view'));
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

      // 3. Simular +1 Pedido Demo
      const simOrderBtn = e.target.closest('[data-quick-simulate-dish]');
      if (simOrderBtn) {
        e.preventDefault();
        const dishId = simOrderBtn.getAttribute('data-quick-simulate-dish');
        store.incrementDishSale(dishId, 1);
        this.showToast(`Comanda registrada para este plato`);
        return;
      }

      // 4. Cambiar Categoría
      const catBtn = e.target.closest('[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }

      // 5. Filtrar Alérgenos
      const algBtn = e.target.closest('[data-allergen]');
      if (algBtn) {
        e.preventDefault();
        store.setAllergenFilter(algBtn.getAttribute('data-allergen'));
        return;
      }

      // 6. KDS: Avanzar estado
      const nextStatusBtn = e.target.closest('[data-next-status]');
      if (nextStatusBtn) {
        e.preventDefault();
        const orderId = nextStatusBtn.getAttribute('data-order-id');
        const nextStatus = nextStatusBtn.getAttribute('data-next-status');
        store.updateOrderStatus(orderId, nextStatus);
        return;
      }

      // 7. Carrito: Abrir / Cerrar Drawer
      if (e.target.closest('#open-cart-btn') || e.target.closest('#mobile-cart-btn')) {
        this.renderCartDrawer(true);
        return;
      }
      if (e.target.closest('#close-cart-btn') || e.target.closest('#cart-backdrop')) {
        this.renderCartDrawer(false);
        return;
      }

      // 8. Cantidades Carrito
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

      // 9. Checkout Modal
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

      // 10. Reseñas Inteligentes Modal
      if (e.target.closest('#open-smart-review-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }
      if (e.target.closest('#close-review-modal')) {
        const container = document.getElementById('review-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      // 11. Reiniciar demo
      if (e.target.closest('#reset-demo-btn')) {
        if (confirm('¿Deseas reiniciar los datos de demostración a su estado inicial?')) {
          store.resetDemo();
        }
        return;
      }
    });
  }

  showToast(message) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-xl flex items-center space-x-2 border border-slate-700 transition-all transform duration-300';
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  render() {
    const preset = store.getPreset();
    const currentView = store.state.currentView;
    const cartCount = store.getCartItemCount();

    // Actualizar clases base para evitar cualquier destello blanco en scroll
    document.documentElement.className = `min-h-screen ${preset.themeClass}`;
    document.body.className = `min-h-screen flex flex-col font-sans antialiased ${preset.themeClass}`;

    // Color de barra de estado móvil nativa
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      const bgMap = {
        estilo1: '#0b0b0d',
        estilo2: '#070a13',
        estilo3: '#f6f3eb',
        estilo4: '#fafafa'
      };
      metaTheme.setAttribute('content', bgMap[preset.id] || '#0e1b33');
    }

    // Renderizar la cabecera correspondiente al estilo activo
    const headerHtml = this.renderHeaderForStyle(preset, currentView, cartCount);

    // Renderizar el footer correspondiente al estilo activo
    const footerHtml = this.renderFooterForStyle(preset);

    this.appContainer.innerHTML = `
      ${headerHtml}

      <!-- CONTENEDOR PRINCIPAL -->
      <main class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full">
        <div id="view-content"></div>
      </main>

      <!-- CONTENEDORES DE MODALES -->
      <div id="cart-drawer-container"></div>
      <div id="checkout-modal-container"></div>
      <div id="review-modal-container"></div>

      ${footerHtml}
    `;

    // Selector de Estilos (Estilo 1, Estilo 2, Estilo 3, Estilo 4)
    const styleSelect = document.getElementById('style-select');
    if (styleSelect) {
      styleSelect.addEventListener('change', (e) => {
        store.setPreset(e.target.value);
      });
    }

    // Renderizar la vista activa
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
  // CABECERAS DIFERENCIADAS PARA CADA ESTILO (SIN AUDITORÍA, SELECTOR ESTILOS 1-4)
  // =========================================================================
  renderHeaderForStyle(preset, currentView, cartCount) {
    const kdsPending = store.state.orders.filter(o => o.status !== 'served').length;

    // Selector HTML estándar reutilizable pero con clases adaptadas al estilo
    const selectorHtml = `
      <select id="style-select" class="text-xs font-semibold rounded-lg py-1.5 px-2.5 focus:outline-none focus:ring-2 transition-all cursor-pointer shadow-sm ${
        preset.id === 'estilo1' ? 'bg-[#15151c] text-amber-200 border border-amber-500/30 focus:ring-amber-500' :
        preset.id === 'estilo2' ? 'bg-slate-900 text-sky-300 border border-slate-700 focus:ring-sky-500' :
        preset.id === 'estilo3' ? 'bg-white text-[#3d3228] border-2 border-[#8c7b6c] focus:ring-[#8c7b6c] font-serif' :
        'bg-white text-zinc-800 border border-zinc-300 focus:ring-zinc-900'
      }">
        <option value="estilo1" ${preset.id === 'estilo1' ? 'selected' : ''}>Estilo 1</option>
        <option value="estilo2" ${preset.id === 'estilo2' ? 'selected' : ''}>Estilo 2</option>
        <option value="estilo3" ${preset.id === 'estilo3' ? 'selected' : ''}>Estilo 3</option>
        <option value="estilo4" ${preset.id === 'estilo4' ? 'selected' : ''}>Estilo 4</option>
      </select>
    `;

    // --- CABECERA ESTILO 1: EDITORIAL & ALTA COCINA ---
    if (preset.id === 'estilo1') {
      return `
        <header class="sticky top-0 z-40 bg-[#0b0b0d]/95 backdrop-blur-md text-white border-b border-stone-800/80">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              
              <!-- Logo DevCorp Sutil -->
              <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center space-x-3 flex-shrink-0" title="DevCorp Solutions">
                <img src="assets/images/logo.png" alt="DevCorp" class="h-7 w-auto object-contain brightness-110"/>
                <span class="hidden sm:inline text-xs font-mono text-stone-400 uppercase tracking-widest">Estilo 1 · Editorial</span>
              </a>

              <!-- Navegación de Texto Refinada -->
              <nav class="hidden md:flex items-center space-x-6 text-xs tracking-wider uppercase font-medium">
                <button data-view="menu" class="transition-colors pb-1 ${currentView === 'menu' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">Carta de Autor</button>
                <button data-view="reservations" class="transition-colors pb-1 ${currentView === 'reservations' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">Reservas</button>
                <button data-view="kds" class="transition-colors pb-1 flex items-center space-x-1.5 ${currentView === 'kds' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">
                  <span>Cocina</span>
                  ${kdsPending > 0 ? `<span class="bg-amber-400/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">${kdsPending}</span>` : ''}
                </button>
                <button data-view="metrics" class="transition-colors pb-1 ${currentView === 'metrics' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">Métricas</button>
                <button data-view="roi" class="transition-colors pb-1 ${currentView === 'roi' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">Rentabilidad</button>
              </nav>

              <!-- Selector de Estilos y Carrito -->
              <div class="flex items-center space-x-2.5">
                ${selectorHtml}
                <button id="open-cart-btn" class="flex items-center space-x-1.5 bg-stone-900 border border-amber-500/40 text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-lg shadow transition-colors">
                  ${ICONS.cart}
                  <span class="font-mono">${formatCurrency(store.getCartTotal())}</span>
                  ${cartCount > 0 ? `<span class="bg-amber-400 text-stone-950 text-[10px] font-black px-1.5 py-0.2 rounded-full">${cartCount}</span>` : ''}
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil con pestañas de texto elegante -->
          <nav class="md:hidden bg-[#0e0e12] border-t border-stone-800 px-3 py-2 overflow-x-auto no-scrollbar flex items-center space-x-4 text-xs uppercase tracking-wider min-w-max">
            <button data-view="menu" class="${currentView === 'menu' ? 'text-amber-300 font-bold' : 'text-stone-400'}">Carta</button>
            <button data-view="reservations" class="${currentView === 'reservations' ? 'text-amber-300 font-bold' : 'text-stone-400'}">Reservas</button>
            <button data-view="kds" class="${currentView === 'kds' ? 'text-amber-300 font-bold' : 'text-stone-400'}">Cocina (${kdsPending})</button>
            <button data-view="metrics" class="${currentView === 'metrics' ? 'text-amber-300 font-bold' : 'text-stone-400'}">Métricas</button>
            <button data-view="roi" class="${currentView === 'roi' ? 'text-amber-300 font-bold' : 'text-stone-400'}">Rentabilidad</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 2: APP INTERACTIVA & BENTO GRID ---
    if (preset.id === 'estilo2') {
      return `
        <header class="sticky top-0 z-40 bg-[#070a13]/90 backdrop-blur-md text-slate-100 border-b border-slate-800">
          <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-14 sm:h-16 gap-2">
              
              <div class="flex items-center space-x-3">
                <a href="https://devcorpsolutions.com" target="_blank" class="flex-shrink-0" title="DevCorp Solutions">
                  <img src="assets/images/logo.png" alt="DevCorp" class="h-6 sm:h-7 w-auto object-contain"/>
                </a>
                <span class="hidden xl:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  ${preset.serviceStatus}
                </span>
              </div>

              <!-- Cápsula Flotante (Segmented Control) -->
              <nav class="hidden lg:flex items-center bento-pill-nav space-x-1 text-xs font-semibold">
                <button data-view="menu" class="px-3 py-1 rounded-full transition-all ${currentView === 'menu' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Carta Interactiva</button>
                <button data-view="reservations" class="px-3 py-1 rounded-full transition-all ${currentView === 'reservations' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Reservas</button>
                <button data-view="kds" class="px-3 py-1 rounded-full transition-all ${currentView === 'kds' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">KDS Cocina (${kdsPending})</button>
                <button data-view="metrics" class="px-3 py-1 rounded-full transition-all ${currentView === 'metrics' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Métricas</button>
                <button data-view="roi" class="px-3 py-1 rounded-full transition-all ${currentView === 'roi' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Ahorro 0%</button>
              </nav>

              <div class="flex items-center space-x-2">
                ${selectorHtml}
                <button id="open-cart-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow flex items-center space-x-1.5">
                  ${ICONS.cart}
                  <span class="font-mono">${formatCurrency(store.getCartTotal())}</span>
                  ${cartCount > 0 ? `<span class="bg-white text-blue-800 text-[10px] font-black px-1.5 py-0.2 rounded-full">${cartCount}</span>` : ''}
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil táctil con botones redondeados -->
          <nav class="lg:hidden bg-slate-900 border-t border-slate-800 px-2 py-1.5 overflow-x-auto no-scrollbar flex items-center space-x-1.5 text-xs font-medium min-w-max">
            <button data-view="menu" class="px-2.5 py-1 rounded-lg ${currentView === 'menu' ? 'bg-sky-600 text-white' : 'text-slate-300'}">Carta</button>
            <button data-view="reservations" class="px-2.5 py-1 rounded-lg ${currentView === 'reservations' ? 'bg-sky-600 text-white' : 'text-slate-300'}">Reservas</button>
            <button data-view="kds" class="px-2.5 py-1 rounded-lg ${currentView === 'kds' ? 'bg-sky-600 text-white' : 'text-slate-300'}">Cocina (${kdsPending})</button>
            <button data-view="metrics" class="px-2.5 py-1 rounded-lg ${currentView === 'metrics' ? 'bg-sky-600 text-white' : 'text-slate-300'}">Métricas</button>
            <button data-view="roi" class="px-2.5 py-1 rounded-lg ${currentView === 'roi' ? 'bg-sky-600 text-white' : 'text-slate-300'}">Ahorro</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA ---
    if (preset.id === 'estilo3') {
      return `
        <header class="sticky top-0 z-40 bg-[#f6f3eb] text-[#2b2520] border-b-2 border-[#8c7b6c] shadow-sm">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 sm:h-20">
              
              <!-- Identidad Clásica Bistró -->
              <div class="flex items-center space-x-3">
                <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions">
                  <img src="assets/images/logo.png" alt="DevCorp" class="h-7 w-auto object-contain"/>
                </a>
                <div class="hidden sm:block">
                  <span class="font-serif font-bold text-base block text-[#3d3228]">Casa Manolo</span>
                  <span class="text-[10px] text-[#7a6b5d] uppercase tracking-wider block">Tradición desde 1974 · Tel. 914 63 12 90</span>
                </div>
              </div>

              <!-- Menú Clásico de Fichero / Pestañas Rectangulares -->
              <nav class="hidden md:flex items-center space-x-1 font-serif text-sm font-semibold">
                <button data-view="menu" class="px-3 py-1.5 border-b-2 transition-all ${currentView === 'menu' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Carta del Día</button>
                <button data-view="reservations" class="px-3 py-1.5 border-b-2 transition-all ${currentView === 'reservations' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Reservar Mesa</button>
                <button data-view="kds" class="px-3 py-1.5 border-b-2 transition-all ${currentView === 'kds' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Comandero (${kdsPending})</button>
                <button data-view="metrics" class="px-3 py-1.5 border-b-2 transition-all ${currentView === 'metrics' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Caja & Datos</button>
                <button data-view="roi" class="px-3 py-1.5 border-b-2 transition-all ${currentView === 'roi' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Comparativa Comisiones</button>
              </nav>

              <div class="flex items-center space-x-2">
                ${selectorHtml}
                <button id="open-cart-btn" class="bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] text-xs font-bold px-3 py-1.5 rounded shadow flex items-center space-x-1.5 font-serif">
                  ${ICONS.cart}
                  <span>Comanda (${cartCount})</span>
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil estilo fichero -->
          <nav class="md:hidden bg-[#eee7db] border-t border-[#8c7b6c] px-3 py-1.5 overflow-x-auto no-scrollbar flex items-center space-x-2 text-xs font-serif min-w-max">
            <button data-view="menu" class="px-2 py-1 rounded ${currentView === 'menu' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Carta</button>
            <button data-view="reservations" class="px-2 py-1 rounded ${currentView === 'reservations' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Reservas</button>
            <button data-view="kds" class="px-2 py-1 rounded ${currentView === 'kds' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Comandero (${kdsPending})</button>
            <button data-view="metrics" class="px-2 py-1 rounded ${currentView === 'metrics' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Caja</button>
            <button data-view="roi" class="px-2 py-1 rounded ${currentView === 'roi' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Comisiones</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 4: SHOWCASE VISUAL & MINIMALISMO NÓRDICO ---
    return `
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-zinc-900 border-b border-zinc-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-14 sm:h-16">
            
            <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center space-x-2.5" title="DevCorp Solutions">
              <img src="assets/images/logo.png" alt="DevCorp" class="h-6 w-auto object-contain"/>
              <span class="text-xs font-medium tracking-widest text-zinc-500 uppercase">Atelier</span>
            </a>

            <!-- Navegación Minimalista Espaciada -->
            <nav class="hidden md:flex items-center space-x-8 text-xs font-light tracking-widest uppercase">
              <button data-view="menu" class="transition-colors ${currentView === 'menu' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5' : 'text-zinc-400 hover:text-zinc-900'}">Menú</button>
              <button data-view="reservations" class="transition-colors ${currentView === 'reservations' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5' : 'text-zinc-400 hover:text-zinc-900'}">Mesa</button>
              <button data-view="kds" class="transition-colors ${currentView === 'kds' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5' : 'text-zinc-400 hover:text-zinc-900'}">Obrador (${kdsPending})</button>
              <button data-view="metrics" class="transition-colors ${currentView === 'metrics' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5' : 'text-zinc-400 hover:text-zinc-900'}">Estadísticas</button>
              <button data-view="roi" class="transition-colors ${currentView === 'roi' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-0.5' : 'text-zinc-400 hover:text-zinc-900'}">Rentabilidad</button>
            </nav>

            <div class="flex items-center space-x-3">
              ${selectorHtml}
              <button id="open-cart-btn" class="text-xs font-medium tracking-wide flex items-center space-x-1 text-zinc-900 hover:text-zinc-600">
                ${ICONS.cart}
                <span>(${cartCount})</span>
              </button>
            </div>

          </div>
        </div>

        <!-- Barra móvil minimalista -->
        <nav class="md:hidden bg-zinc-50 border-t border-zinc-200 px-3 py-2 overflow-x-auto no-scrollbar flex items-center space-x-5 text-xs font-light tracking-widest uppercase min-w-max">
          <button data-view="menu" class="${currentView === 'menu' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Menú</button>
          <button data-view="reservations" class="${currentView === 'reservations' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Mesa</button>
          <button data-view="kds" class="${currentView === 'kds' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Obrador (${kdsPending})</button>
          <button data-view="metrics" class="${currentView === 'metrics' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Estadísticas</button>
          <button data-view="roi" class="${currentView === 'roi' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Rentabilidad</button>
        </nav>
      </header>
    `;
  }

  // =========================================================================
  // VISTA 1: CARTA DIGITAL (DELEGADOR SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderMenuView(container, preset) {
    const activeCategory = store.state.activeCategory;
    const activeAllergen = store.state.activeAllergenFilter;
    const topData = store.getMostOrderedDish();

    let filteredMenu = preset.menu;
    if (activeCategory !== 'all') {
      filteredMenu = filteredMenu.filter(d => d.category === activeCategory);
    }
    if (activeAllergen) {
      filteredMenu = filteredMenu.filter(d => !d.allergens || !d.allergens.includes(activeAllergen));
    }

    let layoutHtml = '';
    if (preset.id === 'estilo1') {
      layoutHtml = this.renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    } else if (preset.id === 'estilo2') {
      layoutHtml = this.renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    } else if (preset.id === 'estilo3') {
      layoutHtml = this.renderEstilo3Layout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    } else {
      layoutHtml = this.renderEstilo4Layout(preset, filteredMenu, activeCategory, activeAllergen, topData);
    }

    const reviewsHtml = this.renderGoogleReviewsSection(preset);

    container.innerHTML = `
      ${layoutHtml}
      ${reviewsHtml}
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 1: EDITORIAL & ALTA COCINA (FINE DINING / REVISTA GASTRONÓMICA)
  // -------------------------------------------------------------------------
  renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- SUGERENCIA DEL JEFE DE COCINA (SOBRIO Y PROFESIONAL) -->
      <div class="mb-8 p-4 sm:p-5 rounded-2xl bg-[#14141a] border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-stone-200 shadow-md">
        <div>
          <div class="flex items-center space-x-2 text-xs text-amber-400 font-mono uppercase tracking-wider">
            <span>◆ Sugerencia de Temporada</span>
            <span>·</span>
            <span>${topData.count} comandas hoy</span>
          </div>
          <h3 class="editorial-serif text-lg font-bold text-stone-100 mt-1">${topData.dish.name}</h3>
          <p class="text-xs text-stone-400 mt-0.5">${topData.dish.description}</p>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <button data-quick-simulate-dish="${topData.dish.id}" class="bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs px-3 py-2 rounded-xl transition-all">
            +1 Comanda Demo
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow">
            Pedir Pase (${formatCurrency(topData.dish.price)})
          </button>
        </div>
      </div>

      <!-- HERO EDITORIAL CON TIPOGRAFÍA SERIF NOBLE -->
      <section class="mb-14 border-b border-stone-800 pb-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-8">
            <span class="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-2">${preset.type}</span>
            <h1 class="editorial-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-50 leading-tight">
              ${preset.name}
            </h1>
            <p class="text-stone-300 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed italic editorial-serif">
              "${preset.aboutUs.quote}"
            </p>
            <div class="mt-6 flex flex-wrap gap-4 text-xs text-stone-400 font-mono">
              <span>📍 ${preset.address}</span>
              <span>·</span>
              <span>📞 ${preset.phone}</span>
              <span>·</span>
              <span class="text-amber-300 font-bold">★ ${preset.rating} Google Maps (${preset.totalReviews} opiniones)</span>
            </div>
          </div>

          <div class="lg:col-span-4 bg-[#14141a] border border-stone-800 p-6 rounded-2xl">
            <span class="text-[11px] font-mono uppercase text-amber-400 tracking-wider block">Horario de Cocina</span>
            <p class="text-xs text-stone-300 mt-1">${preset.serviceHours}</p>
            <div class="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span class="text-xs text-stone-400">Bodega & Maridajes</span>
              <span class="text-xs font-mono text-amber-300 font-bold">+50 referencias</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SOBRE NOSOTROS: MANIFIESTO DE ORIGEN -->
      <section class="mb-16 bg-[#111116] border border-stone-800/80 rounded-3xl p-6 sm:p-10">
        <div class="max-w-3xl mb-8">
          <span class="text-xs font-mono text-amber-400 tracking-widest uppercase">Memoria & Producto</span>
          <h2 class="editorial-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-1">${preset.aboutUs.headline}</h2>
          <p class="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${preset.aboutUs.pillars.map(p => `
            <div class="border-t border-amber-500/30 pt-4">
              <span class="font-mono text-xs text-amber-400">${p.num}</span>
              <h4 class="editorial-serif text-base font-bold text-stone-100 mt-1">${p.title}</h4>
              <p class="text-xs text-stone-400 mt-1.5 leading-relaxed">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS EDITORIAL -->
      <div class="border-b border-stone-800 pb-3 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center space-x-4 overflow-x-auto no-scrollbar text-xs font-medium uppercase tracking-wider">
          <button data-category="all" class="pb-2 transition-colors ${activeCategory === 'all' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">
            Todos los Pases (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="pb-2 whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="flex items-center space-x-2 text-xs text-stone-400 font-mono">
          <span>Alérgenos:</span>
          <button data-allergen="gluten" class="px-2 py-0.5 rounded border text-[10px] ${activeAllergen === 'gluten' ? 'bg-amber-950 border-amber-500 text-amber-200' : 'border-stone-800 text-stone-400'}">Sin Gluten</button>
          <button data-allergen="lactosa" class="px-2 py-0.5 rounded border text-[10px] ${activeAllergen === 'lactosa' ? 'bg-amber-950 border-amber-500 text-amber-200' : 'border-stone-800 text-stone-400'}">Sin Lactosa</button>
        </div>
      </div>

      <!-- LISTADO DE PLATOS FORMATO PASE EDITORIAL -->
      <div class="space-y-4 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="editorial-card p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div class="flex items-start space-x-4 flex-1">
                <span class="font-mono text-xs text-amber-400/80 pt-1">${dish.number || '◆'}</span>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h4 class="editorial-serif text-lg sm:text-xl font-bold text-stone-100">${dish.name}</h4>
                    ${dish.badge ? `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-600/30 text-amber-300">${dish.badge}</span>` : ''}
                  </div>
                  <p class="text-xs text-stone-300 mt-1.5 leading-relaxed max-w-2xl">${dish.description}</p>
                  <div class="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-stone-400 font-mono">
                    ${dish.details ? `<span>${dish.details}</span>` : ''}
                    ${dish.pairing ? `<span class="text-amber-400/90">🍷 ${dish.pairing}</span>` : ''}
                    <span class="text-stone-500">· ${sales} pedidos servidos</span>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between md:justify-end space-x-4 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-stone-800">
                <span class="font-mono text-xl font-bold text-amber-300">${formatCurrency(dish.price)}</span>
                <div class="flex items-center space-x-2">
                  <button data-quick-simulate-dish="${dish.id}" class="bg-stone-800 hover:bg-stone-700 text-stone-300 text-[11px] px-2.5 py-1.5 rounded-lg transition-colors">
                    +1 Demo
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors shadow">
                    Pedir Pase
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
  // DISEÑO 2: APP INTERACTIVA & BENTO GRID (GASTROBAR & CASUAL MODERNO)
  // -------------------------------------------------------------------------
  renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- TOP DESTACADO EN BENTO APP -->
      <div class="mb-6 p-4 rounded-2xl bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-100">
        <div class="flex items-center space-x-3">
          <span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">Top de la Barra</span>
              <span class="text-[10px] bg-sky-950 text-sky-300 border border-sky-600/40 px-2 py-0.2 rounded font-mono">${topData.count} comandas</span>
            </div>
            <p class="text-sm font-bold text-slate-100 mt-0.5">${topData.dish.name} · ${formatCurrency(topData.dish.price)}</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button data-quick-simulate-dish="${topData.dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-700">
            +1 Demo
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl">
            Añadir a Barra
          </button>
        </div>
      </div>

      <!-- HERO BENTO GRID CONTEMPORÁNEO -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
        <div class="md:col-span-8 bento-card p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">${preset.type}</span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">${preset.name}</h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-3 max-w-xl leading-relaxed">${preset.tagline}</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
            <span>📍 ${preset.address}</span>
            <span>📞 ${preset.phone}</span>
            <span class="text-amber-400 font-bold">★ ${preset.rating} (${preset.totalReviews} reseñas en Google)</span>
          </div>
        </div>

        <div class="md:col-span-4 bento-card p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-950 border-sky-500/20">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block">Plato Estrella</span>
            <h3 class="text-base font-bold text-white mt-1">${preset.aboutUs.specialtyHighlight.title}</h3>
            <p class="text-xs text-slate-400 mt-1">${preset.aboutUs.specialtyHighlight.text}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span class="font-mono font-bold text-sky-300 text-lg">${preset.aboutUs.specialtyHighlight.price}</span>
            <button data-add-cart="e2_1" class="bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl">Pedir</button>
          </div>
        </div>
      </div>

      <!-- BENTO BOX SOBRE NOSOTROS -->
      <section class="mb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${preset.aboutUs.bentoCards.map(c => `
            <div class="bento-card p-5">
              <span class="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">${c.tag}</span>
              <h4 class="text-2xl font-black text-white mt-1">${c.metric}</h4>
              <p class="text-xs text-slate-400 mt-2 leading-relaxed">${c.label}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FILTROS DE CATEGORÍA INTERACTIVOS -->
      <div class="bento-card p-3 mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          <button data-category="all" class="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${activeCategory === 'all' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}">
            Todo (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${activeCategory === cat ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="flex items-center space-x-2 text-xs text-slate-400 flex-shrink-0">
          <span>Alérgeno:</span>
          <button data-allergen="gluten" class="px-2 py-1 rounded text-[11px] ${activeAllergen === 'gluten' ? 'bg-sky-950 border border-sky-500 text-sky-200' : 'bg-slate-800 text-slate-300'}">Sin Gluten</button>
          <button data-allergen="lactosa" class="px-2 py-1 rounded text-[11px] ${activeAllergen === 'lactosa' ? 'bg-sky-950 border border-sky-500 text-sky-200' : 'bg-slate-800 text-slate-300'}">Sin Lactosa</button>
        </div>
      </div>

      <!-- REJILLA DE PLATOS BENTO -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="bento-card p-4 flex flex-col justify-between">
              <div>
                <div class="relative h-44 rounded-xl overflow-hidden mb-3 bg-slate-800">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-slate-900/90 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded">${dish.badge}</span>` : ''}
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>${dish.category}</span>
                  <span>⏱️ ${dish.prepTime || '6 min'}</span>
                </div>
                <h3 class="text-base font-bold text-white">${dish.name}</h3>
                <p class="text-xs text-slate-300 mt-1 line-clamp-2">${dish.description}</p>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span class="font-mono text-lg font-bold text-white">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-slate-500">${sales} pedidos hoy</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-quick-simulate-dish="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] px-2 py-1.5 rounded-lg">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg">
                    Añadir
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
  // DISEÑO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA CON LÍDERES PUNTEADOS
  // -------------------------------------------------------------------------
  renderEstilo3Layout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- SUGERENCIA DEL DÍA CON MARCO TRADICIONAL -->
      <div class="mb-8 p-5 bistro-card border-2 border-[#8c7b6c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="text-[11px] font-serif uppercase tracking-widest text-[#7a6b5d] font-bold">Plato Recomendado de la Casa</span>
          <h3 class="bistro-serif text-xl font-bold text-[#2b2520] mt-0.5">${topData.dish.name}</h3>
          <p class="text-xs text-[#594d40] mt-0.5">${topData.dish.description}</p>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <button data-quick-simulate-dish="${topData.dish.id}" class="bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] text-xs px-3 py-1.5 rounded font-serif">
            +1 Ración Demo
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-[#3d3228] hover:bg-[#231d17] text-white text-xs font-serif font-bold px-4 py-1.5 rounded shadow">
            Pedir (${formatCurrency(topData.dish.price)})
          </button>
        </div>
      </div>

      <!-- PORTADA CLÁSICA BISTRÓ CON MARCO -->
      <div class="text-center max-w-3xl mx-auto mb-12 border-t-2 border-b-2 border-[#8c7b6c] py-8">
        <span class="text-xs font-serif uppercase tracking-widest text-[#7a6b5d] block mb-1">Casa de Comidas & Fogón Castellano</span>
        <h1 class="bistro-serif text-4xl sm:text-5xl font-bold text-[#2b2520] tracking-tight">${preset.name}</h1>
        <p class="text-sm font-serif italic text-[#594d40] mt-3">"${preset.tagline}"</p>
        <div class="mt-4 flex flex-wrap justify-center gap-4 text-xs font-serif text-[#7a6b5d]">
          <span>${preset.address}</span>
          <span>·</span>
          <span>Teléfono: ${preset.phone}</span>
          <span>·</span>
          <span>Desde ${preset.foundationYear}</span>
        </div>
      </div>

      <!-- SECCIÓN HISTORIA Y TRADICIÓN FAMILIAR -->
      <section class="mb-14 bistro-card p-6 sm:p-8">
        <h2 class="bistro-serif text-2xl font-bold text-[#2b2520] text-center mb-2">${preset.aboutUs.headline}</h2>
        <p class="text-xs sm:text-sm text-[#594d40] text-center max-w-2xl mx-auto leading-relaxed mb-6">${preset.aboutUs.story}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#dfd7cc]">
          ${preset.aboutUs.timeline.map(t => `
            <div class="text-center p-3">
              <span class="font-serif font-bold text-base text-[#8c7b6c] block">${t.year}</span>
              <p class="text-xs text-[#594d40] mt-1">${t.event}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE SECCIONES TRADICIONALES -->
      <div class="border-b-2 border-[#8c7b6c] pb-2 mb-8 flex flex-wrap items-center justify-between gap-3 font-serif">
        <div class="flex items-center space-x-3 overflow-x-auto no-scrollbar text-xs">
          <button data-category="all" class="px-3 py-1 rounded transition-all ${activeCategory === 'all' ? 'bg-[#3d3228] text-white font-bold' : 'text-[#594d40] hover:text-[#2b2520]'}">
            Toda la Carta (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="whitespace-nowrap px-3 py-1 rounded transition-all ${activeCategory === cat ? 'bg-[#3d3228] text-white font-bold' : 'text-[#594d40] hover:text-[#2b2520]'}">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- CARTA EN 2 COLUMNAS CON DOTTED LEADERS (EL FORMATO REY DE RESTAURANTE) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="pb-4 border-b border-[#dfd7cc]">
              <!-- Línea con Nombre, Puntos Suspensivos y Precio -->
              <div class="dotted-leader-row">
                <span class="bistro-serif text-base font-bold text-[#2b2520]">${dish.name}</span>
                <span class="dotted-leader-line"></span>
                <span class="font-serif font-bold text-base text-[#3d3228] flex-shrink-0">${formatCurrency(dish.price)}</span>
              </div>

              <!-- Descripción en letra cursiva refinada -->
              <p class="text-xs font-serif italic text-[#6b5c4f] mt-1 leading-relaxed">${dish.description}</p>
              
              <div class="mt-2.5 flex items-center justify-between text-[11px] font-serif text-[#7a6b5d]">
                <span>${dish.vintageBadge || 'Especialidad de la casa'} · ${sales} raciones</span>
                <div class="flex items-center space-x-2">
                  <button data-quick-simulate-dish="${dish.id}" class="text-[10px] text-[#7a6b5d] hover:text-[#2b2520] underline">
                    +1 Demo
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-[#8c7b6c] hover:bg-[#6e5f52] text-white px-2.5 py-1 rounded text-[11px] font-sans">
                    Pedir
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
  // DISEÑO 4: SHOWCASE VISUAL & MINIMALISMO NÓRDICO (BRUNCH & OBRADOR)
  // -------------------------------------------------------------------------
  renderEstilo4Layout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- BANNER MINIMALISTA NÓRDICO -->
      <div class="mb-8 p-4 bg-zinc-100 border border-zinc-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-zinc-800">
        <div>
          <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Selección Especial</span>
          <h3 class="text-sm font-semibold text-zinc-900 mt-0.5">${topData.dish.name} · ${formatCurrency(topData.dish.price)}</h3>
          <p class="text-xs text-zinc-500">${topData.count} pedidos hoy</p>
        </div>
        <div class="flex items-center space-x-2">
          <button data-quick-simulate-dish="${topData.dish.id}" class="bg-white hover:bg-zinc-200 text-zinc-700 text-xs px-3 py-1.5 rounded-lg border border-zinc-300">
            +1 Demo
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg">
            Añadir
          </button>
        </div>
      </div>

      <!-- HERO MINIMALISTA Y DIÁFANO -->
      <div class="max-w-3xl mb-14">
        <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">${preset.type}</span>
        <h1 class="text-3xl sm:text-5xl font-light tracking-tight text-zinc-900 mt-2">${preset.name}</h1>
        <p class="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed font-light">${preset.tagline}</p>
        <div class="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
          <span>${preset.address}</span>
          <span>·</span>
          <span>${preset.openingHours}</span>
          <span>·</span>
          <span>Google: ${preset.rating} ★ (${preset.totalReviews})</span>
        </div>
      </div>

      <!-- SECCIÓN PRINCIPIOS Y FILOSOFÍA -->
      <section class="mb-14 py-8 border-t border-b border-zinc-200">
        <div class="max-w-2xl mb-8">
          <h2 class="text-xl font-medium text-zinc-900">${preset.aboutUs.headline}</h2>
          <p class="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${preset.aboutUs.principles.map(p => `
            <div>
              <span class="text-xs font-mono text-zinc-400 font-semibold">${p.code}</span>
              <h4 class="text-sm font-medium text-zinc-900 mt-1">${p.title}</h4>
              <p class="text-xs text-zinc-500 mt-1 leading-relaxed">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS NÓRDICA -->
      <div class="flex items-center space-x-6 overflow-x-auto no-scrollbar pb-3 mb-8 text-xs tracking-widest uppercase font-light border-b border-zinc-200">
        <button data-category="all" class="pb-1 transition-colors ${activeCategory === 'all' ? 'text-zinc-900 font-semibold border-b border-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}">
          Todo (${preset.menu.length})
        </button>
        ${preset.categories.map(cat => `
          <button data-category="${cat}" class="pb-1 whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-zinc-900 font-semibold border-b border-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- GALERÍA DE PLATOS FOTOGRÁFICA (SHOWCASE 3 COLS) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="minimal-card p-4 flex flex-col justify-between">
              <div>
                <div class="relative h-48 rounded-lg overflow-hidden bg-zinc-100 mb-4">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-white/95 text-zinc-900 text-[10px] font-mono px-2 py-0.5 rounded">${dish.badge}</span>` : ''}
                </div>
                <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                  <span>${dish.category}</span>
                  <span>${dish.dietary || ''}</span>
                </div>
                <h3 class="text-base font-medium text-zinc-900">${dish.name}</h3>
                <p class="text-xs text-zinc-500 mt-1 leading-relaxed">${dish.description}</p>
                ${dish.nutrition ? `<p class="text-[10px] text-zinc-400 font-mono mt-2">${dish.nutrition}</p>` : ''}
              </div>

              <div class="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <span class="font-mono text-base font-semibold text-zinc-900">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-zinc-400 font-mono">${sales} pedidos</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-quick-simulate-dish="${dish.id}" class="text-[11px] font-mono text-zinc-500 hover:text-zinc-900 px-2 py-1">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-zinc-900 hover:bg-zinc-800 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // =========================================================================
  // BLOQUE DE RESEÑAS DE GOOGLE ADAPTADO SEGÚN EL ESTILO
  // =========================================================================
  renderGoogleReviewsSection(preset) {
    if (preset.id === 'estilo1') {
      return `
        <section class="border-t border-stone-800 pt-12 pb-16">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span class="text-xs font-mono text-amber-400 uppercase tracking-widest">Opiniones Verificadas</span>
              <h3 class="editorial-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-1">Lo que dicen nuestros comensales</h3>
            </div>
            <a href="${preset.googleMapsUrl}" target="_blank" class="text-xs font-mono text-amber-300 hover:underline flex items-center space-x-1">
              <span>Ver las ${preset.totalReviews} reseñas en Google Maps</span>
              ${ICONS.arrow}
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${preset.googleReviews.map(r => `
              <div class="editorial-card p-6 flex flex-col justify-between">
                <div>
                  <div class="flex items-center space-x-1 text-amber-400 text-sm mb-3">★★★★★</div>
                  <p class="editorial-serif italic text-sm text-stone-200 leading-relaxed">"${r.comment}"</p>
                </div>
                <div class="mt-6 pt-4 border-t border-stone-800">
                  <span class="text-xs font-bold text-stone-100 block">${r.author}</span>
                  <span class="text-[11px] text-stone-500 block font-mono">${r.badge} · ${r.timeAgo}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    if (preset.id === 'estilo2') {
      return `
        <section class="border-t border-slate-800 pt-10 pb-16">
          <div class="bento-card p-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              ${ICONS.google}
              <div>
                <h3 class="text-base font-bold text-white">${preset.rating} de 5 Estrellas en Google</h3>
                <p class="text-xs text-slate-400 font-mono">Basado en ${preset.totalReviews} reseñas verificadas</p>
              </div>
            </div>
            <a href="${preset.googleMapsUrl}" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
              Abrir Google Maps
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${preset.googleReviews.map(r => `
              <div class="bento-card p-5">
                <div class="flex items-center justify-between text-xs mb-3">
                  <span class="font-bold text-white">${r.author}</span>
                  <span class="text-amber-400">★★★★★</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${r.comment}</p>
                ${r.categoryRatings ? `
                  <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Comida: ${r.categoryRatings.comida}</span>
                    <span>Servicio: ${r.categoryRatings.servicio}</span>
                    <span>Ambiente: ${r.categoryRatings.ambiente}</span>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    if (preset.id === 'estilo3') {
      return `
        <section class="border-t-2 border-[#8c7b6c] pt-10 pb-16 font-serif">
          <div class="text-center max-w-xl mx-auto mb-8">
            <span class="text-xs uppercase tracking-widest text-[#7a6b5d] font-bold">Libro de Visitas</span>
            <h3 class="bistro-serif text-2xl font-bold text-[#2b2520] mt-1">Palabras de Nuestros Clientes</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${preset.googleReviews.map(r => `
              <div class="bistro-card p-5 border border-[#dfd7cc]">
                <span class="text-xs text-[#8c7b6c] font-bold block mb-2">★ ★ ★ ★ ★</span>
                <p class="text-xs italic text-[#4a3f35] leading-relaxed">"${r.comment}"</p>
                <div class="mt-4 pt-3 border-t border-[#eee7db]">
                  <span class="text-xs font-bold text-[#2b2520] block">${r.author}</span>
                  <span class="text-[11px] text-[#7a6b5d] block">${r.badge}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    // Estilo 4
    return `
      <section class="border-t border-zinc-200 pt-10 pb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Google Reviews</span>
            <h3 class="text-xl font-light text-zinc-900 mt-0.5">${preset.rating} / 5.0 (${preset.totalReviews} opiniones)</h3>
          </div>
          <a href="${preset.googleMapsUrl}" target="_blank" class="text-xs font-mono text-zinc-500 hover:text-zinc-900 underline">Google Maps</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${preset.googleReviews.map(r => `
            <div class="minimal-card p-5">
              <p class="text-xs text-zinc-600 leading-relaxed font-light">"${r.comment}"</p>
              <div class="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span class="text-zinc-800 font-medium">${r.author}</span>
                <span>${r.timeAgo}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // =========================================================================
  // FOOTER ADAPTADO A CADA ESTILO
  // =========================================================================
  renderFooterForStyle(preset) {
    if (preset.id === 'estilo1') {
      return `
        <footer class="bg-[#0b0b0d] text-stone-400 text-xs border-t border-stone-800 py-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span class="editorial-serif text-base font-bold text-stone-200 block">${preset.name}</span>
              <p class="text-xs text-stone-500 mt-1">${preset.address} · Tel. ${preset.phone}</p>
            </div>
            <div class="flex flex-wrap items-center gap-6 text-xs text-stone-500 font-mono">
              <button id="reset-demo-btn" class="hover:text-stone-300 underline text-[11px]">Reiniciar demo</button>
              <span>Desarrollado por <a href="https://devcorpsolutions.com" target="_blank" class="text-amber-400 hover:underline">DevCorp Solutions</a></span>
              <span>0% Comisiones</span>
            </div>
          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo2') {
      return `
        <footer class="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              <span class="font-bold text-white text-sm">La Central</span>
              <span class="text-slate-600">|</span>
              <span>Software para Hostelería por DevCorp</span>
            </div>
            <div class="flex items-center space-x-4">
              <button id="reset-demo-btn" class="hover:text-white underline text-[11px]">Reiniciar demo</button>
              <a href="https://devcorpsolutions.com" target="_blank" class="text-sky-400 hover:underline">devcorpsolutions.com</a>
            </div>
          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo3') {
      return `
        <footer class="bg-[#eee7db] text-[#594d40] text-xs border-t-2 border-[#8c7b6c] py-10 font-serif">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span class="bistro-serif text-lg font-bold text-[#2b2520] block">Casa Manolo · Cincuenta Años de Tradición</span>
            <p class="text-xs text-[#7a6b5d] mt-1">${preset.address} · Reservas telefónicas y online</p>
            <div class="mt-4 pt-3 border-t border-[#dfd7cc] flex justify-center space-x-6 text-[11px]">
              <button id="reset-demo-btn" class="underline">Reiniciar datos de muestra</button>
              <span>Tecnología artesanal por DevCorp Solutions</span>
            </div>
          </div>
        </footer>
      `;
    }

    // Estilo 4
    return `
      <footer class="bg-white text-zinc-400 text-xs border-t border-zinc-200 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-light tracking-widest uppercase">
          <span>Atelier · Obrador & Specialty Coffee</span>
          <div class="flex items-center space-x-6">
            <button id="reset-demo-btn" class="hover:text-zinc-800 underline">Reiniciar datos</button>
            <a href="https://devcorpsolutions.com" target="_blank" class="hover:text-zinc-800">DevCorp Solutions</a>
          </div>
        </div>
      </footer>
    `;
  }

  // =========================================================================
  // VISTA 2: COCINA / KDS (COMANDERO EN TIEMPO REAL)
  // =========================================================================
  renderKdsView(container, preset) {
    if (!container) container = document.getElementById('view-content');
    if (!container) return;

    const orders = store.state.orders;
    const pendingOrders = orders.filter(o => o.status === 'pending');
    const kitchenOrders = orders.filter(o => o.status === 'kitchen');
    const readyOrders = orders.filter(o => o.status === 'ready');
    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    container.innerHTML = `
      <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
        <div>
          <div class="flex items-center space-x-2">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h2 class="text-xl sm:text-2xl font-bold uppercase tracking-tight">Comandero de Cocina (KDS) · ${preset.name}</h2>
          </div>
          <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Pantalla táctil para cocineros y camareros. Sincronizada en vivo con los pedidos de mesa y sala.</p>
        </div>

        <button id="add-kds-test-btn" class="${isDark ? 'bg-stone-800 hover:bg-stone-700 text-stone-100' : 'bg-slate-900 hover:bg-slate-800 text-white'} text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow flex items-center space-x-1.5">
          <span>+ Simular Comanda Entrante</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Nuevos -->
        <div class="${isDark ? 'bg-stone-900/80 border-amber-500/40 text-stone-100' : 'bg-amber-50/60 border-amber-300 text-slate-900'} border-2 border-dashed rounded-2xl p-4 flex flex-col min-h-[160px] md:min-h-[480px]">
          <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-amber-200'} mb-4">
            <span class="font-bold text-sm uppercase">Nuevos Pedidos</span>
            <span class="bg-amber-400 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">${pendingOrders.length}</span>
          </div>
          <div class="space-y-4 flex-1 overflow-y-auto">
            ${pendingOrders.length === 0 ? `<p class="text-xs ${isDark ? 'text-stone-500' : 'text-slate-400'} text-center py-8">Sin comandas nuevas pendientes.</p>` : pendingOrders.map(order => this.renderKdsOrderCard(order, isDark)).join('')}
          </div>
        </div>

        <!-- En Fogones -->
        <div class="${isDark ? 'bg-stone-900/80 border-blue-500/40 text-stone-100' : 'bg-blue-50/60 border-blue-300 text-slate-900'} border-2 border-dashed rounded-2xl p-4 flex flex-col min-h-[160px] md:min-h-[480px]">
          <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-blue-200'} mb-4">
            <span class="font-bold text-sm uppercase">En Marcha / Fogones</span>
            <span class="bg-blue-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full">${kitchenOrders.length}</span>
          </div>
          <div class="space-y-4 flex-1 overflow-y-auto">
            ${kitchenOrders.length === 0 ? `<p class="text-xs ${isDark ? 'text-stone-500' : 'text-slate-400'} text-center py-8">Fogones libres.</p>` : kitchenOrders.map(order => this.renderKdsOrderCard(order, isDark)).join('')}
          </div>
        </div>

        <!-- Listos -->
        <div class="${isDark ? 'bg-stone-900/80 border-emerald-500/40 text-stone-100' : 'bg-emerald-50/60 border-emerald-300 text-slate-900'} border-2 border-dashed rounded-2xl p-4 flex flex-col min-h-[160px] md:min-h-[480px]">
          <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-emerald-200'} mb-4">
            <span class="font-bold text-sm uppercase">Listos para Servir</span>
            <span class="bg-emerald-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full">${readyOrders.length}</span>
          </div>
          <div class="space-y-4 flex-1 overflow-y-auto">
            ${readyOrders.length === 0 ? `<p class="text-xs ${isDark ? 'text-stone-500' : 'text-slate-400'} text-center py-8">Sin platos pendientes de entrega.</p>` : readyOrders.map(order => this.renderKdsOrderCard(order, isDark)).join('')}
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
          tableNumber: `Mesa ${Math.floor(1 + Math.random() * 8)}`,
          customerName: "Comensal Sala"
        });
        this.showToast("Comanda enviada a cocina");
      });
    }
  }

  renderKdsOrderCard(order, isDark) {
    let statusBadge = '';
    let actionButton = '';

    if (order.status === 'pending') {
      statusBadge = `<span class="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded uppercase">Nuevo</span>`;
      actionButton = `
        <button data-order-id="${order.id}" data-next-status="kitchen" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
          <span>Pasar a Fogones</span>
          ${ICONS.arrow}
        </button>
      `;
    } else if (order.status === 'kitchen') {
      statusBadge = `<span class="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded uppercase">En Fogones</span>`;
      actionButton = `
        <button data-order-id="${order.id}" data-next-status="ready" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
          <span>Marcar Listo</span>
          ${ICONS.arrow}
        </button>
      `;
    } else if (order.status === 'ready') {
      statusBadge = `<span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded uppercase">Listo</span>`;
      actionButton = `
        <button data-order-id="${order.id}" data-next-status="served" class="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1">
          <span>Servido en Mesa</span>
          ${ICONS.check}
        </button>
      `;
    }

    return `
      <div class="${isDark ? 'bg-stone-950 border-stone-800 text-stone-200' : 'bg-white border-slate-200 text-slate-900'} p-4 rounded-xl border shadow-sm text-xs space-y-3">
        <div class="flex items-center justify-between pb-2 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'}">
          <div class="flex items-center space-x-1.5">
            <span class="font-bold font-mono text-sm">${order.tableNumber}</span>
            <span class="text-[10px] text-slate-400">(${order.type})</span>
          </div>
          ${statusBadge}
        </div>

        <div class="space-y-1.5">
          ${order.items.map(item => `
            <div class="flex justify-between items-start text-[11px]">
              <span class="font-bold">${item.qty}x ${item.name}</span>
              <span class="font-mono text-slate-400">${formatCurrency(item.price * item.qty)}</span>
            </div>
            ${item.notes ? `<p class="text-[10px] text-amber-500 italic pl-3">Nota: ${item.notes}</p>` : ''}
          `).join('')}
        </div>

        <div class="pt-2 border-t ${isDark ? 'border-stone-800' : 'border-slate-100'} flex items-center justify-between font-mono text-xs">
          <span class="text-slate-400">Total:</span>
          <span class="font-bold text-sm">${formatCurrency(order.total)}</span>
        </div>

        ${actionButton}
      </div>
    `;
  }

  // =========================================================================
  // VISTA 3: MÉTRICAS Y CONTROL DE SALA
  // =========================================================================
  renderMetricsView(container, preset) {
    const orders = store.state.orders;
    const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
    const avgTicket = orders.length > 0 ? (totalSales / orders.length) : 0;
    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    container.innerHTML = `
      <div class="space-y-8 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Panel de Control</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Métricas de Servicio · ${preset.name}</h2>
          <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Datos actualizados al minuto con cada comanda tramitada.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-slate-400">Facturación Estimada Hoy</span>
            <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono text-amber-400">${formatCurrency(totalSales)}</p>
          </div>

          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-slate-400">Comandas en Servicio</span>
            <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono">${orders.length}</p>
          </div>

          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-slate-400">Ticket Medio</span>
            <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono">${formatCurrency(avgTicket)}</p>
          </div>

          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
            <span class="text-xs font-semibold uppercase text-emerald-500">Ahorro frente a Agregadores</span>
            <p class="text-2xl sm:text-3xl font-bold text-emerald-500 mt-2 font-mono">${formatCurrency(totalSales * 0.30)}</p>
          </div>
        </div>

        <!-- Ranking en Tiempo Real -->
        <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-3xl border shadow-sm">
          <h3 class="font-bold text-base mb-4">Rotación de Platos en Sala (Tiempo Real)</h3>
          <div class="space-y-3">
            ${preset.menu.map(dish => {
              const count = store.getDishSalesCount(dish.id);
              return `
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 ${isDark ? 'bg-stone-950/80 border-stone-800' : 'bg-slate-50 border-slate-200'} border rounded-xl text-xs">
                  <div class="flex items-center space-x-2.5 min-w-0">
                    <span class="font-bold text-amber-400 w-7 font-mono flex-shrink-0">${count}x</span>
                    <span class="font-semibold truncate max-w-[160px] sm:max-w-none">${dish.name}</span>
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

  // =========================================================================
  // VISTA 4: RESERVAS ONLINE
  // =========================================================================
  renderReservationsView(container, preset) {
    const today = new Date().toISOString().split('T')[0];
    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    container.innerHTML = `
      <div class="max-w-3xl mx-auto ${isDark ? 'bg-stone-900 border-stone-800 text-stone-100' : 'bg-white border-slate-200 text-slate-900'} rounded-3xl border shadow-sm p-6 sm:p-10">
        <div class="border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} pb-6 mb-8">
          <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Motor de Reservas Directas</span>
          <h2 class="text-2xl sm:text-3xl font-bold mt-1">Reserva de Mesa · ${preset.name}</h2>
          <p class="text-sm text-slate-400 mt-2">Sin comisiones por cubierto ni intermediarios. Confirmación inmediata.</p>
        </div>

        <form id="reservation-form" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Fecha</label>
              <input type="date" id="res-date" value="${today}" min="${today}" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Turno</label>
              <select id="res-turn" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                <option value="Comida (13:30h - 14:30h)">Comida (13:30h - 14:30h)</option>
                <option value="Comida (14:30h - 16:00h)">Comida (14:30h - 16:00h)</option>
                <option value="Cena (20:30h - 21:30h)">Cena (20:30h - 21:30h)</option>
                <option value="Cena (21:30h - 23:00h)">Cena (21:30h - 23:00h)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Comensales</label>
              <select id="res-guests" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                <option value="2 personas">2 personas</option>
                <option value="4 personas" selected>4 personas</option>
                <option value="6 personas">6 personas</option>
                <option value="8 personas">8 personas</option>
                <option value="Mesa Grande (10+)">Mesa Grande (10+ personas)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Preferencia de Sala</label>
              <select id="res-zone" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                <option value="Comedor Principal">Comedor Principal</option>
                <option value="Terraza Exterior">Terraza Exterior</option>
                <option value="Zona Barra">Zona Barra</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t ${isDark ? 'border-stone-800' : 'border-slate-100'}">
            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Nombre y Apellidos</label>
              <input type="text" id="res-name" placeholder="Ej. Javier Martín" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Teléfono de Contacto</label>
              <input type="tel" id="res-phone" placeholder="Ej. 612 34 56 78" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>
          </div>

          <button type="submit" class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-sm shadow flex items-center justify-center space-x-2">
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
        alert(`Reserva registrada con éxito.\nCódigo: ${res.id}\nComensal: ${res.name}\nZona: ${res.zone}`);
        this.render();
      });
    }
  }

  // =========================================================================
  // VISTA 5: CALCULADORA DE RENTABILIDAD (ROI)
  // =========================================================================
  renderRoiView(container, preset) {
    let ordersSlider = 400;
    let ticketSlider = 26;
    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    const renderCalculation = () => {
      const data = calculateDeliverySavings(ordersSlider, ticketSlider, 0.30);
      const resContainer = document.getElementById('roi-results-container');
      if (!resContainer) return;

      resContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div class="bg-red-950/30 border border-red-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-stone-100">
            <div>
              <span class="inline-block bg-red-900 text-red-200 text-xs font-bold px-2.5 py-1 rounded uppercase">
                Plataformas de Agregación (30% Comisión)
              </span>
              <h3 class="text-xl font-bold text-red-200 mt-4">Comisión acumulada anual</h3>
              <div class="mt-6 space-y-3 text-xs text-stone-300">
                <div class="flex justify-between pb-2 border-b border-red-900/60">
                  <span>Facturación delivery mensual:</span>
                  <span class="font-mono font-bold">${formatCurrency(data.monthlyRevenue)}</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-red-900/60 font-semibold">
                  <span>Comisión retenida cada mes:</span>
                  <span class="font-mono text-red-400">-${formatCurrency(data.platformMonthlyCommission)}</span>
                </div>
                <div class="bg-red-900/40 p-4 rounded-xl text-center border border-red-800 mt-4">
                  <span class="text-xs text-red-200 uppercase block font-semibold">Comisión Total en 12 Meses:</span>
                  <span class="text-3xl font-black text-red-100 font-mono mt-1 block">-${formatCurrency(data.platformAnnualCommission)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-emerald-950/30 border border-emerald-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-stone-100">
            <div>
              <span class="inline-block bg-emerald-800 text-emerald-100 text-xs font-bold px-2.5 py-1 rounded uppercase">
                Canal Propio Directo (0% Comisión)
              </span>
              <h3 class="text-xl font-bold text-emerald-300 mt-4">El 100% de la venta para el restaurante</h3>
              <div class="mt-6 space-y-3 text-xs text-stone-300">
                <div class="flex justify-between pb-2 border-b border-emerald-900/60">
                  <span>Comisión por pedido:</span>
                  <span class="font-mono font-bold text-emerald-400">0,00 € (0%)</span>
                </div>
                <div class="bg-emerald-900/40 p-4 rounded-xl text-center border border-emerald-700 mt-4">
                  <span class="text-xs uppercase text-emerald-200 block font-semibold">Ahorro Anual que Conserva el Negocio:</span>
                  <span class="text-3xl font-black text-emerald-300 font-mono mt-1 block">+${formatCurrency(data.annualSavings)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    };

    container.innerHTML = `
      <div class="max-w-5xl mx-auto space-y-8 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Rentabilidad y Márgenes</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold mt-1">Comparativa de Comisiones de Delivery</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-2">Calcula cuánto dinero ahorra un restaurante al operar su propio canal directo sin comisiones por pedido.</p>
        </div>

        <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 sm:p-8 rounded-3xl border shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs font-bold uppercase">Pedidos mensuales (Delivery / Takeaway):</label>
              <span id="orders-val" class="font-mono font-bold text-blue-500 text-base">400 pedidos</span>
            </div>
            <input type="range" id="orders-slider" min="50" max="1500" step="25" value="400" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
          </div>

          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs font-bold uppercase">Ticket medio por pedido:</label>
              <span id="ticket-val" class="font-mono font-bold text-blue-500 text-base">26,00 €</span>
            </div>
            <input type="range" id="ticket-slider" min="12" max="75" step="1" value="26" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
          </div>
        </div>

        <div id="roi-results-container"></div>
      </div>
    `;

    renderCalculation();

    const oSlider = document.getElementById('orders-slider');
    const tSlider = document.getElementById('ticket-slider');
    const oVal = document.getElementById('orders-val');
    const tVal = document.getElementById('ticket-val');

    if (oSlider && tSlider) {
      oSlider.addEventListener('input', (e) => {
        ordersSlider = parseInt(e.target.value);
        oVal.innerText = `${ordersSlider} pedidos`;
        renderCalculation();
      });
      tSlider.addEventListener('input', (e) => {
        ticketSlider = parseInt(e.target.value);
        tVal.innerText = `${ticketSlider},00 €`;
        renderCalculation();
      });
    }
  }

  // =========================================================================
  // MODALES: CARRITO, CHECKOUT Y RESEÑAS
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
              <span class="text-3xl mb-2">🍽️</span>
              <p class="font-bold text-slate-600 text-sm">La comanda está vacía</p>
              <p class="text-slate-400 mt-1">Selecciona cualquier plato de la carta para probar el pedido.</p>
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
                <button data-cart-remove="${idx}" class="text-red-500 hover:text-red-700 ml-2">✕</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="p-5 border-t border-slate-200 bg-slate-50 space-y-4">
          <div class="flex justify-between items-center font-bold text-slate-900 text-base">
            <span>Total:</span>
            <span class="font-mono text-xl">${formatCurrency(total)}</span>
          </div>
          <button id="open-checkout-modal-btn" ${cart.length === 0 ? 'disabled' : ''} class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow flex items-center justify-center space-x-2 disabled:opacity-50">
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
            <h3 class="text-base font-bold">Tramitar Comanda · ${preset.name}</h3>
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
              <label class="block font-semibold text-slate-700 uppercase mb-1">Número de Mesa o Ubicación</label>
              <input type="text" id="order-table" value="Mesa 4" required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none"/>
            </div>

            <div>
              <label class="block font-semibold text-slate-700 uppercase mb-1">Nombre</label>
              <input type="text" id="order-name" placeholder="Ej. Carlos M." required class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none"/>
            </div>

            <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <span class="font-bold text-slate-700 block">Resumen de Comanda:</span>
              ${cart.map(i => `
                <div class="flex justify-between text-slate-600 text-[11px]">
                  <span>${i.qty}x ${i.name}</span>
                  <span class="font-mono">${formatCurrency(i.price * i.qty)}</span>
                </div>
              `).join('')}
              <div class="pt-2 border-t border-slate-200 flex justify-between font-bold text-slate-900 text-xs">
                <span>Total a Pagar:</span>
                <span class="font-mono text-sm">${formatCurrency(total)}</span>
              </div>
            </div>

            <button type="submit" class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-xs tracking-wide shadow">
              Confirmar Comanda y Enviar a Cocina
            </button>
          </form>
        </div>
      </div>
    `;

    const form = document.getElementById('checkout-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = document.querySelector('input[name="order-type"]:checked').value;
        const location = document.getElementById('order-table').value;
        const customer = document.getElementById('order-name').value;

        store.createOrder({
          type: type,
          tableNumber: location,
          customerName: customer
        });

        container.innerHTML = '';
        this.showToast('Comanda enviada a la pantalla de cocina');
        store.setView('kds');
      });
    }
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
            <h4 class="text-base font-bold">¿Cómo calificarías tu experiencia hoy?</h4>
            <div class="flex justify-center items-center space-x-3 my-6">
              ${[1, 2, 3, 4, 5].map(stars => `
                <button data-rate-stars="${stars}" class="rate-star-btn w-10 h-10 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50 flex flex-col items-center justify-center transition-all">
                  <span class="text-amber-400 text-base">★</span>
                  <span class="text-[10px] font-bold text-slate-700">${stars}</span>
                </button>
              `).join('')}
            </div>
            <p class="text-xs text-slate-400">Tu valoración ayuda a nuestro equipo de cocina y sala.</p>
          </div>
        </div>
      </div>
    `;
  }
}

// Inicialización de la Aplicación
new AppController();
