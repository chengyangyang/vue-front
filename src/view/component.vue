<template>
  <div id="compent">
    <h2>多彩标签</h2>
    <!--多彩tabel-->
    <div class="tabBar">
      <ul>
        <li v-for="(item,index) in listBar" :key="index" :style="{background: item.color}" @click="changeColor(index)">{{item.title}}</li>
      </ul>
    </div>
    <!--<button @click="clickMe">点击我</button>-->
    <!--点赞-->
    <h2>点赞</h2>
    <div class="clickZan">
      <ul>
        <li class="clearFix" v-for="(item,index) in zanList" :key="index">
          <div class="fl imgLogo">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="fr title">
            <div class="fl titleName">{{item.title}}</div>
            <div class="fl">
              <div>{{item.count}}</div>
              <div class="circle" :class="{active:item.isActive}" @click="clickZan(item)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--图片放大-->
    <h2>图片放大</h2>
    <div class="testImg">
      <img src="../assets/logo.png" alt="" :style="scaleImg" @click="scale">
    </div>
    <h2>todoList举例</h2>
    <div class="toDo">
      <ul>
        <li v-for="(item,index) in todoData"><span style="font-weight: bold;margin: 0px 8px">{{index}}.</span>{{item}}</li>
      </ul>
      <div  class="addBtn"  @click = "$store.commit('dialog/addTo')">+</div>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        scaleImg:{
          transform:''//设置缩放比例
        },
        zanList:[
          {
            title:"我是哈哈",
            count:22,
            isActive:false
          },
          {
            title:"我是呱呱",
            count:34,
            isActive:false
          },
          {
            title:"我是喇叭",
            count:36,
            isActive:false
          },
        ],
        listBar: [
          {
            title: "进度一",
            color: "red"
          },
          {
            title: "进度二",
            color: "orange"
          },
          {
            title: "进度三",
            color: "yellow"
          },
          {
            title: "进度四",
            color: "blue"
          },
          {
            title: "进度五",
            color: "purple"
          },
        ],
        a:1,
        todoData:''
      }
    },
    watch:{
      a:function (val,oldVal) {
        console.log(val);
        console.log(oldVal);
      }
    },
    mounted () {
      this.todoData = this.$store.state.dialog.testList;
    },
    components: {},
    methods: {
      clickMe(){
        this.a++;
      },
      //变色
      changeColor(index){
        this.listBar[index].color = "black";
      },
      //点赞
      clickZan(item){
        item.isActive = !item.isActive;
        if(item.isActive){
          item.count++;
        }else{
          item.count--;
        }
      },
    //  放大
      scale(){
        if(this.scaleImg.transform == '' || this.scaleImg.transform == "scale(1)"){
          this.scaleImg.transform = "scale(2)";
        }else{
          this.scaleImg.transform = "scale(1)"
        }
      },
      //添加todoList
      addTo(){

      }
    }
  }
</script>
<style scoped lang="less">
  #compent {
    width: 1200px;
    margin: 0px auto;
  .tabBar {
    width: 100%;
    ul{
      width: 100%;
      li{
        width: 20%;
        float: left;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
      }
    }
  }
  .clickZan{
    width: 600px;
    margin: 0px auto;
    padding: 20px;
    border:2px solid red;
    ul{
      width: 100%;
      li{
        width: 100%;
        margin-top:20px;
        .imgLogo{
          width: 50px;
          height: 50px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .title{
          .titleName{
            margin-right: 20px;
          }
          .circle{
            width: 20px;
            height: 20px;
            background:greenyellow ;
            border: 1px solid greenyellow;
            border-radius: 20px;
          }
        }
      }
    }
  }
  .testImg{
    text-align: center;
    width: 400px;
    height: 200px;
    border: 2px solid red;
    margin: 0px auto;
  }
  .active{
    background: red !important;
  }
  .toDo{
    width: 600px;
    background:rgb(240,240,240);
    padding: 20px 0;
    border: 2px solid rgb(241,241,241);
    position: relative;
    margin: 0px auto;
    ul{
      width: 100%;
      li{
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        list-style-type: none;
      }
    }
  .addBtn{
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 40px;
    font-weight: bold;
    width: 40px;
    height: 40px;
    text-align:center;
    line-height:27px;
    border: 2px solid red;
    border-radius: 40px
  }
  }
  }
</style>
