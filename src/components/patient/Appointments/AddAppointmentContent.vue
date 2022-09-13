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
        v-model="appointment.dateAppointment"
        required
      />
    </div>
    <div class="flex flex-center" style="margin-top: 10%">
      <q-icon name="schedule" size="1.75rem" style="color: #60a09a" />
      <input
        type="time"
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
        v-model="appointment.timeAppointment"
      />
    </div>
    <div class="flex flex-center" style="margin-top: 10%">
      <q-icon name="medication_liquid" size="1.75rem" style="color: #60a09a" />
      <q-select
        v-model="appointment.doctor"
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
    <!-- <div class="flex flex-center" style="margin-top: 10%">
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
    </div> -->
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
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { ref } from "vue";
import doctorStore from "src/store/modules/doctorStore";
import { getAllDoctorsID } from "src/api/doctor";
import { appAppointmentPatient } from "src/api/patient";

export default {
  name: "AddAppointmentComponent",
  components: {},
  data() {
    return {
      timestamp: "",
      model: ref(null),
      appointment: {
        dateAppointment: "",
        timeAppointment: "",
        patient: "",
        doctor: "",
      },
      options: [
        { label: "Generalist", value: "1" },
        { label: "Surgeon", value: "2" },
        { label: "Pediatrician", value: "3" },
        { label: "Ophthalmologist", value: "4" },
        { label: "Psychologist", value: "5" },
      ],
      // patient: {
      //   dateAppointment: "",
      //   timeAppointment: "",
      //   patient: "",
      //   doctor: "",
      // },
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  mounted() {
    let mePatient = this.$store.getters["patientStore/mePatient"];
    this.appointment.patient = mePatient.idPatient;

    getAllDoctorsID()
      .then((result) => {
        this.options = result.data[0];
        console.log(this.options);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setup() {
    const router = useRouter();
    const toast = useQuasar();

    return { router, toast };
  },
  methods: {
    async onSubmit() {
      console.log(this.appointment);
      await appAppointmentPatient(this.appointment)
        .then(() => {
          this.toast.notify({
            color: "positive",
            textColor: "white",
            icon: "warning",
            message: "Appointment has been saved",
            position: "top",
          });
          this.router.go(-1);
        })
        .catch((error) => {
          this.toast.notify({
            color: "negative",
            textColor: "white",
            icon: "warning",
            message: "Error",
            position: "top",
          });
          console.log(error);
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
  // computed: {
  //   mePatient() {
  //     return this.$store.getters["patientStore/mePatientId"];
  //   },
  // },
};
</script>
