const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'Punto de Encuentro - Sitio web del bar Estilo4');
const destDir = path.join(__dirname, '..', 'estilo2');

// 1. ASSEMBLE estilo2/index.html
const puntoSrc = fs.readFileSync(path.join(srcDir, 'Punto de Encuentro.dc.html'), 'utf8');

// Header replacement for index.html
const oldHeaderRegex = /<header data-screen-label="Portada"[\s\S]*?<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px 28px;padding:18px clamp\(18px,4vw,56px\);border-bottom:2px solid #213A3C;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:14px;letter-spacing:\.16em">[\s\S]*?<\/div>/;

const newHeaderHtml = `<header data-screen-label="Portada" style="position:relative;background-color:#EBF4F3;background-image:url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%273%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.13 0 0 0 0 0.23 0 0 0 0 0.24 0 0 0 0.10 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27900%27 height=%27900%27%3E%3Cfilter id=%27s%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.006%27 numOctaves=%274%27 seed=%277%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.25 0 0 0 0 0.43 0 0 0 0 0.45 0 0 0 0.16 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23s)%27/%3E%3C/svg%3E');overflow:hidden">
  
  <!-- CABECERA DEVCORP ADAPTADA AL ESTILO DEL LOCAL -->
  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px 24px;padding:14px clamp(18px,4vw,56px);border-bottom:2px solid #213A3C;background:#EBF4F3;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:14px;letter-spacing:.12em">
    
    <!-- Lado Izquierdo: Logo DevCorp + Separador + Marca del Local -->
    <div style="display:flex;align-items:center;gap:14px">
      <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions" style="display:inline-flex;align-items:center;text-decoration:none">
        <img src="../assets/images/logo.png" alt="DevCorp Solutions" style="height:36px;width:auto;object-fit:contain" />
      </a>
      <div style="height:26px;width:1px;background:#213A3C;opacity:0.35"></div>
      <div style="display:flex;flex-direction:column;line-height:1.15">
        <span style="font-family:'Grandstander',sans-serif;font-weight:900;font-size:17px;color:#213A3C;letter-spacing:-0.01em">Punto de Encuentro</span>
        <span style="font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:11px;letter-spacing:0.12em;color:#3F6E72">Bar Cafetería · Aluche · Madrid</span>
      </div>
    </div>

    <!-- Centro: Enlaces de Navegación del Local (Sin Reservas ni Cocina/KDS) -->
    <nav aria-label="Navegación principal" style="display:flex;flex-wrap:wrap;gap:4px 18px;align-items:center">
      <a href="#desayunos" style="text-decoration:none;padding:6px 0;color:#213A3C">06:00 Desayunos</a>
      <a href="#comer" style="text-decoration:none;padding:6px 0;color:#213A3C">13:00 A comer</a>
      <a href="#minis" style="text-decoration:none;padding:6px 0;color:#213A3C">18:00 Minis</a>
      <a href="#finde" style="text-decoration:none;padding:6px 0;color:#213A3C">23:00 Finde</a>
      <a href="carta.html" style="text-decoration:none;padding:6px 0;color:#3F6E72;font-weight:900;border-bottom:2px solid #3F6E72">La carta</a>
      <a href="#llegar" style="text-decoration:none;padding:6px 0;color:#213A3C">Cómo llegar</a>
    </nav>

    <!-- Lado Derecho: Llamar + Selector de Estilos DevCorp -->
    <div style="display:flex;align-items:center;gap:12px">
      <a href="tel:+34912948407" style="display:inline-flex;align-items:center;gap:6px;background:#213A3C;color:#EBF4F3;padding:7px 14px;border-radius:4px;text-decoration:none;font-weight:800;font-size:13px;letter-spacing:.06em">
        <span>📞 912 94 84 07</span>
      </a>
      <select id="style-select" aria-label="Seleccionar Estilo DevCorp" style="background:#213A3C;color:#9FD3C7;border:2px solid #213A3C;border-radius:4px;padding:7px 12px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:13px;letter-spacing:.06em;cursor:pointer;outline:none">
        <option value="estilo1" style="background:#fff;color:#1c1c19">Estilo 1: Parrilla Vukata</option>
        <option value="estilo2" selected style="background:#fff;color:#1c1c19">Estilo 2: Punto de Encuentro</option>
        <option value="estilo3" style="background:#fff;color:#1c1c19">Estilo 3: Pizzería Carlos</option>
        <option value="estilo4" style="background:#fff;color:#1c1c19">Estilo 4: Cafetería Campamento</option>
      </select>
    </div>

  </div>`;

let puntoModified = puntoSrc.replace(oldHeaderRegex, newHeaderHtml);

// Replace head scripts with local react scripts
const oldHeadScript = '<script src="./support.js"></script>';
const newHeadScript = `<script src="../assets/vendor/react.production.min.js"></script>
<script src="../assets/vendor/react-dom.production.min.js"></script>
<script src="./support.js"></script>`;
puntoModified = puntoModified.replace(oldHeadScript, newHeadScript);

