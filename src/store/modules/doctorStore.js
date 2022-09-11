export default {
  namespaced: true,
  state: {
    doctor: {},
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    meDoctor: (state) => state.patient,
  },
  mutations: {
    SET_DOCTOR: (state, payload) => {
      state.doctor = payload;
    },
    SET_CONNECTED: (state) => {
      state.isLoggedIn = true;
    },
    SET_DISCONNECTED: (state) => {
      state.isLoggedIn = false;
    },
  },
  actions: {
    setDoctor: (store, data) => {
      store.commit("SET_DOCTOR", data);
    },
    setConnected: (store) => {
      store.commit("SET_CONNECTED");
    },
    setDisconnected: (store) => {
      store.commit("SET_DISCONNECTED");
    },
  },
};
