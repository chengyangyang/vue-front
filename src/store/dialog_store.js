
import { increment } from './mutation-types'
export default {
  //类似于存储全局变量的数据
  namespaced:true,
  state: {
    show: false,
    testList:['消消',"乐乐","憨憨"],
    count:1
  },
  //提供存储设置state数据的方法
  mutations: {
    switch_dialog (state) { // 这里的state对应着上面这个state
      state.show = !state.show
      // 你还可以在这里执行其他的操作改变state
    },
    // 加1
    [increment](state,param) {//第二个数可以作为参数传递
      state.count += param;

    },
    // 减1
    decrement(state) {
      state.count--
    }
  },
  //提供和后台接口打交道的方法，并调用mutations提供的方法,官方推荐 , 将异步操作放在 action 中。
  actions: {
    switch_dialog (context) { // 这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog')
      // 你还可以在这里触发其他的mutations方法
    },
    increment(context) {//第二个参数可以当做参数传递
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    }
  },
  //提供用来获取state数据的方法
  getters: {
    not_show (state) { // 这里的state对应着上面这个state
      return !state.show
    },
    getTest(state,getters){//这里也可以添加第二参数,getters中的方法
      return state.count +"=="+ getters.not_show;
    },
    getParamer:(state,getters) =>(id) =>{//也可以通过传递参数
      return state.count +"=="+ getters.not_show +"===="+id;
    }
  }
}
