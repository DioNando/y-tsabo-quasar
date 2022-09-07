<template>
  <q-page class="q-pa-lg flex column justify-start">
    <LoginForm />
    <div class="text-center">
      Don't have an account,
      <span class="text-accent" @click="router.push(`/register/doctor`)"
        >register-now !</span
      >
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import LoginForm from "src/components/LoginForm.vue";

export default {
  name: "LoginDoctor",
  components: { LoginForm },
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>
