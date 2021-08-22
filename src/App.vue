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

    .v-card
      border-radius: $borderRadius
</style>

<script>
export default {
  methods: {
    showPosition(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.$store.dispatch("getWeather", { lat: lat, lon: lon });
    },

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
          this.showPosition(data);
        });
      }
    },
  },

  mounted() {
    this.getLocation();
  },
};
</script>
