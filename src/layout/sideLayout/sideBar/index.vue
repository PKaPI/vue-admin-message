<template>
    <div class="side_wrap">
      <div class="logo_wrap">好学科技</div>
      <el-menu
      :default-active="activeIndex"
      :default-openeds="openeds"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      class="side-nav">
       <side-item v-for="nav in navData" :key="nav.name" :nav="nav"/>
    </el-menu>
    </div>
    
</template>
<script>
import SideItem from "./sideItem";
import { mapState } from "vuex";
export default {
  components: { SideItem },
  props: ["navData"],
  mounted() {
    console.log('222',this.navData)
  },
  computed: mapState({
    isCollapse: state => state.global.sideBar.isFold
  }),
  data() {
    let curPath = this.$router.currentRoute.path;
    return {
      activeIndex: curPath,
      openeds: curPath.match(/\/\w*/g)
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.side_wrap{
  .logo_wrap{
    height: 60px;
    line-height: 60px;
    background: rgb(50, 65, 87);
    color:#ffffff;
  }
}
.side-nav {
  height: 100vh;
  overflow-y: auto;
  .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 40px !important;
    line-height: 40px !important;
  }
}
</style>



