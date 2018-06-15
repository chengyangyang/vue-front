<template>
    <div id="common">
        <div class="commonCell" v-for="(item,index) in resources" :key="index">
          <div class="cellTop">
            <a href="#">
              <img :src="item.url" alt="">
              <span class="clearFix">
                <em class="fl">{{item.movieType}}</em>
                <i class="fr">{{item.movieLevel}}</i>
              </span>
            </a>
          </div>
          <div class="cellTitle">
            <p class="movieName">{{item.movieName}}</p>
            <p class="movieType">{{item.movieArea}}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      resources:[],
    }
  },
  props:["resourceUrl"],
  mounted(){
    this.getResource();
  },
  methods:{
    getResource(){
      this.$get(this.resourceUrl.url).then((response) => {
        this.resources = response
      })
    }
  },
}
</script>
<style lang="less" scoped>
.commonCell{
  float: left;
  width: 140px;
  /*padding: 5px 11px 5px 12px;*/
  height: 260px;
  overflow: hidden;
  background: rgb(255,255,255);
  margin:10px 8px;
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
