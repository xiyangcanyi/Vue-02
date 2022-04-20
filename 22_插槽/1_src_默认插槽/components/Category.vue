<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- <ul>
      <li v-for="(item,index) in listData" :key="index">{{item}}</li>
     
    </ul> -->
    <!-- 定义一个插槽（挖个坑，等着组建的使用者进行填充） -->
    <slot name="center">我是一个默认值，当使用者没有传递具体结构时，我会出现1</slot>
    <slot name="footer">我是一个默认值，当使用者没有传递具体结构时，我会出现2</slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Category',
  props:['title'],
}
</script>

<style scoped>
.category{
  background-color:skyblue;
  width: 200px;
  height: 300px;
}
img{
  width: 100%;
}
video{
 width: 160px;
}
</style>