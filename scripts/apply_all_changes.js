const fs = require('fs');

let content = fs.readFileSync('assets/js/app.js', 'utf8');

// 1. ADD 5 DISHES TO estilo1.menu SO IT HAS EXACTLY 46 DISHES
// We find where `id: "e1_tes"` ends before `],\n\n    googleReviews:`
const endOfMenuMarker = `        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        allergens: []
      }
    ],`;

const newDishesToAdd = `        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_matambre",
        name: "Matambre a la Brasa",
        category: "A la Brasa",
        price: 17.50,
        badge: "Típico Asador",
        description: "Fina capa de carne vacuna entre el cuero y el costillar, tiernizada y asada a fuego lento con limón fresco y chimichurri casero.",
        details: "Asado a la brasa viva de encina",
        ingredients: "Corte vacuno seleccionado, sal marina, limón fresco, ajo y hierbas campestres.",
        prepTime: "15 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_mollejas",
        name: "Mollejas de Ternera al Limón",
        category: "A la Brasa",
        price: 16.00,
        badge: "Manjar de Brasas",
        description: "Mollejas de corazón crujientes por fuera y de textura suave y cremosa por dentro, doradas sobre la parrilla con zumo de limón.",
        details: "Doble cocción sobre parrilla",
        ingredients: "Molleja vacuna de corazón, limón natural, sal en escamas y pimienta negra.",
        prepTime: "12 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_ens_tomate",
        name: "Ensalada de Tomate Rosa y Cebolla Morada",
        category: "Ensaladas",
        price: 11.50,
        badge: "Huerta Seleccionada",
        description: "Tomate rosa madurado al sol con cebolla morada fina, lascas de sal Maldon y aceite de oliva virgen extra de primera prensa.",
        details: "Producto fresco de cercanía",
        ingredients: "Tomate rosa, cebolla morada, flor de sal y AOVE arbequina.",
        prepTime: "5 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_flan",
        name: "Flan Casero con Dulce de Leche",
        category: "Postres",
        price: 5.50,
        badge: "Receta de la Abuela",
        description: "Flan de huevo tradicional horneado al baño maría con caramelo tostado y copete generoso de dulce de leche artesano.",
        details: "100% Casero en nuestro obrador",
        ingredients: "Huevos camperos, leche entera, azúcar, vainilla natural y dulce de leche.",
        prepTime: "5 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
        allergens: ["huevos", "lacteos"]
      },
      {
        id: "e1_alfajor",
        name: "Alfajor Artesanal de Nuez y Dulce de Leche",
        category: "Postres",
        price: 4.00,
        badge: "Elaboración Propia",
        description: "Masa suave de mantequilla y maicena rellena de abundante dulce de leche repostero y rebozada en nueces picadas.",
        details: "Elaboración artesana diaria",
        ingredients: "Harina de trigo, maicena, mantequilla, dulce de leche y nueces seleccionadas.",
        prepTime: "3 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos", "frutos_cascara"]
      }
    ],`;

if (content.includes(endOfMenuMarker)) {
  content = content.replace(endOfMenuMarker, newDishesToAdd);
  console.log('Added 5 dishes to estilo1.menu (Total: 46 dishes)');
} else {
  console.warn('Could not find endOfMenuMarker directly');
}

// 2. FIX REVIEW MODAL CLOSE BUTTON IN setupGlobalEvents
const oldReviewOpenHandler = `      // 10. Reseñas Modal
      if (e.target.closest('#open-smart-review-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }`;

const newReviewOpenAndCloseHandler = `      // 10. Reseñas Modal (Abrir y Cerrar garantizado)
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
      }`;

if (content.includes(oldReviewOpenHandler)) {
  content = content.replace(oldReviewOpenHandler, newReviewOpenAndCloseHandler);
  console.log('Added close event handler for review modal in setupGlobalEvents');
} else {
  console.warn('Could not find oldReviewOpenHandler snippet');
}

// 3. UPDATE renderSmartReviewModal close button markup & Estilo 1 theme
const oldSmartReviewModalStart = `  renderSmartReviewModal(preset) {
    const container = document.getElementById('review-modal-container');
    if (!container) return;`;

const newSmartReviewThemeMatch = `    if (preset.id === 'estilo1') {
      theme = {
        card: 'bg-white border-2 border-[#8B1E1E]/30 text-stone-900 rounded-2xl shadow-2xl',`;

const newSmartReviewThemeReplacement = `    if (preset.id === 'estilo1') {
      theme = {
        card: 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-3xl shadow-2xl',`;

if (content.includes(newSmartReviewThemeMatch)) {
  content = content.replace(newSmartReviewThemeMatch, newSmartReviewThemeReplacement);
  console.log('Updated theme.card in renderSmartReviewModal for estilo1');
}

