<template>
	<nav class="footer-nav">
    	<router-link to="/takeout">
            <svg class="footer-nav-icon" v-if="path == '/takeout' || path == '/'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index" ></use></svg>
            <svg class="footer-nav-icon" v-else><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index-regular"></use></svg>
    		<span class="footer-nav-name">外卖</span>
		</router-link>
    	<router-link to="/foo">
    		<svg class="footer-nav-icon" v-if="path == '/foo'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover"></use></svg>
            <svg class="footer-nav-icon" v-else><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover-regular"></use></svg>
    		<span class="footer-nav-name">发现</span>
    	</router-link>
    	<router-link to="/hha">
    		<svg class="footer-nav-icon" v-if="path == '/hha'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use></svg>
            <svg class="footer-nav-icon" v-else><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular"></use></svg>
    		<span class="footer-nav-name">订单</span>
    	</router-link>
    	<router-link to="/hhh">
    		<svg class="footer-nav-icon" v-if="path == '/hhh'"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile"></use></svg>
            <svg class="footer-nav-icon" v-else><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular"></use></svg>
    		<span class="footer-nav-name">我的</span>
    	</router-link>
    </nav>
</template>
<style>
.footer-nav{
	position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: .12rem;
    background-color: #fff;
    height: 1.333333rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
}
.footer-nav-icon{
	width: .533333rem;
    height: .533333rem;
}
.footer-nav-active{
	color: #0089dc;
}
.router-link-active .footer-nav-name{
    color:#0089dc;
}
.footer-nav-name{
	display: block;
    color: #666;
    font-size: .266667rem;
}
.footer-nav > a{
	-webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
}
</style>
<script>
export default{
	mounted(){
        console.log(this.$route.path);
    },
    computed:{
        path:function(){
            return this.$route.path;
        }
    }
};
</script>