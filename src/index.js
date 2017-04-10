import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';
import store from './store';
import VueRouter from 'vue-router';
import routes from '../config/routes.config';

const originWidth = 375;
$(function(){
	$(window).resize(setFontSize);
	setFontSize();
	function setFontSize(){
		$('html').css('fontSize',75*window.screen.width/originWidth);
	}
});
const router = new VueRouter({routes});
Vue.use(VueRouter);
new Vue({
	el:'#app',
	store,
	router,
	render:(h) => h(App)
});