<template>
    <div id="header">
      <div class="headBox clearFix">
        <div class="headLogo pl">
          <img src="../../static/images/logo.png" alt="">
        </div>
        <div class="headIntro pl">
          <a href="#">
            <i class="i-hot movie"></i>
            <span>电影</span>
          </a>
          <a href="#">
            <i class="i-hot tele"></i>
            <span>连续剧</span>
          </a>
          <a href="#">
            <i class="i-hot peat"></i>
            <span>求片</span>
          </a>
        </div>
        <div class="headSearch pl">
            <div class="searchBox">
              <input type="text" placeholder="更多精彩大片请输入名称搜索>>">
              <button>搜索</button>
            </div>
        </div>
      </div>
      <!--顶部导航-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff"  active-text-color="#15CF87">
        <el-menu-item index="/index"><router-link to="/index">首页</router-link></el-menu-item>
        <el-menu-item index="/movie"><router-link to="/movie">电影</router-link></el-menu-item>
        <el-menu-item index="/shap"><router-link to="/shap">电视剧</router-link></el-menu-item>
        <el-menu-item index="4"><a href="#">综艺</a></el-menu-item>
        <el-menu-item index="5"><a href="#">动漫</a></el-menu-item>
        <el-menu-item index="6" disabled> </el-menu-item>
        <el-menu-item index="7" disabled> </el-menu-item>
        <el-menu-item index="8">动作片</el-menu-item>
        <el-menu-item index="9">喜剧片</el-menu-item>
        <el-menu-item index="10">爱情片</el-menu-item>
        <el-menu-item index="11">科幻片</el-menu-item>
        <el-menu-item index="12">恐怖片</el-menu-item>
        <el-menu-item index="13">剧情片</el-menu-item>
        <el-menu-item index="14">战争片</el-menu-item>
        <el-menu-item index="15">国产剧</el-menu-item>
        <el-menu-item index="16">港台剧</el-menu-item>
        <el-menu-item index="/mytest"><router-link to="/mytest">我的测试</router-link></el-menu-item>
        <!--<el-menu-item index="18">欧美剧</el-menu-item>-->
      </el-menu>
      <!--<keep-alive> 页面只加载一次,一个页面加载,可能就会出现,路由参数不变的情况-->
        <router-view/>
      <!--</keep-alive>-->
      <footDiv></footDiv>
    </div>
</template>

<script>
  import footDiv from '@/components/footer'     //底部
export default {
  data () {
    return {
      activeIndex: this.$route.path   //默认导航选中
    }
  },
  components:{
    footDiv
  },
  methods:{
    handleSelect(key, keyPath) {
     // if(key == 2){
     //   this.$router.push({name:'movie'});
     // }
    }
  },
  mounted(){

  }
}
</script>

<style scoped lang="less">
#header{
   width:100%;
   background:rgb(255,255,255);
  .headBox{
    height:100px;
    border-bottom:2px solid rgb(135,135,135);
     .headLogo{
       padding:15px 0 0 100px;
       text-aligin:center;
       img{
         width: 190px;
         height: 70px;
       }
     }
      .headIntro{
        /*padding:0 30px;*/
        margin:25px 100px 0 65px;
        a{
          display: inline-block;
          text-decoration: none;
          width: 100px;
          height: 50px;
          i{
            width: 32px;
            height: 32px;
            display: inline-block;
            margin-top: 5px;
            background: url("../../static/images/plus.png") no-repeat;
          }
          :hover{
            filter: alpha(opacity=70);
            -moz-opacity: 0.7;
            opacity: 0.7;
            -webkit-transform: rotateZ(360deg);
            -moz-transform: rotateZ(360deg);
            -o-transform: rotateZ(360deg);
            -ms-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
            -webkit-font-smoothing: antialiased;
            -webkit-transition: -webkit-transform 0.5s ease-out;
          }
          i:first-child{
            background-position: 0 0;
          }
          i.tele{
            background-position: -32px 0;
          }
          i.peat{
            background-position: -64px 0;
          }
          span{
            margin: 8px 0 0 3px;
            display: inline-block;
            vertical-align: top;
            color: rgb(135,135,135);
            height: 32px;
            line-height: 32px;
          }
        }
      }
      .headSearch{
        text-align: center;
        margin-top:30px;
        input{
          width: 400px;
          height: 40px;
          line-height: 40px;
          border: 2px solid rgb(4,184,144);
          padding: 0 5px;
          float: left;
          outline: 0;
        }
        button{
          width: 80px;
          height: 40px;
          background: rgb(4,184,144);
          border:1px solid rgb(4,184,144);
          color: #fff;
          float: left;
          outline: 0;
          border-top-right-radius:5px;
          border-bottom-right-radius:5px;
        }
      }
  }
}
/*导航栏菜单*/
.el-menu-demo{
  padding: 0 30px;
  height: 52px;
.el-menu-item{
  height: 50px;
  line-height: 50px;
  a{
    width: 100%;
    height: 100%;
    display: block;
  }
}
}
.is-disabled{
   border-left: 6px solid transparent;
}
/*.headBox {*/
  /*height: 100px;*/
  /*border: 1px solid red;*/
/*}*/

</style>
