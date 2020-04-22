<template>
  <div
  v-hammer:swipe.horizontal="setToggle">

    <VerticalNavbar
      v-bind:class="{ 'active mobile-view hide': isMobile, '': !isMobile}"
      :showFollow="showFollow"
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
      @openMessage="openNotiBox"
      @openDetail="openDetailPanel"/>

      <Contact />

      <Footer />

      <transition name="fade" mode="out-in">
        <FollowOverlay
          v-if="showFollow"
          @closeOverlay="showFollow = !showFollow"/>
      </transition>

      <transition name="fadeScale" mode="out-in">
        <Notification
        v-if="showNoti"
        :message="notiMessage"
        @closeNoti="showNoti = !showNoti"
        />
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

import VerticalNavbar from '@/components/navbar/vertical-navbar.vue';
import HorizontalNavbar from '@/components/navbar/horizontal-navbar.vue';

import HomeBlock from './content-block/home-block.vue';
import Portfolio from './content-block/portfolio.vue';
import Contact from './content-block/contact.vue';
import Footer from './content-block/footer.vue';
import About from './content-block/about.vue';
// import FollowOverlay from './follow-overlay.vue';

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
    // FollowOverlay,
    FollowOverlay: () => import('./follow-overlay.vue'),
    ProjectDetail: () => import('./project-detail.vue'),
    Notification: () => import('@/components/notification.vue'),
  },
  data() {
    return {
      showFollow: false,
      showNoti: false,
      project: {},
      notiMessage: '',
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
    isToggle() {
      return store.state.isToggle;
    },
  },
  methods: {
    goDown() {
      this.$scrollTo('#about', { offset: this.isMobile ? -200 : -70 });
    },
    openFollow() {
      this.showFollow = !this.showFollow;
    },
    openDetailPanel(project) {
      if (this.isToggle) store.commit('isToggle');
      this.project = project;
      store.commit('showDetail');
    },
    closePanel() {
      store.commit('showDetail');
    },
    openNotiBox(str) {
      this.showNoti = true;
      this.notiMessage = str;
    },
    setToggle(e) {
      const swipe = e.type;
      if (this.isMobile) {
        swipe === 'swiperight'
          ? store.commit('setToggle', true)
          : store.commit('setToggle', false);
      }
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
