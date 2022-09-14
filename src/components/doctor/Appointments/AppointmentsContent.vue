<template>
  <div
    v-for="(appointment, index) in appointments"
    :key="index"
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
        <q-icon name="face" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; font-weight: 500; margin-left: 5%">
          {{
            appointment.patient_appointmentTopatient.firstnamePatient +
            " " +
            appointment.patient_appointmentTopatient.lastnamePatient
          }}
        </p>
      </div>
      <div class="flex">
        <q-icon name="calendar_month" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; margin-left: 5%">
          {{ appointment.dateAppointment }}
        </p>
      </div>
      <div class="flex">
        <q-icon name="alarm_on" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; margin-left: 5%">
          {{ appointment.timeAppointment }}
        </p>
      </div>
    </div>
    <div class="col flex justify-end items-center">
      <q-icon
        name="info"
        size="1.75rem"
        style="color: #c7c7c7"
        @click="router.push(`/doctor/appointment-details`)"
      />
    </div>
  </div>
  <!-- <div
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
        <q-icon name="face" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; font-weight: 500; margin-left: 5%">
          Dr John Doe
        </p>
      </div>
      <div class="flex">
        <q-icon name="calendar_month" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; margin-left: 5%">03/09/2022</p>
      </div>
      <div class="flex">
        <q-icon name="alarm_on" size="1.75rem" style="color: #60a09a" />
        <p style="font-size: 16px; margin-left: 5%">09 : 00 AM</p>
      </div>
    </div>
    <div class="col flex justify-end items-center">
      <q-icon
        name="info"
        size="1.75rem"
        style="color: #c7c7c7"
        @click="router.push(`/doctor/appointment-details`)"
      />
    </div>
  </div> -->
</template>

<script>
import { useRouter } from "vue-router";
import { getDoctorAppointment } from "src/api/doctor";

export default {
  name: "AppointmentsContent",
  components: {},
  data() {
    return {
      appointments: [],
    };
  },
  mounted() {
    getDoctorAppointment(17)
      .then((result) => {
        this.appointments = result.data;
        console.table(this.appointments);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {},
};
</script>
