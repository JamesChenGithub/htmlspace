<template>
  <div class="tab-bar">
    <div class="item" @click="changeTab(0)">
      <router-link to="/index" tag="span" :class="tabIndex == 0 ? 'active' : ''">首页</router-link>
    </div>
    <div class="item" @click="changeTab(1)">
      <router-link to="/follow" tag="span" :class="tabIndex == 1 ? 'active' : ''">熟人</router-link>
    </div>
    <div class="item" @click="changeTab(2)">
      <router-link to="/index" tag="span" :class="tabIndex == 2 ? 'active' : ''"
        ><span class="iconfont icon-tianjia"></span></router-link>
    </div>
    <div class="item" @click="changeTab(3)">
      <router-link to="/index" tag="span" :class="tabIndex == 3 ? 'active' : ''">消息</router-link>
    </div>
    <div class="item" @click="changeTab(4)">
      <router-link to="/index" tag="span" :class="tabIndex == 4 ? 'active' : ''">我</router-link>
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


</style>