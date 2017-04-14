import * as mutation_types from './mutation_types.js';
import fetch from '../utils/fetch.js';
export default{
	[mutation_types.GET_POSITION](state,msg){
		state.latitude = msg.latitude;
		state.longitude = msg.longitude;
		state.merchant_form_data.latitude = msg.latitude;
		state.merchant_form_data.longitude = msg.longitude
	},
	testState(state){
		let { latitude,longitude} = state;
		console.log(latitude,longitude);
	},
	[mutation_types.UPATE_MERCHANT_FORM_DATA](state,msg){
		//Object.keys(msg).map(el => state.merchant_form_data[el] = msg[el]);
		Object.assign(state.merchant_form_data,msg);
		console.log(state.merchant_form_data);
	},
	[mutation_types.CLEAR_AND_UPATE_MERCHANT_FORM_DATA](state,msg){
		Object.keys(state.merchant_form_data).map(el => {
			if(el !== 'longitude' && el !== 'latitude' && el !== 'limit'){
				state.merchant_form_data[el] = '';
			}
		});
		Object.assign(state.merchant_form_data,msg);
		//console.log(state.merchant_form_data);
	}
}