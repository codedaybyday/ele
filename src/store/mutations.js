import * as mutation_types from './mutation_types.js';
import $ from 'jquery';
export default{
	[mutation_types.GET_CITY_INFO](){
		$.get('/v1/cities',{
			type:'guess'
		},function(){

		});
	}
}