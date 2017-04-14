<template>
	<div>
		<div class="header-top-wrap">
			<header class="eleme-header-wrap">
				<div class="eleme-header-wrap" style="background: rgb(0, 151, 255);">
					<div class="eleme-header-left" @click="back()">
						<svg>
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left.6f6409e"></use>
						</svg>
					</div>
					<h1 class="eleme-header-center">{{title}}</h1> </div>
			</header>
			<aside  class="filter" >
				<div  class="filter-header">
					<a  href="javascript:" class="filter-nav">
						<span >美食</span>
						<svg  viewBox="0 0 72 32"><path  d="M36 32l36-32h-72z"></path></svg>
					</a>
					<a  href="javascript:" class="filter-nav">
						<span >排序</span>
						<svg  viewBox="0 0 72 32"><path  d="M36 32l36-32h-72z"></path></svg>
					</a>
					<a  href="javascript:" class="filter-nav filter-nav-more">
						<span >筛选</span>
						<svg  viewBox="0 0 72 32"><path  d="M36 32l36-32h-72z"></path></svg>
					</a>
				</div>
				<section class="filter-extend filter-category" >
					<aside class="loading">加载中...</aside>
				</section>
				<section  class="filter-extend filter-sort" morefilter="" >
					<ul >
						<li  class="">
							<svg ><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use></svg>
							<span >智能排序</span>
							<svg  class="selected"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
						</li>
						<li  class="">
							<svg ><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use></svg>
							<span >距离最近</span>
							<svg  class="selected"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
						</li>
						<li  class="">
							<svg ><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use></svg>
							<span >销量最高</span>
							<svg  class="selected"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
						</li>
						<li  class="">
							<svg ><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use></svg>
							<span >起送价最低</span>
							<svg  class="selected"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
						</li>
						<li  class="">
							<svg ><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use></svg>
							<span >配送速度最快</span>
							<svg  class="selected"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
						</li>
						<li  class="">
							<svg ><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use></svg>
							<span >评分最高</span>
							<svg  class="selected"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use></svg>
						</li>
					</ul>
				</section>
				<section  class="filter-extend filter-more" >
					<aside  class="loading">加载中...</aside>
					<div  class="filter-btn">
						<a  href="javascript:">清空</a>
						<a  href="javascript:"> 确定</a>
					</div>
				</section>
				<section  class="filter-modal"></section>
			</aside>
		</div>
		<MerchantList/>
	</div>
