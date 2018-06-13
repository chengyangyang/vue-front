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
              <ul>
                <li>
                  <span>类型：</span>
                   <a href="#" v-for="(item,index) in titleType" :key="index" :class="{'curr':index===clickIndex}" @click="typeChange(index)">
                     {{ item }}
                   </a>
                </li>
                <li>
                  <span>地区：</span>
                  <a href="#" v-for="(item,index) in titleArea" :key="index">
                    {{ item }}
                  </a>
                </li>
                <li>
                  <span>时间：</span>
                  <a href="#" v-for="(item,index) in titleTime" :key="index">
                    {{ item }}
                  </a>
                </li>
                <li>
                  <span>排行：</span>
                  <a href="#" v-for="(item,index) in titleLevel" :key="index">
                    {{ item }}
                  </a>
                </li>
              </ul>
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
          </div>
       </div>
      <footDiv></footDiv>
    </div>
</template>

<script>
  import headDiv from '@/components/header'     //头部
  import footDiv from '@/components/footer'     //底部
  import commonDiv from '@/components/common'     //电影模块
  export default {
  data () {
    return {
      name:"我是movie页面",
      clickIndex:0,
      titleType:["全部","动作片","喜剧片","爱情片","科幻片","恐怖片","剧情片","战争片","微电影"],
      titleArea:["全部","大陆","香港","大陆","香港","大陆","香港","大陆","香港","大陆","香港","大陆","香港"],
      titleTime:["全部","2017","2018","2019","2010","2011","2012","2013"],
      titleLevel:["时间","人气","评分"]
    }
  },
  components:{
    headDiv,
    footDiv,
    commonDiv
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
        ul{
          width: 100%;
          padding: 5px 10px;
          height: 100%;
          li{
            clear: both;
            line-height: 24px;
            height: 24px;
            padding: 18px 10px;
            color: #A1A4A9;
            span{
              float: left;
              padding-right: 10px;
              color: #535353 !important;
              font-size: 16px;
            }
            a{
              float: left;
              padding: 0 10px;
              display: block;
              height: 24px;
              line-height: 24px;
              color: #7D7D7D !important;
              text-decoration: none;
            :hover{
              text-decoration: none;
              color: #fff;
              background: #1AD690;
            }
            }
          .curr{
            text-decoration: none;
            color: #fff !important;
            background: #1AD690;
          }
          }
        }
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
