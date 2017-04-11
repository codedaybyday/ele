import * as mutation_types from './mutation_types.js';
import fetch from '../utils/fetch.js';
export default{
	getCityInfo({commit,state}){
		return fetch('GET','/v1/cities',{type:'guess'}).then(msg => {commit(mutation_types.GET_POSITION,msg);});
	},
	getRestList({dispatch,state}){
		return dispatch('getCityInfo').then(() => {
			let { latitude,longitude} = state;
			return fetch('GET','/shopping/restaurants',{
				longitude:longitude,
				latitude:latitude,
				offset:0,
				limit:20,
				terminal:'h5',
				extras:['activities']
			})
		})
	},
	async getWeatherInfo({dispatch,commit}){
		await dispatch('getCityInfo');
		commit('GET_WEATHER_INFO');
	}
}