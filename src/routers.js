import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/inputer',
      title: '代码编写',
      name: 'inputer',
      component: (resolve) => require(['./components/inputer.vue'], resolve)
    },
    {
      path: '/outputer',
      title: '效果预览',
      name: 'outputer',
      component: (resolve) => require(['./components/outputer.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/inputer'
    }
  ]
})
