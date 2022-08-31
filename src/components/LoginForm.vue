<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="flex column flex-center q-my-lg">
        <img
          alt="Quasar logo"
          src="~assets/Doctor-pana.svg"
          class="q-mb-lg"
          style="height: 10rem"
        />
        <div class="text-h4">Sign-in to continue</div>
      </div>
      <q-input
        color="primary"
        standout
        bottom-slots
        label="Email"
        clearable
        type="text"
        v-model="user.username"
        autocomplete="off"
        class="q-pb-lg"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please enter your email']"
      >
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
      <q-input
        color="primary"
        standout
        bottom-slots
        label="Password"
        clearable
        type="password"
        v-model="user.password"
        class="q-pb-lg"
        autocomplete="off"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Don\'t forget your password',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>
      <div class="q-gutter-sm q-pb-lg">
        <q-radio v-model="user.type" val="patient" label="Patient" />
        <q-radio v-model="user.type" val="doctor" label="Doctor" />
      </div>
      <div class="q-pb-lg" align="right">
        <q-btn label="Sign-in" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default {
  name: "LoginForm",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
        type: "patient",
      },
    };
  },
  setup() {
    const router = useRouter();
    const toast = useQuasar();

    return { router, toast };
  },
  methods: {
    onSubmit() {
      this.router.push("/dashboard");
      this.toast.notify({
        color: "positive",
        textColor: "white",
        icon: "waving_hand",
        message: "Nice to see you, " + this.user.username,
        position: "top",
      });
    },
  },
};
</script>
