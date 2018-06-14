<template>
    <div id="movie">
       <headDiv></headDiv>
       <div class="movieContent container clearFix">
          <div class="leftBar fl">
            <el-row class="tac">
                <h6>快速导航</h6>
                <el-menu  default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" active-text-color="#15CF87">
                  <el-menu-item index="1">
                    <span slot="title">电影</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <span slot="title">连续剧</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <span slot="title">综艺</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">动漫</span>
                  </el-menu-item>
                </el-menu>
            </el-row>
          </div>
          <div class="rightMovie fr">
            <div class="movieBar">
              <tabBar></tabBar>
            </div>
            <div class="movieType clearFix">
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
              <commonDiv></commonDiv>
            </div>
            <div class="block" style="border: 1px solid  #E6E6E6;background: rgb(255,255,255);padding: 15px;text-align: center">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </div>
          </div>
       </div>
      <footDiv></footDiv>
    </div>
</template>

<script>
  import headDiv from '@/components/header'     //头部
  import footDiv from '@/components/footer'     //底部
  import tabBar from '@/components/tabBar'
  import commonDiv from '@/components/common'     //电影模块
  export default {
  data () {
    return {
      name:"我是movie页面",
      currentPage4: 4
    }
  },
  components:{
    headDiv,
    footDiv,
    tabBar,
    commonDiv
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    typeChange(index){
      this.clickIndex = index;
    }
  }
}
</script>
<style scoped lang="less">
#movie{
   width:100%;
   background:rgb(249,249,249);
  .movieContent{
    margin-top: 25px;
    .leftBar{
      width: 185px;
      height: 300px;
      border: 1px solid #E6E6E6;
      background: rgb(255,255,255);
      h6{
        height: 40px;
        line-height: 40px;
        text-indent: 20px;
        border-left: 6px solid #16CF88;
        font-weight: 400;
        font-size: 16px;
        color: #15CF87;
        background: rgb(255,255,255);
        margin: 5px 0;
      }
    }
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
