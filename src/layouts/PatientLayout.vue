<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="bg-transparent text-dark">
      <q-toolbar class="q-pa-md flex items-center justify-between">
        <div class="flex items-center">
          <div class="q-pa-xs flex items-center" v-if="route.path == '/patient/dashboard'">
            <q-avatar class="shadow-2">
              <img src="~assets/patient-avatar.png" />
            </q-avatar>
            <div class="q-ml-md">
              <div>Hi {{ mePatient.firstnamePatient + " " + mePatient.lastnamePatient }} !</div>
              <div>How are you today ?</div>
            </div>
          </div>
          <div v-else class="q-pa-xs">
            <q-btn
              round
              class="text-grey-7"
              icon="chevron_left"
              @click="router.go(-1)"
            />
          </div>
        </div>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <SideBar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import SideBar from "src/components/patient/SideBarRight.vue";

export default {
  components: {
    SideBar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const rightDrawerOpen = ref(false);

    return {
      route,
      router,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["patientStore/isLoggedIn"];
    },
    mePatient() {
      return this.$store.getters["patientStore/mePatient"];
    },
  },
};
</script>
