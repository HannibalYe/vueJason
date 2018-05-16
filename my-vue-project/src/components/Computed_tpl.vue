<template>
	<div class="border_div">
		计算例子model === demo,
		<br>用于监听。例如想在输入框里删除数字，那么在withoutComputNum()方法中去做,
		<br>可以根据其他属性（computResult）去动态的更改属性
		<br><input type="text" v-model="computResult">======>>>>{{withoutComputNum}}<<<<<<<<==========
		||||||||||||知识点===》看源码中	
		<!--<p>知识点：在methods属性下定义‘getValueToReplace’这个函数，然后在页面调用{{getValueToReplace}}这个方法。</p>
		<p>实现的效果是一样的，但是为什么要用computed的方法呢？</p>
		<p>我们现在是想根据computResult更新，而进行更新。计算属性computed只有在根据this.computResult更新而更新，
			如果computResult不再更新，那么‘withoutComputNum’方法也不进行调用。如果只是‘getValueToReplace’方法，那么
			无论什么时候调用‘getValueToReplace’方法，都会对computResult值进行处理</p>
			<P>PS:两种方式在缓存上也大有不同，利用computed计算属性是将 content与message绑定，
			只有当message发生变化时才会触发content，而methods方式是每次进入页面都要执行该方法，
			但是在利用实时信息时，比如显示当前进入页面的时间，必须用methods方式</P>-->
		
	</div>
</template>
<script>
 export default {
  data () {
    return {
      computResult: ''
    }
  },
  computed:{
  	withoutComputNum:function(){
  		//删除数字
  		return this.computResult.replace(/\d/g,'');
  	}
  },
  methods:{
  	//定义函数 在页面调用方法
  	getValueToReplace(){
  		//删除数字
  		return this.computResult.replace(/\d/g,'');
  	}
  }
}
</script>

<style>
	.border_div{
		border:1px solid #2C3E50;
		height:80px;
		width: 100%;
		padding:5px;
	}
</style>