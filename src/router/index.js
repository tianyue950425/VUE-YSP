import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Product from '../components/product'
import Shelftime from '../components/shelftime'
import Commodityprice from '../components/commodityprice'
import Detail from "../components/detail"

/*花艺*/
import Flower from '../components/flower'

/*家纺*/
import Textiles from '../components/Textiles'

/*家具*/
import Furniture from '../components/Furniture'


/*家饰餐厨*/
import Kitchen from '../components/Kitchen'

/*家居服*/
import Cloth from '../components/Cloth'

/*珠宝配饰*/
import Jewelley from '../components/Jewelley'

/*美妆个护*/
import Beauty from '../components/Beauty'


/*香氛*/
import Fragrance from '../components/Fragrance'
import FragranceDetail from '../components/FragranceDetail'

/*礼物*/
import Gift from '../components/Gift'

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
      path:'/detaillist/1',
      component:Textiles
    },{
      path:'/detaillist/2',
      component:Furniture
    },{
      path:'/detaillist/3',
      component:Kitchen
    },{
      path:'/detaillist/4',
      component:Cloth
    },{
      path:'/detaillist/5',
      component:Jewelley
    },{
      path:'/detaillist/6',
      component:Beauty
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
      path:'/detaillist/9',
      component:Nature
    },{
      path:'/NatureDetail/:id',
      component:NatureDetail
    }
  ]
})
