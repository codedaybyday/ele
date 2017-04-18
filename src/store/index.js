import Vue from 'vue';
import Vuex from 'vuex'
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';
let state = {
	latitude:'',
	longitude:'',
	geohash:'wtw3sjq6n6um',
	merchant_form_data:{
		offset:0,
		limit:20,
		latitude:'',
		longitude:'',
		terminal:'',
		extras:'',
		keyword:'',
        search_item_type:'',
		is_end:false,
		is_loading:false
	},
    restaurants:[]
};
Vue.use(Vuex);
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
});