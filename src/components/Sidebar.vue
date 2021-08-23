<template>
  <div class="sidebar pt-6 pl-3 d-flex flex-column justify-space-between">
    <div class="mb-12">
      <div class="sidebar__subheader sidebar--white-gradient ml-2">
        Current location
      </div>
      <v-btn
        v-if="current != null"
        class="mt-3 px-2 text-capitalize"
        text
        :to="`/details/${current.idx}`"
      >
        <v-icon size="25" class="sidebar--white-gradient ml-n1"
          >mdi-map-marker</v-icon
        >
        <span class="sidebar__title sidebar--text ml-2">{{
          current.name
        }}</span>
      </v-btn>
      <v-btn v-else class="mt-3 px-2 text-capitalize" text @click="getLocation">
        <span class="sidebar__title sidebar--text">Allow Location</span>
      </v-btn>
    </div>
    <div class="sidebar__list d-flex flex-column">
      <v-btn
        class="px-2 my-2 text-capitalize"
        text
        width="fit-content"
        to="/search"
      >
        <div class="sidebar__add-location d-flex align-center">
          <v-icon size="23" color="#FBF99E">mdi-map-marker-plus</v-icon>
          <span class="sidebar--text ml-2">Add Location</span>
        </div>
      </v-btn>
      <div v-for="(weather, i) in weathers" :key="i">
        <v-btn
          text
          width="fit-content"
          class="px-2 my-2 text-capitalize"
          :to="`/details/${weather.idx}`"
        >
          <v-icon size="25" class="sidebar--white-gradient ml-n1"
            >mdi-map-marker</v-icon
          >
          <span class="sidebar__title sidebar--text ml-2">{{
            weather.name
          }}</span>
        </v-btn>
      </div>
    </div>
    <div class="sidebar__footer mt-12 d-flex flex-column">
      <v-btn
        text
        class="sidebar--text my-2 px-2 text-capitalize"
        width="fit-content"
        >Settings</v-btn
      >
      <v-btn
        text
        class="sidebar--text my-2 px-2 text-capitalize"
        width="fit-content"
        >Share this app</v-btn
      >
      <v-btn
        text
        class="sidebar--text my-2 px-2 text-capitalize"
        width="fit-content"
        >Rate this app</v-btn
      >
    </div>
  </div>
</template>

<style lang="sass" scoped>
.sidebar
  height: 100vh
  background: $bLUE
  overflow: auto
  -ms-overflow-style: none
  scrollbar-width: none
  &::-webkit-scrollbar
    width: 0
    height: 0

  .sidebar__title
    font-weight: 700

  .sidebar__subheader
    font-size: 0.875rem

  .sidebar--text
    font-size: 1.125rem
    color: white

  .sidebar--white-gradient
    background: $whiteGradient
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

  .sidebar__list
    .sidebar__add-location
      span
        color: #FBF99E
        font-weight: 600

  .sidebar__footer
    margin-bottom: 20%
    .v-btn
      font-weight: 600
</style>

<script>
import { getLocation, showPosition } from "@/scripts/location.js";

export default {
  name: "Sidebar",
  computed: {
    current() {
      return this.$store.getters["getCurrent"];
    },

    weathers() {
      return this.$store.getters["getWeathers"];
    },
  },

  methods: {
    getLocation,
    showPosition,
  },
};
</script>
