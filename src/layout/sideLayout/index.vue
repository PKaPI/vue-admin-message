<template>
      <el-container :class="{hideSideBar:sideBar.isFold}">
        <div id="side-nav">
          <SideBar :nav-data="navData.sideNav"/>
        </div>
        <el-container class="side-left">
          <el-header><TopBar :userData="userData"/></el-header>
          <el-main>
            <div class="content">
            <router-view></router-view>
            </div>
          </el-main>
          <el-footer>
            <Footer/>
          </el-footer>
        </el-container>
      </el-container>
</template>
<script>
import Footer from "@/components/footer";
import SideBar from "./sideBar";
import TopBar from "./topBar";
import { mapState } from "vuex";
export default {
  name: "MainTpl",
  components: { Footer, SideBar, TopBar },
  data() {
    return {
      msg: "layout",
      userData: {
        name: "dtux",
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

<style lang="scss">
.el-header {
  background-color: #1a76d2;
  line-height: 60px;
}
.el-menu {
  border-right: none !important;
}
.el-main {
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  .content {
    background: #fff;
    min-height: 600px;
  }
}
.el-footer {
  background: #f0f2f5;
   padding:0px !important;
}
.side-left {
  margin-left: 200px;
  height: 800px;
}
#side-nav{
  color: #333;
  position: fixed;
  transition: width 0.35s;
  left: 0px;
  text-align: left;
  overflow: hidden;
  width:200px;
}
.hideSideBar {
  .side-left {
    margin-left: 48px;
  }
  .el-menu--collapse,#side-nav {
    width: 48px;
    overflow: hidden;
  }
  .el-submenu__title,.sub-item {
    padding-left: 16px !important;
  }
}
</style>
