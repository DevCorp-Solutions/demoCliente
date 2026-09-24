const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'Punto de Encuentro - Sitio web del bar Estilo4');
const destDir = path.join(__dirname, '..', 'estilo2');

// ==========================================
// 1. ASSEMBLE estilo2/index.html
// ==========================================
let puntoSrc = fs.readFileSync(path.join(srcDir, 'Punto de Encuentro.dc.html'), 'utf8');

// Header replacement for index.html: Centered, floating card header that does not span 100% width
const oldHeaderRegex = /<header data-screen-label="Portada"[\s\S]*?<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px 28px;padding:18px clamp\(18px,4vw,56px\);border-bottom:2px solid #213A3C;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:14px;letter-spacing:\.16em">[\s\S]*?<\/div>/;

const newHeaderHtml = `<header data-screen-label="Portada" style="position:relative;background-color:#EBF4F3;background-image:url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%273%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.13 0 0 0 0 0.23 0 0 0 0 0.24 0 0 0 0 0.10 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E'),url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27900%27 height=%27900%27%3E%3Cfilter id=%27s%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.006%27 numOctaves=%274%27 seed=%277%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.25 0 0 0 0 0.43 0 0 0 0 0.45 0 0 0 0 0.16 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23s)%27/%3E%3C/svg%3E');overflow:hidden">
  
  <!-- CABECERA DEVCORP ADAPTADA AL ESTILO DEL LOCAL (AJUSTADA Y CENTRADA) -->
  <div style="padding:14px clamp(14px,3vw,32px) 0;width:100%;box-sizing:border-box">
    <div style="max-width:1200px;margin:0 auto;background:#EBF4F3;border:2px solid #213A3C;border-radius:6px;box-shadow:3px 3px 0 #213A3C;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px 20px;padding:10px 18px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:14px;letter-spacing:.1em">
      
      <!-- Lado Izquierdo: Logo DevCorp + Separador + Marca del Local -->
      <div style="display:flex;align-items:center;gap:12px">
        <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions" style="display:inline-flex;align-items:center;text-decoration:none">
          <img src="../assets/images/logo.png" alt="DevCorp Solutions" style="height:34px;width:auto;object-fit:contain" />
        </a>
        <div style="height:24px;width:1px;background:#213A3C;opacity:0.35"></div>
        <div style="display:flex;flex-direction:column;line-height:1.15">
          <span style="font-family:'Grandstander',sans-serif;font-weight:900;font-size:16px;color:#213A3C;letter-spacing:-0.01em">Punto de Encuentro</span>
          <span style="font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:11px;letter-spacing:0.1em;color:#3F6E72">Bar Cafetería · Aluche</span>
        </div>
      </div>

      <!-- Centro: Enlaces de Navegación del Local (Sin Reservas ni Cocina/KDS) -->
      <nav aria-label="Navegación principal" style="display:flex;flex-wrap:wrap;gap:4px 16px;align-items:center">
        <a href="#desayunos" style="text-decoration:none;padding:6px 0;color:#213A3C">06:00 Desayunos</a>
        <a href="#comer" style="text-decoration:none;padding:6px 0;color:#213A3C">13:00 A comer</a>
        <a href="#minis" style="text-decoration:none;padding:6px 0;color:#213A3C">18:00 Minis</a>
        <a href="#finde" style="text-decoration:none;padding:6px 0;color:#213A3C">23:00 Finde</a>
        <a href="carta.html" style="text-decoration:none;padding:6px 0;color:#3F6E72;font-weight:900;border-bottom:2px solid #3F6E72">La carta</a>
        <a href="#llegar" style="text-decoration:none;padding:6px 0;color:#213A3C">Cómo llegar</a>
      </nav>

      <!-- Lado Derecho: Llamar + Selector de Estilos DevCorp -->
      <div style="display:flex;align-items:center;gap:10px">
        <a href="tel:+34912948407" style="display:inline-flex;align-items:center;gap:5px;background:#213A3C;color:#EBF4F3;padding:6px 12px;border-radius:4px;text-decoration:none;font-weight:800;font-size:12px;letter-spacing:.05em">
          <span>📞 912 94 84 07</span>
        </a>
        <select id="style-select" aria-label="Seleccionar Estilo DevCorp" style="background:#213A3C;color:#9FD3C7;border:2px solid #213A3C;border-radius:4px;padding:6px 10px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:12px;letter-spacing:.05em;cursor:pointer;outline:none">
          <option value="estilo1" style="background:#fff;color:#1c1c19">Estilo 1: Parrilla Vukata</option>
          <option value="estilo2" selected style="background:#fff;color:#1c1c19">Estilo 2: Punto de Encuentro</option>
          <option value="estilo3" style="background:#fff;color:#1c1c19">Estilo 3: Pizzería Carlos</option>
          <option value="estilo4" style="background:#fff;color:#1c1c19">Estilo 4: Cafetería Campamento</option>
        </select>
      </div>

    </div>
  </div>`;

