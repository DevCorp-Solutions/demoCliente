/**
 * Estado Global Reactivo de la Demo DevCorp GastroSuite
 * Maneja el preset activo, el carrito de pedidos, el comandero en vivo (KDS),
 * las reservas y el contador de platos más pedidos en tiempo real.
 */
import { RESTAURANT_PRESETS } from './presets.js';

const STORAGE_KEY = 'devcorp_gastrosuite_state_v2';

const INITIAL_DISH_SALES = {
  // Parrilla Vukata
  "p1": 42, // Chuletón
  "p4": 38, // Torreznos
  "p2": 26, // Entrecot
  "p3": 19, // Costillar
  "p5": 24, // Croquetas
  "p6": 14,
  "p7": 31, // Tarta de queso
  "p8": 18,
  // Cervecería 27
  "c1": 58, // Oreja
  "c2": 49, // Bravas
  "c5": 37, // Bocata calamares
  "c6": 142, // Doble cerveza
  "c3": 28, // Huevos rotos
  "c4": 26,
  // Pizzería Carlos
  "pz2": 67, // Burrata
  "pz1": 53, // Tartufo
  "pz3": 44, // Diavola
  "pz4": 29, // Ravioli
  "pz5": 41, // Tiramisú
  // Cafetería Campamento
  "cf3": 94, // Flat White
  "cf1": 51, // Tosta aguacate
  "cf5": 62, // Croissant
  "cf4": 35, // Açaí
  "cf2": 43  // Tosta ibérica
};

const INITIAL_DEMO_ORDERS = [
  {
    id: "ORD-101",
    timestamp: new Date(Date.now() - 1000 * 60 * 14).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "mesa",
    tableNumber: "Mesa 4 (Terraza)",
    customerName: "Carlos M. (Comensal)",
    items: [
      { id: "p4", name: "Torreznos Crujientes de Soria", qty: 1, price: 11.50 },
      { id: "p1", name: "Chuletón de Vaca Vieja Madurada (1kg)", qty: 1, price: 38.50, notes: "Al punto menos" },
      { id: "p8", name: "Vino Tinto D.O. Ribera del Duero", qty: 1, price: 18.00 }
    ],
    total: 68.00,
    status: "kitchen",
    elapsedMinutes: 14
  },
  {
    id: "ORD-102",
    timestamp: new Date(Date.now() - 1000 * 60 * 6).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "takeaway",
    tableNumber: "Recogida Local (14:30h)",
    customerName: "Laura G. (WhatsApp)",
    items: [
      { id: "p5", name: "Croquetas Cremosas de Cecina (6 uds)", qty: 2, price: 10.50 },
      { id: "p7", name: "Tarta de Queso Fluida al Horno", qty: 2, price: 6.50 }
    ],
    total: 34.00,
    status: "pending",
    elapsedMinutes: 6
  },
  {
    id: "ORD-103",
    timestamp: new Date(Date.now() - 1000 * 60 * 22).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: "delivery",
    tableNumber: "Domicilio (C/ Camarena 82)",
    customerName: "Marcos S.",
    items: [
      { id: "p2", name: "Entrecot de Ternera de Guadarrama", qty: 2, price: 21.00, notes: "Poco hecho" },
      { id: "p6", name: "Parrillada de Verduras", qty: 1, price: 12.00 }
    ],
    total: 54.00,
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
          presetId: parsed.presetId || 'parrilla',
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
      presetId: 'parrilla',
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
    return RESTAURANT_PRESETS[this.state.presetId] || RESTAURANT_PRESETS.parrilla;
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
  addToCart(item, notes = "") {
    const existing = this.state.cart.find(c => c.id === item.id && c.notes === notes);
    if (existing) {
      existing.qty += 1;
    } else {
      this.state.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        notes: notes,
        qty: 1
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
      customerName: orderData.customerName || 'Cliente',
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
