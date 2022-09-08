<template>
  <div
    class="row"
    style="
      background-color: rgba(181, 232, 229, 0.35);
      margin-top: 6%;
      padding: 20px;
      border-radius: 10px;
    "
  >
    <div class="col">
      <p style="font-weight: 500">Let's look at your appointments</p>
      <q-btn
        label="Explore"
        type="submit"
        class="col"
        style="
          height: 45px;
          border-radius: 10px;
          color: #60a09a;
          background-color: #b5e8e5;
          text-transform: capitalize;
        "
        @click="router.push(`appointments`)"
      />
    </div>
    <div class="col flex flex-center">
      <img src="~assets/Medical-prescripition.png" style="width: 100px" />
    </div>
  </div>

  <p style="margin-top: 10%; font-size: 14px">What do you need to do today ?</p>

  <div class="row q-gutter-xs">
    <div
      class="col row flex flex-center"
      style="
        background-color: #fae9c4;
        margin-top: 6%;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div class="col">
        <p style="font-weight: 500">Explore all appointments</p>
      </div>
      <div class="col-2">
        <div
          class="flex flex-center"
          style="
            background-color: #fff;
            padding: 10px;
            width: fit-content;
            height: fit-content;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 10px;

            cursor: pointer;
          "
          @click="router.push(`appointments`)"
        >
          <q-icon
            name="arrow_forward_ios"
            size="1.5vh"
            style="font-weight: bold"
          />
        </div>
      </div>
    </div>
    <div
      class="col row flex flex-center"
      style="
        background-color: #b6fbaf;
        margin-top: 6%;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div class="col">
        <p style="font-weight: 500">Create an appointment</p>
      </div>
      <div class="col-2">
        <div
          class="flex flex-center"
          style="
            background-color: #fff;
            padding: 10px;
            width: fit-content;
            height: fit-content;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 10px;
          "
          @click="router.push(`/patient/add-appointment`)"
        >
          <q-icon
            name="arrow_forward_ios"
            size="1.5vh"
            style="font-weight: bold"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="row q-gutter-xs">
    <div
      class="col row flex flex-center"
      style="
        background-color: #a6f7ca;
        margin-top: 6%;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div class="col">
        <p style="font-weight: 500">
          Explore <br />
          doctor list
        </p>
      </div>
      <div class="col-2">
        <div
          class="flex flex-center"
          style="
            background-color: #fff;
            padding: 10px;
            width: fit-content;
            height: fit-content;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 10px;
            cursor: pointer;
          "
          @click="router.push(`/patient/doctor-list`)"
        >
          <q-icon
            name="arrow_forward_ios"
            size="1.5vh"
            style="font-weight: bold"
          />
        </div>
      </div>
    </div>
    <div
      class="col row flex flex-center"
      style="
        background-color: #a7f1dd;
        margin-top: 6%;
        padding: 20px;
        border-radius: 10px;
      "
    >
      <div class="col">
        <p style="font-weight: 500">Need help ?</p>
      </div>
      <div class="col-2">
        <div
          class="flex flex-center"
          style="
            background-color: #fff;
            padding: 10px;
            width: fit-content;
            height: fit-content;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 10px;
            cursor: pointer;
          "
          @click="router.push(`#`)"
        >
          <q-icon
            name="arrow_forward_ios"
            size="1.5vh"
            style="font-weight: bold"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "DashboardContainer",
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
