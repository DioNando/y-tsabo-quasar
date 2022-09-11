import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import counterStore from "./modules/counterStore";
import doctorStore from "./modules/doctorStore";
import patientStore from "./modules/patientStore";

export default store(function () {
  const Store = createStore({
    modules: {
      counterStore,
      doctorStore,
      patientStore,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
