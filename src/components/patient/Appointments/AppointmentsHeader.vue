<template>
  <div class="text-h5">
    Appointments
  </div>
  <!-- <div class="row justify-between" style="margin-top: -3%">
    <div class="col flex align-center" style="padding-top: 3px">
      <p style="font-size: 24px; font-weight: 600">Appointments</p>
    </div>
    <div class="col-1">
      <div
        style="
          background-color: #60a09a;
          width: fit-content;
          padding: 10px;
          border-radius: 10px;
        "
        @click="router.push(`add-appointment`)"
      >
        <q-icon name="add" size="1.5rem" style="color: white" />
      </div>
    </div>
  </div> -->
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "AppointmentsHeader",
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
