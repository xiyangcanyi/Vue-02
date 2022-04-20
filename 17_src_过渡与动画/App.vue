<template>
  <div >
 <test></test>
 <test2></test2>
 <test3></test3>
</div>
</template>

<script>
// 引入school组件,样式引入后来者居上
import test from './components/testOne'
import test2 from './components/testTwo'
import test3 from './components/testThree'
export default {
    name:'App',  
    components:{
     
     // eslint-disable-next-line vue/no-unused-components
     test,
     // eslint-disable-next-line vue/no-unused-components
     test2,
     // eslint-disable-next-line vue/no-unused-components
     test3
    }
      
}
</script>
