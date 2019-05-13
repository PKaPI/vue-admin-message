<template>
  <div class="clearfix">
    <Hamburger  :toggle=toggle :is-fold="isFold"/>
    <div class="fr">
      <el-dropdown>
          <span class="el-dropdown-link">
            <i class="iconfont  icon-guanliyuan2"/>
           {{userData.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="loginOut">退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>

  </div>
</template>

<script>
import Hamburger from '@/components/hamburger'
import { mapState } from 'vuex'
export default {
  props: ["userData"],
  components:{
   Hamburger
  },
  computed: mapState({
    isFold: state => state.global.sideBar.isFold
  }),
  mounted(){
  },
  methods:{
    toggle(){
     this.$store.dispatch('toggleSideBar');
    },
     loginOut() {
      this.$router.push("/login");
    },
  }
}
</script>

<style lang="scss">
.el-dropdown {
  color: #fff;
  cursor: pointer;
  .iconfont {
    font-size: 18px;
  }
}
</style>
