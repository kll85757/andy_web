  import sha1 from 'crypto-js/sha1'

  /*生成随机字符串*/
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

  const wxShareWidget = (z, shareData) => {
    z.getWxTicket().then(function (t) {
      let noncestr = randomStr(16)
      let timestamp = new Date().getTime().toString().substr(0, 10)
      let url = decodeURIComponent(location.href).split('#')[0]
      let signStr = 'jsapi_ticket=' + t.ticket + '&noncestr=' + noncestr + '&timestamp=' + timestamp + '&url=' + url
      let signature = sha1(signStr).toString()
      z.$wechat.config({
        debug: false, // 开发者工具显示详情
        appId: t.appid,
        timestamp: timestamp,
        nonceStr: noncestr,
        signature: signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone'
        ]
      })
      z.$wechat.ready(function () {
        // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        z.$wechat.onMenuShareTimeline({
          title: shareData.shareTitle,
          link: shareData.shareUrl,
          imgUrl: shareData.imgUrl,
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
        // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
        z.$wechat.onMenuShareAppMessage({
          title: shareData.shareTitle, // 分享标题
          desc: shareData.shareDesc, // 分享描述
          link: shareData.shareUrl, // 分享链接
          imgUrl: shareData.imgUrl, // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
        // 获取“分享到QQ”按钮点击状态及自定义分享内容接口
        z.$wechat.onMenuShareQQ({
          title: shareData.shareTitle, // 分享标题
          desc: shareData.shareDesc, // 分享描述
          link: shareData.shareUrl, // 分享链接
          imgUrl: shareData.imgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
        // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        z.$wechat.onMenuShareWeibo({
          title: shareData.shareTitle, // 分享标题
          desc: shareData.shareDesc, // 分享描述
          link: shareData.shareUrl, // 分享链接
          imgUrl: shareData.imgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
        // 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
        z.$wechat.onMenuShareQZone({
          title: shareData.shareTitle, // 分享标题
          desc: shareData.shareDesc, // 分享描述
          link: shareData.shareUrl, // 分享链接
          imgUrl: shareData.imgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      })
      z.$wechat.error(function (res) {
        console.log(res)
        z.showToast({
          type: 'warn',
          text: '微信权限验证配置失败'
        })
      })
    })
  }

  export default wxShareWidget
