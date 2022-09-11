const counterStore = {
  INCREMENT_COUNTER(state, payload) {
    state.counterValue++;
  },
  DECREMENT_COUNTER(state, payload) {
    state.counterValue--;
  },
};

export default function () {
  return {
    counterStore
  };
}

