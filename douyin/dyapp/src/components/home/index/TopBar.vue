<template>
  <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-live"></span>
    </div>
    <div class="middle">
      <div class="item" @click="changeTopBar(0)">
        <span :class="topIndex == 0 ? 'active' : ''">同城</span>
      </div>
      <div class="item" @click="changeTopBar(1)">
        <span :class="topIndex == 1 ? 'active' : ''">关注</span>
      </div>
      <div class="item" @click="changeTopBar(2)">
        <span :class="topIndex == 2 ? 'active' : ''">推荐</span>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      topIndex: 0,
    };
  },
  methods: {
    changeTopBar(index) {
      this.topIndex = index;
    },
  },
};
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  /* background: black; */
}

.iconfont {
  font-size: 24px;
}

.left,
.right {
  width: 20%;
}
.left {
  text-align: left;
}
.right {
  text-align: right;
}
.middle {
  width: 60%;
  display: flex;
  justify-self: center;
}

.middle .item {
  flex: 1;
  text-align: center;
}

.middle .item .span {
  color: wheat;
}

.middle .item .active {
  color: black;
  border-bottom: 3px solid black;
}
</style>