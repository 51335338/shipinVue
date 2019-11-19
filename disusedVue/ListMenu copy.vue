/**
 * 右侧菜单子组件，支持递归（菜单收起时会有bug）
 */
<template>
    <div class="nav-menu">
        <div v-for="(item,index) in menuList" :key="index">
            <el-menu-item v-if="item.chindern.length == 0" :index="item.path" >
                <template slot="title">
                    <i class="iconfont" :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
            </el-menu-item>
            <el-submenu v-else :index="item.id">
                <template slot="title">
                    <i class="iconfont" :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
                <list-menu :list="item.chindern"></list-menu>
            </el-submenu>
        </div>
    </div>
</template>
<script>
export default {
    name: "list-menu",
    data() {
        return {
            menuList: this.list
        };
    },
    props: {
        list: Array,
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
    .nav-menu {
        .iconfont {
            margin-right: 15px
        }
    }
</style>