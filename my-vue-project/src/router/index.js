import Vue from 'vue'
import Router from 'vue-router'
import MyFirstDemo from '@/components/MyFirstDemo'

Vue.use(Router)

export default new Router({
  routes: [
  {
    	path:'/',
    	name:'MyFirstDemo',
    	component:MyFirstDemo
  }
  ]
})
