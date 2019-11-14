<template>
  <transition>
    <div class="list-container">
      <div class="list" v-for="(item,index) in menuList" :key="item.id">
        <div>
          <div class="list-name" @click="showChild(index, item)">
            <i :class="item.icon" class="iconfont"></i>
            {{ item.name }}
          </div>
          <div class="child-list" v-if="item.chindern.length != 0">
            <list-menu v-show="item.chindernShow" :list="item.chindern"></list-menu>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    chindernShow: Boolean
  },
  methods: {
    /**
     * 显示子集
     * e 当前列表下标
     */
    showChild(index, item) {
      // console.log(item);
      var isShow = this.menuList[index].chindernShow;
      this.menuList.forEach(function(item) {
        item.chindernShow = false;
      });
      this.menuList[index].chindernShow = !isShow;
    }
  }
  // computed() {
  //     return this.list
  // }
};
</script>

<style lang="less" scoped>
.list-container {
  .list {
    line-height: 46px;
    font-size: 14px;
    color: #8c8f9a;
    margin: 0 10px;
    .list-name {
      padding: 0 20px;
      border-radius: 5px;
      cursor: pointer;
      i {
        margin-right: 5px;
      }
      &:hover {
        color: #fff;
      }
    }
    .child-list {
      margin-left: 20px;
    }
  }
}
.v-enter,
.v-leave-to {
//   opacity: 0;
  height: 100px;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
</style>