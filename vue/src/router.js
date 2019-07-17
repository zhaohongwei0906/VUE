import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Products from './views/Products'
import Cart from './views/Cart'
import Team from './views/Team'
import Contact from './views/Contact'
import Case8 from './case/Case8'
import Case7 from './case/Case7'
import Case6 from './case/Case6'
import Case5 from './case/Case5'
import Case4 from './case/Case4'
import Case3 from './case/Case3'
import Case2 from './case/Case2'
import Case1 from './case/Case1'
import News1 from './news/News1'
import News2 from './news/News2'
import News3 from './news/News3'
import News4 from './news/News4'
import News5 from './news/News5'
import News6 from './news/News6'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/details",component:Details},
    {path:"/products",component:Products},
    {path:"/cart",component:Cart},
    {path:"/team",component:Team},
    {path:"/contact",component:Contact},
    {path:"/case8",component:Case8},
    {path:"/case7",component:Case7},
    {path:"/case6",component:Case6},
    {path:"/case5",component:Case5},
    {path:"/case4",component:Case4},
    {path:"/case3",component:Case3},
    {path:"/case2",component:Case2},
    {path:"/case1",component:Case1},
    {path:"/news1",component:News1},
    {path:"/news2",component:News2},
    {path:"/news3",component:News3},
    {path:"/news4",component:News4},
    {path:"/news5",component:News5},
    {path:"/news6",component:News6},
    {path:"*",component:{template:`<h2 style="color:red">404 Not Found</h2>`}}
  ]
})
