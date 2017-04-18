<template>
    <div>
        <svgs/>
        <ShopHeader/>
        <ShopDetail/>
    </div>
</template>
<style>

</style>
<script>
    import ShopHeader from './shop/shopHeader.vue';
    import ShopDetail from './shop/shopDetail.vue';
    import svgs from './shop/svgs.vue';
    export default{
        components:{
            svgs,
            ShopHeader,
            ShopDetail
        }
    }
</script>