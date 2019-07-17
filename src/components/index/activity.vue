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
		<!--tab栏-->
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">发现活动</mt-tab-item>
		  <mt-tab-item id="2">官方活动</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		   <p class="act_tit">蜂鸟网   <  <span class="tit_span">发现活动</span></p>
		   <!--轮播-->
			<div id="act_lunbo">
				<mt-swipe :auto="4000">
						<mt-swipe-item>
								<img src="../../assets/img/act_lunbo01.jpg"/>
								<a href="">【活动花絮】佳能专区-3月24日-人像篇创作之美</a> 
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../../assets/img/act_lunbo02.jpg"/>
							<a href="">佳能专区——复古人像创作活动花絮 </a>	
						</mt-swipe-item>
						<mt-swipe-item>
							<img src="../../assets/img/act_lunbo03.jpg"/>
							<a href="">专业单反的实力见证——EOS试用活动招募啦！~</a>
						</mt-swipe-item>
				</mt-swipe>
			</div>
			<!---->
			<section class="activity pad">
				<ul class="act_ul">
					<li class="act_li"  v-for="(item,index) in act01">
						<p class="act_li_tit">
						<span>【采风拍摄】</span>	{{item.title}}
						</p>
						<img :src="item.src"/>
						<div class="act_item">
							<span>时间：<span class="time">{{item.time}}</span></span>
							<span>城市：<span class="city">{{item.city}}</span></span>
							<span>费用：<span class="price">{{item.price}}</span></span>
							<span>组织者：<span class="organizer">{{item.organizer}}</span></span>
						</div>
						<div class="labelBox">
							<p class="date">
							<svg class="icon" aria-hidden="true" id="naozhong">
							  <use xlink:href="#icon-naozhong"></use>
							</svg>
							<span class="day">174</span>天<span class="hour">10</span>小时<span class="min">52</span>分
							</p>
							<p class="ren">
								<span class="ren_span">203</span>人感兴趣
							</p>
						</div>
					</li>
				</ul>
			</section>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		   	<section class="activity pad">
		   	<p class="act_tit">蜂鸟网   <  <span class="tit_span">官方活动</span></p>
				<ul class="act_ul">
					<li class="act_li"  v-for="(item,index) in act01">
						<p class="act_li_tit">
						<span>【采风拍摄】</span>	{{item.title}}
						</p>
						<img :src="item.src"/>
						<div class="act_item">
							<span>时间：<span class="time">{{item.time}}</span></span>
							<span>城市：<span class="city">{{item.city}}</span></span>
							<span>费用：<span class="price">{{item.price}}</span></span>
							<span>组织者：<span class="organizer">{{item.organizer}}</span></span>
						</div>
						<div class="labelBox">
							<p class="date">
							<svg class="icon" aria-hidden="true" id="naozhong">
							  <use xlink:href="#icon-naozhong"></use>
							</svg>
							<span class="day">174</span>天<span class="hour">10</span>小时<span class="min">52</span>分
							</p>
							<p class="ren">
								<span class="ren_span">203</span>人感兴趣
							</p>
						</div>
					</li>
				</ul>
			</section>
		  </mt-tab-container-item>
		</mt-tab-container>
		<!---->
		
		
		
	</div>
</template>

<script>
	export default{	
		data(){
			return{
				act01:[],
				selected:"1"
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.act01=res.data.act01
		  		

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
		
	}
</script>

<style type="text/css">
	.mint-tab-item-label{
		font-size: 16px;
	}
	#act_lunbo .mint-swipe-items-wrap{
		padding-bottom: 43.47%;
		position: relative;
	}
	#act_lunbo .mint-swipe-items-wrap:after{
		content: '';
		background-color: black;
		opacity: 0.5;
		width: 100%;
		height: 20%;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left:88%;
    z-index: 100;
    }
	
</style>
<style scoped>
	.pad{
		padding-left: 3%;
		padding-right: 3%;
	}
	.mint-navbar .mint-tab-item.is-selected{
	    border-top: 5px solid #0fb08f;
	    background: #fff;
	    color: #0fb08f;
	    text-decoration: none;
	    border-bottom: none;
	}
	.mint-navbar .mint-tab-item {
		background-color: #eee;
	}
	.nav{
		width: 100%;
		background-color:#14aebd;;
		position: relative;
	}
	.nav_brand{
		width: 18%;
		height: 80%;
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
	.act_tit{
		font-size: 1.2em;
		margin-top: 10px;
		margin-bottom: 10px;
		padding-left: 5%;
		text-align: left;
	}
	.tit_span{
		color: #999;
	}
	#act_lunbo{
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
		width: 80%;
		bottom: 4%;
		font-size: 1.1em;
		z-index: 100;
	}
	
    .mint-swipe-indicator{
    	opacity: 1;
    }
	.activity{
		width: 94%;
	}
	.act_li{
		width: 100%;
		background-color: white;
		margin-top: 20px;
		border-bottom: 1px solid #999;
		overflow: hidden;
	}
	.act_li_tit{
		text-align: left;
		font-size: 1.5em;
		line-height: 1.8em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.act_li_tit span{
		color: #0eb08f;
	}
	.act_li img{
		width: 45%;
		float: left;
		margin-top: 5%;
	}
	.act_item{
		width: 50%;
		float: left;
		padding-left: 5%;
		margin-top: 5%;
	}
	.act_item>span{
		font-size: 1.2em;
		line-height: 1.8em;
		display: block;
		text-align: left;
	}
	.time,.city,.orginizor{
		color: #999;
	}
	.price{
		color: orangered;
	}
	.labelBox{
		width: 100%;
		height: 30px;
		float: left;
		margin-top: 10px;
		font-size: 1.2em;
	}
	.date{
		float: left;
		}
	.day,.hour,.min{
		color: orangered;
	}
	.ren{
		float: right;
	}
	.ren_span{
		color: orangered;
	}
</style>