</template>
<style>
.header-top-wrap{
	position: sticky;
	top:0;
	z-index: 9999;
}
.eleme-header-wrap{
	position: relative;
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
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem;
}
.eleme-header-left{
	display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem;
}
.eleme-header-left svg{
	display: block;
    width: .586667rem;
    height: .586667rem;
}
.eleme-header-center{
	position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
<!--food.css-->
.index-loadmore {
    text-align: center;
    line-height: 3;
    color: #999
}
.shoplist {
    background-color: #fff
}
.nodatatip {
    margin-top: 2.666667rem
}
a {
    text-decoration: none
}
ul {
    margin: 0;
    padding: 0;
    list-style: none
}
.filter {
    position: relative;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    height: 1.066667rem;
    line-height: 1.04rem;
    z-index: 100
}
.filter-header {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 3;
    background-color: #fff
}
.filter-nav {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
    color: #666;
    position: relative;
    font-size: .346667rem
}
.filter-nav:after {
    content: "";
    background: #ddd;
    width: 1px;
    height: .56rem;
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}
.filter-nav.active {
    color: #3190e8
}
.filter-nav.active>svg {
    fill: currentColor;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
.filter-nav>svg {
    width: .24rem;
    height: .106667rem;
    margin-bottom: .053333rem;
    fill: #999;
    will-change: transform;
    -webkit-transition: all .3s;
    transition: all .3s
}
.filter-nav-more.active svg {
    fill: #3190e8;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
.filter-nav-arrow {
    display: inline-block;
    vertical-align: middle;
    width: .24rem
}
.filter-extend {
    left: 0;
    right: 0;
    top: 100%;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 3
}
.filter-extend.filter-more {
    padding-bottom: 1.466667rem
}
.filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1000%
}
.filter-category {
    height: 1000%
}
.filter-modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, .2);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
}
.filter-modal.open {
    opacity: 1;
    visibility: visible
}
.filter-category {
    z-index: 200;
    padding-bottom: 0;
    color: #666
}
.filter-category .loading {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #999
}
.filter-category .filter-scroller,
.filter-category .loading {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%
}
.filter-category ul {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch
}
.filter-category ul:first-child {
    background-color: #f2f2f2
}
.filter-category ul:first-child li {
    padding: 0 .133333rem 0 .266667rem
}
.filter-category ul:first-child .icon {
    margin-right: .133333rem;
    width: .453333rem;
    vertical-align: middle
}
.filter-category ul:nth-of-type(2) {
    margin-left: .4rem;
    padding-right: .133333rem
}
.filter-category ul:nth-of-type(2) li {
    border-bottom: 1px solid #ddd
}
.filter-category ul:nth-of-type(2) li.active,
.filter-category ul:nth-of-type(2) li.active .count {
    color: #3190e8
}
.filter-category ul:nth-of-type(2) .count {
    right: .266667rem;
    background-color: transparent;
    color: #999
}
.filter-category li {
    position: relative;
    line-height: 1.333333rem
}
.filter-category li.active {
    background-color: #fff
}
.filter-category .count {
    position: absolute;
    right: .666667rem;
    line-height: .373333rem;
    top: 50%;
    margin-top: -.186667rem;
    border-radius: .266667rem;
    color: #fff;
    background-color: #ccc;
    padding: 0 .133333rem;
    font-size: .293333rem
}
.filter-category .arrow {
    position: absolute;
    font-weight: 700;
    right: .266667rem;
    top: 50%;
    width: .24rem;
    height: .24rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #999
}
.loading {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 10em;
    color: #999
}
.filter-scroller {
    overflow: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    line-height: normal
}
.filter-scroller dl {
    margin: .266667rem 0;
    padding: 0 .4rem;
    overflow: hidden
}
.filter-scroller dt {
    margin-bottom: .2rem
}
.filter-scroller dd {
    margin: 0;
    float: left;
    width: 32%;
    margin-right: 2%;
    border: 1px solid #ddd;
    padding: .173333rem 0;
    height: .933333rem;
    margin-bottom: .2rem;
    border-radius: .066667rem;
    box-sizing: border-box
}
.filter-scroller dd:nth-of-type(3n) {
    margin-right: 0
}
.filter-scroller dd.selected {
    border-color: #a2d2ff;
    color: #3190e8;
    background-color: #edf5ff
}
.filter-scroller dd.selected .fengniao,
.filter-scroller dd.selected i {
    display: none
}
.filter-scroller dd.selected .selected-icon {
    display: inline-block
}
.filter-scroller .fengniao,
.filter-scroller .selected-icon {
    display: none;
    margin: 0 .066667rem 0 .2rem;
    width: .506667rem;
    height: .506667rem;
    vertical-align: middle
}
.filter-scroller .fengniao {
    display: inline-block
}
.filter-scroller i {
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
    border-width: 1px;
    margin: 0 .066667rem 0 .2rem;
    border-style: solid;
    width: .506667rem;
    line-height: .48rem;
    text-align: center;
    border-radius: .08rem;
    font-size: .32rem;
    box-sizing: border-box
}
.filter-scroller span {
    vertical-align: middle
}
.filter-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background-color: #fafafa;
    padding: 0 .133333rem;
    height: 1.466667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center
}
.filter-btn a {
    font-size: .48rem;
    line-height: 1.093333rem;
    border-radius: .08rem;
    text-align: center;
    text-decoration: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0
}
.filter-btn a:first-child {
    background-color: #fff;
    border: 1px solid #ddd;
    margin-right: .266667rem;
    color: #333
}
.filter-btn a:last-child {
    color: #fff;
    background-color: #56d176;
    border: 1px solid #56d176
}
ul {
    list-style: none;
    margin: 0;
    padding: 0
}
.filter-sort {
    padding-bottom: 0
}
.filter-sort li {
    position: relative;
    padding-left: .4rem;
    line-height: 1.333333rem
}
.filter-sort svg {
    width: .4rem;
    height: .4rem;
    margin-right: .266667rem;
    vertical-align: middle
}
.filter-sort li:not(:last-child):after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 1.066667rem;
    right: 0;
    height: 1px;
    background-color: #ddd
}
.filter-sort li:active {
    background-color: #f9f9f9
}
.filter-sort li.active {
    color: #0089dc
}
.filter-sort li.active .selected {
    display: block
}
.filter-sort .selected {
    position: absolute;
    right: 0;
    top: 50%;
    display: none;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}
</style>
<script>
import MerchantList from './common/merchantList.vue';
import {mapActions} from 'vuex';
import isJSON from 'is-json';
export default{
    data(){
        return {
            title:''
        };
    },
	components:{
		MerchantList
	},
    methods:{
        back(){
            this.$router.go(-1);
        }
    },
	mounted(){
		let query = this.$route.query;
        Object.keys(query).map(el => {
            if(isJSON(query[el])){
                query[el] = JSON.parse(query[el]);
            }
        })
        console.log(query);
        const filter_key = query.filter_key;
        this.title = query.target_name;
	}
}
</script>