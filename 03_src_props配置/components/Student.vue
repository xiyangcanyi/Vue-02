<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age+1}}</h2>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Student',
    data() {
      console.log(this);
      return {
        msg:'我是一个卑微的学生',
     
      };
    },
   // props:['name','sex','age']//简单声明接收
   //接收数据，类型限制
    // props:{
    //   name:String,
    //   sex:String,
    //   age:Number

    // },
  //接收同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
      name:{
        type:String,
        required:true
      },
      sex:{
        type:String,
        default:'男'
      },
      age:{
        type:Number,
        default:99
      }
    }
}
</script>

