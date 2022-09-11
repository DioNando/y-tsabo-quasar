<template>
  <q-page class="flex column flex-center">
    <img
      alt="Quasar logo"
      src="~assets/Y-2.svg"
      class="q-mb-lg"
      style="width: 250px; height: 250px"
    />
    <q-spinner-facebook color="primary" size="7em" />
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "ListDoctor",
  data() {
    return {};
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  mounted() {},
};
</script>
