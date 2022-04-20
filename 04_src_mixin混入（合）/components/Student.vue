<template>
  <div>

    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {mixin,mixin2} from '../mixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
    data() {

      return {
        name:'张三',
        sex:'男'
      }
    },
    mixins:[mixin,mixin2]
   
    
}
</script>

