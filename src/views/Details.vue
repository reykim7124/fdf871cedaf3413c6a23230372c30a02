<template>
  <div class="details">
    <template v-if="weather != null">
      <v-card height="441px" dark flat class="v-card--big">
        <v-toolbar color="transparent" flat>
          <v-btn fab small depressed color="transparent" to="/">
            <v-icon size="30">mdi-chevron-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title class="toolbar__title">{{
            weather.name
          }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn fab small depressed color="transparent">
            <v-icon>mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="d-flex justify-center mt-3">
          <div class="v-btn__temp-wrapper d-flex justify-center">
            <v-btn
              rounded
              depressed
              width="100%"
              max-width="126px"
              height="40px"
              class="v-btn__toggle-temp v-btn__fahrenheit text-capitalize"
              :class="{ 'v-btn__toggle-temp--active': temp == 'f' }"
              @click="temp = 'f'"
              ><span>Fahrenheit</span></v-btn
            >
            <v-btn
              rounded
              depressed
              width="100%"
              max-width="126px"
              height="40px"
              class="v-btn__toggle-temp v-btn__celsius text-capitalize"
              :class="{ 'v-btn__toggle-temp--active': temp == 'c' }"
              @click="temp = 'c'"
              ><span>Celsius</span></v-btn
            >
          </div>
        </div>
        <div class="d-flex flex-column align-center jusfity-center">
          <v-img
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            contain
            width="138"
            height="133"
          ></v-img>
          <div class="d-flex">
            <div class="v-card__temp">
              {{ calcTemp }}
            </div>
            <div class="v-card__temp-symbol ml-1 mt-2"></div>
          </div>
          <div class="v-card__coord">
            {{ weather.coord.lon }}, {{ weather.coord.lat }}
          </div>
          <div class="text-capitalize v-card__desc v-card--big mt-4">
            {{ weather.weather[0].description }}
          </div>
          <div class="text-capitalize v-card--big">{{ now }}</div>
        </div>
      </v-card>
      <v-container>
        <div class="subheader mb-3 mt-6">Details</div>
        <v-row no-gutters>
          <v-col cols="6">
            <v-card
              class="details-card d-flex align-center ma-1"
              height="76px"
              flat
            >
              <v-container>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-icon size="42" class="details-card__icon"
                      >mdi-thermometer</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="pl-4 pr-0">
                    <div class="d-flex">
                      <div class="details-card--title">
                        {{ calcTemp }}
                      </div>
                      <div class="details-card__temp-symbol"></div>
                    </div>
                    <div class="details-card--secondary">
                      {{ temp == "f" ? "Fahrenheit" : "Celsius" }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="details-card d-flex align-center ma-1"
              height="76px"
              flat
            >
              <v-container>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-icon size="42" class="details-card__icon"
                      >mdi-weather-windy</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="pl-4 pr-0">
                    <div class="details-card--title">{{ calcWind }} mp/h</div>
                    <div class="details-card--secondary">Pressure</div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="details-card d-flex align-center ma-1"
              height="76px"
              flat
            >
              <v-container>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-icon size="42" class="details-card__icon"
                      >mdi-weather-sunny</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="pl-4 pr-0">
                    <div class="details-card--title">{{ weather.uvi }}</div>
                    <div class="details-card--secondary">UV Index</div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="details-card d-flex align-center ma-1"
              height="76px"
              flat
            >
              <v-container>
                <v-row no-gutters>
                  <v-col cols="3">
                    <v-icon size="42" class="details-card__icon"
                      >mdi-weather-hail</v-icon
                    >
                  </v-col>
                  <v-col cols="9" class="pl-4 pr-0">
                    <div class="details-card--title">
                      {{ weather.main.humidity }}%
                    </div>
                    <div class="details-card--secondary">Humidity</div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

        <div class="subheader mb-3 mt-6">Tips</div>
        <v-card class="details-card details-card__tips mx-1" flat>
          <v-container>
            <v-row>
              <v-col cols="1">
                <span class="details-card__emoji">✨</span>
              </v-col>
              <v-col cols="10" class="d-flex align-center justify-center pr-0"
                >It's ok to hangout with your friend!</v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </template>
  </div>
</template>

<style lang="sass" scoped>
.details
  background: $gauss
  min-height: 100vh

  .subheader
    font-weight: 500
    color: $dark

  .details-card__tips
    height: 64px

    .details-card__emoji
        font-size: 1.75rem

  .details-card
    background: $whiteGradient

    .details-card__icon
      background: $bLUE
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent

    .details-card--title
      font-weight: 500
      color: $dark

    .details-card--secondary
      font-size: 0.75rem
      color: $secondary

    .details-card__temp-symbol
      border: 1px solid $dark
      width: 5px
      height: 5px
      border-radius: 5px
      margin-top: 4px
      margin-left: 2px

  .v-card.v-card--big
    background: $bLUE
    border-top-left-radius: 0
    border-top-right-radius: 0

    .v-card__temp
      font-size: 2.25rem

    .v-card__temp-symbol
      border: 2px solid white
      width: 12px
      height: 12px
      border-radius: 12px

    .v-card__coord
      font-size: 0.875rem

    .v-card--big
      font-size: 1.25rem

    .v-card__desc
      font-weight: 700

    .toolbar__title
      font-size: 1rem
      font-weight: 600

    .v-btn__temp-wrapper
      background-color: rgba(255, 255, 255, 0.3)
      border-radius: 20px
      width: 100%
      max-width: 240px

      .v-btn__fahrenheit
        margin-right: -6px

      .v-btn__celsius
        margin-left: -6px

      .v-btn__toggle-temp
        background-color: transparent
        color: rgba(255, 255, 255, 0.5)

      .v-btn__toggle-temp.v-btn__toggle-temp--active
        background-color: rgba(255, 255, 255, 0.5)
        span
          background: $bLUE
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent
</style>

<script>
import { precipitation, calcWind, calcTemp } from "@/scripts/convert.js";

export default {
  name: "weather",
  computed: {
    weather() {
      const current = this.$store.getters["getCurrent"];
      const weathers = this.$store.getters["getWeathers"];
      const id = this.$route.params.id;
      let data = weathers.find((e) => e.idx == id);
      if (data == undefined || data == null) {
        data = current;
      }
      return data;
    },

    now() {
      const date = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;
    },

    precipitation,
    calcWind,
    calcTemp,
  },

  data: () => ({
    temp: "f",
  }),
};
</script>
