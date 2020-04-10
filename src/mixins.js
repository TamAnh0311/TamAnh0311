export default {
  methods: {
    scrollTo(element) {
      const yOffset = -70;
      const block = document.getElementById(element);
      const y = block.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    },
  },
};
