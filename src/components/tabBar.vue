<template>
    <div id="tabBar">
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
</template>

<script>
export default {
  data () {
    return {
      clickIndex:0,
      titleType:["全部","动作片","喜剧片","爱情片","科幻片","恐怖片","剧情片","战争片","微电影"],
      titleArea:["全部","大陆","香港","大陆","香港","大陆","香港","大陆","香港","大陆","香港","大陆","香港"],
      titleTime:["全部","2017","2018","2019","2010","2011","2012","2013"],
      titleLevel:["时间","人气","评分"]
    }
  },
  methods:{
    typeChange(index){
      this.clickIndex = index;
    }
  }
}
</script>
<style lang="less" scoped>
#tabBar{
  width: 100%;
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

</style>
