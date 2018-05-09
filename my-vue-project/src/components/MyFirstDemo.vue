<template>
  <div class="myfirst">
    <h1>{{ msg }}</h1>
  </div>
</template>
 
<script>
export default {
  name: 'myfirst',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  }
}
</script>