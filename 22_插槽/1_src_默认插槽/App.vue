<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
      <li v-for="(item,index) in games" :key="index">{{item}}</li>
     </ul>
     <div class="footer" slot="footer">
     <a  href="http://www.atguigu.com">单机游戏</a>
     <a  href="http://www.atguigu.com">网络游戏</a>
     </div>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
       
    <template v-slot:footer>
        <div class="footer">
          <a  href="http://www.atguigu.com">经典</a>
          <a  href="http://www.atguigu.com">热门</a>
            <a  href="http://www.atguigu.com">推荐</a>
     </div>
     <h4>欢迎前来观影</h4>
    </template>
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
  .container,.footer{
    display: flex;
    justify-content: space-around;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  a{
    text-align: center;
  }
  h4{
    text-align: center;
  }
 
</style>
