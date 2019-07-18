export default [
  {
    path: '/event/mairui',
    component: resolve => require(['../event/mairui'], resolve),
    meta: {
      title: '迈瑞精英讲师'
    }
  },
  // {
  //   path: '/Member/NewsList',
  //   name: 'NewsList',
  //   component: resolve => {
  //     require(['@/components/Member/NewsList'], resolve)
  //   },
  //   meta: {
  //     title: '会员资讯'
  //   }
  // }
]
