<template>
	<!--头部-->
		<header>
			<ul class="header_ul">
				<li><router-link to="/first">首页</router-link></li>
				<li><router-link to="/message">资讯</router-link></li>
				<li><router-link to="/discuss">论坛</router-link></li>
				<li><router-link to="/picBar">图库</router-link></li>
				<li><router-link to="/photos">美图</router-link></li>
				<li><router-link to="/activity">活动</router-link></li>
				
					<svg class="icon" aria-hidden="true" id="right_more">
					  <use xlink:href="#icon-jiantou2"></use>
					</svg> 
			</ul>
		</header>
</template>

<script>
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$('header').css({"position":"fixed","top":"0","width":"100%"})
		}else if($(window).scrollTop()==0){
			$('header').css("position","static")
		}
	})
})
		
	
	
</script>

<style>
	.header_ul{
		height: 50px;
		padding-left: 0;
		background-color: white;
		position: relative;
		
	}
	header>ul>li{
		width:15%;
		font-size: 1.5em;
		float: left;
		line-height: 50px;
		list-style: none;
		text-decoration: none;
	}
	.listBox_ul>li{
			border-bottom: 1px solid #eee;
	}
	#right_more{
		font-size: 16px;
		margin-top: 14px;
		width: 10%;
		position: absolute;
		right: 1%;
	}
	.router-link-exact-active {
		color: red;
	}.header_ul{
		height: 50px;
		padding-left: 0;
		background-color: white;
	}
	header>ul>li{
		width: 15%;
		font-size: 1.5em;
		float: left;
		line-height: 50px;
		list-style: none;
		text-decoration: none;
	}
	.listBox_ul>li{
			border-bottom: 1px solid #eee;
	}
	#right_more{
		font-size: 16px;
		margin-top: 14px;
		width: 10%;
	}
	.router-link-exact-active {
		color: red;
	}
</style>