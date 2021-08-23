<template>
  <v-app class="app">
    <v-main class="main">
      <SplashScreen v-if="splash"></SplashScreen>
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
import SplashScreen from "@/components/SplashScreen.vue";

export default {
  methods: {
    getLocation,
    showPosition,
  },

  components: { SplashScreen },

  computed: {
    splash() {
      return this.$store.getters["getSplash"];
    },
  },

  mounted() {
    this.getLocation();
    setTimeout(
      function () {
        this.$store.dispatch("setSplash");
      }.bind(this),
      3000
    );
  },
};
</script>
