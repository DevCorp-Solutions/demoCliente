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
    "Combos y Picoteo",
    "Bocadillos y Montados",
    "Sándwiches",
    "Hamburguesas y Smash",
    "Perritos XL 30cm",
    "Paninis al Horno",
    "Pizzas",
    "Tostas Especiales",
    "Ensaladas",
    "Raciones y Sartenes",
    "La carta que no esperas",
    "Minis de Litro",
    "Parrillada",
    "Cervezateca y Bebidas"
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
      "description": "Jamón serrano, bacon, lomo, tortilla española, tortilla francesa, vegetal, atún con pimientos, panceta o pollo.",
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
      "name": "Barrita con tomate y jamón",
      "nameEn": "Toast with tomato and ham",
      "price": 1.3,
      "priceFormatted": "+1,30 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Suplemento sobre el desayuno básico.",
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
      "name": "Pincho de tortilla de patatas",
      "nameEn": "Spanish omelette slice",
      "price": 0.8,
      "priceFormatted": "+0,80 €",
      "category": "Desayunos",
      "categoryId": "desayunos",
      "description": "Suplemento sobre el desayuno básico.",
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
      "description": "Suplemento sobre el desayuno básico.",
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
      "description": "Suplemento sobre el desayuno básico.",
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
      "description": "Suplemento por sustitución del café.",
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
      "name": "Menú Sándwich mixto",
      "nameEn": "Ham and cheese toastie meal",
      "price": 6,
      "priceFormatted": "6,00 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Sándwich mixto recién tostado con patatas fritas y bebida.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "con patatas y refresco o cerveza"
    },
    {
      "id": "pe-9",
      "name": "Menú Panini (Jamón y bacon o 4 quesos)",
      "nameEn": "Panini meal",
      "price": 7,
      "priceFormatted": "7,00 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Panini crujiente al horno con patatas fritas y bebida.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SO"
      ],
      "note": "con patatas y refresco o cerveza"
    },
    {
      "id": "pe-10",
      "name": "Menú Sándwich cubano",
      "nameEn": "Cuban sandwich meal",
      "price": 7,
      "priceFormatted": "7,00 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Jamón, queso y huevo frito con patatas fritas y bebida.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SO"
      ],
      "note": "con patatas y refresco o cerveza"
    },
    {
      "id": "pe-11",
      "name": "Menú Hamburguesa completa",
      "nameEn": "Full burger meal",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "Carne, lechuga, tomate, jamón, queso con patatas y bebida.",
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
      "note": "con patatas y refresco o cerveza"
    },
    {
      "id": "pe-12",
      "name": "Menú 2 Pizzas a elegir",
      "nameEn": "Two pizzas combo meal",
      "price": 13.5,
      "priceFormatted": "13,50 €",
      "category": "Menús",
      "categoryId": "menus",
      "description": "A elegir entre jamón y bacon, jamón y champiñón o cuatro quesos.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "con patatas y refresco o cerveza"
    },
    {
      "id": "pe-13",
      "name": "Nº1 · Bacon, huevos fritos y patatas",
      "nameEn": "Bacon, fried eggs and chips",
      "price": 8.5,
      "priceFormatted": "8,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Panceta tostada crujiente con dos huevos de corral y patatas.",
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
      "name": "Nº2 · Lomo, huevos fritos y patatas",
      "nameEn": "Pork loin, fried eggs and chips",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Cintas de lomo a la plancha con huevos fritos y patatas.",
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
      "name": "Nº3 · Bistec de ternera con ensalada y patatas",
      "nameEn": "Beef steak with salad and chips",
      "price": 12,
      "priceFormatted": "12,00 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Filete tierno de ternera a la plancha con guarnición doble.",
      "allergens": [],
      "allergenCodes": [],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-16",
      "name": "Nº4 · Filete de pollo con ensalada o patatas",
      "nameEn": "Chicken breast with salad or chips",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Pechuga a la plancha con su guarnición a elegir.",
      "allergens": [],
      "allergenCodes": [],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-17",
      "name": "Nº5 · Merluza a la romana, tortilla francesa y ensalada",
      "nameEn": "Battered hake, French omelette and salad",
      "price": 10.5,
      "priceFormatted": "10,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Lomo de merluza rebozada crujiente, tortilla y ensalada fresca.",
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
      "nameEn": "Beef entrecôte with chips and peppers",
      "price": 16.5,
      "priceFormatted": "16,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Corte noble de carne a la parrilla con pimientos verdes y patatas.",
      "allergens": [],
      "allergenCodes": [],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-19",
      "name": "Nº7 · Emperador a la plancha con ensalada o patatas",
      "nameEn": "Grilled swordfish with salad or chips",
      "price": 14.5,
      "priceFormatted": "14,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Lomo de pez espada a la plancha con aliño de ajo y perejil.",
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
      "name": "Extra empanado / ensalada",
      "nameEn": "Extra breaded coating or salad",
      "price": 2.5,
      "priceFormatted": "+2,50 €",
      "category": "Platos combinados",
      "categoryId": "combinados",
      "description": "Personaliza cualquiera de los platos combinados.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "Nº1 – Nº7"
    },
    {
      "id": "pe-21",
      "name": "Supercombo Punto de Encuentro",
      "nameEn": "Giant mixed snack combo platter",
      "price": 20,
      "priceFormatted": "20,00 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Patatas fritas, nuggets de pollo, aros de cebolla, palitos de mozzarella, jalapeños, tiras de pollo y salchichas.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "HU",
        "SO"
      ],
      "note": "para compartir"
    },
    {
      "id": "pe-22",
      "name": "Tequeños de queso",
      "nameEn": "Venezuelan cheese sticks",
      "price": 10,
      "priceFormatted": "10,00 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Crujientes palitos rellenos de queso blanco fundido.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "para compartir"
    },
    {
      "id": "pe-23",
      "name": "Palitos de mozzarella",
      "nameEn": "Mozzarella sticks",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Dorado rebozado crujiente con corazón de queso fundido.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "para compartir"
    },
    {
      "id": "pe-24",
      "name": "Jalapeños cheddar",
      "nameEn": "Jalapeño peppers with cheddar",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Picantitos, rellenos de crema de cheddar fundida.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "para compartir"
    },
    {
      "id": "pe-25",
      "name": "Tiras de pollo con patatas",
      "nameEn": "Crispy chicken strips with chips",
      "price": 8.5,
      "priceFormatted": "8,50 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Tiras de solomillo de pollo empanadas con patatas caseras.",
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
      "note": "para compartir"
    },
    {
      "id": "pe-26",
      "name": "Costilla asada (Barbacoa o Miel y Mostaza)",
      "nameEn": "Barbecued roasted pork ribs",
      "price": 18,
      "priceFormatted": "18,00 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Costillar entero glaseado a fuego lento con salsa BBQ o miel y mostaza.",
      "allergens": [
        "Mostaza",
        "Huevo",
        "Soja"
      ],
      "allergenCodes": [
        "MO",
        "HU",
        "SO"
      ],
      "note": "para compartir"
    },
    {
      "id": "pe-27",
      "name": "Patatas cheese bacon",
      "nameEn": "Cheese and bacon loaded fries",
      "price": 10,
      "priceFormatted": "10,00 €",
      "category": "Combos y Picoteo",
      "categoryId": "combos",
      "description": "Patatas fritas bañadas en salsa de queso fundido y virutas de bacon crujiente.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "para compartir"
    },
    {
      "id": "pe-28",
      "name": "Jamón serrano",
      "nameEn": "Serrano ham baguette / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Jamón serrano en pan crujiente recién horneado.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-29",
      "name": "Bacon",
      "nameEn": "Bacon baguette / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Bacon a la plancha bien tostado.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-30",
      "name": "Lomo",
      "nameEn": "Pork loin baguette / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Lomo adobado a la plancha jugoso.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-31",
      "name": "Tortilla española",
      "nameEn": "Spanish omelette baguette / roll",
      "price": 4.8,
      "priceFormatted": "4,80 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Nuestra clásica tortilla de patatas de la casa.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-32",
      "name": "Tortilla francesa",
      "nameEn": "French omelette baguette / roll",
      "price": 4.8,
      "priceFormatted": "4,80 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Tortilla francesa recién hecha y suave.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-33",
      "name": "Vegetal",
      "nameEn": "Salad baguette with tuna / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Lechuga, tomate, atún y mayonesa.",
      "allergens": [
        "Gluten",
        "Pescado",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "PE",
        "LA"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-34",
      "name": "Pepito de ternera",
      "nameEn": "Beef fillet baguette",
      "price": 7,
      "priceFormatted": "7,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Filete de ternera tierno con pan crujiente y aceite de oliva.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-35",
      "name": "Atún con pimientos",
      "nameEn": "Tuna with red peppers baguette / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Bonito/atún con tiras de pimiento morrón.",
      "allergens": [
        "Gluten",
        "Pescado"
      ],
      "allergenCodes": [
        "GL",
        "PE"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-36",
      "name": "Panceta",
      "nameEn": "Streaky pork bacon baguette / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Panceta fresca crujiente a la plancha.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-37",
      "name": "Pollo",
      "nameEn": "Chicken breast baguette / roll",
      "price": 5,
      "priceFormatted": "5,00 / 4,50 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Pechuga de pollo a la plancha con su aliño.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-38",
      "name": "Pollo vegetal",
      "nameEn": "Chicken salad baguette / roll",
      "price": 5.7,
      "priceFormatted": "5,70 / 4,50 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Pechuga de pollo a la plancha, lechuga, tomate y mayonesa.",
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
      "note": "bocata / montado"
    },
    {
      "id": "pe-39",
      "name": "Oreja a la plancha",
      "nameEn": "Grilled pork ear baguette",
      "price": 6,
      "priceFormatted": "6,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "Bocata de oreja con su salsa brava o al ajillo.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-40",
      "name": "Calamares a la romana",
      "nameEn": "Calamari baguette",
      "price": 7,
      "priceFormatted": "7,00 €",
      "category": "Bocadillos y Montados",
      "categoryId": "bocadillos",
      "description": "El clásico bocadillo madrileño de calamares crujientes recién fritos.",
      "allergens": [
        "Gluten",
        "Pescado",
        "Moluscos",
        "Crustáceos"
      ],
      "allergenCodes": [
        "GL",
        "PE",
        "ML",
        "CR"
      ],
      "note": "bocata / montado"
    },
    {
      "id": "pe-41",
      "name": "Sándwich Mixto",
      "nameEn": "Ham and cheese toasted sandwich",
      "price": 3.8,
      "priceFormatted": "3,80 €",
      "category": "Sándwiches",
      "categoryId": "sandwiches",
      "description": "Jamón cocido y abundante queso fundido entre rebanadas doradas.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "recién tostados"
    },
    {
      "id": "pe-42",
      "name": "Sándwich Vegetal",
      "nameEn": "Vegetable and tuna sandwich",
      "price": 4.8,
      "priceFormatted": "4,80 €",
      "category": "Sándwiches",
      "categoryId": "sandwiches",
      "description": "Lechuga, tomate maduro, cebolla fresca, atún y mahonesa.",
      "allergens": [
        "Gluten",
        "Pescado",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "PE",
        "LA",
        "SO"
      ],
      "note": "recién tostados"
    },
    {
      "id": "pe-43",
      "name": "Sándwich Especial de la Casa",
      "nameEn": "House special club sandwich",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "Sándwiches",
      "categoryId": "sandwiches",
      "description": "Tres pisos con jamón, queso, lechuga, tomate, cebolla, huevo y mahonesa.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "recién tostados"
    },
    {
      "id": "pe-44",
      "name": "Sándwich de Pollo",
      "nameEn": "Chicken club sandwich",
      "price": 6.8,
      "priceFormatted": "6,80 €",
      "category": "Sándwiches",
      "categoryId": "sandwiches",
      "description": "Pechuga de pollo a la plancha, lechuga, tomate, cebolla y mahonesa.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "recién tostados"
    },
    {
      "id": "pe-45",
      "name": "Sándwich Cubano",
      "nameEn": "Cuban sandwich",
      "price": 6,
      "priceFormatted": "6,00 €",
      "category": "Sándwiches",
      "categoryId": "sandwiches",
      "description": "Jamón de York, abundante queso fundido y huevo frito con yema tierna.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "recién tostados"
    },
    {
      "id": "pe-46",
      "name": "Sencilla",
      "nameEn": "Classic beef burger",
      "price": 5,
      "priceFormatted": "5,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "100% carne de ternera con lechuga fresca y tomate.",
      "allergens": [
        "Gluten",
        "Sésamo"
      ],
      "allergenCodes": [
        "GL",
        "SE"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-47",
      "name": "Completa",
      "nameEn": "Full burger",
      "price": 6.5,
      "priceFormatted": "6,50 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Carne, vegetal, jamón york y queso fundido.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "HU",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-48",
      "name": "Pirinaica",
      "nameEn": "Pyrenean burger with bacon",
      "price": 6.5,
      "priceFormatted": "6,50 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Carne de vacuno, lechuga, tomate, queso fundido y bacon crujiente.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "HU",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-49",
      "name": "De la Casa",
      "nameEn": "House special burger",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Carne, vegetal, jamón, queso fundido y huevo frito con patatas.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "HU",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-50",
      "name": "De Pollo",
      "nameEn": "Chicken breast burger",
      "price": 6.8,
      "priceFormatted": "6,80 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Pechuga de pollo tierna a la plancha, vegetal y mahonesa.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA",
        "HU"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-51",
      "name": "Crispy Pollo",
      "nameEn": "Crispy chicken burger",
      "price": 5.8,
      "priceFormatted": "5,80 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Pollo crujiente marinado, vegetal y salsa especial.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-52",
      "name": "Doble de Carne y Queso",
      "nameEn": "Double cheese and meat burger",
      "price": 11,
      "priceFormatted": "11,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Dos hamburguesas de carne, doble de queso y vegetales frescos.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-53",
      "name": "De Buey Clásica con Patatas",
      "nameEn": "Ox burger 200g with chips",
      "price": 10,
      "priceFormatted": "10,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "200g de auténtica carne de buey con patatas fritas y vegetal.",
      "allergens": [
        "Gluten",
        "Sésamo"
      ],
      "allergenCodes": [
        "GL",
        "SE"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-54",
      "name": "De Buey de la Casa con Patatas",
      "nameEn": "House ox burger with chips",
      "price": 11,
      "priceFormatted": "11,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "200g de carne de buey, bacon crujiente, queso fundido y patatas.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-55",
      "name": "De Buey con Queso de Cabra con Patatas",
      "nameEn": "Goat cheese ox burger with chips",
      "price": 13,
      "priceFormatted": "13,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "200g de carne de buey, queso de cabra a la plancha y cebolla caramelizada.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-56",
      "name": "Smash Sencilla con Patatas",
      "nameEn": "Single Smash Burger in brioche",
      "price": 8,
      "priceFormatted": "8,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Pan brioche, lechuga, tomate, cebolla morada, queso cheddar y pepinillo.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA",
        "HU"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-57",
      "name": "Doble Smash con Patatas",
      "nameEn": "Double Smash Burger in brioche",
      "price": 11,
      "priceFormatted": "11,00 €",
      "category": "Hamburguesas y Smash",
      "categoryId": "hamburguesas",
      "description": "Pan brioche, doble carne smash, doble queso cheddar, lechuga, tomate, cebolla morada, bacon y pepinillo.",
      "allergens": [
        "Gluten",
        "Sésamo",
        "Lácteos",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "SE",
        "LA",
        "HU"
      ],
      "note": "carne 100% vacuno"
    },
    {
      "id": "pe-58",
      "name": "Perrito XL Sencillo (30cm)",
      "nameEn": "XL Hot Dog (30cm) - Simple",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Perritos XL 30cm",
      "categoryId": "perritos",
      "description": "Salchicha gigante de 30cm, cebolla frita crujiente, ketchup y mostaza.",
      "allergens": [
        "Mostaza",
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "MO",
        "GL",
        "LA",
        "SO"
      ],
      "note": "30 centímetros"
    },
    {
      "id": "pe-59",
      "name": "Perrito XL Americano (30cm)",
      "nameEn": "XL Hot Dog (30cm) - American",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Perritos XL 30cm",
      "categoryId": "perritos",
      "description": "Salchicha gigante de 30cm, lechuga, tomate, cebolla y salsa rosa.",
      "allergens": [
        "Mostaza",
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "MO",
        "GL",
        "LA",
        "SO"
      ],
      "note": "30 centímetros"
    },
    {
      "id": "pe-60",
      "name": "Perrito XL Tex-Mex (30cm)",
      "nameEn": "XL Hot Dog (30cm) - Tex-Mex",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Perritos XL 30cm",
      "categoryId": "perritos",
      "description": "Salchicha gigante de 30cm, pico de gallo, salsa queso cheddar y jalapeños.",
      "allergens": [
        "Mostaza",
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "MO",
        "GL",
        "LA",
        "SO"
      ],
      "note": "30 centímetros"
    },
    {
      "id": "pe-61",
      "name": "Perrito XL Al Punto (30cm)",
      "nameEn": "XL Hot Dog (30cm) - Al Punto",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Perritos XL 30cm",
      "categoryId": "perritos",
      "description": "Salchicha gigante de 30cm, bacon, cebolla frita y 4 quesos fundidos.",
      "allergens": [
        "Mostaza",
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "MO",
        "GL",
        "LA",
        "SO"
      ],
      "note": "30 centímetros"
    },
    {
      "id": "pe-62",
      "name": "Panini Jamón y Bacon",
      "nameEn": "Ham and bacon panini",
      "price": 4.2,
      "priceFormatted": "4,20 €",
      "category": "Paninis al Horno",
      "categoryId": "paninis",
      "description": "Mozzarella, jamón, bacon ahumado y 4 quesos fundidos.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "gratinados"
    },
    {
      "id": "pe-63",
      "name": "Panini 4 Quesos",
      "nameEn": "Four cheeses panini",
      "price": 4.2,
      "priceFormatted": "4,20 €",
      "category": "Paninis al Horno",
      "categoryId": "paninis",
      "description": "Mozzarella, gouda, emmental y queso azul gratinados al horno.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "gratinados"
    },
    {
      "id": "pe-64",
      "name": "Panini Jamón y Champiñón",
      "nameEn": "Ham and mushroom panini",
      "price": 4.2,
      "priceFormatted": "4,20 €",
      "category": "Paninis al Horno",
      "categoryId": "paninis",
      "description": "Mozzarella, jamón dulce, champiñón laminado y 4 quesos.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "gratinados"
    },
    {
      "id": "pe-65",
      "name": "Panini de Atún",
      "nameEn": "Tuna panini",
      "price": 4.2,
      "priceFormatted": "4,20 €",
      "category": "Paninis al Horno",
      "categoryId": "paninis",
      "description": "Mozzarella, atún y mezcla selecta de 4 quesos.",
      "allergens": [
        "Gluten",
        "Pescado",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "PE",
        "LA",
        "SO"
      ],
      "note": "gratinados"
    },
    {
      "id": "pe-66",
      "name": "Pizza Cuatro Quesos",
      "nameEn": "Four cheeses pizza",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Pizzas",
      "categoryId": "pizzas",
      "description": "Base horneada con mozzarella y selección de cuatro quesos fundidos.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "masa crujiente"
    },
    {
      "id": "pe-67",
      "name": "Pizza Jamón y Bacon",
      "nameEn": "Ham and bacon pizza",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Pizzas",
      "categoryId": "pizzas",
      "description": "Tomate, mozzarella, jamón cocido y virutas de bacon crujiente.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "masa crujiente"
    },
    {
      "id": "pe-68",
      "name": "Pizza Jamón y Champiñón",
      "nameEn": "Ham and mushroom pizza",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Pizzas",
      "categoryId": "pizzas",
      "description": "Tomate, mozzarella, jamón cocido y champiñones laminados.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "masa crujiente"
    },
    {
      "id": "pe-69",
      "name": "Pollo con queso brie y cebolla caramelizada",
      "nameEn": "Chicken, brie and caramelised onion toast",
      "price": 7.3,
      "priceFormatted": "7,30 €",
      "category": "Tostas Especiales",
      "categoryId": "tostas",
      "description": "Pechuga tierna a la plancha con queso brie fundido y cebolla dulce.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "pan de hogaza"
    },
    {
      "id": "pe-70",
      "name": "Solomillo con mermelada de tomate",
      "nameEn": "Pork tenderloin and tomato jam toast",
      "price": 6.5,
      "priceFormatted": "6,50 €",
      "category": "Tostas Especiales",
      "categoryId": "tostas",
      "description": "Solomillo de cerdo a la plancha con mermelada casera de tomate.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "pan de hogaza"
    },
    {
      "id": "pe-71",
      "name": "Queso de cabra y cebolla caramelizada",
      "nameEn": "Goat cheese and caramelised onion toast",
      "price": 6.4,
      "priceFormatted": "6,40 €",
      "category": "Tostas Especiales",
      "categoryId": "tostas",
      "description": "Medallón de queso de cabra templado con reducción de cebolla caramelizada.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "pan de hogaza"
    },
    {
      "id": "pe-72",
      "name": "Revuelto de gulas y gambas",
      "nameEn": "Scrambled eggs with eels and prawns toast",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Tostas Especiales",
      "categoryId": "tostas",
      "description": "Gulas del norte y gambitas salteadas al ajillo sobre revuelto de huevo.",
      "allergens": [
        "Gluten",
        "Crustáceos",
        "Huevo",
        "Pescado",
        "Moluscos"
      ],
      "allergenCodes": [
        "GL",
        "CR",
        "HU",
        "PE",
        "ML"
      ],
      "note": "pan de hogaza"
    },
    {
      "id": "pe-73",
      "name": "Solomillo con queso brie y cebolla caramelizada",
      "nameEn": "Pork tenderloin, brie and caramelised onion toast",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Tostas Especiales",
      "categoryId": "tostas",
      "description": "Solomillo de cerdo jugoso con queso brie fundido y cebolla caramelizada.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "pan de hogaza"
    },
    {
      "id": "pe-74",
      "name": "Ensalada mixta",
      "nameEn": "Mixed salad",
      "price": 6.5,
      "priceFormatted": "6,50 €",
      "category": "Ensaladas",
      "categoryId": "ensaladas",
      "description": "Lechuga Batavia fresca, tomate, cebolla, huevo duro y atún claro.",
      "allergens": [
        "Huevo",
        "Pescado"
      ],
      "allergenCodes": [
        "HU",
        "PE"
      ],
      "note": "frescas del día"
    },
    {
      "id": "pe-75",
      "name": "Ensalada César",
      "nameEn": "Caesar salad",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Ensaladas",
      "categoryId": "ensaladas",
      "description": "Lechuga crujiente, pollo empanado, picatostes tostados, queso y salsa César.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "SO"
      ],
      "note": "frescas del día"
    },
    {
      "id": "pe-76",
      "name": "Ensalada Tropical",
      "nameEn": "Tropical salad",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "Ensaladas",
      "categoryId": "ensaladas",
      "description": "Lechuga variada, piña, maíz dulce, zanahoria y salsa rosa suave.",
      "allergens": [],
      "allergenCodes": [],
      "note": "frescas del día"
    },
    {
      "id": "pe-77",
      "name": "Ensalada de queso de cabra y nueces (mostaza y miel)",
      "nameEn": "Goat cheese, walnuts, honey mustard salad",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Ensaladas",
      "categoryId": "ensaladas",
      "description": "Brotes variados, queso de cabra templado, nueces y aliño de mostaza y miel.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos",
        "Frutos de cáscara",
        "Mostaza"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA",
        "FC",
        "MO"
      ],
      "note": "frescas del día"
    },
    {
      "id": "pe-78",
      "name": "Oreja a la plancha",
      "nameEn": "Grilled pork ear",
      "price": 10,
      "priceFormatted": "10,00 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Nuestra ración estrella de Aluche: oreja adobada crujiente a la plancha.",
      "allergens": [],
      "allergenCodes": [],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-79",
      "name": "Patatas bravas",
      "nameEn": "Spicy patatas bravas",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Patatas caseras con auténtica salsa brava picantita.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-80",
      "name": "Patatas ali-oli",
      "nameEn": "Garlic alioli potatoes",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Patatas caseras con salsa alioli suave de ajo y perejil.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-81",
      "name": "Croquetas de jamón caseras",
      "nameEn": "Homemade ham croquettes",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Bechamel extra cremosa de jamón ibérico y rebozado crujiente.",
      "allergens": [
        "Gluten",
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "HU",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-82",
      "name": "Alitas de pollo (8 uds)",
      "nameEn": "Chicken wings (8 pcs)",
      "price": 10.5,
      "priceFormatted": "10,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Alitas de pollo doradas y crujientes al punto de sal.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-83",
      "name": "Calamares a la romana",
      "nameEn": "Roman-style battered squid",
      "price": 14,
      "priceFormatted": "14,00 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Anillas tiernas de calamar rebozadas al estilo madrileño con limón.",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-84",
      "name": "Sepia empanada",
      "nameEn": "Crispy breaded cuttlefish",
      "price": 12,
      "priceFormatted": "12,00 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Tiras de sepia fresca en crujiente rebozado dorado.",
      "allergens": [
        "Pescado",
        "Crustáceos",
        "Moluscos",
        "Huevo",
        "Gluten"
      ],
      "allergenCodes": [
        "PE",
        "CR",
        "ML",
        "HU",
        "GL"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-85",
      "name": "Gambones a la plancha",
      "nameEn": "Grilled king prawns",
      "price": 14,
      "priceFormatted": "14,00 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Gambones frescos a la plancha con sal gorda y limón.",
      "allergens": [
        "Crustáceos"
      ],
      "allergenCodes": [
        "CR"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-86",
      "name": "Nachos con pulled pork",
      "nameEn": "Pulled pork nachos with cheese",
      "price": 14.5,
      "priceFormatted": "14,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Pico de gallo, guacamole, jalapeños, salsa chipotle y nata agria.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-87",
      "name": "Nachos con pollo mechado",
      "nameEn": "Shredded chicken nachos",
      "price": 14.5,
      "priceFormatted": "14,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Pico de gallo, guacamole, jalapeños, salsa chipotle y nata agria.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-88",
      "name": "Nachos con queso gratinado",
      "nameEn": "Baked cheese nachos",
      "price": 12.5,
      "priceFormatted": "12,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Totopos cubiertos de queso gratinado fundido al horno.",
      "allergens": [
        "Gluten",
        "Lácteos"
      ],
      "allergenCodes": [
        "GL",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-89",
      "name": "Sartén Campero",
      "nameEn": "Country skillet (eggs, ham/bacon, chips)",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Sartén con huevos, pimientos, jamón o bacon y patatas.",
      "allergens": [
        "Huevo",
        "Lácteos"
      ],
      "allergenCodes": [
        "HU",
        "LA"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-90",
      "name": "Sartén de Embutidos",
      "nameEn": "Sausage skillet (morcilla, chistorra, butifarra)",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "Raciones y Sartenes",
      "categoryId": "raciones",
      "description": "Sartén con morcilla, chistorra, butifarra, chorizo y patatas.",
      "allergens": [
        "Gluten",
        "Lácteos",
        "Soja"
      ],
      "allergenCodes": [
        "GL",
        "LA",
        "SO"
      ],
      "note": "clásicos de barra"
    },
    {
      "id": "pe-91",
      "name": "Gyoza casera a la plancha (12 uds)",
      "nameEn": "Pan-fried homemade gyoza (12 pcs)",
      "price": 9,
      "priceFormatted": "9,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Empanadillas caseras doradas a la plancha con carne y verduras.",
      "allergens": [
        "Lácteos",
        "Gluten",
        "Sésamo"
      ],
      "allergenCodes": [
        "LA",
        "GL",
        "SE"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-92",
      "name": "Arroz tres delicias",
      "nameEn": "Three-delights fried rice",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Arroz salteado al wok con jamón york, guisantes, tortilla y gambas.",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-93",
      "name": "Espaguetis al marisco",
      "nameEn": "Seafood stir-fried spaghetti",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Pasta salteada con gambas, calamar, verduras y salsa de soja.",
      "allergens": [
        "Gluten",
        "Crustáceos",
        "Huevo",
        "Pescado",
        "Moluscos"
      ],
      "allergenCodes": [
        "GL",
        "CR",
        "HU",
        "PE",
        "ML"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-94",
      "name": "Langostinos rebozados",
      "nameEn": "Crispy battered king prawns",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Langostinos enteros en rebozado crujiente con salsa agridulce.",
      "allergens": [
        "Crustáceos",
        "Huevo",
        "Pescado",
        "Moluscos"
      ],
      "allergenCodes": [
        "CR",
        "HU",
        "PE",
        "ML"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-95",
      "name": "Tallarines tres delicias",
      "nameEn": "Three-delights noodles",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Tallarines orientales salteados al wok con verduras y huevo.",
      "allergens": [
        "Gluten",
        "Huevo"
      ],
      "allergenCodes": [
        "GL",
        "HU"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-96",
      "name": "Fideos tres delicias",
      "nameEn": "Three-delights rice vermicelli",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Fideos de arroz finos con carne picada y verduritas salteadas.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-97",
      "name": "Rollos de primavera (2 uds)",
      "nameEn": "Spring rolls (2 pcs)",
      "price": 5,
      "priceFormatted": "5,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Rollitos crujientes rellenos de verdura y carne picada.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-98",
      "name": "Wanton frito",
      "nameEn": "Crispy fried wonton",
      "price": 7.8,
      "priceFormatted": "7,80 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Masa fina china frita extra crujiente con salsa agridulce.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-99",
      "name": "Costilla agridulce",
      "nameEn": "Sweet and sour pork ribs",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Trocitos de costilla jugosa caramelizados en salsa agridulce tradicional.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-100",
      "name": "Costilla a la sal y pimienta",
      "nameEn": "Salt and pepper ribs",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Costillas fritas muy crujientes con toque de sal y pimienta.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-101",
      "name": "Gambas salteadas con verduras",
      "nameEn": "Stir-fried prawns with vegetables",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Gambas frescas con brócoli, pimiento, champiñón y bambú.",
      "allergens": [
        "Crustáceos",
        "Pescado",
        "Moluscos"
      ],
      "allergenCodes": [
        "CR",
        "PE",
        "ML"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-102",
      "name": "Ternera en salsa de ostra",
      "nameEn": "Beef in savoury oyster sauce",
      "price": 11,
      "priceFormatted": "11,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Tiras de ternera tierna en reducción intensa de salsa de ostra.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-103",
      "name": "Boquerones fritos",
      "nameEn": "Crispy fried anchovies",
      "price": 12,
      "priceFormatted": "12,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Boqueroncitos frescos enharinados y fritos muy crujientes con limón.",
      "allergens": [
        "Crustáceos",
        "Pescado",
        "Moluscos"
      ],
      "allergenCodes": [
        "CR",
        "PE",
        "ML"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-104",
      "name": "Ciervo en salsa de coñac",
      "nameEn": "Venison in cognac sauce",
      "price": 15,
      "priceFormatted": "15,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Carne de monte estofada a fuego lento en reducción aromática de coñac.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-105",
      "name": "Jabalí en salsa de coñac",
      "nameEn": "Wild boar in cognac sauce",
      "price": 15,
      "priceFormatted": "15,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Guiso tradicional de jabalí salvaje con salsa de coñac y finas hierbas.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-106",
      "name": "Pato a la naranja",
      "nameEn": "Duck à l’orange",
      "price": 15,
      "priceFormatted": "15,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Magret de pato asado bañado en salsa clásica agridulce de naranja natural.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-107",
      "name": "Pollo con almendras",
      "nameEn": "Chicken with almonds",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Pechuga salteada al wok con almendras tostadas y salsa de soja.",
      "allergens": [
        "Gluten",
        "Frutos de cáscara",
        "Cacahuetes"
      ],
      "allergenCodes": [
        "GL",
        "FC",
        "CA"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-108",
      "name": "Sepia a la plancha",
      "nameEn": "Grilled cuttlefish with garlic & parsley",
      "price": 15,
      "priceFormatted": "15,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Sepia limpia a la plancha muy tierna con ajo, perejil y aceite de oliva.",
      "allergens": [
        "Crustáceos",
        "Huevo",
        "Pescado",
        "Moluscos"
      ],
      "allergenCodes": [
        "CR",
        "HU",
        "PE",
        "ML"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-109",
      "name": "Torreznos crujientes",
      "nameEn": "Crispy Madrid pork belly",
      "price": 12,
      "priceFormatted": "12,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Panceta curada frita a fuego lento con corteza dorada y suflada hipercrujiente.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-110",
      "name": "Pollo al limón",
      "nameEn": "Lemon battered chicken",
      "price": 9.5,
      "priceFormatted": "9,50 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Pechuga en crujiente rebozado bañada en salsa cítrica natural de limón.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-111",
      "name": "Costilla de ternera",
      "nameEn": "Slow-roasted beef short rib",
      "price": 15,
      "priceFormatted": "15,00 €",
      "category": "La carta que no esperas",
      "categoryId": "especiales",
      "description": "Costilla de vacuno tiernísima asada al punto durante horas en su propio jugo.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "21 especialidades"
    },
    {
      "id": "pe-112",
      "name": "3 minis + aperitivo",
      "nameEn": "3 litre jugs + snack plate (not 3 beers)",
      "price": 13.5,
      "priceFormatted": "13,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "Combínalos como quieras: cerveza, calimocho, tinto de verano o sidra (máx. 2 de cerveza).",
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
      "id": "pe-113",
      "name": "3 minis de cerveza + bravas o alioli",
      "nameEn": "3 beer jugs + spicy or alioli potatoes",
      "price": 19,
      "priceFormatted": "19,00 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "3 litros de cerveza de grifo bien fría acompañados de ración completa de patatas.",
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
      "id": "pe-114",
      "name": "Mini cerveza + mini calimocho + ración",
      "nameEn": "Beer jug + calimocho jug + ración plate",
      "price": 15.5,
      "priceFormatted": "15,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "1 litro de cerveza + 1 litro de calimocho + ración a elegir entre bravas, oreja o alitas.",
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
      "id": "pe-115",
      "name": "3 minis de calimocho + pizza",
      "nameEn": "3 calimocho jugs + full pizza",
      "price": 15.5,
      "priceFormatted": "15,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "3 litros de calimocho helado con pizza horneada a elegir.",
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
      "id": "pe-116",
      "name": "Mini suelto de Cerveza de barril (1L)",
      "nameEn": "Single one-litre beer jug",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "Jarra de litro de cerveza fresca recién tirada.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-117",
      "name": "Mini suelto de Calimocho (1L)",
      "nameEn": "Single one-litre calimocho jug",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "Vino tinto y refresco de cola con hielo picado.",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-118",
      "name": "Mini suelto de Tinto de verano (1L)",
      "nameEn": "Single one-litre tinto de verano jug",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "Vino con gaseosa o limón bien fresquito.",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-119",
      "name": "Mini suelto de Sidra con gas (1L)",
      "nameEn": "Single one-litre cider jug",
      "price": 8.5,
      "priceFormatted": "8,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "Sidra achampanada servida en jarra helada de litro.",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-120",
      "name": "Mini suelto de Sangría casera (1L)",
      "nameEn": "Single one-litre sangria jug",
      "price": 8.5,
      "priceFormatted": "8,50 €",
      "category": "Minis de Litro",
      "categoryId": "minis",
      "description": "Vino tinto, frutas naturales maceradas y licor.",
      "allergens": [
        "Sulfitos"
      ],
      "allergenCodes": [
        "SU"
      ],
      "note": "solo interior"
    },
    {
      "id": "pe-121",
      "name": "Parrillada completa de carne + 2 bebidas",
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
      "note": "para 2 personas"
    },
    {
      "id": "pe-122",
      "name": "Caña de barril (200ml)",
      "nameEn": "Draught beer glass (200ml)",
      "price": 1.9,
      "priceFormatted": "1,90 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Tirador de barril recién tirada con dos dedos de crema.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-123",
      "name": "Doble de barril (330ml)",
      "nameEn": "Double draught beer (330ml)",
      "price": 2.8,
      "priceFormatted": "2,80 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Copa clásica bien fría con abundante espuma densa.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-124",
      "name": "Jarra de barril (500ml)",
      "nameEn": "Large draught beer mug (500ml)",
      "price": 3.5,
      "priceFormatted": "3,50 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Jarra de cristal helada de medio litro de cerveza.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-125",
      "name": "Mini de Litro de barril (1.000ml)",
      "nameEn": "One-litre draught beer jug",
      "price": 7.5,
      "priceFormatted": "7,50 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Jarra gigante de litro para compartir entre amigos en interior.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-126",
      "name": "El Águila Especial 1900",
      "nameEn": "Madrid Especial Lager (5.5% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Madrid 1900 · Dorada y brillante, maltas caramelizadas y lúpulos Perle y Lemondrop.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-127",
      "name": "El Águila Especial Sin Filtrar",
      "nameEn": "Madrid Unfiltered Lager (5.5% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Madrid 1900 · Cerveza natural recién salida de bodega, levadura en suspensión, gran cuerpo.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-128",
      "name": "Amstel Radler con limón natural",
      "nameEn": "Lemon Radler (2.0% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Múnich 1922 · 100% malta con zumo de limón natural, turbia y muy refrescante.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-129",
      "name": "Amstel Oro Tostada",
      "nameEn": "Toasted Lager (6.2% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Lager tostada en 3 tiempos de horneado · Color cobrizo y notas acarameladas.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-130",
      "name": "Amstel Oro 0,0% Tostada",
      "nameEn": "Non-Alcoholic Toasted Lager (0.0% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Pura malta tostada con todo el aroma y cuerpo tostado pero 0,0% alcohol.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-131",
      "name": "Victoria Málaga",
      "nameEn": "Malaga Pale Lager (4.8% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Málaga 1928 · «Malagueña y exquisita», maduración lenta en bodega, suave y chispeante.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-132",
      "name": "Mahou Cinco Estrellas",
      "nameEn": "Madrid Classic Lager (5.5% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Madrid 1890 · El sabor castizo más icónico de los bares de Madrid, amargor redondo.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-133",
      "name": "Heineken Original Pura Malta",
      "nameEn": "Dutch Premium Lager (5.0% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Ámsterdam 1873 · Pilsen de pura malta y lúpulo con levadura exclusiva tipo A.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-134",
      "name": "Heineken 0,0%",
      "nameEn": "Alcohol-Free Lager (0.0% alc.)",
      "price": 3.2,
      "priceFormatted": "3,20 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Cero alcohol, sabor auténtico a malta con notas afrutadas y final suave.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-135",
      "name": "Hop House 13 Craft Lager",
      "nameEn": "Double Hopped Lager (5.5% alc.)",
      "price": 3.75,
      "priceFormatted": "3,75 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Dublín St. James’s Gate · 3 lúpulos (Galaxy, Topaz, Mosaic) y levadura Guinness.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-136",
      "name": "Paulaner Hefe-Weißbier de Trigo (50cl)",
      "nameEn": "Munich Wheat Beer 500ml (5.3% alc.)",
      "price": 5,
      "priceFormatted": "5,00 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Múnich s. XII · Clásica cerveza de trigo bávara turbia, aromas a clavo y plátano.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-137",
      "name": "Guinness Original Extra Stout",
      "nameEn": "Irish Stout (5.0% alc.)",
      "price": 3.8,
      "priceFormatted": "3,80 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Dublín 1759 · La legendaria stout irlandesa con notas profundas a malta tostada, café y cacao.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-138",
      "name": "Desperados aromatizada con Tequila",
      "nameEn": "Tequila Flavoured Beer (5.9% alc.)",
      "price": 3.85,
      "priceFormatted": "3,85 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Lager rubia aromatizada con tequila y toques cítricos, intensa y festiva.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-139",
      "name": "El Alcázar 1928 Reserva Especial",
      "nameEn": "Special Reserve Lager (6.0% alc.)",
      "price": 3.6,
      "priceFormatted": "3,60 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Jaén 1928 · Cerveza de gran cuerpo con lúpulo aromático en flor añadido al final.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-140",
      "name": "18/70 La Rubia Especial",
      "nameEn": "Basque Lager (6.2% alc.)",
      "price": 3.6,
      "priceFormatted": "3,60 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "País Vasco · Cerveza rubia con más malta, cuerpo medio-alto y marcado carácter de lúpulo.",
      "allergens": [
        "Gluten"
      ],
      "allergenCodes": [
        "GL"
      ],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-141",
      "name": "Cruzcampo Sin Gluten (Apta Celíacos)",
      "nameEn": "Gluten-Free Lager (4.8% alc.)",
      "price": 3.3,
      "priceFormatted": "3,30 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Certificada por la FACE · Todo el frescor y ligereza de Cruzcampo apta para celíacos.",
      "allergens": [],
      "allergenCodes": [],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-142",
      "name": "Refrescos (Coca-Cola, Fanta, Aquarius, Nestea)",
      "nameEn": "Assorted soft drinks",
      "price": 2.6,
      "priceFormatted": "2,60 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Refrescos en botella de cristal con rodaja de limón y hielo.",
      "allergens": [],
      "allergenCodes": [],
      "note": "terraza +0,10 €"
    },
    {
      "id": "pe-143",
      "name": "Agua mineral (50cl)",
      "nameEn": "Mineral water",
      "price": 1.8,
      "priceFormatted": "1,80 €",
      "category": "Cervezateca y Bebidas",
      "categoryId": "bebidas",
      "description": "Botella de agua mineral natural 50cl.",
      "allergens": [],
      "allergenCodes": [],
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
