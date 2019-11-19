/*
 * @Author: j
 * @Date: 2019-11-19 10:44:26 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-19 16:44:03
 * @fireName 数据概况
 */

<template>
    <div class="container">
        <div class="title">数据概况</div>
        <div class="updata">
            <div>最近数据更新时间2019-11-07 04:17:48</div>
            <el-button type="primary" :loading="true">更新中</el-button>
        </div>
        <!-- 数据表格 -->
        <el-table border stripe :data="videoDataRealtime" class="data-table">
            <el-table-column label="数据" prop="name"></el-table-column>
            <el-table-column label="总计" prop="all"></el-table-column>
            <el-table-column label="昨日" prop="yesterday"></el-table-column>
            <el-table-column label="上周" prop="lastWeek"></el-table-column>
            <el-table-column label="上月" prop="lastMonth"></el-table-column>
        </el-table>
        <line-chat></line-chat>
    </div>
</template>

<script>
import LineChat from '../../../components/LineChart'
export default {
    data() {
        return {
            videoDataRealtime: [
                {
                    name: '任务数',
                    all: '121',
                    yesterday: '6',
                    lastWeek: '28',
                    lastMonth: '100'
                },
                {
                    name: '播放数',
                    all: '121',
                    yesterday: '6',
                    lastWeek: '28',
                    lastMonth: '100'
                },
                {
                    name: '点赞数',
                    all: '121',
                    yesterday: '6',
                    lastWeek: '28',
                    lastMonth: '100'
                },
                {
                    name: '评论数',
                    all: '121',
                    yesterday: '6',
                    lastWeek: '28',
                    lastMonth: '100'
                },
            ]
        }
    },
    components: {
        LineChat
    }
}
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    background: #fff;
    // margin: 30px;
    padding: 30px;
    .title {
        font-size: 16px;
        font-weight: bold;
        color: #000;
        margin-bottom: 30px;
    }
    .updata {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        button {
            margin-left: 20px;
        }
    }
    .data-table {
        margin-top: 30px;
        /deep/th {
            text-align: center;
            color: #000;
        }
        /deep/td {
            color: #333;
        }
    }
}
</style>