<template>
    <div class="sidebar">
        <div class="logo_wrap" :class="{'collapse':collapse}">后端管理系统</div>
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-s-home',
                        index: 'home',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-s-marketing',
                        index: 'marketing',
                        title: '数据看板'
                    },
                    {
                        icon: 'el-icon-s-data',
                        index: 'dataAnalysise',
                        title: '数据分析'
                    },
                    {
                        icon: 'el-icon-s-custom',
                        index: 'custom',
                        title: '客户管理',
                        subs: [
                            {
                                index: 'form',
                                title: '基本表单'
                            },
                            {
                                index: '3-2',
                                title: '三级菜单',
                                subs: [
                                    {
                                        index: 'editor',
                                        title: '富文本编辑器'
                                    },
                                    {
                                        index: 'markdown',
                                        title: 'markdown编辑器'
                                    },
                                ]
                            },
                            {
                                index: 'upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-suitcase',
                        index: 'studentMessage',
                        title: '学生档案'
                    },
                    {
                        icon: 'el-icon-collection-tag',
                        index: 'tagMessage',
                        title: '标签管理'
                    },
                    {
                        icon: 'el-icon-user-solid',
                        index: 'authMessage',
                        title: '权限管理',
                        subs: [
                            {
                                index: 'drag',
                                title: '拖拽列表',
                            },
                            {
                                index: 'dialog',
                                title: '拖拽弹框',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-document-copy',
                        index: 'operationLog',
                        title: '操作日志'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            this.$root.Bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom:0;
        background: #f0f2f5;
        box-shadow: 4px 0 6px rgba(0,21,41,.35);
        z-index: 10;
        overflow-y: scroll;
    }
    .logo_wrap{
        height: 70px;
        padding-left: 24px;
        overflow: hidden;
        box-sizing: border-box; 
        line-height: 70px;
        background: #002140;
        transition: all .3s;
        font-weight: 600;
        width: 250px;
        font-size: 20px;
        color:#fff;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all .3s ease-in-out;
    }
    .collapse{
        width: 64px;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
