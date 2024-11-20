import { API_URL, PRODUCTS_LIMIT } from "@/utils/constants";
import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      products: [],
      isLoading: true,
      cart: [],
    };
  },

  mutations: {
    // Sets the fetched products into the state
    setProducts(state, products) {
      state.products = products;
    },
    // Updates the loading state
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => {
        return item.id !== id;
      });
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseItemQuantity(state, id) {
      const item = state.cart.find((item) => item.id === id);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreseItemQuantity(state, id) {
      const item = state.cart.find((item) => item.id === id);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        this.commit("removeFromCart", id);
      }
    },
  },

  actions: {
    async fetchProducts({ commit, state }) {
      // Skip fetching if products are already loaded (This will improve performance, because products fetchs just one time)
      if (state.products.length > 0) return;
      commit("setLoading", true);
      try {
        const response = await fetch(`${API_URL}?limit=${PRODUCTS_LIMIT}`);
        const data = await response.json();
        commit("setProducts", data.products);
      } catch (error) {
        console.error("Error Fetching Products", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },

  getters: {
    getTotalCartQuantity: (state) => {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    getTotalCartPrice: (state) => {
      return state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
    },
  },
});
