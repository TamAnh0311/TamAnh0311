<template>
  <div>

    <VerticalNavbar
      v-bind:class="{ 'active mobile-view hide': isMobile, '': !isMobile}"
      @goIntoView="showFollow = false"
      @showFollow="openFollow"/>

    <HorizontalNavbar
      v-if="isMobile"/>

    <div
      id="content-container"
      v-bind:class="{ 'navbar-active': (isNavbarActive && !isMobile), 'mobile-view': isMobile}">

      <HomeBlock @expand="goDown"/>

      <About />

      <Portfolio
        @openDetail="openDetailPanel"/>

      <Contact />

      <Footer />

      <transition name="fade" mode="out-in">
        <FollowOverlay
          v-show="showFollow"
          @closeOverlay="showFollow = !showFollow"/>
      </transition>

      <transition name="slide-left" mode="out-in">
        <ProjectDetail
          v-if="showDetail"
          :project="project"
          @closePanel="closePanel"/>
      </transition>

    </div>
  </div>
</template>

<script>
import store from '@/store';
import constant from '@/constant';
import mixin from '@/mixins';

import VerticalNavbar from '@/components/navbar/vertical-navbar.vue';
import HorizontalNavbar from '@/components/navbar/horizontal-navbar.vue';

import HomeBlock from './content-block/home-block.vue';
import Portfolio from './content-block/portfolio.vue';
import Contact from './content-block/contact.vue';
import Footer from './content-block/footer.vue';
import About from './content-block/about.vue';

export default {
  name: 'Home',
  components: {
    VerticalNavbar,
    HorizontalNavbar,
    HomeBlock,
    About,
    Portfolio,
    Contact,
    Footer,
    FollowOverlay: () => import('./follow-overlay.vue'),
    ProjectDetail: () => import('./project-detail.vue'),
  },
  data() {
    return {
      showFollow: false,
      project: {},
    };
  },
  computed: {
    isNavbarActive() {
      return store.state.isActive;
    },
    isMobile() {
      return store.state.isMobile;
    },
    showDetail() {
      return store.state.showDetail;
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
    openDetailPanel(project) {
      this.project = project;
      store.commit('showDetail');
    },
    closePanel() {
      store.commit('showDetail');
    },
  },
  mounted() {
    this.$nextTick(() => store.commit('checkLoading', false));
  },
  destroyed() {
    store.commit('checkLoading', true);
  },
};
</script>
