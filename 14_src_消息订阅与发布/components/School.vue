<template>
  <div class="school">

    <h2>学校名称：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个消息订阅和发布
import pubsub from 'pubsub-js'
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
  // this.$emit('sendStudentName'),
   this.pubId=pubsub.subscribe('hello',function(msgName,data){
    console.log('有人发布了hello消息,hello消息回调执行了',msgName,data);
  })

 },
beforeDestroy(){
  pubsub.unsubscribe(this.pubId)
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