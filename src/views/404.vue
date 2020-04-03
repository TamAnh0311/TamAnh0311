<template>
  <div class="page-404 vertical-align">
    <h1>Oops!</h1>
    <h2>The page you trying to reach doesn't exist</h2>
    <h3>
      Go back to
      <router-link :to="{ name: 'home'}">Home page</router-link>
    </h3>
    <img class="img-fluid" src="@/assets/images/astronaut.png" height="300" width="300" alt />
  </div>
</template>

<script >
import store from '../store';

export default {
  mounted() {
    store.commit('checkLoading');
  },
};
</script>
