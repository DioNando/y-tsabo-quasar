export default {
  namespaced: true,
  state: {
    counterValue: 0,
  },
  getters: {},
  mutations: {
    INCREMENT_COUNTER: (state) => {
      state.counterValue++;
    },
    DECREMENT_COUNTER: (state) => {
      state.counterValue--;
    },
  },
  actions: {},
};
