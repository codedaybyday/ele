<template>
    <div>
        <div class="header-top-wrap">
            <div class="searchHeader">
                <svg class="arrowLeft" @click="back()">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
                </svg>
                <input type="search" placeholder="请输入商品名称" class="headerInput" v-model="show_name" @keyup.enter="searchByName()"></div>
            <aside class="filter">
                <div class="filter-header">
                    <a href="javascript:" class="filter-nav" :class="{active:show_menu}" @click="toggleMenu()">
                        <span>{{show_menu?'分类':'美食'}}</span>
                        <svg viewBox="0 0 72 32">
                            <path d="M36 32l36-32h-72z"></path>
                        </svg>
                    </a>
                    <a href="javascript:" class="filter-nav" @click="toggleSort()" :class="{active:show_sort}">
                        <span>{{sort_name?sort_name:'排序'}}</span>
                        <svg viewBox="0 0 72 32">
                            <path d="M36 32l36-32h-72z"></path>
                        </svg>
                    </a>
                    <a href="javascript:" class="filter-nav filter-nav-more" @click="toggleFilter()" :class="{active:show_filter}">
                        <span>筛选</span>
                        <svg viewBox="0 0 72 32">
                            <path d="M36 32l36-32h-72z"></path>
                        </svg>
                    </a>
                </div>
                <!-- <aside class="loading">加载中...</aside> -->
                <section class="filter-extend filter-category" :class="{open:show_menu}" @click.stop>
                    <div class="filter-scroller">
                        <ul>
                            <template v-for="(item,index) in menu">
                                <li class="" v-if="index==0">
                                    <span>{{item.name}}</span><span class="count">{{item.count}}</span>
                                </li>
                                <li :class="{active:active_index==index-1}" v-else @click="active_index = index-1"><img
                                        :src="decodeImgUrl(item.image_url)" class="icon"><span>{{item.name}}</span>
                                    <span class="count">{{item.count}}</span>
                                    <svg class="arrow">
                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                                    </svg>
                                </li>
                            </template>

                        </ul>
                        <ul>
                            <template v-for="(item,index) in sub_menu[active_index]">
                                <li class="" @click="search(item)">
                                    <span>{{item.name}}</span>
                                    <span class="count">{{item.count}}</span>
                                </li>
                            </template>
                        </ul>
                    </div>
                </section>
                <section class="filter-extend filter-sort" morefilter="" :class="{open:show_sort}">
                    <ul>
                        <li class="" @click="orderBy(0,'智能排序')">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
                            </svg>
                            <span>智能排序</span>
                            <svg class="selected">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </li>
                        <li class="" @click="orderBy(5,'距离最近')">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
                            </svg>
                            <span>距离最近</span>
                            <svg class="selected">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </li>
                        <li class="" @click="orderBy(6,'销量最高')">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
                            </svg>
                            <span>销量最高</span>
                            <svg class="selected">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </li>
                        <li class="" @click="orderBy(1,'起送价最低')">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
                            </svg>
                            <span>起送价最低</span>
                            <svg class="selected">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </li>
                        <li class="" @click="orderBy(2,'配送速度最快')">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
                            </svg>
                            <span>配送速度最快</span>
                            <svg class="selected">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </li>
                        <li class="" @click="orderBy(3,'评分最高')">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
                            </svg>
                            <span>评分最高</span>
                            <svg class="selected">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                            </svg>
                        </li>
                    </ul>
                </section>
                <section class="filter-extend filter-more" :class="{open:show_filter}">
                    <aside class="loading" v-if="!delivery_modes.length || !activity_attributes.length">加载中...</aside>
                    <div class="filter-scroller" v-else>
                        <dl>
                            <dt>配送方式</dt>
                            <dd class="" v-for="item in delivery_modes">
                                <svg class="fengniao">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#fengniao"></use>
                                </svg>
                                <svg class="selected-icon">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#selected"></use>
                                </svg>
                                <span>{{item.text}}</span></dd>
                        </dl>
                        <dl>
                            <dt>商家属性 (可多选)</dt>
                            <dd class="" v-for="item in activity_attributes">
                                <svg class="selected-icon">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink"
                                         xlink:href="#selected"></use>
                                </svg>
                                <i :style="{color:item.icon_color}">
                                    {{item.icon_name}}
                                </i><span>{{item.name}}</span></dd>
                        </dl>
                    </div>
                    <div class="filter-btn">
                        <a href="javascript:">清空</a>
                        <a href="javascript:"> 确定</a>
                    </div>
                </section>
                <section class="filter-modal" :class="{open:show_menu||show_sort||show_filter}"
                         @click="close()"></section>
            </aside>
        </div>
    </div>
