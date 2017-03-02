import * as mutation_types from './mutation_types.js';
import $ from 'jquery';
import {fetch} from '../utils/fetch.js';
export default{
	[mutation_types.GET_POSITION](state,msg){
		state.latitude = msg.latitude;
		state.longitude = msg.longitude;
	}
}