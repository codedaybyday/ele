<template>
	<div id="app">
		<header>
			<div class="header-top">
				<div class="header-address fl">黄浦区人民大道</div>
				<div class="header-weather fr">
					<div>
						<h2 class="temp">13°</h2>
						<p class="weather-type">晴天</p>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>
<style>
*{
	padding: 0;
	margin:0;
	list-style: none;
}
header{
	background: #0096ff;
	padding:0.266667rem 0.373333rem;
	color:#fff;
}
.header-top{
	overflow: hidden;
}
.fl{float: left;}
.fr{float:right;}
.header-address{
	margin: 0 0.133333rem;
    font-size: 0.48rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
}
.temp{
	font-size: 0.373333rem;
}
.weather-type{
	font-size: 0.266667rem;
}
</style>
<script>
export default{
	
}
</script>