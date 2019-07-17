<template>
	<div>
	<!--导航-->
		<my-nav></my-nav>
	<!--头部-->
		<header>
			<section class="headerSec">
				<p class="header_title">手机快速登录</p>
				<router-link to="/login"><a class="header_link">账号密码登录 </a></router-link>
			</section>
		</header>
	<!--手机登录表单-->
	<section class="quick_box">
			<ul class="quick_ul">
				<li class="quick_li">
					<input type="text" id="phone" class="telephone" placeholder="输入11位大陆手机密码">
					<span class="get_code">获取验证码</span>
				</li>
				<li class="quick_li">
					<input type="text" id="code" class="code" placeholder="输入短信验证码">
					
				</li>
				<li class="quick_li">
					<p class="agree">
						温馨提示：未注册蜂鸟账号的手机号，用手机登录默认为自动注册，且代表您已同意
						<span class="agreement">《蜂鸟用户注册协议》</span> 
					</p>
				</li>
				<li class="quick_li">
					<button class="login_btn" @click="check()">登录</button>
					<p class="tip">{{p}}</p>
				</li>
				
			</ul>
		</section>
		
		
	</div>
</template>

<script>
	import Nav from '../nav/nav.vue'
	export default{
		data(){
			return{
				p:""
			}
			
		},
		methods:{
			check(){
				if(phone.value==""){
					this.p="请输入手机号"
				}else if(code.value==""){
					this.p="请输入验证码"
				}
			}
		},
		components:{
			'my-nav':Nav
		}
	}
</script>

<style scoped>
	.headerSec{
		width: 100%;
		font-size:16px;
		border-bottom: 1px solid #eee;
		background-color: white;
		font-weight: normal;
		overflow:hidden;
		line-height: 40px;
	}
	.tip{
		margin-top: 2%;
		color: red;
	}
	.header_title{
		width: 45%;
		float: left;
		font-size: 1em;
		text-align: left;
		padding-left: 5%;
	}
	.header_link{
		display: block;
		width: 33%;
		float: right;
		/*border-left: 1px solid #eee;*/
		padding-left: 1%;
		color: #78add6;
		font-size: 1em;
	}
	.quick_box{
		width: 100%;
		height:600px;
		background-color: #f7f7f7;
		padding-top: 5%;
	}
	.tel{
		width: 100%;
		
	}
	.telephone{
		width: 45%;
		height: 38px;
		padding: 0 9px;
	    outline:0 none;
	    border: 1px solid #ddd;
	    background: #fff;
	    font-size: 14px;
	    float: left;
	    margin-left: 10%;
	}
	.get_code{
		width: 30%;
		height: 38px;
	    border: 1px solid #ddd;
	    border-left: none;
	    background: #fff;
	    font-size: 14px;
	    line-height: 38px;
	    float: left;
	    color: #999;
	}
	.code{
		width: 75%;
		height: 38px;
		padding: 0 9px;
	    outline:0 none;
	    border: 1px solid #ddd;
	    background: #fff;
	    font-size: 14px;
	    
	}
	
	input::-webkit-input-placeholder{
		color: #999999;
	}
	.code{
		margin-top: 5%;
	}
	.agree{
		width: 80%;
		margin-left: 10%;
		margin-top: 5%;
		text-align: left;
		color: #999;
	}
	.agreement{
		color: #78add6;;
	}
	.login_btn{
		width: 80%;
		height: 38px;
		margin-top: 3%;
		color: white;
		background-color: #78add6;
		border: 0 none;
	}
	.a{
		float: left;
		margin-left: 3%;
	}
	
</style>