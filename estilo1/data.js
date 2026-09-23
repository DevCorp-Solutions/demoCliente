// estilo1/data.js - Datos oficiales y configurables para Restaurante Parrilla Vukata
(function() {
  const DEFAULT_DATA = {
  "id": "estilo1",
  "styleName": "Estilo 1",
  "styleSubtitle": "Editorial & Brasas Nobles",
  "layoutType": "editorial",
  "themeClass": "theme-estilo-1",
  "name": "Restaurante Parrilla Vukata",
  "chefName": "Goran Vukata",
  "chefTitle": "Maestro Parrillero",
  "tagline": "Maestros Asadores al Carbón de Encina & Carnes Maduradas en Aluche",
  "neighborhood": "Aluche (Madrid)",
  "address": "Calle de Maqueda, 138 · Aluche, 28024 Madrid",
  "phone": "+34 915 09 85 76",
  "whatsapp": "34695590754",
  "email": "gerencia@parrillavukata.es",
  "managerName": "Goran Vukata (Maestro Parrillero)",
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Restaurante+Parrilla+Vukata,+Calle+de+Maqueda,+138,+28024+Madrid",
  "type": "Asador Castellano & Carnicería Selecta",
  "rating": 4.8,
  "totalReviews": 348,
  "serviceHours": "Comidas: 12:00 a 17:00 · Cenas: 19:30 a 00:00 (Martes cerrado)",
  "bannerImg": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80",
  "aboutUs": {
    "headline": "28 Años de Pasión por el Fuego Vivo, el Carbón de Encina y el Buen Comer en Aluche",
    "story": "Fundado en la calle Maqueda, Restaurante Parrilla Vukata nació con una premisa innegociable: respetar el producto al máximo. Lo que empezó como un querido asador de barrio se ha convertido en el templo de la carne de referencia en el suroeste de Madrid. Cada mañana seleccionamos personalmente los mejores lomos de vacuno, entrañas, asados de tira y chuletones madurados, dejándolos reposar antes de pasar por el fuego vivo de nuestras brasas.",
    "quote": "La brasa no perdona: o tienes la mejor carne de Madrid y el carbón de encina en su punto exacto, o no hay dónde esconderse.",
    "quoteAuthor": "Goran Vukata, Maestro Parrillero",
    "pillars": [
      {
        "num": "01",
        "title": "Cámara Dry-Aged Propia",
        "desc": "Maduración en seco controlada de más de 40 días para concentrar ternura, aroma y jugosidad extrema."
      },
      {
        "num": "02",
        "title": "Carbón de Encina Extremeño",
        "desc": "Brasas a 350ºC constante que sellan la pieza por fuera caramelizando sus jugos y dejando el interior sedoso y caliente."
      },
      {
        "num": "03",
        "title": "Take Away de Carta Completa",
        "desc": "Toda nuestra carta disponible para recoger en local con envase térmico especial que preserva el punto del asador."
      }
    ],
    "specialtyHighlight": {
      "title": "Parrillada de Carne Completa Vukata",
      "badge": "Especialidad Parrillera",
      "weight": "Formato 2 y 3 PAX",
      "aging": "Chorizo criollo, morcilla, asado de tira, entraña y vacío",
      "pairing": "Maridaje sugerido: Tinto Ribera del Duero o Cerveza fría",
      "text": "Selección maestra servida sobre brasero caliente para mantener el punto exacto y los aromas ahumados de la leña en mesa."
    }
  },
  "categories": [
    "Entrantes",
    "A la Brasa",
    "Ensaladas",
    "Chivito al Plato",
    "Pollo Asado",
    "Postres",
    "Cafés"
  ],
  "menu": [
    {
      "id": "e1_emp",
      "name": "Empanada Criolla",
      "category": "Entrantes",
      "price": 4.8,
      "badge": "Casera",
      "description": "Empanada criolla artesana al horno rellena de ternera cortada a cuchillo, cebolla pochada, huevo y especias tradicionales.",
      "details": "Horneada al momento · Masa fina artesanal",
      "ingredients": "Harina de trigo, carne vacuna seleccionada, cebolla dulce, huevo duro, pimentón y comino.",
      "prepTime": "8 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos",
        "crustaceos",
        "pescado",
        "apio",
        "mostaza",
        "sesamo"
      ]
    },
    {
      "id": "e1_cho",
      "name": "Chorizo a la Parrilla",
      "category": "Entrantes",
      "price": 5,
      "badge": "Al Carbón",
      "description": "Chorizo criollo seleccionado asado a la brasa de carbón de encina con toque ahumado.",
      "details": "Asado a fuego vivo · Crujiente por fuera y tierno por dentro",
      "ingredients": "Magro de cerdo, pimentón natural, ajo, sal marina y tripa natural.",
      "prepTime": "10 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_mor",
      "name": "Morcilla de Ávila a la Parrilla",
      "category": "Entrantes",
      "price": 5.5,
      "badge": "Ávila",
      "description": "Morcilla tradicional de cebolla y especias de Ávila asada lentamente sobre parrilla de hierro.",
      "details": "Elaboración artesana tradicional",
      "ingredients": "Cebolla horcal, arroz, sangre de cerdo, pimentón y manteca de cerdo.",
      "prepTime": "10 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_ore",
      "name": "Oreja a la Plancha",
      "category": "Entrantes",
      "price": 13,
      "badge": "Clásico Madrileño",
      "description": "Oreja de cerdo crujiente a la plancha aliñada con ajo picado fino, perejil fresco y pimentón.",
      "details": "Punto tostado crujiente exterior · Muy tierna",
      "ingredients": "Oreja de cerdo cocida y dorada a la plancha, ajo, perejil fresco y aceite de oliva virgen.",
      "prepTime": "12 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_pro",
      "name": "Provoleta Rellena",
      "category": "Entrantes",
      "price": 13,
      "badge": "Especialidad",
      "description": "Queso provolone fundido en cazuela refractaria a la brasa con orégano silvestre y corazón cremoso.",
      "details": "Servida hirviendo en cazuela parrillera",
      "ingredients": "Queso provolone hilado, orégano de monte, ají molido y aceite de oliva virgen.",
      "prepTime": "10 min",
      "popular": true,
      "image": "../assets/images/vukata/provoleta.jpg",
      "allergens": [
        "gluten",
        "lacteos"
      ]
    },
    {
      "id": "e1_hue",
      "name": "Huevos Rotos Ecológicos con Torreznos",
      "category": "Entrantes",
      "price": 16,
      "badge": "Huevos de Montaña",
      "description": "Huevos ecológicos de gallinas criadas en montaña con música. Probablemente los mejores huevos del mercado.",
      "details": "Huevos ecológicos certificados · Patatas pochadas caseras",
      "ingredients": "Huevos de granja ecológica de montaña, torreznos crujientes y patatas pochadas al momento.",
      "prepTime": "12 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "sulfitos"
      ]
    },
    {
      "id": "e1_pin",
      "name": "Pincho Moruno y Bravas",
      "category": "Entrantes",
      "price": 15.75,
      "badge": "Adobo Moruno",
      "description": "Brochetas de magro adobado con mezcla tradicional de especias morunas a la brasa con patatas bravas.",
      "details": "Maceración en especias 24h · Salsa brava casera",
      "ingredients": "Magro de cerdo especiado, pimentón, comino, ajo, patatas bravas y alioli.",
      "prepTime": "14 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "mostaza",
        "huevos",
        "soja",
        "sulfitos"
      ]
    },
    {
      "id": "e1_pul",
      "name": "Pata de Pulpo a la Brasa con Guacamole",
      "category": "Entrantes",
      "price": 24,
      "badge": "Pulpo de Roca",
      "description": "Pata entera de pulpo marcada sobre parrilla viva servida con base suave de guacamole casero y pimentón.",
      "details": "Pulpo de roca braseado al carbón de encina",
      "ingredients": "Pulpo de roca, aguacate fresco, lima, cebolla morada, pimentón dulce y sal marina en escamas.",
      "prepTime": "15 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "moluscos",
        "lacteos",
        "sulfitos"
      ]
    },
    {
      "id": "e1_croj",
      "name": "Croquetas de Jamón Ibérico",
      "category": "Entrantes",
      "price": 13.5,
      "badge": "Jamón de Bellota",
      "description": "Bechamel reposada elaborada con jamón ibérico de bellota y rebozado extra crujiente.",
      "details": "Elaboración casera diaria · Ración de 6 unidades",
      "ingredients": "Leche entera fresca, mantequilla, jamón ibérico de bellota, harina de trigo y panko crujiente.",
      "prepTime": "8 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos",
        "apio",
        "crustaceos",
        "soja",
        "moluscos",
        "pescado",
        "sulfitos"
      ]
    },
    {
      "id": "e1_crob",
      "name": "Croquetas de Boletus o Pulpo",
      "category": "Entrantes",
      "price": 13.5,
      "badge": "Boletus / Pulpo",
      "description": "Croquetas melosas a elegir de boletus edulis de temporada o de pulpo a la brasa.",
      "details": "Ración de 6 unidades generosas",
      "ingredients": "Leche fresca, boletus edulis o pulpo, harina, mantequilla y pan rallado crujiente.",
      "prepTime": "8 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos",
        "moluscos"
      ]
    },
    {
      "id": "e1_croc",
      "name": "Croquetas de Carabineros con Velo Ibérico",
      "category": "Entrantes",
      "price": 14,
      "badge": "Carabinero & Velo",
      "description": "Intensas croquetas de marisco con carabinero, velo fino de tocino ibérico curado y alioli suave de ajo negro.",
      "details": "Sabor marino concentrado y contraste ibérico",
      "ingredients": "Carabineros, fondo de marisco, tocino ibérico curado, ajo negro y emulsión.",
      "prepTime": "8 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos",
        "crustaceos"
      ]
    },
    {
      "id": "e1_tor",
      "name": "Torrezno de Soria con Patatas (Unidad)",
      "category": "Entrantes",
      "price": 6,
      "badge": "Marca de Garantía",
      "description": "Panceta curada de Soria frita a fuego lento con souflado final crujiente y patatas caseras.",
      "details": "Corteza dorada souflada y magro tierno",
      "ingredients": "Panceta curada con Marca de Garantía Torrezno de Soria y patatas fritas.",
      "prepTime": "10 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_ant",
      "name": "Anticucho a la Parrilla",
      "category": "Entrantes",
      "price": 15.5,
      "badge": "Parrillero",
      "description": "Brochetas tradicionales de vacuno maceradas en salsa de ají panca, ajo y vinagre, braseadas a fuego vivo.",
      "details": "Adobo parrillero tradicional",
      "ingredients": "Carne de vacuno seleccionada, ají panca, vinagre tinto, ajo y comino.",
      "prepTime": "12 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_can",
      "name": "Cangrejos de Río en Salsa (Según existencias)",
      "category": "Entrantes",
      "price": 15,
      "badge": "Temporada",
      "description": "Cangrejos de río salteados y cocinados en salsa marinera tradicional con tomate y ligero toque picante.",
      "details": "Receta clásica castellana",
      "ingredients": "Cangrejos de río, sofrito de tomate natural, pimiento, cebolla, laurel y guindilla.",
      "prepTime": "12 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "crustaceos"
      ]
    },
    {
      "id": "e1_rab",
      "name": "Rabo de Cerdo Estofado",
      "category": "Entrantes",
      "price": 18,
      "badge": "Guiso de Cuchara",
      "description": "Guiso meloso a fuego lento de rabo de cerdo con verduras de la huerta y reducción de vino tinto.",
      "details": "Cocción pausada durante 4 horas",
      "ingredients": "Rabo de cerdo, zanahoria, puerro, cebolla, caldo oscuro y vino de Madrid.",
      "prepTime": "10 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_asado",
      "name": "Asado de Tira (Pieza 400g aprox)",
      "category": "A la Brasa",
      "price": 17.5,
      "badge": "400g Aprox",
      "description": "Corte transversal de costillar vacuno con hueso asado lentamente sobre brasas vivas de carbón de encina.",
      "details": "Pieza de 400g aprox. · Sabor intenso de hueso",
      "ingredients": "Costillar vacuno seleccionado, sal gorda marina y fuego de encina.",
      "prepTime": "16 min",
      "popular": true,
      "image": "../assets/images/vukata/asado_tira.jpg",
      "allergens": []
    },
    {
      "id": "e1_entrana",
      "name": "Entraña (Pieza 400g aprox)",
      "category": "A la Brasa",
      "price": 17.5,
      "badge": "400g Aprox",
      "description": "Corte emblemático de asador con su membrana fina crocante e interior extremadamente tierno y jugoso.",
      "details": "Pieza de 400g aprox. · Corte tradicional",
      "ingredients": "Entraña de ternera y escamas de sal marina.",
      "prepTime": "14 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_vacio",
      "name": "Vacío (Pieza 400g aprox)",
      "category": "A la Brasa",
      "price": 18,
      "badge": "400g Aprox",
      "description": "Pieza magra y fibrosa entre las costillas y la cadera, asada a fuego medio para lograr máxima terneza.",
      "details": "Pieza de 400g aprox. · Jugosidad equilibrada",
      "ingredients": "Corte de vacío vacuno seleccionado y sal marina.",
      "prepTime": "15 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_wagyu",
      "name": "Auténtico Chuletón de Buey (Wagyu) Certificado",
      "category": "A la Brasa",
      "price": 65,
      "badge": "Según Existencias",
      "description": "Chuletón de infiltración grasa marmolada insuperable con certificado oficial de raza.",
      "details": "Corte prémium de lujo · Servido en plato refractario caliente a 90ºC",
      "ingredients": "Lomo de buey Wagyu certificado y sal de escamas de Añana.",
      "prepTime": "22 min",
      "popular": true,
      "image": "../assets/images/vukata/chuleton.jpg",
      "allergens": []
    },
    {
      "id": "e1_finlandes",
      "name": "Chuletón de Vaca Finlandés",
      "category": "A la Brasa",
      "price": 55,
      "badge": "Según Existencias",
      "description": "Vaca alimentada en pastos nórdicos seleccionada por su grasa amarilla dulce y gran aroma a la brasa.",
      "details": "Maduración Dry-Aged propia en cámara de Aluche",
      "ingredients": "Lomo alto de vaca finlandesa y sal marina en escamas.",
      "prepTime": "20 min",
      "popular": false,
      "image": "../assets/images/vukata/chuleton.jpg",
      "allergens": []
    },
    {
      "id": "e1_entrecot",
      "name": "Entrecot de Vaca Finlandés (+40 días maduración)",
      "category": "A la Brasa",
      "price": 28.5,
      "badge": "Pieza 350g aprox",
      "description": "Pieza de 350gr aprox. Maduración superior a 40 días en seco, textura mantecosa y profundidad cárnica.",
      "details": "Maduración Dry-Aged superior a 40 días",
      "ingredients": "Lomo de vaca madurado y escamas de sal marina.",
      "prepTime": "15 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_parr2",
      "name": "Parrillada de Carne para 2 PAX",
      "category": "A la Brasa",
      "price": 43,
      "badge": "Para 2 Personas",
      "description": "Chorizo criollo, morcilla, asado de tira, entraña y vacío servidos calientes sobre brasero parrillero.",
      "details": "Selección completa de nuestras mejores carnes al carbón",
      "ingredients": "Chorizo criollo, morcilla de Ávila, asado de tira, entraña y vacío vacuno.",
      "prepTime": "20 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_parr2d",
      "name": "Parrillada de Carne para 2 PAX Dimateo",
      "category": "A la Brasa",
      "price": 46.5,
      "badge": "Especial Dimateo",
      "description": "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo a la parrilla.",
      "details": "Con pechuga de pollo de corral a la brasa",
      "ingredients": "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo.",
      "prepTime": "20 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_parr3",
      "name": "Parrillada de Carne para 3 PAX",
      "category": "A la Brasa",
      "price": 53,
      "badge": "Para 3 Personas",
      "description": "Chorizo criollo, morcilla, asado de tira, entraña y vacío en formato generoso para tres comensales.",
      "details": "Gran surtido parrillero al fuego de encina",
      "ingredients": "Chorizo criollo, morcilla, asado de tira, entraña y vacío vacuno.",
      "prepTime": "22 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_parr3d",
      "name": "Parrillada de Carne para 3 PAX Dimateo",
      "category": "A la Brasa",
      "price": 56.5,
      "badge": "Especial Dimateo 3P",
      "description": "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo a la parrilla.",
      "details": "Formato para tres personas con pechuga de corral",
      "ingredients": "Chorizo criollo, morcilla, asado de tira, entraña, vacío y pechuga de pollo.",
      "prepTime": "22 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_guarn_pat",
      "name": "Guarnición de Patatas o Ensalada",
      "category": "A la Brasa",
      "price": 5,
      "badge": "Guarnición",
      "description": "Ración de patatas fritas caseras en aceite de oliva o ensalada de lechuga fresca y tomate.",
      "details": "Acompañamiento perfecto de asados",
      "ingredients": "Patatas agrias o vegetales frescos de huerta.",
      "prepTime": "5 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_guarn_pim",
      "name": "Guarnición de Pimientos del Piquillo",
      "category": "A la Brasa",
      "price": 8,
      "badge": "Al Fuego",
      "description": "Pimientos del piquillo enteros confitados despacio a la brasa con ajo y aceite de oliva virgen extra.",
      "details": "Confitados lentamente",
      "ingredients": "Pimientos del piquillo enteros, ajos asados y AOVE.",
      "prepTime": "6 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_ens_tem",
      "name": "Ensalada Templada",
      "category": "Ensaladas",
      "price": 13.75,
      "badge": "Queso de Cabra",
      "description": "Mezcla de lechugas, nueces, pasas, tomate cherrys, endivias, queso de cabra, confitura de tomate y vinagreta de frutos del bosque.",
      "details": "Queso de cabra tostado a la brasa",
      "ingredients": "Hojas verdes, nueces, pasas moscatel, cherrys, endivias, rulo de cabra caramelizado y reducción de frutos rojos.",
      "prepTime": "8 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "lacteos",
        "frutos_cascara"
      ]
    },
    {
      "id": "e1_ens_cal",
      "name": "Ensalada California",
      "category": "Ensaladas",
      "price": 13.75,
      "badge": "Pollo Brasa",
      "description": "Mezcla de lechugas, tomate, pollo a la parrilla, bacon, picatostes, pasas, parmesano y salsa California.",
      "details": "Pollo recién salido de la brasa",
      "ingredients": "Lechugas crujientes, pollo al carbón, tiras de bacon dorado, picatostes de pan, parmesano curado y aderezo California.",
      "prepTime": "8 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "frutos_cascara",
        "mostaza"
      ]
    },
    {
      "id": "e1_ens_nik",
      "name": "Ensalada Nikoleta",
      "category": "Ensaladas",
      "price": 13.75,
      "badge": "Tomate Raf",
      "description": "Tomate Raf aliñado con piparras y aceitunas.",
      "details": "Tomate de temporada en su punto dulce y carnoso",
      "ingredients": "Tomate Raf seleccionado, piparras de Navarra, aceitunas y AOVE virgen extra.",
      "prepTime": "6 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_ens_pim",
      "name": "Ensalada de Pimientos Asados al Fuego con Ventresca",
      "category": "Ensaladas",
      "price": 15.5,
      "badge": "Ventresca",
      "description": "Pimientos asados a fuego vivo con ventresca de bonito del norte y aceite de oliva virgen extra.",
      "details": "Pimientos asados a la leña con ventresca jugosa",
      "ingredients": "Pimientos rojos braseados, ventresca de atún en aceite de oliva y sal gorda.",
      "prepTime": "7 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "pescado"
      ]
    },
    {
      "id": "e1_chi",
      "name": "Chivito al Plato",
      "category": "Chivito al Plato",
      "price": 17,
      "badge": "Plato Completo",
      "description": "Filete de ternera, jamón, mozzarella, bacon, huevo frito, patatas fritas y ensalada de lechuga y tomate.",
      "details": "Especialidad rioplatense servida al plato",
      "ingredients": "Filete de ternera tierno, jamón cocido, mozzarella fundida, bacon crujiente, huevo campero frito y patatas.",
      "prepTime": "15 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos"
      ]
    },
    {
      "id": "e1_pol_med",
      "name": "1/2 Pollo al Carbón",
      "category": "Pollo Asado",
      "price": 16,
      "badge": "Al Carbón",
      "description": "Con patatas fritas, ensalada y 3 salsas (consumo en restaurante).",
      "details": "Piel dorada y crujiente al fuego de encina",
      "ingredients": "Medio pollo de corral marinado, patatas fritas caseras, ensalada mixta y 3 salsas artesanas.",
      "prepTime": "14 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "frutos_cascara",
        "cacahuete",
        "soja",
        "mostaza",
        "sulfitos"
      ]
    },
    {
      "id": "e1_pol_ent",
      "name": "Pollo al Carbón Entero",
      "category": "Pollo Asado",
      "price": 26.5,
      "badge": "Familiar",
      "description": "Con patatas fritas, ensalada y 3 salsas (consumo en restaurante).",
      "details": "Pollo entero asado a la brasa para compartir",
      "ingredients": "Pollo entero asado al carbón, ración generosa de patatas, ensalada de la casa y 3 salsas.",
      "prepTime": "18 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "frutos_cascara",
        "cacahuete",
        "soja",
        "mostaza",
        "sulfitos"
      ]
    },
    {
      "id": "e1_coulant",
      "name": "Coulant de Chocolate con Helado de Vainilla",
      "category": "Postres",
      "price": 6.5,
      "badge": "Volcán Fundente",
      "description": "Bizcocho tibio de chocolate negro con corazón fluido fundente y helado de vainilla Bourbon.",
      "details": "Servido recién horneado y caliente",
      "ingredients": "Chocolate negro 70%, huevos, mantequilla, harina, azúcar y helado artesano de vainilla.",
      "prepTime": "7 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos",
        "frutos_cascara",
        "soja"
      ]
    },
    {
      "id": "e1_panq",
      "name": "Panqueque Relleno de Biscoff",
      "category": "Postres",
      "price": 6.5,
      "badge": "Biscoff Dulce",
      "description": "Crepe artesano relleno generosamente de crema de galleta Biscoff caramelizada y azúcar glas.",
      "details": "Hecho al momento a la plancha dulce",
      "ingredients": "Masa fina de panqueque, crema de galleta Biscoff caramelizada y azúcar glas.",
      "prepTime": "6 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "lacteos",
        "huevos",
        "soja"
      ]
    },
    {
      "id": "e1_copa",
      "name": "Copa Di Mateo",
      "category": "Postres",
      "price": 6.5,
      "badge": "Con Crema de Orujo",
      "description": "Helado de chocolate, topping de nueces y crema de orujo.",
      "details": "Postre para adultos con licor tradicional",
      "ingredients": "Helado de chocolate belga, nueces picadas y crema de orujo artesano.",
      "prepTime": "5 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "huevos",
        "frutos_cascara",
        "soja",
        "lacteos"
      ]
    },
    {
      "id": "e1_tarta",
      "name": "Tarta de Queso Cremosa",
      "category": "Postres",
      "price": 6.5,
      "badge": "Receta del Asador",
      "description": "Horneada a diario con centro cremoso fundente sobre base crocante de galleta tostada.",
      "details": "Textura cremosa y caramelizado al horno",
      "ingredients": "Queso crema, nata pura 35%, huevos camperos, azúcar y base de galleta de mantequilla.",
      "prepTime": "5 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "soja",
        "lacteos"
      ]
    },
    {
      "id": "e1_caf_solo",
      "name": "Con Leche, Cortado o Solo",
      "category": "Cafés",
      "price": 1.75,
      "badge": "Café Natural",
      "description": "Café 100% arábica de tueste natural en máquina espresso italiana con leche fresca vaporizada.",
      "details": "Servido en taza caliente",
      "ingredients": "Café espresso y leche entera o vegetal.",
      "prepTime": "3 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "lacteos"
      ]
    },
    {
      "id": "e1_infusion",
      "name": "Manzanilla o Poleo Menta",
      "category": "Cafés",
      "price": 2.2,
      "badge": "Infusiones",
      "description": "Flor natural en pirámide aromática con agua mineral caliente.",
      "details": "Infusiones digestivas",
      "ingredients": "Flor de manzanilla o poleo menta natural.",
      "prepTime": "4 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_tes",
      "name": "Tés Especiales",
      "category": "Cafés",
      "price": 2.5,
      "badge": "Selección",
      "description": "Variedad de té verde sencha, té negro Earl Grey con bergamota o rooibos especiado.",
      "details": "Selección de cosechas aromáticas",
      "ingredients": "Hojas de té seleccionadas en infusión a 90ºC.",
      "prepTime": "4 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_matambre",
      "name": "Matambre a la Brasa",
      "category": "A la Brasa",
      "price": 17.5,
      "badge": "Típico Asador",
      "description": "Fina capa de carne vacuna entre el cuero y el costillar, tiernizada y asada a fuego lento con limón fresco y chimichurri casero.",
      "details": "Asado a la brasa viva de encina",
      "ingredients": "Corte vacuno seleccionado, sal marina, limón fresco, ajo y hierbas campestres.",
      "prepTime": "15 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_mollejas",
      "name": "Mollejas de Ternera al Limón",
      "category": "A la Brasa",
      "price": 16,
      "badge": "Manjar de Brasas",
      "description": "Mollejas de corazón crujientes por fuera y de textura suave y cremosa por dentro, doradas sobre la parrilla con zumo de limón.",
      "details": "Doble cocción sobre parrilla",
      "ingredients": "Molleja vacuna de corazón, limón natural, sal en escamas y pimienta negra.",
      "prepTime": "12 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_ens_tomate",
      "name": "Ensalada de Tomate Rosa y Cebolla Morada",
      "category": "Ensaladas",
      "price": 11.5,
      "badge": "Huerta Seleccionada",
      "description": "Tomate rosa madurado al sol con cebolla morada fina, lascas de sal Maldon y aceite de oliva virgen extra de primera prensa.",
      "details": "Producto fresco de cercanía",
      "ingredients": "Tomate rosa, cebolla morada, flor de sal y AOVE arbequina.",
      "prepTime": "5 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
      "allergens": []
    },
    {
      "id": "e1_flan",
      "name": "Flan Casero con Dulce de Leche",
      "category": "Postres",
      "price": 5.5,
      "badge": "Receta de la Abuela",
      "description": "Flan de huevo tradicional horneado al baño maría con caramelo tostado y copete generoso de dulce de leche artesano.",
      "details": "100% Casero en nuestro obrador",
      "ingredients": "Huevos camperos, leche entera, azúcar, vainilla natural y dulce de leche.",
      "prepTime": "5 min",
      "popular": true,
      "image": "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "huevos",
        "lacteos"
      ]
    },
    {
      "id": "e1_alfajor",
      "name": "Alfajor Artesanal de Nuez y Dulce de Leche",
      "category": "Postres",
      "price": 4,
      "badge": "Elaboración Propia",
      "description": "Masa suave de mantequilla y maicena rellena de abundante dulce de leche repostero y rebozada en nueces picadas.",
      "details": "Elaboración artesana diaria",
      "ingredients": "Harina de trigo, maicena, mantequilla, dulce de leche y nueces seleccionadas.",
      "prepTime": "3 min",
      "popular": false,
      "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      "allergens": [
        "gluten",
        "huevos",
        "lacteos",
        "frutos_cascara"
      ]
    }
  ],
  "googleReviews": [
    {
      "id": "rev-v1",
      "author": "Manuel Gómez",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 42 reseñas",
      "rating": 5,
      "timeAgo": "Hace 4 días",
      "comment": "El mejor chuletón de todo Aluche sin ninguna duda. La carne en su punto exacto al carbón y el torrezno súper crujiente. Pedir en mesa con el QR de la carta web fue rapidísimo.",
      "ownerResponse": "¡Muchísimas gracias Manuel! Seleccionamos cada lomo semanalmente en Mercamadrid. Te esperamos pronto en Maqueda."
    },
    {
      "id": "rev-v2",
      "author": "Beatriz S.",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      "badge": "Local Guide · 18 reseñas",
      "rating": 5,
      "timeAgo": "Hace 2 semanas",
      "comment": "Fuimos a cenar en familia 6 personas en la terraza. Las croquetas de cecina y la tarta de queso al horno son obligatorias. Servicio impecable y trato cercano.",
      "ownerResponse": null
    },
    {
      "id": "rev-v3",
      "author": "Javier M. del Pozo",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      "badge": "Cliente verificado",
      "rating": 5,
      "timeAgo": "Hace 3 semanas",
      "comment": "Trato de 10 por parte de los camareros. Pedimos para recoger porque vivimos cerca en Maqueda y estaba empaquetado perfecto, caliente y sin sobrecostes.",
      "ownerResponse": "¡Gracias Javier! Nos alegra que el servicio para llevar funcione tan bien. Un fuerte abrazo del equipo de Parrilla Vukata."
    }
  ]
};

  function loadData() {
    let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    if (typeof localStorage !== 'undefined') {
      try {
        const custom = localStorage.getItem('devcorp_data_estilo1');
        if (custom) {
          const parsed = JSON.parse(custom);
          data = { ...data, ...parsed };
        }
        const unifiedName = localStorage.getItem('devcorp_unified_name');
        if (unifiedName && unifiedName.trim() !== '') {
          data.name = unifiedName.trim();
        }
      } catch (e) {
        console.warn("Error cargando datos personalizados de estilo1:", e);
      }
    }
    return data;
  }

  const loaded = loadData();
  window.CURRENT_PRESET = loaded;
  window.ESTILO1_DATA = loaded;
  window.DEV_CORP_STYLES = window.DEV_CORP_STYLES || {};
  window.DEV_CORP_STYLES['estilo1'] = loaded;
})();
