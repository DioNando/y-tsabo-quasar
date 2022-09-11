<template>
  <div>
    <q-btn
      round
      class="text-grey-7"
      icon="chevron_left"
      @click="router.go(-1)"
    />
    <q-form @submit="onSubmit">
      <div class="flex column q-my-lg flex-center">
        <transition appear enter-active-class="animated bounceIn slow">
          <img
            alt="Y-Tsabo logo"
            src="~assets/Untitled.png"
            class="q-mb-lg"
            style="width: 20vh"
          />
        </transition>
        <div class="text-h6 self-start">Login to your account</div>
      </div>
      <q-input
        color="primary"
        dense
        outlined
        bottom-slots
        label="Enter email"
        type="text"
        v-model="user.email"
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
        dense
        outlined
        bottom-slots
        label="Enter password"
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
      <div class="q-py-lg flex justify-between">
        <q-btn
          label="Login"
          type="submit"
          color="primary"
          class="full-width"
          icon-right="login"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { loginDoctor } from "src/api/doctor";
import { loginPatient } from "src/api/patient";

export default {
  name: "LoginForm",
  props: {
    userType: String,
  },
  components: {},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      doctor: {
        emailDoctor: "",
        passwordDoctor: "",
      },
      patient: {
        emailPatient: "",
        passwordPatient: "",
      },
    };
  },
  setup() {
    const router = useRouter();
    const toast = useQuasar();

    return { router, toast };
  },
  methods: {
    async onSubmit() {
      if (this.userType === "patient") {
        this.patient.emailPatient = this.user.email;
        this.patient.passwordPatient = this.user.password;
        await loginPatient(this.patient)
          .then((result) => {
            localStorage.setItem("token", result.data[1].access_token);
            this.$store.dispatch("patientStore/setPatient", result.data[0]);
            this.$store.dispatch("patientStore/setConnected");
            this.toast.notify({
              color: "positive",
              textColor: "white",
              icon: "waving_hand",
              message: `Nice to see you, ${result.data[0].firstnamePatient}`,
              position: "top",
            });
            this.router.push("/patient/dashboard");
          })
          .catch((error) => {
            this.toast.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: `Error`,
              position: "top",
            });
            console.log(error);
          });
      } else {
        this.doctor.emailDoctor = this.user.email;
        this.doctor.passwordDoctor = this.user.password;
        await loginDoctor(this.doctor)
          .then((result) => {
            localStorage.setItem("token", result.data[1].access_token);
            this.$store.dispatch("doctorStore/setDoctor", result.data[0]);
            this.$store.dispatch("doctorStore/setConnected");
            this.toast.notify({
              color: "positive",
              textColor: "white",
              icon: "waving_hand",
              message: `Nice to see you, Dr ${result.data[0].firstnameDoctor}`,
              position: "top",
            });
            this.router.push("/doctor/dashboard");
          })
          .catch((error) => {
            this.toast.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: `${error}`,
              position: "top",
            });
            console.log(error);
          });
      }
    },
  },
};
</script>
