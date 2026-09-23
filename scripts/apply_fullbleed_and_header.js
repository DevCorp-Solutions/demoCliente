const fs = require('fs');

let content = fs.readFileSync('assets/js/app.js', 'utf8');

// 1. UPDATE renderVukataAllergenLegend TO RENDER CLEANLY ON A WHITE FULL-WIDTH SECTION
const oldAllergenLegend = `function renderVukataAllergenLegend() {
  const allergens = Object.values(VUKATA_ALLERGENS);
  return \`
    <div class="mt-14 border-t-2 border-[#8B1E1E]/20 bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
      <div class="text-center max-w-2xl mx-auto mb-8">
        <div class="inline-flex items-center space-x-2 text-[#8B1E1E] mb-1">
          <span class="text-sm font-bold tracking-widest uppercase">Directiva Oficial Europea</span>
        </div>
        <h4 class="vukata-font-title text-base sm:text-xl text-[#8B1E1E]">Información de Alérgenos de Nuestra Carta</h4>
        <p class="text-xs text-stone-600 mt-1">
          Reglamento (UE) Nº 1169/2011 sobre alérgenos e ingredientes alimentarios.
        </p>
      </div>

      <!-- Cuadrícula de 14 alérgenos idéntica a la portada de la carta física de Vukata -->
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 justify-items-center">
        \${allergens.map(a => \`
          <button data-allergen="\${a.id}" class="flex flex-col items-center text-center group cursor-pointer p-2.5 rounded-xl hover:bg-stone-100 transition-all w-full border border-stone-100 hover:border-stone-300" title="Filtrar platos con \${a.name}">
            <span class="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110 flex-shrink-0" style="background-color: \${a.color};">
              <span class="w-5 h-5 flex items-center justify-center">\${a.svg}</span>
            </span>
            <span class="text-[10px] sm:text-[11px] font-bold text-stone-700 uppercase tracking-tight mt-2 leading-tight group-hover:text-[#8B1E1E]">
              \${a.name}
            </span>
          </button>
        \`).join('')}
      </div>

      <div class="mt-8 pt-6 border-t border-stone-200 text-center space-y-1.5 text-xs text-stone-600">
        <p class="font-bold text-stone-800 text-sm">Todos los precios de nuestra carta incluyen el Iva. Los platos se mantendrán hasta fin de existencias.</p>
        <p class="text-[#8B1E1E] font-medium">Consulte siempre a nuestro personal sobre los alérgenos y opciones para intolerancias.</p>
      </div>
    </div>
  \`;
}`;

const newAllergenLegend = `function renderVukataAllergenLegend(activeAllergens = []) {
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
}`;

if (content.includes(oldAllergenLegend)) {
  content = content.replace(oldAllergenLegend, newAllergenLegend);
  console.log('1. Replaced renderVukataAllergenLegend');
} else {
  console.warn('Could not find oldAllergenLegend');
}

// 2. UPDATE renderHeaderForStyle FOR ESTILO 1:
// Remove reservas, takeaway, opiniones, donde estamos from top menu
// Restore Carta, Reservas, Cocina KDS, Métricas, Rentabilidad with the Stitch segmented pill style
const oldEstilo1HeaderStart = `    // --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      return \`
        <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div class="h-20 max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
            
            <!-- Identidad: Logotipo Vukata Oficial de Stitch (Sin logo DevCorp apiñado) -->
            <a href="#el-asador" class="flex items-center gap-3 group text-decoration-none cursor-pointer">
              <span class="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">local_fire_department</span>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none font-semibold">VU<span class="text-[#E52D27]">KA</span>TA</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] text-primary uppercase mt-1">ASADOR · PARRILLA</span>
              </div>
            </a>

            <!-- Navegación Central Stitch (Cápsula Segmentada) -->
            <nav class="hidden xl:flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)] border border-outline-variant/30">
              <a class="px-3.5 py-2 font-label-action text-label-action transition-colors bg-secondary-container text-on-surface font-semibold rounded-full cursor-pointer" href="#el-asador">El Asador</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#especialidades">Especialidades</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#carta-section">Carta &amp; Menú</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#reservas-direct">Reservas</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#reservas-direct">Take away</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#opiniones">Opiniones</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#donde-estamos">Dónde estamos</a>
            </nav>

            <!-- Acciones: Selector de Estilos, Botón Reservar y Carrito -->
            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              \${selectorHtml}

              <a href="#reservas-direct" class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(156,56,44,0.2)] cursor-pointer">
                <span class="material-symbols-outlined text-[18px]">restaurant</span>
                <span class="hidden sm:inline">Reservar mesa</span>
              </a>

              <button id="open-cart-btn" class="relative inline-flex items-center gap-2 bg-white border border-outline-variant/40 hover:bg-surface-container text-primary px-3.5 py-2 rounded-full font-label-action text-label-action transition-colors shadow-sm cursor-pointer" title="Ver comanda">
                <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span class="font-bold font-mono text-xs sm:text-sm">\${formatCurrency(store.getCartTotal())}</span>
                \${cartCount > 0 ? \`<span class="bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.5 rounded-full">\${cartCount}</span>\` : ''}
              </button>
            </div>

          </div>

          <!-- Barra táctil de secciones para móviles y tablets -->
          <div class="xl:hidden bg-surface-container-low border-t border-outline-variant/30 px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-label-action whitespace-nowrap">
            <a href="#el-asador" class="px-3 py-1 rounded-full bg-secondary-container text-on-surface font-semibold">El Asador</a>
            <a href="#especialidades" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Especialidades</a>
            <a href="#carta-section" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Carta</a>
            <a href="#reservas-direct" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Reservas</a>
            <a href="#opiniones" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Opiniones</a>
            <a href="#donde-estamos" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Ubicación</a>
          </div>
        </header>
      \`;
    }`;

