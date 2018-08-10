<template>
    <div id="pageNation">
      <div class="block" style="border: 1px solid  #E6E6E6;background: rgb(255,255,255);padding: 15px;text-align: center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage4: 4
    }
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit('page-size',val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit('current-page',val)
    },
    parentHandleclick(e) {
      console.log(e)
    }

  }
}
</script>
<style lang="less" scoped>
#pageNation{
  margin-top: 10px;
}

</style>
