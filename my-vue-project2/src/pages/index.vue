<template>
	<div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        	<template v-for="item in messageList">
          <h3>{{item.msgTitle}}</h3>
          <ul>
            <li v-for="citem in item.products">
              <a :href="citem.url">{{citem.producName}}</a>
              <span v-if="citem.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!item.last" class="hr"></div>
          </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newMsgList">
            <a :href="item.url"  class="new-item">{{item.newTitle}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <!--<slide-show :slides="slides" :inv="invTime"></slide-show>-->
      <slide-show :slides="slides" :inv="invTime" @onchange="doSomethingChange"></slide-show>
      <div class="index-board-list">
      	<div class="index-board-item" v-for="(item,index) in boardList" 
      			:class="[{'line-last':index % 2 == 0},'index-board-' + item.id]">
        <!--<div
        class="index-board-item"
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">-->
          <div class="index-board-item-inner" >
         	<h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <!--<router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>-->
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import slideShow from '../components/slideShow'
	export default{
		components:{
			slideShow
		},
		created:function(){
			this.$http.get('api/boardList')
			//this.$http.post('api/boardList',{userId:'1234567'})
			.then((res)=>{
				this.boardList = res.data.boardList
				console.log(res.data.boardList);
			},(error)=>{})
		},
		data(){
			return{
				msg:'这是首页',
				invTime: 2000,
     		slides : [
	        {
	          src: require('../assets/slideShow/pic1.jpg'),
	          title: 'xxx1',
	          href: 'detail/analysis'
	        },
	        {
	          src: require('../assets/slideShow/pic2.jpg'),
	          title: 'xxx2',
	          href: 'detail/count'
	        },
	        {
	          src: require('../assets/slideShow/pic3.jpg'),
	          title: 'xxx3',
	          href: 'http://xxx.xxx.com'
	        },
	        {
	          src: require('../assets/slideShow/pic4.jpg'),
	          title: 'xxx4',
	          href: 'detail/forecast'
	        }
	      ],
				messageList:[{
					msgTitle:"PC产品",products:[{producName:"术士",hot:true,url:'sss'},{producName:"战士",url:'sss'},{producName:"法师",url:'ss'}]
				},
				{
					last:true,msgTitle:"PC软件",products:[{producName:"术士套装",hot:true,url:''},{producName:"战士套装",url:''},{producName:"法师套装",url:''}]
				}],
				newMsgList:[
				{
					newTitle:"魔兽世界成为最NB游戏",descrption:"魔兽世界成为最NB游戏 详细。。。。。。。",url:'cccccccccccc'
				},
				{
					newTitle:"魔兽世界成进军世界竞技大赛门票",descrption:"魔兽世界成进军世界竞技大赛门票 详细。。。。。。。",url:'cccccccccccc'
				},
				{
					newTitle:"魔兽世界成进军世界竞技大赛门票",descrption:"魔兽世界成进军世界竞技大赛门票 详细。。。。。。。",url:'cccccccccccc'
				},
				{
					newTitle:"魔兽世界成进军世界竞技大赛门票",descrption:"魔兽世界成进军世界竞技大赛门票 详细。。。。。。。",url:'cccccccccccc'
				}
				],
				boardList:[]
			}
		},
		methods:{
			doSomethingChange(param){
				console.log("====================="+param)
			}
		}
	}
</script>

<style >
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
