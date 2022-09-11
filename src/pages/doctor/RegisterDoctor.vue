<template>
  <q-page>
    <q-form>
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
            v-model="doctor.firstnameDoctor"
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
            v-model="doctor.lastnameDoctor"
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
          <q-input
            color="grey"
            dense
            outlined
            bottom-slots
            label="Phone Number"
            mask="### ## ### ##"
            type="text"
            v-model="doctor.phoneDoctor"
            autocomplete="off"
            class="q-pb-lg"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your phone number',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="call" />
            </template>
          </q-input>
          <q-input
            color="grey"
            dense
            outlined
            bottom-slots
            label="Address"
            type="text"
            v-model="doctor.addressDoctor"
            autocomplete="off"
            class="q-pb-lg"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter your address',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="location_on" />
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
            mask="############"
            v-model="doctor.matriculeDoctor"
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
            v-model="doctor.speciality"
            :options="options"
            label="Speciality"
            class="q-pb-lg"
          >
            <template v-slot:prepend>
              <q-icon name="vaccines" />
            </template>
          </q-select>
          <!-- <q-input
            label="Description"
            outlined
            dense
            type="textarea"
            class="q-pb-lg"
          /> -->
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
            v-model="doctor.emailDoctor"
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
            v-model="doctor.passwordDoctor"
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
            v-model="doctor.passwordConfirm"
            class="q-pb-lg"
            autocomplete="off"
            lazy-rules
            :rules="[
              (val) =>
                (val && val == doctor.passwordDoctor) ||
                'Your password don\'t match',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="key" />
            </template>
          </q-input>
          <q-toggle
            v-model="doctor.accept"
            label="I accept the license and terms"
            color="accent"
            class="q-pb-sm"
          />
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation class="q-pb-lg flex justify-between">
            <q-btn
              outline
              label="Back"
              @click="
                step === 1
                  ? this.router.push('/login/doctor')
                  : $refs.stepper.previous()
              "
              color="primary"
              icon="chevron_left"
              class="q-mr-lg"
            />
            <q-btn
              @click="step === 3 ? onSubmit() : $refs.stepper.next()"
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
import { registerDoctor } from "src/api/doctor";

export default {
  name: "RegisterDoctor",
  components: {},
  data() {
    return {
      doctor: {
        firstnameDoctor: "",
        lastnameDoctor: "",
        matriculeDoctor: "",
        emailDoctor: "",
        speciality: [],
        addressDoctor: "",
        phoneDoctor: "",
        passwordDoctor: "",
        passwordConfirm: "",
        accept: false,
      },
      options: [
        { label: "Generalist", value: "1" },
        { label: "Surgeon", value: "2" },
        { label: "Pediatrician", value: "3" },
        { label: "Ophthalmologist", value: "4" },
        { label: "Psychologist", value: "5" },
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
        toast.notify({
          color: "positive",
          textColor: "white",
          icon: "cloud_done",
          message: "Your profile has been created, sign-in to continue",
          position: "top",
        });
        router.push("/");
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
    async onSubmit() {
      if (this.doctor.accept !== true) {
        this.toast.notify({
          color: "negative",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
          position: "top",
        });
      } else {
        this.doctor.speciality = this.doctor.speciality.value
        console.log(this.doctor);
        await registerDoctor(this.doctor)
          .then(() => {
            this.simulateProgress(1);
          })
          .catch((error) => {
            this.toast.notify({
              color: "negative",
              textColor: "white",
              icon: "warning",
              message: "Error",
              position: "top",
            });
            console.log(error);
          });
      }
    },
  },
};
</script>
