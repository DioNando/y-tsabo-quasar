<template>
  <q-layout view="hHh lpR fFf">
    <div class="row" style="padding: 20px 20px 0 20px">
      <div class="flex col">
        <div>
          <!-- <q-btn
            round
            class="text-grey-7"
            icon="chevron_left"
            @click="router.push(`/login`)"
          /> -->
        </div>
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
    </div>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <SideBar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import SideBar from "src/components/patient/SideBarRight.vue";

export default {
  components: {
    SideBar,
  },
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