let puntoModified = puntoSrc.replace(oldHeaderRegex, newHeaderHtml);

// Replace head scripts with local react scripts
const oldHeadScript = '<script src="./support.js"></script>';
const newHeadScript = `<script src="../assets/vendor/react.production.min.js"></script>
<script src="../assets/vendor/react-dom.production.min.js"></script>
<script src="./support.js"></script>`;
puntoModified = puntoModified.replace(oldHeadScript, newHeadScript);

// Centering inner Portada content
puntoModified = puntoModified.replace(
  '<div style="display:flex;flex-wrap:wrap;align-items:stretch">',
  '<div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:stretch">'
);

// Centering Línea del día
puntoModified = puntoModified.replace(
  '<div style="padding:34px clamp(18px,4vw,56px) 40px;border-top:2px solid #213A3C">',
  '<div style="padding:34px clamp(18px,4vw,56px) 40px;border-top:2px solid #213A3C"><div style="max-width:1200px;margin:0 auto">'
);
puntoModified = puntoModified.replace('</header>', '</div></div></header>');

// Centering Desayunos section contents
puntoModified = puntoModified.replace(
  '<section id="desayunos" ref="{{ r0 }}" data-screen-label="06:00 Desayunos" style="background-color:#EBF4F3;background-image:url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27900%27 height=%27900%27%3E%3Cfilter id=%27s%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.006%27 numOctaves=%274%27 seed=%273%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.25 0 0 0 0 0.43 0 0 0 0 0.45 0 0 0 0.14 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23s)%27/%3E%3C/svg%3E\');padding:clamp(56px,8vw,120px) clamp(18px,4vw,56px) clamp(56px,7vw,100px);border-top:2px solid #213A3C">',
  '<section id="desayunos" ref="{{ r0 }}" data-screen-label="06:00 Desayunos" style="background-color:#EBF4F3;background-image:url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27900%27 height=%27900%27%3E%3Cfilter id=%27s%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.006%27 numOctaves=%274%27 seed=%273%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.25 0 0 0 0 0.43 0 0 0 0 0.45 0 0 0 0.14 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23s)%27/%3E%3C/svg%3E\');padding:clamp(56px,8vw,120px) clamp(18px,4vw,56px) clamp(56px,7vw,100px);border-top:2px solid #213A3C"><div style="max-width:1200px;margin:0 auto">'
);
puntoModified = puntoModified.replace('</section>\n\n<!-- ======== 13:00 A COMER ======== -->', '</div></section>\n\n<!-- ======== 13:00 A COMER ======== -->');

// Centering Comer section contents
puntoModified = puntoModified.replace(
  '<section id="comer" ref="{{ r1 }}" data-screen-label="13:00 A comer" style="background:#DFE7E3;padding:clamp(60px,9vw,130px) clamp(18px,4vw,56px) clamp(50px,6vw,90px);border-top:2px solid #213A3C">',
  '<section id="comer" ref="{{ r1 }}" data-screen-label="13:00 A comer" style="background:#DFE7E3;padding:clamp(60px,9vw,130px) clamp(18px,4vw,56px) clamp(50px,6vw,90px);border-top:2px solid #213A3C"><div style="max-width:1200px;margin:0 auto">'
);
puntoModified = puntoModified.replace('</section>\n\n<!-- ======== 18:00 RACIONES Y MINIS ======== -->', '</div></section>\n\n<!-- ======== 18:00 RACIONES Y MINIS ======== -->');

