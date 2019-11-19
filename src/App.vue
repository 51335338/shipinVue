<template>
    <div id="app">
        <div id="leftNav">
            <left-nav :isCollapse="leftIsShow"></left-nav>
        </div>
        <div id="topNav">
            <top-nav @navShow="leftNavShow"></top-nav>
            <div class="wrap">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "./components/TopNav";
import leftNav from "./components/LeftNav";

export default {
    data() {
        return {
            leftIsShow: true,
        }
    },
    methods: {
        leftNavShow(val) {
            this.leftIsShow = val
        }
    },
    components: {
        topNav,
        leftNav
    }
};
</script>

<style lang="less">
// @import url("./index.less");
body {
    height: 100%;
    background: #f0f0f0;
}
#app {
    display: flex;
    height: 100%;
    #leftNav {
        flex: none;
    }
    #topNav {
        width: 100%;
    }
    .wrap {
        padding: 30px
    }
}
</style>
