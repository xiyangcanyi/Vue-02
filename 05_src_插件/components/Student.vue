<template>
  <div>

    <h2>学生姓名：{{name | mySlice}}</h2>
    <h2>学生性别：{{sex}}</h2>
      <button @click="test">点我测试hello方法</button>  
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
    data() {

      return {
        name:'张三1234',
        sex:'男'
      }
    },

    methods:{
            test() {
                this.hello()
            }
        }
    
}
</script>

