<!-- 右侧数据面板 -->
<template>
  <div class="right-panel">
    <!-- 各行业收入 -->
    <industryRevenue />
    <!-- 接待游客人数TOP5 -->
    <top5Tourists />
    <!-- 鹤壁市实时热词 -->
    <realTimeHotWords />
  </div>
</template>

<script setup lang="ts">
import industryRevenue from './rightPanel/industryRevenue.vue'
import top5Tourists from './rightPanel/top5Tourists.vue'
import realTimeHotWords from './rightPanel/realTimeHotWords.vue'
</script>

<style lang="scss" scoped>
.right-panel {
  position: absolute;
  width: 500px;
  height: 100%;
  right: 0;
  top: 0;
  display: grid;
  gap: 24px;
  padding: 111px 0 24px 0;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
}
</style>
