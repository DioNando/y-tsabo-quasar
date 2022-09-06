<template>
  <q-page class="q-pa-lg flex column justify-between" style="padding: 39px">
    <div class="flex column justify-center items-start" style="flex: auto">
      <div class="text-h2 q-pb-sm text-primary" style="font-weight: 600; font-size: 40px;">Hello !</div>
      <div class="text-h5 q-pb-xl" style="font-size: 20px;">Which one are you ?</div>
      <div class="fit column content-stretch">
        <transition appear enter-active-class="animated bounceInLeft slower">
          <q-card
            flat
            class="flex row no-wrap justify-evenly items-center q-pa-sm q-mb-lg bg-secondary"
            @click="router.push(`/login/patient`)"
            style="height: 150px; border-radius: 10px; cursor: pointer;"
          >
            <img
              src="~assets/illustration/Person-with-a-cold-pana.svg"
              style="height: 10rem"
              class="col"
            />
            <div class="text-h5 col" style="color: #444444; font-weight: bold">I'm a patient</div>
          </q-card>
        </transition>
        <transition appear enter-active-class="animated bounceInRight slower">
          <q-card
            flat
            class="flex row no-wrap justify-evenly items-center q-pa-sm bg-primary"
            @click="router.push(`/login/doctor`)"
            style="height: 150px; border-radius: 10px; cursor: pointer;"
          >
            <img
              src="~assets/illustration/Doctor-pana.svg"
              style="height: 10rem"
              class="col"
            />
            <div class="text-h5 col" style="color: #444444; font-weight: bold">I'm a doctor</div>
          </q-card>
        </transition>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "LoginPage",
  components: {},
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>
