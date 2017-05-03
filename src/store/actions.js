import * as mutation_types from './mutation_types.js';
import fetch from '../utils/fetch.js';
export default{
	getCityInfo({commit,state}){
		return fetch('GET','/v1/cities',{type:'guess'});
	},
    /**
	 *
     * @param commit
     * @param state
	 *
     * @param type 0表示重新获取，1表示追加
     */
	getRestList({commit,state},type=0){
		let { merchant_form_data} = state;
		/*longitude:longitude,
		latitude:latitude,
		terminal:'h5',
		extras:['activities'],
		offset:0,
		limit:20
		*/
		fetch('GET','/shopping/restaurants',merchant_form_data).then(msg => {
			if(type){
                commit(mutation_types.APPEND_RESTAURANTS,msg)
			}else{
                commit(mutation_types.SET_RESTAURANTS,msg)
			}
            commit(mutation_types.UPATE_MERCHANT_FORM_DATA,{is_loading:false});
		});
	},
	getWeatherInfo({commit,state}){
		let { latitude,longitude} = state;
		return fetch('GET','/bgs/weather/current',{longitude:longitude,latitude:latitude});
	},
	getPos({state}){
		const {geohash} = state;
		return fetch('GET',`/v2/pois/${geohash}`,{})
	},
	getHotSearchWords({state}){
		let { latitude,longitude} = state;
		return fetch('GET','/shopping/v3/hot_search_words',{longitude:longitude,latitude:latitude});
	},
	getFoodEntry({state}){
		const {geohash} = state;
		return fetch('GET','/v2/index_entry',{
			geohash:geohash,
			group_type:1,
			flags:['F']
		});
	},
	updateMerchantFormData({commit},form){
		commit(mutation_types.UPATE_MERCHANT_FORM_DATA,form);
	},
	clearAndUpdateMerchantFormData({commit},form){
		commit(mutation_types.CLEAR_AND_UPATE_MERCHANT_FORM_DATA,form);
	},
	getUrlSchema({state},data){
		const {longitude,latitude} = state;
		return fetch('GET','/shopping/restaurant/category/urlschema',Object.assign({
			longitude:longitude,
			latitude:latitude
		},data));
	},
	getCategory({state}){
		const {longitude,latitude} = state;
		return fetch('GET','/shopping/v2/restaurant/category',{
			longitude:longitude,
			latitude:latitude
		});
	},
    getDeliveryModes({state}){
		const {longitude,latitude} = state;
		return fetch('GET','/shopping/v1/restaurants/delivery_modes',{
			longitude:longitude,
			latitude:latitude,
			kw:''
		});
	},
	getActivityAttributes({state}){
		const {longitude,latitude} = state;
		return fetch('GET','/shopping/v1/restaurants/activity_attributes',{
			longitude:longitude,
			latitude:latitude,
			kw:''
		});
	},
	getSearchList({state,commit},type = 0){
		return fetch('GET','/shopping/v1/restaurants/search',state.merchant_form_data).then(msg => {
			let data = [];
			for(let i in msg){
				data.push(...msg[i].restaurant_with_foods.map(el => {
					return el.restaurant;
                }));
			}
			if(type){
                commit(mutation_types.APPEND_RESTAURANTS,data);
			}else{
                commit(mutation_types.SET_RESTAURANTS,data);
			}
			commit(mutation_types.UPATE_MERCHANT_FORM_DATA,{is_loading:false});
		});
	},
	getShopInfo({state},payload){
		const {longitude,latitude} = state;
		const {id,data} = payload;
		return fetch('GET',`/shopping/restaurant/${id}`,Object.assign(data,{
		 	longitude:longitude,
		 	latitude:latitude
		}));
	},
	getShopMenu(store,id){
		return fetch('GET','/shopping/v2/menu',{
			restaurant_id:id
		});
	},
	posModalToggle({commit},obj){
		commit(mutation_types.POS_MODAL_TOGGLE,obj);
	},
	searchPosNearby({state},kw){
		return fetch('GET','/bgs/poi/search_poi_nearby',{
			offset:0,
			limit:20,
			keyword:kw
		})
	}
}