<template>
  <footer id="footer" class="footer vertical-align row">
    <div class="col-md-8 col-lg-8 col-xl-8">
      <p>© 2020 Tamanh Vu. All rights reserved.</p>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <Follow />
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1">
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
