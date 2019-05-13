<template>
    <el-menu
      :default-active="activeIndex"
      :default-openeds="openeds"
      :collapse="isCollapse"
      class="side-nav">
       <side-item v-for="nav in navData" :key="nav.name" :nav="nav"/>
    </el-menu>
</template>
<script>
import SideItem from "./sideItem";
import { mapState } from "vuex";
export default {
  components: { SideItem },
  props: ["navData"],
  mounted() {
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
.side-nav {
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



