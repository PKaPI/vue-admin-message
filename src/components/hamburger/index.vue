<template>
 <span class="hamburger">
    <i class="iconfont" @click="toggle"  :class="{'el-icon-s-fold':isFold,'el-icon-s-unfold':!isFold}"></i>
   </span>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isFold: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang='scss' scoped>
.hamburger{
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  font-size: 30px;
  i{
    color:#fff;
  }
}

</style>
