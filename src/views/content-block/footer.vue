<template>
  <footer id="footer" class="footer vertical-align row">
    <div class="col-md-9 col-lg-9 col-xl-9">
      <p>© 2020 Tamanh Vu. All rights reserved.</p>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3 footer-btn">
      <Follow />
      <UpDownBtn
        :isEnd="true"
        :upBlock="'home'"/>
    </div>
  </footer>
</template>

<script>
import UpDownBtn from '@/components/up-down.vue';

export default {
  name: 'Footer',
  components: {
    UpDownBtn,
    Follow: () => import('@/components/follow.vue'),
  },

};
</script>

<style>

</style>
