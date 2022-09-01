<template>
  <div>
    <q-card class="my-card" flat square>
      <q-img src="~assets/img/doctorSideBar.png">
        <div class="text-h6 absolute-top text-left" style="height: 100%">
          <q-icon name="vaccines" color="white" size="2em" class="q-mb-sm" />
          <div>Doctor Name</div>
        </div>
      </q-img>
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
  methods: {},
};
</script>
