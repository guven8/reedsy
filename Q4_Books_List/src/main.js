import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import VueTruncate from 'vue-truncate-filter';

Vue.use(VueTruncate);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
