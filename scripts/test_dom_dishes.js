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
app.render();

const viewContent = elementStore['view-content'];
const menuHtml = viewContent ? viewContent.innerHTML : '';

// Count dish cards
const dishCardMatches = menuHtml.match(/class="[^"]*dish-card[^"]*"/g) || [];
console.log('Total dish-card matches in estilo1:', dishCardMatches.length);

// Count menu groups
const menuGroupMatches = menuHtml.match(/class="[^"]*menu-group[^"]*"/g) || [];
console.log('Total menu-group sections in estilo1:', menuGroupMatches.length);

// Check review button in estilo1
const hasReviewBtn = menuHtml.includes('id="open-smart-review-btn"');
console.log('Has review button in estilo1:', hasReviewBtn);

// Test renderSmartReviewModal
app.renderSmartReviewModal(store.getPreset());
const reviewModal = elementStore['review-modal-container'];
const reviewHtml = reviewModal ? reviewModal.innerHTML : '';
console.log('Review modal has close button:', reviewHtml.includes('id="close-review-modal"'));
console.log('Review modal has backdrop:', reviewHtml.includes('id="review-modal-backdrop"'));

// Test renderDishDetailModal
const sampleDish = store.getPreset().menu[0];
app.renderDishDetailModal(sampleDish, store.getPreset());
const dishModal = elementStore['dish-modal-container'];
const dishHtml = dishModal ? dishModal.innerHTML : '';
console.log('Dish detail modal has close button:', dishHtml.includes('id="close-dish-modal"'));
console.log('Dish detail modal has backdrop:', dishHtml.includes('id="dish-modal-backdrop"'));
console.log('Dish detail modal has qty minus:', dishHtml.includes('data-modal-qty-minus'));
console.log('Dish detail modal has qty plus:', dishHtml.includes('data-modal-qty-plus'));
console.log('Dish detail modal has add cart:', dishHtml.includes('data-modal-add-cart'));
