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
          <img src="~assets/doctor-illustration.png" style="height: 5vh" />
        </div>
        <p
          style="
            margin-left: 6%;
            margin-top: 5%;
            font-weight: 500;
            font-size: 2.25vh;
          "
        >
          {{ meDoctor.firstnameDoctor }}
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
            <a href="#">Log out</a>
          </li>
        </ul>
      </div>
    </q-card>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "SideBarRight",
  components: {},
  data() {
    return {};
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["doctorStore/isLoggedIn"];
    },
    meDoctor() {
      return this.$store.getters["doctorStore/meDoctor"];
    },
  },
};
</script>
