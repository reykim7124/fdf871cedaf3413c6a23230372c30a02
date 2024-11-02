import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const appid = "b35ea5e07fd8768c27e25fd495fe3909";
const weather = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&`;
const forecast = `https://api.openweathermap.org/data/2.5/onecall?appid=${appid}&exclude=minutely,hourly,alerts,current&`;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: null,
    weathers: [],
    splash: true,
  },
  mutations: {
    setSplash: (state) => {
      state.splash = false;
    },

    setCurrent: (state, payload) => {
      state.current = payload;
    },

    setWeathers: (state, payload) => {
      state.weathers.push(state.current);
      state.current = payload;
    },
  },
  actions: {
    async getWeather({ commit, dispatch }, payload) {
      try {
        if (payload != null) {
          const { data } = await axios.get(
            `${weather}lat=${payload.lat}&lon=${payload.lon}`
          );
          const data2 = await dispatch("getForecast", {
            data: data,
            type: payload.type,
          });
          if (payload.type === "current") {
            commit("setCurrent", data2);
          }
          // else if (payload.type === "new") {
          //   commit("setWeathers", data2);
          // }
          if (payload.type === "get") {
            return data2;
          }
        }
      } catch (error) {
        //
      }
    },

    async getForecast({ state }, payload) {
      try {
        const { data } = await axios.get(
          `${forecast}lat=${payload.data.coord.lat}&lon=${payload.data.coord.lon}`
        );
        payload.data.uvi = data.daily[0].uvi;
        payload.data.pop = data.daily[0].pop;
        if (payload.type != "current") {
          payload.data.idx = state.weathers.length + 1;
        } else {
          payload.data.idx = 0;
        }
        return payload.data;
      } catch (error) {
        //
      }
    },

    setWeather({ commit }, payload) {
      commit("setWeathers", payload);
    },

    setSplash({ commit }) {
      commit("setSplash");
    },
  },
  getters: {
    getCurrent: (state) => state.current,
    getWeathers: (state) => state.weathers,
    getSplash: (state) => state.splash,
  },
  modules: {},
});
