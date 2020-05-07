<template>
  <div id="timeline">
    <ViewBlock :title="'Timeline'" :upBlock="'about'" :downBlock="'portfolio'">
      <div class="timeline-wrapper">
        <div class="timeline-events">
          <ul class="timeline-list">
            <li
              class="timeline-item"
              v-for="(item, index) in timeline"
              :key="index"
              :class="{ 'active-timestamp': activeTimestamp === index,
              'passed-timestamp': activeTimestamp > index }"
              @click="toTimestamp(index)"
            >
              <div class="item-timestamp">{{item.date | formatDate}}</div>
              <!-- <div class="item-content">
                <div class="item-position">{{item.position}}</div>
                <div class="item-name">{{item.name}}</div>
              </div> -->
            </li>
          </ul>
          <span id="filling" class="filling-line" aria-hidden="true"></span>
        </div>
        </div>
        <div class="timeline-bottom vertical-align">
          <span class="material-icons" @click="slideTimeline">chevron_left</span>
          <span class="material-icons" @click="slideTimeline">chevron_right</span>
        </div>
    </ViewBlock>
  </div>
</template>

<script>
import moment from 'moment';
import constant from '@/constant';
import ViewBlock from '@/components/view-block.vue';

export default {
  name: 'timeline',
  components: {
    ViewBlock,
  },
  data() {
    return {
      activeTimestamp: Number,
    };
  },
  computed: {
    timeline() {
      return constant.timeline.sort((a, b) => a.date - b.date);
    },
  },
  methods: {
    toTimestamp(index) {
      const el = document.getElementsByClassName('item-timestamp')[index];
      const eventStyle = window.getComputedStyle(el, null);
      const eventWidth = eventStyle.getPropertyValue('width');
      const eventLeft = eventStyle.getPropertyValue('left');

      const filling = document.getElementById('filling');
      const fillingWidth = window.getComputedStyle(filling, null).getPropertyValue('width');

      const totWidth = Number(fillingWidth.replace('px', ''));
      const eventLeft2 = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;

      const scaleValue = eventLeft2 / totWidth;

      this.activeTimestamp = index;
      this.setTransformValue(filling, 'scaleX', scaleValue);
    },

    setTransformValue(el, property, value) {
      const element = el;
      element.style['-webkit-transform'] = `${property}(${value})`;
      element.style['-moz-transform'] = `${property}(${value})`;
      element.style['-ms-transform'] = `${property}(${value})`;
      element.style['-o-transform'] = `${property}(${value})`;
      element.style.transform = `${property}(${value})`;
    },

    slideTimeline() {
      const el = document.getElementsByClassName('timeline-events')[0];
      const width = window.getComputedStyle(el, null).getPropertyValue('width');

      console.log(width);
    },
  },
  mounted() {
    // this.setBorderTimestamp();
    // console.log(constant.timeline);
  },
  filters: {
    formatDate(value) {
      if (value) {
        return moment(value).format('MM/YYYY');
      }
      return null;
    },
  },
};
</script>
