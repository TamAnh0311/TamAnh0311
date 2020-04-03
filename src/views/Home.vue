<template>
  <div>
    <VerticalNavbar v-if="!isMobile"/>
    <HorizontalNavbar v-else/>
    <div
      id="content-container"
      v-bind:class="{ 'navbar-active': (isNavbarActive && isMobile === false)}"
    >
      <div id="home">
        <div class="vertical-align home-content">
          <h1>Hello! This is Anh Vu</h1>
          <h2>Front-End Developer, specializing in VueJS, HTML, CSS, and Templates Design</h2>
        </div>
        <div class="expand-sector">
          <span class="material-icons" @click="goDown">expand_more</span>
        </div>
      </div>
      <div id="about">
        <div class="about-content page-padding">
        <div class="header">
          <h2 class="title">About me</h2>
        </div>
          <div class="row">
            <div class="col-md-8 col-lg-8 col-xl-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
                Phasellus iaculis sagittis turpis, sit amet pretium augue.
                Nunc eu dolor eget ligula commodo facilisis.
                Curabitur vel nisi nec libero suscipit imperdiet.
                Donec tincidunt, lectus a mattis fermentum,
                ante mi pulvinar velit,
                eu ultricies nisl odio gravida elit.
                Nunc convallis euismod dui.
                Aliquam porta nulla porttitor varius euismod.
                Phasellus vitae cursus eros. Nunc sed dui turpis.
                Mauris rhoncus turpis tortor, sed hendrerit elit sodales vel.
              </p>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4">
              <img
                class="img-fluid"
                src="@/assets/images/avatar.jpg"
              />
            </div>
          </div>
          <h2 class="title">My skill set</h2>
          <div class="skill-set">
            <div class="skill-set__item">
              <h4>Javascript</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.</p>
            </div>
            <div class="skill-set__item">
              <h4>JQuery</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.</p>
            </div>
            <div class="skill-set__item">
              <h4>SCSS</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.</p>
            </div>
            <div class="skill-set__item">
              <h4>Template Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      <Contact />
      <footer class="footer vertical-align">
      <p>© 2020 Tamanh Vu. All rights reserved.</p>
      <ul class="social">
        <li class="icon"><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
        <li class="icon"><a href="javascript:void(0)"><i class="fa fa-instagram"></i></a></li>
        <li class="icon"><a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a></li>
      </ul>
    </footer>
    </div>
  </div>
</template>

<script>
import VerticalNavbar from '@/components/vertical-navbar.vue';
import HorizontalNavbar from '@/components/horizontal-navbar.vue';
import Portfolio from '@/components/content-block/portfolio.vue';
import Contact from '@/components/content-block/contact.vue';
import store from '../store';

export default {
  name: 'Home',
  components: {
    VerticalNavbar,
    HorizontalNavbar,
    Portfolio,
    Contact,
  },
  computed: {
    isNavbarActive() {
      return store.state.isActive;
    },
    isMobile() {
      return store.state.isMobile;
    },
  },
  methods: {
    goDown() {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
