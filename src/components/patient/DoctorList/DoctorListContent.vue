<template>
  <div style="margin-top: 2%">
    <div
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
        <p style="font-size: 3.5vw; font-weight: 500">Dr. John Doe</p>
        <p>Neurologist</p>
        <p>Avalaible</p>
      </div>
    </div>
    <div
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
        <p style="font-size: 3.5vw; font-weight: 500">Dr. John Doe</p>
        <p>Neurologist</p>
        <p>Avalaible</p>
      </div>
    </div>
    <div
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
        <p style="font-size: 3.5vw; font-weight: 500">Dr. John Doe</p>
        <p>Neurologist</p>
        <p>Avalaible</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "DoctorListContent",
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
