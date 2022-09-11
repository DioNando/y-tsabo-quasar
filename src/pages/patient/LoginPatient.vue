<template>
  <q-page class="q-pa-lg flex column justify-start">
    <LoginForm userType="patient" />
    <div class="text-center">
      Don't have an account,
      <span class="text-accent" @click="router.push(`/register/patient`)"
        >register-now !</span
      >
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import LoginForm from "src/components/LoginForm.vue";

export default {
  name: "LoginPatient",
  components: { LoginForm },
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>