// Also ensure close button in renderSmartReviewModal has cursor-pointer
const oldCloseReviewBtn = `<button id="close-review-modal" class="opacity-60 hover:opacity-100 text-lg transition-opacity p-1 leading-none">✕</button>`;
const newCloseReviewBtn = `<button id="close-review-modal" class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center text-sm transition-colors cursor-pointer" title="Cerrar modal">✕</button>`;
if (content.includes(oldCloseReviewBtn)) {
  content = content.replace(oldCloseReviewBtn, newCloseReviewBtn);
  console.log('Enhanced close button in renderSmartReviewModal');
}

// 4. UPDATE renderDishDetailModal for Estilo 1 to match the Stitch design
const oldDishDetailEstilo1 = `    if (preset.id === 'estilo1') {
      cardThemeClasses = 'bg-white border-2 border-[#8B1E1E]/30 text-stone-900 shadow-2xl';
      headerTextClass = 'vukata-font-dish text-stone-950 font-black text-2xl sm:text-3xl tracking-wide';
      bodyTextClass = 'text-stone-700';
      btnThemeClass = 'btn-vukata-primary py-3.5 px-6 rounded-xl text-xs shadow-md';`;

const newDishDetailEstilo1 = `    if (preset.id === 'estilo1') {
      cardThemeClasses = 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-3xl shadow-2xl';
      headerTextClass = 'font-headline-md text-2xl sm:text-3xl text-on-surface font-semibold tracking-tight';
      bodyTextClass = 'text-on-surface-variant font-body-md';
      btnThemeClass = 'bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-6 py-3.5 rounded-full shadow-[0_4px_16px_rgba(156,56,44,0.25)] transition-all';`;

if (content.includes(oldDishDetailEstilo1)) {
  content = content.replace(oldDishDetailEstilo1, newDishDetailEstilo1);
  console.log('Updated renderDishDetailModal theme for Estilo 1 to match Stitch');
}

