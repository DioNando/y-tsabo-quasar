<template>
  <div style="margin-top: 2%">
    <div v-for="(doctor, i) in doctors" :key="i"
      class="row"
      style="
        background-color: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 20px;
        border-radius: 10px;
        margin-top: 6%;
        height: 18vh;
      "
    >
      <div class="col-4">
        <img src="~assets/doctor-illustration.png" style="width: 12vh" />
      </div>
      <div class="col">
        <p style="font-size: 3.5vw; font-weight: 500">{{ doctor.firstnameDoctor + ' ' + doctor.lastnameDoctor }}</p>
        <p>{{ doctor.doctorspeciality.nameSpeciality }}</p>
        <p>Avalaible</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getAllDoctors } from "src/api/doctor";

export default {
  name: "DoctorListContent",
  components: {},
  data() {
    return {
      doctors: [],
    };
  },
  mounted() {
    getAllDoctors()
      .then((result) => {
        this.doctors = result.data;
        console.table(this.doctors);
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
