import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    isActive: false,
    isMobile: false,
    isToggle: false,
  },
  mutations: {
    checkLoading(state, n) {
      state.isLoading = n;
    },
    checkActive(state) {
      state.isActive = !state.isActive;
    },
    isMobile(state) {
      state.isMobile = true;
    },
    isToggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
  actions: {
  },
  modules: {
  },
});
