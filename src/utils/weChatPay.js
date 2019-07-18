import sha1 from 'crypto-js/sha1'

let orderParams = null;
let resolve = null;
let getPayConfig = null; // 返回微信支付配置信息


const randomStr = (len) => {
  len = len || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' // 默认去掉了容易混淆的字符oOLl, 9gq, Vv, Uu, I1
  let maxPos = chars.leng
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
      "chooseWXPay",
      "openProductSpecificView",
      "addCard",
      "chooseCard",
      "openCard"
    ]
  })

  z.$wechat.ready(() => {
    pay(z)
  })

  z.$wechat.error((res) => {
    z.hideLoading()
    z.showToast({
      type: 'warn',
      text: '微信权限验证配置失败'
    })
  })
}

const pay = (z) => {
  getPayConfig(orderParams).then(resp => {

    // alert('res:' + JSON.stringify(resp))

    const config = resp.weiXinResponseVO
    z.$wechat.chooseWXPay({
      appId: config.appId,
      timestamp: config.timeStamp,
      nonceStr: config.nonceStr,
      package: config.wxPackage,
      signType: config.signType,
      paySign: config.paySign,
      success: (res) => {
        z.hideLoading()
        z.showToast({
          type: 'success',
          text: '支付成功'
        })
        setTimeout(resolve, 2000)
      },
      error: (error) => {
        z.hideLoading()
        z.showToast({
          type: 'error',
          text: '支付失败' + JSON.parse(error)
        })
        setTimeout(resolve, 2000)
      }
    })
  },() => {
    z.hideLoading()
    z.showToast({
      type: 'error',
      text: '尝试支付失败'
    })
  })

  // return;
  // let payData = {
  //   orderId: orderParams.orderId,
  //   openId: z.openId,
  //   errorNotifyUrl: '',
  //   redirectUrl: '',
  //   returnUrl: '',
  //   skuId: '',
  //   clientSystemType: '3',
  //   payCodeEnum4H5: '1201',
  //   paySourceEnum: '6'
  // }
  // z.h5pay(payData).then((resp) => {
  //   const config = resp.weiXinPayOutputDTO
  //   z.$wechat.chooseWXPay({
  //     appId: config.appId,
  //     timestamp: config.timeStamp,
  //     nonceStr: config.nonceStr,
  //     package: config.wxPackage,
  //     signType: config.signType,
  //     paySign: config.paySign,
  //     success: (res) => {
  //       z.hideLoading()
  //       z.showToast({
  //         type: 'success',
  //         text: '支付成功'
  //       })
  //       setTimeout(resolve, 2000)
  //     },
  //     error: (error) => {
  //       z.hideLoading()
  //       z.showToast({
  //         type: 'error',
  //         text: '支付失败' + JSON.parse(error)
  //       })
  //       setTimeout(resolve, 2000)
  //     }
  //   })
  // }, () => {
  //   z.hideLoading()
  //   z.showToast({
  //     type: 'error',
  //     text: '尝试支付失败'
  //   })
  // })
}

const weChatPay = (params, z, code, action) => {
  orderParams = params;
  getPayConfig = action;

  return new Promise((success, reject) => {
    if (!z.showToast) {
      console.error('缺少方法：showToast');
      return
    }
    if (!z.showLoading) {
      console.error('缺少方法：showLoading');
      return
    }

    z.showLoading({
      text: '正在支付...'
    })
    resolve = success;

    z.getWxTicket().then((t) => {
      z.appId = t.appid
      z.ticket = t.ticket
      let isMicroMessenger = navigator.userAgent.toLowerCase().indexOf('MicroMessenger'.toLowerCase()) > -1
      z.isMicroMessenger = isMicroMessenger
      if (isMicroMessenger && !code) {
        let redirUri = encodeURIComponent(window.location.href)
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + z.appId + '&redirect_uri=' + redirUri + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
        z.hideLoading()
      } else {
        initWxConfig(z)
      }
    }, (error) => {
      z.hideLoading()
      z.showToast({
        type: 'error',
        text: '获取WeChat ticket 失败' + error
      })
    })
  })
}

export default weChatPay
