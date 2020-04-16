<template>
  <div id="follow-overlay" class="follow-overlay vertical-align">
    <span class="close" @click="$emit('closeOverlay')">&times;</span>
    <Follow />
  </div>
</template>

<script>
import Follow from '@/components/follow.vue';

export default {
  name: 'FollowOverlay',
  components: {
    Follow,
  },
  mounted() {
    // const overlay = document.getElementById('follow-overlay').style.display;
    // if (overlay !== 'none') document.documentElement.style.overflow = 'hidden';
    // if (overlay === 'none') document.documentElement.style.overflow = 'auto';
  },
  destroyed() {
    // document.documentElement.style.overflow = 'auto';
  },
};
</script>
