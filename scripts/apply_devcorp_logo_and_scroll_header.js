const fs = require('fs');

// 1. ADD CSS RULES TO assets/css/style.css
const cssAddition = `
/* =========================================================================
   CABECERA DINÁMICA ESTILO 1 (OSCURO EN TOP HERO, CLARO EN SCROLL)
   ========================================================================= */
#main-header {
  transition: background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Modo Claro (Cuando se hace scroll o en vistas de gestión) */
#main-header.is-light-scrolled {
  background-color: rgba(252, 251, 248, 0.94) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(196, 196, 185, 0.35) !important;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04) !important;
}
#main-header.is-light-scrolled .header-brand-title {
  color: #1b1c1b !important;
}
#main-header.is-light-scrolled .header-brand-sub {
  color: #9c382c !important;
}
#main-header.is-light-scrolled .header-divider {
  background-color: rgba(196, 196, 185, 0.5) !important;
}
#main-header.is-light-scrolled .header-nav-capsule {
  background-color: #f1efea !important;
  border-color: rgba(196, 196, 185, 0.4) !important;
}
#main-header.is-light-scrolled .header-nav-btn {
  color: #444846 !important;
}
#main-header.is-light-scrolled .header-nav-btn:hover {
  color: #1b1c1b !important;
}
#main-header.is-light-scrolled .header-nav-btn.active-view {
  background-color: #e5e2dc !important;
  color: #1b1c1b !important;
}
#main-header.is-light-scrolled #style-select {
  background-color: #ffffff !important;
  color: #1c1917 !important;
  border-color: rgba(139, 30, 30, 0.4) !important;
}
#main-header.is-light-scrolled #open-cart-btn {
  background-color: #ffffff !important;
  color: #9c382c !important;
  border-color: rgba(196, 196, 185, 0.5) !important;
}
#main-header.is-light-scrolled #mobile-nav-bar {
  background-color: #f1efea !important;
  border-top-color: rgba(196, 196, 185, 0.4) !important;
}
#main-header.is-light-scrolled #mobile-nav-bar button {
  color: #444846 !important;
}
#main-header.is-light-scrolled #mobile-nav-bar button.active-view {
  background-color: #e5e2dc !important;
  color: #1b1c1b !important;
}

/* Modo Oscuro (Cuando está arriba del todo frente a las brasas) */
#main-header.is-transparent-dark {
  background-color: #14100E !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: none !important;
}
#main-header.is-transparent-dark .header-brand-title {
  color: #ffffff !important;
}
#main-header.is-transparent-dark .header-brand-sub {
  color: #e52d27 !important;
}
#main-header.is-transparent-dark .header-divider {
  background-color: rgba(255, 255, 255, 0.18) !important;
}
#main-header.is-transparent-dark .header-nav-capsule {
  background-color: rgba(255, 255, 255, 0.08) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}
#main-header.is-transparent-dark .header-nav-btn {
  color: rgba(255, 255, 255, 0.72) !important;
}
#main-header.is-transparent-dark .header-nav-btn:hover {
  color: #ffffff !important;
}
#main-header.is-transparent-dark .header-nav-btn.active-view {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: #ffffff !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}
#main-header.is-transparent-dark #style-select {
  background-color: #1f1916 !important;
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.22) !important;
}
#main-header.is-transparent-dark #style-select option {
  background-color: #14100E !important;
  color: #ffffff !important;
}
#main-header.is-transparent-dark #open-cart-btn {
  background-color: rgba(255, 255, 255, 0.09) !important;
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}
#main-header.is-transparent-dark #open-cart-btn:hover {
  background-color: rgba(255, 255, 255, 0.16) !important;
}
#main-header.is-transparent-dark #mobile-nav-bar {
  background-color: #14100E !important;
  border-top-color: rgba(255, 255, 255, 0.1) !important;
}
#main-header.is-transparent-dark #mobile-nav-bar button {
  color: rgba(255, 255, 255, 0.72) !important;
}
#main-header.is-transparent-dark #mobile-nav-bar button.active-view {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: #ffffff !important;
}
`;

