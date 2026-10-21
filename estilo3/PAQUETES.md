# Paquetes del estilo 3

Trabajo aislado en `feature/nuevos-cambios`, según la tabla del documento Paquetes de Hostelería y Presupuestos. No se muestran tarifas de desarrollo ni mantenimiento. Los precios de comida se conservan.

## Entradas

- `esencial/index.html`: landing de inicio, carta, horario y mapa. Selección fija de 60 fichas distribuida entre Entrantes, Principales, Postres y Bebidas. Sin fotografías por plato, botones de teléfono/ruta, reservas, panel, filtros avanzados ni datos estructurados.
- `profesional/index.html`: fotos en las fichas de la carta junto a descripción y precio, presentación del local, eventos, carta completa, filtro de los 14 alérgenos, menú del día, enlaces directos, mapa y enlace externo de reservas configurable. Metadatos básicos. Editor local en `gestion.html`.
- `premium/index.html`: conserva la web completa anterior (portada, arroces, carnes, carta, mapa y valoraciones). Incluye lo anterior, solicitud de reserva en la propia página con salida a WhatsApp/email confirmados, grupos, tres reseñas positivas destacadas con fuente y datos estructurados del restaurante.

La entrada anterior `estilo3/index.html` abre Premium por defecto y conserva los enlaces antiguos `?paquete=esencial|profesional|premium`. El selector navega entre carpetas, sin depender de preferencias de otros estilos. Cada carpeta tiene su propia `preview-mobile.html`. CSS, fotos y código común se comparten desde estilo3 para evitar duplicación. Esencial tiene un `data.js` independiente: los cambios de los paneles no lo alteran.

## Configuración y límites de esta demostración

Los datos no facilitados (horarios, plataforma de reservas, email/WhatsApp, menú diario y agenda) quedan pendientes o vacíos; no se inventa información del negocio. Configurarlos desde `profesional/gestion.html` o `premium/gestion.html` aplica la información a ambas vistas en el mismo navegador. El teléfono existente es fijo y no se usa como WhatsApp por suposición. Las solicitudes nunca se presentan como reservas confirmadas.

El editor es una demostración con localStorage, NO un área privada de producción. Comparte `devcorp_data_estilo3` con el panel anterior y exporta JSON. Para publicar cambios entre dispositivos hacen falta almacenamiento en servidor y autenticación. Las fotos nuevas deben incorporarse al catálogo fotográfico existente; una ficha nueva sin foto muestra un aviso.

La tabla incluye servicios que no se resuelven con esta maqueta local: dominio, hosting/SSL, QR imprimibles apuntando al dominio definitivo (y redirecciones por zonas), despliegue del panel privado, analítica y sus informes, optimización de la ficha de Google, traducciones aprobadas hasta los límites contratados, SEO/GEO externo, mantenimiento y rondas de revisión. No se anuncian como realizados. La base actual de Premium se conserva según la petición del usuario; esta separación no constituye la entrega contractual de esos servicios.

El filtro excluye fichas con información incompleta y aquellas con una variedad que contenga el alérgeno seleccionado. La ausencia de un icono no garantiza ausencia de alérgenos ni trazas. No se cambian los datos publicados por el local.
