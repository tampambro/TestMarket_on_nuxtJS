export const state = () => ({
  goods: []
});

export const mutations = {
  setGoods(state, goods) {
    state.goods = goods;
  },
  sortGoods(state, filterValue) {
    if (filterValue) {
      const key = filterValue;
      state.goods
        .sort((a, b) => {
          if (+a[key] > +b[key]) {
            return 1;
          } else if (+a[key] < +b[key]) {
            return -1;
          } else {
            return 0;
          }
        })
        .reverse();
    }
  }
};

export const actions = {
  async fetchGoods({ commit }, paramsId) {
    const goods = await this.$axios.$get(
      "https://frontend-test.idaproject.com/api/product?category=" + paramsId
    );
    commit("setGoods", goods);
  }
};

export const getters = {
  goods: s => s.goods
};
