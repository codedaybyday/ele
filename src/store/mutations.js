import * as mutation_types from './mutation_types.js';
import $ from 'jquery';
export default{
	[mutation_types.GET_CITY_INFO](state){
		$.get('/v1/cities',{
			type:'guess'
		},function(msg){
			if(msg){
				state.city_info = msg;
			}
		});
	}
}