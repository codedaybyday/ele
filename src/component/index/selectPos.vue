<template>
    <transition name="fade">
        <div class="poi-3TsQq_0" v-show="show_pos_modal">
            <form class="poi-2PxTv_0">
                <svg class="poi-1bd4J_0" @click="posModalToggle({type:1})">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
                </svg>
                <div class="poi-2T3Ra_0">选择地址</div>
                <input type="search" ref="pos_input" placeholder="请输入地址" autofocus="autofocus" class="poi-i4JjZ_0"
                       @change.prevent="searchPos()" v-model="keyword"></form>
            <div class="poi-3ndyq_0"></div>
            <section v-if="keyword && posList.length">
                <div class="AddressCell-BfZ31_0" v-for="pos in posList" @click="updatePos(pos)"><p><span class="AddressCell-3dWFD_0">{{pos.name}}</span><span
                        class="AddressCell-2NFpU_0"></span></p>
                    <p class="AddressCell-2WH1g_0">{{pos.address}}</p>
                </div>
            </section>
            <section class="poi-4wa7l_0" v-if="keyword && !posList.length">
                <section class="NoDataTip-wrapper_1Gwf0tm"><img
                        src="//github.elemecdn.com/eleme/fe-static/master/media/empty/no-shop.png">
                    <h3>没有搜索结果</h3>
                    <p>换个关键字试试</p></section>
            </section>
            <section class="poi-3pogo_0" style="display: none;"><h4>收货地址</h4></section>
        </div>
    </transition>
</template>
<style>
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
        transform: translateX(0);
    }

    .fade-enter, .fade-leave-active {
        transform: translateX(100%);
    }

    .header-left, .header-right {
        padding: 0 .266667rem;
        color: #fff;
        font-size: .426667rem
    }

    .header-left svg, .header-right svg {
        fill: #fff;
        width: .346667rem;
        height: .4rem
    }

    .foodentry-wrapper {
        min-height: 4.72rem
    }

    .foodentry-wrapper, .index-title {
        border-bottom: 1px solid #eee;
        background-color: #fff
    }

    .index-title {
        margin-top: .266667rem;
        line-height: .906667rem;
        font-weight: 600;
        border-top: 1px solid #eee;
        font-size: .4rem;
        padding-left: .4rem
    }

    .index-title svg {
        margin-right: .2rem;
        width: .333333rem;
        height: .333333rem;
        fill: currentColor
    }

    .index-loadmore {
        text-align: center;
        line-height: 3;
        color: #999
    }

    .shoplist {
        background-color: #fff;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==);
        background-size: 100% auto
    }

    .nodatatip {
        margin-top: 4em
    }

    .section {
        background-color: #fff
    }

    .unscrollable {
        height: 100vh;
        overflow: hidden
    }

    .slide-enter-active, .slide-leave-active {
        -webkit-transition: -webkit-transform .3s;
        transition: -webkit-transform .3s;
        transition: transform .3s;
        transition: transform .3s, -webkit-transform .3s
    }

    .slide-enter, .slide-leave-to {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }

    .index-3O8rT {
        padding: .266667rem .373333rem;
        background-color: #0096ff;
        color: #fff;
        height: 3.253333rem
    }

    .index-MAORp {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: .92rem
    }

    .index-3vsmj, .index-MAORp {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .index-3vsmj {
        width: 60%
    }

    .index-3guVd {
        width: .346667rem;
        height: .413333rem;
        fill: #fff
    }

    .index-9eIfV {
        width: .186667rem;
        height: .093333rem;
        fill: #fff
    }

    .index-1cnKa {
        margin: 0 .133333rem;
        font-size: .48rem;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden
    }

    .index-20Oji {
        display: block;
        margin: .2rem 0;
        width: 100%;
        height: .96rem;
        text-align: center;
        border-radius: .96rem;
        box-shadow: 0 .026667rem .066667rem 0 rgba(0, 0, 0, .2);
        color: #333;
        font-size: .346667rem
    }

    .index-20Oji::-webkit-input-placeholder {
        color: #333
    }

    .index-20Oji::-moz-placeholder {
        color: #333
    }

    .index-20Oji:-ms-input-placeholder {
        color: #333
    }

    .index-20Oji::placeholder {
        color: #333
    }

    .index-6hVEQ {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        white-space: nowrap;
        overflow-x: auto
    }

    .index-6hVEQ a {
        color: currentColor
    }

    .index-6hVEQ a:not(:last-child) {
        margin-right: .4rem
    }

    .index-2LvmP {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
    }

    .index-17uRU {
        font-size: .373333rem
    }

    .index-3-P-K {
        font-size: .266667rem
    }

    .index-wRPUE {
        margin-left: .106667rem;
        width: .733333rem;
        height: .733333rem
    }

    .poi-3TsQq_0 {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        overflow: auto;
        background-color: #f4f4f4;
        -webkit-animation: poi-1F-EI_0 .3s;
        animation: poi-1F-EI_0 .3s;
        -webkit-overflow-scrolling: touch
    }

    .poi-2PxTv_0 {
        position: fixed;
        width: 100%;
        color: #fff;
        background-color: #0096ff;
        text-align: center;
        font-size: .32rem;
        padding-bottom: .32rem
    }

    .poi-3ndyq_0 {
        height: 2.346667rem
    }

    .poi-2T3Ra_0 {
        line-height: 1.173333rem;
        font-size: .48rem
    }

    .poi-1bd4J_0 {
        position: absolute;
        left: .333333rem;
        top: .333333rem;
        fill: #fff;
        width: .533333rem;
        height: .533333rem
    }

    .poi-i4JjZ_0 {
        margin-top: .133333rem;
        width: 90%;
        height: .733333rem;
        border-radius: .733333rem;
        padding: 0 .48rem;
        font-size: .346667rem
    }

    .poi-3pogo_0 > h4 {
        padding: .266667rem .4rem;
        font-size: .373333rem
    }

    .poi-4wa7l_0 {
        padding-top: 4rem
    }

    .AddressCell-BfZ31_0 {
        font-size: .32rem;
        background-color: #fff;
        padding: .266667rem .4rem
    }

    .AddressCell-BfZ31_0 + .AddressCell-BfZ31_0 {
        border-top: 1px solid #eee
    }

    .AddressCell-3dWFD_0 {
        font-weight: 700;
        font-size: .373333rem
    }

    .AddressCell-2NFpU_0 {
        margin-left: .133333rem
    }

    .AddressCell-2WH1g_0 {
        color: #999;
        font-size: .32rem
    }

    .foodentry {
        overflow: hidden;
        height: 4.72rem;
        background-color: #fff;
        text-align: center
    }

    .foodentry a {
        position: relative;
        float: left;
        margin-top: .293333rem;
        width: 25%
    }

    .foodentry img {
        width: 1.066667rem;
        height: 1.066667rem;
        vertical-align: top
    }

    .foodentry .title {
        display: block;
        margin-top: .133333rem;
        color: #666;
        font-size: .32rem
    }

    .foodentry .service {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, .6);
        color: #fff;
        font-size: .24rem;
        line-height: .533333rem;
        border-radius: 0 0 .8rem .8rem
    }

    .foodentry .container {
        position: relative;
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem
    }

    .foodentry .container img {
        width: 100%;
        height: 100%
    }

    .foodentry .mint-swipe-indicator {
        margin: 0 .066667rem
    }

    .foodentry .mint-swipe-indicator.is-active {
        background-color: #000;
        opacity: .6
    }

    section[data-v-41ae3b7f] {
        background-color: #fff;
        padding: .266667rem .533333rem;
        color: #666;
        font-size: .32rem;
        margin-bottom: .266667rem;
        border-bottom: 1px solid #ddd
    }
