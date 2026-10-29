// estilo9/data.js - Datos de La Pecora Nera · Pizzería La Oveja Negra (Aluche, Madrid)
// Fuentes: ficha de Google del local (dirección, teléfono, valoración, servicios y hora de apertura)
// y la carta impresa del local (pizzas y antipasti con sus ingredientes).
// REGLA: no añadir productos, precios, horarios ni opiniones que no existan en la carta o en la ficha.
//   - La carta no publica precios: se muestra «Precios en el local» (salvo el ingrediente adicional, 1,50 €).
//   - PENDIENTE DE CONFIRMAR con el local: horario completo (solo se conoce la apertura, 19:30),
//     días de cierre, que el WhatsApp sea el mismo número que el teléfono, y los alérgenos.
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
  // Horario: la ficha de Google solo indica la apertura (19:30). Completar cuando el local lo confirme.
  "hours": [
    { "days": "Apertura", "time": "Desde las 19:30" }
  ],
  // Horas del formulario de reserva (Paquete Premium). Cierre ORIENTATIVO hasta confirmar el horario.
  "bookingHours": { "open": "19:30", "close": "23:30" },
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
  // Agrupación de la carta. "group" = pestaña, "category" = filtro (Profesional y Premium).
  "menuGroups": [
    {
      "id": "pizzas",
      "label": "Pizzas",
      "unit": "Pizza",
      "title": "Le pizze nostre",
      "text": "Todas con salsa de tomate natural y mozzarella 100 %.",
      "image": "img/pizza-4-formaggi.jpg",
      "note": "*Ingrediente adicional: 1,50 €",
      "categories": ["Clásicas", "De la huerta", "Especiales de la casa"]
    },
    {
      "id": "antipasti",
      "label": "Antipasti",
      "unit": "Antipasto",
      "title": "Antipasti",
      "text": "Para abrir boca mientras sale tu pizza.",
      "image": "img/antipasti-frutti-mare.jpg",
      "categories": ["Antipasti"]
    }
  ],
  // Alérgenos ORIENTATIVOS deducidos de los ingredientes de la carta (claves UE del panel /admin):
  //   gluten, crustaceos, huevos, pescado, cacahuete, soja, lacteos, frutos_cascara, apio, mostaza,
  //   sesamo, sulfitos, altramuces, moluscos. Confirmar con el local.
  // "image": foto orientativa (Wikimedia Commons, con "imageCredit" obligatorio por licencia CC).
  "menu": [
    { "id": "p1", "group": "pizzas", "category": "Clásicas", "name": "Margherita", "description": "Salsa de tomate natural y mozzarella 100 %.", "price": 0, "tags": [], "image": "img/pizza-margherita.jpg", "imageCredit": { "author": "Shisma", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Margherita_pizza_on_plate.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p2", "group": "pizzas", "category": "Clásicas", "name": "Margherita affumicata", "description": "Salsa de tomate natural, mozzarella 100 % y queso scamorza ahumado.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p3", "group": "pizzas", "category": "Clásicas", "name": "Romana", "description": "Salsa de tomate natural, mozzarella 100 %, anchoas, aceitunas negras y queso pecorino.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos", "pescado"] },
    { "id": "p4", "group": "pizzas", "category": "Clásicas", "name": "Pepperoni", "description": "Salsa de tomate natural, mozzarella 100 % y pepperoni.", "price": 0, "tags": [], "image": "img/pizza-pepperoni.jpg", "imageCredit": { "author": "BullDawg2021", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pepperoni_Pizza_from_Fellini%E2%80%99s_Pizza.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p5", "group": "pizzas", "category": "Clásicas", "name": "Prosciutto", "description": "Salsa de tomate natural, mozzarella 100 % y jamón york.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p6", "group": "pizzas", "category": "De la huerta", "name": "Berenjena y calabacín", "description": "Salsa de tomate natural, mozzarella 100 %, berenjenas y calabacines grillados, aceitunas negras y pimientos.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p7", "group": "pizzas", "category": "De la huerta", "name": "Parmigiana", "description": "Salsa de tomate natural, mozzarella 100 %, berenjenas y queso parmesano.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p8", "group": "pizzas", "category": "Clásicas", "name": "4 formaggi", "description": "Salsa de tomate natural, mozzarella 100 % y queso scamorza ahumado, queso gorgonzola y queso de cabra.", "price": 0, "tags": [], "image": "img/pizza-4-formaggi.jpg", "imageCredit": { "author": "Andy Li", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Four_Cheese_-_Pizza_500_2023-11-10.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p9", "group": "pizzas", "category": "Clásicas", "name": "4 estaciones", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york, champiñones, aceitunas y alcachofas.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p10", "group": "pizzas", "category": "Clásicas", "name": "Prosciutto e funghi", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york y champiñones.", "price": 0, "tags": [], "image": "img/pizza-prosciutto-funghi.jpg", "imageCredit": { "author": "Gerda Arendt", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_prosciutto_e_funghi,_Edingen.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p11", "group": "pizzas", "category": "De la huerta", "name": "Carcioffi", "description": "Salsa de tomate natural, mozzarella 100 %, alcachofas y pimientos ahumados.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p12", "group": "pizzas", "category": "Especiales de la casa", "name": "Contadina", "description": "Salsa de tomate natural, mozzarella 100 %, salchicha italiana, huevo y queso taleggio.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos", "huevos"] },
    { "id": "p13", "group": "pizzas", "category": "Especiales de la casa", "name": "Maiale", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york y bacon.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p14", "group": "pizzas", "category": "Especiales de la casa", "name": "Barbacoa", "description": "Salsa de tomate natural, mozzarella 100 %, lonchas de carne de cerdo ahumado al horno, bacon y salsa BBQ.", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos", "mostaza"] },
    { "id": "p15", "group": "pizzas", "category": "Especiales de la casa", "name": "Serranini", "description": "Salsa de tomate natural, mozzarella 100 % y jamón serrano reserva (24 meses de maduración).", "price": 0, "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p16", "group": "pizzas", "category": "Especiales de la casa", "name": "Milanese", "description": "Salsa de tomate natural, mozzarella 100 %, pancetta, queso gorgonzola picante y cebolla.", "price": 0, "tags": ["Picante"], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p17", "group": "pizzas", "category": "Especiales de la casa", "name": "Esplosivo", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york, chorizo picante ibérico y pimiento cayena.", "price": 0, "tags": ["Picante"], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "p18", "group": "pizzas", "category": "Clásicas", "name": "Diavola", "description": "Salsa de tomate natural, mozzarella 100 %, chorizo picante ibérico y aceitunas negras.", "price": 0, "tags": ["Picante"], "image": "img/pizza-diavola.jpg", "imageCredit": { "author": "OpenHousePraha", "license": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_diavola_20250518_125351.jpg" }, "allergens": ["gluten", "lacteos"] },
    { "id": "p19", "group": "pizzas", "category": "Especiales de la casa", "name": "Pecora nera", "description": "Salsa de tomate natural, mozzarella 100 %, jamón york, salchicha italiana, queso taleggio, queso de cabra y queso pecorino.", "price": 0, "badge": "La de la casa", "tags": [], "image": "", "allergens": ["gluten", "lacteos"] },
    { "id": "a1", "group": "antipasti", "category": "Antipasti", "name": "Olive all'ascolana", "description": "Aceitunas rellenas de carne.", "price": 0, "tags": [], "image": "img/antipasti-olive-ascolana.jpg", "imageCredit": { "author": "Wine Dharma", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Olive_all%27ascolana_2.jpg" }, "allergens": ["gluten", "huevos", "lacteos"] },
    { "id": "a2", "group": "antipasti", "category": "Antipasti", "name": "Strisce di pollo", "description": "Tiras de pollo de la casa.", "price": 0, "tags": [], "image": "img/antipasti-strisce-pollo.jpg", "imageCredit": { "author": "jeffreyw", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Chicken_tenders_(8884884960).jpg" }, "allergens": ["gluten", "huevos"] },
    { "id": "a3", "group": "antipasti", "category": "Antipasti", "name": "Frutti di mare", "description": "Mix de fritos de pescado y mariscos.", "price": 0, "tags": [], "image": "img/antipasti-frutti-mare.jpg", "imageCredit": { "author": "Juan Emilio Prades Bel", "license": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Pescadito_frito.jpg" }, "allergens": ["gluten", "pescado", "crustaceos", "moluscos"] },
    { "id": "a4", "group": "antipasti", "category": "Antipasti", "name": "Perle di mozzarella", "description": "Perlas de mozzarella.", "price": 0, "tags": [], "image": "", "allergens": ["lacteos"] },
    { "id": "a5", "group": "antipasti", "category": "Antipasti", "name": "Patatine fritte", "description": "Patatas fritas.", "price": 0, "tags": [], "image": "", "allergens": [] }
  ],
  // Créditos de las fotos de ambiente (Wikimedia Commons)
  "photoCredits": [
    { "file": "img/hero-horno.jpg", "author": "Jared Tarbell", "license": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Pizza_baking_in_Wood-fired_oven.jpg" },
    { "file": "img/horno-lena.jpg", "author": "oakwoodfirepizza.com", "license": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Wood_Fired_Oven.jpg" }
  ],
  // Sin reseñas copiadas: solo la valoración pública de Google (googleRating).
  "googleReviews": []
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
