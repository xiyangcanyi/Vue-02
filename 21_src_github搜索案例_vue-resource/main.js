// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'

// 关闭生产提示
Vue.config.productionTip=false
// Vue.use(plugins,1,2,3)
//使用插件
Vue.use(vueResource)
// 创建vm
new Vue({
  el:'#app',
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})
