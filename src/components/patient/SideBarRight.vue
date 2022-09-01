<template>
  <div>
    <q-card class="my-card" flat square>
      <q-img src="~assets/img/patientSideBar.png">
        <div class="text-h6 absolute-top text-left" style="height: 100%">
          <q-icon name="face" color="white" size="2em" class="q-mb-sm" />
          <div>Patient Name</div>
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "SideBarLeft",
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
