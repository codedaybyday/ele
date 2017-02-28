<template>
	<header>
        <div class="header-top">
            <div class="header-address">
                <svg class="address-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
                </svg>
                <span class="header-address-content">黄浦区人民大道</span>
                <svg class="address-select-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
                </svg>
            </div>
            <div class="header-weather">
                <div>
                    <h2 class="temp">13°</h2>
                    <p class="weather-type">晴天</p>
                </div>
                <img class="weather-icon" alt="" src="/static/img/weather_icon.png">
            </div>
        </div>
        <form action=""><input type="text" placeholder="搜索商家、商品" class="search-bar"></form>
        <div class="hot-goods-list">
            <a href="/search/#/shop?keyword=%E7%9A%87%E8%8C%B6&amp;geohash=wtw3sjq6n6um">皇茶</a>
            <a href="/search/#/shop?keyword=%E8%B6%85%E7%BA%A7%E9%B8%A1%E8%BD%A6&amp;geohash=wtw3sjq6n6um">超级鸡车</a>
            <a href="/search/#/shop?keyword=%E4%BD%8E%E8%B0%83%E9%AB%98%E6%89%8B&amp;geohash=wtw3sjq6n6um">低调高手</a>
            <a href="/search/#/shop?keyword=%E7%B1%B3%E6%9C%89%E6%B2%99%E6%8B%89&amp;geohash=wtw3sjq6n6um">米有沙拉</a>
            <a href="/search/#/shop?keyword=%E8%82%AF%E5%BE%B7%E5%9F%BA&amp;geohash=wtw3sjq6n6um">肯德基</a>
            <a href="/search/#/shop?keyword=%E9%87%8D%E5%BA%86%E5%B0%8F%E9%9D%A2&amp;geohash=wtw3sjq6n6um">重庆小面</a><a
                href="/search/#/shop?keyword=%E8%84%86%E7%9A%AE%E9%B8%A1&amp;geohash=wtw3sjq6n6um">脆皮鸡</a>
            <a href="/search/#/shop?keyword=%E7%BA%A2%E5%94%87%E4%B8%B2%E4%B8%B2%E9%A6%99&amp;geohash=wtw3sjq6n6um">红唇串串香</a>
            <a href="/search/#/shop?keyword=%E5%AF%BF%E5%8F%B8&amp;geohash=wtw3sjq6n6um">寿司</a>
            <a href="/search/#/shop?keyword=%E6%A1%82%E6%9E%97%E7%B1%B3%E7%B2%89&amp;geohash=wtw3sjq6n6um">桂林米粉</a>
        </div>
    </header>
</template>
<style>
header{
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
import {mapActions} from 'vuex';
export default{
	data:function(){
        return {
            city_info:{}
        };
    },
    methods:mapActions(['get_city_info']),//{...mapActions(['get_city_info'])}这样写报错了？？？
    created:function(){
        this.get_city_info();
        //console.log(this.$store.state);
        this.city_info = this.$store.state.city_info;
    }
};
</script>