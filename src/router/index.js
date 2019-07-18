import Vue from 'vue'
import Router from 'vue-router'
// import setWechatTitle from '../utils/setWechatTitle.js'

import event from './events'
Vue.use(Router)

const router = new Router({
  routes: [
      //--------------------------功能模块路由-------------------------------
      {
        path: '/BBS',
        name: 'BBS',
        component: resolve => require(['../views/BBS'], resolve),
          // component: resolve => require(['./views/BBS'], resolve),
        meta: {
          title: '论坛'
        }
      },
      {
          path: '/OrderCreate',
          name: 'OrderCreate',
          component: resolve => require(['../views/OrderCreate'], resolve),
          // component: resolve => require(['./views/BBS'], resolve),
          meta: {
              title: '报单'
          }
      },
      //--------------------------功能模块路由-------------------------------

      //--------------------------活动页面路由-------------------------------
      {
          path: '/event/mairui',
          component: resolve => require(['../event/mairui'], resolve),
          meta: {
              title: '迈瑞精英讲师'
          }
      }
      //--------------------------活动页面路由-------------------------------
  ]
});
router.afterEach(route => {
  let title = route.meta.title // + '-Custom-Suffix'
  // setWechatTitle(title)
  if (route.meta.scrollToTop) window.scrollTo(0,0)
})
export default router
