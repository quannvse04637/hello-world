import Vue from 'vue'
import VueRouter from 'vue-router';
import VueModal from 'vue-js-modal';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import { routes } from './routes';

library.add(faUserSecret)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueModal);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
