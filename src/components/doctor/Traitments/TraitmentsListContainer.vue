<template>
  <div
    style="
      margin-top: 2%;
      background-color: #fff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      border-radius: 10px;
      margin-top: 6%;
    "
  >
    <p
      style="
        font-size: 3.5vw;
        font-weight: 500;
        background-color: #93dfdb;
        padding: 5px 20px 5px 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      "
    >
      RAKOTO Misa
    </p>
    <div class="row" style="padding: 5px 20px 5px 20px">
      <div class="col">
        <p>23 ans</p>
        <p>Rendez-vous du: 13/09/2022</p>
      </div>
      <div class="col-1 flex flex-center">
        <q-icon
          name="expand_more"
          size="1.75rem"
          style="color: #60a09a"
          @click="router.push(`traitment-details`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
// import { getAllPatients } from "src/api/patient";

export default {
  name: "TraitmentsListContainer",
  components: {},
  data() {
    return {
      patients: [],
    };
  },
  mounted() {
    // getAllPatients()
    //   .then((result) => {
    //     this.patients = result.data;
    //     console.table(this.patients);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {},
};
</script>
