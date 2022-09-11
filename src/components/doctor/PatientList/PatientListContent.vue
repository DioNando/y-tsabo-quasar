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
      "
    >
      <div class="col-4 flex flex-center">
        <img src="~assets/patient-avatar.png" style="width: 12vh" />
      </div>
      <div class="col">
        <p style="font-size: 3.5vw; font-weight: 500">RAKOTO Misa</p>
        <p>23 ans</p>
        <p>Processing</p>
      </div>
      <div class="col-1 flex flex-center">
        <q-icon name="info" size="1.75rem" style="color: #60a09a" />
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
      "
    >
      <div class="col-4 flex flex-center">
        <img src="~assets/patient-avatar-femelle.png" style="width: 12vh" />
      </div>
      <div class="col">
        <p style="font-size: 3.5vw; font-weight: 500">RAKOTO Misa</p>
        <p>23 ans</p>
        <p>Processing</p>
      </div>
      <div class="col-1 flex flex-center">
        <q-icon name="info" size="1.75rem" style="color: #60a09a" />
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
      "
    >
      <div class="col-4 flex flex-center">
        <img src="~assets/patient-avatar.png" style="width: 12vh" />
      </div>
      <div class="col">
        <p style="font-size: 3.5vw; font-weight: 500">RAKOTO Misa</p>
        <p>23 ans</p>
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
