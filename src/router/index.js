import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'     //头部
// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
const index = r => require.ensure([], () => r(require('@/view/index')), 'index');
const movie = r => require.ensure([], () => r(require('@/view/movie')), 'movie');
const movieDetail = r => require.ensure([], () => r(require('@/view/children/movieDetail')), 'movieDetail');
const shap = r => require.ensure([], () => r(require('@/components/shap')), 'shap');
const mytest = r => require.ensure([], () => r(require('@/view/mytest')), 'mytest');
const navigation = r => require.ensure([], () => r(require('@/components/common/navigation')), 'navigation');
// import index from '@/view/index'
// import movie from '@/view/movie'
// import movieDetail from '@/view/children/movieDetail'
// import shap from '@/components/shap'
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
        },
        {
          path:'/mytest', //我的个人测试
          name:'mytest',
          component:mytest
        },
        {
          path:'/compent', //我的个人测试
          name:'compent',
          component: resolve=>require(['@/view/component'],resolve)
        }
      ]
    },
    {
      path:'/shap', //电影详情页
      name:'shap',
      component:shap
    },
    {
      path:'/navigation', //我的导航
      name:'navigation',
      component:navigation
    }

  ]
})
