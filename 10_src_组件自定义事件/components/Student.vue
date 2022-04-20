<template>
  <div class="student">
    <button @click="add">点我number++{{number}}</button>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给APP</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student实例对象vc</button>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
    data() {
      return {
        name:'张三',
        sex:'男',
        number:0
      }
    },
    methods: {
      add(){
        console.log('add被调用了');
        this.number++
      },
      sendStudentName(){
        //触发student组件实例对象的atguigu事件
          this.$emit('atguigu',this.name)
           this.$emit('demo')

      },
      unbind(){
        this.$off(['atguigu','demo'])//解绑一个自定义事件,多个自定义事件用数组
      },
      death(){
        this.$destroy()
      }
    },

    
}
</script>

<style scoped>
  .student{
    background-color: skyblue;
    /* less可以嵌套写样式 */
    padding: 5px;
    margin-top: 30px;
  }
</style>

