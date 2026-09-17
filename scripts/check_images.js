const fs = require('fs');
global.localStorage = { getItem: () => null, setItem: () => {} };
global.window = global;
global.document = {
  readyState: 'complete',
  addEventListener: () => {},
  documentElement: {},
  body: {},
  getElementById: () => ({ innerHTML: '', addEventListener: () => {}, style: {} }),
  querySelector: () => null,
  querySelectorAll: () => []
};

const content = fs.readFileSync('assets/js/app.js', 'utf8');
const code = content.replace('const RESTAURANT_PRESETS', 'global.RESTAURANT_PRESETS');
eval(code);

const menu = global.RESTAURANT_PRESETS.estilo1.menu;
menu.forEach((d, i) => {
  console.log(`${i+1}. ${d.name} -> ${d.image ? d.image.slice(0, 45) + '...' : 'NO IMAGE'}`);
});
