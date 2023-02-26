const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  devServer:{

    // 跨越问题配置代理 ，服务器和服务器之间没有跨域问题， 只有浏览器才有
      proxy:{
        '/api':{
          target:'http://gmall-h5-api.atguigu.cn/',
          // 路径重写
          pathRewrite:{'^/api':''}
        }
      }
  },
  })
