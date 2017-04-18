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
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            svgs,
            SearchHeader,
            MerchantList
        }
    }
</script>
