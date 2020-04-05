<template>
  <div class="follow-overlay">
    <span class="close" @click="$emit('closeOverlay')">&times;</span>
    <h1>Follow me on</h1>
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
};
</script>
