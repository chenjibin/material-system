// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './vuex/store'
import {sync} from 'vuex-router-sync'
import axios from 'axios'
var config = require('../config')
// element-ui按需加载，避免全部引入导致最终包过大，自行加入所需组件
import {
  Select,
  Carousel,
  CarouselItem,
  Button
} from 'element-ui'
Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
// Message组件引入
import Message from 'element-ui/lib/message'
Vue.prototype.$message = Message
// Notification组件引入
import Notification from 'element-ui/lib/notification'
Vue.prototype.$notify = Notification

router.afterEach(route => {
  // console.log(route);
  document.title = route.name
})

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config.withCredentials = true  // 需要跨域打开此配置
  // post提交 data存在 并且 data不是FormData对象时对数据进行json化处理
  // if(config.method==='post' && config.data && config.data.constructor !== FormData){
  //   config.data = qs.stringify(config.data)
  //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // }
  // 开启loading动画
  store.dispatch('showLoading')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // 关闭loading动画
  store.dispatch('hideLoading')
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  ...App
})