// Centering Minis round builder & promos contents
puntoModified = puntoModified.replace(
  '<div style="padding:clamp(56px,8vw,120px) clamp(18px,4vw,56px) 0">',
  '<div style="padding:clamp(56px,8vw,120px) clamp(18px,4vw,56px) 0"><div style="max-width:1200px;margin:0 auto">'
);
puntoModified = puntoModified.replace(
  '<!-- Constructor de ronda -->',
  '</div></div>\n  <!-- Constructor de ronda -->'
);
puntoModified = puntoModified.replace(
  '<div style="margin:clamp(40px,6vw,80px) 0 0;background:#213A3C;color:#EBF4F3;padding:clamp(28px,4vw,56px) clamp(18px,4vw,56px);position:relative">',
  '<div style="margin:clamp(40px,6vw,80px) 0 0;background:#213A3C;color:#EBF4F3;padding:clamp(28px,4vw,56px) clamp(18px,4vw,56px);position:relative"><div style="max-width:1200px;margin:0 auto">'
);
puntoModified = puntoModified.replace(
  '<!-- Promos y raciones -->',
  '</div></div>\n  <!-- Promos y raciones -->'
);
puntoModified = puntoModified.replace(
  '<div style="padding:clamp(40px,6vw,80px) clamp(18px,4vw,56px) clamp(56px,7vw,100px);display:flex;flex-wrap:wrap;gap:clamp(34px,5vw,80px)">',
  '<div style="padding:clamp(40px,6vw,80px) clamp(18px,4vw,56px) clamp(56px,7vw,100px)"><div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:clamp(34px,5vw,80px)">'
);
puntoModified = puntoModified.replace(
  '<!-- La carta que no esperas -->',
  '</div></div>\n  <!-- La carta que no esperas -->'
);
puntoModified = puntoModified.replace(
  '<div style="background:#EBF4F3;border-top:2px solid #213A3C;padding:clamp(56px,8vw,110px) clamp(18px,4vw,56px);display:flex;flex-wrap:wrap;gap:clamp(30px,5vw,70px)">',
  '<div style="background:#EBF4F3;border-top:2px solid #213A3C;padding:clamp(56px,8vw,110px) clamp(18px,4vw,56px)"><div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:clamp(30px,5vw,70px)">'
);
puntoModified = puntoModified.replace(
  '</section>\n\n<!-- ======== 23:00 FINDE ======== -->',
  '</div></div></section>\n\n<!-- ======== 23:00 FINDE ======== -->\n'
);

// Centering Finde section contents
puntoModified = puntoModified.replace(
  '<section id="finde" ref="{{ r3 }}" data-screen-label="23:00 Finde hasta las 2" style="background:#183234;color:#EBF4F3;padding:clamp(60px,9vw,140px) clamp(18px,4vw,56px) clamp(60px,8vw,120px)">',
  '<section id="finde" ref="{{ r3 }}" data-screen-label="23:00 Finde hasta las 2" style="background:#183234;color:#EBF4F3;padding:clamp(60px,9vw,140px) clamp(18px,4vw,56px) clamp(60px,8vw,120px)"><div style="max-width:1200px;margin:0 auto">'
);
puntoModified = puntoModified.replace(
  '</section>\n\n<!-- ======== OPINIONES ======== -->',
  '</div></section>\n\n<!-- ======== OPINIONES ======== -->\n'
);

