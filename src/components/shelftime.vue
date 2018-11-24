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
			<p>￥{{data.price}}</p>
    	</li>
    </ul>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'shelftime',
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
    axios.get("/app/search/product?limit=20&offset=0&new=1&title=%E6%96%B0%E9%B2%9C%E4%B8%8A%E6%9E%B6&sortField=RELEASE&sortOrder=DESC").then(res=>{
      console.log(res.data);
      this.datalist = res.data.data.items;
      this.total = res.data.data.total;
      console.log(this.total);
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
  		axios.get(`/app/search/product?limit=20&offset=${this.current}&new=1&title=%E6%96%B0%E9%B2%9C%E4%B8%8A%E6%9E%B6&sortField=RELEASE&sortOrder=DESC`).then(res=>{
  			this.datalist = [...this.datalist,...res.data.data.items]
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
		img{
			width: 100%
		}
	}
}

</style>
