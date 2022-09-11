<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <AppointmentsHeader></AppointmentsHeader>
    <AppointmentsContent></AppointmentsContent>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AppointmentsHeader from "src/components/doctor/Appointments/AppointmentsHeader.vue";
import AppointmentsContent from "src/components/doctor/Appointments/AppointmentsContent.vue";

export default {
  name: "AppointmentsDoctor",
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
  components: { AppointmentsHeader, AppointmentsContent },
};
</script>
