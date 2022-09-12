<template>
  <div style="margin-top: 2%">
    <div v-for="(patient, i) in patients" :key="i"
      class="row"
      style="
        background-color: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 20px;
        border-radius: 10px;
        margin-top: 6%;
      "
    >
      <div class="col-4 flex flex-center">
        <img v-if="patient.sexePatient == 'man'" src="~assets/patient-avatar.png" style="width: 12vh" />
        <img v-else src="~assets/patient-avatar-femelle.png" style="width: 12vh" />
      </div>
      <div class="col">
        <p style="font-size: 3.5vw; font-weight: 500">{{ patient.firstnamePatient + ' ' + patient.lastnamePatient}}</p>
        <p>{{ patient.agePatient }} ans</p>
        <p>Processing</p>
      </div>
      <div class="col-1 flex flex-center">
        <q-icon name="info" size="1.75rem" style="color: #60a09a" />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getAllPatients } from "src/api/patient";

export default {
  name: "DoctorListContent",
  components: {},
  data() {
    return {
      patients: [],
    };
  },
  mounted() {
    getAllPatients()
      .then((result) => {
        this.patients = result.data;
        console.table(this.patients);
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
