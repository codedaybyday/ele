<template>
    <div>
        <svgs/>
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
    import IndexHeader from './index/indexHeader.vue';
    import MerchantList from './common/merchantList.vue';
    import FoodEntryList from './index/foodEntryList.vue';
    import svgs from './index/svgs.vue';
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
            FoodEntryList,
            svgs
        },
        computed:mapState({
            form: state => state.merchant_form_data,
            restaurants:state => state.restaurants,
            offset:state => state.merchant_form_data.offset || 0,
            limit:state => state.merchant_form_data.limit,
            is_end:state => state.merchant_form_data.is_end,
            is_loading:state => state.merchant_form_data.is_loading
        }),
        methods:Object.assign(mapActions(['getRestList','updateMerchantFormData','clearAndUpdateMerchantFormData']),{

        }),
        mounted(){
            this.clearAndUpdateMerchantFormData({
                terminal:'h5',
                extras:['activities']
            });
            this.getRestList();
            window.onscroll = () => {
                let docEle = document.documentElement;
                let body = document.getElementsByTagName('body')[0];
                if( docEle.offsetHeight-body.scrollTop<=docEle.clientHeight && !this.is_end && !this.is_loading){
                    this.updateMerchantFormData({
                        offset:this.offset+this.limit,
                        is_loading:true
                    });
                    this.getRestList(1);
                }
            };
        }
    }
</script>