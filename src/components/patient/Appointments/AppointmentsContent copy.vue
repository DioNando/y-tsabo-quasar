<template>
  <div
    class="row"
    style="
      background-color: rgba(181, 232, 229, 0.35);
      margin-top: 6%;
      padding: 20px;
      border-radius: 10px;
    "
  >
    <div class="col" style="height: 125px">
      <div class="flex">
        <q-icon name="calendar_month" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; font-weight: 500; margin-left: 5%">
          03/09/2022
        </p>
      </div>
      <div class="flex">
        <q-icon name="calendar_month" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; margin-left: 5%">09 : 00 AM</p>
      </div>
      <div class="flex">
        <q-icon
          name="medication_liquid"
          size="1.75rem"
          style="color: #60a09a"
        />
        <p style="font-size: 16px; margin-left: 5%">Dr John Doe</p>
      </div>
    </div>
    <div class="col flex justify-end items-center">
      <q-icon name="cancel" size="1.75rem" style="color: #bc0066" />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "AppointmentsContent",
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
