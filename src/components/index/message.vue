<template>
	<div>
		<!--导航-->
		<div class="nav">
			<router-link to="/first">
			<svg class="icon" aria-hidden="true" id="back">
			  <use xlink:href="#icon-jiantou"></use>
			</svg>
			<span class="nav_title">资讯</span>
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
		
		<section class="headerTop">
			<ul class="headerTop_ul">
				<li class="headerTop_li">学院</li>
				<li class="headerTop_li">器材</li>
				<li class="headerTop_li">影像</li>
				<li class="headerTop_li">行摄</li>
				<li class="headerTop_li">手机</li>
				<li class="headerTop_li">汽车</li>
			</ul>
		</section>
		
			
		<!--轮播-->
		<div id="lunbo_box">
			<mt-swipe :auto="4000">
				<mt-swipe-item>
						<img src="../../assets/img/m_lunbo01.jpg"/>
						<a href="">芬兰拉普兰的绝美世界</a> 
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../../assets/img/m_lunbo02.jpg"/>
					<a href="">
						最美村庄挪威Reine
					</a>	
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../../assets/img/m_lunbo03.jpg"/>
					<a href="">
						佳能G5 X Mark II外观实拍
					</a>
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../../assets/img/m_lunbo04.jpg"/>
					<a href="">
						佳能G7 X Mark III外观实拍
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--标题-->
		<section class="mesBox">
			<p class="mesBox_tit">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-zixun"></use>
				</svg>
				<span>资讯头条</span>
			</p>
			<div class="kong"></div>
		</section>
		<!--盒子-->
		<router-link to="/phone">
		<ul class="listBox_ul01" v-for="(item,index) in menu01">
			<li class="listBox_li">
				<dl class="left">
					<dt class="tit">
						<a href="">
							<p>{{item.title}}</p>
						</a>
					</dt>
					<dd class="labelBox">
						<a class="type" id="type_01"></a>
						<span class="time">{{item.time}}</span>
							<span class="comment">
								<svg class="icon" aria-hidden="true">
						  		<use xlink:href="#icon-conversation_icon"></use>
								</svg><span class="n">{{item.num}}</span> 
						</span>
					</dd>
				</dl>
				<img :src="item.src" />
			</li>
		</ul>
		</router-link>
		<!---->
		<router-link to="/phone">
		<ul class="listBox_ul02" >
			<li class="listBox_Bbs" v-for="(item,index) in menu02">
				<dl>
				<dt class="tit">
				<a href="">
				<p>{{item.title}}</p>
				</a>
				</dt>
				
				<ul class="pic3">
					<li class="pic3_li"><img :src="item.img01" /></li>
					<li class="pic3_li"><img :src="item.img02" /></li>
					<li class="pic3_li"><img :src="item.img03" /></li>
					
				</ul>
				
				<dd class="labelBox">
					<a class="repliesNum">{{item.num}}</a>
						<span class="repliesNum">{{item.person}}</span>
					<a href="" class="partTit">{{item.type}}</a>
				</dd>
				</dl>
			</li>
		</ul>
		</router-link>
	
	</div>
</template>

<script>
	export default{	
		data(){
			return{
				menu01:[],
				menu02:[]
								
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.menu01=res.data.menu01
		  		_this.menu02=res.data.menu02
			
		  		
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
			}
		}
	}

</script>

<style type="text/css">
	/*给父级高度设置全局样式*/
	.mint-swipe-items-wrap{
		padding-bottom: 63%;
	}
</style>
<style scoped>
	.headerTop{
		width: 100%;
		background-color: #f8f8f8;
	}
	.headerTop_ul{
		height: 42px;
	}
	.headerTop_li{
		width:16.6%;
		float: left;
		font-size: 16px;
		line-height: 42px;
		color: #666;
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
		font-weight: 600;
		position: absolute;
		display: block;
		width: 100%;
		bottom: 15%;
		font-size: 1.6em;
	}
	.mint-swipe-indicator {  
    opacity: 0.4;
	}
	.mesBox_tit{
		width: 100%;
		font-size: 1.5em;
		float: left;
		margin-left: 5%;
		margin-top: 2%;
		margin-bottom: 2%;
		color: #698298;
		text-align: left;
	}
	.kong{
		width: 100%;
		background-color: #eee;
		height: 5px;
		float: left;
	}
	.listBox_li{
		width: 100%;
		border-bottom: 1px solid #eee;
		/*background-color: pink;*/
	}
	.left{
		float: left;
		width: 62%;
		/*background-color: yellowgreen;*/
		padding-left: 3%;
	}
	.listBox_li .tit{
		text-align: left;
    	font-size: 1.3em;
    	margin-top: 8%;
	}
	.listBox_li>img{
		width: 32%;
		margin-top: 5%;
		margin-bottom: 5%;
	}
	.listBox_li .labelBox{
		/*background-color: blue;*/
		height: 14%;
		margin-top: 14%;
		padding-right: 5%;
		
	}
	.type{
		display: inline-block;
		background-image: url(../../assets/img/bigBg.png);
		background-size: 100%;
		background-repeat: no-repeat;
    	width: 17%;
    	height: 20px;
		float: left;
	}
	.type01{
		display: inline-block;
		background-image: url(../../assets/img/bigBg.png);
		background-size: 100%;
		background-repeat: no-repeat;
    	width: 11%;
    	height: 20px;
		float: left;
	}
	#type_01{
		background-position: 0 -235px;
		/*position:0 0 ;*/
	}
	#type_02{
		margin-top: 1%;
		margin-right: 3%;
		margin-left: 3%;
		background-position: -1px -65px;
		/*position:0 24px ;*/
	}
	.time,.comment{
		color: grey;
		
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
	.listBox_Bbs{
		width: 100%;
		/*background-color: yellow;*/
		padding-top:4% ;
		border-bottom: 1px solid #eee;
	}
	.listBox_Bbs .tit{
		text-align: left;
    	font-size: 1.3em;
    	margin-left: 3%;
    	margin-right: 3%;
	}
	.listBox_Bbs .tit04{
		text-align: left;
    	font-size: 1.6em;
    	margin-left: 3%;
    	margin-right: 3%;
	}
	.listBox_Bbs .labelBox{
		width: 100%;
		height: 16px;
	    width: 93%;
	    left: 3%;
	    color: #bbb;
	    font-size: .578rem;
	    height: .789rem;
	    line-height: .789rem;
	    overflow: hidden;
	    padding: 0 .5% 1.2em .5%;
		/*background-color: blue;*/
	}
	.pic3{
		width: 100%;
		margin-top: 5%;
		margin-bottom: 5%;
		background-color: white;
		overflow: hidden;
	}
	.pic3_li{
		width: 32%;
		height: 98.2px;
		float: left;
		background-color: #eee;
		overflow: hidden;
	}
	.pic3_li img{
		width: 56%;
		height: 100%;
	}
	/*.pic3>img{
		width: 32%;
		float: left;
	}*/
	.pic3_li:nth-child(2){
		margin-left: 2%;
		margin-right: 2%;
	}
	.partTit{
		float: right;
		color: #6d7485;
	}
	.repliesNum{
		color: #bbb;
		float: left;
		margin-left: 5%;
	}
</style>