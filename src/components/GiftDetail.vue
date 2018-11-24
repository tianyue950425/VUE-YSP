  <template>
  <div>
     <div class="product-detail" >
        <div class="product-detail-new">
          <div class="product-img">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="data,index in datalist1" v-swipe="index">
                      <img :src="data">
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
          </div>
          <div class="product-info" v-if="obj">
            <div class="brands-name" >
              {{obj.data.brand.name}}
            </div>
            <div class="name">
              {{obj.data.name}}
            </div>
            <div class="summary">
            {{obj.data.summary}}</div>
            <div class="price">
              <div class="realPrice">
                  <span class="sign"></span>
                  <span class="symbol">￥</span>
                  <span class="int">{{obj.data.price}}</span>
                  <span>.</span>
                  <span class="decimal">0</span>
              </div> 
            </div>
          </div>
          <div class="product-badges">
            <div class="badges-item" style="color: rgb(77, 77, 77);" v-for="data in datalist">
               <img :src="data.icon" class="badges-icon">{{data.text}}
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="product-newbox" >
          <div class="p-detail-new nomargin">
            <div class="expand-product" v-for="data in datalist3">
              <div class="p-detail-tit">
                <div class="p-e-tit">{{data.titleEn}}</div>
                <div class="p-z-tit">{{data.title}}</div>
              </div>
              <div class="p-detail-content">
                <div class="p-child-content"></div>
                <div class="p-text">
                   {{data.modules[0].text}}
                </div>
              </div>
            </div>
          </div>
          <!--去上一页  -->
          <div class="p-brand-index" v-if="obj">
            <a href="/#/home">
              {{obj.data.brand.name}} 去主页
            </a>   
          </div>
          <div class="p-title-box "  @click="isShow = !isShow">
             <div class="title" >点击显示详细信息</div>
            </div>
          <div class="p-detail-new expanded" v-for="data,index in datalist4" v-if="isShow">
            <div class="p-title-box">
             <div class="title" >{{data.title}}</div>
             <!-- <div class="arrow arrow-down"></div>   icon-->
            </div>
            <div class="content-box">
               <div class="p-detail-content">
                 <div class="p-child-content">
                   <div class="p-child-tit"></div> 
                   <div class="p-text">
                      {{data.modules[0].text}}
                   </div>
                 </div>
                </div>
            </div>  
          </div>
          <div class="p-title-box"></div> 
          <div class="p-title-box"></div> 
          <div class="p-title-box"></div> 
          
             <div class="foot">
                <div class="minicart iconfont icon-cart">
                   <div class="fix-num">
                      <div class="cart-num" >0</div>  
                      <div class="triangle-right"></div>
                    </div>
                </div>
                <div class="service iconfont icon-atmaway"></div>
                <div class="action-button">
                  <div class="buy">立即购买</div>
                  <div class="cart">加入购物车</div> 
                </div>
            </div>

      </div> 
    </div>
  </div>

  </template>

  <script>
  import axios from "axios"
  import Vue from "vue" 
  import Swiper from "swiper" 
  import "swiper/dist/css/swiper.css"

  Vue.directive("swipe",{
    inserted(el,binding,vnode){
      if(binding.value === vnode.context.datalist1.length-1){
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
     }
    }
  })

  export default {
    name: 'GiftDetail',
    data () {
      return {
       isShow:false,
       obj:null,   //brand
       datalist:[],  //badges
       datalist1:[],  //轮播图片
       datalist2:[],   //
       datalist3:[],
       datalist4:[]
      }
    },

    methods:{
    },
    mounted(){
      axios.get(`/app/product/${this.$route.params.id}`).then(res=>{
        //console.log(res.data);
        this.obj =res.data
        this.datalist =res.data.data.badges
        this.datalist1 =res.data.data.images
       //console.log(this.datalist)
      }).catch(error=>{
        console.log(error);
       }),
      axios.get(`/app/product/${this.$route.params.id}/details?legacy=false`).then(res=>{
        console.log(res.data);
        this.datalist2 = res.data.data.details
        //console.log(this.datalist2); 
        for(var i = 0;i < 3; i++){
          this.datalist3.push(this.datalist2[i])
        }
        //console.log(this.datalist3)
        for(var i = 3;i < this.datalist2.length; i++){
          this.datalist4.push(this.datalist2[i])
        }
         console.log(this.datalist4)
        //console.log(this.obj.data.badges)
      }).catch(error=>{
        console.log(error);
       })
      },
      beforeDestroy(){
      
      }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  padding:0;
  margin: 0;
}
a{
  list-style: none;
  text-decoration:none;
  color:#000;
}
.product-detail{
  width: 100%;
  overflow: hidden;
}
.product-detail-new{
    padding: 0 0 33px;
}
img{
  width:100%;
}
.product-info {
    margin-bottom: 35px;
    padding: 0;
    text-align: center;
}
.brands-name {
    margin-top: 30px;
    margin-bottom:10px;
    font-weight:700;
    font-size:10px;
    color: #282828;
}
.name {
    font-size:20px;
    font-weight: 700;
    letter-spacing:1px;
    color: #282828;
}
.summary {
    margin-top:3px;
    font-size:14px;
    line-height: 1;
    color: #4d4d4d;
}
.price {
    font-weight:700;
    font-size:20px;
    color: #004c46;
    margin-top:8px;
}
.price>div {
    display: inline-block;
    margin-right:6px;
}
.price .decimal {
    font-size:16px;
}
 .product-badges {
  width: 100%;
  height:40px;
  padding: 24px 0;
    margin: 0 16px 48px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    zoom: 1;
    font-size:14px;
}
.badges-item {
    position: relative;
    padding-bottom: 5px;
    margin-left:11px;
    margin-right:16px;
    padding-left:22px;
    float:left;

} 
.badges-item img{
  width:14px;
}
.line{
  background:#4a4a4a;
    width: 100%;
    height:4px;
    background-size: cover;
}
.p-detail-tit {
    margin-bottom:26px;
    text-align: center;
    letter-spacing:1px;
}
.p-detail-tit .p-e-tit {
  width: 100%;
  height: 40px;
    margin-bottom:8px;
    font-weight: 700;
    color: #000;
    font-size:36px;
}
.p-z-tit {
    font-weight: 700;
    font-size:16px;
    color: #2b2b2b;
}
.p-detail-content {
    padding: 0 44px;
    letter-spacing: 1px;
}
.p-detail-content .p-child-content {
    margin-top:11px;
}
.p-detail-content .p-text {
    line-height: 1.9;
    font-size:14px;
    font-weight: 700;
}
.expand-product{
    margin-top: 55px;
    padding-bottom: 55px;
    border-bottom: 1px solid #e6e6e6;
}
.p-brand-index{
    margin: 26px 0;
    text-align: center;
}
.p-detail-new .expanded {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
}
.title-box {
    position: relative;
}
.p-title-box {
    margin: 0 16px;
    padding: 20px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}
