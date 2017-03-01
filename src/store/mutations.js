import * as mutation_types from './mutation_types.js';
import $ from 'jquery';
import {fetch} from '../utils/fetch.js';
export default{
	[mutation_types.GET_CITY_INFO](state){
		$.get('/v1/cities',{
			type:'guess'
		},function(msg){
			if(msg){
				state.city_info = msg;
			}
		});
	},
	[mutation_types.GET_POSITION](state){
		/*$.get('/v2/pois/wtw3sjq6n6um',{},function(msg){
			if(msg) state.position = msg;
		});*/
		fetch('GET','/v2/pois/wtw3sjq6n6um',{});
	}
}