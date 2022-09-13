<template>
  <q-page class="q-pt-lg">
    <q-card
      class="q-mb-md flex items-start justify-between"
      flat
      style="background-color: rgba(181, 232, 229, 0.35)"
      v-for="(user, index) in users"
      :key="index"
    >
      <!-- <q-card-actions class="fit flex items-center justify-between">
        <q-btn flat round icon="list" />
        <q-fab
          color="warning"
          text-color="black"
          icon="more_horiz"
          direction="up"
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
      </q-card-actions>
      <q-separator /> -->
      <q-card-section class="q-pa-sm">
        <div class="flex items-center q-gutter-x-sm">
          <q-btn flat round icon="medication_liquid" />
          <div>Dr {{ user.firstName }}</div>
        </div>
        <div class="flex items-center q-gutter-x-sm">
          <q-btn flat round icon="event" />
          <div>03/09/2022</div>
        </div>
        <div class="flex items-center q-gutter-x-sm">
          <q-btn flat round icon="schedule" />
          <div>7:00PM</div>
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
      appointment: [],
    };
  },
  mounted() {
    let mePatient = this.$store.getters["patientStore/mePatient"];
    // this.appointment.patient = mePatient.idPatient;

    getPatientAppointment(mePatient.idPatient)
      .then((result) => {
        this.appointment = result.data;
        console.table(this.appointment);
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
