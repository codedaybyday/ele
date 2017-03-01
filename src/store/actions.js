import * as mutation_types from './mutation_types.js';
export default{
	getCityInfo({commit,state}){
		commit(mutation_types.GET_CITY_INFO);
	},
	getPos({commit,state}){
		commit(mutation_types.GET_POSITION);
	}
}