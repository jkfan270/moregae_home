const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // pages: {
  //   // 先配置主页
  //   index: {
  //     entry: './src/main.js',
  //     template: './public/index.html',
  //     filename: 'index.html',
  //     title: '主页'
  //   },
  //   // 再配置各个子页面：登录后课表查询页
  //   about: {
  //     entry: './src/pages/About/about.js',
  //     template: './public/about.html',
  //     filename:'about.html',
  //     title: '关于',
  //   },
  //   content: {
  //     entry: './src/pages/Content/content.js',
  //     template: './public/content.html',
  //     filename:'content.html',
  //     title: '内容'
  //   }
  // }
})
