<template>
  <div class="container">
    <search></search>
    <List></List>
  </div>

</template>

<script>
import Search from './components/search'
import List from './components/List'
export default {
    name:'App',  
    components:{
      Search,
      List,
    }
   
   
}
</script>
