/*
 * @Author: j
 * @Date: 2019-11-19 11:44:04 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-19 16:50:26
 * @filename echat 折线图
 */

<template>
    <div class="e-chat">
        <!-- 顶部筛选条件 -->
        <div class="setting">
            <ul class="left">
                <li class="active">播放</li>
                <li>点赞</li>
                <li>评论</li>
                <li>分享</li>
                <li>收藏</li>
            </ul>
            <div class="right">
                <ul>
                    <li class="active">7天</li>
                    <li>15天</li>
                    <li>30天</li>
                </ul>
                <el-date-picker class="data-screening" type="date" placeholder="选择日期"></el-date-picker>
                <el-button type="primary">搜索</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'line-chat',
}
</script>

<style lang="less" scoped>
.e-chat {
    width: 100%;
    .setting {
        display: flex;
        height: 70px;
        align-items: center;
        justify-content: space-between;
        ul {
            display: flex;
            align-items: center;
            flex: none;
            li {
                color: #333;
                // border: 1px solid red;
                border-radius: 3px;
                padding: 8px 10px;
                margin-right: 10px;
                cursor: pointer;
            }
            .active {
                border: 1px solid #F26F20;
                color: #F26F20;
            }
        }
        .right {
            display: flex;
            .data-screening {
                min-width: 125px;
                margin-right: 25px
            }
        }
    }
}
</style>