//import {post,get,patch,put} from './http'

export default{
  getLocalData() { // 请求本地数据
    this.get('../../static/data/shap.json').then((response) => {
      console.log(response)
      this.shapList = response
    }).catch(error=>{
      alert("请求错误")
    })
  }
}
