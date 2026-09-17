const fs = require('fs');

const elementStore = {};
function createMockElement(id = '') {
  const el = {
    id,
    _html: '',
    get innerHTML() { return this._html; },
    set innerHTML(val) { this._html = val; },
    className: '',
    style: {},
    addEventListener: () => {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    querySelector: () => null,
    querySelectorAll: () => []
  };
  return el;
}

global.window = global;
global.document = {
  readyState: 'complete',
  addEventListener: () => {},
  documentElement: createMockElement('html'),
  body: createMockElement('body'),
  querySelector: (sel) => null,
  querySelectorAll: (sel) => [],
  getElementById: (id) => {
    if (!elementStore[id]) {
      elementStore[id] = createMockElement(id);
    }
    return elementStore[id];
  }
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

const code = fs.readFileSync('assets/js/app.js', 'utf8');
eval(code);

const app = global.window.gastroApp;
store.setPreset('estilo1');

// 1. Test Menu View
store.setView('menu');
app.render();
const rootEl = elementStore['app'] || elementStore['root'];
const headerHtml = rootEl ? rootEl.innerHTML : '';
console.log('Header has Carta tab:', headerHtml.includes('data-view="menu"'));
console.log('Header has Reservas tab:', headerHtml.includes('data-view="reservations"'));
console.log('Header has Cocina tab:', headerHtml.includes('data-view="kds"'));
console.log('Header has Métricas tab:', headerHtml.includes('data-view="metrics"'));
console.log('Header has Rentabilidad tab:', headerHtml.includes('data-view="roi"'));
console.log('Header DOES NOT have #donde-estamos:', !headerHtml.includes('#donde-estamos'));
console.log('Header DOES NOT have Take away anchor:', !headerHtml.includes('Take away'));

const viewContent = elementStore['view-content'];
const menuHtml = viewContent ? viewContent.innerHTML : '';

// Check continuous full-bleed sections
console.log('Has #opiniones full-width section:', menuHtml.includes('id="opiniones"') && menuHtml.includes('bg-surface-container-low'));
console.log('Has #reservas-direct full-width section:', menuHtml.includes('id="reservas-direct"') && menuHtml.includes('bg-[#14100E]'));
console.log('Has #alergenos-info full-width white section:', menuHtml.includes('id="alergenos-info"') && menuHtml.includes('bg-white'));

// 2. Test switching to KDS
store.setView('kds');
app.render();
console.log('Switched to KDS view, has Comandero:', viewContent.innerHTML.includes('Comandero de Cocina'));

// 3. Test switching to Metrics
store.setView('metrics');
app.render();
console.log('Switched to Metrics view, has Facturación Estimada:', viewContent.innerHTML.includes('Facturación Estimada'));

// 4. Test switching to ROI
store.setView('roi');
app.render();
console.log('Switched to ROI view, has comisiones:', viewContent.innerHTML.includes('Plataformas de Agregación'));

// 5. Test switching to Reservations
store.setView('reservations');
app.render();
console.log('Switched to Reservations view, has Motor de Reservas:', viewContent.innerHTML.includes('Motor de Reservas Directas'));