</template>
<style>
    .searchHeader {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        background: #0097fa;
        border-bottom: 1px solid #eee;
        padding: .293333rem
    }

    .arrowLeft {
        width: .6rem;
        fill: #fff;
        padding: .133333rem;
        font-size: .373333rem;
        font-weight: lighter;
        height: .58rem;
        margin-top: .066667rem
    }

    .headerInput {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        border: 1px solid #eee;
        border-radius: .4rem;
        background: #f2f2f2;
        outline: none;
        padding: .213333rem;
        font-size: .373333rem;
        color: #666
    }

    .loadmore {
        text-align: center;
        line-height: 3;
        color: #999
    }

    .noDataTip {
        background-color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .history-27588_1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: .346667rem;
        padding: .2rem .333333rem;
        color: #666
    }

    .history-3O8OW_1 {
        display: block;
        padding-top: .053333rem
    }

    .history-3O8OW_1 svg {
        height: .32rem;
        width: .32rem;
        color: #cecece;
        fill: currentColor
    }

    .history-JNlQQ_1 {
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        background: #fff;
        padding: 0 .333333rem .333333rem
    }

    .history-3DGei_1 {
        color: #666;
        display: inline-block;
        height: .666667rem;
        line-height: .666667rem;
        border-radius: .066667rem;
        padding: 0 .2rem;
        font-size: .32rem;
        margin-right: .333333rem;
        margin-top: .333333rem;
        border: 1px solid #ddd
    }

    .shop-2tFYy_0 {
        text-align: center;
        line-height: 3;
        color: #999
    }

    .shop-nCP7i_0 {
        background-color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .header-top-wrap {
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
    }

    .eleme-header-wrap {
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

    .eleme-header-left {
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

    .eleme-header-left svg {
        display: block;
        width: .586667rem;
        height: .586667rem;
    }

    .eleme-header-center {
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

    .filter-nav.active > svg {
        fill: currentColor;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .filter-nav > svg {
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
    import {mapActions} from 'vuex';
    import isJSON from 'is-json';
    import decodeImgUrl from '../../utils/decodeImgUrl.js';
    export default{
        data(){
            return {
                title: '',
                menu: [],
                sub_menu: [],
                active_index: 0,
                show_menu: false,
                show_sort: false,
                sort_name: '',
                show_filter: false,
                is_show_all_category: false,
                show_name: '',
                flavor_ids: [207,220,233,260],
                delivery_modes: [],
                activity_attributes: []
            };
        },
        methods: Object.assign(mapActions(['getUrlSchema', 'getCategory', 'getDeliveryModes', 'getActivityAttributes', 'clearAndUpdateMerchantFormData', 'getRestList', 'updateMerchantFormData','getSearchList']), {
            back(){
                this.$router.go(-1);
            },
            toggleMenu(){
                this.close(0);
                this.show_menu = !this.show_menu;
                if (!this.menu.length) {
                    if (this.is_show_all_category) {
                        this.getCategory().then(msg => {
                            this.menu = msg;
                            for (let i = 0, l = msg.length; i < l; i++) {
                                if (msg[i].sub_categories) {
                                    this.sub_menu.push(msg[i].sub_categories);
                                }
                            }
                            this.active_index = msg[0].ids.indexOf(this.id);
                        });
                    } else {
                        this.getUrlSchema({
                            show_name:this.show_name,
                            flavor_ids:this.flavor_ids
                        }).then(msg => {
                            this.menu = msg;
                            for (let i = 0, l = msg.length; i < l; i++) {
                                if (msg[i].sub_categories) {
                                    this.sub_menu.push(msg[i].sub_categories);
                                }
                            }
                            //console.log(this.sub_menu);
                        });
                    }

                }
            },
            decodeImgUrl: decodeImgUrl,
            close(index){
                const tab_index = ['show_menu','show_sort','show_filter'];
                tab_index.forEach((el,key) => {
                    if(index>-1){
                        if(key != index) this[el] = false;
                    }else{
                        this[el] = false;
                    }
                });
            },
            toggleSort(){
                this.close(1);
                this.show_sort = !this.show_sort;
            },
            toggleFilter(){
                this.close(2);
                this.show_filter = !this.show_filter;
                if (!this.delivery_modes.length || !this.activity_attributes.length) {
                    this.getDeliveryModes().then(msg => this.delivery_modes = msg);
                    this.getActivityAttributes().then(msg => this.activity_attributes = msg);
                }
            },
            goToTop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },
            search(item){
                this.clearAndUpdateMerchantFormData({
                    offset: 0,
                    extras: ['activities'],
                    restaurant_category_ids: [item.id]
                });
                this.getRestList();
                this.close();
                this.goToTop();
                this.show_name = item.name;
            },
            orderBy(order, sort_name){
                this.updateMerchantFormData({
                    offset: 0,
                    order_by: order
                });
                this.getRestList();
                this.close();
                this.goToTop();
                this.sort_name = sort_name;
            },
            searchByName(){
                if(!this.show_name) return false;
                this.clearAndUpdateMerchantFormData({
                    keyword:this.show_name,
                    search_item_type:2,
                    extras:['activities']
                });
                this.getSearchList();
            }
        }),
        mounted(){
            let query = this.$route.query;
            Object.keys(query).map(el => {
                if (isJSON(query[el])) {
                    query[el] = JSON.parse(query[el]);
                }
            });
            this.show_name = query.keyword;
            //console.log(query);
        }
    }
</script>