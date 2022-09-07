<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <AddAppointmentHeader></AddAppointmentHeader>
    <AddAppointmentContent></AddAppointmentContent>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AddAppointmentHeader from "src/components/patient/Appointments/AddAppointmentHeader.vue";
import AddAppointmentContent from "src/components/patient/Appointments/AddAppointmentContent.vue";

export default {
  name: "AddAppointment",
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
  components: { AddAppointmentHeader, AddAppointmentContent },
};
</script>
