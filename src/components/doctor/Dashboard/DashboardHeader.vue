<template>
  <div class="row justify-between" style="margin-top: -3%">
    <div class="col">
      <q-input
        color="#231F20"
        style="
          background-color: #fff;
          border-color: white !important;
          border-radius: 10px;
          box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
            rgba(181, 232, 229, 0.1) 0px 8px 32px;
        "
        dense
        outlined
        type="text"
        autocomplete="off"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="col-1">
      <div
        style="
          background-color: #b5e8e5;
          width: fit-content;
          padding: 10px;
          border-radius: 10px;
        "
      >
        <q-icon
          name="tune"
          size="1.5rem"
          style="color: rgba(35, 31, 32, 0.51)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "DashboardHeader",
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
