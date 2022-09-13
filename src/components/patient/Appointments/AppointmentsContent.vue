<template>
  <q-page class="q-pt-lg">
    <q-card
      class="q-mb-md flex items-start justify-between"
      flat
      style="background-color: rgba(181, 232, 229, 0.35)"
      v-for="(appointment, index) in appointments"
      :key="index"
    >
      <q-card-section class="q-pa-sm">
        <div class="flex items-center q-gutter-x-sm">
          <q-btn flat round icon="medication_liquid" />
          <div>
            Dr
            {{
              appointment.doctor_appointmentTodoctor.firstnameDoctor +
              " " +
              appointment.doctor_appointmentTodoctor.lastnameDoctor
            }}
          </div>
        </div>
        <div class="flex items-center q-gutter-x-sm">
          <q-btn flat round icon="event" />
          <div>{{ appointment.dateAppointment }}</div>
        </div>
        <div class="flex items-center q-gutter-x-sm">
          <q-btn flat round icon="schedule" />
          <div>{{ appointment.timeAppointment }}</div>
        </div>

        <!-- <div>
          <q-btn round color="warning" size="0.75rem" icon="close" />
        </div> -->
      </q-card-section>
      <div class="q-pa-sm">
        <q-fab
          color="warning"
          text-color="black"
          icon="more_horiz"
          direction="down"
          padding="xs"
          flat
        >
          <q-fab-action
            color="grey-3"
            text-color="black"
            @click="onClick"
            icon="delete"
            padding="xs"
            flat
          />
          <q-fab-action
            color="grey-3"
            text-color="black"
            @click="onClick"
            icon="folder_open"
            padding="xs"
            flat
          />
        </q-fab>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getPatientAppointment } from "src/api/patient";

export default {
  name: "AppointmentsContent",
  components: {},
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      appointments: [],
    };
  },
  mounted() {
    let mePatient = this.$store.getters["patientStore/mePatient"];
    // this.appointment.patient = mePatient.idPatient;

    // getPatientAppointment(2)
    getPatientAppointment(mePatient.idPatient)
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

    const users = ref([
      {
        firstName: "Frank",
      },
      {
        firstName: "Vic",
      },
      {
        firstName: "Gina",
      },
      {
        firstName: "Jessi",
      },
      {
        firstName: "Jay",
      },
    ]);

    return { router, users };
  },
  methods: {},
};
</script>
