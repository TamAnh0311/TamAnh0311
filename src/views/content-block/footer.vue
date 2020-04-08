<template>
  <footer class="footer vertical-align row">
    <div class="cold-md-6 cold-lg-6 cold-xl-6">
      <p>© 2020 Tamanh Vu. All rights reserved.</p>
    </div>
    <div class="cold-md-6 cold-lg-6 cold-xl-6">
      <Follow />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
    Follow: () => import('@/components/follow.vue'),
  },

};
</script>

<style>

</style>
