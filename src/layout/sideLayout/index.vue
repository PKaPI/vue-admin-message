<template>
      <el-container :class="{hideSideBar:sideBar.isFold}">
        <div id="side-nav">
          <SideBar :nav-data="navData"/>
        </div>
        <el-container class="side-left">
          <el-header><TopBar :userData="userData"/></el-header>
          <el-main>
            <div class="content">
            <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
</template>
<script>
import SideBar from "./sideBar";
import TopBar from "./topBar";
import { mapState } from "vuex";
export default {
  name: "MainTpl",
  components: { SideBar, TopBar },
  data() {
    return {
      msg: "layout",
      userData: {
        name: "admin",
        phone: "13099999999"
      }
    };
  },
  mounted() {
    this.$store.dispatch("getNavData");
  },
  beforeUpdate() {
    console.log(this.navData, "data");
  },
  methods: {
    redirect() {
      console.log(1213);
    }
  },
  computed: mapState({
    navData: state => state.global.navData,
    sideBar: state => state.global.sideBar
  })
};
</script>
<style lang="scss" src='./style.scss' scope></style>
