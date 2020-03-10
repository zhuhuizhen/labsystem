import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Goods from '@/components/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path:'/goods',
        component:Goods
      }]
    }
  ]
})
