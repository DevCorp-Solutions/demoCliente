# Paquetes del estilo 7

Adaptación del documento Paquetes de Hostelería y Presupuestos a Gancho y Directo, en `feature/estilo7`. No se muestran tarifas de creación de webs ni mantenimiento. No se ha accedido a la web original del negocio. Se reutilizan el logo y las fotos locales ya obtenidos de Instagram.

## Tres entradas

| Característica visible | Esencial | Profesional | Premium |
| --- | --- | --- | --- |
| Carpeta | `esencial/` | `profesional/` | `premium/` |
| Carta | Fija, máximo 60 fichas (7 disponibles) | Editable en demo local | Editable en demo local |
| Categorías | Entrantes, Principales, Postres, Bebidas | Categorías del negocio | Categorías del negocio |
| Fotos por plato | No | Sí | Sí |
| Información de alérgenos | Guía de los 14 y datos pendientes identificados | Igual + filtro | Igual + filtro |
| Presentación del negocio y publicaciones | No | Sí | Sí |
| Galería independiente | No | No | No |
| Teléfono y dirección | Información | Botones directos y mapa | Botones directos y mapa |
| Reservas | No | Enlace externo configurable por local | Formulario dentro de la página y entrega a WhatsApp/email confirmado por local |
| Menú diario / fuera de carta | No | Publicación desde editor local | Publicación desde editor local |
| Grupos | No | No | Sección de consulta, sin menús inventados |
| SEO en la maqueta | Título de la página, sin metadatos promocionales | Título y descripción | Título, descripción y datos estructurados de ambos restaurantes |

Premium conserva la página anterior de Gancho y Directo y añade las herramientas de esta demostración. Las fotos permanecen en las fichas de carta, no hay sección independiente de galería ni preguntas frecuentes. Las publicaciones y promociones de 2024 siguen identificadas como archivo.

## Selector y compatibilidad

Por petición posterior, los tres paquetes incluyen la franja animada hacia la izquierda (con pausa y respeto a movimiento reducido), Valóranos y tres reseñas positivas enmarcadas. Valóranos distingue las fichas de Aluche y Pozuelo; el enlace abre Google Maps para que el visitante publique allí. Las estrellas locales no publican ni modifican la valoración global.

Referencias consultadas el 21/10/2026: [Aluche, 4,5 y 612 reseñas](https://es.restaurantguru.com/Gancho-y-Directo-Madrid) y [Pozuelo, 4,3 y 772 reseñas](https://es.restaurantguru.com/Gancho-y-Directo-Pozuelo-de-Alarcon). Son datos de Google reproducidos por Restaurant Guru, no una conexión en directo. Los fragmentos corresponden a Christian Casaucao Andújar (Aluche), Cristina Pérez y Lucia AP (Pozuelo), con autor, local y enlace a la fuente visibles.

Cada carpeta tiene `index.html` y `preview-mobile.html`. El selector navega entre carpetas, no altera el paquete por preferencias de otros estilos. `/estilo7/` abre Premium; `?paquete=esencial|profesional|premium` sigue disponible como acceso directo. Las ocho opciones de estilo funcionan desde cualquier carpeta. CSS, datos y fotografías se comparten desde la raíz de estilo7.

## Datos pendientes y límites

- Siguen pendientes de confirmar los precios, alérgenos, horarios, carta vigente, plataforma de reservas y WhatsApp/email de cada local. No se inventan ni se usa un teléfono fijo como WhatsApp por suposición.
- Todos los platos iniciales tienen alérgenos pendientes. Al aplicar un filtro se ocultan las fichas sin confirmación. El editor admite los 14 alérgenos y un estado explícito de confirmación. No se promete ausencia de trazas.
- Los cambios del editor se guardan solo en este navegador (localStorage) y se comparten entre Profesional y Premium. Esencial ignora esas personalizaciones. Los datos de un visitante introducidos en el formulario de reserva no se guardan.
- El formulario prepara una solicitud, no confirma una mesa. Si no hay destino confirmado, no se envía nada. Con un destino configurado, el visitante debe confirmar el envío en su aplicación.
- El panel es una DEMOSTRACIÓN LOCAL, sin autenticación ni publicación entre dispositivos. Para producción se necesita acceso privado, servidor y persistencia compartida.
- El editor bloquea los dominios de la web original del negocio en los enlaces externos de reserva.

## Servicios del documento que requieren despliegue o datos del negocio

QR imprimibles (estándar, dinámico o por zonas) necesitan la URL de producción; no se imprimen códigos a localhost. Traducciones aprobadas hasta los máximos del paquete, hosting/SSL, dominio, integración con una plataforma de reservas, analítica/informes, optimización de Google Business Profile, SEO/GEO externo y mantenimiento quedan fuera de la entrega de esta maqueta local. No se presentan como realizados.

No se han cambiado los otros estilos ni se ha publicado ni subido la rama automáticamente.
