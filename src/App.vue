<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
// import LoadingSpinner from '@/components/loading-spinner.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    // LoadingSpinner,
  },
  data() {
    return {
      // isLoading: false,
    };
  },
  computed: {
    isLoading() {
      return store.state.isLoading;
    },
    isMobile() {
      return store.state.isMobile;
    },
  },
  mounted() {
    if (/Mobi/i.test(navigator.userAgent)) {
      store.commit('isMobie');
      console.log(store.state.isMobile);
    }
  },
};

</script>
