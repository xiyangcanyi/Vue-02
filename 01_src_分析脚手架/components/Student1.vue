<template>
  
    <!-- 组件的结构 -->
       <div class="demo">
       <h2>学生姓名：{{studentName}}</h2>
       <h2>学生年龄：{{age}}</h2>

       </div>
  
</template>
<script>
// 组件交互相关的代码（数据、方法等）
// 暴露方式三种的第一种：在const前面加export（分别暴露）

  // Vue.extend()的省略写法：
  export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'student',
        data(){
          return{
            studentName:'张三',
            age:18
          }
        },
     
  }
  //  第二种统一暴露
  //  export{school}
  // 第三种默认暴露
  // export default school

</script>
<style>
/* 组件的样式 */
    .demo{
      background-color: orange;
    }
</style>