const newEstilo1Header = `    // --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      return \`
        <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-outline-variant/20">
          <div class="h-20 max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
            
            <!-- Identidad: Logotipo Vukata Oficial de Stitch -->
            <button data-view="menu" class="flex items-center gap-3 group text-decoration-none cursor-pointer bg-transparent border-0 text-left p-0">
              <span class="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">local_fire_department</span>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none font-semibold">VU<span class="text-[#E52D27]">KA</span>TA</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] text-primary uppercase mt-1">ASADOR · PARRILLA</span>
              </div>
            </button>

            <!-- Navegación Central Stitch (Cápsula Segmentada con las Vistas del Sistema) -->
            <nav class="hidden md:flex items-center gap-1 bg-surface-container-low px-2 py-1.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)] border border-outline-variant/30">
              <button data-view="menu" class="px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'menu' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
                Carta
              </button>
              <button data-view="reservations" class="px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'reservations' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
                Reservas
              </button>
              <button data-view="kds" class="px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer flex items-center gap-1.5 \${currentView === 'kds' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
                <span>Cocina</span>
                \${kdsPending > 0 ? \`<span class="bg-primary text-on-primary text-[10px] font-bold px-1.5 py-0.2 rounded-full">\${kdsPending}</span>\` : ''}
              </button>
              <button data-view="metrics" class="px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'metrics' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
                Métricas
              </button>
              <button data-view="roi" class="px-3.5 py-2 font-label-action text-label-action transition-colors rounded-full cursor-pointer \${currentView === 'roi' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">
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

              <button id="open-cart-btn" class="relative inline-flex items-center gap-2 bg-white border border-outline-variant/40 hover:bg-surface-container text-primary px-3.5 py-2 rounded-full font-label-action text-label-action transition-colors shadow-sm cursor-pointer" title="Ver comanda">
                <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span class="font-bold font-mono text-xs sm:text-sm">\${formatCurrency(store.getCartTotal())}</span>
                \${cartCount > 0 ? \`<span class="bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.5 rounded-full">\${cartCount}</span>\` : ''}
              </button>
            </div>

          </div>

          <!-- Barra táctil de vistas para móviles y tablets -->
          <div class="md:hidden bg-surface-container-low border-t border-outline-variant/30 px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-label-action whitespace-nowrap">
            <button data-view="menu" class="px-3 py-1.5 rounded-full \${currentView === 'menu' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">Carta</button>
            <button data-view="reservations" class="px-3 py-1.5 rounded-full \${currentView === 'reservations' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">Reservas</button>
            <button data-view="kds" class="px-3 py-1.5 rounded-full \${currentView === 'kds' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">Cocina (\${kdsPending})</button>
            <button data-view="metrics" class="px-3 py-1.5 rounded-full \${currentView === 'metrics' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">Métricas</button>
            <button data-view="roi" class="px-3 py-1.5 rounded-full \${currentView === 'roi' ? 'bg-secondary-container text-on-surface font-semibold shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}">Rentabilidad</button>
          </div>
        </header>
      \`;
    }`;

if (content.includes(oldEstilo1HeaderStart)) {
  content = content.replace(oldEstilo1HeaderStart, newEstilo1Header);
  console.log('2. Replaced estilo1 header with restored view tabs');
} else {
  console.warn('Could not find oldEstilo1HeaderStart');
}

