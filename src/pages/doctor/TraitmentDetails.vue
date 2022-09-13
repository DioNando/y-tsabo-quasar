<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <TraitmentDetailsHeader></TraitmentDetailsHeader>
    <TraitmentDetailsContainer></TraitmentDetailsContainer>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import TraitmentDetailsHeader from "src/components/doctor/Traitments/TraitmentDetailsHeader.vue";
import TraitmentDetailsContainer from "src/components/doctor/Traitments/TraitmentDetailsContainer.vue";

export default {
  name: "TraitmentDetails",
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
  components: { TraitmentDetailsHeader, TraitmentDetailsContainer },
};
</script>
