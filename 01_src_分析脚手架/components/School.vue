<template>
  
    <!-- 组件的结构 -->
       <div class="demo">
       <h2>学校名称：{{schoolName}}</h2>
       <h2>学校地址：{{address}}</h2>
       <button @click="showName">点我提示学校名</button>
       </div>
  
</template>
<script>
// 组件交互相关的代码（数据、方法等）
// 暴露方式三种的第一种：在const前面加export（分别暴露）
/*export default Vue.extend({
        name:'school',
        data(){
          return{
            schoolName:'尚硅谷',
            address:'北京昌平'
          }
        },
        methods: {
          showName(){
            alert(this.schoolName)
          }
        },
       
   });
   */
  // Vue.extend()的省略写法：
  export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'school',
        data(){
          return{
            schoolName:'尚硅谷',
            address:'北京昌平'
          }
        },
        methods: {
          showName(){
            alert(this.schoolName)
          }
        },
       
   };
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