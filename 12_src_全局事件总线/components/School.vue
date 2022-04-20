<template>
  <div class="school">

    <h2>学校名称：{{name}}</h2>
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
        name:'尚硅谷',
        address:'北京昌平'
      }
    },
 mounted(){
  //  console.log(this.x);
  // this.$emit('sendStudentName')
  this.$bus.$on('hello',(data)=>{
    console.log('我是school组件,收到了数据',data);

  })
 },
 beforeDestroy(){
   this.$bus.$on('hello')
 }
    
}
</script>

<style >
.school{
  background-color: greenyellow;
  padding: 5px;
  margin-top: 30px;
}
</style>