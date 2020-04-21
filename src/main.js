import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/general.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: 'body',
  easing: 'ease-in-out',
  offset: store.state.isMobile ? -200 : -70,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
