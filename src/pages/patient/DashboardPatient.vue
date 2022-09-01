<template>
  <q-page class="flex column flex-center">
    <img
      alt="Quasar logo"
      src="~assets/Y-3.svg"
      class="q-mb-lg"
      style="width: 250px; height: 250px"
    />
    <q-spinner-facebook
        color="accent"
        size="7em"
      />
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default {
  name: "IndexPage",
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    const $q = useQuasar();
    let timer = null;

    return {
      router,
      timer,
      $q,
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.timer = void 0;
    });
  },
};
</script>