</style>
<style type="text/css">
    .NoDataTip-wrapper_1Gwf0tm {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .NoDataTip-wrapper_1Gwf0tm img {
        display: block;
        width: 4rem;
        height: 2.266667rem
    }

    .NoDataTip-wrapper_1Gwf0tm h3 {
        margin: .333333rem 0 .266667rem;
        color: #6a6a6a;
        font-weight: 400;
        font-size: .453333rem
    }

    .NoDataTip-wrapper_1Gwf0tm p {
        margin: 0 0 .333333rem;
        color: #999;
        font-size: .306667rem
    }

    .NoDataTip-wrapper_1Gwf0tm button {
        padding: .266667rem 0;
        width: 3.2rem;
        border: none;
        border-radius: .053333rem;
        background-color: #56d176;
        color: #fff;
        text-align: center;
        font-size: 1.2em;
        font-family: inherit
    }

    .NoDataTip-wrapper_1Gwf0tm.NoDataTip-fixed_3gTgcHC {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8866;
        padding: 0 0 10%;
        width: 100%;
        height: 100%;
        background: #fff
    }
</style>
<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        data(){
            return {
                posList: [],
                keyword:''
            };
        },
        computed: mapState(['show_pos_modal']),
        methods: Object.assign(mapActions(['posModalToggle', 'searchPosNearby','selectPos']), {
            searchPos(){
                if(this.keyword) {
                    this.searchPosNearby(this.keyword).then(msg => this.posList = msg);
                }
            },
            updatePos(pos){
                this.selectPos(pos);
                this.posModalToggle({type:1});
                console.log(this.$parent.$children);
                this.$parent.refresh();
                this.$parent.$children.forEach(component => {
                    component.refresh && component.refresh();
                });
            }
        })
    }
</script>