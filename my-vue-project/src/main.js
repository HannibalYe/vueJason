// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
new Vue({
	el:'#app',
	//render:h => h(App)
	render: function(h){
		return h(App)
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