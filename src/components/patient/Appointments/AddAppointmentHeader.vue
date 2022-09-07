<template>
  <div>
    <p style="font-size: 24px; font-weight: 600">Add Appointment</p>
    <p style="font-size: 16px; margin-top: -10px">
      Let's create an appointment for you.
      <br />
      Please complete the form bellow .
    </p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "AddAppointmentHeader",
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
