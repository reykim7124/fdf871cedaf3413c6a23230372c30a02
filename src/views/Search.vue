<template>
  <div class="search d-flex flex-column">
    <div class="search__search-wrapper">
      <v-toolbar color="transparent" flat>
        <v-container class="pa-0">
          <v-row no-gutters>
            <v-col cols="2">
              <v-btn fab small depressed color="transparent" to="/">
                <v-icon size="30">mdi-chevron-left</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="8" class="d-flex justify-center align-center">
              <v-toolbar-title class="toolbar__title"
                >Change Location</v-toolbar-title
              >
            </v-col>
            <v-col cols="2"></v-col>
          </v-row>
        </v-container>
      </v-toolbar>
      <v-menu
        attach="#search_city"
        open-on-click
        :z-index="2"
        nudge-bottom="48px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            rounded
            solo
            flat
            class="mx-5 mb-n3"
            placeholder="Enter Cities"
            prepend-inner-icon="mdi-magnify"
            color="#3C6FD1"
            v-model="query"
            @input.native="getLocations"
            v-on="on"
          ></v-text-field>
        </template>

        <v-list>
          <v-list-item v-if="cities.length <= 0">
            <v-list-item-title>type something...</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="(city, index) in cities"
            :key="index"
            @click="setCity(city)"
          >
            <v-list-item-title>{{ city.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div id="search_city"></div>
    </div>
    <div class="search__map-wrapper">
      <l-map
        style="width: 100%; height: 100%; position: absolute"
        :zoom="zoom"
        :center="center"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        :options="{ zoomControl: false }"
      >
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker
          :lat-lng="marker"
          draggable
          @update:lat-lng="updateLatLng"
        ></l-marker>
      </l-map>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.search
  min-height: 100vh
  max-height: 100vh
  .search__map-wrapper
    position: relative
    flex-grow: 1
    z-index: 0
    width: 100%
  .search__search-wrapper
    background: $transparentBg
    width: 100%
    .v-list, .v-sheet, .v-menu__content
      border-radius: 20px
    .toolbar__title
      font-size: 1rem
    font-weight: 600
</style>

<script>
import "leaflet/dist/leaflet.css";
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";

let time = null;

export default {
  name: "Search",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },

  data: () => ({
    query: "",
    cities: [],
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 14,
    center: latLng(-6.1753942, 106.827183),
    currentCenter: latLng(-6.1753942, 106.827183),
    marker: latLng(-6.1753942, 106.827183),
  }),

  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },

    centerUpdate(center) {
      this.currentCenter = center;
    },

    updateLatLng(value) {
      this.marker = latLng(value);
    },

    fixIcon() {
      delete Icon.Default.prototype._getIconUrl;
      Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
      });
    },

    getLocations() {
      clearTimeout(time);
      const provider = new OpenStreetMapProvider({
        params: {
          "accept-language": "id", // render results in Indonesia
          countrycodes: "id", // limit search results to the Indonesia
          addressdetails: 0, // include additional address detail parts
          format: "json",
          limit: 5,
        },
      });
      const query = this.query;
      time = setTimeout(() => {
        provider.search({ query: query }).then(
          function (res) {
            if (res.length > 0) {
              this.cities = res;
            }
          }.bind(this)
        );
      }, 250);
    },

    setCity(e) {
      this.query = e.label;
      const latlng = { lat: e.y, lng: e.x };
      this.updateLatLng(latlng);
      this.center = latLng(latlng);
    },
  },

  mounted() {
    this.fixIcon();
  },
};
</script>
