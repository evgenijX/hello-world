import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "@/store/info";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency() {
      const res = await fetch(
        `http://data.fixer.io/api/latest?access_key=$d4d6c14657daaad3c43631375a68bf02&symbols=USD,EUR,UAH`
      );
      console.log(res);
      return await res.json();
    },
  },
  getters: {
    error: (s) => s.error,
  },
  modules: {
    auth,
    info,
  },
});
