<template>
  <div>
    <p style="font-size: 24px; font-weight: 600">Add treatment</p>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "AddTraitmentHeader",
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
