// estilo2/data.js - Datos oficiales y configurables para Bar Punto de Encuentro
(function() {
  const DEFAULT_DATA = {
  "id": "estilo2",
  "styleName": "Estilo 2",
  "styleSubtitle": "Bar Cafetería Castizo & Tradicional",
  "layoutType": "punto-de-encuentro",
  "themeClass": "theme-punto-encuentro",
  "name": "Bar Punto de Encuentro",
  "tagline": "Desde las 6 de la mañana, el punto de Aluche",
  "neighborhood": "Aluche (Madrid)",
  "address": "C/ Maqueda, 138 · 28024 Aluche, Madrid (al lado del Metro y Cercanías)",
  "phone": "912 94 84 07",
  "phoneRaw": "+34912948407",
  "whatsapp": "34912948407",
  "email": "contacto@barpuntodeencuentro.es",
  "managerName": "Dirección Bar Punto de Encuentro",
  "googleMapsUrl": "https://www.google.com/maps/place/C.+de+Maqueda,+138,+28024+Madrid",
  "type": "Bar Cafetería & Cervecería de Barrio",
  "rating": 4.2,
  "totalReviews": 910,
  "serviceStatus": "Abierto desde las 06:00 · Terraza e Interior",
  "bannerImg": "https://cartaonlineqr.com/wp-content/uploads/2024/08/Logo-e1722700766619.png",
  "schedule": {
    "lunes": "06:00 – 00:00",
    "martes": "Cerrado (Descanso semanal)",
    "miercoles": "06:00 – 00:00",
    "jueves": "06:00 – 00:00",
    "viernes": "07:00 – 02:00",
    "sabado": "07:00 – 02:00",
    "domingo": "07:00 – 00:00"
  },
  "aboutUs": {
    "headline": "El Auténtico Punto de Encuentro de Aluche: Desayunos desde las 6:00, Raciones y Minis",
    "story": "Ubicado en la calle Maqueda 138, al lado del intercambiador de Metro y Cercanías de Aluche, Bar Punto de Encuentro es el lugar de referencia para empezar el día con un café humeante y churros recién hechos, disfrutar del menú del día a mediodía, o compartir minis de cerveza y calimocho con raciones generosas al caer la tarde.",
    "pillars": [
      {
        "icon": "☕",
        "title": "Primer Café a las 6:00",
        "desc": "Abrimos antes que nadie. Desayunos completos con bollería, churros, porras o barritas con tomate y jamón."
      },
      {
        "icon": "🍻",
        "title": "Minis de Litro de Verdad",
        "desc": "Ofertas de 3 jarras más aperitivo desde 13,50 €. Cerveza fría, calimocho, tinto de verano y sidra."
      },
      {
        "icon": "🥟",
        "title": "La Carta que no Esperas",
        "desc": "Además de bravas, oreja y calamares tradicionales, disfruta de gyozas caseras, wantón frito, arroz tres delicias y pato a la naranja."
      }
    ]
  },
  "categories": [
    "Desayunos",
    "Menús",
    "Platos combinados",
    "Bocadillos",
    "Hamburguesas",
    "Raciones",
    "La carta que no esperas",
    "Minis",
    "Parrillada",
    "Cervezas"
  ],
  "menu": [
    {
      "id": "pe-1",
      "name": "Café + zumo + bollería o tostada",
      "nameEn": "Coffee, orange juice + pastry or toast",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Churros, porras, croissant, napolitana, bizcocho casero, tostada, tortitas o barrita.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-2",
      "name": "Café + zumo + montado",
      "nameEn": "Coffee, orange juice + mini sandwich",
      "price": 4.5,
      "priceFormatted": "4,50 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Jamón, bacon, lomo, tortilla, vegetal, atún con pimientos, panceta, pollo…",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-3",
      "name": "Barrita tomate y jamón",
      "nameEn": "Toast with tomato and ham",
      "price": 1.3,
      "priceFormatted": "+1,30 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Toast with tomato and ham",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-4",
      "name": "Pincho de tortilla",
      "nameEn": "Spanish omelette slice",
      "price": 0.8,
      "priceFormatted": "+0,80 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Spanish omelette slice",
      "allergens": [
        "Huevo"
      ],
      "allergenCodes": [
        "HU"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-5",
      "name": "Sándwich mixto",
      "nameEn": "Ham and cheese toastie",
      "price": 1.3,
      "priceFormatted": "+1,30 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Ham and cheese toastie",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-6",
      "name": "Croissant jamón y queso",
      "nameEn": "Ham and cheese croissant",
      "price": 1.3,
      "priceFormatted": "+1,30 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Ham and cheese croissant",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-7",
      "name": "Colacao o infusión",
      "nameEn": "Cocoa milk or herbal tea",
      "price": 0.3,
      "priceFormatted": "+0,30 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Cocoa milk or herbal tea",
      "allergens": [
        "Lácteos"
      ],
      "allergenCodes": [
        "LA"
      ],
      "note": "L–S hasta 12:30"
    },
    {
      "id": "pe-8",
      "name": "Menú sándwich mixto",
      "nameEn": "Ham and cheese toastie meal",
      "price": 6,
      "priceFormatted": "6,00 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Ham and cheese toastie meal",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "con patatas y bebida"
    },
    {
      "id": "pe-9",
      "name": "Menú panini",
      "nameEn": "Panini meal",
      "price": 7,
      "priceFormatted": "7,00 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Panini meal",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "con patatas y bebida"
    },
    {
      "id": "pe-10",
      "name": "Menú sándwich cubano",
      "nameEn": "Cuban sandwich meal",
      "price": 7,
      "priceFormatted": "7,00 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Cuban sandwich meal",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Mostaza"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "MO"
      ],
      "note": "con patatas y bebida"
    },
    {
      "id": "pe-11",
      "name": "Menú hamburguesa completa",
      "nameEn": "Full burger meal",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Full burger meal",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Sésamo"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SE"
      ],
      "note": "con patatas y bebida"
    },
    {
      "id": "pe-12",
      "name": "Menú 2 pizzas a elegir",
      "nameEn": "Two pizzas of your choice",
      "price": 13.5,
      "priceFormatted": "13,50 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Two pizzas of your choice",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "con patatas y bebida"
    },
    {
      "id": "pe-13",
      "name": "Nº1 · Bacon con huevos y patatas",
      "nameEn": "Bacon, fried eggs and chips",
      "price": 8.5,
      "priceFormatted": "8,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Bacon, fried eggs and chips",
      "allergens": [
        "Huevo"
      ],
      "allergenCodes": [
        "HU"
      ],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-14",
      "name": "Nº2 · Lomo con huevos y patatas",
      "nameEn": "Pork loin, eggs and chips",
      "price": 9,
      "priceFormatted": "9,00* €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Pork loin, eggs and chips",
      "allergens": [
        "Huevo"
      ],
      "allergenCodes": [
        "HU"
      ],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-15",
      "name": "Nº3 · Bistec de ternera",
      "nameEn": "Beef steak with chips",
      "price": 11,
      "priceFormatted": "11,00* €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Beef steak with chips",
      "allergens": [],
      "allergenCodes": [],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-16",
      "name": "Nº4 · Filete de pollo",
      "nameEn": "Chicken fillet with chips",
      "price": 9.5,
      "priceFormatted": "9,50* €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Chicken fillet with chips",
      "allergens": [],
      "allergenCodes": [],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-17",
      "name": "Nº5 · Merluza a la romana con tortilla",
      "nameEn": "Battered hake with omelette",
      "price": 11.5,
      "priceFormatted": "11,50* €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Battered hake with omelette",
      "allergens": [
        "Gluten",
        "Huevo",
        "Pescado"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "PE"
      ],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-18",
      "name": "Nº6 · Entrecot con patatas y pimientos",
      "nameEn": "Entrecôte, chips and peppers",
      "price": 16.5,
      "priceFormatted": "16,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Entrecôte, chips and peppers",
      "allergens": [],
      "allergenCodes": [],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-19",
      "name": "Nº7 · Emperador",
      "nameEn": "Swordfish steak",
      "price": 13.5,
      "priceFormatted": "13,50* €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Swordfish steak",
      "allergens": [
        "Pescado"
      ],
      "allergenCodes": [
        "PE"
      ],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-20",
      "name": "Jamón serrano",
      "nameEn": "Serrano ham",
      "price": 4.5022,
      "priceFormatted": "4,50* / 2,20* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Serrano ham",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-21",
      "name": "Bacon",
      "nameEn": "Bacon",
      "price": 4.002,
      "priceFormatted": "4,00* / 2,00* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Bacon",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-22",
      "name": "Lomo",
      "nameEn": "Pork loin",
      "price": 4.002,
      "priceFormatted": "4,00* / 2,00* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Pork loin",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-23",
      "name": "Tortilla española",
      "nameEn": "Spanish omelette",
      "price": 4.002,
      "priceFormatted": "4,00* / 2,00* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Spanish omelette",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-24",
      "name": "Vegetal",
      "nameEn": "Salad sandwich",
      "price": 4.5022,
      "priceFormatted": "4,50* / 2,20* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Salad sandwich",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-25",
      "name": "Pepito de ternera",
      "nameEn": "Beef steak sandwich",
      "price": 5.5028,
      "priceFormatted": "5,50* / 2,80* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Beef steak sandwich",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-26",
      "name": "Calamares",
      "nameEn": "Fried squid",
      "price": 5.0025,
      "priceFormatted": "5,00* / 2,50* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Fried squid",
      "allergens": [
        "Gluten",
        "Moluscos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "ML",
        "HU"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-27",
      "name": "Oreja",
      "nameEn": "Pig ear",
      "price": 5.0025,
      "priceFormatted": "5,00* / 2,50* €",
      "category": "Bocadillos",
      "categoryId": "bocadillos",
      "description": "Pig ear",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-28",
      "name": "Sencilla",
      "nameEn": "Plain burger",
      "price": 5,
      "priceFormatted": "5,00 €",
      "category": "Hamburguesas",
      "categoryId": "hamburguesas",
      "description": "Plain burger",
      "allergens": [
        "Gluten",
        "Sésamo"
      ],
      "allergenCodes": [
        "GL",
        "SE"
      ],
      "note": ""
    },
    {
      "id": "pe-29",
      "name": "Smash en pan brioche",
      "nameEn": "Smash burger, brioche bun",
      "price": 8,
      "priceFormatted": "8,00 €",
      "category": "Hamburguesas",
      "categoryId": "hamburguesas",
      "description": "Smash burger, brioche bun",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Sésamo",
        "Mostaza"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SE",
        "MO"
      ],
      "note": ""
    },
    {
      "id": "pe-30",
      "name": "Smash doble",
      "nameEn": "Double smash burger",
      "price": 11,
      "priceFormatted": "11,00 €",
      "category": "Hamburguesas",
      "categoryId": "hamburguesas",
      "description": "Double smash burger",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Sésamo",
        "Mostaza"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SE",
        "MO"
      ],
      "note": ""
    },
    {
      "id": "pe-31",
      "name": "De buey con queso de cabra y cebolla caramelizada",
      "nameEn": "Ox burger, goat cheese, caramelised onion",
      "price": 13,
      "priceFormatted": "13,00 €",
      "category": "Hamburguesas",
      "categoryId": "hamburguesas",
      "description": "Ox burger, goat cheese, caramelised onion",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Sésamo",
        "Sulfitos"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SE",
        "SU"
      ],
      "note": ""
    },
    {
      "id": "pe-32",
      "name": "Oreja a la plancha",
      "nameEn": "Grilled pig ear",
      "price": 7.5,
      "priceFormatted": "7,50* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Grilled pig ear",
      "allergens": [],
      "allergenCodes": [],
      "note": ""
    },
    {
      "id": "pe-33",
      "name": "Patatas bravas",
      "nameEn": "Spicy potatoes",
      "price": 5.5,
      "priceFormatted": "5,50* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Spicy potatoes",
      "allergens": [
        "Huevo"
      ],
      "allergenCodes": [
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-34",
      "name": "Patatas alioli",
      "nameEn": "Garlic mayo potatoes",
      "price": 5.5,
      "priceFormatted": "5,50* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Garlic mayo potatoes",
      "allergens": [
        "Huevo"
      ],
      "allergenCodes": [
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-35",
      "name": "Croquetas de jamón",
      "nameEn": "Ham croquettes",
      "price": 8,
      "priceFormatted": "8,00* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Ham croquettes",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-36",
      "name": "Alitas de pollo",
      "nameEn": "Chicken wings",
      "price": 7.5,
      "priceFormatted": "7,50* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Chicken wings",
      "allergens": [],
      "allergenCodes": [],
      "note": ""
    },
    {
      "id": "pe-37",
      "name": "Calamares a la romana",
      "nameEn": "Battered squid",
      "price": 9.5,
      "priceFormatted": "9,50* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Battered squid",
      "allergens": [
        "Gluten",
        "Moluscos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "ML",
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-38",
      "name": "Sepia a la plancha",
      "nameEn": "Grilled cuttlefish",
      "price": 11,
      "priceFormatted": "11,00* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Grilled cuttlefish",
      "allergens": [
        "Moluscos"
      ],
      "allergenCodes": [
        "ML"
      ],
      "note": ""
    },
    {
      "id": "pe-39",
      "name": "Gambones",
      "nameEn": "King prawns",
      "price": 12,
      "priceFormatted": "12,00* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "King prawns",
      "allergens": [
        "Crustáceos"
      ],
      "allergenCodes": [
        "CR"
      ],
      "note": ""
    },
    {
      "id": "pe-40",
      "name": "Nachos con pulled pork o pollo mechado",
      "nameEn": "Nachos with pulled pork or shredded chicken",
      "price": 9.5,
      "priceFormatted": "9,50* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Nachos with pulled pork or shredded chicken",
      "allergens": [
        "Lácteos"
      ],
      "allergenCodes": [
        "LA"
      ],
      "note": ""
    },
    {
      "id": "pe-41",
      "name": "Sartén campera",
      "nameEn": "Country-style skillet",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Country-style skillet",
      "allergens": [
        "Huevo"
      ],
      "allergenCodes": [
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-42",
      "name": "Sartén de embutidos",
      "nameEn": "Cured sausage skillet",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Cured sausage skillet",
      "allergens": [
        "Huevo",
        "Sulfitos"
      ],
      "allergenCodes": [
        "HU",
        "SU"
      ],
      "note": ""
    },
    {
      "id": "pe-43",
      "name": "Supercombo",
      "nameEn": "The big combo",
      "price": 20,
      "priceFormatted": "20,00 €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "The big combo",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-44",
      "name": "Tequeños",
      "nameEn": "Cheese sticks",
      "price": 7,
      "priceFormatted": "7,00* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "Cheese sticks",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": ""
    },
    {
      "id": "pe-45",
      "name": "Costilla a la barbacoa",
      "nameEn": "BBQ ribs",
      "price": 12,
      "priceFormatted": "12,00* €",
      "category": "Raciones",
      "categoryId": "raciones",
      "description": "BBQ ribs",
      "allergens": [
        "Mostaza",
        "Sulfitos"
      ],
      "allergenCodes": [
        "MO",
        "SU"
      ],
      "note": ""
    },
    {
      "id": "pe-46",
      "name": "Gyoza casera",
      "nameEn": "Homemade gyoza",
      "price": 7.5,
      "priceFormatted": "7,50* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Homemade gyoza",
      "allergens": [
        "Gluten",
        "Soja",
        "Sésamo"
      ],
      "allergenCodes": [
        "GL",
        "SO",
        "SE"
      ],
      "note": ""
    },
    {
      "id": "pe-47",
      "name": "Arroz tres delicias",
      "nameEn": "Three-delights fried rice",
      "price": 6.5,
      "priceFormatted": "6,50* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Three-delights fried rice",
      "allergens": [
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "HU",
        "SO"
      ],
      "note": ""
    },
    {
      "id": "pe-48",
      "name": "Tallarines o fideos tres delicias",
      "nameEn": "Three-delights noodles",
      "price": 7,
      "priceFormatted": "7,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Three-delights noodles",
      "allergens": [
        "Gluten",
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "SO"
      ],
      "note": ""
    },
    {
      "id": "pe-49",
      "name": "Rollitos de primavera",
      "nameEn": "Spring rolls",
      "price": 5.5,
      "priceFormatted": "5,50* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Spring rolls",
      "allergens": [
        "Gluten",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "SO"
      ],
      "note": ""
    },
    {
      "id": "pe-50",
      "name": "Wantón frito",
      "nameEn": "Fried wonton",
      "price": 6,
      "priceFormatted": "6,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Fried wonton",
      "allergens": [
        "Gluten",
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "SO"
      ],
      "note": ""
    },
    {
      "id": "pe-51",
      "name": "Costilla agridulce",
      "nameEn": "Sweet and sour ribs",
      "price": 9,
      "priceFormatted": "9,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Sweet and sour ribs",
      "allergens": [
        "Gluten",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "SO"
      ],
      "note": ""
    },
    {
      "id": "pe-52",
      "name": "Ternera en salsa de ostra",
      "nameEn": "Beef in oyster sauce",
      "price": 10,
      "priceFormatted": "10,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Beef in oyster sauce",
      "allergens": [
        "Gluten",
        "Soja",
        "Moluscos"
      ],
      "allergenCodes": [
        "GL",
        "SO",
        "ML"
      ],
      "note": ""
    },
    {
      "id": "pe-53",
      "name": "Pollo con almendras",
      "nameEn": "Chicken with almonds",
      "price": 9,
      "priceFormatted": "9,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Chicken with almonds",
      "allergens": [
        "Frutos de cáscara",
        "Soja",
        "Gluten"
      ],
      "allergenCodes": [
        "FC",
        "SO",
        "GL"
      ],
      "note": ""
    },
    {
      "id": "pe-54",
      "name": "Pollo al limón",
      "nameEn": "Lemon chicken",
      "price": 9,
      "priceFormatted": "9,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Lemon chicken",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": ""
    },
    {
      "id": "pe-55",
      "name": "Pato a la naranja",
      "nameEn": "Duck à l’orange",
      "price": 12.5,
      "priceFormatted": "12,50* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Duck à l’orange",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": ""
    },
    {
      "id": "pe-56",
      "name": "Ciervo y jabalí en salsa de coñac",
      "nameEn": "Venison and wild boar, brandy sauce",
      "price": 13,
      "priceFormatted": "13,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Venison and wild boar, brandy sauce",
      "allergens": [
        "Sulfitos",
        "Lácteos"
      ],
      "allergenCodes": [
        "SU",
        "LA"
      ],
      "note": ""
    },
    {
      "id": "pe-57",
      "name": "Torreznos",
      "nameEn": "Crispy pork belly",
      "price": 7,
      "priceFormatted": "7,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Crispy pork belly",
      "allergens": [],
      "allergenCodes": [],
      "note": ""
    },
    {
      "id": "pe-58",
      "name": "Costilla de ternera",
      "nameEn": "Beef short rib",
      "price": 14,
      "priceFormatted": "14,00* €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Beef short rib",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": ""
    },
    {
      "id": "pe-59",
      "name": "3 minis + aperitivo",
      "nameEn": "3 jugs + snack (not 3 beers)",
      "price": 13.5,
      "priceFormatted": "13,50 €",
      "category": "Minis",
      "categoryId": "minis",
      "description": "3 jugs + snack (not 3 beers)",
      "allergens": [
        "Gluten",
        "Sulfitos"
      ],
      "allergenCodes": [
        "GL",
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-60",
      "name": "3 minis de cerveza + bravas o alioli",
      "nameEn": "3 beer jugs + potatoes",
      "price": 19,
      "priceFormatted": "19,00 €",
      "category": "Minis",
      "categoryId": "minis",
      "description": "3 beer jugs + potatoes",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-61",
      "name": "Mini cerveza + mini calimocho + bravas, oreja o alitas",
      "nameEn": "Beer + calimocho jug + a plate",
      "price": 15.5,
      "priceFormatted": "15,50 €",
      "category": "Minis",
      "categoryId": "minis",
      "description": "Beer + calimocho jug + a plate",
      "allergens": [
        "Gluten",
        "Sulfitos"
      ],
      "allergenCodes": [
        "GL",
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-62",
      "name": "3 minis de calimocho + pizza",
      "nameEn": "3 calimocho jugs + pizza",
      "price": 15.5,
      "priceFormatted": "15,50 €",
      "category": "Minis",
      "categoryId": "minis",
      "description": "3 calimocho jugs + pizza",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Sulfitos"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-63",
      "name": "Mini tinto de verano, cerveza o calimocho",
      "nameEn": "Summer red, beer or calimocho jug",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Minis",
      "categoryId": "minis",
      "description": "Summer red, beer or calimocho jug",
      "allergens": [
        "Sulfitos",
        "Gluten"
      ],
      "allergenCodes": [
        "SU",
        "GL"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-64",
      "name": "Mini sidra o sangría",
      "nameEn": "Cider or sangria jug",
      "price": 8.5,
      "priceFormatted": "8,50 €",
      "category": "Minis",
      "categoryId": "minis",
      "description": "Cider or sangria jug",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-65",
      "name": "Parrillada de carne + 2 bebidas",
      "nameEn": "Meat grill for two + 2 drinks",
      "price": 32,
      "priceFormatted": "32,00 €",
      "category": "Parrillada",
      "categoryId": "parrillada",
      "description": "Pechuga, filete de ternera, chuleta de cerdo, costilla, longaniza y morcilla, todo ×2.",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": "para 2"
    },
    {
      "id": "pe-66",
      "name": "Caña o botellín",
      "nameEn": "Draught or small bottle",
      "price": 1.9,
      "priceFormatted": "1,90 €",
      "category": "Cervezas",
      "categoryId": "bebidas",
      "description": "Draught or small bottle",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-67",
      "name": "El Águila Especial · El Águila sin filtrar",
      "nameEn": "Bottled beer",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezas",
      "categoryId": "bebidas",
      "description": "Bottled beer",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-68",
      "name": "Amstel Radler · Amstel Oro · Amstel Oro 0,0",
      "nameEn": "Bottled beer",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezas",
      "categoryId": "bebidas",
      "description": "Bottled beer",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-69",
      "name": "Victoria · Mahou",
      "nameEn": "Bottled beer",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezas",
      "categoryId": "bebidas",
      "description": "Bottled beer",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
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
        console.warn('Error cargando datos personalizados de estilo2:', e);
      }
    }
    return data;
  }

  const loaded = loadData();
  window.CURRENT_PRESET = loaded;
  window.ESTILO2_DATA = loaded;
  window.DEV_CORP_STYLES = window.DEV_CORP_STYLES || {};
  window.DEV_CORP_STYLES['estilo2'] = loaded;
})();
