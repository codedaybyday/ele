import * as mutation_types from './mutation_types.js';
import {fetch} from '../utils/fetch.js';
export default{
	getCityInfo({commit,state}){
		return fetch('GET','/v1/cities',{type:'guess'}).then(msg => {commit(mutation_types.GET_POSITION,msg);});
	}
}