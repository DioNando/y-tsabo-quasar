<style scoped>
ul {
  padding: 0 6.5vw 0 6.5vw;
}
ul > li {
  list-style: none;
  margin-top: 7%;
}
ul > li > a {
  text-decoration: none;
  font-size: 2.5vh;
  color: black;
  font-weight: 500;
}

.q-separator {
  margin-top: 7%;
  background-color: #b5e8e5;
}
</style>
<template>
  <div>
    <q-card class="my-card" flat square>
      <div
        class="flex items-center"
        style="background-color: #93dfdb; padding: 3vh 0 3vh 6.5vw"
      >
        <div
          class="flex flex-center"
          style="
            background-color: #fff;
            padding: 10px;
            width: fit-content;
            height: fit-content;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 50%;
            cursor: pointer;
          "
        >
          <img src="~assets/patient-avatar.png" style="height: 5vh" />
        </div>
        <p
          style="
            margin-left: 6%;
            margin-top: 5%;
            font-weight: 500;
            font-size: 2.25vh;
          "
        >
          {{ mePatient.firstnamePatient + " " + mePatient.lastnamePatient }}
        </p>
      </div>
      <div style="margin-top: 12%">
        <ul>
          <li>
            <a href="#">My profile</a>
          </li>
          <li>
            <a href="#">Alerts</a>
          </li>
          <q-separator />
          <li>
            <a href="#">Appointments</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <q-separator />
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a @click="disconnect">Log out</a>
          </li>
        </ul>
      </div>
    </q-card>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  name: "SideBarLeft",
  components: {},
  data() {
    return {};
  },
  setup() {
    const router = useRouter();
    const toast = useQuasar();

    return { router, toast };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["patientStore/isLoggedIn"];
    },
    mePatient() {
      return this.$store.getters["patientStore/mePatient"];
    },
  },
  methods: {
    disconnect() {
      localStorage.removeItem("token");
      this.$store.dispatch("patientStore/setPatient", {});
      this.$store.dispatch("patientStore/setDisconnected");
      this.toast.notify({
        color: "positive",
        textColor: "white",
        icon: "waving_hand",
        message: `Get well, see you`,
        position: "top",
      });
      this.router.push("/login");
    },
  },
};
</script>
