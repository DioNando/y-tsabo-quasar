export default {
  namespaced: true,
  state: {
    patient: {},
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    mePatient: (state) => state.patient,
  },
  mutations: {
    SET_PATIENT: (state, payload) => {
      state.patient = payload;
    },
    SET_CONNECTED: (state) => {
      state.isLoggedIn = true;
    },
    SET_DISCONNECTED: (state) => {
      state.isLoggedIn = false;
    },
  },
  actions: {
    setPatient: (store, data) => {
      store.commit("SET_PATIENT", data);
    },
    setConnected: (store) => {
      store.commit("SET_CONNECTED");
    },
    setDisconnected: (store) => {
      store.commit("SET_DISCONNECTED");
    },
  },
};
