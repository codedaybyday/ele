import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';

const originWidth = 375;
$(function(){
	$(window).resize(setFontSize);
	setFontSize();
	function setFontSize(){
		console.log('aaa',$(window).width(),window.screen.width);
		$('html').css('fontSize',75*window.screen.width/originWidth);
	}
});
new Vue({
	el:'#app',
	render:(h) => h(App)
});