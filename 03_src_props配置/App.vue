/* eslint-disable vue/no-unused-components */
<template>
  <div>
    <hr>
  <Student name="李四" sex="男" v-bind:age="19"></Student>
  <hr>
   <Student name="老王" sex="女" :age="55"></Student>

  </div>
</template>

<script>
// 引入school组件
import Student from './components/Student'
export default {
    name:'App',  
    components:{
      // eslint-disable-next-line vue/no-unused-components
      Student,
    }
}
</script>
