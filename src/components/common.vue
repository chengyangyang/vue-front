<template>
    <div id="common">
        <div class="commonCell">
          <div class="cellTop">
            <a href="">
              <img src="../../static/images/common1.jpg" alt="">
              <span class="clearFix">
                <em class="fl">科幻片</em>
                <i class="fr">5.1</i>
              </span>
            </a>
          </div>
          <div class="cellTitle">
            <p class="movieName">TS抢先版《游侠索罗》</p>
            <p class="movieType">科幻片-美国电影</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.commonCell{
  float: left;
  width: 156px;
  padding: 5px 11px 5px 12px;
  height: 260px;
  overflow: hidden;
  .cellTop{
    width: 100%;
    height: 200px;
    position: relative;
    a{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
      span{
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 30px;
        left: 0px;
        bottom: 0px;
        padding: 0 5px;
        line-height: 30px;
        color: #fff;
        background: rgba(0,0,0,0.5);
        font-size:12px;
        i{
          color: #FF672D;
        }
      }
    }

  }
  .cellTitle{
    width: 100%;
    height: 60px;
    p.movieName{
      line-height: 28px;
      height: 28px;
      text-align: center;
      padding: 3px 0 3px;
      margin: 0;
      display: block;
      overflow: hidden;
      font-size: 13px;
    }
    p.movieType{
      line-height: 30px;
      height: 30px;
      text-align: center;
      overflow: hidden;
      padding: 0 0 3px;
      margin: 0;
      display: block;
      font-size: 12px;
      color: rgb(136,136,136);
    }
  }
}

</style>
