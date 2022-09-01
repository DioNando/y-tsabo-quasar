<template>
  <q-page padding>
    <q-form @submit="onSubmit" @reset="onReset">
      <div class="flex column flex-center q-my-lg">
        <transition
          v-if="patient.gender === 'man'"
          appear
          enter-active-class="animated fadeInLeft slow"
        >
          <q-icon
            name="face"
            color="primary"
            standout
            size="8em"
            class="q-mb-lg"
          />
        </transition>
        <transition
          v-else-if="patient.gender === 'woman'"
          appear
          enter-active-class="animated fadeInLeft slow"
        >
          <q-icon name="face_3" color="accent" size="8em" class="q-mb-lg" />
        </transition>
        <transition
          v-else-if="patient.gender === 'other'"
          appear
          enter-active-class="animated fadeInLeft slow"
        >
          <q-icon name="deblur" color="grey-7" size="8em" class="q-mb-lg" />
        </transition>
        <transition
          v-if="patient.name.length"
          appear
          enter-active-class="animated fadeInUp slow"
        >
          <div class="text-h4">{{ patient.name }}</div>
        </transition>
      </div>
      <div class="q-gutter-sm q-pb-md">
        <q-radio v-model="patient.gender" val="man" label="Man" />
        <q-radio v-model="patient.gender" val="woman" label="Woman" />
        <q-radio v-model="patient.gender" val="other" label="Other" />
      </div>
      <q-input
        color="secondary"
        standout
        bottom-slots
        label="Fullname"
        type="text"
        v-model="patient.name"
        autocomplete="off"
        class="q-pb-lg"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please enter your name']"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        color="secondary"
        standout
        bottom-slots
        label="Age"
        type="text"
        v-model="patient.age"
        mask="###"
        autocomplete="off"
        class="q-pb-lg"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please enter your age']"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        color="secondary"
        standout
        bottom-slots
        label="Id Number"
        type="text"
        mask="### ### ### ###"
        v-model="patient.idNumber"
        autocomplete="off"
        class="q-pb-lg"
      >
        <template v-slot:prepend>
          <q-icon name="badge" />
        </template>
      </q-input>
      <q-input
        color="secondary"
        standout
        bottom-slots
        label="Email"
        type="text"
        v-model="patient.mail"
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
        color="secondary"
        standout
        bottom-slots
        label="Password"
        type="password"
        v-model="patient.password"
        class="q-pb-lg"
        autocomplete="off"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length >= 8) ||
            'Don\'t forget your password, must be at least 8 caracteres',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>
      <q-input
        color="secondary"
        standout
        bottom-slots
        label="Confirm Password"
        type="password"
        v-model="patient.passwordConfirm"
        class="q-pb-lg"
        autocomplete="off"
        lazy-rules
        :rules="[
          (val) =>
            (val && val == patient.password) || 'Your password don\'t match',
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="key" />
        </template>
      </q-input>
      <q-toggle
        v-model="patient.accept"
        label="I accept the license and terms"
        color="accent"
        class="q-pb-lg"
      />
      <div class="q-pb-lg flex justify-between">
        <q-btn
          outline
          label="Reset"
          type="reset"
          color="grey-7"
          icon="close"
          class="q-mr-lg"
        />
        <q-btn
          :loading="loading[1]"
          icon="cloud_upload"
          type="submit"
          color="primary"
          standout
          label="Register"
        >
          <template v-slot:loading>
            <q-spinner-facebook class="on-left" />
            REGISTER
          </template>
        </q-btn>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default {
  name: "RegisterPatient",
  components: {},
  data() {
    return {
      patient: {
        name: "",
        age: "",
        idNumber: "",
        mail: "",
        password: "",
        passwordConfirm: "",
        gender: "man",
        accept: false,
      },
    };
  },
  setup() {
    const router = useRouter();
    const toast = useQuasar();
    const loading = ref([false]);
    const progress = ref(false);
    let timer = null;

    function simulateProgress(number) {
      loading.value[number] = true;
      setTimeout(() => {
        loading.value[number] = false;
        router.push("/");
        toast.notify({
          color: "positive",
          textColor: "white",
          icon: "cloud_done",
          message: "Your profile has been created, sign-in to continue",
          position: "top",
        });
        timer = void 0;
      }, 1500);
    }

    return { router, toast, timer, progress, simulateProgress, loading };
  },
  methods: {
    onSubmit() {
      if (this.patient.accept !== true) {
        this.toast.notify({
          color: "negative",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
          position: "top",
        });
      } else {
        this.simulateProgress(1);
      }
    },

    onReset() {
      this.patient.name = "";
      this.patient.age = "";
      this.patient.idNumber = "";
      this.patient.mail = "";
      this.patient.password = "";
      this.patient.passwordConfirm = "";
      this.patient.gender = "man";
      this.patient.accept = false;
    },
  },
};
</script>
