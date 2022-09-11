import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import counterStore from "./modules/counterStore";
import doctorStore from "./modules/doctorStore";

export default store(function () {
  const Store = createStore({
    modules: {
      counterStore,
      doctorStore,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
