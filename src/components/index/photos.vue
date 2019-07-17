<template>
	<div>
	<!--导航-->
		<div class="nav">
			<router-link to="/first">
			<svg class="icon" aria-hidden="true" id="back">
			  <use xlink:href="#icon-jiantou"></use>
			</svg>
			<span class="nav_title">图库</span>
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
		</div>
		<!--头部-->
		<v-header></v-header>
		<!--美图导航-->
		<section class="photos_nav">
			<ul class="photosNav_ul" v-for="(item,index) in pn">
				<li class="photosNav_li">
					<span :class="{photosNav_item:true,active:index==num}" @click="change(index)">{{item.title}}</span>
				</li>
			</ul>
		</section>
		<!---->
		<section class="picBar">
			<div class="leftBar">
				<ul class="left_ul" v-for="(item,index) in photos01">
					<li class="left_li"><img :src="item.src" /> </li>
				</ul>
			</div>
			
			<div class="rightBar">
				<ul class="right_ul" v-for="(item,index) in photos02">
					<li class="right_li"><img :src="item.src" /> </li>
				</ul>
			</div>
			
		</section>
	</div>	
</template>

<script>
	import Header from '../header/header.vue'
	export default{	
		data(){
			return{
				num:0,
				pn:[],
				photos01:[],
				photos02:[]
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.pn=res.data.pn
		  		_this.photos01=res.data.photos01
		  		_this.photos02=res.data.photos02

		  	})
		  	.catch(()=>{
		  		
		  	})
		  	.finally((f)=>{
		  		console.log('请求结束了')
		  	})
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			change(a){
				this.num=a;
			}
		},
		components:{
			'v-header':Header
		}
	}
</script>

<style scoped>
	.photos_nav{
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		padding-bottom: 3%;
		overflow: hidden;
	}
	.photosNav_li{
		width:25% ;
	    float: left;
	    margin-top: 2%;
	}
	.photosNav_item{
		width: 90%;
		display: inline-block;
		padding-top: 4%;
		padding-bottom: 4%;
		background: #fbfbfb;
	    border: 1px solid #eee;
	    line-height: 1.7rem;
	    font-size: 1.2em;
	}
	.picBar{
		padding-left: 2%;
		padding-right: 2%;
		width: 96%;
		margin-top: 10px;
	}
	.leftBar{
		width: 50%;
		float: left;
	}
	.rightBar{
		width: 50%;
		float: left;
	}
	.left_ul{
		width: 100%;
	}
	.left_li{
		width: 99%;
		margin-top: 5px;
	}
	.left_li img{
		width: 100%;
	}
	.right_ul{
		width: 100%;
	}
	.right_li{
		width: 99%;
		margin-top: 5px;
		margin-left: 1%;
	}
	.right_li img{
		width: 100%;
	}
	.active{
		color: #29b9c4;
   		border: 1px solid #29b9c4;
    	background: #fff;
	}
</style>