<template>
  <div>
    <q-btn
      round
      class="text-grey-7"
      icon="chevron_left"
      @click="router.push(`/login`)"
    />
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="flex column q-my-lg flex-center">
        <!-- <transition appear enter-active-class="animated bounceIn">
          <q-icon
            v-if="user.type === 'patient'"
            name="personal_injury"
            color="accent"
            size="10em"
            class="q-mb-lg"
          />
          <q-icon
            v-else-if="user.type === 'doctor'"
            name="vaccines"
            color="primary"
            size="10em"
            class="q-mb-lg"
          />
        </transition> -->
        <transition
          v-if="user.type === 'patient'"
          appear
          enter-active-class="animated bounceIn slow"
        >
          <img
            alt="Y-Tsabo logo"
            src="~assets/Untitled.png"
            class="q-mb-lg"
            style="width: 20vh"
          />
        </transition>
        <!-- <transition
          v-else-if="user.type === 'doctor'"
          appear
          enter-active-class="animated bounceIn slow"
        >
          <q-icon name="vaccines" color="primary" size="8em" class="q-mb-lg" />
        </transition> -->
        <div class="text-h6 self-start">Login to your account</div>
      </div>
      <q-input
        color="primary"
        dense
        outlined
        bottom-slots
        label="Enter email"
        type="text"
        v-model="user.mail"
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
      <!-- <div class="q-gutter-sm q-pb-lg">
        <q-radio v-model="user.type" val="patient" label="Patient" />
        <q-radio v-model="user.type" val="doctor" label="Doctor" />
      </div> -->
      <div class="q-py-lg flex justify-between">
        <!-- <q-btn
          outline
          label="Back"
          @click="this.router.push('/login')"
          color="primary"
          icon="chevron_left"
          class="q-mr-lg"
        /> -->
        <q-btn
          label="Login"
          type="submit"
          color="primary"
          class="full-width"
          icon-right="login"
        />
      </div>
    </q-form>
    <!-- <p class="text-center">
      Don't have an account,
      <span @click="router.push(`/register/patient`)"
        ><u>Register-now !</u></span
      >
    </p> -->
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
        mail: "",
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
      if (this.user.type === "patient") {
        this.router.push("/patient/dashboard");
      } else {
        this.router.push("/doctor/dashboard");
      }
      this.toast.notify({
        color: "positive",
        textColor: "white",
        icon: "waving_hand",
        message: "Nice to see you, " + this.user.mail,
        position: "top",
      });
    },
  },
};
</script>
