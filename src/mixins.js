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

    // scrollTo(element) {
    //   let yOffset = 0;
    //   if (store.state.isMobile) {
    //     yOffset = -200;
    //   } else {
    //     yOffset = -70;
    //   }
    //   // const block = document.getElementById(element);
    //   const block = document.getElementById(element);
    //   const y = block.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //   this.smooth(document.body, y, 300);
    // },

    /* eslint-disable no-param-reassign */
    smooth(element, targetRaw, durationRaw) {
      const target = Math.round(targetRaw);
      const duration = Math.round(durationRaw);
      if (duration < 0) {
        return Promise.reject(new Error('interrupted'));
      }
      if (duration === 0) {
        element.scrollTop = target;
        return Promise.resolve();
      }

      const startTime = Date.now();
      const endTime = startTime + duration;

      const startTop = element.scrollTop;
      const distance = target - startTop;

      /* eslint func-names: ["error", "as-needed"] */
      const smoothStep = function (start, end, point) {
        if (point <= start) { return 0; }
        if (point >= end) { return 1; }
        const x = (point - start) / (end - start); // interpolation
        return x * x * (3 - 2 * x);
      };

      return new Promise(((resolve, reject) => {
        let previousTop = element.scrollTop;
        const scrollFrame = function () {
          if (element.scrollTop !== previousTop) {
            reject(new Error('interrupted'));
            return;
          }

          const now = Date.now();
          const point = smoothStep(startTime, endTime, now);
          const frameTop = Math.round(startTop + (distance * point));
          element.scrollTop = frameTop;

          if (now >= endTime) {
            resolve();
            return;
          }

          if (element.scrollTop === previousTop
                    && element.scrollTop !== frameTop) {
            resolve();
            return;
          }
          previousTop = element.scrollTop;

          setTimeout(scrollFrame, 0);
        };

        setTimeout(scrollFrame, 0);
      }));
    },
    /* eslint-disable no-param-reassign */
  },
};
