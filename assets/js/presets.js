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
        image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
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
