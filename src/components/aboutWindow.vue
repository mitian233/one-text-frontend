<template>
<div class="window">
  <div class="window-body">
    <div style="margin: 20px 20px 20px 20px">
      <div style="margin-bottom: 20px">
        <p>API 地址：<a href="https://api.onetext.project.ac.cn" >https://api.onetext.project.ac.cn</a></p>
        <p>使用 & 贡献：<a href="https://github.com/lz233/OneText-Library" >https://github.com/lz233/OneText-Library</a></p>
      </div>
      <button style="float: right;margin-bottom: 20px" class="btn" @click="closeWindow()">关闭</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    aboutWindowVisible: Boolean
  },
  methods: {
    closeWindow: function () {
      this.$emit('closeWindow', false)
    }
  },
  name: "aboutWindow"
}
</script>

<style scoped>

</style>