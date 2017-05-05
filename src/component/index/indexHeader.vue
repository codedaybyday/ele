<template>
    <header class="takeout-header">
        <div class="header-top">
            <div class="header-address">
                <svg class="address-icon" @click="posModalToggle({type:0,val:true})">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
                </svg>
                <span class="header-address-content">{{position.name}}</span>
                <svg class="address-select-icon" @click="posModalToggle({type:0,val:true})">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
                </svg>
            </div>
            <div class="header-weather">
                <div>
                    <h2 class="temp">{{weather_info.temperature}}°</h2>
                    <p class="weather-type">{{weather_info.description}}</p>
                </div>
                <img class="weather-icon" alt="" :src="'/static/img/weather_icon.png?'+weather_info.image_hash">
            </div>
        </div>
        <input type="text" placeholder="搜索商家、商品" class="search-bar" v-model="keyword" @keyup.enter="searchByKeyWord()">
        <div class="hot-goods-list">
            <router-link v-for="item in hot_search_words" :to="generateHotGoodsUrl(item)">{{item.word}}</router-link>
        </div>
    </header>
</template>
<style>
    .takeout-header{
        background: #0096ff;
        padding:0.266667rem 0.373333rem;
        color:#fff;
    }
    .header-top{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 0.92rem;
    }
    .fl{float: left;}
    .fr{float:right;}
    .header-address{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        width: 60%;
    }
    .header-weather{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .header-address-content{
        margin: 0 0.133333rem;
        font-size: 0.48rem;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
    }
    .address-select-icon{
        width: 0.186667rem;
        height: 0.093333rem;
        fill: #fff;
    }
    .temp{
        font-size: 0.373333rem;
    }
    .weather-type{
        font-size: 0.266667rem;
    }
    .weather-icon{
        margin-left: 0.106667rem;
        width: 0.733333rem;
        height: 0.733333rem;
    }
    .address-icon{
        width: 0.346667rem;
        height: 0.413333rem;
        fill: #fff;
    }
    .address-icon use{
        height:100%;
        width:100%;
    }
    .search-bar{
        display: block;
        margin: 0.2rem 0;
        width: 100%;
        height: 0.96rem;
        text-align: center;
        border-radius: 0.96rem;
        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0, 0, 0, .2);
        color: #333;
        font-size: 0.346667rem;
    }
    .hot-goods-list{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        white-space: nowrap;
        overflow-x: auto;
    }
    .hot-goods-list a:not(:last-child) {
        margin-right: 0.4rem;
    }
    .hot-goods-list a {
        color: currentColor;
    }
</style>
<script>
    import {mapActions, mapState, mapMutations} from 'vuex';
    import {fetch} from '../../utils/fetch.js';
    //import {getPos,getHotSearchWords,getFoodEntry} from '../../service/getData.js';
    export default{
        data(){
            return {
                city_info:{},
                position:{
                    name:'地址获取中...'
                },
                weather_info:{
                    temperature:'',
                    description:'',
                    image_hash:''
                },
                hot_search_words:[],
                food_entry:[],
                keyword:'',
            };
        },
        computed:mapState(['latitude','longitude','geohash']),
        //methods:mapMutations(['testState']),
        methods:Object.assign(mapActions(['getCityInfo','getWeatherInfo','getPos','getHotSearchWords','getFoodEntry','clearAndUpdateMerchantFormData','getSearchList','posModalToggle']),{
            generateHotGoodsUrl(item){
                return `/search?keyword=${item.search_word}&geohash=${this.geohash}`;
            },
            searchByKeyWord(){
                if(!this.keyword) return false;
                /*this.clearAndUpdateMerchantFormData({
                    keyword:this.keyword,
                    search_item_type:2,
                    extras:['activities']
                });
                this.getSearchList();*/
                this.$router.push({
                    path:'/search',
                    query:{
                        geohash:this.geohash,
                        keyword:this.keyword
                    }
                });
            },
            refresh(){
                this.getWeatherInfo().then(msg => this.weather_info = msg);
                this.getPos().then(msg => this.position = msg);
                this.getHotSearchWords().then(msg => this.hot_search_words = msg);
            }
        }),
        mounted(){
            this.refresh();
        }
    };
</script>