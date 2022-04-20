<template>
  <div class="school">

    <h2>学校名称：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给APP</button>
  </div>
</template>

<script>
//引入一个混合

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'School',
    data() {
      return {
        name:'尚硅谷',
        address:'北京昌平'
      }
    },
    props:['getSchoolName'],
    methods: {
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    },

   
    
}
</script>

<style >
.school{
  background-color: greenyellow;
  padding: 5px;
  margin-top: 30px;
}
</style>