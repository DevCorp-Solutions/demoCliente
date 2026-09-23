// estilo3/data.js - Datos oficiales y configurables para Pizzería Carlos Carabanchel
(function() {
  const DEFAULT_DATA = {
  "id": "estilo3",
  "styleName": "Estilo 3",
  "styleSubtitle": "Trattoria & Forno Napolitano",
  "layoutType": "bistro",
  "themeClass": "theme-estilo-3",
  "name": "Pizzería Carlos Carabanchel",
  "chefName": "Matteo Bellini",
  "chefTitle": "Maestro Pizzaiolo",
  "tagline": "L'Arte della Pizza Napoletana Contemporanea in Forno a Legna",
  "neighborhood": "Carabanchel (Madrid)",
  "address": "Calle del Toboso, 114 · Carabanchel, 28019 Madrid",
  "phone": "+34 914 22 13 13",
  "whatsapp": "34695590754",
  "email": "gerencia@pizzeriacarlos.es",
  "managerName": "Matteo Bellini (Maestro Pizzaiolo)",
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pizzer%C3%ADa+Carlos,+Calle+del+Toboso,+114,+28019+Madrid",
  "type": "Pizzería Artesanal & Trattoria Gourmet",
  "rating": 4.9,
  "totalReviews": 614,
  "serviceNote": "Horno encendido: 13:00 a 16:30 y 20:00 a 00:00 (Reparto a domicilio propio sin comisiones)",
  "bannerImg": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
  "aboutUs": {
    "headline": "De Nápoles a Carabanchel: La Verdadera Pizza Ligera que No Hincha",
    "story": "Matteo Bellini creció entre los sacos de harina de Nápoles. Cuando llegó a Carabanchel, trajo consigo una cepa de masa madre viva heredada de su familia y una misión: demostrar que una pizza de verdad es ligera, digestiva y un homenaje al producto de origen. En nuestro obrador de la calle del Toboso no existen las prisas: la masa madura durante 48 a 72 horas en frío antes de entrar a nuestro horno de piedra volcánica a 480ºC.",
    "quote": "La harina, el agua pura, la sal marina y la levadura solo necesitan una virtud que hoy pocos tienen: paciencia y 48 horas de fermentación natural.",
    "quoteAuthor": "Matteo Bellini, Maestro Pizzaiolo",
    "pillars": [
      {
        "num": "01",
        "title": "Fermentación Natural 48–72h",
        "desc": "Masa altamente hidratada (75%) que madura lentamente en frío para una digestión ultraligera sin pesadez ni sed posterior."
      },
      {
        "num": "02",
        "title": "Horno de Piedra a 480ºC",
        "desc": "Cocción relámpago en 70 segundos para inflar un 'cornicione' alveolado, ligero y crujiente con toque ahumado."
      },
      {
        "num": "03",
        "title": "100% Ingredientes DOP Campania",
        "desc": "Tomates San Marzano del Vesubio, mozzarella fior di latte fresca de Agerola y albahaca genovesa recién cortada."
      }
    ],
    "specialtyHighlight": {
      "title": "Pizza Tartufo & Funghi Porcini Selvatici",
      "badge": "Premiada 2024",
      "doughHydration": "75% Hidratación · Masa Madre 48h",
      "originTag": "Campania & Umbría",
      "text": "Crema de trufa negra de Norcia, fior di latte fresco fundente, boletus edulis silvestres salteados y lascas de Parmigiano Reggiano DOP con 24 meses de curación."
    }
  },
  "categories": [
    "Pizzas Gourmet",
    "Pizzas Clásicas DOP",
    "Pastas Frescas al Huevo",
    "Postres Italianos",
    "Vinos & Birra"
  ],
  "menu": [
    {
      "id": "e3_1",
      "name": "Pizza Tartufo & Funghi Porcini Selvatici",
      "category": "Pizzas Gourmet",
      "price": 15.5,
      "badge": "Premiada 2024",
      "description": "Crema de trufa negra de Norcia, fior di latte fresco, boletus edulis salteados al romero y lascas de Parmigiano Reggiano 24 meses.",
      "details": "75% Hidratación · Harina molida a la piedra",
      "ingredients": "Fior di latte de Agerola, crema de trufa negra de Umbría, boletus edulis, Parmigiano Reggiano DOP 24 meses y AOVE.",
      "pairing": "Vino Tinto Chianti Classico DOCG",
      "prepTime": "10 min",
      "dietary": "Masa Madre 48h · Digestión Ligera",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa"
      ]
    },
    {
      "id": "e3_2",
      "name": "Pizza Burrata Pugliese & Prosciutto di Parma DOP",
      "category": "Pizzas Gourmet",
      "price": 16,
      "badge": "Burrata Entera 125g",
      "description": "Base crujiente de masa madre con tomate San Marzano, burrata cremosa fresca de Puglia colocada en frío al salir del horno, jamón de Parma y pesto.",
      "details": "78% Hidratación · Burrata fresca en frío",
      "ingredients": "Tomate San Marzano DOP, burrata fresca de Puglia 125g, Prosciutto di Parma curado 18 meses, pesto genovés y piñones tostados.",
      "pairing": "Vino Blanco Pinot Grigio del Véneto",
      "prepTime": "10 min",
      "dietary": "Producto DOP Importado de Italia",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa",
        "frutos_secos"
      ]
    },
    {
      "id": "e3_3",
      "name": "Pizza Diavola Piccante Spianata Calabra",
      "category": "Pizzas Clásicas DOP",
      "price": 13.5,
      "badge": "Picante Equilibrado",
      "description": "Tomates San Marzano triturados a mano, mozzarella fundente, auténtica spianata picante de Calabria y aceite aromatizado con guindilla fresca.",
      "details": "Calabria DOP · Toque ahumado en horno de piedra",
      "ingredients": "Tomate San Marzano DOP, mozzarella fior di latte, salami spianata piccante calabra, albahaca fresca y aceite de guindilla.",
      "pairing": "Birra Moretti helada",
      "prepTime": "8 min",
      "dietary": "Picante Tradicional Italiano",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa"
      ]
    },
    {
      "id": "e3_4",
      "name": "Ravioli de Calabaza Asada y Ricotta con Salvia",
      "category": "Pastas Frescas al Huevo",
      "price": 14.2,
      "badge": "Pasta Fresca del Día",
      "description": "Pasta fresca al huevo estirada a mano cada mañana, rellena de calabaza asada caramelizada, ricotta fresca de oveja, mantequilla dorada y avellanas.",
      "details": "Elaborada artesanalmente cada mañana",
      "ingredients": "Harina de sémola de trigo duro, huevo de corral, calabaza asada, ricotta fresca, mantequilla de pasto, hojas de salvia y avellanas.",
      "pairing": "Vino Blanco Vermentino di Sardegna",
      "prepTime": "12 min",
      "dietary": "Vegetariano · Pasta Hecha a Mano",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa",
        "huevo",
        "frutos_secos"
      ]
    },
    {
      "id": "e3_5",
      "name": "Lasagna Tradizionale Bolognese al Forno",
      "category": "Pastas Frescas al Huevo",
      "price": 13,
      "badge": "Receta de la Nonna",
      "description": "Capas de pasta al huevo fina con ragú boloñés cocinado a fuego lento durante 4 horas, bechamel suave y gratén de Parmigiano Reggiano.",
      "details": "Cocción lenta de 4 horas · Gratinado al horno",
      "ingredients": "Láminas de pasta al huevo, carne de ternera y cerdo picada a cuchillo, sofrito de verduras, tomate San Marzano, bechamel y parmesano.",
      "pairing": "Vino Tinto Barbera d'Asti",
      "prepTime": "14 min",
      "dietary": "Receta Familiar Tradicional",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa",
        "huevo"
      ]
    },
    {
      "id": "e3_6",
      "name": "Auténtico Tiramisú Tradizionale di Treviso",
      "category": "Postres Italianos",
      "price": 6,
      "badge": "Cremoso & Casero",
      "description": "Bizcochos savoiardi empapados en café espresso Illy recién extraído, crema densa de mascarpone italiano y lluvia de cacao puro amargo.",
      "details": "Receta Original de Treviso 1970",
      "ingredients": "Queso mascarpone italiano, café espresso Illy 100% arábica, bizcochos savoiardi de huevo, azúcar de caña y cacao amargo en polvo.",
      "pairing": "Licor Amaretto o Café Espresso",
      "prepTime": "3 min",
      "dietary": "Sin Conservantes · Clásico Napolitano",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa",
        "huevo"
      ]
    }
  ],
  "googleReviews": [
    {
      "id": "rev-p1",
      "author": "Claudia Rossi",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 110 reseñas",
      "rating": 5,
      "timeAgo": "Hace 5 días",
      "comment": "Soy italiana y vivo en Carabanchel: esta pizza en la calle del Toboso es lo más cercano a Nápoles que he probado en Madrid. La masa es ligera como una nube y la burrata fresquísima.",
      "ownerResponse": "Grazie mille Claudia! Usiamo solo farina di tipo 00 e lievitazione di 48 ore. A presto a Carabanchel!"
    },
    {
      "id": "rev-p2",
      "author": "Sergio Navarro",
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
      "badge": "Cliente habitual",
      "rating": 5,
      "timeAgo": "Hace 2 semanas",
      "comment": "Hicimos el pedido a domicilio desde su propia web y nos llegó en 25 minutos perfecto. Mucho mejor que pedir por intermediarios porque la pizza llega en su caja térmica crujiente y caliente.",
      "ownerResponse": null
    },
    {
      "id": "rev-p3",
      "author": "Elena Vidal",
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 36 reseñas",
      "rating": 5,
      "timeAgo": "Hace 1 mes",
      "comment": "El tiramisú es espectacular y la pizza Tartufo un pecado. Muy buena atención tanto en el local como por teléfono. Ya somos clientes fijos de los domingos.",
      "ownerResponse": null
    }
  ]
};

  function loadData() {
    let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    if (typeof localStorage !== 'undefined') {
      try {
        const custom = localStorage.getItem('devcorp_data_estilo3');
        if (custom) {
          const parsed = JSON.parse(custom);
          data = { ...data, ...parsed };
        }
        const unifiedName = localStorage.getItem('devcorp_unified_name');
        if (unifiedName && unifiedName.trim() !== '') {
          data.name = unifiedName.trim();
        }
      } catch (e) {
        console.warn("Error cargando datos personalizados de estilo3:", e);
      }
    }
    return data;
  }

  const loaded = loadData();
  window.CURRENT_PRESET = loaded;
  window.ESTILO3_DATA = loaded;
  window.DEV_CORP_STYLES = window.DEV_CORP_STYLES || {};
  window.DEV_CORP_STYLES['estilo3'] = loaded;
})();
