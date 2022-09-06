<template>
  <q-page class="q-pa-lg flex column justify-between" style="padding: 39px">
    <LoginForm />
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
