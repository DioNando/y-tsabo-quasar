<style>
@import "../../css/dashboardPatient.scss";
</style>

<template>
  <q-page class="q-pa-lg flex column">
    <DoctorListHeader></DoctorListHeader>
    <DoctorListContent></DoctorListContent>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import DoctorListHeader from "../../components/patient/DoctorList/DoctorListHeader.vue";
import DoctorListContent from "src/components/patient/DoctorList/DoctorListContent.vue";

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
  components: { DoctorListHeader, DoctorListContent },
};
</script>
