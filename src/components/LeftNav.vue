/** 
 * 右侧导航栏， 非递归，只支持三级导航栏
 */
<template>
    <div class="nav-only" :class="isShow ? 'w240' : 'w64'">
        <h1 class="logo">
            <img :src="isShow ? logoImgLg : logoImgSm" alt="logo"/>
        </h1>
        <el-menu
            unique-opened
            router
            background-color="#1a1d27"
            text-color="#8c8f9a"
            active-text-color="#fff"
            default-active="/"
            :collapse="!isShow"
        >
            <el-menu-item index="/">
                <i class="iconfont iconshouye-"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu :index="firstItem.id" v-for="firstItem in menuList" :key="firstItem.id">
                <template slot="title">
                    <i class="iconfont" :class="firstItem.icon"></i>
                    <span slot="title">{{firstItem.name}}</span>
                </template>
                <div v-for="secondItem in firstItem.chindern" :key="secondItem.id">
                    <el-menu-item
                        v-if="secondItem.chindern instanceof Array && secondItem.chindern.length == 0"
                        :index="secondItem.path"
                    >{{secondItem.name}}</el-menu-item>
                    <el-submenu v-else :index="secondItem.id">
                        <span slot="title">{{secondItem.name}}</span>
                        <el-menu-item :index="thirdItem.path" v-for="thirdItem in secondItem.chindern" :key="thirdItem.id">
                            {{thirdItem.name}}
                        </el-menu-item>
                    </el-submenu>
                </div>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 大logo
            logoImgLg: this._global.logoImgLg,
            // 小logo
            logoImgSm: this._global.logoImgSm,
            // 导航栏
            menuList: [
                {
                    id: "2",
                    name: "内容发布",
                    icon: "iconshipin-",
                    path: "",
                    chindernShow: false,
                    chindern: [
                        {
                            id: "2-1",
                            name: "账号管理",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: [
                                {
                                    id: "2-1-1",
                                    name: "添加账号",
                                    icon: "",
                                    path: "/addPlatform",
                                    chindernShow: false,
                                    chindern: []
                                },
                                {
                                    id: "2-1-2",
                                    name: "分组管理",
                                    icon: "",
                                    path: "/platformGroup",
                                    chindernShow: false,
                                    chindern: []
                                },
                                {
                                    id: "2-1-3",
                                    name: "通知名单",
                                    icon: "",
                                    path: "/message",
                                    chindernShow: false,
                                    chindern: []
                                }
                            ]
                        },
                        {
                            id: "2-2",
                            name: "视频发布",
                            icon: "",
                            path: "/video",
                            chindernShow: false,
                            chindern: []
                        },
                        {
                            id: "2-3",
                            name: "发布情况",
                            icon: "",
                            path: "/taskList",
                            chindernShow: false,
                            chindern: []
                        },
                        {
                            id: "2-4",
                            name: "视频库",
                            icon: "",
                            path: "/videoHistory",
                            chindernShow: false,
                            chindern: []
                        }
                    ]
                },
                {
                    id: "3",
                    name: "数据统计",
                    icon: "iconzixun-",
                    path: "",
                    chindernShow: false,
                    chindern: [
                        {
                            id: "3-1",
                            name: "视频统计",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: [
                                {
                                    id: "3-1-1",
                                    name: "数据概况",
                                    icon: "",
                                    path: "/overview",
                                    chindernShow: false,
                                    chindern: []
                                },
                                {
                                    id: "3-1-2",
                                    name: "视频分析",
                                    icon: "",
                                    path: "",
                                    chindernShow: false,
                                    chindern: []
                                },
                                {
                                    id: "3-1-3",
                                    name: "账号分析",
                                    icon: "",
                                    path: "",
                                    chindernShow: false,
                                    chindern: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "4",
                    name: "个人中心",
                    icon: "iconwode-",
                    path: "",
                    chindernShow: false,
                    chindern: [
                        {
                            id: "4-1",
                            name: "我的资料",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: []
                        },
                        {
                            id: "4-2",
                            name: "我的流量",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: []
                        },
                        {
                            id: "4-3",
                            name: "我的会员",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: []
                        }
                    ]
                },
                {
                    id: "5",
                    name: "团队管理",
                    icon: "icontuandui",
                    path: "",
                    chindernShow: false,
                    chindern: [
                        {
                            id: "5-1",
                            name: "账号管理",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: []
                        },
                        {
                            id: "5-2",
                            name: "成员管理",
                            icon: "",
                            path: "",
                            chindernShow: false,
                            chindern: []
                        }
                    ]
                }
            ],
            // isShow: true
        };
    },
    props: {
        isCollapse: Boolean
    },
    methods: {
    },
    components: {

    },
    computed: {
        isShow() {
            return this.isCollapse
        },
    }
};
</script>

<style lang="less">
.nav-only {
    height: 100%;
    background: #1a1d27;
    transition: all .5s;
    .logo {
        display: flex;
        width: 100%;
        height: 60px;
        padding: 0 15px;
        align-items: center;
        cursor: pointer;
        img {
            // width: 160px;
            // height: 35px;
            max-width: 100%;
            max-height: 100%;
        }
    }
    & > .list-container > .list .list-name:hover {
        background: #3a3d51;
    }
    .el-menu {
        border: none;
    }
    .iconfont {
        margin-right: 10px;
    }
}
.w240 {
    width: 240px;
}
.w64 {
    width: 64px;
}
</style>