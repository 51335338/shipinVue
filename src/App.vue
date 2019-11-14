<template>
  <div id="app">
    <div id="leftNav">
      <left-nav></left-nav>
    </div>
    <div id="topNav">
      <top-nav></top-nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import topNav from "./components/TopNav";
import leftNav from "./components/LeftNav";

export default {
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
}
</style>
