import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/general.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// /* eslint-disable -no-unused-vars */
// router.beforeEach((to, from) => {
//   console.log('next page');
//   // loading = true
// });

// router.afterEach((to, from) => {
//   // setTimeout(() => (loading = false), 1500);
//   console.log('next page 22');
// });
