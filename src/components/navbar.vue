<template>
  <div id="box">
     <slot></slot>
     <i class="iconfont icon-search"></i>
     <i class="iconfont icon-cart"></i>
	 <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      title:"野兽派"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
	#box{
		width:100%;
		height:53px;
		line-height:53px;
		border-bottom:1px solid #e1e1e1;
		background: white;
		position: fixed;
		left:0;
		top:0;
		z-index: 2222;
		overflow: hidden;
	}
	#box .icon-category{
		float:left;
		margin-left: 10px
	}
	#box i{
		float:right;
		margin-right: 20px;
	}
	#box h2{
		width:100%;
		height:53px;
		text-align:center;
		font-weight: normal;
	}
</style>
