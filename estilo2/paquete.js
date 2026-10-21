/**
 * DevCorp Solutions · Paquetes comerciales (Esencial · Profesional · Premium)
 * Sistema adaptado a las especificaciones comerciales para hostelería.
 */
(function () {
  'use strict';

  var KEY = 'devcorp_paquete_v2';
  var LANG_KEY = 'devcorp_lang_v2';

  // Desactivar restauración automática de scroll del navegador para evitar saltos indeseados
  if ('scrollRestoration' in history) {
    try { history.scrollRestoration = 'manual'; } catch (e) {}
  }

  function resetAllScroll() {
    var targets = [document.documentElement, document.body, document.getElementById('dc-root')];
    var hosts = document.querySelectorAll('.sc-host');
    for (var j = 0; j < hosts.length; j++) targets.push(hosts[j]);

    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (!el) continue;
      var prev = el.style.scrollBehavior;
      el.style.scrollBehavior = 'auto';
      el.scrollTop = 0;
      el.style.scrollBehavior = prev;
    }
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (e) { window.scrollTo(0, 0); }
  }

  // Si se solicitó volver arriba tras cambiar paquete
  if (sessionStorage.getItem('devcorp_scroll_top') === '1') {
    sessionStorage.removeItem('devcorp_scroll_top');
    resetAllScroll();
    setTimeout(resetAllScroll, 60);
    setTimeout(resetAllScroll, 200);
  }

  var LIST = [
    { 
      id: 'esencial', 
      label: 'Paquete Esencial', 
      price: '590 €',
      badgeClass: 'badge-esencial',
      summary: 'Landing 1 pág. · Carta hasta 60 platos · Teléfono info · Sin fotos de plato · 1 Idioma'
    },
    { 
      id: 'profesional', 
      label: 'Paquete Profesional', 
      price: '1.190 €',
      badgeClass: 'badge-profesional',
      summary: 'Web completa · Carta ilimitada + Filtros alérgenos · Fotos por plato · Panel edición · 2 Idiomas'
    },
    { 
      id: 'premium', 
      label: 'Paquete Premium', 
      price: 'desde 2.490 €',
      badgeClass: 'badge-premium',
      summary: 'Web a medida · Reserva Integrada · Eventos y Grupos · Blog · Widget Reseñas · 3 Idiomas'
    }
  ];

  var RANK = { esencial: 0, profesional: 1, premium: 2 };
  var DEFAULT = 'premium';

  var valid = function (v) { return Object.prototype.hasOwnProperty.call(RANK, v); };
  var save = function (v) { try { localStorage.setItem(KEY, v); } catch (e) {} };

  var fromUrl = null;
  try { fromUrl = new URLSearchParams(location.search).get('paquete'); } catch (e) {}
  var current = fromUrl;
  if (valid(current)) save(current);
  else { try { current = localStorage.getItem(KEY); } catch (e) { current = null; } }
  if (!valid(current)) current = DEFAULT;

  document.documentElement.setAttribute('data-paquete', current);

  // Idioma activo
  var currentLang = 'es';
  try { currentLang = localStorage.getItem(LANG_KEY) || 'es'; } catch(e) {}
  if (current === 'esencial') currentLang = 'es';
  else if (current === 'profesional' && currentLang === 'fr') currentLang = 'es';
  document.documentElement.setAttribute('data-lang', currentLang);

  var api = {
    current: current,
    currentLang: currentLang,
    list: LIST,
    has: function (min) { return RANK[current] >= RANK[min]; },
    is: function (id) { return current === id; },
    getDetails: function(id) {
      id = id || current;
      for (var i = 0; i < LIST.length; i++) {
        if (LIST[i].id === id) return LIST[i];
      }
      return LIST[2];
    },
    optionsHtml: function () {
      return LIST.map(function (p) {
        return '<option value="' + p.id + '"' + (p.id === current ? ' selected' : '') + '>' + p.label + ' (' + p.price + ')</option>';
      }).join('');
    },
    set: function (id) {
      if (!valid(id) || id === current) return;
      current = id;
      api.current = id;
      save(id);
      document.documentElement.setAttribute('data-paquete', id);
      if (id === 'esencial') api.setLang('es');
      sync();

      // Limpiar cualquier hash de ancla de la URL para que no desplace a secciones inferiores
      if (window.location.hash) {
        try {
          history.replaceState(null, document.title, window.location.pathname + window.location.search.replace(/[?&]paquete=[^&]*/g, ''));
        } catch (e) {}
      }

      // Desplazar siempre arriba del todo de forma inmediata en todos los contenedores posibles
      resetAllScroll();

      // En carta.html recargar para re-evaluar la selección de platos básica (60 platos vs ilimitados)
      var isCarta = window.location.pathname.indexOf('carta') !== -1;
      if (isCarta) {
        sessionStorage.setItem('devcorp_scroll_top', '1');
        location.reload();
      } else {
        // En index.html actualizar fluidamente sin recarga y sincronizar animación de scroll
        window.dispatchEvent(new Event('scroll'));
        setTimeout(function () {
          resetAllScroll();
          window.dispatchEvent(new Event('scroll'));
        }, 40);
        setTimeout(function () {
          resetAllScroll();
          window.dispatchEvent(new Event('scroll'));
        }, 120);
      }
    },
    setLang: function(lang) {
      if (!lang) return;
      if (current === 'esencial' && lang !== 'es') return;
      if (current === 'profesional' && lang === 'fr') return;
      currentLang = lang;
      api.currentLang = lang;
      try { localStorage.setItem(LANG_KEY, lang); } catch(e) {}
      document.documentElement.setAttribute('data-lang', lang);
      updateLanguageUI();
      try {
        window.dispatchEvent(new CustomEvent('devcorp:langchange', { detail: { lang: lang } }));
      } catch (e) {}
    },
    openReservaModal: function(zone) {
      if (current === 'esencial') {
        alert('En el Paquete Esencial las reservas online no están disponibles. Información de teléfono: 912 94 84 07.');
        return;
      }
      if (current === 'profesional') {
        // Enlace externo / WhatsApp
        window.open('https://wa.me/34912948407?text=' + encodeURIComponent('Hola, me gustaría reservar una mesa en Bar Punto de Encuentro.'), '_blank');
        return;
      }
      // Premium: Reserva integrada
      var modal = document.getElementById('devcorp-reserva-modal');
      if (modal) {
        var zoneSelect = modal.querySelector('#reserva-zona');
        if (zoneSelect && zone) zoneSelect.value = zone;
        modal.classList.add('is-open');
      }
    },
    closeReservaModal: function() {
      var modal = document.getElementById('devcorp-reserva-modal');
      if (modal) modal.classList.remove('is-open');
    }
  };
  window.DevcorpPaquete = api;

  // Sincronizar selectores
  function sync() {
    var selects = document.querySelectorAll('select[data-paquete-select]');
    for (var i = 0; i < selects.length; i++) {
      var s = selects[i];
      if (!s.options.length) s.innerHTML = api.optionsHtml();
      if (s.value !== current) s.value = current;
    }
    updateLanguageUI();
  }

  // Traducción y selector de idiomas
  var I18N = {
    es: {
      brandSub: 'Bar Cafetería · Aluche · Madrid',
      desayunos: '06:00 Desayunos',
      comer: '13:00 A comer',
      minis: '18:00 Minis',
      cervezas: 'Cervezas',
      finde: '23:00 Finde',
      opiniones: 'Opiniones',
      carta: 'La carta',
      llegar: 'Cómo llegar',
      llamar: 'Llámanos',
      reservaBtn: '🛎️ Reservar',
      reservaBtnFull: '🛎️ Reservar Mesa Online',
      eventos: 'Eventos & Grupos',
      novedades: 'Novedades',
      portada: 'Portada',
      volver: 'Volver',

      heroAddressSub: '28024 Aluche · al lado del Metro y Cercanías',
      heroTagline: 'Desde las 6 de la mañana, el punto de Aluche.',
      heroTelInfo: 'Teléfono · 912 94 84 07',
      heroTelLlamar: 'Llámanos · 912 94 84 07',
      heroOpinionesLink: '⭐ 4,2 en Google · +900 opiniones',
      heroDiaTitle: 'Un día en el Punto · de 6:00 a 2:00',

      desayunosTag: 'Estás aquí',
      desayunosTitle: 'Café y churros',
      desayunosSub: 'Los primeros cafés salen a las seis, con los currantes. De lunes a sábado, desayuno hasta las 12:30.',
      desayunoElDeSiempre: 'El de siempre',
      desayunoElDeSiempreDesc: 'Café + zumo de naranja + uno a elegir:',
      desayunoLecheNote: 'Leche desnatada y sin lactosa, sin pedirlo dos veces.',
      desayunoConMontado: 'Con montado',
      desayunoConMontadoDesc: 'Café + zumo + montado de <span style="font-weight:700">jamón serrano, bacon, lomo, tortilla española, tortilla francesa, vegetal, atún con pimientos, panceta, pollo</span> o <span style="font-weight:700">pollo vegetal</span>.',
      desayunoExtrasTitle: 'Y si el cuerpo pide más',
      desayunoBadge1: 'CHURROS & PORRAS RECIÉN HECHOS',
      desayunoBadge2: 'DESDE LAS 06:00',

      comerTitle: 'A comer',
      comerSub: 'Menú con patatas y bebida, bocata de los de antes o un combinado con su número. Tú dices el número, nosotros ponemos el plato.',
      comerMenusTitle: 'Menús · plato + patatas + refresco o cerveza',
      comerMenusBadge: '✨ MENÚ DEL DÍA DINÁMICO & FUERA DE CARTA (ACTUALIZADO HOY)',
      comerCombinadosTitle: 'Platos combinados',
      comerCombinadosSub: 'del Nº1 al Nº7 · de 8,50 a 16,50 €',
      comerBocadillosTitle: 'Bocadillos',
      comerBocadillosSub: 'bocata / montado',
      comerBocadillosDesc: 'Jamón · bacon · lomo · tortilla española · tortilla francesa · vegetal · <span style="font-weight:800">pepito de ternera</span> · <span style="font-weight:800">calamares</span> · oreja · y lo que haya en la plancha.',
      comerBurgersTitle: 'Hamburguesas',
      comerPepitoBadge1: 'PEPITO DE TERNERA & BOCATAS',
      comerPepitoBadge2: 'AL MOMENTO',

      minisTitle: 'Raciones y minis',
      minisSub: 'Aquí la caña cuesta 1,90 y la jarra es de litro. Lo demás, pregunta en barra.',
      minisConstructorTag: 'Constructor de ronda · solo en el interior',
      minisConstructorTitle: 'Arma tu ronda',
      minisPaso1: '1 · Toca para llenar jarras (hasta 3)',
      minisPaso2: '2 · ¿Con qué?',
      minisTeSale: 'Te sale',
      minisVaciar: 'Vaciar jarras',
      minisPromosTitle: 'Promo minis',
      minisSueltosNote: 'Sueltos: tinto de verano, cerveza o calimocho <span style="font-weight:800">7,50 €</span> · sidra o sangría <span style="font-weight:800">8,50 €</span>',
      minisRacionesTitle: 'Raciones',
      minisRacionesDesc: 'Oreja · bravas · alioli · croquetas de jamón · alitas · calamares · sepia · gambones · nachos con pulled pork o pollo mechado',
      minisVerCarta: 'Todas las raciones en la carta →',
      minisEspecialesTag: 'Raciones especiales · Fusión & Tradición',
      minisEspecialesTitle: 'La carta que no esperas',
      minisEspecialesDesc: 'En esta cocina la oreja a la plancha y la gyoza casera salen por la misma ventanilla. Lo castizo de siempre junto a especialidades orientales y platos de monte con receta propia.',
      minisEspecialesNotice: '⭐ Pregunta qué hay hoy: producto fresco del día, no todo sale todos los días.',
      minisGyozaBadge1: 'GYOZAS CASERAS A LA PLANCHA',
      minisGyozaBadge2: 'RECETA PROPIA',
      minisVerCartaFisica: 'Ver todas las raciones en carta física →',
      minisPizarraTitle: 'Pizarra de la Cocina',
      minisPizarraTag: 'FUERA DE CARTA & GUISOS CASEROS',
      minisCastizoTitle: '¿Prefieres lo castizo de siempre?',
      minisCastizoDesc: 'Torreznos de Soria crujientes, oreja a la plancha con ajillo, bravas caseras y sepia.',
      minisVerRacionesBtn: 'VER RACIONES',

      findeTitle: 'Finde hasta las 2',
      findeSub: 'Viernes y sábado no se cierra hasta las dos de la madrugada. Que no te pille el cierre sin haber cenado.',
      findeFeat1Title: 'Cocina caliente hasta las 02:00',
      findeFeat1Desc: 'Parrilladas a la plancha, sartenes camperas, hamburguesas y bocadillos calientes toda la noche.',
      findeFeat2Title: 'Terraza y barra nocturna',
      findeFeat2Desc: 'Minis de litro de cerveza, calimocho o tinto de verano para compartir con tu peña.',
      findeFeat3Title: 'Horario especial fin de semana',
      findeFeat3Desc: 'Viernes y sábados servicio continuado desde las 06:00 h hasta las 02:00 h ininterrumpido.',
      findeBadgeOferta: 'OFERTA FIN DE SEMANA',
      findeBadgeCena: 'CENA COMPLETA PARA DOS',
      findeParrilladaTitle: 'Parrillada de carne a la brasa',
      findePorPersona: '16 € / persona',
      findeBebidasInc: 'Con 2 bebidas incluidas',
      findePlanchaBadge: 'RECIÉN SACADA DE LA PLANCHA',
      findeGuarnicion: 'Servida con guarnición de patatas fritas caseras y pimientos de Padrón.',
      findePiezasLabel: 'PIEZAS INCLUIDAS EN LA BANDEJA:',
      findePiezaPechuga: 'Pechuga de pollo',
      findePiezaTernera: 'Filete de ternera',
      findePiezaCerdo: 'Chuleta de cerdo',
      findePiezaCostilla: 'Costilla marinada',
      findePiezaLonganiza: 'Longaniza fresca',
      findePiezaMorcilla: 'Morcilla artesana',
      findeBebidasBanner: '<strong style="color:#E3A33B">🍻 2 Bebidas incluidas:</strong> Caña, doble de cerveza, refresco, copa de vino o botellín.',

      cervezasTag: 'Cervecería de Barrio · Grifo y Botellín',
      cervezasTitle: 'Cervezateca de Aluche',
      cervezasPrecio: 'Caña o botellín <span style="font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:40px;color:#E3A33B">1,90 €</span>',
      cervezasTerraza: 'En terraza, +0,10 €',
      cervezasTiradorTitle: 'Tirador de Barril · Elige tu formato:',
      cervezasTiradorSub: 'Cerveza de grifo recién tirada con dos dedos de crema',
      cervezasVariedadesTitle: 'Nuestras 16 Variedades de Botella (Toca para catar):',
      cervezasJarraRecien: 'Jarra recién tirada',
      cervezasMaridajePrefix: '🍻 Marídala con:',
      cervezasVerCartaBtn: 'Ver toda la carta de cervezas y raciones',
      cervezasServicioRapido: 'Servicio rápido en barra y terraza',

      eventosBadge: 'SECCIÓN A MEDIDA · PAQUETE PREMIUM',
      eventosTitle: 'Eventos Privados y Menús de Grupos',
      eventosSub: 'Celebra tus cumpleaños, reuniones de amigos, cenas de empresa o despedidas en Bar Punto de Encuentro. Espacios reservados en terraza exterior o salón interior.',
      eventosSolicitarBtn: '🛎️ Solicitar Reserva de Grupo',
      eventosMenu1Title: 'Menú Picoteo Aluche',
      eventosMenu1Pers: '22 €<span style="font-size:13px;color:#CADDDB"> /pers</span>',
      eventosMenu1Desc: 'Para grupos informales y peñas que quieren buen comer sin complicaciones.',
      eventosMenu1Item1: 'Surtido de tostas de la casa y croquetas caseras',
      eventosMenu1Item2: 'Bravas caseras y oreja crujiente a la plancha con ajillo',
      eventosMenu1Item3: 'Calamares de potera fritos al momento',
      eventosMenu1Item4: '1 Mini de cerveza Mahou o calimocho cada 2 personas',
      eventosMenu1Item5: 'Postre casero y café de pote',
      eventosMenu1Btn: 'Reservar Menú Picoteo',
      eventosMenu2Badge: 'MÁS POPULAR',
      eventosMenu2Title: 'Parrillada Festiva',
      eventosMenu2Pers: '29 €<span style="font-size:13px;color:#CADDDB"> /pers</span>',
      eventosMenu2Desc: 'Comida o cena completa de carne a la brasa con barra libre de bebida.',
      eventosMenu2Item1: 'Ensalada completa con ventresca y queso de cabra',
      eventosMenu2Item2: 'Gran Parrillada de carne: churrasco, panceta, chorizo criollo y morcilla con patatas camperas',
      eventosMenu2Item3: 'Barra libre de cerveza Mahou, sangría y tinto durante la comida',
      eventosMenu2Item4: 'Surtido de tartas artesanales y chupito de la casa',
      eventosMenu2Btn: 'Reservar Parrillada Festiva',
      eventosMenu3Title: 'Evento a Tu Medida',
      eventosMenu3Pers: 'A convenir',
      eventosMenu3Desc: 'Diseñamos el menú, raciones o picoteo según tu presupuesto y número de asistentes.',
      eventosMenu3Item1: 'Opción de terraza exterior semicubierta o salón privado',
      eventosMenu3Item2: 'Menús adaptados 100% para celíacos o vegetarianos',
      eventosMenu3Item3: 'Retransmisión de partidos deportivos en pantalla gigante',
      eventosMenu3Item4: 'Atención directa y personalizada con la dirección',
      eventosMenu3Btn: 'Consultar Disponibilidad',

      novedadesBadge: 'BLOG & NOVEDADES · PAQUETE PREMIUM',
      novedadesTitle: 'Novedades y el Rincón del Punto',
      novedadesSub: 'Actualidad gastronómica, nuevos platos de temporada y el pulso diario de Aluche.',
      novedadesArt1Tag: 'Temporada · 18 Octubre',
      novedadesArt1Title: 'Nuevos torreznos de Soria horneados al punto cada mañana',
      novedadesArt1Desc: 'Corte grueso con corteza hipercrocante y carne jugosa. Perfectos con el aperitivo del mediodía o en montado caliente.',
      novedadesVerEnCarta: 'Ver en carta →',
      novedadesArt2Tag: 'Fin de Semana · 12 Octubre',
      novedadesArt2Title: 'Parrilladas nocturnas hasta las 02:00 h',
      novedadesArt2Desc: 'Los viernes y sábados no cerramos la plancha hasta las dos de la madrugada. Comparte con tus amigos con jarras de cerveza fría.',
      novedadesVerParrilladas: 'Ver parrilladas →',
      novedadesArt3Tag: 'Carta Especial · 5 Octubre',
      novedadesArt3Title: 'La carta que no esperas: Gyozas a la plancha y Wantón crujiente',
      novedadesArt3Desc: 'Nuestra propuesta fusión que arrasa en el barrio: cocina tradicional española combinada con bocados asiáticos recién hechos.',
      novedadesVerEspeciales: 'Ver platos especiales →',

      llegarTitle: 'Cómo llegar',
      llegarDesc: 'Sales del Metro o del Cercanías de Aluche y ya casi estás. C/ Maqueda 138, 28024 Madrid.',
      llegarNoOnlineNote: 'No hacemos reservas online. Llama y te decimos cómo está la cosa.',
      llegarLlamanosBtn: 'Llámanos',
      llegarMapsBtn: 'Abrir en Google Maps',
      llegarHorarioTitle: 'Horario',
      llegarDesayunosNote: 'Desayunos de lunes a sábado hasta las 12:30. Terraza: +0,10 € en cervezas.',
      llegarPlanoEsquematico: 'Plano esquemático, no a escala',

      footerSub: 'Bar cafetería · Aluche · C/ Maqueda 138',
      footerEsencial: '⚙️ Gestión de carta: Asistencia técnica DevCorp (bolsa de horas contratada).',
      footerProfesional: '🔑 Acceso Panel de Gestión de Carta (/admin)',
      footerPremium: '📱 Panel Móvil Autogestionable (Cambio en vivo)',
      footerCartaCompleta: 'Carta completa',
      mobileLlamar: 'Llamar',
      mobileReservar: 'Reservar',
      mobileLlegar: 'Cómo llegar',
      mobileCarta: 'Carta',

      modalReservaTitle: 'Reserva de Mesa · Punto de Encuentro',
      modalReservaBadge: 'SISTEMA DE RESERVAS INTEGRADO (PAQUETE PREMIUM)',
      modalLabelFecha: 'Fecha *',
      modalLabelHora: 'Turno / Hora *',
      modalLabelPersonas: 'Comensales *',
      modalLabelZona: 'Zona Preferida *',
      modalLabelNombre: 'Nombre y Apellidos *',
      modalLabelTel: 'Teléfono móvil *',
      modalLabelNotas: 'Alérgenos o peticiones especiales (opcional)',
      modalPlaceholderNombre: 'Tu nombre',
      modalPlaceholderTel: '600 000 000',
      modalPlaceholderNotas: 'Ej: celiaquía / sin gluten, trona para bebé, etc.',
      modalSubmitBtn: '🛎️ Confirmar Reserva Inmediata',
      modalDisclaimer: 'Sin intermediarios: la confirmación se procesa en tiempo real con el Bar Punto de Encuentro.',
      modalOptPersona1: '1 persona',
      modalOptPersonas2: '2 personas',
      modalOptPersonas3: '3 personas',
      modalOptPersonas4: '4 personas',
      modalOptPersonas5: '5 personas',
      modalOptPersonas6: '6 personas',
      modalOptGrupo710: 'Grupo (7 a 10 personas)',
      modalOptGrupoGrande: 'Grupo grande (+10 personas)',
      modalOptZonaTerraza: '🌿 Terraza Exterior',
      modalOptZonaSalon: '🍽️ Salón Interior',
      modalOptZonaBarra: '🍺 Barra',

      cartaTheMenu: 'The menu · C/ Maqueda 138, Aluche',
      cartaFiltrar: 'Filtrar',
      cartaQuitarFiltros: 'Quitar filtros',
      cartaAlergenosTitle: 'Información sobre alérgenos',
      cartaAlergenosLegal: 'Reglamento (UE) nº 1169/2011 sobre información alimentaria facilitada al consumidor. Si tienes alguna alergia o intolerancia alimentaria, consulta siempre con nuestro personal antes de pedir. Disponemos de opciones sin gluten y adaptaciones en cocina.',
      cartaVolverArriba: '↑ Volver arriba'
    },
    en: {
      brandSub: 'Café Bar · Aluche · Madrid',
      desayunos: '06:00 Breakfast',
      comer: '13:00 Lunch',
      minis: '18:00 Minis & Tapas',
      cervezas: 'Beers',
      finde: '23:00 Weekend',
      opiniones: 'Reviews',
      carta: 'The Menu',
      llegar: 'How to get here',
      llamar: 'Call us',
      reservaBtn: '🛎️ Book a Table',
      reservaBtnFull: '🛎️ Book a Table Online',
      eventos: 'Events & Groups',
      novedades: 'News',
      portada: 'Home',
      volver: 'Back',

      heroAddressSub: '28024 Aluche · next to Metro and Train station',
      heroTagline: 'From 6 in the morning, Aluche’s meeting point.',
      heroTelInfo: 'Phone · 912 94 84 07',
      heroTelLlamar: 'Call us · 912 94 84 07',
      heroOpinionesLink: '⭐ 4.2 on Google · +900 reviews',
      heroDiaTitle: 'A day at El Punto · from 6:00 to 2:00',

      desayunosTag: 'You are here',
      desayunosTitle: 'Coffee & churros',
      desayunosSub: 'First coffees come out at six for the early birds. Monday to Saturday, breakfast until 12:30.',
      desayunoElDeSiempre: 'The Classic',
      desayunoElDeSiempreDesc: 'Coffee + fresh orange juice + choice of one:',
      desayunoLecheNote: 'Skimmed and lactose-free milk available on request.',
      desayunoConMontado: 'With mini sandwich',
      desayunoConMontadoDesc: 'Coffee + juice + mini baguette with <span style="font-weight:700">Serrano ham, bacon, pork loin, Spanish omelette, French omelette, salad, tuna & peppers, streaky bacon, chicken</span> or <span style="font-weight:700">chicken salad</span>.',
      desayunoExtrasTitle: 'And if you fancy more',
      desayunoBadge1: 'FRESHLY MADE CHURROS & PORRAS',
      desayunoBadge2: 'FROM 06:00',

      comerTitle: 'Lunchtime',
      comerSub: 'Set meal with chips and drink, traditional baguette or a combo plate. You name the number, we serve the plate.',
      comerMenusTitle: 'Set meals · dish + chips + soft drink or beer',
      comerMenusBadge: '✨ DAILY SPECIALS & CHEF’S BOARD (UPDATED TODAY)',
      comerCombinadosTitle: 'Combo plates',
      comerCombinadosSub: 'from No. 1 to No. 7 · from €8.50 to €16.50',
      comerBocadillosTitle: 'Baguette Sandwiches',
      comerBocadillosSub: 'large / mini',
      comerBocadillosDesc: 'Ham · bacon · pork loin · Spanish omelette · French omelette · salad · <span style="font-weight:800">beef steak</span> · <span style="font-weight:800">calamari</span> · pork ear · and whatever is on the grill.',
      comerBurgersTitle: 'Burgers',
      comerPepitoBadge1: 'BEEF PEPITO & BAGUETTES',
      comerPepitoBadge2: 'MADE TO ORDER',

      minisTitle: 'Sharing plates & minis',
      minisSub: 'Here a draught beer is €1.90 and our pitcher is a full litre. For anything else, ask at the bar.',
      minisConstructorTag: 'Round builder · indoors only',
      minisConstructorTitle: 'Build your round',
      minisPaso1: '1 · Tap to fill pitchers (up to 3)',
      minisPaso2: '2 · With what tapa?',
      minisTeSale: 'Special price',
      minisVaciar: 'Empty pitchers',
      minisPromosTitle: 'Mini pitcher deals',
      minisSueltosNote: 'Individual: wine spritzer, beer or calimocho <span style="font-weight:800">€7.50</span> · cider or sangria <span style="font-weight:800">€8.50</span>',
      minisRacionesTitle: 'Sharing Platters',
      minisRacionesDesc: 'Pork ear · patatas bravas · alioli · ham croquettes · chicken wings · calamari · cuttlefish · prawns · loaded nachos',
      minisVerCarta: 'All sharing plates on the menu →',
      minisEspecialesTag: 'Special dishes · Fusion & Tradition',
      minisEspecialesTitle: 'The unexpected menu',
      minisEspecialesDesc: 'In this kitchen, grilled pork ear and homemade gyozas come out of the same pass. Authentic Madrid classics alongside Asian delicacies and house recipes.',
      minisEspecialesNotice: '⭐ Ask what’s fresh today: daily market produce, not everything is served daily.',
      minisGyozaBadge1: 'HOMEMADE GRILLED GYOZAS',
      minisGyozaBadge2: 'HOUSE RECIPE',
      minisVerCartaFisica: 'View all sharing plates on physical menu →',
      minisPizarraTitle: 'Kitchen Blackboard',
      minisPizarraTag: 'DAILY SPECIALS & HOMEMADE STEWS',
      minisCastizoTitle: 'Prefer traditional Madrid classics?',
      minisCastizoDesc: 'Crispy Soria pork belly cracklings, garlic pork ear, homemade bravas and grilled cuttlefish.',
      minisVerRacionesBtn: 'VIEW PLATTERS',

      findeTitle: 'Weekend till 2am',
      findeSub: 'Friday and Saturday we don’t close until two in the morning. Don’t miss dinner before closing.',
      findeFeat1Title: 'Hot kitchen until 02:00',
      findeFeat1Desc: 'Mixed grills, country skillets, burgers and warm sandwiches all night long.',
      findeFeat2Title: 'Night terrace and bar',
      findeFeat2Desc: 'One-litre mini pitchers of beer, calimocho or summer wine to share with friends.',
      findeFeat3Title: 'Special weekend schedule',
      findeFeat3Desc: 'Friday and Saturday non-stop continuous service from 06:00 to 02:00 uninterrupted.',
      findeBadgeOferta: 'WEEKEND SPECIAL',
      findeBadgeCena: 'FULL DINNER FOR TWO',
      findeParrilladaTitle: 'Grilled meat mixed platter',
      findePorPersona: '16 € / person',
      findeBebidasInc: 'With 2 drinks included',
      findePlanchaBadge: 'FRESH OFF THE GRILL',
      findeGuarnicion: 'Served with homemade chips and Padrón green peppers.',
      findePiezasLabel: 'CUTS INCLUDED ON THE PLATTER:',
      findePiezaPechuga: 'Chicken breast',
      findePiezaTernera: 'Beef fillet',
      findePiezaCerdo: 'Pork chop',
      findePiezaCostilla: 'Marinated pork ribs',
      findePiezaLonganiza: 'Fresh pork sausage',
      findePiezaMorcilla: 'Artisan black pudding',
      findeBebidasBanner: '<strong style="color:#E3A33B">🍻 2 Drinks included:</strong> Draught beer, double beer, soft drink, wine glass or bottle.',

      cervezasTag: 'Neighbourhood Brewery · Draught & Bottle',
      cervezasTitle: 'Aluche Beer Cellar',
      cervezasPrecio: 'Draught or bottle <span style="font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:40px;color:#E3A33B">1.90 €</span>',
      cervezasTerraza: 'On terrace, +0.10 €',
      cervezasTiradorTitle: 'Draught Taps · Choose your size:',
      cervezasTiradorSub: 'Fresh draught beer poured with two fingers of thick foam',
      cervezasVariedadesTitle: 'Our 16 Bottled Beers (Tap to taste):',
      cervezasJarraRecien: 'Freshly poured pitcher',
      cervezasMaridajePrefix: '🍻 Pair it with:',
      cervezasVerCartaBtn: 'View full beer and food menu',
      cervezasServicioRapido: 'Prompt bar and terrace service',

      eventosBadge: 'CUSTOM SECTION · PREMIUM PACKAGE',
      eventosTitle: 'Private Events & Group Menus',
      eventosSub: 'Celebrate birthdays, friend gatherings, company dinners or farewell parties at Bar Punto de Encuentro. Reserved spaces in outdoor terrace or indoor dining lounge.',
      eventosSolicitarBtn: '🛎️ Request Group Booking',
      eventosMenu1Title: 'Aluche Tapas Feast Menu',
      eventosMenu1Pers: '22 €<span style="font-size:13px;color:#CADDDB"> /pers</span>',
      eventosMenu1Desc: 'For casual groups and friends who enjoy great hearty food with zero fuss.',
      eventosMenu1Item1: 'Assortment of house toasts and homemade croquettes',
      eventosMenu1Item2: 'Homemade patatas bravas and crispy garlic pork ear',
      eventosMenu1Item3: 'Freshly fried tender calamari rings',
      eventosMenu1Item4: '1 Mini pitcher of beer or calimocho per 2 guests',
      eventosMenu1Item5: 'Homemade dessert and traditional coffee',
      eventosMenu1Btn: 'Book Tapas Feast Menu',
      eventosMenu2Badge: 'MOST POPULAR',
      eventosMenu2Title: 'Festive Mixed Grill',
      eventosMenu2Pers: '29 €<span style="font-size:13px;color:#CADDDB"> /pers</span>',
      eventosMenu2Desc: 'Complete meal of charcoal-grilled meats with open bar for drinks.',
      eventosMenu2Item1: 'Full gourmet salad with tuna belly and goat cheese',
      eventosMenu2Item2: 'Grand meat grill: steak, pork belly, chorizo sausage and black pudding with country potatoes',
      eventosMenu2Item3: 'Open bar of Mahou beer, sangria and wine during meal',
      eventosMenu2Item4: 'Selection of artisan cakes and house shot',
      eventosMenu2Btn: 'Book Festive Grill',
      eventosMenu3Title: 'Tailor-Made Event',
      eventosMenu3Pers: 'Custom quote',
      eventosMenu3Desc: 'We tailor the menu, sharing plates and drinks to your budget and party size.',
      eventosMenu3Item1: 'Choice of covered outdoor terrace or private dining area',
      eventosMenu3Item2: 'Menus 100% adapted for coeliacs or vegetarians',
      eventosMenu3Item3: 'Live sports broadcasts on giant screens',
      eventosMenu3Item4: 'Direct and personal coordination with management',
      eventosMenu3Btn: 'Check Availability',

      novedadesBadge: 'BLOG & NEWS · PREMIUM PACKAGE',
      novedadesTitle: 'News & El Punto’s Corner',
      novedadesSub: 'Culinary highlights, new seasonal dishes and the daily heartbeat of Aluche.',
      novedadesArt1Tag: 'Seasonal · October 18',
      novedadesArt1Title: 'Fresh Soria pork belly cracklings oven-crisped each morning',
      novedadesArt1Desc: 'Thick cut with extra crunchy crackling and tender meat. Perfect with midday vermouth or in a warm roll.',
      novedadesVerEnCarta: 'View on menu →',
      novedadesArt2Tag: 'Weekend · October 12',
      novedadesArt2Title: 'Late-night grilled feasts until 02:00 am',
      novedadesArt2Desc: 'Friday and Saturday the grill stays on until two in the morning. Share platters with friends over ice-cold beer pitchers.',
      novedadesVerParrilladas: 'View mixed grills →',
      novedadesArt3Tag: 'Special Menu · October 5',
      novedadesArt3Title: 'The unexpected menu: Pan-seared gyozas & crispy wontons',
      novedadesArt3Desc: 'Our neighbourhood smash-hit fusion: traditional Spanish cooking paired with freshly made Asian bites.',
      novedadesVerEspeciales: 'View special dishes →',

      llegarTitle: 'How to get here',
      llegarDesc: 'Step out of Aluche Metro or Cercanías train station and you are almost there. C/ Maqueda 138, 28024 Madrid.',
      llegarNoOnlineNote: 'Online booking not active in this mode. Call us and we will check table availability.',
      llegarLlamanosBtn: 'Call us',
      llegarMapsBtn: 'Open in Google Maps',
      llegarHorarioTitle: 'Opening Hours',
      llegarDesayunosNote: 'Breakfast Monday to Saturday until 12:30. Terrace: +0.10 € on beers.',
      llegarPlanoEsquematico: 'Schematic map, not to scale',

      footerSub: 'Café bar · Aluche · C/ Maqueda 138',
      footerEsencial: '⚙️ Menu management: DevCorp technical assistance (contracted service hours).',
      footerProfesional: '🔑 Menu Management Dashboard Access (/admin)',
      footerPremium: '📱 Self-Managed Mobile Dashboard (Live updates)',
      footerCartaCompleta: 'Full menu',
      mobileLlamar: 'Call',
      mobileReservar: 'Book',
      mobileLlegar: 'Directions',
      mobileCarta: 'Menu',

      modalReservaTitle: 'Table Reservation · Punto de Encuentro',
      modalReservaBadge: 'INTEGRATED RESERVATION SYSTEM (PREMIUM PACKAGE)',
      modalLabelFecha: 'Date *',
      modalLabelHora: 'Shift / Time *',
      modalLabelPersonas: 'Guests *',
      modalLabelZona: 'Seating Area *',
      modalLabelNombre: 'Full Name *',
      modalLabelTel: 'Mobile Phone *',
      modalLabelNotas: 'Allergies or special requests (optional)',
      modalPlaceholderNombre: 'Your full name',
      modalPlaceholderTel: '+34 600 000 000',
      modalPlaceholderNotas: 'E.g.: coeliac / gluten-free, baby high chair, etc.',
      modalSubmitBtn: '🛎️ Confirm Immediate Booking',
      modalDisclaimer: 'No intermediaries: your reservation request is processed in real time directly with Bar Punto de Encuentro.',
      modalOptPersona1: '1 person',
      modalOptPersonas2: '2 people',
      modalOptPersonas3: '3 people',
      modalOptPersonas4: '4 people',
      modalOptPersonas5: '5 people',
      modalOptPersonas6: '6 people',
      modalOptGrupo710: 'Group (7 to 10 people)',
      modalOptGrupoGrande: 'Large group (+10 people)',
      modalOptZonaTerraza: '🌿 Outdoor Terrace',
      modalOptZonaSalon: '🍽️ Indoor Lounge',
      modalOptZonaBarra: '🍺 Bar Area',

      cartaTheMenu: 'The menu · C/ Maqueda 138, Aluche',
      cartaFiltrar: 'Filter',
      cartaQuitarFiltros: 'Clear filters',
      cartaAlergenosTitle: 'Allergen Information',
      cartaAlergenosLegal: 'EU Regulation No 1169/2011 on the provision of food information to consumers. If you suffer from any food allergy or intolerance, please consult our staff before ordering. Gluten-free alternatives and kitchen adaptations are available.',
      cartaVolverArriba: '↑ Back to top'
    },
    fr: {
      brandSub: 'Bar-Cafétéria · Aluche · Madrid',
      desayunos: '06h00 Petit-déjeuner',
      comer: '13h00 Déjeuner',
      minis: '18h00 Minis & Tapas',
      cervezas: 'Bières',
      finde: '23h00 Week-end',
      opiniones: 'Avis',
      carta: 'Le Menu',
      llegar: 'Comment venir',
      llamar: 'Appelez-nous',
      reservaBtn: '🛎️ Réserver',
      reservaBtnFull: '🛎️ Réserver en ligne',
      eventos: 'Événements & Groupes',
      novedades: 'Actualités',
      portada: 'Accueil',
      volver: 'Retour',

      heroAddressSub: '28024 Aluche · à côté du Métro et Cercanías',
      heroTagline: 'Dès 6 heures du matin, le point de rencontre d’Aluche.',
      heroTelInfo: 'Téléphone · 912 94 84 07',
      heroTelLlamar: 'Appelez-nous · 912 94 84 07',
      heroOpinionesLink: '⭐ 4,2 sur Google · +900 avis',
      heroDiaTitle: 'Une journée au Punto · de 6h00 à 2h00',

      desayunosTag: 'Vous êtes ici',
      desayunosTitle: 'Café et churros',
      desayunosSub: 'Les premiers cafés sont servis à 6h avec les travailleurs. Du lundi au samedi, petit-déjeuner jusqu’à 12h30.',
      desayunoElDeSiempre: 'Le classique',
      desayunoElDeSiempreDesc: 'Café + jus d’orange pressé + au choix :',
      desayunoLecheNote: 'Lait écrémé et sans lactose disponibles sur simple demande.',
      desayunoConMontado: 'Avec mini-sandwich',
      desayunoConMontadoDesc: 'Café + jus + mini-sandwich au <span style="font-weight:700">jambon Serrano, bacon, lomo, tortilla espagnole, omelette, crudités, thon poivrons, poitrine, poulet</span> ou <span style="font-weight:700">poulet crudités</span>.',
      desayunoExtrasTitle: 'Et pour les plus gourmands',
      desayunoBadge1: 'CHURROS ET PORRAS TOUT FRAIS',
      desayunoBadge2: 'DÈS 06H00',

      comerTitle: 'À table',
      comerSub: 'Menu avec frites et boisson, sandwich traditionnel ou assiette combinée numérotée. Dites le numéro, nous servons le plat.',
      comerMenusTitle: 'Menus · plat + frites + boisson ou bière',
      comerMenusBadge: '✨ PLAT DU JOUR DYNAMIQUE & SUGGESTIONS DU CHEF (DU JOUR)',
      comerCombinadosTitle: 'Assiettes combinées',
      comerCombinadosSub: 'du N°1 au N°7 · de 8,50 € à 16,50 €',
      comerBocadillosTitle: 'Sandwiches & Bocadillos',
      comerBocadillosSub: 'grand / mini',
      comerBocadillosDesc: 'Jambon · bacon · lomo · tortilla espagnole · omelette · crudités · <span style="font-weight:800">steak de bœuf</span> · <span style="font-weight:800">calamars</span> · oreille · et tout ce qui grille à la plancha.',
      comerBurgersTitle: 'Burgers',
      comerPepitoBadge1: 'PEPITO DE BŒUF & SANDWICHES',
      comerPepitoBadge2: 'MINUTE',

      minisTitle: 'Plats à partager & minis',
      minisSub: 'Ici le demi est à 1,90 € et la chope fait un litre. Pour le reste, demandez au comptoir.',
      minisConstructorTag: 'Composez votre tournée · en salle',
      minisConstructorTitle: 'Composez votre tournée',
      minisPaso1: '1 · Touchez pour remplir les chopes (max 3)',
      minisPaso2: '2 · Avec quelle tapa ?',
      minisTeSale: 'Prix spécial',
      minisVaciar: 'Vider les chopes',
      minisPromosTitle: 'Formules chopes 1L',
      minisSueltosNote: 'À l’unité : tinto de verano, bière ou calimocho <span style="font-weight:800">7,50 €</span> · cidre ou sangria <span style="font-weight:800">8,50 €</span>',
      minisRacionesTitle: 'Plats à partager',
      minisRacionesDesc: 'Oreille grillée · bravas · aïoli · croquettes de jambon · ailes de poulet · calamars · seiche · gambas · nachos variés',
      minisVerCarta: 'Tous les plats à partager sur le menu →',
      minisEspecialesTag: 'Spécialités · Fusion & Tradition',
      minisEspecialesTitle: 'La carte inattendue',
      minisEspecialesDesc: 'Dans notre cuisine, l’oreille grillée et les gyozas maison sortent du même passe-plat. Les grands classiques madrilènes côtoient les spécialités asiatiques.',
      minisEspecialesNotice: '⭐ Demandez l’arrivage du jour : produits frais du marché, selon disponibilité.',
      minisGyozaBadge1: 'GYOZAS MAISON À LA PLANCHA',
      minisGyozaBadge2: 'RECETTE MAISON',
      minisVerCartaFisica: 'Voir tous les plats à partager sur la carte →',
      minisPizarraTitle: 'Ardoise de la Cuisine',
      minisPizarraTag: 'SUGGESTIONS DU CHEF & MIJOTÉS MAISON',
      minisCastizoTitle: 'Envie des classiques madrilènes ?',
      minisCastizoDesc: 'Torreznos croustillants de Soria, oreille à l’ail, bravas maison et seiche grillée.',
      minisVerRacionesBtn: 'VOIR LES PLATS',

      findeTitle: 'Week-end jusqu’à 2h',
      findeSub: 'Vendredi et samedi, fermeture à deux heures du matin. Ne vous faites pas surprendre sans avoir dîné.',
      findeFeat1Title: 'Cuisine chaude jusqu’à 02h00',
      findeFeat1Desc: 'Grillades à la plancha, poêlées campagnardes, burgers et sandwiches chauds toute la nuit.',
      findeFeat2Title: 'Terrasse et bar de nuit',
      findeFeat2Desc: 'Chopes d’un litre de bière, calimocho ou tinto de verano à partager entre amis.',
      findeFeat3Title: 'Horaires spéciaux week-end',
      findeFeat3Desc: 'Vendredi et samedi service non-stop de 06h00 à 02h00 sans interruption.',
      findeBadgeOferta: 'OFFRE WEEK-END',
      findeBadgeCena: 'DÎNER COMPLET POUR DEUX',
      findeParrilladaTitle: 'Grillade mixte de viandes à la plancha',
      findePorPersona: '16 € / personne',
      findeBebidasInc: '2 boissons incluses',
      findePlanchaBadge: 'TOUT JUSTE SORTI DU GRILL',
      findeGuarnicion: 'Servie avec frites maison et piments de Padrón.',
      findePiezasLabel: 'PIÈCES INCLUSES SUR LE PLAT :',
      findePiezaPechuga: 'Blanc de poulet',
      findePiezaTernera: 'Steak de bœuf',
      findePiezaCerdo: 'Côte de porc',
      findePiezaCostilla: 'Travers de porc mariné',
      findePiezaLonganiza: 'Saucisse fraîche',
      findePiezaMorcilla: 'Boudin noir artisanal',
      findeBebidasBanner: '<strong style="color:#E3A33B">🍻 2 Boissons incluses :</strong> Demi, double bière, soda, verre de vin ou bouteille.',

      cervezasTag: 'Brasserie de Quartier · Pression & Bouteille',
      cervezasTitle: 'Cave à Bières d’Aluche',
      cervezasPrecio: 'Demi ou bouteille <span style="font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:40px;color:#E3A33B">1,90 €</span>',
      cervezasTerraza: 'En terrasse, +0,10 €',
      cervezasTiradorTitle: 'Tirage Pression · Choisissez votre format :',
      cervezasTiradorSub: 'Bière pression fraîchement tirée avec son col de mousse',
      cervezasVariedadesTitle: 'Nos 16 Variétés en Bouteille (Touchez pour goûter) :',
      cervezasJarraRecien: 'Chope fraîchement servie',
      cervezasMaridajePrefix: '🍻 À déguster avec :',
      cervezasVerCartaBtn: 'Voir toute la carte de bières et tapas',
      cervezasServicioRapido: 'Service rapide au comptoir et en terrasse',

      eventosBadge: 'SECTION SUR MESURE · FORFAIT PREMIUM',
      eventosTitle: 'Événements Privés & Menus Groupes',
      eventosSub: 'Célébrez vos anniversaires, réunions d’amis, repas d’entreprise ou fêtes au Bar Punto de Encuentro. Espaces réservés en terrasse ou en salle.',
      eventosSolicitarBtn: '🛎️ Demander une réservation groupe',
      eventosMenu1Title: 'Menu Tapas d’Aluche',
      eventosMenu1Pers: '22 €<span style="font-size:13px;color:#CADDDB"> /pers</span>',
      eventosMenu1Desc: 'Pour groupes d’amis et tablées qui aiment bien manger en toute convivialité.',
      eventosMenu1Item1: 'Assortiment de tartines maison et croquettes au jambon',
      eventosMenu1Item2: 'Patatas bravas maison et oreille grillée à l’ail',
      eventosMenu1Item3: 'Calamars frais frits à la minute',
      eventosMenu1Item4: '1 Chope 1L de bière ou calimocho pour 2 personnes',
      eventosMenu1Item5: 'Dessert maison et café traditionnel',
      eventosMenu1Btn: 'Réserver le Menu Tapas',
      eventosMenu2Badge: 'LE PLUS POPULAIRE',
      eventosMenu2Title: 'Grillade Festive',
      eventosMenu2Pers: '29 €<span style="font-size:13px;color:#CADDDB"> /pers</span>',
      eventosMenu2Desc: 'Repas complet de viandes grillées avec boissons à volonté pendant le repas.',
      eventosMenu2Item1: 'Salade complète gourmande au thon et chèvre',
      eventosMenu2Item2: 'Grande grillade : churrasco, poitrine, chorizo criollo et boudin avec frites campagnardes',
      eventosMenu2Item3: 'Bière Mahou, sangria et vin rouge à volonté pendant le repas',
      eventosMenu2Item4: 'Assortiment de tartes maison et digestif offert',
      eventosMenu2Btn: 'Réserver la Grillade Festive',
      eventosMenu3Title: 'Événement Sur Mesure',
      eventosMenu3Pers: 'Sur devis',
      eventosMenu3Desc: 'Nous adaptons le menu et les tapas selon votre budget et le nombre de convives.',
      eventosMenu3Item1: 'Option terrasse couverte ou espace intérieur privatisé',
      eventosMenu3Item2: 'Menus 100% adaptés aux personnes cœliaques ou végétariennes',
      eventosMenu3Item3: 'Diffusion de matchs de sport sur écran géant',
      eventosMenu3Item4: 'Coordination directe et personnalisée avec la direction',
      eventosMenu3Btn: 'Consulter la disponibilité',

      novedadesBadge: 'BLOG & ACTUALITÉS · FORFAIT PREMIUM',
      novedadesTitle: 'Actualités & Le Coin du Punto',
      novedadesSub: 'Actualités culinaires, nouveaux plats de saison et la vie d’Aluche.',
      novedadesArt1Tag: 'Saison · 18 Octobre',
      novedadesArt1Title: 'Nouveaux torreznos de Soria cuits au four chaque matin',
      novedadesArt1Desc: 'Coupe épaisse avec couenne croustillante et viande tendre. Parfait à l’apéritif ou en sandwich chaud.',
      novedadesVerEnCarta: 'Voir sur la carte →',
      novedadesArt2Tag: 'Week-end · 12 Octobre',
      novedadesArt2Title: 'Grillades nocturnes jusqu’à 02h00',
      novedadesArt2Desc: 'Vendredi et samedi, la plancha reste ouverte jusqu’à deux heures du matin. À partager avec des chopes bien fraîches.',
      novedadesVerParrilladas: 'Voir les grillades →',
      novedadesArt3Tag: 'Carte Spéciale · 5 Octobre',
      novedadesArt3Title: 'La carte inattendue : Gyozas grillés & wontons croustillants',
      novedadesArt3Desc: 'Notre proposition fusion à succès : cuisine espagnole traditionnelle et bouchées asiatiques maison.',
      novedadesVerEspeciales: 'Voir les spécialités →',

      llegarTitle: 'Comment venir',
      llegarDesc: 'Sortez du Métro ou Cercanías d’Aluche et vous y êtes presque. C/ Maqueda 138, 28024 Madrid.',
      llegarNoOnlineNote: 'Pas de réservation en ligne dans ce mode. Appelez-nous pour connaître la disponibilité.',
      llegarLlamanosBtn: 'Appelez-nous',
      llegarMapsBtn: 'Ouvrir dans Google Maps',
      llegarHorarioTitle: 'Horaires',
      llegarDesayunosNote: 'Petit-déjeuner du lundi au samedi jusqu’à 12h30. Terrasse : +0,10 € sur les bières.',
      llegarPlanoEsquematico: 'Plan schématique, non à l’échelle',

      footerSub: 'Café-bar · Aluche · C/ Maqueda 138',
      footerEsencial: '⚙️ Gestion de carte : Assistance technique DevCorp (heures sous contrat).',
      footerProfesional: '🔑 Accès au panneau de gestion de carte (/admin)',
      footerPremium: '📱 Panneau mobile auto-géré (Mise à jour en direct)',
      footerCartaCompleta: 'Carte complète',
      mobileLlamar: 'Appeler',
      mobileReservar: 'Réserver',
      mobileLlegar: 'Comment venir',
      mobileCarta: 'Carte',

      modalReservaTitle: 'Réservation de Table · Punto de Encuentro',
      modalReservaBadge: 'SYSTÈME DE RÉSERVATION INTÉGRÉ (FORFAIT PREMIUM)',
      modalLabelFecha: 'Date *',
      modalLabelHora: 'Créneau / Heure *',
      modalLabelPersonas: 'Couverts *',
      modalLabelZona: 'Zone Souhaitée *',
      modalLabelNombre: 'Nom et Prénom *',
      modalLabelTel: 'Téléphone mobile *',
      modalLabelNotas: 'Allergies ou demandes spéciales (facultatif)',
      modalPlaceholderNombre: 'Votre nom',
      modalPlaceholderTel: '+33 6 00 00 00 00',
      modalPlaceholderNotas: 'Ex : sans gluten, chaise haute, etc.',
      modalSubmitBtn: '🛎️ Confirmer la réservation',
      modalDisclaimer: 'Sans intermédiaire : votre demande est traitée directement en temps réel avec le Bar Punto de Encuentro.',
      modalOptPersona1: '1 personne',
      modalOptPersona2: '2 personnes',
      modalOptPersonas2: '2 personnes',
      modalOptPersonas3: '3 personnes',
      modalOptPersonas4: '4 personnes',
      modalOptPersonas5: '5 personnes',
      modalOptPersonas6: '6 personnes',
      modalOptGrupo710: 'Groupe (7 à 10 personnes)',
      modalOptGrupoGrande: 'Grand groupe (+10 personnes)',
      modalOptZonaTerraza: '🌿 Terrasse Extérieure',
      modalOptZonaSalon: '🍽️ Salle Intérieure',
      modalOptZonaBarra: '🍺 Au Comptoir',

      cartaTheMenu: 'Le menu · C/ Maqueda 138, Aluche',
      cartaFiltrar: 'Filtrer',
      cartaQuitarFiltros: 'Effacer les filtres',
      cartaAlergenosTitle: 'Information sur les allergènes',
      cartaAlergenosLegal: 'Règlement (UE) n° 1169/2011 concernant l’information des consommateurs sur les denrées alimentaires. Si vous souffrez d’allergies ou d’intolérances alimentaires, veuillez en informer notre personnel avant de commander. Options sans gluten et adaptations en cuisine disponibles.',
      cartaVolverArriba: '↑ Haut de page'
    }
  };

  function updateLanguageUI() {
    var dict = I18N[currentLang] || I18N.es;

    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
          if (el.value !== dict[key]) el.value = dict[key];
        } else {
          if (dict[key].indexOf('<') !== -1) {
            if (el.innerHTML !== dict[key]) el.innerHTML = dict[key];
          } else {
            if (el.textContent !== dict[key]) el.textContent = dict[key];
          }
        }
      }
    });

    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined && el.placeholder !== dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // 3. Category tabs in carta.html
    var catDict = {
      es: {
        desayunos: 'Desayunos', menus: 'Menús', combinados: 'Platos combinados', combos: 'Combos y Picoteo',
        bocadillos: 'Bocadillos y Montados', sandwiches: 'Sándwiches', hamburguesas: 'Hamburguesas y Smash',
        perritos: 'Perritos XL 30cm', paninis: 'Paninis al Horno', pizzas: 'Pizzas', tostas: 'Tostas Especiales',
        ensaladas: 'Ensaladas', raciones: 'Raciones y Sartenes', parrillada: 'Parrillada de Carne', bebidas: 'Cervezas y Bebidas',
        entrantes: 'Entrantes', principales: 'Principales', postres: 'Postres'
      },
      en: {
        desayunos: 'Breakfast', menus: 'Set meals', combinados: 'Combo plates', combos: 'Combos & Snacks',
        bocadillos: 'Sandwiches & Rolls', sandwiches: 'Toasted Sandwiches', hamburguesas: 'Burgers & Smash',
        perritos: 'XL Hot Dogs (30cm)', paninis: 'Baked Paninis', pizzas: 'Pizzas', tostas: 'Special Toasts',
        ensaladas: 'Fresh Salads', raciones: 'Sharing Platters', parrillada: 'Mixed Meat Grill', bebidas: 'Beers & Drinks',
        entrantes: 'Starters', principales: 'Mains', postres: 'Desserts'
      },
      fr: {
        desayunos: 'Petit-déjeuner', menus: 'Menus', combinados: 'Assiettes combinées', combos: 'Combos & Tapas',
        bocadillos: 'Sandwiches & Bocadillos', sandwiches: 'Toasts & Croques', hamburguesas: 'Burgers & Smash',
        perritos: 'Hot-dogs XL 30cm', paninis: 'Paninis au four', pizzas: 'Pizzas', tostas: 'Tartines spéciales',
        ensaladas: 'Salades fraîches', raciones: 'Plats à partager', parrillada: 'Grillades de viande', bebidas: 'Bières & Boissons',
        entrantes: 'Entrées', principales: 'Plats', postres: 'Desserts'
      }
    };
    var currentCatDict = catDict[currentLang] || catDict.es;
    document.querySelectorAll('[data-cat]').forEach(function(btn) {
      var catId = btn.getAttribute('data-cat');
      if (currentCatDict[catId] && btn.textContent !== currentCatDict[catId]) {
        btn.textContent = currentCatDict[catId];
      }
    });

    // 4. Allergen filter buttons in carta.html
    var filterDict = {
      es: { 'Sin gluten': 'Sin gluten', 'Sin lactosa': 'Sin lactosa', 'Sin huevo': 'Sin huevo', 'Sin marisco': 'Sin marisco', 'Sin pescado': 'Sin pescado', 'Sin frutos secos': 'Sin frutos secos' },
      en: { 'Sin gluten': 'Gluten-free', 'Sin lactosa': 'Lactose-free', 'Sin huevo': 'Egg-free', 'Sin marisco': 'Shellfish-free', 'Sin pescado': 'Fish-free', 'Sin frutos secos': 'Nut-free' },
      fr: { 'Sin gluten': 'Sans gluten', 'Sin lactosa': 'Sans lactose', 'Sin huevo': 'Sans œuf', 'Sin marisco': 'Sans fruits de mer', 'Sin pescado': 'Sans poisson', 'Sin frutos secos': 'Sans fruits à coque' }
    };
    var currentFilterDict = filterDict[currentLang] || filterDict.es;
    document.querySelectorAll('button[aria-pressed]').forEach(function(btn) {
      var txt = btn.textContent.trim();
      for (var esKey in filterDict.es) {
        if (txt === filterDict.es[esKey] || txt === filterDict.en[esKey] || txt === filterDict.fr[esKey]) {
          var targetText = currentFilterDict[esKey];
          if (btn.textContent !== targetText) btn.textContent = targetText;
          break;
        }
      }
    });

    // 5. Beer category filter buttons in index.html
    var beerCatDict = {
      es: { 'todas': 'Todas (16)', 'rubias': 'Rubias & Castizas', 'tostadas': 'Tostadas & Especiales', 'trigo': 'Trigo & Importación', 'sin-alcohol': '0,0 & Sin Gluten' },
      en: { 'todas': 'All (16)', 'rubias': 'Blonde & Lagers', 'tostadas': 'Amber & Specials', 'trigo': 'Wheat & Imports', 'sin-alcohol': 'Alcohol-Free & Gluten-Free' },
      fr: { 'todas': 'Toutes (16)', 'rubias': 'Blondes & Lagers', 'tostadas': 'Ambrées & Spéciales', 'trigo': 'Blé & Importations', 'sin-alcohol': 'Sans Alcool & Sans Gluten' }
    };
    var currentBeerCatDict = beerCatDict[currentLang] || beerCatDict.es;
    document.querySelectorAll('#cervezas button[aria-pressed]').forEach(function(btn) {
      var txt = btn.textContent.trim();
      for (var catKey in beerCatDict.es) {
        if (txt === beerCatDict.es[catKey] || txt === beerCatDict.en[catKey] || txt === beerCatDict.fr[catKey]) {
          var targetBeerText = currentBeerCatDict[catKey];
          if (btn.textContent !== targetBeerText) btn.textContent = targetBeerText;
          break;
        }
      }
    });

    // 6. Lang switcher buttons style
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      var lang = btn.getAttribute('data-lang');
      if (lang === currentLang) {
        btn.style.background = '#9FD3C7';
        btn.style.color = '#213A3C';
        btn.style.fontWeight = '900';
      } else {
        btn.style.background = 'transparent';
        btn.style.color = '#9FD3C7';
        btn.style.fontWeight = '700';
      }
    });
  }

  // Enviar formulario de reserva interactivo (Premium)
  function handleReservaSubmit(e) {
    if (e) e.preventDefault();
    var form = document.getElementById('reserva-form');
    if (!form) return;

    var fecha = form.querySelector('#reserva-fecha').value;
    var hora = form.querySelector('#reserva-hora').value;
    var personas = form.querySelector('#reserva-personas').value;
    var zona = form.querySelector('#reserva-zona').value;
    var nombre = form.querySelector('#reserva-nombre').value;
    var telefono = form.querySelector('#reserva-telefono').value;
    var notas = form.querySelector('#reserva-notas').value || (currentLang === 'en' ? 'None' : (currentLang === 'fr' ? 'Aucune' : 'Ninguna'));

    if (!fecha || !hora || !nombre || !telefono) {
      alert(currentLang === 'en' ? 'Please fill in all required fields (Date, Time, Name and Phone).' : (currentLang === 'fr' ? 'Veuillez remplir les champs obligatoires (Date, Heure, Nom et Téléphone).' : 'Por favor, completa los campos requeridos (Fecha, Hora, Nombre y Teléfono).'));
      return;
    }

    var msg = (currentLang === 'en' ? 'Hello! I would like to request a reservation at Bar Punto de Encuentro:\n' : (currentLang === 'fr' ? 'Bonjour ! Je souhaite demander une réservation au Bar Punto de Encuentro :\n' : '¡Hola! Solicito una reserva en Bar Punto de Encuentro:\n')) +
              '📅 ' + (currentLang === 'en' ? 'Date' : (currentLang === 'fr' ? 'Date' : 'Fecha')) + ': ' + fecha + '\n' +
              '⏰ ' + (currentLang === 'en' ? 'Time' : (currentLang === 'fr' ? 'Heure' : 'Hora')) + ': ' + hora + '\n' +
              '👥 ' + (currentLang === 'en' ? 'Guests' : (currentLang === 'fr' ? 'Personnes' : 'Personas')) + ': ' + personas + '\n' +
              '📍 ' + (currentLang === 'en' ? 'Area' : (currentLang === 'fr' ? 'Zone' : 'Zona')) + ': ' + zona + '\n' +
              '👤 ' + (currentLang === 'en' ? 'Name' : (currentLang === 'fr' ? 'Nom' : 'Nombre')) + ': ' + nombre + '\n' +
              '📞 ' + (currentLang === 'en' ? 'Phone' : (currentLang === 'fr' ? 'Téléphone' : 'Teléfono')) + ': ' + telefono + '\n' +
              '📝 ' + (currentLang === 'en' ? 'Notes / Allergens' : (currentLang === 'fr' ? 'Remarques / Allergies' : 'Peticiones / Alérgenos')) + ': ' + notas;

    var container = document.getElementById('devcorp-reserva-body');
    if (container) {
      var tSuccessTitle = currentLang === 'en' ? 'Reservation Request Registered!' : (currentLang === 'fr' ? 'Demande de Réservation Enregistrée !' : '¡Solicitud de Reserva Registrada!');
      var tSuccessBody = currentLang === 'en' ?
        ('We have processed your table for <strong>' + personas + ' guests</strong> on <strong>' + fecha + '</strong> at <strong>' + hora + '</strong> in <strong>' + zona + '</strong>.') :
        (currentLang === 'fr' ?
          ('Nous avons enregistré votre table pour <strong>' + personas + ' personnes</strong> le <strong>' + fecha + '</strong> à <strong>' + hora + '</strong> en <strong>' + zona + '</strong>.') :
          ('Hemos procesado tu mesa para <strong>' + personas + ' personas</strong> el día <strong>' + fecha + '</strong> a las <strong>' + hora + '</strong> en <strong>' + zona + '</strong>.'));
      var tSummaryTitle = currentLang === 'en' ? 'Summary sent to kitchen:' : (currentLang === 'fr' ? 'Récapitulatif transmis en cuisine :' : 'Resumen enviado a cocina:');
      var tClient = currentLang === 'en' ? 'Client' : (currentLang === 'fr' ? 'Client' : 'Cliente');
      var tNotesLabel = currentLang === 'en' ? 'Notes' : (currentLang === 'fr' ? 'Remarques' : 'Notas');
      var tConfirmWa = currentLang === 'en' ? '💬 Confirm via WhatsApp' : (currentLang === 'fr' ? '💬 Confirmer par WhatsApp' : '💬 Confirmar por WhatsApp');
      var tClose = currentLang === 'en' ? 'Close' : (currentLang === 'fr' ? 'Fermer' : 'Cerrar');

      container.innerHTML = [
        '<div style="text-align:center;padding:20px 0">',
        '  <div style="font-size:52px;line-height:1;margin-bottom:14px">✅</div>',
        '  <h3 style="font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:28px;color:#213A3C;margin:0 0 10px">' + tSuccessTitle + '</h3>',
        '  <p style="font-size:16px;line-height:1.4;color:#3A5557;max-width:440px;margin:0 auto 20px">',
        '    ' + tSuccessBody,
        '  </p>',
        '  <div style="background:#FFFFFF;border:2px solid #213A3C;border-radius:6px;padding:14px;text-align:left;max-width:440px;margin:0 auto 20px;font-size:13px;line-height:1.5">',
        '    <strong>' + tSummaryTitle + '</strong><br>',
        '    • ' + tClient + ': ' + nombre + ' (' + telefono + ')<br>',
        '    • ' + tNotesLabel + ': ' + notas,
        '  </div>',
        '  <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">',
        '    <a href="https://wa.me/34912948407?text=' + encodeURIComponent(msg) + '" target="_blank" class="reserva-submit-btn" style="text-decoration:none;display:inline-flex;width:auto">' + tConfirmWa + '</a>',
        '    <button type="button" class="btn-tabla" onclick="window.DevcorpPaquete.closeReservaModal()" style="padding:10px 20px;font-size:14px">' + tClose + '</button>',
        '  </div>',
        '</div>'
      ].join('');
    }
  }

  // Inyección de elementos del DOM (Modal de Reserva Integrada)
  function injectDOMElements() {
    if (!document.getElementById('devcorp-reserva-modal')) {
      var today = new Date().toISOString().split('T')[0];
      var resModal = document.createElement('div');
      resModal.id = 'devcorp-reserva-modal';
      resModal.className = 'devcorp-modal-backdrop';
      resModal.innerHTML = [
        '<div class="devcorp-modal-card">',
        '  <div class="devcorp-modal-header">',
        '    <div>',
        '      <h3 data-i18n="modalReservaTitle" style="margin:0;font-family:\'Grandstander\',sans-serif;font-weight:900;font-size:22px">Reserva de Mesa · Punto de Encuentro</h3>',
        '      <span data-i18n="modalReservaBadge" style="font-family:\'Alegreya Sans SC\',sans-serif;font-size:12px;color:#9FD3C7;letter-spacing:.08em">SISTEMA DE RESERVAS INTEGRADO (PAQUETE PREMIUM)</span>',
        '    </div>',
        '    <button type="button" class="devcorp-modal-close" onclick="window.DevcorpPaquete.closeReservaModal()">✕</button>',
        '  </div>',
        '  <div class="devcorp-modal-body" id="devcorp-reserva-body">',
        '    <form id="reserva-form" onsubmit="event.preventDefault(); window.DevcorpPaquete._submitReserva();">',
        '      <div class="reserva-form-grid">',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-fecha" data-i18n="modalLabelFecha">Fecha *</label>',
        '          <input type="date" id="reserva-fecha" class="reserva-input" value="' + today + '" min="' + today + '" required />',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-hora" data-i18n="modalLabelHora">Turno / Hora *</label>',
        '          <select id="reserva-hora" class="reserva-select" required>',
        '            <option value="13:30">13:30 (Comida)</option>',
        '            <option value="14:00" selected>14:00 (Comida)</option>',
        '            <option value="14:30">14:30 (Comida)</option>',
        '            <option value="15:00">15:00 (Comida)</option>',
        '            <option value="20:30">20:30 (Cena)</option>',
        '            <option value="21:00">21:00 (Cena)</option>',
        '            <option value="21:30">21:30 (Cena)</option>',
        '            <option value="22:00">22:00 (Cena)</option>',
        '          </select>',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-personas" data-i18n="modalLabelPersonas">Comensales *</label>',
        '          <select id="reserva-personas" class="reserva-select" required>',
        '            <option value="1" data-i18n="modalOptPersona1">1 persona</option>',
        '            <option value="2" data-i18n="modalOptPersonas2" selected>2 personas</option>',
        '            <option value="3" data-i18n="modalOptPersonas3">3 personas</option>',
        '            <option value="4" data-i18n="modalOptPersonas4">4 personas</option>',
        '            <option value="5" data-i18n="modalOptPersonas5">5 personas</option>',
        '            <option value="6" data-i18n="modalOptPersonas6">6 personas</option>',
        '            <option value="7-10" data-i18n="modalOptGrupo710">Grupo (7 a 10 personas)</option>',
        '            <option value="+10" data-i18n="modalOptGrupoGrande">Grupo grande (+10 personas)</option>',
        '          </select>',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-zona" data-i18n="modalLabelZona">Zona Preferida *</label>',
        '          <select id="reserva-zona" class="reserva-select" required>',
        '            <option value="Terraza Exterior" data-i18n="modalOptZonaTerraza">🌿 Terraza Exterior</option>',
        '            <option value="Salón Interior" data-i18n="modalOptZonaSalon" selected>🍽️ Salón Interior</option>',
        '            <option value="Zona Barra" data-i18n="modalOptZonaBarra">🍺 Barra</option>',
        '          </select>',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-nombre" data-i18n="modalLabelNombre">Nombre y Apellidos *</label>',
        '          <input type="text" id="reserva-nombre" class="reserva-input" placeholder="Tu nombre" data-i18n-placeholder="modalPlaceholderNombre" required />',
        '        </div>',
        '        <div class="reserva-field">',
        '          <label class="reserva-label" for="reserva-telefono" data-i18n="modalLabelTel">Teléfono móvil *</label>',
        '          <input type="tel" id="reserva-telefono" class="reserva-input" placeholder="600 000 000" data-i18n-placeholder="modalPlaceholderTel" required />',
        '        </div>',
        '      </div>',
        '      <div class="reserva-field" style="margin-top:14px">',
        '        <label class="reserva-label" for="reserva-notas" data-i18n="modalLabelNotas">Alérgenos o peticiones especiales (opcional)</label>',
        '        <textarea id="reserva-notas" class="reserva-textarea" rows="2" placeholder="Ej: celiaquía / sin gluten, trona para bebé, etc." data-i18n-placeholder="modalPlaceholderNotas"></textarea>',
        '      </div>',
        '      <div style="margin-top:20px">',
        '        <button type="submit" class="reserva-submit-btn" data-i18n="modalSubmitBtn">🛎️ Confirmar Reserva Inmediata</button>',
        '      </div>',
        '      <p style="margin:10px 0 0;font-size:12px;color:#3F6E72;text-align:center" data-i18n="modalDisclaimer">Sin intermediarios: la confirmación se procesa en tiempo real con el Bar Punto de Encuentro.</p>',
        '    </form>',
        '  </div>',
        '</div>'
      ].join('');
      document.body.appendChild(resModal);
      api._submitReserva = handleReservaSubmit;
    }
  }

  // Delegación de eventos para selectores y botones interactivos
  document.addEventListener('change', function (e) {
    var s = e.target;
    if (s && s.matches && s.matches('select[data-paquete-select]')) {
      api.set(s.value);
    }
  });

  document.addEventListener('click', function (e) {
    // 1. Selector de idiomas
    var langBtn = e.target && e.target.closest ? e.target.closest('.lang-btn') : null;
    if (langBtn) {
      e.preventDefault();
      var lang = langBtn.getAttribute('data-lang');
      api.setLang(lang);
      return;
    }

    // 2. Abrir Reserva Modal
    var resTrigger = e.target && e.target.closest ? e.target.closest('[data-open-reserva-modal]') : null;
    if (resTrigger) {
      e.preventDefault();
      var rZone = resTrigger.getAttribute('data-reserva-zone');
      api.openReservaModal(rZone);
      return;
    }

    // 3. En Esencial: teléfono y WhatsApp solo como texto informativo
    if (current === 'esencial') {
      var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"], a[href*="wa.me/"]') : null;
      if (a) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, true);

  function start() {
    injectDOMElements();
    sync();
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { 
        queued = false; 
        sync(); 
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
