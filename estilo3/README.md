# Mala Pata · Estilo 3

Propuesta independiente para Mala Pata Aluche. Todos los cambios y recursos están dentro de `estilo3/`.

## Vista previa

Desde la raíz de `demoCliente`:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Abrir http://127.0.0.1:8080/estilo3/ . También se puede abrir `estilo3/index.html` directamente: no hay compilación ni dependencias de ejecución. Las fuentes de Google requieren conexión; hay tipografías alternativas locales.

## Contenido y alcance

- Carta, precios, variantes y alérgenos importados el 24/09/2026 desde https://cartaonlineqr.com/mala-pata-aluche-carta/ y sus ocho secciones. Cada plato conserva su enlace de origen.
- Portada, sección de arroces y logotipo descargados desde esa carta. Fichas con fotografías reales de referencia, identificadas como tales. Atribuciones y licencias en `photo-credits.html` y `images/real/sources.json`.
- Los arroces se ofrecen por encargo y su precio es por persona. Se conservan precios S/M y «desde» tal como aparecen en la carta.
- Los alérgenos no declarados se muestran como información pendiente de consultar, nunca como ausencia garantizada.
- Arroces y paellas seleccionada por defecto. Carta por categorías sin buscador, fichas con fotos, precios, descripción y variedades. Iconos de alérgenos con títulos accesibles, leyenda y texto original desplegable para conservar avisos de trazas y opciones.
- Carta de consulta, sin cesta, cantidades, pedidos ni almacenamiento. El contacto se realiza por teléfono. No incluye reseñas, horarios ni historia inventados.
- Antes de la carta aparecen arroces (foto a la izquierda) y carnes (foto a la derecha). Los arroces tienen fondo verde oscuro y botón verde claro; carnes tiene fondo verde claro. «Ven a vernos» integra Google Maps buscando Mala Pata en Calle Quero, 61, Madrid, con enlace de indicaciones. El mapa requiere conexión a Google.
- No modifica el panel de administración ni los otros estilos. No utiliza su configuración compartida ni sus claves de almacenamiento.

## Archivos

`index.html`: estructura. `style.css` y `menu.css`: diseño adaptable. `app.js`: interacciones. `data.js`: carta. `photos.js`: asignación de imágenes. `images/`: recursos locales.

`import_menu.py` permite volver a importar el contenido publicado (Python, requests y beautifulsoup4); reemplaza `data.js` y las imágenes de origen. Revisar también el orden de `photos.js` si cambia la carta.

`source_photos.py` descarga fotografías reales con licencia de Wikimedia Commons, con caché local y respeto de límites de solicitudes. `build_photos.py` genera el mapa de fotos y su página de atribuciones. `inspect_photos.py` crea hojas de contacto temporales para revisión visual; no modifica los archivos originales.

`verify.cjs` prueba la categoría inicial, ausencia de cesta y buscador, orden de secciones, colores de arroces y carnes, botón de carnes, fotografías, fichas, iconos, leyenda, Google Maps y anchuras de móvil y escritorio. Necesita Playwright y Microsoft Edge; no son dependencias del sitio.

La seccion de valoraciones muestra una captura manual de Google Maps (4,5/5 y 1.971 opiniones, consultada el 25/09/2026); no se actualiza automaticamente. El selector de 1 a 5 estrellas es local: todas las puntuaciones abren el mismo enlace de Google para confirmar y publicar la resena. Place ID: ChIJO6N8JD6IQQ0R7VHisrUrmI8.