// Centering Opiniones section contents
puntoModified = puntoModified.replace(
  '<section data-screen-label="Opiniones" style="background-color:#EBF4F3;background-image:url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%273%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.13 0 0 0 0 0.23 0 0 0 0 0.24 0 0 0 0 0.10 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\');padding:clamp(56px,7vw,100px) clamp(18px,4vw,56px);display:flex;flex-wrap:wrap;gap:clamp(30px,5vw,70px);align-items:flex-start">',
  '<section data-screen-label="Opiniones" style="background-color:#EBF4F3;background-image:url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27220%27 height=%27220%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%27.85%27 numOctaves=%273%27/%3E%3CfeColorMatrix values=%270 0 0 0 0.13 0 0 0 0 0.23 0 0 0 0 0.24 0 0 0 0 0.10 0%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E\');padding:clamp(56px,7vw,100px) clamp(18px,4vw,56px)"><div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:clamp(30px,5vw,70px);align-items:flex-start">'
);
puntoModified = puntoModified.replace(
  '</section>\n\n<!-- ======== CÓMO LLEGAR ======== -->',
  '</div></section>\n\n<!-- ======== CÓMO LLEGAR ======== -->\n'
);

// Centering Cómo llegar section contents
puntoModified = puntoModified.replace(
  '<section id="llegar" data-screen-label="Cómo llegar" style="background:#CADDDB;border-top:2px solid #213A3C;display:flex;flex-wrap:wrap">',
  '<section id="llegar" data-screen-label="Cómo llegar" style="background:#CADDDB;border-top:2px solid #213A3C"><div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap">'
);
puntoModified = puntoModified.replace(
  '</section>\n\n<footer',
  '</div></section>\n\n<footer'
);

// Centering Footer
puntoModified = puntoModified.replace(
  '<footer style="background:#183234;color:#EBF4F3;padding:40px clamp(18px,4vw,56px) {{ footPad }};display:flex;flex-wrap:wrap;gap:18px 40px;justify-content:space-between;align-items:flex-end">',
  '<footer style="background:#183234;color:#EBF4F3;padding:40px clamp(18px,4vw,56px) {{ footPad }}"><div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;gap:18px 40px;justify-content:space-between;align-items:flex-end">'
);
puntoModified = puntoModified.replace(
  '</footer>\n\n<sc-if value="{{ narrow }}"',
  '</div></footer>\n\n<sc-if value="{{ narrow }}"'
);

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
fs.writeFileSync(path.join(destDir, 'Punto de Encuentro.dc.html'), puntoModified, 'utf8');
console.log('Successfully wrote estilo2/index.html & Punto de Encuentro.dc.html');


// ==========================================
// 2. ASSEMBLE estilo2/carta.html
// ==========================================
const cartaSrc = fs.readFileSync(path.join(srcDir, 'Carta.dc.html'), 'utf8');

const oldCartaHeaderRegex = /<header data-screen-label="Carta · cabecera"[\s\S]*?<\/header>/;

