<template>
  <div class="box">
    <div class="title">
      <span>{{this.resourceUrl.fuTitle}}</span><a>更多>></a>
    </div>
    <ul class="list">
      <li  v-for="(item,index) in resources" :key="index">
        <a href="">{{item.name}}</a><i>{{item.date}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        resources:[]
      }
    },
    methods:{
      getResources(){
        this.$get(this.resourceUrl.url).then(response=>{
          this.resources = response
        })
      }
    },
    mounted(){
      this.getResources()
    },
    props:["resourceUrl"]
  }
</script>

<style lang="less" scoped>
.box{
  margin: 0px auto;
  width: 785px;
  height: 610px;
  overflow: hidden;
  border: 1px solid #EDEDED;
  .title{
    height: 40px;
    line-height: 40px;
    span{
      text-indent: 20px;
      float: left;
      border-left: 6px solid #16CF88;
      font-weight: 400;
      font-size: 16px;
      color: #15CF87;
    }
    a{
      float:right;
      padding-right: 14px;
      font-size: 12px;
    }
    a:hover{
      color: #15CF87;
      cursor:pointer;
    }
  }
  .list{
    padding: 5px 0px;
    clear: both;
    li{
      height: 42px;
      float: left;
      width: 50%;
      padding-left: 25px;
      padding-right: 25px;
      line-height: 42px;
      a{
        font-size: 15px;
        color: #525252;
        text-decoration: none;
        width: 85%;
        display: inline-block;
        height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      a:hover{
        color: #15CF87;
      }
      i{
        font-style: normal;
        font-size: 12px;
        color: #8B8B8B;
        text-decoration: none;
        float: right;
      }

    }
  }
}

</style>
