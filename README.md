# 🍽️ DevCorp GastroSuite — Demo Interactiva para Hostelería

> **Ecosistema digital a medida para bares, restaurantes y cafeterías** desarrollado por [DevCorp Solutions](https://devcorpsolutions.com/). Diseñado para eliminar comisiones abusivas de intermediarios (Glovo/Uber), digitalizar comandas en cocina y automatizar reservas de mesa.

---

## 🎯 Contexto Comercial: Aluche, Lucero y Carabanchel

A partir del análisis de datos de más de **970 negocios de hostelería** en la zona sur-oeste de Madrid, se detectó que la necesidad digital nº 1 es:
* **Carta/menú digital interactivo con fotos reales.**
* **Canal propio de pedidos (Mesa, Take Away y Domicilio) con 0% de comisión.**
* **Gestión de reservas para evitar mesas vacías (*no-shows*).**
* **Comandero táctil en cocina (KDS) para coordinar barra, terraza y cocina.**

Esta aplicación web es una **herramienta de venta viva y táctil**. Un comercial o consultor de DevCorp puede abrirla desde un iPad, tablet Android o teléfono móvil frente al dueño del local y mostrarle la experiencia completa en menos de 2 minutos.

---

## 🚀 Cómo probarla en local

Dado que está construida con **HTML5, Tailwind CSS y JavaScript ESModules puro**, no requiere `npm install` ni compiladores pesados:

### Opción 1: Con Python (Recomendada)
Abre tu terminal en la carpeta del proyecto y ejecuta:
```bash
python -m http.server 8080
```
Luego abre en tu navegador: [http://localhost:8080](http://localhost:8080)

### Opción 2: Con VS Code Live Server
Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

---

## 🌐 Cómo publicarla en GitHub Pages (Paso a Paso en 2 Minutos)

El proyecto incluye rutas relativas (`./`) y el archivo `.nojekyll`, por lo que está 100% preparado para funcionar directamente en GitHub Pages:

1. **Inicializa el repositorio Git en la carpeta:**
   ```bash
   git init
   git add .
   git commit -m "feat: DevCorp GastroSuite demo hosteleria lista para produccion"
   ```

2. **Crea un repositorio en tu cuenta de GitHub** (por ejemplo `devcorp-gastrosuite-demo`).

3. **Vincula y sube el código:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/devcorp-gastrosuite-demo.git
   git push -u origin main
   ```

4. **Activa GitHub Pages:**
   * Entra en tu repositorio en GitHub: `Settings` -> `Pages`.
   * En **Source**, selecciona `Deploy from a branch`.
   * En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   * Haz clic en **Save**.

En 60 segundos tu demo estará activa en:  
`https://TU-USUARIO.github.io/devcorp-gastrosuite-demo/`

---

## 💼 Guía de Demostración Comercial (Para el Consultor de DevCorp)

Cuando visites a un dueño de restaurante o bar en Aluche o Lucero:

1. **Paso 1 (Personalización Instantánea):**
   * En la barra superior, usa el desplegable **"Local de prueba"** y elige el tipo de local más parecido al suyo (*Parrilla/Asador, Cervecería/Tapas, Pizzería o Cafetería*). La carta, fotos y estilo cambian en 1 segundo.

2. **Paso 2 (Experiencia Comensal):**
   * Pídele que elija 2 platos de la carta y prueba los filtros de alérgenos (*"Fíjate cómo un comensal celíaco puede filtrar en un segundo"*).
   * Añade los platos al carrito y dale a **"Tramitar Pedido"**.
   * Muestra la opción de enviar la comanda por **WhatsApp**: el pedido llega a su teléfono con formato limpio y profesional.

3. **Paso 3 (La magia de la Cocina - KDS):**
   * Cambia a la pestaña **"Cocina / KDS"**.
   * Enséñale cómo la comanda que acaba de pedir aparece en tiempo real en la columna de cocina. Pasa la comanda de *"Nuevo"* a *"En Fogones"* y a *"Listo"*.

4. **Paso 4 (El Cierre Comercial - Calculadora de Ahorro):**
   * Ve a la pestaña **"Ahorro vs Glovo"**.
   * Pregúntale: *"¿Cuántos pedidos hacéis al mes entre recoger y llevar? ¿Cuál es vuestro ticket medio?"*.
   * Mueve los sliders con sus cifras reales. Cuando vea en pantalla que está regalando **25.000 € o 35.000 € al año en comisiones**, dile:
   > *"Con DevCorp te desarrollamos tu propio sistema con 0% de comisiones por pedido. El código es tuyo y recuperas ese margen desde el primer mes."*
   * Haz clic en **"Auditoría en 48 Horas"** para cerrar la reunión.

---

## 🛠️ Tecnologías y Arquitectura

* **Frontend:** HTML5 semántico, Tailwind CSS, JavaScript reactivo modular (Store con patrón Observer y persistencia en `localStorage`).
* **Multi-dispositivo:** Diseñado Mobile-First para uso táctil en teléfonos y tablets de sala/cocina.
* **Integraciones:** WhatsApp Business API Link con formato de comanda estructurado.
* **Licencia y Propiedad:** Desarrollado por **DevCorp Solutions** ([devcorpsolutions.com](https://devcorpsolutions.com/)).
