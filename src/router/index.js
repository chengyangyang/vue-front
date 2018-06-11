import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'     //头部
import footer from '@/components/footer'     //底部
import common from '@/components/common'     //通用模块
import resourcesList from '@/components/resourcesList'     //通用模块
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',      //顶部导航
      name: 'header',
      component: header
    },
    {
      path: '/footer',               //底部版权
      name: 'footer',
      component: footer
    },
    {
      path: '/common',               //通用模块
      name: 'common',
      component: common
    },
    {
      path: '/resourcesList',               //今日更新资源
      name: 'resourcesList',
      component: resourcesList
    },
  ]
})
