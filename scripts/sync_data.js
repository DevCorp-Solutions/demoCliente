const fs = require('fs');
const path = require('path');

const cartaPath = path.join(__dirname, '..', 'estilo2', 'carta.html');
const cartaContent = fs.readFileSync(cartaPath, 'utf8');

const match = cartaContent.match(/C\s*=\s*(\[[\s\S]*?\]);\s*componentDidMount/);
if (!match) {
  console.error("Could not find C in carta.html");
  process.exit(1);
}

const C = eval(match[1]);

const AL = {
  GL: "Gluten", CR: "Crustáceos", HU: "Huevo", PE: "Pescado",
  CA: "Cacahuetes", SO: "Soja", LA: "Lácteos", FC: "Frutos de cáscara",
  AP: "Apio", MO: "Mostaza", SE: "Sésamo", SU: "Sulfitos",
  AT: "Altramuces", ML: "Moluscos"
};

let count = 0;
const menu = [];
const categories = [];

C.forEach(([catId, catName, catEn, note, items]) => {
  if (!categories.includes(catName)) {
    categories.push(catName);
  }
  items.forEach(it => {
    count++;
    const [name, nameEn, priceStr, allergenStr, desc] = it;
    const codes = allergenStr ? allergenStr.trim().split(/\s+/).filter(Boolean) : [];
    const allergens = codes.map(c => AL[c] || c);
    
    let numericPrice = null;
    const cleanPrice = priceStr.replace(/[+*]/g, "").trim().split("/")[0].trim().replace(",", ".");
    if (!isNaN(parseFloat(cleanPrice))) {
      numericPrice = parseFloat(cleanPrice);
    }
    
    menu.push({
      id: "pe-" + count,
      name,
      nameEn,
      price: numericPrice,
      priceFormatted: priceStr + " €",
      category: catName,
      categoryId: catId,
      description: desc || "",
      allergens,
      allergenCodes: codes,
      note: note || ""
    });
  });
});

const defaultDataHeader = {
  id: "estilo2",
  styleName: "Estilo 2",
  styleSubtitle: "Bar Cafetería Castizo & Tradicional",
  layoutType: "punto-de-encuentro",
  themeClass: "theme-punto-encuentro",
  name: "Bar Punto de Encuentro",
  tagline: "Desde las 6 de la mañana, el punto de Aluche",
  neighborhood: "Aluche (Madrid)",
  address: "C/ Maqueda, 138 · 28024 Aluche, Madrid (al lado del Metro y Cercanías)",
  phone: "912 94 84 07",
  phoneRaw: "+34912948407",
  whatsapp: "34912948407",
  email: "contacto@barpuntodeencuentro.es",
  managerName: "Dirección Bar Punto de Encuentro",
  googleMapsUrl: "https://www.google.com/maps/place/C.+de+Maqueda,+138,+28024+Madrid",
  type: "Bar Cafetería & Cervecería de Barrio",
  rating: 4.2,
  totalReviews: 910,
  serviceStatus: "Abierto desde las 06:00 · Terraza e Interior",
  bannerImg: "https://cartaonlineqr.com/wp-content/uploads/2024/08/Logo-e1722700766619.png",
  schedule: {
    lunes: "06:00 – 00:00",
    martes: "Cerrado (Descanso semanal)",
    miercoles: "06:00 – 00:00",
    jueves: "06:00 – 00:00",
    viernes: "07:00 – 02:00",
    sabado: "07:00 – 02:00",
    domingo: "07:00 – 00:00"
  },
  aboutUs: {
    headline: "El Auténtico Punto de Encuentro de Aluche: Desayunos desde las 6:00, Raciones y Minis",
    story: "Ubicado en la calle Maqueda 138, al lado del intercambiador de Metro y Cercanías de Aluche, Bar Punto de Encuentro es el lugar de referencia para empezar el día con un café humeante y churros recién hechos, disfrutar del menú del día a mediodía, o compartir minis de cerveza y calimocho con raciones generosas al caer la tarde.",
    pillars: [
      {
        icon: "☕",
        title: "Primer Café a las 6:00",
        desc: "Abrimos antes que nadie. Desayunos completos con bollería, churros, porras o barritas con tomate y jamón."
      },
      {
        icon: "🍻",
        title: "Minis de Litro de Verdad",
        desc: "Ofertas de 3 jarras más aperitivo desde 13,50 €. Cerveza fría, calimocho, tinto de verano y sidra."
      },
      {
        icon: "🥟",
        title: "La Carta que no Esperas",
        desc: "Además de bravas, oreja y calamares tradicionales, disfruta de gyozas caseras, wantón frito, arroz tres delicias y pato a la naranja."
      }
    ]
  },
  categories,
  menu
};

const fileContent = `// estilo2/data.js - Datos oficiales y configurables para Bar Punto de Encuentro
(function() {
  const DEFAULT_DATA = ${JSON.stringify(defaultDataHeader, null, 2)};

  function loadData() {
    let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    if (typeof localStorage !== 'undefined') {
      try {
        const custom = localStorage.getItem('devcorp_data_estilo2');
        if (custom) {
          const parsed = JSON.parse(custom);
          data = { ...data, ...parsed };
        }
        const unifiedName = localStorage.getItem('devcorp_unified_name');
        if (unifiedName && unifiedName.trim() !== '') {
          data.name = unifiedName.trim();
        }
      } catch (e) {
        console.warn('Error cargando datos personalizados de estilo2:', e);
      }
    }
    return data;
  }

  const loaded = loadData();
  window.CURRENT_PRESET = loaded;
  window.ESTILO2_DATA = loaded;
  window.DEV_CORP_STYLES = window.DEV_CORP_STYLES || {};
  window.DEV_CORP_STYLES['estilo2'] = loaded;
})();
`;

fs.writeFileSync(path.join(__dirname, '..', 'estilo2', 'data.js'), fileContent, 'utf8');
console.log("Successfully wrote estilo2/data.js with " + menu.length + " items and " + categories.length + " categories.");
