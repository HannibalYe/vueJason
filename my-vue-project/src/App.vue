<template>
  <div id="app" style="padding:0 0 100px 0;">
    <!--<img src="./assets/logo.png">-->
    <div :title="hello">{{hello}}</div>
    ====================================
    <div v-html="hello"></div>
    <div v-text="hello"></div>
    {{status?'success':num+1}}
    ===================================================================
    <!--v-for 循环-->    
    <div v-for="(item,index) in list" :class="{odd:index%2}">{{item.name}}:{{item.age}}\\\{{index}}</div>
    <div v-for="item in list" v-text="item.name + '_' + item.age"></div>
    <div v-for="(value,key) in objectList" v-text="key + '_' + value"></div>
    ==================================================================
		<br>
   	定义一个双向绑定按钮 v-on 可以缩写成 “@”注意后面没有冒号  v-on: = @
   	||||||||||||||||||||  .stop 阻止冒泡
   	<br><button @click.stop="addItem">addItem</button>
   	
   	<!--属性的绑定 "v-bind" 缩写  冒号":"		常用来绑定class-->
   <!--	<a v-bind:href="link" :class="className">link</a>-->
   	<a :href="link" :class="className">link</a>
   	<!-- class可以用数组的方式来显示 多个 class -->
   	<div :class="[classA,classB]">多个class绑定</div>
   	<!-- class可以用数组的方式来显示 多个 class 混合显示 对象的方式显示 设置isError来显示-->
   	<div :class="[classA,{'red-font':!isError}]">对象的方式显示</div>
		<!-- class可以用数组的方式来显示 多个 class 混合显示-->
   	<div :class="[classA,className]">多个class绑定 混合显示</div>
   	
   	
   ===================================================================
   if操作<br>
  <!--本质区别：	v-if是从文档流中删除了元素
  							，v-show 没有从文档流中删除，而是设置了display:none.
  							v-else 和 v-if配合使用，直接定义v-else即可
  -->
   <a v-if="isPartA">
   		init partA
   </a>
   <a v-else><b>no=======data</b></a>
   <a v-show="!isPartA">
   		<br>|||||	v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

				v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
				
				相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
				
				一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
   	|||||||
   </a>
   <button v-on:click="showDetail">detail</button>
   <br>v-on 提供一些修改器，v-on:click.stop <button v-on:click.stop="showDetail">stop阻止冒泡 </button>
   <br><@keydown.13形式><input @keydown.13="onKeydown"/>==<@keydown.enter形式><input @keydown.enter="onKeydown"/> ==>>只有输入框执行回车的时候 才会执行这个绑定的事件
  <br>
  调用模版comA 可以触发自定义事件 那么如何触发这个呢，在comA模版中去定义一个click事件
  <!--
  	调用模版comA number-to-com传递到子模版中
  -->
  <comA @my-event="onComMyEvent" number-to-com="100">
  	<p>功能插槽到子组件slot</p>
  	<p slot="header">功能插槽到子组件指定slot上</p>
  </comA>
  	通过is 动态引用模版VVVVVV 
  <keep-alive>
  	<div :is="currentView"></div>
  </keep-alive>
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ======================================================================
  <br>'v-model'双向绑定文本 用于表单标签的属性，表单外的标签是没有用的
  <br>输入框与页面值绑定。需要在data中定义变量myValue
  <br> v-model.number, v-model.trim
  <input v-model.trim="myValue" type="text">
	{{myValue}}{{typeof myValue}}
	<br>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	 <br>输入框与页面值绑定。需要在data中定义变量myBox 是个数组类型
	<input v-model="myBox" type="checkbox" value="batman">
	<input v-model="myBox" type="checkbox" value="spiderman">
	<input v-model="myBox" type="checkbox" value="superman">
	<div v-html="myBox"></div>
	<br>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	<br>
	注意关于==> :value="item.value" ,记得前面加冒号，否则item.value将作为字符串处理
	<select v-model="opVal">
		<option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
	</select>
	<br>{{opVal}}
	<br>======================================================================
	<computedTpl></computedTpl>
	<br>============================================================================
	<event-handler></event-handler>
	<br>===========================================================================
	<br>
	<br> <div v-color="'red'">自定义标签（制作用于当前app） 不能定义在引用的模版中
	设置全局指令，写在main.js 的 vue对象中，那么在整个项目中可以调用</div>
	<input type="text" v-focus> 
	=================================================================================
	<router-view></router-view>
	<router-link :to="appleUrl" tag="li">to apple</router-link>
	<router-link :to="{path:'apple/red'}">to apple</router-link>
	<router-link :to="{path:'banana'}">to banana</router-link>
  </div>
</template>

<script>
import Vue from 'Vue'
//引用jqeury插件
import $ from 'jquery'
//引用组件
import comA from './components/HelloWorld'
//引用comput组件
import computedTpl from './components/Computed_tpl'
//引用事件监听组件
import EventHandler from './components/EventHandlerTpl'
export default {
	//注册组件
	components:{
		//ES6可以简写成comA
		comA:comA,
		computedTpl:computedTpl,
		EventHandler
	},
	//自定义标签
/*	钩子函数
一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
unbind：只调用一次，指令与元素解绑时调用。
接下来我们来看一下钩子函数的参数 (即 el、binding、vnode 和 oldVnode)。
钩子函数参数
指令钩子函数会被传入以下参数：
el：指令所绑定的元素，可以用来直接操作 DOM 。
binding：一个对象，包含以下属性：
name：指令名，不包括 v- 前缀。
value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。*/
	directives:{
		color:function(el,binding){
			el.style.color = binding.value
		},
		focus:{
				inserted(el,binding){
					el.focus()
			}
		}
	},
  data(){
  	return {
  		appleUrl:'/apple',
  		currentView:"comA",
  		myValue:'',
  		myBox:[],
  		opVal:null,
  		hello:'<p>word</p>',
  		link:'http://baidu.com',
  		num:1,
  		classStr:"classStyle",
  		isError:true,
  		className:{
  			'red-font':true,//显示这个
  			'blue-font':false//不会显示
  		},
  		classA:"class-a",
  		classB:"class-b",
  		status:true,
  		isPartA:true,
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
  		},
  		selectOption:[
							{text:"MW-spiderman",value:"spiderman"},
							{text:"DC-superman",value:"superman"},
							{text:"DC-batman",value:"batman"}
			]
  	}
  	
  },
  methods:{
		//ES6缩写，addItem()相当于addItem:function(){}
		addItem(){
			//正常修改数组的某一项，vue是不作为双向绑定修改的
			//例如下面的例子
			/*this.list[1]({
  				name:"n4",age:"4"
			})*/
			//修改数组中的某一项双向绑定 可以用Vue的全局方法
			Vue.set(this.list,1,{name:"n4",age:"4"});
			//执行push会不断像指定的对象中添加元素
			/*this.list.push({
  				name:"n4",age:"4"
			})*/
		},
		showDetail(){
			console.log($("#app").html());
			this.isPartA = !this.isPartA
			console.log(this.$http.get(''))
		
		},
		onKeydown(){
			console.log("on-----Keydown")
		},
		onComMyEvent(fromEventParam){//参数来自于comA中定义的事件==》this.$emit('my-event',"传递的参数")
			console.log("onComMyEvent"+fromEventParam);
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
