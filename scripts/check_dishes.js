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

console.log('Categories:', global.RESTAURANT_PRESETS.estilo1.categories);
console.log('Total dishes in estilo1:', global.RESTAURANT_PRESETS.estilo1.menu.length);

const catCounts = {};
global.RESTAURANT_PRESETS.estilo1.menu.forEach(d => {
  catCounts[d.category] = (catCounts[d.category] || 0) + 1;
});
console.log('Dishes per category:', catCounts);
