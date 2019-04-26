import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import NewsList from '@/components/News/NewsList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      //首先进行重定向的操作
      path:"/",
      redirect: {name: 'home'},
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    //新闻列表
    {
      name:'news.list',
      path:'/news/list',
      component: NewsList
    }
  ]
})
