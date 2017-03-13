import fetch from '../utils/fetch.js';
import store from '../store';
export const getPos = () => fetch('GET','/v2/pois/wtw3sjq6n6um',{});
export const getWeatherInfo = () => { 
	let state = store.state;
	let { latitude,longitude} = state;
	console.log(latitude,longitude,1)
	return fetch('GET','/bgs/weather/current',{longitude:longitude,latitude:latitude});
};
export const getHotSearchWords = () => {
	let state = store.state;
	let { latitude,longitude} = state;
	return fetch('GET','/shopping/v3/hot_search_words',{longitude:longitude,latitude:latitude});
};
export const getFoodEntry = () => fetch('GET','/v2/index_entry',{
	geohash:'wtw3sjq6n6um',
	group_type:1,
	flags:['F']
});
