// estilo4/i18n.js - Traducción al inglés de la web (el español es el idioma original del HTML/data.js).
// "dict": texto exacto en español -> inglés. "patterns": textos con partes variables.
// Las reseñas de Google se muestran siempre en su idioma original.
(function () {
  const months = { enero: 'January', febrero: 'February', marzo: 'March', abril: 'April', mayo: 'May', junio: 'June', julio: 'July', agosto: 'August', septiembre: 'September', octubre: 'October', noviembre: 'November', diciembre: 'December' };

  window.VEINTI7_I18N = {
    en: {
      meta: {
        title: 'Cafetería Veinti7 Cervecería | Craft beer & sharing plates in Aluche (Madrid)',
        description: 'Beer bar in Aluche (C. de Quero, 27): ice-cold craft beer, sharing plates and a great atmosphere for families, friends and watching the match. Check the menu and book your table.'
      },
      dict: {
        // Header y navegación
        'Saltar al contenido': 'Skip to content',
        'El bar': 'The bar',
        'Carta': 'Menu',
        'Ambiente': 'Atmosphere',
        'Opiniones': 'Reviews',
        'Dónde estamos': 'Find us',
        'Cambiar de estilo': 'Change style',
        'Reservar mesa': 'Book a table',
        'Reservar': 'Book',
        'Inicio': 'Home',
        'Menú': 'Menu',
        'Cafetería Veinti7 Cervecería, ir al inicio': 'Cafetería Veinti7 Cervecería, go to home',
        'Navegación principal': 'Main navigation',
        'Navegación móvil': 'Mobile navigation',
        'Navegación del pie': 'Footer navigation',
        'Abrir menú': 'Open menu',
        'Cerrar menú': 'Close menu',
        'Acciones rápidas': 'Quick actions',
        'Escríbenos por WhatsApp': 'Message us on WhatsApp',
        'Bajar al contenido': 'Scroll to content',

        // Datos de contacto y horarios
        'C. de Quero, 27, Latina, 28024 Madrid, España': 'C. de Quero, 27, Latina, 28024 Madrid, Spain',
        'Lunes a jueves': 'Monday to Thursday',
        'Viernes': 'Friday',
        'Sábado': 'Saturday',
        'Domingo': 'Sunday',
        'Horarios': 'Opening hours',
        'Dirección': 'Address',
        'Teléfono': 'Phone',
        'Correo electrónico': 'Email',
        'Cómo llegar': 'Get directions',
        'Llamar': 'Call',

        // Hero
        'Cafetería · Cervecería en Aluche': 'Café · Beer bar in Aluche',
        'Un bar donde': 'A bar where',
        'todos': 'everyone',
        'disfrutamos': 'has a good time',
        'Cervecería artesanal, raciones y un buen ambiente.': 'Craft beer, sharing plates and a great atmosphere.',
        'Ver carta': 'See the menu',
        'Familias, amigos y partidos': 'Families, friends and football',
        'Desde la carta': 'From the menu',
        'Tres amigos riendo y tomando cerveza en la barra': 'Three friends laughing and drinking beer at the bar',

        // Nuestro bar
        'Nuestro bar': 'Our bar',
        'Cerveza fría, raciones para compartir y': 'Cold beer, plates to share and',
        'buenos momentos': 'good times',
        'En Cafetería Veinti7 Cervecería te ofrecemos cerveza artesanal fría, raciones ideales para compartir y un ambiente adecuado para que disfrutes en familia o con tus amigos.':
          'At Cafetería Veinti7 Cervecería we serve cold craft beer, plates that are perfect for sharing and the right atmosphere to enjoy with your family or friends.',
        'Descubre nuestra pasión por la cerveza artesanal y brindemos por los buenos momentos.':
          'Discover our passion for craft beer and let’s raise a glass to good times.',
        '¿Quiénes somos?': 'Who are we?',
        'En Cafetería Veinti7 Cervecería representamos la combinación de tradición y compromiso con la calidad. Nuestro equipo está preparado para darte un servicio profesional y productos que marcan la diferencia.':
          'Cafetería Veinti7 Cervecería brings together tradition and a commitment to quality. Our team is ready to give you professional service and products that make a difference.',
        'Integridad': 'Integrity',
        'Nos guiamos por altos principios éticos que respaldan cada decisión y acción que llevamos a cabo.':
          'We are guided by high ethical principles that support every decision and action we take.',
        'Pasión': 'Passion',
        'En cada detalle de nuestro trabajo se refleja un compromiso genuino con la calidad y el servicio.':
          'Every detail of our work reflects a genuine commitment to quality and service.',
        'Diversidad': 'Diversity',
        'Valoramos la diversidad y promovemos un entorno inclusivo que enriquece a nuestros clientes y equipo.':
          'We value diversity and promote an inclusive environment that enriches our customers and our team.',
        'Nuestros valores': 'Our values',
        'Ver la carta': 'See the menu',
        'Camarero en la barra junto a botellas de cerveza artesanal': 'Bartender at the bar next to bottles of craft beer',
        'Tres vasos de cerveza servidos sobre una tabla de madera': 'Three glasses of beer served on a wooden board',

        // Carta
        'La carta': 'The menu',
        'Un menú pensado para': 'A menu made for',
        'compartir': 'sharing',
        'Descubre nuestra selección de cervezas artesanales de calidad, acompañadas de raciones pensadas para complementar cada momento.':
          'Discover our selection of quality craft beers, paired with sharing plates made to go with every moment.',
        'Secciones de la carta': 'Menu sections',
        'Cervezas': 'Beers',
        'Raciones': 'Sharing plates',
        'Cervezas artesanales': 'Craft beers',
        'Servimos una selección especial de cervezas artesanales, siempre a la temperatura perfecta.':
          'We serve a special selection of craft beers, always at the perfect temperature.',
        'Raciones para compartir': 'Plates to share',
        'Ideales para acompañar con cada una de nuestras cervezas. Toca un plato para verlo.':
          'Perfect with any of our beers. Tap a dish to see it.',
        'Ideales para acompañar con cada una de nuestras cervezas.': 'Perfect with any of our beers.',
        'Filtrar cervezas por marca': 'Filter beers by brand',
        'Todas': 'All',
        'Importaciones': 'Imports',
        'Consultar en barra': 'Ask at the bar',
        'Sin gluten': 'Gluten-free',
        'Precios en euros según nuestra carta.': 'Prices in euros as per our menu.',
        'Imagen orientativa': 'Illustrative image',
        '¿Cuál te pongo?': 'What can I get you?',
        'Toca una cerveza de la carta y te la servimos': 'Tap a beer on the menu and we’ll pour it for you',
        'Marchando': 'Coming right up',
        'Cerrar': 'Close',
        '¿Se te ha abierto el apetito?': 'Feeling hungry?',
        'Guarda tu mesa y te esperamos con la cerveza bien fría.': 'Save your table and we’ll have your beer ice-cold and waiting.',
        'Mahou clásica de barril': 'Mahou Clásica on draught',
        'Mahou sin gluten': 'Mahou gluten-free',
        'Mahou sin alcohol': 'Mahou alcohol-free',
        'Pulpo a la gallega con patatas': 'Galician-style octopus with potatoes',
        'Calamares fritos o puntillas': 'Fried squid or baby squid',
        'Patatas bravas': 'Patatas bravas (spicy potatoes)',
        'Huevos rotos con jamón o bacon': 'Broken fried eggs with ham or bacon',
        'Chorizo criollo con patatas fritas': 'Chorizo criollo with French fries',

        // Ambiente
        'El ambiente': 'The atmosphere',
        'Nuestra diferencia está en los': 'What sets us apart is in the',
        'detalles': 'details',
        'En Cervecería Veinti7 cada detalle importa. Desde la selección de cervezas hasta el diseño de nuestro menú, pensamos en ofrecer calidad.':
          'At Cervecería Veinti7 every detail matters. From our beer selection to the design of our menu, quality is always on our mind.',
        'Sitio acogedor': 'A cosy place',
        'Perfecto para familias, amigos y para disfrutar de partidos en buena compañía.':
          'Perfect for families and friends, and for watching the match in good company.',
        'Cerveza artesanal y helada': 'Ice-cold craft beer',
        'Nuestra cerveza artesanal siempre está servida en su punto gracias a nuestras potentes neveras.':
          'Our craft beer is always served just right thanks to our powerful fridges.',
        'Ubicación ideal': 'Great location',
        'A un paso cerca del parque de Aluche, nuestro bar se encuentra con fácil acceso y buen ambiente.':
          'Just a short walk from Aluche park, our bar is easy to reach and has a great atmosphere.',
        'Desliza para ver más': 'Swipe to see more',
        'Vasos de cerveza sobre la mesa de madera del bar': 'Glasses of beer on the bar’s wooden table',
        'Cerveza tirándose del grifo con espuma': 'Beer being poured from the tap with a foamy head',
        'Plato de patatas para compartir': 'Plate of potatoes to share',
        'Barra con botellas de cerveza artesanal': 'Bar with bottles of craft beer',

        // Opiniones y valoración
        'Clientes satisfechos': 'Happy customers',
        'Lo que se dice': 'What people say',
        'en la barra': 'at the bar',
        'Reseñas reales publicadas en Google': 'Real reviews posted on Google (in Spanish)',
        'Ver todas las reseñas en Google Maps': 'See all reviews on Google Maps',
        'Valora tu experiencia': 'Rate your experience',
        '¿Qué tal por el': 'How was your time at',
        'Tu opinión nos ayuda a mejorar y a que más vecinos de Aluche nos conozcan.':
          'Your feedback helps us improve and helps more of our Aluche neighbours find us.',
        'Puntuación de 1 a 5 estrellas': 'Rating from 1 to 5 stars',
        'Toca las estrellas para valorar': 'Tap the stars to rate',
        'Mejorable': 'Could be better',
        'Regular': 'So-so',
        'Bien': 'Good',
        'Muy bien': 'Very good',
        '¡Excelente!': 'Excellent!',
        '¡Gracias! Si nos dedicas 15 segundos, compartir tu opinión en Google ayuda muchísimo a un bar de barrio como el nuestro.':
          'Thank you! If you can spare 15 seconds, sharing your review on Google really helps a neighbourhood bar like ours.',
        'Publicar mi reseña en Google': 'Post my review on Google',
        'Cambiar puntuación': 'Change rating',
        'Sentimos que no haya sido perfecto. Cuéntanos qué podemos mejorar: lo leerá directamente el equipo del bar.':
          'We’re sorry it wasn’t perfect. Tell us what we can improve: the bar team will read it directly.',
        '¿Qué podemos mejorar?': 'What can we improve?',
        'Escribe aquí tu comentario (opcional)': 'Write your comment here (optional)',

        // Reservas
        'Reservas': 'Bookings',
        'Asegura tu': 'Save your',
        'lugar': 'spot',
        'No dejes tu visita al azar. Reserva tu mesa y ven a disfrutar de un momento único con tus amigos y familia.':
          'Don’t leave your visit to chance. Book your table and come enjoy a special moment with your friends and family.',
        'Cómo reservar': 'How to book',
        'Elige «Reserva mesa»': 'Choose “Reserva mesa”',
        'Selecciona el servicio en el desplegable «Seleccionar reserva».': 'Select the service in the “Seleccionar reserva” drop-down.',
        'Escoge día y hora': 'Pick a day and time',
        'El calendario te muestra los huecos disponibles.': 'The calendar shows the available slots.',
        'Completa tus datos': 'Fill in your details',
        'Nombre, apellido, correo electrónico y número de personas. Pulsa «Reservar».': 'First name, surname, email and number of people. Press “Reservar”.',
        'Reserva tu mesa': 'Book your table',
        'Elige día y hora en nuestro calendario de reservas.': 'Pick a day and time in our booking calendar.',
        'Reservar mesa online': 'Book a table online',
        'Se abre nuestro sistema de reservas en una pestaña nueva.': 'Our booking system opens in a new tab (in Spanish).',
        '¿Prefieres hablar con nosotros?': 'Prefer to talk to us?',

        // Contacto y footer
        'Te esperamos': 'We look forward to',
        'muy pronto': 'seeing you soon',
        'Escríbenos o visítanos si quieres saber más acerca de nuestro bar. En Cafetería Veinti7 Cervecería, estamos listos para darte la mejor atención para ti y tus acompañantes.':
          'Write to us or drop by if you’d like to know more about our bar. At Cafetería Veinti7 Cervecería we’re ready to take great care of you and your company.',
        'Mapa: Cafetería Veinti7 Cervecería, C. de Quero 27, Madrid': 'Map: Cafetería Veinti7 Cervecería, C. de Quero 27, Madrid',
        'Somos el bar donde la cerveza artesanal y los buenos momentos van de la mano. Acompáñanos a disfrutar de un buen partido con tu familia y amigos.':
          'We’re the bar where craft beer and good times go hand in hand. Join us to enjoy a good match with your family and friends.',
        'Sobre nosotros': 'About us',
        'Contacto': 'Contact',
        'Información de contacto': 'Contact information',
        'Aviso legal': 'Legal notice',
        'Política de privacidad': 'Privacy policy',
        'Accesibilidad': 'Accessibility',
        'Política de cookies (UE)': 'Cookie policy (EU)'
      },
      patterns: [
        [/^(\d+) referencias$/, m => `${m[1]} items`],
        [/^Ración (\d+)$/, m => `Dish ${m[1]}`],
        [/^Servir (.+)$/, (m, tr) => `Pour ${tr(m[1])}`],
        [/^Ver foto de (.+)$/, (m, tr) => `See photo of ${tr(m[1])}`],
        [/^Llamar al (.+)$/, m => `Call ${m[1]}`],
        [/^(\d) de 5 estrellas$/, m => `${m[1]} out of 5 stars`],
        [/^(\d) estrellas?$/, m => `${m[1]} star${m[1] === '1' ? '' : 's'}`],
        [/^(\w+) de (\d{4})$/, m => (months[m[1]] ? `${months[m[1]]} ${m[2]}` : null)],
        [/^Estilo (\d): (.+)$/, m => `Style ${m[1]}: ${m[2]}`]
      ]
    }
  };
})();
