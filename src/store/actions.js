import * as mutation_types from './mutation_types.js';
import fetch from '../utils/fetch.js';
export default{
	getCityInfo({commit,state}){
		return fetch('GET','/v1/cities',{type:'guess'});
	},
	getRestList({dispatch,state}){
		let { latitude,longitude,merchant_form_data} = state;
		/*longitude:longitude,
		latitude:latitude,
		terminal:'h5',
		extras:['activities'],
		offset:0,
		limit:20
		*/
		return fetch('GET','/shopping/restaurants',merchant_form_data);
	},
	getWeatherInfo({commit,state}){
		let { latitude,longitude} = state;
		return fetch('GET','/bgs/weather/current',{longitude:longitude,latitude:latitude});
	},
	getPos(){
		return fetch('GET','/v2/pois/wtw3sjq6n6um',{})
	},
	getHotSearchWords({state}){
		let { latitude,longitude} = state;
		return fetch('GET','/shopping/v3/hot_search_words',{longitude:longitude,latitude:latitude});
	},
	getFoodEntry(){
		return fetch('GET','/v2/index_entry',{
			geohash:'wtw3sjq6n6um',
			group_type:1,
			flags:['F']
		});
	},
	updateMerchantFormData({commit},form){
		commit(mutation_types.UPATE_MERCHANT_FORM_DATA,form);
	},
	clearAndUpdateMerchantFormData({commit},form){
		commit(mutation_types.CLEAR_AND_UPATE_MERCHANT_FORM_DATA,form);
	}
}