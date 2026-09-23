// estilo4/data.js - Datos oficiales y configurables para Cafetería Campamento & Desayunos Yebes
const DEFAULT_DATA = {
  "id": "estilo4",
  "styleName": "Estilo 4",
  "styleSubtitle": "Showcase Visual & Specialty Coffee",
  "layoutType": "minimal",
  "themeClass": "theme-estilo-4",
  "name": "Cafetería Campamento & Desayunos Yebes",
  "chefName": "Clara Yebes",
  "chefTitle": "Head Barista & Obrador",
  "tagline": "Specialty Coffee Roasters, Organic Brunch & Obrador Artesano",
  "neighborhood": "Campamento / Aluche (Madrid)",
  "address": "Avenida del Padre Piquer, 1 · Campamento, 28024 Madrid",
  "phone": "+34 646 62 17 93",
  "whatsapp": "34695590754",
  "email": "hola@cafeteriacampamento.es",
  "managerName": "Clara Yebes (Coordinación de Obrador)",
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafeteria+Campamento,+Avenida+del+Padre+Piquer,+1,+28024+Madrid",
  "type": "Café de Especialidad & Obrador Brunch",
  "rating": 4.8,
  "totalReviews": 395,
  "openingHours": "Lunes a Domingo: 07:30 a 19:30 (Desayunos y brunch ininterrumpidos)",
  "bannerImg": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
  "aboutUs": {
    "headline": "Café de Especialidad con Alma, Masas Madres Vivas y Desayunos Conscientes en Campamento",
    "story": "Cafetería Campamento nació con el propósito de acercar la cultura del café de especialidad y la comida saludable de obrador al corazón de Campamento y Aluche. Desterramos el torrefacto comercial y nos asociamos con micro-tostadores locales que compran directamente a pequeños productores de Colombia, Etiopía y Guatemala a precios justos. En nuestro obrador horneamos bollería con mantequilla pura francesa y preparamos tostas con hogazas de masa madre fermentadas durante 24 horas.",
    "pillars": [
      {
        "icon": "☕",
        "title": "Puntuación SCA >86 Puntos",
        "desc": "100% café de especialidad arábica trazable por finca, proceso de lavado y fecha semanal de tueste local."
      },
      {
        "icon": "🥖",
        "title": "Masa Madre Viva 24 Horas",
        "desc": "Hogazas fermentadas en frío durante 24 horas con harinas ecológicas sin aditivos ni mejorantes químicos."
      },
      {
        "icon": "🥑",
        "title": "Cocina Consciente & Fresca",
        "desc": "Aguacates Hass en su punto óptimo, salmón ahumado salvaje y fruta fresca de temporada cortada al momento."
      }
    ],
    "specialtyHighlight": {
      "title": "Flat White Doble con Leche de Avena Barista",
      "badge": "Barista Signature",
      "roastType": "Tueste Medio · Origen Colombia Huila SCA 87.5",
      "dietInfo": "Sin Azúcares Añadidos",
      "text": "Extraemos nuestro espresso a 93ºC exactos con doble cestillo de 18 gramos durante 27 segundos. La leche de avena barista se microemulsiona a 62ºC para crear una textura de terciopelo que resalta la dulzura natural del grano."
    }
  },
  "categories": [
    "Tostas Artesanas",
    "Cafés & Especialidad",
    "Bowls & Saludable",
    "Bollería de Obrador",
    "Zumos Naturales"
  ],
  "menu": [
    {
      "id": "e4_1",
      "name": "Tosta de Aguacate Hass, Salmón Ahumado y Semillas",
      "category": "Tostas Artesanas",
      "price": 7.2,
      "badge": "Favorito Brunch",
      "description": "Hogaza crujiente de masa madre viva, aguacate Hass laminado con limón, salmón ahumado salvaje, gomasio y brotes frescos.",
      "details": "Pan de masa madre 24h · Aguacate fresco",
      "ingredients": "Hogaza de trigo ecológico de masa madre, aguacate Hass, salmón noruego salvaje, gomasio de sésamo tostado y brotes verdes.",
      "pairing": "Cold Brew o Zumo de naranja recién exprimido",
      "prepTime": "5 min",
      "dietary": "Rico en Omega-3 · Alto en Proteína",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "pescado",
        "sesamo"
      ]
    },
    {
      "id": "e4_2",
      "name": "Flat White Doble con Leche de Avena Barista",
      "category": "Cafés & Especialidad",
      "price": 2.6,
      "badge": "Grano Selección",
      "description": "Doble espresso de origen Colombia Huila con microespuma sedosa de avena barista y diseño de latte art en taza cerámica artesanal.",
      "details": "Puntuación SCA 87.5 · Tueste fresco",
      "ingredients": "Café de especialidad 100% arábica Colombia Huila, agua filtrada y leche de avena barista ecológica sin azúcares.",
      "pairing": "Croissant de mantequilla francesa recién horneado",
      "prepTime": "3 min",
      "dietary": "Sin Gluten · Vegano · Café de Especialidad",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e4_3",
      "name": "Açaí Bowl Orgánico con Granola Casera y Fruta Fresca",
      "category": "Bowls & Saludable",
      "price": 7.9,
      "badge": "Energía 100% Vital",
      "description": "Açaí puro del Amazonas batido espeso con plátano de Canarias, fresas frescas de temporada, granola casera horneada y coco tostado.",
      "details": "Açaí silvestre orgánico · Granola casera",
      "ingredients": "Pulpa pura de açaí orgánico, plátano de Canarias, fresas de temporada, arándanos silvestres, granola de avena con miel y semillas de cáñamo.",
      "pairing": "Té Matcha Ceremonial o Kombucha de jengibre",
      "prepTime": "6 min",
      "dietary": "Sin Azúcar Añadido · Alto en Antioxidantes",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "frutos_secos"
      ]
    },
    {
      "id": "e4_4",
      "name": "Croissant Francés de Mantequilla de Normandía",
      "category": "Bollería de Obrador",
      "price": 2.2,
      "badge": "Hojaldre Perfecto",
      "description": "Hojaldrado a mano con 27 capas crujientes y aroma intenso a mantequilla fresca de Normandía. Horneado cada 2 horas en nuestro obrador.",
      "details": "Mantequilla AOC Normandía · Horneado diario",
      "ingredients": "Harina de trigo de fuerza, mantequilla pura de Normandía 84% M.G., masa madre viva, leche entera, sal marina y huevo para dorar.",
      "pairing": "Cappuccino o Café Filtrado V60",
      "prepTime": "2 min",
      "dietary": "Horneado Cada 2 Horas",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lactosa",
        "huevo"
      ]
    },
    {
      "id": "e4_5",
      "name": "Tosta Ibérica con Tomate Rallado y Aceite Picual",
      "category": "Tostas Artesanas",
      "price": 4.8,
      "badge": "Desayuno Estrella",
      "description": "Hogaza tostada crujiente, tomate de rama recién rallado a mano con AOVE picual de Jaén y virutas de jamón de bodega.",
      "details": "Pan de pueblo tostado al momento",
      "ingredients": "Pan de pueblo de masa madre, tomate pera maduro rallado, aceite de oliva virgen extra de cosecha temprana y jamón curado de bodega.",
      "pairing": "Café con leche o Zumo de naranja natural",
      "prepTime": "4 min",
      "dietary": "100% Ingredientes Naturales",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten"
      ]
    },
    {
      "id": "e4_6",
      "name": "Matcha Latte Ceremonial con Leche de Almendras",
      "category": "Cafés & Especialidad",
      "price": 3.4,
      "badge": "Grado Ceremonial Uji",
      "description": "Té verde matcha japonés de grado ceremonial de Uji (Kioto), batido con chasen de bambú y combinado con leche de almendras emulsionada.",
      "details": "Matcha 100% puro de Kioto · Sin aditivos",
      "ingredients": "Polvo de té verde matcha ceremonial de Uji, agua a 80ºC y bebida de almendras tostadas sin azúcar.",
      "pairing": "Cookie artesana de chocolate negro o Croissant",
      "prepTime": "4 min",
      "dietary": "Sin Lactosa · Vegano · Calma y Enfoque",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "frutos_secos"
      ]
    }
  ],
  "googleReviews": [
    {
      "id": "rev-cf1",
      "author": "Lucía Fernández",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 52 reseñas",
      "rating": 5,
      "timeAgo": "Hace 3 días",
      "comment": "Hacía falta una cafetería con este nivel en Campamento. El Flat White con leche de avena es pura seda y la tosta de salmón y aguacate en Padre Piquer está riquísima. Sitio precioso con wifi rápido.",
      "ownerResponse": "¡Gracias Lucía! Tostamos el café semanalmente con tostadores de Madrid. ¡Un placer tenerte en Campamento!"
    },
    {
      "id": "rev-cf2",
      "author": "Pablo Ortega",
      "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
      "badge": "Cliente habitual",
      "rating": 5,
      "timeAgo": "Hace 1 semana",
      "comment": "Pido el desayuno para llevar casi todas las mañanas antes de coger el metro en Campamento. Con la carta web lo pido desde casa y cuando llego ya está en la barra listo. Impecable.",
      "ownerResponse": null
    },
    {
      "id": "rev-cf3",
      "author": "Marta Carrasco",
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 19 reseñas",
      "rating": 5,
      "timeAgo": "Hace 2 semanas",
      "comment": "El açaí bowl y los croissants recién horneados son adictivos. Buen ambiente, música tranquila y trato súper cercano.",
      "ownerResponse": null
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
        data = { ...data, ...parsed };
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

window.CURRENT_PRESET = loadData();
window.ESTILO4_DATA = window.CURRENT_PRESET;
