// estilo9/data.js - Datos de La Pecora Nera · Pizzería La Oveja Negra (Aluche, Madrid)
// Fuentes: ficha de Google del local (dirección, teléfono, valoración, servicios y horario)
// y la carta impresa del local (pizzas y antipasti con sus ingredientes).
// REGLA: no añadir productos, precios, horarios ni opiniones que no existan en la carta o en la ficha.
//   - Precios de la carta de Google (oct. 2026). Serranini no aparece allí: sin precio
//     hasta confirmarlo con el local (en la web se muestra sin precio).
//   - PENDIENTE DE CONFIRMAR con el local: que el WhatsApp sea el mismo número que el teléfono, y los alérgenos.
(function() {
  const DEFAULT_DATA = {
  "id": "estilo9",
  "dataVersion": 1,
  "styleName": "Estilo 9",
  "styleSubtitle": "Pizzería de barrio · La Pecora Nera",
  "layoutType": "showcase",
  "themeClass": "theme-estilo-9",
  "name": "La Pecora Nera",
  "shortName": "Pecora Nera",
  "legalName": "Pizzería La Oveja Negra Aluche",
  "tagline": "Pizzas con salsa de tomate natural y mozzarella 100 %, antipasti para compartir y terraza en Aluche.",
  "slogan": "Ser una oveja negra es actuar diferente",
  "neighborhood": "Aluche · Latina (Madrid)",
  "address": "Av. de las Águilas, 4, Latina, 28044 Madrid",
  "addressShort": "Av. de las Águilas, 4 · Aluche",
  "phone": "653 59 02 11",
  "phoneIntl": "+34653590211",
  // Pendiente de confirmar: se asume que el móvil del local también es su WhatsApp.
  "whatsapp": "34653590211",
  "email": "",
  "priceRange": "10–20 € por persona",
  "googleRating": { "value": 4.8, "count": 359 },
  "services": ["Terraza", "Platos veganos", "Tronas"],
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Pizzer%C3%ADa+La+Oveja+Negra+Aluche+Av.+de+las+%C3%81guilas+4+Madrid",
  "googleDirectionsUrl": "https://www.google.com/maps/dir/?api=1&destination=Av.+de+las+%C3%81guilas+4%2C+28044+Madrid",
  "googleMapsEmbed": "https://maps.google.com/maps?q=Pizzer%C3%ADa%20La%20Oveja%20Negra%20Aluche%2C%20Av.%20de%20las%20%C3%81guilas%204%2C%2028044%20Madrid&z=16&output=embed",
  // Horario según la ficha de Google: abre todos los días de 19:30 a 23:00 salvo el miércoles.
  // El formulario de reserva (Premium) saca de aquí los días y horas disponibles.
  "hours": [
    { "days": "Jueves a martes", "time": "19:30 – 23:00" },
    { "days": "Miércoles", "time": "Cerrado" }
  ],
  // Profesional: la reserva se pide por WhatsApp (el local no tiene sistema de reservas online).
  "bookingSteps": [
    { "title": "Pulsa «Reservar mesa»", "desc": "Se abre WhatsApp con tu mensaje ya escrito." },
    { "title": "Indica día, hora y personas", "desc": "Cuéntanos cuándo venís y cuántos sois." },
    { "title": "Te confirmamos la mesa", "desc": "Te respondemos por WhatsApp en cuanto podamos." }
  ],
  "aboutUs": {
    "headline": "La oveja negra",
    "story": "En La Pecora Nera preparamos pizzas con salsa de tomate natural y mozzarella 100 %: desde la Margherita de siempre hasta la Pecora nera de la casa, con salchicha italiana, taleggio, queso de cabra y pecorino.",
    "storyExtra": "Ven a cenar a nuestra terraza en Aluche, en familia o con amigos.",
    "who": "Porque ser una oveja negra es actuar diferente: las recetas italianas de siempre y combinaciones propias como la Esplosivo, la Serranini o la Milanese.",
    "values": [
      { "title": "Terraza", "desc": "Cena al aire libre en la Avenida de las Águilas." },
      { "title": "Opciones veganas", "desc": "Tenemos platos veganos: pregúntanos al pedir." },
      { "title": "Para toda la familia", "desc": "Tronas para los más pequeños de la casa." }
    ]
  },
  // Agrupación de la carta. "group" = pestaña (en este orden), "category" = filtro (Profesional y Premium),
  // "icon" = icono de la pestaña. "defaultGroup" = pestaña abierta al cargar la página.
  "defaultGroup": "pizzas",
  "menuGroups": [
    {
      "id": "bebidas",
      "label": "Bebidas",
      "unit": "Bebida",
      "icon": "glass",
      "title": "Bebidas",
      "text": "Cerveza, vino y refrescos para acompañar.",
      "image": "img/bebida-copa-vino.jpg",
      "categories": ["Bebidas"]
    },
    {
      "id": "antipasti",
      "label": "Antipasti",
      "unit": "Antipasto",
      "icon": "plate",
      "title": "Antipasti",
      "text": "Para abrir boca mientras sale tu pizza.",
      "image": "img/antipasti-strisce-pollo.jpg",
      "categories": ["Antipasti"]
    },
    {
      "id": "pizzas",
      "label": "Pizzas",
      "unit": "Pizza",
      "icon": "pizza",
      "title": "Le pizze nostre",
      "text": "Todas con salsa de tomate natural y mozzarella 100 %.",
      "image": "img/pizza-4-formaggi.jpg",
      "note": "*Ingrediente adicional: 1,50 €",
      "categories": ["Clásicas", "De la huerta", "Especiales de la casa"]
    },
    {
      "id": "postres",
      "label": "Postres y café",
      "unit": "Dolce e caffè",
      "icon": "cup",
      "title": "Dolce e caffè",
      "text": "El final dulce de la cena.",
      "image": "img/dolce-tiramisu.jpg",
      "categories": ["Dolce", "Café"]
    }
  ],
  // Alérgenos ORIENTATIVOS deducidos de los ingredientes de la carta (claves UE del panel /admin):
  //   gluten, crustaceos, huevos, pescado, cacahuete, soja, lacteos, frutos_cascara, apio, mostaza,
  //   sesamo, sulfitos, altramuces, moluscos. Confirmar con el local.
  // "image": foto orientativa (Wikimedia Commons, con "imageCredit" obligatorio por licencia CC).
  "menu": [
    { "id": "p1", "group": "pizzas", "category": "Clásicas", "name": "Margherita", "description": "Salsa de tomate natural y mozzarella 100 %.", "price": 9, "tags": [], "image": "img/pizza-margherita.jpg", "imageCredit": { "author": "Shisma", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Margherita_pizza_on_plate.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p2", "group": "pizzas", "category": "Clásicas", "name": "Margherita affumicata", "description": "Salsa de tomate natural, mozzarella 100 % y queso scamorza ahumado.", "price": 9.5, "tags": [], "image": "img/pizza-margherita-affumicata.jpg", "imageCredit": { "author": "Mario56", "license": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Margherita_Originale.JPG" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p3", "group": "pizzas", "category": "Clásicas", "name": "Romana", "description": "Salsa de tomate natural, mozzarella 100 %, anchoas, aceitunas negras y queso pecorino.", "price": 10.5, "tags": [], "image": "img/pizza-romana.jpg", "imageCredit": { "author": "Tobselo", "license": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Sardellenpizza.JPG" }, "allergens": ["gluten", "lacteos", "pescado"] },
    { "id": "p4", "group": "pizzas", "category": "Clásicas", "name": "Pepperoni", "description": "Salsa de tomate natural, mozzarella 100 % y pepperoni.", "price": 10, "tags": [], "image": "img/pizza-pepperoni.jpg", "imageCredit": { "author": "BullDawg2021", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pepperoni_Pizza_from_Fellini%E2%80%99s_Pizza.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p5", "group": "pizzas", "category": "Clásicas", "name": "Prosciutto", "description": "Salsa de tomate natural, mozzarella 100 % y jamón york.", "price": 10, "tags": [], "image": "img/pizza-prosciutto.jpg", "imageCredit": { "author": "Rool Paap", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_Ham_%26_Cheese_(4254288665).jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p6", "group": "pizzas", "category": "De la huerta", "name": "Berenjena y calabacín", "description": "Salsa de tomate natural, mozzarella 100 %, berenjenas y calabacines grillados, aceitunas negras y pimientos.", "price": 10, "tags": [], "image": "img/pizza-berenjena-calabacin.jpg", "imageCredit": { "author": "Reem Al-Kashif", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Vegetable_pizza_italy.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p7", "group": "pizzas", "category": "De la huerta", "name": "Parmigiana", "description": "Salsa de tomate natural, mozzarella 100 %, berenjenas y queso parmesano.", "price": 10, "tags": [], "image": "img/pizza-parmigiana.jpg", "imageCredit": { "author": "Ruth Hartnup", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_melanzane_at_Pizzeria_Antico_(32121956378).jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p8", "group": "pizzas", "category": "Clásicas", "name": "4 formaggi", "description": "Salsa de tomate natural, mozzarella 100 % y queso scamorza ahumado, queso gorgonzola y queso de cabra.", "price": 10.5, "tags": [], "image": "img/pizza-4-formaggi.jpg", "imageCredit": { "author": "Andy Li", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Four_Cheese_-_Pizza_500_2023-11-10.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p9", "group": "pizzas", "category": "Clásicas", "name": "4 estaciones", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york, champiñones, aceitunas y alcachofas.", "price": 10.5, "tags": [], "image": "img/pizza-4-estaciones.jpg", "imageCredit": { "author": "Andy Li", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Quattro_stagioni_(4_seasons)_-_Pizza_500_2024-11-16.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p10", "group": "pizzas", "category": "Clásicas", "name": "Prosciutto e funghi", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york y champiñones.", "price": 10.5, "tags": [], "image": "img/pizza-prosciutto-funghi.jpg", "imageCredit": { "author": "Gerda Arendt", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_prosciutto_e_funghi,_Edingen.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p11", "group": "pizzas", "category": "De la huerta", "name": "Carcioffi", "description": "Salsa de tomate natural, mozzarella 100 %, alcachofas y pimientos ahumados.", "price": 10, "tags": [], "image": "img/pizza-carcioffi.jpg", "imageCredit": { "author": "PastaFazzulla", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_artichokes.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p12", "group": "pizzas", "category": "Especiales de la casa", "name": "Contadina", "description": "Salsa de tomate natural, mozzarella 100 %, salchicha italiana, huevo y queso taleggio.", "price": 10.5, "tags": [], "image": "img/pizza-contadina.jpg", "imageCredit": { "author": "joefoodie", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Bismarck_AKA_%22One_Egg%22_(4848075600).jpg" }, "allergens": ["gluten", "lacteos", "huevos"] },
    { "id": "p13", "group": "pizzas", "category": "Especiales de la casa", "name": "Maiale", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york y bacon.", "price": 10.5, "tags": [], "image": "img/pizza-maiale.jpg", "imageCredit": { "author": "Nicholas Gemini", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_with_bacon_and_mozzarella.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p14", "group": "pizzas", "category": "Especiales de la casa", "name": "Barbacoa", "description": "Salsa de tomate natural, mozzarella 100 %, lonchas de carne de cerdo ahumado al horno, bacon y salsa BBQ.", "price": 10.5, "tags": [], "image": "img/pizza-barbacoa.jpg", "imageCredit": { "author": "Azulino", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_barbacoa_20-01-2025.jpg" }, "allergens": ["gluten", "lacteos", "mostaza"] },
    { "id": "p15", "group": "pizzas", "category": "Especiales de la casa", "name": "Serranini", "description": "Salsa de tomate natural, mozzarella 100 % y jamón serrano reserva (24 meses de maduración).", "price": 0, "tags": [], "image": "img/pizza-serranini.jpg", "imageCredit": { "author": "Robot8A", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_Prosciutto_Crudo.jpeg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p16", "group": "pizzas", "category": "Especiales de la casa", "name": "Milanese", "description": "Salsa de tomate natural, mozzarella 100 %, pancetta, queso gorgonzola picante y cebolla.", "price": 10.5, "tags": ["Picante"], "image": "img/pizza-milanese.jpg", "imageCredit": { "author": "Peachyeung316", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Gorgonzala_cheese_pizza_with_bacons_onion_and_honey.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p17", "group": "pizzas", "category": "Especiales de la casa", "name": "Esplosivo", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york, chorizo picante ibérico y pimiento cayena.", "price": 10.5, "tags": ["Picante"], "image": "img/pizza-esplosivo.jpg", "imageCredit": { "author": "Horacio Cambeiro", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_calabresa_argentina_(con_longaniza_calabresa_o_chorizo_picante).jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p18", "group": "pizzas", "category": "Clásicas", "name": "Diavola", "description": "Salsa de tomate natural, mozzarella 100 %, chorizo picante ibérico y aceitunas negras.", "price": 10.5, "tags": ["Picante"], "image": "img/pizza-diavola.jpg", "imageCredit": { "author": "OpenHousePraha", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_diavola_20250518_125351.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p19", "group": "pizzas", "category": "Especiales de la casa", "name": "Pecora nera", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york, salchicha italiana, queso taleggio, queso de cabra y queso pecorino.", "price": 12.5, "badge": "La de la casa", "tags": [], "image": "img/pizza-pecora-nera.jpg", "imageCredit": { "author": "Ensahequ", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_con_salsiccia_-_San_Vigilio.jpg" }, "allergens": ["gluten", "lacteos"] },
    // Pizzas nuevas de la carta de Google (oct. 2026). Las descripciones de Pecora bianca y Popeye aparecen recortadas en Google: confirmar con el local.
    { "id": "p20", "group": "pizzas", "category": "Especiales de la casa", "name": "Pecora bianca", "description": "Mozzarella 100 %, salsa de tomate natural, queso de cabra, queso taleggio, queso gorgonzola y queso scamorza affumicata.", "price": 12.5, "tags": ["Picante"], "image": "img/pizza-pecora-bianca.jpg", "imageCredit": { "author": "Andy Li", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Saporita_-_Pronto_in_Tavola_2024-10-16.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p21", "group": "pizzas", "category": "Especiales de la casa", "name": "Bianconera", "description": "Mozzarella 100 %, salsa de tomate natural, guanciale, cebolla, gorgonzola y 'nduja calabrese (sobrasada picante).", "price": 12.5, "tags": [], "image": "img/pizza-bianconera.jpg", "imageCredit": { "author": "JIP", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_Nduja_and_beer_at_restaurant_Broo.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p22", "group": "pizzas", "category": "Clásicas", "name": "Tonno e cipolla", "description": "Mozzarella 100 %, salsa de tomate natural, atún y cebolla.", "price": 10.5, "tags": [], "image": "img/pizza-tonno-cipolla.jpg", "imageCredit": { "author": "JIP", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_Tonno_Cipolla.jpg" }, "allergens": ["gluten", "lacteos", "pescado"] },
    { "id": "p23", "group": "pizzas", "category": "Especiales de la casa", "name": "Popeye", "description": "Mozzarella 100 %, crema de espinacas, queso de cabra, rollitos de bacon y queso crema, y cebolla caramelizada.", "price": 12.5, "tags": [], "image": "img/pizza-popeye.jpg", "imageCredit": { "author": "Agnieszka Kwiecień", "license": "CC BY 2.5", "url": "https://commons.wikimedia.org/wiki/File:Spinach_pizza.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "a1", "group": "antipasti", "category": "Antipasti", "name": "Olive all'ascolana", "description": "Aceitunas empanadas, rellenas de carne.", "price": 8.5, "tags": [], "image": "img/antipasti-olive-ascolana.jpg", "imageCredit": { "author": "Wine Dharma", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Olive_all%27ascolana_2.jpg" }, "allergens": ["gluten", "huevos", "lacteos"] },
    { "id": "a2", "group": "antipasti", "category": "Antipasti", "name": "Strisce di pollo", "description": "250 g de tiras de pollo empanadas.", "price": 8.5, "tags": [], "image": "img/antipasti-strisce-pollo.jpg", "imageCredit": { "author": "jeffreyw", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Chicken_tenders_(8884884960).jpg" }, "allergens": ["gluten", "huevos"] },
    { "id": "a4", "group": "antipasti", "category": "Antipasti", "name": "Perle di mozzarella", "description": "Perlas de queso mozzarella empanadas.", "price": 8.5, "tags": [], "image": "img/antipasti-perle-mozzarella.jpg", "imageCredit": { "author": "Tamilselvi v", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Chessse_balls.jpg" }, "allergens": ["lacteos"] },
    { "id": "a5", "group": "antipasti", "category": "Antipasti", "name": "Patatine fritte", "description": "Patatas fritas.", "price": 4.5, "tags": [], "image": "img/antipasti-patatine-fritte.jpg", "imageCredit": { "author": "JIP", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Hesburger_French_fries_on_a_plate.jpg" }, "allergens": [] },
    // Bebidas, postres y café: precios de la carta del local (ficha de Google).
    { "id": "b1", "group": "bebidas", "category": "Bebidas", "name": "Cerveza de tercio", "description": "", "price": 3, "tags": [], "image": "img/bebida-cerveza.jpg", "imageCredit": { "author": "Chris Olszewski", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Peroni_beer_at_Caffe_Primavera,_Corinda,_Queensland.jpg" }, "allergens": ["gluten"] },
    { "id": "b2", "group": "bebidas", "category": "Bebidas", "name": "Refresco (bote)", "description": "", "price": 2.5, "tags": [], "image": "img/bebida-refresco.jpg", "imageCredit": { "author": "Summi", "license": "Dominio público", "url": "https://commons.wikimedia.org/wiki/File:Coca-Cola_Glas_mit_Eis.jpg" }, "allergens": [] },
    { "id": "b3", "group": "bebidas", "category": "Bebidas", "name": "Agua (botella 0,5 l)", "description": "", "price": 1.5, "tags": [], "image": "img/bebida-agua.jpg", "imageCredit": { "author": "Beluwater", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Belu_Bottled_Mineral_Water.jpg" }, "allergens": [] },
    { "id": "b4", "group": "bebidas", "category": "Bebidas", "name": "Copa de vino", "description": "", "price": 3, "tags": [], "image": "img/bebida-copa-vino.jpg", "imageCredit": { "author": "André Karwath", "license": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Red_Wine_Glass.jpg" }, "allergens": ["sulfitos"] },
    { "id": "b5", "group": "bebidas", "category": "Bebidas", "name": "Botella de vino", "description": "", "price": 15, "tags": [], "image": "img/bebida-botella-vino.jpg", "imageCredit": { "author": "Beatrice Murch", "license": "CC BY-SA 2.0", "url": "https://commons.wikimedia.org/wiki/File:Uruguay_Merlot_wine.jpg" }, "allergens": ["sulfitos"] },
    { "id": "b6", "group": "bebidas", "category": "Bebidas", "name": "Tinto de verano", "description": "Copa.", "price": 2.5, "tags": [], "image": "img/bebida-tinto-verano.jpg", "imageCredit": { "author": "Tamorlan", "license": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Tinto_de_verano_-_Madrid.jpg" }, "allergens": ["sulfitos"] },
    { "id": "b7", "group": "bebidas", "category": "Bebidas", "name": "Martini", "description": "", "price": 3, "tags": [], "image": "img/bebida-martini.jpg", "imageCredit": { "author": "Evan Swigart", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Triple_olive_Dirty_Martini_-_Evan_Swigart.jpg" }, "allergens": ["sulfitos"] },
    { "id": "b8", "group": "bebidas", "category": "Bebidas", "name": "Cubata", "description": "", "price": 6, "tags": [], "image": "img/bebida-cubata.jpg", "imageCredit": { "author": "Martin Belam", "license": "CC BY-SA 2.0", "url": "https://commons.wikimedia.org/wiki/File:Cuba_Libre.jpg" }, "allergens": [] },
    { "id": "d1", "group": "postres", "category": "Dolce", "name": "Tiramisú", "description": "", "price": 5, "tags": [], "image": "img/dolce-tiramisu.jpg", "imageCredit": { "author": "Sharon Chen", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Classic_Italian_Tiramisu-3_(29989504485).jpg" }, "allergens": ["gluten", "huevos", "lacteos"] },
    { "id": "d2", "group": "postres", "category": "Dolce", "name": "Cheesecake", "description": "", "price": 5, "tags": [], "image": "img/dolce-cheesecake.jpg", "imageCredit": { "author": "Alex Dugger", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Mondays_at_Il_Forno_-_Cheesecake_with_strawberry_sauce.jpg" }, "allergens": ["gluten", "huevos", "lacteos"] },
    { "id": "c1", "group": "postres", "category": "Café", "name": "Spresso", "description": "", "price": 1.7, "tags": [], "image": "img/cafe-spresso.jpg", "imageCredit": { "author": "Kritzolina", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Cup_of_espresso_02.jpg" }, "allergens": [] },
    { "id": "c2", "group": "postres", "category": "Café", "name": "Nero", "description": "", "price": 1.7, "tags": [], "image": "img/cafe-nero.jpg", "imageCredit": { "author": "Evan Swigart", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Black_coffee_in_a_white_cup_served_on_a_saucer_with_stirring_spoon.jpg" }, "allergens": [] },
    { "id": "c3", "group": "postres", "category": "Café", "name": "Latte", "description": "", "price": 2, "tags": [], "image": "img/cafe-latte.jpg", "imageCredit": { "author": "B adger1", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Caffe_Latte_at_Pulse_Cafe.jpg" }, "allergens": ["lacteos"] },
    { "id": "c4", "group": "postres", "category": "Café", "name": "Cappuccino", "description": "Con nata.", "price": 3, "tags": [], "image": "img/cafe-cappuccino.jpg", "imageCredit": { "author": "Alex1011", "license": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:KapuzinerKaffee.jpg" }, "allergens": ["lacteos"] },
    { "id": "c5", "group": "postres", "category": "Café", "name": "Coretto", "description": "Con grappa.", "price": 2.5, "tags": [], "image": "img/cafe-coretto.jpg", "imageCredit": { "author": "Takumi Yoshida", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Caff%C3%A8_corretto_(cropped).jpg" }, "allergens": [] }
  ],
  // Créditos de las fotos de ambiente (Wikimedia Commons)
  "photoCredits": [
    { "file": "img/hero-horno.jpg", "author": "Jared Tarbell", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_baking_in_Wood-fired_oven.jpg" },
    { "file": "img/horno-lena.jpg", "author": "oakwoodfirepizza.com", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Wood_Fired_Oven.jpg" }
  ],
  // Reseñas reales de la ficha de Google, copiadas tal cual (texto sin corregir).
  // La fecha es aproximada: Google solo indica «hace 6 meses» / «hace 4 meses» (consultado el 30/10/2026).
  "googleReviews": [
    { "author": "Patricia Calvo Pastrana", "rating": 5, "date": "2026-04-30", "comment": "Las pizzas son exquisitas. Gran variedad. Son completamente caseras. Los postres están deliciosos. Hechos por la dueña del local. No hay nada industrial y eso se nota. El precio ronda los 10€ por pizza que, para lo ricas que están, me parece barato. Repetiré seguro. Un éxito!" },
    { "author": "Joserra", "rating": 5, "date": "2026-06-30", "comment": "Muy buena opción en Aluche para comer pizza rica, rápida y a buen precio, como n masa sabrosa y buenos ingredientes. Además tienen algunas cervezas italianas que acompañan muy bien. Sitio sencillo, cómodo y con muy buena relación calidad-precio." }
  ]
};

  function loadData() {
    let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    if (typeof localStorage !== 'undefined') {
      try {
        const custom = localStorage.getItem('devcorp_data_estilo9');
        if (custom) {
          const parsed = JSON.parse(custom);
          if (parsed.dataVersion === DEFAULT_DATA.dataVersion) data = { ...data, ...parsed };
        }
      } catch (e) {
        console.warn('Error cargando datos personalizados de estilo9:', e);
      }
    }
    return data;
  }

  const loaded = loadData();
  window.CURRENT_PRESET = loaded;
  window.ESTILO9_DATA = loaded;
  window.DEV_CORP_STYLES = window.DEV_CORP_STYLES || {};
  window.DEV_CORP_STYLES['estilo9'] = loaded;
})();
