<template>
	<div>
		<!--导航-->
		<my-nav></my-nav>
		<!--头部-->
		<header>
			<section class="headerSec">
				<h3 class="header_title">注册账号</h3>
				<router-link to="/login"><a href="" class="header_link">登录 </a></router-link>
			</section>
		</header>
		
		<div class="sign">
			<ul class="sign_ul">
				<li class="sign_li">
					<input type="text" id="usr" class="username" placeholder="用户名： 2-14个字符，无特殊符号">
					<p>{{p1}}</p>
				</li>
				<li class="sign_li">
					<input type="text" id="psw" class="psw" placeholder="密码：6-16位数字、字母或字符">
					<p>{{p2}}</p>
				</li>
				<li class="sign_li">
					<input type="text" id="phone" class="phone" placeholder="手机号：11位大陆手机号">
					<p>{{p3}}</p>
				</li>
				<li class="sign_li">
					<input type="text" id="code" class="code" placeholder="验证码">
					<p>{{p4}}</p>
				</li>
				<li class="sign_li">
					<a href="" class="lastli">
					<span class="icon_dui" >
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-dui1"></use>
						</svg>
					</span>
					<span class="a">我已阅读并同意</span>
					<a href=""  class="dui_link">《蜂鸟用户注册协议》 </a> 
					</a>
				</li>
				<li class="sign_li">
					<button class="sign_btn" @click="check()">注册</button>
				</li>
				
			</ul>
		</div>
	
	
	</div>
</template>

<script>
	import Nav from '../nav/nav.vue'
	export default{
		data(){
			return{
				p1:"",
				p2:"",
				p3:"",
				p4:""
			}
		},
		methods:{
			check(){
				if(usr.value==""){
					this.p1="用户名不能为空，请输入2-14个字符，无特殊符号"
				}else if(psw.value==""){
					this.p2="密码不能为空"
				}else if(phone.value==""){
					this.p3="请输入电话号码"
				}else if(code.value==""){
					this.p4="请输入验证码"
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
	.header_title{
		width: 70%;
		float: left;
		font-size: 1em;
		text-align: left;
		padding-left: 5%;
	}
	.sign{
		width: 100%;
		height:600px;
		background-color: #f7f7f7;
		padding-top: 5%;
	}
	.sign_li>p{
		color: red;
	}
	.header_link{
		display: block;
		width: 10%;
		float: right;
		border-left: 1px solid #eee;
		padding-right: 3%;	
		padding-left: 2%;
		color: #78add6;
	}
	
	.username,.psw,.phone,.code{
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
	.psw,.phone,.code{
		margin-top: 5%;
	}
	.sign_btn{
		width: 80%;
		height: 38px;
		color: white;
		background-color: #78add6;
		border: 0 none;
	}
	.lastli{		
		display: block;
		width: 80%;
		height: 15px;
		margin: 0 auto;
		margin-top: 8%;
		margin-bottom: 3%;
	}
	.icon_dui{
		float: left;
		color: #78add6;
		font-size: 16px;
	}
	.dui_link{
		float: left;
		color: #78add6;
	}
	.a{
		float: left;
		color: grey;
	}
</style>