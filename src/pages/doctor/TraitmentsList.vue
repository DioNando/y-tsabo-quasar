<style>
@import "../../css/dashboardPatient.scss";
</style>
<template>
  <q-page class="q-pa-lg flex column">
    <TraitmentsListHeader></TraitmentsListHeader>
    <TraitmentsListContainer></TraitmentsListContainer>
    <div>
      <q-page-sticky
        position="bottom-right"
        :offset="[18, 18]"
        style="z-index: 1000"
      >
        <q-btn
          fab
          icon="add"
          color="primary"
          @click="router.push(`add-traitment`)"
        />
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import TraitmentsListHeader from "src/components/doctor/Traitments/TraitmentsListHeader.vue";
import TraitmentsListContainer from "src/components/doctor/Traitments/TraitmentsListContainer.vue";

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
  components: { TraitmentsListHeader, TraitmentsListContainer },
};
</script>
