<template>
  <v-card
    height="205"
    max-width="324"
    min-width="324"
    flat
    class="pa-2"
    :ripple="false"
    :to="`/details/${weather.idx}`"
  >
    <div class="d-flex align-center pt-3">
      <div>
        <div class="v-card__subheader white--text px-4">
          Chance of rain {{ precipitation }}%
        </div>
        <v-card-title class="text-capitalize white--text pt-0 v-card--big">{{
          weather.weather[0].description
        }}</v-card-title>
      </div>
      <v-img
        :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        contain
        width="108"
        height="103"
        class="pa-3"
      ></v-img>
    </div>
    <v-card-text class="py-0 px-3 white--text">
      <div class="d-flex align-center">
        <v-icon dark left size="16">mdi-map-marker</v-icon>
        {{ weather.name }}
      </div>
      <v-card-actions class="py-3 px-0 d-flex justify-space-between align-end">
        <v-btn
          depressed
          dark
          class="ml-n1 pa-0 align-self-start"
          color="transparent"
          @click.stop.prevent="toggleTemp"
        >
          <div class="v-card__temp v-card--big mr-1">{{ calcTemp }}</div>
          <div class="v-card__temp-symbol mt-n3 mr-1"></div>
          <div class="d-flex v-card__temp-degree v-card--small text-uppercase">
            {{ temp }}
          </div>
        </v-btn>
        <div class="pa-1">
          <v-icon size="16" dark>mdi-weather-hail</v-icon>
          <span class="ml-1 v-card--small v-card__stat"
            >{{ weather.main.humidity }}%</span
          >
        </div>
        <div class="pa-1">
          <v-icon size="16" dark>mdi-weather-sunny</v-icon>
          <span class="ml-1 v-card--small v-card__stat">{{ weather.uvi }}</span>
        </div>
        <div class="pa-1">
          <v-icon size="16" dark>mdi-weather-windy</v-icon>
          <span class="ml-1 v-card--small v-card__stat"
            >{{ calcWind }} mp/h</span
          >
        </div>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>
.v-card
  background: $bLUEFlipped
  .v-card__subheader
    font-size: 0.875rem
    font-weight: 500
  .v-card--big
    font-size: 1.5rem
    font-weight: 700
  .v-card__title
    word-break: break-word
  .v-card__temp-symbol
    border: 1px solid white
    width: 7px
    height: 7px
    border-radius: 7px
  .v-card__temp-degree
    margin-top: -11px
    font-weight: 400
  .v-card__stat
    font-weight: 600
  .v-card--small
    font-size: 0.75rem
</style>

<script>
import { precipitation, calcWind, calcTemp } from "@/scripts/convert.js";

export default {
  name: "WeatherCard",
  data: () => ({
    temp: "c",
  }),

  props: {
    weather: Object,
  },

  computed: {
    precipitation,
    calcWind,
    calcTemp,
  },

  methods: {
    toggleTemp() {
      this.temp = this.temp == "c" ? "f" : "c";
    },
  },
};
</script>
