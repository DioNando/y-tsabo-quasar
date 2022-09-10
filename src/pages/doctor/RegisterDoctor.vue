<template>
  <q-page>
    <q-form @submit="onSubmit" @reset="onReset">
      <q-stepper
        v-model="step"
        ref="stepper"
        contracted
        color="primary"
        animated
        flat
      >
        <q-step :name="1" icon="person" :done="step > 1">
          <div class="text-h5 text-primary q-pb-lg">Register</div>
          <q-input
            color="grey"
            dense
            outlined
            bottom-slots
            label="Name"
            type="text"
            v-model="patient.name"
            autocomplete="off"
            class="q-pb-lg"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your name',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            color="grey"
            dense
            outlined
            bottom-slots
            label="Firstname"
            type="text"
            v-model="patient.firstname"
            autocomplete="off"
            class="q-pb-lg"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your firstname',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
        </q-step>

        <q-step :name="2" caption="Optional" icon="vaccines" :done="step > 2">
          <div class="text-h5 text-primary q-pb-lg">Register</div>
          <q-input
            color="primary"
            dense
            outlined
            bottom-slots
            label="Id Doctor"
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
          <q-select
            outlined
            dense
            v-model="patient.speciality"
            :options="options"
            label="Speciality"
            class="q-pb-lg"
          >
            <template v-slot:prepend>
              <q-icon name="vaccines" />
            </template>
          </q-select>
          <q-input
            v-model="patient.description"
            label="Description"
            outlined
            dense
            type="textarea"
            class="q-pb-lg"
          />
        </q-step>

        <q-step :name="3" icon="key">
          <div class="text-h5 text-primary q-pb-lg">Register</div>
          <q-input
            color="grey"
            dense
            outlined
            bottom-slots
            label="Email"
            type="text"
            v-model="patient.mail"
            autocomplete="off"
            class="q-pb-lg"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your email',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <q-input
            color="grey"
            dense
            outlined
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
            color="grey"
            dense
            outlined
            bottom-slots
            label="Confirm Password"
            type="password"
            v-model="patient.passwordConfirm"
            class="q-pb-lg"
            autocomplete="off"
            lazy-rules
            :rules="[
              (val) =>
                (val && val == patient.password) ||
                'Your password don\'t match',
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
            class="q-pb-sm"
          />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation class="q-pb-lg flex justify-between">
            <q-btn
              v-if="step == 1"
              outline
              label="Back"
              @click="this.router.push('/login/doctor')"
              color="primary"
              icon="chevron_left"
              class="q-mr-lg"
            />
            <q-btn
              v-if="step > 1"
              outline
              color="primary"
              @click="$refs.stepper.previous()"
              label="Back"
              icon="chevron_left"
              class="q-mr-lg"
            />
            <q-btn
              @click="$refs.stepper.next()"
              unelevated
              color="primary"
              :label="step === 3 ? 'Register' : 'Continue'"
              class="col"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default {
  name: "RegisterDoctor",
  components: {},
  data() {
    return {
      patient: {
        name: "",
        firstname: "",
        age: "",
        idDoctor: "",
        speciality: "",
        description: "",
        mail: "",
        password: "",
        passwordConfirm: "",
        gender: "man",
        accept: false,
      },
      options: [
        "Generalist",
        "Surgeon",
        "Pediatrician",
        "Ophthalmologist",
        "Psychologist",
      ],
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

    return {
      router,
      toast,
      timer,
      progress,
      simulateProgress,
      loading,
      step: ref(1),
    };
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

    // onReset() {
    //   this.patient.name = "";
    //   this.patient.age = "";
    //   this.patient.idNumber = "";
    //   this.patient.mail = "";
    //   this.patient.password = "";
    //   this.patient.passwordConfirm = "";
    //   this.patient.gender = "man";
    //   this.patient.accept = false;
    // },
  },
};
</script>
