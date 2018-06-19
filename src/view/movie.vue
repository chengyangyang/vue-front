<template>
  <div id="movie">
       <div class="movieContent container clearFix">
          <div class="leftBar fl">
            <leftBar></leftBar>
          </div>
          <div class="rightMovie fr">
            <div class="movieBar">
              <tabBar></tabBar>
            </div>
            <div class="movieType clearFix">
              <commonDiv :resourceUrl = "moviePage" v-on:headCallBack="movieCall"></commonDiv>
            </div>
            <div class="pageNation">
              <pageNation @current-page="currentPage" @page-size="pageSize"></pageNation>
            </div>
          </div>
       </div>
  </div>
</template>

<script>
  import leftBar from '@/components/leftBar'
  import tabBar from '@/components/tabBar'
  import commonDiv from '@/components/common'     //电影模块
  import pageNation from '@/components/pageNation'
  export default {
  data () {
    return {
      name:"我是movie页面",
      currentPage4: 4,
      moviePage:{"url":"../../static/data/comMovie.json"}
    }
  },
  components:{
    tabBar,
    leftBar,
    commonDiv,
    pageNation
  },
  methods: {
    movieCall(){
      this.$router.push("/movieDetail");
    },
    pageSize(currentSect){
      alert(currentSect)
    },
    currentPage(currentSect){
      alert(currentSect)
    },
  }
}
</script>
<style scoped lang="less">
#movie{
   width:100%;
   background:rgb(249,249,249);
  .movieContent{
    margin-top: 25px;
    .rightMovie{
      width: 897px;
      .movieBar{
        width: 100%;
        height: 230px;
        border: 1px solid #F0F0F0;
        background:rgb(255,255,255);
      }
      .movieType{
        margin-top: 20px;
        border:1px solid rgb(249,249,249);
        border: 1px solid #E6E6E6;
        border-top: 1px solid #16CF88;
        height: 100%;
        padding: 10px 0;

      }
    }
  }

}
.is-active{
  background: #16CF88;
  color: #fff !important;
}
.el-menu-item{
  text-align: center;
}
.el-menu-item span{
  font-size: 16px;
}
.el-menu-item:focus, .el-menu-item:hover{
  background: #16CF88;
  color: #fff !important;
}
</style>
