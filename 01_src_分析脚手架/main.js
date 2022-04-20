/*关于不同版本的函数：

vue.js 与 vue.runtime.xxx.js的区别：

vue.js 是完整版的 Vue，包含：核心功能+模板解析器
vue.runtime.xxx.js 是运行版的 Vue，只包含核心功能，没有模板解析器
因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render函数接收到的createElement 函数去指定具体内容
*/
/*
该文件是整个项目入口文件
*/
//引入Vue
// 第一种解决办法：import Vue from 'vue/dist/vue'
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
// 创建vue实例对象-----vm
new Vue({
  // 完成了将App组件放入容器中
  el:'#app',
  // template:`<App></App>`,
  // components:{App},
  // 第二解决办法
  render: h => h(App),
})//.$mount('#app')//和之前的el：’#app‘一样

