<template>
  <q-layout view="hhh lpR fFf">
    <!-- <div class="row" style="padding: 20px 20px 0 20px">
      <div class="flex col">
        <div
          class="flex flex-center"
          style="
            background-color: #fff;
            padding: 5px;
            width: fit-content;
            height: fit-content;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 50%;
          "
          @click="router.push(`/login`)"
        >
          <img src="~assets/patient-avatar.png" style="height: 4vh" />
        </div>
        <div style="margin-left: 3%">
          <p>
            Hi John Doe ! <br />
            How are you today ?
          </p>
        </div>
      </div>
      <div class="col-1">
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </div>
    </div> -->
    <q-header class="bg-transparent text-dark">
      <q-toolbar class="q-pa-md flex items-center justify-between">
        <div class="flex items-center">
          <div class="q-pa-xs flex items-center" v-if="route.path == '/patient/dashboard'">
            <q-avatar class="shadow-2">
              <img src="~assets/patient-avatar.png" />
            </q-avatar>
            <div class="q-ml-md">
              <div>Hi Jhon Doe !</div>
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
};
</script>