// 3. UPDATE main container view-content for Estilo 1 to support non-menu views cleanly
const oldMainViewContent = `<main class="w-full pt-20 bg-surface flex-1">
          <div id="view-content" class="flex flex-col w-full"></div>
        </main>`;

const newMainViewContent = `<main class="w-full pt-20 bg-surface flex-1">
          <div id="view-content" class="flex flex-col w-full \${currentView !== 'menu' ? 'max-w-[1360px] mx-auto px-6 lg:px-10 py-10' : ''}"></div>
        </main>`;

if (content.includes(oldMainViewContent)) {
  content = content.replace(oldMainViewContent, newMainViewContent);
  console.log('3. Updated main view-content centering for non-menu views in Estilo 1');
} else {
  console.warn('Could not find oldMainViewContent');
}

// 4. UPDATE SECTIONS IN renderEstilo1Layout:
// Make Reservas section full-width bg-[#14100E] with centered content (matching opiniones style)
// Make Alérgenos section full-width white bg with centered content
const oldReservasAndAllergenSections = `      <!-- TAKE AWAY & RESERVAS COMPONENT (Direct Action Block acotado a 1360px) -->
      <section class="max-w-[1360px] mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full" id="reservas-direct">
        <div class="bg-[#14100E] text-surface rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-2xl">
          <!-- Ambient Glow Decorator -->
          <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div class="lg:col-span-7 space-y-6">
              <div class="flex items-center gap-2 text-primary-fixed">
                <span class="material-symbols-outlined text-[22px]">calendar_today</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow uppercase tracking-widest">RESERVA INMEDIATA SIN ESPERAS</span>
              </div>
              <h2 class="font-display-hero text-headline-lg lg:text-display-hero text-surface-bright leading-tight">
                Reserve su mesa frente a las brasas de Aluche
              </h2>
              <p class="font-body-lg text-body-lg text-surface-dim max-w-xl">
                Asegure su sitio para disfrutar de nuestras carnes con el punto exacto de asado. Atendemos peticiones de mesas familiares y celebraciones.
              </p>
              <div class="flex flex-wrap items-center gap-6 pt-2 text-surface-dim">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-tertiary-fixed-dim">timer</span>
                  <span class="font-body-md text-body-md">Comidas: 12:00h - 17:00h</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-tertiary-fixed-dim">dinner_dining</span>
                  <span class="font-body-md text-body-md">Cenas: 19:30h - 00:00h</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-tertiary-fixed-dim">call</span>
                  <a href="tel:+34915098576" class="font-body-md text-body-md hover:underline">+34 915 09 85 76</a>
                </div>
              </div>
            </div>

            <!-- Quick Interactive Booking Panel -->
            <div class="lg:col-span-5 bg-surface-container-lowest text-on-surface p-8 rounded-2xl shadow-xl">
              <h3 class="font-headline-sm text-headline-sm font-semibold mb-4 text-on-surface">Confirmar Comensales</h3>
              <form id="reservas-direct-form" class="space-y-4">
                <div>
                  <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Nombre Completo</label>
                  <input id="direct-res-name" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ej. Carlos Martínez" required="" type="text"/>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Teléfono</label>
                    <input id="direct-res-phone" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" placeholder="600 000 000" required="" type="tel"/>
                  </div>
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Personas</label>
                    <select id="direct-res-guests" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="2 Personas">2 Comensales</option>
                      <option value="3 Personas">3 Comensales</option>
                      <option value="4 Personas" selected>4 Comensales</option>
                      <option value="5+ Personas">5+ Comensales</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Fecha</label>
                    <input id="direct-res-date" class="w-full bg-surface-container-low px-3 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" required="" type="date"/>
                  </div>
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Turno</label>
                    <select id="direct-res-shift" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="Comida (14:00h)">14:00 (Comida)</option>
                      <option value="Comida (15:00h)">15:00 (Comida)</option>
                      <option value="Cena (21:00h)">21:00 (Cena)</option>
                      <option value="Cena (22:00h)">22:00 (Cena)</option>
                    </select>
                  </div>
                </div>
                <button class="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-xl font-label-action text-label-action transition-colors shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Confirmar Reserva</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN OFICIAL DE ALÉRGENOS AL PIE (Con ancho acotado idéntico a 1360px) -->
      <section class="max-w-[1360px] mx-auto px-6 lg:px-10 pb-16 w-full">
        \${renderVukataAllergenLegend()}
      </section>`;

