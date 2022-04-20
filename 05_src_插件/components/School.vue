<template>
  <div>

    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学生地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'School',
    data() {
      return {
        name:'尚硅谷123',
        address:'北京昌平'
      }
    },

   
    
}
</script>

