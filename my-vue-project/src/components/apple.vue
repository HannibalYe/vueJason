<template>
  <div class="hello" style="height:auto;width:100%;border:1px #2C3E50 solid;">
    <h3>{{ msg }}</h3>===>{{$route.params.color}}
    <button @click="getParam">获取router传递过来的参数</button>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      msg: '我是一个大苹果====='
    }
  },
  methods:{
  	getParam(){
  		 console.log(this.$route.params)
  	}
  }
}
</script>