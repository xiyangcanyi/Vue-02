<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Search',
    data(){
      return{
        keyWord:'',
      }
    },
    methods:{
      searchUsers(){
        // console.log(this);
        this.$bus.$emit('updateListData',false,true,'',[])
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response=>{
            console.log('请求成功',response.data.items);
            // this.$bus.$emit('updateListData',response.data.items)
            this.$bus.$emit('updateListData',false,false,'',response.data.items)
          },
          error=>{
            console.log('请求失败',error.message);
            this.$bus.$emit('updateListData',false,false,error.message,[])
          }
        )
       }
    
    }
}
</script>

