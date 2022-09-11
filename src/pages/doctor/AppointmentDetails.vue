<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <AppointmentDetailsHeader></AppointmentDetailsHeader>
    <AppointmentsDetailsContent></AppointmentsDetailsContent>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AppointmentDetailsHeader from "src/components/patient/Appointments/AppointmentDetailsHeader.vue";
import AppointmentsDetailsContent from "../../components/patient/Appointments/AppointmentsDetailsContent.vue";

export default {
  name: "AppointmentDetails",
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
  components: { AppointmentDetailsHeader, AppointmentsDetailsContent },
};
</script>
