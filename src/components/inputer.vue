<template>
  <div>
    <textarea id="inputer" :value='rawTxt' @input='inputting' autofocus></textarea>
    <el-button type="primary" @click="look">点击预览</el-button>
  </div>
</template>
<style scoped lang="less">
  div {
    height: 100%;
    textarea {
      display: block;
      box-sizing: border-box;
      height: 95%;
      width: 80%;
      margin-right: auto;
      margin-left: auto;
      margin-bottom: 10px;
      padding: 20px;
      vertical-align: top;
      resize: none;
      border: none;
      background-color: #f5f5f5;
      outline: none;
      font-family: inherit;
      font-size: 20px;
      color: #616161;
      box-shadow: 4px 5px 3px #aaa;
      transition: all ease .3s;
    }
  }
</style>
<script>
  export default{
    computed: {
      rawTxt () {
        return this.$store.getters.articleRaw
      }
    },
    methods: {
      inputting(e) {
        this.$store.dispatch('textInput', e.target.value)
      },
      look() {
        this.$router.push({name: 'outputer'})
      }
    }
  }
</script>
