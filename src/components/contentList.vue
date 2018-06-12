<template>
  <div class="box">
    <div class="title">
      <span>2017年电影推荐</span><a>更多>></a>
    </div>
    <ul class="list">
      <li>
        <div class="li-left libox"><a href="">美国喜剧片《你好中世纪》</a><i>06-12</i></div>
        <div class="li-right libox"><a href="">美国喜剧片《你好中世纪》</a><i>06-12</i></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
.box{
  margin: 20px auto;
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
    padding: 5px 20px;
    clear: both;
    li{
      height: 42px;
      .li-left{
        padding-right: 35px;
        float: left;
      }
      .li-right{
        padding-left: 35px;
        float: right;
      }
      .libox{
        width: 371px;
        line-height: 42px;
        color: #525252;
        i{
          font-style: normal;
          font-size: 12px;
          color: #8B8B8B;
          text-decoration: none;
          float: right;
        }
        a{
          font-size: 15px;
          color: #525252;
          text-decoration: none;
        }
        a:hover{
          color: #15CF87;
        }
      }
    }
  }
}

</style>
