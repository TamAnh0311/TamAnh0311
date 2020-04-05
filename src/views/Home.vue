<template>
  <div>

    <VerticalNavbar
      v-if="!isMobile"
      @showFollow="openFollow"/>

    <HorizontalNavbar v-else/>

    <div
      id="content-container"
      v-bind:class="{ 'navbar-active': (isNavbarActive && isMobile === false)}">

      <HomeBlock @expand="goDown"/>

      <About />

      <Portfolio
      @toProject="toProject"/>

      <Contact />

      <footer class="footer vertical-align">
        <p>© 2020 Tamanh Vu. All rights reserved.</p>
        <Follow />
      </footer>

      <transition name="fade" mode="out-in">
        <FollowOverlay
        v-if="showFollow"
        @closeOverlay="showFollow = !showFollow"/>
      </transition>

      <transition name="slide-fade" mode="out-in">
        <ProjectDetail
        v-if="showDetail"
        @project="ProjectDetail"/>
      </transition>

    </div>
  </div>
</template>

<script>
import store from '@/store';
import constant from '@/constant';

export default {
  name: 'Home',
  components: {
    VerticalNavbar: () => import('@/components/vertical-navbar.vue'),
    HorizontalNavbar: () => import('@/components/horizontal-navbar.vue'),

    HomeBlock: () => import('./content-block/home-block.vue'),
    About: () => import('./content-block/about.vue'),
    Portfolio: () => import('./content-block/portfolio.vue'),
    Contact: () => import('./content-block/contact.vue'),

    Follow: () => import('@/components/follow.vue'),
    FollowOverlay: () => import('./follow-overlay.vue'),

    ProjectDetail: () => import('./project-detail.vue'),
  },
  data() {
    return {
      showFollow: false,
      showDetail: true,
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
    followList() {
      return constant.followConst;
    },
    ProjectDetail() {
      return this.project;
    },
  },
  methods: {
    goDown() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    },
    openFollow() {
      this.showFollow = !this.showFollow;
    },
    toProject(project) {
      this.showDetail = !this.showDetail;
      this.project = project;
      console.log('this', this.project);
    },
  },
};
</script>
