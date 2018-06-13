<template>
    <div class="box">
      <div class="title" v-if="this.resourceUrl.isFirst">
        <b>{{this.resourceUrl.fuTitle}}</b>
        <span><i>{{this.resourceUrl.updateNum}}</i>部更新</span>
      </div>

      <div class="title" v-else>
        <b>{{this.resourceUrl.fuTitle}}</b>
        <a>更多>></a>
      </div>

      <ul class="list">
        <li v-for="(item,index) in resources" :key="index"><a href="">{{item.name}}</a><span>{{item.date}}</span></li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "resources-list",
    data(){
        return {
          resources:[]
        }
    },
    methods:{
      getResource(){
        this.$get(this.resourceUrl.url).then((response) => {
          this.resources = response
        })
      }
    },
    mounted(){
      this.getResource();
    },
    props:["resourceUrl"]

  }
</script>

<style lang="less" scoped>
.box{
  width: 298px;
  border: 1px solid #EDEDED;
  background-color: #fff;
  clear: both;
  .title{
    height: 40px;
    line-height: 40px;
    a{
      color: #525252;
      float: right;
      text-decoration-line: none;
      font-size: 14px;
      padding-right: 14px;
    }
    a:hover{
      color: #15CF87;
      float: right;
      text-decoration-line: none;
      padding-right: 14px;
    }
    b{
      border-left: 6px solid #16CF88;
      text-indent: 20px;
      float: left;
      font-weight: 400;
      font-size: 16px;
      color: #15CF87;
      display: block;
    }
    span{
      float: right;
      font-size: 14px;
      padding-right: 14px;
      i{
        font-style: normal;
        color: #FF672D;
      }
    }
  }
  .list{
    padding: 3px 20px;
    li{
      height: 42px;
      line-height: 42px;
      span{
        font-size: 13px;
        color: #8B8B8B;
        float:right;
      }
      a{
        color: #525252;
        float: left;
        text-decoration-line: none;
        font-size: 14px;
      }
      a:hover{
        color: #15CF87;
        float: left;
        text-decoration-line: none;
      }
    }
}
}

</style>
