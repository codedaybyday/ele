import * as mutation_types from './mutation_types.js';
import fetch from '../utils/fetch.js';
export default{
	getCityInfo({commit,state}){
		return fetch('GET','/v1/cities',{type:'guess'});
	},
	getRestList({dispatch,state}){
		let { latitude,longitude} = state;
		return fetch('GET','/shopping/restaurants',{
			longitude:longitude,
			latitude:latitude,
			offset:0,
			limit:20,
			terminal:'h5',
			extras:['activities']
		})
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
	getFoodEntry(form){
		return fetch('GET','/v2/index_entry',Object.assign({
			geohash:'wtw3sjq6n6um',
			group_type:1,
			flags:['F']
		},form));
	}
}