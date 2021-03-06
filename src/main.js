import Vue from 'vue';
import App from './App.vue';
import fly from './utils/request';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$fly = fly;

const app = new Vue(App);
app.$mount();
