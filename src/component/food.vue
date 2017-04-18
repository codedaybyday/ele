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
    export default{
        components: {
            svgs,
            MerchantList,
            FoodHeader
        }
    }
</script>