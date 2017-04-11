<template>
	<div>
            <h3 class="recommand-merchant-title">推荐商家</h3>
            <ul class="merchant-list">
            	<li class="merchant-item" v-for="item in restaurants">
            		<div class="merchant-logo"><img :src="getImagePath(item.image_path)" alt=""/></div>
            		<div class="merchant-item-main">
            			<div class="merchant-line">
            				<h3 class="merchant-name" :class="item.is_premium?'merchant-name-premium':''">{{item.name}}</h3>
            				<div class="support-wrap">
            					<div class="activity-wrap" v-for="item2 in item.supports">
            						<i class="activity-icon" style="color: rgb(153, 153, 153); border-color: rgb(221, 221, 221);">{{item2.icon_name}}</i>
            					</div>
            				</div>
            			</div>
            			<div class="merchant-line">
            				<div class="rate-wrap">
            					<div class="rating-wrap">
            						<div class="rating-max">
            							<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
            						</div>
            						<div class="rating-rating" style="width:96%;">
            							<svg v-for="n in Math.round(item.rating)"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use></svg>
            						</div>
            					</div>
            					<span class="merchant-rate">{{item.rating}}</span>
            					<span>月售{{item.recent_order_num}}单</span>
            				</div>
            			</div>
            			<div class="merchant-line">
            				<div class="money-limit">
            					<span>¥{{item.piecewise_agent_fee.extra_fee}}起送</span>
            					<span>配送费¥{{item.float_delivery_fee}}</span>
            				</div>
            				<div class="time-distance-wrap">
            					<span class="distance-wrap">{{(item.distance/1000).toFixed(2)}}km</span>
            					<span class="time-wrap">{{item.order_lead_time}}分钟</span>
            				</div>
            			</div>
            		</div>
            	</li>
            </ul>
            <p class="load-more"><span>正在载入更多商家</span></p>
    </div>
</template>
<style>
.recommand-merchant-title{
	margin-top: 0.266667rem;
    line-height: 0.906667rem;
    font-weight: 600;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 0.4rem;
    padding-left: 0.4rem;
}
.merchant-item{
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    color: #666;
    list-style: none;
    font-size: .293333rem;
}
.merchant-logo{
	padding: .4rem .266667rem;
	width: 1.6rem;
    height: 1.6rem;
}
.merchant-item-main{
	padding: .4rem .266667rem .4rem 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.merchant-line{
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
}
.merchant-line:nth-child(2){
	margin-top: .2rem;
}
.merchant-line:nth-child(3){
	margin-top: .226667rem;
    line-height: .32rem;
}
.merchant-name{
	overflow: hidden;
    margin: 0;
    padding: 0;
    max-width: 5rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: .4rem;
    line-height: .426667rem;
}
.merchant-name-premium::before{
	margin-right: .133333rem;
    padding: 0 .066667rem;
    height: .4rem;
    border-radius: .053333rem;
    background-color: #ffd930;
    color: #52250a;
    content: "\54C1\724C";
    vertical-align: top;
    text-align: center;
    font-weight: 700;
    font-size: .293333rem;
    line-height: .4rem;
}
.support-wrap{
	-webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: flex;
}
.activity-wrap{
	webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: .426667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.activity-icon{
	margin-right: .133333rem;
    font-size: .266667rem;
    font-style: normal;
    line-height: 1;
    height: .346667rem;
    padding: .04rem;
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid;
    border-radius: .04rem;
}
.rate-wrap{
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.rating-wrap{
	position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.rating-max{display: flex;}
.rating-max svg{
    fill: #ddd;
}
.rating-wrap svg{
	display: block;
    margin: 0 1px;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    width: .266667rem;
    height: .266667rem;
}
.rating-rating{
	position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
}
.rating-rating svg{
    fill: #ffaa0c;
}
.merchant-rate{
	margin: 0 .106667rem;
    color: #ff6000;
}
.money-limit{
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}
.money-limit:nth-of-type(2){
	max-width: 3.333333rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.money-limit span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: "/";
}
.time-distance-wrap{
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.distance-wrap{
	color:#999;
}
.time-wrap{
	color: #2395ff;
}
.time-distance-wrap span+span:before {
    margin: 0 .08rem;
    color: #ddd;
    content: "/";
}
.load-more{
    text-align: center;
    line-height: 3;
    color: #999;
    margin-bottom:1.333333rem;
}
</style>
<script>
import {mapActions} from 'vuex';
export default{
	data(){
        return {
            restaurants:[]
        };
    },
    methods:Object.assign(mapActions(['getRestList']),{
        getExt(str){
            let re = /(png|jpeg)$/.exec(str);
            return re && re[1];
        },
        getImagePath(image_path){
            let pic_root_url = 'https://fuss10.elemecdn.com/';
            return pic_root_url+image_path.substr(0,1)+'/'+image_path.substr(1,2)+'/'+image_path.substr(3,image_path.length-2)+'.'+this.getExt(image_path)
        }
    }),
    mounted(){
        //console.log('merchantList');
        //this.getRestList();
        //this.getRestList().then(msg => this.restaurants = msg);
    }
};
</script>