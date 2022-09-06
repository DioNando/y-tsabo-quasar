<template>
  <div>
    <div
      class="flex flex-center"
      style="
        background-color: #fff;
        padding: 10px;
        width: fit-content;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 50%;
        cursor: pointer;
      "
      @click="router.push(`/login`)"
    >
      <q-icon name="arrow_back_ios" size="3vh" style="font-weight: bold" />
    </div>
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
        <div
          class="text-h4"
          style="
            font-size: 24px;
            font-weight: 600;
            margin-left: -84%;
            color: #757575;
          "
        >
          Login
        </div>
      </div>
      <q-input
        color="#817C7C"
        style="
          background-color: #fff;
          border-color: #817c7c;
          border-radius: 10px;
        "
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
        color="#817C7C"
        style="
          background-color: #fff;
          border-color: #817c7c;
          border-radius: 10px;
        "
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
      <p class="text-right">
        <a href="#" style="font-weight: 500; color: black"
          >Forgot your password ?</a
        >
      </p>
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
          class="col"
          style="height: 45px; border-radius: 10px"
        />
      </div>
    </q-form>
    <p class="text-center">
      Don't have an account,
      <span style="font-weight: 600" @click="router.push(`/register/patient`)"
        ><u>Register-now !</u></span
      >
    </p>
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
