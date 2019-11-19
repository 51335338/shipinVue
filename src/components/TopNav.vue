<template>
    <div class="nav">
        <i class="nav-left iconfont iconcaidan" @click="leftNavShow"></i>
        <div class="nav-right">
            <div class="user-info">
                <div class="user" @click=" ()=>{this.userInfoBoxShow = !this.userInfoBoxShow} ">
                    <img class="avatar" src="../..//public/images/avatar.png">
                    <span class="user-name">51335338</span>
                    <i class="iconfont iconxiajiantou-copy"></i>
                </div>
                <user-info :userInfo="userInfo" :isShow="userInfoBoxShow"></user-info>
                <i class="iconfont iconwenhao"></i>
                <router-link to="./HelloWorld.vue">
                    <i class="iconfont icontuandui"></i>
                </router-link>
            </div>
            <div class="help"></div>
            <div class="teams"></div>
        </div>
    </div>
</template>
<script>
import userInfo from "./UserInfo";

export default {
    data() {
        return {
            userInfo: {
                avatar: require("../../public/images/avatar.png"),
                userName: '51335338',
                vipLevel: '高级会员',
            },
            userInfoBoxShow: false,
            isLeftNavShow: true
        }
    },
    methods: {
        leftNavShow() {
            this.isLeftNavShow = !this.isLeftNavShow
            this.$emit('navShow', this.isLeftNavShow)
        }
    },
    components: {
        userInfo
    },
    created() {
        // 屏幕尺寸超过1100时，左侧导航栏边窄
        if(document.body.clientWidth < 1100) {
            this.isLeftNavShow = false;
            this.$emit('navShow', false)
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../../public/css/common.less");
.nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background: #fff;
    padding: 0 23px 0 30px;

    .nav-left {
        line-height: 60px;
        cursor: pointer;
        color: #666;
    }

    .user-info {
        display: flex;
        width: 30%;
        height: 60px;
        font-size: 16px;
        align-items: center;
        .user {
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
            .avatar {
                width: 35px;
                height: 35px;
            }
            .user-name {
                margin: 0 15px 0 10px;
            }
        }
        .iconwenhao,
        .icontuandui {
            font-size: 20px;
            color: #9b9b9b;
            margin: 0 15px;
            cursor: pointer;
            &:hover {
                color: @subColor
            }
        }
    }

    
}
</style>