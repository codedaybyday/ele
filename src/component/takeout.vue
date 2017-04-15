<template>
    <div>
        <IndexHeader/>
        <FoodEntryList/>
        <h3 class="recommand-merchant-title">推荐商家</h3>
        <MerchantList/>
        <FooterNav/>
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
</style>
<script>
    import FooterNav from './common/footerNav.vue';
    import IndexHeader from './takeout/indexHeader.vue';
    import MerchantList from './common/merchantList.vue';
    import FoodEntryList from './takeout/foodEntryList.vue';
    import {mapActions,mapState,mapMutations} from 'vuex';
    export default{
        data(){
            return {
            };
        },
        components:{
            FooterNav,
            IndexHeader,
            MerchantList,
            FoodEntryList
        },
        mounted(){
        }
    }
</script>