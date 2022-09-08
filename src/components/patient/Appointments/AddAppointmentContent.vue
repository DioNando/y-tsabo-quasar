<template>
  <q-form @submit="onSubmit" @reset="onReset">
    <div class="flex flex-center" style="margin-top: 3%">
      <q-icon name="face" size="1.75rem" style="color: #60a09a" />
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
        value="John Doe"
        disabled
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
      <q-select
        v-model="DoctorList"
        :options="options"
        label="Choose a specialist"
        style="
          padding-left: 10px;
          background-color: #fff;
          border: none;
          margin-left: 18px;
          width: 85%;
          height: 6vh;
        "
      />
    </div>
    <div class="flex flex-center" style="margin-top: 10%">
      <q-icon name="info" size="1.75rem" style="color: #60a09a" />
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
        placeholder="Describe us your disease"
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
      DoctorList: "",
      model: ref(null),
      options: ["John Doe", "Doe John"],
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
      if (this.user.type === "patient") {
        this.router.push("/patient/dashboard");
      } else {
        this.router.push("/doctor/dashboard");
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
