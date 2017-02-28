import * as mutation_types from './mutation_types.js';
export default{
	get_city_info({commit,state}){
		commit(mutation_types.GET_CITY_INFO);
	}
}