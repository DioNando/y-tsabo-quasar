<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <DashboardHeader></DashboardHeader>
    <DashboardContainer></DashboardContainer>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import DashboardHeader from "../../components/patient/Dashboard/DashboardHeader.vue";
import DashboardContainer from "../../components/patient/Dashboard/DashboardContainer.vue";

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
  components: { DashboardHeader, DashboardContainer },
};
</script>
