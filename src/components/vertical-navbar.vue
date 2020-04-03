<template>
  <div v-bind:class="{ 'active': isActive}" class="vertical-navbar">
    <img
      class="logo hover-invert"
      @click="activeNavbar"
      src="../assets/images/logo.png"
      height="60"
      width="110"
      alt
    />
    <ul class="nav-menu">
      <li
        class="vertical-align"
        v-for="(item, index) in navList"
        :key="index"
        v-bind:class="{ 'pos-current': (!isActive && current === index)}"
        @click="goIntoView(item.part)"
      >
        <span class="material-icons">{{item.icon}}</span>
        <span class="item-name">{{item.name}}</span>
        <span class="tooltiptext">{{item.name}}</span>
      </li>
      <li
      class="vertical-align"
      @click="openFollow">
        <span class="material-icons">favorite</span>
        <span class="item-name">Follow</span>
        <span class="tooltiptext">Follow Me</span>
      </li>
    </ul>
  </div>
</template>
<script>
import store from '../store';
import constant from '../constant';

export default {
  name: 'VerticalNavbar',
  data() {
    return {
      posCurrent: 'home',
      current: 'home',
    };
  },
  computed: {
    // current() {
    //   return this.posCurrent.charAt(0).toUpperCase() + this.posCurrent.slice(1);
    // },
    navList() {
      return constant.navListArray;
    },
    isActive() {
      return store.state.isActive;
    },
  },
  methods: {
    goIntoView(item) {
      document.getElementById(item).scrollIntoView({ behavior: 'smooth' });
    },
    activeNavbar() {
      store.commit('checkActive');
    },
    isInViewport(el) {
      const scroll = window.scrollY || window.pageYOffset;
      const boundsTop = el.getBoundingClientRect().top + scroll;

      const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      };

      const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      };

      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      );
    },
    openFollow() {
      console.log('Open Follow');
    },
  },
  // created() {
  //   window.addEventListener('scroll', () => {
  //     const all = document.getElementById('content-container').querySelectorAll('div');
  //     const keysArray = Object.keys(all);
  //     keysArray.forEach((el) => {
  //       console.log(el);
  //       const isIn = this.isInViewport(el);
  //       if (isIn) console.log(keysArray.indexOf(el));
  //     });
  //   });
  // },
};
</script>
