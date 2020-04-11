import store from '@/store';

export default {
  methods: {
    scrollTo(element) {
      let yOffset = 0;
      if (store.state.isMobile) {
        yOffset = -200;
      } else {
        yOffset = -70;
      }
      const block = document.getElementById(element);
      const y = block.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    },
  },
};
