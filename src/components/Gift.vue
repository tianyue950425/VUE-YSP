<template>
  <div>
    <div class="pic" v-if="obj">
      <img :src="obj.data.image.src">
    </div>
    <ul v-if="datalist" v-infinite-scroll="loadMore"
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
    <!-- <p>{{msg}}</p> -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'shelftime',
  data () {
    return {
      datalist:[],
      obj:null,
      current:0,
      loading:false,
      total:0,
      msg:"加载中......"
    }
  },
  mounted(){
    axios.get("/app/article/1022324").then(res=>{
      console.log(res.data.data.modules[0].data.image.src);
      this.obj = res.data.data.modules[0];
      console.log(this.obj);
      /* this.total = res.data.data.total;
      console.log(this.total);*/
    }),
    axios.post('/app/product/simple',["PROD001022345","PROD001022344","PROD001021374","PROD001021375","PROD001021373","PROD001021378","PROD001020630","PROD001020631","PROD001020440","PROD001020441","PROD001020442","PROD001023944","10010001","PROD001020751","PROD001020183","PROD001020184","PROD001020185","PROD001020186","PROD001020187","PROD001022094","PROD001024084","PROD001024085","PROD001024086","PROD001024087","PROD001024088","PROD001024089","PROD001024090","PROD001024091","PROD001024911", "PROD001024944", "PROD001024909", "PROD001025285", "PROD001024942", "PROD001018766","PROD001021109", "PROD001017997", "PROD001023966", "PROD001025475", "PROD001013323", "PROD001020844","PROD001020902", "PROD001020903", "PROD001017538", "PROD001017539", "PROD001017540", "12014077"]).then(res=>{
        this.datalist = res.data.data
        console.log(this.datalist)
      }).catch(error=>{
        console.log(error)
      })
    },
  methods:{
    handlieClick(id){
      this.$router.push('/detail/' + id);
    },
    loadMore(){
      console.log('到底了');

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
.pic{
  width:380px;
  padding-left:16px;
  padding-right:16px;
  margin:20px auto;
  margin-top: 55px;
}
.pic img{
  width:100%;
  overflow: hidden;
}
ul{
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
