exports.install = function (Vue, options) {
  Vue.prototype.service= {
    getUserInfo(v){
      return "a";
      //v.axios...
    }
  }
}
