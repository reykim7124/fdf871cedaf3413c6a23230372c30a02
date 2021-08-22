import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: "#A098AE",
      },
    },
    light: true,
  },
});

export default vuetify;
