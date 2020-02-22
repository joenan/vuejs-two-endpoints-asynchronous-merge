import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';
import VueAxios from 'vue-axios';
import axios from 'axios';

import header from './components/header/index.vue';
import sidebar from './components/sidebar/index.vue';
import comments from './components/comments/index.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('app-header', header);
Vue.component('app-sidebar', sidebar);
Vue.component('app-comments', comments);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
