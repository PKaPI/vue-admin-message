<template>
  <div class="wrapper">
    <div class="main-layout">
      <section class="side-layout">
        <v-sidebar></v-sidebar>
      </section>
      <section class="content-layout" :class="{'content-collapse':collapse}">
        <v-head></v-head>
        <v-tags></v-tags>
        <div class="content">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import vHead from "./topBar";
import vSidebar from "./sideBar";
import vTags from "./tags";
import { mapState } from "vuex";
import { API } from "@/api";

export default {
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags
  },
  mounted() {
    console.log(this.$store);
    this.$store.dispatch("getNavData", { name: "papa" });
  },
  created() {
    this.$root.Bus.$on("collapse", msg => {
      this.collapse = msg;
    });
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    this.$root.Bus.$on("tags", msg => {
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  },
  computed: mapState({
    navData: state => state.global.navData,
    sideBar: state => state.global.sideBar
  })
};
</script>
<style lang="scss" src='./style.scss' scope></style>

