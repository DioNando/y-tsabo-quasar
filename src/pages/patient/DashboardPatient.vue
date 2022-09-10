<template>
  <q-page class="q-pa-lg flex column justify-between">
    <DashboardHeader />
    <DashboardContainer />
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import DashboardHeader from "../../components/patient/Dashboard/DashboardHeader.vue";
import DashboardContainer from "../../components/patient/Dashboard/DashboardContainer.vue";

export default {
  name: "DashboardPatient",
  components: { DashboardHeader, DashboardContainer },
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

<style scoped>
@import "../../css/dashboardPatient.scss";
</style>
