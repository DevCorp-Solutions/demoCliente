/**
 * Estado Global Reactivo de la Demo DevCorp GastroSuite
 * Maneja el estilo activo (Estilo 1, Estilo 2, Estilo 3, Estilo 4),
 * el carrito de pedidos, el comandero en vivo (KDS), las reservas
 * y el contador de platos más pedidos en tiempo real.
 */
import { RESTAURANT_PRESETS } from './presets.js';

const STORAGE_KEY = 'devcorp_gastrosuite_state_v4';

const INITIAL_DISH_SALES = {
  // Estilo 1: Editorial & Alta Cocina
  "e1_1": 42, // Chuletón
  "e1_2": 38, // Torreznos
  "e1_3": 26, // Entrecot
  "e1_4": 31, // Croquetas
  "e1_5": 19, // Rabo de toro
  "e1_6": 35, // Tarta fluida
  // Estilo 2: App Interactiva & Bento Grid
  "e2_1": 78, // Smash Burger
  "e2_2": 52, // Oreja
  "e2_3": 41, // Tacos
  "e2_4": 64, // Bravas
  "e2_5": 39, // Bao
  "e2_6": 47, // Cookie
  // Estilo 3: Bistró Tradicional & Carta Clásica
  "e3_1": 65, // Judiones
  "e3_2": 44, // Chuletón
  "e3_3": 58, // Huevos rotos
  "e3_4": 49, // Callos
  "e3_5": 32, // Entrecot
  "e3_6": 41, // Arroz con leche
  // Estilo 4: Showcase Visual & Minimalismo
  "e4_1": 82, // Tosta salmón
  "e4_2": 114, // Flat White
  "e4_3": 56, // Açaí bowl
  "e4_4": 69, // Croissant
  "e4_5": 48, // Tosta jamón
  "e4_6": 39  // Matcha Latte
};

const INITIAL_DEMO_ORDERS = [
  {
    id: "ORD-101",
    timestamp: new Date(Date.now() - 1000 * 60 * 14).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "mesa",
    tableNumber: "Mesa 4 (Comedor)",
    customerName: "Carlos M.",
    items: [
      { id: "e1_2", name: "Torreznos Crujientes con Patata Revolcona", qty: 1, price: 11.50 },
      { id: "e1_1", name: "Chuletón de Vaca Vieja (1.000g)", qty: 1, price: 39.50, notes: "Punto menos" }
    ],
    total: 51.00,
    status: "kitchen",
    elapsedMinutes: 14
  },
  {
    id: "ORD-102",
    timestamp: new Date(Date.now() - 1000 * 60 * 6).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "takeaway",
    tableNumber: "Recogida Local",
    customerName: "Laura G.",
    items: [
      { id: "e1_4", name: "Croquetas Cremosas de Cecina y Vaca (6 uds)", qty: 2, price: 10.50 },
      { id: "e1_6", name: "Tarta Fluida de Queso Azul de Madrid y Oveja", qty: 2, price: 6.50 }
    ],
    total: 34.00,
    status: "pending",
    elapsedMinutes: 6
  },
  {
    id: "ORD-103",
    timestamp: new Date(Date.now() - 1000 * 60 * 22).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "delivery",
    tableNumber: "Entrega Domicilio",
    customerName: "Marcos S.",
    items: [
      { id: "e1_3", name: "Entrecot de Ternera de Guadarrama (400g)", qty: 2, price: 22.00, notes: "Al punto" },
      { id: "e1_5", name: "Rabo de Toro Estofado al Vino Tinto de Madrid", qty: 1, price: 19.00 }
    ],
    total: 63.00,
    status: "ready",
    elapsedMinutes: 22
  }
];

