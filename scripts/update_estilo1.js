const fs = require('fs');

let content = fs.readFileSync('assets/js/app.js', 'utf8');

// 1. UPDATE ESTILO 1 HEADER in renderHeaderForStyle
// We find the block starting with `// --- CABECERA ESTILO 1` until `if (preset.id === 'estilo2')`
const headerOldPattern = /\/\/ --- CABECERA ESTILO 1:[\s\S]*?(?=\s*\/\/ --- CABECERA ESTILO 2:)/;

const newEstilo1Header = `// --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
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
    }

    `;

if (!headerOldPattern.test(content)) {
  console.error('Could not find Estilo 1 header pattern!');
  process.exit(1);
}

content = content.replace(headerOldPattern, newEstilo1Header);
console.log('Header replaced successfully');

// 2. UPDATE renderEstilo1Layout
const layoutOldPattern = /renderEstilo1Layout\(preset, filteredMenu, activeCategory, activeAllergens, topData\) \{[\s\S]*?(?=\s*\/\/ -{10,}\s*\n\s*\/\/ DISEÑO 2:)/;

const newEstilo1Layout = `renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    // Definición fidedigna de los 11 platos oficiales del diseño maestro de Stitch (code.html)
    const STITCH_DISHES = [
      // --- 1. CORTES NOBLES A LA BRASA ---
      {
        id: "e1_asado",
        name: "Asado de Tira",
        group: "brasa",
        badge: "Pieza 400g Aprox",
        price: 17.50,
        desc: "El clásico indiscutible. Costillar vacuno seleccionado, corte al través con su grasa infiltrada que carameliza con el calor.",
        feature: "Punto recomendado",
        featureIcon: "skillet",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1UqGbae02HXPp34dhO7pCPsOok6gXCT6fFP--GCKJyLaYmNvnJsnWbheGFywloQ1qZHfltQZbWlCSyF1_GJOZs9taNXZk-1BN22ov6iVLX8CFXFYN3n8AyOhTNIgVL5v0NCUbDhluOxi1llwsOdEa4lhN0D6kjq7Daeo7ld0sbfcRfPF2yrJPrnLM0vslnGKOA5YoXMs_jyUuEBMVQHZh4cf5h7uiHliBm4li8_2YeCnKfTZwEF51TZcMqu",
        allergens: []
      },
      {
        id: "e1_entrana",
        name: "Entraña a la Brasa",
        group: "brasa",
        badge: "Pieza 400g Aprox",
        price: 17.50,
        desc: "Fibra tierna y sabor intenso. Asada con su membrana exterior para sellar los jugos naturales hasta alcanzar una textura sedosa.",
        feature: "Sal en escamas",
        featureIcon: "eco",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1VzcIvPoxbN9Uu_PRfyfSoyBg22tMj1hPxHRS3bnXvo8aeU0b5bCnG53Qm6nYGlMXIBIiav-uqqFuAU9233Vu5GoGynKFQxvYoOHvd3KgkcCUEVqUq5viuAefnegR6ByujXbBeMXImRnJXpR2Hl2l4ELjU6lPnP90ew-mwDNsf9d4a-YPBigxV7nWq3xqrIRRCyDt_IZr5APf0v_NF8n0BJm4tVCrQRQbar7y2Vyg8uzCaWwDpUItVfTys",
        allergens: []
      },
      {
        id: "e1_vacio",
        name: "Vacío de Ternera",
        group: "brasa",
        badge: "Pieza 400g Aprox",
        price: 18.00,
        desc: "Corte lateral jugoso, textura compacta y sabor limpio a pasto. Sellado a fuego fuerte y reposado antes de servir.",
        feature: "Reposo 8 min",
        featureIcon: "timer",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1UbpZFaAurMFEk3RD5FmKUc7SSipddbU3nVeKzi--l05N52BpvP7N6YJo6KZMF_L0kmOPblen22OToh-Kkb7qC0vR6O83jDYwi3HL0_VWIXmOtbFtagg2y69VyUnfM34xcyj9oKro68Pxu9b7ZQihMwqwUz1mfgkgOjnfCibO1M36D9f0h9vR3Rs05oEoOF0zDpLIwWqTQ8wxEZjta_iMxxd66gHZV9NVr9lsjKWg9WLlmAzuqiR-MplL1O",
        allergens: []
      },
      {
        id: "e1_finlandes",
        name: "Chuletón de Vaca Finlandesa Selección",
        group: "brasa",
        isFeaturedHeroCard: true,
        badge: "MADURACIÓN 45+ DÍAS",
        subtitle: "CORTE SUPREMO · 1 KG APROX",
        price: 55.00,
        desc: "Animal criado con pastos naturales en el norte europeo. Grasa cremosa amarilla fruto de su maduración en cámara propia. Sabor envolvente, notas a mantequilla y avellana tostada.",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1UYMArAbOKJy-nAX3Qc_2IJya_Bql0cJvc91zUPpLB9bxmc4t1cip035CmBB92HLBbxHii_LCOt1nmeFVm2NbcbMlY4kc-xk2eFzqJUueJLEZoSBQLOi4Rb60e6uV0zgdSAMHWmaWaUlK5Z4dNmoAU7wDu19kj9LDkg8jJYVO0KpW__jqq6aX36nujvZ-wuwTY4yU9FQTXyvB-rloVWJGz6HmUwS-700tOvtq0TpuD_ySFDnKKwh-shvl38",
        allergens: []
      },
      {
        id: "e1_parr2",
        name: "Parrillada de Carne Vukata",
        group: "brasa",
        badge: "Para 2 Personas",
        price: 42.00,
        desc: "Surtido maestro con tira, vacío, entraña, chorizo criollo y morcilla artesanal. Con patatas fritas caseras.",
        feature: "Ideal para compartir",
        featureIcon: "group",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1Xrhf7NQshuOZxXGVOf8-dNmVuNIiTMVjkZ8psNfMC8hFPfPkrLMgG24fdl38a2-MFUd-Lqb8bJwCc0pUIxPI1KmW2-5UvSr1vvI_bM_dp3OjXey0EtPkhI17kasQxJ1D4ChytluG9errLl8QV18Mztdoq5t_CRfm7os1E8HNTgBBAvUm6XhiUxpdHnkuiiBb4h389TD0zUqTWLxC4dJreWH6vRbMv1HCsWUter4O8Qoq_HHLhaO362hFA",
        allergens: []
      },

      // --- 2. ENTRANTES DE LA CASA ---
      {
        id: "e1_emp",
        name: "Empanada Criolla",
        group: "entrantes",
        badge: "Receta de la Casa",
        price: 4.00,
        desc: "Carne cortada a cuchillo, cebolla pochada, pimentón dulce y masa artesanal crujiente.",
        feature: "Unidad artesana",
        featureIcon: "restaurant_menu",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1VJcVOyvXd5GUweFrSEYWH0eezsEfCcEy60d-PQj0KhS_GmXrhVZVXEJHtg3JfYcLvtr1H9ndmrXWx6hTFqXQ2w3mJ2VZRZj6h-RT88pl1k2489rQLSbsSwZP6xyNpPLWxONq7rnj9jfXwQZKc5immUPo9QyntMH2hwCXFlfKqFYHQogO_vAgJUFq595vLpm2oCF1Nz4nwBuDZH8k6oLjF4sRpKafGGDS59UxC__3czgQhCGLWUBHy39cHH",
        allergens: ["gluten", "huevos"]
      },
      {
        id: "e1_cho",
        name: "Chorizo y Morcilla",
        group: "entrantes",
        badge: "Al Carbón",
        price: 5.00,
        desc: "Directos de la parrilla de encina, acompañados de pan de hogaza tostado a la brasa.",
        feature: "2 piezas mixtas",
        featureIcon: "local_fire_department",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1WR7yKvw4YR-YGvwMrqMdBpKRwt41gwjwYB5lKawNq3SaCwC42skbFlKfntoQyKAkyKRrJMEsIP7Z22bkJIs_E468TVE8JW5GuYuJryLnEa_F58Sw4J3fmuMCpGKnspKzommOEJ_u6CCK-4gZU6R5H03iEigjCXDcx0F0ICRS0zPv4nMmeWUn0lFHcxDfWCsw4LUHHn8ev1FVr5C3iih1V7PAVJ_nG5r2DhhETM_r4DbjarpP43PNI4FIMW",
        allergens: ["gluten"]
      },
      {
        id: "e1_pul",
        name: "Pulpo a la Brasa",
        group: "entrantes",
        badge: "Top Mar",
        price: 24.00,
        desc: "Pata entera de pulpo de roca, marcada al carbón, con base de guacamole y aceite de pimentón de la Vera.",
        feature: "Textura tierna",
        featureIcon: "set_meal",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1Uzu1hXAE9XdtE6KVpV6EqLRjHTYhaZSXiAa7Wzd02RpDWkw4Z0PmjWT_EaVD8fzNeEy8dWfOGQdE6aS-uULBKlmP4bpSmPBO6lkdt8zcUA_43toco0N4FzejDjAwKBU1A9gPC9qmoIjBFpyBvRUJ2R5ojY-ieB_nViOkACWcIG4IKrx9WCMPGOxLhfr_ugOT7SwcnALn7vPdxwnyuEmddbzvhR6tC7UD_rCW5gKvamHMInScSBvNmq7itt",
        allergens: ["moluscos"]
      },
      {
        id: "e1_hue",
        name: "Huevos Rotos",
        group: "entrantes",
        badge: "De Granja",
        price: 16.00,
        desc: "Huevos ecológicos de granja campera, patata agria frita y torrezno crujiente souflé de Soria.",
        feature: "Ración generosa",
        featureIcon: "egg_alt",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1XVX2Ntd73RQ9IqiVaZWJ3bMt6UKtgcSM13fB3eR14lQHtshNZ5Td8WTZneh8W7tAI68Zj_nVJyzM-20yOlRbWXX6wHctu3dqBwktLvrgAvLx68ooavimJzYx2j-GFUjXoeF_lTHmZSm4SnIgyUD4n35n20vZIOxZRZmR7Yu7-2IVSxfdNNUnThWDsaK_IE8CpMK9VAHOPC2a78qSuHeOpJoCi7RG-US_BA7wDNyz_elS0VzP2juHI8ZYCU",
        allergens: ["huevos"]
      },

      // --- 3. EL BROCHE DULCE ---
      {
        id: "e1_coulant",
        name: "Coulant de Chocolate Negro",
        group: "postres",
        badge: "RECOMENDACIÓN DULCE",
        price: 6.50,
        desc: "Bizcocho tibio de cacao 72% con corazón fundente, acompañado de helado artesano de vainilla Bourbon.",
        feature: "Servido al instante",
        featureIcon: "favorite",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1USm-9EuWL1knquBG4_kUiQ0t-9EVgymOiZ8faXTthvabU8NZ5j0d5Z22H1ezrNnD6dxqFlWwoxfKHRC898jl1Kpf7absa7ubh8siO_gW6flAVmCr4itMA6cVFP53LOAHhCq37FGZ5KMNMKuG7dGY1yIF93DLtvvhzYyRQqlD8C2Y-Jmjo38B3kp9GbsOi7-H9juixU9RobiW3JVSm7PHPEnPjBE4pHIpghsiJDF_0QZi8eHGAoe_-ZE7yf",
        allergens: ["gluten", "huevos", "lacteos"]
      },
      {
        id: "e1_tarta",
        name: "Tarta de Queso Cremosa",
        group: "postres",
        badge: "HORNO TRADICIONAL",
        price: 6.50,
        desc: "Textura ultra fluida en el interior con superficie caramelizada al estilo del norte. Elaborada con mezcla de quesos de oveja y crema.",
        feature: "Sin bases pesadas",
        featureIcon: "favorite",
        image: "https://lh3.googleusercontent.com/aida/AEtjO1XC_dnu_cvWTw29uYQp9MjQ_3oWLNF9g4KE2Jkb_-GGnkBpFja7Va1TG3PZ3lP7gv8nl2YDxxc__dZ-lX8EELhIi3I2n6zQE37W9Evf7WprYGAG3cxJKsw2B6RvGD9Gk4orXd22QCXX3XiXSThZL6HFPqEQ_UPm7NdUoJgrisbtJFVthq0EyzxsoPVEmNCZUjSOQ46_scVXle9QFgt4y5Cuf4tj1AS-qu6vIyx1YUYztfwKolJorOTGPWtP",
        allergens: ["gluten", "huevos", "lacteos"]
      }
    ];

    // Helper para verificar exclusión por alérgenos seleccionados
    const isDishExcluded = (dishAllergens) => {
      if (!activeAllergens || activeAllergens.length === 0) return false;
      if (!dishAllergens || dishAllergens.length === 0) return false;
      return dishAllergens.some(a => {
        const norm = ALLERGEN_ALIAS[a] || a;
        return activeAllergens.includes(norm) || activeAllergens.includes(a);
      });
    };

    const brasaDishes = STITCH_DISHES.filter(d => d.group === 'brasa');
    const entrantesDishes = STITCH_DISHES.filter(d => d.group === 'entrantes');
    const postresDishes = STITCH_DISHES.filter(d => d.group === 'postres');

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
                <strong class="text-surface-bright font-semibold">VU<span class="text-[#E52D27]">KA</span>TA</strong> es un asador y parrilla al carbón de encina. Elegimos la pieza, maduramos el corte en casa y lo llevamos al punto exacto. Sin atajos, sin gas, sin esconder nada.
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
              No tenemos una carta enorme. Tenemos pocos platos y cada uno mimado hasta el último segundo sobre la encina.
            </p>
          </div>
          <a class="inline-flex items-center gap-2 text-on-surface bg-surface-container hover:bg-surface-container-high px-5 py-2.5 rounded-full font-label-action text-label-action transition-all cursor-pointer" href="#carta-section">
            <span>Ver la carta completa</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <!-- Spotlight 50/50 Card -->
        <div class="bg-surface-container-low rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch border border-outline-variant/30">
          <!-- Media Side (7 Cols) -->
          <div class="relative lg:col-span-7 min-h-[380px] lg:min-h-[480px]">
            <img alt="Asado de tira humeante sobre tabla rústica" class="w-full h-full object-cover cursor-pointer" data-open-dish-modal="e1_asado" src="https://lh3.googleusercontent.com/aida/AEtjO1UqGbae02HXPp34dhO7pCPsOok6gXCT6fFP--GCKJyLaYmNvnJsnWbheGFywloQ1qZHfltQZbWlCSyF1_GJOZs9taNXZk-1BN22ov6iVLX8CFXFYN3n8AyOhTNIgVL5v0NCUbDhluOxi1llwsOdEa4lhN0D6kjq7Daeo7ld0sbfcRfPF2yrJPrnLM0vslnGKOA5YoXMs_jyUuEBMVQHZh4cf5h7uiHliBm4li8_2YeCnKfTZwEF51TZcMqu"/>
            <div class="absolute top-6 left-6">
              <span class="font-kicker-eyebrow text-kicker-eyebrow uppercase bg-primary text-on-primary px-3 py-1.5 rounded-full tracking-widest shadow-md">
                LA CASA
              </span>
            </div>
            <button data-open-lightbox="https://lh3.googleusercontent.com/aida/AEtjO1UqGbae02HXPp34dhO7pCPsOok6gXCT6fFP--GCKJyLaYmNvnJsnWbheGFywloQ1qZHfltQZbWlCSyF1_GJOZs9taNXZk-1BN22ov6iVLX8CFXFYN3n8AyOhTNIgVL5v0NCUbDhluOxi1llwsOdEa4lhN0D6kjq7Daeo7ld0sbfcRfPF2yrJPrnLM0vslnGKOA5YoXMs_jyUuEBMVQHZh4cf5h7uiHliBm4li8_2YeCnKfTZwEF51TZcMqu" data-lightbox-title="Asado de Tira" class="absolute bottom-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-xl text-xs backdrop-blur-sm cursor-pointer" title="Ampliar foto">
              \${ICONS.zoom}
            </button>
          </div>

          <!-- Information Dossier Side (5 Cols) -->
          <div class="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-surface-container-lowest">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-secondary uppercase tracking-[0.2em]">PIEZA 400 G APROX.</span>
                \${renderAllergenBadges([], 'sm')}
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_asado">Asado de Tira</h3>
              <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Corte transversal de costillar con hueso, asado lentamente sobre brasas vivas de encina hasta que el tuétano perfuma toda la pieza. Crujiente por fuera, fundente y jugoso en su corazón.
              </p>
              <div class="grid grid-cols-2 gap-4 pt-2">
                <div class="bg-surface-container-low p-3.5 rounded-xl">
                  <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">ORIGEN</span>
                  <span class="font-body-sm font-semibold text-on-surface">Vaca Seleccionada</span>
                </div>
                <div class="bg-surface-container-low p-3.5 rounded-xl">
                  <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">TÉCNICA</span>
                  <span class="font-body-sm font-semibold text-on-surface">Fuego Lento 45 Min</span>
                </div>
              </div>
            </div>

            <div class="pt-8 mt-6 border-t border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">PRECIO RACIÓN</span>
                <span class="font-label-price text-label-price text-primary font-bold">17,50 €</span>
              </div>
              <div class="flex items-center gap-2">
                <button data-open-dish-modal="e1_asado" class="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-action text-label-action px-4 py-3 rounded-full transition-all cursor-pointer">
                  Ver Detalle
                </button>
                <button data-add-cart="e1_asado" class="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-6 py-3 rounded-full transition-all duration-200 shadow-sm cursor-pointer">
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
              Todos (11)
            </button>
            <button class="cat-filter \${activeCategory === 'brasa' ? 'active bg-inverse-surface text-inverse-on-surface' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'} px-4 py-2 rounded-full font-label-action text-label-action whitespace-nowrap transition-all cursor-pointer" data-cat="brasa">
              A la Brasa
            </button>
            <button class="cat-filter \${activeCategory === 'entrantes' ? 'active bg-inverse-surface text-inverse-on-surface' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'} px-4 py-2 rounded-full font-label-action text-label-action whitespace-nowrap transition-all cursor-pointer" data-cat="entrantes">
              Entrantes
            </button>
            <button class="cat-filter \${activeCategory === 'postres' ? 'active bg-inverse-surface text-inverse-on-surface' : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'} px-4 py-2 rounded-full font-label-action text-label-action whitespace-nowrap transition-all cursor-pointer" data-cat="postres">
              Postres Caseros
            </button>
          </div>

          <!-- Quick Allergen & View Controls -->
          <div class="flex items-center gap-3 w-full md:w-auto justify-end">
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

      <!-- MAIN MENU SHOWCASE CONTAINER -->
      <div class="max-w-[1360px] mx-auto px-6 lg:px-10 py-12 w-full space-y-16" id="carta-menu">
        
        \${this.menuMode === 'compact' ? \`
          <!-- VISTA COMPACTA LISTA RÁPIDA: PERFECTAMENTE ACOTADA A 1360PX -->
          <div class="space-y-12">
            <!-- Grupo Brasa en Lista -->
            <div class="menu-group bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm" data-group="brasa" style="\${activeCategory === 'all' || activeCategory === 'brasa' ? 'display:block;' : 'display:none;'}">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-surface-container">
                <div class="flex items-center gap-2.5">
                  <span class="p-1.5 rounded-full bg-primary-container text-on-primary">
                    <span class="material-symbols-outlined text-[18px]">local_fire_department</span>
                  </span>
                  <h3 class="font-headline-sm text-lg font-semibold text-on-surface">Cortes Nobles a la Brasa</h3>
                </div>
                <span class="text-xs font-semibold text-primary font-mono">5 Cortes</span>
              </div>
              <div class="divide-y divide-surface-container">
                \${brasaDishes.map(d => {
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
                          <p class="font-body-sm text-xs text-on-surface-variant truncate max-w-xl">\${d.desc}</p>
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

            <!-- Grupo Entrantes en Lista -->
            <div class="menu-group bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm" data-group="entrantes" style="\${activeCategory === 'all' || activeCategory === 'entrantes' ? 'display:block;' : 'display:none;'}">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-surface-container">
                <div class="flex items-center gap-2.5">
                  <span class="p-1.5 rounded-full bg-secondary-container text-on-surface">
                    <span class="material-symbols-outlined text-[18px]">tapas</span>
                  </span>
                  <h3 class="font-headline-sm text-lg font-semibold text-on-surface">Entrantes de la Casa</h3>
                </div>
                <span class="text-xs font-semibold text-secondary font-mono">4 Entrantes</span>
              </div>
              <div class="divide-y divide-surface-container">
                \${entrantesDishes.map(d => {
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
                          <p class="font-body-sm text-xs text-on-surface-variant truncate max-w-xl">\${d.desc}</p>
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

            <!-- Grupo Postres en Lista -->
            <div class="menu-group bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm" data-group="postres" style="\${activeCategory === 'all' || activeCategory === 'postres' ? 'display:block;' : 'display:none;'}">
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-surface-container">
                <div class="flex items-center gap-2.5">
                  <span class="p-1.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed">
                    <span class="material-symbols-outlined text-[18px]">bakery_dining</span>
                  </span>
                  <h3 class="font-headline-sm text-lg font-semibold text-on-surface">El Broche Dulce</h3>
                </div>
                <span class="text-xs font-semibold text-tertiary font-mono">2 Postres Caseros</span>
              </div>
              <div class="divide-y divide-surface-container">
                \${postresDishes.map(d => {
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
                          <p class="font-body-sm text-xs text-on-surface-variant truncate max-w-xl">\${d.desc}</p>
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
          </div>
        \` : \`
          <!-- VISTA TARJETAS SHOWCASE IDÉNTICA A STITCH CODE.HTML -->

          <!-- 1. CATEGORY: A LA BRASA -->
          <section class="menu-group" data-group="brasa" style="\${activeCategory === 'all' || activeCategory === 'brasa' ? 'display:block;' : 'display:none;'}">
            <div class="flex items-center justify-between pb-6 mb-8 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
              <div class="flex items-center gap-3">
                <span class="p-2.5 rounded-full bg-primary-container text-on-primary">
                  <span class="material-symbols-outlined text-[24px]">local_fire_department</span>
                </span>
                <div>
                  <h3 class="font-headline-md text-headline-md text-on-surface font-semibold">Cortes Nobles a la Brasa</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">Hechos al momento en parrilla abierta de leña y carbón de encina natural</p>
                </div>
              </div>
              <span class="hidden md:inline-block font-kicker-eyebrow text-kicker-eyebrow text-primary uppercase bg-surface-container px-3 py-1 rounded-full">5 Cortes Selección</span>
            </div>

            <!-- Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="meat-grid">
              
              <!-- Item 1: Asado de Tira -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(brasaDishes[0].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative overflow-hidden h-56 bg-surface-container">
                  <img alt="Asado de tira crujiente y jugoso" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_asado" src="\${brasaDishes[0].image}"/>
                  <div class="absolute top-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-2.5 py-1 rounded-md font-kicker-eyebrow text-[10px] tracking-widest uppercase">
                    Pieza 400g Aprox
                  </div>
                  <button data-open-lightbox="\${brasaDishes[0].image}" data-lightbox-title="Asado de Tira" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_asado">Asado de Tira</h4>
                      <span class="font-label-price text-label-price text-primary font-bold whitespace-nowrap">17,50 €</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                      El clásico indiscutible. Costillar vacuno seleccionado, corte al través con su grasa infiltrada que carameliza con el calor.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(brasaDishes[0].allergens, 'sm')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                    <span class="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">skillet</span> Punto recomendado
                    </span>
                    <div class="flex items-center gap-1.5">
                      <button data-open-dish-modal="e1_asado" class="p-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer" title="Ver detalle">
                        <span class="material-symbols-outlined text-[18px]">info</span>
                      </button>
                      <button data-add-cart="e1_asado" class="p-2 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer shadow-xs" title="Añadir a la comanda">
                        <span class="material-symbols-outlined text-[20px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 2: Entraña -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(brasaDishes[1].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative overflow-hidden h-56 bg-surface-container">
                  <img alt="Entraña fina con piel crujiente al fuego vivo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_entrana" src="\${brasaDishes[1].image}"/>
                  <div class="absolute top-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-2.5 py-1 rounded-md font-kicker-eyebrow text-[10px] tracking-widest uppercase">
                    Pieza 400g Aprox
                  </div>
                  <button data-open-lightbox="\${brasaDishes[1].image}" data-lightbox-title="Entraña a la Brasa" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_entrana">Entraña a la Brasa</h4>
                      <span class="font-label-price text-label-price text-primary font-bold whitespace-nowrap">17,50 €</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                      Fibra tierna y sabor intenso. Asada con su membrana exterior para sellar los jugos naturales hasta alcanzar una textura sedosa.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(brasaDishes[1].allergens, 'sm')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                    <span class="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">eco</span> Sal en escamas
                    </span>
                    <div class="flex items-center gap-1.5">
                      <button data-open-dish-modal="e1_entrana" class="p-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer" title="Ver detalle">
                        <span class="material-symbols-outlined text-[18px]">info</span>
                      </button>
                      <button data-add-cart="e1_entrana" class="p-2 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer shadow-xs" title="Añadir a la comanda">
                        <span class="material-symbols-outlined text-[20px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 3: Vacío -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(brasaDishes[2].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative overflow-hidden h-56 bg-surface-container">
                  <img alt="Vacío jugoso marcado en parrilla" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_vacio" src="\${brasaDishes[2].image}"/>
                  <div class="absolute top-3 left-3 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-2.5 py-1 rounded-md font-kicker-eyebrow text-[10px] tracking-widest uppercase">
                    Pieza 400g Aprox
                  </div>
                  <button data-open-lightbox="\${brasaDishes[2].image}" data-lightbox-title="Vacío de Ternera" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_vacio">Vacío de Ternera</h4>
                      <span class="font-label-price text-label-price text-primary font-bold whitespace-nowrap">18,00 €</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                      Corte lateral jugoso, textura compacta y sabor limpio a pasto. Sellado a fuego fuerte y reposado antes de servir.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(brasaDishes[2].allergens, 'sm')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                    <span class="font-body-sm text-body-sm text-secondary flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">timer</span> Reposo 8 min
                    </span>
                    <div class="flex items-center gap-1.5">
                      <button data-open-dish-modal="e1_vacio" class="p-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer" title="Ver detalle">
                        <span class="material-symbols-outlined text-[18px]">info</span>
                      </button>
                      <button data-add-cart="e1_vacio" class="p-2 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer shadow-xs" title="Añadir a la comanda">
                        <span class="material-symbols-outlined text-[20px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 4: Chuletón de Vaca Finlandesa Selección (Spanning 2 cols on Desktop) -->
              <div class="dish-card md:col-span-2 bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 group border border-outline-variant/30 \${isDishExcluded(brasaDishes[3].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative md:col-span-6 h-64 md:h-auto overflow-hidden">
                  <img alt="Chuletón de vaca finlandesa con infiltración excepcional" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_finlandes" src="\${brasaDishes[3].image}"/>
                  <div class="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-kicker-eyebrow text-[10px] tracking-widest uppercase shadow">
                    MADURACIÓN 45+ DÍAS
                  </div>
                  <button data-open-lightbox="\${brasaDishes[3].image}" data-lightbox-title="Chuletón de Vaca Finlandesa Selección" class="absolute bottom-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-8 md:col-span-6 flex flex-col justify-between">
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="font-kicker-eyebrow text-kicker-eyebrow text-secondary uppercase tracking-widest">CORTE SUPREMO · 1 KG APROX</span>
                      \${renderAllergenBadges(brasaDishes[3].allergens, 'sm')}
                    </div>
                    <h4 class="font-headline-md text-headline-md text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_finlandes">Chuletón de Vaca Finlandesa Selección</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Animal criado con pastos naturales en el norte europeo. Grasa cremosa amarilla fruto de su maduración en cámara propia. Sabor envolvente, notas a mantequilla y avellana tostada.
                    </p>
                  </div>
                  <div class="pt-6 mt-4 flex items-center justify-between border-t border-surface-container">
                    <div>
                      <span class="font-kicker-eyebrow text-[10px] text-secondary uppercase block">POR PIEZA</span>
                      <span class="font-label-price text-label-price text-primary font-bold">55,00 €</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <button data-open-dish-modal="e1_finlandes" class="bg-surface-container hover:bg-surface-container-high text-on-surface px-4 py-2.5 rounded-full font-label-action text-label-action transition-colors cursor-pointer">
                        Detalle
                      </button>
                      <button data-add-cart="e1_finlandes" class="inline-flex items-center gap-2 bg-primary-container text-on-primary px-5 py-2.5 rounded-full font-label-action text-label-action hover:bg-primary transition-colors cursor-pointer shadow-sm">
                        <span>Pedir corte</span>
                        <span class="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 5: Parrillada Completa Vukata -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(brasaDishes[4].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative overflow-hidden h-56 bg-surface-container">
                  <img alt="Parrillada mixta de carnes sobre brasas" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_parr2" src="\${brasaDishes[4].image}"/>
                  <div class="absolute top-3 left-3 bg-tertiary text-on-tertiary px-2.5 py-1 rounded-md font-kicker-eyebrow text-[10px] tracking-widest uppercase">
                    Para 2 Personas
                  </div>
                  <button data-open-lightbox="\${brasaDishes[4].image}" data-lightbox-title="Parrillada de Carne Vukata" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_parr2">Parrillada de Carne Vukata</h4>
                      <span class="font-label-price text-label-price text-primary font-bold whitespace-nowrap">42,00 €</span>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                      Surtido maestro con tira, vacío, entraña, chorizo criollo y morcilla artesanal. Con patatas fritas caseras.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(brasaDishes[4].allergens, 'sm')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                    <span class="font-body-sm text-body-sm text-secondary">Ideal para compartir</span>
                    <div class="flex items-center gap-1.5">
                      <button data-open-dish-modal="e1_parr2" class="p-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer" title="Ver detalle">
                        <span class="material-symbols-outlined text-[18px]">info</span>
                      </button>
                      <button data-add-cart="e1_parr2" class="p-2 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer shadow-xs" title="Añadir a la comanda">
                        <span class="material-symbols-outlined text-[20px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 2. CATEGORY: ENTRANTES -->
          <section class="menu-group" data-group="entrantes" style="\${activeCategory === 'all' || activeCategory === 'entrantes' ? 'display:block;' : 'display:none;'}">
            <div class="flex items-center justify-between pb-6 mb-8 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
              <div class="flex items-center gap-3">
                <span class="p-2.5 rounded-full bg-secondary-container text-on-surface">
                  <span class="material-symbols-outlined text-[24px]">tapas</span>
                </span>
                <div>
                  <h3 class="font-headline-md text-headline-md text-on-surface font-semibold">Entrantes de la Casa</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">Para abrir boca mientras las brasas toman temperatura</p>
                </div>
              </div>
              <span class="font-kicker-eyebrow text-kicker-eyebrow text-secondary uppercase bg-surface-container px-3 py-1 rounded-full">Recetas Propias</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <!-- Entrante 1: Empanada Criolla -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(entrantesDishes[0].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative h-48 overflow-hidden bg-surface-container">
                  <img alt="Empanada criolla casera horneada" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_emp" src="\${entrantesDishes[0].image}"/>
                  <button data-open-lightbox="\${entrantesDishes[0].image}" data-lightbox-title="Empanada Criolla" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <h4 class="font-headline-sm text-[18px] text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_emp">Empanada Criolla</h4>
                      <span class="font-label-price text-[18px] text-primary font-bold whitespace-nowrap">4,00 €</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                      Carne cortada a cuchillo, cebolla pochada, pimentón dulce y masa artesanal crujiente.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(entrantesDishes[0].allergens, 'xs')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between text-xs text-secondary border-t border-surface-container">
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">restaurant_menu</span> Unidad artesana</span>
                    <button data-add-cart="e1_emp" class="p-1.5 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer" title="Pedir empanada">
                      <span class="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Entrante 2: Chorizo y Morcilla -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(entrantesDishes[1].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative h-48 overflow-hidden bg-surface-container">
                  <img alt="Chorizo criollo a la parrilla sobre brasas de encina" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_cho" src="\${entrantesDishes[1].image}"/>
                  <button data-open-lightbox="\${entrantesDishes[1].image}" data-lightbox-title="Chorizo y Morcilla" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <h4 class="font-headline-sm text-[18px] text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_cho">Chorizo y Morcilla</h4>
                      <span class="font-label-price text-[18px] text-primary font-bold whitespace-nowrap">5,00 €</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                      Directos de la parrilla de encina, acompañados de pan de hogaza tostado a la brasa.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(entrantesDishes[1].allergens, 'xs')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between text-xs text-secondary border-t border-surface-container">
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">local_fire_department</span> 2 piezas mixtas</span>
                    <button data-add-cart="e1_cho" class="p-1.5 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer" title="Pedir chorizo y morcilla">
                      <span class="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Entrante 3: Pulpo a la Brasa -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(entrantesDishes[2].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative h-48 overflow-hidden bg-surface-container">
                  <img alt="Pata de pulpo tostada a la brasa con toques verdes" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_pul" src="\${entrantesDishes[2].image}"/>
                  <span class="absolute top-2 right-2 bg-secondary text-on-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Top Mar</span>
                  <button data-open-lightbox="\${entrantesDishes[2].image}" data-lightbox-title="Pulpo a la Brasa" class="absolute top-2 left-2 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <h4 class="font-headline-sm text-[18px] text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_pul">Pulpo a la Brasa</h4>
                      <span class="font-label-price text-[18px] text-primary font-bold whitespace-nowrap">24,00 €</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                      Pata entera de pulpo de roca, marcada al carbón, con base de guacamole y aceite de pimentón de la Vera.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(entrantesDishes[2].allergens, 'xs')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between text-xs text-secondary border-t border-surface-container">
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">set_meal</span> Textura tierna</span>
                    <button data-add-cart="e1_pul" class="p-1.5 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer" title="Pedir pulpo a la brasa">
                      <span class="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Entrante 4: Huevos Rotos -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-outline-variant/20 \${isDishExcluded(entrantesDishes[3].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="relative h-48 overflow-hidden bg-surface-container">
                  <img alt="Huevos camperos con patatas pochadas y torrezno crujiente" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_hue" src="\${entrantesDishes[3].image}"/>
                  <button data-open-lightbox="\${entrantesDishes[3].image}" data-lightbox-title="Huevos Rotos" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <h4 class="font-headline-sm text-[18px] text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_hue">Huevos Rotos</h4>
                      <span class="font-label-price text-[18px] text-primary font-bold whitespace-nowrap">16,00 €</span>
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-2">
                      Huevos ecológicos de granja campera, patata agria frita y torrezno crujiente souflé de Soria.
                    </p>
                    <div class="mb-2">
                      \${renderAllergenBadges(entrantesDishes[3].allergens, 'xs')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between text-xs text-secondary border-t border-surface-container">
                    <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">egg_alt</span> Ración generosa</span>
                    <button data-add-cart="e1_hue" class="p-1.5 rounded-full bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary transition-colors cursor-pointer" title="Pedir huevos rotos">
                      <span class="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 3. CATEGORY: POSTRES CASEROS -->
          <section class="menu-group" data-group="postres" style="\${activeCategory === 'all' || activeCategory === 'postres' ? 'display:block;' : 'display:none;'}">
            <div class="flex items-center justify-between pb-6 mb-8 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
              <div class="flex items-center gap-3">
                <span class="p-2.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed">
                  <span class="material-symbols-outlined text-[24px]">bakery_dining</span>
                </span>
                <div>
                  <h3 class="font-headline-md text-headline-md text-on-surface font-semibold">El Broche Dulce</h3>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">Elaborados a diario en nuestro obrador con recetas familiares</p>
                </div>
              </div>
              <span class="font-kicker-eyebrow text-kicker-eyebrow text-secondary uppercase bg-surface-container px-3 py-1 rounded-full">100% Casero</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <!-- Dessert 1: Coulant -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group border border-outline-variant/20 \${isDishExcluded(postresDishes[0].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="md:w-1/2 h-56 md:h-auto relative overflow-hidden bg-surface-container">
                  <img alt="Coulant de chocolate negro con helado artesano" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_coulant" src="\${postresDishes[0].image}"/>
                  <button data-open-lightbox="\${postresDishes[0].image}" data-lightbox-title="Coulant de Chocolate Negro" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-6 md:w-1/2 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-kicker-eyebrow text-[10px] text-primary uppercase tracking-widest font-bold">RECOMENDACIÓN DULCE</span>
                      <span class="font-label-price text-label-price text-primary font-bold">6,50 €</span>
                    </div>
                    <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_coulant">Coulant de Chocolate Negro</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant">
                      Bizcocho tibio de cacao 72% con corazón fundente, acompañado de helado artesano de vainilla Bourbon.
                    </p>
                    <div class="pt-1">
                      \${renderAllergenBadges(postresDishes[0].allergens, 'xs')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                    <span class="font-body-sm text-body-sm text-secondary">Servido al instante</span>
                    <button data-add-cart="e1_coulant" class="p-2 rounded-full bg-surface-container hover:bg-primary text-on-surface hover:text-on-primary transition-colors cursor-pointer shadow-xs" title="Pedir coulant">
                      <span class="material-symbols-outlined text-[18px]">favorite</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Dessert 2: Tarta de Queso -->
              <div class="dish-card bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row group border border-outline-variant/20 \${isDishExcluded(postresDishes[1].allergens) ? 'opacity-40 grayscale' : ''}">
                <div class="md:w-1/2 h-56 md:h-auto relative overflow-hidden bg-surface-container">
                  <img alt="Tarta de queso cremosa horneada estilo San Sebastián" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="e1_tarta" src="\${postresDishes[1].image}"/>
                  <button data-open-lightbox="\${postresDishes[1].image}" data-lightbox-title="Tarta de Queso Cremosa" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                    \${ICONS.zoom}
                  </button>
                </div>
                <div class="p-6 md:w-1/2 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-kicker-eyebrow text-[10px] text-tertiary uppercase tracking-widest font-bold">HORNO TRADICIONAL</span>
                      <span class="font-label-price text-label-price text-primary font-bold">6,50 €</span>
                    </div>
                    <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold cursor-pointer hover:text-primary transition-colors" data-open-dish-modal="e1_tarta">Tarta de Queso Cremosa</h4>
                    <p class="font-body-md text-body-md text-on-surface-variant">
                      Textura ultra fluida en el interior con superficie caramelizada al estilo del norte. Elaborada con mezcla de quesos de oveja y crema.
                    </p>
                    <div class="pt-1">
                      \${renderAllergenBadges(postresDishes[1].allergens, 'xs')}
                    </div>
                  </div>
                  <div class="pt-4 flex items-center justify-between border-t border-surface-container">
                    <span class="font-body-sm text-body-sm text-secondary">Sin bases pesadas</span>
                    <button data-add-cart="e1_tarta" class="p-2 rounded-full bg-surface-container hover:bg-primary text-on-surface hover:text-on-primary transition-colors cursor-pointer shadow-xs" title="Pedir tarta de queso">
                      <span class="material-symbols-outlined text-[18px]">favorite</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>
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

if (!layoutOldPattern.test(content)) {
  console.error('Could not find Estilo 1 layout pattern!');
  process.exit(1);
}

content = content.replace(layoutOldPattern, newEstilo1Layout);
console.log('Layout replaced successfully');

// 3. Update cat-filter handler in setupGlobalEvents to toggle menu groups smoothly without losing scroll
const oldCatFilter = `      // 1.9 Manejador de filtros por píldora de categoría en subnav Stitch
      const catPill = e.target.closest('.cat-filter');
      if (catPill) {
        e.preventDefault();
        const cat = catPill.getAttribute('data-cat');
        if (cat === 'all') {
          store.setCategory('all');
        } else {
          const preset = store.getPreset();
          const match = preset.categories.find(c => c.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(c.toLowerCase()));
          store.setCategory(match || cat);
        }
        return;
      }`;

const newCatFilter = `      // 1.9 Manejador de filtros por píldora de categoría en subnav Stitch
      const catPill = e.target.closest('.cat-filter');
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

if (content.includes(oldCatFilter)) {
  content = content.replace(oldCatFilter, newCatFilter);
  console.log('Category filter handler updated successfully');
} else {
  console.warn('Could not find exact old cat-filter snippet; skipping minor handler tweak');
}

fs.writeFileSync('assets/js/app.js', content, 'utf8');
console.log('Saved assets/js/app.js successfully!');
