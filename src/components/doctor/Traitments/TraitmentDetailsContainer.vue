<template>
  <div style="margin-top: 6%; padding-left: 3%">
    <div class="flex">
      <q-icon name="face" size="1.75rem" style="color: #60a09a" />
      <p style="font-size: 16px; font-weight: 500; margin-left: 5%">
        RAKOTO Misa
      </p>
    </div>
    <div class="flex" style="margin-top: 3%">
      <q-icon name="calendar_month" size="1.75rem" style="color: #60a09a" />
      <p style="font-size: 16px; margin-left: 5%">03 / 09 / 2022</p>
    </div>
    <div class="flex" style="margin-top: 3%">
      <q-icon name="coronavirus" size="1.75rem" style="color: #60a09a" />
      <p style="font-size: 16px; margin-left: 5%">Diphtheria</p>
    </div>
    <div class="flex" style="margin-top: 3%">
      <input
        type="text"
        disabled
        value="Traitment blablablabla"
        style="border: none"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "TraitmentDetailsContainer",
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