const newCartaHeaderHtml = `<header data-screen-label="Carta · cabecera" style="background:#213A3C;color:#EBF4F3">
  
  <!-- CABECERA DEVCORP ADAPTADA AL ESTILO DEL LOCAL (AJUSTADA Y CENTRADA) -->
  <div style="padding:14px clamp(14px,3vw,32px) 0;width:100%;box-sizing:border-box">
    <div style="max-width:1200px;margin:0 auto;background:#183234;border:2px solid #3F6E72;border-radius:6px;box-shadow:3px 3px 0 #3F6E72;color:#EBF4F3;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px 20px;padding:10px 18px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:14px;letter-spacing:.1em">
      
      <!-- Lado Izquierdo: Logo DevCorp + Separador + Marca del Local -->
      <div style="display:flex;align-items:center;gap:12px">
        <a href="https://devcorpsolutions.com" target="_blank" title="DevCorp Solutions" style="display:inline-flex;align-items:center;text-decoration:none">
          <img src="../assets/images/logo.png" alt="DevCorp Solutions" style="height:34px;width:auto;object-fit:contain" />
        </a>
        <div style="height:24px;width:1px;background:#9FD3C7;opacity:0.35"></div>
        <div style="display:flex;flex-direction:column;line-height:1.15">
          <span style="font-family:'Grandstander',sans-serif;font-weight:900;font-size:16px;color:#EBF4F3;letter-spacing:-0.01em">Punto de Encuentro</span>
          <span style="font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:11px;letter-spacing:0.1em;color:#9FD3C7">Bar Cafetería · Aluche</span>
        </div>
      </div>

      <!-- Centro: Enlaces de Navegación del Local -->
      <nav aria-label="Navegación principal" style="display:flex;flex-wrap:wrap;gap:4px 16px;align-items:center">
        <a href="index.html" style="text-decoration:none;padding:6px 0;color:#9FD3C7">Portada</a>
        <a href="index.html#desayunos" style="text-decoration:none;padding:6px 0;color:#EBF4F3">06:00 Desayunos</a>
        <a href="index.html#comer" style="text-decoration:none;padding:6px 0;color:#EBF4F3">13:00 A comer</a>
        <a href="index.html#minis" style="text-decoration:none;padding:6px 0;color:#EBF4F3">18:00 Minis</a>
        <a href="index.html#finde" style="text-decoration:none;padding:6px 0;color:#EBF4F3">23:00 Finde</a>
        <a href="carta.html" style="text-decoration:none;padding:6px 0;color:#9FD3C7;font-weight:900;border-bottom:2px solid #9FD3C7">La carta</a>
        <a href="index.html#llegar" style="text-decoration:none;padding:6px 0;color:#EBF4F3">Cómo llegar</a>
      </nav>

      <!-- Lado Derecho: Llamar + Selector de Estilos DevCorp -->
      <div style="display:flex;align-items:center;gap:10px">
        <a href="tel:+34912948407" style="display:inline-flex;align-items:center;gap:5px;background:#3F6E72;color:#EBF4F3;padding:6px 12px;border-radius:4px;text-decoration:none;font-weight:800;font-size:12px;letter-spacing:.05em">
          <span>📞 912 94 84 07</span>
        </a>
        <select id="style-select" aria-label="Seleccionar Estilo DevCorp" style="background:#213A3C;color:#9FD3C7;border:2px solid #3F6E72;border-radius:4px;padding:6px 10px;font-family:'Alegreya Sans SC',sans-serif;font-weight:800;font-size:12px;letter-spacing:.05em;cursor:pointer;outline:none">
          <option value="estilo1" style="background:#fff;color:#1c1c19">Estilo 1: Parrilla Vukata</option>
          <option value="estilo2" selected style="background:#fff;color:#1c1c19">Estilo 2: Punto de Encuentro</option>
          <option value="estilo3" style="background:#fff;color:#1c1c19">Estilo 3: Pizzería Carlos</option>
          <option value="estilo4" style="background:#fff;color:#1c1c19">Estilo 4: Cafetería Campamento</option>
        </select>
      </div>

    </div>
  </div>

  <!-- Título Original de la Carta y Estado (Centrado) -->
  <div style="max-width:1200px;margin:0 auto;padding:18px clamp(16px,4vw,32px) 22px;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 24px">
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

// Centering sticky category bar in Carta
cartaModified = cartaModified.replace(
  '<nav aria-label="Categorías" style="display:flex;gap:6px;overflow-x:auto;padding:10px clamp(16px,4vw,48px);scrollbar-width:none" ref="{{ navRef }}">',
  '<nav aria-label="Categorías" style="max-width:1200px;margin:0 auto;display:flex;gap:6px;overflow-x:auto;padding:10px clamp(16px,4vw,32px);scrollbar-width:none" ref="{{ navRef }}">'
);
cartaModified = cartaModified.replace(
  '<div style="display:flex;gap:6px;overflow-x:auto;padding:0 clamp(16px,4vw,48px) 10px;align-items:center;scrollbar-width:none">',
  '<div style="max-width:1200px;margin:0 auto;display:flex;gap:6px;overflow-x:auto;padding:0 clamp(16px,4vw,32px) 10px;align-items:center;scrollbar-width:none">'
);

fs.writeFileSync(path.join(destDir, 'carta.html'), cartaModified, 'utf8');
fs.writeFileSync(path.join(destDir, 'Carta.dc.html'), cartaModified, 'utf8');
console.log('Successfully wrote estilo2/carta.html & Carta.dc.html');
