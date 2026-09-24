// estilo4/data.js - Datos reales de Cafetería Veinti7 Cervecería (Cervecería 27 Aluche)
// Fuente: https://www.cerveceria27aluche.com/ (Inicio, Menú, Sobre nosotros, Contacto).
// REGLA: no añadir productos, precios, horarios ni opiniones que no existan en la web oficial.
// Los campos vacíos se muestran en la web como "Consultar en barra" o se ocultan.
(function() {
  const DEFAULT_DATA = {
  "id": "estilo4",
  "dataVersion": 4,
  "styleName": "Estilo 4",
  "styleSubtitle": "Showcase Visual · Cervecería de barrio",
  "layoutType": "showcase",
  "themeClass": "theme-estilo-4",
  "name": "Cafetería Veinti7 Cervecería",
  "shortName": "Veinti7",
  "tagline": "Cervecería artesanal, raciones y un buen ambiente.",
  "heroTitle": "Un bar donde todos disfrutamos",
  "neighborhood": "Aluche · Latina (Madrid)",
  "address": "C. de Quero, 27, Latina, 28024 Madrid, España",
  "addressShort": "C. de Quero, 27 · Aluche",
  "phone": "638 057 327",
  "phoneIntl": "+34638057327",
  // Número configurado en el botón de WhatsApp (plugin Click to Chat) de la web oficial.
  "whatsapp": "34638057328",
  "email": "diyanayz@gmail.com",
  "officialUrl": "https://www.cerveceria27aluche.com/",
  // Sistema de reservas actual: JetAppointments Booking (WordPress) en /contacto/.
  "bookingUrl": "https://www.cerveceria27aluche.com/contacto/",
  "bookingSteps": [
    { "title": "Elige «Reserva mesa»", "desc": "Selecciona el servicio en el desplegable «Seleccionar reserva»." },
    { "title": "Escoge día y hora", "desc": "El calendario te muestra los huecos disponibles." },
    { "title": "Completa tus datos", "desc": "Nombre, apellido, correo electrónico y número de personas. Pulsa «Reservar»." }
  ],
  "googleMapsUrl": "https://www.google.com/maps/place/Cervecer%C3%ADa+27+Bar+de+Tapas/@40.3920107,-3.7602713,15z/data=!4m2!3m1!1s0x0:0xe14a05a94df350f0",
  "googleDirectionsUrl": "https://www.google.com/maps/dir//Cervecer%C3%ADa+27+Bar+de+Tapas,+C.+de+Quero,+27,+Latina,+28024+Madrid,+Espa%C3%B1a/@40.3920107,-3.7602713,2875m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0xd418815be4e76c1:0xe14a05a94df350f0!2m2!1d-3.7602713!2d40.3920107!5m1!1e2",
  "googleMapsEmbed": "https://maps.google.com/maps?q=Cervecer%C3%ADa%2027%20Bar%20de%20Tapas%2C%20C.%20de%20Quero%2C%2027%2C%2028024%20Madrid&z=16&output=embed",
  "geo": { "lat": 40.3920107, "lng": -3.7602713 },
  // Horario oficial (ficha de Google del local).
  "serviceHours": "Lunes a jueves: 18:00 - 0:30 · Viernes: 18:00 - 1:00 · Sábado: 13:00 - 1:00 · Domingo: 13:00 - 24:00",
  "hours": [
    { "days": "Lunes a jueves", "time": "18:00 – 0:30" },
    { "days": "Viernes", "time": "18:00 – 1:00" },
    { "days": "Sábado", "time": "13:00 – 1:00" },
    { "days": "Domingo", "time": "13:00 – 24:00" }
  ],
  "legal": {
    "avisoLegal": "https://www.cerveceria27aluche.com/aviso-legal/",
    "privacidad": "https://www.cerveceria27aluche.com/politica-de-privacidad/",
    "accesibilidad": "https://www.cerveceria27aluche.com/accesibilidad/",
    "cookies": "https://www.cerveceria27aluche.com/politica-de-cookies-ue/"
  },
  "aboutUs": {
    "headline": "Nuestro bar",
    "story": "En Cafetería Veinti7 Cervecería te ofrecemos cerveza artesanal fría, raciones ideales para compartir y un ambiente adecuado para que disfrutes en familia o con tus amigos.",
    "storyExtra": "Descubre nuestra pasión por la cerveza artesanal y brindemos por los buenos momentos.",
    "who": "En Cafetería Veinti7 Cervecería representamos la combinación de tradición y compromiso con la calidad. Nuestro equipo está preparado para darte un servicio profesional y productos que marcan la diferencia.",
    "pillars": [
      { "icon": "beer", "title": "Cerveza artesanal y helada", "desc": "Nuestra cerveza artesanal siempre está servida en su punto gracias a nuestras potentes neveras." },
      { "icon": "people", "title": "Sitio acogedor", "desc": "Perfecto para familias, amigos y para disfrutar de partidos en buena compañía." },
      { "icon": "pin", "title": "Ubicación ideal", "desc": "A un paso cerca del parque de Aluche, nuestro bar se encuentra con fácil acceso y buen ambiente." }
    ],
    "values": [
      { "title": "Integridad", "desc": "Nos guiamos por altos principios éticos que respaldan cada decisión y acción que llevamos a cabo." },
      { "title": "Pasión", "desc": "En cada detalle de nuestro trabajo se refleja un compromiso genuino con la calidad y el servicio." },
      { "title": "Diversidad", "desc": "Valoramos la diversidad y promovemos un entorno inclusivo que enriquece a nuestros clientes y equipo." }
    ]
  },
  // Agrupación visual de la carta. "group" = pestaña principal, "category" = filtro secundario.
  "menuGroups": [
    {
      "id": "cervezas",
      "label": "Cervezas",
      "title": "Cervezas artesanales",
      "image": "img/grifo-dorado.webp",
      "categories": ["Mahou", "Alhambra", "Importaciones"]
    },
    {
      "id": "raciones",
      "label": "Raciones",
      "title": "Raciones para compartir",
      "image": "img/raciones.webp",
      "categories": ["Raciones"]
    }
  ],
  "categories": ["Mahou", "Alhambra", "Importaciones", "Raciones"],
  // price = precio mínimo, priceMax = precio máximo (la web oficial indica rangos "3,50 € - 4 €").
  // price 0 = la web oficial no publica precio -> se muestra "Consultar en barra".
  // Raciones: "image" = foto orientativa (Wikimedia Commons, con "imageCredit" obligatorio por licencia CC).
  //   Sustituir por fotos reales del local cuando existan (se puede hacer desde /admin).
  // Opcionales para la jarra animada de la carta:
  //   "logo": "img/marcas/mahou.png"  -> logo oficial de la marca dentro de la jarra (si no, emblema con el nombre)
  //   "brand": "Mahou"                -> texto del emblema (por defecto: la marca/categoría o el nombre en Importaciones)
  //   "color": "#4a2311"              -> color de la cerveza (por defecto se deduce: dunkel/roja/tostada o dorada)
  "menu": [
    { "id": "m1", "group": "cervezas", "category": "Mahou", "name": "Mahou clásica de barril", "description": "Mahou 5 Estrellas", "abv": null, "price": 0, "priceMax": null, "tags": [], "image": "", "allergens": [] },
    { "id": "m2", "group": "cervezas", "category": "Mahou", "name": "Maestra doble lúpulo", "description": "", "abv": 7.5, "price": 3.5, "priceMax": 4, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "m3", "group": "cervezas", "category": "Mahou", "name": "Maestra dunkel", "description": "", "abv": 6.1, "price": 3.5, "priceMax": 4, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "m4", "group": "cervezas", "category": "Mahou", "name": "Barrica", "description": "", "abv": 6.1, "price": 4, "priceMax": 4.5, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "m5", "group": "cervezas", "category": "Mahou", "name": "Mahou sin gluten", "description": "", "abv": 5.5, "price": 3, "priceMax": 3.5, "badge": "", "tags": ["Sin gluten"], "image": "", "allergens": [] },
    { "id": "m6", "group": "cervezas", "category": "Mahou", "name": "Mahou IPA session", "description": "", "abv": 4.5, "price": 3.5, "priceMax": 4, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "m7", "group": "cervezas", "category": "Mahou", "name": "Mahou sin alcohol", "description": "0,0 Tostada", "abv": 0, "price": 2.5, "priceMax": 3, "badge": "", "tags": ["0,0"], "image": "", "allergens": [] },
    { "id": "a1", "group": "cervezas", "category": "Alhambra", "name": "Alhambra especial", "description": "", "abv": 5.4, "price": 3, "priceMax": 3.5, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "a2", "group": "cervezas", "category": "Alhambra", "name": "1925 verde", "description": "", "abv": 6.4, "price": 4, "priceMax": 4.5, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "a3", "group": "cervezas", "category": "Alhambra", "name": "1925 roja", "description": "", "abv": 7.2, "price": 4.5, "priceMax": 5, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "i1", "group": "cervezas", "category": "Importaciones", "name": "Grimbergen", "description": "", "abv": 6.5, "price": 4.5, "priceMax": 5, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "i2", "group": "cervezas", "category": "Importaciones", "name": "König Ludwig Weissbier", "description": "", "abv": 5.5, "price": 4, "priceMax": 4.5, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "i3", "group": "cervezas", "category": "Importaciones", "name": "Coronita", "description": "", "abv": 4.5, "price": 3.5, "priceMax": 4, "badge": "", "tags": [], "image": "", "allergens": [] },
    { "id": "r1", "group": "raciones", "category": "Raciones", "name": "Pulpo a la gallega con patatas", "description": "", "abv": null, "price": 15, "priceMax": null, "badge": "", "tags": [], "image": "img/racion-pulpo.webp", "imageCredit": { "author": "Juan Emilio Prades Bel", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pulpo_a_la_gallega_con_cachelos.jpg" }, "allergens": [] },
    { "id": "r2", "group": "raciones", "category": "Raciones", "name": "Calamares fritos o puntillas", "description": "", "abv": null, "price": 10, "priceMax": null, "badge": "", "tags": [], "image": "img/racion-calamares.webp", "imageCredit": { "author": "Tamorlan", "license": "CC BY 3.0", "url": "https://commons.wikimedia.org/wiki/File:Raci%C3%B3n_de_Calamares_(El_Brillante).jpg" }, "allergens": [] },
    { "id": "r3", "group": "raciones", "category": "Raciones", "name": "Patatas bravas", "description": "", "abv": null, "price": 7, "priceMax": null, "badge": "", "tags": [], "image": "img/racion-bravas.webp", "imageCredit": { "author": "Kent Wang", "license": "CC BY-SA 2.0", "url": "https://commons.wikimedia.org/wiki/File:Patatas_bravas_(49415380638).jpg" }, "allergens": [] },
    { "id": "r4", "group": "raciones", "category": "Raciones", "name": "Huevos rotos con jamón o bacon", "description": "", "abv": null, "price": 11, "priceMax": null, "badge": "", "tags": [], "image": "img/racion-huevos-rotos.webp", "imageCredit": { "author": "Tamorlan", "license": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Huevos_rotos_-_Madrid.JPG" }, "allergens": [] },
    { "id": "r5", "group": "raciones", "category": "Raciones", "name": "Chorizo criollo con patatas fritas", "description": "", "abv": null, "price": 9.5, "priceMax": null, "badge": "", "tags": [], "image": "img/racion-chorizo.webp", "imageCredit": { "author": "Juan Emilio Prades Bel", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Patatas_fritas_con_chorizos,_Maestrazgo.jpg" }, "allergens": [] }
  ],
  // Reseñas de Google mostradas en la web oficial (widget Trustindex). Texto literal.
  "googleReviews": [
    {
      "id": "g1",
      "author": "Diyana Yordanova Zhekova",
      "rating": 5,
      "date": "2024-11-07",
      "comment": "El mejor café, la mejor cerveza, los mejores platos, el mejor trato...¿Qué más se puede pedir?"
    },
    {
      "id": "g2",
      "author": "Daniel Jimenez",
      "rating": 5,
      "date": "2024-09-27",
      "comment": "Diana la dueña y Zhivko son supermajetes y los camareros también, la comida calidad precio estupenda, acaban de cambiar la carta y han dado un salto más de calidad, un gran sitio para pasar un buen rato con los amigos y ser asiduo todas las semana"
    }
  ]
};

  function loadData() {
    let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    if (typeof localStorage !== 'undefined') {
      try {
        const custom = localStorage.getItem('devcorp_data_estilo4');
        if (custom) {
          const parsed = JSON.parse(custom);
          // Ignora personalizaciones guardadas del antiguo Estilo 4 (Cafetería Campamento).
          if (parsed.dataVersion === DEFAULT_DATA.dataVersion) {
            data = { ...data, ...parsed };
          }
        }
        const unifiedName = localStorage.getItem('devcorp_unified_name');
        if (unifiedName && unifiedName.trim() !== '') {
          data.name = unifiedName.trim();
        }
      } catch (e) {
        console.warn("Error cargando datos personalizados de estilo4:", e);
      }
    }
    return data;
  }

  const loaded = loadData();
  window.CURRENT_PRESET = loaded;
  window.ESTILO4_DATA = loaded;
  window.DEV_CORP_STYLES = window.DEV_CORP_STYLES || {};
  window.DEV_CORP_STYLES['estilo4'] = loaded;
})();
