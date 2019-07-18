let path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@@', resolve('src/assets')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    },
    assetsDir:"andy_web/static/img",
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/andy_web/'
        : '/andy_web/'
}

