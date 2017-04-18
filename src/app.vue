<template>
    <div id="app" v-if="longitude && latitude">
        <router-view></router-view>
    </div>
</template>
<style>
*{
	padding: 0;
	margin:0;
	list-style: none;
}
html{
    box-sizing: border-box;
    background-color: #f4f4f4;
    color: #333;
    font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
    line-height: 1.2;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    touch-action: manipulation;
    text-size-adjust: none;
}
img{max-width: 100%;}
button, input, select, textarea {
    outline: none;
    border: none;
    font-size: inherit;
    font-family: inherit;
}
a {
    outline: none;
    color: #333;
    text-decoration: none;
}
</style>
<script>
    import FooterNav from './component/common/footerNav.vue';
    import {mapState,mapActions,mapMutations} from 'vuex';
    export default{
        components:{
            FooterNav
        },
        computed:mapState(['latitude','longitude']),
        methods:Object.assign(mapActions(['getCityInfo']),mapMutations(['GET_POSITION'])),
        async beforeMount(){
            if(!this.longitude || !this.latitude){
                let msg = await this.getCityInfo();
                this.GET_POSITION(msg);
            }
            
        },
        mounted(){
            //rem();
        }
    }

</script>