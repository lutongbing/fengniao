<template>
	<div>
		<!--导航-->
		<my-nav></my-nav>
		<!--头部-->
		<header>
			<section class="headerSec">
				<h3 class="header_title">登录</h3>
				<router-link to="/register"><a href="" class="header_link">注册 </a></router-link>
			</section>
		</header>
		<!--登陆表单-->
		<div class="login">
			<ul class="login_ul">
				<li class="login_li">
					<input type="text" name="username" id="usr" class="username" placeholder="手机号/用户名/邮箱">
				</li>
				<li class="login_li">
					<input type="password" name="psw" id="pwd"  class="psw" placeholder="请输入密码">
				</li>
				<li class="login_li">
					<p>{{p}}</p> 
					<button class="login_btn" @click="check()">登录</button>
					
				</li>
				<li class="login_li">
					<a href="" class="lastli">
					<span class="icon_shouji" >
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-shouji"></use>
						</svg>
					</span>
					<router-link to="/quick_login">
					<a href=""  class="shouji_link">手机快速登录</a>
					</router-link>
					<span class="a">无需密码也可登录</span> 
					</a>
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
				p:""
				
			}
			
		},
		methods:{
			check(){
				if(usr.value==""){
					this.p="请输入手机/邮箱/用户名"
				}else if(pwd.value==""){
					this.p="密码不能为空"
				}else{
					this.p=""
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
	.login{
		width: 100%;
		height:600px;
		background-color: #f7f7f7;
		padding-top: 5%;
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
	
	.tel{
		width: 100%;
		
	}
	.username,.psw{
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
	.psw{
		margin-top: 5%;
	}
	.login_btn{
		width: 80%;
		height: 38px;
		margin-bottom: 3%;
		color: white;
		outline:0 none;
		background-color: #78add6;
		border: 0 none;
	}
	.lastli{
		display: block;
		width: 80%;
		height: 15px;
		margin: 0 auto;
	}
	.icon_shouji{
		float: left;
		color: #78add6;
		font-size: 16px;
	}
	.shouji_link{
		float: left;
		margin-left: 3%;
		color: #78add6;
	}
	.a{
		float: left;
		margin-left: 3%;
	}
	.login_li p{
		margin-top: 8%;
		margin-bottom: 2%;
		color: red;
	}
</style>