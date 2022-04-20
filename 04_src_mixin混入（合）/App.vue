/* eslint-disable vue/no-unused-components */
<template>
  <div>
    <hr>
  <Student></Student>
  <hr>
 
  <School></School>
  </div>
</template>

<script>
// 引入school组件
import Student from './components/Student'
import School from './components/School'
export default {
    name:'App',  
    components:{
      // eslint-disable-next-line vue/no-unused-components
      Student,
      // eslint-disable-next-line vue/no-unused-components
      School
    }
}
</script>
