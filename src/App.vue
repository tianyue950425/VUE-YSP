<template>
  <div>
    <navbar>
      <i @click="sidebarIsShow=!sidebarIsShow" class="iconfont icon-category"></i>
    </navbar>
   
    <sidebar v-show="sidebarIsShow" @event="sidebarIsShow=!sidebarIsShow">
    </sidebar>
    <router-view></router-view> 
  </div>
</template>
<script>
import navbar from "./components/navbar"
import sidebar from "./components/sidebar"
export default {
  name: 'App',
  data(){
    return {  
      sidebarIsShow:false
    }
  },

  computed:{

  },

  watch:{

  },

  components:{
    navbar,
    sidebar
  },

  methods:{
    handleClick(){
      this.title="xiaoming";
    }
  }
}
</script>

<style>
    *{
      margin:0;
      padding:0;
    }
    a{
      text-decoration: none
    }
    .iconfont{
      margin-left:10px;
    }
    .close{
      font-size:18px;
      position:absolute;
      right:0px;
      top:0px;
      color:white;
    }
    li{
      list-style: none
    }
</style>
