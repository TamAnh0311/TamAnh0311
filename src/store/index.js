import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isActive: false,
    isMobile: false,
  },
  mutations: {
    checkLoading(state) {
      state.isLoading = !state.isLoading;
    },
    checkActive(state) {
      state.isActive = !state.isActive;
    },
    isMobile(state) {
      state.isMobile = !state.isActive;
    },
  },
  actions: {
  },
  modules: {
  },
});
