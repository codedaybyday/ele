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
    export default{
        components: {
            MerchantList,
            FoodHeader
        }
    }
</script>