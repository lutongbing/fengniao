<template>
	<div>
		<!--导航-->
		<div class="nav">
			<router-link to="/first">
			<svg class="icon" aria-hidden="true" id="back">
			  <use xlink:href="#icon-jiantou"></use>
			</svg>
			<span class="nav_title">论坛</span>
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
		<!--论坛导航-->
		<section class="discuss_nav">
			<p class="disNav_title">
				论坛导航
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-liebiao"></use>
				</svg>
			</p>
			<ul class="disNav_ul" v-for="(item,index) in discuss">
				<li class="disNav_li">
					<span :class="{disNav_item:true,active:index==num}" @click="change(index)">{{item.title}}</span>
				</li>
			</ul>
		</section>
		<!--轮播-->
		<div id="lunbo_box">
			<mt-swipe :auto="4000">
					<mt-swipe-item>
							<img src="../../assets/img/d_lunbo01.jpg"/>
							<a href="">明媚午后</a> 
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/d_lunbo02.jpg"/>
						<a href="">
							荷影 
						</a>	
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/d_lunbo03.jpg"/>
						<a href="">
							海边的女孩
						</a>
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/d_lunbo04.jpg"/>
						<a href="">
							色彩一瞬
						</a>
					</mt-swipe-item>
				</mt-swipe>

		</div>
		<!--左右-->
		<router-link to="/phone">
		<ul class="listBox_ul" v-for="(item,index) in list16">
			<li class="listBox_li">
				<dl class="left">
					<dt class="tit">
						<a href="">
							<p>{{item.title}}</p>
						</a>
					</dt>
					<dd class="labelBox">
						<a class="name">{{item.name}}</a>
						<span class="time">{{item.time}}</span>
							<span class="comment">
								<svg class="icon" aria-hidden="true">
						  		<use xlink:href="#icon-conversation_icon"></use>
								</svg><span class="n">{{item.num}}</span> 
						</span>
					</dd>
				</dl>
				<div class="r_img"><img :src="item.src" /></div>
				
			</li>
		</ul>
		</router-link>
	
	</div>
</template>

<script>
	import Header from '../header/header.vue'
	export default{
		data(){
			return{
				num:0,
				discuss:[],
				list16:[]
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.discuss=res.data.discuss
		  		_this.list16=res.data.list16
		  		
		  		
		  	})
		  	.catch(()=>{
		  		
		  	})
		  	.finally((f)=>{
		  		console.log('请求结束了')
		  	})
		},
		components:{
			'v-header':Header
		}
	}
</script>
<style type="text/css">
	/*将父级高度设置为全局样式*/
	.mint-swipe-items-wrap{
		padding-bottom: 63%;
	}
</style>
<style scoped>
	.discuss_nav{
		width: 94%;
		padding-left: 3%;
		padding-right: 3%;
		padding-bottom: 3%;
		overflow: hidden;
	}
	.disNav_title{
		width: 100%;
		text-align: left;
		font-size: 1.3em;
		color: #888;
		margin-top: 5px;
		margin-bottom: 5px;
	}
	.disNav_li{
		width:25% ;
	    float: left;
	    margin-top: 2%;
	}
	.disNav_item{
		width: 90%;
		display: inline-block;
		padding-top: 4%;
		padding-bottom: 4%;
		background: #fbfbfb;
	    border: 1px solid #eee;
	    line-height: 1.7rem;
	    font-size: 1.2em;
	}
	#lunbo_box{
		width: 100%;
		background-color: skyblue;
		overflow: hidden;
	}
	.mint-swipe{
		overflow: hidden;
		position: relative;
	}
	
	.mint-swipe-item>img{
		width: 100%;
		height: auto;
	}
	.mint-swipe-item>a{
		color: white;
		position: absolute;
		display: block;
		width: 100%;
		bottom: 15%;
		font-size: 1.8em;
	}
	.mint-swipe-indicator {  
    opacity: 0.4;
}
	.listBox_li{
		width: 100%;
		overflow: hidden;
		border-bottom: 1px solid #eee;
		/*background-color: pink;*/
	}
	.left{
		float: left;
		width: 62%;
		margin-top: 5%;
		padding-bottom: 4%;
		padding-left: 3%;
	}
	.listBox_li .tit{
		width: 95%;
		text-align: left;
    	font-size: 1.3em;
    	margin-top: 8%;
    	
	}
	.tit p{
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.r_img{
		width: 32%;
		float: left;
		margin-top: 3%;
		height: 91px;
		overflow: hidden;
		background-color: #eee;
		
	}
	.r_img>img{
		min-width: 100%;
    	max-width: 100%;
		margin-top: 8%;
		margin-bottom: 8%;
	}
	.listBox_li .labelBox{
		/*background-color: blue;*/
		height: 14%;
		margin-top: 5%;
		padding-right: 5%;
		
	}
	.name,.time,.comment{
		color: #bbb;
	}
	.name{
		float: left;
	}
	.time{
		float: left;
		margin-left: 5%;
	}
	.comment{
		float: right;
		width: 15%;
		margin-right: 4%;
	}
	.n{
		display: inline-block;
		margin-left: 10%;
	}
</style>