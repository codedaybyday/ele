<template>
	<div>
        <div class="food-entry">
            <div class="food-entry-list-wrap">
                <div class="food-entry-list">
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                </div>
                <div class="food-entry-list">
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                    <a class="food-entry-item">
                        <img src="http://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/"/>
                        <span class="food-name">土豪推荐</span>
                    </a>
                </div>
            </div>
			<ul class="food-entry-ctrl">
				<li class="is-active"></li>
				<li></li>
			</ul>
        </div>
    </div>
</template>
<style>
.food-entry{
    overflow: hidden;
    height: 4.72rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    text-align: center;
    position: relative;
}
.food-entry-list-wrap{position:absolute;width:205%;overflow:hidden;}
.food-entry-list{overflow:hidden;float:left;}
.food-entry-item{
    float: left;
    margin-top: 0.293333rem;
    width: 25%;
}
.food-entry-item img{
    width: 1.2rem;
    height: 1.2rem;
}
.food-name{
    display:block;
}
.food-entry-ctrl{
	position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.food-entry-ctrl li{
	width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    margin: 0 3px;
}
.food-entry-ctrl li.is-active{
	background-color: #000;
    opacity: .6;
}
</style>
<script>
export default{
	
};
</script>