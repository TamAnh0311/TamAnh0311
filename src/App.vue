<template>
  <div id="app">

    <transition name="fade" mode="in-out">
      <LoadingSpinner v-if="isLoading" />
    </transition>

    <transition name="slow-fade" mode="out-in">
      <router-view />
    </transition>

  </div>
</template>

<script>
import LoadingSpinner from '@/components/loading-spinner.vue';

import store from './store';

export default {
  name: 'App',
  components: {
    LoadingSpinner,
  },
  computed: {
    isLoading() {
      return store.state.isLoading;
    },
    isMobile() {
      return store.state.isMobile;
    },
  },
  created() {
    if ((/Mobi/i.test(navigator.userAgent)) || window.innerWidth < 414) {
      store.commit('isMobile');
    }
  },
};

</script>
