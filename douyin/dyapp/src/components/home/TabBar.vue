<template>
  <div class="tab-bar">
    <div class="item" @click="changeTab(0)">
      <span :class="tabIndex == 0 ? 'active' : ''">首页</span>
    </div>
    <div class="item" @click="changeTab(1)">
      <span :class="tabIndex == 1 ? 'active' : ''">熟人</span>
    </div>
    <div class="item" @click="changeTab(2)">
      <span :class="tabIndex == 2 ? 'active' : ''"
        ><img class="dy-btn" src="../../static/img/dy-btn.png" alt=""
      /></span>
    </div>
    <div class="item" @click="changeTab(3)">
      <span :class="tabIndex == 3 ? 'active' : ''">消息</span>
    </div>
    <div class="item" @click="changeTab(4)">
      <span :class="tabIndex == 4 ? 'active' : ''">我</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
      console.log(this.tabIndex);
    },
  },
};
</script>

<style scoped>
.tab-bar {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: black;
  position: fixed;
  bottom: 0px;
  left: 0px;
  color: #808080;
  font-size: 16px;
  display: flex;
  justify-items: center;
}

.tab-bar .item {
  flex: 1;
  text-align: center;
}

.tab-bar .item .active {
  color: white;
}

.tab-bar .item span {
  padding: 10px 0;
}

.tab-bar .item .dy-ttn {
  width: 30px;
  height: 30px;
  padding: 10px;
}
</style>