<template>
  <section class="q-mt-lg" style="flex: auto">
    <q-card
      class="my-card q-pa-lg"
      flat
      style="background-color: rgba(181, 232, 229, 0.35)"
    >
      <q-card-section horizontal>
        <div class="col-8 flex column items-start justify-between">
          <span>Let's review your appointments</span>
          <q-btn
            color="primary"
            icon-right="chevron_right"
            label="Explore"
            @click="router.push(`appointments`)"
          />
        </div>

        <q-img
          class="q-pa-xl"
          src="~assets/Medical-prescripition.png"
        />
      </q-card-section>
    </q-card>

    <div class="q-mt-md text-h6 text-center">
      What do you need to to today ?
    </div>
    <!-- <div style="height: 100%">
      <div class="q-mt-md fit column justify-start items-stretch">
        <q-card
          flat
          class="col q-pa-sm fit flex row no-wrap items-center justify-between"
          style="background-color: #fae9c4"
          ><span>Explore all appointments</span>
          <q-btn icon="chevron_right" size="0.75rem" />
        </q-card>
        <q-card
          flat
          class="col q-mt-md q-pa-sm bg-primary fit flex row no-wrap items-center justify-between"
          ><span>Create an appointement</span>
          <q-btn icon="chevron_right" size="0.75rem" />
        </q-card>
      </div>
      <div class="q-mt-md q-mb-sm fit column justify-start items-center">
        <q-card
          flat
          class="col q-pa-sm fit flex row no-wrap items-center justify-between"
          style="background-color: #b6fbaf"
          ><span>Explore doctor list</span>
          <q-btn icon="chevron_right" size="0.75rem" />
        </q-card>
        <q-card
          flat
          class="col q-mt-md q-pa-sm bg-secondary fit flex row no-wrap items-center justify-between"
          ><span>Do you need help ?</span>
          <q-btn icon="chevron_right" size="0.75rem" />
        </q-card>
      </div>
    </div> -->
    <div class="container-explore q-mt-lg">
      <q-card
        flat
        class="q-pa-md items-explore flex no-wrap items-center justify-between"
      >
        <div class="cut-text">Explore all appointments</div>
        <q-btn round color="grey-1" class="text-black" icon="chevron_right" size="sm" />
      </q-card>
      <q-card
        flat
        class="q-pa-md items-explore flex no-wrap items-center justify-between"
      >
        <div class="cut-text">Create an appointment</div>
        <q-btn round color="grey-1" class="text-black" icon="chevron_right" size="sm" />
      </q-card>
      <q-card
        flat
        class="q-pa-md items-explore flex no-wrap items-center justify-between"
      >
        <div class="cut-text">Explore doctor list</div>
        <q-btn round color="grey-1" class="text-black" icon="chevron_right" size="sm" @click="router.push(`doctor-list`)" />
      </q-card>
      <q-card
        flat
        class="q-pa-md items-explore flex no-wrap items-center justify-between"
      >
        <div class="cut-text">Do you need help ?</div>
        <q-btn round color="grey-1" class="text-black" icon="chevron_right" size="sm" />
      </q-card>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "DashboardContainer",
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

<style lang="scss" scoped>
.cut-text {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 50%;
  // display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.container-explore {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  .items-explore {
    &:nth-child(1) {
      background: #FAE9C4;
    }
    &:nth-child(2) {
      background: #B6FBAF;
    }
    &:nth-child(3) {
      background: #A6F7CA;
    }
    &:nth-child(4) {
      background: #A7F1DD;
    }
  }
}
</style>
