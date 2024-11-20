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
    setProducts(state, products) {
      state.products = products;
    },
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
  },

  actions: {
    async fetchProducts({ commit, state }) {
      // Fetch products only if they are not already loaded
      if (state.products.length === 0) {
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
      }
    },
  },
});
