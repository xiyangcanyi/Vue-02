<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
</div>
</template>

<script>
// 引入school组件,样式引入后来者居上

import axios from 'axios'
export default {
    name:'App',  
    methods: {
      getStudents(){
        axios.get('http://localhost:8080/atguigu/students').then(
          // eslint-disable-next-line no-unused-vars
          response=>{
            console.log('请求响应成功',response.data)
          },
          
          // eslint-disable-next-line no-unused-vars
          error=>{
            console.log('请求失败了',error.message);
          }
        )
      },
       getCars(){
        axios.get('http://localhost:8080/demo/cars').then(
          // eslint-disable-next-line no-unused-vars
          response=>{
            console.log('请求响应成功',response.data)
          },
          
          // eslint-disable-next-line no-unused-vars
          error=>{
            console.log('请求失败了',error.message);
          }
        )
      },
    },
   
}
</script>
