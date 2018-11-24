<template>
  <div>
    <ul>
    	<router-link to="/product/shelftime" tag="li" @click.native="ActiveSwitch1()">
    	上架时间
    	<i :class="isActive1?'iconfont icon-moreunfold':'iconfont icon-less'"></i>
    	</router-link>
    	<router-link to="/product/commodityprice" tag="li" @click.native="ActiveSwitch2()">
    	商品价格
    	<i :class="isActive2?'iconfont icon-moreunfold':'iconfont icon-less'"></i>
    	</router-link>
      <li @click="ScreenIsShow = !ScreenIsShow">筛选</li>
    </ul>
    <router-view></router-view>
    <transition name='tianyue'>
      <Screenbar v-show="ScreenIsShow" > 
      <i class="iconfont icon-more" id="icon" @click="ScreenIsShow = !ScreenIsShow"></i> 
      </Screenbar>
    </transition>
  </div>
</template>

<script>
import Screenbar from "./screenbar"
export default {
  name: 'product',
  data () {
    return {
      ScreenIsShow:false,
      isActive1:true,
      isActive2:false
    }
  },
  components:{
    Screenbar
  },
  methods:{
    ActiveSwitch1(){
      this.isActive1 = true;
      this.isActive2 = false;
    },
    ActiveSwitch2(){
      this.isActive1 = false;
      this.isActive2 = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  position: relative;
}
	ul{
	margin-top:53px;
	display: flex;
    height: 48px;
    border-bottom:1px solid #e6e7e8;
    border-top:1px  solid #e1e1e1;
    color: #4d4d4d;
    background: #fafafa;
    position: relative;
		li{
      list-style: none;
      line-height: 48px;
			flex:1;
      text-align: center;
      border-right:1px solid #e6e7e8;
		}
	}
  .tianyue-enter-active, .tianyue-leave-active {
     transition: all 1s;
   }
   .tianyue-enter, .tianyue-leave-to {
     opacity: 0;
     transform: translateX(100%);
   }
</style>
