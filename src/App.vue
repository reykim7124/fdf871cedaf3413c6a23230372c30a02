<template>
  <v-app class="app">
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="sass">
body
  display: flex
  justify-content: center

.app
  width: 100%
  max-width: 425px
  *
    font-family: "Poppins", sans-serif

  .main
    background-color: #e5e5e5
    overflow: clip

    .v-card
      border-radius: $borderRadius
</style>

<script>
import { getLocation, showPosition } from "@/scripts/location.js";

export default {
  methods: {
    getLocation,
    showPosition,
  },

  mounted() {
    this.getLocation();
  },
};
</script>
