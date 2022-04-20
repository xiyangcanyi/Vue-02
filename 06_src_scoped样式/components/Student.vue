<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2 class="atguigu">学生性别：{{sex}}</h2>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
    data() {

      return {
        name:'张三',
        sex:'男'
      }
    },

    
}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
    /* less可以嵌套写样式 */
  }
</style>

