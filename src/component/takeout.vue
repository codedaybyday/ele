<template>
    <div>
        <IndexHeader/>
        <FoodEntryList/>
        <MerchantList/>
    </div>
</template>
<style></style>
<script>
    import FooterNav from './takeout/footerNav.vue';
    import IndexHeader from './takeout/indexHeader.vue';
    import MerchantList from './takeout/merchantList.vue';
    import FoodEntryList from './takeout/foodEntryList.vue';
    import {mapActions,mapState} from 'vuex';
    export default{
        components:{
            FooterNav,
            IndexHeader,
            MerchantList,
            FoodEntryList
        },
        methods:mapActions(['getCityInfo']),
        /*async beforeMounted(){
            await this.getCityInfo;
        },*/
        mounted(){
            //console.log('父元素渲染完成');
            this.getCityInfo();
        }
    }
</script>