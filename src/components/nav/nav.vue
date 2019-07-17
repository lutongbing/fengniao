<template>
	<div>
		<!--导航-->
		<nav class="nav">
			<router-link to="/first">
			<img src="../../assets/img/logoIcon.png" class="nav_brand"/>
			</router-link>
			<router-link to="/search">
			<svg class="icon" aria-hidden="true" id="a">
			  <use xlink:href="#icon-icon-"></use>
			</svg>
			</router-link>
			<router-link to="/login">
			<svg class="icon" aria-hidden="true" id="b">
			  <use xlink:href="#icon-ren1" ></use>
			</svg>
			</router-link>
			<router-link to="/map">
			<svg class="icon" aria-hidden="true" id="c">
			  <use xlink:href="#icon-wuxupailie"></use>
			</svg>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>

<style>
	.nav{
		width: 100%;
		background-color:black;
		position: relative;
		
	}
	.nav_brand{
		width: 16%;
		height: 75%;
		margin-top: 5px;
		position: absolute;
		left: 2%;
		opacity: 0.9;
	}
	#a,#b,#c{
		display: inline-block;
		margin: 5px 2%;
		color: white;
		opacity: 0.7;
	}
	#a{
		margin-left: 60%;
		font-size: 35px;
	}
	#b,#c{
		font-size: 30px;
		
	}
	.icon {
	  width: 1em;
	  height: 1em;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
	}
</style>