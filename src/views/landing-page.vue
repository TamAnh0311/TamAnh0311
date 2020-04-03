<template>
  <div class="img-comp-containe">
    <div class="img-comp-img">
      <img src="../assets/images/pic1.png" width="300" height="200" />
    </div>
    <div class="img-comp-img img-comp-overlay">
      <img src="../assets/images/pic2.png" width="300" height="200" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      showCV: false,
    };
  },
  mounted() {
    const x = document.getElementsByClassName('img-comp-overlay');
    for (let i = 0; i < x.length; i += 1) {
      compareImages(x[i]);
    }
    /* eslint-disable no-param-reassign */
    function compareImages(img) {
      let clicked = 0;
      const w = img.offsetWidth;
      const h = img.offsetHeight;
      img.style.width = `${w / 2}px`;

      const slider = document.createElement('DIV');
      slider.setAttribute('class', 'img-comp-slider');
      img.parentElement.insertBefore(slider, img);
      slider.style.top = `${h / 2 - slider.offsetHeight / 2}px`;
      slider.style.left = `${w / 2 - slider.offsetWidth / 2}px`;

      /* eslint no-use-before-define: ["error", { "functions": false }] */

      slider.addEventListener('mousedown', slideReady);
      window.addEventListener('mouseup', slideFinish);
      slider.addEventListener('touchstart', slideReady);
      window.addEventListener('touchstop', slideFinish);

      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener('mousemove', slideMove);
        window.addEventListener('touchmove', slideMove);
      }
      function slideFinish() {
        clicked = 0;
      }
      function slideMove(e) {
        if (clicked !== 0) {
          let pos = getCursorPos(e);
          if (pos < 0) pos = 0;
          if (pos > w) pos = w;
          if (pos === w) {
            this.showCV = true;
          }
          slide(pos);
        }
        return false;
      }
      function getCursorPos(e) {
        let y = 0;
        e = e || window.event;
        const a = img.getBoundingClientRect();
        y = e.pageX - a.left;
        y -= window.pageXOffset;
        return y;
      }
      function slide(z) {
        img.style.width = `${z}px`;
        slider.style.left = `${img.offsetWidth - slider.offsetWidth / 2}px`;
      }
    }
    // if (this.showCV === true) {
    //   console.log('aaaa');
    //   // console.log(this.$router);
    //   // this.$router.push('/home');
    // }
    /* eslint-enable no-param-reassign */
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

.img-comp-container {
  position: relative;
  height: 200px;
}

.img-comp-img {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}

.img-comp-img img {
  display: block;
  vertical-align: middle;
}

.img-comp-slider {
  position: absolute;
  z-index: 9;
  cursor: ew-resize;
  /*set the appearance of the slider:*/
  width: 40px;
  height: 40px;
  background-color: #2196f3;
  opacity: 0.7;
  border-radius: 50%;
}
</style>
