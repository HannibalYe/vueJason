<template>
  <div class="slide-show">
  	<div>{{msg}}</div>
    <div class="slide-img">
      <a>
      	<img :src="slides[nowIndex].src">
       <!--<transition name="slide-trans">
          <img >
        </transition>
        <transition name="slide-trans-old">
        </transition>-->
      </a>
    </div>
    <h2>{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goto(preImg)">&lt;</li>
      <li v-for="(item,index) in slides">
        <a @click="goto(index)">{{index+1}}</a>
      </li>
      <li @click="goto(nextImg)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
	props: {
    slides:{
    	type:Array,//设置接受类型，严谨，如果不是数组类型则报错
    	default:[]//设置初始值
    },
    inv:{
    	type:Number,
    	default:1000
    }
  },
  data () {
    return {
    	msg:"这是插件页面",
    	nowIndex:0
    }
  },
  methods:{
  	goto(index){
  		this.nowIndex = index
  		console.log(index)
  	},
  	runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextImg)
      }, this.inv)
    }
  },
  computed: {
    preImg(){
  		if(this.nowIndex==0){
  				return  this.nowIndex + this.slides.length - 1
  		}else{
  				return this.nowIndex - 1
  		}
  	},
  	nextImg(){
  		if(this.nowIndex == this.slides.length - 1){
  			 return 0
  		}else{
  			return this.nowIndex + 1
  		}
  	}
  },
  /*
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },*/
  mounted () {//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  	console.log(this.slides)
   	this.runInv();
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>
