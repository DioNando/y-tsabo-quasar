<style>
@import "../../css/dashboardPatient.scss";
</style>

<template>
  <q-page class="q-pa-lg flex column">
    <PatientListHeader></PatientListHeader>
    <PatientListContent></PatientListContent>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import PatientListHeader from "../../components/doctor/PatientList/PatientListHeader.vue";
import PatientListContent from "../../components/doctor/PatientList/PatientListContent.vue";

export default {
  name: "DoctorList",
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
  components: { PatientListHeader, PatientListContent },
};
</script>
