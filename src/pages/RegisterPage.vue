<template>
  <q-page padding class="flex column justify-between">
    <div class="flex column justify-evenly items-center" style="flex: auto">
      <div class="text-h4">Please, select one!</div>
      <div class="text-h5">You are</div>
      <div class="fit row no-wrap justify-evenly items-center content-start">
        <div
          class="flex column items-center"
          @click="router.push(`/register/patient`)"
        >
          <img
            alt="Quasar logo"
            src="~assets/Patient-pana.svg"
            class="q-mb-lg"
            style="height: 10rem"
          />
          <span class="text-h5">a patient</span>
        </div>
        <div
          class="flex column items-center"
          @click="router.push(`/register/doctor`)"
        >
          <img
            alt="Quasar logo"
            src="~assets/Doctor-pana.svg"
            class="q-mb-lg"
            style="height: 10rem"
          />
          <span class="text-h5">a doctor</span>
        </div>
      </div>
    </div>
    <div>
      Already have an account,
      <span class="text-accent" @click="router.push(`/login`)">sign-in</span>
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "RegisterPage",
  components: {},
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>
