import Vue from 'vue'
import App from './App.vue'
//vue文件自动去node_modules文件夹寻找
import VueRouter from 'vue-router'

import router from './js/router.js' 
import './assets/css/base.css'
import '../node_modules/mint-ui/lib/style.css'
import './assets/css/head.css'
import axios from 'axios'
Vue.prototype.$http=axios

 import Mint from 'mint-ui'; 
 Vue.use(Mint);

// 当前路径 ./
/*直接在html里引入iconfont.js,否则报错,无法识别
import './js/iconfont.js'*/

//配置每个实例对象可以使用vue
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
