# Gancho y Directo · Estilo 7

Adaptación de estilo7 para Gancho y Directo, en la rama `feature/estilo7`, creada desde main. Los cambios previos de estilo3 están guardados en `feature/nuevos-cambios`, commit `058b04a`.

## Referencias y seguridad

Se utilizó el perfil público https://www.instagram.com/ganchoydirecto/ y publicaciones de visitas de El Paladar de Fabio y Fat Foodies Team. Logo original, rojo/lima/negro/blanco y fotos reales. Las miniaturas proceden del CDN de Instagram; los fotogramas se extrajeron de copias de los reels alojadas por Ñami. Créditos completos y enlaces originales en `credits.html`.

No se visitó ni se descargó ningún recurso desde el dominio de la web del restaurante. No hay enlaces a él en la página ni en sus fichas. Los únicos destinos funcionales son Instagram, Google Maps y teléfono; las fuentes de créditos añaden Ñami y Restaurant Guru. No hay iframe de Instagram ni scripts de terceros para reproducir los reels; se usan imágenes locales y enlaces a sus publicaciones.

## Contenido

- Logo original del perfil y lenguaje visual inspirado en su marca.
- Carta de muestra con 7 propuestas vistas en publicaciones de 2024, categorías y fichas accesibles. No se inventan precios actuales ni datos de alérgenos.
- Presentación del local y actividad desde 2010, según la biografía pública.
- Publicaciones y música en directo de archivo, con fechas y promociones finalizadas identificadas. No se anuncia una agenda actual sin confirmar.
- Selector de Aluche/Pozuelo, teléfonos y mapas con botón para abrir Google Maps.
- Selector de los 8 estilos.
- Versión móvil en `preview-mobile.html`, con anchos de 320, 390 y 430 px.

## Vista previa

La página se divide ahora en `esencial/`, `profesional/` y `premium/`, con selector de paquetes y una vista móvil en cada carpeta. La entrada de estilo7 abre Premium. Consulta `PAQUETES.md` para las diferencias, los datos pendientes y los servicios que requieren despliegue.

Profesional y Premium incluyen `gestion.html`, una demostración de edición que guarda únicamente en el navegador. Premium permite preparar una solicitud de reserva; el envío necesita un WhatsApp o email confirmado. No se han configurado destinos inventados.

Desde la raíz del repositorio: `python -m http.server 8080 --bind 127.0.0.1`.
Abrir http://127.0.0.1:8080/estilo7/ y http://127.0.0.1:8080/estilo7/preview-mobile.html.

HTML/CSS/JS estáticos. Sin pedidos, pagos, reservas automáticas ni datos personales guardados. Para convertir la propuesta en carta vigente, confirmar precios, ingredientes/alérgenos, horarios, disponibilidad y calendario de eventos con el negocio. El logo público recuperable tiene 100 × 100 px; se usa a tamaño pequeño y conviene sustituirlo por el original de alta resolución antes de publicar.
