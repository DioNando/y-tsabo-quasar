<template>
  <q-page padding class="flex column justify-between">
    <LoginForm />
    <div>
      Don't have an account,
      <span class="text-accent" @click="router.push(`/register`)">register-now</span>
    </div>
  </q-page>
</template>

<script>
import { useRouter } from "vue-router";
import LoginForm from "src/components/LoginForm.vue";

export default {
  name: "LoginPage",
  components: { LoginForm },
  setup() {
    const router = useRouter();

    return { router };
  },
};
</script>
