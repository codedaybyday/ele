<template>
	<div>
        <div class="food-entry">
            <div class="food-entry-list-wrap">

                <div class="food-entry-list" v-for="item in food_entry_groups">
                    <a class="food-entry-item" v-for="item2 in item">
                        <img :src="'//fuss10.elemecdn.com/'+item2.image_url"/>
                        <span class="food-name">{{item2.title}}</span>
                    </a>
                </div>
            </div>
			<ul class="food-entry-ctrl">
				<li class="is-active"></li>
				<li></li>
			</ul>
        </div>
    </div>
</template>
<style>
.food-entry{
    overflow: hidden;
    height: 4.72rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    text-align: center;
    position: relative;
}
.food-entry-list-wrap{position:absolute;width:205%;overflow:hidden;}
.food-entry-list{overflow:hidden;float:left;}
.food-entry-item{
    float: left;
    margin-top: 0.293333rem;
    width: 25%;
}
.food-entry-item img{
    width: 1.2rem;
    height: 1.2rem;
}
.food-name{
    display:block;
}
.food-entry-ctrl{
	position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.food-entry-ctrl li{
	width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    margin: 0 3px;
}
.food-entry-ctrl li.is-active{
	background-color: #000;
    opacity: .6;
}
</style>
<script>
import {getFoodEntry} from '../../service/getData.js';
export default{
	data:function(){
        return {
            food_entry:[]
        };
    },
    computed:{
        food_entry_groups:function(){
            let arr = [],
                len = parseInt(this.food_entry.length/8),
                group_len = 8;
            for(let i=0;i<len;i++){
                arr[i] = this.food_entry.slice(i*group_len,(i+1)*group_len);
            }
            return arr;
        }
    },
    mounted:function(){
        console.log('foodEntryList');
        //getFoodEntry().then(msg => this.food_entry = msg);
    }
};
</script>