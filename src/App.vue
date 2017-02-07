<template>
  <div id="app">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  require('./assets/style/common.css')
  require('./assets/style/normalize.css')
  require('animate.css')
  import 'element-ui/lib/theme-default/index.css'
  import 'element-ui/lib/theme-default/message.css'
  import 'element-ui/lib/theme-default/notification.css'
  import 'element-ui/lib/theme-default/carousel-item.css'
  export default {
    name: 'app'
  }
</script>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
