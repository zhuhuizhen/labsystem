import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dashboard from '@/components/dashboard/view'
import OrgManage from '@/components/orgManage/view'
import RegionManage from '@/components/regionManage/view'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/dashboard',
          component: Dashboard
        },
        {
          path: '/orgManage',
          component: OrgManage
        },
        {
          path: '/regionManage',
          component: RegionManage
        },
        {
          path: '/test',
          component: Test
        }
      ]
    }
  ]
})
