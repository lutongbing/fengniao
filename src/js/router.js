//vue文件自动去node_modules文件夹寻找
import VueRouter from 'vue-router'

import first from '../components/index/first.vue'
import message from '../components/index/message.vue'
import discuss from '../components/index/discuss.vue'
import picBar from '../components/index/picBar.vue'
import photos from '../components/index/photos.vue'
import activity from '../components/index/activity.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import search from '../components/search/search.vue'
import map from '../components/map/map.vue'
import phone from '../components/phone/phone.vue'
import quick_login from '../components/login/quick_login.vue'

export default new VueRouter({
	routes:[
		{
			path:'/',redirect:'/first'
		},
		{
			path:'/first',component:first
		},
		{
			path:'/message',component:message
		},
		{
			path:'/discuss',component:discuss
		},
		{
			path:'/picBar',component:picBar
		},
		{
			path:'/photos',component:photos
		},
		{
			path:'/activity',component:activity
		},
		{
			path:'/login',component:login
		},
		{
			path:'/register',component:register
		},
		{
			path:'/search',component:search
		},
		{
			path:'/map',component:map
		},
		{
			path:'/phone',component:phone
		},
		{
			path:'/quick_login',component:quick_login
		}
		
	]
})
