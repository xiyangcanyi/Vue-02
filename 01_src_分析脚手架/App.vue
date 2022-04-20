<template>
    <div>
      <img src="./assets/logo.png" alt="">
      <school></school>
      <student></student>
    </div>
</template>

<script>
//引入组件
    import school from './components/School.vue'
    import student from './components/Student1.vue'

    export default {
     
      name:'App',
      components:{
        school,
        student
      }
    }
</script>

<style>
</style>