<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
      <li v-for="(item,index) in games" :key="index">{{item}}</li>
    </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>

</template>

<script>
import Category from './components/Category'

export default {
    name:'App',  
    components:{
      // eslint-disable-next-line vue/no-unused-components
      Category,
    },
     data(){
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      films:['《教父》','《穿越火线》','《尚硅谷》','《拆弹专家》'],
      games:['植物大战僵尸','红色警戒','空洞骑士','王国']
    }
  }
   
   
}
</script>
<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
</style>
