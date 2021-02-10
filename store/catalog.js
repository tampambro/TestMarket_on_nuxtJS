export const state = () => ({
  catalog: []
});

export const mutations = {
  setCatalog(state, catalog) {
    state.catalog = catalog;
  }
};

export const actions = {
  async fetch({ commit }) {
    const catalog = await this.$axios.$get(
      "https://frontend-test.idaproject.com/api/product-category"
    );
    commit("setCatalog", catalog);
  }
};

export const getters = {
  catalog: s => s.catalog
};
