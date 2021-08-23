<template>
  <div class="dashboard">
    <v-toolbar color="transparent" flat>
      <v-btn fab small depressed color="transparent" @click="toggleSidebar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="toolbar__title text-capitalize"
        v-if="current != null"
        >{{ current.name }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn fab small depressed color="transparent">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container class="px-6">
      <div
        class="weather-wrapper"
        v-dragscroll.x="true"
        v-if="current != null || weathers.length > 0"
      >
        <div class="weather-container">
          <div v-if="current != null">
            <WeatherCard class="mr-6" :weather="current"></WeatherCard>
          </div>
          <div v-for="(weather, i) in weathers" :key="`weather-${i}`">
            <WeatherCard
              :class="i == weathers.length - 1 ? '' : 'mr-6'"
              :weather="weather"
            ></WeatherCard>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <v-btn @click="getLocation" light depressed
          >Allow Location Permission</v-btn
        >
      </div>

      <div class="subheader mb-3 mt-6">News</div>

      <NewsCard
        v-for="(news, i) in news"
        :key="`news-${i}`"
        :img="news.img"
        :title="news.title"
      ></NewsCard>
    </v-container>
  </div>
</template>

<style lang="sass" scoped>
.dashboard.dashboard-slide
  background: $whiteGradient
  position: absolute
  margin-left: 70%
  width: 100%
  border-radius: 20px
  transition: 0.2s
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.5)
  padding-top: 30px

.dashboard
  background: $gauss
  min-height: 100vh
  width: 100%
  border-radius: 0px
  transition: 0.2s
  padding-top: 0px
  box-shadow: none
  position: static
  *, .v-btn
    color: $dark

  .toolbar__title
    font-size: 1rem
    font-weight: 600

  .weather-wrapper
    overflow-x: scroll
    -ms-overflow-style: none
    scrollbar-width: none
    &::-webkit-scrollbar
      width: 0
      height: 0

    .weather-container
      display: flex
      flex-direction: row
      flex-wrap: nowrap

  .subheader
    font-weight: 500
</style>

<script>
import WeatherCard from "@/components/WeatherCard.vue";
import NewsCard from "@/components/NewsCard.vue";
import { dragscroll } from "vue-dragscroll";
import { getLocation, showPosition } from "@/scripts/location.js";

export default {
  name: "Dashboard",
  components: {
    WeatherCard,
    NewsCard,
  },

  directives: {
    dragscroll,
  },

  computed: {
    current() {
      return this.$store.getters["getCurrent"];
    },

    weathers() {
      return this.$store.getters["getWeathers"];
    },
  },

  data: () => ({
    news: [
      {
        img: require("@/assets/news/1.png"),
        title:
          "Grab Joins Forces with Sejasa.com to Launch ‘Clean & Fix’ Feature",
      },
      {
        img: require("@/assets/news/2.png"),
        title:
          "After $1m seed round, services marketplace RecomN targets reg...",
      },
    ],
  }),

  methods: {
    getLocation,
    showPosition,

    toggleSidebar() {
      document.querySelector(".dashboard").classList.toggle("dashboard-slide");
      this.$emit("toggleSidebar");
    },
  },
};
</script>