const newReservasAndAllergenSections = `      <!-- SECCIÓN DE RESERVAS FRENTE A LAS BRASAS (Fondo alargado de extremo a extremo, estilo idéntico a opiniones) -->
      <section class="w-full bg-[#14100E] text-surface py-20 lg:py-24 relative overflow-hidden border-t border-[#2a221e]" id="reservas-direct">
        <!-- Ambient Glow Decorator a lo ancho -->
        <div class="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div class="lg:col-span-7 space-y-6">
              <div class="flex items-center gap-2 text-primary-fixed">
                <span class="material-symbols-outlined text-[22px]">calendar_today</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow uppercase tracking-widest">RESERVA INMEDIATA SIN ESPERAS</span>
              </div>
              <h2 class="font-display-hero text-headline-lg lg:text-display-hero text-surface-bright leading-tight">
                Reserve su mesa frente a las brasas de Aluche
              </h2>
              <p class="font-body-lg text-body-lg text-surface-dim max-w-xl">
                Asegure su sitio para disfrutar de nuestras carnes con el punto exacto de asado. Atendemos peticiones de mesas familiares y celebraciones.
              </p>
              <div class="flex flex-wrap items-center gap-6 pt-2 text-surface-dim">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-tertiary-fixed-dim">timer</span>
                  <span class="font-body-md text-body-md">Comidas: 12:00h - 17:00h</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-tertiary-fixed-dim">dinner_dining</span>
                  <span class="font-body-md text-body-md">Cenas: 19:30h - 00:00h</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-tertiary-fixed-dim">call</span>
                  <a href="tel:+34915098576" class="font-body-md text-body-md hover:underline">+34 915 09 85 76</a>
                </div>
              </div>
            </div>

            <!-- Panel Interactivo de Reserva Directa -->
            <div class="lg:col-span-5 bg-surface-container-lowest text-on-surface p-8 lg:p-10 rounded-3xl shadow-2xl border border-outline-variant/20">
              <h3 class="font-headline-sm text-headline-sm font-semibold mb-4 text-on-surface">Confirmar Comensales</h3>
              <form id="reservas-direct-form" class="space-y-4">
                <div>
                  <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Nombre Completo</label>
                  <input id="direct-res-name" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30" placeholder="Ej. Carlos Martínez" required="" type="text"/>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Teléfono</label>
                    <input id="direct-res-phone" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30" placeholder="600 000 000" required="" type="tel"/>
                  </div>
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Personas</label>
                    <select id="direct-res-guests" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30">
                      <option value="2 Personas">2 Comensales</option>
                      <option value="3 Personas">3 Comensales</option>
                      <option value="4 Personas" selected>4 Comensales</option>
                      <option value="5+ Personas">5+ Comensales</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Fecha</label>
                    <input id="direct-res-date" class="w-full bg-surface-container-low px-3 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30" required="" type="date"/>
                  </div>
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-secondary uppercase block mb-1">Turno</label>
                    <select id="direct-res-shift" class="w-full bg-surface-container-low px-4 py-3 rounded-xl font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30">
                      <option value="Comida (14:00h)">14:00 (Comida)</option>
                      <option value="Comida (15:00h)">15:00 (Comida)</option>
                      <option value="Cena (21:00h)">21:00 (Cena)</option>
                      <option value="Cena (22:00h)">22:00 (Cena)</option>
                    </select>
                  </div>
                </div>
                <button class="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 rounded-xl font-label-action text-label-action transition-colors shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Confirmar Reserva</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN OFICIAL DE ALÉRGENOS AL PIE (Fondo blanco alargado full-width con contenido centrado a 1360px) -->
      <section class="w-full bg-white text-stone-900 py-16 lg:py-24 border-t border-outline-variant/20 shadow-[0_-1px_6px_rgba(0,0,0,0.02)]" id="alergenos-info">
        <div class="max-w-[1360px] mx-auto px-6 lg:px-10">
          \${renderVukataAllergenLegend(activeAllergens)}
        </div>
      </section>`;

if (content.includes(oldReservasAndAllergenSections)) {
  content = content.replace(oldReservasAndAllergenSections, newReservasAndAllergenSections);
  console.log('4. Replaced Reservas and Alérgenos sections with full-bleed continuous layouts');
} else {
  console.warn('Could not find oldReservasAndAllergenSections');
}

fs.writeFileSync('assets/js/app.js', content, 'utf8');
console.log('Successfully updated assets/js/app.js with all user requested adjustments!');
