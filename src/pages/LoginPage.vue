<template>
  <q-page class="q-pa-lg flex column justify-between">
    <div class="flex column justify-center items-start" style="flex: auto">
      <div class="text-h3 q-pb-sm text-primary">Hello !</div>
      <div class="text-h5 q-pb-xl">Which one are you ?</div>
      <div class="fit column content-stretch">
        <transition appear enter-active-class="animated bounceInLeft slower">
          <q-card
            flat
            class="flex row no-wrap justify-evenly items-center q-pa-sm q-mb-lg bg-secondary"
            @click="router.push(`/login/patient`)"
          >
            <img
              src="~assets/illustration/Person-with-a-cold-pana.svg"
              style="height: 9rem"
              class="col"
            />
            <div class="text-h5 col">I'm a patient</div>
          </q-card>
        </transition>
        <transition appear enter-active-class="animated bounceInRight slower">
          <q-card
            flat
            class="flex row no-wrap justify-evenly items-center q-pa-sm bg-primary"
            @click="router.push(`/login/doctor`)"
          >
            <img
              src="~assets/illustration/Doctor-pana.svg"
              style="height: 9rem"
              class="col"
            />
            <div class="text-h5 col">I'm a doctor</div>
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
