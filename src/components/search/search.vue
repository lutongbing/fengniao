<template>
	<div>
		<!--导航条-->
		<div class="nav">
			<p class="title" @click="back()">
			<svg class="icon" aria-hidden="true" id="back">
			  <use xlink:href="#icon-jiantou"></use>
			</svg>
			<span class="nav_title">搜索</span>
			</p>
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
		<!--搜索框-->
		<section class="searchBox">
			<div class="sBox_left">
				<i >
					<svg class="icon" aria-hidden="true" id="fangdajing">
					  <use xlink:href="#icon-icon-"></use>
					</svg>
				</i>
				<input type="text" id="keyword" placeholder="蜂鸟网"/>
				<img src="../../assets/img/searchClose.png" id="close"/>
			</div>
			<a href="" class="searchBtn">查询</a>
		</section>
		
		<!--需要声明字符串selected才可以使用-->
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">文章</mt-tab-item>
		  <mt-tab-item id="2">帖子</mt-tab-item>
		  <mt-tab-item id="3">器材</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		  	<p class="artli_p pad">共搜到5370篇 关于"蜂鸟网"的文章</p>
		    <ul class="pad" v-for="(item,index) in list07">
		    	<li class="article_li"><p class="artile_title">{{item.title}}</p><span class="date">{{item.date}}</span></li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <p class="artli_p pad">共搜到9545篇 关于"蜂鸟网"的帖子</p>
		    <ul class="pad" v-for="(item,index) in list08">
		    	<li class="article_li"><p class="artile_title">{{item.title}}</p><span class="date">{{item.date}}</span></li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <p class="artli_p pad">共搜到9545篇 关于"蜂鸟网"的帖子</p>
		    <ul class="pad" v-for="(item,index) in list08">
		    	<li class="article_li"><p class="artile_title">{{item.title}}</p><span class="date">{{item.date}}</span></li>
		    </ul>
		  </mt-tab-container-item>
		</mt-tab-container>
		
		
		
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list06:[],
				list07:[],
				list08:[],
				selected:"1"
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.list06=res.data.list06
		  		_this.list07=res.data.list07
		  		_this.list08=res.data.list08
		  		
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
	.mint-tab-item-label{
		font-size: 1.2em;
	}	
</style>
<style scoped>
	
	.mint-navbar .mint-tab-item.is-selected {
    color: #d84c45;
    border-bottom: none;
    }
	.is-selected{
		color: red;
		text-decoration: none;
		position: relative;
		
	}
	.is-selected::after{
		content: '';
		width: 100%;
		position: absolute;
		height: 2px;
		background:#d84c45;
		left: 0px;
		bottom:4px
	}
	.pad{
		padding-left: 3%;
		padding-right: 3%;
	}
	.nav{
		width: 100%;
		background-color:black;
		position: relative; 
		
	}
	.nav_title{
		width: 18%;
		height: 80%;
		margin-top: 2.6%;
		position: absolute;
		left: 5%;
		color:white;
		font-size: 1.5em;
		opacity: 0.7;
	}
	#back{
		display: inline-block;
		color: white;
		opacity: 0.7;
		position: absolute;
		left: 2%;
		top: 27%;
		font-size: 20px;
		
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
	.searchBox{
		background-color: #f8f8f8;;
		width: 100%;
		overflow: hidden;
	}
	.sBox_left{
		float: left;
		width:75%;
		padding-top: 3%;
		padding-bottom: 3%;
		padding-left: 5%;
		/*background-color: rosybrown;*/
		position: relative;
	}
	#fangdajing{
		float: left;
		width: 1.8em;
		height: 1.8em;
		position: absolute;
		top: 30%;
		left: 10%;
	}
	#keyword{
		width: 80%;
		height: 40px;
		border-radius: 5px;
		padding-left: 15%;
		border: 1px solid #eee;
	}
	#close{
		width: 20px;
		height: 20px;
		position: absolute;
		top: 32%;
		right: 6%;
	}
	.searchBtn{
		color: #d84c45;
		float: left;
		margin-top: 4%;
		margin-left: 4%;
		font-size: 1.5em;
	}
	.article_li{
		width: 100%;
		border-bottom: 1px solid #eee;
		padding-top: 4%;
		padding-bottom: 4%;
		font-size: 1.2em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.artli_p{
		text-align: left;
		font-size: 1.2em;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	.artile_title{
		text-align: left;
		float: left;
		width: 75%;
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.date{
		width: 25%;
		float: right;
		color: #999;
	}
	/**/
</style>