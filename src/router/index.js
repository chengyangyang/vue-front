import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'     //头部

import index from '@/view/index'
import movie from '@/view/movie'
import movieDetail from '@/view/children/movieDetail'
Vue.use(Router)
//如果页面是公用一个头部则可以将公共头尾写在app.vue中 否则可以头部为首页 其它页面为二级页面进行使用
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',      //顶部导航
      name: 'header',
      component: header,
      redirect:'/index',
      children:[
        {
          path: '/index',      //首页
          name: 'index',
          component:index
        },
        {
          path: '/movie',      //电影
          component:movie,
          name: 'movie',
        },
        {
          path:'/movieDetail', //电影详情页
          name:'movieDetail',
          component:movieDetail
        }
      ]
    }
  ]
})
