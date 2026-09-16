/**
 * DevCorp Solutions - Ecosistema de Plantillas Web de Hostelería
 * 4 Estilos y Arquitecturas de Diseño 100% Diferenciados
 * Estilo 1: Editorial & Alta Cocina (Fine Dining)
 * Estilo 2: App Interactiva & Bento Grid (Gastrobar Contemporáneo)
 * Estilo 3: Carta Clásica Bistró con Líderes Punteados (Tradicional / Asador)
 * Estilo 4: Showcase Visual & Minimalismo Nórdico (Brunch & Obrador)
 */

export const RESTAURANT_PRESETS = {
  // =========================================================================
  // ESTILO 1: EDITORIAL & ALTA COCINA (FINE DINING / REVISTA GASTRONÓMICA)
  // =========================================================================
  estilo1: {
    id: "estilo1",
    styleName: "Estilo 1",
    styleSubtitle: "Editorial & Alta Cocina",
    layoutType: "editorial",
    themeClass: "theme-estilo-1",
    name: "Restaurante Raíces & Brasas",
    chefName: "Javier Montero",
    chefTitle: "Jefe de Cocina",
    tagline: "Cocina de producto, memoria castellana y brasa noble de encina",
    address: "Calle de Maqueda, 138 · Aluche, Madrid",
    phone: "917 19 82 45",
    whatsapp: "34695590754",
    email: "gerencia@raicesybrasas.es",
    managerName: "Javier Montero (Jefe de Cocina)",
    googleMapsUrl: "https://maps.google.com/?q=Restaurante+Madrid",
    type: "Restaurante Gastronómico & Brasa",
    rating: 4.9,
    totalReviews: 412,
    serviceHours: "Comidas: 13:30 a 16:00 · Cenas: 20:30 a 23:30 (Cerrado lunes)",
    bannerImg: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
    
    aboutUs: {
      headline: "Respeto por el origen, paciencia en el fuego y devoción por la materia prima",
      story: "En Raíces entendemos la cocina como un ejercicio de honestidad. Cada mañana seleccionamos cortes de vaca vieja en Mercamadrid con maduraciones superiores a 45 días, verduras de temporada recolectadas en huertas de Aranjuez y panes de masa madre horneados al alba. No disfrazamos el producto; dejamos que el carbón de encina y el tiempo hagan su trabajo.",
      quote: "La alta cocina de barrio no necesita artificios: solo el mejor producto del mercado y el punto exacto de calor.",
      quoteAuthor: "Javier Montero, Jefe de Cocina",
      pillars: [
        {
          num: "01",
          title: "Maduración Dry-Aged",
          desc: "Cámara propia a la vista del comensal con control estricto de humedad y temperatura constante durante 45 a 60 días."
        },
        {
          num: "02",
          title: "Fuego de Encina",
          desc: "Parrilla vasca con sistema de poleas y carbón vegetal de dehesa extremeña, aportando un aroma limpio sin enmascarar sabores."
        },
        {
          num: "03",
          title: "Bodega Seleccionada",
          desc: "Más de 50 referencias de pequeños viticultores de la D.O. Vinos de Madrid, Ribera del Duero y Ribeira Sacra."
        }
      ],
      specialtyHighlight: {
        title: "Chuletón de Vaca Vieja Madurada",
        badge: "Pieza de Autor",
        weight: "1.000 g aprox.",
        aging: "48 días maduración en seco",
        pairing: "Maridaje sugerido: Tinto Fino D.O. Ribera del Duero Crianza",
        text: "Lomo alto seleccionado con infiltración grasa equilibrada. Se atempera antes del servicio y se asa a la brasa directa, sirviéndose trinchado con sal de escamas de Añana."
      }
    },

    categories: ["Entrantes & Huerta", "Carnes & Brasa de Encina", "Guisos Tradicionales", "Postres de Obrador", "Bodega de Sala"],

    menu: [
      {
        id: "e1_1",
        name: "Chuletón de Vaca Vieja (1.000g)",
        category: "Carnes & Brasa de Encina",
        price: 39.50,
        badge: "Especialidad de la Casa",
        description: "Pieza noble de lomo alto madurada 48 días en cámara propia. Asada al carbón de encina, servida trinchada con patatas panaderas confitadas y pimientos de Guernica.",
        details: "Maduración: 48 días Dry-Aged · Origen: Sierra de Guadarrama",
        ingredients: "Lomo alto de vaca rubia seleccionada, sal en escamas de Añana, pimientos de Guernica confitados, patatas agrias pochadas a fuego lento.",
        pairing: "Tinto Crianza 2021 D.O. Ribera del Duero",
        prepTime: "25 min",
        dietary: "Sin Gluten · 48 Días Dry-Aged",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_2",
        name: "Torreznos Crujientes con Patata Revolcona",
        category: "Entrantes & Huerta",
        price: 11.50,
        badge: "Tradición Renovada",
        description: "Panceta curada de Soria frita a fuego lento con souflado final crujiente, sobre cama de patata machacada con pimentón de La Vera y virutas de jamón.",
        details: "Elaboración artesanal al momento",
        ingredients: "Panceta curada de Soria con corteza crujiente, patatas de huerta, pimentón dulce ahumado de La Vera, aceite de oliva virgen extra y jamón ibérico.",
        pairing: "Vino Blanco Malvar de Madrid D.O.",
        prepTime: "10 min",
        dietary: "Sin Gluten · Tradicional",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_3",
        name: "Entrecot de Ternera de Guadarrama (400g)",
        category: "Carnes & Brasa de Encina",
        price: 22.00,
        badge: "Corte Noble",
        description: "Corte limpio de lomo bajo con grasa infiltrada natural. Marcado a fuego vivo de encina y acompañado de salteado de setas de cardo silvestres.",
        details: "D.O. Sierra de Guadarrama",
        ingredients: "Lomo bajo de ternera con D.O. Guadarrama, sal marina de manantial, setas de cardo silvestres, ajo confitado y tomillo silvestre.",
        pairing: "Garnacha de Gredos 2020",
        prepTime: "15 min",
        dietary: "Sin Gluten · Producto Local",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_4",
        name: "Croquetas Cremosas de Cecina y Vaca (6 uds)",
        category: "Entrantes & Huerta",
        price: 10.50,
        badge: "Recomendación",
        description: "Bechamel reposada 24 horas con leche fresca entera de granja, cecina de vaca curada al humo de roble y rebozado panko ultrafino.",
        details: "Textura fluida elaborada a diario",
        ingredients: "Leche entera fresca de Madrid, cecina de buey ahumada, mantequilla artesanal, harina de trigo tradicional, rebozado crujiente de panko.",
        pairing: "Cava Brut Nature Reserva",
        prepTime: "8 min",
        dietary: "Textura Fluida · Hechas al Día",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lactosa"]
      },
      {
        id: "e1_5",
        name: "Rabo de Toro Estofado al Vino Tinto",
        category: "Guisos Tradicionales",
        price: 19.00,
        badge: "Cocina de Memoria",
        description: "Cocción lenta a fuego mínimo durante 7 horas hasta deshacerse con cuchara, con reducción melosa de sus propios jugos y puré fino de boniato.",
        details: "Cocción tradicional 7 horas",
        ingredients: "Rabo de toro nacional, vino tinto crianza D.O. Madrid, puerro pochado, zanahoria morada, fondo oscuro natural y puré de boniato asado.",
        pairing: "Tinto Roble Madrid D.O.",
        prepTime: "Cocción lenta 7h",
        dietary: "Sin Gluten · Meloso",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_6",
        name: "Tarta Fluida de Queso Azul y Oveja",
        category: "Postres de Obrador",
        price: 6.50,
        badge: "Artesanal",
        description: "Receta de la casa horneada a alta temperatura con corazón templado y cremoso, acompañada de reducción de frutos del bosque silvestres.",
        details: "Quesos artesanos locales",
        ingredients: "Queso azul de la Sierra de Guadarrama, queso curado de oveja de Campo Real, nata pura fresca, huevos de corral y coulis de moras silvestres.",
        pairing: "Moscatel de Alejandría",
        prepTime: "5 min",
        dietary: "Quesos Artesanos de Madrid",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
        allergens: ["lactosa", "huevo"]
      }
    ],

    googleReviews: [
      {
        id: "r1_1",
        author: "Carlos Méndez de Vigo",
        badge: "Comensal verificado · Visita en pareja",
        rating: 5,
        timeAgo: "Hace 1 semana",
        comment: "Impecable. El punto del chuletón es sencillamente perfecto, con ese sabor a brasa noble y la carne atemperada en su justa medida. Hacía tiempo que no comía un producto tan cuidado en Madrid sin necesidad de pagar precios desorbitados.",
        highlight: "Punto de brasa inmejorable"
      },
      {
        id: "r1_2",
        author: "Marta Sotomayor",
        badge: "Local Guide · Nivel 6",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "El trato en sala es atento y profesional. Probamos las croquetas de cecina y el rabo de toro meloso; pura cocina de fondo. La carta digital funciona de maravilla y las recomendaciones de maridaje fueron muy acertadas.",
        highlight: "Servicio atento y cocina con fundamento"
      },
      {
        id: "r1_3",
        author: "Ignacio Ruiz",
        badge: "Comensal habitual",
        rating: 5,
        timeAgo: "Hace 1 mes",
        comment: "Ya es la tercera vez que venimos en familia. Las mesas tienen espacio de verdad y no te sientes apretado. La tarta de queso al horno es obligatoria de pedir.",
        highlight: "Excelente relación producto-precio"
      }
    ]
  },

  // =========================================================================
  // ESTILO 2: APP INTERACTIVA & BENTO GRID (GASTROBAR & CASUAL MODERNO)
  // =========================================================================
  estilo2: {
    id: "estilo2",
    styleName: "Estilo 2",
    styleSubtitle: "App Interactiva & Bento Grid",
    layoutType: "bento",
    themeClass: "theme-estilo-2",
    name: "La Central · Craft & Kitchen",
    tagline: "Gastrobar contemporáneo · Platillos para compartir y cerveza artesana de grifo",
    address: "Calle de Camarena, 82 · Lucero, Madrid",
    phone: "915 26 40 18",
    whatsapp: "34695590754",
    email: "contacto@lacentralcraft.es",
    managerName: "David (Responsable de Barra)",
    googleMapsUrl: "https://maps.google.com/?q=Gastrobar+Madrid",
    type: "Gastrobar & Cervecería Urbana",
    rating: 4.8,
    totalReviews: 526,
    serviceStatus: "Cocina abierta en directo · Servicio continuo",
    bannerImg: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",

    aboutUs: {
      headline: "Cocina honesta de barra, producto de barrio y 8 grifos de cerveza viva",
      story: "La Central nació con una misión sencilla: devolver al barrio un espacio donde comer muy bien sin formalismos. Hacemos comida reconfortante reinterpretada con técnicas actuales: baos al vapor caseros, smash burgers de vaca rubia picada por nosotros a diario y raciones pensadas para poner al centro de la mesa.",
      bentoCards: [
        {
          tag: "Tiradores Artesanos",
          metric: "8 Grifos",
          label: "Rotación semanal de IPA, Lager y Stout sin pasteurizar directamente de barril frío a 2ºC."
        },
        {
          tag: "Carne Picada al Día",
          metric: "100% Vaca",
          label: "Sin aditivos ni conservantes. Dos cortes nobles de lomo y aguja picados cada mañana."
        },
        {
          tag: "Pan Brioche Casero",
          metric: "48 Horas",
          label: "Masa madre de fermentación prolongada elaborada por obrador local con mantequilla fresca."
        }
      ],
      specialtyHighlight: {
        title: "Smash Burger Dry-Aged 'La Central'",
        badge: "Bestseller de la Barra",
        price: "13,90 €",
        tags: ["Doble Carne 180g", "Queso Cheddar Vintage", "Brioche de Mantequilla", "Bacon Ahumado"],
        text: "Doble disco de vaca madurada aplastada sobre plancha de cromo a 280ºC con costra crujiente caramelizada y corazón jugoso."
      }
    },

    categories: ["Para Compartir", "Smash Burgers & Baos", "Raciones Castizas", "Dulce Final", "Craft Beer & Bebidas"],

    menu: [
      {
        id: "e2_1",
        name: "Smash Burger Dry-Aged Doble",
        category: "Smash Burgers & Baos",
        price: 13.90,
        badge: "Más Pedido",
        description: "180g de vaca madurada en doble patty con costra caramelizada, cheddar fundido de 12 meses, cebolla pochada y salsa secreta La Central.",
        prepTime: "8 min",
        ingredients: "Doble carne de vaca dry-aged (180g), queso cheddar curado inglés 12 meses, pan brioche de masa madre, bacon ahumado crujiente y salsa casera.",
        dietary: "100% Vaca Madurada · Patatas Caseras",
        beerPairing: "American IPA lupulada de grifo",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        allergens: ["gluten", "lactosa"]
      },
      {
        id: "e2_2",
        name: "Oreja Crujiente a la Plancha con Salsa Brava",
        category: "Raciones Castizas",
        price: 9.80,
        badge: "Clásico Castizo",
        description: "Tacos de oreja prensada y dorada al cromo hasta quedar crujiente por fuera y tierna dentro, bañada en salsa brava tradicional sin tomate.",
        prepTime: "5 min",
        ingredients: "Oreja de cerdo adobada, dorada en plancha de cromo, salsa brava de pimentón picante y reducción de caldo de cocido tradicional.",
        dietary: "Receta Madrileña · Sin Gluten",
        beerPairing: "Lager rubia checa sin filtrar",
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
        allergens: []
      },
      {
        id: "e2_3",
        name: "Tacos de Costilla Desmigada a Baja Temperatura (3 uds)",
        category: "Para Compartir",
        price: 12.50,
        badge: "Recomendado",
        description: "Tortillas de maíz nixtamalizado, costilla confitada 12 horas con glaseado de chipotle suave, cebolla encurtida y brotes tiernos.",
        prepTime: "7 min",
        ingredients: "Costilla de cerdo confitada 12h, tortillas artesanales de maíz nixtamalizado, cebolla morada encurtida con lima y cilantro fresco.",
        dietary: "Sin Gluten · Cocción Lenta 12h",
        beerPairing: "Amber Ale tostada de grifo",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80",
        allergens: []
      },
      {
        id: "e2_4",
        name: "Patatas Bravas Tradicionales con Aceite de Pimentón",
        category: "Raciones Castizas",
        price: 7.50,
        badge: "Favorito",
        description: "Patata agria cortada a mano, pochada lentamente y frita a alta temperatura. Salsa brava de caldo reducido y pimentón ahumado.",
        prepTime: "5 min",
        ingredients: "Patatas agrias españolas cortadas a mano, aceite de oliva virgen extra, pimentón picante de La Vera y alioli ligero de ajo asado.",
        dietary: "Vegetariano · Sin Gluten",
        beerPairing: "Pilsner artesana bien fría",
        image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=600&q=80",
        allergens: []
      },
      {
        id: "e2_5",
        name: "Bao al Vapor de Panceta Confitada y Hoisin (2 uds)",
        category: "Smash Burgers & Baos",
        price: 9.50,
        badge: "Street Food",
        description: "Pan bao esponjoso al vapor con panceta crujiente, pepino encurtido casero, cacahuete tostado y salsa hoisin cítrica.",
        prepTime: "6 min",
        ingredients: "Pan bao al vapor al momento, panceta marinada con cinco especias, pepino encurtido casero, cacahuetes tostados y hierbabuena fresca.",
        dietary: "Pan Artesano al Vapor",
        beerPairing: "Session IPA cítrica",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        allergens: ["gluten", "cacahuetes"]
      },
      {
        id: "e2_6",
        name: "Cookie Caliente de Chocolate con Helado de Vainilla",
        category: "Dulce Final",
        price: 6.00,
        badge: "Para Compartir",
        description: "Galleta recién horneada servida en sartén de hierro con interior fundido de chocolate negro 70% y bola de helado artesano.",
        prepTime: "4 min",
        ingredients: "Masa de galleta horneada al momento en sartén de hierro fundido, pepitas de chocolate belga 70% y helado artesano de vainilla bourbon.",
        dietary: "Horneada al Momento",
        beerPairing: "Stout de avena o café de especialidad",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
        allergens: ["gluten", "lactosa", "huevo"]
      }
    ],

    googleReviews: [
      {
        id: "r2_1",
        author: "David Serrano",
        badge: "Local Guide · 86 opiniones",
        rating: 5,
        timeAgo: "Hace 3 días",
        comment: "El mejor ambiente de Lucero. La smash burger con doble carne y la oreja a la plancha son de otro nivel. Poder pedir desde el móvil sin esperar colas en barra hace que el servicio vuele.",
        categoryRatings: { comida: 4.9, servicio: 4.8, ambiente: 4.8 }
      },
      {
        id: "r2_2",
        author: "Lucía Navarro",
        badge: "Cliente recurrente",
        rating: 5,
        timeAgo: "Hace 1 semana",
        comment: "La terraza está genial y los grifos de cerveza artesana siempre tienen novedades. Muy buen trato del personal y precios muy ajustados para la calidad de la comida.",
        categoryRatings: { comida: 4.8, servicio: 4.9, ambiente: 4.7 }
      },
      {
        id: "r2_3",
        author: "Pablo Rivas",
        badge: "Comensal verificado",
        rating: 5,
        timeAgo: "Hace 3 semanas",
        comment: "Las bravas son de las de verdad, sin mayonesa barata por encima. Y la cookie caliente al final es brutal. Repetiremos sin duda.",
        categoryRatings: { comida: 4.9, servicio: 4.7, ambiente: 4.8 }
      }
    ]
  },

  // =========================================================================
  // ESTILO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA CON LÍDERES PUNTEADOS
  // =========================================================================
  estilo3: {
    id: "estilo3",
    styleName: "Estilo 3",
    styleSubtitle: "Bistró Tradicional & Carta Clásica",
    layoutType: "bistro",
    themeClass: "theme-estilo-3",
    name: "Casa Manolo · Taberna y Fogón",
    foundationYear: "1974",
    tagline: "Cincuenta años de pucheros lentos, embutido de la tierra y hospitalidad de siempre",
    address: "Paseo de Extremadura, 164 · Madrid",
    phone: "914 63 12 90",
    whatsapp: "34695590754",
    email: "casamanolo1974@gmail.com",
    managerName: "Manuel Nieto (Gerencia Casa Manolo)",
    googleMapsUrl: "https://maps.google.com/?q=Meson+Madrid",
    type: "Mesón & Taberna Castellana",
    rating: 4.7,
    totalReviews: 680,
    serviceNote: "Cocina abierta de 13:00 a 16:30 y de 20:00 a 23:30 · Lunes cerrado por descanso",
    bannerImg: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",

    aboutUs: {
      headline: "Medio siglo encendiendo los fogones a las ocho de la mañana",
      story: "Fundada en 1974 por Don Manuel y Doña Carmen, Casa Manolo conserva intacto el espíritu de las casas de comidas familiares. Aquí no hay prisas ni modas pasajeras. Servimos el vino en porrón si el cliente lo pide, picamos el jamón a cuchillo fino y dejamos que los callos y los judiones hagan chup-chup durante horas en cazuela de barro.",
      timeline: [
        { year: "1974", event: "Apertura en el Paseo de Extremadura como casa de comidas para los trabajadores del barrio." },
        { year: "1996", event: "Incorporación de la parrilla de leña de roble para los asados de fin de semana." },
        { year: "Hoy", event: "Segunda generación familiar manteniendo el mismo recetario con reservas directas online." }
      ],
      specialtyHighlight: {
        title: "Judiones de la Granja con Oreja y Chorizo de Cantimpalos",
        badge: "Plato de Cuchara Centenario",
        price: "12,50 €",
        text: "Guisados a fuego dulce con verduras pochadas y embutido artesanal de Segovia. Servidos en cazuela de barro humeante con piparras de la huerta."
      }
    },

    categories: ["Entremeses & Raciones", "Cuchara de la Casa", "Brasas & Asados", "Pescados de Lonja", "Postres de la Abuela"],

    menu: [
      {
        id: "e3_1",
        section: "Guisos Tradicionales",
        name: "Judiones de la Granja Estofados con Matanza",
        category: "Cuchara de la Casa",
        price: 12.50,
        description: "Guiso reposado 24 horas con oreja ibérica, chorizo de Cantimpalos y morcilla asturiana de cebolla.",
        vintageBadge: "Plato del Día",
        prepTime: "Guiso del día listo",
        ingredients: "Judiones de La Granja, oreja y panceta ibérica, chorizo ahumado de Cantimpalos, morcilla de arroz, pimiento choricero y laurel.",
        dietary: "Sin Gluten · Cocción Lenta Tradicional",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e3_2",
        section: "De la Parrilla de Roble",
        name: "Chuletón de Vaca Vieja Madurada (1kg)",
        category: "Brasas & Asados",
        price: 38.00,
        description: "Corte selecto de vaca con 40 días de reposo, asado en parrilla de hierro con sarmientos y sal gorda marina.",
        vintageBadge: "Especialidad",
        prepTime: "20 min",
        ingredients: "Chuletón de vaca con 40 días de cámara, brasa de carbón de roble y sarmiento de vid, servido con pimientos asados y sal marina.",
        dietary: "Sin Gluten · Fuego de Leña",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e3_3",
        section: "Entremeses Castizos",
        name: "Huevos Rotos con Jamón Ibérico de Bellota",
        category: "Entremeses & Raciones",
        price: 13.50,
        description: "Huevos de corral camperos con puntilla crujiente y yema líquida sobre patata panadera pochada al momento.",
        vintageBadge: "Imprescindible",
        prepTime: "10 min",
        ingredients: "Huevos camperos fritos con puntilla dorada, patatas pochadas en aceite de oliva virgen extra y jamón de bellota 100% ibérico cortado a mano.",
        dietary: "Jamón de Bellota · Clásico de Madrid",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        allergens: ["huevo"]
      },
      {
        id: "e3_4",
        section: "Guisos Tradicionales",
        name: "Callos a la Madrileña con Pata y Morro",
        category: "Cuchara de la Casa",
        price: 13.00,
        description: "Salsa trabada y gelatinosa con su punto exacto de picante, chorizo ahumado y morcilla en cazuela de barro.",
        vintageBadge: "Receta 1974",
        prepTime: "Guiso reposado listo",
        ingredients: "Callos, morro y pata de ternera, pimentón de la Vera picante, chorizo artesanal, morcilla y caldo de cocido reducido.",
        dietary: "Receta Original Don Manuel (1974)",
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e3_5",
        section: "De la Parrilla de Roble",
        name: "Entrecot de Ternera a la Sal Marina",
        category: "Brasas & Asados",
        price: 21.50,
        description: "Lomo bajo tierno y jugoso con guarnición de pimientos asados en casa y patatas fritas artesanas.",
        vintageBadge: "Corte Suave",
        prepTime: "12 min",
        ingredients: "Lomo bajo tierno de ternera a la plancha de hierro, pimientos asados al horno de leña y patatas fritas cortadas a mano.",
        dietary: "Sin Gluten · Carne Tierna",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e3_6",
        section: "Repostería Casera",
        name: "Arroz con Leche Cremoso Caramelizado",
        category: "Postres de la Abuela",
        price: 5.50,
        description: "Cocido a fuego lento durante dos horas con leche fresca de vaca, canela en rama y costra tostada con pala de hierro.",
        vintageBadge: "Casero",
        prepTime: "5 min",
        ingredients: "Arroz redondo tradicional, leche fresca de granja, canela en rama, cáscara de limón, mantequilla y costra caramelizada al fuego.",
        dietary: "Elaboración de la Casa",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        allergens: ["lactosa"]
      }
    ],

    googleReviews: [
      {
        id: "r3_1",
        author: "Antonio Fernández",
        badge: "Vecino del barrio · 25 años cliente",
        rating: 5,
        timeAgo: "Hace 5 días",
        comment: "Un mesón de los que ya no quedan en Madrid. Vengo desde que mi padre me traía de chaval. Los judiones y los callos mantienen exactamente el mismo sabor de hace treinta años.",
        dishMentioned: "Callos y Judiones de la Granja"
      },
      {
        id: "r3_2",
        author: "Beatriz Morales",
        badge: "Reserva familiar",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "Celebramos el cumpleaños de mi madre con una comida para 10 personas. La carne tiernísima y las raciones muy abundantes. Nos trataron como si fuéramos de la familia.",
        dishMentioned: "Chuletón de vaca y huevos rotos"
      },
      {
        id: "r3_3",
        author: "Julián Prieto",
        badge: "Comensal habitual",
        rating: 5,
        timeAgo: "Hace 1 mes",
        comment: "Buen género, servicio rápido y camareros que conocen el oficio. Muy cómodo poder reservar la mesa directamente desde su web sin tener que llamar tres veces por teléfono.",
        dishMentioned: "Entrecot a la brasa"
      }
    ]
  },

  // =========================================================================
  // ESTILO 4: SHOWCASE VISUAL & MINIMALISMO NÓRDICO (BRUNCH & OBRADOR)
  // =========================================================================
  estilo4: {
    id: "estilo4",
    styleName: "Estilo 4",
    styleSubtitle: "Showcase Visual & Minimalismo",
    layoutType: "minimal",
    themeClass: "theme-estilo-4",
    name: "Atelier · Café & Obrador",
    tagline: "Panadería de masa madre viva, desayunos conscientes y café de especialidad de origen",
    address: "Calle de Ocaña, 41 · Aluche, Madrid",
    phone: "917 82 11 05",
    whatsapp: "34695590754",
    email: "hola@atelierobrador.es",
    managerName: "Sara (Coordinación de Obrador)",
    googleMapsUrl: "https://maps.google.com/?q=Cafeteria+Madrid",
    type: "Café de Especialidad & Obrador Artesano",
    rating: 4.9,
    totalReviews: 310,
    openingHours: "Lunes a Domingo: 08:30 a 20:00",
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",

    aboutUs: {
      headline: "Menos ingredientes, más tiempo. Simplicidad escandinava y producto orgánico.",
      story: "Atelier nace de una convicción: un buen café y una hogaza de pan bien hecha pueden transformar el inicio del día. Trabajamos exclusivamente con micro-lotes de café calificados por encima de 86 puntos SCA, leche fresca ecológica de pasto y harinas molidas a la piedra sin aditivos de ningún tipo.",
      principles: [
        {
          code: "SCA >86",
          title: "Micro-Lotes Éticos",
          desc: "Tueste ligero semanal para conservar los matices florales y frutales de cada finca cafetera."
        },
        {
          code: "BIO 100%",
          title: "Masa Madre Viva",
          desc: "Fermentación en frío de 72 horas que garantiza panes digestivos de corteza crujiente y miga aireada."
        },
        {
          code: "KM 0",
          title: "Ingredientes Conscientes",
          desc: "Huevos camperos de Ávila, aguacates ecológicos de Málaga y aceite virgen extra de Jaén."
        }
      ],
      specialtyHighlight: {
        title: "Tosta Nórdica de Masa Madre con Salmón Ahumado y Eneldo",
        badge: "Plato Firma",
        price: "10,50 €",
        details: "Pan de centeno 72h · Salmón ahumado salvaje · Aguacate hass · Aceite virgen extra arbequina",
        text: "Nuestra rebanada más representativa, servida sobre tabla de madera natural con brotes orgánicos."
      }
    },

    categories: ["Desayunos & Toast", "Bowls & Saludable", "Obrador Casero", "Cafés de Especialidad", "Infusiones & Zumos"],

    menu: [
      {
        id: "e4_1",
        name: "Tosta Nórdica de Salmón y Aguacate",
        category: "Desayunos & Toast",
        price: 10.50,
        badge: "Firma",
        dietary: "Rico en Omega-3",
        description: "Rebanada de masa madre de centeno 72h, láminas de aguacate hass al punto, salmón ahumado artesano, semillas de chía y eneldo fresco.",
        nutrition: "380 kcal · 22g Proteína",
        prepTime: "6 min",
        ingredients: "Hogaza artesanal de centeno 72h, aguacate hass de Málaga, salmón ahumado salvaje en frío, semillas de chía y brotes orgánicos de eneldo.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        allergens: ["gluten", "pescado"]
      },
      {
        id: "e4_2",
        name: "Flat White Doble de Etiopía Yirgacheffe",
        category: "Cafés de Especialidad",
        price: 2.90,
        badge: "SCA 87 Pts",
        dietary: "Café de Especialidad",
        description: "Doble espresso de proceso lavado con notas florales de jazmín y bergamota, texturizado con microespuma densa y sedosa de leche fresca.",
        nutrition: "Leche ecológica o bebida de avena",
        prepTime: "3 min",
        ingredients: "Café de especialidad 100% Arábica de Etiopía (micro-lote Yirgacheffe tueste ligero), leche fresca ecológica pasteurizada.",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80",
        allergens: ["lactosa"]
      },
      {
        id: "e4_3",
        name: "Açaí Bowl Silvestre con Granola Horneada en Casa",
        category: "Bowls & Saludable",
        price: 8.50,
        badge: "Antioxidante",
        dietary: "100% Vegano",
        description: "Pulpa pura de açaí orgánico batida con plátano congelado, fresas de temporada, arándanos, lascas de coco y granola de avena y miel.",
        nutrition: "Sin azúcar añadido · 100% fruta",
        prepTime: "5 min",
        ingredients: "Açaí puro silvestre del Amazonas, plátano de Canarias, fresas frescas, arándanos silvestres, lascas de coco natural y granola casera horneada con miel.",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80",
        allergens: []
      },
      {
        id: "e4_4",
        name: "Croissant de Mantequilla Francesa Normandía",
        category: "Obrador Casero",
        price: 2.40,
        badge: "Recién Horneado",
        dietary: "Obrador Propio",
        description: "Hojaldrado a mano con 27 capas y mantequilla AOP de Normandía. Crujiente por fuera, alveolado y esponjoso en su interior.",
        nutrition: "Horneadas a las 08:30 y 16:30",
        prepTime: "Listo para servir",
        ingredients: "Harina ecológica molida a la piedra, mantequilla AOP de Normandía al 84% de materia grasa, masa madre de trigo y pizca de sal de Guérande.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
        allergens: ["gluten", "lactosa"]
      },
      {
        id: "e4_5",
        name: "Tosta de Jamón Ibérico de Bellota y Tomate Rallado",
        category: "Desayunos & Toast",
        price: 6.80,
        badge: "Clásico",
        dietary: "Producto Ibérico",
        description: "Pan de trigo candeal tostado en plancha de hierro, tomate rama recién rallado con sal marina y aceite de oliva virgen extra de Jaén.",
        nutrition: "Aceite virgen extra prensado en frío",
        prepTime: "5 min",
        ingredients: "Pan de trigo candeal de fermentación lenta, tomate pera rallado al momento, aceite de oliva virgen extra Picual de Jaén y jamón ibérico de bellota.",
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
        allergens: ["gluten"]
      },
      {
        id: "e4_6",
        name: "Matcha Latte Ceremonial de Kioto Uji",
        category: "Infusiones & Zumos",
        price: 3.80,
        badge: "Grado Ceremonial",
        dietary: "Orgánico",
        description: "Té verde matcha molido a la piedra importado de Japón, batido tradicionalmente con chasen de bambú y leche de avena vaporizada.",
        nutrition: "Rico en L-teanina y antioxidantes",
        prepTime: "4 min",
        ingredients: "Té verde matcha de grado ceremonial procedente de Uji (Kioto, Japón), batido con agua pura y texturizado con bebida ecológica de avena.",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
        allergens: []
      }
    ],

    googleReviews: [
      {
        id: "r4_1",
        author: "Sara Benítez",
        badge: "Cliente de café a diario",
        rating: 5,
        timeAgo: "Hace 4 días",
        comment: "El mejor café de especialidad de la zona. Se nota el cariño en cada taza y los croissants de mantequilla vuelan a media mañana. El espacio transmite una calma increíble para trabajar un rato o leer.",
        highlight: "Café impecable y obrador honesto"
      },
      {
        id: "r4_2",
        author: "Marcos Herranz",
        badge: "Comensal habitual",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "La tosta de masa madre con salmón y el matcha latte son mi desayuno de los sábados. Da gusto ver sitios así en Aluche que cuidan tanto la materia prima.",
        highlight: "Desayunos saludables de nivel"
      },
      {
        id: "r4_3",
        author: "Elena Castillo",
        badge: "Local Guide",
        rating: 5,
        timeAgo: "Hace 1 mes",
        comment: "El pan de centeno se conserva fresco durante tres días sin ponerse duro. Un acierto total y una atención súper educada.",
        highlight: "Panadería artesanal imprescindible"
      }
    ]
  }
};
