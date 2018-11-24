<template>
  <div>
    <ul v-if="datalist.length" v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check= "false"
      infinite-scroll-distance="10">
      <li v-for="data in datalist" @click="handlieClick(data.id)" :key="data.id">
        <img :src="data.images[0]" alt="">
      <p>{{data.summary}}</p>
      <p>{{data.brand.name}}</p>
      <p>{{data.name}}</p>
      <p class="price">￥{{data.price}}. <span>0</span></p>
      </li>
    </ul>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import axios from "axios"
import { Indicator } from 'mint-ui';
export default {
  name: 'FlowerDetail',
  data () {
    return {
      datalist:[],
      current:0,
      loading:false,
      total:0,
      msg:"加载中......"
    }
  },
  mounted(){
     Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    }),
    axios.get("/app/search/product?limit=20&offset=0&categoryId=101,102,103,104,105,106,107,111,112,113,121,122,181,191&sortField=RELEASE&sortOrder=DESC").then(res=>{
      this.datalist = res.data.data.items;
      this.total = res.data.data.total;
    }),
    Promise.all([axios.get("/app/search/product?limit=20&offset=0&categoryId=101,102,103,104,105,106,107,111,112,113,121,122,181,191&sortField=RELEASE&sortOrder=DESC")]).then(res=>{
       Indicator.close();
    })
  },
  methods:{
    handlieClick(id){
      this.$router.push('/detail/' + id);
    },
    loadMore(){

      this.current = this.current + 20;

      if(this.current>this.total){
        this.loading = true;
        this.msg = "到底了~~";
        return
      }
      axios.get(`/app/search/product?limit=20&offset=${this.current}&categoryId=101,102,103,104,105,106,107,111,112,113,121,122,181,191&sortField=RELEASE&sortOrder=DESC`).then(res=>{
        this.datalist = [...this.datalist,...res.data.data.items]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul{
  margin-top:50px;
  overflow:hidden;
  li{
    float: left;
    width: 170px;
    font-size: 16px;
    height: 275px;
    list-style: none;
    padding:15px;
    p{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .price{
      color: #004c46;
    }
    span{
      font-size:12px;
    }
    img{
      width: 100%
    }
  }
}

</style>
