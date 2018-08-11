import Vue from 'vue'
import Vuex from 'vuex'
import dialog_store from './dialog_store.js'
import other from './other.js'
Vue.use(Vuex)// 引入某个store对象
export default new Vuex.Store({
  modules: {
    dialog: dialog_store,
    other: other,//其他组件
  }
})


