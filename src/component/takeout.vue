<template>
    <div v-if="longitude && latitude">
        <IndexHeader/>
        <FoodEntryList/>
        <MerchantList/>
    </div>
</template>
<style></style>
<script>
    import FooterNav from './common/footerNav.vue';
    import IndexHeader from './takeout/indexHeader.vue';
    import MerchantList from './takeout/merchantList.vue';
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
        computed:mapState(['latitude','longitude']),
        methods:Object.assign(mapActions(['getCityInfo']),mapMutations(['GET_POSITION'])),
        async beforeMount(){
            let msg = await this.getCityInfo();
            this.GET_POSITION(msg);
        },
        mounted(){
            //console.log('父元素渲染完成');
        }
    }
</script>