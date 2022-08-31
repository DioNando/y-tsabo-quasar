<template>
  <q-page class="flex column flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      class="q-mb-lg"
      style="width: 200px; height: 200px"
    />
    <q-spinner-facebook
        color="primary"
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
      this.router.push("/login");
      this.timer = void 0;
    }, 2500);
  },
};
</script>
