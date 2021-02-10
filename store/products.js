export const state = () => ({
  products: []
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
    localStorage.setItem("cart", JSON.stringify(state.products));
  },
  addProduct(state, product) {
    if (!state.products.find(p => p.id === product.id)) {
      state.products = [...state.products, product];
      localStorage.setItem("cart", JSON.stringify(state.products));
    }
  },
  removeProduct(state, productId) {
    state.products = Array.from(state.products.filter(p => p.id != productId));
    localStorage.setItem("cart", JSON.stringify(state.products));
  }
};

export const actions = {
  addToCart({ commit }, product) {
    commit("addProduct", product);
  },
  removeFromCart({ commit }, productId) {
    commit("removeProduct", productId);
  }
};

export const getters = {
  products: s => s.products
};
