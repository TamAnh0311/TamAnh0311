<template>
<transition name="slide-up" mode="in-out">
  <div
  id="fixed-footer"
  v-if="!isFooter && !isToggle"
  >
    <div class="social-block">
      <div
      v-for="(item, index) of followList"
      :key="index"
      class="social-item">
        <a :href="item.href"><i :class="'fa ' + item.icon"></i></a>
      </div>
      <div class="social-item">
        <UpDownBtn
        :isEnd="true"
        :upBlock="'home'"/>
      </div>
    </div>

    <transition name="slide-up" mode="in-out">
    <div class="contact-block" v-if="!isContact">
      <div
        v-for="(item, index) in contactItem"
        :key="index"
        class="contact-item">
          <a :href="item.href">
            <span class="material-icons">{{item.icon}}</span>
          </a>
        </div>
    </div>
    </transition>

    <div id="process-line"></div>
  </div>
</transition>
</template>

<script>
import store from '@/store';
import constant from '@/constant';
import UpDownBtn from '@/components/up-down.vue';

export default {
  name: 'fixed-footer',
  components: {
    UpDownBtn,
  },
  data() {
    return {
      isContact: false,
      isFooter: Boolean,
    };
  },
  computed: {
    contactItem() {
      return constant.contactItem;
    },
    followList() {
      return constant.followConst;
    },
    isToggle() {
      return store.state.isToggle;
    },
  },
  methods: {
    fillingLine() {
      const offset = window.pageYOffset + window.screen.height;
      const fillingLine = document.getElementById('process-line');
      const percentage = Math.round((offset / document.body.scrollHeight) * 100);
      if (fillingLine) fillingLine.style.width = `${percentage}%`;
    },
  },
  created() {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset + window.screen.height;
      const contact = document.getElementById('contact').offsetTop;
      const footer = document.getElementById('footer').offsetTop;

      offset >= contact ? this.isContact = true : this.isContact = false;
      offset >= footer ? this.isFooter = true : this.isFooter = false;
      this.fillingLine();
    }, false);
  },
  mounted() {
    this.isFooter = false;
  },
  updated() {
    this.fillingLine();
  },
};
</script>
