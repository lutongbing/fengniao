<template>
	<div>
		<!--导航条-->
		<div class="nav">
			<p class="title" @click="back()">
			<svg class="icon" aria-hidden="true" id="back">
			  <use xlink:href="#icon-jiantou"></use>
			</svg>
			<span class="nav_title">手机</span>
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
		
		<section class="pad">
		<!--标题-->
			<h3 class="phone_tit">OPPO Reno造乐节落地重庆 华语乐坛十大金曲榜单公布</h3>
			<div class="tit_info">
				<span class="date_tag"> 2019-07-14 08:21</span>
				<span class="author">文子林</span>
			</div> 
		<!--内容-->
			<div class="phone_content">
				<p>
					　　2019年7月13日，中国，重庆——由OPPO、浙江卫视、中国音像协会唱片工作委员会联合举办的OPPO Reno造乐节在重庆盛大落地。OPPO Reno造乐节以彰显中国原创音乐力量为主旨，鼓励原创发声。四大音乐现场及年中音乐盛典相继开唱，备受瞩目的OPPO Reno华语原创十大金曲榜单于盛典公布。<br />
				</p>
				<img src="../../assets/img/phone01.jpg" />
				<p>　　OPPOReno造乐节共包含三大重磅内容：四大顶级原创音乐人加持的OPPO Reno音乐现场，一大专属于中国原创音乐的OPPO Reno浙江卫视2019年中音乐盛典以及一份最具含金量的浙江卫视OPPO Reno华语原创十大金曲榜单。<br />  </p>
				<p>　　OPPOReno造乐节集结了这个时代最具有创造力的声音，“游乐场”、“不睡觉”、“ 看热闹”、“可劲造”是针对不同乐迷喜好设立的“专属”音乐现场。现场汇集了流行、摇滚、民谣、说唱、电音等不同风格的音乐，让乐迷近距离感受多元音乐的魅力与氛围。萧敬腾、A-Lin、陈粒等音乐人相继亮相音乐现场，更有来自OPPO Reno校园造乐节前三强现场演出自己的原创作品。<br /> </p>
				<img src="../../assets/img/phone02.jpg" />
				<img src="../../assets/img/phone03.jpg" />
				<p>　　当晚，原创召集人周杰伦、原创推荐人王俊凯领衔，萧敬腾、李荣浩、华晨宇等众多顶级华语乐坛音乐人汇聚现场。<br /> </p>
				<img src="../../assets/img/phone04.jpg" />
				<img src="../../assets/img/phone05.jpg" alt="" />
				<img src="../../assets/img/phone06.jpg" alt="" />
				<p>　　历经一个多月的专业征集和筛选，OPPO Reno华语原创十大金曲榜单在音乐盛典上正式公布。<br /></p>
				<img src="../../assets/img/phone07.jpg" alt="" />
				<p>　　OPPO Reno华语原创十大金曲榜单是由OPPO参与发起，浙江卫视、中国音像协会唱片工作委员会以及多位乐坛原创大咖联名推荐筛选，邀请大众乐迷参与评定，并由专业评审最终评选确定，是一份具备专业性、权威性及群众性的原创音乐榜单，对于中国原创音乐具有里程碑意义，更为未来的发展提供了坚实的基础。<br /> </p>
				<p>　　从白天的四大音乐现场，到晚上OPPOReno浙江卫视2019年中音乐盛典的盛大开启，OPPOReno造乐节掀起了一场原创歌手与万千乐迷以音乐为载体的全天候狂欢。<br /> </p>
				<img src="../../assets/img/phone08.jpg" alt="" />
				<p>　　作为OPPO Reno造乐节的发起方，OPPO希望通过这场音乐盛会，唤醒更多年轻原创音乐人的创作激情，鼓励更多优秀原创音乐走入大众，为华语乐坛积蓄力量、沉淀经典。在未来，OPPO也将继续以实际行动助力原创音乐发展，与行业专业力量一起为原创音乐提供更多支持与鼓励。<br /> </p>
			</div>	
		</section>
		<!---->	
			<div class="location">
				资讯  >  手机  >  手机资讯  >  正文
			</div>
			<div class="last_article pad">上一篇：夏日艺术之旅 vivo X27印象夏日艺术展正式开启</div>
			<div class="kong02"></div>
		<!--热门推荐-->
			<section class="hot pad">
				<div class="hot_titleBox">
					<span class="hot_title">热门推荐</span>
				</div>
				<ul v-for="(item,index) in list06">
					<li class="hot_li">
						<img :src="item.src" alt="" />
						<div class="hot_right">
							<p>{{item.p}}</p>
							<span class="name">{{item.name}}</span>
							<span class="date">{{item.date}}</span>
						</div>
					</li>
				</ul>
				
				
			</section>
			<div class="a"></div>
	
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list06:[]
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.list06=res.data.list06

		  		
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

<style scoped>
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
	.phone_tit{
		font-size: 1.5em;
		text-align: left;
		margin-top: 15px;
	}
	.tit_info{
		float:left;
		margin-top: 15px;
		margin-bottom: 20px;
		width: 100%;
	}
	.date_tag{
		color: #aaa;
		float: left;
		font-size: 0.9em;
	}
	.author{
		color:#6f9dc0;
		float: left;
		margin-left: 3%;
		font-size: 0.5em;
	}
	.phone_content p{
		float:left;
		text-align: left;
		font-size: 1.4em;
		line-height: 1.8em;
	}
	.phone_content img{
		width: 94%;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.location{
		width: 95%;
		background-color: #eee;
		color: #999;
		text-align: left;
		padding-bottom: 1%;
		padding-top: 1%;
		padding-left: 5%;
		margin-top: 30px;
		float: left;
		font-size: 1.2em;
		line-height: 2em;
		
	}
	.last_article{
		width:100%;
		font-size: 1.2em;
		height: 2.5em;
		line-height: 2.5em;
		text-align: left;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
    	white-space: nowrap;
	}
	.kong02{
		background-color: #eee;
		width: 100%;
		height: 10px;
		float: left;
	}
	.hot{
		float: left;
		width: 94%;
		padding-bottom: 5%;
		text-align: left;

		
	}
	.hot_titleBox{
		font-size: 1.6em;
		padding-top: 2%;
		padding-bottom: 2%;
		border-bottom: 1px solid #eee;
		
	}
	.hot_title{
		padding-bottom: 2%;
		border-bottom: 1px solid #558cb5;;
		
	}
	.hot_li{
		float: left;
		padding-top: 5%;
		padding-bottom: 5%;
		border-bottom: 1px solid #eee;
		
	}
	.hot_li img{
		width: 35%;
		float: left;
	}
	.hot_right{
		
		width: 65%;
		float:left;
	}
	.hot_right p{
		margin-bottom: 10%;
		margin-left: 5%;
		font-size: 1.3em;
	}
	.hot_right span{
		color: #999;
		font-size: 1.1em;
	}
	.name{
		float: left;
		margin-left: 5%;
	}
	.date{
		float: right;
		margin-right: 5%;
	}
	.a{
		float: left;
		height: 500px;
		background-color: red;
	}
</style>