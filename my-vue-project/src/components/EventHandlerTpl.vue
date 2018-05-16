<template>
	<div class="border_div">
		<h5>{{msg}}</h5>
		watch 用来监听相应属性
		<input type="text" v-model="eventValue">
		{{eventValue}}
		==========================================
		<div v-for="(item,index) in list">
			{{item.name}}===========>>{{item.age}} <button @click="addItem" >{{index}}</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				eventValue:'',
				msg:'这是我的事件监听模版',
				list:[{name:"n1",age:"10"},{name:"n2",age:"20"},{name:"n3",age:"30"}]
			}
		},
		watch:{
			eventValue:function(val,oldVal){
				console.log(val+"++++"+oldVal);
			},
			list:function(){
				console.log("list changed");
			}
		},
		methods:{
			addItem:function(){
				this.list.push({name:"n5",age:"50"});
			}
		}
	}
</script>

<style>
	.border_div{
		border:1px solid #2C3E50;
		height:180px;
		width: 100%;
		padding:5px;
	}
</style>