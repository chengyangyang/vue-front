<template>
    <div>
        我的测试页面
      <quill style-obj = "height:400px;width:800px" @quill-content = "getContent"></quill>
    </div>
</template>

<script>
    import Quill from "../components/common/quill";

    export default {
      components: {Quill},
      name: "mytest",
      methods:{
        getContent(content){//获得子组件的值
          alert(content)
        }
      }
    }
</script>

<style scoped>

</style>
