// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
// 关闭生产提示
Vue.config.productionTip=false
Vue.use(plugins,1,2,3)
// 创建vm
new Vue({
  el:'#app',
  render:h=>h(App),
})
