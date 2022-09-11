<template>
  <q-form @submit="onSubmit" @reset="onReset">
    <div class="flex flex-center" style="margin-top: 3%">
      <q-icon name="face" size="1.75rem" style="color: #60a09a" />
      <input
        type="text"
        style="
          padding: 10px;
          background-color: #fff;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          border-bottom: 2px solid #60a09a;
          margin-left: 18px;
          width: 85%;
          height: 6vh;
        "
        required
      />
    </div>
    <div class="flex flex-center" style="margin-top: 10%">
      <q-icon name="calendar_month" size="1.75rem" style="color: #60a09a" />
      <input
        type="date"
        style="
          padding: 10px;
          background-color: #fff;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          border-bottom: 2px solid #60a09a;
          margin-left: 18px;
          width: 85%;
          height: 6vh;
        "
        value="{{ timestamp }}"
        required
      />
    </div>
    <div class="flex flex-center" style="margin-top: 10%">
      <q-icon name="schedule" size="1.75rem" style="color: #60a09a" />
      <input
        type="text"
        style="
          padding: 10px;
          background-color: #fff;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          border-bottom: 2px solid #60a09a;
          margin-left: 18px;
          width: 85%;
          height: 6vh;
        "
        required
      />
    </div>
    <div class="flex flex-center" style="margin-top: 10%">
      <q-icon name="medication_liquid" size="1.75rem" style="color: #60a09a" />
      <input
        type="text"
        style="
          padding: 10px;
          background-color: #f6f6f6;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          border-bottom: 2px solid #60a09a;
          margin-left: 18px;
          width: 85%;
          height: 6vh;
        "
        value="You"
        required
        disabled
      />
    </div>
    <q-btn
      label="Create appointment"
      type="submit"
      color="primary"
      class="full-width"
      icon-right="login"
      style="margin-top: 10%"
    />
  </q-form>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "AddAppointmentComponent",
  components: {},
  data() {
    return {
      timestamp: "",
      user: {
        mail: "",
        password: "",
        type: "patient",
      },
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {
    onSubmit() {
      if (this.$route.fullPath === "/doctor/add-appointment") {
        this.router.push("/doctor/appointments");
      } else {
        this.router.push("/patient/appointments");
      }
      this.toast.notify({
        color: "positive",
        textColor: "white",
        icon: "waving_hand",
        message: "Nice to see you, " + this.user.mail,
        position: "top",
      });
    },
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>
