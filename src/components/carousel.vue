<template>
  <div class = "section3">
    <b>2017每周热门</b>
    <div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <span v-for="(items,index1) in item" :key="index1">
            <commonDiv></commonDiv>
          </span>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import commonDiv from './commonIndex'     //电影模块
    export default {
      name: "carousel",
      components:{
        commonDiv
      },
      data(){
          return{
              list:[1,2,3,4,5,6,7,8,9,10]
          }
      },
      methods:{
        //组装数据
        getResource(array,size){
          var result = [];
          for(var i = 0;i< Math.ceil(array.length/size);i++){
              var start = i * size;
              var end = start + size;
              result.push(array.slice(start,end));
          }
          return result;
        }
      },
      mounted(){
        this.list = this.getResource(this.list,5);
        console.log(this.list)
      }
    }
</script>

<style lang="less" scoped>
  .section3 {
    width: 785px;
    border: 1px solid #EDEDED;
    b {
      height: 40px;
      border-left: 6px solid #16CF88;
      text-indent: 20px;
      font-weight: 400;
      font-size: 16px;
      color: #15CF87;
      display: inline-block;
      line-height: 40px;
      }
    ul{
      width: 100%;
      li{
        width: 32%;
        line-height: 280px;
        display: inline-block;
        font-size: 16px;
        text-align: center;
        margin: 0px;
        padding: 0px;
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

</style>
