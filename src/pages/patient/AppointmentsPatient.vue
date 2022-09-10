<template>
  <q-page class="q-pa-lg q-pt-none">
    <AppointmentsHeader />
    <AppointmentsContent />
    <div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]" style="z-index: 1000">
        <q-btn fab icon="add" color="primary" @click="router.push(`add-appointment`)" />
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AppointmentsHeader from "src/components/patient/Appointments/AppointmentsHeader.vue";
import AppointmentsContent from "src/components/patient/Appointments/AppointmentsContent.vue";

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
  components: { AppointmentsHeader, AppointmentsContent },
};
</script>

<!-- <style>
@import "../../css/dashboardPatient.scss";
</style> -->
