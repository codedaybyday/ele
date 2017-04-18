<template>
    <div>
        <svgs/>
        <SearchHeader/>
        <MerchantList/>
    </div>
</template>
<style>

</style>
<script>
    import SearchHeader from './search/searchHeader.vue';
    import MerchantList from './common/merchantList.vue';
    import svgs from './search/svgs.vue';
    import isJSON from 'is-json';
    import {mapActions,mapState} from 'vuex';
    export default{
        data(){
            return{
                keyword:''
            }
        },
        components:{
            svgs,
            SearchHeader,
            MerchantList
        },
        computed:mapState({
            form: state => state.merchant_form_data,
            restaurants:state => state.restaurants,
            offset:state => state.merchant_form_data.offset || 0,
            limit:state => state.merchant_form_data.limit,
            is_end:state => state.merchant_form_data.is_end,
            is_loading:state => state.merchant_form_data.is_loading
        }),
        methods:Object.assign(mapActions(['getRestList','updateMerchantFormData','clearAndUpdateMerchantFormData','getSearchList']),{
        }),
        mounted(){
            let query = this.$route.query;
            Object.keys(query).map(el => {
                if (isJSON(query[el])) {
                    query[el] = JSON.parse(query[el]);
                }
            });
            this.keyword = query.keyword;
            this.clearAndUpdateMerchantFormData({
                keyword:this.keyword,
                search_item_type:2,
                extras:['activities']
            });
            this.getSearchList();
            window.onscroll = () => {
                let docEle = document.documentElement;
                let body = document.getElementsByTagName('body')[0];
                if( docEle.offsetHeight-body.scrollTop<=docEle.clientHeight && !this.is_end && !this.is_loading){
                    this.updateMerchantFormData({
                        offset:this.offset+this.limit,
                        is_loading:true
                    });
                    this.getSearchList(1);
                }
            };
        }
    }
</script>
