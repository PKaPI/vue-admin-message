<template>
        <el-menu-item  v-if="!nav.children.length" :index="nav.permissionUrl" class="sub-item"
         @click="redirec(nav.permissionUrl)">
                 <i class="iconfont" :class="[`icon-${nav.permissionIcon}`]"></i>
                 <span>{{nav.permissionName}}</span>
        </el-menu-item>
       <el-submenu v-else  :index="nav.permissionUrl">
            <template slot="title">
                <i class="iconfont" :class="[`icon-${nav.permissionIcon}`]"></i>
                <span>{{nav.permissionName}}</span>
            </template>
              <template v-for="child in nav.children">
                    <el-menu-item :key="child.permissionUrl"  :index="child.permissionUrl"
                    @click="redirec(child.permissionUrl)">
                      <i class="iconfont" :class="[`icon-${child.permissionIcon}`]"></i>
                      <span>{{child.permissionName}}</span>
                    </el-menu-item>
              </template>
      </el-submenu>
</template>

<script>
export default {
  name: 'SideItem',
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
