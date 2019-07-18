/**
 * Created by linkage on 2018/3/21.
 */
const isLogin = (z, path) => {
  if (window.ios == 1) {
    window.location.href = "linkage:toLogin"
  } else if (window.linkage) {
    try {
      window.linkage.toLogin()
    } catch (e) {
    }
  } else {
    z.showToast({
      type: 'warn',
      text: '您还未登录，请先登录！'
    })
    z.$router.push({
      name: 'Login',
      query: {redirect: path}
    })
  }
}

export default isLogin
