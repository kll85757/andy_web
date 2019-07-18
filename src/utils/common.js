/**
 * created by gaorun on 2018/6/15
 *
 * 公用函数
 */

/**
 * @fn makeUrl
 * @param baseUrl {String}
 * @param params {Object}
 * @return url {String}
 * 通过传入 baseUrl 和 一个JSON对象类型参数返回一个完整的拼接好的URl
*/
export const makeUrl = (baseUrl, params) => {
  if (!params) return baseUrl

  let arr = []
  for (let i in params) {
    let val = `${i}=${params[i]}`
    arr.push(val)
  }

  let res = arr.join('&')
  let url = baseUrl.indexOf('?') >= 0 ? `&${res}` : `?${res}`
  return baseUrl + url
}

export const setStorage = (key, value, keep) => {
  let res = {}
  try {
    res[key] = value
    let resStr = JSON.stringify(res)

    keep ? localStorage.setItem(`_app-${key}`, resStr)
      : sessionStorage.setItem(`_app-${key}`, resStr)

    return Promise.resolve()
  } catch (e) {
    return Promise.reject(e)
  }
}

export const getStorage = (key, keep) => {
  try {
    let resStr = keep ? localStorage.getItem(`_app-${key}`)
      : sessionStorage.getItem(`_app-${key}`)
    let res = JSON.parse(resStr)
    if (res === null) return Promise.resolve(res)
    return Promise.resolve(res[key])
  } catch (e) {
    return Promise.reject(e)
  }
}

export const removeStorage = (key) => {
  try {
    sessionStorage.removeItem(`_app-${key}`)
    return Promise.resolve()
  } catch (e) {
    return Promise.reject(e)
  }
}

export const clearStorage = () => {
  try {
    sessionStorage.clear()
    return Promise.resolve()
  } catch (e) {
    return Promise.reject(e)
  }
}