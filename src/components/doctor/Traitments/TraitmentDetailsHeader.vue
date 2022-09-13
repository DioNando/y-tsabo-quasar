<template>
  <div class="row justify-between" style="margin-top: -3%">
    <div class="col flex align-center" style="padding-top: 3px">
      <p style="font-size: 24px; font-weight: 600">Treatments</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "AddAppointmentDetailsHeader",
  components: {},
  data() {
    return {};
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {},
};
</script>
