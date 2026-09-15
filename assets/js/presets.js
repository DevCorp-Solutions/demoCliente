/**
 * Presets de Negocios de Hostelería para Aluche, Lucero y Carabanchel
 * Con identidades visuales únicas, estructuras personalizadas,
 * secciones "Sobre Nosotros", Especialidades de autor y reseñas de Google Maps.
 */

export const RESTAURANT_PRESETS = {
  // =========================================================================
  // 1. ASADOR & PARRILLA VUKATA (ALUCHE) - ESTILO BUTCHER STEAKHOUSE
  // =========================================================================
  parrilla: {
    id: "parrilla",
    layoutType: "steakhouse",
    themeClass: "theme-asador",
    name: "Restaurante Parrilla Vukata",
    tagline: "Maestros Asadores al Carbón de Encina & Carnes Maduradas",
    neighborhood: "Aluche (Madrid)",
    address: "Calle de Maqueda, 138, Aluche, Madrid",
    phone: "+34 917 19 82 45",
    whatsapp: "34695590754",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+Parrilla+Vukata+C.+de+Maqueda%2C+138+Madrid",
    type: "Asador Castellano & Carnicería Selecta",
    rating: 4.8,
    totalReviews: 348,
    bannerImg: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
    chefName: "Maestro Parrillero Goran Vukata",
    foundationYear: "1998",
    description: "Cuna del buen comer en Aluche. Carnes de pasto maduradas en cámara propia y asadas al fuego vivo con carbón vegetal de encina.",
    
    // Sección Sobre Nosotros y Especialidades
    aboutUs: {
      headline: "28 Años de Pasión por el Fuego y la Tradición Castellana",
      story: "Fundado en 1998 en la calle Maqueda, Parrilla Vukata nació con una premisa innegociable: respetar el producto al máximo. Lo que empezó como un pequeño asador de barrio se ha convertido en el templo de la carne de referencia en el suroeste de Madrid. Cada mañana seleccionamos personalmente los mejores lomos de vaca rubia gallega y ternera de la Sierra de Guadarrama en Mercamadrid, dejándolos reposar en nuestra cámara acristalada a la vista de los comensales.",
      pillars: [
        {
          icon: "🥩",
          title: "Cámara Dry-Aged Propia",
          desc: "Maduración en seco entre 45 y 60 días para concentrar sabor, ternura y jugosidad extrema."
        },
        {
          icon: "🔥",
          title: "Carbón de Encina Extremeño",
          desc: "Brasas a 350ºC constante que sellan la carne por fuera dejando el interior sedoso y caliente."
        },
        {
          icon: "🍷",
          title: "Bodega de Roble Subterránea",
          desc: "Más de 40 referencias de D.O. Ribera, Rioja y vinos de Madrid guardados a 14ºC de temperatura constante."
        }
      ],
      specialtyHighlight: {
        title: "El Secreto del Chuletón Vukata",
        subtitle: "De la dehesa al plato en 3 reglas sagradas",
        text: "La carne nunca toca la plancha fría. Se atempera durante 3 horas antes del servicio, se marca sobre parrilla inclinada para drenar el exceso de grasa y se sirve sobre plato refractario caliente a 90ºC con sal marina de escamas de Añana.",
        badge: "Corte de Autor"
      }
    },

    categories: ["Carnes a la Brasa", "Entrantes & Raciones", "Guisos & Cuchara", "Postres Caseros", "Bodega & Bebidas"],
    
    googleReviews: [
      {
        id: "rev-v1",
        author: "Manuel Gómez",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 42 reseñas",
        rating: 5,
        timeAgo: "Hace 4 días",
        comment: "El mejor chuletón de todo Aluche sin ninguna duda. La carne con el punto perfecto y el torrezno súper crujiente. Además el servicio fue rapidísimo pidiendo desde la mesa con el QR.",
        ownerResponse: "¡Muchísimas gracias Manuel! Seleccionamos cada pieza en Mercamadrid semanalmente. Te esperamos pronto de vuelta."
      },
      {
        id: "rev-v2",
        author: "Beatriz S.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 18 reseñas",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "Fuimos a cenar en familia 6 personas. Reservamos online antes de ir y la mesa estaba lista con trona para el niño. Las croquetas de cecina y la tarta de queso al horno son obligatorias.",
        ownerResponse: null
      },
      {
        id: "rev-v3",
        author: "Javier M. del Pozo",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        badge: "Cliente verificado",
        rating: 5,
        timeAgo: "Hace 3 semanas",
        comment: "Trato de 10 por parte de los camareros. Pedimos para recoger porque vivimos en Maqueda y estaba empaquetado impecable, caliente y con 0 comisiones de intermediarios.",
        ownerResponse: "¡Gracias Javier! Nos alegra que el servicio para llevar funcione tan bien. Un abrazo."
      }
    ],

    menu: [
      {
        id: "p1",
        category: "Carnes a la Brasa",
        name: "Chuletón de Vaca Vieja Madurada (1kg)",
        price: 38.50,
        description: "Corte madurado 45 días en nuestra cámara. Servido trinchado con patatas panaderas y escamas de sal.",
        weight: "1.000g aprox.",
        aging: "45 días Dry-Aged",
        pairing: "Ribera del Duero Crianza",
        allergens: [],
        badge: "Plato Estrella",
        popular: true,
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p2",
        category: "Carnes a la Brasa",
        name: "Entrecot de Ternera de Guadarrama",
        price: 21.00,
        description: "350g de carne tierna de pasto serrano con pimientos de padrón salteados y sal gorda.",
        weight: "350g",
        aging: "21 días",
        pairing: "Tinto de Madrid Roble",
        allergens: [],
        badge: "Sierra de Madrid",
        popular: true,
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p3",
        category: "Carnes a la Brasa",
        name: "Costillar de Cerdo a la Miel de Romero",
        price: 16.80,
        description: "8 horas a fuego indirecto y toque de soplete con glaseado de miel silvestre y mostaza antigua.",
        weight: "650g",
        aging: "Marinado 24h",
        pairing: "Cerveza Tostada",
        allergens: ["mostaza"],
        badge: "Más Solicitado",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p4",
        category: "Entrantes & Raciones",
        name: "Torreznos Crujientes de Soria",
        price: 11.50,
        description: "Corte grueso con corteza hiper crujiente y magro jugoso, servidos sobre patatas revolconas al pimentón.",
        weight: "4 tiras gruesas",
        aging: "Oreado 48h",
        pairing: "Caña helada",
        allergens: [],
        badge: "Crujiente 100%",
        popular: true,
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p5",
        category: "Entrantes & Raciones",
        name: "Croquetas Cremosas de Cecina y Boletus (6 uds)",
        price: 10.50,
        description: "Bechamel reposada 12 horas con leche fresca entera de granja y rebozado panko dorado.",
        weight: "6 unidades",
        aging: "Fórmula Casera",
        pairing: "Vino Blanco Verdejo",
        allergens: ["gluten", "lactosa", "huevo"],
        badge: "Elaboración Diaria",
        popular: true,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "p6",
        category: "Postres Caseros",
        name: "Tarta de Queso Fluida al Horno",
        price: 6.50,
        description: "Horneada a diario estilo Donosti con queso Idiazábal y crema suave sobre galleta quebrada.",
        weight: "Porción generosa",
        aging: "Horno diario",
        pairing: "Vino dulce Pedro Ximénez",
        allergens: ["gluten", "lactosa", "huevo"],
        badge: "Top Dulce",
        popular: true,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  // =========================================================================
  // 2. CERVECERÍA 27 & BAR MALA PATA (LUCERO) - ESTILO PIZARRA CASTIZA DE BARRA
  // =========================================================================
  cerveceria: {
    id: "cerveceria",
    layoutType: "tavern",
    themeClass: "theme-castizo",
    name: "Cervecería 27 & Bar Mala Pata",
    tagline: "El Auténtico Templo del Tapeo y la Cerveza Helada de Barrio",
    neighborhood: "Lucero / Aluche (Madrid)",
    address: "Calle de Quero, 61, Aluche / Lucero, Madrid",
    phone: "+34 915 22 33 44",
    whatsapp: "34695590754",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Mala+Pata+Aluche+C.+de+Quero%2C+61+Madrid",
    type: "Taberna Castiza & Barra Tradicional",
    rating: 4.7,
    totalReviews: 482,
    bannerImg: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80",
    chefName: "Paco 'El Chato' y familia",
    foundationYear: "1984",
    description: "Cerveza de bodega tirada como manda Madrid, oreja a la plancha de infarto, raciones para compartir y terraza con sol todo el año.",

    aboutUs: {
      headline: "Más de 40 Años Tirando Cañas con Maestría y Sirviendo a Todo el Barrio",
      story: "En el Bar Mala Pata y Cervecería 27 no hay etiquetas ni florituras: hay cañas bien frías con dos dedos de crema y raciones abundantes que unen a vecinos, familias y grupos de amigos. Paco fundó la taberna en 1984 con una plancha de cromo y la receta secreta de la salsa brava de su madre. Hoy seguimos con la misma filosofía: producto fresco comprado en el mercado de Lucero, raciones hechas al momento y un ambiente castizo inigualable.",
      pillars: [
        {
          icon: "🍻",
          title: "Tanque de Bodega sin Pasteurizar",
          desc: "Cerveza directa de fábrica a -2ºC, servida con serpentín helado y golpe de grifo maestro."
        },
        {
          icon: "🥘",
          title: "Plancha de Cromo al Momento",
          desc: "Ni microondas ni recalentados: oreja, calamares y bravas salen volando de la plancha a tu mesa."
        },
        {
          icon: "☀️",
          title: "Terraza 365 Días",
          desc: "El corazón social de la calle Quero con estufas en invierno y toldos frescos en verano."
        }
      ],
      specialtyHighlight: {
        title: "El Truco de Nuestra Oreja a la Plancha",
        subtitle: "Crujiente por fuera, tierna por dentro",
        text: "Cocemos la oreja durante 3 horas con laurel, ajo morado y granos de pimienta negra. Luego la prensamos 12 horas para que al entrar a la plancha a 280ºC con nuestro aliño de ajo-perejil y toque de limón quede con ese crujido legendario que enamora a Madrid.",
        badge: "Icono de Lucero"
      }
    },

    categories: ["Raciones Clásicas", "Tapas & Pinchos", "Huevos Rotos", "Bocatas & Montados", "Bebidas & Cañas"],
    
    googleReviews: [
      {
        id: "rev-c1",
        author: "David Serrano",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 84 reseñas",
        rating: 5,
        timeAgo: "Hace 1 semana",
        comment: "El tapeo de toda la vida pero con una organización de 10. La oreja a la plancha está en su punto crujiente exacto y las patatas bravas pican lo justo. Las cañas salen con la crema perfecta.",
        ownerResponse: "¡Grande David! Esa oreja lleva el aliño de mi abuelo desde hace 30 años. ¡Salud!"
      },
      {
        id: "rev-c2",
        author: "Sara Martín",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        badge: "Vecina de Lucero",
        rating: 5,
        timeAgo: "Hace 3 semanas",
        comment: "La terraza en verano se llena, pero ahora con el sistema de pedir directamente desde el móvil te sirven en 5 minutos sin tener que esperar a llamar al camarero. ¡Un acierto total!",
        ownerResponse: null
      },
      {
        id: "rev-c3",
        author: "Antonio Ramos",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 29 reseñas",
        rating: 4,
        timeAgo: "Hace 1 mes",
        comment: "Muy buenos los huevos rotos y el bocadillo de calamares. Calidad-precio excelente para el barrio.",
        ownerResponse: null
      }
    ],

    menu: [
      {
        id: "c1",
        category: "Raciones Clásicas",
        name: "Oreja Crujiente a la Plancha con Salsa Brava Casera",
        price: 9.80,
        description: "Dorada a fuego fuerte con ajo, perejil, chorrito de vino blanco y nuestra brava picantona.",
        portionType: "Ración Generosa",
        servingTime: "8 min",
        allergens: [],
        badge: "Nº 1 de la Barra",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c2",
        category: "Raciones Clásicas",
        name: "Patatas Bravas 'Mala Pata' con Doble Salsa",
        price: 7.50,
        description: "Patatas agrias de Madrid pochadas y fritas a la orden con brava de pimentón de la Vera y alioli casero.",
        portionType: "Para Compartir",
        servingTime: "5 min",
        allergens: ["huevo"],
        badge: "Fórmula de 1984",
        popular: true,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c3",
        category: "Huevos Rotos",
        name: "Sartén de Huevos Camperos con Jamón Ibérico",
        price: 11.50,
        description: "3 huevos de corral con puntilla fritos en aceite virgen extra sobre patatas panaderas y virutas de jamón.",
        portionType: "Sartén Caliente",
        servingTime: "7 min",
        allergens: ["huevo"],
        badge: "Puntilla Garantizada",
        popular: true,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c4",
        category: "Raciones Clásicas",
        name: "Calamares a la Andaluza con Limón Fresco",
        price: 11.00,
        description: "Rebozado ultra fino en harina de garbanzo sin exceso de aceite. Tiernos como la mantequilla.",
        portionType: "Ración Clásica",
        servingTime: "6 min",
        allergens: ["pescado", "gluten"],
        badge: "Rebozado Andaluz",
        popular: true,
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c5",
        category: "Bocatas & Montados",
        name: "Bocadillo de Calamares en Pan de Cristal Tostado",
        price: 6.50,
        description: "El clásico madrileño elevado: pan crujiente y aireado, calamares recién fritos y suave mayonesa cítrica opcional.",
        portionType: "Bocadillo Completo",
        servingTime: "4 min",
        allergens: ["gluten", "pescado", "huevo"],
        badge: "Pan de Cristal",
        popular: true,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "c6",
        category: "Bebidas & Cañas",
        name: "Doble de Cerveza de Bodega sin Pasteurizar",
        price: 2.80,
        description: "Tirada en copa helada con dos dedos de crema espesa. La cerveza más fresca del distrito.",
        portionType: "Copa Fría 33cl",
        servingTime: "Inmediato",
        allergens: ["gluten"],
        badge: "-2ºC en Copa",
        popular: true,
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  // =========================================================================
  // 3. PIZZERÍA CARLOS & NAPOLI (CARABANCHEL) - ESTILO TRATTORIA CONTEMPORÁNEA
  // =========================================================================
  pizzeria: {
    id: "pizzeria",
    layoutType: "trattoria",
    themeClass: "theme-pizzeria",
    name: "Pizzería Carlos & Napoli Carabanchel",
    tagline: "L'Arte della Pizza Napoletana Contemporanea in Forno a Legna",
    neighborhood: "Carabanchel (Madrid)",
    address: "Calle de la Oca, 78, Carabanchel, Madrid",
    phone: "+34 914 66 77 88",
    whatsapp: "34695590754",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizzeria+Carlos+Carabanchel+Madrid",
    type: "Pizzería Artesanal & Trattoria Gourmet",
    rating: 4.9,
    totalReviews: 614,
    bannerImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80",
    chefName: "Pizzaiolo Matteo Bellini",
    foundationYear: "2016",
    description: "Masa madre de fermentación lenta de 48 horas, harina italiana molida a la piedra y los mejores ingredientes con Denominación de Origen Protegida de Campania.",

    aboutUs: {
      headline: "De Nápoles a Carabanchel: La Verdadera Pizza que No Hincha",
      story: "Matteo Bellini creció entre los sacos de harina del barrio de Spaccanapoli. Cuando llegó a Madrid en 2016, trajo consigo una cepa de masa madre viva heredada de su bisabuelo y una misión: demostrar que una pizza de verdad es ligera, digestiva y un homenaje al producto de origen. En nuestro obrador de la calle Oca no existen los atajos ni las prisas: la masa madura durante dos días completos antes de entrar a nuestro horno de piedra volcánica.",
      pillars: [
        {
          icon: "🌾",
          title: "Fermentación Natural 48–72 Horas",
          desc: "Masa altamente hidratada (75%) que madura en frío para una digestión ultraligera sin pesadez."
        },
        {
          icon: "🌋",
          title: "Horno de Piedra a 480ºC",
          desc: "Cocción en 70 segundos para inflar un 'cornicione' alveolado y crujiente con toque ahumado."
        },
        {
          icon: "🍅",
          title: "100% Ingredientes DOP",
          desc: "Tomates San Marzano del Vesubio, mozzarella fior di latte de Agerola y albahaca genovesa fresca."
        }
      ],
      specialtyHighlight: {
        title: "La Alquimia del 'Cornicione' Perfecto",
        subtitle: "Borde inflado, aireado y crujiente",
        text: "El borde alveolado de nuestras pizzas no es masa apelmazada: es una burbuja de aire generada por la levadura salvaje al recibir el golpe térmico instantáneo de la piedra volcánica a 480ºC.",
        badge: "Tradición Napoletana"
      }
    },

    categories: ["Pizzas Clásicas", "Pizzas Gourmet", "Pastas Frescas", "Postres Italianos", "Bebidas"],
    
    googleReviews: [
      {
        id: "rev-p1",
        author: "Claudia Rossi",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 110 reseñas",
        rating: 5,
        timeAgo: "Hace 5 días",
        comment: "Soy italiana y vivo en Carabanchel: esta pizza es lo más cercano a Nápoles que he probado en Madrid. La masa es ligera como una nube y la burrata es fresquísima.",
        ownerResponse: "Grazie mille Claudia! Usiamo solo farina di tipo 00 e lievitazione di 48 ore. A presto!"
      },
      {
        id: "rev-p2",
        author: "Sergio Navarro",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        badge: "Cliente habitual",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "Hicimos un pedido a domicilio desde su propia web y nos llegó en 25 minutos perfecto. Mucho mejor que pedir por Glovo porque la pizza llega en su caja térmica crujiente y caliente.",
        ownerResponse: null
      },
      {
        id: "rev-p3",
        author: "Elena Vidal",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 36 reseñas",
        rating: 5,
        timeAgo: "Hace 1 mes",
        comment: "El tiramisú es espectacular y la pizza Tartufo un pecado. Ya somos clientes fijos de los domingos.",
        ownerResponse: null
      }
    ],

    menu: [
      {
        id: "pz1",
        category: "Pizzas Gourmet",
        name: "Pizza Tartufo & Funghi Porcini Selvatici",
        price: 15.50,
        description: "Crema de trufa negra de Norcia, fior di latte fresco, boletus edulis salteados y lascas de Parmigiano Reggiano 24 meses.",
        doughHydration: "75% Hidratación",
        originTag: "Campania & Umbría",
        allergens: ["gluten", "lactosa"],
        badge: "Premiada 2024",
        popular: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pz2",
        category: "Pizzas Gourmet",
        name: "Pizza Burrata Pugliese & Prosciutto di Parma DOP",
        price: 16.00,
        description: "Base crujiente de masa madre, burrata entera de 125g colocada en frío al salir del horno, jamón de Parma y pesto genovés.",
        doughHydration: "78% Hidratación",
        originTag: "Puglia & Parma",
        allergens: ["gluten", "lactosa", "frutos_secos"],
        badge: "Burrata Entera",
        popular: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pz3",
        category: "Pizzas Clásicas",
        name: "Pizza Diavola Piccante Spianata Calabra",
        price: 13.50,
        description: "Tomates San Marzano DOP, mozzarella fundente, salami picante de Calabria curado y aceite aromatizado con guindilla.",
        doughHydration: "75% Hidratación",
        originTag: "Calabria DOP",
        allergens: ["gluten", "lactosa"],
        badge: "Picante Equilibrado",
        popular: true,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pz4",
        category: "Pastas Frescas",
        name: "Ravioli de Calabaza Asada y Ricotta con Salvia",
        price: 14.20,
        description: "Pasta al huevo hecha a mano cada mañana, rellena de calabaza caramelizada al horno con mantequilla dorada y avellanas tostadas.",
        doughHydration: "Pasta al Huevo 100%",
        originTag: "Emilia-Romagna",
        allergens: ["gluten", "lactosa", "huevo"],
        badge: "Hecha Hoy a Mano",
        popular: false,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pz5",
        category: "Postres Italianos",
        name: "Auténtico Tiramisú Tradizionale di Treviso",
        price: 6.00,
        description: "Bizcochos savoiardi empapados en café espresso Illy, crema densa de mascarpone italiano y lluvia de cacao puro amargo.",
        doughHydration: "Receta Original 1970",
        originTag: "Treviso (Véneto)",
        allergens: ["gluten", "lactosa", "huevo"],
        badge: "Cremoso & Casero",
        popular: true,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  // =========================================================================
  // 4. CAFETERÍA CAMPAMENTO & YEBES (ALUCHE) - ESTILO NORDIC SPECIALTY CAFE
  // =========================================================================
  cafeteria: {
    id: "cafeteria",
    layoutType: "scandi-coffee",
    themeClass: "theme-cafeteria",
    name: "Cafetería Campamento & Desayunos Yebes",
    tagline: "Specialty Coffee Roasters, Organic Brunch & Obrador Artesano",
    neighborhood: "Campamento / Aluche (Madrid)",
    address: "Avenida del Padre Piquer, 1, Campamento, Madrid",
    phone: "+34 917 11 22 33",
    whatsapp: "34695590754",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafeteria+Campamento+Av.+del+Padre+Piquer%2C+1+Madrid",
    type: "Café de Especialidad & Obrador Brunch",
    rating: 4.8,
    totalReviews: 395,
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80",
    chefName: "Barista Head Clara Yebes",
    foundationYear: "2020",
    description: "Granos de café de origen 100% Arábica con puntuación SCA >85, panes de masa madre de larga fermentación y opciones sin gluten y veganas.",

    aboutUs: {
      headline: "Café con Alma, Ingredientes de Temporada y Desayunos Sin Prisas",
      story: "Cafetería Campamento nació con el propósito de acercar la cultura del café de especialidad y la comida saludable de obrador al corazón de Campamento y Aluche. Desterramos el café torrefacto comercial y nos asociamos con micro-tostadores locales que compran directamente a pequeños productores de Colombia, Etiopía y Guatemala a precios justos. En nuestra cocina horneamos bollería con mantequilla pura francesa y preparamos tostas con pan de pueblo que cruje hasta el último bocado.",
      pillars: [
        {
          icon: "☕",
          title: "Puntuación SCA >86 Puntos",
          desc: "100% café de especialidad arábica trazable por finca, proceso de lavado y fecha de tueste."
        },
        {
          icon: "🥖",
          title: "Pan de Masa Madre Integral",
          desc: "Hogazas fermentadas durante 24 horas en frío con harina ecológica sin aditivos."
        },
        {
          icon: "🥑",
          title: "Cocina Consciente & Fresca",
          desc: "Aguacates en su punto óptimo, salmón ahumado salvaje y fruta fresca de proximidad."
        }
      ],
      specialtyHighlight: {
        title: "La Curva de Tueste de Nuestro Espresso",
        subtitle: "Notas a jazmín, cacao fino y caramelo",
        text: "Extraemos nuestro Flat White a 93ºC exactos con doble cestillo de 18 gramos durante 27 segundos. La leche de avena barista se microemulsiona a 62ºC para crear una textura de terciopelo que resalta la dulzura natural del grano sin necesidad de azúcar.",
        badge: "Barista Signature"
      }
    },

    categories: ["Cafés & Especialidad", "Tostas Artesanas", "Bowls & Saludable", "Bollería & Tartas", "Zumos & Batidos"],
    
    googleReviews: [
      {
        id: "rev-cf1",
        author: "Lucía Fernández",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 52 reseñas",
        rating: 5,
        timeAgo: "Hace 3 días",
        comment: "Hacía falta una cafetería con este nivel en Campamento. El Flat White con leche de avena es pura seda y la tosta de salmón y aguacate está riquísima. Sitio precioso y wifi rápido.",
        ownerResponse: "¡Gracias Lucía! Tostamos el café cada semana con tostadores de Madrid. ¡Un placer tenerte por aquí!"
      },
      {
        id: "rev-cf2",
        author: "Pablo Ortega",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
        badge: "Cliente verificado",
        rating: 5,
        timeAgo: "Hace 1 semana",
        comment: "Pido el desayuno para llevar casi todas las mañanas antes de coger el metro. Con la carta web lo pido desde casa y cuando llego ya está en la barra listo. Impecable.",
        ownerResponse: null
      },
      {
        id: "rev-cf3",
        author: "Marta Carrasco",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
        badge: "Local Guide · 19 reseñas",
        rating: 5,
        timeAgo: "Hace 2 semanas",
        comment: "El açaí bowl y los croissants recién horneados son adictivos. Buen ambiente y trato súper cercano.",
        ownerResponse: null
      }
    ],

    menu: [
      {
        id: "cf1",
        category: "Tostas Artesanas",
        name: "Tosta de Aguacate Hass, Salmón Ahumado y Semillas",
        price: 7.20,
        description: "Hogaza crujiente de masa madre, aguacate laminado con limón, salmón noruego salvaje, gomasio y brotes frescos.",
        dietInfo: "Rico en Omega-3",
        roastType: "Masa Madre 24h",
        allergens: ["gluten", "pescado", "sesamo"],
        badge: "Favorito Brunch",
        popular: true,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cf2",
        category: "Tostas Artesanas",
        name: "Tosta Ibérica con Tomate Rallado y Aceite Picual",
        price: 4.80,
        description: "El desayuno supremo: pan tostado caliente, tomate de rama recién rallado a mano, AOVE arbequina y jamón de bodega.",
        dietInfo: "100% Natural",
        roastType: "Pan de Pueblo",
        allergens: ["gluten"],
        badge: "Desayuno Estrella",
        popular: true,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cf3",
        category: "Cafés & Especialidad",
        name: "Flat White Doble con Leche de Avena Barista",
        price: 2.60,
        description: "Doble espresso de origen Colombia Huila con microespuma sedosa y diseño de latte art en taza cerámica artesana.",
        dietInfo: "Origen SCA 87.5",
        roastType: "Tueste Medio",
        allergens: [],
        badge: "Grano Selección",
        popular: true,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cf4",
        category: "Bowls & Saludable",
        name: "Açaí Bowl Orgánico con Granola Casera y Fruta Fresca",
        price: 7.90,
        description: "Açaí del Amazonas batido espeso con plátano de Canarias, fresas frescas de temporada, semillas de cáñamo y coco tostado.",
        dietInfo: "Vegano & Sin Azúcar",
        roastType: "Superalimento",
        allergens: ["frutos_secos"],
        badge: "Energía 100% Vital",
        popular: true,
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cf5",
        category: "Bollería & Tartas",
        name: "Croissant Francés de Mantequilla de Normandía",
        price: 2.20,
        description: "Hojaldrado a mano con 27 capas crujientes y aroma intenso a mantequilla fresca. Horneado cada 2 horas.",
        dietInfo: "Mantequilla Pura",
        roastType: "Horno Cada 2h",
        allergens: ["gluten", "lactosa", "huevo"],
        badge: "Hojaldre Perfecto",
        popular: true,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
};