let cssContent = fs.readFileSync('assets/css/style.css', 'utf8');
if (!cssContent.includes('CABECERA DINÁMICA ESTILO 1')) {
  cssContent += cssAddition;
  fs.writeFileSync('assets/css/style.css', cssContent, 'utf8');
  console.log('Added dynamic header styles to assets/css/style.css');
} else {
  console.log('dynamic header styles already in style.css');
}

// 2. UPDATE assets/js/app.js
let appContent = fs.readFileSync('assets/js/app.js', 'utf8');

// A. In setupGlobalEvents, register the scroll listener
const oldKeydownListener = `  setupGlobalEvents() {
    // Tecla Escape para cerrar modales y lightbox
    document.addEventListener('keydown', (e) => {`;

const newKeydownListener = `  setupGlobalEvents() {
    // Listener de scroll para cambiar el color de la cabecera en Estilo 1 (oscuro arriba, claro al scroll)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.updateHeaderScroll();
      }, { passive: true });
    }

    // Tecla Escape para cerrar modales y lightbox
    document.addEventListener('keydown', (e) => {`;

if (appContent.includes(oldKeydownListener)) {
  appContent = appContent.replace(oldKeydownListener, newKeydownListener);
  console.log('Added scroll event listener in setupGlobalEvents');
}

// B. Add updateHeaderScroll method to GastroApp
const updateHeaderScrollMethod = `  updateHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const preset = store.getPreset();
    if (preset.id !== 'estilo1') return;

    const isMenu = (store.state.currentView === 'menu');
    const scrollY = (typeof window !== 'undefined') ? (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0) : 0;
    const isAtTop = isMenu && scrollY <= 45;

    if (isAtTop) {
      header.classList.add('is-transparent-dark');
      header.classList.remove('is-light-scrolled');
    } else {
      header.classList.remove('is-transparent-dark');
      header.classList.add('is-light-scrolled');
    }
  }

  render() {`;

const oldRenderStart = `  render() {`;
if (appContent.includes(oldRenderStart)) {
  appContent = appContent.replace(oldRenderStart, updateHeaderScrollMethod);
  console.log('Added updateHeaderScroll method to GastroApp');
}

// C. In render(), invoke updateHeaderScroll right after setting innerHTML
const oldRenderCallView = `    // Renderizar la vista activa
    const content = document.getElementById('view-content');`;

const newRenderCallView = `    // Actualizar cabecera con el estado de scroll actual
    this.updateHeaderScroll();

    // Renderizar la vista activa
    const content = document.getElementById('view-content');`;

if (appContent.includes(oldRenderCallView)) {
  appContent = appContent.replace(oldRenderCallView, newRenderCallView);
  console.log('Invoked updateHeaderScroll inside render()');
}

// D. Update renderHeaderForStyle for Estilo 1 to include DevCorp Logo and dynamic class
const oldEstilo1HeaderPattern = /    \/\/ --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA[\s\S]*?(?=\s*\/\/ --- CABECERA ESTILO 2:)/;

