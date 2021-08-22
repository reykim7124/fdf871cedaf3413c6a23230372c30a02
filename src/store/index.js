import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const appid = "fdf871cedaf3413c6a23230372c30a02";
const weather = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&`;
const forecast = `https://api.openweathermap.org/data/2.5/onecall?appid=${appid}&exclude=minutely,hourly,alerts,current&`;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weathers: [],
  },
  mutations: {
    setWeathers: (state, payload) => {
      state.weathers.push(payload);
    },
  },
  actions: {
    async getWeather({ commit, dispatch }, payload) {
      try {
        if (payload != null) {
          const { data } = await axios.get(
            `${weather}lat=${payload.lat}&lon=${payload.lon}`
          );
          const data2 = await dispatch("getForecast", data);
          commit("setWeathers", data2);
        }
      } catch (error) {
        //
      }
    },

    async getForecast({ state }, payload) {
      try {
        const { data } = await axios.get(
          `${forecast}lat=${payload.coord.lat}&lon=${payload.coord.lon}`
        );
        payload.uvi = data.daily[0].uvi;
        payload.pop = data.daily[0].pop;
        payload.idx = state.weathers.length;
        return payload;
      } catch (error) {
        //
      }
    },
  },
  getters: {
    getWeathers: (state) => state.weathers,
  },
  modules: {},
});
