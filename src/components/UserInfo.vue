<template>
    <div id="userInfo" v-if="isShow">
        <div class="user-name">
            <img :src="userInfo.avatar" alt="头像">
            <div>
                <span class="name">{{ userInfo.userName }}</span>
                <div class="vip">
                    <i class="iconfont iconhuiyuan"></i>
                    <span>{{ userInfo.vipLevel }}</span>
                </div>
            </div>
        </div>
        <ul class="menu-list">
            <li>
                <i class="iconfont iconwode-"></i>
                <span>我的资料</span>
            </li>
            <li>
                <i class="iconfont iconliuliang"></i>
                <span>我的流量</span>
            </li>
            <li>
                <i class="iconfont iconhuiyuan1"></i>
                <span>我的会员</span>
            </li>
        </ul>
        <div class="logout">
            <i class="iconfont iconguanji"></i>
            <span>退出登录</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import url("../../public/css/common.less");
    #userInfo {
        position: absolute;
        width: 320px;
        height: 355px;
        box-shadow: 0px 4px 22px 0px #cdcfe1;
        border-radius: 5px;
        overflow: hidden;
        background: #fff;
        top: 65px;
        right: 3%;
        .user-name {
            display: flex;
            align-items: center;
            width: 100%;
            height: 130px;
            padding: 0 25px;
            background: linear-gradient(to right, #2442fd, #2478fd);
            img {
                width: 80px;
                height: 80px;
                margin-right: 15px;
            }
            > div {
                height: 80px;
                color: #fff;
                .name {
                    display: block;
                    font-weight: 700;
                    margin-top: 10px;
                }
                .vip {
                    width: 110px;
                    height: 27px;
                    line-height: 27px;
                    margin-top: 25px;
                    background: @vipColor;
                    border-radius: 27px;
                    color: #635314;
                    text-align: center;
                    i {
                        margin-right: 3px;
                        
                    }
                }
            }
        }
        .menu-list {
            width: 100%;
            li {
                height: 56px;
                line-height: 56px;
                padding: 0 25px;
                color: #9b9b9b;
                cursor: pointer;
                span {
                    font-weight: bold;
                }
                i {
                    margin-right: 10px;
                }
                &:hover {
                    color: @subColor;
                    background: #f8f9fa;
                }
            }
        }
        .logout {
            line-height: 56px;
            text-align: center;
            color: #9b9b9b;
            background: #f6f6f6;
            cursor: pointer;
            span {
                font-weight: bold;
            }
            i {
                margin-right: 10px;
            }
            &:hover {
                color: @subColor;
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        userInfo: {
            type: Object,
            default() {
                return {
                    avatar: require("../../public/images/avatar.png"),
                    userName: '51335338',
                    vipLevel: '高级会员',
                }
            }
        },
        isShow: {
            type: Boolean,
            default: false
        }
    }
}
</script>