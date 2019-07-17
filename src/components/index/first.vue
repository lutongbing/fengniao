<template>
	<!--只能有一个根目录-->
	<div>
		<!--导航-->
		<my-nav></my-nav>
		<!--头部-->
		<v-header></v-header>
		<!--轮播-->
		<div id="lunbo_box">
			<mt-swipe :auto="4000">
					<mt-swipe-item>
							<img src="../../assets/img/lunbo_01.jpg"/>
							<a href="">Honda Gold Wing青海湖之旅</a> 
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/lunbo_02.jpg"/>
						<a href="">
							"神笔马良"修复破旧老照片 
						</a>	
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/lunbo_03.jpg"/>
						<a href="">
							尼康日本工厂参观
						</a>
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/lunbo_04.jpg"/>
						<a href="">
							用摄影书写心情
						</a>
					</mt-swipe-item>
					<mt-swipe-item>
						<img src="../../assets/img/lunbo_05.gif"/> 
						<a href=""></a>
					</mt-swipe-item>
				</mt-swipe>

		</div>



		<section class="listBox">
		<!--左右-->
		<router-link to="/phone">
		<ul class="listBox_ul01" v-for="(item,index) in list01">
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
		<!--三张图-->
		<router-link to="/phone">
		<ul class="listBox_ul02" v-for="(item,index) in list02">
			<li class="listBox_Bbs">
				<dl>
				<dt class="tit">
				<a href="">
				<p>{{item.title}}</p>
				</a>
				</dt>
				
				<div class="pic3">
					
					<img :src="item.img01" />
					<img :src="item.img02"/>
					<img :src="item.img03"/>
					
				</div>
				
				<dd class="labelBox">
					<a class="repliesNum">{{item.num}}</a>
						<span class="repliesNum">{{item.person}}</span>
					<a href="" class="partTit">{{item.type}}</a>
				</dd>
				</dl>
			</li>
		</ul>
		</router-link>
			
		<!--一张大图 -->
		<router-link to="/phone">
		<ul class="listBox_ul03" v-for="(item,index) in list03">
			<li class="listBox_show">
				<dl>
				<dt class="show_title">
				<a href="">
				<a class="type01" id="type_02"></a>
				<p>
					{{item.title}}
				</p>
				</a>
				</dt>
					<img :src="item.src" />
				
				<dd class="labelBox">
					<a class="repliesNum">{{item.num}}</a>
						<span class="repliesNum">{{item.person}}</span>
					<a href="" class="partTit">{{item.type}}</a>
				</dd>
				</dl>
			</li>
		</ul>
		</router-link>
			
		<!---->
		<router-link to="/phone">
		<ul class="listBox_ul04" v-for="(item,index) in list04">
			<li class="listBox_Bbs">
				<dl>
				<dt class="tit04">
				<a href="">
				<p>{{item.title}}</p>
				</a>
				</dt>
				
				<div class="pic3">
					
					<img :src="item.img01" />
					<img :src="item.img02"/>
					<img :src="item.img03"/>
					
				</div>
				
				<dd class="labelBox">
					<a class="repliesNum">{{item.num}}</a>
						<span class="repliesNum">{{item.person}}</span>
					<a href="" class="partTit">{{item.type}}</a>
				</dd>
				</dl>
			</li>
		</ul>
		</router-link>
			
		<!---->
		<router-link to="/phone">
		<ul class="listBox_ul05" v-for="(item,index) in list05">
			<li class="listBox_show">
				<dl>
				<dt class="show_title">
				<a href="">
				<a class="type01" id="type_02"></a>
				<p>
					{{item.title}}
				</p>
				</a>
				</dt>
					<img :src="item.src" />
				
				<dd class="labelBox">
					<a class="repliesNum">{{item.num}}</a>
						<span class="repliesNum">{{item.person}}</span>
					<a href="" class="partTit">{{item.type}}</a>
				</dd>
				</dl>
			</li>
		</ul>
		</router-link>
		</section>
	
	
	
	</div>
</template>

<script>
	import Nav from '../nav/nav.vue'
	import Header from '../header/header.vue'
	export default{
		data(){
			return{
				list01:[],
				list02:[],
				list03:[],
				list04:[],
				list05:[]
								
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.list01=res.data.list01
		  		_this.list02=res.data.list02
		  		_this.list03=res.data.list03
		  		_this.list04=res.data.list04
		  		_this.list05=res.data.list05
		  		
		  	})
		  	.catch(()=>{
		  		
		  	})
		  	.finally((f)=>{
		  		console.log('请求结束了')
		  	})
		},
		components:{
			'my-nav':Nav,
			'v-header':Header
		}
	}
</script>


<style type="text/css">
	/*将父级高度设置为全局样式*/
	.mint-swipe-items-wrap{
		padding-bottom: 63%;
	}
	a{
		text-decoration: none;
	}
</style>
<style scoped>
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
		background-position: 0 1px;
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
	.pic3>img{
		width: 32%;
		float: left;
	}
	.pic3>img:nth-child(2){
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
	.listBox_show{
		width: 100%;
		padding-bottom:10%;
		padding-top:4% ;
		border-bottom: 1px solid #eee;
		/*background-color: yellow;*/
	}
	.show_title{
		width: 100%;
		text-align: left;
		float: left;
		font-size: 20px;
		/*background-color: pink;*/
		margin-bottom: 5%;
		
	}
	.listBox_show img{
		width: 100%;
		height: auto;
	}
	.listBox_show .labelBox{
		width: 100%;
		height: 16px;
	    width: 93%;
	    left: 3%;
	    color: #bbb;
	    font-size: .578rem;
	    height: .789rem;
	    line-height: .789rem;
	    overflow: hidden;
	    margin-top: 8%;
		/*background-color: blue;*/
	}
	p{
		
	}
</style>