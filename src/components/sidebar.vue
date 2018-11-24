<template>
   <transition name='bounce'>
    <aside >   
    <ul @click="handleClick()">
      <router-link to="/" tag="li">
          <div></div>
          <a href="/">登录/快速注册</a>
      </router-link>
    	<router-link to="/home" tag="li">首页</router-link>
    	<li v-for="data,index in datalist" :key="data.data.title"  @click="handle(index)">
          {{data.data.title}}
      </li>
    </ul>
    </aside>
  </transition>
</template>

<script>
import axios from "axios"
export default {
  name: 'sidebar',
  data () {
    return {
      datalist:[]
    }
  },
  methods:{
    handleClick(){
      this.$emit("event");
    },
    handle(id){
      this.$router.push('/detaillist/'+ id)
      console.log(id)
      console.log('aaaaaa')
    }
  },
  mounted(){
    axios.get("/app/index/classifyData").then(res=>{
      this.datalist = res.data.data.modules
    }).catch(error=>{
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  aside{
      position: fixed;
      top:50px;
      left:0px;
      width:90%;
      height: 100%;
      color:white;
      z-index:10;
      }   

    ul{
      width:90%;
      height:100%;
      background:#3c3c3c;
      left:0;
      top:0;
      z-index: 9999
    }
    li{
      color:white;
      height:50px;
      line-height:50px;
      border-bottom:1px solid #4e4e4e;
      font-size:10px;
      text-indent: 10px;
    }
    li:first-of-type{
      height:100px;
      line-height: 100px;
      position:relative;
    }
    li:first-of-type div{
        width:50px;
        height:50px;
        background:url(../../static/下载.jpg) no-repeat;
        border-radius: 50%;
        position:absolute;
        left:20px;
        top:50%;
        margin-top:-25px;
    }
    li:first-of-type a{
      color:#ccc;
      font-size:12px;
      margin-left: 80px
    }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
