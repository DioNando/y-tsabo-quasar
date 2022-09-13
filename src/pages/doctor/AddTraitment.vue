<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <AddTraitmentHeader></AddTraitmentHeader>
    <AddTraitmentContent></AddTraitmentContent>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AddTraitmentHeader from "src/components/doctor/Appointments/AddTraitmentHeader.vue";
import AddTraitmentContent from "src/components/doctor/Appointments/AddTraitmentContent.vue";

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
  components: {
    AddTraitmentHeader,
    AddTraitmentContent,
  },
};
</script>
