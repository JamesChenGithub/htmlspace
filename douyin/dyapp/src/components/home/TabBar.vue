<template>
  <div class="tab-bar">
    <div class="item"><span class="active">首页</span></div>
    <div class="item"><span>熟人</span></div>
    <div class="item"><span>+</span></div>
    <div class="item"><span>消息</span></div>
    <div class="item"><span>我</span></div>
  </div>
</template>

<script>
export default {};
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
  justify-items:center;
}

.tab-bar .item {
    flex : 1;
    text-align: center;
}

.tab-bar .item .active {
    color : white;
}
</style>