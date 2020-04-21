<template>
  <div id="follow-overlay" class="follow-overlay vertical-align">
    <span class="close" @click="$emit('closeOverlay')">&times;</span>
    <p>Me, elsewhere</p>
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
    document.documentElement.style.overflow = 'hidden';
  },
  destroyed() {
    document.documentElement.style.overflow = 'auto';
  },
};
</script>
