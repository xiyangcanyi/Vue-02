/* eslint-disable vue/no-unused-components */
<template>
  <div class="app">
   <h1>{{msg}}</h1>


 <!-- 通过父组件给子组件传递函数类型props实现：子给父传递数据 -->
  <School></School>
  <!-- 通过一个自定义事件实现：子给父传递数据 -->
  <Student></Student>
  <!-- 通过给父组件给子组件绑定自定义事件实现：子传父传递数据（第二种写法） -->
  <!-- <Student ref="Student"></Student> -->

  </div>
</template>

<script>
// 引入school组件,样式引入后来者居上
import Student from './components/Student'
import School from './components/School'
export default {
    name:'App',
    data(){
      return{
        msg:'你好啊',
        studentName:''
      }
    },  
    components:{
      Student,
      School
    },
}
</script>
<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>