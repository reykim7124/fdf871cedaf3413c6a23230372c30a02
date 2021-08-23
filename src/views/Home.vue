<template>
  <div class="home">
    <Dashboard @toggleSidebar="toggleSidebar"></Dashboard>
    <Sidebar v-if="open"></Sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "@/components/Dashboard.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: { Dashboard, Sidebar },
  data: () => ({
    open: false,
  }),

  methods: {
    toggleSidebar() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    },
  },
};
</script>
