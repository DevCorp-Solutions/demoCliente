/**
 * DevCorp Solutions - Ecosistema de Plantillas Web de Hostelería
 * Datos Oficiales de los Locales del Excel adaptados a 4 Estilos y Arquitecturas de Diseño:
 * 
 * Estilo 1: Restaurante Parrilla Vukata (Aluche) -> Editorial & Alta Cocina / Asador de Brasas
 * Estilo 2: Cervecería 27 & Bar Mala Pata (Lucero / Aluche) -> App Interactiva & Bento Grid
 * Estilo 3: Pizzería Carlos Carabanchel (Carabanchel) -> Carta Clásica Bistró & Horno de Leña
 * Estilo 4: Cafetería Campamento & Desayunos Yebes (Campamento) -> Showcase Visual & Minimalismo Nórdico
 */

const RESTAURANT_PRESETS = {
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
    bannerImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
    
    aboutUs: {
      headline: "28 Años de Pasión por el Fuego Vivo, el Carbón de Encina y el Buen Comer en Aluche",
      story: "Fundado en la calle Maqueda, Restaurante Parrilla Vukata nació con una premisa innegociable: respetar el producto al máximo. Lo que empezó como un querido asador de barrio se ha convertido en el templo de la carne de referencia en el suroeste de Madrid. Cada mañana seleccionamos personalmente los mejores lomos de vacuno, entrañas, asados de tira y chuletones madurados, dejándolos reposar antes de pasar por el fuego vivo de nuestras brasas.",
      quote: "La brasa no perdona: o tienes la mejor carne de Madrid y el carbón de encina en su punto exacto, o no hay dónde esconderse.",
      quoteAuthor: "Goran Vukata, Maestro Parrillero",
      pillars: [
        {
          num: "01",
          title: "Cámara Dry-Aged Propia",
          desc: "Maduración en seco controlada de más de 40 días para concentrar ternura, aroma y jugosidad extrema."
        },
        {
          num: "02",
          title: "Carbón de Encina Extremeño",
          desc: "Brasas a 350ºC constante que sellan la pieza por fuera caramelizando sus jugos y dejando el interior sedoso y caliente."
        },
        {
          num: "03",
          title: "Take Away de Carta Completa",
          desc: "Toda nuestra carta disponible para recoger en local con envase térmico especial que preserva el punto del asador."
        }
      ],
      specialtyHighlight: {
        title: "Parrillada de Carne Completa Vukata",
        badge: "Especialidad Parrillera",
        weight: "Formato 2 y 3 PAX",
        aging: "Chorizo criollo, morcilla, asado de tira, entraña y vacío",
        pairing: "Maridaje sugerido: Tinto Ribera del Duero o Cerveza fría",
        text: "Selección maestra servida sobre brasero caliente para mantener el punto exacto y los aromas ahumados de la leña en mesa."
      }
    },

    categories: ["Entrantes", "A la Brasa", "Ensaladas", "Chivito al Plato", "Pollo Asado", "Postres", "Cafés"],

    menu: [
      // --- ENTRANTES ---
      {
        id: "e1_emp",
        name: "Empanada Criolla",
        category: "Entrantes",
        price: 4.80,
        badge: "Casera",
        description: "Empanada criolla artesana al horno rellena de ternera cortada a cuchillo, cebolla pochada, huevo y especias tradicionales.",
        details: "Horneada al momento · Masa fina artesanal",
        ingredients: "Harina de trigo, carne vacuna seleccionada, cebolla dulce, huevo duro, pimentón y comino.",
        prepTime: "8 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos", "crustaceos", "pescado", "apio", "mostaza", "sesamo"]
      },
      {
        id: "e1_cho",
        name: "Chorizo a la Parrilla",
        category: "Entrantes",
        price: 5.00,
        badge: "Al Carbón",
        description: "Chorizo criollo seleccionado asado a la brasa de carbón de encina con toque ahumado.",
        details: "Asado a fuego vivo · Crujiente por fuera y tierno por dentro",
        ingredients: "Magro de cerdo, pimentón natural, ajo, sal marina y tripa natural.",
        prepTime: "10 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_mor",
        name: "Morcilla de Ávila a la Parrilla",
        category: "Entrantes",
        price: 5.50,
        badge: "Ávila",
        description: "Morcilla tradicional de cebolla y especias de Ávila asada lentamente sobre parrilla de hierro.",
        details: "Elaboración artesana tradicional",
        ingredients: "Cebolla horcal, arroz, sangre de cerdo, pimentón y manteca de cerdo.",
        prepTime: "10 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_ore",
        name: "Oreja a la Plancha",
        category: "Entrantes",
        price: 13.00,
        badge: "Clásico Madrileño",
        description: "Oreja de cerdo crujiente a la plancha aliñada con ajo picado fino, perejil fresco y pimentón.",
        details: "Punto tostado crujiente exterior · Muy tierna",
        ingredients: "Oreja de cerdo cocida y dorada a la plancha, ajo, perejil fresco y aceite de oliva virgen.",
        prepTime: "12 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_pro",
        name: "Provoleta Rellena",
        category: "Entrantes",
        price: 13.00,
        badge: "Especialidad",
        description: "Queso provolone fundido en cazuela refractaria a la brasa con orégano silvestre y corazón cremoso.",
        details: "Servida hirviendo en cazuela parrillera",
        ingredients: "Queso provolone hilado, orégano de monte, ají molido y aceite de oliva virgen.",
        prepTime: "10 min",
        popular: true,
        image: "assets/images/vukata/provoleta.jpg",
        allergens: ["gluten", "lacteos"]
      },
      {
        id: "e1_hue",
        name: "Huevos Rotos Ecológicos con Torreznos",
        category: "Entrantes",
        price: 16.00,
        badge: "Huevos de Montaña",
        description: "Huevos ecológicos de gallinas criadas en montaña con música. Probablemente los mejores huevos del mercado.",
        details: "Huevos ecológicos certificados · Patatas pochadas caseras",
        ingredients: "Huevos de granja ecológica de montaña, torreznos crujientes y patatas pochadas al momento.",
        prepTime: "12 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "sulfitos"]
      },
      {
        id: "e1_pin",
        name: "Pincho Moruno y Bravas",
        category: "Entrantes",
        price: 15.75,
        badge: "Adobo Moruno",
        description: "Brochetas de magro adobado con mezcla tradicional de especias morunas a la brasa con patatas bravas.",
        details: "Maceración en especias 24h · Salsa brava casera",
        ingredients: "Magro de cerdo especiado, pimentón, comino, ajo, patatas bravas y alioli.",
        prepTime: "14 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
        allergens: ["mostaza", "huevos", "soja", "sulfitos"]
      },
      {
        id: "e1_pul",
        name: "Pata de Pulpo a la Brasa con Guacamole",
        category: "Entrantes",
        price: 24.00,
        badge: "Pulpo de Roca",
        description: "Pata entera de pulpo marcada sobre parrilla viva servida con base suave de guacamole casero y pimentón.",
        details: "Pulpo de roca braseado al carbón de encina",
        ingredients: "Pulpo de roca, aguacate fresco, lima, cebolla morada, pimentón dulce y sal marina en escamas.",
        prepTime: "15 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80",
        allergens: ["moluscos", "lacteos", "sulfitos"]
      },
      {
        id: "e1_croj",
        name: "Croquetas de Jamón Ibérico",
        category: "Entrantes",
        price: 13.50,
        badge: "Jamón de Bellota",
        description: "Bechamel reposada elaborada con jamón ibérico de bellota y rebozado extra crujiente.",
        details: "Elaboración casera diaria · Ración de 6 unidades",
        ingredients: "Leche entera fresca, mantequilla, jamón ibérico de bellota, harina de trigo y panko crujiente.",
        prepTime: "8 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos", "apio", "crustaceos", "soja", "moluscos", "pescado", "sulfitos"]
      },
      {
        id: "e1_crob",
        name: "Croquetas de Boletus o Pulpo",
        category: "Entrantes",
        price: 13.50,
        badge: "Boletus / Pulpo",
        description: "Croquetas melosas a elegir de boletus edulis de temporada o de pulpo a la brasa.",
        details: "Ración de 6 unidades generosas",
        ingredients: "Leche fresca, boletus edulis o pulpo, harina, mantequilla y pan rallado crujiente.",
        prepTime: "8 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos", "moluscos"]
      },
      {
        id: "e1_croc",
        name: "Croquetas de Carabineros con Velo Ibérico",
        category: "Entrantes",
        price: 14.00,
        badge: "Carabinero & Velo",
        description: "Intensas croquetas de marisco con carabinero, velo fino de tocino ibérico curado y alioli suave de ajo negro.",
        details: "Sabor marino concentrado y contraste ibérico",
        ingredients: "Carabineros, fondo de marisco, tocino ibérico curado, ajo negro y emulsión.",
        prepTime: "8 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos", "crustaceos"]
      },
      {
        id: "e1_tor",
        name: "Torrezno de Soria con Patatas (Unidad)",
        category: "Entrantes",
        price: 6.00,
        badge: "Marca de Garantía",
        description: "Panceta curada de Soria frita a fuego lento con souflado final crujiente y patatas caseras.",
        details: "Corteza dorada souflada y magro tierno",
        ingredients: "Panceta curada con Marca de Garantía Torrezno de Soria y patatas fritas.",
        prepTime: "10 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_ant",
        name: "Anticucho a la Parrilla",
        category: "Entrantes",
        price: 15.50,
        badge: "Parrillero",
        description: "Brochetas tradicionales de vacuno maceradas en salsa de ají panca, ajo y vinagre, braseadas a fuego vivo.",
        details: "Adobo parrillero tradicional",
        ingredients: "Carne de vacuno seleccionada, ají panca, vinagre tinto, ajo y comino.",
        prepTime: "12 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_can",
        name: "Cangrejos de Río en Salsa (Según existencias)",
        category: "Entrantes",
        price: 15.00,
        badge: "Temporada",
        description: "Cangrejos de río salteados y cocinados en salsa marinera tradicional con tomate y ligero toque picante.",
        details: "Receta clásica castellana",
        ingredients: "Cangrejos de río, sofrito de tomate natural, pimiento, cebolla, laurel y guindilla.",
        prepTime: "12 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
        allergens: ["crustaceos"]
      },
      {
        id: "e1_rab",
        name: "Rabo de Cerdo Estofado",
        category: "Entrantes",
        price: 18.00,
        badge: "Guiso de Cuchara",
        description: "Guiso meloso a fuego lento de rabo de cerdo con verduras de la huerta y reducción de vino tinto.",
        details: "Cocción pausada durante 4 horas",
        ingredients: "Rabo de cerdo, zanahoria, puerro, cebolla, caldo oscuro y vino de Madrid.",
        prepTime: "10 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },

      // --- A LA BRASA ---
      {
        id: "e1_asado",
        name: "Asado de Tira (Pieza 400g aprox)",
        category: "A la Brasa",
        price: 17.50,
        badge: "400g Aprox",
        description: "Corte transversal de costillar vacuno con hueso asado lentamente sobre brasas vivas de carbón de encina.",
        details: "Pieza de 400g aprox. · Sabor intenso de hueso",
        ingredients: "Costillar vacuno seleccionado, sal gorda marina y fuego de encina.",
        prepTime: "16 min",
        popular: true,
        image: "assets/images/vukata/asado_tira.jpg",
        allergens: []
      },
      {
        id: "e1_entrana",
        name: "Entraña (Pieza 400g aprox)",
        category: "A la Brasa",
        price: 17.50,
        badge: "400g Aprox",
        description: "Corte emblemático de asador con su membrana fina crocante e interior extremadamente tierno y jugoso.",
        details: "Pieza de 400g aprox. · Corte tradicional",
        ingredients: "Entraña de ternera y escamas de sal marina.",
        prepTime: "14 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_vacio",
        name: "Vacío (Pieza 400g aprox)",
        category: "A la Brasa",
        price: 18.00,
        badge: "400g Aprox",
        description: "Pieza magra y fibrosa entre las costillas y la cadera, asada a fuego medio para lograr máxima terneza.",
        details: "Pieza de 400g aprox. · Jugosidad equilibrada",
        ingredients: "Corte de vacío vacuno seleccionado y sal marina.",
        prepTime: "15 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_wagyu",
        name: "Auténtico Chuletón de Buey (Wagyu) Certificado",
        category: "A la Brasa",
        price: 65.00,
        badge: "Según Existencias",
        description: "Chuletón de infiltración grasa marmolada insuperable con certificado oficial de raza.",
        details: "Corte prémium de lujo · Servido en plato refractario caliente a 90ºC",
        ingredients: "Lomo de buey Wagyu certificado y sal de escamas de Añana.",
        prepTime: "22 min",
        popular: true,
        image: "assets/images/vukata/chuleton.jpg",
        allergens: []
      },
      {
        id: "e1_finlandes",
        name: "Chuletón de Vaca Finlandés",
        category: "A la Brasa",
        price: 55.00,
        badge: "Según Existencias",
        description: "Vaca alimentada en pastos nórdicos seleccionada por su grasa amarilla dulce y gran aroma a la brasa.",
        details: "Maduración Dry-Aged propia en cámara de Aluche",
        ingredients: "Lomo alto de vaca finlandesa y sal marina en escamas.",
        prepTime: "20 min",
        popular: false,
        image: "assets/images/vukata/chuleton.jpg",
        allergens: []
      },
      {
        id: "e1_entrecot",
        name: "Entrecot de Vaca Finlandés (+40 días maduración)",
        category: "A la Brasa",
        price: 28.50,
        badge: "Pieza 350g aprox",
        description: "Pieza de 350gr aprox. Maduración superior a 40 días en seco, textura mantecosa y profundidad cárnica.",
        details: "Maduración Dry-Aged superior a 40 días",
        ingredients: "Lomo de vaca madurado y escamas de sal marina.",
        prepTime: "15 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_parr2",
        name: "Parrillada de Carne para 2 PAX",
        category: "A la Brasa",
        price: 43.00,
        badge: "Para 2 Personas",
        description: "Chorizo criollo, morcilla, asado de tira, entraña y vacío servidos calientes sobre brasero parrillero.",
        details: "Selección completa de nuestras mejores carnes al carbón",
        ingredients: "Chorizo criollo, morcilla de Ávila, asado de tira, entraña y vacío vacuno.",
        prepTime: "20 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_parr2d",
        name: "Parrillada de Carne para 2 PAX Dimateo",
        category: "A la Brasa",
        price: 46.50,
        badge: "Especial Dimateo",
        description: "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo a la parrilla.",
        details: "Con pechuga de pollo de corral a la brasa",
        ingredients: "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo.",
        prepTime: "20 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_parr3",
        name: "Parrillada de Carne para 3 PAX",
        category: "A la Brasa",
        price: 53.00,
        badge: "Para 3 Personas",
        description: "Chorizo criollo, morcilla, asado de tira, entraña y vacío en formato generoso para tres comensales.",
        details: "Gran surtido parrillero al fuego de encina",
        ingredients: "Chorizo criollo, morcilla, asado de tira, entraña y vacío vacuno.",
        prepTime: "22 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_parr3d",
        name: "Parrillada de Carne para 3 PAX Dimateo",
        category: "A la Brasa",
        price: 56.50,
        badge: "Especial Dimateo 3P",
        description: "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo a la parrilla.",
        details: "Formato para tres personas con pechuga de corral",
        ingredients: "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo.",
        prepTime: "22 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_guarn_pat",
        name: "Guarnición de Patatas o Ensalada",
        category: "A la Brasa",
        price: 5.00,
        badge: "Guarnición",
        description: "Ración de patatas fritas caseras en aceite de oliva o ensalada de lechuga fresca y tomate.",
        details: "Acompañamiento perfecto de asados",
        ingredients: "Patatas agrias o vegetales frescos de huerta.",
        prepTime: "5 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_guarn_pim",
        name: "Guarnición de Pimientos del Piquillo",
        category: "A la Brasa",
        price: 8.00,
        badge: "Al Fuego",
        description: "Pimientos del piquillo enteros confitados despacio a la brasa con ajo y aceite de oliva virgen extra.",
        details: "Confitados lentamente",
        ingredients: "Pimientos del piquillo enteros, ajos asados y AOVE.",
        prepTime: "6 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },

      // --- ENSALADAS ---
      {
        id: "e1_ens_tem",
        name: "Ensalada Templada",
        category: "Ensaladas",
        price: 13.75,
        badge: "Queso de Cabra",
        description: "Mezcla de lechugas, nueces, pasas, tomate cherrys, endivias, queso de cabra, confitura de tomate y vinagreta de frutos del bosque.",
        details: "Queso de cabra tostado a la brasa",
        ingredients: "Hojas verdes, nueces, pasas moscatel, cherrys, endivias, rulo de cabra caramelizado y reducción de frutos rojos.",
        prepTime: "8 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        allergens: ["lacteos", "frutos_cascara"]
      },
      {
        id: "e1_ens_cal",
        name: "Ensalada California",
        category: "Ensaladas",
        price: 13.75,
        badge: "Pollo Brasa",
        description: "Mezcla de lechugas, tomate, pollo a la parrilla, bacon, picatostes, pasas, parmesano y salsa California.",
        details: "Pollo recién salido de la brasa",
        ingredients: "Lechugas crujientes, pollo al carbón, tiras de bacon dorado, picatostes de pan, parmesano curado y aderezo California.",
        prepTime: "8 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "frutos_cascara", "mostaza"]
      },
      {
        id: "e1_ens_nik",
        name: "Ensalada Nikoleta",
        category: "Ensaladas",
        price: 13.75,
        badge: "Tomate Raf",
        description: "Tomate Raf aliñado con piparras y aceitunas.",
        details: "Tomate de temporada en su punto dulce y carnoso",
        ingredients: "Tomate Raf seleccionado, piparras de Navarra, aceitunas y AOVE virgen extra.",
        prepTime: "6 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_ens_pim",
        name: "Ensalada de Pimientos Asados al Fuego con Ventresca",
        category: "Ensaladas",
        price: 15.50,
        badge: "Ventresca",
        description: "Pimientos asados a fuego vivo con ventresca de bonito del norte y aceite de oliva virgen extra.",
        details: "Pimientos asados a la leña con ventresca jugosa",
        ingredients: "Pimientos rojos braseados, ventresca de atún en aceite de oliva y sal gorda.",
        prepTime: "7 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        allergens: ["pescado"]
      },

      // --- CHIVITO AL PLATO ---
      {
        id: "e1_chi",
        name: "Chivito al Plato",
        category: "Chivito al Plato",
        price: 17.00,
        badge: "Plato Completo",
        description: "Filete de ternera, jamón, mozzarella, bacon, huevo frito, patatas fritas y ensalada de lechuga y tomate.",
        details: "Especialidad rioplatense servida al plato",
        ingredients: "Filete de ternera tierno, jamón cocido, mozzarella fundida, bacon crujiente, huevo campero frito y patatas.",
        prepTime: "15 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos"]
      },

      // --- POLLO ASADO ---
      {
        id: "e1_pol_med",
        name: "1/2 Pollo al Carbón",
        category: "Pollo Asado",
        price: 16.00,
        badge: "Al Carbón",
        description: "Con patatas fritas, ensalada y 3 salsas (consumo en restaurante).",
        details: "Piel dorada y crujiente al fuego de encina",
        ingredients: "Medio pollo de corral marinado, patatas fritas caseras, ensalada mixta y 3 salsas artesanas.",
        prepTime: "14 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "frutos_cascara", "cacahuete", "soja", "mostaza", "sulfitos"]
      },
      {
        id: "e1_pol_ent",
        name: "Pollo al Carbón Entero",
        category: "Pollo Asado",
        price: 26.50,
        badge: "Familiar",
        description: "Con patatas fritas, ensalada y 3 salsas (consumo en restaurante).",
        details: "Pollo entero asado a la brasa para compartir",
        ingredients: "Pollo entero asado al carbón, ración generosa de patatas, ensalada de la casa y 3 salsas.",
        prepTime: "18 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "frutos_cascara", "cacahuete", "soja", "mostaza", "sulfitos"]
      },

      // --- POSTRES ---
      {
        id: "e1_coulant",
        name: "Coulant de Chocolate con Helado de Vainilla",
        category: "Postres",
        price: 6.50,
        badge: "Volcán Fundente",
        description: "Bizcocho tibio de chocolate negro con corazón fluido fundente y helado de vainilla Bourbon.",
        details: "Servido recién horneado y caliente",
        ingredients: "Chocolate negro 70%, huevos, mantequilla, harina, azúcar y helado artesano de vainilla.",
        prepTime: "7 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "lacteos", "frutos_cascara", "soja"]
      },
      {
        id: "e1_panq",
        name: "Panqueque Relleno de Biscoff",
        category: "Postres",
        price: 6.50,
        badge: "Biscoff Dulce",
        description: "Crepe artesano relleno generosamente de crema de galleta Biscoff caramelizada y azúcar glas.",
        details: "Hecho al momento a la plancha dulce",
        ingredients: "Masa fina de panqueque, crema de galleta Biscoff caramelizada y azúcar glas.",
        prepTime: "6 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "lacteos", "huevos", "soja"]
      },
      {
        id: "e1_copa",
        name: "Copa Di Mateo",
        category: "Postres",
        price: 6.50,
        badge: "Con Crema de Orujo",
        description: "Helado de chocolate, topping de nueces y crema de orujo.",
        details: "Postre para adultos con licor tradicional",
        ingredients: "Helado de chocolate belga, nueces picadas y crema de orujo artesano.",
        prepTime: "5 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
        allergens: ["huevos", "frutos_cascara", "soja", "lacteos"]
      },
      {
        id: "e1_tarta",
        name: "Tarta de Queso Cremosa",
        category: "Postres",
        price: 6.50,
        badge: "Receta del Asador",
        description: "Horneada a diario con centro cremoso fundente sobre base crocante de galleta tostada.",
        details: "Textura cremosa y caramelizado al horno",
        ingredients: "Queso crema, nata pura 35%, huevos camperos, azúcar y base de galleta de mantequilla.",
        prepTime: "5 min",
        popular: true,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
        allergens: ["gluten", "huevos", "soja", "lacteos"]
      },

      // --- CAFÉS ---
      {
        id: "e1_caf_solo",
        name: "Con Leche, Cortado o Solo",
        category: "Cafés",
        price: 1.75,
        badge: "Café Natural",
        description: "Café 100% arábica de tueste natural en máquina espresso italiana con leche fresca vaporizada.",
        details: "Servido en taza caliente",
        ingredients: "Café espresso y leche entera o vegetal.",
        prepTime: "3 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
        allergens: ["lacteos"]
      },
      {
        id: "e1_infusion",
        name: "Manzanilla o Poleo Menta",
        category: "Cafés",
        price: 2.20,
        badge: "Infusiones",
        description: "Flor natural en pirámide aromática con agua mineral caliente.",
        details: "Infusiones digestivas",
        ingredients: "Flor de manzanilla o poleo menta natural.",
        prepTime: "4 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
        allergens: []
      },
      {
        id: "e1_tes",
        name: "Tés Especiales",
        category: "Cafés",
        price: 2.50,
        badge: "Selección",
        description: "Variedad de té verde sencha, té negro Earl Grey con bergamota o rooibos especiado.",
        details: "Selección de cosechas aromáticas",
        ingredients: "Hojas de té seleccionadas en infusión a 90ºC.",
        prepTime: "4 min",
        popular: false,
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
        allergens: []
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


/**
 * Estado Global Reactivo de la Demo DevCorp GastroSuite
 * Maneja el estilo activo (Estilo 1, Estilo 2, Estilo 3, Estilo 4),
 * el carrito de pedidos, el comandero en vivo (KDS), las reservas
 * y el contador de platos más pedidos en tiempo real.
 */


const STORAGE_KEY = 'devcorp_gastrosuite_state_v5';

const INITIAL_DISH_SALES = {
  // Estilo 1: Restaurante Parrilla Vukata
  "e1_asado": 54, // Asado de Tira
  "e1_emp": 48,   // Empanada Criolla
  "e1_pro": 39,   // Provoleta Rellena
  "e1_hue": 42,   // Huevos Rotos con Torreznos
  "e1_parr2": 37, // Parrillada 2 PAX
  "e1_tarta": 45, // Tarta de Queso Cremosa
  // Estilo 2: App Interactiva & Bento Grid
  "e2_1": 78, // Smash Burger
  "e2_2": 52, // Oreja
  "e2_3": 41, // Tacos
  "e2_4": 64, // Bravas
  "e2_5": 39, // Bao
  "e2_6": 47, // Cookie
  // Estilo 3: Bistró Tradicional & Carta Clásica
  "e3_1": 65, // Judiones
  "e3_2": 44, // Chuletón
  "e3_3": 58, // Huevos rotos
  "e3_4": 49, // Callos
  "e3_5": 32, // Entrecot
  "e3_6": 41, // Arroz con leche
  // Estilo 4: Showcase Visual & Minimalismo
  "e4_1": 82, // Tosta salmón
  "e4_2": 114, // Flat White
  "e4_3": 56, // Açaí bowl
  "e4_4": 69, // Croissant
  "e4_5": 48, // Tosta jamón
  "e4_6": 39  // Matcha Latte
};

const INITIAL_DEMO_ORDERS = [
  {
    id: "ORD-101",
    timestamp: new Date(Date.now() - 1000 * 60 * 14).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "mesa",
    tableNumber: "Mesa 4 (Comedor)",
    customerName: "Carlos M.",
    items: [
      { id: "e1_pro", name: "Provoleta Rellena", qty: 1, price: 13.00 },
      { id: "e1_asado", name: "Asado de Tira (Pieza 400g aprox)", qty: 1, price: 17.50, notes: "Al punto" }
    ],
    total: 30.50,
    status: "kitchen",
    elapsedMinutes: 14
  },
  {
    id: "ORD-102",
    timestamp: new Date(Date.now() - 1000 * 60 * 6).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "takeaway",
    tableNumber: "Recogida Local (Take Away)",
    customerName: "Laura G.",
    items: [
      { id: "e1_emp", name: "Empanada Criolla", qty: 4, price: 4.80 },
      { id: "e1_tarta", name: "Tarta de Queso Cremosa", qty: 2, price: 6.50 }
    ],
    total: 32.20,
    status: "pending",
    elapsedMinutes: 6
  },
  {
    id: "ORD-103",
    timestamp: new Date(Date.now() - 1000 * 60 * 22).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "delivery",
    tableNumber: "Entrega Domicilio",
    customerName: "Marcos S.",
    items: [
      { id: "e1_parr2", name: "Parrillada de Carne para 2 PAX", qty: 1, price: 43.00, notes: "Carne jugosa" },
      { id: "e1_hue", name: "Huevos Rotos Ecológicos con Torreznos", qty: 1, price: 16.00 }
    ],
    total: 59.00,
    status: "ready",
    elapsedMinutes: 22
  }
];

class AppStore {
  constructor() {
    this.subscribers = [];
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          presetId: (parsed.presetId && RESTAURANT_PRESETS[parsed.presetId]) ? parsed.presetId : 'estilo1',
          currentView: parsed.currentView || 'menu',
          cart: parsed.cart || [],
          orders: (parsed.orders && parsed.orders.length > 0) ? parsed.orders : INITIAL_DEMO_ORDERS,
          reservations: parsed.reservations || [],
          dishSales: parsed.dishSales || INITIAL_DISH_SALES,
          activeCategory: 'all',
          activeAllergenFilter: null,
          activeAllergenFilters: []
        };
      }
    } catch (e) {
      console.warn("Could not read local state, fallback to initial", e);
    }

    return {
      presetId: 'estilo1',
      currentView: 'menu',
      cart: [],
      orders: INITIAL_DEMO_ORDERS,
      reservations: [],
      dishSales: { ...INITIAL_DISH_SALES },
      activeCategory: 'all',
      activeAllergenFilter: null,
      activeAllergenFilters: []
    };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        presetId: this.state.presetId,
        currentView: this.state.currentView,
        cart: this.state.cart,
        orders: this.state.orders,
        reservations: this.state.reservations,
        dishSales: this.state.dishSales
      }));
    } catch (e) {
      console.warn("Could not save state", e);
    }
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.state));
  }

  getPreset() {
    return RESTAURANT_PRESETS[this.state.presetId] || RESTAURANT_PRESETS.estilo1;
  }

  setPreset(presetId) {
    if (RESTAURANT_PRESETS[presetId]) {
      this.state.presetId = presetId;
      this.state.cart = [];
      this.state.activeCategory = 'all';
      this.state.activeAllergenFilter = null;
      this.state.activeAllergenFilters = [];
      this.save();
    }
  }

  setView(viewName) {
    this.state.currentView = viewName;
    this.save();
  }

  setCategory(cat) {
    this.state.activeCategory = cat;
    this.notify();
  }

  toggleAllergenFilter(allergen) {
    if (!this.state.activeAllergenFilters) {
      this.state.activeAllergenFilters = [];
    }
    const idx = this.state.activeAllergenFilters.indexOf(allergen);
    if (idx > -1) {
      this.state.activeAllergenFilters.splice(idx, 1);
    } else {
      this.state.activeAllergenFilters.push(allergen);
    }
    this.state.activeAllergenFilter = this.state.activeAllergenFilters[0] || null;
    this.notify();
  }

  clearAllergenFilters() {
    this.state.activeAllergenFilters = [];
    this.state.activeAllergenFilter = null;
    this.notify();
  }

  setAllergenFilter(allergen) {
    this.toggleAllergenFilter(allergen);
  }

  // --- LÓGICA EN TIEMPO REAL DEL PLATO MÁS PEDIDO ---
  getDishSalesCount(dishId) {
    return this.state.dishSales[dishId] || 15;
  }

  getMostOrderedDish() {
    const preset = this.getPreset();
    let topDish = preset.menu[0];
    let maxCount = -1;

    preset.menu.forEach(dish => {
      const count = this.getDishSalesCount(dish.id);
      if (count > maxCount) {
        maxCount = count;
        topDish = dish;
      }
    });

    return {
      dish: topDish,
      count: maxCount
    };
  }

  incrementDishSale(dishId, qty = 1) {
    if (!this.state.dishSales[dishId]) {
      this.state.dishSales[dishId] = 15;
    }
    this.state.dishSales[dishId] += qty;
    this.save();
  }

  // Carrito
  addToCart(item, notes = "", qty = 1) {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += qty;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: qty
      });
    }
    this.save();
  }

  removeFromCart(index) {
    if (this.state.cart[index]) {
      this.state.cart.splice(index, 1);
      this.save();
    }
  }

  updateCartQty(index, delta) {
    if (this.state.cart[index]) {
      this.state.cart[index].qty += delta;
      if (this.state.cart[index].qty <= 0) {
        this.state.cart.splice(index, 1);
      }
      this.save();
    }
  }

  clearCart() {
    this.state.cart = [];
    this.save();
  }

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getCartItemCount() {
    return this.state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  // Creación de comanda
  createOrder(orderData) {
    const items = [...this.state.cart];
    
    // Incrementar en tiempo real las ventas de cada plato
    items.forEach(item => {
      this.incrementDishSale(item.id, item.qty);
    });

    const newOrder = {
      id: `ORD-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: orderData.type || 'mesa',
      tableNumber: orderData.tableNumber || 'Mesa 1',
      customerName: orderData.customerName || 'Comensal',
      customerPhone: orderData.customerPhone || '',
      items: items,
      total: this.getCartTotal(),
      status: 'pending',
      elapsedMinutes: 0
    };

    this.state.orders.unshift(newOrder);
    this.clearCart();
    this.save();
    return newOrder;
  }

  updateOrderStatus(orderId, nextStatus) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = nextStatus;
      this.save();
    }
  }

  addReservation(reservationData) {
    const reservation = {
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      ...reservationData
    };
    this.state.reservations.unshift(reservation);
    this.save();
    return reservation;
  }

  resetDemo() {
    this.state.orders = INITIAL_DEMO_ORDERS;
    this.state.cart = [];
    this.state.reservations = [];
    this.state.dishSales = { ...INITIAL_DISH_SALES };
    this.save();
  }
}

const store = new AppStore();
if (typeof window !== "undefined") window.store = store;


/**
 * DevCorp Solutions - GastroSuite SPA Controller
 * Ecosistema de 4 Estilos Gastronómicos 100% Diferenciados
 * Logo ampliado · Lightbox de fotos completas · Filtros de alérgenos en todos los estilos
 * Reseñas de Google llamativas con estrellas y botones de alta conversión en todos los estilos
 */




// Iconografía SVG ligera optimizada
const ICONS = {
  cart: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
  star: `<svg class="w-4 h-4 text-amber-400 inline-block fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`,
  arrow: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`,
  external: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  eye: `<svg class="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
  zoom: `<svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>`,
  google: `<svg class="w-4 h-4 inline-block flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/></svg>`,
  whatsapp: `<svg class="w-4 h-4 inline-block flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  mail: `<svg class="w-4 h-4 inline-block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};

function formatCurrency(val) {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);
}

const VUKATA_ALLERGENS = {
  apio: {
    id: "apio",
    name: "Apio",
    color: "#68b828",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2C10.5 2 9.5 3.5 10 5c.3 1 .9 2 1 3-1.5-.5-3-1.5-4-1-1.2.6-1 2.2 0 3.2 1 1 2.5 1.5 4 1.5-1 1-2.5 2-2.8 3.5-.3 1.5.5 2.5 1.8 2.5.5 0 1-.2 1.5-.5-.2 1.2.2 2.3 1.2 2.8.8.4 1.8.2 2.3-.5.4-.6.5-1.5.5-2.5 1 .5 2.2.3 2.8-.5.6-.8.4-1.8-.2-2.4-1-.9-2.2-1.4-3.3-1.6 1.2-.8 2.5-1.8 2.8-3.2.4-1.5-.5-2.8-2-2.8-.5 0-1 .2-1.5.5.2-1.2-.1-2.4-1-3.2-.8-.7-1.8-1-2.8-1zM11 9c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1s-1-.4-1-1V10c0-.6.4-1 1-1z"/></svg>`
  },
  mostaza: {
    id: "mostaza",
    name: "Mostaza",
    color: "#cca038",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M18.5 7.5c-.8-1.5-2.5-2.5-4.5-2.5h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v2H9c-2.5 0-4.5 1.8-4.5 4 0 1.2.6 2.3 1.5 3.1L5 19c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3l-1-6.9c.9-.8 1.5-1.9 1.5-3.1 0-.6-.4-1.1-.9-1.3zM14 12c-1.1 0-2-.9-2-2 0-.6-.4-1-1-1s-1 .4-1 1c0 2.2 1.8 4 4 4 .6 0 1-.4 1-1s-.4-1-1-1z"/></svg>`
  },
  sesamo: {
    id: "sesamo",
    name: "Granos de Sésamo",
    color: "#9e9e9e",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M8 7c0 1.7 1.3 3 3 3s3-1.3 3-3c0-2-3-5-3-5s-3 3-3 5zm-3 8c0 1.4 1.1 2.5 2.5 2.5S10 16.4 10 15c0-1.7-2.5-4.2-2.5-4.2S5 13.3 5 15zm9 0c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.7-2.5-4.2-2.5-4.2s-2.5 2.5-2.5 4.2z"/></svg>`
  },
  gluten: {
    id: "gluten",
    name: "Gluten",
    color: "#d97746",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2c-.4 1.8-1.8 3.2-3.6 3.6 1.8.4 3.2 1.8 3.6 3.6.4-1.8 1.8-3.2 3.6-3.6-1.8-.4-3.2-1.8-3.6-3.6zm0 7.2c-.5 1.8-1.9 3.2-3.7 3.6 1.8.4 3.2 1.8 3.7 3.6.5-1.8 1.9-3.2 3.7-3.6-1.8-.4-3.2-1.8-3.7-3.6zm-1 9.8v3h2v-3c2-.5 3.5-2 4-4-1.8-.4-3.2-1.8-3.6-3.6-.4 1.8-1.8 3.2-3.6 3.6.5 2 2 3.5 4 4h-2.8z"/></svg>`
  },
  crustaceos: {
    id: "crustaceos",
    name: "Crustáceos",
    color: "#29b6f6",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M21 10.5c-1-1.5-2.8-2.3-4.5-2.1.8-1.3.8-3-.2-4.1-1.2-1.3-3.2-1.3-4.3 0-1.1-1.3-3.1-1.3-4.3 0-1 1.1-1 2.8-.2 4.1-1.7-.2-3.5.6-4.5 2.1-1.1 1.7-.8 3.9.7 5.2l.8.7C4.2 17.5 5 19 6 20c.5.5 1.3.6 1.9.2.7-.4.9-1.2.6-1.9-.5-.9-.9-2-.8-3.1 1.3 1.1 3 1.8 4.8 1.8s3.5-.7 4.8-1.8c.1 1.1-.3 2.2-.8 3.1-.3.7-.1 1.5.6 1.9.6.4 1.4.3 1.9-.2 1-1 1.8-2.5 1.5-3.6l.8-.7c1.5-1.3 1.8-3.5.7-5.2zM7.5 6.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zm9 1.4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"/></svg>`
  },
  huevos: {
    id: "huevos",
    name: "Huevos",
    color: "#fb8c00",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3C9 3 6.5 7.5 6.5 12.5 6.5 17 9 20.5 12 20.5s5.5-3.5 5.5-8C17.5 7.5 15 3 12 3zm-6 8c-2 0-3.5 2.5-3.5 5.5S4 21 6 21s3.5-2 3.5-4.5-1.5-5.5-3.5-5.5zm12 0c-2 0-3.5 3-3.5 5.5s1.5 4.5 3.5 4.5 3.5-2 3.5-4.5-1.5-5.5-3.5-5.5z"/></svg>`
  },
  pescado: {
    id: "pescado",
    name: "Pescado",
    color: "#283593",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M22 12c-3.5 3-7.5 4.5-12 4.5 2-1.5 3-3 3-4.5s-1-3-3-4.5c4.5 0 8.5 1.5 12 4.5zm-15 4c-1.5 0-3-.5-4.5-1.5L1 15l1.5-3L1 9l1.5.5C4 8.5 5.5 8 7 8l2 4-2 4zm1.5-5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"/></svg>`
  },
  frutos_cascara: {
    id: "frutos_cascara",
    name: "Frutos de Cáscara",
    color: "#b71c1c",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3C8 3 4.5 6.5 4.5 11c0 5 4 9.5 7.5 10 3.5-.5 7.5-5 7.5-10 0-4.5-3.5-8-7.5-8zm0 2.5c2.8 0 5 3 5 6.5 0 3.8-3.2 7.2-5 7.5-1.8-.3-5-3.7-5-7.5 0-3.5 2.2-6.5 5-6.5zm-1 2v9c-1.5-.5-3-2.5-3-4.5 0-2.2 1.5-4 3-4.5zm2 0c1.5.5 3 2.3 3 4.5 0 2-1.5 4-3 4.5V7.5z"/></svg>`
  },
  lacteos: {
    id: "lacteos",
    name: "Lácteos",
    color: "#4e342e",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M10 2h4v2h-4V2zm4 3l1 3H9l1-3h4zm2.5 4.5L16 20c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2L7.5 9.5C6.6 9.8 6 10.7 6 11.7V17c0 1.7 1.3 3 3 3h.5l-.5 2H8c-2.8 0-5-2.2-5-5v-5.3c0-2.2 1.5-4.1 3.7-4.6l.8-2.6C7.8 4.2 8.8 3.5 10 3.5h4c1.2 0 2.2.7 2.5 1.9l.8 2.6c2.2.5 3.7 2.4 3.7 4.6V17c0 2.8-2.2 5-5 5h-1l-.5-2h.5c1.7 0 3-1.3 3-3v-5.3c0-1-.6-1.9-1.5-2.2z"/></svg>`
  },
  soja: {
    id: "soja",
    name: "Soja",
    color: "#00a651",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3c-4.5 0-8 3.5-8 8 0 3.5 2.5 6.5 6 7.5V21h4v-2.5c3.5-1 6-4 6-7.5 0-4.5-3.5-8-8-8zm-2 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm4-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>`
  },
  cacahuete: {
    id: "cacahuete",
    name: "Cacahuete",
    color: "#c69255",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M15.5 3.5c-1.8 0-3.3 1.1-4 2.6-.7-.8-1.7-1.4-2.8-1.4-2.2 0-4 1.8-4 4 0 1.2.5 2.3 1.4 3-.9.7-1.4 1.8-1.4 3 0 2.2 1.8 4 4 4 1.1 0 2.1-.5 2.8-1.4.7 1.5 2.2 2.6 4 2.6 2.5 0 4.5-2 4.5-4.5 0-1.5-.7-2.8-1.8-3.6 1.1-.8 1.8-2.1 1.8-3.6 0-2.5-2-4.7-4.5-4.7zm-2 9.5c-.8.8-2 .8-2.8 0-.4-.4-.6-.9-.6-1.5s.2-1.1.6-1.5c.8-.8 2-.8 2.8 0 .8.8.8 2.2 0 3z"/></svg>`
  },
  altramuces: {
    id: "altramuces",
    name: "Altramuces",
    color: "#ffca28",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-5 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm10 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/></svg>`
  },
  moluscos: {
    id: "moluscos",
    name: "Moluscos",
    color: "#4fc3f7",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 3C6.5 3 2 7.5 2 13c0 3.5 1.8 6.5 4.5 8.2l1.2-2.5C5.8 17.5 5 15.5 5 13.5c0-4 3.1-7.5 7-7.5s7 3.5 7 7.5c0 2-.8 4-2.7 5.2l1.2 2.5c2.7-1.7 4.5-4.7 4.5-8.2 0-5.5-4.5-10-10-10zm-1 16.5h2v2.5h-2zM9 13c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2-3 5-3 5s-3-3-3-5z"/></svg>`
  },
  sulfitos: {
    id: "sulfitos",
    name: "Dióxido de Azufre y Sulfitos",
    color: "#7b1fa2",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 2l7 4v8l-7 4-7-4V6l7-4zm0 2.3L6.5 7.5v6.9l5.5 3.2 5.5-3.2V7.5L12 4.3zM10.2 9h3.6v1.4h-2.2v1.2h1.9v1.3h-1.9v1.4h2.3V16h-3.7V9zm-3.5 2.8h1.8v1.4H6.7v-1.4z"/></svg>`
  }
};

const ALLERGEN_ALIAS = {
  lactosa: 'lacteos',
  huevo: 'huevos',
  cacahuetes: 'cacahuete',
  marisco: 'crustaceos',
  frutos_secos: 'frutos_cascara'
};

function getAllergenDef(code) {
  if (!code) return null;
  const normalized = ALLERGEN_ALIAS[code] || code;
  return VUKATA_ALLERGENS[normalized] || {
    id: normalized,
    name: normalized.charAt(0).toUpperCase() + normalized.slice(1),
    color: '#64748b',
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9"/></svg>`
  };
}

function renderAllergenBadge(code, size = 'sm', showLabel = false) {
  const def = getAllergenDef(code);
  if (!def) return '';

  const sizeClasses = {
    xs: { pill: 'w-4 h-4', icon: 'w-2.5 h-2.5', text: 'text-[9px]' },
    sm: { pill: 'w-5 h-5', icon: 'w-3 h-3', text: 'text-[11px]' },
    md: { pill: 'w-7 h-7', icon: 'w-4 h-4', text: 'text-xs' },
    lg: { pill: 'w-9 h-9', icon: 'w-5 h-5', text: 'text-sm' }
  }[size] || { pill: 'w-5 h-5', icon: 'w-3 h-3', text: 'text-xs' };

  if (showLabel) {
    return `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white shadow-sm" style="background-color: ${def.color};" title="${def.name}">
        <span class="${sizeClasses.icon} flex items-center justify-center flex-shrink-0">${def.svg}</span>
        <span class="${sizeClasses.text} font-bold uppercase tracking-wider">${def.name}</span>
      </span>
    `;
  }

  return `
    <span class="vukata-allergen-pill ${sizeClasses.pill}" style="background-color: ${def.color};" title="Contiene ${def.name}">
      <span class="${sizeClasses.icon} flex items-center justify-center flex-shrink-0">${def.svg}</span>
    </span>
  `;
}

function renderAllergenBadges(allergenList, size = 'sm') {
  if (!allergenList || !Array.isArray(allergenList) || allergenList.length === 0) return '';
  return `
    <div class="inline-flex items-center gap-1 flex-wrap align-middle" title="Alérgenos presentes">
      ${allergenList.map(code => renderAllergenBadge(code, size)).join('')}
    </div>
  `;
}

function renderVukataAllergenLegend() {
  const allergens = Object.values(VUKATA_ALLERGENS);
  return `
    <div class="mt-14 border-t-2 border-[#8B1E1E]/20 bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm">
      <div class="text-center max-w-2xl mx-auto mb-8">
        <div class="inline-flex items-center space-x-2 text-[#8B1E1E] mb-1">
          <span class="text-sm font-bold tracking-widest uppercase">Directiva Oficial Europea</span>
        </div>
        <h4 class="vukata-font-title text-base sm:text-xl text-[#8B1E1E]">Información de Alérgenos de Nuestra Carta</h4>
        <p class="text-xs text-stone-600 mt-1">
          Reglamento (UE) Nº 1169/2011 sobre alérgenos e ingredientes alimentarios.
        </p>
      </div>

      <!-- Cuadrícula de 14 alérgenos idéntica a la portada de la carta física de Vukata -->
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 justify-items-center">
        ${allergens.map(a => `
          <button data-allergen="${a.id}" class="flex flex-col items-center text-center group cursor-pointer p-2.5 rounded-xl hover:bg-stone-100 transition-all w-full border border-stone-100 hover:border-stone-300" title="Filtrar platos con ${a.name}">
            <span class="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110 flex-shrink-0" style="background-color: ${a.color};">
              <span class="w-5 h-5 flex items-center justify-center">${a.svg}</span>
            </span>
            <span class="text-[10px] sm:text-[11px] font-bold text-stone-700 uppercase tracking-tight mt-2 leading-tight group-hover:text-[#8B1E1E]">
              ${a.name}
            </span>
          </button>
        `).join('')}
      </div>

      <div class="mt-8 pt-6 border-t border-stone-200 text-center space-y-1.5 text-xs text-stone-600">
        <p class="font-bold text-stone-800 text-sm">Todos los precios de nuestra carta incluyen el Iva. Los platos se mantendrán hasta fin de existencias.</p>
        <p class="text-[#8B1E1E] font-medium">Consulte siempre a nuestro personal sobre los alérgenos y opciones para intolerancias.</p>
      </div>
    </div>
  `;
}

function getAllergenLabel(code) {
  const def = getAllergenDef(code);
  return def ? def.name : code;
}

class GastroApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.modalQty = 1;
    this.currentModalDish = null;
    this.menuMode = 'cards';
    this.init();
  }

  init() {
    store.subscribe(() => {
      this.render();
    });
    this.setupGlobalEvents();
    this.render();
  }

  setupGlobalEvents() {
    // Tecla Escape para cerrar modales y lightbox
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('lightbox-container');
        if (lb && lb.innerHTML !== '') {
          lb.innerHTML = '';
          return;
        }
        const dm = document.getElementById('dish-modal-container');
        if (dm && dm.innerHTML !== '') {
          dm.innerHTML = '';
          this.currentModalDish = null;
          this.modalQty = 1;
          return;
        }
        const cart = document.getElementById('cart-drawer-container');
        if (cart && cart.innerHTML !== '') {
          cart.innerHTML = '';
          return;
        }
        const chk = document.getElementById('checkout-modal-container');
        if (chk && chk.innerHTML !== '') {
          chk.innerHTML = '';
          return;
        }
        const rev = document.getElementById('review-modal-container');
        if (rev && rev.innerHTML !== '') {
          rev.innerHTML = '';
          return;
        }
      }
    });

    document.addEventListener('click', (e) => {
      // 0. CERRAR MODAL DETALLE DEL PLATO (Prioridad máxima: botón X o clic directo en fondo exterior)
      if (e.target.closest('#close-dish-modal') || e.target.id === 'dish-modal-backdrop') {
        e.preventDefault();
        e.stopPropagation();
        const modalContainer = document.getElementById('dish-modal-container');
        if (modalContainer) modalContainer.innerHTML = '';
        this.currentModalDish = null;
        this.modalQty = 1;
        return;
      }

      // 0.1 Cantidad dentro del Modal de Detalle (evita cerrar el modal y no propaga)
      const modalMinus = e.target.closest('[data-modal-qty-minus]');
      if (modalMinus) {
        e.preventDefault();
        e.stopPropagation();
        if (this.modalQty > 1) {
          this.modalQty -= 1;
          const qtyElem = document.getElementById('modal-dish-qty-val');
          if (qtyElem) qtyElem.innerText = this.modalQty;
        }
        return;
      }
      const modalPlus = e.target.closest('[data-modal-qty-plus]');
      if (modalPlus) {
        e.preventDefault();
        e.stopPropagation();
        this.modalQty += 1;
        const qtyElem = document.getElementById('modal-dish-qty-val');
        if (qtyElem) qtyElem.innerText = this.modalQty;
        return;
      }

      // 0.2 Añadir al carrito desde el Modal de Detalle
      const modalAddBtn = e.target.closest('[data-modal-add-cart]');
      if (modalAddBtn && this.currentModalDish) {
        e.preventDefault();
        e.stopPropagation();
        const dish = this.currentModalDish;
        store.addToCart(dish, "", this.modalQty);
        this.showToast(`✓ ${dish.name} (x${this.modalQty}) añadido a la comanda`);
        const modalContainer = document.getElementById('dish-modal-container');
        if (modalContainer) modalContainer.innerHTML = '';
        this.currentModalDish = null;
        this.modalQty = 1;
        return;
      }

      // 0.3 Modo de vista de Carta (Tarjetas con foto vs Lista Rápida Completa)
      const modeBtn = e.target.closest('[data-menu-mode]');
      if (modeBtn) {
        e.preventDefault();
        this.menuMode = modeBtn.getAttribute('data-menu-mode');
        this.render();
        return;
      }

      // 0.4 Lightbox de imagen a pantalla completa (Abrir / Cerrar)
      const lbBtn = e.target.closest('[data-open-lightbox]');
      if (lbBtn) {
        e.preventDefault();
        e.stopPropagation();
        const imgUrl = lbBtn.getAttribute('data-open-lightbox');
        const imgTitle = lbBtn.getAttribute('data-lightbox-title') || 'Plato';
        if (imgUrl) {
          this.renderLightbox(imgUrl, imgTitle);
        }
        return;
      }
      if (e.target.closest('#close-lightbox-btn') || e.target.id === 'lightbox-backdrop') {
        e.preventDefault();
        e.stopPropagation();
        const lbContainer = document.getElementById('lightbox-container');
        if (lbContainer) lbContainer.innerHTML = '';
        return;
      }

      // 0.9 Manejador de navegación por anclas suaves (#el-asador, #especialidades, #carta-section, etc.)
      const anchorLink = e.target.closest('a[href^="#"]');
      if (anchorLink) {
        const hash = anchorLink.getAttribute('href');
        if (hash && hash.length > 1) {
          if (store.state.view !== 'menu') {
            store.setView('menu');
            setTimeout(() => {
              const target = document.querySelector(hash);
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }, 80);
          } else {
            const target = document.querySelector(hash);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }

      // 1. Cambio de vistas
      const viewBtn = e.target.closest('[data-view]');
      if (viewBtn) {
        e.preventDefault();
        store.setView(viewBtn.getAttribute('data-view'));
        return;
      }

      // 1.9 Manejador de filtros por píldora de categoría en subnav Stitch
      const catPill = e.target.closest('.cat-filter');
      if (catPill) {
        e.preventDefault();
        const cat = catPill.getAttribute('data-cat');
        if (cat === 'all') {
          store.setCategory('all');
        } else {
          const preset = store.getPreset();
          const match = preset.categories.find(c => c.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(c.toLowerCase()));
          store.setCategory(match || cat);
        }
        return;
      }

      // 2. Filtro de categorías
      const catBtn = e.target.closest('[data-category]');
      if (catBtn) {
        e.preventDefault();
        store.setCategory(catBtn.getAttribute('data-category'));
        return;
      }

      // 3. Filtro de alérgenos (Activo en todos los estilos con multiselección toggle y limpiar)
      const allergenBtn = e.target.closest('[data-allergen]');
      if (allergenBtn) {
        e.preventDefault();
        store.toggleAllergenFilter(allergenBtn.getAttribute('data-allergen'));
        return;
      }

      const clearAllergensBtn = e.target.closest('[data-clear-allergens]');
      if (clearAllergensBtn) {
        e.preventDefault();
        store.clearAllergenFilters();
        return;
      }

      // 4. Modal Detalle del Plato (Abrir)
      const openDishBtn = e.target.closest('[data-open-dish-modal]');
      if (openDishBtn) {
        e.preventDefault();
        const dishId = openDishBtn.getAttribute('data-open-dish-modal');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          this.renderDishDetailModal(dish, preset);
        }
        return;
      }

      // 5. Añadir plato al carrito directamente desde la tarjeta
      const addCartBtn = e.target.closest('[data-add-cart]');
      if (addCartBtn) {
        e.preventDefault();
        const dishId = addCartBtn.getAttribute('data-add-cart');
        const preset = store.getPreset();
        const dish = preset.menu.find(d => d.id === dishId);
        if (dish) {
          store.addToCart(dish);
          this.showToast(`✓ ${dish.name} añadido a la comanda`);
        }
        return;
      }

      // 6. Simular venta (+1 pedido para probar rotación en tiempo real)
      const simBtn = e.target.closest('[data-quick-simulate-dish]');
      if (simBtn) {
        e.preventDefault();
        const dishId = simBtn.getAttribute('data-quick-simulate-dish');
        store.incrementDishSale(dishId, 1);
        this.showToast(`+1 Venta simulada para estadísticas en vivo`);
        return;
      }

      // 7. Carrito Drawer (Abrir / Cerrar)
      if (e.target.closest('#open-cart-btn') || e.target.closest('#mobile-cart-btn')) {
        this.renderCartDrawer(true);
        return;
      }
      if (e.target.closest('#close-cart-btn') || e.target.closest('#cart-backdrop')) {
        this.renderCartDrawer(false);
        return;
      }

      // 8. Cantidades Carrito
      const plusBtn = e.target.closest('[data-cart-plus]');
      if (plusBtn) {
        store.updateCartQty(parseInt(plusBtn.getAttribute('data-cart-plus')), 1);
        this.renderCartDrawer(true);
        return;
      }
      const minusBtn = e.target.closest('[data-cart-minus]');
      if (minusBtn) {
        store.updateCartQty(parseInt(minusBtn.getAttribute('data-cart-minus')), -1);
        this.renderCartDrawer(true);
        return;
      }
      const removeBtn = e.target.closest('[data-cart-remove]');
      if (removeBtn) {
        store.removeFromCart(parseInt(removeBtn.getAttribute('data-cart-remove')));
        this.renderCartDrawer(true);
        return;
      }

      // 9. Checkout Modal
      if (e.target.closest('#open-checkout-modal-btn')) {
        this.renderCartDrawer(false);
        this.renderCheckoutModal();
        return;
      }
      if (e.target.closest('#close-checkout-modal') || e.target.id === 'checkout-modal-backdrop') {
        const container = document.getElementById('checkout-modal-container');
        if (container) container.innerHTML = '';
        return;
      }

      // 10. Reseñas Modal
      if (e.target.closest('#open-smart-review-btn')) {
        this.renderSmartReviewModal(store.getPreset());
        return;
      }
      // 11. Toggle de panel de alérgenos
      if (e.target.closest('#toggle-allergens')) {
        e.preventDefault();
        const box = document.getElementById('allergen-box');
        if (box) box.classList.toggle('hidden');
        return;
      }
    });

    // Manejador del formulario de reserva rápida directa en página de Estilo 1
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'reservas-direct-form') {
        e.preventDefault();
        const nameInput = document.getElementById('direct-res-name');
        const phoneInput = document.getElementById('direct-res-phone');
        const guestsInput = document.getElementById('direct-res-guests');
        const dateInput = document.getElementById('direct-res-date');
        const shiftInput = document.getElementById('direct-res-shift');
        
        const name = nameInput ? nameInput.value : 'Comensal';
        const phone = phoneInput ? phoneInput.value : '';
        const guests = guestsInput ? guestsInput.value : '2 Comensales';
        const date = dateInput ? dateInput.value : '';
        const shift = shiftInput ? shiftInput.value : '14:00';

        store.addReservation({
          customerName: name,
          customerPhone: phone,
          guests: guests,
          date: date,
          turn: shift
        });

        this.showToast(`✓ ¡Reserva confirmada en Parrilla Vukata para ${name} (${guests}, ${shift})!`);
        e.target.reset();
      }
    });
  }

  showToast(message) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 border border-slate-700 transition-all transform duration-300';
    toast.innerHTML = `<span>✓</span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  render() {
    const preset = store.getPreset();
    const currentView = store.state.currentView;
    const cartCount = store.getCartItemCount();

    // Actualizar clases base para evitar cualquier destello blanco en scroll
    document.documentElement.className = `min-h-screen ${preset.themeClass}`;
    document.body.className = `min-h-screen flex flex-col font-sans antialiased ${preset.themeClass}`;

    // Color de barra de estado móvil nativa
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      const bgMap = {
        estilo1: '#f3f4f6',
        estilo2: '#070a13',
        estilo3: '#f6f3eb',
        estilo4: '#fafafa'
      };
      metaTheme.setAttribute('content', bgMap[preset.id] || '#0e1b33');
    }

    // Renderizar la cabecera correspondiente al estilo activo
    const headerHtml = this.renderHeaderForStyle(preset, currentView, cartCount);

    // Renderizar el footer correspondiente al estilo activo
    const footerHtml = this.renderFooterForStyle(preset);

    this.appContainer.innerHTML = `
      ${headerHtml}

      <!-- CONTENEDOR PRINCIPAL -->
      ${preset.id === 'estilo1' ? `
        <!-- CONTENEDOR PRINCIPAL ESTILO 1 (FULL WIDTH STITCH) -->
        <main class="w-full pt-20 bg-surface flex-1">
          <div id="view-content" class="flex flex-col w-full"></div>
        </main>
      ` : `
        <!-- CONTENEDOR PRINCIPAL ESTILOS 2, 3 Y 4 -->
        <main class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full">
          <div id="view-content"></div>
        </main>
      `}

      <!-- CONTENEDORES DE MODALES TEMÁTICOS Y LIGHTBOX -->
      <div id="lightbox-container"></div>
      <div id="dish-modal-container"></div>
      <div id="cart-drawer-container"></div>
      <div id="checkout-modal-container"></div>
      <div id="review-modal-container"></div>

      ${footerHtml}
    `;

    // Selector de Estilos (Estilo 1, Estilo 2, Estilo 3, Estilo 4)
    const styleSelect = document.getElementById('style-select');
    if (styleSelect) {
      styleSelect.addEventListener('change', (e) => {
        store.setPreset(e.target.value);
      });
    }

    // Renderizar la vista activa
    const content = document.getElementById('view-content');
    if (currentView === 'menu') {
      this.renderMenuView(content, preset);
    } else if (currentView === 'reservations') {
      this.renderReservationsView(content, preset);
    } else if (currentView === 'kds') {
      this.renderKdsView(content, preset);
    } else if (currentView === 'metrics') {
      this.renderMetricsView(content, preset);
    } else if (currentView === 'roi') {
      this.renderRoiView(content, preset);
    }
  }

  // =========================================================================
  // LIGHTBOX INTERACTIVO A PANTALLA COMPLETA
  // =========================================================================
  renderLightbox(imageUrl, title) {
    const container = document.getElementById('lightbox-container');
    if (!container) return;

    container.innerHTML = `
      <div id="lightbox-backdrop" class="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-3 sm:p-6 transition-all">
        
        <!-- Botón de Cerrar en Esquina Superior -->
        <button id="close-lightbox-btn" class="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl font-bold transition-all border border-white/20 z-10" title="Cerrar (Esc)">
          ✕
        </button>

        <!-- Contenedor de la Fotografía Completa (Sin recorte) -->
        <div class="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
          <img src="${imageUrl}" alt="${title}" class="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10 select-none"/>
          
          <div class="mt-4 text-center px-4">
            <h3 class="text-white text-base sm:text-xl font-bold tracking-wide">${title}</h3>
            <span class="text-stone-400 text-xs mt-1 block">Fotografía completa en alta resolución · Pulsa fuera o pulsa la cruz para volver</span>
          </div>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // CABECERAS DIFERENCIADAS CON LOGO DEVCORP MÁS GRANDE Y LEGIBLE
  // =========================================================================
  renderHeaderForStyle(preset, currentView, cartCount) {
    const kdsPending = store.state.orders.filter(o => o.status !== 'served').length;

    // Selector HTML estándar adaptado a la estética de cada estilo
    const selectorHtml = `
      <select id="style-select" class="text-xs font-semibold rounded-xl py-2 px-3 focus:outline-none focus:ring-2 transition-all cursor-pointer shadow-sm ${
        preset.id === 'estilo1' ? 'bg-white text-stone-900 border-2 border-[#8B1E1E]/40 focus:ring-[#8B1E1E]' :
        preset.id === 'estilo2' ? 'bg-slate-900 text-sky-300 border border-slate-700 focus:ring-sky-500' :
        preset.id === 'estilo3' ? 'bg-white text-[#3d3228] border-2 border-[#8c7b6c] focus:ring-[#8c7b6c] font-serif' :
        'bg-white text-zinc-800 border border-zinc-300 focus:ring-zinc-900'
      }">
        <option value="estilo1" ${preset.id === 'estilo1' ? 'selected' : ''}>Estilo 1</option>
        <option value="estilo2" ${preset.id === 'estilo2' ? 'selected' : ''}>Estilo 2</option>
        <option value="estilo3" ${preset.id === 'estilo3' ? 'selected' : ''}>Estilo 3</option>
        <option value="estilo4" ${preset.id === 'estilo4' ? 'selected' : ''}>Estilo 4</option>
      </select>
    `;

    // --- CABECERA ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      return `
        <header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div class="h-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
            
            <!-- Identidad: Logo DevCorp + Logotipo Vukata con KA en rojo -->
            <div class="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
              <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center group" title="DevCorp Solutions">
                <img src="assets/images/logo.png" alt="DevCorp Solutions" class="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"/>
              </a>

              <a href="#el-asador" class="flex items-center gap-2.5 group text-decoration-none border-l border-outline-variant/40 pl-3">
                <span class="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">local_fire_department</span>
                <div class="flex flex-col">
                  <span class="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none font-semibold">VU<span class="text-[#E52D27]">KA</span>TA</span>
                  <span class="font-kicker-eyebrow text-kicker-eyebrow tracking-[0.2em] text-primary uppercase mt-1">ASADOR · PARRILLA</span>
                </div>
              </a>
            </div>

            <!-- Navegación Central Stitch (Cápsula Segmentada) -->
            <nav class="hidden xl:flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.02)] border border-outline-variant/30">
              <a class="px-3.5 py-2 font-label-action text-label-action transition-colors bg-secondary-container text-on-surface font-semibold rounded-full cursor-pointer" href="#el-asador">El Asador</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#especialidades">Especialidades</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#carta-section">Carta &amp; Menú</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#reservas-direct">Reservas</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#reservas-direct">Take away</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#opiniones">Opiniones</a>
              <a class="font-label-action text-label-action text-on-surface-variant hover:text-on-surface px-3.5 py-2 rounded-full transition-colors cursor-pointer" href="#donde-estamos">Dónde estamos</a>
            </nav>

            <!-- Acciones: Selector de Estilos, Botón Reservar y Carrito -->
            <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              ${selectorHtml}

              <a href="#reservas-direct" class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary font-label-action text-label-action px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(156,56,44,0.2)] cursor-pointer">
                <span class="material-symbols-outlined text-[18px]">restaurant</span>
                <span class="hidden sm:inline">Reservar mesa</span>
              </a>

              <button id="open-cart-btn" class="relative inline-flex items-center gap-2 bg-white border border-outline-variant/40 hover:bg-surface-container text-primary px-3.5 py-2 rounded-full font-label-action text-label-action transition-colors shadow-sm cursor-pointer" title="Ver comanda">
                <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span class="font-bold font-mono text-xs sm:text-sm">${formatCurrency(store.getCartTotal())}</span>
                ${cartCount > 0 ? `<span class="bg-primary text-on-primary text-[10px] font-black px-1.5 py-0.5 rounded-full">${cartCount}</span>` : ''}
              </button>
            </div>

          </div>

          <!-- Barra táctil de secciones y módulos DevCorp para móviles y tablets -->
          <div class="xl:hidden bg-surface-container-low border-t border-outline-variant/30 px-4 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-label-action whitespace-nowrap">
            <a href="#el-asador" class="px-3 py-1 rounded-full bg-secondary-container text-on-surface font-semibold">El Asador</a>
            <a href="#especialidades" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Especialidades</a>
            <a href="#carta-section" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Carta</a>
            <a href="#reservas-direct" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Reservas</a>
            <a href="#opiniones" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Opiniones</a>
            <a href="#donde-estamos" class="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface">Ubicación</a>
            <span class="text-outline-variant">|</span>
            <button data-view="kds" class="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">KDS (${kdsPending})</button>
            <button data-view="metrics" class="px-3 py-1 rounded-full text-on-surface-variant">Métricas</button>
            <button data-view="roi" class="px-3 py-1 rounded-full text-on-surface-variant">Rentabilidad</button>
          </div>
        </header>
      `;
    }

    // --- CABECERA ESTILO 2: APP INTERACTIVA & BENTO GRID ---
    if (preset.id === 'estilo2') {
      return `
        <header class="sticky top-0 z-40 bg-[#070a13]/90 backdrop-blur-md text-slate-100 border-b border-slate-800">
          <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20 sm:h-24 py-2 gap-2">
              
              <div class="flex items-center space-x-3 flex-shrink-0">
                <a href="https://devcorpsolutions.com" target="_blank" class="flex-shrink-0 group" title="DevCorp Solutions">
                  <img src="assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow transition-transform group-hover:scale-105"/>
                </a>
                <span class="hidden xl:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
                  ${preset.serviceStatus}
                </span>
              </div>

              <!-- Cápsula Flotante (Segmented Control) -->
              <nav class="hidden lg:flex items-center bento-pill-nav space-x-1.5 text-xs font-semibold">
                <button data-view="menu" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'menu' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Carta Interactiva</button>
                <button data-view="reservations" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'reservations' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Reservas</button>
                <button data-view="kds" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'kds' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">KDS Cocina (${kdsPending})</button>
                <button data-view="metrics" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'metrics' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Métricas</button>
                <button data-view="roi" class="px-3.5 py-1.5 rounded-full transition-all ${currentView === 'roi' ? 'bg-sky-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}">Ahorro 0%</button>
              </nav>

              <div class="flex items-center space-x-2.5 flex-shrink-0">
                ${selectorHtml}
                <button id="open-cart-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow flex items-center space-x-1.5">
                  ${ICONS.cart}
                  <span class="font-mono">${formatCurrency(store.getCartTotal())}</span>
                  ${cartCount > 0 ? `<span class="bg-white text-blue-800 text-[10px] font-black px-1.5 py-0.2 rounded-full">${cartCount}</span>` : ''}
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil táctil con botones redondeados -->
          <nav class="lg:hidden bg-slate-900 border-t border-slate-800 px-2 py-2 overflow-x-auto no-scrollbar flex items-center space-x-2 text-xs font-medium min-w-max">
            <button data-view="menu" class="px-3 py-1.5 rounded-lg ${currentView === 'menu' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Carta</button>
            <button data-view="reservations" class="px-3 py-1.5 rounded-lg ${currentView === 'reservations' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Reservas</button>
            <button data-view="kds" class="px-3 py-1.5 rounded-lg ${currentView === 'kds' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Cocina (${kdsPending})</button>
            <button data-view="metrics" class="px-3 py-1.5 rounded-lg ${currentView === 'metrics' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Métricas</button>
            <button data-view="roi" class="px-3 py-1.5 rounded-lg ${currentView === 'roi' ? 'bg-sky-600 text-white font-bold' : 'text-slate-300'}">Ahorro</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA ---
    if (preset.id === 'estilo3') {
      return `
        <header class="sticky top-0 z-40 bg-[#f6f3eb] text-[#2b2520] border-b-2 border-[#8c7b6c] shadow-sm">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20 sm:h-24 py-2">
              
              <div class="flex items-center space-x-4 flex-shrink-0">
                <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions" class="group">
                  <img src="assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"/>
                </a>
                <div class="hidden sm:block border-l-2 border-[#8c7b6c]/40 pl-3">
                  <span class="font-serif font-bold text-base block text-[#3d3228]">${preset.name}</span>
                  <span class="text-[10px] text-[#7a6b5d] uppercase tracking-wider block font-sans">${preset.neighborhood || 'Madrid'} · Tel. ${preset.phone}</span>
                </div>
              </div>

              <!-- Menú Clásico de Fichero / Pestañas Rectangulares -->
              <nav class="hidden md:flex items-center space-x-1.5 font-serif text-sm font-semibold">
                <button data-view="menu" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'menu' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Carta del Día</button>
                <button data-view="reservations" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'reservations' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Reservar Mesa</button>
                <button data-view="kds" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'kds' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Comandero (${kdsPending})</button>
                <button data-view="metrics" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'metrics' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Caja & Datos</button>
                <button data-view="roi" class="px-3.5 py-2 border-b-2 transition-all ${currentView === 'roi' ? 'border-[#8c7b6c] text-[#1c1510] font-bold bg-[#eee7db]' : 'border-transparent text-[#6b5c4f] hover:text-[#1c1510]'}">Comparativa Comisiones</button>
              </nav>

              <div class="flex items-center space-x-2.5 flex-shrink-0">
                ${selectorHtml}
                <button id="open-cart-btn" class="bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] text-xs font-bold px-3.5 py-2 rounded shadow flex items-center space-x-1.5 font-serif">
                  ${ICONS.cart}
                  <span>Comanda (${cartCount})</span>
                </button>
              </div>

            </div>
          </div>

          <!-- Barra móvil estilo fichero -->
          <nav class="md:hidden bg-[#eee7db] border-t border-[#8c7b6c] px-3 py-2 overflow-x-auto no-scrollbar flex items-center space-x-2.5 text-xs font-serif min-w-max">
            <button data-view="menu" class="px-2.5 py-1.5 rounded ${currentView === 'menu' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Carta</button>
            <button data-view="reservations" class="px-2.5 py-1.5 rounded ${currentView === 'reservations' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Reservas</button>
            <button data-view="kds" class="px-2.5 py-1.5 rounded ${currentView === 'kds' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Comandero (${kdsPending})</button>
            <button data-view="metrics" class="px-2.5 py-1.5 rounded ${currentView === 'metrics' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Caja</button>
            <button data-view="roi" class="px-2.5 py-1.5 rounded ${currentView === 'roi' ? 'bg-[#3d3228] text-white' : 'text-[#3d3228]'}">Comisiones</button>
          </nav>
        </header>
      `;
    }

    // --- CABECERA ESTILO 4: SHOWCASE VISUAL & MINIMALISMO NÓRDICO ---
    return `
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-zinc-900 border-b border-zinc-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20 sm:h-24 py-2">
            
            <a href="https://devcorpsolutions.com" target="_blank" class="flex items-center space-x-3 flex-shrink-0 group" title="DevCorp Solutions">
              <img src="assets/images/logo.png" alt="DevCorp Solutions" class="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"/>
              <span class="text-xs font-medium tracking-widest text-zinc-500 uppercase hidden sm:inline">${preset.name}</span>
            </a>

            <!-- Navegación Minimalista Espaciada -->
            <nav class="hidden md:flex items-center space-x-9 text-xs font-light tracking-widest uppercase">
              <button data-view="menu" class="transition-colors ${currentView === 'menu' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Menú</button>
              <button data-view="reservations" class="transition-colors ${currentView === 'reservations' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Mesa</button>
              <button data-view="kds" class="transition-colors ${currentView === 'kds' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Obrador (${kdsPending})</button>
              <button data-view="metrics" class="transition-colors ${currentView === 'metrics' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Estadísticas</button>
              <button data-view="roi" class="transition-colors ${currentView === 'roi' ? 'text-zinc-900 font-semibold border-b border-zinc-900 pb-1' : 'text-zinc-400 hover:text-zinc-900'}">Rentabilidad</button>
            </nav>

            <div class="flex items-center space-x-3 flex-shrink-0">
              ${selectorHtml}
              <button id="open-cart-btn" class="text-xs font-medium tracking-wide flex items-center space-x-1.5 text-zinc-900 hover:text-zinc-600 bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-lg transition-colors">
                ${ICONS.cart}
                <span>(${cartCount})</span>
              </button>
            </div>

          </div>
        </div>

        <!-- Barra móvil minimalista -->
        <nav class="md:hidden bg-zinc-50 border-t border-zinc-200 px-3 py-2.5 overflow-x-auto no-scrollbar flex items-center space-x-6 text-xs font-light tracking-widest uppercase min-w-max">
          <button data-view="menu" class="${currentView === 'menu' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Menú</button>
          <button data-view="reservations" class="${currentView === 'reservations' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Mesa</button>
          <button data-view="kds" class="${currentView === 'kds' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Obrador (${kdsPending})</button>
          <button data-view="metrics" class="${currentView === 'metrics' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Estadísticas</button>
          <button data-view="roi" class="${currentView === 'roi' ? 'text-zinc-900 font-bold' : 'text-zinc-400'}">Rentabilidad</button>
        </nav>
      </header>
    `;
  }

  // =========================================================================
  // VISTA 1: CARTA DIGITAL (DELEGADOR SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderMenuView(container, preset) {
    const activeCategory = store.state.activeCategory;
    const activeAllergens = (store.state.activeAllergenFilters && Array.isArray(store.state.activeAllergenFilters))
      ? store.state.activeAllergenFilters
      : (store.state.activeAllergenFilter ? [store.state.activeAllergenFilter] : []);
    const topData = store.getMostOrderedDish();

    let filteredMenu = preset.menu;
    if (activeCategory !== 'all') {
      filteredMenu = filteredMenu.filter(d => d.category === activeCategory);
    }
    if (activeAllergens.length > 0) {
      filteredMenu = filteredMenu.filter(d => {
        if (!d.allergens || !Array.isArray(d.allergens)) return true;
        return !d.allergens.some(a => {
          const norm = ALLERGEN_ALIAS[a] || a;
          return activeAllergens.includes(norm) || activeAllergens.includes(a);
        });
      });
    }

    let layoutHtml = '';
    if (preset.id === 'estilo1') {
      layoutHtml = this.renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergens, topData);
    } else if (preset.id === 'estilo2') {
      layoutHtml = this.renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergens, topData);
    } else if (preset.id === 'estilo3') {
      layoutHtml = this.renderEstilo3Layout(preset, filteredMenu, activeCategory, activeAllergens, topData);
    } else {
      layoutHtml = this.renderEstilo4Layout(preset, filteredMenu, activeCategory, activeAllergens, topData);
    }

    const reviewsHtml = preset.id === 'estilo1' ? '' : this.renderGoogleReviewsSection(preset);

    container.innerHTML = `
      ${layoutHtml}
      ${reviewsHtml}
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 1: RESTAURANTE PARRILLA VUKATA (ALUCHE) - EMBER & ASH EDITORIAL (STITCH)
  // PALETA HUESO, BRASA, CARMÍN VUKATA Y TIPOGRAFÍA PLAYFAIR / PLUS JAKARTA SANS
  // -------------------------------------------------------------------------
  renderEstilo1Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    const categoriesToRender = activeCategory === 'all' ? preset.categories : [activeCategory];

    return `
      <!-- HERO SECTION: Atmospheric Dark Ember Hearth (Stitch Redesign) -->
      <section class="relative w-full bg-[#14100E] text-[#f1ede8] overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 rounded-3xl mb-12 shadow-2xl">
        <!-- Embers ambient background overlay -->
        <div class="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#9c382c]/30 via-transparent to-transparent"></div>
        <div class="absolute -right-24 top-1/4 w-96 h-96 rounded-full bg-[#8B1E1E]/10 blur-3xl pointer-events-none"></div>

        <div class="max-w-[1360px] mx-auto px-6 lg:px-10 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            <!-- Hero Content (7 Cols) -->
            <div class="lg:col-span-7 flex flex-col items-start space-y-6">
              <div class="flex items-center gap-3">
                <span class="w-8 h-[2px] bg-[#E52D27]"></span>
                <span class="font-kicker-eyebrow tracking-[0.22em] text-[#ffdad5] uppercase">ALUCHE · MADRID — DESDE 1996</span>
              </div>
              
              <h1 class="font-display-hero text-white tracking-tight">
                La brasa <span class="font-title-italic italic text-[#D49B53] font-normal">no perdona.</span><br/>
                La carne, tampoco.
              </h1>

              <p class="font-body-lg text-[#ddd9d5] max-w-xl leading-relaxed">
                <strong class="text-white font-semibold">VU<span class="text-[#E52D27]">KA</span>TA</strong> es un asador y parrilla al carbón de encina. Elegimos la pieza, maduramos el corte en casa y lo llevamos al punto exacto. Sin atajos, sin gas, sin esconder nada.
              </p>

              <!-- CTAs -->
              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a class="inline-flex items-center gap-2.5 bg-[#9c382c] hover:bg-[#7c2118] text-white font-label-action px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_8px_24px_rgba(156,56,44,0.35)] transform hover:-translate-y-0.5 cursor-pointer" href="#reservas-direct">
                  <span class="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Reservar mesa</span>
                </a>
                <a class="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-label-action px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm cursor-pointer" href="#carta-section">
                  <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span>Pedir para llevar</span>
                </a>
                <a class="inline-flex items-center gap-2 text-[#ddd9d5] hover:text-[#D49B53] font-label-action px-3 py-2 transition-colors cursor-pointer" href="tel:+34915098576">
                  <span class="material-symbols-outlined text-[18px] text-[#D49B53]">call</span>
                  <span>+34 915 09 85 76</span>
                </a>
              </div>
            </div>

            <!-- Hero Focal Media & Live Grill Ambience (5 Cols) -->
            <div class="lg:col-span-5 relative">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-2 border border-white/10">
                <img alt="Corte de carne selecta a las brasas" class="w-full h-[360px] lg:h-[440px] object-cover rounded-xl transform transition-transform duration-700 hover:scale-105" src="assets/images/vukata/chuleton.jpg"/>
                <div class="absolute inset-0 bg-gradient-to-t from-[#14100E] via-transparent to-transparent opacity-80 rounded-xl"></div>
                <div class="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-white/95 backdrop-blur-md p-4 rounded-xl text-[#1c1c19] shadow-lg">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-[#8B1E1E] text-[28px]">local_fire_department</span>
                    <div>
                      <span class="font-kicker-eyebrow text-[10px] uppercase text-[#8B1E1E] tracking-wider block">PARRILLA VIVA</span>
                      <span class="font-headline-sm text-[15px] leading-tight font-semibold text-[#1c1c19]">Carbón de encina extremeño</span>
                    </div>
                  </div>
                  <span class="font-label-action text-[11px] bg-[#e8deda] text-[#1c1c19] px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">En directo</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Highlight Stats Row -->
          <div class="mt-14 pt-8 border-t border-white/10 bg-white/5 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center sm:text-left">
              <div class="flex flex-col">
                <span class="font-stat-number text-white leading-none mb-1">1996</span>
                <span class="font-kicker-eyebrow text-[#ddd9d5] uppercase tracking-[0.16em]">AÑO DE APERTURA</span>
              </div>
              <div class="flex flex-col">
                <span class="font-stat-number text-white leading-none mb-1">40+</span>
                <span class="font-kicker-eyebrow text-[#ddd9d5] uppercase tracking-[0.16em]">DÍAS DE MADURACIÓN</span>
              </div>
              <div class="flex flex-col">
                <span class="font-stat-number text-white leading-none mb-1">100%</span>
                <span class="font-kicker-eyebrow text-[#ddd9d5] uppercase tracking-[0.16em]">CARBÓN DE ENCINA</span>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                  <span class="font-stat-number text-white leading-none">4,8</span>
                  <div class="flex text-[#D49B53]">
                    <span class="material-symbols-outlined text-[22px]">star</span>
                  </div>
                </div>
                <a href="${preset.googleMapsUrl}" target="_blank" class="font-kicker-eyebrow text-[#ddd9d5] hover:text-white uppercase tracking-[0.16em] transition-colors">GOOGLE MAPS · 348 RESEÑAS ↗</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- TICKER MARQUEE RIBBON -->
      <div class="w-full bg-[#e8deda] py-3.5 overflow-hidden shadow-inner flex select-none mb-12 rounded-2xl border border-[#ddc0bb]">
        <div class="flex items-center gap-8 whitespace-nowrap animate-marquee">
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Carbón natural</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Desde 1996</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Brasa de encina</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Maduración propia</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Corte a cuchillo</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Cocina de mercado</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <!-- Duplicate set for seamless continuous loop -->
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Carbón natural</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Desde 1996</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Brasa de encina</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Maduración propia</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Corte a cuchillo</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
          <span class="font-title-italic text-[16px] text-[#1c1c19] italic">Cocina de mercado</span>
          <span class="material-symbols-outlined text-[#8B1E1E] text-[16px]">local_fire_department</span>
        </div>
      </div>

      <!-- FEATURED SHOWCASE DISH: Directo de la Brasa (50/50 Spotlight Card) -->
      <section class="mb-14 w-full">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="w-6 h-[2px] bg-[#8B1E1E]"></span>
              <span class="font-kicker-eyebrow text-[#8B1E1E] uppercase tracking-[0.2em]">DIRECTO DE LA BRASA</span>
            </div>
            <h2 class="font-headline-lg text-[#1c1c19]">Las piezas que la gente vuelve a pedir</h2>
            <p class="font-body-md text-[#57423f] max-w-xl">
              No tenemos una carta enorme. Tenemos pocos platos y cada uno mimado hasta el último segundo sobre la encina.
            </p>
          </div>
          <a class="inline-flex items-center gap-2 text-[#1c1c19] bg-[#f1ede8] hover:bg-[#ebe8e3] px-5 py-2.5 rounded-full font-label-action text-[13px] transition-all" href="#carta-section">
            <span>Ver la carta completa</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <!-- Spotlight 50/50 Card -->
        <div class="bg-[#f7f3ee] rounded-3xl overflow-hidden border border-[#e6dfd5] shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div class="relative lg:col-span-7 min-h-[340px] lg:min-h-[440px]">
            <img alt="${topData.dish.name}" class="w-full h-full object-cover" src="${topData.dish.image || 'assets/images/vukata/asado_tira.jpg'}"/>
            <div class="absolute top-5 left-5">
              <span class="font-kicker-eyebrow text-[10px] uppercase bg-[#8B1E1E] text-white px-3 py-1.5 rounded-full tracking-widest shadow-md">
                LA CASA
              </span>
            </div>
            <button data-open-lightbox="${topData.dish.image || 'assets/images/vukata/asado_tira.jpg'}" data-lightbox-title="${topData.dish.name}" class="absolute bottom-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-xl text-xs backdrop-blur-sm cursor-pointer" title="Ampliar foto">
              ${ICONS.zoom}
            </button>
          </div>

          <div class="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="font-kicker-eyebrow text-[10px] text-[#645d5a] uppercase tracking-[0.2em]">${topData.dish.badge || 'PIEZA 400 G APROX.'}</span>
                ${renderAllergenBadges(topData.dish.allergens, 'sm')}
              </div>
              <h3 class="font-headline-md text-[#1c1c19] font-semibold">${topData.dish.name}</h3>
              <p class="font-body-md text-[#57423f] leading-relaxed">
                ${topData.dish.description}
              </p>
              <div class="grid grid-cols-2 gap-3 pt-2">
                <div class="bg-[#f7f3ee] p-3 rounded-xl">
                  <span class="font-kicker-eyebrow text-[10px] text-[#645d5a] uppercase block">ORIGEN</span>
                  <span class="font-body-sm font-semibold text-[#1c1c19]">Vaca Seleccionada</span>
                </div>
                <div class="bg-[#f7f3ee] p-3 rounded-xl">
                  <span class="font-kicker-eyebrow text-[10px] text-[#645d5a] uppercase block">TÉCNICA</span>
                  <span class="font-body-sm font-semibold text-[#1c1c19]">${topData.dish.prepTime || 'Fuego Lento 45 Min'}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-[#e6dfd5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span class="font-kicker-eyebrow text-[10px] text-[#645d5a] uppercase block">PRECIO RACIÓN</span>
                <span class="font-label-price text-[#8B1E1E] font-bold">${formatCurrency(topData.dish.price)}</span>
              </div>
              <div class="flex items-center gap-2">
                <button data-open-dish-modal="${topData.dish.id}" class="bg-[#f1ede8] hover:bg-[#ebe8e3] text-[#1c1c19] font-label-action text-[13px] px-4 py-2.5 rounded-full transition-all">
                  Ver Detalle
                </button>
                <button data-add-cart="${topData.dish.id}" class="btn-vukata-primary font-label-action text-[13px] px-6 py-2.5 rounded-full flex items-center gap-2">
                  <span class="material-symbols-outlined text-[17px]">restaurant</span>
                  <span>Pedir plato</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- STICKY FILTER SUBNAV & SEARCH -->
      <section class="sticky top-20 z-30 bg-[#fdf9f4]/95 backdrop-blur-md py-4 border-y border-[#e6dfd5] mb-8" id="carta-section">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <!-- Category Pill Carousel -->
          <div class="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none" id="category-pills">
            <button data-category="all" class="cat-filter px-4 py-2 rounded-full font-label-action text-[13px] whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-[#1c1c19] text-white shadow-sm font-semibold' : 'bg-[#f1ede8] hover:bg-[#ebe8e3] text-[#57423f]'}">
              Todos (${preset.menu.length})
            </button>
            ${preset.categories.map(cat => `
              <button data-category="${cat}" class="cat-filter px-4 py-2 rounded-full font-label-action text-[13px] whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-[#1c1c19] text-white shadow-sm font-semibold' : 'bg-[#f1ede8] hover:bg-[#ebe8e3] text-[#57423f]'}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Quick Allergen & View Controls -->
          <div class="flex items-center gap-3 w-full md:w-auto justify-end">
            <button id="toggle-allergens" class="inline-flex items-center gap-1.5 bg-[#f7f3ee] hover:bg-[#f1ede8] text-[#57423f] px-4 py-2 rounded-full font-label-action text-[12px] border border-[#e6dfd5] transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-[16px] text-[#5f3a00]">info</span>
              <span>Info Alérgenos (14 UE)</span>
              ${activeAllergens.length > 0 ? `<span class="bg-[#8B1E1E] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">${activeAllergens.length}</span>` : ''}
            </button>
            
            <div class="flex items-center bg-[#f1ede8] p-1 rounded-full text-[#645d5a]">
              <button data-menu-mode="cards" class="px-3.5 py-1 rounded-full text-xs font-medium transition-all ${this.menuMode !== 'compact' ? 'bg-white text-[#1c1c19] shadow-sm font-bold' : 'text-[#645d5a] hover:text-[#1c1c19]'}">Tarjetas</button>
              <button data-menu-mode="compact" class="px-3.5 py-1 rounded-full text-xs font-medium transition-all ${this.menuMode === 'compact' ? 'bg-white text-[#1c1c19] shadow-sm font-bold' : 'text-[#645d5a] hover:text-[#1c1c19]'}">Lista rápida</button>
            </div>
          </div>

        </div>
      </section>

      <!-- ALLERGENS INFO BANNER & MULTI-SELECT MATRIX (Collapsible via JS) -->
      <div class="${activeAllergens.length > 0 ? '' : 'hidden'} mb-8 w-full transition-all" id="allergen-box">
        <div class="bg-[#ffddb8]/30 border border-[#ddc0bb] p-5 rounded-2xl text-[#2a1700] shadow-sm">
          <div class="flex items-start gap-3">
            <span class="material-symbols-outlined text-[#5f3a00] mt-0.5 text-[24px]">verified_user</span>
            <div class="flex-1">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <p class="font-semibold text-sm">Aviso de intolerancias alimentarias y alérgenos (Reglamento UE 1169/2011)</p>
                ${activeAllergens.length > 0 ? `
                  <button type="button" data-clear-allergens class="text-xs font-bold text-[#8B1E1E] hover:underline cursor-pointer">
                    ✕ Limpiar filtros (${activeAllergens.length})
                  </button>
                ` : ''}
              </div>
              <p class="text-xs text-[#57423f] mt-1 mb-3">
                Disponemos de fichas técnicas para cada preparación sobre brasas. Selecciona cualquier alérgeno para excluir platos de la carta en tiempo real.
              </p>
              <!-- 14 Allergen Pills -->
              <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
                ${Object.values(VUKATA_ALLERGENS).map(a => {
                  const isSelected = activeAllergens.includes(a.id);
                  return `
                    <button type="button" data-allergen="${a.id}" class="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs transition-all border cursor-pointer select-none ${
                      isSelected 
                        ? 'bg-[#8B1E1E] text-white font-bold border-[#8B1E1E] shadow-sm ring-2 ring-red-200' 
                        : 'bg-white hover:bg-[#f7f3ee] text-[#1c1c19] border-[#e6dfd5]'
                    }" title="${isSelected ? 'Quitar filtro de ' + a.name : 'Excluir platos con ' + a.name}">
                      <span class="w-4 h-4 rounded-full flex items-center justify-center text-white flex-shrink-0" style="background-color: ${a.color};">
                        <span class="w-2.5 h-2.5 flex items-center justify-center">${a.svg}</span>
                      </span>
                      <span class="font-medium whitespace-nowrap">${a.name}</span>
                      ${isSelected ? `<span class="text-[10px] font-bold ml-0.5">✕</span>` : ''}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN MENU SHOWCASE CONTAINER -->
      ${this.menuMode === 'compact' ? `
        <!-- VISTA COMPACTA DE LISTA RÁPIDA: TODOS LOS PLATOS Y PRECIOS VISIBLES CON SCROLL -->
        <div class="bg-white border border-[#e6dfd5] rounded-3xl shadow-sm p-6 sm:p-8 mb-16">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e6dfd5] mb-6 gap-2">
            <div>
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#8B1E1E]"></span>
                <h3 class="font-headline-sm text-xl font-bold text-[#1c1c19]">Carta Completa Vukata · Vista de Sala</h3>
              </div>
              <p class="text-xs text-[#57423f] font-sans mt-0.5">Todos los cortes y raciones con precios transparentes sin recortes</p>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-bold text-[#8B1E1E] bg-[#f7f3ee] border border-[#e6dfd5] px-3 py-1 rounded-full font-mono">${filteredMenu.length} Platos</span>
            </div>
          </div>

          <div class="space-y-8 max-h-[750px] overflow-y-auto pr-2">
            ${categoriesToRender.map(catName => {
              const categoryDishes = filteredMenu.filter(d => d.category === catName);
              if (categoryDishes.length === 0) return '';
              return `
                <div class="category-compact-block">
                  <div class="flex items-center justify-between pb-2 mb-3 border-b-2 border-[#8B1E1E]/30 bg-[#f7f3ee] px-4 py-2 rounded-xl">
                    <h4 class="font-headline-sm text-base font-bold text-[#8B1E1E]">${catName}</h4>
                    <span class="text-xs text-[#57423f] font-sans font-semibold">${categoryDishes.length} opciones</span>
                  </div>

                  <div class="divide-y divide-[#f1ede8]">
                    ${categoryDishes.map(dish => `
                      <div class="py-3 px-2 hover:bg-[#f7f3ee]/50 rounded-xl transition-colors flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 group">
                        <div class="flex items-center space-x-3 min-w-0 flex-1">
                          ${dish.image ? `
                            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-[#f1ede8] cursor-pointer shadow-sm relative group/thumb" data-open-dish-modal="${dish.id}">
                              <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform group-hover/thumb:scale-110" loading="lazy"/>
                            </div>
                          ` : `
                            <div class="w-12 h-12 rounded-xl bg-[#f1ede8] flex items-center justify-center text-xl flex-shrink-0">🍽️</div>
                          `}

                          <div class="min-w-0 flex-1 cursor-pointer" data-open-dish-modal="${dish.id}">
                            <div class="flex items-center space-x-2 flex-wrap">
                              <span class="font-headline-sm font-semibold text-sm sm:text-base text-[#1c1c19] group-hover:text-[#8B1E1E] transition-colors">${dish.name}</span>
                              ${dish.badge ? `<span class="text-[9px] font-sans font-bold px-2 py-0.5 rounded-full bg-[#f1ede8] text-[#8B1E1E] border border-[#e6dfd5] whitespace-nowrap">${dish.badge}</span>` : ''}
                              ${renderAllergenBadges(dish.allergens, 'xs')}
                            </div>
                            <p class="text-xs text-[#57423f] truncate max-w-lg font-sans mt-0.5">${dish.description}</p>
                          </div>
                        </div>

                        <div class="flex items-center space-x-3 flex-shrink-0 self-end sm:self-center">
                          <span class="font-label-price text-base sm:text-lg font-bold text-[#1c1c19] whitespace-nowrap">${formatCurrency(dish.price)}</span>
                          <button data-open-dish-modal="${dish.id}" class="bg-[#f1ede8] hover:bg-[#e8deda] text-[#1c1c19] text-xs px-3 py-1.5 rounded-full border border-[#e6dfd5] font-medium cursor-pointer" title="Ver detalle">
                            Info
                          </button>
                          <button data-add-cart="${dish.id}" class="btn-vukata-primary text-xs px-4 py-1.5 rounded-full shadow whitespace-nowrap cursor-pointer">
                            Pedir
                          </button>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : `
        <!-- VISTA TARJETAS SHOWCASE DE ALTA RESTAURACIÓN (Stitch Grid Layout) -->
        <div class="space-y-16 mb-16">
          ${categoriesToRender.map(catName => {
            const categoryDishes = filteredMenu.filter(d => d.category === catName);
            if (categoryDishes.length === 0) return '';

            return `
              <section class="menu-group" data-group="${catName.toLowerCase()}">
                
                <!-- Category Section Banner -->
                <div class="flex items-center justify-between pb-6 mb-8 bg-[#f7f3ee] p-6 rounded-2xl border border-[#e6dfd5]">
                  <div class="flex items-center gap-3">
                    <span class="p-2.5 rounded-full bg-[#9c382c] text-white">
                      <span class="material-symbols-outlined text-[24px]">local_fire_department</span>
                    </span>
                    <div>
                      <h3 class="font-headline-md text-[#1c1c19] font-semibold">${catName}</h3>
                      <p class="font-body-sm text-[#57423f]">Preparado al momento en parrilla abierta con leña y carbón de encina natural</p>
                    </div>
                  </div>
                  <span class="hidden md:inline-block font-kicker-eyebrow text-[#8B1E1E] uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#e6dfd5] shadow-xs">
                    ${categoryDishes.length} Opciones
                  </span>
                </div>

                <!-- Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  ${categoryDishes.map(dish => {
                    const sales = store.getDishSalesCount(dish.id);
                    return `
                      <div class="dish-card bg-white rounded-2xl overflow-hidden border border-[#e6dfd5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                        
                        <!-- Media Container -->
                        <div class="relative overflow-hidden h-56 bg-[#f1ede8]">
                          ${dish.image ? `
                            <img alt="${dish.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" data-open-dish-modal="${dish.id}" src="${dish.image}" loading="lazy"/>
                            <button data-open-lightbox="${dish.image}" data-lightbox-title="${dish.name}" class="absolute top-3 right-3 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity cursor-pointer" title="Ampliar imagen completa">
                              ${ICONS.zoom}
                            </button>
                          ` : `
                            <div class="w-full h-full flex items-center justify-center text-4xl">🔥</div>
                          `}
                          ${dish.badge ? `
                            <div class="absolute top-3 left-3 bg-[#31302d]/90 backdrop-blur-sm text-[#f4f0eb] px-2.5 py-1 rounded-md font-kicker-eyebrow text-[10px] tracking-widest uppercase">
                              ${dish.badge}
                            </div>
                          ` : ''}
                        </div>

                        <!-- Content Dossier -->
                        <div class="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <div class="flex items-start justify-between gap-2 mb-2">
                              <h4 class="font-headline-sm text-[#1c1c19] font-semibold leading-snug cursor-pointer hover:text-[#8B1E1E] transition-colors" data-open-dish-modal="${dish.id}">
                                ${dish.name}
                              </h4>
                              <span class="font-label-price text-[#8B1E1E] font-bold whitespace-nowrap">
                                ${formatCurrency(dish.price)}
                              </span>
                            </div>

                            <p class="font-body-md text-[#57423f] mb-3 line-clamp-2">
                              ${dish.description}
                            </p>

                            <!-- Alérgenos Declarados -->
                            <div class="mb-2">
                              ${renderAllergenBadges(dish.allergens, 'sm')}
                            </div>
                          </div>

                          <div class="pt-4 border-t border-[#f1ede8] flex items-center justify-between">
                            <span class="font-body-sm text-[#645d5a] flex items-center gap-1">
                              <span class="material-symbols-outlined text-[16px] text-[#8B1E1E]">skillet</span>
                              <span>${dish.prepTime || 'Punto recomendado'}</span>
                            </span>
                            <div class="flex items-center gap-1.5">
                              <button data-open-dish-modal="${dish.id}" class="p-2 rounded-full bg-[#f1ede8] hover:bg-[#e8deda] text-[#1c1c19] transition-colors cursor-pointer" title="Ver detalle">
                                <span class="material-symbols-outlined text-[18px]">info</span>
                              </button>
                              <button data-add-cart="${dish.id}" class="p-2 rounded-full bg-[#f1ede8] hover:bg-[#9c382c] hover:text-white text-[#8B1E1E] transition-colors cursor-pointer shadow-xs" title="Añadir a la comanda">
                                <span class="material-symbols-outlined text-[20px]">add</span>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>

              </section>
            `;
          }).join('')}
        </div>
      `}

      
      <!-- GOOGLE REVIEWS SECTION (Social Proof & Reputation de Stitch) -->
      <section class="bg-surface-container-low py-20 w-full mt-12" id="opiniones">
        <div class="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-6 h-[2px] bg-primary"></span>
                <span class="font-kicker-eyebrow text-kicker-eyebrow text-primary uppercase tracking-[0.2em]">TESTIMONIOS REALES</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface">Opiniones de nuestros clientes</h2>
              <p class="font-body-md text-body-md text-on-surface-variant">Más de 28 años encendiendo la leña a diario en el barrio de Aluche.</p>
            </div>
            <div class="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl shadow-sm">
              <div class="w-12 h-12 rounded-full bg-[#14100E] flex items-center justify-center text-tertiary-fixed-dim">
                <span class="material-symbols-outlined text-[28px]">reviews</span>
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="font-headline-sm text-headline-sm font-bold text-on-surface">4.8</span>
                  <div class="flex text-[#e39c28]">
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="material-symbols-outlined text-[18px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  </div>
                </div>
                <span class="font-body-sm text-body-sm text-secondary">Basado en 348 reseñas de Google Maps</span>
              </div>
            </div>
          </div>
          <!-- Testimonial Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Review 1 -->
            <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex text-[#e39c28]">
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">
                  "El asado de tira y la entraña son de otro nivel. Se nota el carbón de verdad y la mano de quien lleva décadas en la parrilla. Sitio indispensable en Aluche si te gusta la carne bien hecha."
                </p>
              </div>
              <div class="pt-6 mt-6 border-t-0 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-surface">MG</div>
                <div>
                  <h5 class="font-label-action text-label-action text-on-surface font-semibold">Manuel Gómez</h5>
                  <span class="font-body-sm text-body-sm text-secondary">Guía Local de Google · Reseña verificada</span>
                </div>
              </div>
            </div>
            <!-- Review 2 -->
            <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex text-[#e39c28]">
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">
                  "Pedimos la parrillada para dos y salimos fascinados. La empanada criolla tiene una masa auténtica y el punto de las carnes vino tal cual pedimos. Trato cercano y precio muy ajustado para la calidad."
                </p>
              </div>
              <div class="pt-6 mt-6 border-t-0 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-surface">MM</div>
                <div>
                  <h5 class="font-label-action text-label-action text-on-surface font-semibold">María C. Montes</h5>
                  <span class="font-body-sm text-body-sm text-secondary">Cliente habitual · Reseña verificada</span>
                </div>
              </div>
            </div>
            <!-- Review 3 -->
            <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex text-[#e39c28]">
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">
                  "El chuletón finlandés madurado es una joya. Tierno, con un toque de brasa limpio que no satura. Y dejen sitio para la tarta de queso casera porque vale cada euro."
                </p>
              </div>
              <div class="pt-6 mt-6 border-t-0 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-surface">JP</div>
                <div>
                  <h5 class="font-label-action text-label-action text-on-surface font-semibold">Javier del Pozo</h5>
                  <span class="font-body-sm text-body-sm text-secondary">Crítico gastronómico amateur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TAKE AWAY & RESERVAS COMPONENT (Direct Action Block) -->
      <section class="w-full mb-14" id="reservas-direct">
        <div class="bg-[#14100E] text-[#f1ede8] rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-2xl">
          <!-- Ambient Glow Decorator -->
          <div class="absolute -left-20 -bottom-20 w-80 h-80 bg-[#8B1E1E]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div class="lg:col-span-7 space-y-6">
              <div class="flex items-center gap-2 text-[#ffdad5]">
                <span class="material-symbols-outlined text-[22px]">calendar_today</span>
                <span class="font-kicker-eyebrow uppercase tracking-widest">RESERVA INMEDIATA SIN ESPERAS</span>
              </div>
              <h2 class="font-headline-lg lg:font-display-hero text-white leading-tight">
                Reserve su mesa frente a las brasas de Aluche
              </h2>
              <p class="font-body-lg text-[#ddd9d5] max-w-xl">
                Asegure su sitio para disfrutar de nuestras carnes con el punto exacto de asado. Atendemos peticiones de mesas familiares y celebraciones.
              </p>
              <div class="flex flex-wrap items-center gap-6 pt-2 text-[#ddd9d5]">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[#f8bb70]">timer</span>
                  <span class="font-body-md">Comidas: 12:00h - 17:00h</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[#f8bb70]">dinner_dining</span>
                  <span class="font-body-md">Cenas: 19:30h - 00:00h</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[#f8bb70]">call</span>
                  <a href="tel:+34915098576" class="font-body-md hover:underline">+34 915 09 85 76</a>
                </div>
              </div>
            </div>

            <!-- Quick Interactive Booking Panel -->
            <div class="lg:col-span-5 bg-white text-[#1c1c19] p-8 rounded-2xl shadow-xl">
              <h3 class="font-headline-sm font-semibold mb-4 text-[#1c1c19]">Confirmar Comensales</h3>
              <form id="reservas-direct-form" class="space-y-4">
                <div>
                  <label class="font-kicker-eyebrow text-[11px] text-[#645d5a] uppercase block mb-1">Nombre Completo</label>
                  <input id="direct-res-name" class="w-full bg-[#f7f3ee] border border-[#e6dfd5] px-4 py-3 rounded-xl font-body-md text-[#1c1c19] focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]" placeholder="Ej. Carlos Martínez" required="" type="text"/>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-[#645d5a] uppercase block mb-1">Teléfono</label>
                    <input id="direct-res-phone" class="w-full bg-[#f7f3ee] border border-[#e6dfd5] px-4 py-3 rounded-xl font-body-md text-[#1c1c19] focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]" placeholder="600 000 000" required="" type="tel"/>
                  </div>
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-[#645d5a] uppercase block mb-1">Personas</label>
                    <select id="direct-res-guests" class="w-full bg-[#f7f3ee] border border-[#e6dfd5] px-4 py-3 rounded-xl font-body-md text-[#1c1c19] focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                      <option value="2 Personas">2 Comensales</option>
                      <option value="3 Personas">3 Comensales</option>
                      <option value="4 Personas" selected>4 Comensales</option>
                      <option value="5+ Personas">5+ Comensales</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-[#645d5a] uppercase block mb-1">Fecha</label>
                    <input id="direct-res-date" class="w-full bg-[#f7f3ee] border border-[#e6dfd5] px-3 py-3 rounded-xl font-body-md text-[#1c1c19] focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]" required="" type="date"/>
                  </div>
                  <div>
                    <label class="font-kicker-eyebrow text-[11px] text-[#645d5a] uppercase block mb-1">Turno</label>
                    <select id="direct-res-shift" class="w-full bg-[#f7f3ee] border border-[#e6dfd5] px-4 py-3 rounded-xl font-body-md text-[#1c1c19] focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                      <option value="Comida (14:00h)">14:00 (Comida)</option>
                      <option value="Comida (15:00h)">15:00 (Comida)</option>
                      <option value="Cena (21:00h)">21:00 (Cena)</option>
                      <option value="Cena (22:00h)">22:00 (Cena)</option>
                    </select>
                  </div>
                </div>
                <button class="w-full bg-[#8B1E1E] hover:bg-[#721414] text-white py-3.5 rounded-xl font-label-action transition-colors shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  <span>Confirmar Reserva</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- LEYENDA OFICIAL DE ALÉRGENOS DE VUKATA (IDÉNTICA A LA PORTADA) -->
      ${renderVukataAllergenLegend()}
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 2: APP INTERACTIVA & BENTO GRID (CON FILTROS Y FOTOS CLARAS)
  // -------------------------------------------------------------------------
  renderEstilo2Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    return `
      <!-- TOP DESTACADO EN BENTO APP -->
      <div class="mb-6 p-4 rounded-2xl bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-100">
        <div class="flex items-center space-x-3">
          <span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">Top de la Barra</span>
              <span class="text-[10px] text-slate-400 font-mono">(${topData.count} comandas hoy)</span>
            </div>
            <h3 class="text-base font-bold mt-0.5">${topData.dish.name} · ${formatCurrency(topData.dish.price)}</h3>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button data-open-dish-modal="${topData.dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs px-3 py-1.5 rounded-xl border border-slate-700 flex items-center space-x-1">
            ${ICONS.eye}
            <span>Detalle</span>
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow">
            Añadir
          </button>
        </div>
      </div>

      <!-- HERO BENTO GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div class="bento-card p-6 md:col-span-2 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">${preset.type}</span>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white mt-1">${preset.name}</h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">${preset.tagline}</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
            <span>📍 ${preset.address}</span>
            <span>·</span>
            <span>📞 ${preset.phone}</span>
            <span>·</span>
            <span class="text-sky-400 font-bold">★ ${preset.rating} (${preset.totalReviews} reseñas)</span>
          </div>
        </div>

        <div class="bento-card p-6 flex flex-col justify-between">
          <span class="text-xs font-bold text-sky-400 uppercase">Especialidad de la Casa</span>
          <div>
            <h3 class="text-lg font-bold text-white mt-2">${preset.aboutUs.specialtyHighlight.title}</h3>
            <p class="text-xs text-slate-300 mt-1">${preset.aboutUs.specialtyHighlight.text}</p>
          </div>
          <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <span class="text-xs text-slate-400 font-mono">Bestseller</span>
            <span class="text-xs font-mono text-sky-400 font-bold">${preset.aboutUs.specialtyHighlight.price || preset.aboutUs.specialtyHighlight.badge || ""}</span>
          </div>
        </div>
      </div>

      <!-- SOBRE NOSOTROS: BENTO METRICS -->
      <section class="mb-10">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${(preset.aboutUs.bentoCards || preset.aboutUs.pillars || []).map(b => `
            <div class="bento-card p-5">
              <span class="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">${b.tag || b.icon || "DESTACADO"}</span>
              <span class="text-xl sm:text-2xl font-black text-white block mt-1">${b.metric || b.title}</span>
              <p class="text-xs text-slate-300 mt-2 leading-relaxed">${b.label || b.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS Y FILTROS DE ALÉRGENOS (ESTILO 2) -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-800">
        <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar">
          <button data-category="all" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === 'all' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
            Todo (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Filtro de alérgenos estilo App -->
        <div class="flex items-center space-x-2 text-xs font-mono">
          <span class="text-slate-400 text-[11px]">Alérgenos:</span>
          <button data-allergen="gluten" class="px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${activeAllergens && activeAllergens.includes('gluten') ? 'bg-sky-600 border-sky-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'}">
            🌾 Sin Gluten
          </button>
          <button data-allergen="lactosa" class="px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${(activeAllergens && (activeAllergens.includes('lactosa') || activeAllergens.includes('lacteos'))) ? 'bg-sky-600 border-sky-400 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'}">
            🥛 Sin Lactosa
          </button>
          ${activeAllergens && activeAllergens.length > 0 ? `
            <button data-clear-allergens class="text-xs text-sky-400 hover:underline px-1.5">✕ Limpiar</button>
          ` : ''}
        </div>
      </div>

      <!-- CUADRÍCULA DE PLATOS TIPO APP BENTO -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="bento-card p-4 flex flex-col justify-between group">
              <div>
                <div class="relative h-48 rounded-xl overflow-hidden mb-3 bg-slate-800 cursor-pointer" data-open-dish-modal="${dish.id}">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-slate-900/90 text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded">${dish.badge}</span>` : ''}
                  <button data-open-lightbox="${dish.image}" data-lightbox-title="${dish.name}" class="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity" title="Ampliar imagen completa">
                    ${ICONS.zoom}
                  </button>
                  <div class="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    ${ICONS.eye}
                    <span>Info</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>${dish.category}</span>
                  <span>⏱️ ${dish.prepTime || '6 min'}</span>
                </div>
                <h3 class="text-base font-bold text-white cursor-pointer hover:text-sky-300 transition-colors" data-open-dish-modal="${dish.id}">${dish.name}</h3>
                <p class="text-xs text-slate-300 mt-1 line-clamp-2">${dish.description}</p>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span class="font-mono text-lg font-bold text-white">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-slate-500">${sales} pedidos hoy</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-open-dish-modal="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs px-2.5 py-1.5 rounded-lg" title="Ver ingredientes y alérgenos">
                    Info
                  </button>
                  <button data-quick-simulate-dish="${dish.id}" class="bg-slate-800 hover:bg-slate-700 text-slate-400 text-[11px] px-2 py-1.5 rounded-lg">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 3: BISTRÓ TRADICIONAL & CARTA CLÁSICA CON FILTROS Y FOTOS
  // -------------------------------------------------------------------------
  renderEstilo3Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    return `
      <!-- SUGERENCIA DEL DÍA CON MARCO TRADICIONAL -->
      <div class="mb-8 p-5 bistro-card border-2 border-[#8c7b6c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span class="text-[11px] font-serif uppercase tracking-widest text-[#7a6b5d] font-bold">Plato Recomendado de la Casa</span>
          <h3 class="bistro-serif text-xl font-bold text-[#2b2520] mt-0.5">${topData.dish.name}</h3>
          <p class="text-xs text-[#594d40] mt-0.5">${topData.dish.description}</p>
        </div>
        <div class="flex items-center space-x-2 flex-shrink-0">
          <button data-open-dish-modal="${topData.dish.id}" class="bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] text-xs px-3 py-1.5 rounded font-serif flex items-center space-x-1">
            ${ICONS.eye}
            <span>Detalle</span>
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-[#3d3228] hover:bg-[#2b2520] text-white text-xs px-3.5 py-1.5 rounded font-serif font-bold shadow">
            Pedir (${formatCurrency(topData.dish.price)})
          </button>
        </div>
      </div>

      <!-- PORTADA CLÁSICA BISTRÓ CON MARCO -->
      <div class="text-center max-w-3xl mx-auto mb-12 border-t-2 border-b-2 border-[#8c7b6c] py-8">
        <span class="text-xs font-serif uppercase tracking-widest text-[#7a6b5d] block mb-1">Casa de Comidas & Fogón Castellano</span>
        <h1 class="bistro-serif text-4xl sm:text-5xl font-bold text-[#2b2520] tracking-tight">${preset.name}</h1>
        <p class="text-sm font-serif italic text-[#594d40] mt-3">"${preset.tagline}"</p>
        <div class="mt-4 flex flex-wrap justify-center gap-4 text-xs font-serif text-[#7a6b5d]">
          <span>${preset.address}</span>
          <span>·</span>
          <span>Teléfono: ${preset.phone}</span>
          <span>·</span>
          <span>Desde ${preset.foundationYear}</span>
        </div>
      </div>

      <!-- SECCIÓN HISTORIA Y TRADICIÓN FAMILIAR -->
      <section class="mb-14 bistro-card p-6 sm:p-8">
        <h2 class="bistro-serif text-2xl font-bold text-[#2b2520] text-center mb-2">${preset.aboutUs.headline}</h2>
        <p class="text-xs sm:text-sm text-[#594d40] text-center max-w-2xl mx-auto leading-relaxed mb-6">${preset.aboutUs.story}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#dfd7cc]">
          ${(preset.aboutUs.timeline || preset.aboutUs.pillars || []).map(t => `
            <div class="text-center p-3">
              <span class="font-serif font-bold text-base text-[#8c7b6c] block">${t.year}</span>
              <p class="text-xs text-[#594d40] mt-1">${t.event}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE SECCIONES Y FILTROS TRADICIONALES (ESTILO 3) -->
      <div class="border-b-2 border-[#8c7b6c] pb-2.5 mb-8 flex flex-wrap items-center justify-between gap-3 font-serif">
        <div class="flex items-center space-x-3 overflow-x-auto no-scrollbar text-xs">
          <button data-category="all" class="px-3 py-1 rounded transition-all ${activeCategory === 'all' ? 'bg-[#3d3228] text-white font-bold' : 'text-[#594d40] hover:text-[#2b2520]'}">
            Toda la Carta (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="whitespace-nowrap px-3 py-1 rounded transition-all ${activeCategory === cat ? 'bg-[#3d3228] text-white font-bold' : 'text-[#594d40] hover:text-[#2b2520]'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Filtros de alérgenos estilo Mesón -->
        <div class="flex items-center space-x-2 text-xs">
          <span class="text-[#7a6b5d]">Alérgenos:</span>
          <button data-allergen="gluten" class="px-2.5 py-1 rounded border text-xs transition-all ${activeAllergens && activeAllergens.includes('gluten') ? 'bg-[#3d3228] text-white border-[#3d3228] font-bold' : 'border-[#8c7b6c] text-[#3d3228] bg-white hover:bg-[#eee7db]'}">
            🌾 Sin Gluten
          </button>
          <button data-allergen="lactosa" class="px-2.5 py-1 rounded border text-xs transition-all ${(activeAllergens && (activeAllergens.includes('lactosa') || activeAllergens.includes('lacteos'))) ? 'bg-[#3d3228] text-white border-[#3d3228] font-bold' : 'border-[#8c7b6c] text-[#3d3228] bg-white hover:bg-[#eee7db]'}">
            🥛 Sin Lactosa
          </button>
          ${activeAllergens && activeAllergens.length > 0 ? `
            <button data-clear-allergens class="text-xs text-[#7a6b5d] hover:text-[#2b2520] underline px-1">✕ Limpiar</button>
          ` : ''}
        </div>
      </div>

      <!-- CARTA EN 2 COLUMNAS CON DOTTED LEADERS Y FOTOS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="pb-4 border-b border-[#dfd7cc] flex items-start space-x-3 group">
              
              <!-- Miniatura fotográfica clickeable -->
              ${dish.image ? `
                <div class="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#e6dfd5] border border-[#dfd7cc] cursor-pointer shadow-sm relative group-hover:opacity-95 transition-all" data-open-dish-modal="${dish.id}" title="Clic para ver foto ampliada e ingredientes">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  <button data-open-lightbox="${dish.image}" data-lightbox-title="${dish.name}" class="absolute top-1 right-1 bg-black/60 hover:bg-black text-white p-1 rounded text-[10px]" title="Zoom">
                    ${ICONS.zoom}
                  </button>
                </div>
              ` : ''}

              <div class="flex-1 min-w-0">
                <!-- Línea con Nombre, Puntos Suspensivos y Precio -->
                <div class="dotted-leader-row cursor-pointer" data-open-dish-modal="${dish.id}">
                  <span class="bistro-serif text-base font-bold text-[#2b2520] hover:text-[#8c7b6c] transition-colors truncate">${dish.name}</span>
                  <span class="dotted-leader-line"></span>
                  <span class="font-serif font-bold text-base text-[#3d3228] flex-shrink-0">${formatCurrency(dish.price)}</span>
                </div>

                <!-- Descripción en letra cursiva refinada -->
                <p class="text-xs font-serif italic text-[#6b5c4f] mt-1 leading-relaxed cursor-pointer" data-open-dish-modal="${dish.id}">${dish.description}</p>
                
                <div class="mt-2.5 flex items-center justify-between text-[11px] font-serif text-[#7a6b5d]">
                  <span class="cursor-pointer hover:underline" data-open-dish-modal="${dish.id}">
                    ${dish.vintageBadge || 'Especialidad'} · ${sales} raciones
                  </span>
                  <div class="flex items-center space-x-1.5">
                    <button data-open-dish-modal="${dish.id}" class="text-[10px] text-[#7a6b5d] hover:text-[#3d3228] px-2 py-0.5 border border-[#dfd7cc] rounded bg-white">
                      Ver foto
                    </button>
                    <button data-quick-simulate-dish="${dish.id}" class="text-[10px] text-[#7a6b5d] hover:text-[#2b2520] underline px-1">
                      +1
                    </button>
                    <button data-add-cart="${dish.id}" class="bg-[#8c7b6c] hover:bg-[#6e5f52] text-white px-3 py-1 rounded text-[11px] font-sans">
                      Pedir
                    </button>
                  </div>
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // -------------------------------------------------------------------------
  // DISEÑO 4: SHOWCASE VISUAL & MINIMALISMO NÓRDICO (CON FILTROS Y FOTOS)
  // -------------------------------------------------------------------------
  renderEstilo4Layout(preset, filteredMenu, activeCategory, activeAllergens, topData) {
    return `
      <!-- BANNER MINIMALISTA NÓRDICO -->
      <div class="mb-8 p-4 bg-zinc-100 border border-zinc-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-zinc-800">
        <div>
          <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Selección Especial</span>
          <h3 class="text-sm font-semibold text-zinc-900 mt-0.5">${topData.dish.name} · ${formatCurrency(topData.dish.price)}</h3>
          <p class="text-xs text-zinc-500">${topData.count} pedidos hoy</p>
        </div>
        <div class="flex items-center space-x-2">
          <button data-open-dish-modal="${topData.dish.id}" class="bg-white hover:bg-zinc-200 text-zinc-800 text-xs px-3 py-1.5 rounded-lg border border-zinc-300">
            Detalle
          </button>
          <button data-add-cart="${topData.dish.id}" class="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg">
            Añadir
          </button>
        </div>
      </div>

      <!-- HERO MINIMALISTA Y DIÁFANO -->
      <div class="max-w-3xl mb-14">
        <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">${preset.type}</span>
        <h1 class="text-3xl sm:text-5xl font-light tracking-tight text-zinc-900 mt-2">${preset.name}</h1>
        <p class="text-sm sm:text-base text-zinc-600 mt-3 leading-relaxed font-light">${preset.tagline}</p>
        <div class="mt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
          <span>${preset.address}</span>
          <span>·</span>
          <span>${preset.openingHours}</span>
          <span>·</span>
          <span>Google: ${preset.rating} ★ (${preset.totalReviews})</span>
        </div>
      </div>

      <!-- SECCIÓN PRINCIPIOS Y FILOSOFÍA -->
      <section class="mb-14 py-8 border-t border-b border-zinc-200">
        <div class="max-w-2xl mb-8">
          <h2 class="text-xl font-medium text-zinc-900">${preset.aboutUs.headline}</h2>
          <p class="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">${preset.aboutUs.story}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${(preset.aboutUs.principles || preset.aboutUs.pillars || []).map(p => `
            <div>
              <span class="text-xs font-mono text-zinc-400 font-semibold">${p.code}</span>
              <h4 class="text-sm font-medium text-zinc-900 mt-1">${p.title}</h4>
              <p class="text-xs text-zinc-500 mt-1 leading-relaxed">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- BARRA DE CATEGORÍAS Y FILTROS DE ALÉRGENOS (ESTILO 4) -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-3 mb-8 text-xs border-b border-zinc-200">
        <div class="flex items-center space-x-6 overflow-x-auto no-scrollbar tracking-widest uppercase font-light">
          <button data-category="all" class="pb-1 transition-colors ${activeCategory === 'all' ? 'text-zinc-900 font-semibold border-b border-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}">
            Todo (${preset.menu.length})
          </button>
          ${preset.categories.map(cat => `
            <button data-category="${cat}" class="pb-1 whitespace-nowrap transition-colors ${activeCategory === cat ? 'text-zinc-900 font-semibold border-b border-zinc-900' : 'text-zinc-400 hover:text-zinc-900'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Filtro de alérgenos minimalista -->
        <div class="flex items-center space-x-2 font-mono uppercase tracking-wider text-[11px]">
          <span class="text-zinc-400">Alérgenos:</span>
          <button data-allergen="gluten" class="px-2.5 py-1 border transition-all ${activeAllergens && activeAllergens.includes('gluten') ? 'bg-zinc-900 text-white border-zinc-900 font-bold' : 'border-zinc-300 text-zinc-600 hover:text-zinc-900'}">
            🌾 Sin Gluten
          </button>
          <button data-allergen="lactosa" class="px-2.5 py-1 border transition-all ${(activeAllergens && (activeAllergens.includes('lactosa') || activeAllergens.includes('lacteos'))) ? 'bg-zinc-900 text-white border-zinc-900 font-bold' : 'border-zinc-300 text-zinc-600 hover:text-zinc-900'}">
            🥛 Sin Lactosa
          </button>
          ${activeAllergens && activeAllergens.length > 0 ? `
            <button data-clear-allergens class="text-xs text-zinc-500 hover:text-zinc-900 underline px-1">✕ Limpiar</button>
          ` : ''}
        </div>
      </div>

      <!-- GALERÍA DE PLATOS FOTOGRÁFICA (SHOWCASE 3 COLS) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        ${filteredMenu.map(dish => {
          const sales = store.getDishSalesCount(dish.id);
          return `
            <div class="minimal-card p-4 flex flex-col justify-between group">
              <div>
                <div class="relative h-52 rounded-xl overflow-hidden bg-zinc-100 mb-4 cursor-pointer" data-open-dish-modal="${dish.id}">
                  <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                  ${dish.badge ? `<span class="absolute top-2 left-2 bg-white/95 text-zinc-900 text-[10px] font-mono px-2 py-0.5 rounded shadow-sm">${dish.badge}</span>` : ''}
                  <button data-open-lightbox="${dish.image}" data-lightbox-title="${dish.name}" class="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded-lg text-xs backdrop-blur-sm transition-opacity" title="Ampliar imagen completa">
                    ${ICONS.zoom}
                  </button>
                  <div class="absolute bottom-2 right-2 bg-white/95 text-zinc-800 text-[10px] px-2.5 py-0.5 rounded shadow flex items-center space-x-1">
                    ${ICONS.eye}
                    <span>Info</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                  <span>${dish.category}</span>
                  <span>${dish.dietary || ''}</span>
                </div>
                <h3 class="text-base font-medium text-zinc-900 cursor-pointer hover:text-zinc-600 transition-colors" data-open-dish-modal="${dish.id}">${dish.name}</h3>
                <p class="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">${dish.description}</p>
                ${dish.nutrition ? `<p class="text-[10px] text-zinc-400 font-mono mt-2">${dish.nutrition}</p>` : ''}
              </div>

              <div class="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <span class="font-mono text-base font-semibold text-zinc-900">${formatCurrency(dish.price)}</span>
                  <span class="block text-[10px] text-zinc-400 font-mono">${sales} pedidos</span>
                </div>
                <div class="flex items-center space-x-1.5">
                  <button data-open-dish-modal="${dish.id}" class="text-[11px] font-mono text-zinc-600 hover:text-zinc-900 px-2 py-1 border border-zinc-200 rounded">
                    Info
                  </button>
                  <button data-quick-simulate-dish="${dish.id}" class="text-[11px] font-mono text-zinc-400 hover:text-zinc-900 px-1 py-1">
                    +1
                  </button>
                  <button data-add-cart="${dish.id}" class="bg-zinc-900 hover:bg-black text-white text-xs font-medium px-3.5 py-1.5 rounded-lg">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // =========================================================================
  // MODAL DE DETALLE DEL PLATO (FOTO NÍTIDA, BOTÓN DE ZOOM Y DETALLES)
  // =========================================================================
  renderDishDetailModal(dish, preset) {
    this.currentModalDish = dish;
    this.modalQty = 1;
    const container = document.getElementById('dish-modal-container');
    if (!container) return;

    const allergensList = (dish.allergens && dish.allergens.length > 0)
      ? (preset.id === 'estilo1'
          ? dish.allergens.map(a => renderAllergenBadge(a, 'md', true)).join('')
          : dish.allergens.map(a => `<span class="allergen-chip ${
              preset.id === 'estilo2' ? 'badge-allergen-estilo2' :
              preset.id === 'estilo3' ? 'badge-allergen-estilo3' :
              'badge-allergen-estilo4'
            }">${getAllergenLabel(a)}</span>`).join(''))
      : `<span class="text-xs ${preset.id === 'estilo1' ? 'text-stone-500 font-medium' : preset.id === 'estilo2' ? 'text-slate-400' : 'text-zinc-500'}">✓ No contiene alérgenos comunes declarados</span>`;

    let cardThemeClasses = '';
    let headerTextClass = '';
    let bodyTextClass = '';
    let btnThemeClass = '';

    if (preset.id === 'estilo1') {
      cardThemeClasses = 'bg-white border-2 border-[#8B1E1E]/30 text-stone-900 shadow-2xl';
      headerTextClass = 'vukata-font-dish text-stone-950 font-black text-2xl sm:text-3xl tracking-wide';
      bodyTextClass = 'text-stone-700';
      btnThemeClass = 'btn-vukata-primary py-3.5 px-6 rounded-xl text-xs shadow-md';
    } else if (preset.id === 'estilo2') {
      cardThemeClasses = 'bg-[#0b1020] border border-slate-700 text-slate-100 shadow-2xl rounded-3xl';
      headerTextClass = 'font-sans text-white font-black text-xl';
      bodyTextClass = 'text-slate-300';
      btnThemeClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      cardThemeClasses = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] shadow-2xl rounded-xl';
      headerTextClass = 'bistro-serif text-[#3d3228] font-bold text-2xl';
      bodyTextClass = 'text-[#594d40] font-serif';
      btnThemeClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold text-xs rounded shadow';
    } else {
      cardThemeClasses = 'bg-white border border-zinc-200 text-zinc-900 shadow-2xl rounded-2xl';
      headerTextClass = 'font-light tracking-tight text-zinc-900 text-2xl';
      bodyTextClass = 'text-zinc-600 font-light';
      btnThemeClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider text-xs rounded-none py-3.5';
    }

    container.innerHTML = `
      <div id="dish-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate relative max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden rounded-2xl ${cardThemeClasses}">
          
          <!-- Botón de Cerrar Modal (FUERA de la imagen y con máxima prioridad z-index) -->
          <button type="button" id="close-dish-modal" class="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-105 font-bold z-30 shadow-2xl border border-white/30 cursor-pointer" title="Cerrar modal (Esc)">
            ✕
          </button>

          <!-- Fotografía Nítida (Sin velos oscuros) con botón de ampliación -->
          <div class="relative w-full h-56 sm:h-72 bg-stone-900 flex-shrink-0 overflow-hidden cursor-zoom-in group" data-open-lightbox="${dish.image || ''}" data-lightbox-title="${dish.name}" title="Clic para ampliar imagen completa">
            ${dish.image ? `
              <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"/>
            ` : `
              <div class="w-full h-full flex items-center justify-center text-5xl">🍽️</div>
            `}
            
            <!-- Botón llamativo de 'Ampliar Imagen Completa' -->
            <div class="absolute bottom-3 right-3 bg-black/80 hover:bg-black text-white text-xs px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/30 flex items-center space-x-2 shadow-2xl transition-transform group-hover:scale-105 pointer-events-none">
              ${ICONS.zoom}
              <span class="font-semibold">Ampliar foto completa</span>
            </div>
          </div>

          <!-- Cabecera de Texto del Plato debajo de la foto para máxima legibilidad -->
          <div class="p-5 sm:p-6 pb-2 border-b ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#FAF9F7]' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex-shrink-0">
            <div class="flex items-center space-x-2 mb-1.5">
              ${dish.badge ? `<span class="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${preset.id === 'estilo1' ? 'bg-[#8B1E1E] text-white' : 'bg-blue-600 text-white'}">${dish.badge}</span>` : ''}
              <span class="text-xs font-mono opacity-70">${dish.category}</span>
            </div>
            <h2 class="${headerTextClass}">${dish.name}</h2>
          </div>

          <!-- Cuerpo con Scroll y Detalles -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 ${bodyTextClass} text-xs sm:text-sm">
            
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider mb-1 ${preset.id === 'estilo1' ? 'text-[#8B1E1E] vukata-font-title' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Descripción</h4>
              <p class="leading-relaxed text-sm">${dish.description}</p>
            </div>

            ${dish.ingredients ? `
              <div class="p-4 rounded-xl ${preset.id === 'estilo1' ? 'bg-[#F4F5F7] border border-stone-200' : preset.id === 'estilo2' ? 'bg-slate-900/90 border border-slate-800' : preset.id === 'estilo3' ? 'bg-[#eee7db] border border-[#dfd7cc]' : 'bg-zinc-50 border border-zinc-200'}">
                <span class="font-bold text-xs block mb-1 uppercase tracking-wider ${preset.id === 'estilo1' ? 'text-[#8B1E1E] vukata-font-title' : preset.id === 'estilo2' ? 'text-sky-300' : 'text-stone-700'}">Ingredientes y Preparación</span>
                <p class="text-xs leading-relaxed opacity-90">${dish.ingredients}</p>
              </div>
            ` : ''}

            <!-- Alérgenos -->
            <div>
              <h4 class="text-xs font-bold uppercase tracking-wider mb-2 ${preset.id === 'estilo1' ? 'text-[#8B1E1E] vukata-font-title' : preset.id === 'estilo2' ? 'text-sky-400 font-mono' : 'text-stone-500'}">Información de Alérgenos (Reglamento UE 1169/2011)</h4>
              <div class="flex flex-wrap gap-2">
                ${allergensList}
              </div>
            </div>

            <!-- Sugerencia de Maridaje o Nota Culinaria -->
            ${dish.pairing || dish.beerPairing || dish.dietary ? `
              <div class="border-t pt-4 ${preset.id === 'estilo1' ? 'border-stone-200' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex flex-wrap gap-4 text-xs font-mono">
                ${dish.pairing ? `<span class="${preset.id === 'estilo1' ? 'text-[#8B1E1E] font-semibold' : 'text-amber-300'}">🍷 Maridaje: ${dish.pairing}</span>` : ''}
                ${dish.beerPairing ? `<span class="text-sky-300">🍺 Maridaje: ${dish.beerPairing}</span>` : ''}
                ${dish.dietary ? `<span class="opacity-75">🌿 ${dish.dietary}</span>` : ''}
              </div>
            ` : ''}

          </div>

          <!-- Pie del Modal con Selector de Cantidad y Botón Temático -->
          <div class="p-4 sm:p-5 border-t ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#F4F5F7]' : preset.id === 'estilo2' ? 'border-slate-800 bg-[#070a13]' : preset.id === 'estilo3' ? 'border-[#dfd7cc] bg-[#f5f1e8]' : 'border-zinc-200 bg-zinc-50'} flex items-center justify-between gap-4 flex-shrink-0">
            
            <div class="flex items-center space-x-3">
              <span class="text-xl sm:text-2xl font-bold ${preset.id === 'estilo1' ? 'text-[#8B1E1E] vukata-font-dish font-black text-3xl' : preset.id === 'estilo2' ? 'text-white font-mono' : preset.id === 'estilo3' ? 'text-[#3d3228] font-mono' : 'text-zinc-900 font-mono'}">
                ${formatCurrency(dish.price)}
              </span>

              <div class="flex items-center space-x-2 border rounded-xl px-2 py-1 ${preset.id === 'estilo1' ? 'border-stone-300 bg-white text-stone-900' : preset.id === 'estilo2' ? 'border-slate-700 bg-slate-800' : preset.id === 'estilo3' ? 'border-[#8c7b6c] bg-white' : 'border-zinc-300 bg-white'}">
                <button type="button" data-modal-qty-minus class="w-7 h-7 flex items-center justify-center font-bold text-base cursor-pointer hover:opacity-75 select-none">-</button>
                <span id="modal-dish-qty-val" class="w-6 text-center font-bold font-mono text-sm select-none">1</span>
                <button type="button" data-modal-qty-plus class="w-7 h-7 flex items-center justify-center font-bold text-base cursor-pointer hover:opacity-75 select-none">+</button>
              </div>
            </div>

            <button type="button" data-modal-add-cart class="${btnThemeClass} px-5 py-3 flex items-center space-x-2 cursor-pointer select-none">
              <span>Añadir a la Comanda</span>
              ${ICONS.arrow}
            </button>

          </div>

        </div>
      </div>
    `;
  }

  // =========================================================================
  // CARRITO DRAWER (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderCartDrawer(isOpen = true) {
    const container = document.getElementById('cart-drawer-container');
    if (!container) return;
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    if (!isOpen) {
      container.innerHTML = '';
      return;
    }

    let drawerContainerClasses = '';
    let headerClasses = '';
    let bodyClasses = '';
    let footerClasses = '';
    let itemClasses = '';
    let btnClass = '';
    let qtyBtnClass = '';

    if (preset.id === 'estilo1') {
      drawerContainerClasses = 'bg-white text-stone-900 border-l border-stone-200';
      headerClasses = 'p-5 border-b border-red-100 flex items-center justify-between bg-[#F4F5F7] text-[#8B1E1E] vukata-font-title tracking-wider';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-stone-800';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-stone-100 text-xs';
      footerClasses = 'p-5 border-t border-stone-200 bg-[#F4F5F7] space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded bg-stone-100 text-stone-900 hover:bg-stone-200 font-mono font-bold flex items-center justify-center border border-stone-300';
      btnClass = 'w-full btn-vukata-primary font-bold py-3.5 rounded-xl text-xs shadow flex items-center justify-center space-x-2 disabled:opacity-40';
    } else if (preset.id === 'estilo2') {
      drawerContainerClasses = 'bg-[#070a13] text-slate-100 border-l border-slate-800';
      headerClasses = 'p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900 text-sky-400 font-mono';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-slate-200';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-slate-800 text-xs';
      footerClasses = 'p-5 border-t border-slate-800 bg-slate-900 space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded-lg bg-slate-800 text-sky-300 hover:bg-slate-700 font-mono font-bold flex items-center justify-center';
      btnClass = 'w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 disabled:opacity-40';
    } else if (preset.id === 'estilo3') {
      drawerContainerClasses = 'bg-[#fbf9f5] text-[#2b2520] border-l-2 border-[#8c7b6c]';
      headerClasses = 'p-5 border-b-2 border-[#8c7b6c] flex items-center justify-between bg-[#eee7db] text-[#3d3228] font-serif';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-[#3d3228] font-serif';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-[#dfd7cc] text-xs';
      footerClasses = 'p-5 border-t-2 border-[#8c7b6c] bg-[#eee7db] space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] font-serif font-bold flex items-center justify-center';
      btnClass = 'w-full bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3.5 rounded text-xs shadow flex items-center justify-center space-x-2 disabled:opacity-40';
    } else {
      drawerContainerClasses = 'bg-white text-zinc-900 border-l border-zinc-200';
      headerClasses = 'p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50 text-zinc-900 uppercase tracking-widest text-xs font-light';
      bodyClasses = 'p-5 flex-1 overflow-y-auto space-y-4 text-zinc-800 font-light';
      itemClasses = 'flex items-start justify-between pb-3 border-b border-zinc-100 text-xs';
      footerClasses = 'p-5 border-t border-zinc-200 bg-zinc-50 space-y-4';
      qtyBtnClass = 'w-6 h-6 rounded-none border border-zinc-300 hover:bg-zinc-100 text-zinc-900 font-mono text-xs flex items-center justify-center';
      btnClass = 'w-full bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none text-xs flex items-center justify-center space-x-2 disabled:opacity-40';
    }

    container.innerHTML = `
      <div id="cart-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"></div>
      <div class="drawer-animate fixed inset-y-0 right-0 max-w-md w-full ${drawerContainerClasses} shadow-2xl z-50 flex flex-col justify-between">
        
        <div class="${headerClasses}">
          <div class="flex items-center space-x-2">
            ${ICONS.cart}
            <h3 class="font-bold text-sm sm:text-base">Comanda de Sala · ${preset.name}</h3>
          </div>
          <button id="close-cart-btn" class="p-1 opacity-70 hover:opacity-100 text-base">✕</button>
        </div>

        <div class="${bodyClasses}">
          ${cart.length === 0 ? `
            <div class="h-64 flex flex-col items-center justify-center opacity-60 text-xs text-center">
              <span class="text-4xl mb-3">🍽️</span>
              <p class="font-bold text-sm">La comanda está vacía</p>
              <p class="mt-1 max-w-xs">Selecciona cualquier plato de la carta o pulsa en 'Ver Detalle' para añadirlo a la prueba.</p>
            </div>
          ` : cart.map((item, idx) => `
            <div class="${itemClasses}">
              <div class="pr-2 flex-1">
                <span class="font-bold block">${item.name}</span>
                <span class="font-mono opacity-75 text-[11px]">${formatCurrency(item.price)} / ud.</span>
              </div>
              <div class="flex items-center space-x-2 flex-shrink-0">
                <button data-cart-minus="${idx}" class="${qtyBtnClass}">-</button>
                <span class="font-bold w-4 text-center font-mono text-xs">${item.qty}</span>
                <button data-cart-plus="${idx}" class="${qtyBtnClass}">+</button>
                <button data-cart-remove="${idx}" class="text-red-400 hover:text-red-600 ml-2 text-xs font-bold" title="Eliminar">✕</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="${footerClasses}">
          <div class="flex justify-between items-center font-bold text-base">
            <span>Total Comanda:</span>
            <span class="font-mono text-xl ${preset.id === 'estilo1' ? 'text-[#8B1E1E] font-black' : preset.id === 'estilo2' ? 'text-sky-300' : ''}">${formatCurrency(total)}</span>
          </div>
          <button id="open-checkout-modal-btn" ${cart.length === 0 ? 'disabled' : ''} class="${btnClass}">
            <span>Tramitar Pedido en Cocina</span>
            ${ICONS.arrow}
          </button>
        </div>

      </div>
    `;
  }

  // =========================================================================
  // CHECKOUT MODAL (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderCheckoutModal() {
    const container = document.getElementById('checkout-modal-container');
    if (!container) return;
    const preset = store.getPreset();
    const cart = store.state.cart;
    const total = store.getCartTotal();

    let modalBgClass = '';
    let headerTextClass = '';
    let inputThemeClass = '';
    let submitBtnClass = '';

    if (preset.id === 'estilo1') {
      modalBgClass = 'bg-white border-2 border-[#8B1E1E]/30 text-stone-900 rounded-2xl';
      headerTextClass = 'vukata-font-title text-[#8B1E1E] font-bold text-base tracking-wider';
      inputThemeClass = 'bg-[#F4F5F7] border-stone-300 text-stone-900 focus:ring-[#8B1E1E] focus:border-[#8B1E1E]';
      submitBtnClass = 'btn-vukata-primary font-bold py-3.5 rounded-xl text-xs';
    } else if (preset.id === 'estilo2') {
      modalBgClass = 'bg-[#0a0f1e] border border-slate-700 text-slate-100 rounded-3xl';
      headerTextClass = 'font-sans text-white font-bold font-mono text-sky-400';
      inputThemeClass = 'bg-[#070a13] border-slate-700 text-white focus:ring-sky-500 focus:border-sky-500';
      submitBtnClass = 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/25';
    } else if (preset.id === 'estilo3') {
      modalBgClass = 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] font-serif rounded-xl';
      headerTextClass = 'bistro-serif text-[#3d3228] font-bold';
      inputThemeClass = 'bg-white border-[#8c7b6c] text-[#2b2520] focus:ring-[#8c7b6c] focus:border-[#8c7b6c] font-sans';
      submitBtnClass = 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold py-3.5 rounded text-xs shadow';
    } else {
      modalBgClass = 'bg-white border border-zinc-200 text-zinc-900 rounded-none';
      headerTextClass = 'font-light tracking-widest uppercase text-zinc-900 text-xs';
      inputThemeClass = 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:ring-zinc-900 focus:border-zinc-900 rounded-none';
      submitBtnClass = 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none text-xs';
    }

    container.innerHTML = `
      <div id="checkout-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
        <div class="modal-animate max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border ${modalBgClass}">
          
          <div class="p-5 border-b ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#FAF9F7]' : preset.id === 'estilo2' ? 'border-slate-800' : 'border-zinc-200'} flex justify-between items-center flex-shrink-0">
            <h3 class="text-base ${headerTextClass}">Tramitar Comanda · ${preset.name}</h3>
            <button id="close-checkout-modal" class="opacity-70 hover:opacity-100 text-lg">✕</button>
          </div>

          <form id="checkout-form" class="p-5 space-y-4 text-xs overflow-y-auto flex-1">
            <div>
              <label class="block font-semibold uppercase mb-2">Modalidad de Servicio</label>
              <div class="grid grid-cols-3 gap-2">
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center ${preset.id === 'estilo1' ? 'border-[#8B1E1E] bg-red-50 text-[#8B1E1E]' : preset.id === 'estilo2' ? 'border-sky-500 bg-sky-950/40 text-sky-200' : 'border-blue-500 bg-blue-50 text-blue-900'}">
                  <input type="radio" name="order-type" value="mesa" checked class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🪑</span>
                  <span class="font-bold text-[11px]">En Mesa</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center opacity-80 hover:opacity-100 ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#F4F5F7]' : 'border-zinc-300'}">
                  <input type="radio" name="order-type" value="recogida" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛍️</span>
                  <span class="font-bold text-[11px]">Para Llevar</span>
                </label>
                <label class="flex flex-col items-center p-3 border rounded-xl cursor-pointer text-center opacity-80 hover:opacity-100 ${preset.id === 'estilo1' ? 'border-stone-200 bg-[#F4F5F7]' : 'border-zinc-300'}">
                  <input type="radio" name="order-type" value="delivery" class="hidden order-type-radio"/>
                  <span class="text-lg mb-1">🛵</span>
                  <span class="font-bold text-[11px]">Directo 0%</span>
                </label>
              </div>
            </div>

            <div id="table-input-block">
              <label class="block font-semibold uppercase mb-1">Número de Mesa</label>
              <input type="text" id="order-table" value="Mesa 4" required class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div>
              <label class="block font-semibold uppercase mb-1">Nombre del Cliente / Comensal</label>
              <input type="text" id="order-customer" value="Visita Comercial" required class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div>
              <label class="block font-semibold uppercase mb-1">Observaciones para Cocina</label>
              <input type="text" id="order-notes" placeholder="Ej: carne al punto, salsa aparte..." class="w-full border rounded-xl px-3 py-2 text-xs focus:outline-none ${inputThemeClass}"/>
            </div>

            <div class="p-4 rounded-xl border ${preset.id === 'estilo1' ? 'bg-[#F4F5F7] border-stone-200' : preset.id === 'estilo2' ? 'bg-slate-950 border-slate-800' : 'bg-zinc-50 border-zinc-200'}">
              <span class="font-bold block mb-1">Resumen de Comanda</span>
              <p class="opacity-75">${cart.length} productos · Total: <span class="font-mono font-bold">${formatCurrency(total)}</span></p>
              <span class="text-[11px] text-emerald-400 block mt-1">✓ 0€ de comisión para el restaurante</span>
            </div>

            <button type="submit" class="w-full ${submitBtnClass} shadow flex items-center justify-center space-x-2">
              <span>Enviar a Pantalla de Cocina (KDS)</span>
              ${ICONS.arrow}
            </button>
          </form>

        </div>
      </div>
    `;

    // Interacción formulario checkout
    const form = document.getElementById('checkout-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = form.querySelector('input[name="order-type"]:checked').value;
        const table = document.getElementById('order-table').value;
        const customer = document.getElementById('order-customer').value;
        const notes = document.getElementById('order-notes').value;

        const newOrder = {
          id: `ORD-${Math.floor(100 + Math.random() * 900)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: type,
          tableNumber: type === 'mesa' ? table : (type === 'recogida' ? 'Take Away' : 'Domicilio'),
          customerName: customer,
          items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price, notes: notes })),
          total: total,
          status: 'pending',
          elapsedMinutes: 0
        };

        store.state.orders.unshift(newOrder);
        cart.forEach(item => {
          store.incrementDishSale(item.id, item.qty);
        });
        store.clearCart();
        container.innerHTML = '';
        this.showToast(`✓ Comanda ${newOrder.id} enviada al KDS de cocina`);
        store.setView('kds');
      });
    }
  }

  // =========================================================================
  // VISTA 2: COMANDERO KDS DE COCINA
  // =========================================================================
  renderKdsView(container, preset) {
    const orders = store.state.orders;
    const isDark = (preset.id === 'estilo2');
    const isVukata = (preset.id === 'estilo1');

    if (isVukata) {
      container.innerHTML = `
        <div class="space-y-6 text-stone-900">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#E52D27] animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Sistema KDS en Vivo · Sala y Brasas</span>
              </div>
              <h2 class="vukata-font-title text-2xl sm:text-3xl font-black text-stone-950 mt-1">Comandero de Cocina · VU<span class="text-[#E52D27]">KA</span>TA</h2>
              <p class="text-xs vukata-font-desc text-stone-600 mt-1">Sincronización instantánea con los pedidos de la carta digital.</p>
            </div>

            <div class="flex items-center space-x-2">
              <button id="simulate-order-btn" class="btn-vukata-primary text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow flex items-center space-x-1.5 cursor-pointer">
                <span>+ Generar Comanda Demo</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- COLUMNA 1: PENDIENTES -->
            <div class="bg-white border-2 border-amber-400/50 rounded-2xl p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <h3 class="vukata-font-title font-bold text-xs uppercase tracking-wider text-stone-900">Pendiente (${orders.filter(o => o.status === 'pending').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'pending'), preset)}
              </div>
            </div>

            <!-- COLUMNA 2: EN PREPARACIÓN -->
            <div class="bg-white border-2 border-[#8B1E1E]/40 rounded-2xl p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#E52D27]"></span>
                  <h3 class="vukata-font-title font-bold text-xs uppercase tracking-wider text-[#8B1E1E]">En Fuego / Parrilla (${orders.filter(o => o.status === 'cooking').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'cooking'), preset)}
              </div>
            </div>

            <!-- COLUMNA 3: LISTOS PARA SALA / SALIR -->
            <div class="bg-white border-2 border-emerald-500/40 rounded-2xl p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <h3 class="vukata-font-title font-bold text-xs uppercase tracking-wider text-emerald-800">Pase Listo para Servir (${orders.filter(o => o.status === 'ready').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'ready'), preset)}
              </div>
            </div>

          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="space-y-6 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div class="flex items-center space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-wider font-mono text-emerald-400">Sistema KDS en Vivo</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Comandero de Cocina · ${preset.name}</h2>
              <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Sincronización instantánea con los pedidos de la carta digital.</p>
            </div>

            <div class="flex items-center space-x-2">
              <button id="simulate-order-btn" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow flex items-center space-x-1.5">
                <span>+ Generar Comanda Demo</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- COLUMNA 1: PENDIENTES -->
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <h3 class="font-bold text-xs uppercase tracking-wider">Pendiente (${orders.filter(o => o.status === 'pending').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'pending'), preset)}
              </div>
            </div>

            <!-- COLUMNA 2: EN PREPARACIÓN -->
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <h3 class="font-bold text-xs uppercase tracking-wider">En Marcha (${orders.filter(o => o.status === 'cooking').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'cooking'), preset)}
              </div>
            </div>

            <!-- COLUMNA 3: LISTOS PARA SALA / SALIR -->
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} rounded-2xl border p-4 shadow-sm">
              <div class="flex items-center justify-between pb-3 border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} mb-4">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <h3 class="font-bold text-xs uppercase tracking-wider">Pase Listo (${orders.filter(o => o.status === 'ready').length})</h3>
                </div>
              </div>
              <div class="space-y-3">
                ${this.renderKdsOrderCards(orders.filter(o => o.status === 'ready'), preset)}
              </div>
            </div>

          </div>
        </div>
      `;
    }

    // Botón simular comanda
    const simBtn = document.getElementById('simulate-order-btn');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        const p = store.getPreset();
        const randDish = p.menu[Math.floor(Math.random() * p.menu.length)];
        const newOrder = {
          id: `ORD-${Math.floor(200 + Math.random() * 800)}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "mesa",
          tableNumber: `Mesa ${Math.floor(1 + Math.random() * 8)}`,
          customerName: "Comensal Demo",
          items: [{ id: randDish.id, name: randDish.name, qty: 1, price: randDish.price }],
          total: randDish.price,
          status: "pending",
          elapsedMinutes: 1
        };
        store.state.orders.unshift(newOrder);
        store.incrementDishSale(randDish.id, 1);
        this.showToast(`✓ Nueva comanda demo generada: ${newOrder.id}`);
        this.renderKdsView(container, preset);
      });
    }

    // Botones de cambio de estado KDS
    container.querySelectorAll('[data-kds-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const orderId = btn.getAttribute('data-order-id');
        const nextStatus = btn.getAttribute('data-kds-action');
        const order = store.state.orders.find(o => o.id === orderId);
        if (order) {
          order.status = nextStatus;
          store.save();
          this.renderKdsView(container, preset);
        }
      });
    });
  }

  renderKdsOrderCards(orders, preset) {
    if (orders.length === 0) {
      return `<p class="text-xs text-stone-500 py-6 text-center">Sin comandas en este estado</p>`;
    }

    if (preset.id === 'estilo1') {
      return orders.map(order => `
        <div class="bg-[#F4F5F7] border border-stone-300/80 p-3.5 rounded-xl text-xs space-y-2.5 shadow-sm">
          <div class="flex justify-between items-start">
            <div>
              <span class="font-bold font-mono text-[#8B1E1E] text-xs">${order.id}</span>
              <span class="vukata-font-dish font-black text-base text-stone-950 block mt-0.5">${order.tableNumber} · ${order.customerName}</span>
            </div>
            <span class="text-[10px] font-mono text-stone-500 font-semibold">${order.timestamp}</span>
          </div>

          <div class="border-t border-stone-200 pt-2 space-y-1">
            ${order.items.map(item => `
              <div class="flex justify-between items-center text-xs">
                <span class="vukata-font-dish font-bold text-stone-900">${item.qty}x ${item.name}</span>
              </div>
            `).join('')}
          </div>

          <div class="pt-2 border-t border-stone-200 flex items-center justify-between">
            <span class="vukata-font-dish font-black text-base text-[#8B1E1E]">${formatCurrency(order.total)}</span>
            <div>
              ${order.status === 'pending' ? `
                <button data-order-id="${order.id}" data-kds-action="cooking" class="btn-vukata-primary text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow-sm cursor-pointer">
                  A la Parrilla 🔥
                </button>
              ` : order.status === 'cooking' ? `
                <button data-order-id="${order.id}" data-kds-action="ready" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow-sm cursor-pointer">
                  Emplatar
                </button>
              ` : `
                <button data-order-id="${order.id}" data-kds-action="served" class="bg-stone-800 hover:bg-stone-700 text-white font-bold text-[11px] px-3 py-1 rounded-lg shadow-sm cursor-pointer">
                  Servir a Mesa
                </button>
              `}
            </div>
          </div>
        </div>
      `).join('');
    }

    const isDark = (preset.id === 'estilo2');

    return orders.map(order => `
      <div class="${isDark ? 'bg-stone-950 border-stone-800' : 'bg-slate-50 border-slate-200'} p-3.5 rounded-xl border text-xs space-y-2.5 shadow-sm">
        <div class="flex justify-between items-start">
          <div>
            <span class="font-bold font-mono text-blue-400">${order.id}</span>
            <span class="font-bold block text-sm mt-0.5">${order.tableNumber} · ${order.customerName}</span>
          </div>
          <span class="text-[10px] font-mono text-stone-400">${order.timestamp}</span>
        </div>

        <div class="border-t ${isDark ? 'border-stone-800' : 'border-slate-200'} pt-2 space-y-1">
          ${order.items.map(item => `
            <div class="flex justify-between items-center text-xs">
              <span class="font-semibold">${item.qty}x ${item.name}</span>
            </div>
          `).join('')}
        </div>

        <div class="pt-2 border-t ${isDark ? 'border-stone-800' : 'border-slate-200'} flex items-center justify-between">
          <span class="font-mono font-bold">${formatCurrency(order.total)}</span>
          <div>
            ${order.status === 'pending' ? `
              <button data-order-id="${order.id}" data-kds-action="cooking" class="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Iniciar Fuego
              </button>
            ` : order.status === 'cooking' ? `
              <button data-order-id="${order.id}" data-kds-action="ready" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Emplatar
              </button>
            ` : `
              <button data-order-id="${order.id}" data-kds-action="served" class="bg-stone-700 hover:bg-stone-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-lg">
                Servir a Sala
              </button>
            `}
          </div>
        </div>
      </div>
    `).join('');
  }

  // =========================================================================
  // VISTA 3: MÉTRICAS Y CONTROL DE SALA
  // =========================================================================
  renderMetricsView(container, preset) {
    const orders = store.state.orders;
    const totalSales = orders.reduce((acc, o) => acc + o.total, 0);
    const avgTicket = orders.length > 0 ? (totalSales / orders.length) : 0;
    const isDark = (preset.id === 'estilo2');

    if (preset.id === 'estilo1') {
      container.innerHTML = `
        <div class="space-y-8 text-stone-900">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Panel de Control y Rendimiento</span>
            <h2 class="vukata-font-title text-2xl sm:text-3xl font-black text-stone-950 mt-1">Métricas de Servicio · VU<span class="text-[#E52D27]">KA</span>TA</h2>
            <p class="text-xs vukata-font-desc text-stone-600 mt-1">Datos actualizados al minuto con cada comanda tramitada en sala o brasa.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-stone-500">Facturación Estimada Hoy</span>
              <p class="text-3xl sm:text-4xl font-black mt-2 vukata-font-dish text-[#8B1E1E]">${formatCurrency(totalSales)}</p>
            </div>

            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-stone-500">Comandas en Servicio</span>
              <p class="text-3xl sm:text-4xl font-black mt-2 vukata-font-dish text-stone-950">${orders.length}</p>
            </div>

            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-stone-500">Ticket Medio</span>
              <p class="text-3xl sm:text-4xl font-black mt-2 vukata-font-dish text-stone-950">${formatCurrency(avgTicket)}</p>
            </div>

            <div class="bg-white border-2 border-stone-200 p-6 rounded-2xl shadow-sm">
              <span class="text-[11px] font-bold uppercase vukata-font-title text-emerald-700">Ahorro frente a Agregadores</span>
              <p class="text-3xl sm:text-4xl font-black text-emerald-700 mt-2 vukata-font-dish">${formatCurrency(totalSales * 0.30)}</p>
            </div>
          </div>

          <!-- Ranking en Tiempo Real -->
          <div class="bg-white border-2 border-stone-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="vukata-font-title font-bold text-base text-stone-950">Rotación de Platos en Sala (Tiempo Real)</h3>
                <p class="text-xs text-stone-500 font-sans mt-0.5">Listado completo con scroll independiente y visualización de precios unitarios</p>
              </div>
              <span class="text-xs font-mono font-bold text-[#8B1E1E] bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg">${preset.menu.length} Platos</span>
            </div>
            <div class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              ${preset.menu.map(dish => {
                const count = store.getDishSalesCount(dish.id);
                return `
                  <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 bg-[#F4F5F7] border border-stone-200 rounded-xl text-xs">
                    <div class="flex items-center space-x-2.5 min-w-0">
                      <span class="font-bold text-[#8B1E1E] w-8 font-mono text-sm flex-shrink-0">${count}x</span>
                      <span class="vukata-font-dish font-black text-base text-stone-950 truncate max-w-[160px] sm:max-w-none">${dish.name}</span>
                      <span class="text-stone-500 hidden sm:inline font-sans text-xs">(${dish.category})</span>
                    </div>
                    <div class="flex items-center space-x-3 flex-shrink-0">
                      <span class="text-stone-500 font-mono text-[11px] hidden sm:inline">PVP: ${formatCurrency(dish.price)}</span>
                      <span class="vukata-font-dish font-black text-base text-[#8B1E1E]">${formatCurrency(dish.price * count)}</span>
                      <button data-quick-simulate-dish="${dish.id}" class="btn-vukata-primary text-white px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer">
                        +1 Venta
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="space-y-8 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Panel de Control</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold mt-1">Métricas de Servicio · ${preset.name}</h2>
            <p class="text-xs ${isDark ? 'text-stone-400' : 'text-slate-500'} mt-1">Datos actualizados al minuto con cada comanda tramitada.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-slate-400">Facturación Estimada Hoy</span>
              <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono text-amber-400">${formatCurrency(totalSales)}</p>
            </div>

            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-slate-400">Comandas en Servicio</span>
              <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono">${orders.length}</p>
            </div>

            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-slate-400">Ticket Medio</span>
              <p class="text-2xl sm:text-3xl font-bold mt-2 font-mono">${formatCurrency(avgTicket)}</p>
            </div>

            <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-2xl border shadow-sm">
              <span class="text-xs font-semibold uppercase text-emerald-500">Ahorro frente a Agregadores</span>
              <p class="text-2xl sm:text-3xl font-bold text-emerald-500 mt-2 font-mono">${formatCurrency(totalSales * 0.30)}</p>
            </div>
          </div>

          <!-- Ranking en Tiempo Real -->
          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 rounded-3xl border shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-base">Rotación de Platos en Sala (Tiempo Real)</h3>
              <span class="text-xs font-mono opacity-60">${preset.menu.length} Platos</span>
            </div>
            <div class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              ${preset.menu.map(dish => {
                const count = store.getDishSalesCount(dish.id);
                return `
                  <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 p-3 ${isDark ? 'bg-stone-950/80 border-stone-800' : 'bg-slate-50 border-slate-200'} border rounded-xl text-xs">
                    <div class="flex items-center space-x-2.5 min-w-0">
                      <span class="font-bold text-amber-400 w-7 font-mono flex-shrink-0">${count}x</span>
                      <span class="font-semibold truncate max-w-[160px] sm:max-w-none">${dish.name}</span>
                      <span class="text-slate-400 hidden sm:inline">(${dish.category})</span>
                    </div>
                    <div class="flex items-center space-x-3 flex-shrink-0">
                      <span class="font-mono text-[11px] opacity-60 hidden sm:inline">PVP: ${formatCurrency(dish.price)}</span>
                      <span class="font-mono font-bold">${formatCurrency(dish.price * count)}</span>
                      <button data-quick-simulate-dish="${dish.id}" class="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-lg text-[11px] font-bold">
                        +1 Venta
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // =========================================================================
  // VISTA 4: RESERVAS ONLINE
  // =========================================================================
  renderReservationsView(container, preset) {
    const today = new Date().toISOString().split('T')[0];
    const isDark = (preset.id === 'estilo2');

    if (preset.id === 'estilo1') {
      container.innerHTML = `
        <div class="max-w-3xl mx-auto bg-white border-2 border-[#8B1E1E]/30 text-stone-900 rounded-3xl shadow-md p-6 sm:p-10">
          <div class="border-b border-stone-200 pb-6 mb-8">
            <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Motor de Reservas Directas</span>
            <h2 class="vukata-font-title text-2xl sm:text-3xl font-black text-stone-950 mt-1">Reserva de Mesa · VU<span class="text-[#E52D27]">KA</span>TA</h2>
            <p class="text-sm vukata-font-desc text-stone-600 mt-2">Sin comisiones por cubierto ni intermediarios. Confirmación inmediata en parrilla.</p>
          </div>

          <form id="reservation-form" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Fecha</label>
                <input type="date" id="res-date" value="${today}" min="${today}" required class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"/>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Turno</label>
                <select id="res-turn" class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                  <option value="Comida (13:30h - 14:30h)">Comida (13:30h - 14:30h)</option>
                  <option value="Comida (14:30h - 16:00h)">Comida (14:30h - 16:00h)</option>
                  <option value="Cena (20:30h - 21:30h)">Cena (20:30h - 21:30h)</option>
                  <option value="Cena (21:30h - 23:00h)">Cena (21:30h - 23:00h)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Comensales</label>
                <select id="res-guests" class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                  <option value="2 personas">2 personas</option>
                  <option value="4 personas" selected>4 personas</option>
                  <option value="6 personas">6 personas</option>
                  <option value="8 personas">8 personas</option>
                  <option value="Mesa Grande (10+)">Mesa Grande (10+ personas)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Preferencia de Sala</label>
                <select id="res-zone" class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]">
                  <option value="Comedor Principal">Comedor Principal</option>
                  <option value="Zona Parrilla">Junto a la Brasa</option>
                  <option value="Terraza Exterior">Terraza Exterior</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-200">
              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Nombre Completo</label>
                <input type="text" id="res-name" placeholder="Ej: Ignacio Ramos" required class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"/>
              </div>

              <div>
                <label class="block text-xs font-bold uppercase vukata-font-title text-stone-700 mb-2">Teléfono de Contacto</label>
                <input type="tel" id="res-phone" placeholder="600 000 000" required class="w-full bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E1E]"/>
              </div>
            </div>

            <button type="submit" class="w-full btn-vukata-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2 cursor-pointer">
              <span>Confirmar Reserva en Parrilla Vukata</span>
              ${ICONS.arrow}
            </button>
          </form>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="max-w-3xl mx-auto ${isDark ? 'bg-stone-900 border-stone-800 text-stone-100' : 'bg-white border-slate-200 text-slate-900'} rounded-3xl border shadow-sm p-6 sm:p-10">
          <div class="border-b ${isDark ? 'border-stone-800' : 'border-slate-100'} pb-6 mb-8">
            <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Motor de Reservas Directas</span>
            <h2 class="text-2xl sm:text-3xl font-bold mt-1">Reserva de Mesa · ${preset.name}</h2>
            <p class="text-sm text-slate-400 mt-2">Sin comisiones por cubierto ni intermediarios. Confirmación inmediata.</p>
          </div>

          <form id="reservation-form" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Fecha</label>
                <input type="date" id="res-date" value="${today}" min="${today}" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Turno</label>
                <select id="res-turn" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                  <option value="Comida (13:30h - 14:30h)">Comida (13:30h - 14:30h)</option>
                  <option value="Comida (14:30h - 16:00h)">Comida (14:30h - 16:00h)</option>
                  <option value="Cena (20:30h - 21:30h)">Cena (20:30h - 21:30h)</option>
                  <option value="Cena (21:30h - 23:00h)">Cena (21:30h - 23:00h)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Comensales</label>
                <select id="res-guests" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                  <option value="2 personas">2 personas</option>
                  <option value="4 personas" selected>4 personas</option>
                  <option value="6 personas">6 personas</option>
                  <option value="8 personas">8 personas</option>
                  <option value="Mesa Grande (10+)">Mesa Grande (10+ personas)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Preferencia de Sala</label>
                <select id="res-zone" class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none">
                  <option value="Comedor Principal">Comedor Principal</option>
                  <option value="Terraza Exterior">Terraza Exterior</option>
                  <option value="Zona Barra">Zona Barra</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t ${isDark ? 'border-stone-800' : 'border-slate-100'}">
              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Nombre Completo</label>
                <input type="text" id="res-name" placeholder="Ej: Ignacio Ramos" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
              </div>

              <div>
                <label class="block text-xs font-semibold uppercase mb-2">Teléfono de Contacto</label>
                <input type="tel" id="res-phone" placeholder="600 000 000" required class="w-full ${isDark ? 'bg-stone-950 border-stone-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'} border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none"/>
              </div>
            </div>

            <button type="submit" class="w-full btn-devcorp-primary py-3.5 rounded-xl font-bold text-sm tracking-wide shadow flex items-center justify-center space-x-2">
              <span>Confirmar Reserva Directa</span>
              ${ICONS.arrow}
            </button>
          </form>
        </div>
      `;
    }

    const form = document.getElementById('reservation-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('res-name').value;
        const date = document.getElementById('res-date').value;
        const turn = document.getElementById('res-turn').value;
        const guests = document.getElementById('res-guests').value;
        this.showToast(`✓ Reserva confirmada para ${name} (${guests}, ${date} en ${turn})`);
        form.reset();
      });
    }
  }

  // =========================================================================
  // VISTA 5: CALCULADORA DE RENTABILIDAD Y AHORRO
  // =========================================================================
  renderRoiView(container, preset) {
    let ordersSlider = 400;
    let ticketSlider = 26;
    const isDark = (preset.id === 'estilo2');

    const calculateSavings = (orders, ticket) => {
      const grossMonthly = orders * ticket;
      const avgCommissionRate = 0.30;
      const commissionMonthly = grossMonthly * avgCommissionRate;
      const commissionAnnual = commissionMonthly * 12;
      return {
        grossMonthly,
        monthlySavings: commissionMonthly,
        annualSavings: commissionAnnual
      };
    };

    const renderCalculation = () => {
      const data = calculateSavings(ordersSlider, ticketSlider);
      const resContainer = document.getElementById('roi-results-container');
      if (!resContainer) return;

      if (preset.id === 'estilo1') {
        resContainer.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 sm:p-8 rounded-3xl bg-red-50 border-2 border-red-200 text-stone-900 shadow-sm">
              <span class="text-xs vukata-font-title font-bold uppercase text-[#8B1E1E] flex items-center space-x-1.5">
                <span>✕</span>
                <span>Con Plataformas de Agregación (30% Comisión)</span>
              </span>
              <h3 class="vukata-font-title text-xl font-bold text-[#8B1E1E] mt-4">Comisiones que asume el restaurante</h3>
              <div class="mt-6 space-y-3 text-xs text-stone-700">
                <div class="flex justify-between pb-2 border-b border-red-200 font-sans">
                  <span>Comisión media mensual:</span>
                  <span class="vukata-font-dish font-black text-lg text-[#8B1E1E]">-${formatCurrency(data.monthlySavings)} / mes</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-red-200 font-sans">
                  <span>Pérdida anual acumulada:</span>
                  <span class="vukata-font-dish font-black text-lg text-[#8B1E1E]">-${formatCurrency(data.annualSavings)} / año</span>
                </div>
              </div>
            </div>

            <div class="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#8B1E1E]/30 text-stone-900 shadow-md relative overflow-hidden">
              <div class="relative z-10">
                <span class="text-xs vukata-font-title font-bold uppercase text-emerald-700 flex items-center space-x-1.5">
                  <span>✓</span>
                  <span>Con Sistema Web Propio DevCorp · VU<span class="text-[#E52D27]">KA</span>TA</span>
                </span>
                <h3 class="vukata-font-title text-xl font-black text-stone-950 mt-4">El 100% de la venta para el asador</h3>
                <div class="mt-6 space-y-3 text-xs text-stone-700">
                  <div class="flex justify-between pb-2 border-b border-stone-200 font-sans">
                    <span>Comisión por pedido:</span>
                    <span class="vukata-font-dish font-black text-lg text-emerald-700">0,00 € (0%)</span>
                  </div>
                  <div class="bg-red-50/70 p-4 rounded-xl text-center border-2 border-[#8B1E1E]/20 mt-4">
                    <span class="text-xs uppercase vukata-font-title text-[#8B1E1E] block font-bold">Ahorro Anual que Conserva Parrilla Vukata:</span>
                    <span class="text-3xl sm:text-4xl font-black text-[#8B1E1E] vukata-font-dish mt-1 block">+${formatCurrency(data.annualSavings)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        resContainer.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div class="p-6 rounded-3xl bg-red-950/30 border border-red-800/50 text-stone-100">
              <span class="text-xs font-mono font-bold uppercase text-red-400 flex items-center space-x-1.5">
                <span>✕</span>
                <span>Con Plataformas de Agregación (30% Comisión)</span>
              </span>
              <h3 class="text-xl font-bold text-red-200 mt-4">Comisiones que asume el restaurante</h3>
              <div class="mt-6 space-y-3 text-xs text-stone-300">
                <div class="flex justify-between pb-2 border-b border-red-900/60">
                  <span>Comisión media mensual:</span>
                  <span class="font-mono font-bold text-red-400">-${formatCurrency(data.monthlySavings)} / mes</span>
                </div>
                <div class="flex justify-between pb-2 border-b border-red-900/60">
                  <span>Pérdida anual acumulada:</span>
                  <span class="font-mono font-bold text-red-400">-${formatCurrency(data.annualSavings)} / año</span>
                </div>
              </div>
            </div>

            <div class="p-6 rounded-3xl bg-emerald-950/40 border border-emerald-700/60 text-stone-100 relative overflow-hidden">
              <div class="relative z-10">
                <span class="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center space-x-1.5">
                  <span>✓</span>
                  <span>Con Sistema Web Propio DevCorp GastroSuite</span>
                </span>
                <h3 class="text-xl font-bold text-emerald-300 mt-4">El 100% de la venta para el restaurante</h3>
                <div class="mt-6 space-y-3 text-xs text-stone-300">
                  <div class="flex justify-between pb-2 border-b border-emerald-900/60">
                    <span>Comisión por pedido:</span>
                    <span class="font-mono font-bold text-emerald-400">0,00 € (0%)</span>
                  </div>
                  <div class="bg-emerald-900/40 p-4 rounded-xl text-center border border-emerald-700 mt-4">
                    <span class="text-xs uppercase text-emerald-200 block font-semibold">Ahorro Anual que Conserva el Negocio:</span>
                    <span class="text-3xl font-black text-emerald-300 font-mono mt-1 block">+${formatCurrency(data.annualSavings)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    };

    if (preset.id === 'estilo1') {
      container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-8 text-stone-900">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs font-bold uppercase tracking-wider vukata-font-title text-[#8B1E1E]">Rentabilidad y Márgenes</span>
            <h2 class="vukata-font-title text-2xl sm:text-4xl font-black text-stone-950 mt-1">Comparativa de Comisiones de Delivery · VU<span class="text-[#E52D27]">KA</span>TA</h2>
            <p class="text-xs sm:text-sm vukata-font-desc text-stone-600 mt-2">Calcula cuánto dinero ahorra Parrilla Vukata al operar su propio canal directo sin comisiones por pedido.</p>
          </div>

          <div class="bg-white border-2 border-stone-200 p-6 sm:p-8 rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase vukata-font-title text-stone-700">Pedidos mensuales (Delivery / Takeaway):</label>
                <span id="orders-val" class="vukata-font-dish font-black text-[#8B1E1E] text-lg">400 pedidos</span>
              </div>
              <input type="range" id="orders-slider" min="50" max="1500" step="25" value="400" class="w-full h-2 bg-stone-200 accent-[#8B1E1E] rounded-lg cursor-pointer"/>
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase vukata-font-title text-stone-700">Ticket medio por pedido:</label>
                <span id="ticket-val" class="vukata-font-dish font-black text-[#8B1E1E] text-lg">26,00 €</span>
              </div>
              <input type="range" id="ticket-slider" min="12" max="75" step="1" value="26" class="w-full h-2 bg-stone-200 accent-[#8B1E1E] rounded-lg cursor-pointer"/>
            </div>
          </div>

          <div id="roi-results-container"></div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-8 ${isDark ? 'text-stone-100' : 'text-slate-900'}">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs font-bold uppercase tracking-wider font-mono text-blue-500">Rentabilidad y Márgenes</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold mt-1">Comparativa de Comisiones de Delivery</h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-2">Calcula cuánto dinero ahorra un restaurante al operar su propio canal directo sin comisiones por pedido.</p>
          </div>

          <div class="${isDark ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200'} p-6 sm:p-8 rounded-3xl border shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase">Pedidos mensuales (Delivery / Takeaway):</label>
                <span id="orders-val" class="font-mono font-bold text-blue-500 text-base">400 pedidos</span>
              </div>
              <input type="range" id="orders-slider" min="50" max="1500" step="25" value="400" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-xs font-bold uppercase">Ticket medio por pedido:</label>
                <span id="ticket-val" class="font-mono font-bold text-blue-500 text-base">26,00 €</span>
              </div>
              <input type="range" id="ticket-slider" min="12" max="75" step="1" value="26" class="w-full h-2 bg-slate-700 rounded-lg cursor-pointer"/>
            </div>
          </div>

          <div id="roi-results-container"></div>
        </div>
      `;
    }

    renderCalculation();

    const oSlider = document.getElementById('orders-slider');
    const tSlider = document.getElementById('ticket-slider');
    const oVal = document.getElementById('orders-val');
    const tVal = document.getElementById('ticket-val');

    if (oSlider && tSlider) {
      oSlider.addEventListener('input', (e) => {
        ordersSlider = parseInt(e.target.value);
        oVal.innerText = `${ordersSlider} pedidos`;
        renderCalculation();
      });
      tSlider.addEventListener('input', (e) => {
        ticketSlider = parseInt(e.target.value);
        tVal.innerText = `${ticketSlider},00 €`;
        renderCalculation();
      });
    }
  }

  // =========================================================================
  // SECCIÓN DE RESEÑAS DE GOOGLE (LLAMATIVAS CON ESTRELLAS Y BOTONES EN LOS 4 ESTILOS)
  // =========================================================================
  renderGoogleReviewsSection(preset) {
    const starRow = Array(5).fill(ICONS.star).join('');

    // --- ESTILO 1: RESTAURANTE PARRILLA VUKATA (EMBER & ASH STITCH) ---
    if (preset.id === 'estilo1') {
      return `
        <section class="mb-16 pt-10 border-t border-[#e6dfd5] text-[#1c1c19]">
          <div class="max-w-[1360px] mx-auto">
            
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-[2px] bg-[#8B1E1E]"></span>
                  <span class="font-kicker-eyebrow text-[#8B1E1E] uppercase tracking-[0.2em]">TESTIMONIOS REALES EN ALUCHE</span>
                </div>
                <h3 class="font-headline-lg text-[#1c1c19]">Lo que opinan de nuestras brasas</h3>
                <p class="font-body-md text-[#57423f] max-w-xl">
                  Reseñas verificadas directamente en Google Maps de comensales que se sientan a nuestra mesa.
                </p>
              </div>

              <!-- Google Badge Card -->
              <div class="inline-flex items-center gap-3 bg-white border border-[#e6dfd5] px-5 py-3 rounded-2xl shadow-xs">
                ${ICONS.google}
                <div>
                  <div class="flex items-center gap-1.5">
                    <span class="font-stat-number text-[20px] font-black text-[#1c1c19]">${preset.rating}</span>
                    <div class="flex text-amber-500">${starRow}</div>
                  </div>
                  <span class="font-body-sm text-xs text-[#57423f]">${preset.totalReviews} reseñas verificadas</span>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${preset.googleReviews.map(r => `
                <div class="bg-white border border-[#e6dfd5] p-7 rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex space-x-1">${starRow}</div>
                      <span class="font-kicker-eyebrow text-[10px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">Verificado</span>
                    </div>
                    <p class="font-body-md text-[#57423f] italic leading-relaxed">"${r.comment}"</p>
                  </div>
                  <div class="mt-6 pt-4 border-t border-[#f1ede8] flex justify-between items-center text-xs">
                    <span class="font-body-md font-bold text-[#1c1c19]">${r.author}</span>
                    <span class="text-[#645d5a] font-sans">${r.timeAgo}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button id="open-smart-review-btn" class="btn-vukata-primary font-label-action text-[13px] px-8 py-3.5 rounded-full shadow-md transition-all transform hover:scale-105 inline-flex items-center space-x-2.5 cursor-pointer">
                ${ICONS.google}
                <span>Escribir Reseña en Google Maps (+5★)</span>
              </button>
              <a href="${preset.googleMapsUrl}" target="_blank" class="inline-flex items-center space-x-2 text-xs font-label-action text-[#8B1E1E] hover:underline">
                <span>Ver ficha oficial de Parrilla Vukata en Google Maps</span>
                <span class="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>

          </div>
        </section>
      `;
    }

    // --- ESTILO 2: APP & BENTO GRID ---
    if (preset.id === 'estilo2') {
      return `
        <section class="mt-16 pt-10 border-t border-slate-800 text-slate-100">
          <div class="bento-card p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div class="flex items-center space-x-2">
                ${ICONS.google}
                <span class="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono">Google Business Profile</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-black text-white mt-1">${preset.rating} de Puntuación en Google</h3>
              <div class="flex items-center space-x-2 mt-2">
                <div class="flex space-x-0.5">${starRow}</div>
                <span class="text-xs font-mono text-slate-300 font-bold">· ${preset.totalReviews} opiniones reales</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-3">
              <button id="open-smart-review-btn" class="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xs px-6 py-3.5 rounded-2xl shadow-xl shadow-sky-500/25 flex items-center justify-center space-x-2.5 transition-transform hover:scale-105 cursor-pointer flex-shrink-0">
                ${ICONS.google}
                <span>★ Valorar en Google Maps</span>
                ${ICONS.arrow}
              </button>
              <a href="${preset.googleMapsUrl}" target="_blank" class="text-xs font-mono text-sky-400 hover:underline flex items-center space-x-1">
                <span>Ficha directa</span>
                ${ICONS.external}
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${preset.googleReviews.map(r => `
              <div class="bento-card p-5 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-2.5">
                    <div class="flex items-center space-x-1.5">
                      <div class="w-6 h-6 rounded-full bg-sky-600 text-white text-[10px] font-bold flex items-center justify-center uppercase">
                        ${r.author.charAt(0)}
                      </div>
                      <span class="font-bold text-xs text-white">${r.author}</span>
                    </div>
                    <div class="flex space-x-0.5">${starRow}</div>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed">${r.comment}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex justify-between">
                  <span class="text-sky-400">${r.badge}</span>
                  <span>${r.timeAgo}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    // --- ESTILO 3: BISTRÓ TRADICIONAL ---
    if (preset.id === 'estilo3') {
      return `
        <section class="mt-16 pt-10 border-t-2 border-[#8c7b6c] text-[#2b2520]">
          <div class="text-center max-w-2xl mx-auto mb-8">
            <div class="inline-flex items-center space-x-2 bg-[#eee7db] border border-[#8c7b6c] px-3.5 py-1.5 rounded-full mb-3 text-xs font-serif text-[#3d3228]">
              ${ICONS.google}
              <span class="font-bold">Opiniones Verificadas en Google Maps · ${preset.rating} ★★★★★</span>
            </div>
            <h3 class="bistro-serif text-2xl sm:text-3xl font-bold mt-1">Libro de Visitas & Reseñas de Google</h3>
            <p class="text-xs font-serif text-[#7a6b5d] mt-1">${preset.totalReviews} comensales han dejado su opinión sobre la cocina y el trato familiar</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${preset.googleReviews.map(r => `
              <div class="bistro-card p-6 flex flex-col justify-between border-2 border-[#dfd7cc]">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex space-x-0.5">${starRow}</div>
                    <span class="text-[10px] font-serif text-[#7a6b5d] font-bold">5.0 / 5</span>
                  </div>
                  <p class="text-xs font-serif italic text-[#594d40] leading-relaxed">"${r.comment}"</p>
                </div>
                <div class="mt-4 pt-3 border-t border-[#dfd7cc] text-[11px] font-serif text-[#7a6b5d] flex justify-between items-center">
                  <span class="font-bold text-[#2b2520]">${r.author}</span>
                  <span class="text-[10px]">${r.badge}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-10 text-center space-y-2">
            <button id="open-smart-review-btn" class="bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif text-xs font-bold px-7 py-3.5 rounded shadow-lg border border-[#8c7b6c] inline-flex items-center space-x-2.5 transition-transform hover:scale-105 cursor-pointer">
              ${ICONS.google}
              <span>★ Añadir una Nota al Libro de Visitas en Google</span>
            </button>
            <div class="text-center">
              <a href="${preset.googleMapsUrl}" target="_blank" class="inline-flex items-center space-x-1.5 text-xs text-[#7a6b5d] hover:text-[#3d3228] underline font-serif">
                <span>Ver ficha oficial en Google Maps</span>
                ${ICONS.external}
              </a>
            </div>
          </div>
        </section>
      `;
    }

    // --- ESTILO 4: MINIMALISMO NÓRDICO ---
    return `
      <section class="mt-16 pt-12 border-t border-zinc-200 text-zinc-900">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-1">
              ${ICONS.google}
              <span class="text-xs font-mono uppercase tracking-widest text-zinc-400">Google Business Verified</span>
            </div>
            <h3 class="text-2xl font-light text-zinc-900 tracking-tight">${preset.rating} ★★★★★ · Experiencias en ${preset.name}</h3>
            <p class="text-xs text-zinc-500 mt-0.5">${preset.totalReviews} clientes han valorado nuestro café y obrador</p>
          </div>

          <div class="flex items-center gap-3 flex-shrink-0">
            <button id="open-smart-review-btn" class="bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-widest text-xs px-6 py-3 rounded-none shadow inline-flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer">
              ${ICONS.google}
              <span>★ Valorar en Google Maps</span>
            </button>
            <a href="${preset.googleMapsUrl}" target="_blank" class="text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 underline flex items-center space-x-1">
              <span>Google Maps</span>
              ${ICONS.external}
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${preset.googleReviews.map(r => `
            <div class="minimal-card p-5 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <div class="flex space-x-0.5">${starRow}</div>
                  <span class="text-[10px] font-mono text-zinc-400">Google Review</span>
                </div>
                <p class="text-xs text-zinc-600 font-light leading-relaxed">"${r.comment}"</p>
              </div>
              <div class="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span class="font-medium text-zinc-800">${r.author}</span>
                <span>${r.timeAgo}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  // =========================================================================
  // MODAL DE RESEÑA INTELIGENTE (100% TEMÁTICO SEGÚN EL ESTILO ACTIVO)
  // =========================================================================
  renderSmartReviewModal(preset) {
    const container = document.getElementById('review-modal-container');
    if (!container) return;

    let theme = {
      card: '',
      headerBorder: '',
      titleClass: '',
      starBtn: '',
      positiveBtn: '',
      negativeWaBtn: '',
      negativeMailBtn: '',
      badgePos: '',
      badgeNeg: '',
      feedbackBox: '',
      feedbackInput: '',
      feedbackBtn: '',
      backBtn: ''
    };

    if (preset.id === 'estilo1') {
      theme = {
        card: 'bg-white border-2 border-[#8B1E1E]/30 text-stone-900 rounded-2xl shadow-2xl',
        headerBorder: 'border-b border-stone-200 bg-[#F4F5F7]',
        titleClass: 'vukata-font-title font-bold text-[#8B1E1E] tracking-wider',
        starBtn: 'border border-amber-300 bg-amber-50 hover:bg-amber-100 hover:border-amber-500 text-amber-500 rounded-xl',
        positiveBtn: 'btn-vukata-primary text-white font-bold uppercase tracking-wider rounded-xl shadow-lg',
        negativeWaBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg',
        negativeMailBtn: 'bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-bold rounded-xl',
        badgePos: 'bg-emerald-50 border border-emerald-200 text-emerald-800',
        badgeNeg: 'bg-amber-50 border border-amber-200 text-amber-900',
        feedbackBox: 'bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl placeholder-stone-500 focus:border-[#8B1E1E]',
        feedbackInput: 'bg-[#F4F5F7] border border-stone-300 text-stone-900 rounded-xl placeholder-stone-500 focus:border-[#8B1E1E]',
        feedbackBtn: 'btn-vukata-primary text-white font-bold rounded-xl',
        backBtn: 'text-stone-500 hover:text-stone-900'
      };
    } else if (preset.id === 'estilo2') {
      theme = {
        card: 'bg-[#0a0f1e] border border-slate-700 text-slate-100 rounded-3xl shadow-2xl shadow-blue-500/10',
        headerBorder: 'border-b border-slate-800',
        titleClass: 'font-mono font-bold text-cyan-400',
        starBtn: 'border border-slate-700 bg-slate-900 hover:border-cyan-400 hover:bg-cyan-950/40 text-cyan-400 rounded-2xl',
        positiveBtn: 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25',
        negativeWaBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20',
        negativeMailBtn: 'bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 font-bold rounded-xl',
        badgePos: 'bg-cyan-950/50 border border-cyan-500/30 text-cyan-300',
        badgeNeg: 'bg-slate-800/80 border border-slate-700 text-slate-300',
        feedbackBox: 'bg-slate-900 border border-slate-700 text-slate-200 rounded-xl placeholder-slate-500 focus:border-cyan-400',
        feedbackInput: 'bg-slate-900 border border-slate-700 text-slate-200 rounded-xl placeholder-slate-500 focus:border-cyan-400',
        feedbackBtn: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-500',
        backBtn: 'text-slate-400 hover:text-cyan-300'
      };
    } else if (preset.id === 'estilo3') {
      theme = {
        card: 'bg-[#fcfbf8] border-2 border-[#8c7b6c] text-[#2b2520] font-serif rounded-xl shadow-2xl',
        headerBorder: 'border-b-2 border-[#8c7b6c]',
        titleClass: 'font-serif font-bold text-[#2b2520]',
        starBtn: 'border border-[#8c7b6c] bg-[#f5efe6] hover:bg-[#ebdcc9] hover:border-[#5a4330] text-[#8c7b6c] hover:text-[#3d3228] rounded-lg',
        positiveBtn: 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold shadow rounded',
        negativeWaBtn: 'bg-[#1e5a32] hover:bg-[#154224] text-white font-serif font-bold rounded shadow',
        negativeMailBtn: 'bg-[#dfd7cc] hover:bg-[#cfc5b6] text-[#3d3228] border border-[#8c7b6c] font-serif font-bold rounded',
        badgePos: 'bg-[#eee7db] border border-[#8c7b6c] text-[#3d3228]',
        badgeNeg: 'bg-[#f0ebe3] border border-[#8c7b6c] text-[#3d3228]',
        feedbackBox: 'bg-[#fbf9f5] border border-[#8c7b6c] text-[#2b2520] font-serif rounded placeholder-[#8c7b6c] focus:border-[#3d3228]',
        feedbackInput: 'bg-[#fbf9f5] border border-[#8c7b6c] text-[#2b2520] font-serif rounded placeholder-[#8c7b6c] focus:border-[#3d3228]',
        feedbackBtn: 'bg-[#3d3228] hover:bg-[#251e18] text-[#f6f3eb] font-serif font-bold rounded',
        backBtn: 'text-[#6e5d50] hover:text-[#2b2520]'
      };
    } else {
      theme = {
        card: 'bg-white border border-zinc-200 text-zinc-900 rounded-none shadow-2xl',
        headerBorder: 'border-b border-zinc-200',
        titleClass: 'font-light uppercase tracking-widest text-zinc-900 text-xs',
        starBtn: 'border border-zinc-300 bg-zinc-50 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 text-zinc-800 rounded-none',
        positiveBtn: 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider py-3.5 rounded-none',
        negativeWaBtn: 'bg-emerald-700 hover:bg-emerald-800 text-white font-medium uppercase tracking-wider py-3 rounded-none shadow-sm',
        negativeMailBtn: 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 font-medium uppercase tracking-wider py-3 rounded-none',
        badgePos: 'bg-zinc-100 border border-zinc-200 text-zinc-800',
        badgeNeg: 'bg-zinc-100 border border-zinc-200 text-zinc-800',
        feedbackBox: 'bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-none placeholder-zinc-400 focus:border-zinc-900',
        feedbackInput: 'bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-none placeholder-zinc-400 focus:border-zinc-900',
        feedbackBtn: 'bg-zinc-900 hover:bg-black text-white font-medium uppercase tracking-wider rounded-none',
        backBtn: 'text-zinc-500 hover:text-zinc-900'
      };
    }

    container.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        <div id="review-modal-backdrop" class="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"></div>
        
        <div class="modal-animate relative z-10 max-w-md w-full p-6 shadow-2xl border ${theme.card} overflow-hidden">
          
          <!-- Header -->
          <div class="flex justify-between items-center pb-4 ${theme.headerBorder}">
            <div class="flex items-center space-x-2.5">
              ${ICONS.google}
              <h3 class="font-bold text-sm sm:text-base ${theme.titleClass}">${preset.name}</h3>
            </div>
            <button id="close-review-modal" class="opacity-60 hover:opacity-100 text-lg transition-opacity p-1 leading-none">✕</button>
          </div>

          <!-- Paso 1: Valoración de 1 a 5 estrellas -->
          <div id="review-step-stars" class="pt-5 pb-2 text-center space-y-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-2xl ${theme.badgePos}">⭐</div>
            <div>
              <h4 class="font-bold text-base sm:text-lg">¿Cómo ha sido tu experiencia hoy?</h4>
              <p class="text-xs opacity-75 mt-1 max-w-xs mx-auto leading-relaxed">
                Selecciona tu puntuación para ofrecernos tu valoración sincera:
              </p>
            </div>

            <div class="flex justify-center items-center space-x-2.5 py-3">
              ${[1, 2, 3, 4, 5].map(stars => `
                <button type="button" data-rate-stars="${stars}" class="w-11 h-11 sm:w-12 sm:h-12 flex flex-col items-center justify-center transition-all transform hover:scale-110 shadow-sm cursor-pointer ${theme.starBtn}">
                  <span class="text-lg leading-none">★</span>
                  <span class="text-[10px] font-mono font-bold mt-0.5">${stars}</span>
                </button>
              `).join('')}
            </div>

            <div class="pt-2 border-t ${theme.headerBorder} text-[11px] opacity-70 flex justify-around">
              <span>★ 1-3: Atención con gerencia</span>
              <span>•</span>
              <span>★ 4-5: Reseña en Google</span>
            </div>
          </div>

          <!-- Paso 2A: Puntuación Alta (4 o 5 estrellas) -> Publicar en Google Maps -->
          <div id="review-step-positive" class="pt-5 pb-2 text-center space-y-4 hidden">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto text-3xl ${theme.badgePos}">🎉</div>
            <div class="space-y-1">
              <span id="pos-stars-badge" class="inline-block px-3 py-1 text-[11px] font-bold rounded-full ${theme.badgePos}">★★★★★ (5/5)</span>
              <h4 class="font-bold text-base sm:text-lg">¡Nos alegra muchísimo tu satisfacción!</h4>
              <p class="text-xs opacity-80 mt-1 max-w-sm mx-auto leading-relaxed">
                Tu opinión en Google Maps ayuda a posicionar a <strong>${preset.name}</strong> y apoya directamente a nuestro equipo. ¿Nos dedicas 15 segundos para publicarla?
              </p>
            </div>

            <div class="pt-2 space-y-3">
              <a href="${preset.googleMapsUrl}" target="_blank" class="w-full ${theme.positiveBtn} py-3.5 px-5 flex items-center justify-center space-x-2 text-xs transition-transform transform hover:scale-[1.02] cursor-pointer">
                ${ICONS.google}
                <span>Publicar Reseña en Google Maps</span>
                ${ICONS.external}
              </a>

              <button type="button" id="review-back-btn-pos" class="block mx-auto text-xs ${theme.backBtn} underline cursor-pointer pt-1">
                ← Cambiar valoración
              </button>
            </div>
          </div>

          <!-- Paso 2B: Puntuación Baja (1, 2 o 3 estrellas) -> Contacto directo con Gerente por WhatsApp o Email -->
          <div id="review-step-negative" class="pt-4 pb-1 text-center space-y-3.5 hidden">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto text-2xl ${theme.badgeNeg}">🤝</div>
            <div class="space-y-1">
              <span id="neg-stars-badge" class="inline-block px-3 py-0.5 text-[11px] font-bold rounded-full ${theme.badgeNeg}">★★★☆☆ (3/5)</span>
              <h4 class="font-bold text-base">Queremos corregirlo de inmediato</h4>
              <p class="text-xs opacity-80 leading-relaxed max-w-sm mx-auto">
                Lamentamos profundamente si algún detalle no cumplió tus expectativas. En <strong>${preset.name}</strong> tu experiencia es lo primero. Contacta directamente con la dirección para darte una solución personalizada:
              </p>
            </div>

            <!-- Botones de contacto directo -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-left">
              <a id="review-wa-link" href="#" target="_blank" class="${theme.negativeWaBtn} py-2.5 px-3 flex items-center justify-center space-x-2 text-xs transition-transform hover:scale-[1.02] cursor-pointer text-center">
                ${ICONS.whatsapp}
                <span>WhatsApp Gerencia</span>
              </a>
              <a id="review-mail-link" href="#" class="${theme.negativeMailBtn} py-2.5 px-3 flex items-center justify-center space-x-2 text-xs transition-transform hover:scale-[1.02] cursor-pointer text-center">
                ${ICONS.mail}
                <span>Email Privado</span>
              </a>
            </div>

            <div class="text-[11px] opacity-70 font-mono text-center">
              Atiende: <span class="font-bold">${preset.managerName || 'Dirección de Sala'}</span>
            </div>

            <!-- Formulario de mensaje privado en el propio modal -->
            <div class="pt-2 border-t ${theme.headerBorder} text-left space-y-2">
              <p class="text-[11px] font-medium opacity-80">O déjanos tu mensaje y te contactamos hoy mismo:</p>
              <textarea id="private-feedback-msg" rows="2" placeholder="¿Qué podemos mejorar de tu visita?..." class="w-full p-2.5 text-xs outline-none ${theme.feedbackBox}"></textarea>
              <div class="flex space-x-2">
                <input type="tel" id="private-feedback-phone" placeholder="Tu teléfono de contacto" class="flex-1 p-2 text-xs outline-none ${theme.feedbackInput}" />
                <button type="button" id="send-private-feedback-btn" class="px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${theme.feedbackBtn}">
                  Enviar
                </button>
              </div>
            </div>

            <button type="button" id="review-back-btn-neg" class="block mx-auto text-xs ${theme.backBtn} underline cursor-pointer pt-1">
              ← Cambiar valoración
            </button>
          </div>

        </div>
      </div>
    `;

    const stepStars = document.getElementById('review-step-stars');
    const stepPos = document.getElementById('review-step-positive');
    const stepNeg = document.getElementById('review-step-negative');
    const posBadge = document.getElementById('pos-stars-badge');
    const negBadge = document.getElementById('neg-stars-badge');
    const waLink = document.getElementById('review-wa-link');
    const mailLink = document.getElementById('review-mail-link');
    const backBtnPos = document.getElementById('review-back-btn-pos');
    const backBtnNeg = document.getElementById('review-back-btn-neg');
    const sendFeedbackBtn = document.getElementById('send-private-feedback-btn');

    // Manejador de clic en estrellas
    container.querySelectorAll('[data-rate-stars]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const stars = parseInt(btn.getAttribute('data-rate-stars'), 10);
        stepStars.classList.add('hidden');

        if (stars >= 4) {
          // Puntuación positiva (4 o 5) -> Google Maps
          const starIcons = '★'.repeat(stars) + '☆'.repeat(5 - stars);
          if (posBadge) posBadge.textContent = `${starIcons} (${stars}/5)`;
          stepPos.classList.remove('hidden');
          stepNeg.classList.add('hidden');
        } else {
          // Puntuación baja (1, 2 o 3) -> Contacto privado con gerente
          const starIcons = '★'.repeat(stars) + '☆'.repeat(5 - stars);
          if (negBadge) negBadge.textContent = `${starIcons} (${stars}/5)`;

          const waText = `Hola, estuve en ${preset.name} y quería comentar un detalle sobre mi servicio (valoración ${stars}/5) con ${preset.managerName || 'la gerencia'}: `;
          if (waLink) {
            waLink.href = `https://wa.me/${preset.whatsapp}?text=${encodeURIComponent(waText)}`;
          }

          const mailSubject = `Comentario sobre el servicio (${stars}/5) - ${preset.name}`;
          const mailBody = `Hola ${preset.managerName || 'Gerencia'},\n\nQuería comentaros mi experiencia en ${preset.name} tras valorar el servicio con ${stars}/5 estrellas:\n\n[Escribe aquí tu comentario]\n\nAtentamente,\n`;
          if (mailLink) {
            mailLink.href = `mailto:${preset.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
          }

          stepNeg.classList.remove('hidden');
          stepPos.classList.add('hidden');
        }
      });
    });

    // Botones para volver al selector de estrellas
    const resetToStars = (e) => {
      e.preventDefault();
      stepStars.classList.remove('hidden');
      stepPos.classList.add('hidden');
      stepNeg.classList.add('hidden');
    };
    if (backBtnPos) backBtnPos.addEventListener('click', resetToStars);
    if (backBtnNeg) backBtnNeg.addEventListener('click', resetToStars);

    // Envío del feedback privado dentro del modal
    if (sendFeedbackBtn) {
      sendFeedbackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const msgElem = document.getElementById('private-feedback-msg');
        const phoneElem = document.getElementById('private-feedback-phone');
        const msg = msgElem ? msgElem.value.trim() : '';
        const phone = phoneElem ? phoneElem.value.trim() : '';

        if (!msg && !phone) {
          alert('Por favor, introduce un breve comentario o teléfono para poder contactarte.');
          return;
        }

        container.innerHTML = '';
        this.showToast(`✓ Mensaje enviado a ${preset.managerName || 'dirección'}. Nos pondremos en contacto contigo.`);
      });
    }
  }

  // =========================================================================
  // FOOTER INDIVIDUALIZADO PARA CADA ESTILO
  // =========================================================================
  renderFooterForStyle(preset) {
    if (preset.id === 'estilo1') {
      return `
        <footer class="w-full bg-[#f3ede4] text-[#1c1c19] py-16 border-t border-[#e2d8cc]">
          <div class="max-w-[1360px] mx-auto px-6 lg:px-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
              
              <!-- Col 1: Marca y Tradición -->
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[#8B1E1E] text-[26px]">local_fire_department</span>
                  <span class="font-headline-sm text-xl tracking-tight text-[#1c1c19] font-bold">VU<span class="text-[#E52D27]">KA</span>TA</span>
                </div>
                <p class="font-body-md text-[#57423f] leading-relaxed">
                  Parrilla tradicional al carbón de encina y maduración artesanal de cortes nobles en Aluche. Experiencia carnívora de excelencia.
                </p>
                <div class="flex items-center gap-2 pt-2 text-[#8B1E1E]">
                  <span class="material-symbols-outlined text-[20px]">verified</span>
                  <span class="font-kicker-eyebrow text-[11px] uppercase tracking-widest font-bold">Carbón de encina 100%</span>
                </div>
              </div>

              <!-- Col 2: Ubicación & Contacto -->
              <div class="space-y-3">
                <span class="font-kicker-eyebrow text-[11px] text-[#8B1E1E] uppercase tracking-widest block font-bold">Ubicación & Contacto</span>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-[#D49B53] text-[20px] mt-0.5">location_on</span>
                  <p class="font-body-md text-[#57423f]">${preset.address}<br/>Aluche, 28024 Madrid</p>
                </div>
                <div class="flex items-center gap-3 pt-2">
                  <span class="material-symbols-outlined text-[#D49B53] text-[20px]">call</span>
                  <a class="font-body-md text-[#1c1c19] hover:text-[#8B1E1E] transition-colors font-medium" href="tel:${preset.phone.replace(/\s+/g, '')}">${preset.phone}</a>
                </div>
              </div>

              <!-- Col 3: Horarios de Brasas -->
              <div class="space-y-3">
                <span class="font-kicker-eyebrow text-[11px] text-[#8B1E1E] uppercase tracking-widest block font-bold">Horarios de Brasas</span>
                <div class="flex items-start gap-3">
                  <span class="material-symbols-outlined text-[#D49B53] text-[20px] mt-0.5">schedule</span>
                  <div class="space-y-1.5 font-body-md text-[#57423f]">
                    <p><strong class="text-[#1c1c19] font-semibold">Comidas:</strong> 12:00 a 17:00</p>
                    <p><strong class="text-[#1c1c19] font-semibold">Cenas:</strong> 19:30 a 00:00</p>
                    <p class="text-[#8B1E1E] font-medium pt-1">Martes cerrado por descanso</p>
                  </div>
                </div>
              </div>

              <!-- Col 4: Servicios & Pedidos -->
              <div class="space-y-3">
                <span class="font-kicker-eyebrow text-[11px] text-[#8B1E1E] uppercase tracking-widest block font-bold">Servicios & Pedidos</span>
                <p class="font-body-md text-[#57423f] leading-relaxed">
                  Disfrute de nuestros asados al momento en sala o solicite recogida en local a través de nuestro servicio take away sin intermediarios ni comisiones.
                </p>
                <div class="pt-2">
                  <a href="#reservas-direct" class="inline-flex items-center gap-2 font-label-action text-[13px] text-[#1c1c19] hover:text-[#8B1E1E] transition-colors font-semibold">
                    <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
                    <span>Reservar Mesa / Take Away →</span>
                  </a>
                </div>
              </div>

            </div>

            <!-- Barra Inferior Legal -->
            <div class="pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#786b5f] text-xs bg-[#e9e1d5]/60 px-6 py-4 rounded-xl border border-[#ded5c8]">
              <p>© 2024 Vukata Asador · GastroSuite by <a href="https://devcorpsolutions.com" target="_blank" class="underline font-semibold hover:text-[#1c1c19]">DevCorp Solutions</a>. Todos los derechos reservados.</p>
              <div class="flex items-center gap-6 font-medium">
                <a class="hover:text-[#1c1c19] transition-colors" href="#">Aviso Legal</a>
                <a class="hover:text-[#1c1c19] transition-colors" href="#">Privacidad</a>
                <a class="hover:text-[#1c1c19] transition-colors" href="https://devcorpsolutions.com" target="_blank">devcorpsolutions.com</a>
              </div>
            </div>

          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo2') {
      return `
        <footer class="bg-[#070a13] border-t border-slate-800 text-slate-400 text-xs py-8">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              <span class="font-bold text-white">${preset.name}</span>
              <span class="text-slate-600">·</span>
              <span class="text-sky-400 font-mono">Canal Directo 0% Comisiones</span>
            </div>
            <div class="flex items-center space-x-4 text-slate-400 font-mono text-[11px]">
              <span>${preset.address}</span>
              <span>·</span>
              <span>${preset.phone}</span>
            </div>
            <div>
              <a href="https://devcorpsolutions.com" target="_blank" class="text-sky-400 hover:text-sky-300 font-mono text-xs">
                Tecnología GastroSuite by DevCorp Solutions
              </a>
            </div>
          </div>
        </footer>
      `;
    }

    if (preset.id === 'estilo3') {
      return `
        <footer class="bg-[#eee7db] border-t-2 border-[#8c7b6c] text-[#594d40] text-xs font-serif py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h4 class="bistro-serif text-lg font-bold text-[#2b2520]">${preset.name}</h4>
            <p class="italic text-xs">${preset.tagline}</p>
            <div class="flex flex-wrap justify-center gap-4 text-xs font-serif text-[#7a6b5d] pt-2">
              <span>${preset.address}</span>
              <span>·</span>
              <span>Teléfono de Encargos: ${preset.phone}</span>
              <span>·</span>
              <span>${preset.serviceNote}</span>
            </div>
            <p class="pt-4 text-[11px] text-[#7a6b5d] border-t border-[#dfd7cc] max-w-md mx-auto font-sans">
              Página oficial sin comisiones desarrollada por <a href="https://devcorpsolutions.com" target="_blank" class="text-[#2b2520] font-bold underline">DevCorp Solutions</a>.
            </p>
          </div>
        </footer>
      `;
    }

    return `
      <footer class="bg-white border-t border-zinc-200 text-zinc-500 text-xs py-12 font-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span class="text-zinc-900 uppercase tracking-widest text-xs font-medium">${preset.name}</span>
            <p class="mt-1 text-zinc-400">${preset.address} · ${preset.openingHours}</p>
          </div>
          <div class="flex items-center space-x-6 text-xs font-mono text-zinc-400">
            <a href="https://devcorpsolutions.com" target="_blank" class="hover:text-zinc-900 transition-colors">DevCorp Solutions</a>
            <span>·</span>
            <span>${preset.name}</span>
          </div>
        </div>
      </footer>
    `;
  }
}

// Inicialización de la SPA
// Inicialización universal segura (compatible con file://, local server y GitHub Pages)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.gastroApp = new GastroApp();
  });
} else {
  window.gastroApp = new GastroApp();
}
