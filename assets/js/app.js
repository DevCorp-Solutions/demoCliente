/**
 * DevCorp Solutions - GastroSuite SPA Controller
 * Ecosistema de 4 Estilos Gastronómicos 100% Diferenciados
 * Sin clichés de IA · Vocabulario auténtico de hostelería
 * Soporte de fotos, modal de detalle con alérgenos, carrito y checkout temáticos
 */

import { RESTAURANT_PRESETS } from './presets.js';
import { store } from './state.js';

// Iconografía SVG ligera optimizada
const ICONS = {
  cart: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  star: `<svg class="w-3.5 h-3.5 text-amber-400 inline-block fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  arrow: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  external: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  info: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  eye: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`
};

function formatCurrency(val) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);
}

function getAllergenLabel(code) {
  const map = {
    gluten: '🌾 Gluten',
    lactosa: '🥛 Lácteos',
    huevo: '🥚 Huevo',
    cacahuetes: '🥜 Cacahuetes',
    pescado: '🐟 Pescado',
    marisco: '🦐 Marisco',
    soja: '🌱 Soja',
    frutos_secos: '🌰 Frutos de cáscara'
  };
  return map[code] || `⚠️ ${code}`;
}

export class GastroApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.modalQty = 1;
    this.currentModalDish = null;
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
    document.addEventListener('click', (e) => {
      // 1. Cambio de vistas
      const viewBtn = e.target.closest('[data-view]');
      if (viewBtn) {
        e.preventDefault();
        store.setView(viewBtn.getAttribute('data-view'));
        return;
      }

      // 2. Filtro de categorías
      const catBtn = e.target.closest('[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }

      // 3. Filtro de alérgenos
      const allergenBtn = e.target.closest('[data-allergen]');
      if (allergenBtn) {
        e.preventDefault();
        store.setAllergenFilter(allergenBtn.getAttribute('data-allergen'));
        return;
      }

      // 4. Modal Detalle del Plato (Abrir)
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

      // 4.1 Cerrar Modal Detalle del Plato
      if (e.target.closest('#close-dish-modal') || e.target.closest('#dish-modal-backdrop')) {
        const modalContainer = document.getElementById('dish-modal-container');
        if (modalContainer) modalContainer.innerHTML = '';
        this.currentModalDish = null;
        this.modalQty = 1;
        return;
      }

      // 4.2 Cantidad dentro del Modal de Detalle
      const modalMinus = e.target.closest('[data-modal-qty-minus]');
      if (modalMinus) {
        if (this.modalQty > 1) {
          this.modalQty -= 1;
          const qtyElem = document.getElementById('modal-dish-qty-val');
          if (qtyElem) qtyElem.innerText = this.modalQty;
        }
        return;
      }
      const modalPlus = e.target.closest('[data-modal-qty-plus]');
      if (modalPlus) {
        this.modalQty += 1;
        const qtyElem = document.getElementById('modal-dish-qty-val');
        if (qtyElem) qtyElem.innerText = this.modalQty;
        return;
      }

      // 4.3 Añadir al carrito desde el Modal de Detalle
      const modalAddBtn = e.target.closest('[data-modal-add-cart]');
      if (modalAddBtn && this.currentModalDish) {
        const dish = this.currentModalDish;
        store.addToCart(dish, "", this.modalQty);
        this.showToast(`✓ ${dish.name} (x${this.modalQty}) añadido a la comanda`);
        const modalContainer = document.getElementById('dish-modal-container');
        if (modalContainer) modalContainer.innerHTML = '';
        this.currentModalDish = null;
        this.modalQty = 1;
        return;
      }

      // 5. Añadir plato al carrito directamente desde la tarjeta
      const addCartBtn = e.target.closest('[data-add-cart]');
      if (addCartBtn) {
        e.preventDefault();
        const dishId = addCartBtn.getAttribute('data-add-cart');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          store.addToCart(dish);
          this.showToast(`✓ ${dish.name} añadido a la comanda`);
        }
        return;
      }

      // 6. Simular venta (+1 pedido para probar rotación en tiempo real)
      const simBtn = e.target.closest('[data-quick-simulate-dish]');
      if (simBtn) {
        e.preventDefault();
        const dishId = simBtn.getAttribute('data-quick-simulate-dish');
        store.incrementDishSale(dishId, 1);
        this.showToast(`+1 Venta simulada para estadísticas en vivo`);
        return;
      }

      // 7. Carrito Drawer (Abrir / Cerrar)
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
      if (e.target.closest('#close-checkout-modal') || e.target.closest('#checkout-modal-backdrop')) {
        const container = document.getElementById('checkout-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      // 10. Reseñas Modal
      if (e.target.closest('#open-smart-review-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }
      if (e.target.closest('#close-review-modal') || e.target.closest('#review-modal-backdrop')) {
        const container = document.getElementById('review-modal-container');
        if (container) container.innerHTML = '';
        return;
      }
    });
  }

  showToast(message) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 border border-slate-700 transition-all transform duration-300';
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
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

      <!-- CONTENEDORES DE MODALES TEMÁTICOS -->
      <div id="dish-modal-container"></div>
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

    // Selector HTML estándar adaptado a la estética de cada estilo
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
                <button id="open-cart-btn" class="flex items-center space-x-1.5 bg-stone-900 border border-amber-500/40 text-amber-200 text-xs font-semibold px-3 py-1.5 rounded-lg shadow transition-colors hover:bg-stone-800">
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
  // DISEÑO 1: EDITORIAL & ALTA COCINA (FINE DINING CON IMÁGENES Y MODAL DETALLADO)
  // -------------------------------------------------------------------------
  renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergen, topData) {
    return `
      <!-- SUGERENCIA DEL JEFE DE COCINA -->
      <div class="mb-8 p-4 sm:p-5 rounded-2xl bg-[#14141a] border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-stone-200 shadow-md">
        <div>
          <div class="flex items-center space-x-2 text-xs text-amber-400 font-mono uppercase tracking-wider">
            <span>◆ Plato Recomendado del Chef</span>
            <span>·</span>
            <span>${topData.count} comandas hoy</span>
          </div>
          <h3 class="editorial-serif text-lg font-bold text-stone-100 mt-1">${topData.dish.name}</h3>
          <p class="text-xs text-stone-400 mt-0.5">${topData.dish.description}</p>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <button data-open-dish-modal="${topData.dish.id}" class="bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs px-3 py-2 rounded-xl transition-all border border-amber-500/30 flex items-center space-x-1.5">
            ${ICONS.eye}
            <span>Ver Detalle</span>
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow">
            Pedir (${formatCurrency(topData.dish.price)})
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

      <!-- BARRA DE CATEGORÍAS EDITORIAL (SIN JERGA DE PASES) -->
      <div class="border-b border-stone-800 pb-3 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center space-x-4 overflow-x-auto no-scrollbar text-xs font-medium uppercase tracking-wider">
          <button data-category="all" class="pb-2 transition-colors ${activeCategory === 'all' ? 'text-amber-300 border-b-2 border-amber-400 font-bold' : 'text-stone-400 hover:text-stone-200'}">
            Toda la Carta (${preset.menu.length})
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

      <!-- LISTADO DE PLATOS EDITORIALES CON FOTOS Y MODAL DETALLADO -->
      <div class="space-y-6 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="editorial-card p-4 sm:p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 group">
              
              <!-- Imagen de Alta Calidad (si existe) -->
              ${dish.image ? `
                <div class="w-full md:w-56 h-44 sm:h-48 md:h-36 rounded-xl overflow-hidden bg-stone-900 flex-shrink-0 relative cursor-pointer" data-open-dish-modal="${dish.id}">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  <span class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></span>
                  <div class="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-amber-300 font-mono">
                    <span class="flex items-center space-x-1">${ICONS.eye}<span>Ver detalle</span></span>
                    <span>${dish.prepTime || '15 min'}</span>
                  </div>
                </div>
              ` : ''}

              <!-- Contenido Textual del Plato -->
              <div class="flex-1 cursor-pointer" data-open-dish-modal="${dish.id}">
                <div class="flex flex-wrap items-center gap-2">
                  <h4 class="editorial-serif text-lg sm:text-xl font-bold text-stone-100 hover:text-amber-300 transition-colors">${dish.name}</h4>
                  ${dish.badge ? `<span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/90 border border-amber-600/40 text-amber-300">${dish.badge}</span>` : ''}
                </div>
                <p class="text-xs text-stone-300 mt-1.5 leading-relaxed max-w-2xl">${dish.description}</p>
                
                <div class="flex flex-wrap items-center gap-3 mt-2.5 text-[11px] text-stone-400 font-mono">
                  ${dish.details ? `<span class="text-stone-300">${dish.details}</span>` : ''}
                  ${dish.pairing ? `<span class="text-amber-400/90">🍷 ${dish.pairing}</span>` : ''}
                  <span class="text-stone-500">· ${sales} pedidos servidos</span>
                </div>
              </div>

              <!-- Precio y Botones de Acción -->
              <div class="flex items-center justify-between md:justify-end space-x-3 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-stone-800 flex-shrink-0">
                <span class="font-mono text-xl font-bold text-amber-300">${formatCurrency(dish.price)}</span>
                <div class="flex items-center space-x-2">
                  <button data-open-dish-modal="${dish.id}" class="bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs px-2.5 py-1.5 rounded-lg transition-colors border border-amber-500/20" title="Ver ingredientes y alérgenos">
                    Info
                  </button>
                  <button data-quick-simulate-dish="${dish.id}" class="bg-stone-800 hover:bg-stone-700 text-stone-400 text-[11px] px-2 py-1.5 rounded-lg transition-colors" title="Simular venta">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs px-3.5 py-1.5 rounded-lg transition-colors shadow">
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
              <span class="text-[10px] text-slate-400 font-mono">(${topData.count} comandas hoy)</span>
            </div>
            <h3 class="text-base font-bold mt-0.5">${topData.dish.name} · ${formatCurrency(topData.dish.price)}</h3>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button data-open-dish-modal="${topData.dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs px-3 py-1.5 rounded-xl border border-slate-700">
            Ver Detalle
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow">
            Añadir
          </button>
        </div>
      </div>

      <!-- HERO BENTO GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div class="bento-card p-6 md:col-span-2 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">${preset.type}</span>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">${preset.name}</h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">${preset.tagline}</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
            <span>📍 ${preset.address}</span>
            <span>·</span>
            <span>📞 ${preset.phone}</span>
            <span>·</span>
            <span class="text-sky-400 font-bold">★ ${preset.rating} (${preset.totalReviews} reseñas)</span>
          </div>
        </div>

        <div class="bento-card p-6 flex flex-col justify-between">
          <span class="text-xs font-bold text-sky-400 uppercase">Especialidad de la Casa</span>
          <div>
            <h3 class="text-lg font-bold text-white mt-2">${preset.aboutUs.specialtyHighlight.title}</h3>
            <p class="text-xs text-slate-300 mt-1">${preset.aboutUs.specialtyHighlight.text}</p>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs text-slate-400 font-mono">Bestseller</span>
            <span class="text-xs font-mono text-sky-400 font-bold">${preset.aboutUs.specialtyHighlight.price}</span>
          </div>
        </div>
      </div>

      <!-- SOBRE NOSOTROS: BENTO METRICS -->
      <section class="mb-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${preset.aboutUs.bentoCards.map(b => `
            <div class="bento-card p-5">
              <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">${b.tag}</span>
              <span class="text-2xl font-black text-white block mt-1">${b.metric}</span>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">${b.label}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS TIPO APP -->
      <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        <button data-category="all" class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
          Todo (${preset.menu.length})
        </button>
        ${preset.categories.map(cat => `
          <button data-category="${cat}" class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- CUADRÍCULA DE PLATOS TIPO APP BENTO -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="bento-card p-4 flex flex-col justify-between group">
              <div>
                <div class="relative h-44 rounded-xl overflow-hidden mb-3 bg-slate-800 cursor-pointer" data-open-dish-modal="${dish.id}">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-slate-900/90 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded">${dish.badge}</span>` : ''}
                  <div class="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center space-x-1">
                    ${ICONS.eye}
                    <span>Info</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>${dish.category}</span>
                  <span>⏱️ ${dish.prepTime || '6 min'}</span>
                </div>
                <h3 class="text-base font-bold text-white cursor-pointer hover:text-sky-300 transition-colors" data-open-dish-modal="${dish.id}">${dish.name}</h3>
                <p class="text-xs text-slate-300 mt-1 line-clamp-2">${dish.description}</p>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span class="font-mono text-lg font-bold text-white">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-slate-500">${sales} pedidos hoy</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-open-dish-modal="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs px-2.5 py-1.5 rounded-lg" title="Ver ingredientes y alérgenos">
                    Info
                  </button>
                  <button data-quick-simulate-dish="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-slate-400 text-[11px] px-2 py-1.5 rounded-lg">
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
  // DISEÑO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA CON LÍDERES PUNTEADOS Y FOTOS
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
          <button data-open-dish-modal="${topData.dish.id}" class="bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] text-xs px-3 py-1.5 rounded font-serif flex items-center space-x-1">
            ${ICONS.eye}
            <span>Ver Foto & Receta</span>
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

      <!-- CARTA EN 2 COLUMNAS CON DOTTED LEADERS Y VISTA PREVIA FOTOGRÁFICA -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="pb-4 border-b border-[#dfd7cc] flex items-start space-x-3 group">
              
              <!-- Miniatura fotográfica opcional / clickeable -->
              ${dish.image ? `
                <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#e6dfd5] border border-[#dfd7cc] cursor-pointer shadow-sm relative group-hover:opacity-90" data-open-dish-modal="${dish.id}" title="Clic para ampliar y ver alérgenos">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                  <span class="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-[10px]">
                    🔍
                  </span>
                </div>
              ` : ''}

              <div class="flex-1 min-w-0">
                <!-- Línea con Nombre, Puntos Suspensivos y Precio -->
                <div class="dotted-leader-row cursor-pointer" data-open-dish-modal="${dish.id}">
                  <span class="bistro-serif text-base font-bold text-[#2b2520] hover:text-[#8c7b6c] transition-colors truncate">${dish.name}</span>
                  <span class="dotted-leader-line"></span>
                  <span class="font-serif font-bold text-base text-[#3d3228] flex-shrink-0">${formatCurrency(dish.price)}</span>
                </div>

                <!-- Descripción en letra cursiva refinada -->
                <p class="text-xs font-serif italic text-[#6b5c4f] mt-1 leading-relaxed cursor-pointer" data-open-dish-modal="${dish.id}">${dish.description}</p>
                
                <div class="mt-2.5 flex items-center justify-between text-[11px] font-serif text-[#7a6b5d]">
                  <span class="cursor-pointer hover:underline" data-open-dish-modal="${dish.id}">
                    ${dish.vintageBadge || 'Especialidad'} · ${sales} raciones
                  </span>
                  <div class="flex items-center space-x-1.5">
                    <button data-open-dish-modal="${dish.id}" class="text-[10px] text-[#7a6b5d] hover:text-[#3d3228] px-1.5 py-0.5 border border-[#dfd7cc] rounded">
                      Ver foto
                    </button>
                    <button data-quick-simulate-dish="${dish.id}" class="text-[10px] text-[#7a6b5d] hover:text-[#2b2520] underline px-1">
                      +1
                    </button>
                    <button data-add-cart="${dish.id}" class="bg-[#8c7b6c] hover:bg-[#6e5f52] text-white px-2.5 py-1 rounded text-[11px] font-sans">
                      Pedir
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
          <button data-open-dish-modal="${topData.dish.id}" class="bg-white hover:bg-zinc-200 text-zinc-800 text-xs px-3 py-1.5 rounded-lg border border-zinc-300">
            Detalle
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
            <div class="minimal-card p-4 flex flex-col justify-between group">
              <div>
                <div class="relative h-48 rounded-lg overflow-hidden bg-zinc-100 mb-4 cursor-pointer" data-open-dish-modal="${dish.id}">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-white/95 text-zinc-900 text-[10px] font-mono px-2 py-0.5 rounded">${dish.badge}</span>` : ''}
                  <div class="absolute bottom-2 right-2 bg-white/90 text-zinc-800 text-[10px] px-2 py-0.5 rounded shadow flex items-center space-x-1">
                    ${ICONS.eye}
                    <span>Info</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                  <span>${dish.category}</span>
                  <span>${dish.dietary || ''}</span>
                </div>
                <h3 class="text-base font-medium text-zinc-900 cursor-pointer hover:text-zinc-600 transition-colors" data-open-dish-modal="${dish.id}">${dish.name}</h3>
                <p class="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">${dish.description}</p>
                ${dish.nutrition ? `<p class="text-[10px] text-zinc-400 font-mono mt-2">${dish.nutrition}</p>` : ''}
              </div>

              <div class="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <span class="font-mono text-base font-semibold text-zinc-900">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-zinc-400 font-mono">${sales} pedidos</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-open-dish-modal="${dish.id}" class="text-[11px] font-mono text-zinc-600 hover:text-zinc-900 px-2 py-1 border border-zinc-200 rounded">
                    Info
                  </button>
                  <button data-quick-simulate-dish="${dish.id}" class="text-[11px] font-mono text-zinc-400 hover:text-zinc-900 px-1 py-1">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg">
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

  // =========================================================================
  // MODAL DE DETALLE DEL PLATO (100% TEMÁTICO PARA CADA ESTILO)
  // =========================================================================
  renderDishDetailModal(dish, preset) {
    this.currentModalDish = dish;
    this.modalQty = 1;
    const container = document.getElementById('dish-modal-container');
    if (!container) return;

    const allergensList = (dish.allergens && dish.allergens.length > 0)
      ? dish.allergens.map(a => `<span class="allergen-chip ${
          preset.id === 'estilo1' ? 'badge-allergen-estilo1' :
          preset.id === 'estilo2' ? 'badge-allergen-estilo2' :
          preset.id === 'estilo3' ? 'badge-allergen-estilo3' :
          'badge-allergen-estilo4'
        }">${getAllergenLabel(a)}</span>`).join('')
      : `<span class="text-xs ${preset.id === 'estilo1' ? 'text-stone-400' : preset.id === 'estilo2' ? 'text-slate-400' : 'text-zinc-500'}">✓ No contiene alérgenos comunes declarados</span>`;

    let cardThemeClasses = '';
    let headerTextClass = '';
    let bodyTextClass = '';
    let btnThemeClass = '';

    if (preset.id === 'estilo1') {
      cardThemeClasses = 'bg-[#121218] border border-amber-500/30 text-stone-100 shadow-2xl';
      headerTextClass = 'editorial-serif text-amber-100 font-bold text-2xl';
      bodyTextClass = 'text-stone-300';
      btnThemeClass = 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow';
    } else if (preset.id === 'estilo2') {
      cardThemeClasses = 'bg-[#0b1020] border border-slate-700 text-slate-100 shadow-2xl rounded-3xl';
      headerTextClass = 'font-sans text-white font-black text-xl';
      bodyTextClass = 'text-slate-300';
      btnThemeClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      cardThemeClasses = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] shadow-2xl rounded-xl';
      headerTextClass = 'bistro-serif text-[#3d3228] font-bold text-2xl';
      bodyTextClass = 'text-[#594d40] font-serif';
      btnThemeClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold text-xs rounded shadow';
    } else {
      cardThemeClasses = 'bg-white border border-zinc-200 text-zinc-900 shadow-2xl rounded-2xl';
      headerTextClass = 'font-light tracking-tight text-zinc-900 text-2xl';
      bodyTextClass = 'text-zinc-600 font-light';
      btnThemeClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider text-xs rounded-none py-3.5';
    }

    container.innerHTML = `
      <div id="dish-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden rounded-2xl ${cardThemeClasses}">
          
          <!-- Cabecera / Imagen Principal -->
          <div class="relative w-full h-56 sm:h-72 bg-stone-900 flex-shrink-0 overflow-hidden">
            ${dish.image ? `
              <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover"/>
            ` : `
              <div class="w-full h-full flex items-center justify-center text-4xl">🍽️</div>
            `}
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <button id="close-dish-modal" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors font-bold z-10">
              ✕
            </button>

            <div class="absolute bottom-4 left-4 right-4 text-white">
              <div class="flex items-center space-x-2 mb-1">
                ${dish.badge ? `<span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${preset.id === 'estilo1' ? 'bg-amber-500 text-stone-950' : 'bg-blue-600 text-white'}">${dish.badge}</span>` : ''}
                <span class="text-xs font-mono text-white/80">${dish.category}</span>
              </div>
              <h2 class="${headerTextClass}">${dish.name}</h2>
            </div>
          </div>

          <!-- Cuerpo con Scroll y Detalles -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 ${bodyTextClass} text-xs sm:text-sm">
            
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider mb-1 ${preset.id === 'estilo1' ? 'text-amber-400 font-mono' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Descripción</h4>
              <p class="leading-relaxed">${dish.description}</p>
            </div>

            ${dish.ingredients ? `
              <div class="p-3.5 rounded-xl ${preset.id === 'estilo1' ? 'bg-stone-900/90 border border-stone-800' : preset.id === 'estilo2' ? 'bg-slate-900/90 border border-slate-800' : preset.id === 'estilo3' ? 'bg-[#eee7db] border border-[#dfd7cc]' : 'bg-zinc-50 border border-zinc-200'}">
                <span class="font-bold text-xs block mb-1 uppercase tracking-wider ${preset.id === 'estilo1' ? 'text-amber-300' : preset.id === 'estilo2' ? 'text-sky-300' : 'text-stone-700'}">Ingredientes y Preparación</span>
                <p class="text-xs leading-relaxed opacity-90">${dish.ingredients}</p>
              </div>
            ` : ''}

            <!-- Alérgenos -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider mb-2 ${preset.id === 'estilo1' ? 'text-amber-400 font-mono' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Información de Alérgenos</h4>
              <div class="flex flex-wrap gap-2">
                ${allergensList}
              </div>
            </div>

            <!-- Sugerencia de Maridaje o Nota Culinaria -->
            ${dish.pairing || dish.beerPairing || dish.dietary ? `
              <div class="border-t pt-4 ${preset.id === 'estilo1' ? 'border-stone-800' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex flex-wrap gap-4 text-xs font-mono">
                ${dish.pairing ? `<span class="text-amber-300">🍷 Maridaje: ${dish.pairing}</span>` : ''}
                ${dish.beerPairing ? `<span class="text-sky-300">🍺 Maridaje: ${dish.beerPairing}</span>` : ''}
                ${dish.dietary ? `<span class="opacity-75">🌿 ${dish.dietary}</span>` : ''}
              </div>
            ` : ''}

          </div>

          <!-- Pie del Modal con Selector de Cantidad y Botón Temático -->
          <div class="p-4 sm:p-5 border-t ${preset.id === 'estilo1' ? 'border-stone-800 bg-[#0e0e13]' : preset.id === 'estilo2' ? 'border-slate-800 bg-[#070a13]' : preset.id === 'estilo3' ? 'border-[#dfd7cc] bg-[#f5f1e8]' : 'border-zinc-200 bg-zinc-50'} flex items-center justify-between gap-4">
            
            <div class="flex items-center space-x-3">
              <span class="font-mono text-xl sm:text-2xl font-bold ${preset.id === 'estilo1' ? 'text-amber-300' : preset.id === 'estilo2' ? 'text-white' : preset.id === 'estilo3' ? 'text-[#3d3228]' : 'text-zinc-900'}">
                ${formatCurrency(dish.price)}
              </span>

              <div class="flex items-center space-x-2 border rounded-xl px-2 py-1 ${preset.id === 'estilo1' ? 'border-stone-700 bg-stone-900' : preset.id === 'estilo2' ? 'border-slate-700 bg-slate-800' : preset.id === 'estilo3' ? 'border-[#8c7b6c] bg-white' : 'border-zinc-300 bg-white'}">
                <button data-modal-qty-minus class="w-6 h-6 flex items-center justify-center font-bold text-sm cursor-pointer hover:opacity-75">-</button>
                <span id="modal-dish-qty-val" class="w-6 text-center font-bold font-mono text-xs">1</span>
                <button data-modal-qty-plus class="w-6 h-6 flex items-center justify-center font-bold text-sm cursor-pointer hover:opacity-75">+</button>
              </div>
            </div>

            <button data-modal-add-cart class="${btnThemeClass} px-5 py-3 flex items-center space-x-2">
              <span>Añadir a la Comanda</span>
              ${ICONS.arrow}
            </button>

          </div>

        </div>
      </div>
    `;
  }

  // =========================================================================
  // CARRITO DRAWER (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderCartDrawer(isOpen = true) {
    const container = document.getElementById('cart-drawer-container');
    if (!container) return;
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    if (!isOpen) {
      container.innerHTML = '';
      return;
    }

    let drawerContainerClasses = '';
    let headerClasses = '';
    let bodyClasses = '';
    let footerClasses = '';
    let itemClasses = '';
    let btnClass = '';
    let qtyBtnClass = '';

    if (preset.id === 'estilo1') {
      drawerContainerClasses = 'bg-[#0e0e13] text-stone-100 border-l border-amber-500/20';
      headerClasses = 'p-5 border-b border-stone-800 flex items-center justify-between bg-[#14141c] text-amber-300 editorial-serif';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-stone-200';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-stone-800/80 text-xs';
      footerClasses = 'p-5 border-t border-stone-800 bg-[#14141c] space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded bg-stone-800 text-amber-300 hover:bg-stone-700 font-mono font-bold flex items-center justify-center border border-amber-500/30';
      btnClass = 'w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-bold uppercase tracking-wider py-3.5 rounded-xl text-xs shadow flex items-center justify-center space-x-2 disabled:opacity-40';
    } else if (preset.id === 'estilo2') {
      drawerContainerClasses = 'bg-[#070a13] text-slate-100 border-l border-slate-800';
      headerClasses = 'p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900 text-sky-400 font-mono';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-slate-200';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-slate-800 text-xs';
      footerClasses = 'p-5 border-t border-slate-800 bg-slate-900 space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded-lg bg-slate-800 text-sky-300 hover:bg-slate-700 font-mono font-bold flex items-center justify-center';
      btnClass = 'w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 disabled:opacity-40';
    } else if (preset.id === 'estilo3') {
      drawerContainerClasses = 'bg-[#fbf9f5] text-[#2b2520] border-l-2 border-[#8c7b6c]';
      headerClasses = 'p-5 border-b-2 border-[#8c7b6c] flex items-center justify-between bg-[#eee7db] text-[#3d3228] font-serif';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-[#3d3228] font-serif';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-[#dfd7cc] text-xs';
      footerClasses = 'p-5 border-t-2 border-[#8c7b6c] bg-[#eee7db] space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] font-serif font-bold flex items-center justify-center';
      btnClass = 'w-full bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3.5 rounded text-xs shadow flex items-center justify-center space-x-2 disabled:opacity-40';
    } else {
      drawerContainerClasses = 'bg-white text-zinc-900 border-l border-zinc-200';
      headerClasses = 'p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50 text-zinc-900 uppercase tracking-widest text-xs font-light';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-zinc-800 font-light';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-zinc-100 text-xs';
      footerClasses = 'p-5 border-t border-zinc-200 bg-zinc-50 space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded-none border border-zinc-300 hover:bg-zinc-100 text-zinc-900 font-mono text-xs flex items-center justify-center';
      btnClass = 'w-full bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none text-xs flex items-center justify-center space-x-2 disabled:opacity-40';
    }

    container.innerHTML = `
      <div id="cart-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"></div>
      <div class="drawer-animate fixed inset-y-0 right-0 max-w-md w-full ${drawerContainerClasses} shadow-2xl z-50 flex flex-col justify-between">
        
        <div class="${headerClasses}">
          <div class="flex items-center space-x-2">
            ${ICONS.cart}
            <h3 class="font-bold text-sm sm:text-base">Comanda de Sala · ${preset.name}</h3>
          </div>
          <button id="close-cart-btn" class="p-1 opacity-70 hover:opacity-100 text-base">✕</button>
        </div>

        <div class="${bodyClasses}">
          ${cart.length === 0 ? `
            <div class="h-64 flex flex-col items-center justify-center opacity-60 text-xs text-center">
              <span class="text-4xl mb-3">🍽️</span>
              <p class="font-bold text-sm">La comanda está vacía</p>
              <p class="mt-1 max-w-xs">Selecciona cualquier plato de la carta o pulsa en 'Ver Detalle' para añadirlo a la prueba.</p>
            </div>
          ` : cart.map((item, idx) => `
            <div class="${itemClasses}">
              <div class="pr-2 flex-1">
                <span class="font-bold block">${item.name}</span>
                <span class="font-mono opacity-75 text-[11px]">${formatCurrency(item.price)} / ud.</span>
              </div>
              <div class="flex items-center space-x-2 flex-shrink-0">
                <button data-cart-minus="${idx}" class="${qtyBtnClass}">-</button>
                <span class="font-bold w-4 text-center font-mono text-xs">${item.qty}</span>
                <button data-cart-plus="${idx}" class="${qtyBtnClass}">+</button>
                <button data-cart-remove="${idx}" class="text-red-400 hover:text-red-600 ml-2 text-xs font-bold" title="Eliminar">✕</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="${footerClasses}">
          <div class="flex justify-between items-center font-bold text-base">
            <span>Total Comanda:</span>
            <span class="font-mono text-xl ${preset.id === 'estilo1' ? 'text-amber-300' : preset.id === 'estilo2' ? 'text-sky-300' : ''}">${formatCurrency(total)}</span>
          </div>
          <button id="open-checkout-modal-btn" ${cart.length === 0 ? 'disabled' : ''} class="${btnClass}">
            <span>Tramitar Pedido en Cocina</span>
            ${ICONS.arrow}
          </button>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // CHECKOUT MODAL (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderCheckoutModal() {
    const container = document.getElementById('checkout-modal-container');
    if (!container) return;
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    let modalBgClass = '';
    let headerTextClass = '';
    let inputThemeClass = '';
    let submitBtnClass = '';

    if (preset.id === 'estilo1') {
      modalBgClass = 'bg-[#121218] border border-amber-500/30 text-stone-100';
      headerTextClass = 'editorial-serif text-amber-200 font-bold';
      inputThemeClass = 'bg-[#0b0b0f] border-stone-700 text-stone-100 focus:ring-amber-400 focus:border-amber-400';
      submitBtnClass = 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-bold uppercase tracking-wider py-3.5 rounded-xl text-xs';
    } else if (preset.id === 'estilo2') {
      modalBgClass = 'bg-[#0a0f1e] border border-slate-700 text-slate-100 rounded-3xl';
      headerTextClass = 'font-sans text-white font-bold font-mono text-sky-400';
      inputThemeClass = 'bg-[#070a13] border-slate-700 text-white focus:ring-sky-500 focus:border-sky-500';
      submitBtnClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      modalBgClass = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] font-serif rounded-xl';
      headerTextClass = 'bistro-serif text-[#3d3228] font-bold';
      inputThemeClass = 'bg-white border-[#8c7b6c] text-[#2b2520] focus:ring-[#8c7b6c] focus:border-[#8c7b6c] font-sans';
      submitBtnClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3.5 rounded text-xs shadow';
    } else {
      modalBgClass = 'bg-white border border-zinc-200 text-zinc-900 rounded-none';
      headerTextClass = 'font-light tracking-widest uppercase text-zinc-900 text-xs';
      inputThemeClass = 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:ring-zinc-900 focus:border-zinc-900 rounded-none';
      submitBtnClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none text-xs';
    }

    container.innerHTML = `
      <div id="checkout-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border ${modalBgClass}">
          
          <div class="p-5 border-b ${preset.id === 'estilo1' ? 'border-stone-800' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex justify-between items-center flex-shrink-0">
            <h3 class="text-base ${headerTextClass}">Tramitar Comanda · ${preset.name}</h3>
            <button id="close-checkout-modal" class="opacity-70 hover:opacity-100 text-lg">✕</button>
          </div>

          <form id="checkout-form" class="p-5 space-y-4 text-xs overflow-y-auto flex-1">
            <div>
              <label class="block font-semibold uppercase mb-2">Modalidad de Servicio</label>
              <div class="grid grid-cols-3 gap-2">
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center ${preset.id === 'estilo1' ? 'border-amber-500 bg-amber-950/40 text-amber-200' : preset.id === 'estilo2' ? 'border-sky-500 bg-sky-950/40 text-sky-200' : 'border-blue-500 bg-blue-50 text-blue-900'}">
                  <input type="radio" name="order-type" value="mesa" checked class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🪑</span>
                  <span class="font-bold text-[11px]">En Mesa</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center opacity-80 hover:opacity-100 ${preset.id === 'estilo1' ? 'border-stone-800' : 'border-zinc-300'}">
                  <input type="radio" name="order-type" value="recogida" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛍️</span>
                  <span class="font-bold text-[11px]">Para Llevar</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center opacity-80 hover:opacity-100 ${preset.id === 'estilo1' ? 'border-stone-800' : 'border-zinc-300'}">
                  <input type="radio" name="order-type" value="delivery" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛵</span>
                  <span class="font-bold text-[11px]">Directo 0%</span>
                </label>
              </div>
            </div>

            <div id="table-input-block">
              <label class="block font-semibold uppercase mb-1">Número de Mesa</label>
              <input type="text" id="order-table" value="Mesa 4" required class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div>
              <label class="block font-semibold uppercase mb-1">Nombre del Cliente / Comensal</label>
              <input type="text" id="order-customer" value="Visita Comercial" required class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div>
              <label class="block font-semibold uppercase mb-1">Observaciones para Cocina</label>
              <input type="text" id="order-notes" placeholder="Ej: carne al punto, salsa aparte..." class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div class="p-4 rounded-xl border ${preset.id === 'estilo1' ? 'bg-[#0d0d12] border-stone-800' : preset.id === 'estilo2' ? 'bg-slate-950 border-slate-800' : 'bg-zinc-50 border-zinc-200'}">
              <span class="font-bold block mb-1">Resumen de Comanda</span>
              <p class="opacity-75">${cart.length} productos · Total: <span class="font-mono font-bold">${formatCurrency(total)}</span></p>
              <span class="text-[11px] text-emerald-400 block mt-1">✓ 0€ de comisión para el restaurante</span>
            </div>

            <button type="submit" class="w-full ${submitBtnClass} shadow flex items-center justify-center space-x-2">
              <span>Enviar a Pantalla de Cocina (KDS)</span>
              ${ICONS.arrow}
            </button>
          </form>

        </div>
      </div>
    `;

    // Interacción formulario checkout
    const form = document.getElementById('checkout-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = form.querySelector('input[name="order-type"]:checked').value;
        const table = document.getElementById('order-table').value;
        const customer = document.getElementById('order-customer').value;
        const notes = document.getElementById('order-notes').value;

        const newOrder = {
          id: `ORD-${Math.floor(100 + Math.random() * 900)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: type,
          tableNumber: type === 'mesa' ? table : (type === 'recogida' ? 'Take Away' : 'Domicilio'),
          customerName: customer,
          items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price, notes: notes })),
          total: total,
          status: 'pending',
          elapsedMinutes: 0
        };

        store.state.orders.unshift(newOrder);
        cart.forEach(item => {
          store.incrementDishSale(item.id, item.qty);
        });
        store.clearCart();
        container.innerHTML = '';
        this.showToast(`✓ Comanda ${newOrder.id} enviada al KDS de cocina`);
        store.setView('kds');
      });
    }
  }

  // =========================================================================
  // VISTA 2: COMANDERO KDS DE COCINA
  // =========================================================================
  renderKdsView(container, preset) {
    const orders = store.state.orders;
    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    container.innerHTML = `
      <div class="space-y-6 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-bold uppercase tracking-wider font-mono text-emerald-400">Sistema KDS en Vivo</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Comandero de Cocina · ${preset.name}</h2>
            <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Sincronización instantánea con los pedidos de la carta digital.</p>
          </div>

          <div class="flex items-center space-x-2">
            <button id="simulate-order-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow flex items-center space-x-1.5">
              <span>+ Generar Comanda Demo</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- COLUMNA 1: PENDIENTES -->
          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
            <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <h3 class="font-bold text-xs uppercase tracking-wider">Pendiente (${orders.filter(o => o.status === 'pending').length})</h3>
              </div>
            </div>
            <div class="space-y-3">
              ${this.renderKdsOrderCards(orders.filter(o => o.status === 'pending'), preset)}
            </div>
          </div>

          <!-- COLUMNA 2: EN PREPARACIÓN -->
          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
            <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                <h3 class="font-bold text-xs uppercase tracking-wider">En Marcha (${orders.filter(o => o.status === 'cooking').length})</h3>
              </div>
            </div>
            <div class="space-y-3">
              ${this.renderKdsOrderCards(orders.filter(o => o.status === 'cooking'), preset)}
            </div>
          </div>

          <!-- COLUMNA 3: LISTOS PARA SALA / SALIR -->
          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
            <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h3 class="font-bold text-xs uppercase tracking-wider">Pase Listo (${orders.filter(o => o.status === 'ready').length})</h3>
              </div>
            </div>
            <div class="space-y-3">
              ${this.renderKdsOrderCards(orders.filter(o => o.status === 'ready'), preset)}
            </div>
          </div>

        </div>
      </div>
    `;

    // Botón simular comanda
    const simBtn = document.getElementById('simulate-order-btn');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        const p = store.getPreset();
        const randDish = p.menu[Math.floor(Math.random() * p.menu.length)];
        const newOrder = {
          id: `ORD-${Math.floor(200 + Math.random() * 800)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "mesa",
          tableNumber: `Mesa ${Math.floor(1 + Math.random() * 8)}`,
          customerName: "Comensal Demo",
          items: [{ id: randDish.id, name: randDish.name, qty: 1, price: randDish.price }],
          total: randDish.price,
          status: "pending",
          elapsedMinutes: 1
        };
        store.state.orders.unshift(newOrder);
        store.incrementDishSale(randDish.id, 1);
        this.showToast(`✓ Nueva comanda demo generada: ${newOrder.id}`);
        this.renderKdsView(container, preset);
      });
    }

    // Botones de cambio de estado KDS
    container.querySelectorAll('[data-kds-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const orderId = btn.getAttribute('data-order-id');
        const nextStatus = btn.getAttribute('data-kds-action');
        const order = store.state.orders.find(o => o.id === orderId);
        if (order) {
          order.status = nextStatus;
          store.save();
          this.renderKdsView(container, preset);
        }
      });
    });
  }

  renderKdsOrderCards(orders, preset) {
    if (orders.length === 0) {
      return `<p class="text-xs text-stone-500 py-6 text-center">Sin comandas en este estado</p>`;
    }

    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    return orders.map(order => `
      <div class="${isDark ? 'bg-stone-950 border-stone-800' : 'bg-slate-50 border-slate-200'} p-3.5 rounded-xl border text-xs space-y-2.5 shadow-sm">
        <div class="flex justify-between items-start">
          <div>
            <span class="font-bold font-mono text-blue-400">${order.id}</span>
            <span class="font-bold block text-sm mt-0.5">${order.tableNumber} · ${order.customerName}</span>
          </div>
          <span class="text-[10px] font-mono text-stone-400">${order.timestamp}</span>
        </div>

        <div class="border-t ${isDark ? 'border-stone-800' : 'border-slate-200'} pt-2 space-y-1">
          ${order.items.map(item => `
            <div class="flex justify-between items-center text-xs">
              <span class="font-semibold">${item.qty}x ${item.name}</span>
            </div>
          `).join('')}
        </div>

        <div class="pt-2 border-t ${isDark ? 'border-stone-800' : 'border-slate-200'} flex items-center justify-between">
          <span class="font-mono font-bold">${formatCurrency(order.total)}</span>
          <div>
            ${order.status === 'pending' ? `
              <button data-order-id="${order.id}" data-kds-action="cooking" class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Iniciar Fuego
              </button>
            ` : order.status === 'cooking' ? `
              <button data-order-id="${order.id}" data-kds-action="ready" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Emplatar
              </button>
            ` : `
              <button data-order-id="${order.id}" data-kds-action="served" class="bg-stone-700 hover:bg-stone-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Servir a Sala
              </button>
            `}
          </div>
        </div>
      </div>
    `).join('');
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
              <label class="block text-xs font-semibold uppercase mb-2">Nombre Completo</label>
              <input type="text" id="res-name" placeholder="Ej: Ignacio Ramos" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>

            <div>
              <label class="block text-xs font-semibold uppercase mb-2">Teléfono de Contacto</label>
              <input type="tel" id="res-phone" placeholder="600 000 000" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
            </div>
          </div>

          <button type="submit" class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2">
            <span>Confirmar Reserva Directa</span>
            ${ICONS.arrow}
          </button>
        </form>
      </div>
    `;

    const form = document.getElementById('reservation-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('res-name').value;
        const date = document.getElementById('res-date').value;
        const turn = document.getElementById('res-turn').value;
        const guests = document.getElementById('res-guests').value;
        this.showToast(`✓ Reserva confirmada para ${name} (${guests}, ${date} en ${turn})`);
        form.reset();
      });
    }
  }

  // =========================================================================
  // VISTA 5: CALCULADORA DE RENTABILIDAD Y AHORRO
  // =========================================================================
  renderRoiView(container, preset) {
    let ordersSlider = 400;
    let ticketSlider = 26;
    const isDark = (preset.id === 'estilo1' || preset.id === 'estilo2');

    const calculateSavings = (orders, ticket) => {
      const grossMonthly = orders * ticket;
      const avgCommissionRate = 0.30;
      const commissionMonthly = grossMonthly * avgCommissionRate;
      const commissionAnnual = commissionMonthly * 12;
      return {
        grossMonthly,
        monthlySavings: commissionMonthly,
        annualSavings: commissionAnnual
      };
    };

    const renderCalculation = () => {
      const data = calculateSavings(ordersSlider, ticketSlider);
      const resContainer = document.getElementById('roi-results-container');
      if (!resContainer) return;

      resContainer.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="p-6 rounded-3xl bg-red-950/30 border border-red-800/50 text-stone-100">
            <span class="text-xs font-mono font-bold uppercase text-red-400 flex items-center space-x-1.5">
              <span>✕</span>
              <span>Con Plataformas de Agregación (30% Comisión)</span>
            </span>
            <h3 class="text-xl font-bold text-red-200 mt-4">Comisiones que asume el restaurante</h3>
            <div class="mt-6 space-y-3 text-xs text-stone-300">
              <div class="flex justify-between pb-2 border-b border-red-900/60">
                <span>Comisión media mensual:</span>
                <span class="font-mono font-bold text-red-400">-${formatCurrency(data.monthlySavings)} / mes</span>
              </div>
              <div class="flex justify-between pb-2 border-b border-red-900/60">
                <span>Pérdida anual acumulada:</span>
                <span class="font-mono font-bold text-red-400">-${formatCurrency(data.annualSavings)} / año</span>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-700/60 text-stone-100 relative overflow-hidden">
            <div class="relative z-10">
              <span class="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center space-x-1.5">
                <span>✓</span>
                <span>Con Sistema Web Propio DevCorp GastroSuite</span>
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
  // SECCIÓN DE RESEÑAS DE GOOGLE (DIFERENCIADA SEGÚN EL ESTILO)
  // =========================================================================
  renderGoogleReviewsSection(preset) {
    if (preset.id === 'estilo1') {
      return `
        <section class="mt-16 pt-12 border-t border-stone-800 text-stone-100">
          <div class="max-w-3xl mx-auto text-center mb-10">
            <span class="text-xs font-mono text-amber-400 uppercase tracking-widest">Opiniones de Críticos y Comensales</span>
            <h3 class="editorial-serif text-3xl font-bold mt-1">Crítica Gastronómica & Reconocimiento</h3>
            <div class="flex items-center justify-center space-x-2 mt-3 text-amber-400 text-sm font-mono">
              <span>★ ${preset.rating}</span>
              <span>·</span>
              <span>${preset.totalReviews} reseñas verificadas</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${preset.googleReviews.map(r => `
              <div class="editorial-card p-6 flex flex-col justify-between">
                <div>
                  <div class="flex items-center space-x-1 text-amber-400 mb-2">
                    ${Array(r.rating).fill(ICONS.star).join('')}
                  </div>
                  <p class="text-xs text-stone-300 italic editorial-serif leading-relaxed">"${r.comment}"</p>
                </div>
                <div class="mt-4 pt-4 border-t border-stone-800 flex justify-between items-center text-[11px] font-mono text-stone-400">
                  <span class="font-bold text-stone-200">${r.author}</span>
                  <span>${r.timeAgo}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-10 text-center">
            <button id="open-smart-review-btn" class="bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/40 text-xs font-medium px-5 py-2.5 rounded-xl transition-all shadow">
              ★ Dejar una Valoración en Google
            </button>
          </div>
        </section>
      `;
    }

    if (preset.id === 'estilo2') {
      return `
        <section class="mt-16 pt-10 border-t border-slate-800 text-slate-100">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">Feed de Clientes en Directo</span>
              <h3 class="text-2xl font-black mt-0.5">Qué dicen en Google Maps</h3>
            </div>
            <button id="open-smart-review-btn" class="bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow">
              Escribir Reseña
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${preset.googleReviews.map(r => `
              <div class="bento-card p-5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-xs mb-2">
                    <span class="font-bold text-white">${r.author}</span>
                    <span class="text-sky-400 font-mono font-bold">★ 5.0</span>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed">${r.comment}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex justify-between">
                  <span>${r.badge}</span>
                  <span>${r.timeAgo}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    if (preset.id === 'estilo3') {
      return `
        <section class="mt-16 pt-10 border-t-2 border-[#8c7b6c] text-[#2b2520]">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <span class="text-xs font-serif uppercase tracking-widest text-[#7a6b5d]">Libro de Visitas del Mesón</span>
            <h3 class="bistro-serif text-2xl font-bold mt-1">Palabras de Vecinos y Amigos</h3>
            <p class="text-xs font-serif text-[#7a6b5d] mt-1">${preset.totalReviews} opiniones con una puntuación media de ${preset.rating} sobre 5</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${preset.googleReviews.map(r => `
              <div class="bistro-card p-5 flex flex-col justify-between">
                <p class="text-xs font-serif italic text-[#594d40] leading-relaxed">"${r.comment}"</p>
                <div class="mt-4 pt-3 border-t border-[#dfd7cc] text-[11px] font-serif text-[#7a6b5d]">
                  <span class="font-bold text-[#2b2520] block">${r.author}</span>
                  <span>${r.badge}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-8 text-center">
            <button id="open-smart-review-btn" class="bg-[#3d3228] hover:bg-[#231d17] text-[#f6f3eb] font-serif text-xs font-bold px-4 py-2 rounded shadow">
              Añadir Nota al Libro de Visitas
            </button>
          </div>
        </section>
      `;
    }

    return `
      <section class="mt-16 pt-12 border-t border-zinc-200 text-zinc-900">
        <div class="max-w-2xl mb-8">
          <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">Comunidad</span>
          <h3 class="text-xl font-medium mt-1">Experiencias en Atelier</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${preset.googleReviews.map(r => `
            <div class="minimal-card p-5 flex flex-col justify-between">
              <p class="text-xs text-zinc-600 font-light leading-relaxed">"${r.comment}"</p>
              <div class="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span class="font-medium text-zinc-800">${r.author}</span>
                <span>${r.timeAgo}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-8">
          <button id="open-smart-review-btn" class="text-xs font-mono text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-zinc-600">
            Compartir experiencia en Google →
          </button>
        </div>
      </section>
    `;
  }

  // =========================================================================
  // MODAL DE RESEÑA INTELIGENTE (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderSmartReviewModal(preset) {
    const container = document.getElementById('review-modal-container');
    if (!container) return;

    let modalBgClass = '';
    let btnClass = '';
    if (preset.id === 'estilo1') {
      modalBgClass = 'bg-[#121218] border border-amber-500/30 text-stone-100';
      btnClass = 'bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-bold uppercase tracking-wider py-3 rounded-xl text-xs';
    } else if (preset.id === 'estilo2') {
      modalBgClass = 'bg-[#0a0f1e] border border-slate-700 text-slate-100 rounded-3xl';
      btnClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-xl text-xs shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      modalBgClass = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] font-serif rounded-xl';
      btnClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3 rounded text-xs shadow';
    } else {
      modalBgClass = 'bg-white border border-zinc-200 text-zinc-900 rounded-none';
      btnClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3 rounded-none text-xs';
    }

    container.innerHTML = `
      <div id="review-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate max-w-md w-full p-6 shadow-2xl border ${modalBgClass} space-y-5">
          <div class="flex justify-between items-center">
            <h3 class="font-bold text-sm sm:text-base">Valorar en Google Maps</h3>
            <button id="close-review-modal" class="opacity-70 hover:opacity-100 text-lg">✕</button>
          </div>

          <p class="text-xs opacity-80 leading-relaxed">
            Tu opinión ayuda a posicionar a <strong>${preset.name}</strong> en los primeros resultados locales de búsqueda de Madrid.
          </p>

          <div class="flex justify-center space-x-2 text-2xl py-2">
            <span class="cursor-pointer hover:scale-125 transition-transform">⭐</span>
            <span class="cursor-pointer hover:scale-125 transition-transform">⭐</span>
            <span class="cursor-pointer hover:scale-125 transition-transform">⭐</span>
            <span class="cursor-pointer hover:scale-125 transition-transform">⭐</span>
            <span class="cursor-pointer hover:scale-125 transition-transform">⭐</span>
          </div>

          <a href="${preset.googleMapsUrl}" target="_blank" class="w-full ${btnClass} flex items-center justify-center space-x-2">
            <span>Publicar en Google Maps</span>
            ${ICONS.external}
          </a>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // FOOTER INDIVIDUALIZADO PARA CADA ESTILO
  // =========================================================================
  renderFooterForStyle(preset) {
    if (preset.id === 'estilo1') {
      return `
        <footer class="bg-[#0b0b0d] border-t border-stone-800 text-stone-400 text-xs py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span class="editorial-serif font-bold text-stone-100 text-base block">${preset.name}</span>
              <p class="mt-2 text-stone-400 leading-relaxed">${preset.tagline}</p>
              <span class="mt-4 inline-block font-mono text-[11px] text-amber-400">Cocina dirigida por ${preset.chefName}</span>
            </div>
            <div>
              <span class="font-mono text-amber-300 uppercase tracking-widest text-[11px] block mb-2">Servicio & Sala</span>
              <p>${preset.serviceHours}</p>
              <p class="mt-1">${preset.address}</p>
              <p class="mt-1 font-mono text-stone-300">Reservas: ${preset.phone}</p>
            </div>
            <div>
              <span class="font-mono text-amber-300 uppercase tracking-widest text-[11px] block mb-2">Desarrollado por DevCorp</span>
              <p class="leading-relaxed">Solución web integral a medida para restaurantes y alta cocina sin intermediarios.</p>
              <a href="https://devcorpsolutions.com" target="_blank" class="text-amber-400 hover:underline mt-2 inline-block font-mono">devcorpsolutions.com →</a>
            </div>
          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo2') {
      return `
        <footer class="bg-[#070a13] border-t border-slate-800 text-slate-400 text-xs py-8">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              <span class="font-bold text-white">${preset.name}</span>
              <span class="text-slate-600">·</span>
              <span class="text-sky-400 font-mono">Canal Directo 0% Comisiones</span>
            </div>
            <div class="flex items-center space-x-4 text-slate-400 font-mono text-[11px]">
              <span>${preset.address}</span>
              <span>·</span>
              <span>${preset.phone}</span>
            </div>
            <div>
              <a href="https://devcorpsolutions.com" target="_blank" class="text-sky-400 hover:text-sky-300 font-mono text-xs">
                Tecnología GastroSuite by DevCorp Solutions
              </a>
            </div>
          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo3') {
      return `
        <footer class="bg-[#eee7db] border-t-2 border-[#8c7b6c] text-[#594d40] text-xs font-serif py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h4 class="bistro-serif text-lg font-bold text-[#2b2520]">${preset.name}</h4>
            <p class="italic text-xs">${preset.tagline}</p>
            <div class="flex flex-wrap justify-center gap-4 text-xs font-serif text-[#7a6b5d] pt-2">
              <span>${preset.address}</span>
              <span>·</span>
              <span>Teléfono de Encargos: ${preset.phone}</span>
              <span>·</span>
              <span>${preset.serviceNote}</span>
            </div>
            <p class="pt-4 text-[11px] text-[#7a6b5d] border-t border-[#dfd7cc] max-w-md mx-auto font-sans">
              Página oficial sin comisiones desarrollada por <a href="https://devcorpsolutions.com" target="_blank" class="text-[#2b2520] font-bold underline">DevCorp Solutions</a>.
            </p>
          </div>
        </footer>
      `;
    }

    return `
      <footer class="bg-white border-t border-zinc-200 text-zinc-500 text-xs py-12 font-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span class="text-zinc-900 uppercase tracking-widest text-xs font-medium">${preset.name}</span>
            <p class="mt-1 text-zinc-400">${preset.address} · ${preset.openingHours}</p>
          </div>
          <div class="flex items-center space-x-6 text-xs font-mono text-zinc-400">
            <a href="https://devcorpsolutions.com" target="_blank" class="hover:text-zinc-900 transition-colors">DevCorp Solutions</a>
            <span>·</span>
            <span>Atelier Digital</span>
          </div>
        </div>
      </footer>
    `;
  }
}

// Inicialización de la SPA
document.addEventListener('DOMContentLoaded', () => {
  new GastroApp();
});
