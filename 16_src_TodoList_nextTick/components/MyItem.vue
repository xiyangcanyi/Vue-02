<template>
   <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit"
             type="text" 
             :value="todo.title"
              @blur="handleBlur(todo,$event)">
          </label>
          
          <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
          <button v-show="!todo.isEdit" 
          class="btn btn-edit"
           @click="handleEdit(todo)"
           ref="inputTitle" >编辑</button>
        </li>
    
</template>

<script>
import pubsub from 'pubsub-js'
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'MyItem',
   props:['todo'],
   methods: {
     //勾选or取消勾选
     handleCheck(id){
       //通知App组件将对应的todo对象的done值取反
      //  console.log(id);
    // this.checkTodo(id)
    this.$bus.$emit('checkTodo', id);
     },
    //  删除
     handleDelete(id){
     if(confirm('确认删除吗？')){
       pubsub.publish('deleteTodo',id)
     }
     },
     //编辑
     handleEdit(todo){
       // eslint-disable-next-line no-prototype-builtins
       if(todo.hasOwnProperty('isEdit')){
         todo.isEdit=true
       }else{
       this.$set(todo,'isEdit',true)
       }
        // this.$nextTick(function(){
        // this.$refs.inputTitle.focus()
        // })
        setTimeout(()=>{
              this.$refs.inputTitle.focus()
        },2000)
      // todo.isEdit=true
      // console.log(todo);
     },
     //失去焦点回调（真正执行修改逻辑）
     handleBlur(todo,event){
       todo.isEdit=false
       if(!event.target.value.trim()) return alert('输入不能为空')
       this.$bus.$emit('updateTodo',todo.id,event.target.value)

     }
   },
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none; 
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: skyblue
}
li:hover button{
  display:block;
}
</style>