<template>
  <div class="home">
    <SplashScreen v-if="splash"></SplashScreen>
    <Dashboard @toggleSidebar="toggleSidebar" v-else></Dashboard>
    <Sidebar v-if="open"></Sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import SplashScreen from "@/components/SplashScreen.vue";
import Dashboard from "@/components/Dashboard.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: { Dashboard, Sidebar, SplashScreen },
  data: () => ({
    open: false,
  }),

  computed: {
    splash() {
      return this.$store.getters["getSplash"];
    },
  },

  methods: {
    toggleSidebar() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
  },

  mounted() {
    setTimeout(
      function () {
        this.$store.dispatch("setSplash");
      }.bind(this),
      3000
    );
  },
};
</script>
