<template>
  <div id="box1">
    <ul class="list-group">
      <router-link to="/product/shelftime" tag="li"  class="title">新鲜上架</router-link>
        <router-link to="/product/commodityprice" tag="li"  class="title">本周主打</router-link> 
        <router-link to="/home" tag="li"  class="title">我的账号</router-link> 
    </ul>
<!--             轮播 -->
    <div class="swiper-container" v-if="datalist.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data,index in datalist" :key="data.link.value">
          <img :src="data.image.src">
        </div>
      </div>
    </div>
  <div class="container">
<!--     第一个图 -->
      <div class="content">
        <div class="content-group">
          <h2>BEAST DAILY</h2>
        </div>
        <div v-if="data2.data.image && data2.data.title" v-for="data2 in datalist2"  :key="data2.data.link.value" class="content-pic">
            <div class="content-pic-box">
              <img :src="data2.data.image.src">
            </div>
            <div class="title-group">
              <p class="tag">{{data2.data.tag}}</p>
              <p class="title">{{data2.data.title}}</p>
            </div>
            <p class="desc">{{data2.data.desc}}</p>
        </div>
      </div>


  <!--     第二个图 -->
      <div class="content_2" v-if="datalist3.image">
        <h2>SINGLE BEAST</h2>
        <img :src="datalist3.image.src" >
      </div>



  <!--     第三个图 -->
      <div class="content_3">
        <h2>EDITOR'S PICKS
          <span>编辑推荐</span>
        </h2>
        <div v-for="data3 in datalist4" @click = "handleClick(data3.id)" class="content-pic-group">
          <div class="content_3_pic_box">
            <img :src="data3.featureImage">
          </div>
          <div class="content_3_text_box">
            <p class="bdname">{{data3.brand.name}}</p>
            <p class="name">{{data3.name}}</p>
            <p class="price">￥{{data3.price}}</p>
          </div>
        </div>
      </div>
      


      <div class="mmmm"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Vue from "vue"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import { Indicator } from 'mint-ui';

export default {
  name: 'home',
  data () {
    return {
      datalist:[],
      datalist2:[],
      datalist3:[],
      datalist4:[]
    }
  },
  mounted(){
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    }),
    axios.get("/app/index/getIndexDatas").then(res=>{
     // console.log(res.data.data.banners)
      this.datalist = res.data.data.banners
      this.datalist2 = res.data.data.daily
      this.datalist3 = res.data.data.singleBeast
      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          slidesPerView:2,
            spaceBetween: 210,
            centeredSlides: true,
            autoplay: {
            delay: 2500,
            disableOnInteraction: false
          }

          })
      })
      console.log(this.datalist3)
    }).catch(error=>{
      console.log(error)
    }),
    axios.post('/app/product/simple',["PROD001026541","PROD001022983","PROD001026304","PROD001026503","PROD001024475","PROD001020048","PROD001014367","PROD001026087","PROD001025863","PROD001025925"]).then(res=>{
      this.datalist4 = res.data.data
    }).catch(error=>{
      console.log(error)
    }),
    Promise.all([axios.get("/app/index/getIndexDatas"),axios.post('/app/product/simple',["PROD001026541","PROD001022983","PROD001026304","PROD001026503","PROD001024475","PROD001020048","PROD001014367","PROD001026087","PROD001025863","PROD001025925"])]).then(res=>{
       Indicator.close();
    })
  },
  methods:{
      handleClick(id){
        console.log(id)
        this.$router.push('/detail/'+id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #box1{
      width:100%;
      margin-top: 100px;
      overflow: hidden;
      position: relative;
      z-index:2;
    }
    .list-group{
      width:100%;
      display: flex;
      border-bottom: 1px solid #e6e7e8;
      height:30px;
      position: fixed;
      left:0;
      top:54px;
      background:white;
      z-index: 7777
    }
    li{
      flex:1;
      text-align: center;
      font-size:10px;
      border-right:1px solid #e6e7e8;
      line-height: 30px;
    }
/* ---------轮播的样式------------*/
    html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      margin-bottom:40px;
      margin-top:35px;
    }
    .swiper-slide {
      width:275px;
      height:340px;
      text-align: center;
      font-size: 18px;
      background: #fff;

     
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    img{
      width:275px;
    }
/* -------------商品样式-----------*/

    .title-group{
      border-left:2px solid #d8d8d8;
      text-indent:10px;
    }
    .title{
      color:#2b2b2b;
    }
    .tag{
      color:#004c46;
      font-size:10px;
    }
    .desc{
      color:#2b2b2b;
      font-size:10px;
      margin-top:5px;
    }
    .desc{
      text-indent:20px;
    }
    .content-pic{
      width:100%;
      margin-bottom:40px;
    }
    .content-pic-box{
      width:100%;
    }
    .content-pic img{
      width:100%;
      margin:0 auto 15px auto;
    }
    .container{
      width:90%;
      margin:0 auto;
    }
    .content{
      width:100%;
      border-top:2px solid rgb(216,216,216);
    }
    .content-group{
      width:100%;
      margin:0 auto;
    }
    .content-group h2{
      height:80px;
      line-height: 80px
    }
/*   -------- 第二个内容样式-------------*/
    .content_2{
      width:100%;
      border-top:2px solid rgb(216,216,216);
    }
    .content_2 h2{
      height:80px;
      line-height:80px;
    }
    .content_2 img{
      width:100%;
      margin-bottom:30px;
    }
/*  ---------  第三个内容样式---------*/
    .content_3{
      width:100%;
      border-top:2px solid rgb(216,216,216);
      overflow: hidden;
    }
    .content_3 h2{
      height:80px;
      line-height:80px;

    }
    .content_3 h2 span{
      font-weight: normal;
      font-size:14px;
      margin-left: 10px
    }
    .content_3 .content-pic-group{
      width:43%;
      float:left;
      margin-right: 48px
    }
    .content_3 .content_3_pic_box{
      width:100%;
    }
    .content_3 .content_3_pic_box img{ 
      width:100%;
/*      margin:0 auto;*/
      margin-bottom: 7px
    }
/*    .content_3 .content_3_text_box p{
      text-indent: 7px
    }*/
    .content_3 .bdname{
      font-size:6px;
    }
    .content_3 .name{
      font-size:10px;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .content_3 .price{
      font-size:10px;
      margin-top:6px;
    }
    .content_3 div:nth-of-type(2n+0){
      margin-right:0;
    }
/*    -------- 空白的效果---------*/
    .mmmm{
      width:100%;
      height:100px;
      background: white
    }

</style>

