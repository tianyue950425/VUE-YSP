import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Product from '../components/product'
import Shelftime from '../components/shelftime'
import Commodityprice from '../components/commodityprice'
import Detail from "../components/detail"


import Flower from '../components/flower'
import FlowerDetail from '../components/FlowerDetail'

/*家纺*/
import Textiles from '../components/Textiles'
import TextilesDetail from '../components/TextilesDetail'

/*家具*/
import Furniture from '../components/Furniture'
import FurnitureDetail from '../components/FurnitureDetail'

/*家饰餐厨*/
import Kitchen from '../components/Kitchen'
import KitchenDetail from '../components/KitchenDetail'

/*家居服*/
import Cloth from '../components/Cloth'
import ClothDetail from '../components/ClothDetail'

/*珠宝配饰*/
import Jewelley from '../components/Jewelley'
import JewelleyDetail from '../components/JewelleyDetail'

import Beauty from '../components/Beauty'
import BeautyDetail from '../components/BeautyDetail'

/*香氛*/
import Fragrance from '../components/Fragrance'
import FragranceDetail from '../components/FragranceDetail'

/*礼物*/
import Gift from '../components/Gift'
import GiftDetail from '../components/GiftDetail'

/*海外直邮*/
import Nature from '../components/Nature'
import NatureDetail from '../components/NatureDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/home',
    	component: Home
    },
    {
    	path:"*",
    	redirect:'/home'
    },
    {
    	path:'/product',
    	component:Product,
    	children:[
      	  {
      	  	path:'shelftime',
      	  	component:Shelftime
      	  },
      	  {
      	  	path:'commodityprice',
      	  	component:Commodityprice
      	  }
    	]
    },
    {
      path: '/detail/:id',
      component:Detail
    },
    {
      path:'/detaillist/0',
      component:Flower
    },{
       path:'/FlowerDetail/:id',
      component:FlowerDetail
    },{
      path:'/detaillist/1',
      component:Textiles
    },{
      path:'/TextilesDetail/:id',
      component:TextilesDetail
    },{
      path:'/detaillist/2',
      component:Furniture
    },{
      path:'/FurnitureDetail/:id',
      component:FurnitureDetail
    },{
      path:'/detaillist/3',
      component:Kitchen
    },{
      path:'/KitchenDetail/:id',
      component:KitchenDetail
    },{
      path:'/detaillist/4',
      component:Cloth
    },{
      path:'/ClothDetail/:id',
      component:ClothDetail
    },{
      path:'/detaillist/5',
      component:Jewelley
    },{
      path:'/JewelleyDetail/:id',
      component:JewelleyDetail
    },{
      path:'/detaillist/6',
      component:Beauty
    },{
      path:'/BeautyDetail/:id',
      component:BeautyDetail
    },{
      path:'/detaillist/7',
      component:Fragrance
    },{
      path:'/FragranceDetail/:id',
      component:FragranceDetail
    },{
      path:'/detaillist/8',
      component:Gift
    },{
      path:'/GiftDetail/:id',
      component:GiftDetail
    },{
      path:'/detaillist/9',
      component:Nature
    },{
      path:'/NatureDetail/:id',
      component:NatureDetail
    }
  ]
})
