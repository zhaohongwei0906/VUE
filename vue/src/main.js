import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Index from './views/Index.vue'
import Details from './views/Details.vue'
import Products from './views/Products.vue'
import Cart from './views/Cart.vue'
import Team from './views/Team.vue'


//引入axios模块  放在node_modules都不用加./
import axios from 'axios'



//引入要作为全局组件的对象---头
import MyHeader from './components/MyHeader'
//引入要作为全局组件的对象---脚
import MyFoot from './components/MyFoot'


//将MyHeader普通对象，重新封装为全局组件
Vue.component("my-header",MyHeader);
Vue.component("my-foot",MyFoot);




Vue.config.productionTip = false
//让axios自动携带 cookieid到服务器端，为学session做准备
axios.defaults.withCredentials=true
//将axios对象放入Vue的原型对象中
Vue.prototype.axios=axios

//main.js是整个程序的入口

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')
