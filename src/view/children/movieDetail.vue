<template>
    <div id="movieDetail">
      <div class="detailContent container clearFix">
        <div class="leftBar fl">
          <leftBar></leftBar>
        </div>
        <div class="rightDetail fr">
          <div class="movieIntro">
              <div class= "introCon clearFix">
                <div class="movieImg fl">
                  <img src="../../../static/images/common2.jpg" alt="">
                </div>
                <div class="movieAll fl">
                    <h4>大内特工队</h4>
                    <ul>
                      <li>
                        <span>上映：<a href="#">2017</a></span>
                        <span class="ml10">状态：<a href="#">高清</a></span>
                        <span class="ml10">点击数：<a href="#">88</a></span>
                      </li>
                      <li>
                        <span>类型：<a href="#">喜剧片悬疑 喜剧</a></span>
                      </li>
                      <li>
                        <span>主演：<a href="#">何文辉 李镇宇 付然 戎威峰 赵静沛 桓淼淼 </a></span>
                      </li>
                      <li>
                        <span>地区：<a href="#">大陆</a> </span>
                      </li>
                      <li>
                        <span>更新日期：<a href="#">2017-10-13 10:16</a></span>
                      </li>
                    </ul>
                    <div class="evaluate">
                      <span>影片评分:</span>
                      <div class="rate">
                        <el-rate
                          v-model="value2"
                          :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text>
                        </el-rate>
                      </div>
                    </div>
                </div>
              </div>
              <div class="movieIntruduction">
                《大内特工队》讲述了贪生怕死、油嘴滑舌的小六子，阴差阳错被雷击中后，拥有了“变身为女人”的神奇能力。因为拥有了这样的特殊能力，小六子被特招进后宫成为了一名“大内特工”，开始探查皇太子被害一案，并因此被无辜卷入一场“阴谋”中。
              </div>
              <div class="watchType">
                <el-tabs v-model="editableTabsValue2" type="border-card">
                  <el-tab-pane
                    v-for="(item, index) in editableTabs2"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                  >
                    <el-button round>{{item.content}}</el-button>
                  </el-tab-pane>
                </el-tabs>
              </div>
          </div>
          <!--猜你喜欢-->
          <div class="guessLike">
            <h4>猜你喜欢</h4>
            <div class="likeContent">
              <commonDiv :resourceUrl = "moviePage"></commonDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import leftBar from '@/components/leftBar'
  import commonDiv from '@/components/common'     //电影模块
  export default {
  data () {
    return {
      value2: null,
      editableTabsValue2: '2',
      editableTabs2: [{
        title: '腾讯视频',
        name: '1',
        content: '腾讯热播'
      }, {
        title: '爱奇艺视频',
        name: '2',
        content: '爱奇艺热播'
      }],
      moviePage:{"url":"../../static/data/comMovie.json"}
    }
  },
  mounted(){
    console.log(this.$route.path);
  },
  components:{
    leftBar,
    commonDiv
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
#movieDetail{
   width:100%;
   background:rgb(249,249,249);
  .detailContent{
    margin-top: 25px;
  .rightDetail{
    width: 908px;
    border: 1px solid #EDEDED;
    padding: 10px 5px;
    box-sizing: border-box;
    .movieIntro{
      padding: 10px;
      .introCon{
        .movieImg{
          img{
            width: 190px;
            box-shadow: 4px 4px 4px rgba(0,0,0,.1);
          }
        }
        .movieAll{
          margin-left: 40px;
          ul{
            width: 100%;
            overflow: hidden;
            li{
              height: 36px;
              line-height: 36px;
              span{
                a{
                  color: #04B872;
                  text-decoration: none;
                }
              }
            }
          }
          .evaluate{
            .rate{
              display: inline-block;
              vertical-align: top;
            }
          }
        }
      }
      .movieIntruduction{
        line-height: 34px;
        padding: 20px 0px;
        border: solid #eee;
        border-widtH: 1px 0;
        margin: 26px 0;
      }
    }
  }
  }
  .guessLike{
    height: 347px;
    overflow: hidden;
    h4{
      line-height: 50px;
      height: 50px;
      padding: 0 16px;
      font-size: 16px;
      background: #FBFBFB;
      color: #04B872;
      position: relative;
    }
  }
}
</style>
