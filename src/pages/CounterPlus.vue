<template>
  <section class="q-ma-lg fit flex column items-center">
    <div class="text-h3 q-mb-md">{{ currentValue }}</div>
    <div>
      <q-btn
        round
        icon="add"
        color="primary"
        class="q-mx-sm"
        @click="increment"
      />
      <q-btn
        round
        icon="remove"
        color="accent"
        class="q-mx-sm"
        @click="decrement"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "CounterPlus",
  methods: {
    increment() {
      this.$store.commit("counterStore/INCREMENT_COUNTER");
    },
    decrement() {
      this.$store.commit("counterStore/DECREMENT_COUNTER");
    },
  },
  computed: {
    currentValue() {
      return this.$store.state.counterStore.counterValue;
    },
  },
};
</script>
