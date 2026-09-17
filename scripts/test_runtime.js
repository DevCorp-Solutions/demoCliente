// Simple runtime verification script for GastroApp
const fs = require('fs');

// Mock browser environment
global.window = global;
global.document = {
  readyState: 'complete',
  addEventListener: () => {},
  documentElement: { className: '' },
  body: { className: '' },
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: (id) => ({
    innerHTML: '',
    className: '',
    style: {},
    addEventListener: () => {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} }
  })
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

try {
  // Load app.js code
  const code = fs.readFileSync('assets/js/app.js', 'utf8');
  eval(code);

  console.log('App code evaluated successfully.');
  
  if (global.window.gastroApp) {
    const app = global.window.gastroApp;
    console.log('GastroApp instantiated successfully on window.gastroApp.');
    
    // Test rendering all 4 styles
    ['estilo1', 'estilo2', 'estilo3', 'estilo4'].forEach(styleId => {
      store.setPreset(styleId);
      app.render();
      console.log('Successfully rendered ' + styleId);
    });
    
    console.log('ALL TESTS PASSED: All 4 styles rendered without errors!');
  } else {
    console.error('window.gastroApp is not defined!');
    process.exit(1);
  }
} catch (err) {
  console.error('Runtime verification error:', err);
  process.exit(1);
}
