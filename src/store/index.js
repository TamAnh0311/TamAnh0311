import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    isActive: false,
    isMobile: false,
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
  },
  actions: {
  },
  modules: {
  },
});
