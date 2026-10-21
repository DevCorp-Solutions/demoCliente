// estilo4/i18n.js - Traducciones de la web (el español es el idioma original del HTML/data.js).
// "en": inglés (Paquetes Profesional y Premium) · "ro": rumano (solo Paquete Premium).
// "dict": texto exacto en español -> traducción. "patterns": textos con partes variables.
// Las reseñas de Google se muestran siempre en su idioma original.
(function () {
  const months = { enero: 'January', febrero: 'February', marzo: 'March', abril: 'April', mayo: 'May', junio: 'June', julio: 'July', agosto: 'August', septiembre: 'September', octubre: 'October', noviembre: 'November', diciembre: 'December' };
  const monthsRo = { enero: 'ianuarie', febrero: 'februarie', marzo: 'martie', abril: 'aprilie', mayo: 'mai', junio: 'iunie', julio: 'iulie', agosto: 'august', septiembre: 'septembrie', octubre: 'octombrie', noviembre: 'noiembrie', diciembre: 'decembrie' };

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
        'Alérgenos': 'Allergens',
        'Alérgenos según la receta de cada plato. Si tienes alguna alergia o intolerancia, avísanos en barra antes de pedir.':
          'Allergens based on each dish’s recipe. If you have any allergy or intolerance, please tell us at the bar before ordering.',
        'Gluten': 'Gluten',
        'Contiene gluten: trigo, centeno, cebada, avena o sus derivados.': 'Contains gluten: wheat, rye, barley, oats or their derivatives.',
        'Crustáceos': 'Crustaceans',
        'Contiene crustáceos: gambas, langostinos, cigalas, cangrejos…': 'Contains crustaceans: shrimp, prawns, langoustines, crab…',
        'Huevos': 'Eggs',
        'Contiene huevo o productos a base de huevo.': 'Contains egg or egg-based products.',
        'Pescado': 'Fish',
        'Contiene pescado o productos a base de pescado.': 'Contains fish or fish-based products.',
        'Cacahuetes': 'Peanuts',
        'Contiene cacahuetes o productos a base de cacahuete.': 'Contains peanuts or peanut-based products.',
        'Soja': 'Soy',
        'Contiene soja o productos a base de soja.': 'Contains soy or soy-based products.',
        'Lácteos': 'Dairy',
        'Contiene leche y sus derivados, incluida la lactosa.': 'Contains milk and dairy products, including lactose.',
        'Frutos de cáscara': 'Tree nuts',
        'Contiene frutos de cáscara: almendras, avellanas, nueces, pistachos…': 'Contains tree nuts: almonds, hazelnuts, walnuts, pistachios…',
        'Apio': 'Celery',
        'Contiene apio o productos derivados.': 'Contains celery or celery products.',
        'Mostaza': 'Mustard',
        'Contiene mostaza o productos derivados.': 'Contains mustard or mustard products.',
        'Sésamo': 'Sesame',
        'Contiene granos de sésamo o productos derivados.': 'Contains sesame seeds or sesame products.',
        'Sulfitos': 'Sulphites',
        'Contiene dióxido de azufre y sulfitos.': 'Contains sulphur dioxide and sulphites.',
        'Altramuces': 'Lupin',
        'Contiene altramuces o productos derivados.': 'Contains lupin or lupin products.',
        'Moluscos': 'Molluscs',
        'Contiene moluscos: pulpo, calamar, sepia, mejillones, almejas…': 'Contains molluscs: octopus, squid, cuttlefish, mussels, clams…',

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
        [/^([^.]+)\. (Contiene .+)$/, (m, tr) => `${tr(m[1])}. ${tr(m[2])}`],
        [/^Llamar al (.+)$/, m => `Call ${m[1]}`],
        [/^(\d) de 5 estrellas$/, m => `${m[1]} out of 5 stars`],
        [/^(\d) estrellas?$/, m => `${m[1]} star${m[1] === '1' ? '' : 's'}`],
        [/^(\w+) de (\d{4})$/, m => (months[m[1]] ? `${months[m[1]]} ${m[2]}` : null)],
        [/^Estilo (\d): (.+)$/, m => `Style ${m[1]}: ${m[2]}`]
      ]
    },

    // Rumano: tercer idioma, solo en el Paquete Premium
    ro: {
      meta: {
        title: 'Cafetería Veinti7 Cervecería | Bere artizanală și porții de împărțit în Aluche (Madrid)',
        description: 'Berărie în Aluche (C. de Quero, 27): bere artizanală rece ca gheața, porții de împărțit și o atmosferă excelentă pentru familii, prieteni și meciuri. Consultă meniul și rezervă-ți masa.'
      },
      dict: {
        // Header y navegación
        'Saltar al contenido': 'Sari la conținut',
        'El bar': 'Barul',
        'Carta': 'Meniu',
        'Ambiente': 'Atmosfera',
        'Opiniones': 'Recenzii',
        'Dónde estamos': 'Unde ne găsești',
        'Cambiar de estilo': 'Schimbă stilul',
        'Reservar mesa': 'Rezervă o masă',
        'Reservar': 'Rezervă',
        'Inicio': 'Acasă',
        'Menú': 'Meniu',
        'Cafetería Veinti7 Cervecería, ir al inicio': 'Cafetería Veinti7 Cervecería, mergi la pagina principală',
        'Navegación principal': 'Navigare principală',
        'Navegación móvil': 'Navigare mobilă',
        'Navegación del pie': 'Navigare în subsol',
        'Abrir menú': 'Deschide meniul',
        'Cerrar menú': 'Închide meniul',
        'Acciones rápidas': 'Acțiuni rapide',
        'Escríbenos por WhatsApp': 'Scrie-ne pe WhatsApp',
        'Bajar al contenido': 'Mergi la conținut',

        // Datos de contacto y horarios
        'C. de Quero, 27, Latina, 28024 Madrid, España': 'C. de Quero, 27, Latina, 28024 Madrid, Spania',
        'Lunes a jueves': 'Luni – joi',
        'Viernes': 'Vineri',
        'Sábado': 'Sâmbătă',
        'Domingo': 'Duminică',
        'Horarios': 'Program',
        'Dirección': 'Adresă',
        'Teléfono': 'Telefon',
        'Correo electrónico': 'E-mail',
        'Cómo llegar': 'Cum ajungi',
        'Llamar': 'Sună',

        // Hero
        'Cafetería · Cervecería en Aluche': 'Cafenea · Berărie în Aluche',
        'Un bar donde': 'Un bar în care',
        'todos': 'toată lumea',
        'disfrutamos': 'se simte bine',
        'Cervecería artesanal, raciones y un buen ambiente.': 'Bere artizanală, porții de împărțit și o atmosferă plăcută.',
        'Ver carta': 'Vezi meniul',
        'Familias, amigos y partidos': 'Familii, prieteni și meciuri',
        'Desde la carta': 'Din meniu',
        'Tres amigos riendo y tomando cerveza en la barra': 'Trei prieteni care râd și beau bere la bar',

        // Nuestro bar
        'Nuestro bar': 'Barul nostru',
        'Cerveza fría, raciones para compartir y': 'Bere rece, porții de împărțit și',
        'buenos momentos': 'momente frumoase',
        'En Cafetería Veinti7 Cervecería te ofrecemos cerveza artesanal fría, raciones ideales para compartir y un ambiente adecuado para que disfrutes en familia o con tus amigos.':
          'La Cafetería Veinti7 Cervecería îți oferim bere artizanală rece, porții perfecte de împărțit și atmosfera potrivită ca să te bucuri alături de familie sau de prieteni.',
        'Descubre nuestra pasión por la cerveza artesanal y brindemos por los buenos momentos.':
          'Descoperă pasiunea noastră pentru berea artizanală și hai să ciocnim pentru momentele frumoase.',
        '¿Quiénes somos?': 'Cine suntem?',
        'En Cafetería Veinti7 Cervecería representamos la combinación de tradición y compromiso con la calidad. Nuestro equipo está preparado para darte un servicio profesional y productos que marcan la diferencia.':
          'Cafetería Veinti7 Cervecería îmbină tradiția cu angajamentul față de calitate. Echipa noastră este pregătită să-ți ofere un serviciu profesionist și produse care fac diferența.',
        'Integridad': 'Integritate',
        'Nos guiamos por altos principios éticos que respaldan cada decisión y acción que llevamos a cabo.':
          'Ne ghidăm după principii etice înalte, care stau la baza fiecărei decizii și acțiuni.',
        'Pasión': 'Pasiune',
        'En cada detalle de nuestro trabajo se refleja un compromiso genuino con la calidad y el servicio.':
          'Fiecare detaliu al muncii noastre reflectă un angajament sincer față de calitate și servire.',
        'Diversidad': 'Diversitate',
        'Valoramos la diversidad y promovemos un entorno inclusivo que enriquece a nuestros clientes y equipo.':
          'Prețuim diversitatea și promovăm un mediu incluziv, care îi îmbogățește atât pe clienții noștri, cât și echipa.',
        'Nuestros valores': 'Valorile noastre',
        'Ver la carta': 'Vezi meniul',
        'Camarero en la barra junto a botellas de cerveza artesanal': 'Barman la bar, lângă sticle de bere artizanală',
        'Tres vasos de cerveza servidos sobre una tabla de madera': 'Trei pahare de bere servite pe un platou de lemn',

        // Carta
        'La carta': 'Meniul',
        'Un menú pensado para': 'Un meniu gândit pentru',
        'compartir': 'împărțit',
        'Descubre nuestra selección de cervezas artesanales de calidad, acompañadas de raciones pensadas para complementar cada momento.':
          'Descoperă selecția noastră de beri artizanale de calitate, însoțite de porții gândite să completeze fiecare moment.',
        'Secciones de la carta': 'Secțiunile meniului',
        'Cervezas': 'Beri',
        'Raciones': 'Porții',
        'Cervezas artesanales': 'Beri artizanale',
        'Servimos una selección especial de cervezas artesanales, siempre a la temperatura perfecta.':
          'Servim o selecție specială de beri artizanale, mereu la temperatura perfectă.',
        'Raciones para compartir': 'Porții de împărțit',
        'Ideales para acompañar con cada una de nuestras cervezas. Toca un plato para verlo.':
          'Perfecte alături de oricare dintre berile noastre. Atinge un preparat ca să-l vezi.',
        'Ideales para acompañar con cada una de nuestras cervezas.': 'Perfecte alături de oricare dintre berile noastre.',
        'Filtrar cervezas por marca': 'Filtrează berile după marcă',
        'Todas': 'Toate',
        'Importaciones': 'Import',
        'Consultar en barra': 'Întreabă la bar',
        'Sin gluten': 'Fără gluten',
        'Precios en euros según nuestra carta.': 'Prețuri în euro, conform meniului nostru.',
        'Imagen orientativa': 'Imagine orientativă',
        '¿Cuál te pongo?': 'Ce îți torn?',
        'Toca una cerveza de la carta y te la servimos': 'Atinge o bere din meniu și ți-o turnăm',
        'Marchando': 'Vine imediat',
        'Cerrar': 'Închide',
        '¿Se te ha abierto el apetito?': 'Ți s-a făcut poftă?',
        'Guarda tu mesa y te esperamos con la cerveza bien fría.': 'Rezervă-ți masa și te așteptăm cu berea bine răcită.',
        'Mahou clásica de barril': 'Mahou Clásica de la dozator',
        'Mahou sin gluten': 'Mahou fără gluten',
        'Mahou sin alcohol': 'Mahou fără alcool',
        'Pulpo a la gallega con patatas': 'Caracatiță în stil galician cu cartofi',
        'Calamares fritos o puntillas': 'Calamari prăjiți sau calamari mici',
        'Patatas bravas': 'Patatas bravas (cartofi picanți)',
        'Huevos rotos con jamón o bacon': 'Ouă ochiuri sparte cu jamón sau bacon',
        'Chorizo criollo con patatas fritas': 'Chorizo criollo cu cartofi prăjiți',
        'Alérgenos': 'Alergeni',
        'Alérgenos según la receta de cada plato. Si tienes alguna alergia o intolerancia, avísanos en barra antes de pedir.':
          'Alergeni conform rețetei fiecărui preparat. Dacă ai vreo alergie sau intoleranță, anunță-ne la bar înainte de a comanda.',
        'Gluten': 'Gluten',
        'Contiene gluten: trigo, centeno, cebada, avena o sus derivados.': 'Conține gluten: grâu, secară, orz, ovăz sau derivatele acestora.',
        'Crustáceos': 'Crustacee',
        'Contiene crustáceos: gambas, langostinos, cigalas, cangrejos…': 'Conține crustacee: creveți, langustine, raci, crabi…',
        'Huevos': 'Ouă',
        'Contiene huevo o productos a base de huevo.': 'Conține ouă sau produse pe bază de ouă.',
        'Pescado': 'Pește',
        'Contiene pescado o productos a base de pescado.': 'Conține pește sau produse pe bază de pește.',
        'Cacahuetes': 'Arahide',
        'Contiene cacahuetes o productos a base de cacahuete.': 'Conține arahide sau produse pe bază de arahide.',
        'Soja': 'Soia',
        'Contiene soja o productos a base de soja.': 'Conține soia sau produse pe bază de soia.',
        'Lácteos': 'Lactate',
        'Contiene leche y sus derivados, incluida la lactosa.': 'Conține lapte și produse lactate, inclusiv lactoză.',
        'Frutos de cáscara': 'Fructe cu coajă lemnoasă',
        'Contiene frutos de cáscara: almendras, avellanas, nueces, pistachos…': 'Conține fructe cu coajă lemnoasă: migdale, alune de pădure, nuci, fistic…',
        'Apio': 'Țelină',
        'Contiene apio o productos derivados.': 'Conține țelină sau produse derivate.',
        'Mostaza': 'Muștar',
        'Contiene mostaza o productos derivados.': 'Conține muștar sau produse derivate.',
        'Sésamo': 'Susan',
        'Contiene granos de sésamo o productos derivados.': 'Conține semințe de susan sau produse derivate.',
        'Sulfitos': 'Sulfiți',
        'Contiene dióxido de azufre y sulfitos.': 'Conține dioxid de sulf și sulfiți.',
        'Altramuces': 'Lupin',
        'Contiene altramuces o productos derivados.': 'Conține lupin sau produse derivate.',
        'Moluscos': 'Moluște',
        'Contiene moluscos: pulpo, calamar, sepia, mejillones, almejas…': 'Conține moluște: caracatiță, calamar, sepie, midii, scoici…',

        // Ambiente
        'El ambiente': 'Atmosfera',
        'Nuestra diferencia está en los': 'Diferența noastră stă în',
        'detalles': 'detalii',
        'En Cervecería Veinti7 cada detalle importa. Desde la selección de cervezas hasta el diseño de nuestro menú, pensamos en ofrecer calidad.':
          'La Cervecería Veinti7 fiecare detaliu contează. De la selecția de beri până la designul meniului, ne gândim mereu la calitate.',
        'Sitio acogedor': 'Un loc primitor',
        'Perfecto para familias, amigos y para disfrutar de partidos en buena compañía.':
          'Perfect pentru familii și prieteni și pentru a urmări meciurile în compania potrivită.',
        'Cerveza artesanal y helada': 'Bere artizanală rece ca gheața',
        'Nuestra cerveza artesanal siempre está servida en su punto gracias a nuestras potentes neveras.':
          'Berea noastră artizanală este servită mereu la temperatura potrivită, datorită frigiderelor noastre puternice.',
        'Ubicación ideal': 'Locație ideală',
        'A un paso cerca del parque de Aluche, nuestro bar se encuentra con fácil acceso y buen ambiente.':
          'La doi pași de parcul Aluche, barul nostru este ușor accesibil și are o atmosferă plăcută.',
        'Desliza para ver más': 'Glisează pentru a vedea mai mult',
        'Vasos de cerveza sobre la mesa de madera del bar': 'Pahare de bere pe masa de lemn a barului',
        'Cerveza tirándose del grifo con espuma': 'Bere turnată de la dozator, cu spumă',
        'Plato de patatas para compartir': 'Farfurie cu cartofi de împărțit',
        'Barra con botellas de cerveza artesanal': 'Bar cu sticle de bere artizanală',

        // Opiniones y valoración
        'Clientes satisfechos': 'Clienți mulțumiți',
        'Lo que se dice': 'Ce se spune',
        'en la barra': 'la bar',
        'Reseñas reales publicadas en Google': 'Recenzii reale publicate pe Google (în spaniolă)',
        'Ver todas las reseñas en Google Maps': 'Vezi toate recenziile pe Google Maps',
        'Valora tu experiencia': 'Evaluează-ți experiența',
        '¿Qué tal por el': 'Cum ți s-a părut la',
        'Tu opinión nos ayuda a mejorar y a que más vecinos de Aluche nos conozcan.':
          'Părerea ta ne ajută să ne îmbunătățim și să ne cunoască mai mulți vecini din Aluche.',
        'Puntuación de 1 a 5 estrellas': 'Notă de la 1 la 5 stele',
        'Toca las estrellas para valorar': 'Atinge stelele pentru a evalua',
        'Mejorable': 'Se poate mai bine',
        'Regular': 'Așa și așa',
        'Bien': 'Bine',
        'Muy bien': 'Foarte bine',
        '¡Excelente!': 'Excelent!',
        '¡Gracias! Si nos dedicas 15 segundos, compartir tu opinión en Google ayuda muchísimo a un bar de barrio como el nuestro.':
          'Mulțumim! Dacă ne acorzi 15 secunde, recenzia ta pe Google ajută enorm un bar de cartier ca al nostru.',
        'Publicar mi reseña en Google': 'Publică recenzia mea pe Google',
        'Cambiar puntuación': 'Schimbă nota',
        'Sentimos que no haya sido perfecto. Cuéntanos qué podemos mejorar: lo leerá directamente el equipo del bar.':
          'Ne pare rău că nu a fost perfect. Spune-ne ce putem îmbunătăți: echipa barului va citi direct mesajul.',
        '¿Qué podemos mejorar?': 'Ce putem îmbunătăți?',
        'Escribe aquí tu comentario (opcional)': 'Scrie aici comentariul tău (opțional)',

        // Reservas
        'Reservas': 'Rezervări',
        'Asegura tu': 'Asigură-ți',
        'lugar': 'locul',
        'No dejes tu visita al azar. Reserva tu mesa y ven a disfrutar de un momento único con tus amigos y familia.':
          'Nu-ți lăsa vizita la voia întâmplării. Rezervă-ți masa și vino să te bucuri de un moment unic alături de prieteni și familie.',
        'Cómo reservar': 'Cum rezervi',
        'Elige «Reserva mesa»': 'Alege „Reserva mesa”',
        'Selecciona el servicio en el desplegable «Seleccionar reserva».': 'Selectează serviciul din lista „Seleccionar reserva”.',
        'Escoge día y hora': 'Alege ziua și ora',
        'El calendario te muestra los huecos disponibles.': 'Calendarul îți arată intervalele disponibile.',
        'Completa tus datos': 'Completează-ți datele',
        'Nombre, apellido, correo electrónico y número de personas. Pulsa «Reservar».': 'Prenume, nume, e-mail și numărul de persoane. Apasă „Reservar”.',
        'Reserva tu mesa': 'Rezervă-ți masa',
        'Elige día y hora en nuestro calendario de reservas.': 'Alege ziua și ora în calendarul nostru de rezervări.',
        'Reservar mesa online': 'Rezervă o masă online',
        'Se abre nuestro sistema de reservas en una pestaña nueva.': 'Sistemul nostru de rezervări se deschide într-o filă nouă (în spaniolă).',
        '¿Prefieres hablar con nosotros?': 'Preferi să vorbești cu noi?',

        // Contacto y footer
        'Te esperamos': 'Te așteptăm',
        'muy pronto': 'foarte curând',
        'Escríbenos o visítanos si quieres saber más acerca de nuestro bar. En Cafetería Veinti7 Cervecería, estamos listos para darte la mejor atención para ti y tus acompañantes.':
          'Scrie-ne sau treci pe la noi dacă vrei să afli mai multe despre barul nostru. La Cafetería Veinti7 Cervecería suntem gata să avem cea mai bună grijă de tine și de cei care te însoțesc.',
        'Mapa: Cafetería Veinti7 Cervecería, C. de Quero 27, Madrid': 'Hartă: Cafetería Veinti7 Cervecería, C. de Quero 27, Madrid',
        'Somos el bar donde la cerveza artesanal y los buenos momentos van de la mano. Acompáñanos a disfrutar de un buen partido con tu familia y amigos.':
          'Suntem barul în care berea artizanală și momentele frumoase merg mână în mână. Vino să te bucuri de un meci bun alături de familie și prieteni.',
        'Sobre nosotros': 'Despre noi',
        'Contacto': 'Contact',
        'Información de contacto': 'Informații de contact',
        'Aviso legal': 'Mențiuni legale',
        'Política de privacidad': 'Politica de confidențialitate',
        'Accesibilidad': 'Accesibilitate',
        'Política de cookies (UE)': 'Politica de cookie-uri (UE)'
      },
      patterns: [
        [/^(\d+) referencias$/, m => `${m[1]} produse`],
        [/^Ración (\d+)$/, m => `Porția ${m[1]}`],
        [/^Servir (.+)$/, (m, tr) => `Toarnă ${tr(m[1])}`],
        [/^Ver foto de (.+)$/, (m, tr) => `Vezi fotografia: ${tr(m[1])}`],
        [/^([^.]+)\. (Contiene .+)$/, (m, tr) => `${tr(m[1])}. ${tr(m[2])}`],
        [/^Llamar al (.+)$/, m => `Sună la ${m[1]}`],
        [/^(\d) de 5 estrellas$/, m => `${m[1]} din 5 stele`],
        [/^(\d) estrellas?$/, m => `${m[1]} ${m[1] === '1' ? 'stea' : 'stele'}`],
        [/^(\w+) de (\d{4})$/, m => (monthsRo[m[1]] ? `${monthsRo[m[1]]} ${m[2]}` : null)],
        [/^Estilo (\d): (.+)$/, m => `Stilul ${m[1]}: ${m[2]}`]
      ]
    }
  };
})();
