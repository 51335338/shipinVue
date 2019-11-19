/**
 * 右侧导航，支持递归，有bug，无法收起
 */
<template>
    <div class="nav-only">
        <h1 class="logo">
            <img :src="logoImg" alt="logo" @click="aaa"/>
        </h1>
        <el-menu
            unique-opened
            router
            background-color="#1a1d27"
            text-color="#8c8f9a"
            active-text-color="#fff"
            default-active="/"
            :collapse="collapse"
        >
            <list-menu :list="this.menuList"></list-menu>
        </el-menu>
    </div>
</template>

<script>
import listMenu from "./ListMenu";
export default {
    data() {
        return {
            logoImg: this._global.logoImg,
            menuList: [
                {
                    id: "1",
                    name: "主页",
                    icon: "iconshouye-",
                    path: "/",
                    chindern: [],
                    chindernShow: false
                },
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
                                    path: "",
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
            collapse: true
        };
    },
    props: {
        isCollapse: Boolean
    },
    methods: {
        aaa() {
            this.collapse = !this.collapse;
            console.log(this.collapse)
        }
    },
    components: {
        listMenu
    },
    // computed: {
    //     isShow() {
    //         return this.isCollapse
    //     }
    // }
};
</script>

<style lang="less">
.nav-only {
    width: 240px;
    height: 100%;
    background: #1a1d27;
    .logo {
        display: flex;
        width: 100%;
        height: 60px;
        padding: 0 15px;
        align-items: center;
        cursor: pointer;
        img {
            width: 160px;
            height: 35px;
        }
    }
    & > .list-container > .list .list-name:hover {
        background: #3a3d51;
    }
    .el-menu {
        border: none;
    }
}
</style>