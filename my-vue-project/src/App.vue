<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div :title="hello">{{hello}}</div>
    ====================================
    <div v-html="hello"></div>
    <div v-text="hello"></div>
    {{status?'success':num+1}}
    ====================================
    <div v-for="(item,index) in list" :class="{odd:index%2}">{{item.name}}:{{item.age}}\\\{{index}}</div>
    <div v-for="item in list" v-text="item.name + '_' + item.age"></div>
    <div v-for="(value,key) in objectList" v-text="key + '_' + value"></div>
		<br>
   	定义一个双向绑定按钮
   	<button v-on:click="addItem">addItem</button>
   	
  </div>
</template>

<script>
import Vue from 'Vue'
export default {
  data(){
  	return {
  		hello:'<p>word</p>',
  		num:1,
  		status:true,
  		list:[
  			{
  				name:"n1",age:"1"
  			},
  			{
  				name:"n2",age:"2"
  			},
  			{
  				name:"n3",age:"3"
  			}
  		],
  		objectList:{
  			name:"apple",
  			price:"100",
  			color:"red"
  		}
  	}
  },
  methods:{
		addItem(){
			//正常修改数组的某一项，vue是不作为双向绑定修改的
			//例如下面的例子
			/*this.list[1]({
  				name:"n4",age:"4"
			})*/
			//修改数组中的某一项双向绑定 可以用Vue的全局方法
			Vue.set(this.list,1,{name:"n4",age:"4"})
			/*this.list.push({
  				name:"n4",age:"4"
			})*/
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
