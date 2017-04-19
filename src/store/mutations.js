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
		Object.assign(state.merchant_form_data,msg);
	},
	[mutation_types.CLEAR_AND_UPATE_MERCHANT_FORM_DATA](state,msg){
		Object.keys(state.merchant_form_data).map(el => {
			if(!['longitude','latitude','limit'].includes(el)){
				if(typeof state.merchant_form_data[el] === 'number'){
                    state.merchant_form_data[el] = 0;
				}else{
                    state.merchant_form_data[el] = '';
				}
			}
		});
		Object.assign(state.merchant_form_data,msg);
	},
	[mutation_types.SET_RESTAURANTS](state,msg){
		if(msg.length){
			if(msg.length < state.merchant_form_data.limit){
                state.merchant_form_data.is_end = true;
			}
            state.restaurants = msg;
		}else{
			state.merchant_form_data.is_end = true;
		}
	},
	[mutation_types.APPEND_RESTAURANTS](state,msg){
		if(msg.length){
            state.restaurants.push(...msg);
		}else{
			state.merchant_form_data.is_end = true;
		}

	}
}