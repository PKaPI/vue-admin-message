<template>
    <el-container>
      <el-header><TopBar :nav-data="navData.topNav" :userData="userData"/></el-header>
      <el-container style="height:800px">
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
import Footer from '@/components/footer'
import TopBar from './topBar'
import { mapState } from 'vuex'
export default {
  name: "MainTpl",
  components:{TopBar,Footer},
  data() {
    return {
      msg: "layout",
      userData:{
        name:'dtux',
        phone:'13099999999'
      }
    };
  },
  mounted() {
      this.$store.dispatch('getNavData');
  },
  beforeUpdate(){
    console.log(this.navData,'data');
  },
  methods: {
    redirect(){
      console.log(1213);
    }
  },
  computed: mapState({
    navData: state => state.global.navData
  })
};
</script>

<style lang="scss">
  .el-header {
    background-color: #1A76D2;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-main {
    background-color: #f0f2f5;
    color: #333;
    text-align: center;
    .content{
      background: #fff;
      min-height:600px;

    }
  }
  .el-footer{
    background: #f0f2f5;
    padding:0px !important;
  }
</style>
