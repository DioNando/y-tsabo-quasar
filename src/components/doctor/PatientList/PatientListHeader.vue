<template>
  <div>
    <p style="font-size: 24px; font-weight: 600">List of patients</p>
  </div>
  <div class="row justify-between" style="margin-top: 2%">
    <div class="col">
      <q-input
        color="#231F20"
        style="
          background-color: #fff;
          border-color: white !important;
          border-radius: 10px;
          box-shadow: box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
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
  name: "DoctorListHeader",
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
