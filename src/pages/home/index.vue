<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  components:{
  
  },
  data () {
    return {
      msg: 'Hello World!home',
      barOption,
      lineOption,
      pieOption
    }
  },
methods:{
  test(option){
   console.log(option);
   //可添加事件
  }
}
}
</script>
<style src="./style.less" lang="less" scope></style>

