<template>
    <div id="leftBar">
      <el-row class="tac">
        <h6>快速导航</h6>
        <el-menu  default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" active-text-color="#15CF87">
          <el-menu-item index="1">
            <span slot="title">电影</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">连续剧</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">综艺</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">动漫</span>
          </el-menu-item>
        </el-menu>
      </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
#leftBar{
  width: 185px;
  height: 300px;
  border: 1px solid #E6E6E6;
  background: rgb(255,255,255);
  h6{
  height: 40px;
  line-height: 40px;
  text-indent: 20px;
  border-left: 6px solid #16CF88;
  font-weight: 400;
  font-size: 16px;
  color: #15CF87;
  background: rgb(255,255,255);
  margin: 5px 0;
}
}

</style>
