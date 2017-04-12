<template>
    <div>
        <IndexHeader v-if="info"/>
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
    import {mapActions,mapState,mapMutations} from 'vuex';
    export default{
        data(){
            return {
                info:{}
            };
        },
        components:{
            FooterNav,
            IndexHeader,
            MerchantList,
            FoodEntryList
        },
        methods:Object.assign(mapActions(['getCityInfo']),mapMutations(['GET_POSITION'])),
        async beforeMount(){
            this.info = await this.getCityInfo();
            this.GET_POSITION(this.info);
        },
        mounted(){
            //console.log('父元素渲染完成');
        }
    }
</script>