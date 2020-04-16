<template>
  <div id="about">
    <div class="about-content page-padding">
      <div class="header">
        <h2 class="title">About me</h2>
        <UpDownBtn
          :upBlock="'home'"
          :downBlock="'portfolio'" />
      </div>
      <div class="personal-statement row">
        <div class="col-md-8 col-lg-8 col-xl-8">
          <!-- eslint-disable max-len -->
          <p>
            I was late 2 years started at university but “better late than never”, I am trying my best and will do anything to reach the goal.
          </p>
          <p>
            I've worked as a bartender for 5 years, may sound irrelevant but it helps me expanding myself with soft skills, creative and self-developing.
          </p>
          <p>
            Also, I am able to work in an English-speaking environment and with foreign experts. Willing to learn is my advantage, besides, I can work under pressure and meet the deadline.
          </p>
          <p>
            Overall, I consider myself to be a hardworking, ambitious one who is motivated by challenges, can gain personal benefit from new experiences, and I am always open to new chances.
          </p>
          <!-- eslint-enable max-len -->
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4">
          <img class="img-fluid" width="250" height="250" src="@/assets/images/avatar.jpg" />
        </div>
      </div>
      <div class="download-btn-block">
        <a
          href="https://drive.google.com/file/d/1hJBiwx8RAknytWgJYXT5MFcRBv0ehMbn/view?usp=sharing"
          class="btn btn-download"
          >Download My CV</a>
      </div>
      <div class="skill-set__header">
        <h3>My skill set:</h3>
        <span
        class="material-icons"
        :class="{'hide-panel' : showSkillSet}"
        @click="showSkillSetPanel"
        v-if="isMobile">
          arrow_drop_down
        </span>
      </div>
      <transition name="slide-down" mode="in-out">
      <div class="skill-set" v-if="(showSkillSet || !isMobile)">
        <div class="skill-set__item">
          <h4>Javascript</h4>
          <div class="item-details">
            <p>VueJS</p>
            <p>Angular 6</p>
            <p>Jquery</p>
          </div>
        </div>
        <div class="skill-set__item">
          <h4>Web Structures</h4>
          <div class="item-details">
            <p>HTML/CSS</p>
            <p>SCSS</p>
            <p>RESTful API</p>
          </div>
        </div>
        <div class="skill-set__item">
          <h4>Template Design</h4>
          <div class="item-details">
            <p>Gulp</p>
            <p>Nunjucks</p>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import UpDownBtn from '@/components/up-down.vue';

export default {
  name: 'About',
  components: {
    UpDownBtn,
  },
  data() {
    return {
      showSkillSet: false,
    };
  },
  computed: {
    isMobile() {
      return store.state.isMobile;
    },
  },
  methods: {
    showSkillSetPanel() {
      this.showSkillSet = !this.showSkillSet;
    },
  },
};
</script>
