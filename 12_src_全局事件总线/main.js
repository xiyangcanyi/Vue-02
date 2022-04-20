// 引入Vue
import Vue from "vue";
// 引入App
import App from './App.vue'
// 传讲一个Vue的原型对象
// Vue.prototype.x={a:1,b:2}

const Demo=Vue.extend({})
const d=new Demo()
Vue.prototype.x=d

// 关闭生产提示
Vue.config.productionTip=false
// 创建vm
new Vue({
  el:'#app',
  render:h=>h(App),
  beforeCreate() {
    Vue.prototype.$bus=this //安装全局事件总线
  },
})
