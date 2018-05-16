<template>
  <div class="hello" style="height:auto;width:100%;border:1px #2C3E50 solid;">
    <h3>{{ msg }}</h3>
    <div>这是从父模版调用过来的===》》》》》{{numberToCom}}</div>注意变量从横杠变成驼峰
    <br><button @click="emitMyEven">comA 按钮</button>
    	插槽功能 接收父组件过来的标签<slot></slot>
    	插槽功能 接收父组件过来的具名标签<slot name="header">no slot</slot>
  </div>
</template>
 
<script>
export default {
	props:['number-to-com'],
  data () {
    return {
      msg: '这是我的comA-模版的的例子！'
    }
  },
  methods:{
  	emitMyEven(){
  		//模版引用 parent --->> children通过属性传递。children --->> parent 通过emit函数传递。
  		//第一个参数是 App.vue中的定义的自定义@my-event事件，相当于一个函数的动态绑定调用
  		//第二个参数就是@my-event 在method中定义的方法onComMyEvent实现方法中的参数：onComMyEvent(fromEventParam){.....}
  		this.$emit('my-event',"传递的参数")
  	}
  }
}
</script>