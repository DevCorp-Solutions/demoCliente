const fs = require('fs');

let content = fs.readFileSync('assets/js/app.js', 'utf8');

// 1. Fix line 2082: e.target.closest('[data-category]') -> e.target.closest('button[data-category]')
const oldCategoryClick = `      // 2. Filtro de categorías
      const catBtn = e.target.closest('[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }`;

const newCategoryClick = `      // 2. Filtro de categorías
      const catBtn = e.target.closest('button[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }`;

if (content.includes(oldCategoryClick)) {
  content = content.replace(oldCategoryClick, newCategoryClick);
  console.log('Fixed category button click selector');
} else {
  console.warn('Could not find oldCategoryClick');
}

// 2. Update renderDishDetailModal with refined Stitch styling and direct redundant listeners
const oldRenderDishDetailModalStart = `  renderDishDetailModal(dish, preset) {`;
const oldRenderDishDetailModalEnd = `    `;

// Let's replace renderDishDetailModal completely
const dishDetailPattern = /renderDishDetailModal\(dish, preset\) \{[\s\S]*?(?=\s*\/\/ ={10,}\s*\n\s*\/\/ CARRITO DRAWER)/;

const newRenderDishDetailModal = `renderDishDetailModal(dish, preset) {
    this.currentModalDish = dish;
    this.modalQty = 1;
    const container = document.getElementById('dish-modal-container');
    if (!container) return;

    const allergensList = (dish.allergens && dish.allergens.length > 0)
      ? (preset.id === 'estilo1'
          ? dish.allergens.map(a => renderAllergenBadge(a, 'md', true)).join('')
          : dish.allergens.map(a => \`<span class="allergen-chip \${
              preset.id === 'estilo2' ? 'badge-allergen-estilo2' :
              preset.id === 'estilo3' ? 'badge-allergen-estilo3' :
              'badge-allergen-estilo4'
            }">\${getAllergenLabel(a)}</span>\`).join(''))
      : \`<span class="text-xs \${preset.id === 'estilo1' ? 'text-on-surface-variant font-medium' : preset.id === 'estilo2' ? 'text-slate-400' : 'text-zinc-500'}">✓ No contiene alérgenos comunes declarados</span>\`;

    let cardThemeClasses = '';
    let headerTextClass = '';
    let bodyTextClass = '';
    let btnThemeClass = '';

    if (preset.id === 'estilo1') {
      cardThemeClasses = 'bg-surface-container-lowest border border-outline-variant/30 text-on-surface rounded-3xl shadow-2xl';
      headerTextClass = 'font-headline-md text-2xl sm:text-3xl text-on-surface font-semibold tracking-tight';
      bodyTextClass = 'text-on-surface-variant font-body-md';
      btnThemeClass = 'bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-6 py-3.5 rounded-full shadow-[0_4px_16px_rgba(156,56,44,0.25)] transition-all';
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

    container.innerHTML = \`
      <div id="dish-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate relative max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden \${cardThemeClasses}">
          
          <!-- Botón de Cerrar Modal adaptado a la estética de Stitch -->
          \${preset.id === 'estilo1' ? \`
            <button type="button" id="close-dish-modal" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container/90 hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-all hover:scale-105 font-bold z-30 shadow-lg border border-outline-variant/40 cursor-pointer" title="Cerrar modal">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          \` : \`
            <button type="button" id="close-dish-modal" class="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 font-bold z-30 shadow-2xl border border-white/30 cursor-pointer" title="Cerrar modal (Esc)">
              ✕
            </button>
          \`}

          <!-- Fotografía Nítida (Sin velos oscuros) con botón de ampliación -->
          <div class="relative w-full h-56 sm:h-72 bg-surface-container-highest flex-shrink-0 overflow-hidden cursor-zoom-in group" data-open-lightbox="\${dish.image || ''}" data-lightbox-title="\${dish.name}" title="Clic para ampliar imagen completa">
            \${dish.image ? \`
              <img src="\${dish.image}" alt="\${dish.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"/>
            \` : \`
              <div class="w-full h-full flex items-center justify-center text-5xl">🍽️</div>
            \`}
            
            <!-- Botón llamativo de 'Ampliar Imagen Completa' -->
            \${preset.id === 'estilo1' ? \`
              <div class="absolute bottom-3 right-3 bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-on-surface text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-outline-variant/30 flex items-center space-x-2 shadow-lg transition-transform group-hover:scale-105 pointer-events-none">
                <span class="material-symbols-outlined text-[16px] text-primary">zoom_in</span>
                <span class="font-label-action text-label-action">Ampliar foto completa</span>
              </div>
            \` : \`
              <div class="absolute bottom-3 right-3 bg-black/80 hover:bg-black text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/30 flex items-center space-x-2 shadow-2xl transition-transform group-hover:scale-105 pointer-events-none">
                \${ICONS.zoom}
                <span class="font-semibold">Ampliar foto completa</span>
              </div>
            \`}
          </div>

          <!-- Cabecera de Texto del Plato debajo de la foto para máxima legibilidad -->
          <div class="p-5 sm:p-6 pb-4 border-b \${preset.id === 'estilo1' ? 'border-outline-variant/20 bg-surface-container-low' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex-shrink-0">
            <div class="flex items-center space-x-2 mb-2">
              \${dish.badge ? \`<span class="px-3 py-1 rounded-full text-[11px] font-kicker-eyebrow uppercase tracking-wider \${preset.id === 'estilo1' ? 'bg-primary-container text-on-primary' : 'bg-blue-600 text-white'}">\${dish.badge}</span>\` : ''}
              <span class="text-xs font-mono opacity-70 uppercase tracking-widest">\${dish.category}</span>
            </div>
            <h2 class="\${headerTextClass}">\${dish.name}</h2>
          </div>

          <!-- Cuerpo con Scroll y Detalles -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 \${bodyTextClass} text-xs sm:text-sm">
            
            <div>
              <h4 class="text-xs font-kicker-eyebrow uppercase tracking-widest mb-1.5 \${preset.id === 'estilo1' ? 'text-primary' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Descripción</h4>
              <p class="leading-relaxed font-body-md text-on-surface text-sm">\${dish.description}</p>
            </div>

            \${dish.ingredients ? \`
              <div class="p-4 rounded-2xl \${preset.id === 'estilo1' ? 'bg-surface-container-low border border-outline-variant/30' : preset.id === 'estilo2' ? 'bg-slate-900/90 border border-slate-800' : preset.id === 'estilo3' ? 'bg-[#eee7db] border border-[#dfd7cc]' : 'bg-zinc-50 border border-zinc-200'}">
                <span class="font-kicker-eyebrow text-[11px] block mb-1 uppercase tracking-widest \${preset.id === 'estilo1' ? 'text-primary' : preset.id === 'estilo2' ? 'text-sky-300' : 'text-stone-700'}">Ingredientes y Preparación</span>
                <p class="text-xs font-body-sm leading-relaxed text-on-surface-variant">\${dish.ingredients}</p>
              </div>
            \` : ''}

            <!-- Alérgenos -->
            <div>
              <h4 class="text-xs font-kicker-eyebrow uppercase tracking-widest mb-2.5 \${preset.id === 'estilo1' ? 'text-primary' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Información de Alérgenos (Reglamento UE 1169/2011)</h4>
              <div class="flex flex-wrap gap-2">
                \${allergensList}
              </div>
            </div>

            <!-- Sugerencia de Maridaje o Nota Culinaria -->
            \${dish.pairing || dish.beerPairing || dish.dietary ? \`
              <div class="border-t pt-4 \${preset.id === 'estilo1' ? 'border-outline-variant/20' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex flex-wrap gap-4 text-xs font-mono">
                \${dish.pairing ? \`<span class="\${preset.id === 'estilo1' ? 'text-primary font-semibold' : 'text-amber-300'}">🍷 Maridaje: \${dish.pairing}</span>\` : ''}
                \${dish.beerPairing ? \`<span class="text-sky-300">🍺 Maridaje: \${dish.beerPairing}</span>\` : ''}
                \${dish.dietary ? \`<span class="opacity-75">🌿 \${dish.dietary}</span>\` : ''}
              </div>
            \` : ''}

          </div>

          <!-- Pie del Modal con Selector de Cantidad y Botón Temático -->
          <div class="p-4 sm:p-5 border-t \${preset.id === 'estilo1' ? 'border-outline-variant/20 bg-surface-container-low' : preset.id === 'estilo2' ? 'border-slate-800 bg-[#070a13]' : preset.id === 'estilo3' ? 'border-[#dfd7cc] bg-[#f5f1e8]' : 'border-zinc-200 bg-zinc-50'} flex items-center justify-between gap-4 flex-shrink-0">
            
            <div class="flex items-center space-x-3">
              <span class="\${preset.id === 'estilo1' ? 'text-primary font-headline-md font-bold text-2xl sm:text-3xl' : preset.id === 'estilo2' ? 'text-white font-mono text-xl sm:text-2xl font-bold' : preset.id === 'estilo3' ? 'text-[#3d3228] font-mono text-xl sm:text-2xl font-bold' : 'text-zinc-900 font-mono text-xl sm:text-2xl font-bold'}">
                \${formatCurrency(dish.price)}
              </span>

              <div class="flex items-center space-x-2 border \${preset.id === 'estilo1' ? 'border-outline-variant/40 bg-surface-container-lowest text-on-surface rounded-full px-3 py-1.5' : preset.id === 'estilo2' ? 'border-slate-700 bg-slate-800 rounded-xl px-2 py-1' : preset.id === 'estilo3' ? 'border-[#8c7b6c] bg-white rounded-xl px-2 py-1' : 'border-zinc-300 bg-white rounded-xl px-2 py-1'}">
                <button type="button" data-modal-qty-minus class="w-7 h-7 flex items-center justify-center font-bold text-base cursor-pointer hover:opacity-75 select-none">-</button>
                <span id="modal-dish-qty-val" class="w-6 text-center font-bold font-mono text-sm select-none">1</span>
                <button type="button" data-modal-qty-plus class="w-7 h-7 flex items-center justify-center font-bold text-base cursor-pointer hover:opacity-75 select-none">+</button>
              </div>
            </div>

            <button type="button" data-modal-add-cart class="\${btnThemeClass} flex items-center space-x-2 cursor-pointer select-none">
              <span>Añadir a la Comanda</span>
              \${preset.id === 'estilo1' ? '<span class="material-symbols-outlined text-[18px]">shopping_basket</span>' : ICONS.arrow}
            </button>

          </div>

        </div>
      </div>
    \`;

    // Direct event listener binding to guarantee 100% responsiveness and reliability
    const closeDishBtn = document.getElementById('close-dish-modal');
    const dishBackdrop = document.getElementById('dish-modal-backdrop');
    const minusBtn = container.querySelector('[data-modal-qty-minus]');
    const plusBtn = container.querySelector('[data-modal-qty-plus]');
    const addCartBtn = container.querySelector('[data-modal-add-cart]');
    const lightboxTrigger = container.querySelector('[data-open-lightbox]');

    const closeDishModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      container.innerHTML = '';
      this.currentModalDish = null;
      this.modalQty = 1;
    };

    if (closeDishBtn) closeDishBtn.addEventListener('click', closeDishModal);
    if (dishBackdrop) {
      dishBackdrop.addEventListener('click', (e) => {
        if (e.target === dishBackdrop) closeDishModal(e);
      });
    }
    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.modalQty > 1) {
          this.modalQty -= 1;
          const qtyElem = document.getElementById('modal-dish-qty-val');
          if (qtyElem) qtyElem.innerText = this.modalQty;
        }
      });
    }
    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.modalQty += 1;
        const qtyElem = document.getElementById('modal-dish-qty-val');
        if (qtyElem) qtyElem.innerText = this.modalQty;
      });
    }
    if (addCartBtn) {
      addCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        store.addToCart(dish, "", this.modalQty);
        this.showToast(\`✓ \${dish.name} (x\${this.modalQty}) añadido a la comanda\`);
        closeDishModal();
      });
    }
    if (lightboxTrigger) {
      lightboxTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const imgUrl = lightboxTrigger.getAttribute('data-open-lightbox');
        const imgTitle = lightboxTrigger.getAttribute('data-lightbox-title') || dish.name;
        if (imgUrl) this.renderLightbox(imgUrl, imgTitle);
      });
    }
  }`;

if (dishDetailPattern.test(content)) {
  content = content.replace(dishDetailPattern, newRenderDishDetailModal);
  console.log('Successfully updated renderDishDetailModal');
} else {
  console.error('Could not match dishDetailPattern');
  process.exit(1);
}

// 3. Ensure renderSmartReviewModal has direct close listener as well
const oldReviewModalDirectClose = `    // Botones para volver al selector de estrellas`;
const newReviewModalDirectClose = `    // Botón de cierre directo
    const closeReviewBtn = document.getElementById('close-review-modal');
    const reviewBackdrop = document.getElementById('review-modal-backdrop');
    const closeReviewModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      container.innerHTML = '';
    };
    if (closeReviewBtn) closeReviewBtn.addEventListener('click', closeReviewModal);
    if (reviewBackdrop) reviewBackdrop.addEventListener('click', closeReviewModal);

    // Botones para volver al selector de estrellas`;

if (content.includes(oldReviewModalDirectClose)) {
  content = content.replace(oldReviewModalDirectClose, newReviewModalDirectClose);
  console.log('Added direct close listeners to renderSmartReviewModal');
}

fs.writeFileSync('assets/js/app.js', content, 'utf8');
console.log('Finished updating app.js');
