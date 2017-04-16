import Vue from 'vue';
import App from './app.vue';
import store from './store';
import VueRouter from 'vue-router';
import routes from '../config/routes.config';
import rem from './utils/rem';

console.log(rem);
const router = new VueRouter({routes});
Vue.use(VueRouter);
new Vue({
	el:'#app',
	store,
	router,
	render:(h) => h(App)
});