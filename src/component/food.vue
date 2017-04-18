<template>
    <div>
        <FoodHeader/>
        <MerchantList/>
    </div>
</template>
<style></style>
<script>
    import MerchantList from './common/merchantList.vue';
    import FoodHeader from './food/foodHeader.vue';
    import svgs from './food/svgs.vue';
    import {mapActions,mapState} from 'vuex';
    import isJSON from 'is-json';
    export default{
        components: {
            svgs,
            MerchantList,
            FoodHeader
        },
        computed:mapState({
            form: state => state.merchant_form_data,
            restaurants:state => state.restaurants,
            offset:state => state.merchant_form_data.offset || 0,
            limit:state => state.merchant_form_data.limit,
            is_end:state => state.merchant_form_data.is_end
        }),
        methods:Object.assign(mapActions(['getRestList','updateMerchantFormData','clearAndUpdateMerchantFormData']),{

        }),
        mounted(){
            let query = this.$route.query;
            Object.keys(query).map(el => {
                if(isJSON(query[el])){
                    query[el] = JSON.parse(query[el]);
                }
            });
            const filter_key = query.filter_key;
            this.clearAndUpdateMerchantFormData({
                offset:0,
                extras:['activities'],
                restaurant_category_ids:[filter_key.restaurant_category_id.id]
            });

            this.getRestList();
            window.onscroll = () => {
                let docEle = document.documentElement;
                let body = document.getElementsByTagName('body')[0];
                if( docEle.offsetHeight-body.scrollTop<=docEle.clientHeight && !this.is_end){
                    if(this.is_loading) return false;
                    this.is_loading = true;
                    this.updateMerchantFormData({
                        offset:this.offset+this.limit
                    });
                    this.getRestList(1);
                    this.is_loading = false;
                }
            };
        }
    }
</script>