class AppStore {
  constructor() {
    this.subscribers = [];
    this.state = this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          presetId: (parsed.presetId && RESTAURANT_PRESETS[parsed.presetId]) ? parsed.presetId : 'estilo1',
          currentView: parsed.currentView || 'menu',
          cart: parsed.cart || [],
          orders: (parsed.orders && parsed.orders.length > 0) ? parsed.orders : INITIAL_DEMO_ORDERS,
          reservations: parsed.reservations || [],
          dishSales: parsed.dishSales || INITIAL_DISH_SALES,
          activeCategory: 'all',
          activeAllergenFilter: null
        };
      }
    } catch (e) {
      console.warn("Could not read local state, fallback to initial", e);
    }

    return {
      presetId: 'estilo1',
      currentView: 'menu',
      cart: [],
      orders: INITIAL_DEMO_ORDERS,
      reservations: [],
      dishSales: { ...INITIAL_DISH_SALES },
      activeCategory: 'all',
      activeAllergenFilter: null
    };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        presetId: this.state.presetId,
        currentView: this.state.currentView,
        cart: this.state.cart,
        orders: this.state.orders,
        reservations: this.state.reservations,
        dishSales: this.state.dishSales
      }));
    } catch (e) {
      console.warn("Could not save state", e);
    }
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.state));
  }

  getPreset() {
    return RESTAURANT_PRESETS[this.state.presetId] || RESTAURANT_PRESETS.estilo1;
  }

  setPreset(presetId) {
    if (RESTAURANT_PRESETS[presetId]) {
      this.state.presetId = presetId;
      this.state.cart = [];
      this.state.activeCategory = 'all';
      this.state.activeAllergenFilter = null;
      this.save();
    }
  }

  setView(viewName) {
    this.state.currentView = viewName;
    this.save();
  }

  setCategory(cat) {
    this.state.activeCategory = cat;
    this.notify();
  }

  setAllergenFilter(allergen) {
    this.state.activeAllergenFilter = (this.state.activeAllergenFilter === allergen) ? null : allergen;
    this.notify();
  }

  // --- LÓGICA EN TIEMPO REAL DEL PLATO MÁS PEDIDO ---
  getDishSalesCount(dishId) {
    return this.state.dishSales[dishId] || 15;
  }

  getMostOrderedDish() {
    const preset = this.getPreset();
    let topDish = preset.menu[0];
    let maxCount = -1;

    preset.menu.forEach(dish => {
      const count = this.getDishSalesCount(dish.id);
      if (count > maxCount) {
        maxCount = count;
        topDish = dish;
      }
    });

    return {
      dish: topDish,
      count: maxCount
    };
  }

  incrementDishSale(dishId, qty = 1) {
    if (!this.state.dishSales[dishId]) {
      this.state.dishSales[dishId] = 15;
    }
    this.state.dishSales[dishId] += qty;
    this.save();
  }

  // Carrito
  addToCart(item, notes = "", qty = 1) {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += qty;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: qty
      });
    }
    this.save();
  }

  removeFromCart(index) {
    if (this.state.cart[index]) {
      this.state.cart.splice(index, 1);
      this.save();
    }
  }

  updateCartQty(index, delta) {
    if (this.state.cart[index]) {
      this.state.cart[index].qty += delta;
      if (this.state.cart[index].qty <= 0) {
        this.state.cart.splice(index, 1);
      }
      this.save();
    }
  }

  clearCart() {
    this.state.cart = [];
    this.save();
  }

  getCartTotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getCartItemCount() {
    return this.state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  // Creación de comanda
  createOrder(orderData) {
    const items = [...this.state.cart];
    
    // Incrementar en tiempo real las ventas de cada plato
    items.forEach(item => {
      this.incrementDishSale(item.id, item.qty);
    });

    const newOrder = {
      id: `ORD-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: orderData.type || 'mesa',
      tableNumber: orderData.tableNumber || 'Mesa 1',
      customerName: orderData.customerName || 'Comensal',
      customerPhone: orderData.customerPhone || '',
      items: items,
      total: this.getCartTotal(),
      status: 'pending',
      elapsedMinutes: 0
    };

    this.state.orders.unshift(newOrder);
    this.clearCart();
    this.save();
    return newOrder;
  }

  updateOrderStatus(orderId, nextStatus) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = nextStatus;
      this.save();
    }
  }

  addReservation(reservationData) {
    const reservation = {
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      ...reservationData
    };
    this.state.reservations.unshift(reservation);
    this.save();
    return reservation;
  }

  resetDemo() {
    this.state.orders = INITIAL_DEMO_ORDERS;
    this.state.cart = [];
    this.state.reservations = [];
    this.state.dishSales = { ...INITIAL_DISH_SALES };
    this.save();
  }
}

export const store = new AppStore();
