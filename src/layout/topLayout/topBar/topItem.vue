<template>
        <el-menu-item  v-if="!nav.children.length" :index="nav.permissionUrl.match(/\/\w*/g)[0]"
         @click="redirec(nav.permissionUrl)">
                 {{nav.permissionName}}
        </el-menu-item>
       <el-submenu v-else  :index="nav.permissionUrl.match(/\/\w*/g)[0]">
            <template slot="title">
               {{nav.permissionName}}
            </template>
              <template v-for="child in nav.children">
                    <el-menu-item :key="child.permissionUrl.match(/\/\w*/g)[0]"  :index="child.permissionUrl"
                     @click="redirec(nav.permissionUrl)">
                     {{child.permissionName}}
                    </el-menu-item>
              </template>
      </el-submenu>
</template>
<script>
export default {
  name: 'TopItem',
  components: {  },
  props: {
    nav: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
     redirec(path){
       if(path){
         this.$router.push(path);
       }else{
         console.log('无效url',path);
       }
    }
  }
}
</script>
<style>

</style>
