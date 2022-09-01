<template>
  <q-page padding class="flex column justify-between">
    <div class="flex column justify-evenly items-center" style="flex: auto">
      <img
        alt="Quasar logo"
        src="~assets/Y-2.svg"
        style="height: 10rem"
      />
      <div class="text-h4">Please, select one!</div>
      <div class="text-h5">You are</div>
      <div class="fit row no-wrap justify-evenly items-center content-start">
        <transition appear enter-active-class="animated bounceIn slower">
          <q-card
            flat
            bordered
            class="flex column items-center q-pa-sm bg-grey-1"
            @click="router.push(`/register/patient`)"
          >
            <q-icon
              name="personal_injury"
              color="accent"
              size="8em"
              class="q-mb-sm"
            />
            <span class="text-h5">a patient</span>
          </q-card>
        </transition>
        <transition appear enter-active-class="animated bounceIn slower">
          <q-card
            flat
            bordered
            class="flex column items-center q-pa-sm bg-grey-1"
            @click="router.push(`/register/doctor`)"
          >
            <q-icon
              name="vaccines"
              color="primary"
              size="8em"
              class="q-mb-sm"
            />
            <span class="text-h5">a doctor</span>
          </q-card>
        </transition>
      </div>
    </div>
    <div class="q-mt-lg">
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
