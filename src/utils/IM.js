// @see: 小能客服接口文档
// http://doc3.xiaoneng.cn/ntalker.php?id=webb2b:start#b2c%E7%89%88%E6%9C%AC%E5%AF%B9%E6%8E%A5

export default class IMApiLoader {

  constructor (siteid) {
    this._siteid = siteid || 'kf_10115'
    this._document = document
    this._window = window
  }

  load () {
    if (this._scriptLoadingPromise) return this._scriptLoadingPromise

    const script = this._document.createElement('script')
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    script.defer = true
    script.src = `http://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=${this._siteid}`

    this._scriptLoadingPromise = new Promise((resolve, reject) => {
      script.onload = () => {
        setTimeout(resolve, 0);
      }
      script.onerror = error => reject(error)
    })

    this._document.head.appendChild(script)
    return this._scriptLoadingPromise
  }

  setup (config) {
    let param = {
      siteid: this._siteid,
      ...config
    }
    this._settingid = config.settingid
    this._window['NTKF_PARAM'] = param
    return this
  }

  open (settingid) {
    NTKF.im_openInPageChat(this._settingid)
  }
}