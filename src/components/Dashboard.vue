<template>
  <div class="dashboard">
    <v-toolbar color="transparent" elevation="0">
      <v-btn fab small elevation="0" color="transparent">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="toolbar__title" v-if="weathers != null">{{
        weathers[0].name
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small elevation="0" color="transparent">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container class="px-6">
      <div
        class="weather-wrapper"
        v-dragscroll.x="true"
        v-if="weathers != null"
      >
        <div class="weather-container">
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
.dashboard
  background: $gauss
  min-height: 100vh
  *, .v-btn
    color: $dark

  .toolbar__title
    font-size: 1rem
    font-weight: 600

  .weather-wrapper
    overflow-x: scroll
    overflow-y: hidden
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
    weathers() {
      const data = this.$store.getters["getWeathers"];
      return data.length > 0 ? data : null;
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
