import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'     //头部
import footer from '@/components/footer'     //底部
import tabBar from '@/components/tabBar'     //底部
import common from '@/components/common'     //通用模块
import commonIndex from '@/components/commonIndex'     //通用模块
import resourcesList from '@/components/resourcesList'     //通用模块
import leftBar from '@/components/leftBar'
import pageNation from '@/components/pageNation'
import shap from '@/components/shap'
import contentList from '@/components/contentList'
import carousel from '@/components/carousel'
import index from '@/view/index'
import movie from '@/view/movie'
import movieDetail from '@/view/movieDetail'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/leftBar',
      name: 'leftBar',
      component: leftBar
    },
    {
      path: '/tabBar',
      name: 'tabBar',
      component: tabBar
    },
    {
      path: '/header',      //顶部导航
      name: 'header',
      component: header
    },
    {
      path:'/pageNation',
      name:pageNation,
      component:pageNation
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
      path: '/commonIndex',               //通用模块
      name: 'commonIndex',
      component: commonIndex
    },
    {
      path: '/resourcesList',               //今日更新资源
      name: 'resourcesList',
      component: resourcesList
    },
    {
      path: '/shap',               //今日更新资源
      name: 'shap',
      component: shap
    },
    {
      path: '/contentList',               //今日更新资源
      name: 'contentList',
      component: contentList
    },
    {
      path: '/',      //首页
      name: 'index',
      component:index
    },
    {
      path: '/movie',      //电影
      name: 'movie',
      component:movie
    },
    {
      path:'/movieDetail',
      name:'movieDetail',
      component:movieDetail
    },
    {
      path: '/carousel',
      name: 'carousel',
      component:carousel
    }
  ]
})
