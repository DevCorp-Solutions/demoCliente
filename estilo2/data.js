// estilo2/data.js - Datos oficiales y configurables para Cervecería 27 & Bar Mala Pata
const DEFAULT_DATA = {
  "id": "estilo2",
  "styleName": "Estilo 2",
  "styleSubtitle": "App Interactiva & Bento Grid",
  "layoutType": "bento-app",
  "themeClass": "theme-estilo-2",
  "name": "Cervecería 27 & Bar Mala Pata",
  "chefName": "Paco 'El Chato'",
  "chefTitle": "Jefe de Barra & Plancha",
  "tagline": "El Auténtico Templo del Tapeo y la Cerveza Helada de Barrio",
  "neighborhood": "Lucero / Aluche (Madrid)",
  "address": "Calle de Quero, 61 · Aluche / Lucero, 28024 Madrid",
  "phone": "+34 919 42 36 96",
  "whatsapp": "34695590754",
  "email": "contacto@barmalapata.es",
  "managerName": "Paco 'El Chato' (Dirección de Barra)",
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Bar+Mala+Pata,+Calle+de+Quero,+61,+28024+Madrid",
  "type": "Cervecería Urbana & Taberna Castiza",
  "rating": 4.7,
  "totalReviews": 482,
  "serviceStatus": "Grifos a -2ºC & Plancha Activa",
  "bannerImg": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
  "aboutUs": {
    "headline": "Más de 40 Años Tirando Cañas con Maestría y Sirviendo el Mejor Tapeo en Calle Quero",
    "story": "En el Bar Mala Pata y Cervecería 27 no hay etiquetas ni florituras: hay cañas bien tiradas con dos dedos de crema y raciones abundantes que unen a vecinos, familias y grupos de amigos. Paco fundó la taberna con una plancha de cromo y la receta secreta de salsa brava casera de su madre. Hoy seguimos con la misma filosofía: producto fresco comprado en el mercado de Lucero, raciones hechas al momento y un ambiente castizo inigualable.",
    "pillars": [
      {
        "icon": "🍻",
        "title": "Tanque de Bodega sin Pasteurizar",
        "desc": "Cerveza directa de fábrica a -2ºC, servida con serpentín helado y golpe de grifo maestro con doble crema."
      },
      {
        "icon": "🥘",
        "title": "Plancha de Cromo al Momento",
        "desc": "Ni microondas ni recalentados: oreja dorada, calamares y patatas salen volando de la plancha a tu mesa."
      },
      {
        "icon": "☀️",
        "title": "Terraza Viva 365 Días",
        "desc": "El corazón social de la calle Quero con toldos frescos en verano y estufas calientes en invierno."
      }
    ],
    "specialtyHighlight": {
      "title": "Oreja Crujiente a la Plancha con Salsa Brava Casera",
      "subtitle": "Crujiente por fuera, tierna por dentro",
      "badge": "Nº 1 de la Barra",
      "text": "Cocemos la oreja durante 3 horas con laurel, ajo morado y pimienta. Al entrar a la plancha a 280ºC con nuestro aliño de ajo-perejil y toque de limón, logra ese crujido legendario que enamora a todo Madrid."
    }
  },
  "categories": [
    "Raciones Clásicas",
    "Tapas & Plancha",
    "Huevos Rotos",
    "Bocatas en Cristal",
    "Cervezas & Barra"
  ],
  "menu": [
    {
      "id": "e2_1",
      "name": "Oreja Crujiente a la Plancha con Brava Casera",
      "category": "Raciones Clásicas",
      "price": 9.8,
      "badge": "Nº 1 de la Barra",
      "description": "Dorada a fuego fuerte con ajo, perejil, chorrito de vino blanco y nuestra salsa brava picantona casera.",
      "details": "Ración generosa · Plancha de cromo al momento",
      "ingredients": "Oreja cocida 3h prensada, aliño de ajo morado y perejil fresco, limón y salsa brava tradicional de la casa.",
      "pairing": "Doble de cerveza de bodega bien fría",
      "prepTime": "8 min",
      "dietary": "Sin Gluten · Receta Secreta 1984",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e2_2",
      "name": "Patatas Bravas 'Mala Pata' con Doble Salsa",
      "category": "Raciones Clásicas",
      "price": 7.5,
      "badge": "Fórmula de 1984",
      "description": "Patatas agrias de Madrid pochadas y fritas a la orden con brava de pimentón de la Vera y alioli casero emulsionado.",
      "details": "Doble fritura crujiente por fuera y tierna dentro",
      "ingredients": "Patata agria seleccionada, salsa brava de pimentón de La Vera, caldo reducido y alioli casero de ajo suave.",
      "pairing": "Caña helada de barril",
      "prepTime": "6 min",
      "dietary": "Sin Gluten · Caseras 100%",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "huevo"
      ]
    },
    {
      "id": "e2_3",
      "name": "Sartén de Huevos Camperos con Jamón Ibérico",
      "category": "Huevos Rotos",
      "price": 11.5,
      "badge": "Puntilla Garantizada",
      "description": "3 huevos de corral con puntilla fritos en aceite de oliva virgen extra sobre patatas panaderas y virutas de jamón ibérico.",
      "details": "Huevos de granja camperos · Aceite virgen extra",
      "ingredients": "3 huevos de gallinas camperas, patatas pochadas, jamón ibérico de bellota y sal en escamas.",
      "pairing": "Vino Tinto de la Casa o Cerveza Tostada",
      "prepTime": "7 min",
      "dietary": "Sin Gluten · Huevos de Corral",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "huevo"
      ]
    },
    {
      "id": "e2_4",
      "name": "Calamares a la Andaluza con Limón Fresco",
      "category": "Raciones Clásicas",
      "price": 11,
      "badge": "Rebozado Andaluz",
      "description": "Rebozado ultra fino en harina de garbanzo sin exceso de aceite, frito a 190ºC. Tiernos como la mantequilla.",
      "details": "Harina de garbanzo · Fritura limpia",
      "ingredients": "Anillas de calamar fresco, harina de garbanzo andaluza, aceite de oliva virgen y gajos de limón fresco.",
      "pairing": "Vermut de grifo de Madrid",
      "prepTime": "6 min",
      "dietary": "Fritura ligera y crujiente",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "pescado",
        "gluten"
      ]
    },
    {
      "id": "e2_5",
      "name": "Bocadillo de Calamares en Pan de Cristal Tostado",
      "category": "Bocatas en Cristal",
      "price": 6.5,
      "badge": "Pan de Cristal",
      "description": "El clásico madrileño elevado: pan de cristal aireado y crujiente, calamares recién fritos y suave mayonesa cítrica.",
      "details": "Pan de cristal con triple fermentación",
      "ingredients": "Pan de cristal tostado al momento, calamares rebozados a la andaluza, aceite de oliva y alioli suave opcional.",
      "pairing": "Caña doble de cerveza de bodega",
      "prepTime": "5 min",
      "dietary": "Icono Gastronómico de Madrid",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "pescado",
        "huevo"
      ]
    },
    {
      "id": "e2_6",
      "name": "Doble de Cerveza de Bodega sin Pasteurizar",
      "category": "Cervezas & Barra",
      "price": 2.8,
      "badge": "-2ºC en Copa",
      "description": "Tirada en copa helada con dos dedos de crema densa. La cerveza más fresca y natural del distrito de Lucero.",
      "details": "Tanque directo sin pasteurizar · Serpentín helado",
      "ingredients": "Cerveza rubia de bodega sin pasteurizar directa de tanque refrigerado a -2ºC.",
      "pairing": "Acompaña a cualquiera de nuestras raciones",
      "prepTime": "1 min",
      "dietary": "La caña mejor tirada de Madrid",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten"
      ]
    }
  ],
  "googleReviews": [
    {
      "id": "rev-c1",
      "author": "David Serrano",
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 84 reseñas",
      "rating": 5,
      "timeAgo": "Hace 1 semana",
      "comment": "El tapeo de toda la vida pero con una organización de 10. La oreja a la plancha está en su punto crujiente exacto y las patatas bravas pican lo justo. Las cañas salen con la crema perfecta.",
      "ownerResponse": "¡Grande David! Esa oreja lleva el aliño de la casa desde hace 30 años en la calle Quero. ¡Salud!"
    },
    {
      "id": "rev-c2",
      "author": "Sara Martín",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      "badge": "Vecina de Lucero",
      "rating": 5,
      "timeAgo": "Hace 3 semanas",
      "comment": "La terraza en verano se llena, pero ahora pidiendo directamente desde el móvil te sirven en 5 minutos sin tener que esperar a llamar al camarero. ¡Un acierto total!",
      "ownerResponse": null
    },
    {
      "id": "rev-c3",
      "author": "Antonio Ramos",
      "avatar": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 29 reseñas",
      "rating": 5,
      "timeAgo": "Hace 1 mes",
      "comment": "Muy buenos los huevos rotos y el bocadillo de calamares en pan crujiente. Calidad-precio inmejorable para el barrio de Lucero y Aluche.",
      "ownerResponse": null
    }
  ]
};

function loadData() {
  let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  if (typeof localStorage !== 'undefined') {
    try {
      const custom = localStorage.getItem('devcorp_data_estilo2');
      if (custom) {
        const parsed = JSON.parse(custom);
        data = { ...data, ...parsed };
      }
      const unifiedName = localStorage.getItem('devcorp_unified_name');
      if (unifiedName && unifiedName.trim() !== '') {
        data.name = unifiedName.trim();
      }
    } catch (e) {
      console.warn("Error cargando datos personalizados de estilo2:", e);
    }
  }
  return data;
}

window.CURRENT_PRESET = loadData();
window.ESTILO2_DATA = window.CURRENT_PRESET;
