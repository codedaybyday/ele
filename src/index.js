import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';
import store from './store';
/*let Vue = require('vue');
let App = require('./app.vue').default;
let $ = require('jquery');
let store = require('./store').default;*/

const originWidth = 375;
$(function(){
	$(window).resize(setFontSize);
	setFontSize();
	function setFontSize(){
		//console.log('aaa',$(window).width(),window.screen.width);
		$('html').css('fontSize',75*window.screen.width/originWidth);
	}
});
new Vue({
	el:'#app',
	store,
	render:(h) => h(App)
});