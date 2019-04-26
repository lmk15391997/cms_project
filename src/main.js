// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置MintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
//引入自己的css
import './assets/css/global.css'
//引入自己的ul和li组件
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
//注册全局组件
Vue.component(MyUl.name,MyUl)
Vue.component(MyLi.name,MyLi)
// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'http://api.tianapi.com/dongman/?key=63e51670fa2212db538d0560c5e5b584'
Axios.defaults.headers.post['Content-Type'] = 'text/plain'
Vue.prototype.$axios = Axios

// 安装插件 注册全局组件及挂载属性
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
