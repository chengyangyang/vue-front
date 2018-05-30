<template>
    <div class="shap">
      <div class="shap-head">我的购物车</div>
      <div class="shap-body" v-for="(item,index) in shapList" :key="index">
        <div class="shap-content">
          <div class="shap-content-checkboxs"><input type="checkbox"/></div>
          <div class="shap-content-img-box">
            <div class="shap-content-img"><img v-bind:src="item.imgPath"/></div>
          </div>
          <div class="shap-content-sp">
            <div>
              <p class="shap-content-title">{{item.shapName}}</p>
              <p class="shap-content-title">{{item.shapType}}</p>
            </div>
            <div class="shap-content-button">
              <div class="shap-content-foot-left"><div class="shap-foot-money">￥100</div></div>
              <div class="shap-content-foot-right">
                <button class="shap-content-foot-num">-</button>
                <button class="shap-content-foot-num shap-content-foot-num-cent">{{item.num}}</button>
                <button class="shap-content-foot-num">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'shap',
  data: function () {
    return {
      shapList: [
        { imgPath: '../../static/images/1511146983144371.jpg',
          shapName: '一个美丽的图片',
          shapType: '新物种',
          money: '1001',
          num: '11'
        },
        { imgPath: '../assets/1511146983144371.jpg',
          shapName: '一个美丽的图片',
          shapType: '新物种',
          money: '1002',
          num: '12'
        },
        { imgPath: '../assets/1511146983144371.jpg',
          shapName: '一个美丽的图片',
          shapType: '新物种',
          money: '1003',
          num: '13'
        },
        { imgPath: '../assets/1511146983144371.jpg',
          shapName: '一个美丽的图片',
          shapType: '新物种',
          money: '1004',
          num: '14'
        },
        { imgPath: '../assets/1511146983144371.jpg',
          shapName: '一个美丽的图片',
          shapType: '新物种',
          money: '1005',
          num: '15'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .shap{
    background-color: azure;
    width: 350px;
    height: 500px;
    margin: auto;
  }
  .shap-head{
    background-color: darkgray;
    width: 350px;
    height: 40px;
    line-height: 40px;
  }
  .shap-content{
    background-color: antiquewhite;
    width: 350px;
    height: 100px;
    margin-top: 20px;
  }
  .shap-content-checkboxs{
    height: 100px;
    width: 50px;
    line-height: 100px;
    float: left;
  }
  .shap-content-img-box{
    height: 100px;
    width: 100px;
    float: left;
  }
  .shap-content-img{
    height: 80px;
    width: 80px;
    margin: 10px auto;
    border-style: ridge;
  }
  .shap-content-sp{
    text-align: left;
    float: left;
    height: 100px;
    width: 200px;
    position: relative;
  }
  .shap-content-title{
    margin-top: 2px;
    margin-bottom: 0px;
  }
 .shap-content-button{
   width: 200px;
   height: 50px;
   position: absolute;
   bottom: 0px;
 }
  .shap-content-foot-left{
    width: 120px;
    height: 50px;
    float: left;
  }
  .shap-content-foot-right{
    height: 30px;
    float: left;
    margin-top: 20px;
  }
  .shap-foot-money{
    margin-top: 20px;
  }
  .shap-content-foot-num{
    float: left;
    width: 20px;
    height: 20px;
    border: 1px solid black;
  }
  .shap-content-foot-num-cent{
    border-left-style: none;
    border-right-style: none;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
