<template>
  <div>
    <slot></slot>
    <ul class="list-top">
      <li v-for="data in datalist1">
        {{data.name}}
      </li>
    </ul> 
  <footer>
    <ul>
      <li>重置筛选项</li>
      <li>确定</li>
    </ul>
  </footer>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'screenbar',
  data () {
    return {
    datalist:null,
    datalist1:[]
    }
  },
  mounted(){
    axios.get("/app/search/filter?new=1&title=%E6%96%B0%E9%B2%9C%E4%B8%8A%E6%9E%B6").then(res=>{
      console.log(res.data);
      this.datalist = res.data.data[0].items;
      for(var i = 0;i<30;i++){
        this.datalist1.push(this.datalist[i]);
      }
    })
  },
  methods:{
   
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  #icon{
    font-size: 25px;
    float: right;
    margin-right: 20px;
  }
  .list-top{
    margin-left:15px;
    margin-top:30px;
    position: relative;
    list-style: none;
    li{
      width: 115px;
      height: 32px;
      margin: 5px;
      font-size: 18px;
      background: #f4f4f4;
      float: left;
      text-align: center;
      color:#2b2b2b;
    }
    
  }
  footer{
    ul{
    width: 100%;
    list-style: none;
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 18px;
    li{
        float: left;
        flex:1;
        height: 50px;
        line-height: 50px;
        list-style: none;
        text-align: center;
    }
    li:nth-of-type(2){
      color:#fff;
        background: #022c27;
    }
  }
  }
  
}

</style>