// 5. UPDATE renderEstilo1Layout to show ALL 46 DISHES across ALL CATEGORIES with the EXACT STITCH DESIGN
const layoutPattern = /renderEstilo1Layout\(preset, filteredMenu, activeCategory, activeAllergens, topData\) \{[\s\S]*?(?=\s*\/\/ -{10,}\s*\n\s*\/\/ DISEÑO 2:)/;

const newCompleteEstilo1Layout = `renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    // Definición de las categorías y metadatos oficiales del diseño maestro de Stitch (code.html)
    const CATEGORY_ORDER = ['A la Brasa', 'Entrantes', 'Ensaladas', 'Chivito al Plato', 'Pollo Asado', 'Postres', 'Cafés'];

    const CATEGORY_META = {
      'A la Brasa': {
        id: 'brasa',
        title: 'Cortes Nobles a la Brasa',
        subtitle: 'Hechos al momento en parrilla abierta de leña y carbón de encina natural',
        icon: 'local_fire_department',
        iconBg: 'bg-primary-container text-on-primary',
        badgeSuffix: 'Cortes Selección'
      },
      'Entrantes': {
        id: 'entrantes',
        title: 'Entrantes de la Casa',
        subtitle: 'Para abrir boca mientras las brasas toman temperatura',
        icon: 'tapas',
        iconBg: 'bg-secondary-container text-on-surface',
        badgeSuffix: 'Recetas Propias'
      },
      'Ensaladas': {
        id: 'ensaladas',
        title: 'Ensaladas Frescas y Huerto',
        subtitle: 'Hortalizas seleccionadas y aliños artesanos para refrescar el paladar',
        icon: 'eco',
        iconBg: 'bg-secondary-container text-on-surface',
        badgeSuffix: 'Opciones de Huerta'
      },
      'Chivito al Plato': {
        id: 'chivito',
        title: 'Chivito al Plato Tradicional',
        subtitle: 'Especialidad rioplatense completa con carnes nobles, huevo, jamón y guarnición',
        icon: 'lunch_dining',
        iconBg: 'bg-primary-container text-on-primary',
        badgeSuffix: 'Especialidad'
      },
      'Pollo Asado': {
        id: 'pollo',
        title: 'Pollo al Carbón de Encina',
        subtitle: 'Asado a fuego pausado con adobo tradicional de hierbas aromáticas',
        icon: 'dinner_dining',
        iconBg: 'bg-secondary-container text-on-surface',
        badgeSuffix: 'Formatos al Carbón'
      },
      'Postres': {
        id: 'postres',
        title: 'El Broche Dulce',
        subtitle: 'Elaborados a diario en nuestro obrador con recetas familiares',
        icon: 'bakery_dining',
        iconBg: 'bg-tertiary-fixed-dim text-on-tertiary-fixed',
        badgeSuffix: '100% Caseros'
      },
      'Cafés': {
        id: 'cafes',
        title: 'Cafetería & Sobremesa',
        subtitle: 'Cafés selectos, infusiones digestivas y sobremesa reposada',
        icon: 'coffee',
        iconBg: 'bg-secondary-container text-on-surface',
        badgeSuffix: 'Sobremesa'
      }
    };

    // Helper para verificar exclusión por alérgenos seleccionados
    const isDishExcluded = (dishAllergens) => {
      if (!activeAllergens || activeAllergens.length === 0) return false;
      if (!dishAllergens || dishAllergens.length === 0) return false;
      return dishAllergens.some(a => {
        const norm = ALLERGEN_ALIAS[a] || a;
        return activeAllergens.includes(norm) || activeAllergens.includes(a);
      });
    };

    // Plato destacado para el Spotlight 50/50
    const featuredSpotlightDish = preset.menu.find(d => d.id === 'e1_asado') || preset.menu[0];

    return \`
      <!-- HERO SECTION: Atmospheric Dark Ember Hearth (Stitch Redesign idéntico a code.html) -->
      <section class="relative w-full bg-[#14100E] text-surface-container overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28" id="el-asador">
        <!-- Embers ambient background overlay -->
        <div class="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/30 via-transparent to-transparent"></div>
        <div class="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

        <div class="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Hero Content (7 Cols) -->
            <div class="lg:col-span-7 flex flex-col items-start space-y-6">
              <div class="flex items-center gap-3">
                <span class="w-8 h-[2px] bg-primary"></span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.22em] text-primary-fixed uppercase">ALUCHE · MADRID — DESDE 1996</span>
              </div>
              
              <h1 class="font-display-hero text-display-hero text-surface-bright tracking-tight">
                La brasa <span class="font-title-italic text-title-italic italic text-tertiary-fixed-dim font-normal">no perdona.</span><br/>
                La carne, tampoco.
              </h1>

              <p class="font-body-lg text-body-lg text-surface-dim max-w-xl leading-relaxed">
                <strong class="text-surface-bright font-semibold">VU<span class="text-[#E52D27]">KA</span>TA</span></strong> es un asador y parrilla al carbón de encina. Elegimos la pieza, maduramos el corte en casa y lo llevamos al punto exacto. Sin atajos, sin gas, sin esconder nada.
              </p>

              <!-- CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <a class="inline-flex items-center gap-2.5 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_24px_rgba(156,56,44,0.35)] transform hover:-translate-y-0.5 cursor-pointer" href="#reservas-direct">
                  <span class="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Reservar mesa</span>
                </a>
                <a class="inline-flex items-center gap-2.5 bg-surface-container-highest/10 hover:bg-surface-container-highest/20 text-surface-bright font-label-action text-label-action px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer" href="#carta-section">
                  <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span>Pedir para llevar</span>
                </a>
                <a class="inline-flex items-center gap-2 text-surface-dim hover:text-tertiary-fixed-dim font-label-action text-label-action px-3 py-2 transition-colors cursor-pointer" href="tel:+34915098576">
                  <span class="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">call</span>
                  <span>+34 915 09 85 76</span>
                </a>
              </div>
            </div>

            <!-- Hero Focal Media & Live Grill Ambience (5 Cols) -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high/10 p-2">
                <img alt="Corte de chuletón premium a las brasas" class="w-full h-[420px] lg:h-[500px] object-cover rounded-xl transform transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida/AEtjO1UYMArAbOKJy-nAX3Qc_2IJya_Bql0cJvc91zUPpLB9bxmc4t1cip035CmBB92HLBbxHii_LCOt1nmeFVm2NbcbMlY4kc-xk2eFzqJUueJLEZoSBQLOi4Rb60e6uV0zgdSAMHWmaWaUlK5Z4dNmoAU7wDu19kj9LDkg8jJYVO0KpW__jqq6aX36nujvZ-wuwTY4yU9FQTXyvB-rloVWJGz6HmUwS-700tOvtq0TpuD_ySFDnKKwh-shvl38"/>
                <div class="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent opacity-80 rounded-xl"></div>
                <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-surface/90 backdrop-blur-md p-4 rounded-xl text-on-surface shadow-lg">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary text-[28px]">local_fire_department</span>
                    <div>
                      <span class="font-kicker-eyebrow text-kicker-eyebrow uppercase text-primary tracking-wider block">PARRILLA VIVA</span>
                      <span class="font-headline-sm text-[16px] leading-tight font-medium text-on-surface">Carbón de encina extremeño</span>
                    </div>
                  </div>
                  <span class="font-label-action text-[11px] bg-secondary-container text-on-surface px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">En directo</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Highlight Stats Row -->
          <div class="mt-16 pt-10 border-t-0 bg-surface-container-high/5 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div class="flex flex-col">
                <span class="font-stat-number text-stat-number text-surface-bright leading-none mb-1">1996</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-surface-dim uppercase tracking-[0.16em]">AÑO DE APERTURA</span>
              </div>
              <div class="flex flex-col">
                <span class="font-stat-number text-stat-number text-surface-bright leading-none mb-1">40+</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-surface-dim uppercase tracking-[0.16em]">DÍAS DE MADURACIÓN</span>
              </div>
              <div class="flex flex-col">
                <span class="font-stat-number text-stat-number text-surface-bright leading-none mb-1">100%</span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-surface-dim uppercase tracking-[0.16em]">CARBÓN DE ENCINA</span>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center gap-1.5 mb-1">
                  <span class="font-stat-number text-stat-number text-surface-bright leading-none">4,8</span>
                  <div class="flex text-tertiary-fixed-dim">
                    <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                </div>
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-surface-dim uppercase tracking-[0.16em]">GOOGLE MAPS · 348 RESEÑAS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- TICKER MARQUEE RIBBON -->
      <div class="w-full bg-secondary-container py-3.5 overflow-hidden shadow-inner flex select-none">
        <div class="flex items-center gap-8 whitespace-nowrap animate-marquee">
          <span class="font-title-italic text-[16px] text-on-surface italic">Carbón natural</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Desde 1996</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Brasa de encina</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Maduración propia</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Corte a cuchillo</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Cocina de mercado</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <!-- Duplicate set for seamless flow -->
          <span class="font-title-italic text-[16px] text-on-surface italic">Carbón natural</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Desde 1996</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Brasa de encina</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Maduración propia</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Corte a cuchillo</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-on-surface italic">Cocina de mercado</span>
          <span class="material-symbols-outlined text-primary text-[16px]">local_fire_department</span>
        </div>
      </div>

      <!-- FEATURED SHOWCASE DISH: Directo de la Brasa (Spotlight 50/50 Card) -->
      <section class="max-w-[1360px] mx-auto px-6 lg:px-10 py-16 lg:py-24 w-full" id="especialidades">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="w-6 h-[2px] bg-primary"></span>
              <span class="font-kicker-eyebrow text-kicker-eyebrow text-primary uppercase tracking-[0.2em]">DIRECTO DE LA BRASA</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">Las piezas que la gente vuelve a pedir</h2>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-xl">
              No tenemos una carta enorme. Tenemos platos mimados hasta el último segundo sobre la encina.
            </p>
          </div>
          <a class="inline-flex items-center gap-2 text-on-surface bg-surface-container hover:bg-surface-container-high px-5 py-2.5 rounded-full font-label-action text-label-action transition-all cursor-pointer" href="#carta-section">
            <span>Ver la carta completa (\${preset.menu.length})</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <!-- Spotlight 50/50 Card -->
        <div class="bg-surface-container-low rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch border border-outline-variant/30">
          <!-- Media Side (7 Cols) -->
          <div class="relative lg:col-span-7 min-h-[380px] lg:min-h-[480px]">
            <img alt="\${featuredSpotlightDish.name}" class="w-full h-full object-cover cursor-pointer" data-open-dish-modal="\${featuredSpotlightDish.id}" src="\${featuredSpotlightDish.image}"/>
            <div class="absolute top-6 left-6">
              <span class="font-kicker-eyebrow text-kicker-eyebrow uppercase bg-primary text-on-primary px-3 py-1.5 rounded-full tracking-widest shadow-md">
                LA CASA
              </span>
            </div>
            <button data-open-lightbox="\${featuredSpotlightDish.image}" data-lightbox-title="\${featuredSpotlightDish.name}" class="absolute bottom-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-xl text-xs backdrop-blur-sm cursor-pointer" title="Ampliar foto">
              \${ICONS.zoom}
            </button>
          </div>

          <!-- Information Dossier Side (5 Cols) -->
          <div class="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-secondary uppercase tracking-[0.2em]">\${featuredSpotlightDish.badge || 'PIEZA 400 G APROX.'}</span>
                \${renderAllergenBadges(featuredSpotlightDish.allergens, 'sm')}
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="\${featuredSpotlightDish.id}">\${featuredSpotlightDish.name}</h3>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                \${featuredSpotlightDish.description}
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="bg-surface-container-low p-3.5 rounded-xl">
                  <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">ORIGEN</span>
                  <span class="font-body-sm font-semibold text-on-surface">Vaca Seleccionada</span>
                </div>
                <div class="bg-surface-container-low p-3.5 rounded-xl">
                  <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">TÉCNICA</span>
                  <span class="font-body-sm font-semibold text-on-surface">\${featuredSpotlightDish.prepTime || 'Fuego Lento 45 Min'}</span>
                </div>
              </div>
            </div>

            <div class="pt-8 mt-6 border-t border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">PRECIO RACIÓN</span>
                <span class="font-label-price text-label-price text-primary font-bold">\${formatCurrency(featuredSpotlightDish.price)}</span>
              </div>
              <div class="flex items-center gap-2">
                <button data-open-dish-modal="\${featuredSpotlightDish.id}" class="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-action text-label-action px-4 py-3 rounded-full transition-all cursor-pointer">
                  Ver Detalle
                </button>
                <button data-add-cart="\${featuredSpotlightDish.id}" class="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-6 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer">
                  <span class="material-symbols-outlined text-[18px]">restaurant</span>
                  <span>Pedir plato</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STICKY FILTER SUBNAV & SEARCH -->
      <section class="sticky top-20 z-40 bg-surface/95 backdrop-blur-md py-4 shadow-sm border-y border-outline-variant/20" id="carta-section">
        <div class="max-w-[1360px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <!-- Category Pill Carousel -->
          <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none" id="category-pills">
            <button class="cat-filter \${activeCategory === 'all' ? 'active bg-inverse-surface text-inverse-on-surface' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'} px-4 py-2 rounded-full font-label-action text-label-action whitespace-nowrap transition-all shadow-sm cursor-pointer" data-cat="all">
              Todos (\${preset.menu.length})
            </button>
            \${CATEGORY_ORDER.map(catName => {
              const meta = CATEGORY_META[catName] || { id: catName };
              const isActive = activeCategory === catName || activeCategory === meta.id;
              return \`
                <button class="cat-filter \${isActive ? 'active bg-inverse-surface text-inverse-on-surface' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'} px-4 py-2 rounded-full font-label-action text-label-action whitespace-nowrap transition-all cursor-pointer" data-cat="\${meta.id}" data-category-name="\${catName}">
                  \${catName}
                </button>
              \`;
            }).join('')}
          </div>

          <!-- Quick Allergen & View Controls -->
          <div class="flex items-center gap-3 w-full md:w-auto justify-end flex-shrink-0">
            <button class="inline-flex items-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-on-surface-variant px-3.5 py-2 rounded-full font-label-action text-[12px] transition-colors cursor-pointer border border-outline-variant/30" id="toggle-allergens">
              <span class="material-symbols-outlined text-[16px] text-tertiary">info</span>
              <span>Info Alérgenos</span>
              \${activeAllergens.length > 0 ? \`<span class="bg-primary text-on-primary text-[10px] px-1.5 py-0.2 rounded-full font-bold">\${activeAllergens.length}</span>\` : ''}
            </button>
            
            <div class="hidden sm:flex items-center bg-surface-container p-1 rounded-full text-secondary">
              <button id="view-cards" data-menu-mode="cards" class="px-3 py-1 rounded-full \${this.menuMode !== 'compact' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold' : 'text-secondary hover:text-on-surface'} text-xs font-medium cursor-pointer">Tarjetas</button>
              <button id="view-list" data-menu-mode="compact" class="px-3 py-1 rounded-full \${this.menuMode === 'compact' ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold' : 'text-secondary hover:text-on-surface'} text-xs font-medium cursor-pointer">Lista rápida</button>
            </div>
          </div>

        </div>
      </section>

      <!-- ALLERGENS INFO BANNER (Collapsible via JS) -->
      <div class="\${activeAllergens.length > 0 ? '' : 'hidden'} max-w-[1360px] mx-auto px-6 lg:px-10 mt-4 w-full" id="allergen-box">
        <div class="bg-tertiary-fixed/30 p-5 rounded-2xl flex flex-col sm:flex-row items-start gap-3 text-on-tertiary-fixed border border-outline-variant/30 shadow-sm">
          <span class="material-symbols-outlined text-tertiary mt-0.5 text-[24px]">verified_user</span>
          <div class="text-body-sm flex-1">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
              <p class="font-semibold text-sm">Aviso de intolerancias alimentarias y alérgenos (Reglamento UE 1169/2011)</p>
              \${activeAllergens.length > 0 ? \`
                <button type="button" data-clear-allergens class="text-xs font-bold text-primary hover:underline cursor-pointer">
                  ✕ Limpiar filtros (\${activeAllergens.length})
                </button>
              \` : ''}
            </div>
            <p class="text-on-surface-variant text-xs mb-3">
              Disponemos de fichas técnicas para cada preparación sobre brasas. Si presenta alguna alergia a gluten, lácteos, sulfitos o frutos secos, pulse en cualquiera de los alérgenos para filtrar la carta:
            </p>
            
            <!-- 14 Allergen Interactive Chips -->
            <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
              \${Object.values(VUKATA_ALLERGENS).map(a => {
                const isSelected = activeAllergens.includes(a.id);
                return \`
                  <button type="button" data-allergen="\${a.id}" class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs transition-all border cursor-pointer select-none \${
                    isSelected 
                      ? 'bg-primary text-on-primary font-bold border-primary shadow-sm ring-2 ring-red-200' 
                      : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/40'
                  }" title="\${isSelected ? 'Quitar filtro de ' + a.name : 'Excluir platos con ' + a.name}">
                    <span class="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background-color: \${a.color};">
                      <span class="w-2.5 h-2.5 flex items-center justify-center">\${a.svg}</span>
                    </span>
                    <span class="font-medium whitespace-nowrap">\${a.name}</span>
                    \${isSelected ? \`<span class="text-[10px] font-bold ml-0.5">✕</span>\` : ''}
                  </button>
                \`;
              }).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN MENU SHOWCASE CONTAINER: TODAS LAS CATEGORÍAS Y LOS 46 PLATOS EN DISEÑO STITCH -->
      <div class="max-w-[1360px] mx-auto px-6 lg:px-10 py-12 w-full space-y-16" id="carta-menu">
        
        \${this.menuMode === 'compact' ? \`
          <!-- VISTA COMPACTA LISTA RÁPIDA: TODOS LOS 46 PLATOS DENTRO DE 1360PX -->
          <div class="space-y-12">
            \${CATEGORY_ORDER.map(catName => {
              const meta = CATEGORY_META[catName] || { id: catName, title: catName, subtitle: '', icon: 'restaurant_menu', iconBg: 'bg-primary-container text-on-primary', badgeSuffix: 'Opciones' };
              const categoryDishes = preset.menu.filter(d => d.category === catName);
              if (categoryDishes.length === 0) return '';
              const isGroupVisible = activeCategory === 'all' || activeCategory === meta.id || activeCategory === catName;

              return \`
                <div class="menu-group bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm" data-group="\${meta.id}" data-category="\${catName}" style="\${isGroupVisible ? 'display:block;' : 'display:none;'}">
                  <div class="flex items-center justify-between pb-4 mb-4 border-b border-surface-container">
                    <div class="flex items-center gap-2.5">
                      <span class="p-1.5 rounded-full \${meta.iconBg}">
                        <span class="material-symbols-outlined text-[18px]">\${meta.icon}</span>
                      </span>
                      <h3 class="font-headline-sm text-lg font-semibold text-on-surface">\${meta.title}</h3>
                    </div>
                    <span class="text-xs font-semibold text-primary font-mono">\${categoryDishes.length} \${meta.badgeSuffix}</span>
                  </div>
                  <div class="divide-y divide-surface-container">
                    \${categoryDishes.map(d => {
                      const excluded = isDishExcluded(d.allergens);
                      return \`
                        <div class="py-3 flex items-center justify-between gap-4 group \${excluded ? 'opacity-40 grayscale' : ''}">
                          <div class="flex items-center gap-3.5 min-w-0 flex-1">
                            <img src="\${d.image}" alt="\${d.name}" class="w-14 h-14 rounded-xl object-cover flex-shrink-0 cursor-pointer" data-open-dish-modal="\${d.id}"/>
                            <div class="min-w-0">
                              <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-headline-sm text-base font-semibold text-on-surface group-hover:text-primary transition-colors cursor-pointer" data-open-dish-modal="\${d.id}">\${d.name}</span>
                                \${d.badge ? \`<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary-container text-on-surface">\${d.badge}</span>\` : ''}
                                \${renderAllergenBadges(d.allergens, 'xs')}
                              </div>
                              <p class="font-body-sm text-xs text-on-surface-variant truncate max-w-xl">\${d.description}</p>
                            </div>
                          </div>
                          <div class="flex items-center gap-3 flex-shrink-0">
                            <span class="font-label-price text-base font-bold text-primary">\${formatCurrency(d.price)}</span>
                            <button data-open-dish-modal="\${d.id}" class="px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-medium text-on-surface cursor-pointer">Detalle</button>
                            <button data-add-cart="\${d.id}" class="px-3.5 py-1 rounded-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold cursor-pointer">Pedir</button>
                          </div>
                        </div>
                      \`;
                    }).join('')}
                  </div>
                </div>
              \`;
            }).join('')}
          </div>
        \` : \`
          <!-- VISTA TARJETAS SHOWCASE IDÉNTICA AL BOCETO STITCH PARA CADA CATEGORÍA -->
          \${CATEGORY_ORDER.map(catName => {
            const meta = CATEGORY_META[catName] || { id: catName, title: catName, subtitle: '', icon: 'restaurant_menu', iconBg: 'bg-primary-container text-on-primary', badgeSuffix: 'Opciones' };
            const categoryDishes = preset.menu.filter(d => d.category === catName);
            if (categoryDishes.length === 0) return '';
            const isGroupVisible = activeCategory === 'all' || activeCategory === meta.id || activeCategory === catName;

            return \`
              <section class="menu-group" data-group="\${meta.id}" data-category="\${catName}" style="\${isGroupVisible ? 'display:block;' : 'display:none;'}">
                
                <!-- Category Banner idéntico al boceto Stitch -->
                <div class="flex items-center justify-between pb-6 mb-8 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
                  <div class="flex items-center gap-3">
                    <span class="p-2.5 rounded-full \${meta.iconBg}">
                      <span class="material-symbols-outlined text-[24px]">\${meta.icon}</span>
                    </span>
                    <div>
                      <h3 class="font-headline-md text-headline-md text-on-surface font-semibold">\${meta.title}</h3>
                      <p class="font-body-sm text-body-sm text-on-surface-variant">\${meta.subtitle}</p>
                    </div>
                  </div>
                  <span class="hidden md:inline-block font-kicker-eyebrow text-kicker-eyebrow text-primary uppercase bg-surface-container px-3.5 py-1.5 rounded-full border border-outline-variant/20">
                    \${categoryDishes.length} \${meta.badgeSuffix}
                  </span>
                </div>

                <!-- Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  \${categoryDishes.map(dish => {
                    const excluded = isDishExcluded(dish.allergens);

                    // Si es el Chuletón Selección, aplicamos la tarjeta destacada de doble columna de Stitch
                    if (dish.id === 'e1_finlandes') {
                      return \`
                        <div class="dish-card md:col-span-2 bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 group border border-outline-variant/30 \${excluded ? 'opacity-40 grayscale' : ''}">
                          <div class="relative md:col-span-6 h-64 md:h-auto overflow-hidden">
                            <img alt="\${dish.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="\${dish.id}" src="\${dish.image}"/>
                            <div class="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-kicker-eyebrow text-[10px] tracking-widest uppercase shadow">
                              \${dish.badge || 'MADURACIÓN 45+ DÍAS'}
                            </div>
                            <button data-open-lightbox="\${dish.image}" data-lightbox-title="\${dish.name}" class="absolute bottom-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                              \${ICONS.zoom}
                            </button>
                          </div>
                          <div class="p-8 md:col-span-6 flex flex-col justify-between">
                            <div class="space-y-3">
                              <div class="flex items-center justify-between">
                                <span class="font-kicker-eyebrow text-kicker-eyebrow text-secondary uppercase tracking-widest">CORTE SUPREMO · 1 KG APROX</span>
                                \${renderAllergenBadges(dish.allergens, 'sm')}
                              </div>
                              <h4 class="font-headline-md text-headline-md text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="\${dish.id}">\${dish.name}</h4>
                              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                \${dish.description}
                              </p>
                            </div>
                            <div class="pt-6 mt-4 flex items-center justify-between border-t border-surface-container">
                              <div>
                                <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">POR PIEZA</span>
                                <span class="font-label-price text-label-price text-primary font-bold">\${formatCurrency(dish.price)}</span>
                              </div>
                              <div class="flex items-center gap-2">
                                <button data-open-dish-modal="\${dish.id}" class="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-2.5 rounded-full font-label-action text-label-action transition-colors cursor-pointer">
                                  Detalle
                                </button>
                                <button data-add-cart="\${dish.id}" class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-5 py-2.5 rounded-full font-label-action text-label-action hover:bg-primary transition-colors cursor-pointer shadow-sm">
                                  <span>Pedir corte</span>
                                  <span class="material-symbols-outlined text-[16px]">add</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      \`;
                    }

                    // Tarjeta estándar de 3 columnas de Stitch
                    return \`
                      <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20 \${excluded ? 'opacity-40 grayscale' : ''}">
                        <div class="relative overflow-hidden h-56 bg-surface-container">
                          <img alt="\${dish.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="\${dish.id}" src="\${dish.image}" loading="lazy"/>
                          \${dish.badge ? \`
                            <div class="absolute top-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-2.5 py-1 rounded-md font-kicker-eyebrow text-[10px] tracking-widest uppercase">
                              \${dish.badge}
                            </div>
                          \` : ''}
                          <button data-open-lightbox="\${dish.image}" data-lightbox-title="\${dish.name}" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                            \${ICONS.zoom}
                          </button>
                        </div>
                        <div class="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <div class="flex items-start justify-between gap-2 mb-2">
                              <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="\${dish.id}">\${dish.name}</h4>
                              <span class="font-label-price text-label-price text-primary font-bold whitespace-nowrap">\${formatCurrency(dish.price)}</span>
                            </div>
                            <p class="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">
                              \${dish.description}
                            </p>
                            <div class="mb-2">
                              \${renderAllergenBadges(dish.allergens, 'sm')}
                            </div>
                          </div>
                          <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                            <span class="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                              <span class="material-symbols-outlined text-[16px] text-primary">skillet</span>
                              <span>\${dish.prepTime || 'Punto recomendado'}</span>
                            </span>
                            <div class="flex items-center gap-1.5">
                              <button data-open-dish-modal="\${dish.id}" class="p-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer" title="Ver detalle">
                                <span class="material-symbols-outlined text-[18px]">info</span>
                              </button>
                              <button data-add-cart="\${dish.id}" class="p-2 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer shadow-xs" title="Añadir a la comanda">
                                <span class="material-symbols-outlined text-[20px]">add</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    \`;
                  }).join('')}
                </div>

              </section>
            \`;
          }).join('')}
        \`}

      </div>

      <!-- GOOGLE REVIEWS SECTION (Social Proof & Reputation de Stitch + Botón de Valorar Experiencia) -->
      <section class="bg-surface-container-low py-20 w-full mt-12" id="opiniones">
        <div class="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-[2px] bg-primary"></span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-primary uppercase tracking-[0.2em]">TESTIMONIOS REALES</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface">Opiniones de nuestros clientes</h2>
              <p class="font-body-md text-body-md text-on-surface-variant">Más de 28 años encendiendo la leña a diario en el barrio de Aluche.</p>
            </div>
            <div class="flex flex-wrap items-center gap-4">
              <!-- Rating card -->
              <div class="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/30">
                <div class="w-12 h-12 rounded-full bg-[#14100E] flex items-center justify-center text-tertiary-fixed-dim">
                  <span class="material-symbols-outlined text-[28px]">reviews</span>
                </div>
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-headline-sm text-headline-sm font-bold text-on-surface">4.8</span>
                    <div class="flex text-[#e39c28]">
                      <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                      <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                      <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                      <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                      <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    </div>
                  </div>
                  <span class="font-body-sm text-body-sm text-secondary">Basado en 348 reseñas de Google Maps</span>
                </div>
              </div>

              <!-- Botón Valorar Experiencia / Escribir Reseña (Solicitado explícitamente por el cliente) -->
              <button id="open-smart-review-btn" class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(156,56,44,0.25)] cursor-pointer">
                <span class="material-symbols-outlined text-[20px]">rate_review</span>
                <span>Valorar experiencia</span>
              </button>
            </div>
          </div>

          <!-- Testimonial Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Review 1 -->
            <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-outline-variant/20">
              <div class="space-y-4">
                <div class="flex text-[#e39c28]">
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">
                  "El asado de tira y la entraña son de otro nivel. Se nota el carbón de verdad y la mano de quien lleva décadas en la parrilla. Sitio indispensable en Aluche si te gusta la carne bien hecha."
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-surface-container flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-surface">MG</div>
                <div>
                  <h5 class="font-label-action text-label-action text-on-surface font-semibold">Manuel Gómez</h5>
                  <span class="font-body-sm text-body-sm text-secondary">Guía Local de Google · Reseña verificada</span>
                </div>
              </div>
            </div>

            <!-- Review 2 -->
            <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-outline-variant/20">
              <div class="space-y-4">
                <div class="flex text-[#e39c28]">
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">
                  "Pedimos la parrillada para dos y salimos fascinados. La empanada criolla tiene una masa auténtica y el punto de las carnes vino tal cual pedimos. Trato cercano y precio muy ajustado para la calidad."
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-surface-container flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-surface">MM</div>
                <div>
                  <h5 class="font-label-action text-label-action text-on-surface font-semibold">María C. Montes</h5>
                  <span class="font-body-sm text-body-sm text-secondary">Cliente habitual · Reseña verificada</span>
                </div>
              </div>
            </div>

            <!-- Review 3 -->
            <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-outline-variant/20">
              <div class="space-y-4">
                <div class="flex text-[#e39c28]">
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">
                  "El chuletón finlandés madurado es una joya. Tierno, con un toque de brasa limpio que no satura. Y dejen sitio para la tarta de queso casera porque vale cada euro."
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-surface-container flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-surface">JP</div>
                <div>
                  <h5 class="font-label-action text-label-action text-on-surface font-semibold">Javier del Pozo</h5>
                  <span class="font-body-sm text-body-sm text-secondary">Crítico gastronómico amateur</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- TAKE AWAY & RESERVAS COMPONENT (Direct Action Block acotado a 1360px) -->
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
      </section>
    \`;
  }
`;

if (layoutPattern.test(content)) {
  content = content.replace(layoutPattern, newCompleteEstilo1Layout);
  console.log('Replaced renderEstilo1Layout with full 46 dishes layout');
} else {
  console.error('Could not match layoutPattern');
  process.exit(1);
}

// 6. UPDATE cat-filter handler in setupGlobalEvents to filter across all 7 categories smoothly
const oldCatPillHandler = `      const catPill = e.target.closest('.cat-filter');
      if (catPill) {
        e.preventDefault();
        const cat = catPill.getAttribute('data-cat') || 'all';
        
        // Actualizar visualmente los botones de filtro
        document.querySelectorAll('.cat-filter').forEach(btn => {
          btn.classList.remove('active', 'bg-inverse-surface', 'text-inverse-on-surface');
          btn.classList.add('bg-surface-container', 'text-on-surface-variant');
        });
        catPill.classList.add('active', 'bg-inverse-surface', 'text-inverse-on-surface');
        catPill.classList.remove('bg-surface-container', 'text-on-surface-variant');

        // Mostrar / ocultar grupos de carta en vivo sin salto brusco de scroll
        const groups = document.querySelectorAll('.menu-group');
        groups.forEach(g => {
          if (cat === 'all' || g.getAttribute('data-group') === cat) {
            g.style.display = 'block';
          } else {
            g.style.display = 'none';
          }
        });

        // Registrar en estado
        store.state.activeCategory = cat;
        return;
      }`;

const newCatPillHandler = `      const catPill = e.target.closest('.cat-filter');
      if (catPill) {
        e.preventDefault();
        const cat = catPill.getAttribute('data-cat') || 'all';
        const catName = catPill.getAttribute('data-category-name');
        
        // Actualizar visualmente los botones de filtro
        document.querySelectorAll('.cat-filter').forEach(btn => {
          btn.classList.remove('active', 'bg-inverse-surface', 'text-inverse-on-surface');
          btn.classList.add('bg-surface-container', 'text-on-surface-variant');
        });
        catPill.classList.add('active', 'bg-inverse-surface', 'text-inverse-on-surface');
        catPill.classList.remove('bg-surface-container', 'text-on-surface-variant');

        // Mostrar / ocultar grupos de carta en vivo sin salto brusco de scroll
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

        // Registrar en estado
        store.state.activeCategory = cat;
        return;
      }`;

if (content.includes(oldCatPillHandler)) {
  content = content.replace(oldCatPillHandler, newCatPillHandler);
  console.log('Updated catPill handler for multi-category filtering');
} else {
  console.warn('Could not find exact oldCatPillHandler');
}

fs.writeFileSync('assets/js/app.js', content, 'utf8');
console.log('Successfully updated assets/js/app.js!');