const newEstilo1HeaderCode = `    // --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      const scrollY = (typeof window !== 'undefined') ? (window.scrollY || (document.documentElement && document.documentElement.scrollTop) || 0) : 0;
      const isAtTop = (currentView === 'menu' && scrollY <= 45);

      return \`
        <header id="main-header" class="fixed top-0 w-full z-50 transition-all duration-300 \${isAtTop ? 'is-transparent-dark' : 'is-light-scrolled'}">
          <div class="h-20 max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
            
            <!-- Identidad: Logo DevCorp Oficial + Separador + Logotipo Vukata -->
            <div class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center group flex-shrink-0" title="DevCorp Solutions">
                <img src="assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow transition-transform group-hover:scale-105"/>
              </a>
              <div class="h-8 w-[1px] header-divider hidden sm:block"></div>
              <button data-view="menu" class="flex items-center gap-2.5 group text-decoration-none cursor-pointer bg-transparent border-0 text-left p-0">
                <span class="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">local_fire_department</span>
                <div class="flex flex-col">
                  <span class="font-headline-sm text-headline-sm tracking-tight leading-none font-semibold header-brand-title">VU<span class="text-[#E52D27]">KA</span>TA</span>
                  <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] uppercase mt-1 header-brand-sub">ASADOR · PARRILLA</span>
                </div>
              </button>
            </div>

            <!-- Navegación Central Stitch (Cápsula Segmentada con las Vistas del Sistema) -->
            <nav class="hidden md:flex items-center gap-1 header-nav-capsule px-2 py-1.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)] border">
              <button data-view="menu" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'menu' ? 'active-view font-semibold shadow-xs' : ''}">
                Carta
              </button>
              <button data-view="reservations" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'reservations' ? 'active-view font-semibold shadow-xs' : ''}">
                Reservas
              </button>
              <button data-view="kds" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer flex items-center gap-1.5 \${currentView === 'kds' ? 'active-view font-semibold shadow-xs' : ''}">
                <span>Cocina</span>
                \${kdsPending > 0 ? \`<span class="bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.2 rounded-full">\${kdsPending}</span>\` : ''}
              </button>
              <button data-view="metrics" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'metrics' ? 'active-view font-semibold shadow-xs' : ''}">
                Métricas
              </button>
              <button data-view="roi" class="header-nav-btn px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'roi' ? 'active-view font-semibold shadow-xs' : ''}">
                Rentabilidad
              </button>
            </nav>

            <!-- Acciones: Selector de Estilos, Botón Reservar y Carrito -->
            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              \${selectorHtml}

              <button data-view="reservations" class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(156,56,44,0.2)] cursor-pointer">
                <span class="material-symbols-outlined text-[18px]">restaurant</span>
                <span class="hidden sm:inline">Reservar mesa</span>
              </button>

              <button id="open-cart-btn" class="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-label-action text-label-action transition-colors shadow-sm cursor-pointer border" title="Ver comanda">
                <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span class="font-bold font-mono text-xs sm:text-sm">\${formatCurrency(store.getCartTotal())}</span>
                \${cartCount > 0 ? \`<span class="bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.5 rounded-full">\${cartCount}</span>\` : ''}
              </button>
            </div>

          </div>

          <!-- Barra táctil de vistas para móviles y tablets -->
          <div id="mobile-nav-bar" class="md:hidden border-t px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-label-action whitespace-nowrap">
            <button data-view="menu" class="px-3 py-1.5 rounded-full \${currentView === 'menu' ? 'active-view font-semibold shadow-xs' : ''}">Carta</button>
            <button data-view="reservations" class="px-3 py-1.5 rounded-full \${currentView === 'reservations' ? 'active-view font-semibold shadow-xs' : ''}">Reservas</button>
            <button data-view="kds" class="px-3 py-1.5 rounded-full \${currentView === 'kds' ? 'active-view font-semibold shadow-xs' : ''}">Cocina (\${kdsPending})</button>
            <button data-view="metrics" class="px-3 py-1.5 rounded-full \${currentView === 'metrics' ? 'active-view font-semibold shadow-xs' : ''}">Métricas</button>
            <button data-view="roi" class="px-3 py-1.5 rounded-full \${currentView === 'roi' ? 'active-view font-semibold shadow-xs' : ''}">Rentabilidad</button>
          </div>
        </header>
      \`;
    }`;

if (oldEstilo1HeaderPattern.test(appContent)) {
  appContent = appContent.replace(oldEstilo1HeaderPattern, newEstilo1HeaderCode);
  console.log('Replaced estilo1 header with DevCorp logo and scroll classes');
} else {
  console.error('Could not match oldEstilo1HeaderPattern');
  process.exit(1);
}

fs.writeFileSync('assets/js/app.js', appContent, 'utf8');
console.log('Successfully updated assets/js/app.js!');
