/**
 * Created by linkage on 2018/3/21.
 */
// 微信授权登录

import sha1 from 'crypto-js/sha1'
import { querystring } from 'vux'

const randomStr = (len) => {
  len = len || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' // 默认去掉了容易混淆的字符oOLl, 9gq, Vv, Uu, I1
  let maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
};

const initWxConfig = (z) => {
  let noncestr = randomStr(16)
  let timestamp = new Date().getTime().toString().substr(0, 10)
  let url = decodeURIComponent(location.href).split('#')[0]
  let signStr = 'jsapi_ticket=' + z.ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url
  let signature = sha1(signStr).toString()

  z.$wechat.config({
    debug: false, // 开发者工具显示详情
    appId: z.appId,
    timestamp: timestamp,
    nonceStr: noncestr,
    signature: signature,
    jsApiList: [
      'getLocation',
      'showMenuItems',
      'hideAllNonBaseMenuItem',
      'onMenuShareTimeline',
      'onMenuShareAppMessage'
    ]
  })

  z.$wechat.error((res) => {
    z.hideLoading()
    z.showToast({
      type: 'warn',
      text: '微信权限验证配置失败'
    })
  })
}
const OAuthLogin = (z, code) => {
  return new Promise((success, reject) => {
    if (!z.showToast) {
      console.error('缺少方法：showToast');
      return
    }
    if (!z.showLoading) {
      console.error('缺少方法：showLoading');
      return
    }

    // z.showLoading({
    //   text: '正在授权...'
    // })
    if (sessionStorage.getItem('deployProfile') && sessionStorage.getItem('deployProfile') === 'LD') { // 绿地APP内嵌H5不走微信授权
      console.log('LD')
      sessionStorage.setItem('username', z.$route.query.username)
      z.phone = z.$route.query.username
      if (z.getData) {
        z.getData()
      }
    } else {
      z.getWxTicket().then((t) => {
        z.appId = t.appid
        z.ticket = t.ticket
        let isMicroMessenger = navigator.userAgent.toLowerCase().indexOf('MicroMessenger'.toLowerCase()) > -1
        z.isMicroMessenger = isMicroMessenger
        if (isMicroMessenger) {
          if (!code) {
            let redirUri = encodeURIComponent(window.location.href)
            window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + z.appId + '&redirect_uri=' + redirUri + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect'
            z.hideLoading()
          } else {
            initWxConfig(z)
            if (sessionStorage.getItem('connectid')) { // 第一次打开首页授权登录，后面跳回首页不做授权
              // 判断进入我的和订单页面前是否已绑定微信
              if (sessionStorage.getItem('Is_bindedUser') && sessionStorage.getItem('Is_bindedUser') === '2') {
                // 判断我的页面
                if (z.myHome) {
                  z.$router.push({
                    name: 'Login',
                    query: {redirect: '/My/MyHome'}
                  })
                }

                // 判断订单列表页面
                if (z.orderListFunc) {
                  z.$router.push({
                    name: 'Login',
                    query: {redirect: 'OrderList'}
                  })
                }
              } else {
                // 已绑定微信下 有调getData接口则调用
                if (z.getData) {
                  z.getData()
                }
              }
            } else {
              z.getOpenId(code).then(function (res) {
                console.log(res)
                sessionStorage.setItem('username', res.phone)
                z.phone = res.phone
                if (res.is_bindedUser === '1') {
                  const data = {
                    username: res.phone,
                    password: res.passwdString.split('').reverse().join(''),
                    device_comment: navigator.userAgent,
                    loginModeType: '1',
                    appId: 'FW0004'
                  }
                  z.login(data).then(function () {
                    console.log('++++++++登录成功++++++++++')
                    if (z.getData) {
                      z.getData()
                    }
                    sessionStorage.setItem('connectid', res.connectid)
                  })
                  sessionStorage.setItem('unionid', res.unionid)
                } else {
                  sessionStorage.setItem('Is_bindedUser', res.is_bindedUser)
                  sessionStorage.setItem('unionid', res.unionid)
                  sessionStorage.setItem('connectid', res.connectid)

                  // 判断我的页面
                  if (z.myHome) {
                    z.$router.push({
                      name: 'Login',
                      query: {redirect: '/My/MyHome'}
                    })
                  }

                  // 判断订单列表页面
                  if (z.orderListFunc) {
                    z.$router.push({
                      name: 'Login',
                      query: {redirect: 'OrderList'}
                    })
                  }

                  // 判断计次卡列表页
                  if (z.addCard) {
                    z.$router.push({
                      name: 'Login',
                      query: {redirect: '/My/MyJiciCard'}
                    })
                  }

                  // 判断计次卡添加页
                  if (z.activeCard) {
                    z.$router.push({
                      name: 'Login',
                      query: {redirect: '/My/AddJiciCard'}
                    })
                  }

                  // 判断优惠券添加页
                  if (z.activeCoupon) {
                    z.$router.push({
                      name: 'Login',
                      query: {redirect: '/My/AddCoupon'}
                    })
                  }
                }
              })
            }
          }
        }
      }, (error) => {
        z.hideLoading()
        z.showToast({
          type: 'error',
          text: '获取WeChat ticket 失败' + error
        })
      })
    }
  })
}

export default OAuthLogin
