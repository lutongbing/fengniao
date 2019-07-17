<template>
	<div>
		<my-nav></my-nav>
		<!--左边-->
		<ul class="navBar_left">
			<li :class="{left_li:true,active:index==num}" v-for="(item,index) in tabs" @click="change(index)">{{item.title}}</li>
		</ul>
<!--		
		<ul class="navBar_left">
			<li class="left_li" @click="index=0">资讯</li>
			<li class="left_li" @click="index=1">论坛</li>
			<li class="left_li" @click="index=2">精选</li>
			<li class="left_li" @click="index=3">地方</li>
			<li class="left_li" @click="index=4">自建</li>
			<li class="left_li" @click="index=5">活动</li>
			<li class="left_li" @click="index=6">最近浏览</li>	
		</ul>
		-->
		<!--右边-->
		
		<ul class="navBar_right pad">
			<li class="right_li" >
				<!--资讯-->
			<router-link to="/message">
				<ul class="detail_ul" v-for="(item,index) in list09" v-show="num==0">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			<!--论坛-->
			<router-link to="/discuss">
				<ul class="detail_ul" v-for="(item,index) in list10" v-show="num==1">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			<!--精选-->
			<router-link to="/photos">
				<ul class="detail_ul" v-for="(item,index) in list11" v-show="num==2">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			<!--地方-->
			<router-link to="/activity">
				<ul class="detail_ul" v-for="(item,index) in list12" v-show="num==3">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			<!--自建-->
			<router-link to="/first">
				<ul class="detail_ul" v-for="(item,index) in list13" v-show="num==4">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			<!--活动-->
			<router-link to="/activity">
				<ul class="detail_ul" v-for="(item,index) in list14" v-show="num==5">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			<!--最近浏览-->
			<router-link to="/first">
				<ul class="detail_ul" v-for="(item,index) in list15"  v-show="index==6">
					<li class="detail_li">
						{{item.mes}}
					</li>
				</ul>
			</router-link>
			
			</li>
		</ul>
	</div>
</template>

<script>
	import Nav from '../nav/nav.vue'
	export default{
		data(){
			return{
				list09:[],
				list10:[],
				list11:[],
				list12:[],
				list13:[],
				list14:[],
				list15:[],
				tabs:[],
				num:0
			}
		},
		methods:{
			change(a){
				this.num=a;
				console.log(this.num)
			}
		},
		mounted(){
		  	var _this=this;
		  	this.$http.get('./data/data.json')
		  	.then(function(res){
		  		_this.list09=res.data.list09
		  		_this.list10=res.data.list10
		  		_this.list11=res.data.list11
		  		_this.list12=res.data.list12
		  		_this.list13=res.data.list13
		  		_this.list14=res.data.list14
		  		_this.list15=res.data.list15
		  		_this.tabs=res.data.tabs
		  		
		  	})
		  	.catch(()=>{
		  		
		  	})
		  	.finally((f)=>{
		  		console.log('请求结束了')
		  	})
		},
		components:{
			'my-nav':Nav
		}
	}
</script>

<style scoped>
	.pad{
		padding-left: 3%;
		padding-right: 3%;
	}
	.navBar_left{
		width: 32%;
    	height: auto;
    	float: left;
    	background-color: #f1f1f1;
	}
	.left_li{	
		font-size: 1.5em;
		padding-top: 8%;
		padding-bottom: 8%;
		/*border-bottom: 1px solid red;*/
	}
	.navBar_right{
		width: 62%;
		height: 100%;
		float: left;
		/*background-color: pink;*/
	}
	.detail_li{
    	border-bottom: 1px solid #eee;
		font-size: 1.3em;
		padding-top: 6%;
		padding-bottom: 6%;
		padding-left: 10%;
		text-align: left;
	}
	.active{
		background-color: red;
		background-color: white;
		border-left: 2px solid #d84c45;
	}
</style>