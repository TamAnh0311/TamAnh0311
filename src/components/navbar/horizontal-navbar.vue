<template>
  <div class="horizontal-navbar" v-bind:class="{ 'scroll-navbar': isScroll}">
    <a class="vertical-align" href="javascript:void(0)">
      <img
        class="logo hover-invert"
        src="../../assets/images/logo.png"
        height="60"
        width="110"
        alt
        @click="scrollTop"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-dropdown"
      aria-controls="navbar-dropdown"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-dropdown">
    <ul class="navbar-nav mr-auto">
     <li
      class="nav-item vertical-align"
      v-for="(item, index) in navList"
      :key="index">
        <a
        class="hover-text-effect"
        href="javascript:void(0)"
        @click="goIntoView(item.part)"
        >{{ item.name }}</a>
      </li>
    </ul>
    </div>
    <!-- <ul>
      <li
      class="vertical-align"
      v-for="(item, index) in navList"
      :key="index">
        <a
        class="hover-text-effect"
        href="javascript:void(0)"
        @click="goIntoView(item.part)"
        >{{ item.name }}</a>
      </li>
    </ul> -->
  </div>
</template>
<script>
import constant from '@/constant';

export default {
  name: 'HorizontalNavbar',
  data() {
    return {
      isScroll: false,
    };
  },
  computed: {
    navList() {
      return constant.navListArray;
    },
  },
  methods: {
    scrollTop() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    },
    goIntoView(item) {
      document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
    },
  },
  created() {
    window.addEventListener('scroll', () => {
      const offsetTop = window.pageYOffset;
      if (offsetTop < 100) {
        this.isScroll = false;
      } else {
        this.isScroll = true;
      }
    });
  },
};
</script>