.title-box .title {
    font-weight: 700;
    padding: 0 16px;
    font-size:14px;
    color: #2b2b2b;
}
.p-title-box .content-box .p-detail-content {
    padding: 0 16px;
}
.p-detail-new .p-detail-content {
    padding: 0 35px;
    letter-spacing:1px;
}
.p-text {
    line-height: 1.9;
    font-size: 12px;
    font-weight: 700;
}
.foot{
     overflow: hidden;
    display: block;
    height:55px;
    width:100%;
    position:fixed; 
    background:#fff;
    bottom: 0;
    left: 0;
}
 .minicart {
    width:20px;
    height:20px;
    margin:15px 0 0 15px;
    background-size: cover;
    position: relative;
    float: left;
}
.iconfont .icon-cart{
  font-size:20px;
}
 .fix-num {
    width:30px;
    height:18px;
    position: absolute;
    top:-8px;
    right: -22px;
}

.cart-num {
    min-width:13px;
    min-height: 17px;
    background: #009688;
    display: inline-block;
    border-radius: 8px;
    font-size: 10px;
    line-height: 18px;
    color: #fff;
    text-align: center;
    padding: 0 3px;
}
 .triangle-right {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 8px solid #009688;
    border-bottom: 5px solid transparent;
    position: relative;
    left:18px;
    top:-25px ;
}
.service {
    width:20px;
    height:20px;
    padding-left: 10px;
    margin:15px 0 0 15px;
    background-size: cover;
    position: relative;
    float: left;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
}
.action-button {
    float: right;
}
.buy{
    height:60px;
    width:120px;
    line-height: 60px;
    color: #fff;
    font-size:16px;
    text-align: center;
    float: left;
    background: #166b64;
}
.cart {
    height:60px;
    width: 120px;
    line-height: 60px;
    color: #fff;
    font-size:16px;
    text-align: center;
    float: left;
    background:#022c27;
}
</style>