// Replace Carta.dc.html links with carta.html
puntoModified = puntoModified.replace(/href="Carta\.dc\.html/g, 'href="carta.html');

// Add change listener before </body>
const bodyCloseScript = `
<script>
document.addEventListener('change', function(e) {
  if (e.target && e.target.id === 'style-select') {
    var target = e.target.value;
    if (target && target !== 'estilo2') {
      window.location.href = '../' + target + '/index.html';
    }
  }
});
</script>
</body>`;
puntoModified = puntoModified.replace('</body>', bodyCloseScript);

fs.writeFileSync(path.join(destDir, 'index.html'), puntoModified, 'utf8');
console.log('Successfully wrote estilo2/index.html');


// 2. ASSEMBLE estilo2/carta.html
const cartaSrc = fs.readFileSync(path.join(srcDir, 'Carta.dc.html'), 'utf8');

const oldCartaHeaderRegex = /<header data-screen-label="Carta · cabecera"[\s\S]*?<\/header>/;

const newCartaHeaderHtml = `<header data-screen-label="Carta · cabecera" style="background:#213A3C;color:#EBF4F3">
  
  <!-- CABECERA DEVCORP ADAPTADA AL ESTILO DEL LOCAL -->
  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px 24px;padding:14px clamp(16px,4vw,48px);border-bottom:2px solid #3F6E72;background:#183234;color:#EBF4F3;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:14px;letter-spacing:.12em">
    
    <!-- Lado Izquierdo: Logo DevCorp + Separador + Marca del Local -->
    <div style="display:flex;align-items:center;gap:14px">
      <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions" style="display:inline-flex;align-items:center;text-decoration:none">
        <img src="../assets/images/logo.png" alt="DevCorp Solutions" style="height:36px;width:auto;object-fit:contain" />
      </a>
      <div style="height:26px;width:1px;background:#9FD3C7;opacity:0.35"></div>
      <div style="display:flex;flex-direction:column;line-height:1.15">
        <span style="font-family:'Grandstander',sans-serif;font-weight:900;font-size:17px;color:#EBF4F3;letter-spacing:-0.01em">Punto de Encuentro</span>
        <span style="font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:11px;letter-spacing:0.12em;color:#9FD3C7">Bar Cafetería · Aluche · Madrid</span>
      </div>
    </div>

    <!-- Centro: Enlaces de Navegación del Local -->
    <nav aria-label="Navegación principal" style="display:flex;flex-wrap:wrap;gap:4px 18px;align-items:center">
      <a href="index.html" style="text-decoration:none;padding:6px 0;color:#9FD3C7">Portada</a>
      <a href="index.html#desayunos" style="text-decoration:none;padding:6px 0;color:#EBF4F3">06:00 Desayunos</a>
      <a href="index.html#comer" style="text-decoration:none;padding:6px 0;color:#EBF4F3">13:00 A comer</a>
      <a href="index.html#minis" style="text-decoration:none;padding:6px 0;color:#EBF4F3">18:00 Minis</a>
      <a href="index.html#finde" style="text-decoration:none;padding:6px 0;color:#EBF4F3">23:00 Finde</a>
      <a href="carta.html" style="text-decoration:none;padding:6px 0;color:#9FD3C7;font-weight:900;border-bottom:2px solid #9FD3C7">La carta</a>
      <a href="index.html#llegar" style="text-decoration:none;padding:6px 0;color:#EBF4F3">Cómo llegar</a>
    </nav>

    <!-- Lado Derecho: Llamar + Selector de Estilos DevCorp -->
    <div style="display:flex;align-items:center;gap:12px">
      <a href="tel:+34912948407" style="display:inline-flex;align-items:center;gap:6px;background:#3F6E72;color:#EBF4F3;padding:7px 14px;border-radius:4px;text-decoration:none;font-weight:800;font-size:13px;letter-spacing:.06em">
        <span>📞 912 94 84 07</span>
      </a>
      <select id="style-select" aria-label="Seleccionar Estilo DevCorp" style="background:#213A3C;color:#9FD3C7;border:2px solid #3F6E72;border-radius:4px;padding:7px 12px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:13px;letter-spacing:.06em;cursor:pointer;outline:none">
        <option value="estilo1" style="background:#fff;color:#1c1c19">Estilo 1: Parrilla Vukata</option>
        <option value="estilo2" selected style="background:#fff;color:#1c1c19">Estilo 2: Punto de Encuentro</option>
        <option value="estilo3" style="background:#fff;color:#1c1c19">Estilo 3: Pizzería Carlos</option>
        <option value="estilo4" style="background:#fff;color:#1c1c19">Estilo 4: Cafetería Campamento</option>
      </select>
    </div>

  </div>

  <!-- Título Original de la Carta y Estado -->
  <div style="padding:18px clamp(16px,4vw,48px) 22px;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 24px">
    <div>
      <a href="index.html" style="display:inline-flex;align-items:center;min-height:44px;color:#9FD3C7;text-decoration:none;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;letter-spacing:.14em;font-size:13px">← Volver a Punto de Encuentro</a>
      <h1 style="margin:0;font-family:'Grandstander',sans-serif;font-weight:900;font-size:clamp(46px,7vw,84px);line-height:.9;letter-spacing:-.02em">La carta</h1>
      <div style="font-style:italic;color:#CADDDB;font-size:18px;margin-top:4px">The menu · C/ Maqueda 138, Aluche</div>
    </div>
    <div style="display:flex;align-items:center;gap:10px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;letter-spacing:.12em;font-size:14px;color:{{ stColor }}"><span style="width:10px;height:10px;border-radius:50%;background:{{ stColor }}"></span>{{ stLabel }}</div>
  </div>
</header>`;

let cartaModified = cartaSrc.replace(oldCartaHeaderRegex, newCartaHeaderHtml);
cartaModified = cartaModified.replace(oldHeadScript, newHeadScript);
cartaModified = cartaModified.replace(/href="Punto de Encuentro\.dc\.html/g, 'href="index.html');
cartaModified = cartaModified.replace('</body>', bodyCloseScript);

fs.writeFileSync(path.join(destDir, 'carta.html'), cartaModified, 'utf8');
console.log('Successfully wrote estilo2/carta.html');
