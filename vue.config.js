// vue.config.js
const path = require('path');
module.exports = {
  publicPath:'/docs/',
  outputDir: 'docs',
  assetsDir: "static",
  filenameHashing:true,
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0].API_CONFIG = JSON.stringify({
          ENV: process.env.ENV, //环境
          ROOT: process.env.ROOT, //域名
          APPID: process.env.APPID, //公众号id
          CORPID: process.env.CORPID, //企业微信id
          LOCAL: process.env.LOCAL, //是否本地环境
          BX_ROUT: process.env.BX_ROUT, //保险域名
        })
        return args
      });

    config.resolve.alias
      .set('@static', path.join(__dirname, 'src/static'))
  },
  devServer:{
    port: 7150,
    proxy: 'http://devoutact.top/'
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/sass/main.scss";`
      },
      postcss: {
        plugins: [require('postcss-plugin-px2rem')({
          rootValue: 75,
          minPixelValue:1,
          exclude: /(node_module|static)/
        })]
      }
    }
  }
}