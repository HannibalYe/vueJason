// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import $ from 'jquery'

import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/red'

import VueRouter from 'vue-router'  //引入  //相当于var VueRouter = require('vue-router')

import VueResource from 'vue-resource'
Vue.use(VueRouter)//注册给Vue
Vue.use(VueResource)//注册给Vue

let router = new VueRouter({//router 需要实例化自己才能够使用
	//映射关系设置 注意是 ============》》》》 routes 不是 routers
	mode:'history',//vue-router中，如果跳转路由后直接跳转页面顶部等，只能使用history模式 ,url中没有了‘#’号
	routes:[{
	 	//path:'/apple/:color',
	 	path:'/apple',
	 	component:Apple,
	 	children:[
	 		{
	 			path:'red',
	 			component:RedApple
	 		}
	 	]
	 },
	 {
	 	path:'/banana',
	 	component:Banana
	 }
	 ]
	
});

new Vue({
	el:'#app',
	//render:h => h(App)
	router,
	render: function(h){
		return h(App)
	},
	directives:{
		
	}
})


/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/
/*var myContent = {
	 template:'<div>this a content</div>'
}
var myHeader={
	template:'<p v-html="test" v-on:keydown.enter="">this is<my-content>sss</my-content> my-header</p>',
		components:{
		'my-content':myContent
	},
	data:function(){
		return {
			msg:{name:'name-yezhenchi',age:'30'}
		}
	}
}
var root = new Vue({
	el:'#app',
	data:{
		msg:"yezhenchi"
	},
	components:{
		'my-header':myHeader
	}
})*/