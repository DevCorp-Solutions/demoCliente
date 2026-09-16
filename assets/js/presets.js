/**
 * DevCorp Solutions - Ecosistema de Plantillas Web de Hostelería
 * Datos Oficiales de los Locales del Excel adaptados a 4 Estilos y Arquitecturas de Diseño:
 * 
 * Estilo 1: Restaurante Parrilla Vukata (Aluche) -> Editorial & Alta Cocina / Asador de Brasas
 * Estilo 2: Cervecería 27 & Bar Mala Pata (Lucero / Aluche) -> App Interactiva & Bento Grid
 * Estilo 3: Pizzería Carlos Carabanchel (Carabanchel) -> Carta Clásica Bistró & Horno de Leña
 * Estilo 4: Cafetería Campamento & Desayunos Yebes (Campamento) -> Showcase Visual & Minimalismo Nórdico
 */

export const RESTAURANT_PRESETS = {
  // =========================================================================
  // ESTILO 1: RESTAURANTE PARRILLA VUKATA (ALUCHE) - EDITORIAL & ALTA COCINA
  // =========================================================================
  estilo1: {
    id: "estilo1",
    styleName: "Estilo 1",
    styleSubtitle: "Editorial & Brasas Nobles",
    layoutType: "editorial",
    themeClass: "theme-estilo-1",
    name: "Restaurante Parrilla Vukata",
    chefName: "Goran Vukata",
    chefTitle: "Maestro Parrillero",
    tagline: "Maestros Asadores al Carbón de Encina & Carnes Maduradas en Aluche",
    neighborhood: "Aluche (Madrid)",
    address: "Calle de Maqueda, 138 · Aluche, 28024 Madrid",
    phone: "+34 915 09 85 76",
    whatsapp: "34695590754",
    email: "gerencia@parrillavukata.es",
    managerName: "Goran Vukata (Maestro Parrillero)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+Parrilla+Vukata,+Calle+de+Maqueda,+138,+28024+Madrid",
    type: "Asador Castellano & Carnicería Selecta",
    rating: 4.8,
    totalReviews: 348,
    serviceHours: "Comidas: 12:00 a 17:00 · Cenas: 19:30 a 00:00 (Martes cerrado)",
    bannerImg: "assets/images/vukata/carta-qr-restaurante-parrilla-vukata-aluche-1.jpg",
    
    aboutUs: {
      headline: "28 Años de Pasión por el Fuego Vivo, el Carbón de Encina y el Buen Comer en Aluche",
      story: "Fundado en la calle Maqueda, Parrilla Vukata nació con una premisa innegociable: respetar el producto al máximo. Lo que empezó como un querido asador de barrio se ha convertido en el templo de la carne de referencia en el suroeste de Madrid. Cada mañana seleccionamos personalmente los mejores lomos de vaca rubia gallega y ternera de la Sierra de Guadarrama en Mercamadrid, dejándolos reposar en nuestra cámara acristalada a la vista de los comensales antes de entrar al fuego vivo.",
      quote: "La brasa no perdona: o tienes la mejor carne de Madrid y el carbón de encina en su punto exacto, o no hay dónde esconderse.",
      quoteAuthor: "Goran Vukata, Maestro Parrillero",
      pillars: [
        {
          num: "01",
          title: "Cámara Dry-Aged Propia",
          desc: "Maduración en seco entre 45 y 60 días con control estricto de humedad para concentrar ternura, sabor y jugosidad extrema."
        },
        {
          num: "02",
          title: "Carbón de Encina Extremeño",
          desc: "Brasas a 350ºC constante que sellan la pieza por fuera caramelizando sus jugos y dejando el interior sedoso y caliente."
        },
        {
          num: "03",
          title: "Bodega Subterránea de Roble",
          desc: "Más de 40 referencias de D.O. Ribera del Duero, Rioja y Vinos de Madrid conservadas a 14ºC para un maridaje perfecto."
        }
      ],
      specialtyHighlight: {
        title: "Chuletón de Vaca Vieja Madurada Vukata",
        badge: "Corte de Autor",
        weight: "1.000 g aprox.",
        aging: "45 días de maduración en seco",
        pairing: "Maridaje sugerido: Tinto Ribera del Duero Crianza",
        text: "La carne se atempera durante 3 horas antes del servicio. Se marca sobre parrilla inclinada para drenar el exceso de grasa y se sirve sobre plato refractario caliente a 90ºC con sal marina de escamas de Añana."
      }
    },

    categories: ["Carnes a la Brasa", "Entrantes & Raciones", "Guisos & Cuchara", "Postres Caseros", "Bodega de Sala"],

    menu: [
      {
        id: "e1_1",
        name: "Chuletón de Vaca Vieja Madurada (1kg)",
        category: "Carnes a la Brasa",
        price: 38.50,
        badge: "Plato Estrella",
        description: "Corte madurado 45 días en nuestra cámara. Servido trinchado con patatas panaderas confitadas, pimientos de padrón y escamas de sal marina.",
        details: "Maduración: 45 días Dry-Aged · Origen: Vaca Rubia Seleccionada",
        ingredients: "Lomo alto de vaca madurada 45 días, sal en escamas de Añana, pimientos de padrón salteados, patatas agrias pochadas.",
        pairing: "Tinto Crianza D.O. Ribera del Duero",
        prepTime: "20 min",
        dietary: "Sin Gluten · 45 Días Dry-Aged",
        popular: true,
        image: "assets/images/vukata/a-la-brasa_11zon.webp",
        allergens: []
      },
      {
        id: "e1_2",
        name: "Torreznos Crujientes de Soria",
        category: "Entrantes & Raciones",
        price: 11.50,
        badge: "Crujiente 100%",
        description: "Panceta curada de Soria frita a fuego lento con souflado final crujiente, servida sobre cama de patatas revolconas al pimentón de La Vera.",
        details: "Elaboración artesana al momento · Corte grueso",
        ingredients: "Panceta curada de Soria, patatas de huerta, pimentón dulce ahumado de La Vera, aceite de oliva virgen extra y virutas de jamón.",
        pairing: "Caña helada de bodega o Tinto Roble de Madrid",
        prepTime: "10 min",
        dietary: "Sin Gluten · Receta Tradicional",
        popular: true,
        image: "assets/images/vukata/entrantes_11zon.webp",
        allergens: []
      },
      {
        id: "e1_3",
        name: "Entrecot de Ternera de Guadarrama (350g)",
        category: "Carnes a la Brasa",
        price: 21.00,
        badge: "Sierra de Madrid",
        description: "350g de carne tierna de pasto serrano marcada al carbón de encina con guarnición de pimientos verdes asados y sal gorda.",
        details: "D.O. Sierra de Guadarrama · 21 días maduración",
        ingredients: "Lomo de ternera con D.O. Guadarrama, sal gorda marina, pimientos verdes de huerta y romero silvestre.",
        pairing: "Garnacha de Madrid 2021",
        prepTime: "15 min",
        dietary: "Sin Gluten · Producto de Proximidad",
        popular: true,
        image: "assets/images/vukata/a-la-brasa_11zon.webp",
        allergens: []
      },
      {
        id: "e1_4",
        name: "Costillar de Cerdo a la Miel de Romero",
        category: "Carnes a la Brasa",
        price: 16.80,
        badge: "Más Solicitado",
        description: "Costillar cocinado 8 horas a fuego indirecto con toque de brasa y glaseado artesanal de miel de romero de la sierra y mostaza antigua.",
        details: "Cocción lenta 8 horas · Marinado 24h",
        ingredients: "Costillar de cerdo seleccionado, miel pura de romero, mostaza en grano antigua, ajo asado y especias de monte.",
        pairing: "Cerveza tostada o Tinto Crianza",
        prepTime: "12 min",
        dietary: "Sin Gluten · Marinado 24 Horas",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: ["mostaza"]
      },
      {
        id: "e1_5",
        name: "Croquetas Cremosas de Cecina y Boletus (6 uds)",
        category: "Entrantes & Raciones",
        price: 10.50,
        badge: "Elaboración Diaria",
        description: "Bechamel sedosa reposada 12 horas con leche fresca de granja, cecina curada de León picada fina y boletus edulis salteados con panko dorado.",
        details: "Hechas a mano cada mañana · Rebozado extra crujiente",
        ingredients: "Leche entera fresca de granja, cecina curada de León, boletus edulis de temporada, mantequilla y rebozado de panko japonés.",
        pairing: "Vino Blanco Verdejo D.O. Rueda",
        prepTime: "8 min",
        dietary: "Cremosas por dentro · Crujientes por fuera",
        popular: true,
        image: "assets/images/vukata/entrantes_11zon.webp",
        allergens: ["gluten", "lactosa", "huevo"]
      },
      {
        id: "e1_6",
        name: "Tarta de Queso Fluida al Horno",
        category: "Postres Caseros",
        price: 6.50,
        badge: "Top Dulce",
        description: "Horneada a diario con queso Idiazábal ahumado y queso crema suave, con centro fluido y base crocante de galleta artesana.",
        details: "Horneada cada mañana · Corazón cremoso",
        ingredients: "Queso Idiazábal D.O., queso crema suave, nata pura 35%, huevos camperos frescos y base de galleta de mantequilla.",
        pairing: "Vino dulce Pedro Ximénez",
        prepTime: "5 min",
        dietary: "Postre Casero de Autor",
        popular: true,
        image: "assets/images/vukata/postres_11zon.webp",
        allergens: ["gluten", "lactosa", "huevo"]
      }
    ],

    googleReviews: [
      {
        id: "rev-v1",
        author: "Manuel Gómez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 42 reseñas",
        rating: 5,
        timeAgo: "Hace 4 días",
        comment: "El mejor chuletón de todo Aluche sin ninguna duda. La carne en su punto exacto al carbón y el torrezno súper crujiente. Pedir en mesa con el QR de la carta web fue rapidísimo.",
        ownerResponse: "¡Muchísimas gracias Manuel! Seleccionamos cada lomo semanalmente en Mercamadrid. Te esperamos pronto en Maqueda."
      },
      {
        id: "rev-v2",
        author: "Beatriz S.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 18 reseñas",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "Fuimos a cenar en familia 6 personas en la terraza. Las croquetas de cecina y la tarta de queso al horno son obligatorias. Servicio impecable y trato cercano.",
        ownerResponse: null
      },
      {
        id: "rev-v3",
        author: "Javier M. del Pozo",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        badge: "Cliente verificado",
        rating: 5,
        timeAgo: "Hace 3 semanas",
        comment: "Trato de 10 por parte de los camareros. Pedimos para recoger porque vivimos cerca en Maqueda y estaba empaquetado perfecto, caliente y sin sobrecostes.",
        ownerResponse: "¡Gracias Javier! Nos alegra que el servicio para llevar funcione tan bien. Un fuerte abrazo del equipo de Parrilla Vukata."
      }
    ]
  },

  // =========================================================================
  // ESTILO 2: CERVECERÍA 27 & BAR MALA PATA (LUCERO) - APP & BENTO GRID
  // =========================================================================
  estilo2: {
    id: "estilo2",
    styleName: "Estilo 2",
    styleSubtitle: "App Interactiva & Bento Grid",
    layoutType: "bento-app",
    themeClass: "theme-estilo-2",
    name: "Cervecería 27 & Bar Mala Pata",
    chefName: "Paco 'El Chato'",
    chefTitle: "Jefe de Barra & Plancha",
    tagline: "El Auténtico Templo del Tapeo y la Cerveza Helada de Barrio",
    neighborhood: "Lucero / Aluche (Madrid)",
    address: "Calle de Quero, 61 · Aluche / Lucero, 28024 Madrid",
    phone: "+34 919 42 36 96",
    whatsapp: "34695590754",
    email: "contacto@barmalapata.es",
    managerName: "Paco 'El Chato' (Dirección de Barra)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Mala+Pata,+Calle+de+Quero,+61,+28024+Madrid",
    type: "Cervecería Urbana & Taberna Castiza",
    rating: 4.7,
    totalReviews: 482,
    serviceStatus: "Grifos a -2ºC & Plancha Activa",
    bannerImg: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
    
    aboutUs: {
      headline: "Más de 40 Años Tirando Cañas con Maestría y Sirviendo el Mejor Tapeo en Calle Quero",
      story: "En el Bar Mala Pata y Cervecería 27 no hay etiquetas ni florituras: hay cañas bien tiradas con dos dedos de crema y raciones abundantes que unen a vecinos, familias y grupos de amigos. Paco fundó la taberna con una plancha de cromo y la receta secreta de salsa brava casera de su madre. Hoy seguimos con la misma filosofía: producto fresco comprado en el mercado de Lucero, raciones hechas al momento y un ambiente castizo inigualable.",
      pillars: [
        {
          icon: "🍻",
          title: "Tanque de Bodega sin Pasteurizar",
          desc: "Cerveza directa de fábrica a -2ºC, servida con serpentín helado y golpe de grifo maestro con doble crema."
        },
        {
          icon: "🥘",
          title: "Plancha de Cromo al Momento",
          desc: "Ni microondas ni recalentados: oreja dorada, calamares y patatas salen volando de la plancha a tu mesa."
        },
        {
          icon: "☀️",
          title: "Terraza Viva 365 Días",
          desc: "El corazón social de la calle Quero con toldos frescos en verano y estufas calientes en invierno."
        }
      ],
      specialtyHighlight: {
        title: "Oreja Crujiente a la Plancha con Salsa Brava Casera",
        subtitle: "Crujiente por fuera, tierna por dentro",
        badge: "Nº 1 de la Barra",
        text: "Cocemos la oreja durante 3 horas con laurel, ajo morado y pimienta. Al entrar a la plancha a 280ºC con nuestro aliño de ajo-perejil y toque de limón, logra ese crujido legendario que enamora a todo Madrid."
      }
    },

    categories: ["Raciones Clásicas", "Tapas & Plancha", "Huevos Rotos", "Bocatas en Cristal", "Cervezas & Barra"],

    menu: [
      {
        id: "e2_1",
        name: "Oreja Crujiente a la Plancha con Brava Casera",
        category: "Raciones Clásicas",
        price: 9.80,
        badge: "Nº 1 de la Barra",
        description: "Dorada a fuego fuerte con ajo, perejil, chorrito de vino blanco y nuestra salsa brava picantona casera.",
        details: "Ración generosa · Plancha de cromo al momento",
        ingredients: "Oreja cocida 3h prensada, aliño de ajo morado y perejil fresco, limón y salsa brava tradicional de la casa.",
        pairing: "Doble de cerveza de bodega bien fría",
        prepTime: "8 min",
        dietary: "Sin Gluten · Receta Secreta 1984",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e2_2",
        name: "Patatas Bravas 'Mala Pata' con Doble Salsa",
        category: "Raciones Clásicas",
        price: 7.50,
        badge: "Fórmula de 1984",
        description: "Patatas agrias de Madrid pochadas y fritas a la orden con brava de pimentón de la Vera y alioli casero emulsionado.",
        details: "Doble fritura crujiente por fuera y tierna dentro",
        ingredients: "Patata agria seleccionada, salsa brava de pimentón de La Vera, caldo reducido y alioli casero de ajo suave.",
        pairing: "Caña helada de barril",
        prepTime: "6 min",
        dietary: "Sin Gluten · Caseras 100%",
        popular: true,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        allergens: ["huevo"]
      },
      {
        id: "e2_3",
        name: "Sartén de Huevos Camperos con Jamón Ibérico",
        category: "Huevos Rotos",
        price: 11.50,
        badge: "Puntilla Garantizada",
        description: "3 huevos de corral con puntilla fritos en aceite de oliva virgen extra sobre patatas panaderas y virutas de jamón ibérico.",
        details: "Huevos de granja camperos · Aceite virgen extra",
        ingredients: "3 huevos de gallinas camperas, patatas pochadas, jamón ibérico de bellota y sal en escamas.",
        pairing: "Vino Tinto de la Casa o Cerveza Tostada",
        prepTime: "7 min",
        dietary: "Sin Gluten · Huevos de Corral",
        popular: true,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        allergens: ["huevo"]
      },
      {
        id: "e2_4",
        name: "Calamares a la Andaluza con Limón Fresco",
        category: "Raciones Clásicas",
        price: 11.00,
        badge: "Rebozado Andaluz",
        description: "Rebozado ultra fino en harina de garbanzo sin exceso de aceite, frito a 190ºC. Tiernos como la mantequilla.",
        details: "Harina de garbanzo · Fritura limpia",
        ingredients: "Anillas de calamar fresco, harina de garbanzo andaluza, aceite de oliva virgen y gajos de limón fresco.",
        pairing: "Vermut de grifo de Madrid",
        prepTime: "6 min",
        dietary: "Fritura ligera y crujiente",
        popular: true,
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
        allergens: ["pescado", "gluten"]
      },
      {
        id: "e2_5",
        name: "Bocadillo de Calamares en Pan de Cristal Tostado",
        category: "Bocatas en Cristal",
        price: 6.50,
        badge: "Pan de Cristal",
        description: "El clásico madrileño elevado: pan de cristal aireado y crujiente, calamares recién fritos y suave mayonesa cítrica.",
        details: "Pan de cristal con triple fermentación",
        ingredients: "Pan de cristal tostado al momento, calamares rebozados a la andaluza, aceite de oliva y alioli suave opcional.",
        pairing: "Caña doble de cerveza de bodega",
        prepTime: "5 min",
        dietary: "Icono Gastronómico de Madrid",
        popular: true,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "pescado", "huevo"]
      },
      {
        id: "e2_6",
        name: "Doble de Cerveza de Bodega sin Pasteurizar",
        category: "Cervezas & Barra",
        price: 2.80,
        badge: "-2ºC en Copa",
        description: "Tirada en copa helada con dos dedos de crema densa. La cerveza más fresca y natural del distrito de Lucero.",
        details: "Tanque directo sin pasteurizar · Serpentín helado",
        ingredients: "Cerveza rubia de bodega sin pasteurizar directa de tanque refrigerado a -2ºC.",
        pairing: "Acompaña a cualquiera de nuestras raciones",
        prepTime: "1 min",
        dietary: "La caña mejor tirada de Madrid",
        popular: true,
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten"]
      }
    ],

    googleReviews: [
      {
        id: "rev-c1",
        author: "David Serrano",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 84 reseñas",
        rating: 5,
        timeAgo: "Hace 1 semana",
        comment: "El tapeo de toda la vida pero con una organización de 10. La oreja a la plancha está en su punto crujiente exacto y las patatas bravas pican lo justo. Las cañas salen con la crema perfecta.",
        ownerResponse: "¡Grande David! Esa oreja lleva el aliño de la casa desde hace 30 años en la calle Quero. ¡Salud!"
      },
      {
        id: "rev-c2",
        author: "Sara Martín",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        badge: "Vecina de Lucero",
        rating: 5,
        timeAgo: "Hace 3 semanas",
        comment: "La terraza en verano se llena, pero ahora pidiendo directamente desde el móvil te sirven en 5 minutos sin tener que esperar a llamar al camarero. ¡Un acierto total!",
        ownerResponse: null
      },
      {
        id: "rev-c3",
        author: "Antonio Ramos",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 29 reseñas",
        rating: 5,
        timeAgo: "Hace 1 mes",
        comment: "Muy buenos los huevos rotos y el bocadillo de calamares en pan crujiente. Calidad-precio inmejorable para el barrio de Lucero y Aluche.",
        ownerResponse: null
      }
    ]
  },

  // =========================================================================
  // ESTILO 3: PIZZERÍA CARLOS CARABANCHEL - TRATTORIA CLÁSICA & BISTRÓ
  // =========================================================================
  estilo3: {
    id: "estilo3",
    styleName: "Estilo 3",
    styleSubtitle: "Trattoria & Forno Napolitano",
    layoutType: "bistro",
    themeClass: "theme-estilo-3",
    name: "Pizzería Carlos Carabanchel",
    chefName: "Matteo Bellini",
    chefTitle: "Maestro Pizzaiolo",
    tagline: "L'Arte della Pizza Napoletana Contemporanea in Forno a Legna",
    neighborhood: "Carabanchel (Madrid)",
    address: "Calle del Toboso, 114 · Carabanchel, 28019 Madrid",
    phone: "+34 914 22 13 13",
    whatsapp: "34695590754",
    email: "gerencia@pizzeriacarlos.es",
    managerName: "Matteo Bellini (Maestro Pizzaiolo)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizzer%C3%ADa+Carlos,+Calle+del+Toboso,+114,+28019+Madrid",
    type: "Pizzería Artesanal & Trattoria Gourmet",
    rating: 4.9,
    totalReviews: 614,
    serviceNote: "Horno encendido: 13:00 a 16:30 y 20:00 a 00:00 (Reparto a domicilio propio sin comisiones)",
    bannerImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
    
    aboutUs: {
      headline: "De Nápoles a Carabanchel: La Verdadera Pizza Ligera que No Hincha",
      story: "Matteo Bellini creció entre los sacos de harina de Nápoles. Cuando llegó a Carabanchel, trajo consigo una cepa de masa madre viva heredada de su familia y una misión: demostrar que una pizza de verdad es ligera, digestiva y un homenaje al producto de origen. En nuestro obrador de la calle del Toboso no existen las prisas: la masa madura durante 48 a 72 horas en frío antes de entrar a nuestro horno de piedra volcánica a 480ºC.",
      quote: "La harina, el agua pura, la sal marina y la levadura solo necesitan una virtud que hoy pocos tienen: paciencia y 48 horas de fermentación natural.",
      quoteAuthor: "Matteo Bellini, Maestro Pizzaiolo",
      pillars: [
        {
          num: "01",
          title: "Fermentación Natural 48–72h",
          desc: "Masa altamente hidratada (75%) que madura lentamente en frío para una digestión ultraligera sin pesadez ni sed posterior."
        },
        {
          num: "02",
          title: "Horno de Piedra a 480ºC",
          desc: "Cocción relámpago en 70 segundos para inflar un 'cornicione' alveolado, ligero y crujiente con toque ahumado."
        },
        {
          num: "03",
          title: "100% Ingredientes DOP Campania",
          desc: "Tomates San Marzano del Vesubio, mozzarella fior di latte fresca de Agerola y albahaca genovesa recién cortada."
        }
      ],
      specialtyHighlight: {
        title: "Pizza Tartufo & Funghi Porcini Selvatici",
        badge: "Premiada 2024",
        doughHydration: "75% Hidratación · Masa Madre 48h",
        originTag: "Campania & Umbría",
        text: "Crema de trufa negra de Norcia, fior di latte fresco fundente, boletus edulis silvestres salteados y lascas de Parmigiano Reggiano DOP con 24 meses de curación."
      }
    },

    categories: ["Pizzas Gourmet", "Pizzas Clásicas DOP", "Pastas Frescas al Huevo", "Postres Italianos", "Vinos & Birra"],

    menu: [
      {
        id: "e3_1",
        name: "Pizza Tartufo & Funghi Porcini Selvatici",
        category: "Pizzas Gourmet",
        price: 15.50,
        badge: "Premiada 2024",
        description: "Crema de trufa negra de Norcia, fior di latte fresco, boletus edulis salteados al romero y lascas de Parmigiano Reggiano 24 meses.",
        details: "75% Hidratación · Harina molida a la piedra",
        ingredients: "Fior di latte de Agerola, crema de trufa negra de Umbría, boletus edulis, Parmigiano Reggiano DOP 24 meses y AOVE.",
        pairing: "Vino Tinto Chianti Classico DOCG",
        prepTime: "10 min",
        dietary: "Masa Madre 48h · Digestión Ligera",
        popular: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa"]
      },
      {
        id: "e3_2",
        name: "Pizza Burrata Pugliese & Prosciutto di Parma DOP",
        category: "Pizzas Gourmet",
        price: 16.00,
        badge: "Burrata Entera 125g",
        description: "Base crujiente de masa madre con tomate San Marzano, burrata cremosa fresca de Puglia colocada en frío al salir del horno, jamón de Parma y pesto.",
        details: "78% Hidratación · Burrata fresca en frío",
        ingredients: "Tomate San Marzano DOP, burrata fresca de Puglia 125g, Prosciutto di Parma curado 18 meses, pesto genovés y piñones tostados.",
        pairing: "Vino Blanco Pinot Grigio del Véneto",
        prepTime: "10 min",
        dietary: "Producto DOP Importado de Italia",
        popular: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa", "frutos_secos"]
      },
      {
        id: "e3_3",
        name: "Pizza Diavola Piccante Spianata Calabra",
        category: "Pizzas Clásicas DOP",
        price: 13.50,
        badge: "Picante Equilibrado",
        description: "Tomates San Marzano triturados a mano, mozzarella fundente, auténtica spianata picante de Calabria y aceite aromatizado con guindilla fresca.",
        details: "Calabria DOP · Toque ahumado en horno de piedra",
        ingredients: "Tomate San Marzano DOP, mozzarella fior di latte, salami spianata piccante calabra, albahaca fresca y aceite de guindilla.",
        pairing: "Birra Moretti helada",
        prepTime: "8 min",
        dietary: "Picante Tradicional Italiano",
        popular: true,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa"]
      },
      {
        id: "e3_4",
        name: "Ravioli de Calabaza Asada y Ricotta con Salvia",
        category: "Pastas Frescas al Huevo",
        price: 14.20,
        badge: "Pasta Fresca del Día",
        description: "Pasta fresca al huevo estirada a mano cada mañana, rellena de calabaza asada caramelizada, ricotta fresca de oveja, mantequilla dorada y avellanas.",
        details: "Elaborada artesanalmente cada mañana",
        ingredients: "Harina de sémola de trigo duro, huevo de corral, calabaza asada, ricotta fresca, mantequilla de pasto, hojas de salvia y avellanas.",
        pairing: "Vino Blanco Vermentino di Sardegna",
        prepTime: "12 min",
        dietary: "Vegetariano · Pasta Hecha a Mano",
        popular: false,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa", "huevo", "frutos_secos"]
      },
      {
        id: "e3_5",
        name: "Lasagna Tradizionale Bolognese al Forno",
        category: "Pastas Frescas al Huevo",
        price: 13.00,
        badge: "Receta de la Nonna",
        description: "Capas de pasta al huevo fina con ragú boloñés cocinado a fuego lento durante 4 horas, bechamel suave y gratén de Parmigiano Reggiano.",
        details: "Cocción lenta de 4 horas · Gratinado al horno",
        ingredients: "Láminas de pasta al huevo, carne de ternera y cerdo picada a cuchillo, sofrito de verduras, tomate San Marzano, bechamel y parmesano.",
        pairing: "Vino Tinto Barbera d'Asti",
        prepTime: "14 min",
        dietary: "Receta Familiar Tradicional",
        popular: true,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa", "huevo"]
      },
      {
        id: "e3_6",
        name: "Auténtico Tiramisú Tradizionale di Treviso",
        category: "Postres Italianos",
        price: 6.00,
        badge: "Cremoso & Casero",
        description: "Bizcochos savoiardi empapados en café espresso Illy recién extraído, crema densa de mascarpone italiano y lluvia de cacao puro amargo.",
        details: "Receta Original de Treviso 1970",
        ingredients: "Queso mascarpone italiano, café espresso Illy 100% arábica, bizcochos savoiardi de huevo, azúcar de caña y cacao amargo en polvo.",
        pairing: "Licor Amaretto o Café Espresso",
        prepTime: "3 min",
        dietary: "Sin Conservantes · Clásico Napolitano",
        popular: true,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa", "huevo"]
      }
    ],

    googleReviews: [
      {
        id: "rev-p1",
        author: "Claudia Rossi",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 110 reseñas",
        rating: 5,
        timeAgo: "Hace 5 días",
        comment: "Soy italiana y vivo en Carabanchel: esta pizza en la calle del Toboso es lo más cercano a Nápoles que he probado en Madrid. La masa es ligera como una nube y la burrata fresquísima.",
        ownerResponse: "Grazie mille Claudia! Usiamo solo farina di tipo 00 e lievitazione di 48 ore. A presto a Carabanchel!"
      },
      {
        id: "rev-p2",
        author: "Sergio Navarro",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        badge: "Cliente habitual",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "Hicimos el pedido a domicilio desde su propia web y nos llegó en 25 minutos perfecto. Mucho mejor que pedir por intermediarios porque la pizza llega en su caja térmica crujiente y caliente.",
        ownerResponse: null
      },
      {
        id: "rev-p3",
        author: "Elena Vidal",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 36 reseñas",
        rating: 5,
        timeAgo: "Hace 1 mes",
        comment: "El tiramisú es espectacular y la pizza Tartufo un pecado. Muy buena atención tanto en el local como por teléfono. Ya somos clientes fijos de los domingos.",
        ownerResponse: null
      }
    ]
  },

  // =========================================================================
  // ESTILO 4: CAFETERÍA CAMPAMENTO & DESAYUNOS YEBES - SHOWCASE NÓRDICO
  // =========================================================================
  estilo4: {
    id: "estilo4",
    styleName: "Estilo 4",
    styleSubtitle: "Showcase Visual & Specialty Coffee",
    layoutType: "minimal",
    themeClass: "theme-estilo-4",
    name: "Cafetería Campamento & Desayunos Yebes",
    chefName: "Clara Yebes",
    chefTitle: "Head Barista & Obrador",
    tagline: "Specialty Coffee Roasters, Organic Brunch & Obrador Artesano",
    neighborhood: "Campamento / Aluche (Madrid)",
    address: "Avenida del Padre Piquer, 1 · Campamento, 28024 Madrid",
    phone: "+34 646 62 17 93",
    whatsapp: "34695590754",
    email: "hola@cafeteriacampamento.es",
    managerName: "Clara Yebes (Coordinación de Obrador)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafeteria+Campamento,+Avenida+del+Padre+Piquer,+1,+28024+Madrid",
    type: "Café de Especialidad & Obrador Brunch",
    rating: 4.8,
    totalReviews: 395,
    openingHours: "Lunes a Domingo: 07:30 a 19:30 (Desayunos y brunch ininterrumpidos)",
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
    
    aboutUs: {
      headline: "Café de Especialidad con Alma, Masas Madres Vivas y Desayunos Conscientes en Campamento",
      story: "Cafetería Campamento nació con el propósito de acercar la cultura del café de especialidad y la comida saludable de obrador al corazón de Campamento y Aluche. Desterramos el torrefacto comercial y nos asociamos con micro-tostadores locales que compran directamente a pequeños productores de Colombia, Etiopía y Guatemala a precios justos. En nuestro obrador horneamos bollería con mantequilla pura francesa y preparamos tostas con hogazas de masa madre fermentadas durante 24 horas.",
      pillars: [
        {
          icon: "☕",
          title: "Puntuación SCA >86 Puntos",
          desc: "100% café de especialidad arábica trazable por finca, proceso de lavado y fecha semanal de tueste local."
        },
        {
          icon: "🥖",
          title: "Masa Madre Viva 24 Horas",
          desc: "Hogazas fermentadas en frío durante 24 horas con harinas ecológicas sin aditivos ni mejorantes químicos."
        },
        {
          icon: "🥑",
          title: "Cocina Consciente & Fresca",
          desc: "Aguacates Hass en su punto óptimo, salmón ahumado salvaje y fruta fresca de temporada cortada al momento."
        }
      ],
      specialtyHighlight: {
        title: "Flat White Doble con Leche de Avena Barista",
        badge: "Barista Signature",
        roastType: "Tueste Medio · Origen Colombia Huila SCA 87.5",
        dietInfo: "Sin Azúcares Añadidos",
        text: "Extraemos nuestro espresso a 93ºC exactos con doble cestillo de 18 gramos durante 27 segundos. La leche de avena barista se microemulsiona a 62ºC para crear una textura de terciopelo que resalta la dulzura natural del grano."
      }
    },

    categories: ["Tostas Artesanas", "Cafés & Especialidad", "Bowls & Saludable", "Bollería de Obrador", "Zumos Naturales"],

    menu: [
      {
        id: "e4_1",
        name: "Tosta de Aguacate Hass, Salmón Ahumado y Semillas",
        category: "Tostas Artesanas",
        price: 7.20,
        badge: "Favorito Brunch",
        description: "Hogaza crujiente de masa madre viva, aguacate Hass laminado con limón, salmón ahumado salvaje, gomasio y brotes frescos.",
        details: "Pan de masa madre 24h · Aguacate fresco",
        ingredients: "Hogaza de trigo ecológico de masa madre, aguacate Hass, salmón noruego salvaje, gomasio de sésamo tostado y brotes verdes.",
        pairing: "Cold Brew o Zumo de naranja recién exprimido",
        prepTime: "5 min",
        dietary: "Rico en Omega-3 · Alto en Proteína",
        popular: true,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "pescado", "sesamo"]
      },
      {
        id: "e4_2",
        name: "Flat White Doble con Leche de Avena Barista",
        category: "Cafés & Especialidad",
        price: 2.60,
        badge: "Grano Selección",
        description: "Doble espresso de origen Colombia Huila con microespuma sedosa de avena barista y diseño de latte art en taza cerámica artesanal.",
        details: "Puntuación SCA 87.5 · Tueste fresco",
        ingredients: "Café de especialidad 100% arábica Colombia Huila, agua filtrada y leche de avena barista ecológica sin azúcares.",
        pairing: "Croissant de mantequilla francesa recién horneado",
        prepTime: "3 min",
        dietary: "Sin Gluten · Vegano · Café de Especialidad",
        popular: true,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e4_3",
        name: "Açaí Bowl Orgánico con Granola Casera y Fruta Fresca",
        category: "Bowls & Saludable",
        price: 7.90,
        badge: "Energía 100% Vital",
        description: "Açaí puro del Amazonas batido espeso con plátano de Canarias, fresas frescas de temporada, granola casera horneada y coco tostado.",
        details: "Açaí silvestre orgánico · Granola casera",
        ingredients: "Pulpa pura de açaí orgánico, plátano de Canarias, fresas de temporada, arándanos silvestres, granola de avena con miel y semillas de cáñamo.",
        pairing: "Té Matcha Ceremonial o Kombucha de jengibre",
        prepTime: "6 min",
        dietary: "Sin Azúcar Añadido · Alto en Antioxidantes",
        popular: true,
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80",
        allergens: ["frutos_secos"]
      },
      {
        id: "e4_4",
        name: "Croissant Francés de Mantequilla de Normandía",
        category: "Bollería de Obrador",
        price: 2.20,
        badge: "Hojaldre Perfecto",
        description: "Hojaldrado a mano con 27 capas crujientes y aroma intenso a mantequilla fresca de Normandía. Horneado cada 2 horas en nuestro obrador.",
        details: "Mantequilla AOC Normandía · Horneado diario",
        ingredients: "Harina de trigo de fuerza, mantequilla pura de Normandía 84% M.G., masa madre viva, leche entera, sal marina y huevo para dorar.",
        pairing: "Cappuccino o Café Filtrado V60",
        prepTime: "2 min",
        dietary: "Horneado Cada 2 Horas",
        popular: true,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa", "huevo"]
      },
      {
        id: "e4_5",
        name: "Tosta Ibérica con Tomate Rallado y Aceite Picual",
        category: "Tostas Artesanas",
        price: 4.80,
        badge: "Desayuno Estrella",
        description: "Hogaza tostada crujiente, tomate de rama recién rallado a mano con AOVE picual de Jaén y virutas de jamón de bodega.",
        details: "Pan de pueblo tostado al momento",
        ingredients: "Pan de pueblo de masa madre, tomate pera maduro rallado, aceite de oliva virgen extra de cosecha temprana y jamón curado de bodega.",
        pairing: "Café con leche o Zumo de naranja natural",
        prepTime: "4 min",
        dietary: "100% Ingredientes Naturales",
        popular: true,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten"]
      },
      {
        id: "e4_6",
        name: "Matcha Latte Ceremonial con Leche de Almendras",
        category: "Cafés & Especialidad",
        price: 3.40,
        badge: "Grado Ceremonial Uji",
        description: "Té verde matcha japonés de grado ceremonial de Uji (Kioto), batido con chasen de bambú y combinado con leche de almendras emulsionada.",
        details: "Matcha 100% puro de Kioto · Sin aditivos",
        ingredients: "Polvo de té verde matcha ceremonial de Uji, agua a 80ºC y bebida de almendras tostadas sin azúcar.",
        pairing: "Cookie artesana de chocolate negro o Croissant",
        prepTime: "4 min",
        dietary: "Sin Lactosa · Vegano · Calma y Enfoque",
        popular: true,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
        allergens: ["frutos_secos"]
      }
    ],

    googleReviews: [
      {
        id: "rev-cf1",
        author: "Lucía Fernández",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 52 reseñas",
        rating: 5,
        timeAgo: "Hace 3 días",
        comment: "Hacía falta una cafetería con este nivel en Campamento. El Flat White con leche de avena es pura seda y la tosta de salmón y aguacate en Padre Piquer está riquísima. Sitio precioso con wifi rápido.",
        ownerResponse: "¡Gracias Lucía! Tostamos el café semanalmente con tostadores de Madrid. ¡Un placer tenerte en Campamento!"
      },
      {
        id: "rev-cf2",
        author: "Pablo Ortega",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        badge: "Cliente habitual",
        rating: 5,
        timeAgo: "Hace 1 semana",
        comment: "Pido el desayuno para llevar casi todas las mañanas antes de coger el metro en Campamento. Con la carta web lo pido desde casa y cuando llego ya está en la barra listo. Impecable.",
        ownerResponse: null
      },
      {
        id: "rev-cf3",
        author: "Marta Carrasco",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 19 reseñas",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "El açaí bowl y los croissants recién horneados son adictivos. Buen ambiente, música tranquila y trato súper cercano.",
        ownerResponse: null
      }
    ]
  }
};
