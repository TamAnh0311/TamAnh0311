<template>
  <div>

    <VerticalNavbar
      v-bind:class="{ 'active mobile-view hide': isMobile}"
      @showFollow="openFollow"/>

    <HorizontalNavbar
      v-if="isMobile" />

    <div
      id="content-container"
      v-bind:class="{ 'navbar-active': (isNavbarActive && !isMobile), 'mobile-view': isMobile}">

      <HomeBlock @expand="goDown"/>

      <About />

      <Portfolio />

      <Contact />

      <Footer />

      <transition name="fade" mode="out-in">
        <FollowOverlay
        v-if="showFollow"
        @closeOverlay="showFollow = !showFollow"/>
      </transition>

    </div>
  </div>
</template>

<script>
import store from '@/store';
import constant from '@/constant';
import mixin from '@/mixins';
import HomeBlock from './content-block/home-block.vue';

export default {
  name: 'Home',
  components: {
    VerticalNavbar: () => import('@/components/navbar/vertical-navbar.vue'),
    HorizontalNavbar: () => import('@/components/navbar/horizontal-navbar.vue'),

    HomeBlock,
    About: () => import('./content-block/about.vue'),
    Portfolio: () => import('./content-block/portfolio.vue'),
    Contact: () => import('./content-block/contact.vue'),
    Footer: () => import('./content-block/footer.vue'),

    FollowOverlay: () => import('./follow-overlay.vue'),

  },
  data() {
    return {
      showFollow: false,
    };
  },
  computed: {
    isNavbarActive() {
      return store.state.isActive;
    },
    isMobile() {
      return store.state.isMobile;
    },
    followList() {
      return constant.followConst;
    },
  },
  methods: {
    goDown() {
      mixin.methods.scrollTo('about');
    },
    openFollow() {
      this.showFollow = !this.showFollow;
    },
  },
  mounted() {
    store.commit('checkLoading', false);
  },
  destroyed() {
    store.commit('checkLoading', true);
  },
};
</script>
